/*!CK:454655053!*//*1427685346,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["59jr7"]); }

__d("legacy:DynamicFriendListEducation",["DynamicFriendListEducation"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.DynamicFriendListEducation=b('DynamicFriendListEducation');},3);
__d("FriendListMenu",["Event","Arbiter","AsyncRequest","CSS","DOM","HTML","Focus","Input","Keys","MenuDeprecated","Parent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();var r={init:function(s){p.register(s,false);var t=k.find(s,'.FriendListCreateTrigger'),u=k.find(s,'.CreateListInputItem'),v=k.find(u,'.createListInput');p.subscribe('select',function(w,x){if(x.item==t){j.addClass(s,'FriendListMenuCreate');m.set(v);}});g.listen(v,'blur',function(w){if(n.isEmpty(v))j.removeClass(s,'FriendListMenuCreate');});g.listen(v,'keydown',function(w){if(g.getKeyCode(w)==o.RETURN&&/[^\s]/.test(v.value))new i().setURI('/ajax/friends/lists/create.php').setData({name:v.value,id:s.id}).setHandler(function(){n.reset(v);j.removeClass(s,'FriendListMenuCreate');}).send();});h.subscribe('friend-list/new',function(w,x){var y=l(x.new_li).getRootNode();k.insertBefore(t,y);if(x.id===s.id){p.focusItem(y);p.inform('select',{menu:q.byClass(y,'uiMenu'),item:y});}else p.toggleItem(y);});h.subscribe('friend-list/close_editor',function(){var w=q.byClass(s,'FlyoutFriendMenu');j.removeClass(w,'addToListsOpen');j.addClass(w,'addToListsClosed');});},addToAnotherList:function(s,t){g.listen(s,'click',function(event){var u=q.byClass(s,'FlyoutFriendMenu');j.removeClass(u,'addToListsClosed');j.addClass(u,'addToListsOpen');});},goBack:function(s,t){g.listen(s,'click',function(event){var u=q.byClass(s,'FlyoutFriendMenu');j.removeClass(u,'addToListsOpen');j.addClass(u,'addToListsClosed');});}};e.exports=r;},null);
__d("RestrictedFriendListEducation",["Arbiter","AsyncRequest"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i,j;function k(m,n){if(n.flid==i)if(m=='FriendListHovercard/add'){if(j)return;j=true;new h().setURI('/ajax/friends/lists/restricted_edu.php').setData({target:n.uid,flid:n.flid}).send();}else if(m=='RestrictedListNUX/okay')new h().setURI('/ajax/friends/lists/nux_log.php').setData(n).send();return true;}var l={init:function(m){i=m;g.subscribe(['FriendListHovercard/add','RestrictedListNUX/okay'],k);}};e.exports=l;},null);