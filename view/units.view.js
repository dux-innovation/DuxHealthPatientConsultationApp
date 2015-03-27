sap.ui.jsview("view.units",
{

    /** Specifies the Controller belonging to this View. 
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf view.units
     */
    getControllerName: function()
    {
        return "view.units";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf view.units
     */
    createContent: function(oController)
    {
        var table = new sap.m.Table(
        {
            items:
            {
                path: "/especialidades/0/unidades",
                template: new sap.m.ColumnListItem(
                {
                    type: sap.m.ListType.Active,
                    cells: [new sap.m.Text(
                    {
                        text: "{unidade}",
                    }), ]
                })
            },
            headerToolbar: new sap.m.Toolbar(
            {
                content: [], // sap.ui.core.Control
            }),
            infoToolbar: undefined,
            columns: [new sap.m.Column(
            {
                header: new sap.m.Text(
                {
                    text: "Unidade",
                })
            })],
            itemPress: oController.onItemPress,
        });

        var page = new sap.m.Page(
        {
            title: "Solicitação de Consulta - Unidade",
            showNavButton: true,
            navButtonPress: oController.onNavButtonPress,
            content: [table]
        });

        return page;
    }

});