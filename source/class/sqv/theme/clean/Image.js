/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2010 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */
/* ************************************************************************


************************************************************************* */
/**
 * Mapping class for all images used in the clean theme.
 *
 * @asset(sqv/decoration/Clean/*)
 * @asset(qx/static/blank.png)
 */
qx.Class.define("sqv.theme.clean.Image",
{
  extend : qx.core.Object,

  statics :
  {
    // Embeded SVG alternative implementation using qx.bom.Template only 
    SVGTEMPLATES :
    {
    	"fontawesome" : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 {{vbw}} {{vbh}}"><path d="{{pathd}}"></path></svg>'
    },
    
    SVGCONTENT :
    {
    	"fa-bath" : {vbw : "512", vbh : "512", pathd : "M488 256H80V112c0-17.645 14.355-32 32-32 11.351 0 21.332 5.945 27.015 14.88-16.492 25.207-14.687 59.576 6.838 83.035-4.176 4.713-4.021 11.916.491 16.428l11.314 11.314c4.686 4.686 12.284 4.686 16.971 0l95.03-95.029c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.512-4.512-11.715-4.666-16.428-.491-17.949-16.469-42.294-21.429-64.178-15.365C163.281 45.667 139.212 32 112 32c-44.112 0-80 35.888-80 80v144h-8c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h8v32c0 28.43 12.362 53.969 32 71.547V456c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-8h256v8c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-32.453c19.638-17.578 32-43.117 32-71.547v-32h8c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"}
    },
    
    // EXPERIMENTAL - div tag per array entry - EXPERIMENTAL
    // Guide - [width, height, left, top, red, green, blue, alpha] 
    DRAWINGS :
    {
      "insert-invitation" : [
      	[2,2,3,0,0,0,0,1],
	    [2,2,13,0,0,0,0,1],
	    [1,1,1,2,0,0,0,.3],
	    [1,1,16,2,0,0,0,.3],
	    [1,1,1,16,0,0,0,.3],
	    [1,1,16,16,0,0,0,.3],
	    [14,1,2,2,0,0,0,1],
	    [16,3,1,3,0,0,0,1],
	    [2,10,1,6,0,0,0,1],
	    [2,10,15,6,0,0,0,1],
	    [16,1,1,15,0,0,0,1],
	    [14,1,2,16,0,0,0,1],
	    [4,4,9,9,0,0,0,1]
      ],
      
      "insert-invitation-hover" : [
      	[2,2,3,0,117,117,117,1],
	    [2,2,13,0,117,117,117,1],
	    [1,1,1,2,117,117,117,.3],
	    [1,1,16,2,117,117,117,.3],
	    [1,1,1,16,117,117,117,.3],
	    [1,1,16,16,117,117,117,.3],
	    [14,1,2,2,117,117,117,1],
	    [16,3,1,3,117,117,117,1],
	    [2,10,1,6,117,117,117,1],
	    [2,10,15,6,117,117,117,1],
	    [16,1,1,15,117,117,117,1],
	    [14,1,2,16,117,117,117,1],
	    [4,4,9,9,117,117,117,1]
      ],
      
      "select-column-order" : [
	      [9,1,0,0,0,0,0,1],
	      [1,8,0,0,0,0,0,1],
	      [1,5,4,0,0,0,0,1],
	      [1,5,8,0,0,0,0,1],
	      [9,1,0,2,0,0,0,1],
	      [4,1,0,7,0,0,0,1],
	      [5,1,5,6,0,0,0,1],
	      [3,1,6,7,0,0,0,1],
	      [1,1,7,8,0,0,0,1]
      ],
      
      "select-column-order-hover" : [
	      [9,1,0,0,0,0,0,1],
	      [1,8,0,0,0,0,0,1],
	      [1,5,4,0,0,0,0,1],
	      [1,5,8,0,0,0,0,1],
	      [9,1,0,2,0,0,0,1],
	      [4,1,0,7,0,0,0,1],
	      [5,1,5,6,255,0,0,1],
	      [3,1,6,7,255,0,0,1],
	      [1,1,7,8,255,0,0,1]
      ]
    },
    
    KEYFRAMES :
    {
    	"example" :
    	{
    		"0" : { "background-color" : "red" },
    		"25" : { "background-color" : "yellow" },
    		"50" : { "background-color" : "blue" },
    		"100" : { "background-color" : "green" }
    	}
    },
    
    DATATYPE :
    {
    	"file-icon[data-type^=doc]" : 
    	{
    		"background": "green"
    	}
    },
    
    CSSICONS :
    {
    	// ACTIVE
    	"checkbox-checked" :
    	{
    		"html" : {},
    		"before" : 
    		{
    			"width" : "6px",
    			"height" : "11px",
    			"top" : "1px",
    			"left" : "5px",
    			"transform" : "rotate(45deg)",
    			"border-radius" : "2px",
    			"position" : "absolute",
    			"border-top" : "0px solid",
				"border-right" : "2px solid",
				"border-bottom" : "2px solid",
				"border-left" : "0px solid",
    			"color" : "black",
    			"content" : "''"
    		}
    	},
    	
    	// ACTIVE
    	"select-column-order" :
    	{
    		"html" : {},
    		"before" : {
    			"left" : "4px",
    			"width" : "6px",
    			"position" : "absolute",
    			"content" : "''"
    		},
    		"after" : {
    			"border-top" : "4px solid darkgray",
				"border-right" : "4.5px solid transparent",
				"border-left" : "4.5px solid transparent",
				"right" : "0px",
				"bottom" : "1px",
    			"position" : "absolute",
    			"content" : "''"
    			
    		}
    	},
    	
    	// ACTIVE
    	"select-column-order-hover" :
    	{
    		"include" : "select-column-order",
    		"after" : {
    			"border-top" : "4px solid black"
    		}
    	},
    	
    	// ACTIVE
    	"window-button-close-icon" :
    	{ 		
    		"before" : 
    		{
    			"width" : "3px",
    			"height" : "13px",
    			"left" : "5px",
    			"transform" : "rotate(45deg)",
    			"transition" : "background-color .8s ease",
    			"position" : "absolute",
    			"top" : "0px",
    			"background-color" : "gray",
    			"content" : "''"
    		},
    		"after" :
    		{
    			"width" : "3px",
    			"height" : "13px",
    			"left" : "5px",
    			"transform" : "rotate(-45deg)",
    			"transition" : "background-color .8s ease",
    			"position" : "absolute",
    			"top" : "0px",
    			"background-color" : "gray",
    			"content" : "''"
    		}
    	},
    	
    	// ACTIVE
    	"window-button-close-icon-hover" :
    	{ 		
    		"include" : "window-button-close-icon",
    		"before" : 
    		{
    			"background-color" : "red"
    		},
    		"after" :
    		{
    			"background-color" : "red"
    		}
    	},
    	
    	"icss-bars" : 
    	{
    		"html" : {
    			"display": "inline-block",
    			"margin": ".41em  0"
    		},
    		"before" : {
    			"position" : "absolute",
  				"box-sizing": "border-box",
    			"width": "1em",
    			"height": ".18em",
    			"border-radius": ".06em",
    			"background-color": "black",
    			"top": "-0.36em",
    			"left": 0,
    			"content":"''"
    		},
			"after" : {
    			"position" : "absolute",
  				"box-sizing": "border-box",
    			"width": "1em",
    			"height": ".18em",
    			"border-radius": ".06em",
    			"background-color": "black",
    			"top": "0.36em",
    			"left": 0,
    			"content":"''"
			}
		},
    	
    	"icss-file-image" :
    	{
    		"html" : {
			    "display": "inline-block",
			    "border-width": ".065em",
			    "border-style": "solid",
			    "border-radius": ".05em .34em .05em .05em"
    		},
    		"before" : 
    		{
    			"position" : "absolute",
  				"box-sizing": "border-box",
    			"border-style": "solid",
    			"border-width": ".2em",
    			"border-radius": ".3em",
    			"border-color": "transparent",
    			"border-right-color": "inherit",
    			"box-shadow": "-.21em -.21em 0 -.1em",
    			"transform": "rotate(-45deg)",
    			"top": ".01em",
    			"left": ".28em",
    			"content" : "''"
    		},
    		"after" :
    		{
    			"position" : "absolute",
  				"box-sizing": "border-box",
    			"border": ".25em solid black",
    			"transform": "rotate(45deg)",
    			"box-shadow": ".18em -.32em",
    			"top": ".6em",
    			"left": "-.08em",
    			"content" : "''"
    		}
    	},
    	
    	"icss-test" :
    	{
    		"html" :
    		{
    			"width": ".22em",
    			"height": ".1em",
    			"margin": ".75em .63em .1em .15em",
    			"box-shadow": ".49em 0"
    		},
    		"before" : 
    		{
			    "width": ".35em",
			    "height": ".35em",
			    "border-radius": "50%",
			    "clip": "rect(-1em 1em .28em 0)",
			    "transform": "rotate(-48deg)",
			    "top": "-.25em",
			    "left": "-.15em",
			    "box-shadow": "inset 0 0 0 1em, .253em .03em 0 .06em",
			    "content" : "''"
			},
			"after" : 
			{
				"width": ".3em",
    			"height": ".3em",
    			"border-radius": "50%",
    			"clip": "rect(-1em 1em .26em -1em)",
    			"transform": "rotate(48deg)",
    			"top": "-.2em",
    			"left": ".55em",
    			"box-shadow": "inset 0 0 0 1em, -.32em .02em 0 .12em",
    			"content" : "''"
			}
    	},
    	
    	"icss-folder-o" :
    	{
    	
	    	"html" : {
			  "display": "inline-block"
			},
			"before" : {
			  "border": "0 solid red",
			  "border-right-width": "10px",
			  "border-right-height": "1px",
			  "top": "0",
			  "right": 0,
			  "content": "''"
			},
			"after" : {
			  "width": "15px",
			  "height": "8px",
			  "border-radius": "2 2 0 0",
			  "border": "2px solid green",
			  "border-bottom": "0 solid transparent",
			  "top": 0,
			  "left": 0,
			  "content": "''"
			}
		},
		
		"icss-file" :
    	{
    	
	    	"html" : {
			  "display": "inline-block"
			},
			"before" : {
			  	"border-style": "solid",
			    "border-width": ".2em",
			    "left": ".275em",
			    "border-radius": ".1em",
			    "border-color": "transparent",
			    "border-right-color": "currentColor",
			    "transform": "rotate(-45deg)",
			    "top": ".02em",
			    "content" : "''"
			}
		},
		
		"icss-credit-card" :
		{
			"html" :
			{
			    "border-radius": ".1em",
			    "border": "solid .065em currentColor",
			    "background-color": "transparent"
			},
			"before" : 
			{
  				"position" : "absolute",
  				"box-sizing": "border-box",
  				"width": ".95em",
  				"height": ".17em",
  				"left": "-.05em",
  				"top": ".1em",
  				"background-color": "currentColor",
  				"content" : "''"
  			},
  			"after" : 
  			{
  				"position" : "absolute",
  				"box-sizing": "border-box",
  				"right": ".1em",
  				"bottom": ".1em",
  				"width": ".35em",
  				"height": ".063em",
  				"background-color": "currentColor",
  				"content" : "''"
  			}
		},
		
		"fileicon" :
    	{   	
	    	"html" : {
			  "display": "inline-block",
			  "-webkit-font-smoothing": "antialiased"
			},
			"before" : {
			  "display" : "block",
			  "position" : "absolute",
			  "top": 0,
			  "right": 0,
			  "width": 0,
			  "height": 0,
			  "border-style": "solid",
			  "border-color": "#fff #fff rgba(255,255,255,.35) rgba(255,255,255,.35)",
			  "content": "''"
			},
			"after" : {
			  "display" : "block",
			  "position" : "absolute",
			  "bottom": 0,
			  "left": 0,
			  "text-transform": "lowercase",
  			  "width": "100%",
  			  "white-space": "nowrap",
  			  "overflow": "hidden",
			  "content": "attr(data-type)"
			}
		},
		
		//"padding": "0 0 .1667em .2083em"
		"fileicon-dy" :
    	{
    		"include" : "fileicon",
			"html" : {
			  "border-radius": ".0625em"
			},
			"before" : {
  			  "border-width": ".1667em"
			},
			"after" : {
			  "font-size": ".375em",
  			  "padding": "0 0 .25em .29em"
			}
		},
		
		/***
		// Add the code below to add a global class based on data-type values 
		"datatype" : {
    		  "equals" : "pdf",
    		  "background": "green"
    		},
		**/
		"fileicon-lg" :
    	{
    		"include" : "fileicon",
			"before" : {
  			  "border-width": "8px"
			},
			"after" : {
			  "font-size": "18px",
  			  "padding": "4px 6px"
			}
		},
		
		"fileicon-sm" :
    	{
    		"include" : "fileicon",
			"before" : {
			  "border-bottom-left-radius": "2px",
			  "border-width": "4px"
			},
			"after" : {
			  "font-size": "7px",
  			  "padding": "2px"
			}
		}
    },
    
    /**
     * Holds a map containig all the URL to the images.
     * @internal
     */
    URLS :
    {
      "blank" : "qx/static/blank.png",

      // checkbox
      "checkbox-checked" : "decoration/checkbox/checked.svg", //Replaced with CSS
      "checkbox-undetermined" : "decoration/checkbox/undetermined.png",  //Replaced by Decoration entry:: checkbox-undetermined
      "checkbox-checked-disabled" : "decoration/checkbox/checked-disabled.svg", //Replaced with SVG file - needs to be replaced with CSS

      // window
      "window-minimize" : "decoration/window/minimize.gif", //Replaced with Decoration entry:: window-button-minimize-icon - pure Qx
      "window-maximize" : "decoration/window/maximize.gif", //Replaced with Decoration entry:: window-button-maximize-icon - pure Qx
      "window-restore" : "decoration/window/restore.gif",
      "window-close" : "decoration/window/close.gif", //Replaced with Decoration entries:: window-button-close-icon and window-button-close-icon-hover - Qx + CSS

      // cursor
      "cursor-copy" : "decoration/cursors/copy.gif",
      "cursor-move" : "decoration/cursors/move.gif",
      "cursor-alias" : "decoration/cursors/alias.gif",
      "cursor-nodrop" : "decoration/cursors/nodrop.gif",

      // arrows
      "arrow-right" : "decoration/arrows/right.gif", //Replaced by Decoration entry:: sqv-css-icon-arrow-right
      "arrow-left" : "decoration/arrows/left.gif", //Replaced by Decoration entry:: sqv-css-icon-arrow-left
      "arrow-up" : "decoration/arrows/up.gif", //Replaced by Decoration entry:: sqv-css-icon-arrow-up
      "arrow-down" : "decoration/arrows/down.gif",  //Replaced by Decoration entry:: sqv-css-icon-arrow-down
      "arrow-forward" : "decoration/arrows/forward.gif",
      "arrow-rewind" : "decoration/arrows/rewind.gif",
      "arrow-down-small" : "decoration/arrows/down-small.gif", //Replaced by Decoration entry:: sqv-css-icon-arrow-down-small
      "arrow-up-small" : "decoration/arrows/up-small.gif",  //Replaced by Decoration entry:: sqv-css-icon-arrow-up-small
      "arrow-up-invert" : "decoration/arrows/up-invert.gif", //Replaced by Decoration entry:: sqv-css-icon-arrow-up-invert
      "arrow-down-invert" : "decoration/arrows/down-invert.gif", //Replaced by Decoration entry:: sqv-css-icon-arrow-down-invert
      "arrow-right-invert" : "decoration/arrows/right-invert.gif", //Replaced by Decoration entry:: sqv-css-icon-arrow-right-invert

      // split pane
      "knob-horizontal" : "decoration/splitpane/knob-horizontal.png",
      "knob-vertical" : "decoration/splitpane/knob-vertical.png",

      // tree
      "tree-minus" : "decoration/tree/minus.gif",
      "tree-plus" : "decoration/tree/plus.gif",

      // table
      "select-column-order" : "decoration/table/select-column-order.png", //Replaced by Decoration entries:: select-column-order and select-column-order-hover - Qx + CSS
      "table-ascending" : "decoration/table/ascending.png",  //Replaced by Decoration:: sqv-css-icon-arrow-up-dark-gray
      "table-descending" : "decoration/table/descending.png", //Replaced by Decoration:: sqv-css-icon-arrow-down-dark-gray

      // tree virtual
      "treevirtual-line" : "decoration/treevirtual/line.gif",
      "treevirtual-minus-only" : "decoration/treevirtual/only_minus.gif",
      "treevirtual-plus-only" : "decoration/treevirtual/only_plus.gif",
      "treevirtual-minus-start" : "decoration/treevirtual/start_minus.gif",
      "treevirtual-plus-start" : "decoration/treevirtual/start_plus.gif",
      "treevirtual-minus-end" : "decoration/treevirtual/end_minus.gif",
      "treevirtual-plus-end" : "decoration/treevirtual/end_plus.gif",
      "treevirtual-minus-cross" : "decoration/treevirtual/cross_minus.gif",
      "treevirtual-plus-cross" : "decoration/treevirtual/cross_plus.gif",
      "treevirtual-end" : "decoration/treevirtual/end.gif",
      "treevirtual-cross" : "decoration/treevirtual/cross.gif",

      // menu
      "menu-checkbox" : "decoration/menu/checkbox.gif",
      "menu-checkbox-invert" : "decoration/menu/checkbox-invert.gif",
      "menu-radiobutton-invert" : "decoration/menu/radiobutton-invert.gif",
      "menu-radiobutton" : "decoration/menu/radiobutton.gif",

      // tabview
      "tabview-close" : "decoration/tabview/close.gif"
    },
    
    paint : function(drawing)
    {
  		return sqv.theme.clean.Image.DRAWINGS[drawing].map(this._convertstroke).join("");
    },
    
    /*
     * vA = [width, height, left, top, red, green, blue, alpha]
     */
    _convertstroke : function(vA)
    {
  		return "<div style='width:" + vA[0] + "px;height:" + vA[1] + "px;position:absolute;overflow:hidden;left:" + vA[2] + "px;top:" + vA[3] + "px;background-color:" + "rgba(" + vA[4] + "," + vA[5] + "," + vA[6] + "," + vA[7] + ")'></div>";
    }
  }
});
