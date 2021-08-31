Module.register("MMM-Aysha", {
	// Default module config.
	defaults: {
		text: "Aysha!"
	},

	getTemplate: function () {
		return "MMM-Aysha.njk";
	},
 
        getTemplateData: function () {
		return this.config;
	}
});