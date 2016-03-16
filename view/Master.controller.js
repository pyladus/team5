jQuery.sap.require("sap.ui.model.json.JSONModel");

sap.ui.controller("Refugee_Book.view.Master", {
	onInit: function() {
			var oData = {logo: jQuery.sap.getModulePath("sap.ui.core", '/') + "mimes/logo/sap_50x26.png"};
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData(oData);
			this.getView().setModel(oModel);
		},
 
		handlePressConfiguration: function(oEvent) {
			var oItem = oEvent.getSource();
			var oShell = this.getView().byId("myShell");
			var bState = oShell.getShowPane();
			oShell.setShowPane(!bState);
			oItem.setShowMarker(!bState);
			oItem.setSelected(!bState);
		},
		
		main_page_nav: function(oevent) {

		var choosenFeature = oevent.getSource().getId();

		switch (choosenFeature) {
			case this.getView().createId("myprofile"):
				sap.ui.core.UIComponent.getRouterFor(this).navTo("MyProfile");
				break;
			case this.getView().createId("courses"):
				sap.ui.core.UIComponent.getRouterFor(this).navTo("CourseCategories"); //CoursePage		
				break;
			case this.getView().createId("jobmarket"):
				sap.ui.core.UIComponent.getRouterFor(this).navTo("JobPage");
				break;
			case this.getView().createId("cockpit"):
				sap.ui.core.UIComponent.getRouterFor(this).navTo("Cockpit");
				break;
			case this.getView().createId("group"):
				sap.ui.core.UIComponent.getRouterFor(this).navTo("View");
				break;
			case this.getView().createId("view1"):
				sap.ui.core.UIComponent.getRouterFor(this).navTo("View1");
				break;
			default:
				sap.ui.core.UIComponent.getRouterFor(this).navTo("CoursePage");

		}
		//sap.ui.core.UIComponent.getRouterFor(this).navTo("OverallView");
		},
		
		
		onPress: function(oevent) {

			sap.ui.core.UIComponent.getRouterFor(this).navTo("View");

		},


		press : function(evt) {
		alert("The generic tile is pressed.");
		},
 
		handleLogoffPress: function(oEvent) {
			sap.m.MessageToast.show("Logoff Button Pressed");
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
			if(sQuery == "") {
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
			for(var i = 0; i < 10; i++) {
				aResultData.push({
									title:(i + 1) + ". " + sQuery,
									text:"Lorem ipsum sit dolem"
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
		}
	
});