var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent,function(e) {
    if(typeof e.data != 'undefined'){
        if(e.data.indexOf('webrtcNoti')!== -1){
            if(e.data.indexOf('webrtcNoti')!== -1){
                if(typeof(e.data.split('^')[1]) != 'undefined' && e.data.split('^')[1] == 'add'){
                    if(typeof(e.data.split('^')[2]) != 'undefined' && e.data.split('^')[2] == 'chrome'){
                        $(document).find('body').prepend('<div id="webrtcArrow" onclick="this.remove();" style="position:fixed;width:100%;height: 100%;margin: 0px;top: 0;left: 0;background: rgba(0,0,0,0.6);z-index: 90000000;text-align: center;"> </div>');
                    }else{
                        $(document).find('body').prepend('<div id="webrtcArrow" onclick="this.remove();" style="position:fixed;width:100%;height: 100%;margin: 0px;top: 0;left: 0;background: rgba(0,0,0,0.6);z-index: 90000000;text-align: center;">$nbsp;</div>');
                    }
                }
                if(typeof(e.data.split('^')[1]) != 'undefined' && e.data.split('^')[1] == 'remove'){
                    $(document).find("#webrtcArrow").remove();
                }
            }
        }
    }
},false);
