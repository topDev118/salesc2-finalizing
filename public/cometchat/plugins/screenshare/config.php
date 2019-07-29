<?php

include_once(dirname(dirname(dirname(__FILE__))).DIRECTORY_SEPARATOR.'config.php');

$scrWidth = '640';
$scrHeight = '480';

$webRTCServer =  setConfigValue('webRTCServer','r.chatforyoursite.com');
$webRTCPHPServer = setConfigValue('webRTCPHPServer','s.chatforyoursite.com');

if(CS_TEXTCHAT_SERVER!=''&& TRANSPORT == 'cometserviceselfhosted' && USE_COMET == '1'){
	$webRTCServer = parse_url(CS_TEXTCHAT_SERVER, PHP_URL_HOST);
	$webRTCPHPServer = $_SERVER['HTTP_HOST'].BASE_URL."transports/cometserviceselfhosted";
}
