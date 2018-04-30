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
 * @require(sqv.ui.decoration.MBeforeContent)
 */
qx.Theme.define("sqv.fonticon.FontAwesome.Decoration",
{
  title : "FontAwesome Decorations",
  
  decorations :
  {
  	"fa-search" :
    {
       
   	   style :
       {
         beforeContent : '"\\f002"'
       }
    },
    
    "fa-calendar" :
    {
   	   
   	   style :
       {
         beforeContent : '"\\f073"'
       }
    },
    
    "fa-html5" :
    {
   	   
   	   style :
       {
         beforeContent : '"\\f13b"'
       }
    },
    
    "fa-folder-open" :
    {
   	   
   	   style :
       {
         beforeContent : '"\\f07c"'
       }
    }
  }
  
});