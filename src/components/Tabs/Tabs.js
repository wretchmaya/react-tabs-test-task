import React, { useState } from 'react';
import './Tabs.scss';
import { TabContent } from './TabContent/TabContent';
import { TabsListItem } from './TabsListItem/TabsListItem';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = index => {
        setActiveTab(index);
    };

    const handleKeyDown = event => {
        const { key } = event;
        if (key === 'ArrowLeft') {
            event.preventDefault();
            setActiveTab((activeTab - 1 + tabs.length) % tabs.length);
        } else if (key === 'ArrowRight') {
            event.preventDefault();
            setActiveTab((activeTab + 1) % tabs.length);
        }
    };

    return (
        <div aria-label="Tabs" className="tabs">
            <ul className="tabs-list" role="tablist">
                <TabsListItem
                    tabs={tabs}
                    activeTab={activeTab}
                    handleKeyDown={handleKeyDown}
                    handleTabClick={handleTabClick}
                />
            </ul>
            <div className="tab-content-wrapper">
                {tabs.map((tab, index) => (
                    <TabContent
                        key={index}
                        label={`tab-${index + 1}-content`}
                        content={tab.tabContent}
                        active={activeTab === index}
                    />
                ))}
            </div>
        </div>
    );
};

export { Tabs };
