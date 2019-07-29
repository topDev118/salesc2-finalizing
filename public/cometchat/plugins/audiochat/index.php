<?php

/*

CometChat
Copyright (c) 2016 Inscripts
License: https://www.cometchat.com/legal/license

*/

include_once(dirname(dirname(dirname(__FILE__))).DIRECTORY_SEPARATOR."plugins.php");
include_once(dirname(__FILE__).DIRECTORY_SEPARATOR."config.php");

if( checkplan('plugins','audiochat') == 0){ exit;}
if(!checkMembershipAccess('audiochat','plugins')){exit();}

if (file_exists(dirname(__FILE__).DIRECTORY_SEPARATOR."lang.php")) {
	include_once(dirname(__FILE__).DIRECTORY_SEPARATOR."lang.php");
}

$webrtcTheme = $layout;
if (!file_exists(dirname(__FILE__).DIRECTORY_SEPARATOR."layouts".DIRECTORY_SEPARATOR.$layout.DIRECTORY_SEPARATOR."audiochat".$rtl.".css")) {
	$layout = "docked";
}

$basedata = $to = $grp  = $action = $chatroommode = $embed = $isGroup = null;

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
		$controlparameters = array('type' => 'plugins', 'name' => 'audiochat', 'method' => 'endcall', 'params' => array('grp' => $grp, 'chatroommode' => 1));
		$controlparameters = json_encode($controlparameters);
		sendChatroomMessage($to, 'CC^CONTROL_'.$controlparameters,0);
	} else {
		$controlparameters = array('type' => 'plugins', 'name' => 'audiochat', 'method' => 'endcall', 'params' => array('grp' => $grp, 'chatroommode' => 0));
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
		$controlparameters = array('type' => 'plugins', 'name' => 'audiochat', 'method' => 'rejectcall', 'params' => array('grp' => $grp, 'chatroommode' => 1));
		$controlparameters = json_encode($controlparameters);
		sendChatroomMessage($to, 'CC^CONTROL_'.$controlparameters,0);
	} else {
		$controlparameters = array('type' => 'plugins', 'name' => 'audiochat', 'method' => 'rejectcall', 'params' => array('grp' => $grp, 'chatroommode' => 0));
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
		$controlparameters = array('type' => 'plugins', 'name' => 'audiochat', 'method' => 'noanswer', 'params' => array('grp' => $grp, 'chatroommode' => 1));
		$controlparameters = json_encode($controlparameters);
		sendChatroomMessage($to, 'CC^CONTROL_'.$controlparameters,0);
	} else {
		$controlparameters = array('type' => 'plugins', 'name' => 'audiochat', 'method' => 'noanswer', 'params' => array('grp' => $grp, 'chatroommode' => 0));
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
		$controlparameters = array('type' => 'plugins', 'name' => 'audiochat', 'method' => 'canceloutgoingcall', 'params' => array('grp' => $grp, 'chatroommode' => 1));
		$controlparameters = json_encode($controlparameters);
		sendChatroomMessage($to, 'CC^CONTROL_'.$controlparameters,0);
	} else {
		$controlparameters = array('type' => 'plugins', 'name' => 'audiochat', 'method' => 'canceloutgoingcall', 'params' => array('grp' => $grp, 'chatroommode' => 0));
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
		$controlparameters = array('type' => 'plugins', 'name' => 'audiochat', 'method' => 'busycall', 'params' => array('grp' => $grp, 'chatroommode' => 1));
		$controlparameters = json_encode($controlparameters);
		sendChatroomMessage($to, 'CC^CONTROL_'.$controlparameters,0);
	} else {
		$controlparameters = array('type' => 'plugins', 'name' => 'audiochat', 'method' => 'busycall', 'params' => array('grp' => $grp, 'chatroommode' => 0));
		$controlparameters = json_encode($controlparameters);
		sendMessage($to, 'CC^CONTROL_'.$controlparameters,1);
	}
	if (!empty($_GET['callback'])) {
		echo $_GET['callback'].'('.json_encode(1).')';
	} else {
		echo json_encode(1);
	}
}

