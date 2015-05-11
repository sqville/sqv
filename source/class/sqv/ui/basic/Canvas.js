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
 * 
 *
 */
qx.Class.define("sqv.ui.basic.Canvas",
{
  extend : qx.ui.core.Widget,

  include : [qx.ui.core.MNativeOverflow],

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * 
   */
  construct : function()
  {
    this.base(arguments);
    this.setOverflow("visible", "visible");
    this.setPosition("relative");
  },


  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */
 properties : {

     /**
     * The z-index property sets the stack order of an element. An element with
     * greater stack order is always in front of another element with lower stack order.
     */
    position :
    {
      check : ["absolute", "relative"],
      init : "relative",
      apply : "_applyPosition",
      themeable : true
    }

},
  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    __font : null,
    __invalidContentSize : null,
    __webfontListenerId : null,



    /*
    ---------------------------------------------------------------------------
      WIDGET API
    ---------------------------------------------------------------------------
    */
   
   // property apply
    _applyPosition : function(value, old) {
      this.getContentElement().setStyle("position", value);
    },

  
    // overridden
    _applyTextColor : function(value, old)
    {
      if (value) {
        this.getContentElement().setStyle("color", qx.theme.manager.Color.getInstance().resolve(value));
      } else {
        this.getContentElement().removeStyle("color");
      }
    },


    // property apply
    _applyFont : function(value, old)
    {
      if (old && this.__font && this.__webfontListenerId) {
        this.__font.removeListenerById(this.__webfontListenerId);
        this.__webfontListenerId = null;
      }
      // Apply
      var styles;
      if (value)
      {
        this.__font = qx.theme.manager.Font.getInstance().resolve(value);
        if (this.__font instanceof qx.bom.webfonts.WebFont) {
          this.__webfontListenerId = this.__font.addListener("changeStatus", this._onWebFontStatusChange, this);
        }
        styles = this.__font.getStyles();
      }
      else
      {
        this.__font = null;
        styles = qx.bom.Font.getDefaultStyles();
      }

      // check if text color already set - if so this local value has higher priority
      if (this.getTextColor() != null) {
        delete styles["color"];
      }

      this.getContentElement().setStyles(styles);

      // Invalidate text size
      this.__invalidContentSize = true;

      // Update layout
      qx.ui.core.queue.Layout.add(this);
    },


    /**
     * Triggers layout recalculation after a web font was loaded
     *
     * @param ev {qx.event.type.Data} "changeStatus" event
     */
    _onWebFontStatusChange : function(ev)
    {
      if (ev.getData().valid === true) {

        // safari has trouble resizing, adding it again fixed the issue [BUG #8786]
        if (qx.core.Environment.get("browser.name") == "safari" &&
          parseFloat(qx.core.Environment.get("browser.version")) >= 8) {
            window.setTimeout(function() {
              this.__invalidContentSize = true;
              qx.ui.core.queue.Layout.add(this);
            }.bind(this), 0);
        }

        this.__invalidContentSize = true;
        qx.ui.core.queue.Layout.add(this);
      }
    }
   },


  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct : function()
  {

    if (this.__font && this.__webfontListenerId) {
      this.__font.removeListenerById(this.__webfontListenerId);
    }

    this.__font = null;
  }
});
