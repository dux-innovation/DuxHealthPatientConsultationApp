sap.ui.controller("view.confirmation",
{

    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * @memberOf view.confirmation
     */
    //	onInit: function() {
    //
    //	},

    /**
     * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
     * (NOT before the first rendering! onInit() is used for that one!).
     * @memberOf view.confirmation
     */
    //	onBeforeRendering: function() {
    //
    //	},

    /**
     * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
     * This hook is the same one that SAPUI5 controls get after being rendered.
     * @memberOf view.confirmation
     */
    //	onAfterRendering: function() {
    //
    //	},

    /**
     * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
     * @memberOf view.confirmation
     */
    //	onExit: function() {
    //
    //	}

    onNavButtonPress: function()
    {
        var app = sap.ui.getCore().byId("shell").getApp();
        var next = sap.ui.getCore().byId("view_dates");
        app.back(next, "slide");
    },

    onPressConfirm: function(o)
    {
        var oDialog1 = new sap.m.Dialog();
        oDialog1.setTitle("Confirmação");
        var oText = new sap.m.Text(
        {
            text: "Seu Consulta foi agendado com sucesso. Você receberá um alerta 24 horas antes do mesmo"
        });
        oDialog1.addContent(oText);
        oDialog1.addButton(new sap.m.Button(
        {
            text: "OK",
            press: function()
            {
                oDialog1.close();
            }
        }));
        oDialog1.open();
    },

    onPressCancel: function(o)
    {
        var oDialog1 = new sap.m.Dialog();
        oDialog1.setTitle("Cancelamento");
        var oText = new sap.m.Text(
        {
            text: "Solicitação de Consulta cancelada"
        });
        oDialog1.addContent(oText);
        oDialog1.addButton(new sap.m.Button(
        {
            text: "OK",
            press: function()
            {
                oDialog1.close();
            }
        }));
        oDialog1.open();
    },




});