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
     * Chris Eskew (chris.eskew@sqville.com)

************************************************************************ */

/**
 * A mixin to support the use of SqvIcons in qx.ui.basic.Atom widgets
 */
qx.Mixin.define("sqv.ui.basic.MAtom",
{
  

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    // SQv
    // patch qx.ui.basic.Atom with this function
    _createChildControlImpl : function(id, hash)
    {
      var control;

      switch(id)
      {
        case "label":
          control = new qx.ui.basic.Label(this.getLabel());
          control.setAnonymous(true);
          control.setRich(this.getRich());
          this._add(control);
          if (this.getLabel() == null || this.getShow() === "icon") {
            control.exclude();
          }
          break;

        case "icon":
          var iconUrl = this.getIcon();
          if (!iconUrl){
			control = new qx.ui.basic.Image(iconUrl);
		  } else if (iconUrl.indexOf('data:') == -1 && iconUrl.indexOf('.') == -1) {
			//control = new sqv.ui.basic.SqvIcon(iconUrl);
			control = new sqv.ui.basic.SqvIcon(iconUrl);
		  } else {
			control = new qx.ui.basic.Image(iconUrl);
		  }
		  
          //control = new qx.ui.basic.Image(this.getIcon());
          control.setAnonymous(true);
          this._addAt(control, 0);
          if (this.getIcon() == null || this.getShow() === "label") {
            control.exclude();
          }
          break;
      }

      return control || this.base(arguments, id);
    }
  }
});