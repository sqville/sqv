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
qx.Mixin.define("sqv.ui.decoration.MCssIcon",
{

  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    /*
    ---------------------------------------------------------------------------
      PROPERTY: CSS ICON NAME
    ---------------------------------------------------------------------------
    */

    /** name of icon */
    cssiconName :
    {
      nullable : true,
      check : "String",
      init : "",
      apply : "_applyCssiconName"
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
    _styleCssiconName : function(styles)
    {
	  var iconname = this.getCssiconName();
	  if (iconname.length > 0) {
	  	
	  	var sudostylemap = sqv.theme.clean.Image.CSSICONS[iconname]; 
	  	
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
	  	
	  	//variables for looping
	  	var entryval;
	  	
	  	//styles[":after"] = {};
	  	//styles[":before"] = {};
	  	
	  	//general loop to add content based on map
	  	for (var sudo in sudostylemap) {
		  	if (sudo == "before" || sudo == "after"){
			  	//styles[":" + sudo] = {};
			  	for (var entry in sudostylemap[sudo]) {
		  			entryval = sudostylemap[sudo][entry];
		  			switch(entry) {
			  			case "transform":
			  				styles[":" + sudo][transformpropName] = entryval;
			  				break;
			  			case "border-radius":
			  				styles[":" + sudo][borderradiuspropName] = entryval;
			  				break;
			  			case "animation":
			  				styles[":" + sudo][animationpropName] = entryval;
			  				break;
			  			case "boxshadow":
			  				styles[":" + sudo][boxshadowpropName] = entryval;
			  				break;
			  			default:
			  				styles[":" + sudo][entry] = entryval;	
		  			}
			  	}
			}
		  	else {
		  		for (var entry in sudostylemap[sudo]) {
		  			entryval = sudostylemap[sudo][entry];
		  			switch(entry) {
			  			case "transform":
			  				styles[transformpropName] = entryval;
			  				break;
			  			case "border-radius":
			  				styles[borderradiuspropName] = entryval;
			  				break;
			  			case "animation":
			  				styles[animationpropName] = entryval;
			  				break;
			  			case "boxshadow":
			  				styles[boxshadowpropName] = entryval;
			  				break;
			  			default:
			  				styles[entry] = entryval;
		  			}
		  		}
		  	}	
	  	}	
	  }
    },


    _applyCssiconName : function()
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
