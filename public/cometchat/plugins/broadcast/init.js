/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

<?php

	if (file_exists(dirname(__FILE__).DIRECTORY_SEPARATOR."lang.php")) {
		include_once(dirname(__FILE__).DIRECTORY_SEPARATOR."lang.php");
	}
	include_once(dirname(__FILE__).DIRECTORY_SEPARATOR."config.php");

    $width = $camWidth;
	$height = $camHeight;

?>

(function($){

		$.ccbroadcast = (function () {
			var allowresize = 1,
				force = 1,
				lastcall = 0,
				supported = true,
				mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|blackberry|palm|symbian/i),
				Browser = (function(){
					var ua= navigator.userAgent, tem,
					M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
					if(/trident/i.test(M[1])){
						tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
						return 'IE '+(tem[1] || '');
					}
					if(M[1]=== 'Chrome'){
						tem= ua.match(/\bOPR\/(\d+)/);
						if(tem!= null) return 'Opera '+tem[1];
					}
					M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
					if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
					return M;
				})();

			if(Browser[0]=='MSIE' && parseInt(Browser[1]) < 11 ){
				supported = false;
			}
		   	return {
				getTitle: function() {
					return jqcc.ccbroadcast.getLanguage('title');
				},

				init: function (params) {
					if(jqcc.cometchat.membershipAccess('broadcast','plugins')){
						if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
							alert(jqcc.ccbroadcast.getLanguage('popup_already_open'));
							return;
						}
						if (jqcc.cometchat.checkMobileDevice()){
							return;
						}
						var id = params.to;
						var chatroommode = params.chatroommode;
						var windowMode = 0;
						if(typeof(params.windowMode) == "undefined") {
							windowMode = 0;
						} else {
							windowMode = 1;
						}
						if(location.protocol === 'http:') {
							windowMode = 1;
						}
						if(mobileDevice){
							windowMode = 1;
						}
						if(supported) {
							var caller = "";
							if(typeof(params.caller) != "undefined") {
								caller = params.caller;
							}
							if(chatroommode == 1) {
								baseUrl = $.cometchat.getBaseUrl();
								basedata = $.cometchat.getBaseData();
								loadCCPopup(baseUrl+'plugins/broadcast/index.php?action=call&chatroommode=1&broadcast=0&type=1&caller='+caller+'&to='+id+'&grp='+id+'&basedata='+basedata, 'broadcast',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=<?php echo $width;?>,height=<?php echo $height;?>",<?php echo $width;?>,<?php echo $height;?>,jqcc.ccbroadcast.getLanguage('av_broadcast'),1,1,allowresize,1,windowMode);
							} else {
								var random = '';
								var currenttime = new Date();
								currenttime = parseInt(currenttime.getTime()/1000);
								if (currenttime-lastcall > 10) {
									baseUrl = $.cometchat.getBaseUrl();
									baseData = $.cometchat.getBaseData();
					  				loadCCPopup(baseUrl+'plugins/broadcast/index.php?action=request&broadcast=0&type=1&caller='+caller+'&to='+id+'&basedata='+baseData, 'broadcast',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=<?php echo $width;?>,height=<?php echo $height;?>",<?php echo $width;?>,<?php echo $height;?>,jqcc.ccbroadcast.getLanguage('av_broadcast'),1,1,allowresize,1,windowMode);

									lastcall = currenttime;
								} else {
									alert(jqcc.ccbroadcast.getLanguage('wait_message'));
								}
							}
						} else {
							alert(jqcc.ccbroadcast.getLanguage('err_no_browser_support'));
						}
					}
				},

				accept: function (params) {
					if(!(jqcc.cometchat.membershipAccess('broadcast','plugins'))){
						return;
					}
					if (jqcc.cometchat.checkMobileDevice()){
						return;
					}
					if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
						alert(jqcc.ccbroadcast.getLanguage('popup_already_open'));
						return;
					}
					id = params.to;
					grp = params.grp;
					if(typeof(params.windowMode) == "undefined") {
						windowMode = 0;
					} else {
						windowMode = 1;
					}
					if(location.protocol === 'http:') {
						windowMode = 1;
					}
					if(mobileDevice){
						windowMode = 1;
					}
					baseUrl = $.cometchat.getBaseUrl();
					baseData = $.cometchat.getBaseData();
					loadCCPopup(baseUrl+'plugins/broadcast/index.php?action=call&broadcast=1&type=0&grp='+grp+'&basedata='+baseData, 'broadcast',"status=0,toolbar=0,menubar=0,directories=0,type=0,resizable=1,location=0,status=0,scrollbars=0, width=<?php echo $width;?>,height=<?php echo $height;?>",<?php echo $width;?>,<?php echo $height;?>,jqcc.ccbroadcast.getLanguage('av_broadcast'),1,1,allowresize,1,windowMode);
				},

				join: function (params) {
					if(!(jqcc.cometchat.membershipAccess('broadcast','plugins'))){
						return;
					}
					if (jqcc.cometchat.checkMobileDevice()){
						return;
					}
					if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
						alert(jqcc.ccbroadcast.getLanguage('popup_already_open'));
						return;
					}
					id = params.grp;
					chatroommode = 0;
					if(typeof(params.chatroommode) !== "undefined"){
					    chatroommode = params.chatroommode;
					}
					baseUrl = $.cometchat.getBaseUrl();
					basedata = $.cometchat.getBaseData();
					var windowMode = 0;
					if(typeof(params.windowMode) == "undefined") {
						windowMode = 0;
					} else {
						windowMode = 1;
					}
					if((location.protocol === 'http:') || mobileDevice) {
						windowMode = 1;
					}
					if(mobileDevice){
						windowMode = 1;
					}
					if(typeof(parent) != 'undefined' && parent != null && parent != self){
						var controlparameters = {"type":"plugins", "name":"core", "method":"loadCCPopup", "params":{"url": baseUrl+'plugins/broadcast/index.php?action=call&broadcast=1&chatroommode='+chatroommode+'&type=0&join=1&grp='+id+'&basedata='+basedata, "name":"broadcast", "properties":"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=<?php echo $width;?>,height=<?php echo $height;?>", "width":"<?php echo $width;?>", "height":"<?php echo $height;?>", "title":jqcc.ccbroadcast.getLanguage('av_broadcast'), "force":force, "allowmaximize":"1", "allowresize":allowresize, "allowpopout":"1", "windowMode":windowMode}};
	                    controlparameters = JSON.stringify(controlparameters);
	                    parent.postMessage('CC^CONTROL_'+controlparameters,'*');
					} else {
						loadCCPopup(baseUrl+'plugins/broadcast/index.php?action=call&broadcast=1&chatroommode='+chatroommode+'&type=0&join=1&grp='+id+'&basedata='+basedata, 'broadcast',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=<?php echo $width;?>,height=<?php echo $height;?>",<?php echo $width;?>,<?php echo $height;?>,jqcc.ccbroadcast.getLanguage('av_broadcast'),force,1,allowresize,1,windowMode);
					}
				},

				end_call : function(params){
					var id = params.to;
					var grp = params.grp;
					var chatroommode = params.chatroommode;
					baseUrl = $.cometchat.getBaseUrl();
					baseData = $.cometchat.getBaseData();
					var popoutopencalled = 0;
					var endcallrecieved = 0;
					if(chatroommode == 0){
						popoutopencalled = jqcc.cometchat.getInternalVariable('broadcastpopoutcalled');
						endcallrecieved = jqcc.cometchat.getInternalVariable('endcallrecievedfrom_'+grp);
					}
					if(chatroommode==1 || (jqcc.cometchat.getInternalVariable('endcallOnceWindow_'+grp) !== '1' && jqcc.cometchat.getInternalVariable('endcallOnce_'+grp) !== '1')) {
						if(popoutopencalled !== '1' && endcallrecieved !== '1'){
							$.ajax({
								url : baseUrl+'plugins/broadcast/index.php?action=endcall',
								type : 'GET',
								data : {to: id, basedata: baseData , grp: grp, chatroommode: chatroommode},
								dataType : 'jsonp',
								success : function(data) {

								},
								error : function(data) {

								}
							});
						}
					}
					if(chatroommode == 0){
						jqcc.cometchat.setInternalVariable('endcallrecievedfrom_'+grp,'0');
						jqcc.cometchat.setInternalVariable('broadcastpopoutcalled','0');
					}
				},

				inviteBroadcast: function(params) {
					if(!(jqcc.cometchat.membershipAccess('broadcast','plugins'))){
						return;
					}
					var id = params.id;
					var caller = '';
					if(typeof(params.caller) != "undefined") {
						caller = params.caller;
					}
					baseData = $.cometchat.getBaseData();
					baseUrl = $.cometchat.getBaseUrl();
					var windowMode = 0;
					if(typeof(params.windowMode) == "undefined") {
						windowMode = 0;
					} else {
						windowMode = 1;
					}
					if(location.protocol === 'http:') {
						windowMode = 1;
					}
					if(mobileDevice){
						windowMode = 1;
					}
					loadCCPopup(baseUrl + "plugins/broadcast/invite.php?action=invite&caller="+caller+"&grp="+ id +"&basedata="+ baseData ,"invitebroadcast","status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=1, width=400,height=190",400,190,jqcc.ccbroadcast.getLanguage('select_users'),0,0,0,0,windowMode);

				},
				getLanguage: function(id) {
					broadcast_language =  <?php echo json_encode($broadcast_language); ?>;
					if(typeof id==undefined){
						return broadcast_language;
					}else{
						return broadcast_language[id];
					}
				},
				processControlMessage : function(controlparameters) {
					var processedmessage = null;

					switch(controlparameters.method){
						case 'endcall':
							if(controlparameters.params.chatroommode==0){
								jqcc.cometchat.setInternalVariable('endcallrecievedfrom_'+controlparameters.params.grp,'1');
							}
							processedmessage = jqcc.ccbroadcast.getLanguage('broadcast_ended');
						break;
						default :
						processedmessage = null;
						break;
					}
					return processedmessage;
				}
			};
		})();

})(jqcc);

