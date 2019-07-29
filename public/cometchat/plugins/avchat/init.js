
<?php
	include_once(dirname(__FILE__).DIRECTORY_SEPARATOR."config.php");

	if (file_exists(dirname(__FILE__).DIRECTORY_SEPARATOR."lang.php")) {
		include_once(dirname(__FILE__).DIRECTORY_SEPARATOR."lang.php");
	}

	$width = 434;
	$height = 356;

?>

String.prototype.replaceAll=function(s1, s2) {return this.split(s1).join(s2)};
(function($){

		$.ccavchat = (function () {
		var theme = '<?php echo $layout;?>';
		var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|IEMobile|blackberry|palm|symbian/i);
		var supported = true;

		var Browser = (function(){
			var ua= navigator.userAgent, tem,
			M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
			if(/trident/i.test(M[1])){
				tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
				return 'IE '+(tem[1] || '');
			}
			if(M[1]=== 'Chrome'){
				tem= ua.match(/\bOPR\/(\d+)/)
				if(tem!= null) return 'Opera '+tem[1];
			}
			M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
			if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
			return M;
		})();
		if(Browser[0]=='MSIE' && parseInt(Browser[1]) < 11 ){
			supported = false;
		}
		var lastcall = 0,
			allowresize = 1;

		return {

			getTitle: function() {
				return jqcc.ccavchat.getLanguage('title');
			},
			init: function (params) {
				if (!(jqcc.cometchat.membershipAccess('avchat','plugins'))){
					return;
				}
				if (jqcc.cometchat.checkMobileDevice()){
					return;
				}
				if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
					alert(jqcc.ccavchat.getLanguage('popup_already_open'));
					return;
				}
				var id = params.to;
				var chatroommode = params.chatroommode;
				var caller = '';
				if(typeof(caller) != "undefined"){
					caller = params.caller;
				}
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
					var currenttime = new Date();
					currenttime = parseInt(currenttime.getTime()/1000);
					if (currenttime-lastcall > 10) {
						baseUrl = $.cometchat.getBaseUrl();
						baseData = $.cometchat.getBaseData();
						if(chatroommode == 1){
							jqcc.ajax({
								url : baseUrl+'plugins/avchat/index.php?chatroommode=1&action=request',
								type : 'GET',
								data : {to: id, basedata: baseData, caller: caller},
								dataType : 'jsonp',
								success : function(data) {
									if(data.hasOwnProperty('errorcode')&&data['errorcode']==3){
										alert(data['message']);
										return;
									}
									if(typeof(data) != "undefined" && data != null && data != ''){
										id = data;
									}
									loadCCPopup(baseUrl+'plugins/avchat/index.php?action=call&caller='+caller+'&chatroommode=1&grp='+id+'&basedata='+baseData, 'audiovideochat',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=<?php echo $width;?>,height=<?php echo $height;?>",<?php echo $width;?>,<?php echo $height;?>,jqcc.ccavchat.getLanguage('av_chat'),1,1,allowresize,1,windowMode);
								},
								error : function(data) {
								}
							});
						}else{
							if(windowMode == 1){
								var buddyavatar = jqcc.cometchat.getThemeArray('buddylistAvatar', params.to);
								var buddyname = jqcc.cometchat.getThemeArray('buddylistName', params.to);
								loadCCPopup(baseUrl+'plugins/avchat/index.php?action=openconnectionwindow&caller='+caller+'&chatroommode=0&to='+params.to+'&basedata='+baseData+'&buddyavatar='+buddyavatar+'&buddyname='+buddyname, 'audiovideochat',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=<?php echo $width;?>,height=<?php echo $height;?>",<?php echo $width;?>,<?php echo $height;?>,jqcc.ccavchat.getLanguage('av_chat'),1,1,allowresize,1,windowMode);
							}

							jqcc.ajax({
								url : baseUrl+'plugins/avchat/index.php?action=request',
								type : 'GET',
								data : {to: id, basedata: baseData, caller: caller},
								dataType : 'jsonp',
								success : function(data) {
									if(data.hasOwnProperty('errorcode')&&data['errorcode']==3){
										alert(data['message']);
										return;
									}
									if(windowMode == 0){
										jqcc[theme].generateOutgoingAvchatData(id,data);
									}
								},
								error : function(data) {
								}
							});
						}
						lastcall = currenttime;
					} else {
						alert(jqcc.ccavchat.getLanguage('wait_message'));
					}
				} else {
					alert(jqcc.ccavchat.getLanguage('err_no_browser_support'));
				}
			},

			accept: function (params) {
				if (!(jqcc.cometchat.membershipAccess('avchat','plugins'))){
					return;
				}
				if (jqcc.cometchat.checkMobileDevice()){
					return;
				}
				if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
					alert(jqcc.ccavchat.getLanguage('popup_already_open'));
					return;
				}
				id = params.to;
				grp = params.grp;
				join_url = params.join_url;
				start_url = params.start_url;
				chatroommode = params.chatroommode;
				windowMode = 0;
				var caller = '';
				if(typeof(params.caller) != "undefined"){
					caller = params.caller;
				}
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
				if(supported){
					baseUrl = $.cometchat.getBaseUrl();
					baseData = $.cometchat.getBaseData();
					var controlparameters = {"grp":params.grp};
					if(chatroommode == 1){
						$.getJSON(baseUrl+'plugins/avchat/index.php?chatroommode=1&action=accept&callback=?', {to: id, start_url:start_url, grp: grp, basedata: baseData, caller: caller});
					} else {
						if($('#avchat_container_'+id).length){
							$('#avchat_container_'+id).remove();
						}
						$.getJSON(baseUrl+'plugins/avchat/index.php?action=accept&callback=?', {to: id, start_url:start_url, grp: grp, basedata: baseData, caller: caller});
					}

					if(jqcc.cometchat.getCcvariable().callbackfn=='desktop' || windowMode==0){
						loadCCPopup(baseUrl+'plugins/avchat/index.php?action=call&grp='+grp+'&basedata='+baseData+'&to='+id, 'audiovideochat',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=<?php echo $width;?>,height=<?php echo $height;?>",<?php echo $width;?>,<?php echo $height;?>,jqcc.ccavchat.getLanguage('av_chat'),0,1,allowresize,1,windowMode);
					}else{
						loadCCPopup(baseUrl+'plugins/avchat/index.php?action=call&caller='+caller+'&grp='+grp+'&basedata='+baseData+'&to='+id, 'audiovideochat',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=<?php echo $width;?>,height=<?php echo $height;?>",<?php echo $width;?>,<?php echo $height;?>,jqcc.ccavchat.getLanguage('av_chat'),0,1,allowresize,null,windowMode);
					}
				} else {
					alert(jqcc.ccavchat.getLanguage('err_no_browser_support'));
				}
			},
			accept_fid: function (params) {
				if (!(jqcc.cometchat.membershipAccess('avchat','plugins'))){
					return;
				}
				if (jqcc.cometchat.checkMobileDevice()){
					return;
				}
				if(jqcc('#cometchat_container_'+name).length > 0) {
					alert(jqcc.ccavchat.getLanguage('popup_already_open'));
					return;
				}
				id = params.to;
				grp = params.grp;
				start_url = params.start_url;
				windowMode = 0;
				var caller = '';
				if(typeof(params.caller) != "undefined"){
					caller = params.caller;
				}
				if(location.protocol === 'http:') {
					windowMode = 1;
				}
				if(mobileDevice){
					windowMode = 1;
				}
				jqcc.ccavchat.delinkAvchat({"grp":params.grp});
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();
				var avchaturl = baseUrl+'plugins/avchat/index.php?action=call&caller='+caller+'&grp='+grp+'&basedata='+baseData+'&to='+id+'&initiator=1';
				if(windowMode == 1){
					var windowkey = 'cc_audiovideochat';

					var paramstostartavchat = {
									type:"plugin",
									name:"audiovideochat",
									method: 'startavchat',
									params:{
										avchaturl:avchaturl
									}
								};
					cc_windownames[windowkey].postMessage('CC^CONTROL_'+JSON.stringify(paramstostartavchat),'*');
				} else {
					jqcc[theme].removeAVchatContainer(id);
					loadCCPopup(avchaturl, 'audiovideochat',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=<?php echo $width;?>,height=<?php echo $height;?>",<?php echo $width;?>,<?php echo $height;?>,jqcc.ccavchat.getLanguage('av_chat'),0,1,allowresize,1,windowMode);
				}
			},
			ignore_call : function(id,grp){
				basedata = $.cometchat.getBaseData();
				baseUrl = $.cometchat.getBaseUrl();
				$.ajax({
					url : baseUrl+'plugins/avchat/index.php?action=noanswer',
					type : 'GET',
					data : {to: id,grp: grp,basedata:basedata},
					dataType : 'jsonp',
					success : function(data) {
						jqcc[theme].removeAVchatContainer(id);
					},
					error : function(data) {
						console.log('Something went wrong');
					}
				});
			},
			cancel_call : function(id,grp){
				baseUrl = $.cometchat.getBaseUrl();
				basedata = $.cometchat.getBaseData();
				var controlparameters = {"grp":grp};
				$.ajax({
					url : baseUrl+'plugins/avchat/index.php?action=canceloutgoingcall',
					type : 'GET',
					data : {to: id,grp: grp,basedata:basedata},
					dataType : 'jsonp',
					success : function(data) {
						jqcc[theme].removeAVchatContainer(id);
					},
					error : function(data) {
						console.log('Something went wrong');
					}
				});
			},
			reject_call : function(id,grp){
				baseUrl = $.cometchat.getBaseUrl();
				basedata = $.cometchat.getBaseData();
				var controlparameters = {"grp":grp};
				jqcc.ccavchat.delinkAvchat(controlparameters);
				jqcc.ajax({
					url : baseUrl+'plugins/avchat/index.php?action=rejectcall',
					type : 'GET',
					data : {to: id,grp: grp,basedata:basedata},
					dataType : 'jsonp',
					success : function(data) {
						jqcc[theme].removeAVchatContainer(id);
					},
					error : function(data) {
						console.log('Something went wrong');
					}
				});
			},
			end_call : function(params){
				var id = params.to;
				var grp = params.grp;
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();
				var popoutopencalled = jqcc.cometchat.getInternalVariable('avchatpopoutcalled');
				var endcallrecieved = jqcc.cometchat.getInternalVariable('endcallrecievedfrom_'+grp);
				if(popoutopencalled !== '1'){
					if(endcallrecieved !== '1') {
						$.ajax({
							url : baseUrl+'plugins/avchat/index.php?action=endcall',
							type : 'GET',
							data : {to: id, basedata: baseData , grp: grp},
							dataType : 'jsonp',
							success : function(data) {

							},
							error : function(data) {
								console.log('Something went wrong');
							}
						});
					}
				}
				jqcc.cometchat.setInternalVariable('endcallrecievedfrom_'+grp,'0');
				jqcc.cometchat.setInternalVariable('avchatpopoutcalled','0');
			},

			join: function (params) {
				if (!(jqcc.cometchat.membershipAccess('avchat','plugins'))){
					return;
				}
				if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
					alert(jqcc.ccavchat.getLanguage('popup_already_open'));
					return;
				}
				var id = params.grp;
				windowMode = 0;
				var caller = '';
				if(typeof(params.caller) != "undefined"){
					caller = params.caller;
				}
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
				basedata = $.cometchat.getBaseData();
				loadCCPopup(baseUrl+'plugins/avchat/index.php?action=call&chatroommode=1&caller='+caller+'&type=0&join=1&grp='+id+'&basedata='+basedata, 'audiovideochat',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=<?php echo $width;?>,height=<?php echo $height;?>",<?php echo $width;?>,<?php echo $height;?>,jqcc.ccavchat.getLanguage('av_chat'),1,1,allowresize,1,windowMode);
			},

			getLanguage: function(id) {
				avchat_language =  <?php echo json_encode($avchat_language); ?>;
				if(typeof id==undefined){
					return avchat_language;
				}else{
					return avchat_language[id];
				}
			},

			delinkAvchat: function(params){
				var grp = params.grp;
				$('a.avchat_link_'+grp).each(function(){
					$(this).attr('onclick','').unbind('click');
					$(this).removeClass('acceptAVChat accept_AVfid');
					this.style.setProperty( 'text-decoration', 'line-through', 'important' );
					$(this).css('cursor','text');
				});
			},

			processControlMessage : function(controlparameters) {
				var processedmessage = null;

				switch(controlparameters.method){
					case 'endcall':
						jqcc.cometchat.setInternalVariable('endcallrecievedfrom_'+controlparameters.params.grp,'1');
						processedmessage = jqcc.ccavchat.getLanguage('call_ended_2');
						closeCCPopup('audiovideochat');
						break;
					case 'rejectcall':
						processedmessage = jqcc.ccavchat.getLanguage('user_busy_1');
						break;
					case 'noanswer':
						processedmessage = jqcc.ccavchat.getLanguage('user_not_answering');
						break;
					case 'busycall':
						processedmessage = jqcc.ccavchat.getLanguage('user_busy_1');
						break;
					case 'canceloutgoingcall':
						processedmessage = jqcc.ccavchat.getLanguage('call_cancelled');
						break;
					/*case 'initiatecall':
						if(controlparameters.params.direction == 1){
							processedmessage = 'cc^avchat_initiatecall_'+controlparameters.params.grp+'_'+controlparameters.params.chatroommode+'_'+controlparameters.params.caller;
						}
						break;*/
					default :
						processedmessage = null;
					break;
				}
				return processedmessage;
			}
		};
	})();
/* AV Chat DOM functions */
	jqcc('.join_Avchat').off("click").live('click',function(e){
		e.stopImmediatePropagation();
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		var caller = jqcc(this).attr('caller');
		var controlparameters = {"to":to, "grp":grp};
		jqcc.ccavchat.join(controlparameters);
	});

	jqcc('.acceptAVChat').off("click").live('click',function(e){
		e.stopImmediatePropagation();
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		var join_url = jqcc(this).attr('join_url');
		var start_url = jqcc(this).attr('start_url');
		var chatroommode = jqcc(this).attr('chatroommode');
		var caller = jqcc(this).attr('caller');
		var controlparameters = {"to":to, "grp":grp, "join_url":join_url, "start_url":start_url, "chatroommode":chatroommode};
		jqcc.ccavchat.accept(controlparameters);
	});

	jqcc('.accept_AVfid').off("click").live('click',function(e){
		e.stopImmediatePropagation();
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		var start_url = jqcc(this).attr('start_url');
		var caller = jqcc(this).attr('caller');
		var controlparameters = {"to":to, "grp":grp, "start_url":start_url};
		jqcc.ccavchat.accept_fid(controlparameters);
	});

	jqcc('.avchat_cancelcall').off("click").live('click',function(e){
		e.stopImmediatePropagation();
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		jqcc.ccavchat.cancel_call(to,grp);
	});

	jqcc('.avchat_rejectcall').off("click").live('click',function(e){
		e.stopImmediatePropagation();
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		jqcc.ccavchat.reject_call(to,grp);
	});
	/* AV Chat DOM functions */
})(jqcc);
