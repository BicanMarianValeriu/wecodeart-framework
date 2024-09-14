import { store, getContext, getElement, getConfig } from '@wordpress/interactivity';

const { fn: { reflow, executeAfterTransition }, Events, Selector } = wecodeart;

const NAME = 'collapse';
const NAMESPACE = `wecodeart/${NAME}`;
const DATA_KEY = `wp.${NAME}`;
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;

const { state, actions, callbacks } = store(NAMESPACE, {
    state: {
        get ariaLabel() {
            const { ariaLabel: { expanded: ariaExpanded, collapsed: ariaCollapsed } = {} } = getConfig();
            const { isOpen, ariaLabel: { expanded = ariaExpanded, collapsed = ariaCollapsed } = {} } = getContext();

            return Boolean(isOpen) ? expanded : collapsed;
        },
        get isOpened() {
            const { isAnimating = false, isOpen } = getContext();

            return (isAnimating || isOpen);
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
        show() {
            if (state.isOpened) {
                return;
            }

            const { ref } = getElement();
            const collapsedEl = Selector.findOne(`#${ref.getAttribute('aria-controls')}`);

            const startEvent = Events.trigger(collapsedEl, EVENT_SHOW);
            if (startEvent.defaultPrevented) {
                return;
            }

            const { classNames } = getConfig();
            const context = getContext();

            collapsedEl.classList.remove(classNames?.collapse);
            collapsedEl.classList.add(classNames?.collapsing);

            const dimension = callbacks.getDimension();

            collapsedEl.style[dimension] = 0;

            context.isAnimating = true;

            callbacks.onShow(collapsedEl);

            const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
            const scrollSize = `scroll${capitalizedDimension}`;

            collapsedEl.style[dimension] = `${collapsedEl[scrollSize]}px`;

            context.isOpen = true;
        },
        hide() {
            if (state.isOpened === false) {
                return;
            }

            const { ref } = getElement();
            const collapsedEl = Selector.findOne(`#${ref.getAttribute('aria-controls')}`);

            const startEvent = Events.trigger(collapsedEl, EVENT_HIDE);
            if (startEvent.defaultPrevented) {
                return;
            }

            const dimension = callbacks.getDimension();

            collapsedEl.style[dimension] = `${collapsedEl.getBoundingClientRect()[dimension]}px`;
            reflow(collapsedEl);

            const { classNames } = getConfig();
            const context = getContext();

            collapsedEl.classList.add(classNames?.collapsing);
            collapsedEl.classList.remove(classNames?.collapse, classNames?.show);

            context.isAnimating = true;

            collapsedEl.style[dimension] = '';

            callbacks.onHide(collapsedEl);

            context.isOpen = false;
        }
    },
    callbacks: {
        onShow: (collapsedEl) => {
            const context = getContext();
            const { classNames } = getConfig();

            const dimension = callbacks.getDimension();

            executeAfterTransition(() => {
                context.isAnimating = false;

                collapsedEl.classList.remove(classNames?.collapsing);
                collapsedEl.classList.add(classNames?.collapse, classNames?.show);

                collapsedEl.style[dimension] = '';

                Events.trigger(collapsedEl, EVENT_SHOWN);
            }, collapsedEl, true);
        },
        onHide: (collapsedEl) => {
            const context = getContext();
            const { classNames } = getConfig();

            executeAfterTransition(() => {
                context.isAnimating = false;

                collapsedEl.classList.remove(classNames?.collapsing);
                collapsedEl.classList.add(classNames?.collapse);

                Events.trigger(collapsedEl, EVENT_HIDDEN);
            }, collapsedEl, true);
        },
        getDimension({ ref } = getElement()) {
            const element = ref.closest('[class*=is-style-]');

            return element ? element.classList.contains('is-style-horizontal') ? 'width' : 'height' : 'height';
        }
    }
});