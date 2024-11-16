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
            return getContext().keyboard || state.keyboard;
        },
        get hasBackdrop() {
            return getContext().backdrop || state.backdrop;
        },
        get allowScroll() {
            return getContext().scroll || state.scroll;
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

            const startEvent = Events.trigger(context.relatedElement, EVENT_SHOW, {
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

            context.relatedElement.setAttribute('aria-modal', true);
            context.relatedElement.setAttribute('role', 'dialog');
            context.relatedElement.classList.add(classes?.showing);

            callbacks.onShow(context.relatedElement);

            context.isOpen = true;
        },
        hide(element) {
            const context = getContext();

            if (context.isOpen === false) {
                return;
            }

            const hideEvent = Events.trigger(context.relatedElement, EVENT_HIDE, {
                relatedTarget: element
            });

            if (hideEvent.defaultPrevented) {
                return;
            }

            const { classes } = state;

            context._focustrap.deactivate();
            context.relatedElement.blur();
            context.relatedElement.classList.add(classes?.hiding);
            context._backdrop.hide();

            callbacks.onHide(context.relatedElement);

            context.isOpen = false;
        },
    },
    callbacks: {
        onShow: (collapsedEl) => {
            const context = getContext();
            const { classes } = state;

            executeAfterTransition(withScope(() => {
                if (!state.allowScroll || state.hasBackdrop) {
                    context._focustrap.activate();
                }

                collapsedEl.classList.add(classes?.show);
                collapsedEl.classList.remove(classes?.showing);
                Events.trigger(collapsedEl, EVENT_SHOWN);

            }), collapsedEl, true);
        },
        onHide: (collapsedEl) => {
            const { classes } = state;

            executeAfterTransition(withScope(() => {
                collapsedEl.classList.remove(classes?.show, classes?.hiding);
                collapsedEl.removeAttribute('aria-modal');
                collapsedEl.removeAttribute('role');

                if (!state.allowScroll) {
                    new ScrollBar().reset();
                }

                Events.trigger(collapsedEl, EVENT_HIDDEN);
            }), collapsedEl, true);
        },
        onInit: () => {
            const { ref } = getElement();
            const context = getContext();
            const relatedElement = Selector.findOne(`#${ref.getAttribute('aria-controls')}`);
            context.relatedElement = relatedElement;

            const clickCallback = () => {
                if (state.hasBackdrop === 'static') {
                    Events.trigger(relatedElement, EVENT_HIDE_PREVENTED);
                    return;
                }

                actions.hide('backdrop');
            }

            context._backdrop = new Backdrop({
                isVisible: Boolean(state.hasBackdrop),
                isAnimated: true,
                rootElement: relatedElement.parentNode,
                clickCallback: Boolean(state.hasBackdrop) ? withScope(clickCallback) : null
            });

            context._focustrap = new FocusTrap({ trapElement: relatedElement });

            // Button click dismiss
            Events.on(relatedElement, `click.dismiss${EVENT_KEY}`, `[data-wp-close="${NAME}"]`, withScope(({ target }) => {
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

                if (state.useKeyboard) {
                    actions.hide(ESCAPE_KEY);
                    return;
                }

                Events.trigger(ref, EVENT_HIDE_PREVENTED);
            }));

            // Is opened by default?
            if (context.isOpen) {
                context.isOpen = false;
                actions.show();
            }
        },
        validateConfig: () => validateConfig(NAME, { ...state, ...getContext() }, getConfig(NAMESPACE)),
    }
});