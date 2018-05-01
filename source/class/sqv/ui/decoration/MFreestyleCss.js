/* ************************************************************************

   SQville Software

   http://sqville.com

   Copyright:
     None

   License:
     MIT: http://

   Authors:
     * Chris Eskew (chris.eskew@sqville.com)

************************************************************************ */
/**
 * Custom (Freestyle) CSS/CSS3 implementation
 * This mixin is used by {@link qx.ui.decoration.Decorator}.
 */
qx.Mixin.define("sqv.ui.decoration.MFreestyleCss",
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
    
    /** name of freesytle css block*/
    freestyleCss :
    {
      nullable : true,
      check : "String",
      init : "",
      apply : "_applyFreestyleCss"
    }    
    
  },


  members :
  {

    /**
     * Takes a styles map and adds CSS/CSS3 entries in place
     * to the given map. This is the needed behavior for
     * {@link qx.ui.decoration.Decorator}.
     *
     * @param styles {Map} A map to add the styles.
     */
    _styleFreestyleCss : function(styles)
    {
	  var iconname = this.getFreestyleCss();
	  if (iconname.length > 0) {
	  	
	  	var sudostylemap = sqv.theme.clean.Image.CSSICONS[iconname]; 
	  	//var sudostylemap = this.getFreestyleCssClass().CSSICONS[iconname];
	  	
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
	  	sudostylemap = this._includeFreestyleStyles(sudostylemap);
	  	
	  	//general loop to add content based on map
	  	for (var sudo in sudostylemap) {
		  	if (sudo == "before" || sudo == "after"){
			  	if (!styles.hasOwnProperty(":" + sudo))
			  		styles[":" + sudo] = {};			  		
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
    
    _includeFreestyleStyles : function(sudostylemap)
    {
    	//work down include chain before updating styles
    	if (sudostylemap.hasOwnProperty("include")){
		  	var includestylemap = sqv.theme.clean.Image.CSSICONS[sudostylemap["include"]];
		  	if (includestylemap.hasOwnProperty("include"))
		  		sudostylemap["include"] = includestylemap["include"];
		  	else
		  		delete sudostylemap["include"];
		  	this._includeFreestyleStyles(Object.assign({}, includestylemap, sudostylemap));
		} else {
			return sudostylemap;
		}
    },


    _applyFreestyleCss : function()
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
