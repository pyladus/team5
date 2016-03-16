jQuery.sap.require("sap.ui.core.mvc.Controller");
jQuery.sap.require("sap.ca.ui.model.format.AmountFormat");
jQuery.sap.require("sap.m.TablePersoController");
jQuery.sap.require("sap.ui.model.FilterOperator");

sap.ui.core.mvc.Controller.extend("Refugee_Book.view.Master", {
	_oCatalog: null,
	_oResourceBundle: null,
	
	
	onInit: function() {
		
				// set explored app's demo model on this sample
	// var oModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/products.json"));
	// this.getView().setModel(oModel);	

	},
	
	onSearch : function (oEvt) {
 
			// add filter for search
			// var aFilters = [];
			// var sQuery = oEvt.getSource().getValue();
			// if (sQuery && sQuery.length > 0) {
			// 	var filter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.Contains, sQuery);
			// 	aFilters.push(filter);
			// }
 
			// // update list binding
			// var list = this.getView().byId("idList");
			// var binding = list.getBinding("items");
			// binding.filter(aFilters, "Application");
	},
 
		onSelectionChange : function (oEvt) {
 
			// var oList = oEvt.getSource();
			// var oLabel = this.getView().byId("idFilterLabel");
			// var oInfoToolbar = this.getView().byId("idInfoToolbar");
 
			// // With the 'getSelectedContexts' function you can access the context paths
			// // of all list items that have been selected, regardless of any current
			// // filter on the aggregation binding.
			// var aContexts = oList.getSelectedContexts(true);
 
			// // update UI
			// var bSelected = (aContexts && aContexts.length > 0);
			// var sText = (bSelected) ? aContexts.length + " selected" : null;
			// oInfoToolbar.setVisible(bSelected);
			// oLabel.setText(sText);
		},
	
	press : function(evt) {
		alert("The generic tile is pressed.");
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
			default:
				sap.ui.core.UIComponent.getRouterFor(this).navTo("CoursePage");

		}

		//sap.ui.core.UIComponent.getRouterFor(this).navTo("OverallView");
	},
	
	onAfterRendering: function(){

	},

	onNavBack: function() {
		window.history.go(-1);
	}
	

});