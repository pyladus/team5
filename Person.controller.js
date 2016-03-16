sap.ui.controller("Refugee_Book.view.Person", {
	onNavBack: function() {
		window.history.go(-1);
	},
	onPress: function() {
		sap.ui.core.UIComponent.getRouterFor(this).navTo("MyProfile");
	}
});