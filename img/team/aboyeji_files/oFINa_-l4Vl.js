/*!CK:1496330582!*//*1438601981,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Pj81K"]); }

__d("ChatSidebarSheetChatReconnectMsg.react",["ChannelConstants","Link.react","ReactComponentWithPureRenderMixin","React","fbt"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();'use strict';var l=j,m=l.PropTypes,n=j.createClass({displayName:"ChatSidebarSheetChatReconnectMsg",mixins:[i],propTypes:{msecs:m.number,onManuallyConnectClick:m.func},render:function(){var o=this.props.msecs;if(o==null||false===navigator.onLine){return (j.createElement("div",null,k._("Unable to connect to chat. Check your Internet connection.")));}else if(o>g.WARNING_COUNTDOWN_THRESHOLD_MSEC){return (j.createElement("div",null,k._("Unable to connect to chat. {try-again-link}",[k.param("try-again-link",j.createElement(h,{className:"fbChatReconnectLink",onClick:this.props.onManuallyConnectClick},k._("Try again")))])));}else if(o>1000){return (j.createElement("div",null,k._("Unable to connect to chat. Reconnecting in {seconds}...",[k.param("seconds",Math.floor(o/1000))])));}else return (j.createElement("div",null,k._("Unable to connect to chat. Reconnecting...")));}});e.exports=n;},null);