sap.ui.controller("Refugee_Book.view.MyProfile", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf Refugee_Book.view.SampleNavPage
	 */
	onInit: function() {
			var model = new sap.ui.model.json.JSONModel();
			model.loadData("./all.json", false);
			this.getView().setModel(model);
		},
		onPress: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("JobPage");
		},

	onNavBack: function() {
		window.history.go(-1);
	},

		
		onNavButtonPress: function() {
		window.history.go(-1);
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
		},

        onCollapseAll: function () {
            var oTreeTable = this.getView().byId("TreeTableBasic");
            oTreeTable.collapseAll();
        },

        onExpandFirstLevel: function () {
            var oTreeTable = this.getView().byId("TreeTableBasic");
            oTreeTable.expandToLevel(1);
        },
        

	filterDataFacebook: function(oControlEvent) {
		var model= new sap.ui.model.json.JSONModel();
		if(!oControlEvent.getParameters().state){
			model.loadData("./facebook.json", false);
			this.getView().setModel(model);
		}
		else{
			model.loadData("./all.json", false);
			this.getView().setModel(model);
		}
	},
	
		filterDataYoutube: function(oControlEvent) {
		var model= new sap.ui.model.json.JSONModel();
		if(!oControlEvent.getParameters().state){
			model.loadData("./youtube.json", false);
			this.getView().setModel(model);
		}
		else{
			model.loadData("./facebook.json", false);
			this.getView().setModel(model);
		}
	},

	test: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("View1");
	}
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf Refugee_Book.view.SampleNavPage
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf Refugee_Book.view.SampleNavPage
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf Refugee_Book.view.SampleNavPage
	 */
	//	onExit: function() {
	//
	//	}

});