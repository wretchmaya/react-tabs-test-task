import { TabsListItem } from '../components/Tabs/TabsListItem/TabsListItem';
import '../components/Tabs/TabsListItem/TabsListItem.scss';

export default {
    title: 'Tabs UI',
    component: TabsListItem,
    argTypes: {
        handleTabClick: {
            action: 'clicked',
        },
				handleKeyDown: {
					action: 'pressed a key',
			},
    },
};

const Template = args => <TabsListItem {...args} />;

export const TabsList = Template.bind({});

TabsList.args = {
    tabs: [
        { tabName: 'Tab 1', tabContent: 'content of Tab 1.' },
        { tabName: 'Tab 2', tabContent: 'content of Tab 2.' },
        { tabName: 'Tab 3', tabContent: 'content of Tab 3.' },
    ],
    activeTab: 1,
};
