<?php

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$addonfolder = str_replace(DIRECTORY_SEPARATOR.'lang.php','', __FILE__);
$addonarray = explode(DIRECTORY_SEPARATOR, $addonfolder);
$addonname = end($addonarray);
$addontype = rtrim(prev($addonarray),'s');

/* LANGUAGE */

${$addonname.'_language'}['title'] 				= setLanguageValue('title','Share my screen',$lang,$addontype,$addonname);
${$addonname.'_language'}['wait_message'] 		= setLanguageValue('wait_message','Please wait atleast 10 seconds before trying to share again.',$lang,$addontype,$addonname);
${$addonname.'_language'}['sent_success_other'] = setLanguageValue('sent_success_other','has shared his/her screen with you.',$lang,$addontype,$addonname);
${$addonname.'_language'}['view_screen'] 		= setLanguageValue('view_screen','Click here to view his/her screen',$lang,$addontype,$addonname);
${$addonname.'_language'}['ignore_request'] 	= setLanguageValue('ignore_request','or simply ignore this message.',$lang,$addontype,$addonname);
${$addonname.'_language'}['sent_success_self']	= setLanguageValue('sent_success_self','has successfully shared his/her screen.',$lang,$addontype,$addonname);
${$addonname.'_language'}['started_viewing'] 	= setLanguageValue('started_viewing','is now viewing your screen.',$lang,$addontype,$addonname);
${$addonname.'_language'}['screen_sharing'] 	= setLanguageValue('screen_sharing','Screen sharing',$lang,$addontype,$addonname);
${$addonname.'_language'}['refresh_list'] 		= setLanguageValue('refresh_list','Refresh list',$lang,$addontype,$addonname);
${$addonname.'_language'}['select_window'] 		= setLanguageValue('select_window','Which window would you like to share?',$lang,$addontype,$addonname);
${$addonname.'_language'}['install_plugin'] 	= setLanguageValue('install_plugin','Install plug-in',$lang,$addontype,$addonname);
${$addonname.'_language'}['open_window'] 		= setLanguageValue('open_window','Click here to open window.',$lang,$addontype,$addonname);
${$addonname.'_language'}['check_email'] 		= setLanguageValue('check_email','Please check your email for verification zoom account at',$lang,$addontype,$addonname);
${$addonname.'_language'}['popup_already_open'] = setLanguageValue('popup_already_open','Multimedia session is already open. Please close the existing popup and try again.',$lang,$addontype,$addonname);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

${$addonname.'_key_mapping'} = array(
	'0'		=>	'title',
	'1'		=>	'wait_message',
	'2'		=>	'sent_success_other',
	'3'		=>	'view_screen',
	'4'		=>	'ignore_request',
	'5'		=>	'sent_success_self',
	'6'		=>	'started_viewing',
	'7'		=>	'screen_sharing',
	'8'		=>	'refresh_list',
	'9'		=>	'select_window',
	'10'	=>	'install_plugin',
	'11'	=>	'open_window',
	'12'	=>	'check_email'
	/**
	 * Please do not add indices here.
	 * Use the keys directly in the code.
	*/
);

${$addonname.'_language'} = mapLanguageKeys(${$addonname.'_language'},${$addonname.'_key_mapping'},$addontype,$addonname);
