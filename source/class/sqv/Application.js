/* ************************************************************************

   Copyright: SQville Software 2018

   License: MIT

   Authors: Chris Eskew

************************************************************************ */

/**
 * This is the main application class of your custom application "sqv"
 *
 * @asset(sqv/*)
 */
qx.Class.define("sqv.Application",
{
  extend : qx.application.Standalone,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    _northBox : null,
    
    _westBox : null,
    
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */
     
     
     
      /****************************************
       *  Mixin new sqv features 
       ****************************************/
    
	  // Prep the Image widget to have font handling abilities
	  qx.Class.include(qx.ui.basic.Image, sqv.ui.basic.MImage);
	  //qx.Class.include(qx.ui.basic.Image, qx.ui.core.MNativeOverflow);
	  
	  // Prep Atoms to have image property handling abilities
	  qx.Class.include(qx.ui.basic.Atom, sqv.ui.basic.MAtom);
	  //qx.Class.include(qx.ui.basic.Atom, qx.ui.core.MNativeOverflow);
	  
	  // Prep tables Header Cell to have image property handling abilities
	  qx.Class.include(qx.ui.table.headerrenderer.HeaderCell, sqv.ui.table.MHeaderCell);
	  
	  // Add the beforeContent property to the Decorator class
	  qx.Class.include(qx.ui.decoration.Decorator, sqv.ui.decoration.MBeforeContent);
	  qx.Class.include(qx.ui.decoration.Decorator, sqv.ui.decoration.MFreestyleCss);
	  
	  // Add FontAwesome specific Appearance, Decoration and Font entries to the current theme 
	  qx.Theme.include(sqv.theme.clean.Appearance, sqv.fonticon.FontAwesome.Appearance);
	  qx.Theme.include(sqv.theme.clean.Decoration, sqv.fonticon.FontAwesome.Decoration);
	  qx.Theme.include(sqv.theme.clean.Font, sqv.fonticon.FontAwesome.Font);
	  
	  
	  
	  
      // Create a button
      var button1 = new qx.ui.form.Button("Follow").set({allowGrowX: false});
      
      // icon button example
      var iconbutton1 = new qx.ui.form.Button("Icon only Button", "sqv/test.png").set({show: "icon", allowGrowX: false, padding: [10,10]});
       
     
      var button2 = new qx.ui.form.Button("FontIcon Button", "").set({allowGrowX: false});
      button2.setAppearance("search-button");
      
      var togglebutton = new qx.ui.form.ToggleButton("Toggle Button", "sqv/test.png").set({allowGrowX: false});
      
      // data for virtual widgets
      var rawData = [];
      for (var i=1; i<24; i++)
      {
        rawData.push(i + "'s Icon");
      }
      var model = qx.data.marshal.Json.createModel(rawData);

      
      // primary button example
      var primbutton1 = new qx.ui.form.Button("Save").set({appearance: "primary-button", allowGrowX: false});
      var button3 = new qx.ui.form.Button("Discard").set({allowGrowX: false});
      button3.setFocusable(false);
      
      // seconary button example
      var secbutton1 = new qx.ui.form.Button("Okay").set({appearance: "secondary-button", allowGrowX: false});
      var button4 = new qx.ui.form.Button("Cancel");
      button4.setFocusable(false);
      
      // Qx Image test
      var qximage = new qx.ui.basic.Image();
      //qximage.setScale(true);
      
      var selectBox = new qx.ui.form.SelectBox().set({allowGrowX: false});
      selectBox.setWidth(270);
      for (var i=0; i<24; i++)
      {
        var tempItem = new qx.ui.form.ListItem("Item " + (i+1));
        tempItem.setAppearance("combobox-listitem");
        selectBox.add(tempItem);
      }
      
      // Virtual SelectBox
      var virtselectBox = new qx.ui.form.VirtualSelectBox(model).set({allowGrowX: false});
      virtselectBox.setWidth(270);
     
      
      //stand alone Fonticons
      var faiconsearch = new qx.ui.basic.Image().set({appearance:"fa-search"});
      var faiconcal = new qx.ui.basic.Image().set({appearance:"fa-calendar"});
      var faiconhtml5 = new qx.ui.basic.Image().set({appearance:"fa-html5"});
      var faiconfolderopen = new qx.ui.basic.Image().set({appearance:"fa-folder-open"});
      var fonticonbox = new qx.ui.container.Composite(new qx.ui.layout.HBox().set({spacing: 10}));
      fonticonbox.add(faiconsearch);
      fonticonbox.add(faiconcal);
      fonticonbox.add(faiconhtml5);
      fonticonbox.add(faiconfolderopen);
      
      // TextField
      var textbox = new qx.ui.form.TextField();
      textbox.setPlaceholder("Search...");
      textbox.setWidth(270);
      //textbox.setTabIndex(1);
      //textbox.setRequired(true);
      var textboxform = new qx.ui.form.TextField();
      textboxform.setPlaceholder("First Name");
      textboxform.setWidth(270);
      textboxform.setAppearance("textfield-form");
      var datefield = new qx.ui.form.DateField().set({allowGrowX: false});
      datefield.setPlaceholder("Date of Birth");
      datefield.setWidth(270);
      
      // List
      var list = new qx.ui.form.List().set({allowGrowX: false, width: 200});
      // fill the list with some stuff
      for (var i=0; i<24; i++)
      {
        list.add(new qx.ui.form.ListItem("Item " + (i+1)));
      }
      
      // Upload
      var upload = new sqv.ui.control.Upload("Drag n drop, or", "Browse", null);
      upload.set({
      	height: 150,
      	spacing: 20,
      	center: true,
      	demo: true
      });
      var uploaddemorestore = new qx.ui.form.Button("Restore").set({allowGrowX: false, appearance: "primary-button"});
      uploaddemorestore.addListener("execute", function(){	
      	var progressbar = upload.getChildControl("progressbar", true);
      	progressbar.setValue(0);
      }, this);
      var uploadprogress = new qx.ui.form.Button("+ 10 percent").set({appearance: "tertiary-button", allowGrowX: false});
      uploadprogress.addListener("execute", function(){	
      	var progressbar = upload.getChildControl("progressbar", true);
      	progressbar.setValue(progressbar.getValue()+10);
      }, this);
      
      // Diagram
      var diagram = new sqv.ui.control.Diagram().set({minHeight: 450, decorator: "diagram"});
      
      // ComboBox
      var combobox1 = new qx.ui.form.ComboBox().set({placeholder: "Select", width: 270, allowGrowX: false});
      // fill the combo box with some stuff
      for (var i=1; i<24; i++)
      {
        var tempItem = new qx.ui.form.ListItem(i + "'s Icon");
        tempItem.setAppearance("combobox-listitem");
        combobox1.add(tempItem);
      }
      
      // Virtual Combobox
      var virtcomboBox = new qx.ui.form.VirtualComboBox().set({allowGrowX: false});
      virtcomboBox.setWidth(270);
      virtcomboBox.setModel(model);
      
      // Groupbox
      var groupbox = new qx.ui.groupbox.GroupBox("Groupbox Basic");
      var groupboxcon = new qx.ui.groupbox.GroupBox("Groupbox Connected");
      groupboxcon.setAppearance("groupbox-connected");
      var groupboxbluetop = new qx.ui.groupbox.GroupBox("Groupbox Blue Top");
      groupboxbluetop.setAppearance("groupbox-blue-top");
      var groupboxorangetop = new qx.ui.groupbox.GroupBox("Groupbox Orange Top");
      groupboxorangetop.setAppearance("groupbox-orange-top");
      var groupboxgreentop = new qx.ui.groupbox.GroupBox("Groupbox Green Top");
      groupboxgreentop.setAppearance("groupbox-green-top");
      
      // Radio Buttons
      var rbRed = new qx.ui.form.RadioButton("Red");
      var rbGreen = new qx.ui.form.RadioButton("Green");
      var rbBlue = new qx.ui.form.RadioButton("Blue");
      
      // Add all radio buttons to the manager
      var opbuttsmanager = new qx.ui.form.RadioGroup(rbRed, rbGreen, rbBlue);
      
      // Check boxes
      var cbOil = new qx.ui.form.CheckBox("Sun Oil");
      var cbTowel = new qx.ui.form.CheckBox("Towel");
      var cbBeer = new qx.ui.form.CheckBox("Beer");
      var cbBT =  new qx.ui.form.CheckBox("Bathing togs");
      
      cbBeer.setTriState(true);
      cbBeer.setValue(null);
      cbBT.setValue(true);
      cbBT.setEnabled(false);


      
      // Tab
      var tabView = new qx.ui.tabview.TabView();
	  var page1 = new qx.ui.tabview.Page("Basic");
	  page1.setLayout(new qx.ui.layout.VBox());
	  page1.add(new qx.ui.basic.Label("Basic Tab Content page 1").set({height:100}));
	  tabView.add(page1);
	  var page2 = new qx.ui.tabview.Page("Tab");
	  page2.setLayout(new qx.ui.layout.VBox());
	  tabView.add(page2);
	  page2.add(new qx.ui.basic.Label("Basic Tab Content page 2	"));
	  var page3 = new qx.ui.tabview.Page("Appearance");
	  page3.setLayout(new qx.ui.layout.VBox());
	  tabView.add(page3);
	  page3.add(new qx.ui.basic.Label("Spacebar Tab Content page 3"));
	  //tabView.setBarPosition("left");
	  var tabViewspacebar = new qx.ui.tabview.TabView();
	  tabViewspacebar.setAppearance("tabviewspacebar");
	  var spacebarpage1 = new qx.ui.tabview.Page("Spacebar");
	  spacebarpage1.setLayout(new qx.ui.layout.VBox());
	  spacebarpage1.add(new qx.ui.basic.Label("Spacebar Tab Content page 1").set({height:100}));
	  spacebarpage1.setAppearance("tabviewspacebar-page");
	  tabViewspacebar.add(spacebarpage1);
	  var spacebarpage2 = new qx.ui.tabview.Page("Tab");
	  spacebarpage2.setLayout(new qx.ui.layout.VBox());
	  spacebarpage2.setAppearance("tabviewspacebar-page");
	  tabViewspacebar.add(spacebarpage2);
	  spacebarpage2.add(new qx.ui.basic.Label("Spacebar Tab Content page 2	"));
	  var spacebarpage3 = new qx.ui.tabview.Page("Appearance");
	  spacebarpage3.setLayout(new qx.ui.layout.VBox());
	  spacebarpage3.setAppearance("tabviewspacebar-page");
	  tabViewspacebar.add(spacebarpage3);
	  spacebarpage3.add(new qx.ui.basic.Label("Spacebar Tab Content page 3"));
	  
	  //tabViewspacebar.setBarPosition("left");
	  
	  var tabViewspot = new qx.ui.tabview.TabView();
	  tabViewspot.setAppearance("tabviewspot");
	  var spotpage1 = new qx.ui.tabview.Page("Spot");
	  spotpage1.setLayout(new qx.ui.layout.VBox());
	  spotpage1.add(new qx.ui.basic.Label("Spot Tab Content page 1").set({height:100}));
	  spotpage1.setAppearance("tabviewspot-page");
	  tabViewspot.add(spotpage1);
	  var spotpage2 = new qx.ui.tabview.Page("Tab");
	  spotpage2.setLayout(new qx.ui.layout.VBox());
	  spotpage2.setAppearance("tabviewspot-page");
	  tabViewspot.add(spotpage2);
	  spotpage2.add(new qx.ui.basic.Label("Spot Tab Content page 2	"));
	  var spotpage3 = new qx.ui.tabview.Page("Appearance");
	  spotpage3.setLayout(new qx.ui.layout.VBox());
	  spotpage3.setAppearance("tabviewspot-page");
	  tabViewspot.add(spotpage3);
	  spotpage3.add(new qx.ui.basic.Label("Spot Tab Content page 3"));
	  
	  //tabViewspot.setBarPosition("right");
      
      // Tree
      var tree = this.getTree();
      
      // Spinner
      var spinner = new qx.ui.form.Spinner(0, 50, 100).set({allowGrowX: false});
      spinner.setWidth(100);
      
      // Slidder
      var slider = new qx.ui.form.Slider().set({allowGrowX: false});
      slider.setWidth(130);
      
      slider.bind("value", spinner, "value");
      spinner.bind("value", slider, "value");
      
      // MenuButton
      var menuButton = new qx.ui.form.MenuButton("MenuButton", null, this.__createMenuForMenuButton()).set({allowGrowX: false});
      
      // Split Button
      var splitButton = new qx.ui.form.SplitButton("SplitButton", null, this.__createMenuForSplitButton()).set({allowGrowX: false});
      splitButton.setWidth(140);
      
 
      // MENUBAR
      // TOOLBAR
      // PROGRESSBAR
      
      
      // Window
      var openwindowbutton = new qx.ui.form.Button("Open Window", "icon/18/apps/open-window-white.png").set({allowGrowX: false});
      openwindowbutton.setAppearance("primary-button");
      openwindowbutton.setGap(10);
      
      // Create the Window
      var win1 = new qx.ui.window.Window("Clean Theme default Window");
      win1.setLayout(new qx.ui.layout.VBox(10));
      win1.setShowStatusbar(true);
      win1.setStatus("Image (Happy Phone Guy) created by Roxarama.com");
      //win1.fadeIn(1200);
      //create an image for the body of the window
      var roxaramaguy = new qx.ui.basic.Image("sqv/Roxarama-Guy.png");
      win1.add(roxaramaguy);
      //this.getRoot().add(win, {left:20, top:20});
      
      openwindowbutton.addListener("execute", win1.open, win1);
      
      // TABLE
      var showtablebutton = new qx.ui.form.Button("Show Default Table", "icon/18/image/grid-white.png").set({allowGrowX: false});
      showtablebutton.setAppearance("tertiary-button");
      showtablebutton.setGap(10);
      
      // create the window to show the table
      var win2 = new qx.ui.window.Window("Clean Theme default Table");
      win2.setLayout(new qx.ui.layout.VBox(10));
      win2.setShowStatusbar(true);
      win2.setStatus("default Table widget");
      //win2.fadeIn(1400);
      // create the Table and add it to the window widget
      var table = this.__createTable();
      //table.setFocusedCell(2,5);
      // win2.add(table);
      
      // showtablebutton.addListener("execute", win2.open, win2);
      
      // Svg
      var svgbutton = new qx.ui.form.Button().set({appearance: "svgbutton", allowGrowX: false});
      
      var svgrawbutton = new qx.ui.form.Button().set({appearance: "svgrawbutton", allowGrowX: false});
      
      var scalesvgiconbox = new qx.ui.container.Composite(new qx.ui.layout.Flow(10, 10));
      var svgbathimg300 = new qx.ui.basic.Image().set({appearance: "fa-bath", width: 300, height: 300});
      var svgbathimg100 = new qx.ui.basic.Image().set({appearance: "fa-bath", width: 100, height: 100});
      var svgbathimg50 = new qx.ui.basic.Image().set({appearance: "fa-bath", width: 50, height: 50});
      var svgbathimg24 = new qx.ui.basic.Image().set({appearance: "fa-bath", width: 24, height: 24});
      scalesvgiconbox.add(svgbathimg300);
      scalesvgiconbox.add(svgbathimg100);
      scalesvgiconbox.add(svgbathimg50);
      scalesvgiconbox.add(svgbathimg24);
      
      // FreeStyleCSS
      var fileiconimagebox = new qx.ui.container.Composite(new qx.ui.layout.Flow(10, 10)).set({padding:6});
      var fileiconlgdoc = new qx.ui.basic.Image().set({appearance: "fileicon-lg", datatype: "doc", backgroundColor: "#307cf1"});
      var fileiconlgppt = new qx.ui.basic.Image().set({appearance: "fileicon-dy", datatype: "ppt", dynamicSize: [48,1.333], backgroundColor: "#d24726"});
      var fileiconlgxls = new qx.ui.basic.Image().set({appearance: "fileicon-lg", datatype: "xls", backgroundColor: "#0f9d58"});
      var fileiconlgpng = new qx.ui.basic.Image().set({appearance: "fileicon-lg", datatype: "png", backgroundColor: "#f4b400"});
      var fileiconlgmp3 = new qx.ui.basic.Image().set({appearance: "fileicon-lg", datatype: "mp3", backgroundColor: "#8e44ad"});
      //var fileiconsm = new qx.ui.basic.Image().set({appearance: "fileicon-sm", datatype: "doc"});
      
      fileiconimagebox.add(fileiconlgdoc);
      fileiconimagebox.add(fileiconlgppt);
      fileiconimagebox.add(fileiconlgxls);
      fileiconimagebox.add(fileiconlgpng);
      fileiconimagebox.add(fileiconlgmp3);
      //fileiconimagebox.add(fileiconsm);
      
      var icssimagebox = new qx.ui.container.Composite(new qx.ui.layout.Flow(10, 10)).set({padding:[1,6,1,6]});
      var icsscreditcardxlg = new qx.ui.basic.Image().set({appearance: "icss-credit-card", textSize: 320, width: 320, height: Math.round(.8*320)});
      var icsscreditcardlg = new qx.ui.basic.Image().set({appearance: "icss-credit-card", dynamicSize: [192,.8]});
      var icsscreditcardmd = new qx.ui.basic.Image().set({appearance: "icss-credit-card", textSize: 64, width: 64, height: Math.round(.8*64)});
      var icsscreditcardsm = new qx.ui.basic.Image().set({appearance: "icss-credit-card", textSize: 32, width: 32, height: Math.round(.8*32)});
      icssimagebox.add(icsscreditcardxlg);
      icssimagebox.add(icsscreditcardlg);
      icssimagebox.add(icsscreditcardmd);
      icssimagebox.add(icsscreditcardsm);
      
      var icssimagebox2 = new qx.ui.container.Composite(new qx.ui.layout.Flow(10, 10)).set({padding:[1,6,1,6]});
      var icssfileimage = new qx.ui.basic.Image().set({appearance: "icss-file-image", dynamicSize: [192,1.2]});
     // var icsstest = new qx.ui.basic.Image().set({appearance: "icss-test", width: 36, height: 36});
     // var icssfoldero = new qx.ui.basic.Image().set({appearance: "icss-folder-o"});
     // var icssfile = new qx.ui.basic.Image().set({appearance: "icss-file"});
      icssimagebox2.add(icssfileimage);
     // icssimagebox.add(icsstest);
     // icssimagebox.add(icssfoldero);
     // icssimagebox.add(icssfile);
      
      //scalesvgiconbox.add(svgbathimg50);
      //scalesvgiconbox.add(svgbathimg24);
      
      /*********************************************************************
       ******************** SCAFFOLDING ************************************
       *********************************************************************/
      
      // Center Scroll area to fit all controls
      var scroll = new qx.ui.container.Scroll();
      scroll.set({padding: 0, margin: 0, contentPadding: [0,0,0,0]});
      
      // West Scroll area to fit all lables
      var scrollwest = new qx.ui.container.Scroll();
      scrollwest.set({width: 160, padding: 0, margin: 0, contentPadding: [0,0,0,0]});
      
      // new canvas to hold controls
      var doc = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
      doc.set({padding:[0,90,26,0]});
      
      // Document is the application root
      var appdoc = this.getRoot();
      //appdoc.getContentElement().setStyle("touch-action", "none");
      //document.body.style.TouchAction = "none";
      // App's Dock 
      var appcompdock = new qx.ui.container.Composite(new qx.ui.layout.Dock(0, 0)).set({backgroundColor: "yellow"});
      // Dock north's HBox
      var northhbox = this._northBox = new qx.ui.container.Composite(new qx.ui.layout.HBox().set({spacing: 10})).set({backgroundColor: "orange"});
      // Dock east's VBox
      var westbox = this._westBox = new qx.ui.container.Composite(new qx.ui.layout.VBox().set({spacing: 6})).set({backgroundColor: "white", padding: [10,10,10,10]});
      // Dock center's VBox
      var centerbox = new qx.ui.container.Composite(new qx.ui.layout.VBox().set({spacing: 10})).set({backgroundColor: "white", padding: [10,26]});
      
      /*scroll.addListener("changeWidth", function(e) {
        this.debug("Checked: " + e.getData());
      }, this);*/
      
      var menutogglebutton = new qx.ui.form.ToggleButton("Menu", "sqv/test.png").set({padding: [2,4], allowGrowX: false, focusable: false, value: true});
      
      if (qx.core.Environment.get("device.type") == "mobile"){
      	menutogglebutton.setValue(false);
      	scrollwest.setVisibility("excluded");
      }
      	
      menutogglebutton.addListener("changeValue", function(e) {
        //this.debug("Checked: " + e.getData());
        if (e.getData())
        	scrollwest.setVisibility("visible");     	
        else
        	scrollwest.setVisibility("excluded");
      }, this);
      northhbox.add(menutogglebutton);
      northhbox.add(new qx.ui.basic.Label("sqv Clean Theme and Widget Browser"));
           
      appcompdock.add(northhbox, {edge:"north"});
      
 
      // Populate centerBox with content
      
      // centerBox -> BUTTON
      centerbox.add(this.__createHeaderLabel("Button"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.form.Button</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"button"</b> <em>(default)</em>').set({rich: true, paddingTop: 20}));
      centerbox.add(button1);
      centerbox.add(new qx.ui.basic.Label("<em>(icon only)</em>").set({rich: true}));
      centerbox.add(iconbutton1);
      centerbox.add(new qx.ui.basic.Label('<b>"primary-button"</b> <em>(backgroundColor property is set to a color named "primary", and defined in the themes Color class)</em>').set(
      	{rich: true, wrap: true, paddingTop: 20}));
      centerbox.add(primbutton1);
      centerbox.add(new qx.ui.basic.Label('<b>"secondary-button"</b> <em>(backgroundColor property is set to a color named "secondary", and defined in the themes Color class)</em>').set(
      	{rich: true, wrap: true, paddingTop: 20}));
      centerbox.add(secbutton1);      
      // seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> TOGGLEBUTTON
      centerbox.add(this.__createHeaderLabel("ToggleButton"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.form.ToggleButton</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"togglebutton"</b> <em>(default)</em>').set({rich: true, paddingTop: 20}));
      centerbox.add(togglebutton);   
      // seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> TEXTFIELD
      centerbox.add(this.__createHeaderLabel("TextField"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.form.TextField</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"textfield"</b> <em>(default)</em>').set({rich: true, paddingTop: 20}));
      centerbox.add(textbox);
      centerbox.add(new qx.ui.basic.Label('<b>"textfield-form"</b>').set({rich: true, paddingTop: 20}));
      centerbox.add(textboxform);  
      // seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> DATEFIELD
      centerbox.add(this.__createHeaderLabel("DateField"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.form.DateField</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"datefield"</b> <em>(default)</em>').set({rich: true}));
      centerbox.add(datefield);      
      //seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> COMBOBOX
      centerbox.add(this.__createHeaderLabel("ComboBox"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.form.Combobox</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"combobox"</b> <em>(default)</em>').set({rich: true}));
      centerbox.add(combobox1);
      //seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> VIRTUALCOMBOBOX
      centerbox.add(this.__createHeaderLabel("VirtualComboBox"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.form.VirtualCombobox</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"virtualcombobox"</b> <em>(default)</em>').set({rich: true}));
      centerbox.add(virtcomboBox);
      //seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> LIST
      centerbox.add(this.__createHeaderLabel("List"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.form.List</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"list"</b> <em>(default)</em>').set({rich: true}));
      centerbox.add(list);
      //seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> SELECTBOX
      centerbox.add(this.__createHeaderLabel("SelectBox"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.form.SelectBox</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"selectbox"</b> <em>(default)</em>').set({rich: true}));
      centerbox.add(selectBox);
      //seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> VIRTURALSELECTBOX
      centerbox.add(this.__createHeaderLabel("VirtualSelectBox"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.form.VirtualSelectBox</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"virtual-selectbox"</b> <em>(default)</em>').set({rich: true}));
      centerbox.add(virtselectBox);
      //seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> GROUPBOX
      centerbox.add(this.__createHeaderLabel("GroupBox"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.groupbox.GroupBox</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"groupbox"</b> <em>(default)</em>').set({rich: true}));
      centerbox.add(groupbox);
      centerbox.add(new qx.ui.basic.Label('<b>"groupbox-connected"</b>').set({rich: true}));
      centerbox.add(groupboxcon);
      centerbox.add(new qx.ui.basic.Label('<b>"groupbox-blue-top"</b>').set({rich: true}));
      centerbox.add(groupboxbluetop);
      centerbox.add(new qx.ui.basic.Label('<b>"groupbox-orange-top"</b>').set({rich: true}));
      centerbox.add(groupboxorangetop);
      centerbox.add(new qx.ui.basic.Label('<b>"groupbox-green-top"</b>').set({rich: true}));
      centerbox.add(groupboxgreentop);
      //seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> RADIOBUTTON
      centerbox.add(this.__createHeaderLabel("RadioButton"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.form.RadioButton</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"radiobutton"</b> <em>(default)</em>').set({rich: true}));
      centerbox.add(rbRed);
      centerbox.add(rbGreen);
      centerbox.add(rbBlue);
      //seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> CHECKBOX
      centerbox.add(this.__createHeaderLabel("CheckBox"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.form.CheckBox</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"checkbox"</b> <em>(default)</em>').set({rich: true}));
      centerbox.add(cbOil);
      centerbox.add(cbTowel);
      centerbox.add(cbBeer);
      centerbox.add(cbBT);
      //seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> TABVIEW
      centerbox.add(this.__createHeaderLabel("TabView"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.tabview.TabView</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"tabview"</b> <em>(default)</em>').set({rich: true}));
      centerbox.add(tabView);
      centerbox.add(new qx.ui.basic.Label('<b>"tabviewspacebar"').set({rich: true}));
      centerbox.add(tabViewspacebar);
      centerbox.add(new qx.ui.basic.Label('<b>"tabviewspot"</b>').set({rich: true}));
      centerbox.add(tabViewspot);
      //seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> TREE
      centerbox.add(this.__createHeaderLabel("Tree"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.tree.Tree</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"tree"</b> <em>(default)</em>').set({rich: true}));
      centerbox.add(tree);
      //seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> SPINNER
      centerbox.add(this.__createHeaderLabel("Spinner"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.form.Spinner</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"spinner"</b> <em>(default)</em>').set({rich: true}));
      centerbox.add(spinner);
      //seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> SLIDER
      centerbox.add(this.__createHeaderLabel("Slider"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.form.Slider</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"slider"</b> <em>(default)</em>').set({rich: true}));
      centerbox.add(slider);
      //seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> MENUBUTTON
      centerbox.add(this.__createHeaderLabel("MenuButton"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.form.MenuButton</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"menubutton"</b> <em>(default)</em>').set({rich: true}));
      centerbox.add(menuButton);
      //seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> SPLITBUTTON
      centerbox.add(this.__createHeaderLabel("SplitButton"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.form.SplitButton</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"splitbutton"</b> <em>(default)</em>').set({rich: true}));
      centerbox.add(splitButton);
      //seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> WINDOW
      centerbox.add(this.__createHeaderLabel("Window"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.window.Window</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"window"</b> <em>(default)</em>').set({rich: true}));
      centerbox.add(openwindowbutton);
      //seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> TABLE
      centerbox.add(this.__createHeaderLabel("Table"));
      centerbox.add(new qx.ui.basic.Label("<em>qx.ui.table.Table</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"table"</b> <em>(default)</em>').set({rich: true}));
      //centerbox.add(showtablebutton);
      centerbox.add(table);
      //seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
     
      // centerBox -> UPLOAD
      centerbox.add(this.__createHeaderLabel("Upload"));
      centerbox.add(new qx.ui.basic.Label("<em>sqv.ui.control.Upload</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"upload"</b> <em>(default)</em>').set({rich: true}));
      centerbox.add(upload);   
      centerbox.add(uploaddemorestore);
      centerbox.add(uploadprogress);
      // seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> DIAGRAM
      centerbox.add(this.__createHeaderLabel("Diagram"));
      centerbox.add(new qx.ui.basic.Label("<em>sqv.ui.control.Diagram</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"diagram"</b> <em>(default)</em>').set({rich: true}));
      centerbox.add(diagram);
      // seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> SIGNATURE
      centerbox.add(this.__createHeaderLabel("Signature"));
      centerbox.add(new qx.ui.basic.Label("<em>sqv.ui.control.Signature</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>"signature"</b> <em>(default)</em>').set({rich: true}));
      //centerbox.add(signature);
      centerbox.add(new qx.ui.basic.Label("Status:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('Design in progress: <a href="SignatureDesign.pdf" target="_blank">link to design PDF</a>').set({rich: true}));
      // seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> SVG
      centerbox.add(this.__createHeaderLabel("Svg"));
      centerbox.add(new qx.ui.basic.Label("<em>sqv.ui.embed.Svg</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Example:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('Button with SVG images for both default and hover. This example encodes the svg into a url string for including in an images background-image attribute').set({rich: true}));
      centerbox.add(svgbutton);
      //centerbox.add(new qx.ui.basic.Label("Usage:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('Button with SVG images for both default and hover. This example embeds raw svg into the html attribute of the images div tag').set({rich: true}));
      centerbox.add(svgrawbutton);
      centerbox.add(new qx.ui.basic.Label("Scale SVG based on width and heigh of the Image").set({paddingTop: 10}));
      centerbox.add(scalesvgiconbox);
      // seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> FONTICON
      centerbox.add(this.__createHeaderLabel("FontIcon"));
      centerbox.add(new qx.ui.basic.Label("<em>sqv.fonticon.FontAwesome.Appearance</em>").set({rich: true, paddingTop: 0}));
      centerbox.add(new qx.ui.basic.Label("Appearances:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('Usage example: <br><br><span style="padding:10px; background-color:#4f4f4f; color:white;"><b><span style="color:aqua;">var</span></b> faiconsearch = new qx.ui.basic.Image().set({ appearance: <b><span style="color:lime;">"fa-search"</span></b> })</span> <br><br>In order: <b>"fa-search", "fa-calendar", "fa-html5", "fa-folder-open"</b>').set({rich: true}));
      centerbox.add(fonticonbox);
      centerbox.add(new qx.ui.basic.Label("Button with a Fonticon image"));
      centerbox.add(button2);
      // seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));
      
      // centerBox -> FREESTYLECSS
      centerbox.add(this.__createHeaderLabel("FreestyleCSS"));
      centerbox.add(new qx.ui.basic.Label("<em>sqv.ui.decoration.MFreestyleCss</em>").set({rich: true, paddingTop: 0}));
      //centerbox.add(signature);
      centerbox.add(new qx.ui.basic.Label("Status:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('In use: Clean theme uses Freestyle CSS to replace decoration images with Qx + CSS').set({rich: true}));
      centerbox.add(new qx.ui.basic.Label("Qx + CSS Icons:").set({font: "control-header2", paddingTop: 20}));
      centerbox.add(new qx.ui.basic.Label('<b>CSS icons from <a href="https://picturepan2.github.io/fileicon.css/" target="_blank">Fileicon.css</a></b>').set({rich: true}));
      centerbox.add(fileiconimagebox);
      centerbox.add(new qx.ui.basic.Label('<b>CSS icons from <a href="http://viglino.github.io/iconicss/" target="_blank">iConicss</a></b>').set({rich: true}));
      centerbox.add(icssimagebox);
      centerbox.add(new qx.ui.basic.Label('All standard icons'));
      centerbox.add(icssimagebox2);
      // seperator
      centerbox.add(new qx.ui.basic.Label("<hr width='100%' color='silver'>").set({rich: true, allowGrowX: true, padding: [20,0]}));




      // Add centerbox to center scroll area
      scroll.add(centerbox);
      
      // Left hand Widget list
      var datawl = [
      	{type: "header", label:"<b>Widgets</b>", bgcolor:"primary-button-box", txtcolor:"white"},
      	{type: "link", label:"Button"},
      	{type: "link", label:"ToggleButton"},
      	{type: "link", label:"TextField"},
      	{type: "link", label:"DateField"},
      	{type: "link", label:"ComboBox"},
      	{type: "link", label:"VirtualComboBox"},
      	{type: "link", label:"List"},
      	{type: "link", label:"SelectBox"},
      	{type: "link", label:"VirtualSelectBox"},
      	{type: "link", label:"GroupBox"},
      	{type: "link", label:"RadioButton"},
      	{type: "link", label:"CheckBox"},
      	{type: "link", label:"TabView"},
      	{type: "link", label:"Tree"},
      	{type: "link", label:"Spinner"},
      	{type: "link", label:"Slider"},
      	{type: "link", label:"MenuButton"},
      	{type: "link", label:"SplitButton"},
      	{type: "link", label:"Window"},
      	{type: "link", label:"Table"},
      	{type: "header", label:"<b>New Widgets</b>", bgcolor:"#F7DC6F", txtcolor:"black"},
      	{type: "link", label:"Upload"},
      	{type: "link", label:"Diagram"},
      	{type: "link", label:"Signature"},
		{type: "header", label:"<b>Embedded</b>", bgcolor:"#F7DC6F", txtcolor:"black"},
		{type: "link", label:"Svg"},
		{type: "link", label:"FontIcon"},
		{type: "link", label:"FreestyleCSS"}
      ];
      
      // Populate westBox with content
      var wllen = datawl.length;
      for (var wl = 0; wl < wllen; wl++) {
        var lbldatawl = new qx.ui.basic.Label(datawl[wl].label); 
      	if (datawl[wl].type == "header")
      		lbldatawl.set({anonymous: true, focusable: false, selectable: false, rich: true, backgroundColor: datawl[wl].bgcolor, textColor: datawl[wl].txtcolor});
      	else
      		lbldatawl.getContentElement().setAttribute("onclick", "location='#" + datawl[wl].label + "'");
      	westbox.add(lbldatawl);
      }
      
      // Old way of doing it
      /*var lblComboBox  = new qx.ui.basic.Label("<a href='#combobox'>ComboBox</a>").set({rich: true});
      var lblComboBox = new qx.ui.basic.Label("ComboBox");
      lblComboBox.getContentElement().setAttribute("onclick", "location='#combobox'");
      lblComboBox.getContentElement().setAttribute("href", "#combobox"); 
      lblComboBox.addListener("click", function() {
      	scroll.scrollChildIntoViewY(lblHeaderCombobox, "top");
      });
      westbox.add(lblComboBox);
      
      westbox.add(new qx.ui.basic.Label("<b>New</b>").set({anonymous: true, focusable: false, selectable: false, rich: true, backgroundColor: "#F7DC6F", textColor: "black"}));
      */
     
     scrollwest.add(westbox);

          
      //appcompdock.add(westbox, {edge:"west"});
      appcompdock.add(scrollwest, {edge:"west"});
      
      appcompdock.add(scroll, {edge:"center"});
      
      appdoc.add(appcompdock, {edge: 0});
          
    },
    
    
    /*********************************************************************
     ******************** SUPPORTING FUNCTIONS ***************************
     *********************************************************************/
    getTree : function()
    {
      var tree = new qx.ui.tree.Tree().set({
        width : 200,
        height : 280
      });

      var root = new qx.ui.tree.TreeFolder("root");
      root.setOpen(true);
      tree.setRoot(root);

      var te1 = new qx.ui.tree.TreeFolder("Desktop");
      te1.setOpen(true);
      te1.setIcon("icon/18/hardware/desktop-windows-black.png");
      root.add(te1);

      var te1_1 = new qx.ui.tree.TreeFolder("Files");
      var te1_2 = new qx.ui.tree.TreeFolder("Workspace");
      var te1_3 = new qx.ui.tree.TreeFolder("Network");
      var te1_4 = new qx.ui.tree.TreeFolder("Trash");
      te1.add(te1_1, te1_2, te1_3, te1_4);


      var te1_2_1 = new qx.ui.tree.TreeFile("Windows (C:)");
      var te1_2_2 = new qx.ui.tree.TreeFile("Documents (D:)");
      te1_2.add(te1_2_1, te1_2_2);



      var te2 = new qx.ui.tree.TreeFolder("Inbox");

      var te2_1 = new qx.ui.tree.TreeFolder("Presets");
      var te2_2 = new qx.ui.tree.TreeFolder("Sent");
      var te2_3 = new qx.ui.tree.TreeFolder("Trash");

      for (var i=0; i<30; i++) {
        te2_3.add(new qx.ui.tree.TreeFile("Junk #" + i));
      }

      var te2_4 = new qx.ui.tree.TreeFolder("Data");
      var te2_5 = new qx.ui.tree.TreeFolder("Edit");

      te2.add(te2_1, te2_2, te2_3, te2_4, te2_5);

      //root.add(te2);

      return tree;
    },
    
    __createMenuForMenuButton : function()
    {
      // Creates the option menu
      var optionMenu = new qx.ui.menu.Menu;

      for (var i = 0; i < 3; i++) {
        optionMenu.add(new qx.ui.menu.RadioButton("Option" + i));
      }

      var groupOptions = new qx.ui.form.RadioGroup;
      groupOptions.add.apply(groupOptions, optionMenu.getChildren());

      // create main menu and buttons
      var menu = new qx.ui.menu.Menu();

      var headerButton = new qx.ui.menu.Button("MY DEVICES", "icon/18/devices/devices-black.png");
      headerButton.setAppearance("menu-button-header");
      //headerButton.setEnabled(false);
      var tempButton1 = new qx.ui.menu.Button("Tablet", "icon/18/hardware/ipad.png");
      var tempButton2 = new qx.ui.menu.Button("Phone", "icon/18/hardware/iphone.png");
      var tempButton3 = new qx.ui.menu.Button("Watch", "icon/18/hardware/iwatch.png");
      menu.add(headerButton);
      menu.addSeparator();
      menu.add(tempButton1);
      menu.add(tempButton2);
      menu.add(tempButton3);
      

      var optionButton = new qx.ui.menu.Button("Options", "", null, optionMenu);
      menu.addSeparator();
      menu.add(optionButton);

      return menu;
    },
    
    __createMenuForSplitButton : function()
    {
      var menu = new qx.ui.menu.Menu;
      menu.setAppearance("splitbutton-menu");

      var site1 = new qx.ui.menu.Button("Important", "icon/18/image/filter-b-and-w.png");
      var site2 = new qx.ui.menu.Button("Announcement", "icon/18/image/filter-drama.png");
      var site3 = new qx.ui.menu.Button("Discussion", "icon/18/image/filter-frames.png");
      var site4 = new qx.ui.menu.Button("Battle", "icon/18/image/filter-hdr.png");

      menu.add(site1);
      menu.add(site2);
      menu.add(site3);
      menu.add(site4);

      return menu;
    },
    
    __createTable : function()
    {
      var rowData = this.__createRandomRows(15);

      var tableModel = new qx.ui.table.model.Simple();
      tableModel.setColumns([ "ID", "A number", "A date", "Boolean", "HTML Content" ]);
      tableModel.setData(rowData);
      tableModel.setColumnEditable(1, true);
      tableModel.setColumnEditable(2, true);
      tableModel.setColumnSortable(3, false);

      var table = new qx.ui.table.Table(tableModel);

      table.set({
        height: 400,
        rowHeight: 66,
        showCellFocusIndicator: false,
        focusCellOnPointerMove : true,
        forceLineHeight: true
      });

      table.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);

      var tcm = table.getTableColumnModel();

      tcm.setDataCellRenderer(3, new qx.ui.table.cellrenderer.Boolean());
      tcm.setDataCellRenderer(4, new qx.ui.table.cellrenderer.Html());
      tcm.setColumnWidth(4,350);
      //tcm.setHeaderCellRenderer(2, new qx.ui.table.headerrenderer.Icon("icon/18/image/filter-frames.png", "A date"));

      return table;
    },
    
    __createRandomRows : function(rowCount)
    {
      var rowData = [];
      var now = new Date().getTime();
      var dateRange = 400 * 24 * 60 * 60 * 1000; // 400 days
      for (var row = 0; row < rowCount; row++) {
        var date = new Date(now + Math.random() * dateRange - dateRange / 2);
        rowData.push([ row, Math.random() * 10000, date, (Math.random() > 0.5), "<p><b>Content worth reading I hope</b><br>This is the beginning of the end. Hope you liked it.</p>" ]);
      }
      return rowData;
    },
    
    __createHeaderLabel : function(cname)
    {
      var label = new qx.ui.basic.Label(cname).set({font: "control-header"});
      label.getContentElement().setAttribute("id", cname);

      return label;
    }
  }
});
