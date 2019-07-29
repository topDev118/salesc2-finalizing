<?php

/*

CometChat
Copyright (c) 2016 Inscripts
License: https://www.cometchat.com/legal/license

*/

include_once(dirname(dirname(dirname(__FILE__))).DIRECTORY_SEPARATOR."plugins.php");
include_once(dirname(__FILE__).DIRECTORY_SEPARATOR."config.php");

if( checkplan('plugins','broadcast') == 0){ exit;}
if(!checkMembershipAccess('broadcast','plugins')){exit();}

if (file_exists(dirname(__FILE__).DIRECTORY_SEPARATOR."lang.php")) {
	include_once(dirname(__FILE__).DIRECTORY_SEPARATOR."lang.php");
}

if (!file_exists(dirname(__FILE__).DIRECTORY_SEPARATOR."layouts".DIRECTORY_SEPARATOR.$color.DIRECTORY_SEPARATOR."broadcast".$rtl.".css")) {
	$color = "color1";
}

$basedata = $to = $grp  = $action = $chatroommode = $embed = null;
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
}
if(!empty($_REQUEST['embed'])){
	$embed = sql_real_escape_string($_REQUEST['embed']);
}

$broadcast = 0;
if(!empty($_REQUEST['broadcast'])){
	$broadcast = 1;
}

$cbfn = '';
if(!empty($_REQUEST['callbackfn'])){
	$cbfn = $_REQUEST['callbackfn'];
	$_SESSION['noguestmode'] = '1';
}

$cc_layout = '';
if(!empty($_REQUEST['cc_layout'])){
	$cc_layout = $_REQUEST['cc_layout'];
}

$caller = '';
if(!empty($_REQUEST['caller'])){
	$caller = $_REQUEST['caller'];
}

