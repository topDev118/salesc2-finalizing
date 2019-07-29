-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 29, 2019 at 08:52 AM
-- Server version: 5.6.41-84.1
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `salesctw_salesc2`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `team_manager_id` bigint(20) DEFAULT NULL,
  `customer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pocname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adminnotifications`
--

CREATE TABLE `adminnotifications` (
  `id` int(11) NOT NULL,
  `email` varchar(191) DEFAULT NULL,
  `message` text,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `is_read` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adminnotifications`
--

INSERT INTO `adminnotifications` (`id`, `email`, `message`, `updated_at`, `created_at`, `is_read`) VALUES
(46, 'administrator@salesc2.com', 'Corner removed the task ID = 90!', '2019-06-28 06:53:51', '2019-06-28 06:49:27', 1),
(47, 'administrator@salesc2.com', 'Corner Created a new task', '2019-06-28 06:53:51', '2019-06-28 06:51:28', 1),
(48, 'administrator@salesc2.com', 'Corner Created a new task', '2019-06-28 06:53:51', '2019-06-28 06:51:55', 1),
(49, 'administrator@salesc2.com', 'Corner removed the task ID = 94!', '2019-06-28 06:53:51', '2019-06-28 06:52:08', 1),
(51, 'administrator@salesc2.com', 'Corner Created a new task', '2019-06-28 08:20:02', '2019-06-28 08:19:56', 1),
(52, 'Ltodonnellk@yahoo.com', 'Task Id = 1 is Placed!', '2019-07-29 03:37:09', '2019-07-29 03:37:09', 0),
(53, 'km.odonnell@outlook.com', 'Task Id = 1 is Deleted!', '2019-07-29 03:37:48', '2019-07-29 03:37:48', 0);

-- --------------------------------------------------------

--
-- Table structure for table `cometchat`
--

CREATE TABLE `cometchat` (
  `id` int(10) UNSIGNED NOT NULL,
  `from` int(10) UNSIGNED NOT NULL,
  `to` int(10) UNSIGNED NOT NULL,
  `message` text NOT NULL,
  `sent` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `read` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `direction` tinyint(1) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cometchat_announcements`
--

CREATE TABLE `cometchat_announcements` (
  `id` int(10) UNSIGNED NOT NULL,
  `announcement` text NOT NULL,
  `time` int(10) UNSIGNED NOT NULL,
  `to` int(10) NOT NULL,
  `recd` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cometchat_block`
--

CREATE TABLE `cometchat_block` (
  `id` int(10) UNSIGNED NOT NULL,
  `fromid` int(10) UNSIGNED NOT NULL,
  `toid` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cometchat_bots`
--

CREATE TABLE `cometchat_bots` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `description` text CHARACTER SET utf8 NOT NULL,
  `keywords` text CHARACTER SET utf8,
  `avatar` varchar(200) NOT NULL,
  `apikey` varchar(200) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cometchat_chatroommessages`
--

CREATE TABLE `cometchat_chatroommessages` (
  `id` int(10) UNSIGNED NOT NULL,
  `userid` int(10) UNSIGNED NOT NULL,
  `chatroomid` int(10) UNSIGNED NOT NULL,
  `message` text NOT NULL,
  `sent` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cometchat_chatrooms`
--

CREATE TABLE `cometchat_chatrooms` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastactivity` int(10) UNSIGNED NOT NULL,
  `createdby` int(10) UNSIGNED NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` tinyint(1) UNSIGNED NOT NULL,
  `vidsession` varchar(512) DEFAULT NULL,
  `invitedusers` text,
  `guid` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cometchat_chatrooms_users`
--

CREATE TABLE `cometchat_chatrooms_users` (
  `userid` int(10) UNSIGNED NOT NULL,
  `chatroomid` int(10) UNSIGNED NOT NULL,
  `isbanned` int(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cometchat_colors`
--

CREATE TABLE `cometchat_colors` (
  `color_key` varchar(100) NOT NULL,
  `color_value` text NOT NULL,
  `color` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cometchat_colors`
--

INSERT INTO `cometchat_colors` (`color_key`, `color_value`, `color`) VALUES
('color1', 'a:3:{s:7:\"primary\";s:6:\"56a8e3\";s:9:\"secondary\";s:6:\"3777A7\";s:5:\"hover\";s:6:\"ECF5FB\";}', 'color1'),
('color10', 'a:3:{s:7:\"primary\";s:6:\"23025E\";s:9:\"secondary\";s:6:\"3D1F84\";s:5:\"hover\";s:6:\"E5D7FF\";}', 'color10'),
('color11', 'a:3:{s:7:\"primary\";s:6:\"24D4F6\";s:9:\"secondary\";s:6:\"059EBB\";s:5:\"hover\";s:6:\"DBF9FF\";}', 'color11'),
('color12', 'a:3:{s:7:\"primary\";s:6:\"289D57\";s:9:\"secondary\";s:6:\"09632D\";s:5:\"hover\";s:6:\"DDF9E8\";}', 'color12'),
('color13', 'a:3:{s:7:\"primary\";s:6:\"D9B197\";s:9:\"secondary\";s:6:\"C38B66\";s:5:\"hover\";s:6:\"FFF1E8\";}', 'color13'),
('color14', 'a:3:{s:7:\"primary\";s:6:\"FF67AB\";s:9:\"secondary\";s:6:\"D6387E\";s:5:\"hover\";s:6:\"F3DDE7\";}', 'color14'),
('color15', 'a:3:{s:7:\"primary\";s:6:\"8E24AA\";s:9:\"secondary\";s:6:\"7B1FA2\";s:5:\"hover\";s:6:\"EFE8FD\";}', 'color15'),
('color2', 'a:3:{s:7:\"primary\";s:6:\"4DC5CE\";s:9:\"secondary\";s:6:\"068690\";s:5:\"hover\";s:6:\"D3EDEF\";}', 'color2'),
('color3', 'a:3:{s:7:\"primary\";s:6:\"FFC107\";s:9:\"secondary\";s:6:\"FFA000\";s:5:\"hover\";s:6:\"FFF8E2\";}', 'color3'),
('color4', 'a:3:{s:7:\"primary\";s:6:\"FB4556\";s:9:\"secondary\";s:6:\"BB091A\";s:5:\"hover\";s:6:\"F5C3C8\";}', 'color4'),
('color5', 'a:3:{s:7:\"primary\";s:6:\"DBA0C3\";s:9:\"secondary\";s:6:\"D87CB3\";s:5:\"hover\";s:6:\"ECD9E5\";}', 'color5'),
('color6', 'a:3:{s:7:\"primary\";s:6:\"3B5998\";s:9:\"secondary\";s:6:\"213A6D\";s:5:\"hover\";s:6:\"DFEAFF\";}', 'color6'),
('color7', 'a:3:{s:7:\"primary\";s:6:\"065E52\";s:9:\"secondary\";s:6:\"244C4E\";s:5:\"hover\";s:6:\"AFCCAF\";}', 'color7'),
('color8', 'a:3:{s:7:\"primary\";s:6:\"FF8A2E\";s:9:\"secondary\";s:6:\"CE610C\";s:5:\"hover\";s:6:\"FDD9BD\";}', 'color8'),
('color9', 'a:3:{s:7:\"primary\";s:6:\"E99090\";s:9:\"secondary\";s:6:\"B55353\";s:5:\"hover\";s:6:\"FDE8E8\";}', 'color9'),
('color91561478031', 'a:3:{s:7:\"primary\";s:6:\"2e488a\";s:9:\"secondary\";s:6:\"2E3B59\";s:5:\"hover\";s:6:\"ECF5FB\";}', 'color91561478031');

-- --------------------------------------------------------

--
-- Table structure for table `cometchat_guests`
--

CREATE TABLE `cometchat_guests` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cometchat_guests`
--

INSERT INTO `cometchat_guests` (`id`, `name`) VALUES
(10000000, 'guest-10000000');

-- --------------------------------------------------------

--
-- Table structure for table `cometchat_languages`
--

CREATE TABLE `cometchat_languages` (
  `lang_key` varchar(255) NOT NULL COMMENT 'Key of a language variable',
  `lang_text` text NOT NULL COMMENT 'Text/value of a language variable',
  `code` varchar(20) NOT NULL COMMENT 'Language code for e.g. en for English',
  `type` varchar(20) NOT NULL COMMENT 'Type of CometChat add on for e.g. module/plugin/extension/function',
  `name` varchar(50) NOT NULL COMMENT 'Name of add on for e.g. announcement,smilies, etc.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores all CometChat languages';

--
-- Dumping data for table `cometchat_languages`
--

INSERT INTO `cometchat_languages` (`lang_key`, `lang_text`, `code`, `type`, `name`) VALUES
('rtl', '0', 'en', 'core', 'default');

-- --------------------------------------------------------

--
-- Table structure for table `cometchat_recentconversation`
--

CREATE TABLE `cometchat_recentconversation` (
  `convo_id` varchar(100) NOT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `from` int(10) UNSIGNED NOT NULL,
  `to` int(10) UNSIGNED NOT NULL,
  `message` text NOT NULL,
  `sent` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cometchat_recentconversation`
--

INSERT INTO `cometchat_recentconversation` (`convo_id`, `id`, `from`, `to`, `message`, `sent`) VALUES
('302cbafc0dfbc97f30d576a6f394dad3', 27, 2, 1, 'hello', '1561554519'),
('72af02dde27024282c0f966e38aac510', 26, 1, 3, 'hi', '1561531520'),
('cec97df69a76f0a6865547617098a044', 48, 3, 2, 'Helio', '1561816153'),
('fd1d03b32922445d52e5070b4ad88428', 37, 54, 3, 'How is it going?', '1561752510');

-- --------------------------------------------------------

--
-- Table structure for table `cometchat_session`
--

CREATE TABLE `cometchat_session` (
  `session_id` char(32) NOT NULL,
  `session_data` text NOT NULL,
  `session_lastaccesstime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cometchat_settings`
--

CREATE TABLE `cometchat_settings` (
  `setting_key` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Configuration setting name. It can be PHP constant, variable or array',
  `value` text COLLATE utf8_unicode_ci NOT NULL COMMENT 'Value of the key.',
  `key_type` tinyint(4) NOT NULL DEFAULT '1' COMMENT 'States whether the key is: 0 = PHP constant, 1 = atomic variable or 2 = serialized associative array.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Stores all the configuration settings for CometChat';

--
-- Dumping data for table `cometchat_settings`
--

INSERT INTO `cometchat_settings` (`setting_key`, `value`, `key_type`) VALUES
('ADMIN_PASS', 'e9826593f1881063617e044fc72e94e9fca598f3', 0),
('ADMIN_USER', 'administrator@salesc2.com', 0),
('allowAvatar', '1', 1),
('allowDelete', '1', 1),
('allowGuests', '1', 1),
('allowUsers', '1', 1),
('api_response', '', 1),
('apikey', 'd0eb7ef5a27e10cb769982290e5841c2', 1),
('BASE_URL', '/cometchat/', 0),
('chatroomTimeout', '604800', 1),
('color', 'color91561478031', 1),
('Confirm_PASS', 'salesc22019', 1),
('crguestsMode', '1', 1),
('dbversion', '26', 1),
('disableContactsTab', '0', 1),
('disableGroupTab', '0', 1),
('DISPLAY_ALL_USERS', '1', 0),
('displayBusyNotification', '1', 1),
('displayOfflineNotification', '1', 1),
('displayOnlineNotification', '1', 1),
('extensions_core', 'a:4:{s:3:\"ads\";s:14:\"Advertisements\";s:9:\"mobileapp\";s:10:\"Mobile App\";s:7:\"desktop\";s:11:\"Desktop App\";s:4:\"bots\";s:4:\"Bots\";}', 2),
('hideOffline', '0', 1),
('isDelete', '1', 1),
('lastMessages', '10', 1),
('LATEST_VERSION', '7.1.2', 0),
('MC_NAME', 'files', 0),
('MC_PASSWORD', '', 0),
('MC_PORT', '11211', 0),
('MC_SERVER', 'localhost', 0),
('MC_USERNAME', '', 0),
('messageBeep', '1', 1),
('modules_core', 'a:11:{s:13:\"announcements\";a:9:{i:0;s:13:\"announcements\";i:1;s:13:\"Announcements\";i:2;s:31:\"modules/announcements/index.php\";i:3;s:6:\"_popup\";i:4;s:3:\"280\";i:5;s:3:\"310\";i:6;s:0:\"\";i:7;s:1:\"1\";i:8;s:0:\"\";}s:16:\"broadcastmessage\";a:9:{i:0;s:16:\"broadcastmessage\";i:1;s:17:\"Broadcast Message\";i:2;s:34:\"modules/broadcastmessage/index.php\";i:3;s:6:\"_popup\";i:4;s:3:\"385\";i:5;s:3:\"300\";i:6;s:0:\"\";i:7;s:1:\"1\";i:8;s:0:\"\";}s:9:\"chatrooms\";a:9:{i:0;s:9:\"chatrooms\";i:1;s:6:\"Groups\";i:2;s:27:\"modules/chatrooms/index.php\";i:3;s:6:\"_popup\";i:4;s:3:\"600\";i:5;s:3:\"300\";i:6;s:0:\"\";i:7;s:1:\"1\";i:8;s:1:\"1\";}s:8:\"facebook\";a:9:{i:0;s:8:\"facebook\";i:1;s:17:\"Facebook Fan Page\";i:2;s:26:\"modules/facebook/index.php\";i:3;s:6:\"_popup\";i:4;s:3:\"500\";i:5;s:3:\"460\";i:6;s:0:\"\";i:7;s:1:\"1\";i:8;s:0:\"\";}s:5:\"games\";a:9:{i:0;s:5:\"games\";i:1;s:19:\"Single Player Games\";i:2;s:23:\"modules/games/index.php\";i:3;s:6:\"_popup\";i:4;s:3:\"465\";i:5;s:3:\"300\";i:6;s:0:\"\";i:7;s:1:\"1\";i:8;s:0:\"\";}s:4:\"home\";a:8:{i:0;s:4:\"home\";i:1;s:4:\"Home\";i:2;s:1:\"/\";i:3;s:0:\"\";i:4;s:0:\"\";i:5;s:0:\"\";i:6;s:0:\"\";i:7;s:0:\"\";}s:17:\"realtimetranslate\";a:9:{i:0;s:17:\"realtimetranslate\";i:1;s:23:\"Translate Conversations\";i:2;s:35:\"modules/realtimetranslate/index.php\";i:3;s:6:\"_popup\";i:4;s:3:\"280\";i:5;s:3:\"310\";i:6;s:0:\"\";i:7;s:1:\"1\";i:8;s:0:\"\";}s:11:\"scrolltotop\";a:8:{i:0;s:11:\"scrolltotop\";i:1;s:13:\"Scroll To Top\";i:2;s:40:\"javascript:jqcc.cometchat.scrollToTop();\";i:3;s:0:\"\";i:4;s:0:\"\";i:5;s:0:\"\";i:6;s:0:\"\";i:7;s:0:\"\";}s:5:\"share\";a:8:{i:0;s:5:\"share\";i:1;s:15:\"Share This Page\";i:2;s:23:\"modules/share/index.php\";i:3;s:6:\"_popup\";i:4;s:3:\"350\";i:5;s:2:\"50\";i:6;s:0:\"\";i:7;s:1:\"1\";}s:9:\"translate\";a:9:{i:0;s:9:\"translate\";i:1;s:19:\"Translate This Page\";i:2;s:27:\"modules/translate/index.php\";i:3;s:6:\"_popup\";i:4;s:3:\"280\";i:5;s:3:\"310\";i:6;s:0:\"\";i:7;s:1:\"1\";i:8;s:0:\"\";}s:7:\"twitter\";a:8:{i:0;s:7:\"twitter\";i:1;s:7:\"Twitter\";i:2;s:25:\"modules/twitter/index.php\";i:3;s:6:\"_popup\";i:4;s:3:\"500\";i:5;s:3:\"300\";i:6;s:0:\"\";i:7;s:1:\"1\";}}', 2),
('newMessageIndicator', '1', 1),
('old_PASS', 'cometchat', 1),
('plugins', 'a:6:{i:0;s:7:\"smilies\";i:1;s:17:\"clearconversation\";i:2;s:11:\"chathistory\";i:3;s:12:\"filetransfer\";i:4;s:9:\"handwrite\";i:5;s:5:\"block\";}', 2),
('plugins_core', 'a:18:{s:9:\"audiochat\";a:2:{i:0;s:10:\"Audio Chat\";i:1;i:0;}s:6:\"avchat\";a:2:{i:0;s:16:\"Audio/Video Chat\";i:1;i:0;}s:5:\"block\";a:2:{i:0;s:10:\"Block User\";i:1;i:1;}s:9:\"broadcast\";a:2:{i:0;s:21:\"Audio/Video Broadcast\";i:1;i:0;}s:11:\"chathistory\";a:2:{i:0;s:12:\"Chat History\";i:1;i:0;}s:17:\"clearconversation\";a:2:{i:0;s:18:\"Clear Conversation\";i:1;i:0;}s:12:\"filetransfer\";a:2:{i:0;s:11:\"Send a file\";i:1;i:0;}s:9:\"handwrite\";a:2:{i:0;s:19:\"Handwrite a message\";i:1;i:0;}s:6:\"report\";a:2:{i:0;s:19:\"Report Conversation\";i:1;i:1;}s:4:\"save\";a:2:{i:0;s:17:\"Save Conversation\";i:1;i:0;}s:11:\"screenshare\";a:2:{i:0;s:17:\"Share Your Screen\";i:1;i:0;}s:7:\"smilies\";a:2:{i:0;s:5:\"Emoji\";i:1;i:0;}s:8:\"stickers\";a:2:{i:0;s:8:\"Stickers\";i:1;i:0;}s:5:\"style\";a:2:{i:0;s:15:\"Color your text\";i:1;i:2;}s:13:\"transliterate\";a:2:{i:0;s:22:\"Write in your language\";i:1;i:0;}s:10:\"whiteboard\";a:2:{i:0;s:25:\"Share Whiteboard Document\";i:1;i:0;}s:10:\"writeboard\";a:2:{i:0;s:28:\"Share Collaborative Document\";i:1;i:0;}s:9:\"voicenote\";a:2:{i:0;s:16:\"Share Voice Note\";i:1;i:0;}}', 2),
('searchDisplayNumber', '10', 1),
('showChatroomUsers', '1', 1),
('showGroupsOnlineUsers', '0', 1),
('showUsername', '1', 1),
('theme', 'docked', 1),
('thumbnailDisplayNumber', '40', 1),
('trayicon', 'a:3:{s:13:\"announcements\";a:9:{i:0;s:13:\"announcements\";i:1;s:13:\"Announcements\";i:2;s:31:\"modules/announcements/index.php\";i:3;s:6:\"_popup\";i:4;s:3:\"280\";i:5;s:3:\"310\";i:6;s:0:\"\";i:7;s:1:\"1\";i:8;s:0:\"\";}s:4:\"home\";a:9:{i:0;s:4:\"home\";i:1;s:4:\"Home\";i:2;s:1:\"/\";i:3;s:0:\"\";i:4;s:0:\"\";i:5;s:0:\"\";i:6;s:0:\"\";i:7;s:0:\"\";i:8;s:0:\"\";}s:11:\"scrolltotop\";a:9:{i:0;s:11:\"scrolltotop\";i:1;s:13:\"Scroll To Top\";i:2;s:40:\"javascript:jqcc.cometchat.scrollToTop();\";i:3;s:0:\"\";i:4;s:0:\"\";i:5;s:0:\"\";i:6;s:0:\"\";i:7;s:0:\"\";i:8;s:0:\"\";}}', 2),
('usebots', '0', 1);

-- --------------------------------------------------------

--
-- Table structure for table `cometchat_status`
--

CREATE TABLE `cometchat_status` (
  `userid` int(10) UNSIGNED NOT NULL,
  `message` text,
  `status` enum('available','away','busy','invisible','offline') DEFAULT NULL,
  `typingto` int(10) UNSIGNED DEFAULT NULL,
  `typingtime` int(10) UNSIGNED DEFAULT NULL,
  `isdevice` int(1) UNSIGNED NOT NULL DEFAULT '0',
  `lastactivity` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `lastseen` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `lastseensetting` int(1) UNSIGNED NOT NULL DEFAULT '0',
  `readreceiptsetting` int(1) UNSIGNED NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cometchat_status`
--

INSERT INTO `cometchat_status` (`userid`, `message`, `status`, `typingto`, `typingtime`, `isdevice`, `lastactivity`, `lastseen`, `lastseensetting`, `readreceiptsetting`) VALUES
(1, NULL, 'away', NULL, NULL, 0, 1561555149, 1561555149, 0, 1),
(2, NULL, 'available', NULL, NULL, 0, 1564411937, 1564411937, 0, 1),
(3, 'I\'m available now <br>', 'available', NULL, NULL, 0, 1564358866, 1564358866, 0, 1),
(5, NULL, 'available', NULL, NULL, 0, 1561703649, 1561703649, 0, 1),
(50, NULL, 'available', NULL, NULL, 0, 1561636993, 1561636993, 0, 1),
(52, NULL, NULL, NULL, NULL, 0, 1561752359, 1561752359, 0, 1),
(54, NULL, 'away', NULL, NULL, 0, 1561774708, 1561774708, 0, 1),
(55, NULL, NULL, NULL, NULL, 0, 1561774829, 1561774829, 0, 1),
(56, NULL, 'away', NULL, NULL, 0, 1561778943, 1561778943, 0, 1),
(57, NULL, NULL, NULL, NULL, 0, 1561817181, 1561817181, 0, 1),
(58, NULL, 'away', NULL, NULL, 0, 1561851035, 1561851035, 0, 1),
(59, NULL, 'away', NULL, NULL, 0, 1562161451, 1562161451, 0, 1),
(60, NULL, 'available', NULL, NULL, 0, 1562249334, 1562249334, 0, 1),
(61, NULL, 'away', NULL, NULL, 0, 1562565348, 1562565348, 0, 1),
(63, NULL, 'away', NULL, NULL, 0, 1564354414, 1564354414, 0, 1),
(65, NULL, 'away', NULL, NULL, 0, 1564354411, 1564354411, 0, 1);

--
-- Triggers `cometchat_status`
--
DELIMITER $$
CREATE TRIGGER `cometchat_status_after_update` AFTER UPDATE ON `cometchat_status` FOR EACH ROW UPDATE team_manager SET team_manager.lastactivity=NEW.lastactivity WHERE id=NEW.userid
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `cometchat_users`
--

CREATE TABLE `cometchat_users` (
  `userid` int(11) NOT NULL,
  `username` varchar(100) CHARACTER SET utf8 NOT NULL,
  `displayname` varchar(100) CHARACTER SET utf8 NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 NOT NULL,
  `avatar` varchar(200) NOT NULL,
  `link` varchar(200) NOT NULL,
  `grp` varchar(25) NOT NULL,
  `friends` text NOT NULL,
  `uid` varchar(255) NOT NULL,
  `roleid` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cometchat_videochatsessions`
--

CREATE TABLE `cometchat_videochatsessions` (
  `username` varchar(255) NOT NULL,
  `identity` varchar(255) NOT NULL,
  `timestamp` int(10) UNSIGNED DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `segment` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) CHARACTER SET utf8 NOT NULL,
  `division` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `status` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `invites`
--

CREATE TABLE `invites` (
  `id` int(10) UNSIGNED NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `accepted` tinyint(1) DEFAULT '0',
  `accepted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `invites`
--

INSERT INTO `invites` (`id`, `token`, `name`, `email`, `accepted`, `accepted_at`, `created_at`, `updated_at`) VALUES
(8, 'fe2127a137701854cce92d89461098a2', NULL, 'txfreelancer62@gmail.com', 1, NULL, '2019-06-19 03:16:54', '2019-06-19 03:32:01'),
(14, 'e9a6a353ed2361649b94ffc66fcf5158', NULL, 'noproblemgod@hotmail.com', 1, NULL, '2019-06-28 18:18:08', '2019-06-28 18:18:34'),
(18, '9c4c9a1ec80c03b5958d7210b3304ec1', NULL, 'chanceweston518@gmail.com', 1, '2019-07-07 11:00:48', '2019-06-29 19:06:00', '2019-06-29 19:06:31'),
(20, 'bab8e353feab40965e62ea2afc79e871', NULL, 'Ltodonnellk@yahoo.com', 1, '2019-07-29 02:30:34', '2019-07-26 18:28:04', '2019-07-29 02:30:34');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_05_14_155605_create_customer_customers_table', 1),
(2, '2019_05_14_163029_create_customer_services_table', 2),
(3, '2019_05_12_203515_customer_team', 3),
(4, '2019_05_12_234450_customer_services', 4),
(5, '2019_05_12_232748_cutomer_customers', 5),
(6, '2019_05_16_001819_create_customer_services_table', 6),
(8, '2019_05_18_035552_create_events_table', 7),
(9, '2019_05_18_091431_create_events_table', 8),
(10, '2019_05_18_220043_create_schedule_table', 9),
(11, '2019_05_19_011047_create_events_table', 10),
(12, '2019_05_19_011151_create_schedule_table', 11),
(13, '2019_05_19_011512_create_schedule_table', 12),
(14, '2019_05_19_011814_create_schedule_table', 13),
(15, '2019_05_20_223713_create_team_table', 14),
(16, '2019_05_23_223520_create_tasks_table', 15),
(17, '2019_05_29_135140_create_team_members_table', 16),
(18, '2019_05_30_013444_create_accounts_table', 17),
(19, '2016_01_01_193651_create_roles_permissions_tables', 18),
(20, '2018_08_01_183154_create_pages_table', 18),
(21, '2018_08_04_122319_create_settings_table', 18),
(22, '2019_06_04_191049_create_activity_log_table', 19),
(23, '2015_10_10_000000_create_menus_table', 20),
(24, '2019_06_09_045640_create_invites_table', 21),
(25, '2019_06_09_061619_create_invites_table', 22);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('wang@test.com', '$2y$10$6zY6ycgl8O.5dUpWx2svC.dqlsTx4EwUBb6ITCha5FMcC/YkZbbcO', '2019-05-22 18:09:28'),
('txfreelancer62@gmail.com', '$2y$10$jaXJvzP4hfRZQ5ZxzNivLOL0hByLMli8iEOfOvAPgWRGbFkMSIBi6', '2019-06-04 22:21:27');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` date NOT NULL,
  `end_date` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `team_manager_id` bigint(20) NOT NULL,
  `classification` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `service` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `task` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `device_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `team_manager_id`, `classification`, `service`, `task`, `device_type`, `created_at`, `updated_at`) VALUES
(15, 63, 'Revenue Generating', 'Procedure', 'Device Implant', 'Pacemaker', '2019-07-29 02:40:08', '2019-07-29 02:40:08'),
(16, 63, 'Service Burden', 'Procedure', 'Lead Revision', 'Defibrilator', '2019-07-29 02:40:43', '2019-07-29 02:40:43'),
(17, 63, 'Revenue Generating', 'Procedure', 'Generator Change', 'Defibrilator', '2019-07-29 02:41:13', '2019-07-29 02:41:13'),
(18, 63, 'Service Burden', 'Procedure', 'Lead Revision', 'Pacemaker', '2019-07-29 02:41:34', '2019-07-29 02:41:34'),
(19, 63, 'Revenue Generating', 'Procedure', 'Generator Change', 'Pacemaker', '2019-07-29 02:42:55', '2019-07-29 02:42:55');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `team_manager_id` int(11) NOT NULL,
  `customer` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `department` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `service` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `task` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `device_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime DEFAULT NULL,
  `assigned_sales_rep` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notes` varchar(555) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `team_manager_id`, `customer`, `department`, `service`, `task`, `device_type`, `start_time`, `end_time`, `assigned_sales_rep`, `status`, `notes`, `created_at`, `updated_at`) VALUES
(1, 64, NULL, NULL, NULL, NULL, NULL, '2019-07-29 09:00:00', '2019-07-29 10:30:00', NULL, 'Incomplete', 'test', '2019-07-29 03:37:09', '2019-07-29 03:37:48');

-- --------------------------------------------------------

--
-- Table structure for table `team_manager`
--

CREATE TABLE `team_manager` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` int(50) DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `verify_token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_verify` int(11) NOT NULL DEFAULT '0',
  `ipaddress` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastactivity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `team_manager`
--

INSERT INTO `team_manager` (`id`, `role_id`, `name`, `email`, `email_verified_at`, `phone`, `password`, `remember_token`, `created_at`, `updated_at`, `verify_token`, `is_verify`, `ipaddress`, `lastactivity`) VALUES
(1, 1, 'Kevin', 'kevin@gmail.com', '2019-06-06 20:45:33', '+1222222222222', '$2y$10$Nw7Mk/BlGCLaWCdrT9CzNOpmh95J6Wv2O6yQopH5jT.DXriMYJqti', '3zxtaigeb6gtVOcEfDpfgHMPwdge25YXLQbLM2ToPmcA307pfuMvGp6xR9ZD', '2019-06-06 12:45:33', '2019-06-16 05:49:29', '5cf95f4dda6ae', 1, '106.184.4.30', 1561555149),
(2, 1, 'Corner', 'administrator@salesc2.com', '2019-06-16 13:50:40', '10000000000000', '$2y$10$Nw7Mk/BlGCLaWCdrT9CzNOpmh95J6Wv2O6yQopH5jT.DXriMYJqti', NULL, '2019-06-16 05:50:40', '2019-06-16 05:50:40', NULL, 1, '106.184.4.31', 1564411937),
(3, 2, 'wangxin', 'wangxinpm1009@gmail.com', '2019-06-16 13:54:26', '+10000000000000', '$2y$10$Nw7Mk/BlGCLaWCdrT9CzNOpmh95J6Wv2O6yQopH5jT.DXriMYJqti', NULL, '2019-06-16 05:54:26', '2019-06-16 05:54:26', NULL, 1, '106.184.4.2', 1564358866),
(63, 2, 'Kevin O\'Donnell', 'Ltodonnellk@yahoo.com', '2019-07-28 21:30:34', '412-298-1115', '$2y$10$ygUa.G/A.FcbOCw3zlJ/ruLqwnwnFEdRh1SuP/3OP9ZKbSW9kAyxa', NULL, '2019-07-29 02:30:34', '2019-07-29 02:30:34', NULL, 1, '174.204.31.137', 1564354414),
(64, 3, 'Joe Black', 'km.odonnell@outlook.com', '2019-07-28 21:47:47', '555-555-5555', '$2y$10$T/kwZUHPKi2DHIDSs2DfxeUKeyyekJ.3L5NdiA1CmJQ.41aU2sFEe', NULL, '2019-07-29 02:47:47', '2019-07-29 02:47:47', NULL, 1, '174.204.31.137', NULL),
(65, 3, 'Joe Smith', 'kodonnell@problembender.com', '2019-07-28 22:31:09', '412-302-0051', '$2y$10$UjqsD6tV2E7pwPsJdY5CVeM6kHwEUvrVmWZy8NpDXiN3TA2TOLKpi', NULL, '2019-07-29 03:31:09', '2019-07-29 03:31:09', NULL, 1, '174.204.31.137', 1564354411);

--
-- Triggers `team_manager`
--
DELIMITER $$
CREATE TRIGGER `team_manager_after_new_record` AFTER INSERT ON `team_manager` FOR EACH ROW UPDATE invites SET invites.accepted_at=NEW.created_at WHERE NEW.email=invites.email
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `team_members`
--

CREATE TABLE `team_members` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `team_manager_id` bigint(20) DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `territory` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `region` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `area` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ipaddress` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `team_members`
--

INSERT INTO `team_members` (`id`, `team_manager_id`, `name`, `role`, `email`, `phone`, `territory`, `region`, `area`, `address`, `ipaddress`, `latitude`, `longitude`, `created_at`, `updated_at`) VALUES
(48, 63, 'Joe Smith', 'Sales Rep', 'kodonnell@problembender.com', '412-302-0051', 'Pittsburgh West', 'Steel Valley', 'Great Lakes', '551 Greenfield Avenue, Pittsburgh, PA, USA', NULL, 40.4261692, -79.94067080000002, '2019-07-29 02:32:07', '2019-07-29 02:32:07'),
(49, 63, 'Joe Black', 'Clinical Rep', 'km.odonnell@outlook.com', '555-555-5555', 'Pittsburgh North', 'Steel Valley', 'Great Lakes', '2502 Allender Ave, Pittsburgh, PA, USA', NULL, 40.4049999, -80.04679049999999, '2019-07-29 02:34:06', '2019-07-29 02:34:06');

--
-- Triggers `team_members`
--
DELIMITER $$
CREATE TRIGGER `team_member_after_new_record` AFTER INSERT ON `team_members` FOR EACH ROW UPDATE invites SET invites.accepted_at=NEW.created_at WHERE NEW.email=invites.email
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `area` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `region` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `territory` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phonenumber` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_verified` int(11) NOT NULL DEFAULT '0',
  `verify_token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `adminnotifications`
--
ALTER TABLE `adminnotifications`
  ADD UNIQUE KEY `id_2` (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `cometchat`
--
ALTER TABLE `cometchat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `to` (`to`),
  ADD KEY `from` (`from`),
  ADD KEY `direction` (`direction`),
  ADD KEY `read` (`read`),
  ADD KEY `sent` (`sent`);

--
-- Indexes for table `cometchat_announcements`
--
ALTER TABLE `cometchat_announcements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `to` (`to`),
  ADD KEY `time` (`time`),
  ADD KEY `to_id` (`to`,`id`);

--
-- Indexes for table `cometchat_block`
--
ALTER TABLE `cometchat_block`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fromid` (`fromid`),
  ADD KEY `toid` (`toid`),
  ADD KEY `fromid_toid` (`fromid`,`toid`);

--
-- Indexes for table `cometchat_bots`
--
ALTER TABLE `cometchat_bots`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `cometchat_chatroommessages`
--
ALTER TABLE `cometchat_chatroommessages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userid` (`userid`),
  ADD KEY `chatroomid` (`chatroomid`),
  ADD KEY `sent` (`sent`);

--
-- Indexes for table `cometchat_chatrooms`
--
ALTER TABLE `cometchat_chatrooms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lastactivity` (`lastactivity`),
  ADD KEY `createdby` (`createdby`),
  ADD KEY `type` (`type`);

--
-- Indexes for table `cometchat_chatrooms_users`
--
ALTER TABLE `cometchat_chatrooms_users`
  ADD PRIMARY KEY (`userid`,`chatroomid`) USING BTREE,
  ADD KEY `chatroomid` (`chatroomid`),
  ADD KEY `userid` (`userid`),
  ADD KEY `userid_chatroomid` (`chatroomid`,`userid`);

--
-- Indexes for table `cometchat_colors`
--
ALTER TABLE `cometchat_colors`
  ADD UNIQUE KEY `color_index` (`color_key`,`color`);

--
-- Indexes for table `cometchat_guests`
--
ALTER TABLE `cometchat_guests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cometchat_languages`
--
ALTER TABLE `cometchat_languages`
  ADD UNIQUE KEY `lang_index` (`lang_key`,`code`,`type`,`name`) USING BTREE;

--
-- Indexes for table `cometchat_recentconversation`
--
ALTER TABLE `cometchat_recentconversation`
  ADD UNIQUE KEY `convo_id` (`convo_id`),
  ADD KEY `fromid` (`from`),
  ADD KEY `toid` (`to`),
  ADD KEY `fromid_toid` (`from`,`to`);

--
-- Indexes for table `cometchat_session`
--
ALTER TABLE `cometchat_session`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `cometchat_settings`
--
ALTER TABLE `cometchat_settings`
  ADD PRIMARY KEY (`setting_key`),
  ADD KEY `key` (`setting_key`);

--
-- Indexes for table `cometchat_status`
--
ALTER TABLE `cometchat_status`
  ADD PRIMARY KEY (`userid`),
  ADD KEY `typingto` (`typingto`),
  ADD KEY `typingtime` (`typingtime`);

--
-- Indexes for table `cometchat_users`
--
ALTER TABLE `cometchat_users`
  ADD PRIMARY KEY (`userid`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `cometchat_videochatsessions`
--
ALTER TABLE `cometchat_videochatsessions`
  ADD PRIMARY KEY (`username`),
  ADD KEY `username` (`username`),
  ADD KEY `identity` (`identity`),
  ADD KEY `timestamp` (`timestamp`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invites`
--
ALTER TABLE `invites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `invites_token_index` (`token`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team_manager`
--
ALTER TABLE `team_manager`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customers_email_unique` (`email`),
  ADD UNIQUE KEY `customers_phone_unique` (`phone`);

--
-- Indexes for table `team_members`
--
ALTER TABLE `team_members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `adminnotifications`
--
ALTER TABLE `adminnotifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `cometchat`
--
ALTER TABLE `cometchat`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `cometchat_announcements`
--
ALTER TABLE `cometchat_announcements`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5000;

--
-- AUTO_INCREMENT for table `cometchat_block`
--
ALTER TABLE `cometchat_block`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cometchat_bots`
--
ALTER TABLE `cometchat_bots`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cometchat_chatroommessages`
--
ALTER TABLE `cometchat_chatroommessages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cometchat_chatrooms`
--
ALTER TABLE `cometchat_chatrooms`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cometchat_guests`
--
ALTER TABLE `cometchat_guests`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10000001;

--
-- AUTO_INCREMENT for table `cometchat_users`
--
ALTER TABLE `cometchat_users`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `invites`
--
ALTER TABLE `invites`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `team_manager`
--
ALTER TABLE `team_manager`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `team_members`
--
ALTER TABLE `team_members`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
