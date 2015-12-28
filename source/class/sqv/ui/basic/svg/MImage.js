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
 * A mixin that modifies the Image object to be a svg tag (rather than an img or div tag) and act as a wrapper for svg def and path tags 
 * 
 */
qx.Mixin.define("sqv.ui.basic.svg.MImage",
{
  
  
  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */
 
  properties :
  {},

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
  	// Override
  	/**
     * Applies the source to the clipped image instance or preload
     * an image to detect sizes and apply it afterwards.
     *
     */
    _styleSource : function()
    {
      var source = this.getSource();

      var element = this.getContentElement();
      if (this.__wrapper) {
        element = element.getChild(0);
      }

      if (!source)
      {
        element.resetSource();
        return;
      }

      this.__checkForContentElementSwitch(source);

      if ((qx.core.Environment.get("engine.name") == "mshtml") &&
        (parseInt(qx.core.Environment.get("engine.version"), 10) < 9 ||
         qx.core.Environment.get("browser.documentmode") < 9))
      {
        var repeat = this.getScale() ? "scale" : "no-repeat";
        element.tagNameHint = qx.bom.element.Decoration.getTagName(repeat, source);
      }

      var contentEl = this.__getContentElement();

      // Detect if the image registry knows this image
      if (qx.util.ResourceManager.getInstance().has(source)) {
        this.__setManagedImage(contentEl, source);
        this.__fireLoadEvent();
      } else if (qx.io.ImageLoader.isLoaded(source)) {
        this.__setUnmanagedImage(contentEl, source);
        this.__fireLoadEvent();
      } else {
        this.__loadUnmanagedImage(contentEl, source);
      }
    }
  }
});