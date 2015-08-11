/*!CK:3719560595!*//*1436754774,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["gJRiU"]); }

__d("NotificationImpressions",["AsyncSignal","NotificationTokens","URI"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j='/ajax/notifications/impression.php';function k(l,m){var n={ref:m};h.untokenizeIDs(l).forEach(function(o,p){n['alert_ids['+p+']']=o;});new g(new i(j).getQualifiedURI().toString(),n).send();}e.exports={log:k};},null);
__d("NotificationBeeperItemContents.react",["Animation","AsyncRequest","Bootloader","CloseButton.react","ImageBlock.react","NotificationURI","NotificationUserActions","React","TextWithEntities.react","Timestamp.react","URI","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){b.__markCompiled&&b.__markCompiled();function s(u,v){return n.createElement("span",{className:"fwb"},u);}var t=n.createClass({displayName:"NotificationBeeperItemContents",_markAsRead:function(){m.markNotificationsAsRead([this.props.beep.notificationID]);},_onClick:function(u){this._markAsRead();this.props.onHide();if(u.button===1||u.altKey||u.ctrlKey||u.metaKey||u.shiftKey)return;var v=this.props.beep,w=new q(v.url).getPath();if(l.isAlbumDraftRecoveryDialogURI(v.link)){new h(v.link).send();u.preventDefault();}else if(v.photo&&l.snowliftable(v.link)){i.loadModules(["PhotoSnowlift"],function(x){x.bootstrap(v.link,u.currentTarget);});u.preventDefault();}else if(v.ajaxifyLink){i.loadModules(["AsyncDialog"],function(x){x.bootstrap(v.ajaxifyLink,u.currentTarget,'dialog');});u.preventDefault();}},_onClose:function(){this._markAsRead();this.props.onHide();},_doFlash:function(){new g(n.findDOMNode(this.refs.inner)).from('opacity','0').to('opacity','1').duration(200).go();},componentDidMount:function(){this.props.onReadyToHide(this.props.beep.notificationID);},componentDidUpdate:function(u){if(u.beep.beepID!==this.props.beep.beepID){this._doFlash();this.props.onReadyToHide(this.props.beep.notificationID);}},render:function(){var u=this.props.beep;return (n.createElement("div",{ref:"inner"},n.createElement(j,{className:"_3soc",onClick:this._onClose,size:"medium"}),n.createElement("a",{href:u.link,onClick:this._onClick,className:"_3soi"},n.createElement(k,{className:"_3soj",spacing:"medium"},n.createElement("img",{src:u.actors[0].profile_picture.uri,className:"_3sok"}),n.createElement("div",{className:"_3sol"},n.createElement(o,{renderEmoticons:true,renderEmoji:true,interpolator:s,ranges:u.text.ranges,aggregatedranges:u.text.aggregated_ranges,text:u.text.text}),n.createElement(k,{className:"_3som"},n.createElement("img",{className:"_1x8t",src:u.icon.uri}),n.createElement(p,{time:u.timestamp.time,text:u.timestamp.text,verbose:u.timestamp.verbose})))))));}});e.exports=t;},null);
__d("NotificationBeeperConst",["keyMirror"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={IDLE_DELAY:10000,ACTIVE_DELAY_LONG:4000,FADE_OUT_LENGTH:1500,BeepStates:g({PENDING:true,RENDERED:true,READY_TO_HIDE:true,FADING_OUT:true})};e.exports=h;},null);
__d("NotificationBeeperItem.react",["Animation","BrowserSupport","NotificationBeeperItemContents.react","React","NotificationBeeperItemRenderersList","Style","NotificationBeeperConst","cx","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p=j.createClass({displayName:"NotificationBeeperItem",getInitialState:function(){return {fadedIn:false,hidden:false};},componentDidMount:function(){var q;if(h.hasCSSAnimations()){q=this.setState.bind(this,{fadedIn:true},null);}else q=function(){new g(j.findDOMNode(this.refs.item)).from('top','-30px').from('opacity','0').to('top','0px').to('opacity','1').duration(200).ondone(this.setState.bind(this,{fadedIn:true},null)).go();}.bind(this);o(q,50);this.props.onInserted(this.props.beep);},componentWillUnmount:function(){if(this._fadeOutAnimation){this._fadeOutAnimation.stop();this._fadeOutAnimation=null;}},_onHide:function(){this.setState({hidden:true});},render:function(){var q=this.props.beep,r=(("_3sod")+(this.state.fadedIn?' '+"_3soe":'')+(this.state.hidden?' '+"_3sof":'')),s=this._getRenderer(q.beepRenderer);return (j.createElement("li",{className:r,ref:"item","data-gt":q.tracking},j.createElement(s,{beep:q,onHide:this._onHide,onReadyToHide:this.props.onReadyToHide,ref:"itemContents"})));},componentDidUpdate:function(q,r,s){if(this.props.fadingOut){if(!this._fadeOutAnimation)this._fadeOutAnimation=new g(j.findDOMNode(this.refs.item)).from('opacity','1').to('opacity','0').duration(m.FADE_OUT_LENGTH).ondone(this._onHide).go();j.findDOMNode(this.refs.item).style.transitionDuration='0ms';}else if(this._fadeOutAnimation){this._fadeOutAnimation.stop();this._fadeOutAnimation=null;l.set(j.findDOMNode(this.refs.item),'opacity','1');}},_getRenderer:function(q){if(q in k)return k[q];return i;}});e.exports=p;},null);
__d("NotificationSound",["Sound"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=5000;g.init(['audio/mpeg']);function i(j){this._soundPath=j;this._lastPlayed=0;}Object.assign(i.prototype,{play:function(j){if(!this._soundPath)return;var k=Date.now();if((k-this._lastPlayed)<h)return;this._lastPlayed=k;g.play(this._soundPath,j);}});e.exports=i;},null);
__d("NotificationBeeper.react",["Arbiter","ChannelConstants","NotificationBeeperItem.react","NotificationConstants","NotificationImpressions","NotificationPhotoThumbnail","NotificationSound","NotificationUpdates","NotificationURI","NotificationUserActions","React","NotificationBeeperConst","NotificationBeeperPinnedPostLoader","cx","setTimeoutAcrossTransitions","shield"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){b.__markCompiled&&b.__markCompiled();var w=r.BeepStates,x='beeper',y=j.PayloadSourceType.LIVE_SEND,z=j.PayloadSourceType.OTHER_APPLICATION,aa=q.createClass({displayName:"NotificationBeeper",getInitialState:function(){return {soundEnabled:this.props.soundEnabled,hovering:false,fading:false,beeps:{}};},componentWillMount:function(){var ba=h.getArbiterType('notif_sound_pref_changed'),ca='update-notifications';this.subscriptions=[n.subscribe(ca,function(da,ea){if(ea.payloadsource===y||ea.payloadsource===z){var fa=ea.nodes;if(fa&&fa.length)this._handleBeepChanges(this._convertNotifications(fa));}}.bind(this)),g.subscribe(ba,function(da,ea){this.setState({soundEnabled:ea.obj.enabled});}.bind(this))];g.inform('NotificationBeeper/mounted',null,g.BEHAVIOR_PERSISTENT);if(s.payload)this._handleBeepChanges(this._convertNotifications(s.payload.nodes));},componentWillUnmount:function(){this.subscriptions.forEach(function(ba){ba.unsubscribe();});this.subscriptions=null;},_onMouseEnter:function(){this._hideWait&&clearTimeout(this._hideWait);var ba=[],ca=this.state.beeps;Object.keys(ca).forEach(function(da){if(ca[da].state!=w.PENDING){ba.push(da);}else ca[da].state=w.RENDERED;});p.markNotificationsAsSeen(ba);this.setState({hovering:true,fading:false,beeps:ca});},_onMouseLeave:function(){this._waitToHide(r.ACTIVE_DELAY_LONG);this.setState({hovering:false});},_onInsertedItem:function(ba){if(!this.state.hovering)this._waitToHide();if(this.state.soundEnabled&&ba.sound){if(!this._notifSound)this._notifSound=new m(this.props.soundPath);this._notifSound.play(ba.beepID);}if(this.props.shouldLogImpressions)k.log([ba.notificationID],x);},_waitToHide:function(ba){this._hideWait&&clearTimeout(this._hideWait);this._hideWait=u(v(this._hide,this),ba||r.IDLE_DELAY);},_onReadyToHide:function(ba){this.state.beeps[ba].state=w.READY_TO_HIDE;if(!this._hideWait)this._waitToHide();},_hide:function(){this._hideWait=null;var ba=this.state.beeps;Object.keys(ba).forEach(function(ca){if(ba[ca].state==w.READY_TO_HIDE)ba[ca].state=w.FADING_OUT;});this.setState({fading:true});u(v(this._finishHide,this),r.FADE_OUT_LENGTH);},_finishHide:function(){if(!this.state.fading)return;var ba=this.state.beeps;Object.keys(ba).forEach(function(ca){if(ba[ca].state==w.FADING_OUT)delete ba[ca];});this.setState({fading:false,beeps:ba});u(function(){var ca=this.state.beeps;Object.keys(ca).forEach(function(da){if(ca[da].state==w.PENDING)ca[da].state=w.RENDERED;});this.setState({beeps:ca});}.bind(this));},_handleBeepChanges:function(ba){var ca=this.state.fading?w.PENDING:w.RENDERED,da=this.state.beeps,ea=false;Object.keys(ba).reverse().forEach(function(fa){var ga={state:ca,data:ba[fa]};if(!da[fa]||da[fa].data.beepID!=ga.data.beepID){if(da[fa]){ea=true;if(ga.data.beepUpdatesOnTop)delete da[fa];}da[fa]=ga;}});if(ea)this._waitToHide();this.forceUpdate();},render:function(){var ba=this.state.beeps,ca=[];Object.keys(ba).reverse().forEach(function(fa){var ga=ba[fa];if(ga.state==w.PENDING)return;ca.push(q.createElement(i,{key:fa,fadingOut:this.state.fading&&ga.state==w.FADING_OUT,beep:ga.data,onInserted:this._onInsertedItem,onReadyToHide:this._onReadyToHide}));},this);var da=ca.length>0,ea=((!da?"hidden_elem":'')+(' '+"_50d1"));return (q.createElement("ul",{ref:"container",className:ea,"data-gt":this.props.tracking,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave},ca));},_convertNotifications:function(ba){var ca={};ba.forEach(function(da){if(!da.showBeep)return;var ea=da.alert_id,fa=ea+'-'+da.receivedTime,ga=l.getThumbnail(da.attachments,da.attached_story),ha=ca[ea]={notificationID:ea,notifID:da.id,beepID:fa,beepRenderer:da.beepRenderer,rendererData:da.rendererData,beepUpdatesOnTop:da.beepUpdatesOnTop,actors:da.unaggregatedActors||da.actors,icon:da.icon,link:da.url?o.localize(da.url):'#',url:da.url,ajaxifyLink:da.ajaxify_url,photo:ga,text:da.unaggregatedTitle||da.title,timestamp:da.timestamp,receivedTime:da.receivedTime,sound:!!da.sound,tracking:da.tracking};});return ca;}});e.exports=aa;},null);