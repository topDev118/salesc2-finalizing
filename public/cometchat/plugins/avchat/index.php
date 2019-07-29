<?php
/*

CometChat
Copyright (c) 2016 Inscripts
License: https://www.cometchat.com/legal/license

*/

include_once(dirname(dirname(dirname(__FILE__))).DIRECTORY_SEPARATOR."plugins.php");
include_once(dirname(__FILE__).DIRECTORY_SEPARATOR."config.php");

if( checkplan('plugins','avchat') == 0){ exit;}
if(!checkMembershipAccess('avchat','plugins')){	exit(); }

if (file_exists(dirname(__FILE__).DIRECTORY_SEPARATOR."lang.php")) {
	include_once(dirname(__FILE__).DIRECTORY_SEPARATOR."lang.php");
}

$webrtcTheme = $layout;
if (!file_exists(dirname(__FILE__).DIRECTORY_SEPARATOR."layouts".DIRECTORY_SEPARATOR.$layout.DIRECTORY_SEPARATOR."avchat".$rtl.".css")) {
	$layout = "docked";
}

$basedata = $to = $grp  = $action = $chatroommode = $embed = $id = $isGroup = null;

if(!empty($_REQUEST['basedata'])) {
    $basedata = sql_real_escape_string($_REQUEST['basedata']);
}

if(!empty($_REQUEST['to'])){
	$to = sql_real_escape_string($_REQUEST['to']);
}

if(!empty($_REQUEST['grp'])){
	$grp = sql_real_escape_string($_REQUEST['grp']);
}

if(!empty($_REQUEST['action'])){
	$action = sql_real_escape_string($_REQUEST['action']);
}

if(!empty($_REQUEST['id'])) {
    $id = $_REQUEST['id'];
}

if(!empty($_REQUEST['chatroommode'])){
	$chatroommode = sql_real_escape_string($_REQUEST['chatroommode']);
	$isGroup = true;
}

if(!empty($_REQUEST['isGroup'])){
	$isGroup = true;
}

if(!empty($_REQUEST['embed'])){
	$embed = sql_real_escape_string($_REQUEST['embed']);
}

$cbfn = '';
if(!empty($_REQUEST['callbackfn'])){
	$cbfn = sql_real_escape_string($_REQUEST['callbackfn']);
	$_SESSION['noguestmode'] = '1';
}

$cc_layout = '';
if(!empty($_REQUEST['cc_layout'])){
	$cc_layout = sql_real_escape_string($_REQUEST['cc_layout']);
}

if($action == 'endcall') {
	if (!empty($chatroommode)) {
		$controlparameters = array('type' => 'plugins', 'name' => 'avchat', 'method' => 'endcall', 'params' => array('grp' => $grp, 'chatroommode' => 1));
		$controlparameters = json_encode($controlparameters);
		sendChatroomMessage($to, 'CC^CONTROL_'.$controlparameters,0);
	} else {
		$controlparameters = array('type' => 'plugins', 'name' => 'avchat', 'method' => 'endcall', 'params' => array('grp' => $grp, 'chatroommode' => 0));
		$controlparameters = json_encode($controlparameters);
		sendMessage($to,'CC^CONTROL_'.$controlparameters,2);
		incrementCallback();
		sendMessage($to, 'CC^CONTROL_'.$controlparameters,1);
		decrementCallback();
	}
	if (!empty($_GET['callback'])) {
		echo $_GET['callback'].'('.json_encode(1).')';
	} else {
		echo json_encode(1);
	}
}
if($action == 'rejectcall') {
	if (!empty($chatroommode)) {
		$controlparameters = array('type' => 'plugins', 'name' => 'avchat', 'method' => 'rejectcall', 'params' => array('grp' => $grp, 'chatroommode' => 1));
		$controlparameters = json_encode($controlparameters);
		sendChatroomMessage($to, 'CC^CONTROL_'.$controlparameters,0);
	} else {
		$controlparameters = array('type' => 'plugins', 'name' => 'avchat', 'method' => 'rejectcall', 'params' => array('grp' => $grp, 'chatroommode' => 0));
		$controlparameters = json_encode($controlparameters);
		sendMessage($to, 'CC^CONTROL_'.$controlparameters,1);
	}
	if (!empty($_GET['callback'])) {
		echo $_GET['callback'].'('.json_encode(1).')';
	} else {
		echo json_encode(1);
	}
}

