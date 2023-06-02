/**
 * WordPress dependencies
 */
const {
    element: {
        useEffect,
    },
    components: {
        TabPanel,
    }
} = wp;

export default function Plugins(props) {
    const { plugins: tabs, ...tabProps } = props;

    const hash = window.location.hash.substr(1);
    const initialTab = hash ? tabs.find(({ name }) => name === hash)?.name : tabs[0]?.name;

    const updateUrl = (tabName) => {
        if (history.pushState) {
            history.pushState(null, null, '#' + tabName);
        } else {
            window.location.hash = '#' + tabName;
        }
    };

    useEffect(() => {
        const handleHashChange = () => {
            const newHash = window.location.hash.substr(1);
            const matchingTab = tabs.find(({ name }) => name === newHash);
            if (matchingTab) {
                updateUrl(matchingTab.name);
            }
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [tabs]);

    return (
        <TabPanel className="wecodeart-tab-panel wecodeart-tab-panel--vertical"
            activeClass="active-tab"
            orientation="vertical"
            initialTabName={initialTab}
            onSelect={updateUrl}
            tabs={tabs}>
            {(tab) => tab.render && typeof tab.render === 'function' && tab.render(tabProps)}
        </TabPanel>
    );
}
