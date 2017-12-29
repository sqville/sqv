# sqv
qooxdoo themes and more for qx.Desktop applications<br>
<em>Included in this package:</em>
<ul>
<li><b>CLEAN</b> - A flat qx.Desktop theme that promotes simplicity, open spaces, crips edges and bright colors</li>
<li><b>FontAwesome for qx.Desktop</b> - Font Icons for qooxdoo Desktop web applications</li>
<li><b><a href="http://sqville.com/examples/qxthemes/clean/index.html" target="_blank">Demos</a></b> - Clean theme with FontAwesome icons at the top</li>
</ul>
<br>

CLEAN
==========================
![Clean](http://sqville.com/examples/images/sqv/noun_26805_cc.svg)
<ul>
<li>A theme for qx.Desktop applications</li>
<li>It's objective is to live up to it's name</li>
<li>Inspired by <a href="http://semantic-ui.com/" target="_blank">Semantic UI</a></li>
</ul>
<br>


FontAwesome for qx.Desktop
==========================
The fully integrated way of using Font Icons in your qx.Desktop application.

<em>To use:</em>

<b>Step 1</b> Download sqv<br><br>
<b>Step 2</b> Download the latest FontAwesome zip file from the FontAwesome github site - http://fortawesome.github.io/Font-Awesome/ <br><br>
<b>Step 3</b> Copy the contents of the FontAwesome "fonts" folder to the empty "sqv\source\resource\sqv\fonts\FontAwesome" folder <br><br>
<b>Step 4</b> Link sqv to your qx.Desktop project as a library by adding the following library entry to your app's config.json file:

	"library" :
      [
        {
          "manifest" : "${QOOXDOO_PATH}/application/sqv/Manifest.json"
        }
      ]

<b>Step 5</b> Add the following lines of qooxdoo code to the start of the main function of your application (replace "sqv.theme.clean.Appearance|Decoration|Font" with the class names of the theme your app is currently using)

	// Add font and text properties to the qx Image widget
	qx.Class.include(qx.ui.basic.Image, sqv.ui.basic.MImage);
	  
	// Add the beforeContent property to the Decorator class
	qx.Class.include(qx.ui.decoration.Decorator, sqv.ui.decoration.MBeforeContent);
	 
	// Add FontAwesome specific Appearance, Decoration and Font entries to the current theme 
	qx.Theme.include(sqv.theme.clean.Appearance, sqv.fonticon.FontAwesome.Appearance);
	qx.Theme.include(sqv.theme.clean.Decoration, sqv.fonticon.FontAwesome.Decoration);
	qx.Theme.include(sqv.theme.clean.Font, sqv.fonticon.FontAwesome.Font);

<b>Step 6</b> Add the following config entry (add-css) into sqv's config.json file, common entry (12/28/2017 - removed since this is an alternative to the qx @font implemention of font icons). This will bring in the necessary fontawesome css classes:

	"common" :
      {
      	"add-css" :
      	[
	        {
	          "uri" : "resource/sqv/css/font-awesome.min.css"
	        }
	    ]
      }

<b>Step 7</b> Run "generate.py source" in the command line to link the sqv project files to your application <br><br>

<b>Step 8</b> Create an image in your application and set its appearance property to "fa-search"

	//stand alone icon example
    var faiconsearch = new qx.ui.basic.Image().set({appearance:"fa-search"});
    
    //example button with a fonticon
    //the appearance "search-button" is an example appearance found in sqv.iconfont.FontAwesome.Appearance
    var button = new qx.ui.form.Button("Icon Button", "");
    button.setAppearance("search-button");
    
<b>Step 9</b> Run your project and see the results


Demos
===========
Clean Theme (with FontAwesome icons) for qx.Desktop: http://sqville.com/examples/qxthemes/clean/index.html
