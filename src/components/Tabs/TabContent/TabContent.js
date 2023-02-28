import React from 'react';

const TabContent = ({ content, active, label }) => {
    return (
        <div role="tabpanel" tabIndex={0} aria-label={label} hidden={!active}>
            {content}
        </div>
    );
};

export { TabContent };
