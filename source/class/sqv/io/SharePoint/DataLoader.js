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
     * Qooxdoo code - Chris Eskew (chris.eskew@sqville.com)

************************************************************************ */

/**
 * The loader loads the all data by using REST calls to SharePoint
 */
qx.Class.define("sqv.io.SharePoint.DataLoader",
{
  extend : qx.core.Object,
  type : "singleton",

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    
    _listServiceUrl : sqv.io.SharePoint.Settings.GENERAL["ListServiceUrl"],
    
    __listServiceBatchUrl : sqv.io.SharePoint.Settings.GENERAL["ListServiceBatchUrl"],
    
    __storage : null,
    
    __callingpage : null,
    
    __callbackfunction : null,
    
    /**
     * Load data to populate selection boxes and other starter data (First Data)
     *
     */
    loadFirstData : function()
    {
      /*
       * The following lists will be loaded:
       *  - List 1
       *  - List 2
       *  - List 3
       *  - etc.
      */
     
     /** 
      * Setup Resource
      *   Step 1: Describe the Resource
      */
     var description = {
		 "postfirstdatabatch": { method: "POST", url: this.__listServiceBatchUrl} 
	  };
      
      var resouce = new qx.io.rest.Resource(description);
      
      
      /** 
      * Setup Resource
      *   Step 2: Configure the Resource's Request
      */
      resource.configureRequest(function(req) {
		    
		    var listurl = sqv.io.SharePoint.Settings.GENERAL["ListServiceUrl"];
		    var accptxml = sqv.io.SharePoint.Settings.GENERAL["AcceptXML"];
		    var cnttypehttp = sqv.io.SharePoint.Settings.GENERAL["ContentTypeHTTP"];
		    var boundary = sqv.io.SharePoint.Settings.BATCH["Boundry"];
		    var lbr = sqv.io.SharePoint.Settings.BATCH["LineBreak"];
		    var cnttypeb = sqv.io.SharePoint.Settings.BATCH["ContentType"]; 
		    var cteb = sqv.io.SharePoint.Settings.BATCH["ContentTransferEncoding"];
		    
		        
		    req.setRequestHeader("Content-Type", cnttypeb + "; boundary=" + boundary);
		 	req.setRequestHeader("Accept", accptxml);
		 	//set Request data to run batch gets
		 	
		 	var reqdata = boundary + lbr +  
			"Content-Type:" + cnttypehttp + lbr +
			"Content-Transfer-Encoding:" + cteb + lbr + lbr +

			"GET " + listurl + "SPList1?$filter=Status eq 'Active'&$orderby=EventName desc&$select=Id, FiscalYear, EventName HTTP/1.1" + lbr + lbr + 

			"--" + boundary + lbr + 
			"Content-Type:" + cnttypehttp + lbr + 
			"Content-Transfer-Encoding:" + cteb + lbr + lbr +

			"GET " + listurl + "SPList2?$filter=StatusValue eq 'Active'&$orderby=Major desc&$select=Id, Major, School_IDId HTTP/1.1" + lbr + lbr + 
			
			"--" + boundary + lbr + 
			"Content-Type:" + cnttypehttp + lbr + 
			"Content-Transfer-Encoding:" + cteb + lbr + lbr +

			"GET " + listurl + "SPList3?$filter=StatusValue eq 'Active'&$orderby=School desc&$select=Id, School HTTP/1.1" + lbr + lbr + 
			
			"--" + boundary + lbr + 
			"Content-Type:" + cnttypehttp + lbr + 
			"Content-Transfer-Encoding:" + cteb + lbr + lbr +

			"GET " + listurl + "SPList4?$filter=StatusValue eq 'Active'&$orderby=InterviewerName desc&$select=Id, InterviewerName HTTP/1.1" + lbr + lbr +

			"--" + boundary + "--";

			
		 	req.setRequestData(reqdata);
		 	 
	  });
	  
	  
	  
	  /** 
      * Setup Resource
      *   Step 3: Configure the Rest Data Store
      */
	  var firstdatastore = new qx.data.store.Rest(resource, "postfirstdatabatch");
	  //var utrmodel = new rapp.model.Model();

      this.__storage = firstdatastore;
      
      resource.addListener("postfirstdatabatchSuccess", function() { 
        
        var app = qx.core.Init.getApplication();
        var store = qx.core.Init.getApplication().getDatastore();
		var batchresponse = this.__storage.getModel();
        var batchlength = batchresponse.length;
        var nextsection = "";
        var slicemarker = 0;
                
        //parse batch response and isolate the 4 lists
        var feedstart = batchresponse.indexOf("<?xml");
        var feedend = batchresponse.indexOf("</feed")+7;
        slicemarker = feedend;
        
        //place the lists into the Application Datastore
        //**** EVENTS ******
        store.setEventnames(this.__extractarray(batchresponse.slice(feedstart, feedend), "EventName"));
        store.setEventids(this.__extractarray(batchresponse.slice(feedstart, feedend), "Id"));
		
		//set up for next section of the batch response
		nextsection = batchresponse.substring(slicemarker,batchlength);
		feedstart = nextsection.indexOf("<?xml");
        feedend = nextsection.indexOf("</feed")+7;
        slicemarker += feedend;
		
		//***** MAJORS ******
		store.setMajors(this.__extractarray(nextsection.slice(feedstart, feedend), "Major"));
		
		//set up for next section of the batch response
		nextsection = batchresponse.substring(slicemarker,batchlength);
		feedstart = nextsection.indexOf("<?xml");
        feedend = nextsection.indexOf("</feed")+7;
        slicemarker += feedend;
		
		//***** SCHOOLS ******
		store.setColleges(this.__extractarray(nextsection.slice(feedstart, feedend), "School"));
		
		//set up for next section of the batch response
		nextsection = batchresponse.substring(slicemarker,batchlength);
		feedstart = nextsection.indexOf("<?xml");
        feedend = nextsection.indexOf("</feed")+7;
        
		//***** INTERVIEWERS ******
		store.setInterviewers(this.__extractarray(nextsection.slice(feedstart, feedend), "InterviewerName"));

        app._buildrestofapp();
        //alert(utrmodelalert.getBatchresp());
      },this);
      
      resource.addListener("postfirstdatabatchError", function(err) {
      	console.log("call failed - " + err.data);
      },this);
      
      //Execute events model get
      resource.postfirstdatabatch();
      //qx.core.Init.getApplication()._buildrestofapp();
    },
    
    
    /**
     * Pulls data out of the batch response xml and puts the tag data into an array
     *
     */
    __extractarray : function(batchslice, tagname)
    {     
        //loop through feed and pull out the values
        var startval = 0;
        var endval = 0;
        var marker = 0;
        var bslength = batchslice.length;
        var tagval = "";
        var newarray = [];
        
        while (batchslice.indexOf("<d:"+tagname) != -1)
		{
			startval = batchslice.indexOf("<d:"+tagname);
        	endval = batchslice.indexOf("</d:"+tagname)+5+tagname.length;
        	marker = endval;
        	tagval = qx.lang.String.stripTags(batchslice.slice(startval, endval));
        	newarray.push(tagval);
        	batchslice = batchslice.slice(marker,bslength);
		}
        
		return newarray.reverse();
    },
    
    
     /**
     * Get a list of Student info for Student Search list
     *
     */
    GetStudentList : function(callingpage, callbackfunc)
    {
      // populate SharePoint userid
      var description = {
		 "getstudentmodel" : {method: "GET", url: this._listServiceUrl + "UTR_Student_Master?$orderby=LastName desc&$select=Id, FirstName, LastName, Status, Major, GradYr"}		 
	  };
      
      var resource = this.__createResource(description);
      
      var studentdatastore = new qx.data.store.Rest(resource, "getstudentmodel");
      
      resource.addListener("getstudentmodelSuccess", function() {     
        callbackfunc.call (callingpage, studentdatastore.getModel().getD().getResults());
      },this);
      
      //Execute student model get
      resource.getstudentmodel();
   
    },
    
     /**
     * Get a Student's record info based on the id passed into the funtion
     *
     */
    GetStudentRecord : function(callingpage, callbackfunc, studentrecordid)
    {      
      // populate SharePoint userid
      var description = {
		 "getstudentrecord" : {method: "GET", url: this._listServiceUrl + "UTR_Student_Master({id})"}		 
	  };
      
      var resource = this.__createResource(description);
      
      var studentdatastore = new qx.data.store.Rest(resource, "getstudentrecord");
           
      resource.addListener("getstudentrecordSuccess", function() {     
        callbackfunc.call (callingpage, studentdatastore.getModel().getD());
      },this);
      
      //Execute student model get
      resource.getstudentrecord({id: studentrecordid});
       
    },
    
    /**
     * Check to see if the Student has already checked in for the chosen event
     * NEW SQ ADDITION - 9/15/2014
     */
    IsStudentCheckedIn : function(callingpage, callbackfunc, eventid, email)
    { 
      // populate SharePoint userid
      var description = {
		 "getstudentbyeventandemail" : {method: "GET", url: this._listServiceUrl + "UTR_Event_Comments()?$filter=Event_IDId eq {eventid} and Student_ID/Email eq '{email}' &$expand=Student_ID&$select=Id,Student_ID/Email"}		 
	  };
      
      var resource = this.__createResource(description);
      
      var studentdatastore = new qx.data.store.Rest(resource, "getstudentbyeventandemail");
      
      resource.addListener("getstudentbyeventandemailSuccess", function() {     
        callbackfunc.call (callingpage, studentdatastore.getModel().getD());
      },this);
      
      //Execute student model get
      resource.getstudentbyeventandemail({eventid: eventid, email: email});   
   
    },
    
    /**
     * Get a Student's record info based on the id passed into the funtion
     *
     */
    GetStudentByEmail : function(callingpage, callbackfunc, email)
    { 
      // populate SharePoint userid
      var description = {
		 "getstudentbyemail" : {method: "GET", url: this._listServiceUrl + "UTR_Student_Master?$filter=Email eq '{email}'&$select=Id,FirstName,LastName,Email,Status,Major,GradYr"}		 
	  };
      
      var resource = this.__createResource(description);
      
      var studentdatastore = new qx.data.store.Rest(resource, "getstudentbyemail");
      
      resource.addListener("getstudentbyemailSuccess", function() {     
        callbackfunc.call (callingpage, studentdatastore.getModel().getD());
      },this);
      
      //Execute student model get
      resource.getstudentbyemail({email: email});   
   
    },

    /**
     * Get a Student's interview info based on the id passed into the funtion
     *
     */
    GetInterviewForStudentId : function(callingpage, callbackfunc, studentrecordid)
    { 
      // populate SharePoint userid
      var description = {
		 "getstudentinterview" : {method: "GET", url: this._listServiceUrl + "UTR_Student_Interview?$filter=Student_ID eq {id}"}		 
	  };
	  
	  //console.log("interview description: " + description["getstudentinterview"]);
      
      var resource = this.__createResource(description);
      
      var interviewdatastore = new qx.data.store.Rest(resource, "getstudentinterview");
      
      resource.addListener("getstudentinterviewSuccess", function() {     
        callbackfunc.call (callingpage, interviewdatastore.getModel().getD());
      },this);
      
      //Execute interview model get
      resource.getstudentinterview({id: studentrecordid});   
    },

    /**
     * Get a Student's Event info based on the id passed into the funtion
     *
     */
    GetEventsForStudentId : function(callingpage, callbackfunc, studentid)
    { 
      // populate SharePoint userid
      var description = {
		 "getstudentevent" : {method: "GET", url: this._listServiceUrl + "UTR_Event_Comments?$filter=Student_IDId eq {id}"}		 
	  };
      
      var resource = this.__createResource(description);
      
      var studenteventdatastore = new qx.data.store.Rest(resource, "getstudentevent");
      
      resource.addListener("getstudenteventSuccess", function() {     
        callbackfunc.call (callingpage, studenteventdatastore.getModel().getD());
      },this);
      
      //Execute interview model get
      resource.getstudentevent({id: studentid});   
   
    },
    

    /**
     * Load the events model (this will contain all event data from the UTR_Events_Master list)
     *
     */
    loadEvents : function()
    {
      
      // populate SharePoint userid
      var description = {
		 "geteventsmodel" : {method: "GET", url: this._listServiceUrl + "UTR_Events_Master?$orderby=EventName desc&$select=Id, FiscalYear, EventName, Description, EventDate"}		 
	  };
      
      var resource = new qx.io.rest.Resource(description);
      
      resource.configureRequest(function(req) {
		 req.setRequestHeader("Accept-Language", "en-US,en;q=0.8");
		 req.setRequestHeader("Accept", "application/json");
		 req.setRequestHeader("Content-Type", "application/json");
			
		 //req.setRequestData(reqdata);
		 	 
	  });
      
      
      var eventsdatastore = new qx.data.store.Rest(resource, "geteventsmodel");
      
      resource.addListener("geteventsmodelSuccess", function() {
        //this._buildrestofapp();
      },this);
      
      //Execute events model get
      //resource.geteventsmodel();
       
   
    },
    
    
    /**
     * Create and configure a resource
     *
     * @param description {String} map of the resource
     * @return {qx.io.rest.Resource} object
     */
    __createResource : function(description)
    {
      var resource = new qx.io.rest.Resource(description);
      
      resource.configureRequest(function(req) {
		 req.setRequestHeader("Accept-Language", "en-US,en;q=0.8");
		 req.setRequestHeader("Accept", "application/json");
		 req.setRequestHeader("Content-Type", "application/json"); 	 
	  });
	  
	  return resource;
    }
  }
});