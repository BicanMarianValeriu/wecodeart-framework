/**
 * WordPress dependencies
 */
const {
    components: {
        Icon
    },
} = wp;

const getInstallerIcon = (source) => {
    let icon;

    switch (source) {
        case 'github':
            icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 6.3C114.6 6.3 0 120.9 0 262.3c0 113.1 73.3 209.1 175.1 242.9 12.8 2.4 17.5-5.6 17.5-12.3 0-6.1-.2-26.3-.4-47.6-71.2 15.4-86.2-30.2-86.2-30.2-11.7-29.6-28.4-37.4-28.4-37.4-23.3-15.9 1.7-15.6 1.7-15.6 25.7 1.8 39.3 26.4 39.3 26.4 22.8 39.1 59.9 27.8 74.5 21.2 2.3-16.5 8.9-27.8 16.2-34.2C152.5 369 92.7 347 92.7 248.9c0-28 10-50.8 26.3-68.7-2.6-6.5-11.4-32.5 2.5-67.8 0 0 21.5-6.9 70.4 26.2 20.4-5.7 42.3-8.5 64.1-8.6 21.8.1 43.7 2.9 64.1 8.6 48.8-33.2 70.4-26.2 70.4-26.2 14 35.3 5.2 61.3 2.6 67.8 16.4 17.9 26.3 40.7 26.3 68.7 0 98.4-59.9 120-116.9 126.4 9.2 7.9 17.4 23.5 17.4 47.4 0 34.2-.3 61.8-.3 70.3 0 6.8 4.7 14.8 17.6 12.3 101.5-34 174.8-129.9 174.8-243 0-141.3-114.6-256-256-256z" />
            </svg>;
            break;
        case 'wordpress':
            icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 69">
                <mask id="wp-mask" width="65.4" height="64.46" x="1.8" y="2.27" maskUnits="userSpaceOnUse">
                    <path fill="white" fill-rule="evenodd" d="M1.8 2.27h65.4v64.46H1.8z" />
                </mask>
                <circle cx="34.5" cy="34.5" r="34.5" fill="white" />
                <g mask="url(#wp-mask)">
                    <path fill="currentColor" fill-rule="evenodd" d="M34.5 2.27A32.47 32.47 0 0 0 1.8 34.5a32.47 32.47 0 0 0 32.7 32.23A32.47 32.47 0 0 0 67.2 34.5 32.47 32.47 0 0 0 34.5 2.27m0 1.93a30.87 30.87 0 0 1 12 2.38 30.48 30.48 0 0 1 5.22 2.8 29.91 29.91 0 0 1 4.55 3.7 30 30 0 0 1 6.59 9.63A30 30 0 0 1 60 51.44a30.26 30.26 0 0 1-3.76 4.48 29.91 29.91 0 0 1-4.55 3.7 30.48 30.48 0 0 1-5.22 2.8 31.24 31.24 0 0 1-23.92 0 30.48 30.48 0 0 1-5.22-2.8 29.91 29.91 0 0 1-4.55-3.7 30 30 0 0 1-6.59-9.63A30 30 0 0 1 9 17.56a30.26 30.26 0 0 1 3.76-4.48 29.91 29.91 0 0 1 4.55-3.7 30.48 30.48 0 0 1 5.22-2.8 30.87 30.87 0 0 1 12-2.38" />
                </g>
                <path fill="currentColor" fill-rule="evenodd" d="M58.17 21.88a20 20 0 0 1 .18 2.77 25.22 25.22 0 0 1-2.07 9.64l-8.35 23.78A26.85 26.85 0 0 0 61.51 34.8a26.48 26.48 0 0 0-3.34-12.92zM34.68 37.15l-8.2 23.48a27.85 27.85 0 0 0 16.79-.43 3.39 3.39 0 0 1-.2-.38zm18-3.71A14.06 14.06 0 0 0 50.39 26c-1.39-2.21-2.69-4.08-2.69-6.3a4.69 4.69 0 0 1 4.59-4.78h.35A27.54 27.54 0 0 0 11.38 20h1.75c2.86 0 7.28-.34 7.28-.34a1.11 1.11 0 0 1 .18 2.22s-1.48.17-3.13.25l10 29.17 6-17.67-4.26-11.5c-1.47-.08-2.86-.25-2.86-.25a1.11 1.11 0 0 1 .17-2.22S31 20 33.63 20c2.86 0 7.29-.34 7.29-.34a1.11 1.11 0 0 1 .17 2.22s-1.48.17-3.13.25l9.88 28.95 2.81-8.81c1.26-3.84 2-6.57 2-8.87zM6.88 34.8A26.92 26.92 0 0 0 22.28 59l-13-35.19a26.42 26.42 0 0 0-2.37 11z" />
            </svg>;
            break;
        default:
            icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175 174">
                <path fill="currentColor" d="M80 1.6C47.4 5.5 20.6 25.4 8.9 54.5 4 66.8 2.8 74.6 3.2 90c.4 12 .8 14.6 3.7 23 9.5 28 31.3 48.5 59.7 56.1 11.3 3.1 30.8 3.1 41.9.2 38.7-10.4 64.5-43.6 64.5-82.9 0-44.9-35.5-82.3-80.6-84.7-4.9-.3-10.5-.3-12.4-.1zM105 28c2.7 1.5 4 6 2.6 9.6-1.1 3-19.5 27.3-20.7 27.4-.4 0-3.4-2.2-6.7-4.8l-6.1-4.9 8.5-10.9C95.7 27.6 99.3 24.9 105 28zm-9.6 46.9c18.7 14.6 34.7 27.1 35.5 27.7 1.2 1 .9 1.8-2.4 5.8a45.4 45.4 0 0 1-34.7 17.1c-7.1.2-9.1.6-11.3 2.4-3.7 2.8-5.4 2.7-10.3-.9l-4.1-2.9-7.6 9.4c-6.7 8.4-7.9 9.5-10.7 9.5-3.8 0-7.8-3.4-7.8-6.6 0-1.3 3.2-6.3 7.4-11.8l7.5-9.5L53 112c-4.7-3.8-5.6-6-3.6-9.8 1.4-2.7 1.3-3.4-.4-8-4.2-11-3.5-22.2 2-33.9 3.6-7.8 7.8-13.5 9.4-12.6.6.4 16.4 12.6 35 27.2zm45.3-18.7c2.8 2.6 3 7.2.5 11-3.2 5.2-18.7 24.7-19.5 24.7-1.8.2-12.6-9.2-12-10.3 2.8-4.5 19.9-25.3 21.6-26.3 3.3-1.9 6.8-1.5 9.4.9z" />
            </svg>;
            break;
    }

    return (
        <Icon className="components-card__badge" icon={icon} />
    );
};

const getInstallerDir = ({ slug, source = 'wordpress', destination }) => {
    let dir = slug;

    if (!slug) {
        return dir;
    }

    if (destination) {
        return destination;
    }

    switch (source) {
        case 'github':
            dir = slug.replace(/^.*\//, '');
            break;
        case 'custom':
            dir = slug.substring(slug.lastIndexOf('/') + 1, slug.lastIndexOf('.zip'));
            break;
        default:
            dir = slug.replace(/\/[^/]*$/, '');
            break;
    }

    return dir;
}

// Helper function to get the value of a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split('; ');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        if (cookie[0] === name) {
            return decodeURIComponent(cookie[1]);
        }
    }

    return '';
}

// Helper function to set a cookie with a given name, value, and expiration time
function setCookie(name, value, days = 365, path = window.location.pathname) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();

    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${path}`;
}

export { getInstallerIcon, getInstallerDir, getCookie, setCookie };