if ($action == 'request') {
	$audiochat_token = '';
	$caller = '';
	if(!empty($_REQUEST['caller'])){
		$caller = $_REQUEST['caller'];
	}
	if(empty($grp)){
		$grp = $userid<$to? md5($userid).md5($to) : md5($to).md5($userid);
		$grp = md5($_SERVER['HTTP_HOST'].'audiochat'.$grp);
	}
	$response = $grp;

	$proceedwithrequest = true;
	if(method_exists($GLOBALS['integration'], 'deductCredits')){
		$params =  array();
		$params['type'] = 'plugin';
		$params['name'] = 'audiochat';
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
		if(isset($chatroommode)){
			$message = $audiochat_language[19]." <a token ='".$audiochat_token."' href='javascript:void(0);' onclick=\"javascript:jqcc.ccaudiochat.join('".$grp."');\">".$audiochat_language[20]."</a> ";
			sendChatroomMessage($to, $message,0);
		}else{
			$optionalmessage = 0;

			if(function_exists('hooks_sendOptionalMessage')){
				$optionalmessage = hooks_sendOptionalMessage(array('to' => $to, 'plugin' => 'audio chat'));
			}

			if($optionalmessage == 0){
				$message = $audiochat_language[2]." <a class='audiochat_link_".$grp." acceptAudioChat' token ='".$audiochat_token."' mobileAction=\"javascript:jqcc.ccaudiochat.accept('".$userid."','".$grp."');\" href='javascript:void(0);' to='".$userid."' caller='".$caller."' grp='".$grp."' >".$audiochat_language[3]."</a> ".$audiochat_language[45]."<a href='javascript:void(0);' class='audiochat_link_".$grp."' onclick=\"javascript:jqcc.ccaudiochat.reject_call('".$userid."','".$grp."');\">".$audiochat_language[43].".</a>".$audiochat_language[46];

				$response = sendMessage($to,$message,1);
				pushMobileNotification($to,$response['id'],$grp."_#wrtcgrp_".$_SESSION['cometchat']['user']['n'].": ".$audiochat_language[2],'0','AC',getTimeStamp());
				incrementCallback();
				$message = $audiochat_language[5]." ".$audiochat_language[44]."<a href='javascript:void(0);' class='audiochat_link_".$grp."' onclick=\"javascript:jqcc.ccaudiochat.cancel_call('".$to."','".$grp."');\">".$audiochat_language[43].".</a>";
				sendMessage($to,$message,2);
				decrementCallback();
				$response = 1;
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
	incrementCallback();
	$caller = '';
	if(!empty($_REQUEST['caller'])){
		$caller = $_REQUEST['caller'];
	}
	$message = $audiochat_language[6]." <a href='javascript:void(0);' class='audiochat_link_".$grp." accept_fid' mobileAction=\"javascript:jqcc.ccaudiochat.accept_fid('".$userid."','".$grp."');\" to='".$userid."' caller='".$caller."' grp='".$grp."' >".$audiochat_language[7]."</a>";
	sendMessage($to,$message,1);
	decrementCallback();
	exit;
}
if ($action == 'call') {
	$baseUrl = BASE_URL;
	$embed = '';
	$embedcss = '';
	$onunload = 'endCall(1)';
	$resize = 'window.resizeTo(';
	$invitefunction = 'window.open';
	if (!empty($embed) && $embed == 'web') {
		$embed = 'web';
		$resize = "parent.resizeCCPopup('audiochat',";
		$embedcss = 'embed';
		$invitefunction = 'parent.loadCCPopup';
	}
	if (!empty($embed) && $embed == 'desktop') {
		$embed = 'desktop';
		$resize = "parentSandboxBridge.resizeCCPopupWindow('audiochat',";
		$embedcss = 'embed';
		$invitefunction = 'parentSandboxBridge.loadCCPopupWindow';
	}

	$cssurl= getAbsoluteURL(getDynamicScriptAndLinkTags(array('layout'=>$cc_layout,'urlonly'=>1, 'ext'=>'css')));

	$endcall = '<a href="#" onclick="endCall(1)" id="endcall" class="cometchat_statusbutton" style="display: block;text-decoration: none;z-index: 10000;">'.$audiochat_language[49].'</a>';
	if(!empty($chatroommode) || CROSS_DOMAIN == 1){
      	$onunload = 'closeWin()';
		$endcall = '<a href="#" onclick="closeWin()" id="endcall" class="cometchat_statusbutton" style="display: block;text-decoration: none;z-index: 10000;">'.$audiochat_language[49].'</a>';
	}
	$m1=rawurlencode($audiochat_language[50]);
	$m0=rawurlencode($audiochat_language[51]);
	$b1=rawurlencode($audiochat_language[49]);
	$bd = encryptUserid($userid);

	$hostpath = getAbsoluteURL($baseUrl);

	if(!isset($chatroommode)){
		$grp = md5($channelprefix.$grp);
	}
	$creditsdeductionjstag = '';
	$CClayoutcsstag = getDynamicScriptAndLinkTags(array('layout' => $cc_layout, 'ext' => 'css'));
	$webRTCcsstag = getDynamicScriptAndLinkTags(array('type' => "plugin",'name' => 'audiochat', 'subtype' => 'webrtc', 'ext' => 'css'));

	if(!empty($_REQUEST['initiator']) && method_exists($GLOBALS['integration'], 'deductCredits')){
		$params =  array();
		$params['type'] = 'plugin';
		$params['name'] = 'audiochat';
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
			<title>{$audiochat_language[8]}</title>

			{$CClayoutcsstag}
			{$webRTCcsstag}
			{$creditsdeductionjstag}
			<script type="text/javascript">
				var isIE = /*@cc_on!@*/false || !!document.documentMode;
				/*jqcc(document).ready(function(){
					if(isIE) {
						jqcc('#ie_fix').show();
						jqcc("#webrtc").addClass("ie_iframefix");
						jqcc("#audiochatButtons").addClass("ie_buttonfix");
					}
				});*/
				var controlparameters = {"type":"plugins", "name":"cometchat", "method":"setInternalVariable", "params":{"type":"endcallOnce", "grp":"{$grp}", "value":"0"}};
				controlparameters = JSON.stringify(controlparameters);
				parent.postMessage('CC^CONTROL_'+controlparameters,'*');

				var controlparameters = {"type":"plugins", "name":"cometchat", "method":"setInternalVariable", "params":{"type":"endcallOnceWindow", "grp":"{$grp}", "value":"0"}};
				controlparameters = JSON.stringify(controlparameters);
				parent.postMessage('CC^CONTROL_'+controlparameters,'*');
				var endcallflag = 0;

				function endCall(caller){
					if(endcallflag == 0 && (typeof(parent) === 'undefined' || parent == self)){
						var controlparameters = {"type":"plugins", "name":"cometchat", "method":"setInternalVariable", "params":{"type":"endcallOnceWindow", "grp":"{$grp}", "value":"1"}};
						controlparameters = JSON.stringify(controlparameters);
						window.opener.postMessage('CC^CONTROL_'+controlparameters,'*');

						var controlparameters = {"type":"plugins", "name":"ccaudiochat", "method":"end_call", "params":{"to":"{$to}", "grp":"{$grp}", "chatroommode":"0"}};
						controlparameters = JSON.stringify(controlparameters);
						window.opener.postMessage('CC^CONTROL_'+controlparameters,'*');
						endcallflag = 1;
						window.close();
					} else if(endcallflag == 0) {
						var controlparameters = {"type":"plugins", "name":"ccaudiochat", "method":"end_call", "params":{"to":"{$to}", "grp":"{$grp}","chatroommode":"0"}};
						controlparameters = JSON.stringify(controlparameters);
						parent.postMessage('CC^CONTROL_'+controlparameters,'*');

						var controlparameters = {"type":"plugins", "name":"cometchat", "method":"setInternalVariable", "params":{"type":"endcallOnce", "grp":"{$grp}", "value":"1"}};
							controlparameters = JSON.stringify(controlparameters);
							parent.postMessage('CC^CONTROL_'+controlparameters,'*');
						if(caller){
							var controlparameters = {'type':'plugins', 'name':'audiochat', 'method':'closeCCPopup', 'params':{'name':'audiochat'}};
							controlparameters = JSON.stringify(controlparameters);
							parent.postMessage('CC^CONTROL_'+controlparameters,'*');
						}
						endcallflag = 1;
					}
				}
				function closeWin(){
					if(typeof(parent) === 'undefined' || parent == self){
						window.close();
					} else {
						var controlparameters = {'type':'plugins', 'name':'audiochat', 'method':'closeCCPopup', 'params':{'name':'audiochat'}};
						controlparameters = JSON.stringify(controlparameters);
						parent.postMessage('CC^CONTROL_'+controlparameters,'*');
					}
				}
				if (location.protocol === 'http:') {
					window.location = "https://{$webRTCPHPServer}/index.php?audioOnly=1&m1={$m1}&m0={$m0}&b1={$b1}&room={$grp}&hostpath={$hostpath}&basedata={$bd}&to={$to}&pluginname=audiochat&cssurl={$cssurl}";
				}
			</script>
		</head>
		<body>
			<iframe id ="webrtc"  allow="geolocation; microphone; camera; midi; encrypted-media;" src="//{$webRTCPHPServer}/?audioOnly=1&m1={$m1}&m0={$m0}&room={$grp}&cssurl={$cssurl}" width=100% height=100% seamless allowfullscreen></iframe>
			<div id="audiochatButtons">
				{$endcall}
				<iframe id="ie_fix" src="about:blank"></iframe>
			</div>
		</div>
		</body>
	</html>
EOD;
}
