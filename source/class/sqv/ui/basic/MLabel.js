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
 * Allows decoration of the content value of the before pseudo-element 
 * This mixin is usually used by {@link qx.ui.decoration.Decorator}.
 */
qx.Mixin.define("sqv.ui.basic.MLabel",
{

  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    /*
    ---------------------------------------------------------------------------
      PROPERTY: INNER WIDTH
    ---------------------------------------------------------------------------
    */

    /** name of icon */
    rotatevertical :
    {
      nullable : true,
      check : "String",
      init : "",
      apply : "_applyRotateVertical"
    }
    
    
  },


  members :
  {

    _styleRotateVertical : function(styles)
    {
	  var rotatevertical = this.getRotateVertical();
	  if (rotatevertical.length > 0) {
	  	
		// Transform
		var transformpropName = qx.core.Environment.get("css.transform");
		transformpropNameR = qx.bom.Style.getCssName(transformpropName.name);
		transformpropNameTO = qx.bom.Style.getCssName(transformpropName.origin);

  		//*** Rotate ***//
  		styles[transformpropNameR] = "rotate(" + rotatevertical + ")";
		//Play around with these to see if they work better
		//** transform: rotateX(3deg)**//
			//styles[transformpropName] = "rotateX(" + rotatevertical + ")";
		//**transform: rotateY(3deg)**//
			//styles[transformpropName] = "rotateY(" + rotatevertical + ")";

		//** Transform Origin **//
		styles[transformpropNameTO] = "50% 50%";

	  }
    },


    _applyRotateVertical : function()
    {
      if (qx.core.Environment.get("qx.debug"))
      {
        if (this._isInitialized()) {
          throw new Error("This decorator is already in-use. Modification is not possible anymore!");
        }
      }
    }
  }
});
