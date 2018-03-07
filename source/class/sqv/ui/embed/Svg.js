/* ************************************************************************

   SQville Software: http://sqville.com

   Copyright:
     None

   License:
     MIT 

   Authors:
     * Chris Eskew (sqville)

************************************************************************ */
/* ************************************************************************


************************************************************************* */
/**
 * Name: sqv.ui.embed.Svg
 * Description: SVG templates and functions for embedding and generating SVG assets
 * Feature #1: Adds a URL encoded data URI, SVG "data:image/svg+xml" to qx.ui.basic.Image source property
 * Feature #2: Creates a raw SVG tag as a string to be added anywhere
 * Design: 
 * 		- This class stores SVG tag templates in its static SVG map - this is what makes this "embedded"
 * 		- This class has functions that populates SVG templates with provided map values which produces a string of raw or data encoded SVG
 * 		- Resulting SVGs are stored/cached in an internal store called "__data". 
 * Notes: 
 * 
 */
qx.Class.define("sqv.ui.embed.Svg",
{

  extend : qx.core.Object,
  
  statics :
  {
    
    __datauri : "data:image/svg+xml,",
       
    __svgtag : '<svg id="{{id}}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{{width}}" height="{{height}}" viewBox="0 0 {{viewbox_width}} {{viewbox_height}}" class="{{class}}">',
    
    /**
     * Holds a map containig svg xml
     * @internal
     */
    SVG :
    {

      // SVG tag content in the raw
      // Name: "sqlogo"
      // stroke="{{ellipsestroke}}
      // fill="{{path1fill}}"
      "sqlogo" : '<g><ellipse cy="64" cx="64" stroke-width="2.34090127096591" ry="62.829549364517" rx="62.829549364517" stroke="{{ellipsestroke}}" fill="transparent" /><path id="path1" fill="{{path1fill}}" d="M28.734375,36.4918746948242L32.63671875,36.8199996948242 36.46875,37.8043746948242 36.46875,56.0387496948242 34.640625,55.5114059448242 33.28125,55.3356246948242 31.2773418426514,55.7340621948242 29.578125,56.9293746948242 28.4179668426514,58.6871871948242 28.03125,60.7731246948242 28.4531230926514,62.9528121948242 29.71875,65.6481246948242 31.171875,68.1793746948242 32.89453125,71.5719528198242 34.125,74.9059371948242 34.86328125,78.1813278198242 35.109375,81.3981246948242 34.69482421875,85.8834762573242 33.451171875,90.0114059448242 31.37841796875,93.7819137573242 28.4765625,97.1949996948242 24.97705078125,100.025077819824 21.111328125,102.046562194824 16.87939453125,103.259452819824 12.28125,103.663749694824 7.7109375,103.136405944824 3.18750023841858,101.554374694824 3.18750023841858,83.0387496948242 5.75390625,84.3395309448242 8.015625,84.7731246948242 10.294921875,84.4157028198242 12.1640625,83.3434371948242 13.4121084213257,81.7321090698242 13.828125,79.7574996948242 13.6611318588257,78.8463668823242 13.1601552963257,77.5192184448242 12.3251943588257,75.7760543823242 11.15625,73.6168746948242 9.2900390625,69.8668746948242 7.95703125,66.1168746948242 7.1572265625,62.3668746948242 6.890625,58.6168746948242 7.29345703125,54.2501792907715 8.501953125,50.1969566345215 10.51611328125,46.4572105407715 13.3359375,43.0309371948242 16.71533203125,40.1700973510742 20.408203125,38.1266403198242 24.41455078125,36.9005661010742 28.734375,36.4918746948242z M75.8439636230469,55.3356246948242L73.0812683105469,55.6080856323242 70.5119323730469,56.4254684448242 68.1359558105469,57.7877731323242 65.9533386230469,59.6949996948242 64.1281433105469,61.9742965698242 62.8244285583496,64.4528121948242 62.0422019958496,67.1305465698242 61.7814598083496,70.0074996948242 62.1330223083496,73.6198043823242 63.1877098083496,76.8629684448242 64.9455261230469,79.7369918823242 67.4064636230469,82.2418746948242 67.4064636230469,75.0699996948242 84.2345886230469,75.0699996948242 84.2345886230469,82.2418746948242 86.6955184936523,79.6666793823242 88.4533309936523,76.7692184448242 89.5080184936523,73.5494918823242 89.8595886230469,70.0074996948242 89.5988388061523,67.1305465698242 88.8166122436523,64.4528121948242 87.5129013061523,61.9742965698242 85.6877136230469,59.6949996948242 83.5080261230469,57.7877731323242 81.1408386230469,56.4254684448242 78.5861511230469,55.6080856323242 75.8439636230469,55.3356246948242z M75.8439636230469,36.4918746948242L83.4054794311523,37.2096481323242 90.1994247436523,39.3629684448242 96.2257919311523,42.9518356323242 101.484588623047,47.9762496948242 104.929901123047,52.7955856323242 107.390838623047,57.9723434448242 108.867401123047,63.5065231323242 109.359588623047,69.3981246948242 108.923065185547,75.1959762573242 107.613494873047,80.6832809448242 105.430877685547,85.8600387573242 102.375213623047,90.7262496948242 98.9240341186523,94.6549606323242 94.8517684936523,97.9098434448242 90.1584091186523,100.490898132324 84.8439636230469,102.398124694824 84.8439636230469,107.976249694824 66.7502136230469,107.976249694824 66.7502136230469,102.398124694824 61.4518699645996,100.490898132324 56.7131004333496,97.8629684448242 52.5339012145996,94.5143356323242 48.9142723083496,90.4449996948242 45.9919090270996,85.8395309448242 43.9045066833496,80.8824996948242 42.6520652770996,75.5739059448242 42.2345848083496,69.9137496948242 42.9611473083496,62.5514450073242 45.1408348083496,55.8864059448242 48.7736473083496,49.9186325073242 53.8595848083496,44.6481246948242 58.8547019958496,41.0797653198242 64.1838073730469,38.5309371948242 69.8468933105469,37.0016403198242 75.8439636230469,36.4918746948242z" /></g>'
    },
    
    /** @type {Map} Internal data structure to cache strings of svgs */
    __data : {},
    
    /** API - populates svg url using map interface
     * map (Map) - required
     * encode (Boolean) - optional; defult = true; false value produces raw SVG markup
     */ 
    mapsvg : function(map, encode)
    {
	  	var svg = "";
	  	var lencode = true;
	  	var svgid = this.__maptosvgid(map);
	  	svg = this.__getfrombank(svgid);
	  	
	  	if (map && svg == "") {
	      	if (encode === undefined){
	      		lencode = true;
	      	}
	      	else {
	      		if (!encode)
	      			lencode = false;
	      	}
	      		
	      		
		    if (lencode) {
		    	svg = this.__datauri + encodeURIComponent(this.__mapraw(map));
		    	// Bank encoded svg only; Raw svg is never saved ju
		    	this.__banksvg(svgid, svg);
		    }
		    else {
		    	svg = this.__mapraw(map);
		    }	  	
		}
	  	
	  	return svg;
    },
    
    __banksvg : function(map, svg)
    {
       // Shorthand
	   var entry = this.__data[map];
	
	   if (!entry) {
	        entry = this.__data[map] = {};
	        entry.svg = svg;
	   }
    },
    
    __getfrombank : function(source)
    {
    	var entry = this.__data[source];
    	return entry ? entry.svg : "";
    },
    
    __maptosvgid : function(map)
    {
    	var strsvgid = "";
    	//loop through key values and build a string id
    	for (var key in map)
        {
          var value = map[key];
          strsvgid += key+value;
        }
        return strsvgid;
    },
     
	
	/**
     * 
 	 * @param {Object} json object map
 	 * The object must contain at least id, height, width, vb-height, vb-width 
     */
	__mapraw : function(map)
	{
		// merge svg tag
		var svgopentag = ""; 
		var svgcontent = "";
		var svgendtag = "</svg>";
		svgopentag = this.__rendersvgopentag(map);
		svgcontent = this.__rendersvgcontenttag(map);
		
		var mergedsource = svgopentag + svgcontent + svgendtag;
		return mergedsource;
	},
	
	__rendersvgopentag : function(map)
	{
		// merge svg tag
		return qx.bom.Template.render(this.__svgtag, map);
	},
	
	__rendersvgcontenttag : function(map)
	{
		// merge svg tag
		return qx.bom.Template.render(this.SVG[map.id], map);
	}
  }
});
