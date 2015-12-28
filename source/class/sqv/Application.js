/* ************************************************************************

   Copyright:

   License:

   Authors:

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
     
      //patch Atom with MAtom
      //qx.Class.patch(qx.ui.basic.Atom, sqv.ui.basic.MAtom);
	  //qx.Class.include(qx.ui.decoration.Decorator, sqv.theme.icon.MLittlebox);
	  
	  // Prep the Image widget to have font handling abilities
	  qx.Class.include(qx.ui.basic.Image, sqv.ui.basic.MImage);
	  
	  // Prep the Image widget to handle SVG data
	  //qx.Class.include(qx.ui.basic.Image, sqv.ui.basic.svg.MImage); 
	  
	  //qx.Class.include(qx.ui.basic.Label, sqv.ui.basic.MLabel);
	  //qx.Class.include(qx.ui.decoration.Decorator, sqv.ui.basic.MLabel);
	  
	  // Add the beforeContent property to the Decorator class
	  qx.Class.include(qx.ui.decoration.Decorator, sqv.ui.decoration.MBeforeContent);
	  
	  // Add FontAwesome specific Appearance, Decoration and Font entries to the current theme 
	  qx.Theme.include(sqv.theme.clean.Appearance, sqv.fonticon.FontAwesome.Appearance);
	  qx.Theme.include(sqv.theme.clean.Decoration, sqv.fonticon.FontAwesome.Decoration);
	  qx.Theme.include(sqv.theme.clean.Font, sqv.fonticon.FontAwesome.Font);
	  
      // Create a button
      var button1 = new qx.ui.form.Button("Follow");
     
      var button2 = new qx.ui.form.Button("Icon Button", "");
      button2.setAppearance("search-button");
      
      // data for virtual widgets
      var rawData = [];
      for (var i=1; i<24; i++)
      {
        rawData.push(i + "'s Icon");
      }
      var model = qx.data.marshal.Json.createModel(rawData);

      
      // primary button example
      var primbutton1 = new qx.ui.form.Button("Save");
      primbutton1.setAppearance("primary-button");
      var button3 = new qx.ui.form.Button("Discard");
      button3.setFocusable(false);
      
      // seconary button example
      var secbutton1 = new qx.ui.form.Button("Okay");
      secbutton1.setAppearance("secondary-button");
      var button4 = new qx.ui.form.Button("Cancel");
      button4.setFocusable(false);
      
      // Qx Image test
      var qximage = new qx.ui.basic.Image();
      //qximage.setScale(true);
      
      var selectBox = new qx.ui.form.SelectBox();
      selectBox.setWidth(270);
      for (var i=0; i<24; i++)
      {
        var tempItem = new qx.ui.form.ListItem("Item " + (i+1));
        tempItem.setAppearance("combobox-listitem");
        selectBox.add(tempItem);
        // select sixth item
        //if (i == 5) {
        //  selectBox.setSelection([tempItem]);
        //}
      }
      
      // Virtual SelectBox
      var virtselectBox = new qx.ui.form.VirtualSelectBox(model);
      virtselectBox.setWidth(270);
      
      // icon button example
      var iconbutton1 = new qx.ui.form.Button("Icon only Button", "sqv/test.png");
      iconbutton1.setShow("icon");
      iconbutton1.setPadding([10,10]);
      
      //stand alone icon
      var faiconsearch = new qx.ui.basic.Image().set({appearance:"fa-search"});
      var faiconcal = new qx.ui.basic.Image().set({appearance:"fa-calendar"});
      var faiconhtml5 = new qx.ui.basic.Image().set({appearance:"fa-html5"});
      var faiconfolderopen = new qx.ui.basic.Image().set({appearance:"fa-folder-open"});
      
      // List
      var list = new qx.ui.form.List();
      list.setHeight(180);
      list.setWidth(155);
      for (var i=0; i<24; i++)
      {
        var templistItem = new qx.ui.form.ListItem("Item " + (i+1));
        list.add(templistItem);
      }
      
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
      var datefield = new qx.ui.form.DateField();
      datefield.setPlaceholder("Date of Birth");
      datefield.setWidth(270);
      
      // ComboBox
      var combobox1 = new qx.ui.form.ComboBox();
      combobox1.setPlaceholder("Select");
      combobox1.setWidth(270);
      // fill the combo box with some stuff
      for (var i=1; i<24; i++)
      {
        var tempItem = new qx.ui.form.ListItem(i + "'s Icon");
        tempItem.setAppearance("combobox-listitem");
        combobox1.add(tempItem);
      }
      
      // Virtual Combobox
      var virtcomboBox = new qx.ui.form.VirtualComboBox();
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
      
      // Check boxes
      var cbOil = new qx.ui.form.CheckBox("Sun Oil");
      var cbTowel = new qx.ui.form.CheckBox("Towel");
      var cbBeer = new qx.ui.form.CheckBox("Beer");
      var cbBT =  new qx.ui.form.CheckBox("Bathing togs");
      
      cbBeer.setTriState(true);
      cbBeer.setValue(null);
      cbBT.setValue(true);
      cbBT.setEnabled(false);

      // Add all radio buttons to the manager
      var opbuttsmanager = new qx.ui.form.RadioGroup(rbRed, rbGreen, rbBlue);
      
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
      var spinner = new qx.ui.form.Spinner(0, 50, 100);
      spinner.setWidth(100);
      
      // Slidder
      var slider = new qx.ui.form.Slider();
      slider.setWidth(130);
      
      slider.bind("value", spinner, "value");
      spinner.bind("value", slider, "value");
      
      // MenuButton
      var menuButton = new qx.ui.form.MenuButton("MenuButton", null, this.__createMenuForMenuButton());
      
      // Split Button
      var splitButton = new qx.ui.form.SplitButton("SplitButton", null, this.__createMenuForSplitButton());
      splitButton.setWidth(140);
      
 
      // MENUBAR
      // TOOLBAR
      // PROGRESSBAR
      
      
      // Window
      var openwindowbutton = new qx.ui.form.Button("Open Window", "icon/18/apps/open-window-white.png");
      openwindowbutton.setAppearance("primary-button");
      openwindowbutton.setGap(10);
      
      // Create the Window
      var win1 = new qx.ui.window.Window("Clean Theme default Window");
      win1.setLayout(new qx.ui.layout.VBox(10));
      win1.setShowStatusbar(true);
      win1.setStatus("Image (Happy Phone Guy) created by Roxarama.com");
      //create an image for the body of the window
      var roxaramaguy = new qx.ui.basic.Image("sqv/Roxarama-Guy.png");
      win1.add(roxaramaguy);
      //this.getRoot().add(win, {left:20, top:20});
      
      openwindowbutton.addListener("execute", win1.open, win1);
      
      // TABLE
      var showtablebutton = new qx.ui.form.Button("Show Table", "icon/18/image/grid-white.png");
      showtablebutton.setAppearance("tertiary-button");
      showtablebutton.setGap(10);
      
      // create the window to show the table
      var win2 = new qx.ui.window.Window("Clean Theme default Table");
      win2.setLayout(new qx.ui.layout.VBox(10));
      win2.setShowStatusbar(true);
      win2.setStatus("default Table widget");
      // create the Table and add it to the window widget
      var table = this.__createTable();
      //table.setFocusedCell(2,5);
      win2.add(table);
      
      showtablebutton.addListener("execute", win2.open, win2);
      
      
      // Document is the application root
      var doc = this.getRoot();
      
      // Add stand alone fa icons
      doc.add(new qx.ui.basic.Label("FontAwesome Icons:"), {left: 20, top: 10});
      doc.add(faiconsearch, {left: 170, top: 10});
      doc.add(faiconcal, {left: 210, top: 10});
      doc.add(faiconhtml5, {left: 250, top: 10});
      doc.add(faiconfolderopen, {left: 290, top: 10});

      // Add button to document at fixed coordinates
      doc.add(button1, {left: 100, top: 50});
      doc.add(button2, {left: 100, top: 120});
      
      // Add primary button example
      doc.add(primbutton1, {left: 320, top: 50});
      doc.add(button3, {left: 400, top: 50});
      
      // Add secondary button example
      doc.add(secbutton1, {left: 560, top: 50});
      doc.add(button4, {left: 641, top: 50});
      
      // Add Qx Image
      //doc.add(qximage, {left: 880, top: 50});
      
      // Add Selectbox
      doc.add(selectBox, {left: 780, top: 50});
      
      // Add Virtual Selectbox
      doc.add(virtselectBox, {left: 1100, top: 50});
            
      // Add an Icon button example
      doc.add(iconbutton1, {left: 210, top: 50});
      
      // Add List
      doc.add(list, {left: 100, top: 190});
      
      // Add Textfield
      doc.add(textbox, {left: 320, top: 120});
      doc.add(textboxform, {left: 320, top: 170});
      doc.add(datefield, {left: 320, top: 220});
      doc.add(combobox1, {left: 320, top: 270});
      doc.add(virtcomboBox, {left: 320, top: 320});
      
      // Add Groupbox
      doc.add(groupbox, {left: 640, top: 130});
      doc.add(groupboxcon, {left: 640, top: 250});
      doc.add(groupboxbluetop, {left: 820, top: 130});
      doc.add(groupboxorangetop, {left: 860, top: 250});
      doc.add(groupboxgreentop, {left: 1010, top: 130});
      
      // Add Options Button Group
      doc.add(rbRed, {left: 1230, top: 130});
      doc.add(rbGreen, {left: 1230, top: 160});
      doc.add(rbBlue, {left: 1230, top: 190});
      
      // Add Check boxes
      doc.add(cbOil, {left: 1350, top: 130});
      doc.add(cbTowel, {left: 1350, top: 160});
      doc.add(cbBeer, {left: 1350, top: 190});
      doc.add(cbBT, {left: 1350, top: 220});
      
      // Add TabView
      doc.add(tabView, {left: 100, top: 400});
      doc.add(tabViewspacebar, {left: 450, top: 400});
      doc.add(tabViewspot, {left: 800, top: 400});
      
      // Add Tree
      doc.add(tree, {left: 1080, top: 280});
      
      // Add Spinner and Slidder
      doc.add(spinner, {left: 1320, top: 280});
      doc.add(slider, {left: 1320, top: 330});
      
      // Add MenuButton
      doc.add(menuButton, {left: 1320, top: 380});
      
      // Add SplitButton
      doc.add(splitButton, {left: 1320, top: 440});
      
      // Add Open Window Button
      doc.add(openwindowbutton, {left: 1320, top: 500});
      
      // Add Show Table Button
      doc.add(showtablebutton, {left: 1320, top: 560});


      // Add an event listener
      //button1.addListener("execute", function(e) {
      //  alert("Hello World!");
      //});
    },
    
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
      var rowData = this.__createRandomRows(25);

      var tableModel = new qx.ui.table.model.Simple();
      tableModel.setColumns([ "ID", "A number", "A date", "Boolean" ]);
      tableModel.setData(rowData);
      tableModel.setColumnEditable(1, true);
      tableModel.setColumnEditable(2, true);
      tableModel.setColumnSortable(3, false);

      var table = new qx.ui.table.Table(tableModel);

      table.set({
        width: 600,
        height: 400,
        decorator : null
      });

      table.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);

      var tcm = table.getTableColumnModel();

      tcm.setDataCellRenderer(3, new qx.ui.table.cellrenderer.Boolean());
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
        rowData.push([ row, Math.random() * 10000, date, (Math.random() > 0.5) ]);
      }
      return rowData;
     }
  }
});
