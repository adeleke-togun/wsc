/*!CK:3046948261!*//*1438766489,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["d\/t68"]); }

__d("AdsHelpTrayCMSDataDispatcher",["AdsDispatcher","AdsHelpTrayActionTypes","AdsLoadState"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();'use strict';var j={dispatchContentList:function(k,l,m){g.handleUpdateFromViewAction({data:{loadingStatus:i.LOADED,list:l,key:k},logData:{search_query:m,results_count:Object.keys(l).length},type:h.CMS_CONTENT_LIST_LOADED});},dispatchLoadedCMS:function(k,l,m,n,o){this.dispatchCMSContent(i.LOADED,k,l,m,n,o);},dispatchCMSContent:function(k,l,m,n,o,p){g.handleUpdateFromViewAction({data:{loadingStatus:k,content:n,title:m,cmsID:l,shareback:o,adgroupID:p},logData:{cms_id:l},type:h.CMS_CONTENT_LOADED});}};e.exports=j;},null);