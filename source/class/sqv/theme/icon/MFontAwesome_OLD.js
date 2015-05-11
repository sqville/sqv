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
qx.Mixin.define("sqv.theme.icon.MFontAwesome",
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
	  		  	
	  	//styles["font-family"] = "FontAwesome";
	  	//styles["text-rendering"] = "auto";
	  	
	  	/**
	  	 * See link below for details on font-smoothing
	  	 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth
	  	 */
  		styles["-webkit-font-smoothing"] = "antialiased";
  		styles["-moz-osx-font-smoothing"] = "grayscale";
	  	
	  	switch(iconname)
	      {
	        case "search":	
	          	//styles["font-size"] = "14px";
	          		  
				styles[":before"] = {
		          "content" : '"\\f002"'
		        };
				//styles[":before"][borderradiuspropName] = "100%";
				//styles[transformpropName] = "rotate(60deg)";
				
	          break;
	
	        case "calendar":

		        styles["display"] = "inline-block";
				styles[":before"] = {
		          "content" : '"\\f073"',
		          "text-align" : "center"
		        };
		        
	           break;
	           
	        case "html5":

		        styles["display"] = "inline-block";
					  
				styles[":before"] = {
		          "content" : '"\\25A6"',
		          "text-align" : "center"
		        };
		        
	           break;
	           
	        case "folderopen":

		        styles["display"] = "inline-block";
					  
				styles[":before"] = {
		          "content" : '"\\f07c"',
		          "text-align" : "center"
		        };
		        
	           break;	
	           
	        case "sqv-icon-arrow-down":

		        styles["display"] = "inline-block";
					  
				styles[":before"] = {
		          "content" : '"\\25BE"',
		          "text-align" : "center"
		        };
		        
	           break;
	           
	        /*case "sqv-css-icon-arrow-down":

		        styles["display"] = "inline-block";
					  
				styles[":before"] = {
		          "content" : '"\\25BE"',
		          "text-align" : "center"
		        };*/
		        
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
