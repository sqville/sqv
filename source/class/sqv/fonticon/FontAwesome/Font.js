/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
   * Martin Wittemann (martinwittemann)

************************************************************************* */

/**
 * Font Awesome icons (http://fortawesome.github.io/Font-Awesome/)
 * 
 */
qx.Theme.define("sqv.fonticon.FontAwesome.Font",
{
  fonts :
  {
       
    "FontAwesome" :
    {
    	size : 12,
    	family : ["FontAwesome"],
    	sources: [
	        {
	          family : "FontAwesome",
	          source:
	          [
	            "sqv/fonts/fontawesome-webfont.eot",
	            "sqv/fonts/fontawesome-webfont.ttf",
	            "sqv/fonts/fontawesome-webfont.woff",
	            "sqv/fonts/FontAwesome.otf"
	          ]
	        }
	      ]

    },
    
    "FontAwesome-std" :
    {
    	size : 16,
    	family : ["FontAwesome"]
    },
    
    "FontAwesome-big" :
    {
    	size : 24,
    	family : ["FontAwesome"]
    }
  }
});
