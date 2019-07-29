<?php
//define('BASEPATH',true);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
session_start();

/* ADVANCED */
$cms = "ipb";
define('SET_SESSION_NAME',''); // Session name
define('SWITCH_ENABLED','1');
define('INCLUDE_JQUERY','1');
define('FORCE_MAGIC_QUOTES','0');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// DO NOT EDIT DATABASE VALUES BELOW
// DO NOT EDIT DATABASE VALUES BELOW
// DO NOT EDIT DATABASE VALUES BELOW
error_reporting(E_ALL);
ini_set('display_errors', 1);
define('DEV_MODE',1);


define('DB_SERVER', 'localhost');
define('DB_PORT', "3306");
define('DB_USERNAME', 'salesctw_robert');
define('DB_PASSWORD','robert@123!!!');
define('DB_NAME', 'salesctw_salesc2');
$table_prefix = ''; // Table prefix(if any)
$db_usertable = 'team_manager'; // Users or members information table name
$db_usertable_userid = 'id'; // UserID field in the users or members table
$db_usertable_name = 'name'; // Name containing field in the users or members table
$db_avatartable = ' ';//ignore
$db_avatarfield = 'id';//ignore
$db_linkfield = 'id';//ignore

/*COMETCHAT'S INTEGRATION CLASS USED FOR SITE AUTHENTICATION */

class Integration{

	function __construct(){
		if(!defined('TABLE_PREFIX')){
			$this->defineFromGlobal('table_prefix');
			$this->defineFromGlobal('db_usertable');
			$this->defineFromGlobal('db_usertable_userid');
			$this->defineFromGlobal('db_usertable_name');
			$this->defineFromGlobal('db_avatartable');
			$this->defineFromGlobal('db_avatarfield');
			$this->defineFromGlobal('db_linkfield');
		}
	}

	function defineFromGlobal($key){
		if(isset($GLOBALS[$key])){
			define(strtoupper($key), $GLOBALS[$key]);
			unset($GLOBALS[$key]);
		}
	}

	function getUserID() {
		$userid = 0;
		if (!empty($_SESSION['userinfo']) && $_SESSION['userinfo'] != 'null') {
			$_REQUEST['basedata'] = $_SESSION['userinfo'];
		}
		if (!empty($_REQUEST['basedata'])) {
			$userid=$_REQUEST['basedata']['id'];
		}	
		
		/*if(!empty($_SESSION['cometchat']['userid'])){
    		$userid = $_SESSION['cometchat']['userid'];
		}*/
		$userid = intval($userid);
		
		return $userid;
	}