if($action == 'noanswer') {
	if (!empty($chatroommode)) {
		$controlparameters = array('type' => 'plugins', 'name' => 'avchat', 'method' => 'noanswer', 'params' => array('grp' => $grp, 'chatroommode' => 1));
		$controlparameters = json_encode($controlparameters);
		sendChatroomMessage($to, 'CC^CONTROL_'.$controlparameters,0);
	} else {
		$controlparameters = array('type' => 'plugins', 'name' => 'avchat', 'method' => 'noanswer', 'params' => array('grp' => $grp, 'chatroommode' => 0));
		$controlparameters = json_encode($controlparameters);
		sendMessage($to, 'CC^CONTROL_'.$controlparameters,1);
	}
	if (!empty($_GET['callback'])) {
		echo $_GET['callback'].'('.json_encode(1).')';
	} else {
		echo json_encode(1);
	}
}

if($action == 'canceloutgoingcall') {
	if (!empty($chatroommode)) {
		$controlparameters = array('type' => 'plugins', 'name' => 'avchat', 'method' => 'canceloutgoingcall', 'params' => array('grp' => $grp, 'chatroommode' => 1));
		$controlparameters = json_encode($controlparameters);
		sendChatroomMessage($to, 'CC^CONTROL_'.$controlparameters,0);
	} else {
		$controlparameters = array('type' => 'plugins', 'name' => 'avchat', 'method' => 'canceloutgoingcall', 'params' => array('grp' => $grp, 'chatroommode' => 0));
		$controlparameters = json_encode($controlparameters);
		sendMessage($to, 'CC^CONTROL_'.$controlparameters,2);
		incrementCallback();
		sendMessage($to, 'CC^CONTROL_'.$controlparameters,1);
		decrementCallback();
	}
	if (!empty($_GET['callback'])) {
		echo $_GET['callback'].'('.json_encode(1).')';
	} else {
		echo json_encode(1);
	}
}

if($action == 'busycall') {
	if (!empty($chatroommode)) {
		$controlparameters = array('type' => 'plugins', 'name' => 'avchat', 'method' => 'busycall', 'params' => array('grp' => $grp, 'chatroommode' => 1));
		$controlparameters = json_encode($controlparameters);
		sendChatroomMessage($to, 'CC^CONTROL_'.$controlparameters,0);
	} else {
		$controlparameters = array('type' => 'plugins', 'name' => 'avchat', 'method' => 'busycall', 'params' => array('grp' => $grp, 'chatroommode' => 0));
		$controlparameters = json_encode($controlparameters);
		sendMessage($to, 'CC^CONTROL_'.$controlparameters,1);
	}
	if (!empty($_GET['callback'])) {
		echo $_GET['callback'].'('.json_encode(1).')';
	} else {
		echo json_encode(1);
	}
}

if($action == 'openconnectionwindow') {
	$baseUrl = BASE_URL;
	$grp = $userid<$to? md5($userid).md5($to) : md5($to).md5($userid);
	$grp = md5('avchat'.$grp);
	$cancelcall = $avchat_language['cancel_call'];
	$ringing = $avchat_language['ringing'];
	$resize = 'window.resizeTo(';
	if (!empty($embed) && $embed == 'web') {
		$embed = 'web';
		$resize = "parent.resizeCCPopup('audiovideochat',";
		$embedcss = 'embed';
	}
	if (!empty($embed) && $embed == 'desktop') {
		$embed = 'desktop';
		$resize = "parentSandboxBridge.resizeCCPopupWindow('audiovideochat',";
		$embedcss = 'embed';
	}
	$buddyavatar = $buddyname = '';

	if(!empty($_REQUEST['buddyname'])){
		$buddyname = $_REQUEST['buddyname'];
	}

	if(!empty($_REQUEST['buddyavatar'])){
		$buddyavatar = $_REQUEST['buddyavatar'];
	}
	$CClayoutcsstag = getDynamicScriptAndLinkTags(array('layout' => $cc_layout, 'ext' => 'css'));
	$jqueryjstag = getDynamicScriptAndLinkTags(array('type' => "core",'name' => 'jquery', 'ext' => 'js'));
	$avchatcsstag = getDynamicScriptAndLinkTags(array('type' => "plugin",'name' => 'avchat', 'ext' => 'css'));
	$staticCDNUrl = STATIC_CDN_URL;
	echo <<<EOD
<!DOCTYPE html>
<html>
	<head>
		<title>{$avchat_language[8]}</title>
		{$CClayoutcsstag}
		{$jqueryjstag}
		{$avchatcsstag}
		<script type="text/javascript">
			var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
			var eventer = window[eventMethod];
			var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
			eventer(messageEvent,function(e) {
				if(typeof(e.data) != 'undefined' && typeof(e.data) == 'string') {
					if(e.data.indexOf('CC^CONTROL_')!== -1){
						var controlparameters = e.data.slice(11);
						controlparameters = JSON.parse(controlparameters);
						if(controlparameters.type == 'plugin' && controlparameters.name == 'audiovideochat'){
							window[controlparameters.method](controlparameters.params)
						}
					}
				}
			},false);

			function startavchat(params){
				if(params.hasOwnProperty('avchaturl')){
					window.location.href=params.avchaturl;
				}
			}

			jqcc(function(){
	    		jqcc('.cometchat_cancelcallbutton').click(function(){
	    			jqcc.ajax({
						url : '{$baseUrl}plugins/avchat/index.php?action=canceloutgoingcall',
						type : 'GET',
						data : {to: {$to},grp: '{$grp}',basedata:{$userid}},
						dataType : 'jsonp',
						success : function(data) {
							window.close();
						},
						error : function(data) {
							window.close();
						}
					});
	    		});

			});
		</script>
	</head>
	<body>
		<div class="cometchat_avchatcontent">
			<div class="cometchat_buddyavatar"><img src="{$buddyavatar}" /></div>
			<div class="cometchat_buddyname">{$buddyname}</div>
			<div class="cometchat_avcallstatus">{$ringing}</div>
		</div>
		<div class="cometchat_cancelcallbutton" title="{$cancelcall}"><img src="{$staticCDNUrl}images/call.svg"></div>
	</body>
</html>
EOD;
}

