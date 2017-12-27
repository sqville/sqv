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
 */
qx.Class.define("sqv.theme.clean.Image",
{
  extend : qx.core.Object,

  statics :
  {
    
    CSSICONS :
    {
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
    			"color" : "black" //color of the check mark
    		},
    		"after" : {}
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
      "window-minimize" : "decoration/window/minimize.gif", //Replaced with Decoration entry:: window-button-minimize-icon
      "window-maximize" : "decoration/window/maximize.gif", //Replaced with Decoration entry:: window-button-maximize-icon
      "window-restore" : "decoration/window/restore.gif",
      "window-close" : "decoration/window/close.gif",

      // cursor
      "cursor-copy" : "decoration/cursors/copy.gif",
      "cursor-move" : "decoration/cursors/move.gif",
      "cursor-alias" : "decoration/cursors/alias.gif",
      "cursor-nodrop" : "decoration/cursors/nodrop.gif",

      // arrows
      "arrow-right" : "decoration/arrows/right.gif", //Replaced by Decoration:: sqv-css-icon-arrow-right
      "arrow-left" : "decoration/arrows/left.gif", //Replaced by Decoration:: sqv-css-icon-arrow-left
      "arrow-up" : "decoration/arrows/up.gif", //Replaced by Decoration:: sqv-css-icon-arrow-up
      "arrow-down" : "decoration/arrows/down.gif",  //Replaced by Decoration:: sqv-css-icon-arrow-down
      "arrow-forward" : "decoration/arrows/forward.gif",
      "arrow-rewind" : "decoration/arrows/rewind.gif",
      "arrow-down-small" : "decoration/arrows/down-small.gif", //Replaced by Decoration:: sqv-css-icon-arrow-down-small
      "arrow-up-small" : "decoration/arrows/up-small.gif",  //Replaced by Decoration:: sqv-css-icon-arrow-up-small
      "arrow-up-invert" : "decoration/arrows/up-invert.gif", //Replaced by Decoration:: sqv-css-icon-arrow-up-invert
      "arrow-down-invert" : "decoration/arrows/down-invert.gif", //Replaced by Decoration:: sqv-css-icon-arrow-down-invert
      "arrow-right-invert" : "decoration/arrows/right-invert.gif", //Replaced by Decoration:: sqv-css-icon-arrow-right-invert

      // split pane
      "knob-horizontal" : "decoration/splitpane/knob-horizontal.png",
      "knob-vertical" : "decoration/splitpane/knob-vertical.png",

      // tree
      "tree-minus" : "decoration/tree/minus.gif",
      "tree-plus" : "decoration/tree/plus.gif",

      // table
      "select-column-order" : "decoration/table/select-column-order.png",
      "table-ascending" : "decoration/table/ascending.png",
      "table-descending" : "decoration/table/descending.png",

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
    }
  }
});
