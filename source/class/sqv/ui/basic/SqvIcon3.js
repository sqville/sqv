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

qx.Class.define("sqv.ui.basic.SqvIcon3",
{
  extend : qx.ui.embed.Html,


  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param iconinfo {String} type/width-height/classname of SQv icon; Or just the classname
   */
  construct : function(iconinfo)
  {
    this.base(arguments);

    if (iconinfo != null) {
      var icontype = "sqvicon";
      var wh = 0;
      var iconclassname = "";
      var arrinfo = iconinfo.split("/"); 
      if (arrinfo.length > 1){
      	icontype = arrinfo[0];
      	wh = parseInt(arrinfo[1]);
      	iconclassname = arrinfo[2];
      }
      else {
      	iconclassname = iconinfo;
      	
      }   
      this.setAppearance(iconclassname);
      this.buildHtmlContent(icontype, wh, iconclassname);
      
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
   
   
    /**
     * Builds the appropriate tag and attributes based on the parameters
     */
    buildHtmlContent : function(icontype, wh, classname) {
      var html = "";
      var ident = icontype + "-" + classname;
      //
      var svg = "<svg id='" + ident + "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 " + wh + " " + wh + "'><path d='";
      switch(icontype) {
      	case "Entypo":
      		var path = sqv.theme.icon.Entypo.PATHS[classname];
      		html = svg + path + "'/></svg>";
      		break;
      	
      	case "Other":
      		//var path = sqv.theme.icon.Material.PATHS[classname];
      		//html = svg + path + "'/></svg>";
      		break;
      		
      	default:
      		html = "<div class='" + classname + "'></div>";
      }
      
      //set width and height of this control
      if (wh != 0) {
      	this.setWidth(wh);
	  	this.setHeight(wh);
      }
      
      this.setHtml(html);
    }
  }
});
