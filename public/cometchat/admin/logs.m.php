<?php

/*
CometChat
Copyright (c) 2016 Inscripts
License: https://www.cometchat.com/legal/license
*/
if (!defined('CCADMIN')) { echo "NO DICE"; exit; }
if(!empty($guestnamePrefix)){ $guestnamePrefix .= '-'; }
function index() {
	global $body, $ts;
$chatroomLog = chatroomLog();
$body .= <<<EOD
  	<div class="row">
	  	<div class="col-sm-6 col-lg-6">
		    <div class="card">
		      	<div class="card-header">
		        	One on one chat
		        	<h4><small>You can search by username or user ID. Please fill in atleast one field below.</small></h4>
		      	</div>
		      	<div class="card-block">
		      	<form action="?module=logs&action=searchlogs&ts={$ts}" onsubmit="return loadLogs();" method="post" enctype="multipart/form-data">

				<div class="form-group row">
					<div class="col-md-12">
					<label class="form-control-label">User ID:</label>
					<input class="form-control" name="userid" id="userid" placeholder="Enter the User ID" autocomplete="off" type="text">
					</div>
				</div>

				<div class="form-group row">
					<div class="col-md-12">
					<label class="form-control-label">Username:</label>
					<input class="form-control" name="susername" id="susername" placeholder="Enter the Username"" autocomplete="off" type="text">
					</div>
				</div>

				<div class="row col-md-12" style="padding-bottom:5px;"><br>
			      <input type="submit" value="Search"  class="btn btn-primary">
			    </div>

			   </form>
	            </div>
	    	</div>
	  	</div>
		$chatroomLog
	</div>
<script type="text/javascript">
function loadLogs() {
	$("#adminModellink").trigger('click');
	$("#admin-modal-title").text('Search Results');
	$("#admin-modal-body").css('height','550px');
	$("#admin-modal-body").html("<center><img src='images/simpleloading.gif'></center>");
	var userid = $("#userid").val();
	var name = $("#susername").val();
	var link = '?module=logs&action=searchlogs&userid='+userid+'&susername='+name+'&ts={$ts}';
	$("#admin-modal-body").html("<iframe frameborder='0' height='510px' width='100%' src='"+link+"'></iframe>");
	$("#susername").val('');
	$("#userid").val('');
	return false;
}

</script>
EOD;
	template();

}

function searchlogs() {
    global $ts, $usertable_userid, $usertable_username, $usertable, $navigation, $body, $guestsMode, $guestnamePrefix;
	$userid   = $_REQUEST['userid'];
	$username = $_REQUEST['susername'];
	if (empty($username)) {
		$username = 'Q293YXJkaWNlIGFza3MgdGhlIHF1ZXN0aW9uIC0gaXMgaXQgc2FmZT8NCkV4cGVkaWVuY3kgYXNrcyB0aGUgcXVlc3Rpb24gLSBpcyBpdCBwb2xpdGljPw0KVmFuaXR5IGFza3MgdGhlIHF1ZXN0aW9uIC0gaXMgaXQgcG9wdWxhcj8NCkJ1dCBjb25zY2llbmNlIGFza3MgdGhlIHF1ZXN0aW9uIC0gaXMgaXQgcmlnaHQ/DQpBbmQgdGhlcmUgY29tZXMgYSB0aW1lIHdoZW4gb25';
	}
	$guestpart = "";
	if($guestsMode) {
		$guestpart = sql_getQuery('admin_searchlogs_guestpart',array('guestnamePrefix'=>$guestnamePrefix, 'username'=>sanitize_core($username), 'userid'=>sanitize_core($userid)));
	}

	$query = sql_query('admin_searchlogs',array('usertable_userid'=>$usertable_userid, 'usertable_username'=>$usertable_username, 'usertable'=>$usertable, 'username'=>sanitize_core($username), 'userid'=>sanitize_core($userid), 'guestpart'=>$guestpart));
	$userslist = '';
	while ($user = sql_fetch_assoc($query)) {
		if (function_exists('processName')) {
			$user['username'] = processName($user['username']);
		}
		$userslist .= '<tr style="cursor:pointer;" onclick="javascript:logs_gotouser(\''.$user['id'].'\',\''.$user['username'].'\');"><td>'.$user['username'].'</td><td>'.$user['id'].'</td></tr>';
	}

	if(!$userslist){
		$userslist .= '<tr><td colspan="2">No results found</td></tr>';
	}
$base_url = BASE_URL;
echo <<<EOD
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="shortcut icon" href="images/favicon.ico">
  <title>Setting</title>
	{$GLOBALS['adminjstag']}
	{$GLOBALS['admincsstag']}
</head>
 <body class="navbar-fixed sidebar-nav fixed-nav" style="background-color: white;overflow-y:hidden;">
 <div class="col-sm-12 col-lg-12">
    <div class="card">
    <div class="card-block">
	    <table class="table">
	      <thead>
	        <tr>
	          <th>Name</th>
	          <th width="20%">ID</th>
	        </tr>
	      </thead>
	      <tbody>
	      {$userslist}
	      </tbody>
	    </table>
    </div>
    </div>
  </div>
EOD;
}

