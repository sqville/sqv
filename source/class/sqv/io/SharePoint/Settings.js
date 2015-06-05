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
/* ************************************************************************


************************************************************************* */
/**
 * Mapping class for all resource settings used in the SharePoint DataLoader class.
 *
 * 
 */
qx.Class.define("sqv.io.SharePoint.Settings",
{
  extend : qx.core.Object,

  statics :
  {
    
    /**
     * Holds a map containig all the high level, general settings.
     * 
     */
    GENERAL :
    {
      "ListServiceUrl" : "",
      
      "ListServiceBatchUrl" : ""
    },
    
    /**
     * Holds a map containig all the resource request header values.
     * 
     */
    REQUESTHEADER :
    {
      "AcceptJSON" : "application/json",
      
      "AcceptXML" : "application/atom+xml,application/xml",
      
      "AcceptLanguage" : "en-US,en;q=0.8",
      
      "ContentTypeHTTP" : "application/http",
      
      "ContentTypeJSON" : "application/json",
      
      "ContentTransferEncoding" : ""
    },
    
    /**
     * Holds a map containig all the resource request header values.
     * 
     */
    BATCH :
    {  
      "Boundry" : "batch_sqvqxreq1234",
      
      "ContentType" : "multipart/mixed",
      
      "ContentTransferEncoding" : "binary",
      
      "LineBreak" : "\r\n"
     
    }
  }
});
