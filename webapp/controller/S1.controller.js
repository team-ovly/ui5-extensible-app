sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.extensible.controller.S1", {

		onInit: function () {

		},

		onItemPress: function (oEvent) {
			var oParameter = oEvent.getParameters();
			var oListItem = oParameter.listItem;
			var oContext = oListItem.getBindingContext();
			var sProductId = oContext.getProperty("Id");
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail", {
				id: sProductId
			});
		}

	});

});