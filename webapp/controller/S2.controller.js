sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.extensible.controller.S2", {

		onInit: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			var oRoute = oRouter.getRoute("detail");
			oRoute.attachPatternMatched(this.onPatternMatched, this);

		},

		onBack: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("default");
		},

		onPatternMatched: function (oEvent) {
			var oParameters = oEvent.getParameters();
			var oArguments = oParameters.arguments;
			var sProductId = oArguments.id;
			var oView = this.getView();
			var oDataModel = oView.getModel();

			oDataModel.metadataLoaded().then(function () {
				var sPath = oDataModel.createKey("Products", {
					Id: sProductId
				});
				oView.bindElement({
					path: "/" + sPath
				});
			});
		}

	});

});