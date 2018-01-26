/* ************************************************************************

   sqv
   
   http://sqville.com

   Copyright: 

   License:
     MIT

   Authors:
     * Chris Eskew

************************************************************************ */

/**
 * A multi-file upload widget with Drag and Drop feature
 *
 *
 * @childControl input {qx.ui.embed.Html} input part of the widget
 * @childControl message {qx.ui.basic.Label} label part of the widget
 * @childControl button {qx.ui.form.Button} button part of the widget
 * @childControl progress {qx.ui.indicator.ProgressBar} progress bar part of the widget
 */
qx.Class.define("sqv.ui.control.Upload",
{
  extend : qx.ui.core.Widget,


  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param message {String} Message to use
   * @param label {String} Label to use for the button
   * @param icon {String?null} Icon to use for the button icon
   */
  construct : function(message, label, icon)
  {
    if (qx.core.Environment.get("qx.debug")) {
      this.assertArgumentsCount(arguments, 0, 3);
    }

    this.base(arguments);

    this._setLayout(new qx.ui.layout.VBox());
    
    //this._createChildControl("input");
    this._createChildControl("message");
    this._createChildControl("button");
    this._createChildControl("progress");

    if (message != null) {
      this.setMessage(message);
    }
    
    if (label != null) {
      this.setLabel(label);
    }

    if (icon !== undefined) {
      this.setIcon(icon);
    }
    

  },



  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    // overridden
    appearance :
    {
      refine : true,
      init : "upload"
    },
    
    /** The label/caption/text of the qx.ui.basic.Atom instance */
    message :
    {
      apply : "_applyMessage",
      nullable : true,
      check : "String",
      event : "changeMessage"
    },


    /** The label/caption/text of the qx.ui.basic.Atom instance */
    label :
    {
      apply : "_applyLabel",
      nullable : true,
      check : "String",
      event : "changeLabel"
    },


    /**
     * Switches between rich HTML and text content. The text mode (<code>false</code>) supports
     * advanced features like ellipsis when the available space is not
     * enough. HTML mode (<code>true</code>) supports multi-line content and all the
     * markup features of HTML content.
     */
    rich :
    {
      check : "Boolean",
      init : false,
      apply : "_applyRich"
    },


    /** Any URI String supported by qx.ui.basic.Image to display an icon */
    icon :
    {
      check : "String",
      apply : "_applyIcon",
      nullable : true,
      themeable : true,
      event : "changeIcon"
    },


    /**
     * The space between the icon and the label
     */
    spacing :
    {
      check : "Integer",
      nullable : false,
      event : "changeSpacing",
      apply : "_applySpacing",
      themeable : true,
      init : 4
    },


    /**
     * Configure the visibility of the sub elements/widgets.
     * Possible values: both, label, icon
     
    show :
    {
      init : "both",
      check : [ "both", "label", "icon" ],
      themeable : true,
      inheritable : true,
      apply : "_applyShow",
      event : "changeShow"
    },*/


    /**
     * The position of the icon in relation to the text.
     * Only useful/needed if text and icon is configured and 'show' is configured as 'both' (default)
     
    iconPosition :
    {
      init   : "left",
      check : ["top", "right", "bottom", "left", "top-left", "bottom-left" , "top-right", "bottom-right"],
      themeable : true,
      apply : "_applyIconPosition"
    },*/


    /**
     * Whether the content should be rendered centrally when to much space
     * is available. Enabling this property centers in both axis. The behavior
     * when disabled of the centering depends on the {@link #iconPosition} property.
     * If the icon position is <code>left</code> or <code>right</code>, the X axis
     * is not centered, only the Y axis. If the icon position is <code>top</code>
     * or <code>bottom</code>, the Y axis is not centered. In case of e.g. an
     * icon position of <code>top-left</code> no axis is centered.
     */
    center :
    {
      init : false,
      check : "Boolean",
      themeable : true,
      apply : "_applyCenter"
    }
  },



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    // overridden
    _createChildControlImpl : function(id, hash)
    {
      var control;

      switch(id)
      {
        case "message":
          control = new qx.ui.basic.Label(this.getMessage());
          control.setAnonymous(true);
          control.setRich(this.getRich());
          this._add(control);
          //if (this.getMessage() == null || this.getShow() === "icon") {
           // control.exclude();
          //}
          break;

        case "button":
          //control = new qx.ui.form.Button(this.getLabel(), this.getIcon());
          control = new qx.ui.form.Button("blank", "sqv/test.png").set({allowGrowX: false});
          var inputctrl = new qx.html.Input("file", {display: "none"} , {id: "sqvinputupload", name:"uploadfiles", multiple: true});
          //{position: "absolute", cursor: "pointer", hideFocus: true, top: 0, right:0}
          control.getContentElement().add(inputctrl);
          control.addListener("click", function(e) {
	        this.getChildControl("progress", true).setVisibility("visible");
	        var browse = document.getElementById("sqvinputupload");
	        browse.click();
	      }, this);
          this._add(control);
          /*if (this.getIcon() == null || this.getShow() === "label") {
            //control.exclude();
            control.setShow("label");
          }*/
          break;
          
        case "input":
          var inputctrl = new qx.html.Input("file", {display: "none"}, {name:"uploadfiles", multiple: true});
          control = new qx.ui.embed.Html(inputctrl.toString()); 
          //control.setAnonymous(true);
          //this._addAt(control, 0);
          this._add(control);
          /*if (this.getIcon() == null || this.getShow() === "label") {
            //control.exclude();
            control.setShow("label");
          }*/
          break;
          
        case "progress":
          control = new qx.ui.indicator.ProgressBar();
          //control.setAnonymous(true);
          this._add(control);
          control.setVisibility("hidden");
          
          break;
      }

      return control || this.base(arguments, id);
    },


    // overridden
    /**
     * @lint ignoreReferenceField(_forwardStates)
     */
    _forwardStates :
    {
      focused : true,
      hovered : true
    },


    /**
     * Updates the visibility of the label
     
    _handleLabel : function()
    {
      if (this.getLabel() == null || this.getShow() === "icon") {
        this._excludeChildControl("label");
      } else {
        this._showChildControl("label");
      }
    },*/


    /**
     * Updates the visibility of the icon
     
    _handleIcon : function()
    {
      if (this.getIcon() == null || this.getShow() === "label") {
        this._excludeChildControl("icon");
      } else {
        this._showChildControl("icon");
      }
    },*/
   
   // property apply
    _applyMessage : function(value, old)
    {
      var message = this.getChildControl("message", true);
      if (message) {
        message.setValue(value);
      }
    },


    // property apply
    _applyLabel : function(value, old)
    {
      var button = this.getChildControl("button", true);
      if (button) {
        button.setLabel(value);
      }

      //this._handleLabel();
    },
    
    // property apply
    _applyIcon : function(value, old)
    {
      var button = this.getChildControl("button", true);
      if (button) {
        button.setIcon(value);
      }

      //this._handleLabel();
    },


    // property apply
    _applyRich : function(value, old)
    {
      var button = this.getChildControl("button", true);
      var message = this.getChildControl("message", true);
      if (message) {
        message.setRich(value);
        var label = button.getChildControl("label", true);
        if (label) {
        	label.setRich(value);
      	}
      }
    },

    // property apply
    _applySpacing : function(value, old) {
      this._getLayout().setSpacing(value);
    },


    // property apply
    /*_applyShow : function(value, old)
    {
      this._handleLabel();
      this._handleIcon();
    },*/


    // property apply
    /*_applyIconPosition : function(value, old) {
      this._getLayout().setIconPosition(value);
    },*/


    // property apply
    _applyCenter : function(value, old) {
      this._getLayout().setAlignX("center");
      this._getLayout().setAlignY("bottom");
    }


    // overridden
    /*_applySelectable : function(value, old) {
      this.base(arguments, value, old);

      var label = this.getChildControl("label", true);
      if (label) {
        this.getChildControl("label").setSelectable(value);
      }
    }*/
  }
});
