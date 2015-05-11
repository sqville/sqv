/* ************************************************************************

   SQville Software

   http://sqville.com

   Copyright:
     None

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Chris Eskew (chris.eskew@sqville.com)

************************************************************************ */
/**
 * Border implementation with two CSS borders. Both borders can be styled
 * independent of each other.
 * This mixin is usually used by {@link qx.ui.decoration.Decorator}.
 */
qx.Mixin.define("sqv.theme.icon.MLittlebox",
{
  //include : [qx.ui.decoration.MSingleBorder, qx.ui.decoration.MBackgroundImage],


  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    /*
    ---------------------------------------------------------------------------
      PROPERTY: INNER WIDTH
    ---------------------------------------------------------------------------
    */

    /** name of icon */
    sqviconName :
    {
      nullable : true,
      check : "String",
      init : "",
      apply : "_applySqviconName"
    }
    
    
  },


  members :
  {

    /**
     * Takes a styles map and adds the outer border styles in place
     * to the given map. This is the needed behavior for
     * {@link qx.ui.decoration.Decorator}.
     *
     * @param styles {Map} A map to add the styles.
     */
    _styleSqviconName : function(styles)
    {
	  var iconname = this.getSqviconName();
	  if (iconname.length > 0) {
	  	
	  	//establish env specific property names
	  	// Border Radius
	  	var borderradiuspropName = qx.core.Environment.get("css.borderradius");
		borderradiuspropName = qx.bom.Style.getCssName(borderradiuspropName);
		// Transform
		var transformpropName = qx.core.Environment.get("css.transform");
		transformpropName = qx.bom.Style.getCssName(transformpropName.name);
	  	// Animations
		var animationpropName = qx.core.Environment.get("css.animation");
		animationpropName = qx.bom.Style.getCssName(animationpropName.name);
		var keyframepropName = qx.core.Environment.get("css.animation").keyframes;
		//keyframepropName = keyframepropName.keyframes;
	  	// Box Shadow
	  	var boxshadowpropName = qx.core.Environment.get("css.boxshadow");
		boxshadowpropName = qx.bom.Style.getCssName(boxshadowpropName);
	  		  	
	  	switch(iconname)
	      {
	        case "search":	
	          	
	          	styles["display"] = "inline-block";
					  
				styles[":before"] = {
		          "width" : "2em",
		          "height" : "2em",
		          "position" : "absolute",
		          "content" : '""',
		          "border" : "0.6em solid #000000",
		 		  "background-color" : "transparent !important",
				  "font-size" : "4px"
		        };
				styles[":before"][borderradiuspropName] = "100%";
				
				styles[":after"] = {
				    "content" : '""',
					"position" : "absolute",
				    "width" : "1.8em",
				    "height" : "0.6em",
				    "border-bottom" : "0.6em solid #000000",
				    "background-color" : "transparent !important",
				    "margin-top" : "3em",
					"margin-left" : "2em",
					"font-size" : "4px"
				};
				styles[":after"][transformpropName] = "rotate(60deg)";
				
	            break;
	          
	        case "search-green":	
	          	
	          	styles["display"] = "inline-block";
					  
				styles[":before"] = {
		          "width" : "2em",
		          "height" : "2em",
		          "position" : "absolute",
		          "content" : '""',
		          "border" : "0.6em solid #00FF00",
		 		  "background-color" : "transparent !important",
				  "font-size" : "4px"
		        };
				styles[":before"][borderradiuspropName] = "100%";
				
				styles[":after"] = {
				    "content" : '""',
					"position" : "absolute",
				    "width" : "1.8em",
				    "height" : "0.6em",
				    "border-bottom" : "0.6em solid #00FF00",
				    "background-color" : "transparent !important",
				    "margin-top" : "3em",
					"margin-left" : "2em",
					"font-size" : "4px"
				};
				styles[":after"][transformpropName] = "rotate(60deg)";
				
	          break;
	
	        case "check":
	        //display:inline-block;
		        styles[transformpropName] = "rotate(-60deg)";		        

		        styles[":after"] = {
				    "content" : '""',
					"position" : "absolute",
				    "width" : "10px",
				    "height" : "3px",
				    "border-bottom" : "3px solid #000000",
					"background-color" : "transparent !important"
				};
				styles[":after"][borderradiuspropName] = "3px";
				styles[":after"][transformpropName] = "rotate(100deg)";
		        
	           break;
	           
	        case "star":
	           // One-div star
	           styles["display"] = "inline-block";
			   styles["border-left"] = "1.382em solid transparent";
			   styles["border-right"] = "1.382em solid transparent";
			   styles["border-top"] = "1em solid #2C2C2C";
			  
			   styles[":before"] = {
			   	  "top" : "-1.04em",
			   	  "left" : "-1.45em",
		          "position" : "absolute",
		          "content" : '""',
		          "border-left" : "1.382em solid transparent",
		 		  "border-right" : "1.382em solid transparent",
		 		  "border-top" : "1em solid #2c2c2c"
				};
			   styles[":before"][transformpropName] = "rotate(72deg)";
			    
			   styles[":after"] = {
				  "top" : "-1.04em",
				  "left" : "-1.35em",
		          "position" : "absolute",
		          "content" : '""',
		          "border-left" : "1.382em solid transparent",
		 		  "border-right" : "1.382em solid transparent",
		 		  "border-top" : "1em solid #2c2c2c"
				};
			   styles[":after"][transformpropName] = "rotate(-72deg)";
			   
			   
	           break;
	           
	        case "soundbar":
	           styles["display"] = "inline-block";
			   styles["margin-left"] = "1.4em";
			   styles["margin-right"] = "1.4em";
			   styles["margin-bottom"] = "0.6em";
			   styles["border-bottom"] = "2.4em solid #000000";
			   styles["width"] = "1em";
			   styles["height"] = "3em";
			   styles[animationpropName] = "soundbar-middle-play linear 0.8s infinite alternate";
			  
			   styles[":before"] = {
			   	  "top" : "-1.04em",
			   	  "left" : "-1.45em",
		          "position" : "absolute",
		          "content" : '""',
		          "height" : "3em",
		          "width" : "1em",
		          "margin-left" : "-1.4em",
		          "vertical-align" : "bottom",
		          "border-bottom" : "1.6em solid #000000",
		          "font-size" : "5px"
				};
			   styles[":before"][animationpropName] = "soundbar-left-play linear 1s infinite alternate";
			    
			   styles[":after"] = {
				  "top" : "-1.04em",
				  "left" : "-1.35em",
		          "position" : "absolute",
		          "vertical-align" : "bottom",
		          "content" : '""',
		          "height" : "3em",
		          "width" : "1em",
		          "margin-left" : "1.4em",
		          "border-bottom" : "0.8em solid #000000",
		          "font-size" : "5px"
				};
			   styles[":after"][animationpropName] = "soundbar-right-play linear 0.9s infinite alternate";
			   
			   styles[keyframepropName] = "soundbar-middle-play linear 0.8s infinite alternate";
			   
			   
	           break;
	           
	         case "calendar":
	           // Cikonss calendar
	           // styles[""] = "";
	           styles["display"] = "inline-block";
	           styles["top"] = ".125em";
	           styles["left"] = "0";
	           styles["width"] = ".875em";
	           styles["height"] = ".6875em";
	           styles["border-width"] = ".125em .0625em .0625em .0625em";
	           styles["border-style"] = "solid";
	           //styles["border-color"] = "rgb(102,102,102)";
	           //styles["background-color"] = "rgb(249,249,249)";
	           styles["border-color"] = "#999999";
	           styles["border-radius"] = ".0625em";
			  
			   styles[":before"] = {
			   	  "width" : ".3em",
			   	  "height" : ".125em",
			   	  "top" : "-.25em",
			   	  "left" : ".125em",
		          "position" : "absolute",
		          "content" : '""',
		          "border-width" : "0 .125em",
		          "border-style" : "solid",
		          "border-color" : "#999999"
		          //"border-color" : "rgb(102,102,102)"
				};
			   //styles[":before"][boxshadowpropName] = "0 0 0 32px rgba(99,99,99,1) inset, 6px 0 0 0 rgba(99,99,99,1) , 12px 0 0 0 rgba(99,99,99,1) , 0 6px 0 0 rgba(99,99,99,1) , 6px 6px 0 0 rgba(99,99,99,1) , 12px 6px 0 0 rgba(99,99,99,1) , 0 12px 0 0 rgba(99,99,99,1) , 6px 12px 0 0 rgba(99,99,99,1) , 12px 12px 0 0 rgba(99,99,99,1)";
			    
			   styles[":after"] = {
				  "top" : ".08em",
				  "left" : ".27em",
		          "position" : "absolute",
		          "content" : '"15"',
		          "font-size" : ".4em",
		          "font-weight" : "bold",
		          "color" : "#999999"
		          //"color" : "rgb(102,102,102)"
		       };
			   //styles[":after"][borderradiuspropName] = "3px";
			   //styles[":after"][boxshadowpropName] = "inset 0 0 0 32px, 10px 0";
			   
			   
	           break;
				
	      }
	  }
    },


    _applySqviconName : function()
    {
      if (qx.core.Environment.get("qx.debug"))
      {
        if (this._isInitialized()) {
          throw new Error("This decorator is already in-use. Modification is not possible anymore!");
        }
      }
    }
  }
});
