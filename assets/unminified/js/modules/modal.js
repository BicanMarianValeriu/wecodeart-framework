import { store, getContext, getElement, getConfig, withScope } from '@wordpress/interactivity';

const {
    hooks: {
        applyFilters
    }
} = wp;

const {
    fn: {
        reflow,
        isRTL,
        isVisible,
        isDisabled,
        executeAfterTransition,
        validateConfig
    },
    Events,
    Backdrop,
    FocusTrap,
    Selector
} = wecodeart;

const NAME = 'modal';
const NAMESPACE = `wecodeart/${NAME}`;
const DATA_KEY = `wp.${NAME}`;
const EVENT_KEY = `.${DATA_KEY}`;
const ESCAPE_KEY = 'Escape';

const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;

const CLASS_NAME_OPEN = 'wp-modal-open';
const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_STATIC = 'wp-modal--static';

const SELECTOR_DIALOG = '.wp-modal__dialog';
const SELECTOR_BODY = '.wp-modal__body';

const { state, actions, callbacks } = store(NAMESPACE, {
    state: {
        current: {},
        get isShown() {
            const { isShown } = state.current;

            return isShown;
        },
    },
    actions: {
        toggle() {
            if (state.isShown) {
                actions.hide(state.current);
            } else {
                actions.show();
            }
        },
        show() {
            if (state.isShown) {
                actions.hide(state.current);
            }

            const context = getContext();

            if (context.isShown || context.isTransitioning) {
                return;
            }

            const { relatedElement } = context;
            const { ref } = getElement();

            const showEvent = Events.trigger(relatedElement, EVENT_SHOW, { relatedElement: ref });

            if (showEvent.defaultPrevented) {
                return;
            }

            context.isShown = true;
            context.isTransitioning = true;

            // this._scrollBar.hide();

            document.body.classList.add(CLASS_NAME_OPEN);
            callbacks.adjustDialog(context);
            context._backdrop.show(withScope(callbacks.onShow));

            state.current = context;
        },
        hide(related) {
            state.current = {};

            const context = related || getContext();
            if (!context.isShown || context.isTransitioning) {
                return;
            }
            const { relatedElement } = context;

            const hideEvent = Events.trigger(relatedElement, EVENT_HIDE);

            if (hideEvent.defaultPrevented) {
                return;
            }

            context.isShown = false;
            context.isTransitioning = true;
            context._focustrap.deactivate();

            relatedElement.classList.remove(CLASS_NAME_SHOW);
            executeAfterTransition(() => callbacks.onHide(context), relatedElement, callbacks.isAnimated(context));
        },
    },
    callbacks: {
        onShow() {
            const context = getContext();
            const { relatedElement } = context;

            relatedElement.style.display = 'block';
            relatedElement.removeAttribute('aria-hidden');
            relatedElement.setAttribute('aria-modal', true);
            relatedElement.setAttribute('role', 'dialog');
            relatedElement.scrollTop = 0;

            const modalBody = Selector.findOne(SELECTOR_BODY, callbacks.getDialog());
            if (modalBody) {
                modalBody.scrollTop = 0;
            }

            reflow(relatedElement);

            relatedElement.classList.add(CLASS_NAME_SHOW);

            const { focus } = callbacks.getConfig();

            const transitionComplete = () => {
                if (focus) {
                    context._focustrap.activate();
                }

                context.isTransitioning = false;
                Events.trigger(relatedElement, EVENT_SHOWN);
            };

            executeAfterTransition(transitionComplete, callbacks.getDialog(), callbacks.isAnimated());
        },
        onHide(related) {
            const context = related || getContext();
            const { relatedElement } = context;

            relatedElement.style.display = 'none';
            relatedElement.setAttribute('aria-hidden', true);
            relatedElement.removeAttribute('aria-modal');
            relatedElement.removeAttribute('role');

            context.isTransitioning = false;

            context._backdrop.hide(() => {
                document.body.classList.remove(CLASS_NAME_OPEN);
                callbacks.resetAdjustments(context);
                // state._scrollBar.reset();
                Events.trigger(relatedElement, EVENT_HIDDEN);
            });
        },
        onResize() {
            const { current: { isShown, isTransitioning } } = state;

            if (isShown && !isTransitioning) {
                callbacks.adjustDialog(state.current);
            }
        },
        onInit() {
            const { backdrop, keyboard } = callbacks.getConfig();
            const { ref } = getElement();
            const context = getContext();
            const relatedElement = Selector.findOne(ref.getAttribute('aria-controls'));
            context.relatedElement = relatedElement;

            context._backdrop = new Backdrop({
                isVisible: Boolean(backdrop),
                isAnimated: callbacks.isAnimated(context),
            });

            context._focustrap = new FocusTrap({ trapElement: relatedElement });

            // Button click dismiss
            Events.on(relatedElement, `click.dismiss${EVENT_KEY}`, `[data-wp-close="${NAME}"]`, function () {
                if (isDisabled(this)) {
                    return;
                }

                actions.hide(context);
            });

            // Backdrop click dismiss
            Events.on(relatedElement, `click.dismiss${EVENT_KEY}`, e => {
                if (relatedElement !== e.target) {
                    return;
                }

                if (backdrop === 'static') {
                    callbacks.triggerBackdropTransition(context);
                    return;
                }

                if (backdrop) {
                    actions.hide(context);
                }
            });

            // Escape dismiss
            Events.on(relatedElement, `keydown.dismiss${EVENT_KEY}`, ({ key }) => {
                if (key !== ESCAPE_KEY) {
                    return;
                }

                if (keyboard) {
                    actions.hide(context);
                    return;
                }

                callbacks.triggerBackdropTransition(context);
            });

            // Focus restorer
            Events.one(relatedElement, EVENT_SHOW, e => {
                if (e.defaultPrevented) {
                    return;
                }

                Events.one(relatedElement, EVENT_HIDDEN, () => {
                    if (isVisible(ref)) {
                        ref.focus();
                    }
                });
            });
        },
        triggerBackdropTransition(context = getContext()) {
            state.current = {};

            const { relatedElement } = context;

            const hideEvent = Events.trigger(relatedElement, EVENT_HIDE_PREVENTED);
            if (hideEvent.defaultPrevented) {
                return;
            }

            const isModalOverflowing = relatedElement.scrollHeight > document.documentElement.clientHeight;
            const initialOverflowY = relatedElement.style.overflowY;

            // return if the following background transition hasn't yet completed
            if (initialOverflowY === 'hidden' || relatedElement.classList.contains(CLASS_NAME_STATIC)) {
                return;
            }

            if (!isModalOverflowing) {
                relatedElement.style.overflowY = 'hidden';
            }

            relatedElement.classList.add(CLASS_NAME_STATIC);

            executeAfterTransition(() => {
                relatedElement.classList.remove(CLASS_NAME_STATIC);
                executeAfterTransition(() => relatedElement.style.overflowY = initialOverflowY, callbacks.getDialog(context));
            }, callbacks.getDialog(context));

            relatedElement.focus();
        },
        isAnimated(context = getContext()) {
            const { relatedElement } = context;

            return relatedElement.classList.contains(CLASS_NAME_FADE);
        },
        getDialog(context = getContext()) {
            const { relatedElement } = context;

            return Selector.findOne(SELECTOR_DIALOG, relatedElement);
        },
        adjustDialog(context = getContext()) {
            const { relatedElement } = context;

            const isModalOverflowing = relatedElement.scrollHeight > document.documentElement.clientHeight;
            const scrollbarWidth = 17; // state._scrollBar.getWidth();
            const isBodyOverflowing = scrollbarWidth > 0;

            if (isBodyOverflowing && !isModalOverflowing) {
                const property = isRTL() ? 'paddingLeft' : 'paddingRight';
                relatedElement.style[property] = `${scrollbarWidth}px`;
            }

            if (!isBodyOverflowing && isModalOverflowing) {
                const property = isRTL() ? 'paddingRight' : 'paddingLeft';
                relatedElement.style[property] = `${scrollbarWidth}px`;
            }
        },
        resetAdjustments(context = getContext()) {
            const { relatedElement } = context;

            relatedElement.style.paddingLeft = '';
            relatedElement.style.paddingRight = '';
        },
        getConfig: () => {
            const context = getContext();
            const config = { ...state, ...context };

            return applyFilters('wecodeart.interactive.config', config, NAME);
        },
        validateConfig: () => validateConfig(NAME, callbacks.getConfig(), getConfig(NAMESPACE)),
    }
});