function viewuser() {
	global $ts, $body, $usertable_userid, $usertable_username, $usertable, $guestsMode, $guestnamePrefix, $firstguestID;
	$userid = sql_real_escape_string($_GET['data']);
	$guestpart = "";
	if($userid < $firstguestID) {
		$query = sql_query('admin_viewuser',array('usertable_username'=>$usertable_username, 'usertable'=>$usertable, 'usertable_userid'=>$usertable_userid, 'userid'=>$userid, 'guestpart'=>$guestpart));
	} else {
		$query = sql_query('admin_viewguestuser',array('guestnamePrefix'=>$guestnamePrefix, 'userid'=>$userid));
	}
	$usern = sql_fetch_assoc($query);

	if($guestsMode) {
		$guestpart = sql_getQuery('admin_viewuser_guestpart',array('userid'=>$userid, 'guestnamePrefix'=>$guestnamePrefix));
	}

	$query = sql_query('admin_viewuser',array('usertable_userid'=>$usertable_userid, 'usertable_username'=>$usertable_username, 'usertable'=>$usertable, 'userid'=>$userid, 'guestpart'=>$guestpart));
	$userslist = '';
	$no_users = '';

	if (function_exists('processName')) {
		$usern['username'] = processName($usern['username']);
	}
	while ($user = sql_fetch_assoc($query)) {
		if (function_exists('processName')) {
			$user['username'] = processName($user['username']);
		}
			$userslist .= '<tr style="cursor:pointer;" onclick="javascript:logs_gotouserb(\''.$userid.'\',\''.$user['id'].'\',\''.$user['username'].'\');"><td>'.$user['username'].'</td><td>'.$user['id'].'</td></tr>';
	}

	if(!$userslist){
		$userslist .= '<tr><td colspan="2">No results found</td></tr>';
	}

$base_url = BASE_URL;
echo <<<EOD
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="shortcut icon" href="images/favicon.ico">
  <title>Setting</title>
 {$GLOBALS['adminjstag']}
 {$GLOBALS['admincsstag']}
</head>
 <body class="navbar-fixed sidebar-nav fixed-nav" style="background-color: white;overflow-y:hidden;">
 <div class="col-sm-12 col-lg-12">
    <div class="card">
    <div class="card-block">
    <h4><small>Select a user between whom you want to view the conversation.</small></h4>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th width="20%">ID</th>
        </tr>
      </thead>
      <tbody>
      {$userslist}
      </tbody>
    </table>
    </div>
    </div>
  </div>
EOD;
}

function viewuserconversation() {
	global $ts, $body, $navigation, $usertable_userid, $usertable_username, $usertable, $guestnamePrefix, $firstguestID;

	$userid = sql_real_escape_string($_GET['data']);
	$userid2 = sql_real_escape_string($_GET['data2']);

	if($userid < $firstguestID) {
		$query = sql_query('admin_viewuserconversation',array('usertable_username'=>$usertable_username, 'usertable'=>$usertable, 'usertable_userid'=>$usertable_userid, 'userid'=>$userid));
	} else {
		$query = sql_query('admin_viewguestconversation',array('guestnamePrefix'=>$guestnamePrefix, 'userid'=>$userid));
	}
	$usern = sql_fetch_assoc($query);

	if($userid2 < $firstguestID) {
		$query = sql_query('admin_viewuserconversation',array('usertable_username'=>$usertable_username, 'usertable'=>$usertable, 'usertable_userid'=>$usertable_userid, 'userid'=>$userid2));
	} else {
		$query = sql_query('admin_viewguestconversation',array('guestnamePrefix'=>$guestnamePrefix, 'userid'=>$userid2));
	}
	$usern2 = sql_fetch_assoc($query);

	$query = sql_query('admin_viewconversation',array('userid'=>$userid, 'userid2'=>$userid2));

	if (function_exists('processName')) {
			$usern['username'] = processName($usern['username']);
			$usern2['username'] = processName($usern2['username']);
	}

	$userslist = '';

	while ($chat = sql_fetch_assoc($query)) {
		$time = $chat['sent'];

		if ($userid == $chat['from']) {
			$uname = $usern['username'];
		} else {
			$uname = $usern2['username'];
		}

		if(strpos($chat['message'], 'CC^CONTROL_') === false)
		$userslist .= '<tr><td width="20%">'.$uname.'</td><td>'.$chat['message'].'</td><td><span class="chat_time" timestamp="'.$time.'"></span></td></tr>';
	}


$base_url = BASE_URL;
echo <<<EOD
	<!DOCTYPE html>
	<html lang="en">
	<head>
	  <meta charset="utf-8">
	  <meta http-equiv="X-UA-Compatible" content="IE=edge">
	  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	  <link rel="shortcut icon" href="images/favicon.ico">
	  <title>Setting</title>
		{$GLOBALS['adminjstag']}
		{$GLOBALS['admincsstag']}
	</head>
	 <body class="navbar-fixed sidebar-nav fixed-nav" style="background-color: white;overflow-y:hidden;">
	 <div class="col-sm-12 col-lg-12">
	    <div class="card">
	    <div class="card-block">
	    <table class="table">
	      <thead>
	        <tr>
	          <th width="30%">User</th>
	          <th width="50%">Message</th>
	          <th width="10%">Time</th>
	        </tr>
	      </thead>
	      <tbody>
	      {$userslist}
	      </tbody>
	    </table>
	    </div>
	    </div>
	  </div>
<script>
	\$(function() {
		\$('.chat_time').each(function(key,value){
			var ts = new Date(\$(this).attr('timestamp') * 1000);
			var timest = getTimeDisplay(ts);
			\$(this).html(timest);
		});
		$("#admin-modal-title").text('Log between {$usern['username']} and {$usern2['username']}');
		$('#admin-modal-title', window.parent.document).text('Log between {$usern['username']} and {$usern2['username']}');
	});
</script>
EOD;
}

