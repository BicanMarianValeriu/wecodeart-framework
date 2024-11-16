import { store, getContext, getElement, getConfig } from '@wordpress/interactivity';

const {
    fn: {
        validateConfig
    },
    plugins: {
        Toast
    },
    Template,
} = wecodeart;

if (typeof Toast === 'undefined') {
    throw new TypeError('WeCodeArt\'s Toast require core Toast plugin - please enqueue it.');
}

const NAME = 'toast';
const NAMESPACE = `wecodeart/${NAME}`;
// const DATA_KEY = `wp.${NAME}`;
// const EVENT_KEY = `.${DATA_KEY}`;

// const EVENT_ADDED = `added${EVENT_KEY}`;
// const EVENT_REMOVED = `removed${EVENT_KEY}`;

function createToastElement({ header = '', content = '', className = '', close = true }) {
    const template = document.getElementById('wp-toast-template').innerHTML;

    const markup = new Template({
        content: {
            '.wp-toast__header-text': header,
            '.wp-toast__body': content,
            '.wp-close': Boolean(close) === true ? ' ' : null
        },
        extraClass: className,
        template: template,
    });

    return markup.toHtml();
}

const { state } = store(NAMESPACE, {
    state: {
        elements: [],
    },
    actions: {
        add({ show = true, ...rest }) {
            state.elements.unshift({ show, ...rest });
        },
    },
    callbacks: {
        onAdd() {
            const { ref } = getElement();
            const { options } = getContext();

            state.elements.filter(({ show }) => show !== false).map((toast, i) => {
                const element = createToastElement(toast);
                ref.appendChild(element);

                const plugin = new Toast(element, { ...options, ...toast });
                plugin.show();

                toast.show = false;
                state.elements[i] = toast;
            });
        },
        validateConfig: () => validateConfig(NAME, { ...state, ...getContext() }, getConfig(NAMESPACE)),
    }
});