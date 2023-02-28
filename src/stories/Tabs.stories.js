import { Tabs } from "../components/Tabs/Tabs";
import '../components/Tabs/Tabs.scss';

export default {
    title: 'Tabs UI',
    component: Tabs,
};

const Template = args => <Tabs {...args}/>;

export const TabsUI = Template.bind({});

TabsUI.args = {
    tabs: [
        { tabName: 'Tab 1', tabContent: 'content of Tab 1.' },
        { tabName: 'Tab 2', tabContent: 'content of Tab 2.' },
        { tabName: 'Tab 3', tabContent: 'content of Tab 3.' },
    ],
};