if($action == 'endcall') {
	if (!empty($chatroommode)) {
		$controlparameters = array('type' => 'plugins', 'name' => 'broadcast', 'method' => 'endcall', 'params' => array('grp' => $grp, 'chatroommode' => 1));
		$controlparameters = json_encode($controlparameters);
		sendChatroomMessage($to, 'CC^CONTROL_'.$controlparameters,0);
	} else {
		$controlparameters = array('type' => 'plugins', 'name' => 'broadcast', 'method' => 'endcall', 'params' => array('grp' => $grp, 'chatroommode' => 0));
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
	exit;
}


if ($action == 'request') {
	$grp = $userid<$to? md5($userid).md5($to) : md5($to).md5($userid);
	$grp = md5($_SERVER['HTTP_HOST'].'broadcast'.$grp);
	if (!empty($_REQUEST['callback'])) {
		header('content-type: application/json; charset=utf-8');
		sendCCResponse($_REQUEST['callback'].'('.$grp.')');
	}
	if(empty($chatroommode)){
		$message = $broadcast_language[2]." <a href='javascript:void(0);' class='broadcastAccept' to='".$userid."' grp='".$grp."' mobileAction=\"javascript:jqcc.ccbroadcast.accept('".$userid."','".$grp."');\">".$broadcast_language[3]."</a> ".$broadcast_language[4];

		$response = sendMessage($to,$message,1);
		$processedMessage = $_SESSION['cometchat']['user']['n'].": ".$broadcast_language[2];
   		pushMobileNotification($to,$response['id'],$processedMessage);

		incrementCallback();
		sendMessage($to,$broadcast_language[5],2);
		decrementCallback();

	}
}


if (!empty($chatroommode)) {
	if (empty($_REQUEST['join'])) {
		if(!empty($_REQUEST['grp']) && empty($to) && !empty($_REQUEST['callbackfn']) && $_REQUEST['callbackfn']=='mobileapp'){
			$to = $_REQUEST['grp'];
		}
		$message = $broadcast_language[17]." <a href='javascript:void(0);' grp='".$grp."' class='join_Broadcast' mobileAction=\"javascript:jqcc.ccbroadcast.join('".$grp."');\">".$broadcast_language[16]."</a>";
		$res = sendChatroomMessage($to,$message,0);
	}
	if (!empty($_REQUEST['callbackfn']) && $_REQUEST['callbackfn']=='mobileapp') {
		header('content-type: application/json; charset=utf-8');
		echo $_REQUEST['callback'].'('.$grp.')';
		exit;
	}
}
if (!empty($_REQUEST['callbackfn']) && $_REQUEST['callbackfn']=='mobileapp') {
		header('content-type: application/json; charset=utf-8');
		exit;
}
$baseUrl = BASE_URL;
$embed = '';
$embedcss = '';
$resize = 'window.resizeTo(';
$invitefunction = 'window.open';

if (!empty($embed) && $embed == 'web') {
	$embed = 'web';
	$resize = "parent.resizeCCPopup('broadcast',";
	$embedcss = 'embed';
	$invitefunction = 'parent.loadCCPopup';
}

if (!empty($embed) && $embed == 'desktop') {
	$embed = 'desktop';
	$resize = "parentSandboxBridge.resizeCCPopupWindow('broadcast',";
	$embedcss = 'embed';
	$invitefunction = 'parentSandboxBridge.loadCCPopupWindow';
}


$onload = 'endCall(1)';
$cssurl = getAbsoluteURL(getDynamicScriptAndLinkTags(array('layout'=>$cc_layout,'urlonly'=>1, 'ext'=>'css')));
$endcall = '<a href="#" onclick="endCall(1)" id="endcall" class="cometchat_statusbutton" style="display: block;text-decoration: none;z-index: 10000;">'.$broadcast_language[19].'</a>';
if(!empty($chatroommode)||CROSS_DOMAIN == 1){
	if(empty($chatroommode)) {
		$chatroommode = 0;
	}
	$onload = 'closeWin('.$chatroommode.',1)';
	$endcall = '<a href="#" onclick="closeWin('.$chatroommode.',0)" id="endcall" class="cometchat_statusbutton" style="display: block;text-decoration: none;z-index: 10000;">'.$broadcast_language[19].'</a>';
}
$invitecall = '';
if(!$broadcast){
	$invitecall = '<a href="#" id="broadcastInvite" class="cometchat_statusbutton" caller="'.$caller.'" style="display: block;text-decoration: none;z-index: 10000;">'.$broadcast_language[12].'</a>';
}
$v1 = rawurlencode($broadcast_language[20]);
$v0 = rawurlencode($broadcast_language[21]);
$m1 = rawurlencode($broadcast_language[22]);
$m0 = rawurlencode($broadcast_language[23]);
$b1 = rawurlencode($broadcast_language[19]);
$b2 = rawurlencode($broadcast_language[12]);

if(empty($_REQUEST['join']) || !empty($chatroommode)) {
	$grp = md5($channelprefix.$grp);
}

$hostpath = getAbsoluteURL($baseUrl);

$basedata = encryptUserid($userid);
$jqueryjstag = getDynamicScriptAndLinkTags(array('type' => "core",'name' => 'jquery', 'ext' => 'js'));
$broadcastcsstag = getDynamicScriptAndLinkTags(array('type' => "plugin",'name' => 'broadcast','subtype' => 'webrtc','ext' => 'css'));
$layoutcsstag = getDynamicScriptAndLinkTags(array('layout' => $cc_layout,'ext' => 'css'));
$broadcastjstag = getDynamicScriptAndLinkTags(array('type' => "plugin",'name' => 'broadcast','subtype' => 'webrtc','ext' => 'js'));
echo <<<EOD
<!DOCTYPE html>
<html>
	<head>
		<title>{$broadcast_language[8]}</title>
		{$jqueryjstag}
		<script>$ = jQuery = jqcc;</script>
		{$layoutcsstag}
		{$broadcastcsstag}
		{$broadcastjstag}
		<script>
			var basedata = '{$basedata}';
			var sessionId = '{$grp}';
			var invitefunction = "{$invitefunction}";
			var baseUrl = '{$baseUrl}';
			var caller = '{$caller}';
			var isIE = /*@cc_on!@*/false || !!document.documentMode;
			jqcc(document).ready(function(){
				jqcc('#broadcastInvite').on('click',function(){
					var controlparameters = {"type":"plugins", "name":"ccbroadcast", "method":"inviteBroadcast", "params":{"id":sessionId, "caller":caller}};
					controlparameters = JSON.stringify(controlparameters);
					if(typeof(parent) != 'undefined' && parent != null && parent != self){
						parent.postMessage('CC^CONTROL_'+controlparameters,'*');
					} else {
						window.opener.postMessage('CC^CONTROL_'+controlparameters,'*');
					}
				});

				if(isIE) {
					jqcc('#ie_fix').show();
					jqcc("#webrtc").addClass("ie_iframefix");
					jqcc("#broadButtons").addClass("ie_buttonfix");
				}
			});

			if(window.top == window.self){
				var controlparameters = {"type":"plugins", "name":"cometchat", "method":"setInternalVariable", "params":{"type":"endcallOnce", "grp":"{$grp}", "value":"0"}};
				controlparameters = JSON.stringify(controlparameters);
				window.opener.postMessage('CC^CONTROL_'+controlparameters,'*');

				var controlparameters = {"type":"plugins", "name":"cometchat", "method":"setInternalVariable", "params":{"type":"endcallOnceWindow", "grp":"{$grp}", "value":"0"}};
				controlparameters = JSON.stringify(controlparameters);
				window.opener.postMessage('CC^CONTROL_'+controlparameters,'*');
			}else{
				var controlparameters = {"type":"plugins", "name":"cometchat", "method":"setInternalVariable", "params":{"type":"endcallOnce", "grp":"{$grp}", "value":"0"}};
				controlparameters = JSON.stringify(controlparameters);
				parent.postMessage('CC^CONTROL_'+controlparameters,'*');

				var controlparameters = {"type":"plugins", "name":"cometchat", "method":"setInternalVariable", "params":{"type":"endcallOnceWindow", "grp":"{$grp}", "value":"0"}};
				controlparameters = JSON.stringify(controlparameters);
				parent.postMessage('CC^CONTROL_'+controlparameters,'*');
			}
			function endCall(caller){
				if(window.top == window.self){
					var controlparameters = {"type":"plugins", "name":"ccbroadcast", "method":"end_call", "params":{"to":"{$to}", "grp":"{$grp}","chatroommode":"0"}};
					controlparameters = JSON.stringify(controlparameters);
					window.opener.postMessage('CC^CONTROL_'+controlparameters,'*');

					var controlparameters = {"type":"plugins", "name":"cometchat", "method":"setInternalVariable", "params":{"type":"endcallOnceWindow", "grp":"{$grp}", "value":"1"}};
					controlparameters = JSON.stringify(controlparameters);
					window.opener.postMessage('CC^CONTROL_'+controlparameters,'*');

					window.close();
				} else {
					var controlparameters = {"type":"plugins", "name":"ccbroadcast", "method":"end_call", "params":{"to":"{$to}", "grp":"{$grp}","chatroommode":"0"}};
					controlparameters = JSON.stringify(controlparameters);
					parent.postMessage('CC^CONTROL_'+controlparameters,'*');

					var controlparameters = {"type":"plugins", "name":"cometchat", "method":"setInternalVariable", "params":{"type":"endcallOnce", "grp":"{$grp}", "value":"1"}};
					controlparameters = JSON.stringify(controlparameters);
					parent.postMessage('CC^CONTROL_'+controlparameters,'*');
					if(caller)
					var controlparameters = {'type':'plugins', 'name':'broadcast', 'method':'closeCCPopup', 'params':{'name':'broadcast'}};
					controlparameters = JSON.stringify(controlparameters);
					parent.postMessage('CC^CONTROL_'+controlparameters,'*');
				}
			}
			function closeWin(chatroommode,Endcall){
				if(window.top == window.self){
					if({$broadcast} == 0 && Endcall == 1){
						var controlparameters = {"type":"plugins", "name":"ccbroadcast", "method":"end_call", "params":{"to":"{$to}", "grp":"{$grp}","chatroommode":chatroommode}};
						controlparameters = JSON.stringify(controlparameters);
						window.opener.postMessage('CC^CONTROL_'+controlparameters,'*');
					}
					window.close();
				} else {
					if({$broadcast} == 0 && Endcall == 1){
						var controlparameters = {"type":"plugins", "name":"ccbroadcast", "method":"end_call", "params":{"to":"{$to}", "grp":"{$grp}","chatroommode":chatroommode}};
						controlparameters = JSON.stringify(controlparameters);
						parent.postMessage('CC^CONTROL_'+controlparameters,'*');
					}
					var controlparameters = {'type':'plugins', 'name':'broadcast', 'method':'closeCCPopup', 'params':{'name':'broadcast'}};
					controlparameters = JSON.stringify(controlparameters);
					parent.postMessage('CC^CONTROL_'+controlparameters,'*');
				}
			}
			if (location.protocol === 'http:') {
				window.location = "https://{$webRTCPHPServer}/index.php?v1={$v1}&v0={$v0}&m1={$m1}&m0={$m0}&b1={$b1}&b2={$b2}&broadcast={$broadcast}&room={$grp}&hostpath={$hostpath}&basedata={$basedata}&to={$to}&crmode={$chatroommode}&pluginname=broadcast&caller={$caller}&cssurl={$cssurl}";
			}
		</script>
	</head>
	<body onunload="{$onload}">
		<iframe id ="webrtc" allow="geolocation; microphone; camera; midi; encrypted-media;" src="//{$webRTCPHPServer}/index.php?v1={$v1}&v0={$v0}&m1={$m1}&m0={$m0}&broadcast={$broadcast}&room={$grp}&cssurl={$cssurl}" width=100% height=100% seamless allowfullscreen></iframe>
		<div id="broadButtons">
			{$endcall}
			{$invitecall}
			<iframe id="ie_fix" src="about:blank"></iframe>
		</div>
	</div>
	</body>
</html>
EOD;
