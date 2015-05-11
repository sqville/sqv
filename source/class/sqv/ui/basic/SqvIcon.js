/* ************************************************************************

   SQville Software

   http://sqville.com

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Author:
     * Chris Eskew (chris.eskew@sqville.com)

************************************************************************ */

/**
 * Uses the Html widget to embed css or svg based icons into the application
 *
 * Use the following naming convention: type/width-height/classname or just classname
 *
 */

/**
 * Remove and add as needed
 * 
 * @require(sqv.theme.icon.Entypo)
 */

qx.Class.define("sqv.ui.basic.SqvIcon",
{
  extend : qx.ui.core.Widget,
  
  include : [qx.ui.core.MNativeOverflow],


  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param iconinfo {String} type/width-height/classname of SQv icon; Or just the classname
   */
  construct : function(icon)
  {
    if (qx.core.Environment.get("qx.debug")) {
      //this.assertArgumentsCount(arguments, 0, 2);
    }

    this.base(arguments);
    
    var cursqviconthememixin = this._returnIconThememixin();
    
    if (cursqviconthememixin) {
    	if (!qx.Class.hasMixin(qx.ui.decoration.Decorator, cursqviconthememixin)) {
    		qx.Class.include(qx.ui.decoration.Decorator, cursqviconthememixin);
    	}
    }
    //qx.Class.include(qx.ui.decoration.Decorator, sqv.theme.icon.MFontAwesome);
    
    this.setOverflow("visible", "visible");

    this._setLayout(new qx.ui.layout.Basic());
    
    this.setAnonymous(true);

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
      refine: true,
      init: "sqv-css-icon"
    },
    /** Any String to display a CSS or SVG icon */
	icon :
    {
	  check : "String",
	  apply : "_applyIcon",
	  nullable : true,
	  themeable : true
	},
	
	iconthemeidentifier :
	{
		check : "String",
		init : "sqv.theme.icon",
		nullable : false
	}
  },
  
  	
    /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    
    /*
    ---------------------------------------------------------------------------
      WIDGET API
    ---------------------------------------------------------------------------
    */
   
   // overridden
    _createChildControlImpl : function(id, hash)
    {
      var control;

      control = new sqv.ui.basic.Canvas();
      control.setAnonymous(true);
      this._add(control);

      return control || this.base(arguments, id);
    },
    
    // property apply
    _applyIcon : function(value, old)
    {
      var sqvicon = this.getChildControl("icon", false);
      if (sqvicon) {
        sqvicon.setAppearance(value);
      }
    },
    
    _returnIconThememixin : function()
    {
    	//Determine icon theme
    	var curicontheme = qx.theme.manager.Icon.getInstance();
    	var curthem = curicontheme.getTheme();
    	var iconthemeid = this.getIconthemeidentifier();
    	var curival = curthem.name.indexOf(iconthemeid);
    	if (curival != -1 ) {
    		var sqviconmixin = iconthemeid + ".M" + curthem.title;
    		if (qx.Mixin.getByName(sqviconmixin) != undefined) {
    			return qx.Mixin.getByName(sqviconmixin);
    		} else {
    			return null;
    		}
    	} else {
    		return null;
    	}
    }
    
  }
});
