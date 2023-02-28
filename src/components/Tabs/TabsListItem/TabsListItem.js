import React from 'react';
import './TabsListItem.scss';


const TabsListItem = ({ tabs, activeTab, handleTabClick, handleKeyDown }) => {
    return tabs.map((tab, index) => (
        <li
            key={index}
            role="tab"
            tabIndex={activeTab === index ? 0 : -1}
            aria-label={`tab-${index + 1}`}
            aria-selected={activeTab === index ? true : false}
            className={`tabs-list__tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
            onKeyDown={event => handleKeyDown(event, index)}
        >
            <span className="tab__title">{tab.tabName}</span>
        </li>
    ));
};

export { TabsListItem };
