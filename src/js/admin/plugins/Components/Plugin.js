/**
 * WordPress dependencies
 */
const {
    i18n: {
        __,
    },
    components: {
        Card,
        CardHeader,
        CardBody,
        CardFooter,
        ExternalLink,
        __experimentalHStack: HStack,
    },
} = wp;

import { getInstallerDir, getInstallerIcon } from './../../functions';
import { Activation, Install, Uninstall } from './';

const Plugin = ({
    title = '',
    slug = '',
    description = '',
    destination = '',
    more = '',
    source = 'wordpress',
    type = 'plugin',
    required = true,
    activePlugins,
    setActivePlugins,
    setHasChanges,
    allPlugins,
    setAllPlugins,
    allModules,
    setAllModules,
    handleNotice
}) => {
    const pluginDir = getInstallerDir({ slug, source, destination });
    const hasMetRequirements = required instanceof Array ? required.map(i => activePlugins.includes(i)).every(i => i === true) : required;
    const { version = false } = allModules.filter(({ slug: _slug }) => _slug === slug).pop() || {};

    const sharedProps = { type, slug, source, destination, pluginDir, handleNotice, setHasChanges };

    return (
        <Card className="border shadow-none">
            <CardHeader>
                {title && <h3 className="m-0">{title}</h3>}
                {getInstallerIcon(source)}
            </CardHeader>
            {(description || more) && (<CardBody style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {description && <p>{description}</p>}
                {(version || more) && <HStack style={{ marginTop: 'auto' }}>
                    {version && (
                        <span>{sprintf(__('Version: %s', 'am2'), version)}</span>
                    )}
                    <ExternalLink className="fw-bold text-decoration-none" href={more}>
                        <span className="me-1">{__('Learn more', 'wecodeart')}</span>
                    </ExternalLink>
                </HStack>}
            </CardBody>)}
            <CardFooter>
                <HStack>
                    <Activation {...{ type, pluginDir, allPlugins, activePlugins, setActivePlugins, setHasChanges, handleNotice, hasMetRequirements }} />
                    <Install {...{ ...sharedProps, allModules, setAllModules, allPlugins, setAllPlugins, activePlugins, setActivePlugins, hasMetRequirements }} />
                    <Uninstall {...{ ...sharedProps, allModules, setAllModules }} />
                </HStack>
            </CardFooter>
        </Card>
    )
};

export default Plugin;