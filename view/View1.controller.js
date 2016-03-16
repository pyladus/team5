sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel'
], function(jQuery, Controller, JSONModel) {
	"use strict";

	return Controller.extend("Refugee_Book.view.view1", {
		onNavBack: function() {
			window.history.go(-1);
		},
		onInit: function() {
			// set mock model
			///////////////////////////////////  vizFrame for line chart //////////////////////////////////////////////////////////////////////////
			var oVizFrame = this.getView().byId("idoVizFrame");
			//var oVizFramePath = jQuery.sap.getModulePath("sap.suite.ui.commons.sample.ChartContainerSimpleToolbar", "/ChartContainerData.json")

			//var oModel_bl = new sap.ui.model.json.JSONModel(oVizFramePath);
			var oModel_bl = new sap.ui.model.json.JSONModel({
				"Products": [{
					"Country": "09.2015",
					"Profit": 100,
					"Forcast": 200,
					"Target": 20,
					"Revenue": 20,
					"Revenue2": 20,
					"Revenue3": 512
				}, {
					"Country": "10.2015",
					"Profit": 159,
					"Forcast": 140,
					"Target": 150,
					"Revenue": 30,
					"Revenue2": 100,
					"Revenue3": 303
				}, {
					"Country": "11.2015",
					"Profit": 129,
					"Forcast": 120,
					"Target": 100,
					"Revenue": 200,
					"Revenue2": 222,
					"Revenue3": 263
				}, {
					"Country": "12.2015",
					"Profit": 58,
					"Forcast": 60,
					"Target": 80,
					"Revenue": 116,
					"Revenue2": 152,
					"Revenue3": 113
				}, {
					"Country": "01.2016",
					"Profit": 149,
					"Forcast": 120,
					"Target": 150,
					"Revenue": 249,
					"Revenue2": 292,
					"Revenue3": 443
				}, {
					"Country": "02.2016",
					"Profit": 49,
					"Forcast": 60,
					"Target": 55,
					"Revenue": 149,
					"Revenue2": 242,
					"Revenue3": 243
				}]
			});
			var oDataset_bl = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					name: 'Country',
					value: "{Country}"
				}],
				measures: [{
					group: 1,
					name: "Revenue",
					value: "{Revenue}"
				}, {
					group: 1,
					name: "Target",
					value: "{Target}"
				}],
				data: {
					path: "/Products"
				}
			});

			oVizFrame.setVizProperties({
				plotArea: {
					showGap: true
				},

				title: {
					visible: false
				}
			});
			oVizFrame.setDataset(oDataset_bl);
			oVizFrame.setModel(oModel_bl);

			var feedPrimaryValues_bl7 = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "primaryValues",
					'type': "Measure",
					'values': ["Revenue", "Target"]
				}),
				feedAxisLabels_bl7 = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "axisLabels",
					'type': "Dimension",
					'values': ["Country"]
				});

			oVizFrame.addFeed(feedPrimaryValues_bl7);
			oVizFrame.addFeed(feedAxisLabels_bl7);
			oVizFrame.setVizType('line');

			///////////////////////////////////  vizFrame for bubble chart //////////////////////////////////////////////////////////////////////////

			var oVizFrameProduct = this.getView().byId("bdoVizFrame");

			var oVizFrameProductModel = new sap.ui.model.json.JSONModel({
				"businessData": [{
					"Sales_Month": "Germany",
					"Marital Status": "Married",
					"Customer Gender": "Female",
					"Sales_Quarter": "Q1",
					"Cost": 190,
					"Unit Price": 128.3,
					"Gross Profit": 321,
					"Sales Revenue": 120
				}, {
					"Sales_Month": "France",
					"Marital Status": "Married",
					"Customer Gender": "Female",
					"Sales_Quarter": "Q2",
					"Cost": 189.9,
					"Unit Price": 151.17,
					"Gross Profit": 181.59,
					"Sales Revenue": 471.49
				}, {
					"Sales_Month": "UK",
					"Marital Status": "Married",
					"Customer Gender": "Female",
					"Sales_Quarter": "Q3",
					"Cost": 135,
					"Unit Price": 321,
					"Gross Profit": 124,
					"Sales Revenue": 349
				}, {
					"Sales_Month": "US",
					"Marital Status": "Married",
					"Customer Gender": "Female",
					"Sales_Quarter": "Q4",
					"Cost": 169.4,
					"Unit Price": 185.2,
					"Gross Profit": 153.8,
					"Sales Revenue": 145.9
				}, {
					"Sales_Month": "Italy",
					"Marital Status": "Married",
					"Customer Gender": "Male",
					"Sales_Quarter": "Q1",
					"Cost": 270.2,
					"Unit Price": 175,
					"Gross Profit": 154.3,
					"Sales Revenue": 164.9
				}]
			});

			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					name: "Sales_Quarter",
					value: "{Sales_Quarter}"
				}, {
					name: "Customer Gender",
					value: "{Customer Gender}"
				}, {
					name: "Sales_Month",
					value: "{Sales_Month}"
				}],
				measures: [{
					name: "Cost",
					value: "{Cost}"
				}, {
					name: "Unit Price",
					value: "{Unit Price}"
				}, {
					name: "Gross Profit",
					value: "{Gross Profit}"
				}, {
					name: "Sales Revenue2",
					value: "{Sales Revenue}"
				}],
				data: {
					path: "/businessData"
				}
			});
			oVizFrameProduct.setDataset(oDataset);
			oVizFrameProduct.setModel(oVizFrameProductModel);

			oVizFrameProduct.setVizProperties({
				title: {
					visible: false
				}
			});

			var oFeedPrimaryValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
				uid: "primaryValues",
				type: "Measure",
				values: ["Cost"]
			});
			var oFeedSecondaryValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
				uid: "secondaryValues",
				type: "Measure",
				values: ["Unit Price"]
			});
			var oFeedBubbleWidth = new sap.viz.ui5.controls.common.feeds.FeedItem({
				uid: "bubbleWidth",
				type: "Measure",
				values: ["Gross Profit"]
			});
			var oFeedBubbleHeight = new sap.viz.ui5.controls.common.feeds.FeedItem({
				uid: "bubbleHeight",
				type: "Measure",
				values: ["Sales Revenue"]
			});
			var oFeedRegionColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
				uid: "regionColor",
				type: "Dimension",
				values: ["Sales_Month", "Sales_Quarter"]
			});
			var oFeedRegionShape = new sap.viz.ui5.controls.common.feeds.FeedItem({
				uid: "regionShape",
				type: "Dimension",
				values: ["Marital Status"]
			});

			oVizFrameProduct.addFeed(oFeedPrimaryValues);
			oVizFrameProduct.addFeed(oFeedSecondaryValues);
			oVizFrameProduct.addFeed(oFeedBubbleWidth);
			oVizFrameProduct.addFeed(oFeedBubbleHeight);
			oVizFrameProduct.addFeed(oFeedRegionColor);
			//oVizFrameProduct.addFeed(oFeedRegionShape);
			oVizFrameProduct.setVizType("bubble");
		}
	});

});