/**
 * WordPress dependencies
 */
import { dragHandle } from '@wordpress/icons';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import classnames from 'classnames';

const { upperFirst, difference } = lodash;
const {
    compose: { compose, ifCondition },
    editPost: { PluginPostStatusInfo },
    element: { useState, useEffect },
    data: { withSelect, withDispatch },
    components: { withSpokenMessages, Button, Icon }
} = wp;

const { contentModules } = wecodeartGutenberg;

const Control = ({ updateMeta, entryMeta, postType }) => {
    if (['wp_block', 'wp_template', 'wca_pattern'].includes(postType)) {
        return false;
    }

    const { _wca_content_modules: value = [] } = entryMeta;

    const contentKeys = Object.keys(contentModules);

    const [items, setItems] = useState(contentKeys.sort((a, b) => value.indexOf(a) - value.indexOf(b)));
    const [disabled, setDisabled] = useState(difference(contentKeys, value));

    useEffect(() => {
        const active = difference(items, disabled);
        updateMeta(active);
    }, [items, disabled]);

    const onSortEnd = ({ oldIndex, newIndex }) => setItems(arrayMove(items, oldIndex, newIndex));

    const DragHandle = sortableHandle(() => <Icon icon={dragHandle} />);

    const SortableItem = sortableElement(({ value }) => {
        return (
            <Button className={classnames('wecodeart-draggable-modules__item', {
                [`wecodeart-draggable-modules__item--${value}`]: true,
                'wecodeart-draggable-modules__item--disabled': disabled.includes(value),

            })} onClick={(e) => {
                const newValue = disabled.includes(value) ? difference(disabled, [value]) : [...disabled, value];
                setDisabled(newValue);
            }}>
                <strong>{upperFirst(contentModules[value])}</strong>
                <DragHandle />
            </Button>
        );
    });

    const SortableList = sortableContainer(({ items }) => {
        return (
            <div className="wecodeart-draggable-modules__container">
                {items.map((value, index) => {
                    const isDisabled = disabled.includes(value);
                    return <SortableItem key={`item-${value}`} index={index} value={value} disabled={isDisabled} />;
                })}
            </div>
        );
    });

    return (
        <PluginPostStatusInfo>
            <div className="wecodeart-draggable-modules">
                <SortableList items={items} onSortEnd={onSortEnd} lockAxis="y" useDragHandle={true} />
            </div>
        </PluginPostStatusInfo>
    );
};

export default compose(
    withSelect((select) => {
        return {
            postType: select('core/editor').getEditedPostAttribute('type'),
            entryMeta: select('core/editor').getEditedPostAttribute('meta'),
            isDisabled: select('core/edit-post').isFeatureActive('disableWecodeartLoremBlocks'),
        };
    }),
    withDispatch((dispatch) => {
        return {
            updateMeta: (value) => dispatch('core/editor').editPost({ meta: { _wca_content_modules: value } }),
        };
    }),
    ifCondition((props) => props?.entryMeta && props?.entryMeta?._wca_builder_template !== true),
    withSpokenMessages,
)(Control);
