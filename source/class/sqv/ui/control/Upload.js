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
 * @childControl message {qx.ui.basic.Label} label part of the widget
 * @childControl button {qx.ui.form.Button} button part of the widget
 * @childControl progressbar {qx.ui.indicator.ProgressBar} progress bar part of the widget
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
    
    // Add dragndrop listeners during appear event, if enabled
    if (this.getDragndropenabled()){
    	this.__initiateAppearListner();
	    this.__addCssdragenterClass(this.getDragovermessage());
    }
		
    
    this._createChildControl("message");
    this._createChildControl("button");
    this._createChildControl("progressbar");

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
     * Enables Drag and Drop feature
     */
    dragndropenabled :
    {
      check : "Boolean",
      init : true
    },
    
    dragovermessage: {
  		check : "String",
  		init : "Drop files here"
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
     * Used for SQville theme demo app
     */
    demo :
    {
      check : "Boolean",
      nullable : false,
      themeable : true,
      init : false
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
    __progressanimation : {timing: "ease", repeat: "infinite", 
      keyFrames : {
        0 : {"opacity": .3, "width": "0"},
        100 : {"opacity": 0, "width": "100%"}
      }
    },
    
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
          break;

        case "button":
          control = new qx.ui.form.Button("blank", "sqv/test.png").set({allowGrowX: false});
          var inputctrl = new qx.html.Input("file", {display: "none"} , {id: "sqvinputupload1727", name:"uploadfiles", multiple: true});
          inputctrl.addListener("change", function(e) {
           	var filesizemax = 10;
			var filesizetotalmax = 10;
            var value = "";
            var filesize = 0;
			var filesizerunningsum = 0;
			var triggerupload = true;
            var targetobj = e.getTarget();
            var files = targetobj.files;
            for (var k = 0; k < files.length; k++) {
            	//value = value + files[k].name + ";;;";
				filesize = ((files[k].size/1024)/1024).toFixed(4); // MB
				if (filesize >= filesizemax){
				    //end loop and send error message to user
				    triggerupload = false;			    
				    break;
				}
				else {
				    filesizerunningsum += filesize; 
				    // add file to json string
				    value += qx.lang.Json.stringify([files[k]]);
				}
				if (filesizerunningsum >= filesizetotalmax) {
				    //end loop and send error message to user
				    triggerupload = false;
				    break;
				}
			}
			if (triggerupload){                
			    //value = qx.lang.Json.stringify([files]);
			    //this.setFileName(value);
			    //this.fireDataEvent('changeFileName', value);
			    var progressbar = this.getChildControl("progressbar", true);
			    progressbar.setBackgroundColor("progressbar-base");
			    
			    if (this.getDemo())
			    	progressbar.setValue(20);  
 
			}
          }, this);
          control.getContentElement().add(inputctrl);
          control.addListener("click", function(e) {
	        var browse = document.getElementById("sqvinputupload1727");
	        browse.click();
	      }, this);
          this._add(control);
          /*if (this.getIcon() == null || this.getShow() === "label") {
            //control.exclude();
            control.setShow("label");
          }*/
          break;
          
        case "progressbar":
          control = new qx.ui.indicator.ProgressBar(0,100);
          control.setVisibility("hidden");
          control.getContentElement().setAttribute("id","sqvuploadpb1727");
          var animalayer = new qx.ui.container.Composite(new qx.ui.layout.Canvas()).set({backgroundColor: "white", opacity: 0});
          var percent = new qx.ui.basic.Label("0%").set({textColor:"white", alignX: "right", allowGrowX: true});
          var progress = control.getChildControl("progress");
          control.addListener("change", function(e) {
	     	if (control.getValue() > 0) {
	     		percent.setValue(control.getValue() + "%");
	     		control.setVisibility("visible");
	     		animalayer.set({visibility: "visible"});
	     		progress.set({backgroundColor: "gray"});
	     	}
	     	else {
	     		control.setVisibility("hidden");
	     	}
	      }, this);
	      control.addListener("complete", function(e) {
			percent.setValue(control.getValue() + "%");
			animalayer.set({visibility: "hidden"});
			progress.set({backgroundColor: "green"});
		  }, this);
          progress._add(percent, {right: 2});
          progress._add(animalayer, {height: "100%", width: "100%"});
          animalayer.addListener("appear", function(e) {
	     	var domtable = animalayer.getContentElement().getDomElement();
	     	qx.bom.element.Animation.animate(domtable, this.__progressanimation, 2000);
	      }, this);
          
          this._add(control);
          
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
     * Add the onappear listner
     */
    __initiateAppearListner: function () {
	     //*** Can only attach the needed drag and drop events to Dom Elements. Dom Element is only available to grab
	     //**  after it has "appeared" on the page
	     this.addListenerOnce("appear", function(e) {
	     	//*** Required - grab the object's Dom Element and attach drag and drop event listeners
	     	var domtable = this.getContentElement().getDomElement();
	
	     	//*** ADD DRAG AND DROP EVENTS TO THE DOM ELEMENT:
	    	//**  Adding events using qx.bom.Event object is the same as adding an "on" event directly to the Dom Element,
	     	//**  for example, the "addNativeListener()" function is the same as: domtable.ondrop = function() {};
	     	//*** DRAGENTER
	    	qx.bom.Event.addNativeListener(domtable, "dragenter", function(e){
	    		if (e.target.nodeType == 1) {
	    			e.dataTransfer.dropEffect = 'copy';
	    			qx.bom.Event.preventDefault(e);
	    			qx.bom.Event.stopPropagation(e);
	    			//qx.bom.element.Class.add(this,"plaiddocumentdndenter");
	    			//console.log("dragenter");
	    		}
	    	}, this);
	    	
	    	//*** DRAGLEAVE
	    	qx.bom.Event.addNativeListener(domtable, "dragleave", function(e){    		
	    		if (e.target.nodeType == 1) {
	    			qx.bom.element.Class.remove(this,"sqvdocumentdndenter1727");
	    			//console.log("dragleave");
	    		}	
	    	}, this);
	    	
	    	//*** DRAGEXIT
	    	qx.bom.Event.addNativeListener(domtable, "dragexit", function(e){
	    		qx.bom.Event.stopPropagation(e);
	    		qx.bom.Event.preventDefault(e);
	    		//console.log("dragexit");
	    		qx.bom.element.Class.remove(this,"sqvdocumentdndenter1727");
	    		e.dataTransfer.dropEffect = 'none';	
	    	}, this);
	    	
	    	//*** DRAGEND
	    	qx.bom.Event.addNativeListener(domtable, "dragend", function(e){
	    		qx.bom.Event.stopPropagation(e);
	    		qx.bom.Event.preventDefault(e);
	    		qx.bom.element.Class.remove(this,"sqvdocumentdndenter1727");
	    		e.dataTransfer.dropEffect = 'none';	
	    	}, this);
	
	     	//*** DRAGOVER
	     	qx.bom.Event.addNativeListener(domtable, "dragover", function(e){		
		    	if (e.target.nodeType == 1) {
	    			e.dataTransfer.dropEffect = 'copy';
	    			qx.bom.Event.preventDefault(e);
	    			qx.bom.Event.stopPropagation(e);
	    			qx.bom.element.Class.add(this,"sqvdocumentdndenter1727");
	    		}
	     	});
	
	     	//*** DROP
	     	qx.bom.Event.addNativeListener(domtable, "drop", function(e){		
	    		qx.bom.Event.preventDefault(e);
	    		qx.bom.Event.stopPropagation(e);
	    		qx.bom.element.Class.remove(this,"sqvdocumentdndenter1727");
	    		var progressbar = document.getElementById("sqvuploadpb1727");
	        	progressbar.style.backgroundcolor = "#888888";
	    		var droppedFiles = e.dataTransfer.files;
	     	}, this);
	     	
	    }, this);
    },
    
     /**
     * Add CSS to support dragenter event change
     */
    __addCssdragenterClass: function (dragovermsg) {
    	var dsktopstylsheet = qx.ui.style.Stylesheet.getInstance();
    	if (!dsktopstylsheet.hasRule()) {
    		//add the rule to qx.desktop's stylesheet
    		var rulename = ".sqvdocumentdndenter1727";
    		//var css = "opacity: .7;" +
    			//"background-color: #F0F8FF;";
    		var css = "opacity: .7; border: 1px solid orange !important;";
    		
    		dsktopstylsheet.addRule(rulename, css);
    		
    		/*var rulenameafter = rulename + ":after";
    		var cssafter = "color: white;" +
    			"font-size: 14px;" +
    			"font-style: bold;" +
    			"z-index: 3000;" +
    			"width: 100%" +
    			"height: 100%;" +
    			"padding: 2px;" +
    			"top: 0;" +
    			"left: 5;" +
    			"position: absolute;" +
    			"opacity: 1;" +
    			"background-color: blue;" +
    			"text-align: center;" +
    			"content: '" + dragovermsg +"';";*/
    		
    		//dsktopstylsheet.addRule(rulenameafter, cssafter);
    		//dsktopstylsheet.addRule(rulenamebefore, cssbefore);
    	}
    },


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
