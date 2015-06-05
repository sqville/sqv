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
 * The simple qooxdoo font theme.
 * 
 * 
 */
qx.Theme.define("sqv.theme.clean.Font",
{
  
  fonts :
  {
    "default" :
    {
      size : 14,
      family : ["Lato", "Helvetica Neue", "arial", "Helvetica", "sans-serif"],
      color : "text",
      lineHeight: 1.33
    },
    
    "default-bold" :
    {
      size : 14,
      family : ["Lato", "Helvetica Neue", "arial", "Helvetica", "sans-serif"],
      color : "text",
      bold: true,
      lineHeight: 1.33
    },
    
    "window-header" :
    {
      size : 20,
      family : ["Lato", "Helvetica Neue", "arial", "Helvetica", "sans-serif"],
      bold : false,
      lineHeight: 1.33
    },
    
    "unicode-icons-sm" :
    {
    	size : 20,
    	family : ["arial", "helvetica", "Segoe UI Symbol"]
    },
    
    "lbicon" :
    {
      size : 5,
      family : ["arial", "sans-serif"]
    },
    
    "odicon" :
    {
      size : 9
    },
    
    "icono" :
    {
      family : ["arial", "sans-serif"],
      size : 19
    },

    "bold" :
    {
      size : 13,
      family : ["Lato", "Helvetica Neue", "arial", "Helvetica", "sans-serif"],
      bold : true,
      lineHeight: 1.33
    },
    
    "button" :
    {
      size : 13,
      family : ["Lato", "Helvetica Neue", "arial", "Helvetica", "sans-serif"],
      bold : true,
      lineHeight: 1.33
    },
    
    "input" :
    {
    	size : 14,
    	family : ["Lato", "Helvetica Neue", "arial", "Helvetica", "sans-serif"],
    	color : "text",
      lineHeight: 1.33
    },
   

    "headline" :
    {
      size : 24,
      family : ["sans-serif", "arial"]
    },

    "small" :
    {
      size : 11,
      family : ["Lato", "Helvetica Neue", "arial", "Helvetica", "sans-serif"]
    },

    "monospace" :
    {
      size : 11,
      family : [ "DejaVu Sans Mono", "Courier New", "monospace" ]
    }
  }
});
