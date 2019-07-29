<?php

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$addonfolder = str_replace(DIRECTORY_SEPARATOR.'lang.php','', __FILE__);
$addonarray = explode(DIRECTORY_SEPARATOR, $addonfolder);
$addonname = end($addonarray);
$addontype = rtrim(prev($addonarray),'s');

/* LANGUAGE */

${$addonname.'_language'}['title'] = setLanguageValue('title','Start an audio/video broadcast',$lang,$addontype,$addonname);
${$addonname.'_language'}['wait_message'] = setLanguageValue('wait_message','Please wait atleast 10 seconds before trying to broadcast again.',$lang,$addontype,$addonname);
${$addonname.'_language'}['av_broadcast_request'] = setLanguageValue('av_broadcast_request','has sent you an audio/video broadcast request.',$lang,$addontype,$addonname);
${$addonname.'_language'}['accept_request'] = setLanguageValue('accept_request','Click here to accept it',$lang,$addontype,$addonname);
${$addonname.'_language'}['ignore_request'] = setLanguageValue('ignore_request','or simply ignore this message.',$lang,$addontype,$addonname);
${$addonname.'_language'}['request_success'] = setLanguageValue('request_success','has successfully sent an audio/video broadcast request.',$lang,$addontype,$addonname);
${$addonname.'_language'}['request_accepted'] = setLanguageValue('request_accepted','has accepted your audio/video broadcast request.',$lang,$addontype,$addonname);
${$addonname.'_language'}['launch_window'] = setLanguageValue('launch_window','Click here to launch the broadcasting window',$lang,$addontype,$addonname);
${$addonname.'_language'}['av_broadcast'] = setLanguageValue('av_broadcast','Audio/Video Broadcast',$lang,$addontype,$addonname);
${$addonname.'_language'}['broadcast_started'] = setLanguageValue('broadcast_started','has started broadcasting.',$lang,$addontype,$addonname);
${$addonname.'_language'}['join_broadcast'] = setLanguageValue('join_broadcast','Click here to join the broadcast.',$lang,$addontype,$addonname);
${$addonname.'_language'}['select_users'] = setLanguageValue('select_users','Please select users',$lang,$addontype,$addonname);
${$addonname.'_language'}['invite_users'] = setLanguageValue('invite_users','Invite Users',$lang,$addontype,$addonname);
${$addonname.'_language'}['invite_success_close_win'] = setLanguageValue('invite_success_close_win','Users have been successfully invited. You can safely close this window.',$lang,$addontype,$addonname);
${$addonname.'_language'}['invite_success'] = setLanguageValue('invite_success','has invited you to join the broadcast.',$lang,$addontype,$addonname);
${$addonname.'_language'}['click_to_join'] = setLanguageValue('click_to_join','Click here to join',$lang,$addontype,$addonname);
${$addonname.'_language'}['view_broadcast'] = setLanguageValue('view_broadcast','Click here to view the broadcast.',$lang,$addontype,$addonname);
${$addonname.'_language'}['started_vid_convo'] = setLanguageValue('started_vid_convo','has started a video broadcast.',$lang,$addontype,$addonname);
${$addonname.'_language'}['no_users_available'] = setLanguageValue('no_users_available','Sorry, there are no users available at the moment to invite.',$lang,$addontype,$addonname);
${$addonname.'_language'}['end_call'] = setLanguageValue('end_call','End Call',$lang,$addontype,$addonname);
${$addonname.'_language'}['turn_on_video'] = setLanguageValue('turn_on_video','Turn On Video',$lang,$addontype,$addonname);
${$addonname.'_language'}['turn_off_video'] = setLanguageValue('turn_off_video','Turn Off Video',$lang,$addontype,$addonname);
${$addonname.'_language'}['turn_on_mic'] = setLanguageValue('turn_on_mic','Turn On Mic',$lang,$addontype,$addonname);
${$addonname.'_language'}['turn_off_mic'] = setLanguageValue('turn_off_mic','Turn Off Mic',$lang,$addontype,$addonname);
${$addonname.'_language'}['broadcast_ended'] = setLanguageValue('broadcast_ended','This broadcast has ended',$lang,$addontype,$addonname);
${$addonname.'_language'}['err_no_browser_support'] = setLanguageValue('err_no_browser_support','Sorry, your browser does not support this feature. Please upgrade your browser to the latest version or try a different browser.',$lang,$addontype,$addonname);
${$addonname.'_language'}['popup_already_open'] = setLanguageValue('popup_already_open','Multimedia session is already open. Please close the existing popup and try again.',$lang,$addontype,$addonname);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

${$addonname.'_key_mapping'} = array(
	'0'		=>	'title',
	'1'		=>	'wait_message',
	'2'		=>	'av_broadcast_request',
	'3'		=>	'accept_request',
	'4'		=>	'ignore_request',
	'5'		=>	'request_success',
	'6'		=>	'request_accepted',
	'7'		=>	'launch_window',
	'8'		=>	'av_broadcast',
	'9'		=>	'broadcast_started',
	'10'	=>	'join_broadcast',
	'11'	=>	'select_users',
	'12'	=>	'invite_users',
	'13'	=>	'invite_success_close_win',
	'14'	=>	'invite_success',
	'15'	=>	'click_to_join',
	'16'	=>	'view_broadcast',
	'17'	=>	'started_vid_convo',
	'18'	=>	'no_users_available',
	'19'	=>	'end_call',
	'20'	=>	'turn_on_video',
	'21'	=>	'turn_off_video',
	'22'	=>	'turn_on_mic',
	'23'	=>	'turn_off_mic',
	'24'	=>	'broadcast_ended',
	'25'	=>	'err_no_browser_support'
	/**
	 * Please do not add indices here.
	 * Use the keys directly in the code.
	*/
);

${$addonname.'_language'} = mapLanguageKeys(${$addonname.'_language'},${$addonname.'_key_mapping'},$addontype,$addonname);