if ($action == 'request') {
	$caller = '';
	if(!empty($_REQUEST['caller'])){
		$caller = $_REQUEST['caller'];
	}
	$avchat_token = '';
	if(empty($grp)){
		$grp = $userid<$to? md5($userid).md5($to) : md5($to).md5($userid);
		$grp = md5('avchat'.$grp);
	}
	$response = $grp;
	$proceedwithrequest = true;
	if(method_exists($GLOBALS['integration'], 'deductCredits')){
		$params =  array();
		$params['type'] = 'plugin';
		$params['name'] = 'avchat';
		$params['to'] = $to;
		$params['userid'] = $userid;
		$params['isGroup'] = $isGroup;
		$params['checkonly'] = true;
		$creditdeductioninfo = $GLOBALS['integration']->deductCredits($params);
		if(!empty($creditdeductioninfo['errorcode']) && $creditdeductioninfo['errorcode'] == 3){
			$response = $creditdeductioninfo;
			$proceedwithrequest = false;
		}
	}
	if($proceedwithrequest){
		if(!empty($chatroommode)){
			$message = $avchat_language[19]." <a token ='".$avchat_token."' href='javascript:void(0);' class='join_Avchat' to='".$to."' grp='".$grp."' caller='".$caller."' mobileAction=\"javascript:jqcc.ccavchat.join('".$grp."');\" >".$avchat_language[20]."</a> ";
			sendChatroomMessage($to,$message,0);
		}else{
			$optionalmessage = 0;
			if(function_exists('hooks_sendOptionalMessage')) {
				$optionalmessage = hooks_sendOptionalMessage(array('to' => $to, 'plugin' => 'audio/video chat'));
			}
			if($optionalmessage == 0){
				$message = "CC^CONTROL_mobileAction=\"javascript:jqcc.ccavchat.accept('".$userid."','".$grp."');\"|avchat_webaction=initiate|".$grp."|".$caller;
				$sentresponse = sendMessage($to,$message,1);
				pushMobileNotification($to,$sentresponse['id'],$grp."_#wrtcgrp_".$_SESSION['cometchat']['user']['n'].": ".$avchat_language[2],'0','AVC',getTimeStamp());
				incrementCallback();
				$controlparameters = json_encode(array('type' => 'plugins', 'name' => 'avchat', 'method' => 'initiatecall', 'params' => array('grp' => $grp, 'chatroommode' => 0, 'caller' => $caller, 'direction' => 2)));
				sendMessage($to, 'CC^CONTROL_'.$controlparameters,2);
				decrementCallback();
			}
		}
	}

	if (!empty($_REQUEST['callback'])) {
		header('content-type: application/json; charset=utf-8');
		echo $_REQUEST['callback'].'('.json_encode($response).')';
	} else {
		echo json_encode($response);
	}
	exit;
}
if ($action == 'accept') {
	$avchat_token = '';
	$caller = '';
	if(!empty($_REQUEST['caller'])){
		$caller = $_REQUEST['caller'];
	}
	$message = "CC^CONTROL_mobileAction=\"javascript:jqcc.ccavchat.accept_fid('".$userid."','".$grp."');\"|avchat_webaction=acceptcall|".$grp;
	sendMessage($to,$message,1);
	if (!empty($_REQUEST['callback'])) {
		header('content-type: application/json; charset=utf-8');
		echo $_REQUEST['callback'].'()';
	}
	exit;
}
if ($action == 'call') {
	$baseUrl = BASE_URL;
	$embed = '';
	$embedcss = '';
	$resize = 'window.resizeTo(';
	$invitefunction = 'window.open';
	if (!empty($embed) && $embed == 'web') {
		$embed = 'web';
		$resize = "parent.resizeCCPopup('audiovideochat',";
		$embedcss = 'embed';
		$invitefunction = 'parent.loadCCPopup';
	}
	if (!empty($embed) && $embed == 'desktop') {
		$embed = 'desktop';
		$resize = "parentSandboxBridge.resizeCCPopupWindow('audiovideochat',";
		$embedcss = 'embed';
		$invitefunction = 'parentSandboxBridge.loadCCPopupWindow';
	}
	$server_name = '';
	$onunload = 'endCall(1)';
	$cssurl = getAbsoluteURL(getDynamicScriptAndLinkTags(array('layout'=>$cc_layout,'urlonly'=>1, 'ext'=>'css')));
	$v1 = rawurlencode($avchat_language[50]);
	$v0 = rawurlencode($avchat_language[51]);
	$m1 = rawurlencode($avchat_language[52]);
	$m0 = rawurlencode($avchat_language[53]);
	$b1 = rawurlencode($avchat_language[49]);
	$bd = encryptUserid($userid);
	$grp = md5($channelprefix.$grp);
	$hostpath = getAbsoluteURL($baseUrl);


	$CClayoutcsstag = getDynamicScriptAndLinkTags(array('layout' => $cc_layout, 'ext' => 'css'));
	$jqueryjstag = getDynamicScriptAndLinkTags(array('type' => "core",'name' => 'jquery', 'ext' => 'js'));
	$avchatcsstag = getDynamicScriptAndLinkTags(array('type' => "plugin",'name' => 'avchat', 'ext' => 'css'));
	$avchatjstag = getDynamicScriptAndLinkTags(array('type' => "plugin",'name' => 'avchat', 'ext' => 'js'));

	if(!empty($_REQUEST['initiator']) && method_exists($GLOBALS['integration'], 'deductCredits')){
		$params =  array();
		$params['type'] = 'plugin';
		$params['name'] = 'avchat';
		$params['to'] = $to;
		$params['userid'] = $userid;
		$params['isGroup'] = $isGroup;
		$creditdeductioninfo = $GLOBALS['integration']->deductCredits($params);
		if(!empty($creditdeductioninfo['errorcode']) && $creditdeductioninfo['errorcode'] == 3){
			$message = $creditdeductioninfo['message'];
			echo $message; exit;
		}else{
			$creditsdeductionjstag = getDynamicScriptAndLinkTags(array('type' => "core",'name' => 'creditsdeduction', 'ext' => 'js'));
			$creditsdeductionjstag .= "<script type='text/javascript'>
				window.onload=function(){
					var creditparams = ".json_encode($params).";
					creditparams.stopCallback = function(){".$onunload.";};
					CCCREDITS.init(creditparams);
				}
			</script>";
		}
	}
	echo <<<EOD
<!DOCTYPE html>
<html>
	<head>
		<title>{$avchat_language[8]}</title>
		<script type="text/javascript">
			var grp = "{$grp}",
				to = "{$to}",
				chatroommode = "{$chatroommode}";

			if (location.protocol === 'http:') {
				window.location = "https://{$webRTCPHPServer}/?v1={$v1}&v0={$v0}&m1={$m1}&m0={$m0}&b1={$b1}&room={$grp}&to={$to}&basedata={$bd}&pluginname=avchat&hostpath={$hostpath}&cssurl={$cssurl}";
			}
		</script>
		{$CClayoutcsstag}
		{$avchatcsstag}
		{$jqueryjstag}
		{$avchatjstag}
		{$creditsdeductionjstag}
	</head>
	<body onunload="{$onunload}">
		<iframe id ="webrtc" allow="geolocation; microphone; camera; midi; encrypted-media;" src="//{$webRTCPHPServer}/?v1={$v1}&v0={$v0}&m1={$m1}&m0={$m0}&room={$grp}&cssurl={$cssurl}" width=100% height=100% seamless allowfullscreen></iframe>
		<div id="avchatButtons">
		<iframe id="ie_fix" src="about:blank"></iframe>
		</div>
	</body>
</html>
EOD;
}
