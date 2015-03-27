sap.ui.jsview("view.confirmation",
{

    /** Specifies the Controller belonging to this View. 
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf view.confirmation
     */
    getControllerName: function()
    {
        return "view.confirmation";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf view.confirmation
     */
    createContent: function(oController)
    {
        var layout_vertical = sap.ui.layout.VerticalLayout(
        {
            width: "100%",
        });

        var button_confirm = new sap.m.Button(
        {
            text: "Confirmar",
            width: "100%",
            type: sap.m.ButtonType.Accept,
            press: oController.onPressConfirm,
        });


        var button_cancel = new sap.m.Button(
        {
            text: "Cancelar",
            width: "100%",
            type: sap.m.ButtonType.Reject,
            press: oController.onPressCancel,
        });

        layout_vertical.addContent(button_confirm);
        layout_vertical.addContent(button_cancel);

        var page = new sap.m.Page(
        {
            title: "Solicitação de Consulta - Confirmação",
            showNavButton: true,
            navButtonPress: oController.onNavButtonPress,
            content: [layout_vertical]
        });

        return page;
    }

});