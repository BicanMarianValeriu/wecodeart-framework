import { store, getContext, getElement, getConfig } from '@wordpress/interactivity';

const {
    hooks: {
        applyFilters
    }
} = wp;

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

function createToastElement({ header = '', content = '', className = '', close = false }) {
    let template = document.getElementById('wp-toast-template').innerHTML;

    // Removing the button with class "wp-close"
    if(close === false) {
        const regex = /<button[^>]*class="[^"]*wp-close[^"]*"[^>]*>.*?<\/button>/gi;
        template = template.replace(regex, '').replace(/\s*\n+\s*/g, '');
    }

    const markup = new Template({
        content: {
            '.wp-toast__header-text': header,
            '.wp-toast__body': content,
        },
        extraClass: className,
        template: template,
    });

    return markup.toHtml();
}

const { state, actions, callbacks } = store(NAMESPACE, {
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
            const { options } = callbacks.getConfig();

            state.elements.filter(({ show }) => show !== false).map((toast, i) => {
                const element = createToastElement(toast);
                ref.appendChild(element);

                const plugin = new Toast(element, { ...options, ...toast });
                plugin.show();

                toast.show = false;
                state.elements[i] = toast;
            });
        },
        getConfig: () => {
            const context = getContext();
            const config = { ...state, ...context };

            return applyFilters('wecodeart.interactive.config', config, NAME);
        },
        validateConfig: () => validateConfig(NAME, callbacks.getConfig(), getConfig(NAMESPACE)),
    }
});