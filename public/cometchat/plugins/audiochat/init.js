/*
		* CometChat
		* Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/
<?php
include_once(dirname(__FILE__).DIRECTORY_SEPARATOR."config.php");

if (file_exists(dirname(__FILE__).DIRECTORY_SEPARATOR."lang.php")) {
	include_once(dirname(__FILE__).DIRECTORY_SEPARATOR."lang.php");
}

$width = 300;
$height = 300;
?>
String.prototype.replaceAll=function(s1, s2) {return this.split(s1).join(s2);};
(function($){

	$.ccaudiochat = (function () {
		var supported = true;
		var lastcall = 0;
		var allowresize = 1;
		var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|IEMobile|blackberry|palm|symbian/i);
		var Browser = (function(){
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
				return jqcc.ccaudiochat.getLanguage('title');
			},

			init: function (params) {
				if (!(jqcc.cometchat.membershipAccess('audiochat','plugins'))){
					return;
				}
				if (jqcc.cometchat.checkMobileDevice()){
					return;
				}
				if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
					alert(jqcc.ccaudiochat.getLanguage('popup_already_open'));
					return;
				}
				var id = params.to;
				var chatroommode = params.chatroommode;
				var caller = '';
				windowMode = 0;
				if(typeof(params.caller) != "undefined"){
					caller = params.caller;
				}
				if(supported) {
					var currenttime = new Date();
					currenttime = parseInt(currenttime.getTime()/1000);
					if (currenttime-lastcall > 10) {

						baseUrl = $.cometchat.getBaseUrl();
						baseData = $.cometchat.getBaseData();

						if(chatroommode == 1){
							if(location.protocol === 'http:') {
								windowMode = 1;
							}
							jqcc.ajax({
								url : baseUrl+'plugins/audiochat/index.php?chatroommode=1&action=request',
								data : {to: id, basedata: baseData, caller: caller},
								dataType : 'jsonp',
								success : function(data){
									if(data.hasOwnProperty('errorcode')&&data['errorcode']==3){
										alert(data['message']);
										return;
									}
									if(typeof(data) != "undefined" && data != null && data != ''){
										id = data;
									}
									var controlparameters = {
											type: "plugins",
											name: "core",
											method: "loadCCPopup",
											params: {
												url: baseUrl+'plugins/audiochat/index.php?action=call&chatroommode=1&type=0&join=1&grp='+id+'&basedata='+baseData,
												name: "audiochat",
												properties: "status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=<?php echo $width;?>,height=<?php echo $height;?>",
												width: "<?php echo $width;?>",
												height: "<?php echo $height;?>",
												title: jqcc.ccaudiochat.getLanguage('audio_chat'),
												force: "0",
												allowmaximize :"1",
												allowresize: "1",
												allowpopout:"1",
												windowMode:windowMode
											}
										};
						            controlparameters = JSON.stringify(controlparameters);
						            parent.postMessage('CC^CONTROL_'+controlparameters,'*');
								},
								error : function(data){
								}
							});
						}else{
							jqcc.ajax({
								url : baseUrl+'plugins/audiochat/index.php?action=request',
								type : 'GET',
								data : {
									to: id,
									basedata: baseData,
									caller:caller
								},
								dataType : 'jsonp',
								success : function(data) {
									if(data.hasOwnProperty('errorcode')&&data['errorcode']==3){
										alert(data['message']);
										return;
									}
								},
								error : function(data) {
								}
							});
						}
						lastcall = currenttime;
					} else {
						alert(jqcc.ccaudiochat.getLanguage('wait_message'));
					}
				} else {
					alert(jqcc.ccaudiochat.getLanguage('err_no_browser_support'));
				}
			},

			accept: function (params) {
				if (!(jqcc.cometchat.membershipAccess('audiochat','plugins'))){
					return;
				}
				if (jqcc.cometchat.checkMobileDevice()){
					return;
				}
				if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
					alert(jqcc.ccaudiochat.getLanguage('popup_already_open'));
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
				var caller = '';
				if(typeof(params.caller) != "undefined"){
					caller = params.caller;
				}
				if(supported){
					baseUrl = $.cometchat.getBaseUrl();
					baseData = $.cometchat.getBaseData();

					var controlparameters = {"grp":params.grp};
					jqcc.ccaudiochat.delinkaudiochat(controlparameters);
					if(caller != "" && caller != "undefined") {
						var returnparameters = {"type":"plugins", "name":"ccaudiochat", "method":"delinkaudiochat", "params":{"grp":grp}};
						returnparameters = JSON.stringify(returnparameters);
						jqcc('#'+caller)[0].contentWindow.postMessage('CC^CONTROL_'+returnparameters,'*');
					}

					$.getJSON(baseUrl+'plugins/audiochat/index.php?action=accept&callback=?', {to: id, start_url:null, grp: grp, basedata: baseData, caller: caller});
					loadCCPopup(baseUrl+'plugins/audiochat/index.php?action=call&caller='+caller+'&grp='+grp+'&basedata='+baseData+'&to='+id, 'audiochat',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=<?php echo $camWidth;?>,height=<?php echo $camHeight;?>",<?php echo $camWidth;?>,<?php echo $camHeight;?>,jqcc.ccaudiochat.getLanguage('audio_chat'),0,1,allowresize,1,windowMode);
				} else {
					alert(jqcc.ccaudiochat.getLanguage('err_no_browser_support'));
				}
			},

			accept_fid: function (params) {
				if (!(jqcc.cometchat.membershipAccess('audiochat','plugins'))){
					return;
				}
				if (jqcc.cometchat.checkMobileDevice()){
					return;
				}
				if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
					alert(jqcc.ccaudiochat.getLanguage('popup_already_open'));
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
				var caller = '';
				if(typeof(params.caller) != "undefined"){
					caller = params.caller;
				}
				if(mobileDevice){
					windowMode = 1;
				}
				var controlparameters = {"grp":params.grp};
				jqcc.ccaudiochat.delinkaudiochat(controlparameters);
				if(caller != "" && caller != "undefined") {
					var returnparameters = {"type":"plugins", "name":"ccaudiochat", "method":"delinkaudiochat", "params":{"grp":grp}};
					returnparameters = JSON.stringify(returnparameters);
					jqcc('#'+caller)[0].contentWindow.postMessage('CC^CONTROL_'+returnparameters,'*');
				}

				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();
				loadCCPopup(baseUrl+'plugins/audiochat/index.php?action=call&caller='+caller+'&grp='+grp+'&basedata='+baseData+'&to='+id+'&initiator=1', 'audiochat',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=<?php echo $camWidth;?>,height=<?php echo $camHeight;?>",<?php echo $camWidth;?>,<?php echo $camHeight;?>,jqcc.ccaudiochat.getLanguage('audio_chat'),0,1,allowresize,1,windowMode);
			},

			ignore_call : function(id,grp){
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();
				$.ajax({
					url : baseUrl+'plugins/audiochat/index.php?action=noanswer',
					type : 'GET',
					data : {to: id,grp: grp,basedata:baseData},
					dataType : 'jsonp',
					success : function(data) {},
					error : function(data) {}
				});
			},

			cancel_call : function(id,grp){
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();
				$.ajax({
					url : baseUrl+'plugins/audiochat/index.php?action=canceloutgoingcall',
					type : 'GET',
					data : {to: id,grp: grp,basedata:baseData},
					dataType : 'jsonp',
					success : function(data) {},
					error : function(data) {}
				});
			},

			reject_call : function(id,grp){
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();

				var controlparameters = {"grp":grp};
				jqcc.ccaudiochat.delinkaudiochat(controlparameters);

				$.ajax({
					url : baseUrl+'plugins/audiochat/index.php?action=rejectcall',
					type : 'GET',
					data : {to: id,grp: grp,basedata:baseData},
					dataType : 'jsonp',
					success : function(data) {},
					error : function(data) {}
				});
			},

			end_call : function(params){
				id = params.to;
				grp = params.grp;
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();
				var popoutopencalled = jqcc.cometchat.getInternalVariable('audiochatpopoutcalled');
				var endcallrecieved = jqcc.cometchat.getInternalVariable('endcallrecievedfrom_'+grp);
				if(popoutopencalled !== '1'){
					if(endcallrecieved !== '1') {
						$.ajax({
							url : baseUrl+'plugins/audiochat/index.php?action=endcall',
							type : 'GET',
							data : {to: id, basedata: baseData , grp: grp},
							dataType : 'jsonp',
							success : function(data) {},
							error : function(data) {}
						});
					}
				}
				jqcc.cometchat.setInternalVariable('endcallrecievedfrom_'+grp,'0');
				jqcc.cometchat.setInternalVariable('audiochatpopoutcalled','0');
			},

			join: function (id) {
				if (!(jqcc.cometchat.membershipAccess('audiochat','plugins'))){
					return;
				}
				if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
					alert(jqcc.ccaudiochat.getLanguage('popup_already_open'));
					return;
				}
				baseUrl = $.cometchat.getBaseUrl();
				basedata = $.cometchat.getBaseData();
				windowMode = 0;
				if(location.protocol === 'http:') {
					windowMode = 1;
				}
				if(mobileDevice){
					windowMode = 1;
				}
				if(mobileDevice == null) {
					var controlparameters = {"type":"plugins", "name":"core", "method":"loadCCPopup", "params":{"url": baseUrl+'plugins/audiochat/index.php?action=call&chatroommode=1&type=0&join=1&grp='+id+'&basedata='+basedata, "name":"audiochat", "properties":"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=<?php echo $width;?>,height=<?php echo $height;?>", "width":"<?php echo $width;?>", "height":"<?php echo $height;?>", "title":jqcc.ccaudiochat.getLanguage('audio_chat'), "force":"0", "allowmaximize":"1", "allowresize":"1", "allowpopout":"1", "windowMode":windowMode}};
				} else {
					$[$.cometchat.getChatroomVars('calleeAPI')].loadCCPopup(baseUrl+'plugins/audiochat/index.php?action=call&chatroommode=1&type=0&join=1&grp='+id+'&basedata='+basedata, 'audiochat',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=<?php echo $camWidth;?>,height=<?php echo $camHeight;?>",<?php echo $camWidth;?>,<?php echo $camHeight;?>,jqcc.ccaudiochat.getLanguage('audio_chat'),1,1,allowresize,1,windowMode);
				}
	            controlparameters = JSON.stringify(controlparameters);
	            parent.postMessage('CC^CONTROL_'+controlparameters,'*');
			},

			getLanguage: function(id) {
				audiochat_language =  <?php echo json_encode($audiochat_language); ?>;
				if(typeof id==undefined){
					return audiochat_language;
				}else{
					return audiochat_language[id];
				}
			},

			delinkaudiochat: function(params){
				var grp = params.grp;
				$('a.audiochat_link_'+grp).each(function(){
					$(this).attr('onclick','').unbind('click');
					$(this).removeClass('acceptAudioChat accept_fid');
					this.style.setProperty( 'color', '#95a5a6', 'important' );
					$(this).css('text-decoration','none');
					$(this).css('cursor','text');
				});
			},

			processControlMessage : function(controlparameters) {
				var audiochat_language = jqcc.ccaudiochat.getLanguage();
				var processedmessage = null;
				jqcc.ccaudiochat.delinkaudiochat(controlparameters.params);
				switch(controlparameters.method){
					case 'endcall':
						jqcc.cometchat.setInternalVariable('endcallrecievedfrom_'+controlparameters.params.grp,'1');
						processedmessage = jqcc.ccaudiochat.getLanguage('call_ended_1');
						break;
					case 'rejectcall':
						processedmessage = jqcc.ccaudiochat.getLanguage('user_busy');
						break;
					case 'noanswer':
						processedmessage = jqcc.ccaudiochat.getLanguage('user_not_answering');
						break;
					case 'busycall':
						processedmessage = jqcc.ccaudiochat.getLanguage('user_busy');
						break;
					case 'cancelcall':
						processedmessage = jqcc.ccaudiochat.getLanguage('call_cancelled');
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
	jqcc('.acceptAudioChat').live('click',function(){
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		var caller = jqcc(this).attr('caller');
		if((typeof(parent) != 'undefined' && parent != null && parent != self) || window.top != window.self){
			var controlparameters = {"type":"plugins", "name":"ccaudiochat", "method":"accept", "params":{"to":to, "grp":grp, "caller":caller}};
			controlparameters = JSON.stringify(controlparameters);
			parent.postMessage('CC^CONTROL_'+controlparameters,'*');
		} else {
			var controlparameters = {"to":to, "grp":grp};
            jqcc.ccaudiochat.accept(controlparameters);
		}
	});

	jqcc('.accept_fid').live('click',function(){
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		var caller = jqcc(this).attr('caller');
		if((typeof(parent) != 'undefined' && parent != null && parent != self) || window.top != window.self){
			var controlparameters = {"type":"plugins", "name":"ccaudiochat", "method":"accept_fid", "params":{"to":to, "grp":grp, "caller":caller}};
			controlparameters = JSON.stringify(controlparameters);
			parent.postMessage('CC^CONTROL_'+controlparameters,'*');
		} else {
			var controlparameters = {"to":to, "grp":grp};
            jqcc.ccaudiochat.accept_fid(controlparameters);
		}
	});
});
