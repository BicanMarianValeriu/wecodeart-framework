/**
 * WordPress dependencies
 */
const {
	TabPanel,
} = wp.components;

export default function Extensions(props) {
    const { extensions: tabs, ...tabProps } = props;

    return (
        <TabPanel className="wecodeart-tab-panel wecodeart-tab-panel--vertical"
            activeClass="active-tab"
            orientation="vertical"
            tabs={tabs}>
            {(tab) => tab.render && typeof tab.render === 'function' && tab.render(tabProps)}
        </TabPanel>
    );
}
