/*!CK:68845120!*//*1438571272,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["YfWnZ"]); }

__d("BlueBarController",["Bootloader","CSS"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();f.init=function(i){if('getBoundingClientRect' in i){var j=function(){var k=i.getBoundingClientRect(),l=Math.round(k.top)-document.documentElement.clientTop;h.conditionClass(i.firstChild,'fixed_elem',l<=0);};j();g.loadModules(["Event"],function(k){k.listen(window,'scroll',j);});}};},null);
__d("CovercardArrow",["ContextualDialogArrow","CSS","DOMQuery","Locale","Style","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=-45,o=45,p=9;if(j.isRTL()){n=-n;o=-o;}function q(s){"use strict";this._layer=s;}q.prototype.enable=function(){"use strict";this._layer.enableBehavior(g);var s=this._layer.getContentRoot();this._arrowWrapper=i.scry(s,"._7lh")[0];if(!this._arrowWrapper)return;this._arrowShadow=i.scry(this._arrowWrapper,"._7li")[0];if(!this._arrowShadow)return;var t=null;if(r(this._arrowWrapper))t=this._renderArrowWithRotate.bind(this);if(!t)return;if(j.isRTL())h.addClass(s,"_7lf");this._subscription=this._layer.subscribe('reposition',function(u,v){var w=v.getPosition()=='below';h.conditionClass(s,"_53ih",w);w&&t(v);});};q.prototype.disable=function(){"use strict";this._subscription&&this._subscription.unsubscribe();this._subscription=null;};q.prototype._calculateArrowOffset=function(s){"use strict";var t=g.getOffsetPercent(s),u=g.getOffset(s,t,this._layer),v=k.get(this._layer.getContentRoot(),'width');return parseInt(v,10)*(t/100)+u;};q.prototype._renderArrowWithRotate=function(s){"use strict";var t=i.scry(this._arrowWrapper,"._7lj")[0];if(!t){var u=this._layer.getContentRoot();h.addClass(u,"_4nfk");}var v=i.scry(this._arrowWrapper,"._1ubp")[0];if(!v)return;var w=r(this._arrowWrapper);if(!w)return;var x=this._calculateArrowOffset(s),y=p+x,z=-p;if(j.isRTL()){y=-y;z=-z;}this._arrowWrapper.style[w]='translate('+y+'px, -'+p+'px) '+'rotate('+o+'deg)';if(t)t.style[w]='rotate('+n+'deg) '+'translate('+(-y)+'px, '+(p-12)+'px)';v.style[w]='rotate('+n+'deg) '+'translate('+z+'px, 0)';};function r(s){if(!s)s=document.body;var t=['transform','WebkitTransform','msTransform','MozTransform','OTransform'],u;while(u=t.shift())if(s.style[u]!==(void 0))return u;return null;}e.exports=q;},null);