sap.ui.jsview("view.specialties",
{

    /**
     * Specifies the Controller belonging to this View. In the case that it is
     * not implemented, or that "null" is returned, this View does not have a
     * Controller.
     *
     * @memberOf view.specialties
     */
    getControllerName: function()
    {
        return "view.specialties";
    },

    /**
     * Is initially called once after the Controller has been instantiated. It
     * is the place where the UI is constructed. Since the Controller is given
     * to this method, its event handlers can be attached right away.
     *
     * @memberOf view.specialties
     */
    createContent: function(oController)
    {
        var table = new sap.m.Table(
        {
            items:
            {
                path: "/especialidades",
                template: new sap.m.ColumnListItem(
                {
                    type: sap.m.ListType.Active,
                    cells: [new sap.m.Text(
                    {
                        text: "{nome}",
                    }), ],
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
                    text: "Especialidade",
                })
            })],

            itemPress: oController.onItemPress,
        });

        var page = new sap.m.Page(
        {
            title: "Solicitação de Exame - Especialidades",
            showNavButton: true,
            navButtonPress: oController.onNavButtonPress,
            content: [table]
        });

        return page;
    }

});