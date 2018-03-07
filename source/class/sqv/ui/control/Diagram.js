/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2010 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Tristan Koch (tristankoch)

************************************************************************ */

/* ************************************************************************


************************************************************************ */

/**
 *
 * Desktop, Window
 *
 */

qx.Class.define("sqv.ui.control.Diagram",
{
  extend : qx.ui.container.Composite,

  construct: function(model)
  {
    this.base(arguments);
    
    // Configure layout
    var layout = new qx.ui.layout.VBox;
    this.setLayout(layout);
    
    // Diagram header area - includes diagram name and properties button 
    var headerlayout = new qx.ui.layout.HBox().set({spacing: 10});
    var header = new qx.ui.container.Composite(headerlayout);
    //header.setAppearance("app-header");
    var title = new qx.ui.basic.Label(this.getName());
    var btndiagramprops = new qx.ui.form.Button("Settings", "icon/18/action/settings-black.png").set({show: "icon", padding: [2,4]});
    
    header.add(title);
    header.add(btndiagramprops);
    
    this.add(header);

    // Data
    //this.shapes = {};
    //this.connectors = {};
    
    // Diagram Area Pane
    var diagramarea = new qx.ui.splitpane.Pane("horizontal");
    //mainsplit.setAppearance("app-splitpane");
    this.diagramarea = diagramarea;
    
    this.add(diagramarea);
    
    //**********************
    //var windowManager = new qx.ui.window.Manager();
    
    var diagramdesktop = new qx.ui.window.Desktop();
    
    var win1 = new qx.ui.window.Window("Window 1");
    win1.setLayout(new qx.ui.layout.VBox(10));
	win1.setWidth(200);
	win1.setHeight(80);
	win1.setShowMinimize(false);
	win1.setShowMaximize(false);
	
	var conn1 = new qx.ui.window.Window("Connector 1");
	conn1.setLayout(new qx.ui.layout.Canvas());
	conn1.set({appearance: "connector", width: 200, height: 300, movable: false, resizable: false});
	conn1.getChildControl("captionbar").setVisibility("hidden");
	
	var canvas1 = new qx.ui.embed.Canvas().set({
	  canvasWidth: conn1.getWidth(),
	  canvasHeight: conn1.getHeight(),
	  syncDimension: true,
	  padding: 0,
	  margin: 0
	});
	
	canvas1.addListener("redraw", function(e) {
	  var data = e.getData();
	  var ctx = data.context;
	
	  var p1 = {x: 0, y: 20};
	  var p2 = {x: data.width, y: data.height - 20};
	  var size = 8;
	  
	  var angle = Math.atan2((p2.y - p1.y) , (p2.x - p1.x));
	  var hyp = Math.sqrt((p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y));
	
	  ctx.save();
	  ctx.translate(p1.x, p1.y);
	  ctx.rotate(angle);
	
	  // line
	  ctx.beginPath();	
	  ctx.moveTo(0, 0);
	  ctx.lineTo(hyp - size, 0);
	  ctx.stroke();
	
	  // triangle
	  ctx.fillStyle = 'blue';
	  ctx.beginPath();
	  ctx.lineTo(hyp - size, size);
	  ctx.lineTo(hyp, 0);
	  ctx.lineTo(hyp - size, -size);
	  ctx.fill();
	
	  ctx.restore();
	});
	
	conn1.add(canvas1, {edge: 0});
	
	var win2 = new qx.ui.window.Window("Window 2");
	win2.setLayout(new qx.ui.layout.VBox(10));
	win2.setWidth(200);
	win2.setHeight(80);
	win2.setShowMinimize(false);
	win2.setShowMaximize(false);
	
	var label = new qx.ui.basic.Label("Hello");
	
	diagramdesktop.add(win1);
	win1.moveTo(20,30);
	win1.open();
	
	diagramdesktop.add(conn1);
	conn1.moveTo(220,20);
	conn1.open();
	
	diagramdesktop.add(win2);
	win2.moveTo(420,220);
	win2.open();
	
	//diagramdesktop.add(label, {left:0, bottom:0});
	
	win1.addListener("move", function(e) {
	  var edata = e.getData();
	  conn1.moveTo(edata.left + edata.width, edata.top);
	  if (win2.getBounds()) {
	    var winbounds = win2.getBounds();	     
	    conn1.set({
	    	width: winbounds.left - edata.left - edata.width, 
	    	height: winbounds.top + winbounds.height - edata.top
	    });
	  }
	});
	
	win2.addListener("move", function(e) {
	  if (win1.getBounds()) {
	    win1.fireDataEvent("move", win1.getBounds());
	  }
	});
	
	diagramarea.add(diagramdesktop, 1);

    
    //**********************
    
    // Rt Side Object property/config Pane
    var infosplit = new qx.ui.splitpane.Pane("horizontal");
    //infosplit.setDecorator(null);
    this._infosplit = infosplit;
    
    // Lft Side Shape Chooser
    var leftComposite = this._leftComposite = new qx.ui.container.Composite();
    leftComposite.setLayout(new qx.ui.layout.VBox());
    diagramarea.add(leftComposite, 0);

    //this.initWidgets();
  },
  
  
  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
  	/** The name of the diagram */
    name :
    {
      nullable : true,
      check : "String",
      init : "Diagram01"
    },
    
    model :
    {
      nullable : true,
      check : "String",
      init : "{name : diagram01}"
    }
  },
  
  
  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {

    // ------------------------------------------------------------------------
    //   CONSTRUCTOR HELPERS
    // ------------------------------------------------------------------------
    _infosplit : null,
    __shapenamecount : 0,

    __loadFromFile: function()
    {},

    __createShape : function()
    {
      // Create the Window
      var win = new qx.ui.window.Window("Shape");
      win.setWidth(200);
      win.setHeight(80);
      win.setShowMinimize(false);
      win.setShowMaximize(false);
      //win.setShowStatusbar(true);
      //win.setStatus("Demo loaded");

      // Test for move listener
      win.addListener("move", function(e) {
        this.debug("Moved to: " + e.getData().left + "x" + e.getData().top);
      }, this);

      // Test for resize listener
      win.addListener("resize", function(e) {
        this.debug("Resized to: " + e.getData().width + "x" + e.getData().height);
      }, this);

      return win;
    },


    __createConnector : function()
    {
      var win = new qx.ui.window.Window("Second Window", "icon/16/apps/internet-feed-reader.png");
      win.setLayout(new qx.ui.layout.VBox(10));
      win.setStatus("Application is ready");

      return win;
    },


    /**
     * TODOC
     *
     * @lint ignoreDeprecated(alert)
     * @return {qx.ui.window.Window} Modal dialog window
     */
    __getModalWindow2 : function()
    {
      var wm2 = new qx.ui.window.Window("Second Modal Dialog");
      wm2.setLayout(new qx.ui.layout.VBox(10));
      wm2.setModal(true);
      wm2.setShowClose(false);
      wm2.moveTo(300, 300);
      this.__desktop.add(wm2);


      return wm2;
    }
  }
});
