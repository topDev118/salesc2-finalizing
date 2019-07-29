var eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
var eventer = window[eventMethod];
var messageEvent = eventMethod == 'attachEvent' ? 'onmessage' : 'message';

// Listen to message from child window
eventer(messageEvent,function(e) {
    if(typeof e.data != 'undefined' && typeof(e.data) == 'string'){
        if(e.data.indexOf('webrtcNoti')!== -1){
            if(typeof(e.data.split('^')[1]) != 'undefined' && e.data.split('^')[1] == 'add'){
                if(typeof(e.data.split('^')[2]) != 'undefined' && e.data.split('^')[2] == 'chrome'){
                    jqcc(document).find('body').prepend('<div id="webrtcArrow""> </div>');
                }else{
                    jqcc(document).find('body').prepend('<div id="webrtcArrow">&nbsp;</div>');
                }
            }
            if(typeof(e.data.split('^')[1]) != 'undefined' && e.data.split('^')[1] == 'remove'){
                jqcc(document).find("#webrtcArrow").remove();
            }
        }else if(e.data.indexOf('endCall')!== -1){
            endCall(1);
        }
    }
},false);
var isIE = /*@cc_on!@*/false || !!document.documentMode;
jqcc(function(){
    if(isIE) {
        jqcc('#ie_fix').show();
        jqcc('#webrtc').addClass('ie_iframefix');
        jqcc('#avchatButtons').addClass('ie_buttonfix');
    }
    jqcc('#webrtcArrow').click(function(){
        jqcc(this).remove();
    });
});
var controlparameters = JSON.stringify({
    type:'plugins',
    name:'cometchat',
    method:'setInternalVariable',
    params:{
        type:'endcallOnce',
        grp:grp,
        value:'0',
        chatroommode:chatroommode
    }
});
parent.postMessage('CC^CONTROL_'+controlparameters,'*');

controlparameters = JSON.stringify({
    'type':'plugins',
    'name':'cometchat',
    'method':'setInternalVariable',
    'params':{
        type:'endcallOnceWindow',
        grp:grp,
        value:'0',
        chatroommode:chatroommode
    }
});
parent.postMessage('CC^CONTROL_'+controlparameters,'*');

function endCall(caller){
    var targetWindow = window.opener || parent;
    controlparameters = JSON.stringify({
        type:'plugins',
        name:'cometchat',
        method:'setInternalVariable',
        params:{
            type:'endcallOnceWindow',
            grp:grp,
            value:1,
            chatroommode:chatroommode
        }
    });
    targetWindow.postMessage('CC^CONTROL_'+controlparameters,'*');

    controlparameters = JSON.stringify({
        type:'plugins',
        name:'ccavchat',
        method:'end_call',
        params:{
            to:to,
            grp:grp,
            chatroommode:chatroommode
        }
    });
    targetWindow.postMessage('CC^CONTROL_'+controlparameters,'*');

    window.close();
    if(caller){
        controlparameters = JSON.stringify({
            type:'plugins',
            name:'audiovideochat',
            method:'closeCCPopup',
            params:{
                name:'audiovideochat'
            }
        });
        targetWindow.postMessage('CC^CONTROL_'+controlparameters,'*');
    }
}

function closeWin(){
    endCall();
}
