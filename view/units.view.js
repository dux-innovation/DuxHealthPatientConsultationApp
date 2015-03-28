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
                    cells: [
                            new sap.m.Image(
                		            {
                		                src: "{foto}",
                		            }),
                		            new sap.m.Text(
        		                    {
        		                        text: "{distancia}",
        		                        textAlign : sap.ui.core.TextAlign.Center,
        		                    }),
                            new sap.m.Text(
		                    {
		                        text: "{dia1}",
		                    }),
		                    new sap.m.Text(
				                    {
				                        text: "{dia2}",
				                    }),
				                    
				                    new sap.m.Text(
						                    {
						                        text: "{dia3}",
						                    }),
						                    
						                    new sap.m.Text(
								                    {
								                        text: "{dia4}",
								                    }),
								                    new sap.m.Text(
										                    {
										                        text: "{dia5}",
										                    }),
										                    
										                    new sap.m.Text(
												                    {
												                        text: "{dia6}",
												                    }),
		                   ],
                    
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
				                text: "",				                
				            }),
				        	width: "294px",
				        }),
				        
				        new sap.m.Column(
	                    {
	                        header: new sap.m.Text(
	                        {
	                            text: "",
	                        }),
	                    	width: "20%",
	                    }),
			                    
                      new sap.m.Column(
                    {
                        header: new sap.m.Text(
                        {
                            text: "Seg (30/03)",
                        })
                    }),
                    
                    new sap.m.Column(
                        {
                            header: new sap.m.Text(
                            {
                                text: "Seg (31/03)",
                            })
                        }),
                            
                            
                    new sap.m.Column(
                    {
                        header: new sap.m.Text(
                        {
                            text: "Qua (01/04)",
                        })
                    }),
                            
                        new sap.m.Column(
                        {
                            header: new sap.m.Text(
                            {
                                text: "Qui (02/04)",
                            })
                        }),
                        
                        new sap.m.Column(
                        {
                            header: new sap.m.Text(
                            {
                                text: "Sex (03/04)",
                            })
                        }),
                                               
        
                 new sap.m.Column(
                {
                header: new sap.m.Text(
                {
                    text: "Sab (04/04)",
                }),
                
                
            })],
            itemPress: oController.onItemPress,
        });
        
        // create the HTML control for Sample 1 (id and variable name are fixed)
    	var html1 = new sap.ui.core.HTML("html1", {
    		// the static content as a long string literal
    		content:"<div><iframe align=\"center\" frameborder=\"0\" name=\"mapa\" width=\"1600\" height=\"300\" src=\"graph_001.html\"></iframe></div>",
    		preferDOM : false,			
    		// use the afterRendering event for 2 purposes
    		afterRendering : function(e) {

    			// a) add dynamic behavior
    			if ( !e.getParameters()["isPreservedDOM"] ) {
    				var $=e.getSource().$();
    				$.click(function(e) {
    					addColorBlockAtCursor($, e, 64, 8);
    				});
    			}
        
    			// just for illustration purposes: update the redraw infos in the page
//    			updateRedrawInfo(e.getSource().getId()); // note: does not touch / invalidate any UI5 control!

    		}
    	});

    	var page = new sap.m.Page(
        {
            title: "Cardiologista",
            showNavButton: true,
            navButtonPress: oController.onNavButtonPress,
            content: [html1, table]
        });

        return page;
    }

});
