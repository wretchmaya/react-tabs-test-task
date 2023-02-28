import { TabContent } from "../components/Tabs/TabContent/TabContent.js";

export default {
    title: 'Tabs UI',
    component: TabContent,
};

const Template = args => <TabContent {...args} />;

export const Tab = Template.bind({});

Tab.args = {
	content: 'Content of the tab', 
	label: 'tab-1-content',
	active: true, 
};
