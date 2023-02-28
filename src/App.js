import './App.scss';
import './components/Tabs/Tabs.js';
import { Tabs } from './components/Tabs/Tabs.js';

const App = () => {
    const tabs = [
        { tabName: 'Tab 1', tabContent: 'content of Tab 1.' },
        { tabName: 'Tab 2', tabContent: 'content of Tab 2.' },
        { tabName: 'Tab 3', tabContent: 'content of Tab 3.' },
    ];

    return (
        <div>
            <Tabs tabs={tabs} defaultTab={1} />
        </div>
    );
};

export { App };
