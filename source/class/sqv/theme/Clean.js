/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("sqv.theme.Clean",
{
  meta :
  {
    color : sqv.theme.clean.Color,
    decoration : sqv.theme.clean.Decoration,
    font : sqv.theme.clean.Font,
    icon : sqv.theme.icon.Material,
    appearance : sqv.theme.clean.Appearance
  },
  
  boot : function(){
  	/****************************************
       *  Mixin new sqv features 
       ****************************************/
    
	  // Prep the Image widget to have font and SVG handling abilities
	  qx.Class.include(qx.ui.basic.Image, sqv.ui.basic.MImage);
	  
	  // Prep Atoms to have image property handling abilities
	  qx.Class.include(qx.ui.basic.Atom, sqv.ui.basic.MAtom);
	  
	  // Prep tables Header Cell to have image property handling abilities
	  qx.Class.include(qx.ui.table.headerrenderer.HeaderCell, sqv.ui.table.MHeaderCell);
	  
	  // Add the beforeContent property to the Decorator class
	  qx.Class.include(qx.ui.decoration.Decorator, sqv.ui.decoration.MBeforeContent);
	  qx.Class.include(qx.ui.decoration.Decorator, sqv.ui.decoration.MFreestyleCss);
	  
	  // Add FontAwesome specific Appearance, Decoration and Font entries to the current theme 
	  qx.Theme.include(sqv.theme.clean.Appearance, sqv.fonticon.FontAwesome.Appearance);
	  qx.Theme.include(sqv.theme.clean.Decoration, sqv.fonticon.FontAwesome.Decoration);
	  qx.Theme.include(sqv.theme.clean.Font, sqv.fonticon.FontAwesome.Font);
  }
});