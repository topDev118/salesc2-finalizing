/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

<?php
	include_once(dirname(__FILE__).DIRECTORY_SEPARATOR."config.php");

	if (file_exists(dirname(__FILE__).DIRECTORY_SEPARATOR."lang.php")) {
		include_once(dirname(__FILE__).DIRECTORY_SEPARATOR."lang.php");
	}

?>

(function($){

	$.ccscreenshare = (function () {

		var lastcall = 0;
		var height = <?php echo $scrHeight;?>;
		var width = <?php echo $scrWidth;?>;

        return {

			getTitle: function() {
				return jqcc.ccscreenshare.getLanguage('title');
			},

			init: function (params) {
				if (jqcc.cometchat.membershipAccess('screenshare','plugins')){
					if (jqcc.cometchat.checkMobileDevice()){
						return;
					}
					if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
						alert(jqcc.ccscreenshare.getLanguage('popup_already_open'));
						return;
					}
					var to = params.to;
					var chatroommode = params.chatroommode;
					var windowMode = 0;
					var currenttime = new Date();
					var baseUrl = $.cometchat.getBaseUrl();
					var baseData = $.cometchat.getBaseData();
					var uid = jqcc.cometchat.getUserID();

					if(typeof(params.windowMode) == "undefined") {
						windowMode = 0;
					} else {
						windowMode = 1;
					}
					currenttime = parseInt(currenttime.getTime()/1000);
					if (currenttime-lastcall > 10) {
						var random = currenttime;
						if(chatroommode == 1) {
								$.getJSON(baseUrl+'plugins/screenshare/index.php?chatroommode=1&action=request&callback=?', {to: to, id: random, basedata: baseData, initiator: uid});
						} else {
							$.getJSON(baseUrl+'plugins/screenshare/index.php?action=request&callback=?', {to: to, id: random, basedata: baseData});
						}
						lastcall = currenttime;
						windowMode = 1;
						if(chatroommode == 1){
							loadCCPopup(baseUrl+'plugins/screenshare/index.php?action=screenshare&type=1&id='+random+'&to='+to+'&basedata='+baseData+'&chatroommode='+chatroommode+'&initiator='+uid, 'screenshare',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=0, width=600,height=550",600,550,jqcc.ccscreenshare.getLanguage('screen_sharing'),0,0,1,1,windowMode);
						} else {
							loadCCPopup(baseUrl+'plugins/screenshare/index.php?action=screenshare&type=1&id='+random+'&to='+to+'&basedata='+baseData, 'screenshare',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=0, width=600,height=550",600,550,jqcc.ccscreenshare.getLanguage('screen_sharing'),0,0,1,1,windowMode);
						}
					} else {
						alert(jqcc.ccscreenshare.getLanguage('wait_message'));
					}
				}
			},

			accept: function (params) {
				if (jqcc.cometchat.membershipAccess('screenshare','plugins')){
					if (jqcc.cometchat.checkMobileDevice()){
						return;
					}
					if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
						alert(jqcc.ccscreenshare.getLanguage('popup_already_open'));
						return;
					}
					baseUrl = $.cometchat.getBaseUrl();
					baseData = $.cometchat.getBaseData();
					to = params.to;
					grp = params.grp;
					join_url = params.join_url;
					start_url = params.start_url;
					chatroommode = params.chatroommode;
					windowMode = 0;
					initiator = 0;
					if(typeof(params.windowMode) == "undefined") {
						windowMode = 0;
					} else {
						windowMode = 1;
					}
					if(typeof(params.initiator) != "undefined") {
						initiator = params.initiator;
					}
					if(chatroommode == 1) {
							$.getJSON(baseUrl+'plugins/screenshare/index.php?chatroommode=1&action=accept&callback=?', {to: to, start_url:start_url, grp: grp, basedata: baseData, initiator: initiator});
					} else {
						$.getJSON(baseUrl+'plugins/screenshare/index.php?action=accept&callback=?', {to: to, start_url:start_url, grp: grp, basedata: baseData});
					}
					windowMode = 1;
					if (chatroommode == 1) {
						var controlparameters = {"type":"plugins", "name":"core", "method":"loadCCPopup", "params":{"url": baseUrl+'plugins/screenshare/index.php?action=screenshare&type=0&id='+grp+'&to='+to+'&basedata='+baseData+'&chatroommode='+chatroommode+'&initiator='+initiator, "name":"screenshare", "properties":"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width="+width+",height="+height, "width":width, "height":height, "title":jqcc.ccscreenshare.getLanguage('screen_sharing'), "force":"0", "allowmaximize":"1", "allowresize":"1", "allowpopout":"1", "windowMode":windowMode}};
	              		controlparameters = JSON.stringify(controlparameters);
	              		parent.postMessage('CC^CONTROL_'+controlparameters,'*');
					} else {
						loadCCPopup(baseUrl+'plugins/screenshare/index.php?action=screenshare&type=0&id='+grp+'&to='+to+'&basedata='+baseData, 'screenshare',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width="+width+",height="+height,width,height,jqcc.ccscreenshare.getLanguage('screen_sharing'),0,1,1,1,windowMode);
					}
				}
			},

			accept_fid: function (params) {
				if (jqcc.cometchat.checkMobileDevice()){
					return;
				}
				if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
					alert(jqcc.ccscreenshare.getLanguage('popup_already_open'));
					return;
				}
				id = params.to;
				start_url = params.start_url;
				chatroommode = params.chatroommode;
				windowMode = 0;
				if(typeof(params.windowMode) == "undefined") {
					windowMode = 0;
				} else {
					windowMode = 1;
				}
				if(chatroommode == 1){
					var controlparameters = {"type":"plugins", "name":"core", "method":"loadCCPopup", "params":{"url": start_url, "name":"screenshare", "properties":"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=<?php echo $scrWidth;?>,height=<?php echo $scrHeight;?>", "width":width, "height":height, "title":jqcc.ccscreenshare.getLanguage('screen_sharing'), "force":"0", "allowmaximize":"1", "allowresize":"1", "allowpopout":"1", "windowMode":windowMode}};
                    controlparameters = JSON.stringify(controlparameters);
                    parent.postMessage('CC^CONTROL_'+controlparameters,'*');
				} else {
					loadCCPopup(start_url,'screenshare',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=<?php echo $scrWidth;?>,height=<?php echo $scrHeight;?>",width,height,jqcc.ccscreenshare.getLanguage('screen_sharing'),0,1,1,1,windowMode);
				}
			},

			getLanguage: function(id) {
				screenshare_language =  <?php echo json_encode($screenshare_language); ?>;
				if(typeof id==undefined){
					return screenshare_language;
				}else{
					return screenshare_language[id];
				}
			}
        };
    })();

})(jqcc);

jqcc(document).ready(function(){
	jqcc('.acceptSceenshare').live('click',function(){
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		var join_url = jqcc(this).attr('join_url');
		var start_url = jqcc(this).attr('start_url');
		var chatroommode = jqcc(this).attr('chatroommode');
		var initiator = 0;
		if(chatroommode == 1) {
			initiator = jqcc(this).attr('initiator');
		}
		if(typeof(parent) != 'undefined' && parent != null && parent != self){
			var controlparameters = {"type":"plugins", "name":"ccscreenshare", "method":"accept", "params":{"to":to, "grp":grp, "join_url":join_url, "start_url":start_url, "chatroommode":chatroommode, "initiator":initiator}};
			controlparameters = JSON.stringify(controlparameters);
			if(typeof(parent) != 'undefined' && parent != null && parent != self){
				parent.postMessage('CC^CONTROL_'+controlparameters,'*');
			} else {
				window.opener.postMessage('CC^CONTROL_'+controlparameters,'*');
			}
		} else {
			var controlparameters = {"to":to, "grp":grp, "join_url":join_url, "start_url":start_url, "chatroommode":chatroommode, "initiator":initiator};
            jqcc.ccscreenshare.accept(controlparameters);
		}
	});

	jqcc('.accept_fidSceenshare').live('click',function(){
		var to = jqcc(this).attr('to');
		var start_url = jqcc(this).attr('start_url');
		var chatroommode = jqcc(this).attr('chatroommode');
		if(typeof(parent) != 'undefined' && parent != null && parent != self){
			var controlparameters = {"type":"plugins", "name":"ccscreenshare", "method":"accept", "params":{"to":to, "start_url":start_url, "chatroommode":chatroommode}};
			controlparameters = JSON.stringify(controlparameters);
			if(typeof(parent) != 'undefined' && parent != null && parent != self){
				parent.postMessage('CC^CONTROL_'+controlparameters,'*');
			} else {
				window.opener.postMessage('CC^CONTROL_'+controlparameters,'*');
			}
		} else {
			var controlparameters = {"to":to, "start_url":start_url, "chatroommode":chatroommode};
            jqcc.ccscreenshare.accept(controlparameters);
		}
	});
});
