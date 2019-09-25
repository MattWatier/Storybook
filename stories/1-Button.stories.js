import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Btn from "../src/components/subComponents/Btn.vue";

export default {
	title: "Basic/Button"
};

export const basic = () => ({
	components: {
		Btn
	},
	template:
		'<div class="flex p-y_3"><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="small" :state="status">Small Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="medium" :state="status">Medium Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="large" :state="status">Large Button</Btn></div></div>',
	methods: {
		action: action("clicked")
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "",
			iconBoolean: false
		};
	}
});
export const error = () => ({
	components: {
		Btn
	},
	template:
		'<div class="flex p-y_3"><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="small" :state="status">Small Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="medium" :state="status">Medium Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="large" :state="status">Large Button</Btn></div></div>',
	methods: {
		action: action("clicked")
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "error",
			iconBoolean: true
		};
	}
});
export const warning = () => ({
	components: {
		Btn
	},
	template:
		'<div class="flex p-y_3"><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="small" :state="status">Small Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="medium" :state="status">Medium Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="large" :state="status">Large Button</Btn></div></div>',
	methods: {
		action: action("clicked")
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "warning",
			iconBoolean: true
		};
	}
});
export const secondary = () => ({
	components: {
		Btn
	},
	template:
		'<div class="flex p-y_3"><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="small" :state="status">Small Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="medium" :state="status">Medium Button</Btn></div><div class="flex_shrink p-x_3"><Btn @click="action" :icon="iconBoolean" :size="large" :state="status">Large Button</Btn></div></div>',
	methods: {
		action: action("clicked")
	},
	data() {
		return {
			small: "small",
			medium: "medium",
			large: "large",
			status: "secondary",
			iconBoolean: false
		};
	}
});