	function chatLogin($userName,$userPass) {
		$userid = 0;
		global $guestsMode;

		if (filter_var($userName, FILTER_VALIDATE_EMAIL)) {
			$sql = ("SELECT * FROM ".TABLE_PREFIX.DB_USERTABLE." WHERE email = '".mysqli_real_escape_string($GLOBALS['dbh'],$userName)."'");
		} else {
			$sql = ("SELECT * FROM ".TABLE_PREFIX.DB_USERTABLE." WHERE name = '".mysqli_real_escape_string($GLOBALS['dbh'],$userName)."'");
		}
		
		$result = mysqli_query($GLOBALS['dbh'],$sql);
		$row = mysqli_fetch_assoc($result);
		if($row['members_pass_hash'] == crypt($userPass, $row['members_pass_hash'])){
			$userid = $row['member_id'];
		}
		if(!empty($userName) && !empty($_REQUEST['social_details'])) {
			$social_details = json_decode($_REQUEST['social_details']);
			$userid = socialLogin($social_details);
		}
		if(!empty($_REQUEST['guest_login']) && $userPass == "CC^CONTROL_GUEST" && $guestsMode == 1){
			$userid = getGuestID($userName);
		}
		if(!empty($userid) && isset($_REQUEST['callbackfn']) && $_REQUEST['callbackfn'] == 'mobileapp'){
			$sql = ("insert into cometchat_status (userid,isdevice) values ('".mysqli_real_escape_string($GLOBALS['dbh'],$userid)."','1') on duplicate key update isdevice = '1'");
			mysqli_query($GLOBALS['dbh'], $sql);
		}
		if($userid && function_exists('mcrypt_encrypt') && defined('ENCRYPT_USERID') && ENCRYPT_USERID == '1'){
			$key = "";
			if( defined('KEY_A') && defined('KEY_B') && defined('KEY_C') ){
				$key = KEY_A.KEY_B.KEY_C;
			}
			$userid = rawurlencode(base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256, md5($key), $userid, MCRYPT_MODE_CBC, md5(md5($key)))));
		}
		
		return $userid;
	}


	function getFriendsList($userid,$time) {
		$sql = ("select DISTINCT ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." userid, ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_NAME." username, CONCAT(".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID.",'-',".TABLE_PREFIX.DB_USERTABLE.".name) link, ".DB_AVATARFIELD." avatar,".TABLE_PREFIX.DB_USERTABLE."."."lastactivity lastactivity, cometchat_status.lastseen lastseen,cometchat_status.lastseensetting lastseensetting,cometchat_status.status, cometchat_status.message, cometchat_status.isdevice from ".TABLE_PREFIX.DB_USERTABLE." left join cometchat_status on ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." = cometchat_status.userid ".DB_AVATARTABLE." where ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." <> '".$userid."' and (cometchat_status.status IS NULL OR cometchat_status.status <> 'invisible' OR cometchat_status.status <> 'offline') order by username asc");		
		/*if($fb=fopen('debug.txt','w')){
			fwrite($fb,print_r($sql,true));
			fclose($fb);
		}*/
		return $sql;
	}

	function getFriendsIds($userid) {
		$sql = ("select ".TABLE_PREFIX."profile_friends.friends_friend_id friendid from ".TABLE_PREFIX."profile_friends where ".TABLE_PREFIX."profile_friends.friends_member_id = '".$userid."' and friends_approved = '1'");

		return $sql;
	}

	function getUserDetails($userid) {
		$sql = ("select ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." userid, ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_NAME." username, CONCAT(".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID.",'-',".TABLE_PREFIX.DB_USERTABLE.".name) link, " .DB_AVATARFIELD. " avatar, cometchat_status.lastactivity lastactivity, cometchat_status.lastseen lastseen, cometchat_status.lastseensetting lastseensetting, cometchat_status.status, cometchat_status.message message, cometchat_status.isdevice  from ".TABLE_PREFIX.DB_USERTABLE." left join cometchat_status on ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." = cometchat_status.userid " .DB_AVATARTABLE. " where ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." = '".mysqli_real_escape_string($GLOBALS['dbh'],$userid)."'");

		return $sql;
	}
	function updateLastActivity($userid) {
		$sql = ("update `".TABLE_PREFIX.DB_USERTABLE."` set lastactivity = '".getTimeStamp()."' where ".DB_USERTABLE_USERID." = '".mysql_real_escape_string($userid)."'");
		
		return $sql;
	}
	function getActivechatboxdetails($userids) {
		$sql = ("select DISTINCT ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." userid, ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_NAME." username,  CONCAT(".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID.",'-',".TABLE_PREFIX.DB_USERTABLE.".name) link, ".DB_AVATARFIELD." avatar, cometchat_status.lastactivity lastactivity, cometchat_status.lastseen lastseen, cometchat_status.lastseensetting lastseensetting, cometchat_status.status, cometchat_status.message, cometchat_status.isdevice from ".TABLE_PREFIX.DB_USERTABLE." left join cometchat_status on ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." = cometchat_status.userid ".DB_AVATARTABLE." where ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." IN (".$userids.")");

		return $sql;
	}

	function getUserStatus($userid) {
		$sql = ("select cometchat_status.message message, cometchat_status.status from  ".TABLE_PREFIX."profile_portal left join cometchat_status on ".TABLE_PREFIX."profile_portal.pp_member_id = cometchat_status.userid where ".TABLE_PREFIX."profile_portal.pp_member_id = '".mysqli_real_escape_string($GLOBALS['dbh'],$userid)."'");

		return $sql;
	}

	function fetchLink($link) {
		$cc_url = (defined('CC_SITE_URL') ? CC_SITE_URL : BASE_URL);
		return $cc_url.'../index.php?/user/'.$link;
	}

	function getAvatar($image) {
		if($image){
			return '/img/man_notification.png';
		}
	}

	function getTimeStamp() {
		return time();
	}

	function processTime($time) {
		return $time;
	}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/* HOOKS */

	function hooks_message($userid,$to,$unsanitizedmessage,$dir) {

	}

	function hooks_forcefriends() {

	}

	function hooks_updateLastActivity($userid) {
		$sql = ("update `".TABLE_PREFIX.DB_USERTABLE."` set lastactivity = '".getTimeStamp()."' where ".DB_USERTABLE_USERID." = '".$userid."'");
		$query = mysqli_query($GLOBALS['dbh'],$sql);
		//return $sql;
	}

	function hooks_statusupdate($userid,$statusmessage) {
		$sql = ("update ".TABLE_PREFIX."profile_portal set pp_status_update = '".getTimeStamp()."', pp_status = '".mysqli_real_escape_string($GLOBALS['dbh'],sanitize($statusmessage))."' where pp_member_id = '".mysqli_real_escape_string($GLOBALS['dbh'],$userid)."'");
		$query = mysqli_query($GLOBALS['dbh'],$sql);
	}

	function hooks_activityupdate($userid,$status) {

	}

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* LICENSE */

$p_ = 4;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
