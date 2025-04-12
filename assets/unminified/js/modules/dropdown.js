import { store, getContext, getElement, getConfig, withScope } from '@wordpress/interactivity';
import { computePosition, autoUpdate, offset } from '//cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.9/+esm';

if (typeof computePosition === 'undefined') {
    throw new TypeError('WeCodeArt\'s Dropdown require Floating UI (https://floating-ui.com/)');
}

const {
    fn: {
        isRTL,
        isVisible,
        isElement,
        isDisabled,
        getNextActiveElement,
        executeAfterTransition,
        getOptions,
        getElement: getDOMElement,
        validateConfig,
        noop,
    },
    Events,
    Selector,
} = wecodeart;

const NAME = 'dropdown';
const NAMESPACE = `wecodeart/${NAME}`;
const DATA_KEY = `wp.${NAME}`;
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = '.data-api';

const ESCAPE_KEY = 'Escape';
const TAB_KEY = 'Tab';
const ARROW_UP_KEY = 'ArrowUp';
const ARROW_DOWN_KEY = 'ArrowDown';
const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;

const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_DROPUP = 'dropup';
const CLASS_NAME_DROPEND = 'dropend';
const CLASS_NAME_DROPSTART = 'dropstart';
const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';

const SELECTOR_DATA_TOGGLE = `[data-wp-interactive="${NAMESPACE}"]:not(.disabled):not(:disabled)`;
const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE}.${CLASS_NAME_SHOW}`;
const SELECTOR_MENU = '.dropdown-menu';
const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';

const AttachmentMap = {
    TOP: isRTL() ? 'top-end' : 'top-start',
    TOPCENTER: 'top',
    TOPEND: isRTL() ? 'top-start' : 'top-end',
    RIGHT: isRTL() ? 'left-start' : 'right-start',
    BOTTOM: isRTL() ? 'bottom-end' : 'bottom-start',
    BOTTOMEND: isRTL() ? 'bottom-start' : 'bottom-end',
    BOTTOMCENTER: 'bottom',
    LEFT: isRTL() ? 'right-start' : 'left-start'
};

const { state, actions, callbacks } = store(NAMESPACE, {
    state: {},
    // Public methods!
    actions: {
        toggle: () => {
            const { ref } = getElement();

            const isShown = ref.classList.contains(CLASS_NAME_SHOW);

            return isShown ? actions.hide() : actions.show();
        },
        show: (e) => {
            const { ref } = e ? { ref: e.target } : getElement();

            if (isDisabled(ref) || ref.classList.contains(CLASS_NAME_SHOW)) {
                return;
            }

            const relatedTarget = {
                relatedTarget: ref
            };

            const menu = callbacks.getMenu(ref);
            const showEvent = Events.trigger(ref, EVENT_SHOW, relatedTarget);

            if (showEvent.defaultPrevented) {
                return;
            }

            callbacks.createPopper();
            const context = getContext();
            context.cleanup = autoUpdate(ref, menu, withScope(callbacks.createPopper));

            // If this is a touch-enabled device we add extra
            // empty mouseover listeners to the body's immediate children;
            // only needed because of broken event delegation on iOS
            // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
            if ('ontouchstart' in document.documentElement) {
                for (const element of [].concat(...document.body.children)) {
                    Events.on(element, 'mouseover', noop);
                }
            }

            ref.focus();
            ref.setAttribute('aria-expanded', true);
            ref.classList.add(CLASS_NAME_SHOW);
            menu.classList.add(CLASS_NAME_SHOW);

            const complete = withScope(() => Events.trigger(ref, EVENT_SHOWN, relatedTarget));

            executeAfterTransition(complete, menu);
        },
        hide: (e) => {
            const { ref } = e ? { ref: e.target } : getElement();

            if (isDisabled(ref) || !ref.classList.contains(CLASS_NAME_SHOW)) {
                return;
            }

            const relatedTarget = {
                relatedTarget: ref
            };

            callbacks.completeHide(relatedTarget);
        },
        clearMenus(e) {
            if (e.button === RIGHT_MOUSE_BUTTON || (e.type === 'keyup' && e.key !== TAB_KEY)) {
                return;
            }

            const openToggles = Selector.find(SELECTOR_DATA_TOGGLE_SHOWN);

            for (const toggle of openToggles) {
                const context = {
                    ...state,
                    ...getOptions(toggle.dataset.wpContext)
                };

                if (!context || context?.autoClose === false) {
                    continue;
                }

                const composedPath = e.composedPath();
                const menu = callbacks.getMenu(toggle);
                const isMenuTarget = composedPath.includes(menu);

                if (
                    composedPath.includes(toggle) || (context.autoClose === 'inside' && !isMenuTarget) || (context.autoClose === 'outside' && isMenuTarget)
                ) {
                    continue;
                }

                // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
                if (
                    menu.contains(e.target) && ((e.type === 'keyup' && e.key === TAB_KEY) || /input|select|option|textarea|form/i.test(e.target.tagName))
                ) {
                    continue;
                }

                const relatedTarget = { relatedTarget: toggle };

                if (e.type === 'click') {
                    relatedTarget.clickEvent = e;
                }

                callbacks.completeHide(relatedTarget);
            }
        },
        keydown(e) {
            const ref = e.target;
            // If not an UP | DOWN | ESCAPE key => not a dropdown command
            // If input/textarea && if key is other than ESCAPE => not a dropdown command
            const isInput = /input|textarea/i.test(ref.tagName);
            const isEscapeEvent = e.key === ESCAPE_KEY;
            const isUpOrDownEvent = [ARROW_UP_KEY, ARROW_DOWN_KEY].includes(e.key);

            if (!isUpOrDownEvent && !isEscapeEvent) {
                return;
            }

            if (isInput && !isEscapeEvent) {
                return;
            }

            e.preventDefault();

            const getToggleButton = ref.matches(SELECTOR_DATA_TOGGLE) ? ref : (
                Selector.prev(ref, SELECTOR_DATA_TOGGLE)[0] ||
                Selector.next(ref, SELECTOR_DATA_TOGGLE)[0] ||
                Selector.findOne(SELECTOR_DATA_TOGGLE, e.delegateTarget.parentNode) 
            );

            if (isUpOrDownEvent) {
                e.stopPropagation();
                actions.show({ target: getToggleButton });
                callbacks.selectMenuItem(e);
                return;
            }

            if (getToggleButton.classList.contains(CLASS_NAME_SHOW)) { // else is escape and we check if it is shown
                e.stopPropagation();
                actions.hide({ target: getToggleButton });
                getToggleButton.focus();
            }
        }
    },
    // Private, mostly!
    callbacks: {
        completeHide: (related) => {
            const { relatedTarget } = related;
            const menu = callbacks.getMenu(relatedTarget);

            const hideEvent = Events.trigger(relatedTarget, EVENT_HIDE, relatedTarget);

            if (hideEvent.defaultPrevented) {
                return;
            }

            // If this is a touch-enabled device we remove the extra
            // empty mouseover listeners we added for iOS support
            if ('ontouchstart' in document.documentElement) {
                for (const element of [].concat(...document.body.children)) {
                    Events.off(element, 'mouseover', noop);
                }
            }

            withScope(() => callbacks.disposePopper());

            menu.classList.remove(CLASS_NAME_SHOW);
            relatedTarget.classList.remove(CLASS_NAME_SHOW);
            relatedTarget.setAttribute('aria-expanded', 'false');

            const complete = withScope(() => Events.trigger(relatedTarget, EVENT_HIDDEN, relatedTarget));

            executeAfterTransition(complete, menu);
        },
        createPopper: () => {
            const { ref } = getElement();

            const menu = callbacks.getMenu();

            let referenceElement = ref;

            const { reference } = { ...state, ...getContext() };

            if (reference === 'parent') {
                referenceElement = callbacks.getParent();
            } else if (isElement(reference)) {
                referenceElement = getDOMElement(reference);
            } else if (typeof reference === 'object') {
                referenceElement = reference;
            }

            const setPlacement = {
                name: 'setPlacement',
                fn({ placement }) {
                    menu.setAttribute('data-placement', placement);

                    return {};
                },
            };

            return computePosition(referenceElement, menu, {
                placement: callbacks.getPlacement(),
                middleware: [
                    offset({ ...callbacks.getOffset() }),
                    setPlacement
                ].filter(Boolean),
            }).then(({ x, y }) => {
                Object.assign(menu.style, {
                    position: 'absolute',
                    inset: 'auto',
                    margin: '0',
                    top: '0',
                    left: '0',
                    transform: `translate3d(${callbacks.roundByDPR(x)}px,${callbacks.roundByDPR(y)}px,0)`,
                });
            });
        },
        disposePopper: () => {
            const context = getContext();

            if (context.cleanup) {
                context.cleanup();
                context.cleanup = null;
            }
        },
        getParent: (element) => {
            const { ref } = element ? { ref: element } : getElement();

            return ref.parentNode;
        },
        getMenu: (element) => {
            const { ref } = element ? { ref: element } : getElement();

            return Selector.next(ref, SELECTOR_MENU)[0] || Selector.prev(ref, SELECTOR_MENU)[0] || Selector.findOne(SELECTOR_MENU, callbacks.getParent(ref));
        },
        selectMenuItem({ key, target }) {
            const menu = target.closest(SELECTOR_MENU) || callbacks.getMenu(target);
            const items = Selector.find(SELECTOR_VISIBLE_ITEMS, menu).filter(element => isVisible(element));

            if (!items.length) {
                return;
            }

            // if target isn't included in items (e.g. when expanding the dropdown)
            // allow cycling to get the last item in case key equals ARROW_UP_KEY
            getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
        }, 
        getOffset() {
            let { offset = state.offset } = getContext();

            if (typeof offset === 'string') {
                offset = offset.split(',').map(no => Number.parseInt(no, 10));
            }

            switch (offset.length) {
                case 1:
                    offset = { mainAxis: offset[0] };
                    break;
                case 2:
                    offset = { mainAxis: offset[0], crossAxis: offset[1] };
                    break;
                case 3:
                    offset = { mainAxis: offset[0], crossAxis: offset[1], alignmentAxis: offset[2] };
                    break;
            }

            return offset;
        },
        getPlacement() {
            const parentDropdown = callbacks.getParent();

            if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
                return AttachmentMap.RIGHT;
            }

            if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
                return AttachmentMap.LEFT;
            }

            if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
                return AttachmentMap.TOPCENTER;
            }

            if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
                return AttachmentMap.BOTTOMCENTER;
            }

            // We need to trim the value because custom properties can also include spaces
            const isEnd = getComputedStyle(callbacks.getMenu()).getPropertyValue('--wp--position').trim() === 'end';

            if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
                return isEnd ? AttachmentMap.TOPEND : AttachmentMap.TOP;
            }

            return isEnd ? AttachmentMap.BOTTOMEND : AttachmentMap.BOTTOM;
        },
        roundByDPR: (value) => {
            const dpr = window.devicePixelRatio || 1;

            return Math.round(value * dpr) / dpr;
        },
        validateConfig: () => {
            return validateConfig(NAME, { ...state, ...getContext() }, getConfig(NAMESPACE));
        }
    }
});

Events.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, actions.keydown);
Events.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, actions.keydown);
Events.on(document, EVENT_CLICK_DATA_API, actions.clearMenus);
Events.on(document, EVENT_KEYUP_DATA_API, actions.clearMenus);