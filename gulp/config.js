export default {
    browserSync: proxy => {
        if (proxy) return { proxy: proxy };
        else return { server: { baseDir: './' }, online: true };
    },
    autoprefixer: { cascade: false },
    cleanCSS: { level: { 1: { specialComments: false } } },
};