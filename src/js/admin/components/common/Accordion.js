import classnames from 'classnames';
import { chevronUp, chevronDown } from '@wordpress/icons';

const {
    element: { useState },
    components: { Icon },
} = wp;

const Accordion = ({ children, label, initiallyExpanded = false }) => {
    const [expanded, setExpanded] = useState(initiallyExpanded);

    const toggle = (e) => {
        e.preventDefault();
        setExpanded(!expanded);
    };

    return (
        <>
            <button className={classnames(['wca-accordion-component', { expanded }])} onClick={toggle}>
                <h4 className="wca-accordion-component__title">
                    <span>{label}</span>
                    <Icon size={30} icon={expanded ? chevronUp : chevronDown} />
                </h4>
            </button>
            {expanded && children}
        </>
    );
};

export default Accordion;