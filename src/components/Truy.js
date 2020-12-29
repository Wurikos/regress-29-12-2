import React from 'react';
import atomize from "@quarkly/atomize";

const Truy = props => <div {...props}>
	Say hello Truy
</div>;

export default atomize(Truy)({
	name: "Truy",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "Truy — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});