import { store, getContext, getElement } from '@wordpress/interactivity';

const { fn: { reflow, executeAfterTransition }, Events } = wecodeart;

const NAME = 'collapse';
const DATA_KEY = `wp.${NAME}`;
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_COLLAPSE = 'collapse';
const CLASS_NAME_COLLAPSING = 'collapsing';

const { state, actions, callbacks } = store('wecodeart/collapse', {
    state: {
        classNames: {
            show: CLASS_NAME_SHOW,
            collapse: CLASS_NAME_COLLAPSE,
            collapsing: CLASS_NAME_COLLAPSING,
        },
        get ariaLabel() {
            const { isOpen, ariaLabel: { expanded, collapsed } } = getContext();
            return Boolean(isOpen) ? expanded : collapsed;
        }
    },
    actions: {
        toggle() {
            const { isOpen } = getContext();
            if (isOpen) {
                actions.hide();
            } else {
                actions.show();
            }
        },
        show(element, context = getContext()) {
            if (context.isAnimating || context.isOpen) {
                return;
            }

            const { ref } = element || getElement();
            const collapsedEl = ref.parentNode.nextSibling;
            const { classNames } = state;

            const startEvent = Events.trigger(collapsedEl, EVENT_SHOW);
            if (startEvent.defaultPrevented) {
                return;
            }

            collapsedEl.classList.remove(classNames.collapse);
            collapsedEl.classList.add(classNames.collapsing);

            const dimension = callbacks.getDimension({ ref });

            collapsedEl.style[dimension] = 0;

            context.isAnimating = true;

            callbacks.onShow(collapsedEl, context);

            const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
            const scrollSize = `scroll${capitalizedDimension}`;

            collapsedEl.style[dimension] = `${collapsedEl[scrollSize]}px`;

            context.isOpen = true;
        },
        hide(element, context = getContext()) {
            if (context.isAnimating || !context.isOpen) {
                return;
            }

            const { ref } = element || getElement();
            const collapsedEl = ref.parentNode.nextSibling;

            const startEvent = Events.trigger(collapsedEl, EVENT_HIDE);
            if (startEvent.defaultPrevented) {
                return;
            }

            const dimension = callbacks.getDimension({ ref });

            collapsedEl.style[dimension] = `${collapsedEl.getBoundingClientRect()[dimension]}px`;
            reflow(collapsedEl);

            const { classNames } = state;

            collapsedEl.classList.add(classNames.collapsing);
            collapsedEl.classList.remove(classNames.collapse, classNames.show);

            context.isAnimating = true;

            collapsedEl.style[dimension] = '';

            callbacks.onHide(collapsedEl, context);

            context.isOpen = false;
        }
    },
    callbacks: {
        onShow(collapsedEl, context) {
            const dimension = callbacks.getDimension({ ref: collapsedEl });

            executeAfterTransition(() => {
                const { classNames } = state;

                context.isAnimating = false;

                collapsedEl.classList.remove(classNames.collapsing);
                collapsedEl.classList.add(classNames.collapse, classNames.show);

                collapsedEl.style[dimension] = '';

                Events.trigger(collapsedEl, EVENT_SHOWN);
            }, collapsedEl, true);
        },
        onHide: (collapsedEl, context) => {
            executeAfterTransition(() => {
                const { classNames } = state;

                context.isAnimating = false;

                collapsedEl.classList.remove(classNames.collapsing);
                collapsedEl.classList.add(classNames.collapse);

                Events.trigger(collapsedEl, EVENT_HIDDEN);
            }, collapsedEl, true);
        },
        getDimension({ ref } = getElement()) {
            const element = ref.closest('[class*=is-style-]');

            return element ? element.classList.contains('is-style-horizontal') ? 'width' : 'height' : 'height';
        }
    }
});