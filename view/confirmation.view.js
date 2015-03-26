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

        var button_confirm = new sap.m.Button(
        {
            text: "Confirmar",
            type: sap.m.ButtonType.Accept,
            press: function()
            {
                alert('Alert from ' + button_confirm.getText());
            }
        });


        var button_cancel = new sap.m.Button(
        {
            text: "Cancelar",
            type: sap.m.ButtonType.Reject,
            press: function()
            {
                alert('Alert from ' + button_cancel.getText());
            }
        });

        var page = new sap.m.Page(
        {
            title: "Solicitação de Exame - Confirmação",
            showNavButton: true,
            navButtonPress: oController.onNavButtonPress,
            content: [button_confirm, button_cancel]
        });

        return page;
    }

});