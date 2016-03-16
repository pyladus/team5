sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("Refugee_Book.view.Controller", {

		onInit: function() {
			var oModel = new JSONModel("DataGroup.json");

			this.getView().setModel(oModel);
		},

		onNavButtonPress: function() {
			window.history.go(-1);
		},

		press: function(evt) {
			alert("The generic tile is pressed.");
		},

		handleLogoffPress: function(oEvent) {
			sap.m.MessageToast.show("Logoff Button Pressed");
		},
		handlePressMyProfile: function(oEvent) {
							sap.ui.core.UIComponent.getRouterFor(this).navTo("MyProfile");
		},

		handleUserItemPressed: function(oEvent) {
			sap.m.MessageToast.show("User Button Pressed");
		},

		handleSearchItemSelect: function(oEvent) {
			sap.m.MessageToast.show("Search Entry Selected: " + oEvent.getSource().getTitle());
		},

		handleShellOverlayClosed: function() {
			sap.m.MessageToast.show("Overlay closed");
		},

		handleSearchPressed: function(oEvent) {
			var sQuery = oEvent.getParameter("query");
			if (sQuery == "") {
				return;
			}

			// create Overlay only once
			if (!this._overlay) {
				this._overlay = sap.ui.xmlfragment(
					"sap.ui.unified.sample.ShellBasic.ShellOverlay",
					this
				);
				this.getView().addDependent(this._overlay);
			}

			// mock data
			var aResultData = [];
			for (var i = 0; i < 10; i++) {
				aResultData.push({
					title: (i + 1) + ". " + sQuery,
					text: "Lorem ipsum sit dolem"
				});
			}
			var oData = {
				searchFieldContent: sQuery,
				resultData: aResultData
			};
			var oModel = new JSONModel();
			oModel.setData(oData);
			this._overlay.setModel(oModel);

			// set reference to shell and open overlay
			this._overlay.setShell(this.getView().byId("myShell"));
			this._overlay.open();
		},

		onCollapseAll: function() {
			var oTreeTable = this.getView().byId("TreeTableBasic");
			oTreeTable.collapseAll();
		},

		onExpandFirstLevel: function() {
			var oTreeTable = this.getView().byId("TreeTableBasic");
			oTreeTable.expandToLevel(1);
		}
	});

});