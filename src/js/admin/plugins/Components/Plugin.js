/**
 * WordPress dependencies
 */
const {
    i18n: {
        __,
        sprintf,
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
    version = '',
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
    const sharedProps = { type, slug, version, source, destination, pluginDir, handleNotice, setHasChanges };
    const { version: installedVersion = version } = allModules.filter(({ slug: _slug }) => _slug === slug).pop() || {};

    return (
        <Card className="border shadow-none">
            <CardHeader>
                {title && <h3 className="m-0">{title}</h3>}
                {getInstallerIcon(source)}
            </CardHeader>
            {(description || more) && (<CardBody style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {description && <p>{description}</p>}
                {(installedVersion || more) && <HStack style={{ marginTop: 'auto' }}>
                    {installedVersion && (
                        <span>{sprintf(__('Version: %s', 'am2'), installedVersion)}</span>
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