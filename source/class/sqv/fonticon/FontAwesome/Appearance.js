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
     * Qooxdoo code - Chris Eskew (chris.eskew@sqville.com)
     * littlebox CSS - Cabell Maddux (http://littlebox.cabmaddux.com/)

************************************************************************ */
/**
 * Font Awesome icons (http://fortawesome.github.io/Font-Awesome/)
 * 
 * @require(sqv.ui.basic.MImage)
 */
qx.Theme.define("sqv.fonticon.FontAwesome.Appearance",
{
  title : "FontAwesome Appearances",
    
  appearances :
  {
    
    "fa-calendar" :
    {
      style : function(states)
      {
        return {
          width : 40,
          height : 40,	
          font: "FontAwesome-big",
          //textAlign : "left",
          decorator : "fa-calendar"
        };
      }
    },
    
    "fa-calendar-std" :
    {
      style : function(states)
      {
        return {
          width : 18,
          height : 18,	
          font: "FontAwesome-std",
          //textAlign : "left",
          decorator : "fa-calendar"
        };
      }
    },
    
    "fa-html5" :
    {
      style : function(states)
      {
        return {
          width : 40,
          height : 40,	
          font: "FontAwesome-big",
          decorator : "fa-html5"
        };
      }
    },
    
    "fa-folder-open" :
    {
      style : function(states)
      {
        return {
          width : 40,
          height : 40,	
          font: "FontAwesome-big",
          decorator : "fa-folder-open"
        };
      }
    },
    
    "fa-search" :
    {
      include : "image",
      
      style : function(states)
      {
        
        return {
          width : 30,
          height : 30,
          font: "FontAwesome-big",
          //textAlign: "left",
          decorator : "fa-search"
        };
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      SQv
      
      FONTAWESOME BUTTON EXAMPLE
    ---------------------------------------------------------------------------
    */
   
    "search-button-frame" :
    {
	  include :"button-frame",
      style : function(states)
      {
        var decorator = "primary-button-box";

        if (!states.disabled) {
          if (states.hovered && !states.pressed && !states.checked) {
            decorator = "primary-button-box-hovered";
          } else if (states.hovered && (states.pressed || states.checked)) {
            decorator = "primary-button-box-pressed";
          } else if (states.pressed || states.checked) {
            decorator = "primary-button-box-pressed";
          }
        }

        return {
          decorator : decorator,
          textColor : states.hovered ? "yellow" : "primary-button-text"
        };
      }
    },
    
    "search-button" :
    {
      alias : "search-button-frame",
      include : "search-button-frame",

      style : function(states)
      {
        return {
          center : true,
          padding : [10, 18]
        };
      }
    },
    
    "search-button/icon" : "fa-search"

  }
  
});
