import { store, getContext, getElement, getConfig, withScope } from '@wordpress/interactivity';

const {
    fn: {
        isDisabled,
        executeAfterTransition,
        validateConfig
    },
    Events,
    Backdrop,
    FocusTrap,
    ScrollBar,
    Selector
} = wecodeart;

const NAME = 'offcanvas';
const NAMESPACE = `wecodeart/${NAME}`;
const DATA_KEY = `wp.${NAME}`;
const EVENT_KEY = `.${DATA_KEY}`;
const ESCAPE_KEY = 'Escape';

const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;

const { state, actions, callbacks } = store(NAMESPACE, {
    state: {
        get useKeyboard() {
            const { keyboard = state.keyboard } = getContext();

            return keyboard;
        },
        get hasBackdrop() {
            const { backdrop = state.backdrop } = getContext();
            
            return backdrop;
        },
        get allowScroll() {
            const { scroll = state.scroll } = getContext();
            
            return scroll;
        }
    },
    actions: {
        toggle() {
            const context = getContext();

            if (context.isOpen) {
                actions.hide();
            } else {
                actions.show();
            }
        },
        show() {
            const context = getContext();

            if (context.isOpen) {
                return;
            }

            const relatedElement = callbacks.getOffcanvas();

            const startEvent = Events.trigger(relatedElement, EVENT_SHOW, {
                relatedTarget: getElement().ref
            });

            if (startEvent.defaultPrevented) {
                return;
            }

            const { classes } = state;

            context._backdrop.show();

            if (!state.allowScroll) {
                new ScrollBar().hide();
            }

            relatedElement.setAttribute('aria-modal', true);
            relatedElement.setAttribute('role', 'dialog');
            relatedElement.classList.add(classes?.showing);

            callbacks.onShow(relatedElement);

            context.isOpen = true;
        },
        hide(element) {
            const context = getContext();

            if (context.isOpen === false) {
                return;
            }

            const relatedElement = callbacks.getOffcanvas();

            const hideEvent = Events.trigger(relatedElement, EVENT_HIDE, {
                relatedTarget: element
            });

            if (hideEvent.defaultPrevented) {
                return;
            }

            const { classes } = state;

            relatedElement.blur();
            relatedElement.classList.add(classes?.hiding);
            context._focustrap.deactivate();
            context._backdrop.hide();

            callbacks.onHide(relatedElement);

            context.isOpen = false;
        },
    },
    callbacks: {
        onShow: (collapsedEl) => {
            const { classes, allowScroll, hasBackdrop } = state;

            executeAfterTransition(withScope(() => {
                if (!allowScroll || hasBackdrop) {
                    getContext()._focustrap.activate();
                }

                collapsedEl.classList.add(classes?.show);
                collapsedEl.classList.remove(classes?.showing);
                Events.trigger(collapsedEl, EVENT_SHOWN);

            }), collapsedEl, true);
        },
        onHide: (collapsedEl) => {
            const { classes, allowScroll } = state;

            executeAfterTransition(withScope(() => {
                collapsedEl.classList.remove(classes?.show, classes?.hiding);
                collapsedEl.removeAttribute('aria-modal');
                collapsedEl.removeAttribute('role');

                if (!allowScroll) {
                    new ScrollBar().reset();
                }

                Events.trigger(collapsedEl, EVENT_HIDDEN);
            }), collapsedEl, true);
        },
        onInit: () => {
            // Setup offcanvas
            callbacks.getOffcanvas();

            const context = getContext();
            // Is opened by default?
            if (context.isOpen) {
                context.isOpen = false;
                actions.show();
            }
        },
        getOffcanvas: () => {
            const context = getContext();

            if (!context.relatedElement) {
                const { ref } = getElement();
                const { hasBackdrop, useKeyboard } = state;
                const offcanvasEl = Selector.findOne(`#${ref.getAttribute('aria-controls')}`);

                // Backdrop dismiss
                const clickCallback = () => {
                    if (hasBackdrop === 'static') {
                        Events.trigger(offcanvasEl, EVENT_HIDE_PREVENTED);
                        return;
                    }

                    actions.hide('backdrop');
                }

                // Button click dismiss
                Events.on(offcanvasEl, `click.dismiss${EVENT_KEY}`, `[data-wp-close="${NAME}"]`, withScope(({ target }) => {
                    if (isDisabled(target)) {
                        return;
                    }

                    actions.hide(target);
                }));

                // Escape dismiss
                Events.on(document, `keydown.dismiss${EVENT_KEY}`, withScope(({ key }) => {
                    if (key !== ESCAPE_KEY) {
                        return;
                    }

                    if (useKeyboard) {
                        actions.hide(ESCAPE_KEY);
                        return;
                    }

                    Events.trigger(ref, EVENT_HIDE_PREVENTED);
                }));

                // Setup context
                context.relatedElement = offcanvasEl;
                context._focustrap = new FocusTrap({ trapElement: offcanvasEl });
                context._backdrop = new Backdrop({
                    isVisible: Boolean(hasBackdrop),
                    isAnimated: true,
                    rootElement: offcanvasEl.parentNode,
                    clickCallback: Boolean(hasBackdrop) ? withScope(clickCallback) : null
                });
            }

            return context.relatedElement;
        },
        validateConfig: () => validateConfig(NAME, { ...state, ...getContext() }, getConfig(NAMESPACE)),
    }
});