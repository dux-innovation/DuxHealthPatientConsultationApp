sap.ui.jsview("view.dates",
{

    /** Specifies the Controller belonging to this View. 
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf view.dates
     */
    getControllerName: function()
    {
        return "view.dates";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf view.dates
     */
    createContent: function(oController)
    {
        var table = new sap.m.Table(
        {
            items:
            {
                path: "/especialidades/0/unidades/0/dates",
                template: new sap.m.ColumnListItem(
                {
                    type: sap.m.ListType.Active,
                    cells: [new sap.m.Text(
                    {
                        text: "{dia}",
                    }), new sap.m.Text(
                    {
                        text: "{horario}",
                    }), ]
                })
            },
            headerToolbar: new sap.m.Toolbar(
            {
                content: [], // sap.ui.core.Control
            }),
            infoToolbar: undefined,
            columns: [
                new sap.m.Column(
                {
                    header: new sap.m.Text(
                    {
                        text: "Dia",
                    })
                }),
                new sap.m.Column(
                {
                    header: new sap.m.Text(
                    {
                        text: "Horário",
                    })
                })
            ],
            itemPress: oController.onItemPress,

        });

        var page = new sap.m.Page(
        {
            title: "Solicitação de Consulta - Dia e Horário",
            showNavButton: true,
            navButtonPress: oController.onNavButtonPress,
            content: [table]
        });

        return page;
    }

});