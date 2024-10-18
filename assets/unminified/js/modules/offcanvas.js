import { store, getContext, getElement, getConfig, withScope } from '@wordpress/interactivity';

const {
    hooks: {
        applyFilters
    }
} = wp;

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
    },
    actions: {
        toggle() {
            const context = getContext();

            if (context.isOpen) {
                actions.hide(context);
            } else {
                actions.show(context);
            }
        },
        show(context = getContext()) {
            if (context.isOpen) {
                return;
            }

            const startEvent = Events.trigger(context.relatedElement, EVENT_SHOW, {
                relatedTarget: getElement().ref
            });

            if (startEvent.defaultPrevented) {
                return;
            }

            const { classes, scroll } = callbacks.getConfig();

            context._backdrop.show();

            if (!scroll) {
                new ScrollBar().hide();
            }

            context.relatedElement.setAttribute('aria-modal', true);
            context.relatedElement.setAttribute('role', 'dialog');
            context.relatedElement.classList.add(classes?.showing);

            callbacks.onShow(context.relatedElement);

            context.isOpen = true;
        },
        hide(context = getContext(), element) {
            if (context.isOpen === false) {
                return;
            }

            const hideEvent = Events.trigger(context.relatedElement, EVENT_HIDE, {
                relatedTarget: element
            });

            if (hideEvent.defaultPrevented) {
                return;
            }

            const { classes } = callbacks.getConfig();

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
            const { classes, scroll, backdrop } = callbacks.getConfig();

            executeAfterTransition(() => {
                if (!scroll || backdrop) {
                    context._focustrap.activate();
                }

                collapsedEl.classList.add(classes?.show);
                collapsedEl.classList.remove(classes?.showing);
                Events.trigger(collapsedEl, EVENT_SHOWN);

            }, collapsedEl, true);
        },
        onHide: (collapsedEl) => {
            const { classes, scroll } = callbacks.getConfig();

            executeAfterTransition(() => {
                collapsedEl.classList.remove(classes?.show, classes?.hiding);
                collapsedEl.removeAttribute('aria-modal');
                collapsedEl.removeAttribute('role');

                if (!scroll) {
                    new ScrollBar().reset();
                }

                Events.trigger(collapsedEl, EVENT_HIDDEN);
            }, collapsedEl, true);
        },
        onInit: () => {
            const { backdrop, keyboard } = callbacks.getConfig();
            const { ref } = getElement();
            const context = getContext();
            const relatedElement = Selector.findOne(`#${ref.getAttribute('aria-controls')}`);
            context.relatedElement = relatedElement;

            const clickCallback = () => {
                if (backdrop === 'static') {
                    Events.trigger(relatedElement, EVENT_HIDE_PREVENTED);
                    return;
                }

                actions.hide(context, 'backdrop');
            }

            context._backdrop = new Backdrop({
                isVisible: Boolean(backdrop),
                isAnimated: true,
                rootElement: relatedElement.parentNode,
                clickCallback: Boolean(backdrop) ? withScope(clickCallback) : null
            });

            context._focustrap = new FocusTrap({ trapElement: relatedElement });

            // Button click dismiss
            Events.on(relatedElement, `click.dismiss${EVENT_KEY}`, `[data-wp-close="${NAME}"]`, function () {
                if (isDisabled(this)) {
                    return;
                }

                withScope(actions.hide(context, this));
            });

            // Escape dismiss
            Events.on(document, `keydown.dismiss${EVENT_KEY}`, ({ key }) => {
                if (key !== ESCAPE_KEY) {
                    return;
                }

                if (keyboard) {
                    withScope(actions.hide(context, ESCAPE_KEY));
                    return;
                }

                Events.trigger(ref, EVENT_HIDE_PREVENTED);
            });

            // Is opened by default?
            if (context.isOpen) {
                context.isOpen = false;
                actions.show(context);
            }
        },
        getConfig: () => {
            const context = getContext();
            const config = { ...state, ...context };

            return applyFilters('wecodeart.interactive.config', config, NAME);
        },
        validateConfig: () => validateConfig(NAME, callbacks.getConfig(), getConfig(NAMESPACE)),
    }
});