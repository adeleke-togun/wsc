/*!CK:650916174!*//*1431781225,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["zXb4z"]); }

__d("GoodwillThrowbackBanzaiLogger",["BanzaiLogger"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(){"use strict";}h.prototype.logShareEvent=function(i,j){"use strict";var k=this;i.onclick=function(){k.logEvent(j.event,j);};};h.prototype.logEvent=function(event,i){"use strict";var j=Object.assign({event:event},i);g.log('GoodwillThrowbackProductLoggerConfig',j);};e.exports=new h();},null);
__d("GoodwillOnThisDayPermalink",["DOM","Arbiter","SubscriptionsHandler","Run"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(l,m){"use strict";if(!l||!m)return;var n=new i();n.addSubscriptions(h.subscribe('Story/delete',function(o,p){if(p===m){n.release();g.remove(l);}}));j.onLeave(n.release.bind(n));}e.exports=k;},null);