function chatroomLog() {
	global $grouplogs,$ts;

	$query = sql_query('admin_groupLog');
	$chatroomlog = '';

	while ($chatroom = sql_fetch_assoc($query)) {
		$chatroomlog .= '<tr style="cursor:pointer;" onclick="javascript:logs_gotochatroom(\''.$chatroom['id'].'\');"><td>'.$chatroom['name'].'</td><td>'.$chatroom['id'].'</td></tr>';
	}

    if(empty($chatroomlog)){
        $chatroomlog = '<tr id="no_module"><td>No Groups available.</td></tr>';
    }

$grouplogs = <<<EOD
<div class="col-sm-6 col-lg-6">
	<div class="card">
	  	<div class="card-header">
	    	Groups<h4><small>Select a group to view the logs</small></h4>
	  	</div>
	  	<div class="card-block">
		    <table class="table">
		      <thead>
		        <tr>
		          <th>Name</th>
		          <th width="20%">ID</th>
		        </tr>
		      </thead>
		      <tbody>
		      {$chatroomlog}
		      </tbody>
		    </table>
	    </div>
	</div>
</div>
<script>
	function logs_gotochatroom(id) {
		var link = '?module=logs&action=viewuserchatroomconversation&data='+id+'&ts='+ts;
		$("#adminModellink").trigger('click');
		$("#admin-modal-body").css('height','550px');
		$("#admin-modal-title").text('Group log');
		$('.tooltip').remove();
		$("#admin-modal-body").html("<center><img src='images/simpleloading.gif'></center>");
		$.post(link, function(data) {
				$("#admin-modal-body").html(data);
		});
	}
</script>
EOD;
return $grouplogs;
}


function viewuserchatroomconversation() {
	global $ts, $body, $navigation, $usertable_userid, $usertable_username, $usertable, $guestsMode, $guestnamePrefix;

	if(!empty($guestnamePrefix)){ $guestnamePrefix .= '-'; }

	if($guestsMode) {
		$usertable = sql_getQuery('admin_viewchatroomconversation_usertable',array('usertable_userid'=>$usertable_userid, 'usertable_username'=>$usertable_username, 'usertable'=>$usertable, 'guestnamePrefix'=>$guestnamePrefix));
	}
	$chatroomid = sql_real_escape_string($_GET['data']);

	$query = sql_query('admin_groupName',array('id'=>$chatroomid));
	$chatroomn = sql_fetch_assoc($query);

	$query = sql_query('admin_viewuserchatroomconversation',array('usertable_username'=>$usertable_username, 'usertable'=>$usertable, 'usertable_userid'=>$usertable_userid, 'chatroomid'=>$chatroomid));
	$chatroomlog = '';

	while ($chat = sql_fetch_assoc($query)) {
		if (function_exists('processName')) {
			$chatroomn['chatroomname'] = processName($chatroomn['chatroomname']);
		}
		$time = $chat['sent'];
		if(strpos($chat['message'], 'CC^CONTROL_') === false)
		$chatroomlog .= '<tr><td width="20%">'.$chat["username"].'</td><td>'.$chat['message'].'</td><td width="20%"><span class="chat_time" timestamp="'.$time.'"></span></td></tr>';
	}


echo <<<EOD
	<div style="height:500px;overflow:auto;overflow-x:hidden;">
    <table class="table">
      <thead>
        <tr>
          <th width="30%">User</th>
          <th width="50%">Message</th>
          <th width="10%">Time</th>
        </tr>
      </thead>
      <tbody>
      {$chatroomlog}
      </tbody>
    </table>
  	</div>
<script>
	\$(function() {
		\$('.chat_time').each(function(key,value){
			var ts = new Date(\$(this).attr('timestamp') * 1000);
			var timest = getTimeDisplay(ts);
			\$(this).html(timest);
		});
	});
</script>
EOD;

}