jqcc(document).ready(function(){
	jqcc('.join_Broadcast').live('click',function(){
		var grp = jqcc(this).attr('grp');
		if(typeof(parent) != 'undefined' && parent != null && parent != self){
			var controlparameters = {"type":"plugins", "name":"ccbroadcast", "method":"join", "params":{"grp":grp, "chatroommode":"1"}};
			controlparameters = JSON.stringify(controlparameters);
			if(typeof(parent) != 'undefined' && parent != null && parent != self){
				parent.postMessage('CC^CONTROL_'+controlparameters,'*');
			} else {
				window.opener.postMessage('CC^CONTROL_'+controlparameters,'*');
			}
		} else {
			var controlparameters = {"grp":grp, "chatroommode":"1"};
            jqcc.ccbroadcast.join(controlparameters);
		}
	});

	jqcc('.broadcastAccept').live('click',function(){
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		if((typeof(parent) != 'undefined' && parent != null && parent != self) || window.top != window.self){
			var controlparameters = {"type":"plugins", "name":"ccbroadcast", "method":"accept", "params":{"to":to, "grp":grp}};
			controlparameters = JSON.stringify(controlparameters);
			parent.postMessage('CC^CONTROL_'+controlparameters,'*');
		} else {
			var controlparameters = {"to":to, "grp":grp};
            jqcc.ccbroadcast.accept(controlparameters);
		}
	});

	jqcc('.broadcastInvite').live('click',function(){
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		if((typeof(parent) != 'undefined' && parent != null && parent != self) || window.top != window.self){
			var controlparameters = {"type":"plugins", "name":"ccbroadcast", "method":"join", "params":{"to":to, "grp":grp}};
			controlparameters = JSON.stringify(controlparameters);
			parent.postMessage('CC^CONTROL_'+controlparameters,'*');
		} else {
			var controlparameters = {"to":to, "grp":grp};
			jqcc.ccbroadcast.join(controlparameters);
		}
	});
});
