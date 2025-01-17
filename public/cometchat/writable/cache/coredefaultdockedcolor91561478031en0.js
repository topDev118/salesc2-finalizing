/*! jQuery v1.7.1 jquery.com | jquery.org/license */

if(typeof(jqcc) == "undefined")
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jqcc,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jqcc?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jqcc:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jqcc===e&&(a.jqcc=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jqcc"+(f.fn.jqcc+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jqcc?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jqcc\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jqcc&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jqcc=f,typeof define=="function"&&define.amd&&define.amd.jqcc&&define("jqcc",[],function(){return f})})(window);
/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/
 
if(typeof(jqcc) === 'undefined') {
	jqcc = jQuery;
}
// Copyright (c) 2006 Klaus Hartl (stilbuero.de)
// http://www.opensource.org/licenses/mit-license.php

jqcc.cookie=function(a,b,c){if(typeof b!='undefined'){c=c||{};if(b===null){b='';c.expires=-1}var d='';if(c.expires&&(typeof c.expires=='number'||c.expires.toUTCString)){var e;if(typeof c.expires=='number'){e=new Date();e.setTime(e.getTime()+(c.expires*24*60*60*1000))}else{e=c.expires}d='; expires='+e.toUTCString()}var f=c.path?'; path='+(c.path):'';var g=c.domain?'; domain='+(c.domain):'';var h=c.secure?'; secure':'';document.cookie=[a,'=',encodeURIComponent(b),d,f,g,h].join('')}else{var j=null;if(document.cookie&&document.cookie!=''){var k=document.cookie.split(';');for(var i=0;i<k.length;i++){var l=jqcc.trim(k[i]);if(l.substring(0,a.length+1)==(a+'=')){j=decodeURIComponent(l.substring(a.length+1));break}}}return j}};

// SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License
// http://www.opensource.org/licenses/mit-license.php

if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectCCUtil=="undefined"){deconcept.SWFObjectCCUtil=new Object();}deconcept.SWFObjectCC=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectCCUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObjectCC.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObjectCC.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectCCUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectCCUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObjectCC.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectCCUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectCCUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectCCUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObjectCC;var SWFObjectCC=deconcept.SWFObjectCC;


/**
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com
 * http://flesler.blogspot.com/2007/10/jqccscrollto.html
 */

(function($){var h=$.scrollToCC=function(a,b,c){$(window).scrollToCC(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jqcc)>=1.3?0:1};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return $.browser.safari||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollToCC=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.speed||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if((/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)) || (targ.charAt(0)=='-' && targ.charAt(1)!='=') ){targ=both(targ);break}targ=$(targ,this);case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jqcc);

/*
 jqcc.fullscreen 1.1.4
 https://github.com/kayahr/jqcc-fullscreen-plugin
 Copyright (C) 2012 Klaus Reimer <k@ailis.de>
 Licensed under the MIT license
 (See http://www.opensource.org/licenses/mit-license)
*/

function d(b){var c,a;if(!this.length)return this;c=this[0];c.ownerDocument?a=c.ownerDocument:(a=c,c=a.documentElement);if(null==b){if(!a.cancelFullScreen&&!a.webkitCancelFullScreen&&!a.mozCancelFullScreen)return null;b=!!a.fullScreen||!!a.webkitIsFullScreen||!!a.mozFullScreen;return!b?b:a.fullScreenElement||a.webkitCurrentFullScreenElement||a.mozFullScreenElement||b}b?(b=c.requestFullScreen||c.webkitRequestFullScreen||c.mozRequestFullScreen)&&(Element.ALLOW_KEYBOARD_INPUT?b.call(c,Element.ALLOW_KEYBOARD_INPUT):
b.call(c)):(b=a.cancelFullScreen||a.webkitCancelFullScreen||a.mozCancelFullScreen)&&b.call(a);return this}jqcc.fn.fullScreen=d;jqcc.fn.toggleFullScreen=function(){return d.call(this,!d.call(this))};var e,f,g;e=document;e.webkitCancelFullScreen?(f="webkitfullscreenchange",g="webkitfullscreenerror"):e.mozCancelFullScreen?(f="mozfullscreenchange",g="mozfullscreenerror"):(f="fullscreenchange",g="fullscreenerror");jqcc(document).bind(f,function(){jqcc(document).trigger(new jqcc.Event("fullscreenchange"))});
jqcc(document).bind(g,function(){jqcc(document).trigger(new jqcc.Event("fullscreenerror"))});

/* iContains changes*/
jqcc.expr[':'].icontains = function(a, i, m){
	return (a.textContent||a.innerText||"").toLowerCase().indexOf(m[3].toLowerCase())>=0;
};
/* ----- */

if (!Array.prototype.indexOf){Array.prototype.indexOf = function(elt){var len = this.length >>> 0;var from = Number(arguments[1]) || 0;from = (from < 0)? Math.ceil(from): Math.floor(from);if (from < 0)from += len;for (; from < len; from++){if (from in this && this[from] === elt)return from;}return -1;};}

/*-------GOOGLE ANALYTICS START--------*/
 /*-------GOOGLE ANALYTICS END--------*/


 /*-------- Stop Watch Plugin Start ----------*/
 (function($){$.extend({stopwatch:{formatTimer:function(a){if(a<10){a='0'+ a;}
return a;},startTimer:function(dir){var a;$.stopwatch.dir=dir;$.stopwatch.d1=new Date();switch($.stopwatch.state){case'pause':$.stopwatch.t1=$.stopwatch.d1.getTime()- $.stopwatch.td;break;default:$.stopwatch.t1=$.stopwatch.d1.getTime();if($.stopwatch.dir==='cd'){$.stopwatch.t1+=parseInt($('#cd_seconds').val())*1000;}
break;}
$.stopwatch.state='alive';$('#'+ $.stopwatch.dir+'_status').html('Running');$.stopwatch.loopTimer();},pauseTimer:function(){$.stopwatch.dp=new Date();$.stopwatch.tp=$.stopwatch.dp.getTime();$.stopwatch.td=$.stopwatch.tp- $.stopwatch.t1;$('#'+ $.stopwatch.dir+'_start').val('Resume');$.stopwatch.state='pause';$('#'+ $.stopwatch.dir+'_status').html('Paused');},stopTimer:function(){$('#'+ $.stopwatch.dir+'_start').val('Restart');$.stopwatch.state='stop';$('#'+ $.stopwatch.dir+'_status').html('Stopped');},resetTimer:function(){$('#'+ $.stopwatch.dir+'_ms,#'+ $.stopwatch.dir+'_s,#'+ $.stopwatch.dir+'_m,#'+ $.stopwatch.dir+'_h').html('00');$('#'+ $.stopwatch.dir+'_start').val('Start');$.stopwatch.state='reset';$('#'+ $.stopwatch.dir+'_status').html('Reset & Idle again');},endTimer:function(callback){$('#'+ $.stopwatch.dir+'_start').val('Restart');$.stopwatch.state='end';if(typeof callback==='function'){callback();}},loopTimer:function(){var td;var d2,t2;var ms=0;var s=0;var m=0;var h=0;if($.stopwatch.state==='alive'){d2=new Date();t2=d2.getTime();if($.stopwatch.dir==='sw'){td=t2- $.stopwatch.t1;}else{td=$.stopwatch.t1- t2;if(td<=0){$.stopwatch.endTimer(function(){$.stopwatch.resetTimer();$('#'+ $.stopwatch.dir+'_status').html('Ended & Reset');});}}
ms=td%1000;if(ms<1){ms=0;}else{s=(td-ms)/1000;
if(s<1){s=0;}else{var m=(s-(s%60))/60;
if(m<1){m=0;}else{var h=(m-(m%60))/60;
if(h<1){h=0;}}}}
ms=Math.round(ms/100);s=s-(m*60);m=m-(h*60);$('#'+ $.stopwatch.dir+'_ms').html($.stopwatch.formatTimer(ms));$('#'+ $.stopwatch.dir+'_s').html($.stopwatch.formatTimer(s));$('#'+ $.stopwatch.dir+'_m').html($.stopwatch.formatTimer(m));$('#'+ $.stopwatch.dir+'_h').html($.stopwatch.formatTimer(h));$.stopwatch.t=setTimeout($.stopwatch.loopTimer,1);}else{clearTimeout($.stopwatch.t);return true;}}}});})(jqcc);
/*-------- Stop Watch Plugin End ----------*/

var cc_zindex = 0;
var cc_windownames = [];

if(typeof closeCCPopup === "undefined") {
	var type = "core";
	var $name = "default";
	var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
	var eventer = window[eventMethod];
	var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

/* Listen to message from child window */
	switch(type){
		case "extension":
			eventer(messageEvent,function(e) {
				if(typeof(e.data) != 'undefined' && typeof(e.data) == 'string') {
					if(e.data.indexOf('CC^CONTROL_')!== -1){
						var controlparameters = e.data.slice(11);
						controlparameters = JSON.parse(controlparameters);
						if(controlparameters.type == 'extensions' && controlparameters.method == 'checkResponse'){
							var controlparameters = {"type":"extensions", "name":"mobilewebapp", "method":"clearTimeout", "params":{"timeOut":controlparameters.params.timeOut}};
							controlparameters = JSON.stringify(controlparameters);
							e.source.postMessage('CC^CONTROL_'+controlparameters,'*');
						}
					} else if(e.data.indexOf('ccmobilewebapp_reinitializeauth')!== -1){
						jqcc.mobilewebapp.reinitialize();
					}
				}
			},false);
		break;
		case "module":
			switch($name){
				case "chatrooms":
					eventer(messageEvent,function(e) {
						if(typeof(e.data) != 'undefined' && typeof(e.data) == 'string'){
							if(e.data.indexOf('CC^CONTROL_')!== -1){
								var controlparameters = e.data.slice(11);
								controlparameters = JSON.parse(controlparameters);
								if(controlparameters.name == 'cometchat' && controlparameters.method == 'processcontrolmessage'){
									/* Chatroom ProcessControlMessage Call */
									var message = jqcc[controlparameters.name][controlparameters.method](controlparameters.item);
									/* Return post Message incase of Chat History plugin */
									var returnparameters = {"message":message, "item":controlparameters.item, "processcontrolmessageResponse":1};
									e.source.postMessage(returnparameters,'*');
								} else if(controlparameters.name == "cometchat" && controlparameters.method == "setInternalVariable"){
									/* This will send setInternalVariable  call from Chatroom to main CometChat to set a variable for A/V Chat calls..  */
									var controlparameters = {"type":"plugins", "name":"cometchat", "method":"setInternalVariable", "params":{"type":controlparameters.params.type, "grp":controlparameters.params.grp, "value":controlparameters.params.value}};
										controlparameters = JSON.stringify(controlparameters);
									if(typeof(parent) != 'undefined'){
										parent.postMessage('CC^CONTROL_'+controlparameters,'*');
									}else{
										window.opener.postMessage('CC^CONTROL_'+controlparameters,'*');
									}
								} else if(controlparameters.name == "cometchat" && controlparameters.method == "chatWith") {
									/* chatWith call of Chatroom loadChatroomPro option to main CometChat. */
									var controlparameters = {"type":"modules", "name":"cometchat", "method":"chatWith", "params":{"uid":controlparameters.params.uid,"chatroommode":"0"}};
									controlparameters = JSON.stringify(controlparameters);
									window.opener.postMessage('CC^CONTROL_'+controlparameters,'*');
								} else if(controlparameters.name == "cometchat" && (controlparameters.method == "kickChatroomUser" || controlparameters.method == "banChatroomUser")){
									/* Chatroom Kick/Ban API calls. */
										jqcc[controlparameters.name][controlparameters.method](controlparameters.params.uid,0);
								} else if(controlparameters.method == "checkChatroomPass") {
									/* Call to checkChatroomPass API of chatroom incase of password protected chatrooms. */
									jqcc[controlparameters.name][controlparameters.method](controlparameters.params.id, controlparameters.params.name, controlparameters.params.silent, controlparameters.params.password, 0, 0, controlparameters.params.encryptPass,1);
								} else if(controlparameters.method == "closeCCPopup"){
									/* Chatroom plugins closeCCPopup call. */
									closeCCPopup(controlparameters.params.name);
								} else if(controlparameters.method == "checkCometChat"){
									/* This will set checkBarEnabled=1 if CometChat bar is present with embedded chatroom. */
									jqcc.cometchat.setChatroomVars('checkBarEnabled',controlparameters.params.enabled);
								} else if(controlparameters.type == "module" && controlparameters.name == "chatrooms" && controlparameters.method == "resizeCCPopup") {
									/* ResizeCCPopup call for all popups in Chatrooms */
									window[controlparameters.method](controlparameters.params.id, controlparameters.params.height, controlparameters.params.width);
								} else if(controlparameters.type == "themes" && controlparameters.method == "loggedout") {
									/* Run chatroom heartbeat after logout from Social Login. This will also Logout user from Chatrooms. */
									jqcc.cometchat.chatroomHeartbeat();
								} else if(controlparameters.name == "core") {
									loadCCPopup(controlparameters.params.url, controlparameters.params.name, controlparameters.params.properties, controlparameters.params.width, controlparameters.params.height, controlparameters.params.title, controlparameters.params.force, controlparameters.params.allowmaximize, controlparameters.params.allowresize, controlparameters.params.allowpopout, controlparameters.params.windowMode);
								} else {
									/* All remaining calls of Chatrooms API's. */
									jqcc[controlparameters.name][controlparameters.method](controlparameters.params);
								}
							}
						}
					},false);
				break;
			}
		break;
		case "plugin":
			switch($name){
				case "chathistory":
					eventer(messageEvent,function(e) {
						if(typeof(e.data)!= 'undefined' && e.data.processcontrolmessageResponse == 1){
							/* This will append Processed messages on Chathistory plugin popup. */
							jqcc("#"+e.data.item.id).find('.chatmessage.chatmessage_short').html(e.data.message);
							jqcc("#"+e.data.item.id).find('.chatmessage.chatnowrap').html(e.data.message);
						}
					},false);
				break;
			}
		break;
		default:
			eventer(messageEvent,function(e) {
				if(typeof(e.data) != 'undefined' && typeof(e.data) == 'string'){
					if(e.data.indexOf('ccmobile_reinitializeauth')!== -1){
						jqcc.ccmobiletab.reinitialize();
					}else if(e.data.indexOf('cc_reinitializeauth')!== -1){
						if(typeof(jqcc.cometchat.ping) != 'undefined') {
							jqcc.cometchat.reinitialize();
							jqcc('#cometchat_userstab').click();
							jqcc('#cometchat_auth_popup').removeClass('cometchat_tabopen');
							jqcc('#cometchat_optionsbutton').removeClass('cometchat_tabclick');
							if(jqcc('#cometchat_trayicon_chatrooms_iframe').length > 0){
								jqcc('#cometchat_trayicon_chatrooms_iframe').attr('src', jqcc('#cometchat_trayicon_chatrooms_iframe').attr('src'));
							}
						}
						if(jqcc('#cometchat_chatrooms_iframe').length > 0){
							jqcc('#cometchat_chatrooms_iframe').attr('src', jqcc('#cometchat_chatrooms_iframe').attr('src'));
						}
					}else if(e.data.indexOf('alert')!== -1 && e.data.indexOf('CC^CONTROL_') === -1){
						if(typeof(e.data.split('^')[1]) != 'undefined'){
							alert(e.data.split('^')[1]);
						}
					}else if(e.data.indexOf('webrtcNoti')!== -1){
						if(typeof(e.data.split('^')[1]) != 'undefined' && e.data.split('^')[1] == 'add'){
								jqcc(document).find('body').prepend('<div id="webrtcArrow" onclick="this.remove();" style="position:fixed;width:100%;height: 100%;margin: 0px;top: 0;left: 0;background: rgba(0,0,0,0.6);z-index: 90000000;text-align: center;"></div>');
						}
						if(typeof(e.data.split('^')[1]) != 'undefined' && e.data.split('^')[1] == 'remove'){
							jqcc(document).find("#webrtcArrow").remove();
						}
					}else if(e.data.indexOf('CC^CONTROL_')!== -1){
						var controlparameters = e.data.slice(11);
						controlparameters = JSON.parse(controlparameters);
						if(controlparameters.type == "extensions" && controlparameters.name == "jabber" && controlparameters.method == "login_gtalk"){
							if(jqcc('#cometchat_synergy_iframe').length > 0){
								jqcc('#cometchat_synergy_iframe').attr('src', jqcc('#cometchat_synergy_iframe').attr('src'));
							}
						} else if(controlparameters.type == "extensions" && controlparameters.name == "desktop" && controlparameters.method == "login"){
							if(typeof(localStorage)!="undefined"){
								localStorage.dm_id=controlparameters.params.dm_id;
							}
						} else if(controlparameters.type == "extensions" && controlparameters.name == "desktop" && controlparameters.method == "guest_login"){
							if(typeof(localStorage)!="undefined"){
								localStorage.guest_id=controlparameters.params.guest_id;
							}
						} else if(controlparameters.type == "core" && controlparameters.name == "cometchat" && controlparameters.method == "customlogout"){
							if(typeof(jqcc.cometchat.customlogout) == 'function') {
								jqcc.cometchat.customlogout();
							}
						}
						else if(controlparameters.type == "extensions" && controlparameters.name == "desktop" && controlparameters.method == "forgot_pass"){
							//Forgot Password link in DM
							gui.Shell.openExternal(controlparameters.params.forgot_url);
						}
						else if(controlparameters.type == "extensions" && controlparameters.name == "desktop" && controlparameters.method == "signup"){
							//Sign Up link in DM
							gui.Shell.openExternal(controlparameters.params.signup_url);
						}else if(controlparameters.type == "extensions" && controlparameters.name == "desktop" && controlparameters.method == "notification"){
							//notifications in DM
							if (Notification.permission !== "granted"){
								Notification.requestPermission();
							}
							else{
								var notification = new Notification(controlparameters.params.title + " " + controlparameters.params.uname, {icon: controlparameters.params.icon, body: controlparameters.params.message });
							}
						}else if(controlparameters.type == "extensions" && controlparameters.name == "desktop" && controlparameters.method == "logout"){  localStorage.dm_id=0;
							localStorage.guest_id=0;
						}else if(controlparameters.type == "extensions" && controlparameters.name == "mobilewebapp" && controlparameters.method == "clearTimeout"){
							clearTimeout(controlparameters.params.timeOut);
							mobiletabwindow.focus();
						} else if(controlparameters.type == "module" && controlparameters.name == "chatrooms" && controlparameters.method == "resizeCCPopup") {
							/* resizeCCPopup call for all CometChat popups */
							window[controlparameters.method](controlparameters.params.id, controlparameters.params.height, controlparameters.params.width);
						} else if(controlparameters.method == "closeCCPopup"){
							/* closeCCPopup call for all CometChat popups */
							closeCCPopup(controlparameters.params.name,controlparameters.params.roomid);
						}else if(controlparameters.method == "closeChatboxCCPopup"){
							/* closeCCPopup call for all CometChat popups */
							closeChatboxCCPopup(controlparameters.params.id,controlparameters.params.chatroommode);
						}
						 else if(controlparameters.type == "plugins" && controlparameters.name == "cometchat" && controlparameters.method == "processcontrolmessage"){
							/* call to Chathistory processControlMessage function. */
							var message = jqcc[controlparameters.name][controlparameters.method](controlparameters.item);
							/* Processed messages will be sent back to ChatHistory plugin window. */
							var returnparameters = {"message":message, "item":controlparameters.item, "processcontrolmessageResponse":1};
							e.source.postMessage(returnparameters,'*');
						} else if(controlparameters.type == "plugins" && controlparameters.name == "cometchat" && controlparameters.method == "setInternalVariable"){
							if(typeof(jqcc.cometchat)!='undefined')
							/* CometChat setInternalVariable call to set A/V chat, Broadcast plugins variables. */
							jqcc[controlparameters.name][controlparameters.method](controlparameters.params.type+'_'+controlparameters.params.grp,controlparameters.params.value);
						} else if(controlparameters.type == "modules" && controlparameters.name == "cometchat" && controlparameters.method == "addMessage") {
							/* Broadcast message module addMessage API call. */
							if(controlparameters.params.caller == "" || typeof(controlparameters.params.caller)=="undefined"){
								jqcc[controlparameters.name][controlparameters.method](controlparameters.params.from, controlparameters.params.message, controlparameters.params.messageId, controlparameters.params.nopopup);
							}else{
								var returnparameters = {"type":"modules", "name":"cometchat", "method":"addMessage", "params":{"from":parseInt(controlparameters.params.from), "message":controlparameters.params.message, "messageId":controlparameters.params.messageId, "nopopup":controlparameters.params.nopopup}};
								returnparameters = JSON.stringify(returnparameters);
								jqcc("#"+controlparameters.params.caller)[0].contentWindow.postMessage('CC^CONTROL_'+returnparameters,'*');
							}
						}  else if(controlparameters.type == "modules" && controlparameters.name == "cometchat" && controlparameters.method == "updateOfflinemessages") {
							var localid;
							var returnparameters = {};
							jqcc.each(controlparameters.params.ids,function(key,value) {
								localid = jqcc[controlparameters.name][controlparameters.method]({
									"id": value,
									"message":controlparameters.params.message
								});
								returnparameters[localid] = {'id':value};
							});
							returnparameters['message'] = controlparameters.params.message;
							returnparameters = JSON.stringify(returnparameters);
							e.source.postMessage('CC^CONTROL_'+returnparameters,'*');

						} else if(controlparameters.type == "modules" && controlparameters.name == "cometchat" && controlparameters.method == "deleteOfflinemessages") {
							var offlinemessages = jqcc.cometchat.getFromStorage('offlinemessagesqueue');
							if(offlinemessages.hasOwnProperty(controlparameters.params.localmessageid)) {
								delete offlinemessages[controlparameters.params.localmessageid];
								jqcc.cometchat.updateToStorage('offlinemessagesqueue',offlinemessages);
							}
							if(jqcc.isEmptyObject(jqcc.cometchat.getFromStorage('offlinemessagesqueue'))) {
								jqcc.cometchat.updateToStorage('offmsgcounter',{'lmid':0});
							}
						} else if(controlparameters.type == "modules" && controlparameters.name == "share") {
							/* setTitle API call of Transliterate plugin and Share Module. */
							if(controlparameters.method == "setTitle") {
								var parenttitle = document.title;
								var parenturl = document.location.href;
								var addthis_share =
								{
									url:parenturl,
									title:parenttitle,
									templates: {
										twitter: '{{title}}: {{url}}'
									}
								}
							} else if(controlparameters.method == "getParentURL") {
								var theUrl = window.location.href;
								var title = document.title;
								var returnparameters = {"theUrl":theUrl, "title": title};
								returnparameters = JSON.stringify(returnparameters);
								e.source.postMessage('CC^CONTROL_'+returnparameters,'*');
							}
						} else if(controlparameters.type == "modules" && controlparameters.method == "closeModule") {
							/* closeModule calls for Theme Changer and Translate Page modules. */
							if(controlparameters.name == "themechanger"){
								location.reload();
							} else if(controlparameters.name == "translate") {
								jqcc('#MSTTExitLink').click();
							}
							jqcc.cometchat.closeModule(controlparameters.name);
						} else if(controlparameters.type == "modules" && controlparameters.name == "translatepage") {
							/* Translate Page module function calls */
							if(typeof(controlparameters.params.lang) == 'undefined'){
								/* Call to addLanguageCode function */
								window[controlparameters.method]();
							} else {
								/* Call to changeLanguage function */
								window[controlparameters.method](controlparameters.params.lang);
							}
						} else if(controlparameters.type == "modules" && controlparameters.name == "realtimetranslate" && controlparameters.method == "setCookie") {
							/* realtimetranslate module calls */
							if(typeof(controlparameters.params.lang) != 'undefined'){
								document.cookie=controlparameters.params.name+'='+controlparameters.params.lang;
							}
						} else if(controlparameters.method == "checkChatroomPass") {
							/* Call to checkChatroomPass API of chatroom incase of password protected chatrooms for Synergy theme. */
							if((typeof(controlparameters.params.noBar) != 'undefined' && controlparameters.params.noBar == 1) || typeof(jqcc[controlparameters.name][controlparameters.method]) == 'undefined'){
								var returnparameters = {"type":controlparameters.type, "name":controlparameters.name, "method":controlparameters.method, "params":controlparameters.params};
					   			returnparameters = JSON.stringify(returnparameters);
								jqcc('#cometchat_trayicon_chatrooms_iframe,.cometchat_chatrooms_iframe,.cometchat_synergy_iframe')[0].contentWindow.postMessage('CC^CONTROL_'+returnparameters,'*');
							} else {
								jqcc[controlparameters.name][controlparameters.method](controlparameters.params.id, controlparameters.params.name, controlparameters.params.silent, controlparameters.params.password,controlparameters.params.clicked,0,controlparameters.params.encryptPass,1);
							}
						} else if(controlparameters.method == "previewCometChatMedia") {
							/* previewCometChatMedia function call for Embedded layout. */
							previewCometChatMedia(controlparameters.params, controlparameters.src);
						} else if(controlparameters.name == "core") {
							/* LoadCCPopup function call */
							/* LoadCCPopup function call for Synergy theme. */
							loadCCPopup(controlparameters.params.url, controlparameters.params.name, controlparameters.params.properties, controlparameters.params.width, controlparameters.params.height, controlparameters.params.title, controlparameters.params.force, controlparameters.params.allowmaximize, controlparameters.params.allowresize, controlparameters.params.allowpopout, controlparameters.params.windowMode);
						} else if(controlparameters.type == "modules" && controlparameters.name == "cometchat" && controlparameters.method == "lightbox") {
							/* jqcc.cometchat.lightbox API call in Embedded Synergy theme for all Modules. */
							if(typeof(controlparameters.params.caller)=="undefined"){
								jqcc[controlparameters.name][controlparameters.method](controlparameters.params.moduleName);
							}else{
								jqcc[controlparameters.name][controlparameters.method](controlparameters.params.moduleName,controlparameters.params.caller);
							}
						} else if(controlparameters.name == "cometchat" && typeof(controlparameters.params.allowed) == 'undefined') {
								/* controlparameters.params.allowed is used for Kick/Ban chatroom calls. */
								if(controlparameters.method == "sendMessage"){
									jqcc[controlparameters.name][controlparameters.method](controlparameters.params.uid,controlparameters.params.message);
								} else if(controlparameters.method == "launchModule" || controlparameters.method == "minimizeAll"){
		  							jqcc[controlparameters.name][controlparameters.method](controlparameters.params.uid);
		  						} else if(controlparameters.method == "startGuestChat"){
									jqcc[controlparameters.name][controlparameters.method](controlparameters.params.name);
								} else if(controlparameters.method == "chatWith"){
									/* controlparameters.params.allowed is used for Kick/Ban chatroom calls. */
									/* ChatWith (Private Chat) Call in Chatrooms */
									if(typeof(jqcc.cometchat) == 'undefined'){
										/* Incase of Embedded chatrooms with CometChat disabled return post message will be sent to chatroom window with extra parameter i.e; enabled=0. */
										var returnparameters = {"type":"modules", "name":"cometchat", "method":"checkCometChat", "params":{"enabled":"0"}};
					   					returnparameters = JSON.stringify(returnparameters);
					   					e.source.postMessage('CC^CONTROL_'+returnparameters,'*');
									} else if(typeof(controlparameters.params.caller) != "undefined" && controlparameters.params.caller != '') {
											var returnparameters = {"type":"modules", "name":"cometchat", "method":"chatWith", "params":{"uid":controlparameters.params.uid, "chatroommode":"0", "caller":""}};
											returnparameters = JSON.stringify(returnparameters);
											jqcc('#cometchat_synergy_iframe')[0].contentWindow.postMessage('CC^CONTROL_'+returnparameters,'*');
									} else {
										/* Incase of Embedded chatrooms with CometChat disabled return post message will be sent to chatroom window with extra parameter i.e; enabled=1. */
										if(typeof(controlparameters.params.synergy) == 'undefined' && typeof(controlparameters.params.caller) == 'undefined'){
											var returnparameters = {"type":"modules", "name":"cometchat", "method":"checkCometChat", "params":{"enabled":"1"}};
						   					returnparameters = JSON.stringify(returnparameters);
						   					e.source.postMessage('CC^CONTROL_'+returnparameters,'*');
					   					}
					   					if(typeof(jqcc[controlparameters.name][controlparameters.method])!="undefined")
					   					/* Call to ChatWith Function is CometChat bar is enabled. */
										jqcc[controlparameters.name][controlparameters.method](controlparameters.params.uid);
									}
								} else {
									/* LoadCCPopup calls for Chatrooms. */
									if(typeof(jqcc.cometchat) == 'undefined' || typeof(controlparameters.params.windowMode) != "undefined"){
										if(typeof(controlparameters.params.synergy) != "undefined"){
											/* Incase of Embedded Synergy without CometChat Bar, it will send postmessage to synergy iFrame with windowMode=1 to open loadChatroomPro in windowMode.*/
											/* This is handled in below else block.*/
											var returnparameters = {"type":"modules", "name":"cometchat", "method":"unbanChatroomUser", "params":{"url":controlparameters.params.url, "action":controlparameters.params.action, "lang":controlparameters.params.lang, "windowMode":1}};
											returnparameters = JSON.stringify(returnparameters);
											if(typeof(jqcc('#cometchat_synergy_iframe, #cometchat_chatrooms_iframe')[0]) != "undefined") {
												jqcc('#cometchat_synergy_iframe, #cometchat_chatrooms_iframe')[0].contentWindow.postMessage('CC^CONTROL_'+returnparameters,'*');
											}
										} else {
											/* Above postMessage Call to synergy theme to open loadChatroomPro in window mode. */
											controlparameters.params.url = controlparameters.params.url+'&noBar=1';
											loadCCPopup(controlparameters.params.url, controlparameters.params.action,"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=1, width=400,height=200",400,200,controlparameters.params.lang,null,null,null,null,1);
										}
									} else {
										/* LoadCCPopup call of Chatrooms with CometChat bar enabled. */
										loadCCPopup(controlparameters.params.url, controlparameters.params.action,"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=1, width=400,height=200",400,200,controlparameters.params.lang);
									}
								}
						}else if(controlparameters.type == "core" && controlparameters.name == "libraries"){
								if(controlparameters.method == 'incomingCall'){
									incomingCall(controlparameters.params.incoming, controlparameters.params.avchat_data, controlparameters.params.currenttime,controlparameters.params.userdata);
								}
								if(controlparameters.method == 'removeCallContainer'){
									removeCallContainer(controlparameters.params.id);
								}
								if(controlparameters.method == 'outgoingCall'){
									outgoingCall(controlparameters.params.id, controlparameters.params.grp,controlparameters.params.userdata);
								}
								if(controlparameters.method == 'toggleBotsAction'){
									toggleBotsAction(controlparameters.params);
								}
								if(controlparameters.method == 'showBotlist'){
									showBotlist();
								}
						} else if(controlparameters.type == "functions" && controlparameters.name == "socialauth") {
							/* Social Login call for Embedded Chatroom */
							if(jqcc('#cometchat_optionsbutton').length == 1){
								/* If CometChat bar is present, Social auth login popup of the bar will be opened. */
								jqcc('#cometchat_optionsbutton').click();
							} else if (jqcc('.cometchat_optionsimages_ccauth').length == 1) {
								jqcc('.cometchat_optionsimages_ccauth').click();
							} else {
								/* If CometChat bar is not present, Social Login popup will be opened in Window Mode to login to Embedded chatroom. */
								loadCCPopup(controlparameters.params.url, controlparameters.name,"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=0, width=420,height=250",300,200,jqcc.cometchat.getLanguage('login_options'),null,null,null,null,1);
							}
						} else if(controlparameters.name == "cometchat" && (controlparameters.method == "kickChatroomUser" || controlparameters.method == "banChatroomUser")){
							/* Chatroom Kick/Ban users call. */
							if(typeof(jqcc[controlparameters.name])=="undefined" || typeof(jqcc[controlparameters.name][controlparameters.method])=="undefined"){
								/* In case of embedded chatroom with CometChat bar disabled, a return post message will be sent to Chatroom iFrame which will call the API. */
								var returnparameters = {"type":controlparameters.type, "name":controlparameters.name, "method":controlparameters.method, "params":controlparameters.params};
								returnparameters = JSON.stringify(returnparameters);
								jqcc('#cometchat_chatrooms_iframe, #cometchat_trayicon_chatrooms_iframe, #cometchat_synergy_iframe')[0].contentWindow.postMessage('CC^CONTROL_'+returnparameters,'*');
							}else{
								/* Direct Kick/Ban API call for Synergy theme. */
								jqcc[controlparameters.name][controlparameters.method](controlparameters.params.uid,1);
							}
						} else if(controlparameters.type == "themes" && controlparameters.method == "loggedout") {
							/* Logout from Embedded Chatroom incase of Social Login. */
							if(typeof(jqcc.cometchat)!='undefined'){
								/* If CometChat bar is not enabled, it will only logout from embedded chatroom iFrame. */
								jqcc[jqcc.cometchat.getSettings().theme].loggedOut();
								jqcc.cometchat.setThemeVariable('loggedout', 1);
								clearTimeout(jqcc.cometchat.getCcvariable().heartbeatTimer);
							} else {
								/* If CometChat bar is enabled, it will send postMessage to Chatroom as Chatroom methods are not present in main CometChat. */
								var returnparameters = {"type":controlparameters.type, "name":controlparameters.name, "method":controlparameters.method, "params":controlparameters.params};
					   			returnparameters = JSON.stringify(returnparameters);
								e.source.postMessage('CC^CONTROL_'+returnparameters,'*');
							}
						} else {
							if(controlparameters.params.chatroommode == 1 && controlparameters.method != "init" && typeof(jqcc.cometchat) != 'undefined' && jqcc.cometchat.getSettings().theme != 'synergy' && jqcc.cometchat.getSettings().theme != 'embedded' && jqcc.cometchat.getSettings().theme != 'docked'){
								/* All themes chatroom calls except init calls and CometChat bar is enabled.*/
								if(controlparameters.method == "addtext" && typeof(controlparameters.params.caller) != "undefined" && controlparameters.params.caller != ""){
									/* If Smilies init is opened from Synergy theme chatrooms. Then selected smiley will be added in Synergy chatroom text area. */
					   				var returnparameters = {"type":controlparameters.type, "name":controlparameters.name, "method":controlparameters.method, "params":controlparameters.params};
					   				var caller = returnparameters.params.caller;
					   				delete returnparameters.params.caller;
					   				returnparameters = JSON.stringify(returnparameters);
					   				jqcc('#'+caller+', #cometchat_chatrooms_iframe')[0].contentWindow.postMessage('CC^CONTROL_'+returnparameters,'*');
					   			} else if(typeof(jqcc('#cometchat_trayicon_chatrooms_iframe, #cometchat_chatrooms_iframe, #cometchat_synergy_iframe')[0].contentWindow) != 'undefined'){
									jqcc('#cometchat_trayicon_chatrooms_iframe, #cometchat_chatrooms_iframe, #cometchat_synergy_iframe')[0].contentWindow.postMessage(e.data,'*');
								}
						   	} else {
						   		if(typeof(jqcc[controlparameters.name]) == 'undefined'){
						   			/* If CometChat bar is disabled it will ask Chatroom to open Popups in window mode.*/
						   			if(controlparameters.name != 'mobilewebapp'){
							   			var returnparameters = {"type":"plugins", "name":controlparameters.name, "method":controlparameters.method, "params":controlparameters.params};
							   			returnparameters.params.windowMode = "1";
										returnparameters = JSON.stringify(returnparameters);
										e.source.postMessage('CC^CONTROL_'+returnparameters,'*');
									}
						   		} else {
						   			/* All direct API calls of CometChat.*/
						   			if((controlparameters.method == "addtext" || controlparameters.method == "appendMessage" || controlparameters.method == "appendStickerMessage") && typeof(controlparameters.params.caller) != "undefined" && controlparameters.params.caller != ""){
						   				/* If Smilies/Stickers init is opened from Synergy theme. Then selected smiley will be added in Synergy chatroom text area. */
						   				var returnparameters = {"type":controlparameters.type, "name":controlparameters.name, "method":controlparameters.method, "params":controlparameters.params};
						   				var caller = returnparameters.params.caller;
						   				delete returnparameters.params.caller;
						   				returnparameters = JSON.stringify(returnparameters);
						   				if(typeof(jqcc('#'+caller)[0]) == 'undefined'){
						   					jqcc[controlparameters.name][controlparameters.method](controlparameters.params);
						   				}else{
						   					jqcc('#'+caller)[0].contentWindow.postMessage('CC^CONTROL_'+returnparameters,'*');
						   				}
									} else {
										if(window.top != window.self){
											controlparameters.params.windowMode = "1";
										}
						   				jqcc[controlparameters.name][controlparameters.method](controlparameters.params);
						   			}
						   		}
							}
						}
					}
				}
			},false);
		break;
	}
}


var cc_dragobj = new Object();

function loadCCPopup(url,name,properties,width,height,title,force,allowmaximize,allowresize,allowpopout,windowmode) {
	if(typeof url == "undefined" || typeof name == "undefined") return;
	url += url.indexOf('?')<0?'?':'&'+'embed=web';
	if(url.indexOf('basedata') < 0){
		var basedata = '';
		if(typeof(jqcc.cometchat) != 'undefined' && typeof(jqcc.cometchat.getBaseData) != 'undefined'){
			basedata = jqcc.cometchat.getBaseData();
		}
		url += '&basedata='+basedata;
	}
	var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|blackberry|palm|symbian/i);
	if(typeof(windowmode) != "undefined" && windowmode == 1) {
		url += '&popoutmode=1';
		if(typeof(jqcc.cometchat)!="undefined" && typeof(jqcc.cometchat.getCcvariable) != "undefined" && jqcc.cometchat.getCcvariable().callbackfn=='desktop'){
			var b=properties.split(',');
			var i;
			var nw=0;
			var nh=0;
			for(i=0;i<b.length;i++){
				if(b[i].indexOf('height')!=-1){
				  var h=b[i].split('=');
				  nh=h[1];
				}
				if(b[i].indexOf('width')!=-1){
				  var w=b[i].split('=');
				  nw=w[1];
				}
			}
			nh=parseInt(nh)+30;//For Desktop Messenger, module &plugin height issue
			nw=parseInt(nw)+15;//For Desktop Messenger, module &plugin width issue
			cc_windownames['cc_'+name] = window.open(url,'cc_'+name,properties);
			if(typeof(cc_windownames['cc_'+name]) != null && typeof(cc_windownames['cc_'+name]) != 'undefined'){
				cc_windownames['cc_'+name].document.title='cc_'+name;
				cc_windownames['cc_'+name].resizeTo(nw,nh);
				cc_windownames['cc_'+name].focus();
			}else{
				delete(cc_windownames['cc_'+name]);
				alert("Please allow browser pop ups for "+location.origin);
			}
		}else{
			cc_windownames['cc_'+name] = window.open(url,'cc_'+name,properties);
			if(typeof(cc_windownames['cc_'+name]) != null && typeof(cc_windownames['cc_'+name]) != 'undefined'){
				cc_windownames['cc_'+name].focus();
			}else{
				delete(cc_windownames['cc_'+name]);
				alert("Please allow browser pop ups for "+location.origin);
			}
		}
	} else {
		var dragcss = 'onmousedown="dragStart(event, \'cometchat_container_'+name+'\')"';
		var dividerhtml = '';
		theme = jqcc.cometchat.getSettings().theme;
		url += '&cc_layout='+theme;
		if (jqcc('#cometchat_container_'+name).length > 0) {
			alert(jqcc.cometchat.getLanguage('close_existing_popup'));

			setTimeout(function() {
				cc_zindex += 1;
				jqcc('#cometchat_container_'+name).css('z-index',1000000+cc_zindex);
			}, 100);
			return;
		}
		var top = ((jqcc(window).height() - height) / 2) ;
		var bottom = top;
		var left = ((jqcc(window).width() - width) / 2) + jqcc(window).scrollLeft();

		if (top < 0) { top = 0; }
		if (left < 0) { left = 0; }

		top = 'top:'+top+'px;';
		left = 'left:'+left+'px;';

		if(mobileDevice){
			widthMinBorder = jqcc(window).width()+'px';
		}else{
			widthMinBorder = (width-2)+'px;';
		}

		if (jqcc(document).fullScreen() !== null && allowmaximize == 1 && window.top == window.self) {
			displaymaxicon='style="display:inline-block;"';
		} else {
			displaymaxicon='style="display:none;"';
		}

		if (allowpopout == 1) {
			displaypopicon='style="display:inline-block;"';
		} else {
			displaypopicon='style="display:none;"';
		}
		if(allowmaximize == 1 || allowpopout == 1){
			dividerhtml = '<div class="cometchat_vline"></div>';
		}
		var windowtype = '';
		var cometchat_windows_class = '';
		var borderstyle = '';
		var position = 'position:fixed;';
		var rtl = "0";
		if(theme == 'embedded'){
			position = 'position:absolute;';
			if(rtl == 1){
				borderstyle = ' border-right:1px solid #D1D1D1; ';
				left = 'right:100%;';
			}else{
				borderstyle = ' border-left:1px solid #D1D1D1; ';
				left = 'left:100%;';
			}
			height = jqcc(window).height() - jqcc('#cometchat_header').height() - 40;
			windowtype = 'cometchat_left_container_title';
			if(jqcc('#cometchat_righttab').css('top') == "0px" || jqcc('#cometchat_header').length != 1){
				top = 'top:0px;';
				height = jqcc(window).height() - 40;
			}else{
				top = 'top:73px;';
				height = jqcc(window).height() - jqcc('#cometchat_header').height() - 40;
			}

			if(name == 'blocks' ){
				cometchat_windows_class = 'cometchat_windows';
				width = '300';
				top = 'top: 0px;';
				var leftpos = jqcc(window).width()-302;
				if(rtl == 1){
					left = 'right:100%;';
				}else{
					left = 'left:'+leftpos.toString()+'px;';
				}
				height = jqcc(window).height();
			}else{
				width = '500';
			}
			if(name == 'passwordBox'){
				height = 110;
				width = 322;
				var centerleft = (jqcc(window).width()/2) - (width/2);
				var centertop = (jqcc(window).height()/2) - (height/2);
				left = 'left:'+centerleft+'px;';
				top = 'top:'+centertop+'px;';
			}else{
				dragcss = '';
			}
		}

		jqcc("body").append('<div id="cometchat_container_'+name+'" class="cometchat_container '+cometchat_windows_class+'" style="'+top+left+'width:'+width+'px;'+position+'"><div class="cometchat_container_title '+windowtype+'"  '+dragcss+'><span class="cometchat_container_name">'+title+'</span><div class="cometchat_closebox cometchat_tooltip" title="'+jqcc.cometchat.getLanguage('close_popup')+'" id="cometchat_closebox_'+name+'" style="font-weight: normal;"></div>'+dividerhtml+'<div '+displaymaxicon+' class="cometchat_maxwindow cometchat_tooltip" title="Maximize Popup" id="cometchat_maxwindow_'+name+'"></div><div '+displaypopicon+' class="cometchat_popwindow cometchat_tooltip" title="Popout" id="cometchat_popwindow_'+name+'"></div><div style="clear:both"></div></div><div class="cometchat_container_body" style="'+borderstyle+'height:'+(height)+'px;"><div class="cometchat_loading"></div><iframe class="cometchat_iframe" id="cometchat_trayicon_'+name+'_iframe" width="100%" height="'+(height)+'"  allowtransparency="true" frameborder="0"  scrolling="no" src="'+url+'" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe><div class="cometchat_overlay" style="height:'+(height)+'px;"></div><div style="clear:both"></div></div></div>');
		var cometchat_container = jqcc('#cometchat_container_'+name);
		var left = cometchat_container.offset().left;
		var animatewidth;
		if(theme == 'embedded'){
			jqcc('#cometchat_container_'+name).css('width',width);
			if(jqcc('.cometchat_windows').hasClass('visible')){
				jqcc('.cometchat_container').each(function(){
					if(jqcc('#'+this.id).hasClass('cometchat_windows') && jqcc('#'+this.id).hasClass('visible')){
						jqcc('#'+this.id).remove();
					}
				});
				if(rtl == 1){
					jqcc('.cometchat_windows').animate({'right':'100%'},"fast").removeClass('visible');
				}else{
					jqcc('.cometchat_windows').animate({'left':'100%'},"fast").removeClass('visible');
				}
			}
			if (cometchat_container.hasClass('visible')){
				if(rtl == 1){
					cometchat_container.animate({"left":"-300px"}, "fast").removeClass('visible');
				}else{
					cometchat_container.animate({"left":"100%"}, "fast").removeClass('visible');
				}
			}else{
				if(name == 'blocks'){
					if(rtl == 1){
						cometchat_container.css({right:'100%'}).animate({"right":jqcc(document).width()-300+'px'}, "fast").addClass('visible');
					}else{
						cometchat_container.css({left:left}).animate({"left":jqcc(document).width()-300+'px'}, "fast").addClass('visible');
					}
				}else{
					animatewidth = jqcc(window).width()-cometchat_container.width();
					var reducesize = cometchat_container.width();
					if(name != 'passwordBox'){
						if(!jqcc('.cometchat_windows').hasClass('visible') && !jqcc('.cometchat_container').hasClass('visible')){
							if(jqcc("#cometchat_righttab").width()-cometchat_container.width() <= 400 && jqcc('#cometchat_righttab').width()!=jqcc(window).width()){
								var textareasize = 200;
								if(jqcc(window).width() < 850){
									cometchat_container.width(400);
									reducesize = 400;
									textareasize = 100;
									animatewidth = jqcc(window).width() - cometchat_container.width();
								}
								if(rtl == 1){
									jqcc('#cometchat_righttab').css({'position':'absolute','right':'301px','width':jqcc('#cometchat_righttab').width()});
									jqcc('#cometchat_leftbar').css({'position':'absolute','right':'0'});
									jqcc("#cometchat_righttab").animate({'right':'-=300px','width':(jqcc(window).width()-cometchat_container.width())},500);
									jqcc("#cometchat_righttab").find(".cometchat_textarea").animate({'width':'-='+ textareasize},500);
									jqcc('#cometchat_leftbar').animate({'right':'-=300px'},500);
									cometchat_container.animate({"right":'-='+reducesize}, 500).addClass('visible');
								}else{
									jqcc('#cometchat_righttab').css({'position':'absolute','left':'301px','width':jqcc('#cometchat_righttab').width()});
									jqcc('#cometchat_leftbar').css({'position':'absolute','left':'0'});
									jqcc("#cometchat_righttab").animate({'left':'-=300px','width':(jqcc(window).width()-cometchat_container.width())},500);
									jqcc("#cometchat_righttab").find(".cometchat_textarea").animate({'width':'-='+ textareasize},500);
									jqcc('#cometchat_leftbar').animate({'left':'-=300px'},500);
									cometchat_container.css({left:left}).animate({"left":'-='+reducesize}, 500).addClass('visible');
								}
							}else if(jqcc('#cometchat_righttab').width()==jqcc(window).width()){
								animatewidth = '0';
								if(embeddedchatroomid >= 1 && jqcc(window).width() > 800){
									cometchat_container.width(jqcc(window).width()/2);
									reducesize = jqcc(window).width()/2;
									animatewidth = jqcc(window).width() - cometchat_container.width();
									jqcc("#cometchat_righttab").animate({'width':jqcc("#cometchat_righttab").width()-reducesize+'px'},"fast");
									jqcc("#cometchat_righttab").find(".cometchat_textarea").animate({'width':jqcc("#cometchat_righttab").width() - (reducesize + 140) + 'px'},"fast");
								}else{
									cometchat_container.width(jqcc(window).width());
									reducesize = jqcc(window).width();
								}
								if(rtl == 1){
									if(name == 'singleplayergame'){
										cometchat_container.css({left:"0px"});
									}else{
										cometchat_container.animate({"right":'-='+reducesize}, 500).addClass('visible');
									}
								}else{
									if(name == 'singleplayergame'){
										cometchat_container.css({left:"0px"});
									}else{
										cometchat_container.css({left:left}).animate({"left":'-='+reducesize}, 500).addClass('visible');
									}
								}
							}else{
								jqcc("#cometchat_righttab").animate({'width':'-='+reducesize},500);
								jqcc("#cometchat_righttab").find(".cometchat_textarea").animate({'width':'-='+reducesize},500);
								if(rtl == 1){
									cometchat_container.animate({"right":'-='+reducesize}, 500).addClass('visible');
								} else{
									cometchat_container.css({left:left}).animate({"left":'-='+reducesize}, 500).addClass('visible');
								}

							}
						}else if(jqcc('.cometchat_container').hasClass('visible')){
							width = jqcc('.visible').width();
							cometchat_container.width(width);
							animatewidth = jqcc(window).width() - width;
							jqcc('.cometchat_container').filter('.visible').remove().removeClass('visible');
							if(rtl == 1){
								cometchat_container.animate({"right":animatewidth}, 500).addClass('visible');
							}else{
								cometchat_container.css({left:left}).animate({"left":animatewidth}, 500).addClass('visible');
							}
						}
					}else{
						cometchat_container.find('.cometchat_container_body').css({'border-right':'1px solid #D1D1D1','border-bottom':'1px solid #D1D1D1'});
					}
				}
			}
		} else if(theme == 'docked'){

			if (cometchat_container.hasClass('visible')){
				cometchat_container.animate({"bottom":"100%"}, "fast").removeClass('visible');
			}else{
				bottom = bottom+'px';
				cometchat_container.animate({"bottom":bottom}, "fast").addClass('visible');
			}
		}
		setTimeout(function() {
			cc_zindex += 1;
			jqcc('#cometchat_container_'+name).css('z-index',10000000000+cc_zindex);
		}, 100);

		cometchat_container.find('.cometchat_closebox').click(function() {
			if(theme == 'embedded') {
				var id = this.id;
				id = id.split('_');
				id = id[2];
				setTimeout(function() {
					if(id == 'blocks'){
						if(rtl == 1){
							cometchat_container.animate({"right":"100%"}, "fast").removeClass('visible');
						}else{
							cometchat_container.animate({"left":"100%"}, "fast").removeClass('visible');
						}
					}else{
						if(rtl == 1){
							cometchat_container.animate({"right":"+="+cometchat_container.width()}, 500).removeClass('visible');
						}else{
							cometchat_container.animate({"left":"+="+cometchat_container.width()}, 500).removeClass('visible');
						}

						jqcc("#cometchat_tooltip").css('display', 'none');
						var windowwidth = cometchat_container.width();

						if(name != 'passwordBox'){
							if(jqcc("#cometchat_righttab").width()+cometchat_container.width() >= (jqcc(window).width()-2)){
								var increasesize = (jqcc(window).width() - jqcc("#cometchat_leftbar").width()) - jqcc('#cometchat_righttab').width();
								if(embeddedchatroomid > 0){
									jqcc("#cometchat_righttab").find(".cometchat_textarea").animate({'width':jqcc(document).width() - 140 + 'px'},"fast");
								}else{
									jqcc("#cometchat_righttab").find(".cometchat_textarea").animate({'width':jqcc("#cometchat_righttab").width() + 60 + 'px'},"fast");
								}
								if(rtl == 1){
									jqcc("#cometchat_righttab").animate({'right':'+='+jqcc("#cometchat_leftbar").width(),'width':'+='+increasesize},500);
									jqcc("#cometchat_leftbar").animate({'right':'+='+jqcc("#cometchat_leftbar").width()},500);
								}else{
									jqcc("#cometchat_righttab").animate({'left':'+='+jqcc("#cometchat_leftbar").width(),'width':'+='+increasesize},500);
									jqcc("#cometchat_leftbar").animate({'left':'+='+jqcc("#cometchat_leftbar").width()},500);
								}

								setTimeout(function(){
									jqcc('#cometchat_righttab').removeAttr('style');
									jqcc('#cometchat_leftbar').removeAttr('style');
								},1000);
							}else if(jqcc('#cometchat_righttab').width()==jqcc(window).width()){
								if(rtl == 1){
									cometchat_container.css({right:left}).animate({"right":'+='+jqcc(document).width()}, 500).addClass('visible');
								}else{
									cometchat_container.css({left:left}).animate({"left":'+='+jqcc(document).width()}, 500).addClass('visible');
								}
							}else{
								jqcc("#cometchat_righttab").animate({'width':'+='+windowwidth},500);
								jqcc("#cometchat_righttab").find(".cometchat_textarea").animate({'width':jqcc("#cometchat_righttab").width() +(windowwidth - 140) + 'px'},"fast");
							}
						}
					}
				},400);
			} else {
				cometchat_container.animate({"bottom":"100%"}, "fast").removeClass('visible');
				jqcc("#cometchat_tooltip").css('display', 'none');
			}

			setTimeout(function() {
				cometchat_container.remove();
			},1000);
			window.onbeforeunload = null;
		});

		if (jqcc(document).fullScreen() !== null && allowmaximize ==1) {
			cometchat_container.find('.cometchat_iframe').addClass('cometchat_iframe_'+name);
				cometchat_container.find('.cometchat_maxwindow').click(function() {
					if(window.top == window.self){
						jqcc('.cometchat_iframe_'+name).toggleFullScreen(true);
					}else{
						jqcc('.cometchat_iframe').contents().find('.cometchat_iframe_'+name).toggleFullScreen(true);
					}
				if (name =='whiteboard') {
					jqcc('#cometchat_container_whiteboard').find('.cometchat_iframe').contents().find('#whiteboard').width(screen.width);
					jqcc('#cometchat_container_whiteboard').find('.cometchat_iframe').contents().find('#whiteboard').height(screen.height);
				}
				jqcc("#cometchat_tooltip").css('display', 'none');
			});
		}

		if (allowpopout == 1) {
			cometchat_container.find('.cometchat_popwindow').click(function() {
				var title = cometchat_container.find('.cometchat_container_name').text();
				loadCCPopup(url,name,'width='+width+',height='+height+' scrollbars=yes, resizable=yes',width,height,title,force,0,0,0,1)
				var calculatedwidth = parseInt(jqcc("#cometchat_righttab").width())+parseInt(width);
				if(jqcc('#cometchat_righttab').width()!=jqcc(window).width()){
					if(jqcc('#cometchat_leftbar').css('left') != 'auto'){
						jqcc('#cometchat_righttab').removeAttr('style');
						jqcc('#cometchat_leftbar').removeAttr('style');
						jqcc("#cometchat_righttab").find(".cometchat_textarea").animate({'width':jqcc("#cometchat_righttab").width() - 140 + 'px'},"fast");
						jqcc('#cometchat_leftbar').animate({'left':'0px'},"fast");
					}else{
						jqcc("#cometchat_righttab").animate({'width':calculatedwidth},"fast");
						jqcc("#cometchat_righttab").find(".cometchat_textarea").animate({'width':jqcc("#cometchat_righttab").width() +(width - 140) + 'px'},"fast");
					}
				}
				jqcc.cometchat.setInternalVariable('avchatpopoutcalled','1');
				cometchat_container.remove();
				jqcc("#cometchat_tooltip").css('display', 'none');
			});
		}

		cometchat_container.click(function() {
			cc_zindex += 1;
			jqcc(this).css('z-index',10000000000+cc_zindex);
		});
	}
}

var closeCCPopup = closeCCPopup || function (name,roomid) {
	var theme = jqcc.cometchat.getSettings().theme;
	if(theme == 'docked') {
		jqcc('#cometchat_group_'+roomid+'_popup').find('.cometchat_backbutton_viewgroupuserspopup').click();
		jqcc('#cometchat_container_'+name).animate({"bottom":"100%"}, "fast").removeClass('visible');
	} else {
		jqcc('#cometchat_container_'+name).animate({"left":"100%"}, "fast").removeClass('visible');
		jqcc('#cometchat_container_'+name).find('.cometchat_closebox').click();
	}
	jqcc("#cometchat_tooltip").css('display', 'none');

	setTimeout(function() {
		if(jqcc('#cometchat_container_'+name).length >0){
			jqcc('#cometchat_container_'+name).remove();
		}
		if(typeof(cc_windownames['cc_'+name]) != null && typeof(cc_windownames['cc_'+name]) != 'undefined'){
			cc_windownames['cc_'+name].close();
		}
	},500);
}

function resizeCCPopup(id,width,height) {
	jqcc('#cometchat_container_'+id).css('width',width+2+'px').find('.cometchat_container_body').css({'height':height, 'width':width});
	jqcc('#cometchat_container_'+id).find('.cometchat_iframe').attr({'height':height, 'width':width});
}

function getID(id) { return document.getElementById(id); }

function dragStart(a,b){
	cc_zindex += 1;jqcc('#'+b).css('z-index',10000000000+cc_zindex);
	jqcc('#'+b).find('.cometchat_overlay').css('display','block');var x,y;cc_dragobj.elNode=getID(b);try{x=window.event.clientX+document.documentElement.scrollLeft+document.body.scrollLeft;y=window.event.clientY+document.documentElement.scrollTop+document.body.scrollTop}catch(e){x=a.clientX+window.scrollX;y=a.clientY+window.scrollY}cc_dragobj.cursorStartX=x;cc_dragobj.cursorStartY=y;cc_dragobj.elStartLeft=parseInt(cc_dragobj.elNode.style.left,10);cc_dragobj.elStartTop=parseInt(cc_dragobj.elNode.style.top,10);if(isNaN(cc_dragobj.elStartLeft))cc_dragobj.elStartLeft=0;if(isNaN(cc_dragobj.elStartTop))cc_dragobj.elStartTop=0;try{document.attachEvent("onmousemove",dragGo);document.attachEvent("onmouseup",dragStop);window.event.cancelBubble=true;window.event.returnValue=false}catch(e){document.addEventListener("mousemove",dragGo,true);document.addEventListener("mouseup",dragStop,true);a.preventDefault()}}

function dragGo(a){var x,y;try{x=window.event.clientX+document.documentElement.scrollLeft+document.body.scrollLeft;y=window.event.clientY+document.documentElement.scrollTop+document.body.scrollTop}catch(e){x=a.clientX+window.scrollX;y=a.clientY+window.scrollY}var b=(cc_dragobj.elStartLeft+x-cc_dragobj.cursorStartX);var c=(cc_dragobj.elStartTop+y-cc_dragobj.cursorStartY);if(b>0){cc_dragobj.elNode.style.left=b+"px"}else{cc_dragobj.elNode.style.left="1px"}if(c>0){cc_dragobj.elNode.style.top=c+"px"}else{cc_dragobj.elNode.style.top="1px"}try{window.event.cancelBubble=true;window.event.returnValue=false}catch(e){a.preventDefault()}}

function dragStop(event){jqcc('.cometchat_overlay').css('display','none');try{document.detachEvent("onmousemove",dragGo);document.detachEvent("onmouseup",dragStop)}catch(e){document.removeEventListener("mousemove",dragGo,true);document.removeEventListener("mouseup",dragStop,true)}}


function loadPopupInChatbox(url,name,fromid,toid,chatroommode) {
	if(typeof url != "undefined" && typeof name != "undefined") {
		url += url.indexOf('?')<0?'?':'&'+'basedata='+jqcc.cometchat.getBaseData()+'&embed=web';
		if(chatroommode==1){
			url += '&chatroommode=1';
		}
		theme = jqcc.cometchat.getSettings().theme;

		if(theme == 'embedded'){
			var iOSmobileDevice = navigator.userAgent.match(/ipad|ipod|iphone/i);
			var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|blackberry|palm|symbian/i);
			if(url.split("?")[1].split("&").indexOf('caller=cometchat_synergy_iframe') > 0){
				theme = 'synergy';
			}
			url += '&cc_layout='+theme;
			if (jqcc('#cometchat_container_'+name).length > 0) {
				alert(jqcc.cometchat.getLanguage('close_existing_popup'));

				setTimeout(function() {
					cc_zindex += 1;
					jqcc('#cometchat_container_'+name).css('z-index',10000000000+cc_zindex);
				}, 100);
				return;
			}
			var width = jqcc('#currentroom_convo').innerWidth();
			var height = jqcc('#cometchat_righttab').find('.cometchat_tabpopup').innerHeight()/2;
			if(height == 0 || height == null || width == 0 || width == null){
				width = jqcc('#cometchat_user_'+toid+'_popup').innerWidth();
				height = jqcc('#cometchat_user_'+toid+'_popup').innerHeight() / 2;
			}
			var top = ((jqcc(window).height() - height) / 2) ;
			var left = ((jqcc(window).width() - width) / 2) + jqcc(window).scrollLeft();

			if (top < 0) { top = 0; }
			if (left < 0) { left = 0; }


			top = 'top:'+top+'px;';
			left = 'left:'+left+'px;';


			if(mobileDevice){
				widthMinBorder = jqcc(window).width()+'px';
			}else{
				widthMinBorder = (width-2)+'px;';
			}

			if(chatroommode == 1){
				var textfieldheight = jqcc('#cometchat_righttab').find('#cometchat_tabinputcontainer').outerHeight(true)+1;
				var messagecontainer = jqcc('#cometchat_righttab').find('#currentroom_convo');
			}else{
				var textfieldheight = jqcc('#cometchat_user_'+toid+'_popup').find('#cometchat_tabinputcontainer').outerHeight(true)+1;
				var messagecontainer = jqcc('#cometchat_righttab').find('#cometchat_tabcontenttext_'+toid);
			}
			var windowtype = '';
			var offset;
			if(name == 'stickers' || name == 'handwrite' || name == 'smilies' || name == 'transliterate' || name == 'voicenote'){
				top = 'top:100%;';
				offset = jqcc('#cometchat_righttab').offset();
				left = 'left:'+offset.left+'px';
				bottom = 'bottom:-200px;';
			}else{
				windowtype = 'cometchat_left_container_title';
				top = 'top:0px;';
				left = 'left:100%';
			}
			width = width - 1;  /* border overlap fix when side plugin is opened */
			jqcc("body").append('<div id="cometchat_container_'+name+'" class="cometchat_container" style="'+bottom+left+'width:'+width+'px;'+'height:200px;"><div class="cometchat_container_body" style="border-top:0.5px solid #D1D1D1;height:200px;"><div class="cometchat_loading"></div><iframe class="cometchat_iframe" id="cometchat_trayicon_'+name+'_iframe" width="100%" height="200px"  allowtransparency="true" frameborder="0"  scrolling="no" src="'+url+'" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe><div class="cometchat_overlay" style="height:'+(height)+'px;"></div><div style="clear:both"></div></div></div>');
			var hidden = jqcc('#cometchat_container_'+name);
			var containerHeight = '200';
			if(jqcc('.cometchat_windows').hasClass('visible')){
				jqcc('.cometchat_windows').animate({'left':'100%'},"fast").removeClass('visible');
			}
			if(name == 'stickers' || name == 'handwrite' || name == 'smilies' || name == 'transliterate' || name == 'voicenote'){
				hidden.css('left',offset.left+'px');
				hidden.css('width',width+'px');
				if (!hidden.hasClass('visible')){
					jqcc('.cometchat_message_container').css('height',jqcc('.cometchat_message_container').height() - jqcc('.cometchat_container').height());
					hidden.css({"bottom":textfieldheight+"px",display:"none"}).addClass('visible').slideDown("slow");
					if(typeof (jqcc[theme].windowResize()) == 'function'){
						jqcc[theme].windowResize();
					}
				}
			}
			setTimeout(function() {
				cc_zindex += 1;
				jqcc('#cometchat_container_'+name).css('z-index',10000000000+cc_zindex);
			}, 100);

			var cometchat_container = jqcc('#cometchat_container_'+name);
			cometchat_container.find('.cometchat_closebox_down').click(function() {
				cometchat_container.animate({"bottom":"-200px"}, "fast").removeClass('visible');
				jqcc("#cometchat_tooltip").css('display', 'none');
				setTimeout(function() {
					cometchat_container.remove();
				},500);
				window.onbeforeunload = null;
			});

		}else{
			if(chatroommode==1){
				var popup = jqcc('#cometchat_chatboxes #cometchat_group_'+toid+'_popup');
			} else {
				var popup = jqcc('#cometchat_chatboxes #cometchat_user_'+toid+'_popup');
			}

			var width = popup.find('.cometchat_tabcontenttext').innerWidth();
			var height = popup.find('.cometchat_tabcontenttext').innerHeight() / 2;

			var bottom = 0;
			var left = 0;
			var currentopenpopup = popup.find('.cometchat_tabcontent .cometchat_chatboxpopup_'+toid).attr('pluginname');

			bottom = 'bottom:'+bottom+'px;';
			left = 'left:'+left+'px;';

			widthMinBorder = (width-2)+'px;';

			if(name=='smilies') {
				closeChatboxCCPopup(toid,chatroommode);
				height = popup.find('.cometchat_tabcontenttext').innerHeight() / 2;
			}

			if(popup.find('.cometchat_tabcontent .cometchat_chatboxpopup_'+toid).length && name!='smilies') {
				closeChatboxCCPopup(toid,chatroommode);
			} else if(currentopenpopup!=name) {
				var height1 = (popup.find('.cometchat_tabcontenttext').innerHeight()-height)+'px';
				popup.find('.cometchat_tabcontenttext').height(height1);
				if(popup.find('.cometchat_tabcontenttext').parent().hasClass('slimScrollDiv')){
					popup.find('.cometchat_tabcontenttext').parent().height(height1);
					jqcc.docked.scrollDown(toid);
				}
				popup.find(".cometchat_tabcontent").append('<div id="cometchat_container_'+name+'_'+toid+'" class="cometchat_container cometchat_chatboxpopup_'+toid+'" style="'+bottom+left+'width:100%" pluginname="'+name+'"><div class="cometchat_container_body" style="height:'+(height)+'px;"><div class="cometchat_loading"></div><iframe class="cometchat_iframe" id="cometchat_trayicon_'+name+'_iframe" width="100%" height="'+(height)+'"  allowtransparency="true" frameborder="0"  scrolling="no" src="'+url+'"></iframe></div></div>');
				popup.find('.cometchat_container_body').css('border',0);

				if(name=='stickers'){
					/*var userpopup = window.parent.document.getElementById('cometchat_user_'+toid+'_popup');
					userpopup.find('#cometchat_plugins_openup_icon_13').removeClass('cometchat_pluginsopenup_arrowrotate');*/

					window.parent.jqcc('#cometchat_user_'+toid+'_popup').find('#cometchat_plugins_openup_icon_'+toid).removeClass('cometchat_pluginsopenup_arrowrotate');
				}

				if(chatroommode == 1){
					popup.find('#cometchat_groupplugins_openup_icon_'+toid).addClass('cometchat_pluginsopenup_arrowrotate');
				} else {
					popup.find('#cometchat_plugins_openup_icon_'+toid).addClass('cometchat_pluginsopenup_arrowrotate');
				}
			}

			setTimeout(function() {
				cc_zindex += 1;
				jqcc('#cometchat_container_'+name).css('z-index',10000000000+cc_zindex);
			}, 100);

			var cometchat_container = jqcc('#cometchat_container_'+name);
			cometchat_container.find('.cometchat_closebox').click(function() {
				cometchat_container.remove();
				jqcc("#cometchat_tooltip").css('display', 'none');
				window.onbeforeunload = null;
			});
		}
	}
}

var closeChatboxCCPopup = closeChatboxCCPopup || function (id,chatroommode) {
	if(chatroommode == 1){
		var popup = jqcc('#cometchat_chatboxes #cometchat_group_'+id+'_popup');
		popup.find('#cometchat_groupplugins_openup_icon_'+id).removeClass('cometchat_pluginsopenup_arrowrotate');
	} else {
		var popup = jqcc('#cometchat_chatboxes #cometchat_user_'+id+'_popup');
		popup.find('#cometchat_plugins_openup_icon_'+id).removeClass('cometchat_pluginsopenup_arrowrotate');
	}

	var height = popup.find('.cometchat_tabcontenttext').innerHeight();
	popup.find('.cometchat_tabcontent .cometchat_chatboxpopup_'+id).remove();
	var height_tabcontent = popup.find('.cometchat_tabcontentinput').height();
	var height1 = ("275"-(height_tabcontent)+22)+'px';
	popup.find('.cometchat_tabcontent .cometchat_tabcontenttext').height(height1);
	if(popup.find('.cometchat_tabcontenttext').parent().hasClass('slimScrollDiv')){
		popup.find('.cometchat_tabcontenttext').parent().height(height1);
	}
	if(chatroommode){
		jqcc[theme].chatroomScrollDown(1,id);
	} else {
		jqcc[theme].scrollDown(id);
	}
}

function getTimeDisplay(ts) {
	if((ts+"").length == 10){
		ts = ts*1000;
	}
	var language = jqcc.cometchat.getLanguage();
	var time = new Date(ts);
	var ap = "";
	var hour = time.getHours();
	var minute = time.getMinutes();
	var date = time.getDate();
	var month = time.getMonth();
	var day = time.getDay();
	var year = time.getFullYear();
	var armyTime = 0;
	var todaysDate = new Date();
	var todays12am = (todaysDate.getTime() - (todaysDate.getTime()%(24*60*60*1000)));
	var yesterdays12am = todays12am - 86400000;
	var ytt='';
	if(typeof(jqcc.cometchat.getSettings) == 'undefined'){
		armyTime = jqcc.cometchat.getChatroomVars('armyTime');
	} else {
		armyTime = jqcc.cometchat.getSettings()['armyTime'];
	}
	if(armyTime!=1){
		ap = hour>11 ? "PM" : "AM";
		hour = hour==0 ? 12 : hour>12 ? hour-12 : hour;
	}else{
		hour = hour<10 ? "0"+hour : hour;
	}
	minute = minute<10 ? "0"+minute : minute;
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var days = ['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];
	var type = 'th';
	if(date==1||date==21||date==31){
		type = 'st';
	}else if(date==2||date==22){
		type = 'nd';
	}else if(date==3||date==23){
		type = 'rd';
	}
	if (time.getTime() > todays12am && time.getTime() > yesterdays12am) {
		ytt = language['today'];
	} else if(time.getTime() < todays12am && time.getTime() < yesterdays12am){
		ytt = '';
	} else {
		ytt = language['yesterday'];
	}
	return {ap:ap,hour:hour,minute:minute,date:date,month:months[month],year:year,type:type,day:days[day],ytt:ytt};
}

function attachPlaceholder(element){
	jqcc(element).find('[placeholder]').focus(function() {
		var input = jqcc(this);
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('cometchat_placeholder');
		}
		}).blur(function() {
		var input = jqcc(this);
		if (input.val() == '') {
			input.addClass('cometchat_placeholder');
			input.val(input.attr('placeholder'));
		}
	}).blur();

	jqcc(element).find('[placeholder]').parents('form').submit(function() {
		jqcc(this).find('[placeholder]').each(function() {
			var input = jqcc(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		});
	});
}

function isWindowOpen() {
	var webrtcplugins = [];
	if(typeof(jqcc.cometchat.getWebrtcPlugins) != "undefined") {
		webrtcplugins = jqcc.cometchat.getWebrtcPlugins();
	} else if(typeof(parent.jqcc.cometchat.getWebrtcPlugins) != "undefined") {
		webrtcplugins = parent.jqcc.cometchat.getWebrtcPlugins();
	}
	for(var key in cc_windownames) {
	  	for(var i=0;i<webrtcplugins.length;i++) {
			if(key == ("cc_"+webrtcplugins[i]) && !(cc_windownames[key].closed)) {
				return true;
			} else {
				return false;
			}
		}
	}
}

window.onbeforeunload = function(event) {
	jqcc('.cometchat_container').each(function(index,element){
		if(jqcc(this).attr('id').indexOf("audiochat")>-1 || jqcc(this).attr('id').indexOf('audiovideochat')>-1 || jqcc(this).attr('id').indexOf('writeboard')>-1 || jqcc(this).attr('id').indexOf('whiteboard')>-1 || jqcc(this).attr('id').indexOf('broadcast')>-1){
			var language = jqcc.cometchat.getLanguage();
			event.returnValue = language['navigate_page'];
		}
	})
}

/* base64encode */
function b2a(a) {
  var c, d, e, f, g, h, i, j, o, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", k = 0, l = 0, m = "", n = [];
  if (!a) return a;
  do c = a.charCodeAt(k++), d = a.charCodeAt(k++), e = a.charCodeAt(k++), j = c << 16 | d << 8 | e,
  f = 63 & j >> 18, g = 63 & j >> 12, h = 63 & j >> 6, i = 63 & j, n[l++] = b.charAt(f) + b.charAt(g) + b.charAt(h) + b.charAt(i); while (k < a.length);
  return m = n.join(""), o = a.length % 3, (o ? m.slice(0, o - 3) :m) + "===".slice(o || 3);
}

/* base64decode */
function a2b(a) {
  var b, c, d, e = {}, f = 0, g = 0, h = "", i = String.fromCharCode, j = a.length;
  for (b = 0; 64 > b; b++) e["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(b)] = b;
  for (c = 0; j > c; c++) for (b = e[a.charAt(c)], f = (f << 6) + b, g += 6; g >= 8; ) ((d = 255 & f >>> (g -= 8)) || j - 2 > c) && (h += i(d));
  return h;
}

function IsJsonString(str) {
	try {
	   return JSON.parse(str);
   } catch (e) {
	   return false;
   }
}

function IsJsonString(str) {
	 try {
		return JSON.parse(str);
	} catch (e) {
		return false;
	}
}
function delay(time) {
  var d1 = new Date();
  var d2 = new Date();
  while (d2.valueOf() < d1.valueOf() + time) {
	d2 = new Date();
  }
}

function previewCometChatMedia(params,url) {
	var mediaContentData = '';
	var allowDownload = 1;
	if(params.pluginname == 'botresponse_image'){
		mediaContentData = '<img class="cometchat_media_data cometchat_media_image" src= "'+url+'">';
		allowDownload = 0;
	} else {
		var pluginname = params.pluginname;
		if(params.mediatype == 1){
			mediaContentData = '<img class="cometchat_media_data cometchat_media_image" type="'+pluginname+'" md5fileName="'+params.md5file+'" fileName="'+params.file+'" src= "'+url+params.md5file+'">';
			jqcc('.cometchat_media_download').css('display','block');
		} else if(params.mediatype == 2){
			mediaContentData = '<video class="cometchat_media_data" width="360" height="260" type="'+pluginname+'" md5fileName="'+params.md5file+'" fileName="'+params.file+'" controls autoplay><source src="'+url+params.md5file+'" ></video>';
		} else if(params.mediatype == 3){
			mediaContentData = '<audio class="cometchat_media_data" md5fileName="'+params.md5file+'" type="'+pluginname+'" fileName="'+params.file+'" controls><source src="'+url+params.md5file+'"></audio>';
		}
	}
	if(jqcc('.cometchat_media_data').length == 0){
			jqcc('body').find('.cometchat_media_container').append(mediaContentData);
	}
	jqcc('.cometchat_media_modal div').css('visibility','visible');
	jqcc('.cometchat_media_overlay').addClass('cometchat_media_overlay_show');
	if(allowDownload == 0){
		jqcc('.cometchat_media_download').css('display','none');
	}
}

function outgoingCall(id,grp,userdata){
	var theme = jqcc.cometchat.getSettings().theme;
	var staticCDNUrl = '/cometchat/';
	var buddylistName = userdata.name;
	var buddylistAvatar = userdata.avatar;
	if(jqcc("#avchat_container_"+id).length==0){
		jqcc[theme].playSound(4);
		jqcc('body').append('<div id="avchat_container_'+id+'"><div id="cometchat_avchat_container"><div id="cometchat_userself_left"><div id="cometchat_userself"><span class="cometchat_usersavatar"><img class="cometchat_usersavatarimage" src="'+buddylistAvatar+'" /></span><div id="cometchat_userselfDetails"><div class="avchat_userdisplayname">'+buddylistName+'</div><div class="cometchat_callstatus">Ringing...</div></div></div></div><div id="cometchat_cancelcall" class="cometchat_avchat_reject avchat_cancelcall avchat_link_'+grp+'" to='+id+' grp='+grp+'><img src="'+staticCDNUrl+'images/call.svg"></div></div></div>');
	}
}
function incomingCall(incoming,avchat_data,currenttime,userdata){
	var theme = jqcc.cometchat.getSettings().theme;
	var staticCDNUrl = '/cometchat/';
	var buddylistName = userdata.name;
	var buddylistAvatar = userdata.avatar;
	if(jqcc("#avchat_container_"+incoming.from).length==0 && (incoming.sent > currenttime - 15)){
			jqcc('body').append("<div id='avchat_container_"+incoming.from+"'><div id='cometchat_avchat_container'><div id='cometchat_userself_left'><div id='cometchat_userself'><span class='cometchat_usersavatar'><img class='cometchat_usersavatarimage' src='"+buddylistAvatar+"'/></span><div id='cometchat_userselfDetails'><div class='avchat_userdisplayname'>"+buddylistName+"</div><div class='cometchat_callstatus'>Incoming Call</div></div></div></div><div id='cometchat_acceptcall' class='cometchat_avchat_accept acceptAVChat avchat_link_'"+avchat_data[2]+"' to='"+incoming.from+"' token='' grp='"+avchat_data[2]+"' join_url='' start_url='' chatroommode='0' caller='"+avchat_data[3]+"'><img src='"+staticCDNUrl+"images/call.svg'></div><div id='cometchat_rejectcall' class='cometchat_avchat_reject avchat_rejectcall avchat_link_"+avchat_data[2]+"' to='"+incoming.from+"' grp='"+avchat_data[2]+"'><img src='"+staticCDNUrl+"images/call.svg'></div></div></div>");
			jqcc[theme].playSound(3);
			var params = {"incoming":incoming.from, "grp":avchat_data[2]};
			setTimeout(function(params) {
				if(jqcc("#avchat_container_"+incoming.from).length){
					jqcc.ccavchat.ignore_call(incoming.from,avchat_data[2]);
					removeCallContainer(incoming.from);
				}
			},30000);
	}
}
function removeCallContainer(id) {
	var windowkey = 'cc_audiovideochat';
	if(jqcc("#avchat_container_"+id).length != 0){
	   jqcc("#avchat_container_"+id).remove();
	} else if(typeof (cc_windownames[windowkey]) != 'undefined' && !(cc_windownames[windowkey].closed)){
		cc_windownames[windowkey].close();
	}
}

function toggleBotsAction(params) {
	var botlist = params.botlist;
	var botid   = params.botid;
	var staticCDNUrl = '/cometchat/';
	var bots_language   = params.bots_language;
	var returnparameters = {"type":'core', "name":'libraries', "method":'showBotlist'};
	returnparameters = JSON.stringify(returnparameters);

	jqcc('#bots_window').find("#cometchat_windowtitlebar").prepend('<div id="cometchat_botsback" class="cometchat_backwindow" ><img src="'+staticCDNUrl+'layouts/embedded/images/leftarrow.svg"/></div>');
	jqcc('#bots_window').find("#bots_closewindow").hide();
	jqcc("#bots_window").find("#cometchat_bot_title_text").text(botlist[botid]['n']);
	jqcc("#cometchat_bots_popup").find(".cometchat_closebox").hide();
	jqcc("#cometchat_bots_popup").find(".cometchat_userstabtitle").prepend('<div id="cometchat_botsback" class="cometchat_back" ></div>');
	jqcc("#cometchat_bots_popup").find(".cometchat_userstabtitletext").text(botlist[botid]['n']);
	jqcc("#cometchat_bots_popup").find(".cometchat_userstabtitletext").css('margin-left', '10px');

	jqcc("#bots_window").find("#cometchat_botsback").live('click', function() {
		jqcc('#bots_window').find("#bots_closewindow").show();
		jqcc('#cometchat_bots_iframe')[0].contentWindow.postMessage('CC^CONTROL_'+returnparameters,'*');
		jqcc("#bots_window").find("#cometchat_botsback").remove();
		jqcc("#bots_window").find("#cometchat_bot_title_text").text(bots_language);
	});

	jqcc("#cometchat_bots_popup").find("#cometchat_botsback").live('click', function() {
		jqcc("#cometchat_bots_popup").find(".cometchat_closebox").show();
		jqcc('#cometchat_bots_iframe')[0].contentWindow.postMessage('CC^CONTROL_'+returnparameters,'*');
		jqcc("#cometchat_bots_popup").find("#cometchat_botsback").remove();
		jqcc("#cometchat_bots_popup").find(".cometchat_userstabtitletext").text(bots_language);
		jqcc("#cometchat_bots_popup").find(".cometchat_userstabtitletext").css('margin-left', '20px');
	});
}

jqcc(function(){
	var baseUrl = '/cometchat/';
	var staticCDNUrl = '/cometchat/';
	var intervalCount = 0;
	var mobileDevice  = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|IEMobile|blackberry|palm|symbian/i);
	if(mobileDevice==null){
		var mediaoverlay = fileTransferinterval = setInterval(function () {
			overlay = '<div class="cometchat_media_overlay" style="display:none;"><div class="cometchat_media_modal"><div><div class="cometchat_media_content"><div class="cometchat_media_container"></div></div><img class="cometchat_media_download" src="'+staticCDNUrl+'images/download.png"><img class="cometchat_close_dialog" src="'+staticCDNUrl+'images/close.png" ></div></div></div>';
			if(jqcc('#cometchat').length >= 1 && jqcc('#cometchat').find('.cometchat_media_overlay').length <= 0) {
				jqcc('#cometchat').append(overlay);
			} else if(jqcc('#cometchat').length == 0 && jqcc('body').find('.cometchat_media_overlay').length <= 0) {
				jqcc('body').append(overlay);
			}
			window.clearInterval(mediaoverlay);
		}, 1000);
	}
	jqcc('.cometchat_media_download').live('click',function(){
		var file = jqcc('.cometchat_media_data').attr('fileName');
		var pluginname = jqcc('.cometchat_media_data').attr('type');
		var md5file = jqcc('.cometchat_media_data').attr('md5fileName');
		location.href = baseUrl+"plugins/"+pluginname+"/download.php?file="+md5file+"&unencryptedfilename="+file+"";
	});

	jqcc('.cometchat_close_dialog').live('click',function(){
		jqcc('.cometchat_media_modal div').css('visibility','hidden');
		jqcc('.cometchat_media_overlay').removeClass('cometchat_media_overlay_show');
		jqcc('body').find('.cometchat_media_container').html('');

	});

	jqcc(".cometchat_media_overlay").live('click',function(e){
		if (jqcc(e.target).hasClass('cometchat_media_data') || jqcc(e.target).hasClass('cometchat_media_download')) {
			return false;
		}
		jqcc('.cometchat_media_modal div').css('visibility','hidden');
		jqcc('.cometchat_media_overlay').removeClass('cometchat_media_overlay_show');
		jqcc('body').find('.cometchat_media_container').html('');
	});
	jqcc('.mediamessage').live('click',function(e){
		if(mobileDevice==null){
			e.preventDefault();
			var baseUrl = '/cometchat/';
			var file = jqcc(this).attr('filename');
			var md5file = jqcc(this).attr('encfilename');
			var mediatype = jqcc(this).attr('mediatype');
			var pluginname = jqcc(this).attr('pluginname');
			var aws_storage = '0';
			var aws_bucket_url = '';
			var bucket_path = '';
			if(aws_storage == '1') {
				url = '//'+aws_bucket_url+'/'+bucket_path+pluginname+'/';
			}else {
				url = baseUrl+'writable/'+pluginname+'/uploads/';
			}
			var controlparameters = {"file":file, "md5file":md5file, "mediatype":mediatype, "pluginname":pluginname};
			if(((typeof(parent) != 'undefined' && parent != null && parent != self) || window.top != window.self) && jqcc.cometchat.getCcvariable().callbackfn!='desktop'){
				controlparameters = {"type":"modules", "name":"core", "method":"previewCometChatMedia", "src":url, "params":controlparameters};
				controlparameters = JSON.stringify(controlparameters);
				parent.postMessage('CC^CONTROL_'+controlparameters,'*');
			} else {
				previewCometChatMedia(controlparameters,url);
			}
		} else {
			var downloadLink = jqcc(this).attr('link');
			window.open(downloadLink);
		}
	});

	jqcc('.cometchat_botimagefile').live('click',function(e){
		if(mobileDevice==null){
			e.preventDefault();
			var src = jqcc(this).attr('src');
			var pluginname = 'botresponse_image';
			var controlparameters = {"pluginname":pluginname};
			if(((typeof(parent) != 'undefined' && parent != null && parent != self) || window.top != window.self) && jqcc.cometchat.getCcvariable().callbackfn!='desktop'){
				controlparameters = {"type":"modules", "name":"core", "method":"previewCometChatMedia", "src":src, "params":controlparameters};
				controlparameters = JSON.stringify(controlparameters);
				parent.postMessage('CC^CONTROL_'+controlparameters,'*');
			} else {
				previewCometChatMedia(controlparameters,src);
			}
		} else {
			var downloadLink = jqcc(this).attr('src');
			window.open(downloadLink);
		}
	});
});

function isbase64encoded(){
	try{
		return btoa(atob(str)) == str;
	}catch(err){
		return false;
	}
}

/*! jQuery UI 1.8.18 */

(function(a,b){function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;if(!b.href||!g||f.nodeName.toLowerCase()!=="map")return!1;h=a("img[usemap=#"+g+"]")[0];return!!h&&d(h)}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}a.ui=a.ui||{};a.ui.version||(a.extend(a.ui,{version:"1.8.18",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)});return c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){if(c===b)return g["inner"+d].call(this);return this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){if(typeof b!="number")return g["outer"+d].call(this,b);return this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!!d&&!!a.element[0].parentNode)for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;if(b[d]>0)return!0;b[d]=1,e=b[d]>0,b[d]=0;return e},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}}))})(jqcc);
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}});return d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e;if(f&&e.charAt(0)==="_")return h;f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b){h=f;return!1}}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))});return h}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}this._setOptions(e);return this},_setOptions:function(b){var c=this;a.each(b,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,b){this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b);return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);this.element.trigger(c,d);return!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jqcc);
(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent")){a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation();return!1}}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(b){if(!c){this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted){b.preventDefault();return!0}}!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0;return!0}},_mouseMove:function(b){if(a.browser.msie&&!(document.documentMode>=9)&&!b.button)return this._mouseUp(b);if(this._mouseStarted){this._mouseDrag(b);return b.preventDefault()}this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b));return!this._mouseStarted},_mouseUp:function(b){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b));return!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jqcc);
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){if(!!this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy();return this}},_mouseCapture:function(b){var c=this.options;if(this.helper||c.disabled||a(b.target).is(".ui-resizable-handle"))return!1;this.handle=this._getHandle(b);if(!this.handle)return!1;c.iframeFix&&a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")});return!0},_mouseStart:function(b){var c=this.options;this.helper=this._createHelper(b),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment();if(this._trigger("start",b)===!1){this._clear();return!1}this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.helper.addClass("ui-draggable-dragging"),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b);return!0},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1){this._mouseUp({});return!1}this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";a.ui.ddmanager&&a.ui.ddmanager.drag(this,b);return!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var d=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){d._trigger("stop",b)!==!1&&d._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){this.options.iframeFix===!0&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b);return a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;a(this.options.handle,this.element).find("*").andSelf().each(function(){this==b.target&&(c=!0)});return c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute");return d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute"));return a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.extend(a.ui.draggable,{version:"1.8.18"}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!!e.length){var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jqcc);

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la) */
(function($) {

  jqcc.fn.extend({
	slimScroll: function(options) {

	  var defaults = {
		wheelStep : 6,
		width : 'auto',
		height : 'auto',
		size : '7px',
		color: '#000',
		position : 'right',
		distance : '1px',
		start : 'top',
		opacity : .4,
		alwaysVisible : false,
		railVisible : false,
		railColor : '#fff',
		railOpacity : '0.2',
		railClass : 'slimScrollRail',
		barClass : 'slimScrollBar',
		wrapperClass : 'slimScrollDiv',
		allowPageScroll: false,
		scroll: 0,
		resize: 0,
		railAlwaysVisible: false,
		callback:function(){}
	  };

	  var o = ops = $.extend( defaults , options );

	  this.each(function(){

	  var isOverPanel, isOverBar, isDragg, queueHide, barHeight, percentScroll,
		divS = '<div></div>',
		minBarHeight = 30,
		releaseScroll = false,
		wheelStep = parseInt(o.wheelStep),
		cwidth = o.width,
		cheight = o.height,
		size = o.size,
		color = o.color,
		position = o.position,
		distance = o.distance,
		start = o.start,
		opacity = o.opacity,
		alwaysVisible = o.alwaysVisible,
		railVisible = o.railVisible,
		railColor = o.railColor,
		railOpacity = o.railOpacity,
		allowPageScroll = o.allowPageScroll,
		scroll = o.scroll;
		resize = o.resize;
		railAlwaysVisible = o.railAlwaysVisible;
		callback = o.callback;

		var me = $(this);

		if (me.parent().hasClass('slimScrollDiv')) {
			if (scroll) {
				bar = me.parent().find('.slimScrollBar');
				rail = me.parent().find('.slimScrollRail');
				getBarHeight();
				loc = me.outerHeight() - bar.outerHeight();
				bar.css({ top: loc });
				scrollContent(0, true);
				return;
			}else{
				bar = me.parent().find('.slimScrollBar');
				rail = me.parent().find('.slimScrollRail');
				bar.css({ top: 0 });
				scrollContent(0, true);
				return;
			}

			if (resize) {
				bar = me.parent().find('.slimScrollBar');
				rail = me.parent().find('.slimScrollRail');
				getBarHeight();
				return;
			}
		}

		if (me.parent().hasClass(o.wrapperClass))
		{
			// start from last bar position
			var offset = me.scrollTop();

			// find bar and rail
			bar = me.parent().find('.' + o.barClass);
			rail = me.parent().find('.' + o.railClass);

			getBarHeight();

			// check if we should scroll existing instance
			if ($.isPlainObject(options))
			{
			  // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
			  if ( 'height' in options && options.height == 'auto' ) {
				me.parent().css('height', 'auto');
				me.css('height', 'auto');
				var height = me.parent().parent().height();
				me.parent().css('height', height);
				me.css('height', height);
			  }

			  if ('scroll' in options)
			  {
				// jump to a static point
				offset = parseInt(o.scroll);
			  }
			  else if ('scrollBy' in options)
			  {
				// jump by value pixels
				offset += parseInt(o.scrollBy);
			  }
			  else if ('destroy' in options)
			  {
				// remove slimscroll elements
				bar.remove();
				rail.remove();
				me.unwrap();
				return;
			  }

			  // scroll content by the given offset
			  scrollContent(offset, false, true);
			}

			return;
		}

		var wrapper = $(divS)
		  .addClass( o.wrapperClass )
		  .css({
			position: 'relative',
			overflow: 'hidden',
			width: cwidth,
			height: cheight
		  });

		var cw = me;

		while (parseInt(cw.css('width')) <= 0) {
			cw = cw.parent();
		}

		/*if (typeof cw == 'undefined' || typeof cw.css('width') == 'undefined' || cw.css('width') == 'auto') {
		} else {
			newwidth = (cw.css('width').replace('px','')-10 + 8 )+'px';
			me.css({ width: newwidth });
		}*/

		me.css({
		  overflow: 'hidden'
		});

		/*if (position == 'right') {
			me.css({'padding-right':'0px'});
		} else {
			me.css({'padding-left':'0px'});
		}*/

		var rail  = $(divS)
		  .addClass( o.railClass )
		  .css({
			width: size,
			height: '100%',
			position: 'absolute',
			top: 0,
			display: ((alwaysVisible && railVisible) || railAlwaysVisible) ? 'block' : 'none',
			'border-radius': size,
			background: railColor,
			opacity: railOpacity,
			zIndex: 90
		  });
		var bar = $(divS)
		  .addClass( o.barClass )
		  .css({
			background: color,
			width: size,
			position: 'absolute',
			top: 0,
			opacity: opacity,
			display: alwaysVisible ? 'block' : 'none',
			'border-radius' : size,
			BorderRadius: size,
			MozBorderRadius: size,
			WebkitBorderRadius: size,
			zIndex: 99
		  });

		var posCss = (position == 'right') ? { right: distance } : { left: distance };
		rail.css(posCss);
		bar.css(posCss);

		me.wrap(wrapper);
		me.parent().append(bar);
		me.parent().append(rail);

		bar.draggable({
		  axis: 'y',
		  containment: 'parent',
		  start: function() { isDragg = true; },
		  stop: function() { isDragg = false; hideBar(); },
		  drag: function(e)
		  {
			scrollContent(0, $(this).position().top, false);
		  }
		});

		rail.hover(function(){
		  showBar();
		}, function(){
		  hideBar();
		});

		bar.hover(function(){
		  isOverBar = true;
		}, function(){
		  isOverBar = false;
		});

		me.hover(function(){
		  isOverPanel = true;
		  showBar();
		  hideBar();
		}, function(){
		  isOverPanel = false;
		  hideBar();
		});

		var _onWheel = function(e)
		{
		  if (!isOverPanel) { return; }

		  var e = e || window.event;

		  var delta = 0;
		  if (e.wheelDelta) { delta = -e.wheelDelta/120; }
		  if (e.detail) { delta = e.detail / 3; }

		  scrollContent(delta, true);

		  if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
		  if (!releaseScroll) { e.returnValue = false; }
		}

		function scrollContent(y, isWheel, isJump)
		{

		  var delta = y;

		  if (isWheel)
		  {
			delta = parseInt(bar.css('top')) + y * wheelStep / 100 * bar.outerHeight();

			var maxTop = me.outerHeight() - bar.outerHeight();
			delta = Math.min(Math.max(delta, 0), maxTop);

			bar.css({ top: delta + 'px' });
		  }

		  percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
		  delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

		  if (isJump)
		  {
			delta = y;
			var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
			bar.css({ top: offsetTop + 'px' });
		  }

		  me.scrollTop(delta);
		  showBar();
		  hideBar();
		}

		var attachWheel = function()
		{
		  if (window.addEventListener)
		  {
			this.addEventListener('DOMMouseScroll', _onWheel, {passive:false} );
			this.addEventListener('mousewheel', _onWheel, {passive:false} );
		  }
		  else
		  {
			document.attachEvent("onmousewheel", _onWheel)
		  }
		}

		attachWheel();

		function getBarHeight() {
			barHeight = 0;

			if (me[0].scrollHeight != 0) {
				barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
			}

			bar.css({ height: barHeight + 'px' });
		}

		getBarHeight();

		function showBar()
		{
		  getBarHeight();
		  clearTimeout(queueHide);

		  releaseScroll = allowPageScroll && percentScroll == ~~ percentScroll;
		  if(barHeight >= me.outerHeight()) {
			releaseScroll = true;
			return;
		  }
		  bar.stop(true,true).fadeIn('fast');
		  if (railVisible || railAlwaysVisible) { rail.stop(true,true).fadeIn('fast'); }
		}

		function hideBar()
		{
		  if (!alwaysVisible)
		  {
			queueHide = setTimeout(function(){
			  if (!isOverBar && !isDragg)
			  {
				bar.fadeOut('slow');
				if(!railAlwaysVisible) rail.fadeOut('slow');
			  }
			}, 1000);
		  }
		}

		if (start == 'bottom')
		{
		  bar.css({ top: me.outerHeight() - bar.outerHeight() });
		  scrollContent(0, true);
		}
		else if (typeof start == 'object')
		{
		  scrollContent($(start).position().top, null, true);

		  if (!alwaysVisible) { bar.hide(); }
		}
	  });
		if(typeof callback == 'function'){
		}
	  	return this;
	}
  });

  jqcc.fn.extend({
	slimscroll: jqcc.fn.slimScroll
  });

})(jqcc);
/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
 */
 
; if (!Object.keys) Object.keys = function(o) {if (o !== Object(o))throw new TypeError('Object.keys called on a non-object');var k=[],p;for (p in o) if(Object.prototype.hasOwnProperty.call(o,p)) k.push(p);return k;};

(function($){
	$.cometchat = $.cometchat||function(){
		var baseUrl = '/cometchat/',
			role = '',
			staticCDNUrl = '/cometchat/',
			sendajax = true,
			broadcastData = {},
			sendbroadcastinterval = 0,
			transport = 'cometservice',
			webrtcplugins = ['audiovideochat', 'audiochat', 'broadcast', 'screenshare'];
		var language = {"title":"Chat","chat_options":"Chat Options","type_status":"Type your status and hit the enter key!","status_message":"Status Message","status_option_a":"Available","status_option_b":"Busy","status_option_i":"Invisible","blank1":"","blank2":"","loggedout_tooltip":"Please login to use chat","chat_now_tab":"Chats","me":"Me","status_option_o":"Offline","who_is_online":"Who's Online","sound_notifications":"Sound Notifications","no_friends":"You have no friends in your friend list, please add a few friends to use chat","new_messages_notify":"New Messages...","blank3":"","user_tab_o":"Offline","find_a_user":"Search","user_online":"is online","user_offline":"is offline","user_busy":"is online(busy)","set_my_status":"Set my status","online_status":"Online Status","popup_notifications":"Popup Notifications","blank4":"","start_chatting":"Start chatting!","close":"Close","no_users_online":"No contacts available","no_friends_online":"No contacts available","status_available":"I'm available","status_busy":"I'm busy","status_offline":"I'm offline","status_invisible":"I'm offline","status_away":"I'm away","separator":" | ","and":"and ","or":"or ","more_notifications":" more notifications","close_existing_popup":"This popup is already open. Please close the existing popup and try again.","navigate_page":"Navigating away from this page will close your chat popups.","others":"Others","loading":"Loading...","blank5":"","my_name":"Name","set_my_name":"Set my name","type_name_status":"Type your Name\/Status and hit the enter key!","messages_from":"Messages from","view":"Click here to view","new_message_from":"New Message from","updated":"Updated","failed":"Failed","chat_now":"Chat Now","read_message":"You have received a new chat message. Click OK to read","spam":"Please don't spam your friend","new_messages":"New messages","send_a_message":"Send a message...","loggedout":"You have logged out","no_change":"No change","no_user_found":"No user found","message_with_smiley":"Has sent you a message with smiley.","web":"Web","mobile":"Mobile","minimize_user_tab":"Minimize User Tab","minimize_setting_tab":"Close Options Tab","clear_conversation":"Clear Conversation","report_conversation":"Report Conversation","share_image":"Share Image","capture_photo":"Capture Photo","share_video":"Share Video","capture_video":"Capture Video","leave_chatroom":"Leave Group","invite_users":"Add Members","create_chatroom":"Create Group","options":"Options","close_tab":"Close","minimize_tab":"Minimize Tab","close_popup":"Close Popup","login_options":"Login Options","minimize":"Minimize","login_mode":"Select login mode","logout":"Logout","logout_unsuccessful":"Logout was unsuccessful. Please try again.","login_here":"Login here","load_earlier_messages":"Load Earlier Messages","no_more_messages":"No more messages","type_message":"Type your message","active_chats":"Active Chats","all_users":"All Users","unread":"Unread","hello":"Hello","select_a_user":"To get started, select a user from the left tab.","select_a_group":"To get started, select a group from the left tab.","select_a_user_or_group":"To get started, select a user or group from the left tab.","exclamation":"!","go_online":"You are Offline. Click here to go Online.","chat_with_users":"To chat with site users:","contact_admin":"Please contact your site administrator.","plugins":"Plugins","instant_pm":"Instant PM","edit":"Edit","user_currently_offline":"This user is currently offline","blocked_user_message":"You won&#39);t recieve messages from this user.","do_not_disturb":"Do not show this again","cancel":"Cancel","unblock_user":"Are you sure you want to unblock this user?","ok":"Ok","delete_messages":"This PM and chat history will be deleted forever. Are you sure?","blocked":"Blocked","no_conversations":"You have no conversations. To start a conversation, click on the instant PM button in forum thread.","logout_message":"You have been logged out because your session has expired.","last_seen":"Last Seen","last_seen_at":"Last seen at","n_supported_on_ios":"This feature is not supported on iOS devices.","click_here":"Click here","to_use_chat":" to use the chat","disable_message_receipt":"Disable Read Receipts","use_mobileapp":"Use Mobile App?","jan":"January","feb":"February","mar":"March","apr":"April","may":"May","jun":"June","jul":"July","aug":"August","sep":"September","oct":"October","nov":"November","dec":"December","today":"Today","yesterday":"Yesterday","recent_chats":"Recent","groups":"Groups","more":"More","available":"Available","away":"Away","busy":"Busy","invisible":"Invisible","notifications":"Notifications","blocked_users":"Blocked Users","manage_blocked_users":"Manage Blocked Users","no_recent_chats":"No recent chats available","no_groups":"No groups available","announcements":"Announcements","you_are_offline":"You're Offline","check_internet":"No internet connection","chats":"Chats","no_group_found":"No group found","close_user_search":"Clear search","new_group":"New Group","new_broadcast":"New Broadcast","broadcast_message":"Broadcast Message","save_changes":"Save Changes","contacts":"Contacts","view_profile":"View Profile","close_chatbox":"Closing the chatbox will close all active plugins. Do you really want to close? ","log_in_using":"Log in using","bots":"Bots","no_bots":"No bots available","bot_info":"Bot Information","no_bot_found":"No bot found","sticker":"Sticker","show_read_receipt":"Show Read Receipt","handwrite":"Handwrite Image","audiofile":"Audio File","file":"File","videobroadcast":"Video Broadcast Request","screenshare":"Screenshare Request","whiteboard":"Whiteboard Request","writeboard":"Writeboard Request","avchat":"Video Call","audiochat":"Audio Call","image":"Image","video":"Video","chatroom_join":"Group Join Request","bot_responce":"Bot Responce","no_chats_found":"No chats found","membership_msg":"Sorry, you do not have access to this feature.","access_group_guest":"You do not have access to Group Chat.","insufficient_credits":"You do not sufficient credits to use this feature.","mobile_feature_restriction":"Sorry, this feature is currently not available in mobile browsers","rtl":"0","0":"Chat Options","1":"Type your status and hit the enter key!","2":"Status Message","3":"Available","4":"Busy","5":"Invisible","6":"","7":"","8":"Please login to use chat","9":"Chats","10":"Me","11":"Offline","12":"Who's Online","13":"Sound Notifications","14":"No contacts available","15":"New Messages...","16":"","17":"Offline","18":"Search","19":"is online","20":"is offline","21":"is online(busy)","22":"Set my status","23":"Online Status","24":"Popup Notifications","25":"","26":"Start chatting!","27":"Close","28":"No contacts available","29":"No contacts available","30":"I'm available","31":"I'm busy","32":"I'm offline","33":"I'm offline","34":"I'm away","35":" | ","36":"and ","37":" more notifications","38":"This popup is already open. Please close the existing popup and try again.","39":"Navigating away from this page will close your chat popups.","40":"Others","41":"Loading...","42":"","43":"Name","44":"Set my name","45":"Type your Name\/Status and hit the enter key!","46":"Messages from","47":"Click here to view","48":"New Message from","49":"Updated","50":"Failed","51":"Chat Now","52":"You have received a new chat message. Click OK to read","53":"Please don't spam your friend","54":"New messages","55":"Send a message...","56":"You have logged out","57":"No change","58":"No user found","59":"Has sent you a message with smiley.","60":"Web","61":"Mobile","62":"Minimize User Tab","63":"Close Options Tab","64":"Clear Conversation","65":"Report Conversation","66":"Share Image","67":"Capture Photo","68":"Share Video","69":"Capture Video","70":"Leave Group","71":"Add Members","72":"Create Group","73":"Options","74":"Close","75":"Minimize Tab","76":"Close Popup","77":"Login Options","78":"Minimize","79":"Select login mode","80":"Logout","81":"Logout was unsuccessful. Please try again.","82":"Login here","83":"Load Earlier Messages","84":"No more messages","85":"Type your message","86":"Active Chats","87":"All Users","88":"Unread","89":"Hello","90":"To get started, select a user from the left tab.","91":"!","92":"You are Offline. Click here to go Online.","93":"To chat with site users:","94":"Please contact your site administrator.","95":"Plugins","96":"Instant PM","97":"Edit","98":"This user is currently offline","99":"You won&#39);t recieve messages from this user.","100":"Do not show this again","101":"Cancel","102":"Are you sure you want to unblock this user?","103":"Ok","104":"This PM and chat history will be deleted forever. Are you sure?","105":"Blocked","106":"You have no conversations. To start a conversation, click on the instant PM button in forum thread.","107":"You have been logged out because your session has expired.","108":"Last Seen","109":"Last seen at","110":"This feature is not supported on iOS devices.","111":"Click here","112":" to use the chat","113":"New Broadcast","114":"No group found","115":"Clear search","116":"Save Changes","117":"Broadcast Message","118":"No bot found"};var trayicon = {"announcements":["announcements","Announcements","\/cometchat\/modules\/announcements\/index.php","_popup","280","310","","1",""],"home":["home","Home","\/","","","","","",""],"scrolltotop":["scrolltotop","Scroll To Top","javascript:jqcc.cometchat.scrollToTop();","","","","","",""]};var settings = {"showOnlineTab":"1","showModules":"1","memberShipLevel":0,"plugins":["smilies","clearconversation","chathistory","filetransfer","handwrite","block"],"extensions":["mobileapp","desktop"],"disableRecentTab":0,"recentListLimit":30,"disableContactsTab":0,"disableGroupTab":0,"hideOffline":0,"autoPopupChatbox":1,"messageBeep":1,"beepOnAllMessages":1,"barPadding":20,"minHeartbeat":3000,"maxHeartbeat":12000,"searchDisplayNumber":10,"thumbnailDisplayNumber":40,"typingTimeout":10000,"idleTimeout":300,"displayOfflineNotification":1,"displayOnlineNotification":1,"displayBusyNotification":1,"notificationTime":5000,"announcementTime":15000,"scrollTime":1,"armyTime":0,"disableForIE6":0,"iPhoneView":0,"hideBarCheck":0,"startOffline":0,"fixFlash":0,"lightboxWindows":1,"sleekScroller":1,"color":"color91561478031","cookiePrefix":"cc_","disableForMobileDevices":1,"desktopNotifications":1,"windowTitleNotify":1,"floodControl":0,"windowFavicon":0,"theme":"docked","ccauth":{"enabled":false,"active":["Facebook","Google","Twitter"]},"prependLimit":"10","cometserviceEnabled":"0","istypingEnabled":"0","messagereceiptEnabled":"0","onlinetimeout":30,"lastseen":"0","transport":"cometservice","usebots":"0","channelprefix":"77e87c25bf4df8ef2fad9fde95cb2488","allowAvatar":"1","dockedChatBoxAvatar":"0","dockedAlignToLeft":"0","dockedChatListAudioCall":"0","ccsiteurl":"https:\/\/salesc2.com","enableMobileTab":"1"};		var mobileappdetails = {"mobileappOption":"0","useWhitelabelledapp":"0","mobileappBundleid":"com.inscripts.cometchat","mobileappPlaystore":"https:\/\/play.google.com\/store\/apps\/details?id=com.inscripts.cometchat&hl=en","mobileappAppstore":"https:\/\/itunes.apple.com\/in\/app\/cometchat\/id594110077?mt=8"};
		var calleeAPI = settings.theme,
			ccvariable = {
				documentTitle: document.title,
				callbackfn: '',
				crossDomain: '0',
				baseData: encodeURIComponent((settings['ccauth']['enabled']==0)?$.cookie(settings.cookiePrefix+'data'):0),
				mobileDevice: navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|IEMobile|blackberry|palm|symbian/i),
				prependLimit: (typeof(settings['prependLimit'])!=="undefined")?settings['prependLimit']:0,
				specialChars: /([^\x00-\x80]+)|([&][#])+/,
				windowFocus: true,
				lastOnlineNumber: 0,
				localmessageid: 0,
				newMessages: 0,
				idleFlag: 0,
				hasSearchbox: 0,
				ccmobileauth: 0 ,
				isMini: 0,
				userid: 0,
				cometid: '',
				showAvatar: 1,
				displayname: '',
				currentStatus:null,
				statusmessage: '',
				userActive: 0,
				loggedout: 0,
				offline: 0,
				todaysDate: new Date(),
				timedifference: 0,
				externalVars: {
					lastseensetting: 0,
					messagereceiptsetting: 0,
					activeChatboxIds: ''
				},
				sendVars: {},
				sessionVars: {},
				internalVars: {},
				updateSessionVars: 0,
				dataMethod: 'post',
				dataTimeout: '10000',
				initialized: 0,
				timestamp: 0,
				heartbeatTimer:null,
				heartbeatTime: settings.minHeartbeat,
				heartbeatCount: 1,
				runHeartbeat: 1,
				buddyListHash:null,
				buddylistName: {},
				buddylistMessage: {},
				buddylistStatus: {},
				buddylistAvatar: {},
				buddylistLink: {},
				buddylistIsDevice: {},
				buddylistChannelHash: {},
				buddylistLastseen: {},
				buddylistLastseensetting: {},
				buddylistReadReceiptSetting: {},
				buddylistUnreadMessageCount: {},
				botListHash:null,
				botlistName: {},
				botlistAvatar: {},
				botlistDescription: {},
				botlistApikey: {},
				openChatboxId: [],
				openedChatbox: '',
				chatroomOpen: '',
				trayOpen: '',
				chatBoxesOrder: {},
				chatBoxOrder: [],
				trying: {},
				desktopNotification: {},
				lastmessagereadstatus: {},
				loggedinusertype : 'loginuser',
				registeredCallbacks : {},
				lastmessageid : {},
        		dockedAlignment : 'right',
			};
		ccvariable.currentTime = ccvariable.idleTime = Math.floor(ccvariable.todaysDate.getTime()/1000);
		ccvariable.todays12am = ccvariable.currentTime -(ccvariable.currentTime%(24*60*60*1000));

		if(typeof (ccvariable.callbackfn)!='undefined'&&ccvariable.callbackfn!=''&&ccvariable.callbackfn!='desktop'){
			calleeAPI = ccvariable.callbackfn;
		}else if( ccvariable.mobileDevice&&settings.disableForMobileDevices&&calleeAPI!='embedded' || ccvariable.mobileDevice&&settings.disableForMobileDevices&&calleeAPI!='embedded'){
			calleeAPI = ccvariable.callbackfn = 'ccmobiletab';
		}
		ccvariable.externalVars["callbackfn"] = ccvariable.callbackfn;

		$.ajaxSetup({scriptCharset: "utf-8", cache: "false"});
		function setWindowFocus(){
			if(!ccvariable.windowFocus){
				jqcc.each( ccvariable.openChatboxId, function( key, value ) {
					if(typeof ccvariable.lastmessagereadstatus[value] != 'undefined' && ccvariable.lastmessagereadstatus[value] == 0){
						var messageid = ccvariable.lastmessageid[value];
						var message = {"id": messageid, "from": value, "self": 0, "old": 0};
						if(ccvariable.currentStatus != 'invisible'){
							jqcc.cometchat.sendReceipt(message, 'readMessageNotify');
						}
						ccvariable.lastmessagereadstatus[value] = 1;
					}
				});
			}
			ccvariable.windowFocus = true;
		}
		$(window).focus(function(){
			setWindowFocus();
			ccvariable.isMini = 0;
			if(settings.desktopNotifications==1){
				for(x in  ccvariable.desktopNotification){
					for(y in  ccvariable.desktopNotification[x]){
						ccvariable.desktopNotification[x][y].close();
					}
				}
			}
			ccvariable.desktopNotification = {};
		});
		$(window).blur(function(){
			ccvariable.windowFocus = false;
			ccvariable.isMini = 1;
		});
		$(window).on('mouseenter',setWindowFocus);
		$(window).on('mouseleave', function() {
			ccvariable.windowFocus = false;
		});
		function userClickId(id){
			if(typeof (jqcc[calleeAPI].createChatbox)!=='undefined'){
				jqcc[calleeAPI].createChatbox(id, ccvariable.buddylistName[id], ccvariable.buddylistStatus[id], ccvariable.buddylistMessage[id], ccvariable.buddylistAvatar[id], ccvariable.buddylistLink[id], ccvariable.buddylistIsDevice[id],1,null);
			}
		};
		function branded(){
			
			setTimeout(function(){
				if (settings.theme == "embedded" || settings.theme == "synergy") {
					$('#cometchat_leftbar').append('<div class="right_footer"></div>');
				} else {
					var userstabpopup = jqcc('#cometchat_userstab_popup');
					$('#cometchat_userstab_popup').find('div.cometchat_tabcontent').append('<div class="right_footer"></div>');
					$('#cometchat_userstab_popup').find('div#cometchat_userscontent').css('height',"270px");
					if(jqcc.cometchat.getThemeVariable('hasSearchbox')){
						var chatlistheight = '240px';
						$('#cometchat_userstab_popup').find('div#cometchat_userscontent').css('height',chatlistheight);
					 } else {
						var chatlistheight = '270px';
					 }
					userstabpopup.find('#cometchat_userscontent #cometchat_userslist > div').css({'height': chatlistheight});
					userstabpopup.find('#cometchat_userscontent #cometchat_groupslist_content > div').css({'height': chatlistheight});
					userstabpopup.find('#cometchat_userscontent .slimScrollDiv > div').css({'height': chatlistheight}).next('div').css({'height': chatlistheight});
				}
			},100)
		};
		function preinitialize(){
			if((typeof(cc_synergy_enabled)!="undefined" && cc_synergy_enabled == 1) || (typeof(cc_embedded_enabled)!="undefined" && cc_embedded_enabled == 1) ){
				return;
			}
			if(jqcc.cometchat.getUserAgent()[0]=="MSIE" && parseInt(jqcc.cometchat.getUserAgent()[1])<9){
				settings.windowFavicon=0;
			};
			if(ccvariable.callbackfn==''&&settings.hideBarCheck==1&&settings.theme=='docked'&&$.cookie(settings.cookiePrefix+"loggedin")!=1){
				$.ajax({
					url: baseUrl+"cometchat_check.php",
					data: {'init': '1', basedata: ccvariable.baseData},
					dataType: 'jsonp',
					type: ccvariable.dataMethod,
					timeout: ccvariable.dataTimeout,
					success: setPreInitVars
				});
			}else{
				setPreInitVars(1);
			}
			function setPreInitVars(data){		  /*child function of preinitialize*/
				if(data!='0'){
					if(typeof(jqcc[calleeAPI]) == 'undefined'){
						return;
					}
					$.cookie(settings.cookiePrefix+"loggedin", '1', {path: '/'});
					if(typeof (jqcc[calleeAPI].initialize)!=='undefined'){
						jqcc[calleeAPI].initialize();
					}else if(ccvariable.callbackfn!=''&&typeof (jqcc[calleeAPI].init())=='function'){
						jqcc[calleeAPI].init();
					}
					ccvariable.externalVars["buddylist"] = '1';
					ccvariable.externalVars["initialize"] = '1';
					jqcc.cometchat.restoreFromCCState();
					ccvariable.externalVars["currenttime"] = ccvariable.currentTime;
					if (ccvariable.runHeartbeat == 1) {
					  jqcc.cometchat.chatHeartbeat();
					}
				}
			}
		};
		function cleanExternalVars(externalVars){
			var cleanedExternalVars ={};
			$.each(externalVars,function(property,value){
				if($.isNumeric(value)){
					value+='';
				}
				if(value=='0'||value==''||value==null||value=='null'||value=='undefined'||$.isEmptyObject(value)||value.length==0){
					return;
				}
				if(typeof value == 'object'){
					cleanedExternalVars[property] = cleanExternalVars(value);
				}else{
					cleanedExternalVars[property] = value;
				}
			});
			return cleanedExternalVars;
		}
		arguments.callee.checkInternetConnection = function(){
			return navigator.onLine;
		};
		arguments.callee.stimulateHeartbeat = function(options){
			var defaults = {};
			var params = $.extend(defaults,options);
			clearTimeout(ccvariable.heartbeatTimer);
			if(ccvariable.loggedout!=1&&ccvariable.offline!=1){
				if(params.hasOwnProperty('heartbeatTime')){
					ccvariable.heartbeatTime = params.heartbeatTime;
					ccvariable.heartbeatCount = 1;
				}else{
					ccvariable.heartbeatCount++;
					if(ccvariable.heartbeatCount>4){
						ccvariable.heartbeatTime *= 2;
						ccvariable.heartbeatCount = 1;
					}
					if(ccvariable.heartbeatTime>settings.maxHeartbeat){
						ccvariable.heartbeatTime = settings.maxHeartbeat;
					}
				}
				ccvariable.heartbeatTimer = setTimeout(function(){
					jqcc.cometchat.chatHeartbeat();
				}, ccvariable.heartbeatTime);
			}
		};
		arguments.callee.getUserAgent = function(){
			var ua= navigator.userAgent, tem,
			M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
			if(/trident/i.test(M[1])){
				tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
				return 'IE '+(tem[1] || '');
			}
			if(M[1]=== 'Chrome'){
				tem= ua.match(/\bOPR\/(\d+)/);
				if(tem!= null) return 'Opera '+tem[1];
			}
			M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
			if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
			return M;
		};
		arguments.callee.startGuestChat = function(name){
			if((typeof(cc_synergy_enabled)!="undefined" && cc_synergy_enabled == 1) || (typeof(cc_embedded_enabled)!="undefined" && cc_embedded_enabled == 1) ){
				var controlparameters = {"type":"modules", "name":"cometchat", "method":"startGuestChat", "params":{'name':name}};
				controlparameters = JSON.stringify(controlparameters);
				if(typeof(jqcc('#cometchat_synergy_iframe')[0]) != 'undefined'){
					jqcc('#cometchat_synergy_iframe')[0].contentWindow.postMessage('CC^CONTROL_'+controlparameters,'*');
				}
			}else{
				ccvariable.externalVars["guest_login"] = 1;
				ccvariable.externalVars["username"] = name;
				jqcc.cometchat.reinitialize();
			}
		};
		arguments.callee.chatHeartbeat = function(force){
			var newMessage = 0;
			var internetconnection = true;

			if(force==1){
				if(typeof window.cometcall_function=='function' && ccvariable.cometid != ''){
					cometcall_function(ccvariable.cometid, 0, calleeAPI);
				}
			}
			ccvariable.externalVars["blh"] = ccvariable.buddyListHash;
			ccvariable.externalVars["botlh"] = ccvariable.botListHash;
			ccvariable.externalVars["status"] = "";
			if((ccvariable.callbackfn!=''&&ccvariable.callbackfn!='desktop')||calleeAPI=='ccmobiletab'){
				ccvariable.externalVars["status"] = 'available';
			}
			if(force==1){
				ccvariable.externalVars["f"] = 1;
			}else{
				delete ccvariable.externalVars["f"];
			}
			var atleastOneNewMessage = 0;
			var nowTime = new Date();
			var n = {};
			var idleDifference = Math.floor(nowTime.getTime()/1000)-ccvariable.idleTime;
			if(idleDifference>=settings.idleTimeout&&ccvariable.idleFlag==0){
				if(ccvariable.currentStatus=='available'){
					ccvariable.idleFlag = 1;
					ccvariable.externalVars["status"] = 'away';
				}
			}
			if(idleDifference<settings.idleTimeout&&ccvariable.idleFlag==1){
				if(ccvariable.currentStatus=='away'){
					ccvariable.idleFlag = 0;
					ccvariable.externalVars["status"] = 'available';
				}
			}
			if(ccvariable.crossDomain==1){
				ccvariable.externalVars["cookie_"+settings.cookiePrefix+"state"] = $.cookie(settings.cookiePrefix+'state');
				ccvariable.externalVars["cookie_"+settings.cookiePrefix+"hidebar"] = $.cookie(settings.cookiePrefix+'hidebar');
				ccvariable.externalVars["cookie_"+settings.cookiePrefix+"an"] = $.cookie(settings.cookiePrefix+'an');
				ccvariable.externalVars["cookie_"+settings.cookiePrefix+"loggedin"] = $.cookie(settings.cookiePrefix+'loggedin');
				ccvariable.externalVars["cookie_"+settings.cookiePrefix+"lang"] = $.cookie(settings.cookiePrefix+'lang');
			}
			ccvariable.externalVars['currenttime'] = Math.floor(new Date().getTime()/1000);
			ccvariable.externalVars["basedata"] = ccvariable.baseData;
			ccvariable.externalVars["readmessages"] = jqcc.cometchat.getFromStorage('readmessages');
			/*ccvariable.externalVars["receivedunreadmessages"] = jqcc.cometchat.getFromStorage('receivedunreadmessages');*/

			if((settings.theme == "synergy" || settings.theme == "embedded") && settings.enableType == 1 && embeddedchatroomid > 0 && ccvariable.externalVars["initialize"] == 1){
				ccvariable.externalVars["buddylist"] = 0;
			}
			if (((settings.theme == "synergy" || settings.theme == "embedded") && settings.enableType == 1 && ccvariable.externalVars["initialize"] == 1) || ((settings.theme == "synergy" || settings.theme == "embedded") && settings.enableType != 1 && embeddedchatroomid == 0) || (settings.theme != "synergy" || settings.theme != "embedded")) {
				$.ajax({
					url: baseUrl+"cometchat_receive.php",
					data: cleanExternalVars(ccvariable.externalVars),
					dataType: 'jsonp',
					type: ccvariable.dataMethod,
					timeout: ccvariable.dataTimeout,
					error: function(xhr){
						if(!xhr.status && typeof jqcc[settings.theme].nointernetconnection != "undefined") {
							jqcc[settings.theme].nointernetconnection();
						}
						if(!(jqcc(document).find("#cometchat").hasClass('CCReceiveError')) && ccvariable.externalVars["initialize"] == '1'){
							jqcc(document).find("#cometchat").addClass('CCReceiveError');
						}
						jqcc.cometchat.stimulateHeartbeat({heartbeatTime:settings.minHeartbeat});
					},
					success: function(data){
						if(jqcc(document).find("#cometchat").hasClass('CCReceiveError')){
							jqcc(document).find("#cometchat").removeClass('CCReceiveError');
						}
						if(data){
							jqcc.cometchat.setInternalVariable('allowchatboxpopup', '1');
							jqcc.cometchat.updateToStorage('readmessages',{});
							if(ccvariable.externalVars['initialize'] == 1 && typeof initializeCometService == 'function' && (data.hasOwnProperty('userstatus')||data.hasOwnProperty('userid'))){
								initializeCometService();
							}
							$.each(data, function(type, item){
								if(type=='blh'){
									ccvariable.buddyListHash = item;
								}
								if(type=='botlh'){
									ccvariable.botListHash = item;
								}
								if(type=='buc'){
									$("#cometchat_blockeduserscount").html(item);
								}
								if(type=='an'){
									if(typeof (jqcc[calleeAPI].newAnnouncement)!=='undefined'){
										jqcc[calleeAPI].newAnnouncement(item);
									}
									/*Callback for Announcement*/
							        jqcc.cometchat.processSubscribeCallback('gotAnnouncement',item);
								}
								if(type=='buddylist'){
									if(typeof (jqcc[calleeAPI].buddyList)=='function'){
										jqcc[calleeAPI].buddyList(item);
									}
							        /*Callback for Buddy List*/
							        jqcc.cometchat.processSubscribeCallback('gotOnlineList',item);
								}
								if(type=='botlist'){
									if(typeof (jqcc[calleeAPI].botList)=='function'){
										jqcc[calleeAPI].botList(item);
									}
								}
								if(type=='recent'){
									if(typeof (jqcc.cometchat.updateRecentChats)=='function'){
										var params = {'force':1,'list':item};
										jqcc.cometchat.updateRecentChats(params);
									}
									/*Callback for Recent Chats*/
                            		jqcc.cometchat.processSubscribeCallback('gotRecentChatsList',item);
								}
								if(type=='loggedintype'){
									ccvariable.loggedinusertype = item;
								}
								if(type=='role'){
									role = item;
								}
								if(type=='loggedout'){
									if(ccvariable.cometid!='' && typeof(cometuncall_function)==="function"){
										cometuncall_function(ccvariable.cometid);
										jqcc.cometchat.setThemeVariable('cometid','');
									}
									if(typeof(cometstop_function)==="function"){
										cometstop_function();
									}
									$.cookie(settings.cookiePrefix+"loggedin", null, {path: '/'});
									$.cookie(settings.cookiePrefix+"state", null, {path: '/'});
									$.cookie(settings.cookiePrefix+"jabber", null, {path: '/'});
									$.cookie(settings.cookiePrefix+"jabber_type", null, {path: '/'});
									$.cookie(settings.cookiePrefix+"hidebar", null, {path: '/'});
									$.cookie(settings.cookiePrefix+"lang", null, {path: '/'});
									$.cookie(settings.cookiePrefix+"theme", null, {path: '/'});
									$.cookie(settings.cookiePrefix+"color", null, {path: '/'});
									if(typeof (jqcc[calleeAPI].loggedOut)!=='undefined'){
										jqcc[calleeAPI].loggedOut();
									}
									jqcc.cometchat.setThemeVariable('loggedout', 1);
									clearTimeout(ccvariable.heartbeatTimer);
									if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomLogout) == "function") {
										jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomLogout();
									}
								}
								if(type=='userstatus'){
									if(settings.ccauth.enabled){
										postMessage('cc_reinitializeauth','*');
									}
									ccvariable.userid = item.id;
									ccvariable.buddylistStatus[item.id] = item.s;
									ccvariable.buddylistMessage[item.id] = item.m;
									ccvariable.buddylistName[item.id] = item.n;
									ccvariable.buddylistAvatar[item.id] = item.a;
									ccvariable.buddylistLink[item.id] = item.l;
									ccvariable.buddylistChannelHash[item.id] = item.ch||'';
									ccvariable.buddylistLastseen[item.id] = item.ls||0;
									ccvariable.ccmobileauth = item.ccmobileauth;
									if(typeof (jqcc[calleeAPI].userStatus)!=='undefined'){
										jqcc[calleeAPI].userStatus(item);
									}
									if(settings.messageBeep==1&&(ccvariable.callbackfn==""||ccvariable.callbackfn=="desktop")){
										if(typeof (jqcc[calleeAPI].messageBeep)!='undefined'){
											jqcc[calleeAPI].messageBeep(staticCDNUrl);
										}
									}
									if(ccvariable.callbackfn!=""&&ccvariable.callbackfn=="desktop" && (settings.plugins).indexOf('screenshare') > -1){
										var ccpluginindex=(settings.plugins).indexOf('screenshare');
										(settings.plugins).splice(ccpluginindex,1);
									}
									if(parseInt(ccvariable.userid) && typeof jqcc.cometchat.subscribeToStorage !== 'undefined'){
										jqcc.cometchat.subscribeToStorage('cometchat_user_'+ccvariable.userid);
									}
							        /*Callback for User Status*/
							        jqcc.cometchat.processSubscribeCallback('gotProfileInfo',item);
								}
								if(type=='cometid'){
									ccvariable.cometid = item.id;
									cometcall_function(ccvariable.cometid, 0, calleeAPI);
								}
								if(type=='init'){
									jqcc.cometchat.setInternalVariable('updatingsession', '1');
								}
								if(type=='initialize'){
									ccvariable.timestamp = item;
									ccvariable.externalVars["timestamp"] = item;
									if(typeof (jqcc.cometchat.restoreFromCCState)!=='undefined'){
										jqcc.cometchat.restoreFromCCState();
										if(typeof (jqcc[calleeAPI].resynch)!=='undefined'){
											jqcc[calleeAPI].resynch();
										}
										if(typeof jqcc.cometchat.subscribeToStorage !== 'undefined'){
											jqcc.cometchat.subscribeToStorage('cometchat_chattab_state'+ccvariable.userid);
										}
									}
									if(typeof (jqcc[calleeAPI].windowResize)!=='undefined'){
										jqcc[calleeAPI].windowResize();
									}
								}
								if(type=='st'){
									ccvariable.timedifference = (item*1000) - parseInt(new Date().getTime());
								}
								if(type=='messages'){
									if(ccvariable.externalVars['initialize'] != 1){
										ccvariable.externalVars["timestamp"] = item[Object.keys(item).sort().reverse()[0]].id;
									}
									if(typeof (jqcc.cometchat.publishToStorage) !== 'undefined'){
										jqcc.cometchat.publishToStorage('cometchat_user_'+ccvariable.userid,item);
									}
									jqcc.cometchat.stimulateHeartbeat({heartbeatTime:settings.minHeartbeat});
								}

							/*chatroom responses start*/
								if (type == 'logout') {
									if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomLogout) == "function") {
										jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomLogout();
									}

									if(typeof(cometstop_function)==="function"){
										cometstop_function();
									}
								}
								if (type == 'userid') {
									jqcc.cometchat.setChatroomVars('myid',item);
									jqcc.cometchat.setChatroomVars('initialize',0);
									if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')]) != 'undefined' && typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].createChatroomTab) == "function"){

										jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].createChatroomTab(item);
									}
								}
								if (type == 'chatrooms') {
									if (jqcc.cometchat.getChatroomVars('initializeAutoLogin') == 1 && jqcc.cometchat.getChatroomVars('themename') == 'embedded') {
										var autoLoginCr = jqcc.cometchat.getChatroomVars('autoLogin');
										jqcc.cometchat.setChatroomVars('chatroomdetails',item);
										$.each(item, function(i,room) {
											if (('_'+autoLoginCr) == i) {
												if(typeof(btoa) != 'undefined'){
													var encodedroomname = btoa(room.name);
												}else{
													var encodedroomname = base64_encode(room.name);
												}
												jqcc.cometchat.silentroom(autoLoginCr,'',encodedroomname);
												if($('#cometchat_chatroomstab').length > 0) {
													$('#cometchat_chatroomstab').click();
												}
												if($('#cometchat_chatroomstab_popup').length > 0) {
													$('#cometchat_chatroomstab_popup').addClass("cometchat_tabopen");
												}
											}
										});
										jqcc.cometchat.setChatroomVars('initializeAutoLogin',0);
									}
									if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadChatroomList) == "function"){
										jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadChatroomList(item);
									}
									/*Callback for Groups*/
							        jqcc.cometchat.processSubscribeCallback('gotGroupList',item);
								}
								if (type == 'clh') {
									jqcc.cometchat.setChatroomVars('clh',item);
								}
								if (type == 'prepend') {
									jqcc.cometchat.setChatroomVars('prepend',item);
								}
								if (type == 'ulh') {
									jqcc.cometchat.setChatroomVars('ulh',item);
								}
								if(type == 'chatroomList') {
									if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].updateCRReadMessages) == "function")
										jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].updateCRReadMessages(item);
								}
								if (type == 'crmessages') {
									if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].displayChatroomMessage) == "function"){
										jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].displayChatroomMessage(item,0);
									}
									if(jqcc.cometchat.getChatroomVars('calleeAPI') == 'embedded'){
										if(($("#currentroom_convo")[0].scrollHeight) - ($("#currentroom_convo").scrollTop() + $("#currentroom_convo").innerHeight()) < 70) {
											if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomScrollDown) == "function")
											jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomScrollDown(1);
										}
									}
									jqcc.cometchat.stimulateHeartbeat({heartbeatTime:settings.minHeartbeat});
									if(ccvariable.externalVars['initialize'] != 1){
										ccvariable.externalVars["lastgroupmessageid"] = item[Object.keys(item).sort().reverse()[0]].id;
									}
									/*Callback for Groups Messages*/
							        jqcc.cometchat.processSubscribeCallback('onGroupMessageReceived',item);
								}
								if (type == 'users') {
									if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].updateChatroomUsers) == "function")
										jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].updateChatroomUsers(item,0);
								}
								if (type == 'error') {
									jqcc.cometchat.leaveChatroom();
								}
								if (type == 'subscribeChatrooms') {
									jqcc.cometchat.subscribeCometChatrooms(item);
								}
								if(type == 'lastgroupmessageid'){
									ccvariable.externalVars["lastgroupmessageid"] = item;
								}
								/*chatroom responses end*/
							});
							if(ccvariable.externalVars["status"]!=""){
								if(typeof (jqcc[calleeAPI].removeUnderline2)!=='undefined'){
									jqcc[calleeAPI].removeUnderline2();
								}
								if(typeof (jqcc[calleeAPI].updateStatus)!=='undefined'){
									jqcc[calleeAPI].updateStatus(ccvariable.externalVars["status"]);
								}
							}
							jqcc.cometchat.setExternalVariable('initialize', '0');
							jqcc.cometchat.setExternalVariable('currenttime', '0');
							jqcc.cometchat.stimulateHeartbeat();
						}
						var offlinemessagesqueue = jqcc.cometchat.getFromStorage('offlinemessagesqueue');
						if(typeof(offlinemessagesqueue) != 'undefined' && !jqcc.isEmptyObject(offlinemessagesqueue)) {
							jqcc.each(offlinemessagesqueue,function(key,value){
								if(!jqcc.isEmptyObject(value) && value.msgStatus == 0) {
									if(value.hasOwnProperty('type') && value.type != '') {
										jqcc["cc"+value.name][value.method](value.message);
									}
									else if(value.hasOwnProperty('chatroommode') && value.chatroommode == 1) {
										jqcc.cometchat.sendmessageProcess(value.message,value.id,'','',key);
									}
									else {
										jqcc.cometchat.chatboxKeydownSet(value.id,value.message,'',key);
									}
								}
							});
						}
					}
				});
			}
		};
		arguments.callee.memberPluginRestrictions = function(memberfeature){

			var memberAvailablePlugin = settings[role+'_plugins'];
			if (memberAvailablePlugin.indexOf(memberfeature) > -1) {
				return true;
			}else {
				return false;
			}
		}
		arguments.callee.memberExtensionRestrictions = function(memberfeature){
			var memberAvailableExt = settings[role+'_extensions'];
			if (memberAvailableExt.indexOf(memberfeature) > -1) {
				return true;
			}else {
				return false;
			}
		}
		arguments.callee.memberModuleRestrictions = function(memberfeature){
			var memberAvailableModule = settings[role+'_modules'];
			if (memberAvailableModule.indexOf(memberfeature) > -1) {
				return true;
			}else {
				return false;
			}
		}
		arguments.callee.membershipAccess = function(feature,type){
			if ( typeof (settings.memberShipLevel) != 'undefined' && settings.memberShipLevel == 1 && role != '') {
				var memberAvailableFeature = settings[role+'_'+type];
				if (memberAvailableFeature.indexOf(feature) > -1) {
					return true;
				}else {
					var message = jqcc.cometchat.getLanguage('membership_msg');
					alert(message);
					return false;
				}
			} else {
				return true;
			}
		}
		/** Local Storage Start **/
		arguments.callee.updateToStorage = function(key,value){
			if(Object.keys(value).length === 0){
				jqcc.jStorage.set(key,{});
			}else{
				jqcc.jStorage.set(key,
					jqcc.extend(true,
						{},
						jqcc.jStorage.get(key,{}),
						value
					)
				);
			}
		}
		arguments.callee.getFromStorage = function(key){
			return jqcc.jStorage.get(key,{});
		}
		arguments.callee.publishToStorage = function(channel,payload){
			if(typeof payload == 'object' && Object.keys(payload).length === 0){
				jqcc.jStorage.publish(channel,{});
			}else{
				jqcc.jStorage.publish(channel, payload);
			}
		}
		arguments.callee.subscribeToStorage = function(channel){
			jqcc.jStorage.subscribe(channel, function(channel, payload){
				if(payload ==='restoreState'){
					jqcc.cometchat.restoreFromCCState();
				}else if(typeof (jqcc[calleeAPI].addMessages)!=='undefined'){
					jqcc[calleeAPI].addMessages(payload,1);
				}
			});
		}
		/** Local Storage End **/

		/** Recent Chats Start **/
		arguments.callee.updateRecentChats = function(params){
			var userid = jqcc.cometchat.getUserID();
			var recentkey = 'recentchats_'+userid;
			if(typeof(userid) != "undefined" && userid > 0) {
				var recentlist = jqcc.cometchat.getFromStorage(recentkey);
				if(params.force == 1){
					var recentlist = {};
					if(typeof(params.list) == "object" && params.list != 'null' && params.list != null){
						$.each(params.list, function(i, details){
							details.m = jqcc.cometchat.processRecentmessages(details.m);
							if(recentlist.hasOwnProperty(i) && (jqcc.cometchat.processTimestamp(details.t) > jqcc.cometchat.processTimestamp(recentlist[i].t)) && details.m != '') {
								recentlist[i].t = jqcc.cometchat.processTimestamp(details.t);
								recentlist[i].m = details.m;
								recentlist[i].n = details.n || jqcc.cometchat.getThemeArray('buddylistName', i);
								if(i.charAt(0)!='_'){
									recentlist[i].a = details.a || jqcc.cometchat.getThemeArray('buddylistAvatar', i);
								}
							} else if(details.m != '') {
								if(i.charAt(0)=='_') {
									var grpid = i.replace("_", "");
									var groupdetails = jqcc.cometchat.getChatroomVars('chatroomdetails');
									if(groupdetails.hasOwnProperty(i) && details.hasOwnProperty('m') && details.hasOwnProperty('t')){
										recentlist[i] = {'n':details.n || groupdetails[i].name,
														'id':grpid,
														'createdby':groupdetails[i].createdby,
														'pass':groupdetails[i].i,
														'j':groupdetails[i].j,
														'o':groupdetails[i].online,
														's':groupdetails[i].s,
														'type':groupdetails[i].type,
														'grp':1,
														'm':details.m,
														't':jqcc.cometchat.processTimestamp(details.t)
													};
									}
								} else if(i != userid) {
									recentlist[i] = {'n':details.n || jqcc.cometchat.getThemeArray('buddylistName', i),
												'id':i,
												'a': details.a || jqcc.cometchat.getThemeArray('buddylistAvatar', i),
												'grp':0,
												'm':details.m,
												't':jqcc.cometchat.processTimestamp(details.t)
											};
								}
							}
						});
					}
				} else {
				   if(params.isgroup) {
						var grpid = '_'+params.chatid;
						var groupdetails = jqcc.cometchat.getChatroomVars('chatroomdetails');
						if(groupdetails.hasOwnProperty(grpid)) {
							recentlist[grpid] = {'n':groupdetails[grpid].name,
											'id':params.chatid,
											'createdby':groupdetails[grpid].createdby,
											'pass':groupdetails[grpid].i,
											'j':groupdetails[grpid].j,
											'o':groupdetails[grpid].online,
											's':groupdetails[grpid].s,
											'type':groupdetails[grpid].type,
											'grp':1,
											'm':params.m,
											't':jqcc.cometchat.processTimestamp(params.timestamp)
										};
						}
					} else if(params.chatid != userid) {
						recentlist[params.chatid] = {'n':jqcc.cometchat.getThemeArray('buddylistName', params.chatid),
											'id':params.chatid,
											'a':jqcc.cometchat.getThemeArray('buddylistAvatar', params.chatid),
											'd':jqcc.cometchat.getThemeArray('buddylistIsDevice', params.chatid),
											'grp':0,
											'm':params.m,
											't':jqcc.cometchat.processTimestamp(params.timestamp)
										};
					}
				}
				jqcc.cometchat.updateToStorage(recentkey,recentlist);
				jqcc.cometchat.refreshRecentChats(recentlist);
			}
		}

		arguments.callee.refreshRecentChats = function(recentlist){
			var userid = jqcc.cometchat.getUserID();
			var settings = jqcc.cometchat.getSettings();
			var recentkey = 'recentchats_'+userid;
			if(typeof(userid) != "undefined" && userid > 0) {
				if(typeof(recentlist)=="undefined") {
					recentlist = jqcc.cometchat.getFromStorage(recentkey);
				}

				recentlist = jqcc.cometchat.processRecentmessages(recentlist);
				var sortedlist = Object.keys(recentlist).map(function (key) { return recentlist[key]; });
				sortedlist.sort(function(a, b){
					a.t = jqcc.cometchat.processTimestamp(a.t);
					b.t = jqcc.cometchat.processTimestamp(b.t);
					return b.t - a.t;
				});
				sortedlist = sortedlist.slice(0, settings.recentListLimit);
				if(typeof(jqcc[calleeAPI].recentList) == 'function') {
					jqcc[calleeAPI].recentList(sortedlist);
				}
			}
		}

		arguments.callee.processRecentmessages = function(recentlist){
			if(typeof(recentlist) == "object") {
				var staticCDNUrl = jqcc.cometchat.getStaticCDNUrl();
				$.each(recentlist, function(id, details){
					if(typeof(details.m) != "undefined" && details.m.indexOf("CC^CONTROL_") != -1) {
						var data = (details.m).replace('CC^CONTROL_','');
						data = JSON.parse(data);
						switch(data.type){
							case 'core':
								break;
							case 'smiley':
								if(data.m.length > 20){
									data.m = data.m.substring(0, 19)+' ';
								}
								var arrStr = data.m.split(/[::]/);
								for(var i=0;i<arrStr.length;i++) {
									if(arrStr[i] != '' && arrStr[i].indexOf(' ') == -1) {
										var smiley = '<img class="cometchat_smiley" height="15" width="15" src="'+staticCDNUrl+'writable/images/smileys/'+arrStr[i]+'.png" title="'+arrStr[i]+'"> ';
										data.m = (data.m).replace(':'+arrStr[i]+':',smiley);
									}
								}
								details.m = data.m;
								break;
							default:
								break;
						}
					}
				});
			} else if(typeof(recentlist) == "string") {
				var smileycount = (recentlist.match(/cometchat_smiley/g) || []).length;
				var stickercount = (recentlist.match(/cometchat_stickerImage/g) || []).length;
				var handwritecount = (recentlist.match(/cc_handwrite_image/g) || []).length;
				var audiofilecount = (recentlist.match(/file_audio/g) || []).length;
				var filemsgcount = (recentlist.match(/imagemessage/g) || []).length;
				var imagemsgcount = (recentlist.match(/cometchat_botimagefile/g) || []).length;
				var videobroadcastcount = (recentlist.match(/jqcc.ccbroadcast/g) || []).length;
				var screensharecount = (recentlist.match(/jqcc.ccscreenshare/g) || []).length;
				var whiteboardcount = (recentlist.match(/jqcc.ccwhiteboard/g) || []).length;
				var writeboardcount = (recentlist.match(/jqcc.ccwriteboard/g) || []).length;
				var avchatcount = (recentlist.match(/jqcc.ccavchat/g) || []).length;
				var audiochatcount = (recentlist.match(/jqcc.ccaudiochat/g) || []).length;
				var colortextcount = (recentlist.match(/style="color:/g) || []).length;

				if(smileycount > 0) {
					if(colortextcount > 0) {
						recentlist = recentlist.replace(/<\/?span[^>]*>/g,"");
					}
					var regex = /<img.*?title=['"](.*?)['"]/;
					var smileyarray = [];
					for(var i=0;i<smileycount;i++){
						smileyarray[i] = (':'+regex.exec(recentlist)[1]+':').toLowerCase();
						recentlist = recentlist.replace(/<img[^>]*>/,smileyarray[i]);
					}
					recentlist = 'CC^CONTROL_'+JSON.stringify({'m':recentlist,'type':'smiley'});
				} else if(stickercount > 0) {
					recentlist = language['sticker'];
				} else if(handwritecount > 0) {
					recentlist = language['handwrite'];
				} else if(audiofilecount > 0) {
					recentlist = language['audiofile'];
				} else if(filemsgcount > 0) {
					recentlist = language['file'];
				} else if(imagemsgcount > 0) {
					recentlist = language['image'];
				} else if(videobroadcastcount > 0) {
					recentlist = language['videobroadcast'];
				} else if(screensharecount > 0) {
					recentlist = language['screenshare'];
				} else if(whiteboardcount > 0) {
					recentlist = language['whiteboard'];
				} else if(writeboardcount > 0) {
					recentlist = language['writeboard'];
				} else if(avchatcount > 0) {
					recentlist = language['avchat'];
				} else if(audiochatcount > 0) {
					recentlist = language['audiochat'];
				} else if(colortextcount > 0) {
					recentlist = recentlist.replace(/<\/?span[^>]*>/g,"");
				} else if(recentlist.indexOf("<a ") != -1) {
					var regex = /<a.*?href=['"](.*?)['"]/;
					var linktext = regex.exec(recentlist)[1];
					recentlist = recentlist.replace(/<\/?a[^>]*>/g,linktext);
				}

				if(recentlist.length > 20 && recentlist.indexOf("CC^CONTROL_") == -1){
					recentlist = recentlist.substring(0, 19);
				}
				if(recentlist.indexOf("CC^CONTROL_") !== -1 && smileycount == 0){
					recentlist = '';
				}
			}
			return recentlist;
		}

		arguments.callee.processTimestamp = function(ts){
			if((ts+'').length == 10) {
				ts *= 1000;
			}
			return ts;
		}
		/** Recent Chats End **/

		/** External Variable Start **/
		arguments.callee.setExternalVariable = function(name, value){
			ccvariable.externalVars[name] = value;
		};
		arguments.callee.getExternalVariable = function(name){
			if(ccvariable.externalVars[name]){
				return ccvariable.externalVars[name];
			}else{
				return '';
			}
		};
		/** External Variable End **/

		/** Internal Variable Start **/
		arguments.callee.setInternalVariable = function(name, value){
			ccvariable.internalVars[name] = value;
		};
		arguments.callee.getInternalVariable = function(name){
			if(ccvariable.internalVars[name]){
				return ccvariable.internalVars[name];
			}else{
				return '';
			}
		};
		/** Internal Variable Start **/

		/** Session Variable Start **/
		arguments.callee.getSessionVariable = function(name){
			if(ccvariable.sessionVars[name]){
				return ccvariable.sessionVars[name];
			}else{
				return '';
			}
		};

		arguments.callee.setSessionVariable = function(name, value){
			/**
				Session variables:
				The variables are separated by colon(':')
				chats:
					The variable indicates whether the "Chats" panel is open or close.
					The possible values are: (0 or '' ) => close and 1 => Open
				openedtab:
					The variable stores the tab opened under chats tab.
					The possible values are: (0 or '' ) => Recent tab, 1 => Contacts tab and 2 => Groups tab
				chatboxes:
					The variable stores the chatboxes along with their properties.
					The chatboxes are separated by comma (',')
					The properties of a chatbox are separated by pipe ('|')
					The first chatbox property stores the userid or groupid. The groupids are prefixed by '_'
					The second chatbox property stores the state of the chatbox. 0=> closed, 1=>opened and 2=>minimized
					The third chatbox property stores unread message count.
			**/
			ccvariable.sessionVars[name] = value;
			var cc_state = '';
			if(ccvariable.sessionVars['chats']){
				cc_state += ccvariable.sessionVars['chats'];
			}
			cc_state += ':';
			if(typeof(ccvariable.sessionVars['openedtab']) != "undefined"){
				cc_state += ccvariable.sessionVars['openedtab'];
			}
			cc_state += ':';
			if(ccvariable.sessionVars['chatboxstates']){
				cc_state += ccvariable.sessionVars['chatboxstates'];
			}
			var oldValue = $.cookie(settings.cookiePrefix+'state');
			if(oldValue != cc_state){
				$.cookie(settings.cookiePrefix+'state', cc_state, {path: '/'});
				jqcc.cometchat.publishToStorage('cometchat_chattab_state'+ccvariable.userid,'restoreState');
			}
		};
		arguments.callee.restoreFromCCState = function(){
			var cc_state = $.cookie(settings.cookiePrefix+'state');
			if(cc_state!=null){
				var cc_states = cc_state.split(/:/);
				if(cc_states[0]){
					if(ccvariable.sessionVars['chats'] != cc_states[0]){
						ccvariable.sessionVars['chats'] = cc_states[0];
						if(typeof(jqcc[calleeAPI]) == "function" && typeof(jqcc[calleeAPI].openMainContainer)=='function'){
							jqcc[calleeAPI].openMainContainer();
						}
					}
				}
				if(cc_states[1]!=undefined){
					if(ccvariable.sessionVars['openedtab'] != cc_states[1]){
						ccvariable.sessionVars['openedtab'] = cc_states[1];
						if(typeof(jqcc[calleeAPI]) == "function" && typeof(jqcc[calleeAPI].openChatTab)=='function'){
							jqcc[calleeAPI].openChatTab(parseInt(cc_states[1]), 1);
						}
					}
				}
				if(cc_states[2]!=undefined){
					if(ccvariable.sessionVars['chatboxstates'] != cc_states[2]){
						ccvariable.sessionVars['chatboxstates'] = cc_states[2];
						var chatboxstates = {};
						var statestoapply = [];
						var chatboxstatesarray = cc_states[2].split(/,/);
						var next = 0;
						$.each(ccvariable.chatBoxOrder, function(i, e) {
							if((chatboxstatesarray[next] == '' || typeof(chatboxstatesarray[next])==="undefined") || chatboxstatesarray[next].split(/\|/)[0] != ccvariable.chatBoxOrder[next]){
								if(typeof(ccvariable.chatBoxOrder[next]) != 'undefined'){
									if(ccvariable.chatBoxOrder[next].charAt(0)=='_'){
										key = parseInt(ccvariable.chatBoxOrder[next].replace('_',''));
										jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].closeChatroom(key,1);
									}else{
										jqcc[calleeAPI].closeChatbox(ccvariable.chatBoxOrder[next],1);
									}
									if(i != 0)
										next = next;
									else if(i == 0)
										next = 0;
								}
							}else{
								next = next+1;
							}
						});
						for(var i=0,len=chatboxstatesarray.length;i<len;i++){
							var state = chatboxstatesarray[i].split(/\|/);
							if(!state[0]){
								continue;
							}
							chatboxstates[state[0]]=chatboxstatesarray[i]; // stores states of chatboxes
							ccvariable.chatBoxOrder.push(state[0]);// preserves order of chatboxes
							var params = {};
							if(state[0].charAt(0)=='_'){
								params.g=1;
								state[0] = state[0].replace('_','');
							}
							params.id=parseInt(state[0]);
							if(state[1]){
								params.s = parseInt(state[1]);
							}
							if(state[2]){
								params.c = parseInt(state[2]);
							}
							statestoapply.push(params);
						}
						ccvariable.internalVars['chatboxstates'] = chatboxstates;
						if(typeof(jqcc[calleeAPI]) == "function" && typeof(jqcc[calleeAPI].applyChatBoxStates)=='function' && statestoapply.length > 0){
							jqcc[calleeAPI].applyChatBoxStates(statestoapply);
						}
					}
				}
			}
		}
		arguments.callee.updateChatBoxState = function(params){
			/* params: JSON Object with the properties:
				id: userid or group id
				g: optional indicating id is user or group
				s: state of the chatbox
				c: count of unread messages
			*/
			if (getURLParameter('crid') != 'null'){
				return;
			}
			if(!params.hasOwnProperty('id') || !$.isNumeric(params.id)){
				return;
			}
			if(!ccvariable.internalVars.hasOwnProperty('chatboxstates')){
				ccvariable.internalVars['chatboxstates'] = {};
			}
			var chatboxstates = ccvariable.internalVars['chatboxstates'];
			var key = ''+parseInt(params.id);
			var unreadcount = 0;
			if(params.hasOwnProperty('g') && params.g==1){
				key = '_'+key;
			}
			if(!params.hasOwnProperty('c')){
				params.c = 0;
			}
			unreadcount += params.c;
			if(chatboxstates.hasOwnProperty(key)){
				var states = chatboxstates[key].split('|');
				var oldstate = states[1];
				var oldunreadcount = states[2];
				if(!params.hasOwnProperty('s')){
					params.s = states[1];
				}
				switch(params.s){
					case 0:
					case '':
					case '0':
						if(oldunreadcount){
							unreadcount += parseInt(oldunreadcount);
						}
						if(ccvariable.chatBoxOrder.indexOf(key)>-1 && unreadcount == 0){
							ccvariable.chatBoxOrder.splice(ccvariable.chatBoxOrder.indexOf(key),1);
						}
						if(unreadcount > 0){
							ccvariable.chatBoxOrder.push(key);
						}
						break;
					case 1:
					case '1':
						if(calleeAPI == 'embedded') {
							if(ccvariable.chatBoxOrder.indexOf(key)>-1){
								ccvariable.chatBoxOrder.splice(ccvariable.chatBoxOrder.indexOf(key),1);
							}
							ccvariable.chatBoxOrder.push(key);
						}else {
							if(oldstate == 0 || oldstate == ''){
								if(ccvariable.chatBoxOrder.indexOf(key)==-1){
									ccvariable.chatBoxOrder.push(key);
								}
							}
						}
						unreadcount = 0;
						break;
					case 2:
					case '2':
						if(oldstate==2){
							if(oldunreadcount){
								unreadcount += parseInt(oldunreadcount);
							}
						}
						break;
					default:
						unreadcount = 0;
						break;
				}
			}else{
				if(ccvariable.chatBoxOrder.indexOf(key)==-1){
					ccvariable.chatBoxOrder.push(key);
				}
			}
			chatboxstates[key] = key;
			chatboxstates[key] += '|';
			if(params.hasOwnProperty('s')&& params.s>0){
				chatboxstates[key] += params.s;
			}
			chatboxstates[key] += '|';
			if(unreadcount){
				chatboxstates[key] += unreadcount;
			}
			chatboxstatesarray = [];
			var result = [];
			for(var i = 0, len = ccvariable.chatBoxOrder.length; i<len; i++){
				if(result.indexOf(ccvariable.chatBoxOrder[i])==-1){
					result.push(ccvariable.chatBoxOrder[i]);
					chatboxstatesarray.push(chatboxstates[ccvariable.chatBoxOrder[i]]);
				}
			}
			ccvariable.chatBoxOrder = result;
			ccvariable.internalVars['chatboxstates'] = chatboxstates;
			if(typeof(params.r) == "undefined"){
				jqcc.cometchat.setSessionVariable('chatboxstates',chatboxstatesarray.join());
			}
			return unreadcount;
		}
		/** Session Variable End **/

		/** Theme Variable Start **/
		arguments.callee.incrementThemeVariable = function(name){
			ccvariable[name]++;
		};
		arguments.callee.setThemeVariable = function(name, value){
			ccvariable[name] = value;
		};
		arguments.callee.setThemeArray = function(name, id, value){
			if(typeof(ccvariable[name])==="undefined"){
				ccvariable[name]={};
			}
			ccvariable[name][id] = value;
		};
		arguments.callee.unsetThemeArray = function(name, id){
			if(typeof(ccvariable[name])!=="undefined"){
				delete ccvariable[name][id];
			}else{
				return false;
			}
		};
		arguments.callee.getThemeArray = function(name, id){
			if(typeof(ccvariable[name])!=="undefined"){
				return ccvariable[name][id];
			}else{
				return false;
			}
		};
		arguments.callee.getThemeVariable = function(name){
			return ccvariable[name];
		};
		/** Theme Variable End **/

		arguments.callee.userClick = function(listing,isrecent){
			if(typeof (jqcc[calleeAPI].userClick)!=='undefined'){
				jqcc[calleeAPI].userClick(listing,isrecent);
			}
		};
		arguments.callee.orderChatboxes = function(){
			return;
			/*var activeids = '';
			var activeChatboxId = '';
			var selfNewMessages = 0;
			for(chatbox in ccvariable.chatBoxesOrder){
				if(ccvariable.chatBoxesOrder.hasOwnProperty(chatbox)){
					if(ccvariable.chatBoxesOrder[chatbox]!=null){
						if(!Number(ccvariable.chatBoxesOrder[chatbox])){
							ccvariable.chatBoxesOrder[chatbox] = 0;
						}
						activeids += chatbox.replace('_','')+'|'+ccvariable.chatBoxesOrder[chatbox]+',';
						activeChatboxId += chatbox.replace('_','')+',';
						if(ccvariable.chatBoxesOrder[chatbox]>0){
							selfNewMessages = 1;
						}
					}
				}
			}
			ccvariable.newMessages = selfNewMessages;
			activeids = activeids.slice(0, -1);
			activeChatboxId = activeChatboxId.slice(0, -1);
			ccvariable.externalVars["activeChatboxIds"] = activeChatboxId;
			jqcc.cometchat.setSessionVariable('activeChatboxes', activeids);*/
		};
		arguments.callee.c5 = function(){
			branded();
			preinitialize();
			return;
		};
		arguments.callee.c6 = function(){
			preinitialize();
			return;
		};
		arguments.callee.getBaseData = function(){
			return ccvariable.baseData;
		};
		arguments.callee.getActiveId = function(){
			return ccvariable.openChatboxId;
		};
		arguments.callee.getUserID = function(){
		   return ccvariable.userid;
		};
		arguments.callee.getUser = function(id, callbackfn){
		  if (typeof (jqcc.cometchat.getUserFromUID) == 'function') {
			  jqcc.cometchat.getUserFromUID(id, callbackfn);
		  } else {
			  $.ajax({
					url: baseUrl+"cometchat_getid.php",
					data: {userid: id, basedata: ccvariable.baseData},
					cache: false,
					dataType: 'jsonp',
					type: ccvariable.dataMethod,
					timeout: ccvariable.dataTimeout,
					success: function(response){
						jqcc.cometchat.addBuddy(response);
						data = response[0] || response;
						if(data.hasOwnProperty('id')&&data.id!=null&&data.id!='null'&&data.id!=0){
							window[callbackfn](data);
						}else{
							window[callbackfn](0);
						}
					}
				});
			}
		};
		arguments.callee.getUserAuth = function(platform) {
		   var userAuthJson = {};
		   userAuthJson['basedata'] = jqcc.cometchat.getBaseData();
		   userAuthJson['baseurl'] = jqcc.cometchat.getBaseUrl();
		   userAuth = JSON.stringify(userAuthJson);

		   if(platform == "1") {
			   androidCometchat.sendToMobile(userAuth);
		   } else if (platform == "2") {
			   return userAuth;
		   }
		};
		arguments.callee.ping = function(){
			return 1;
		};
		arguments.callee.checkReadReceiptSetting = function(fromid){
			var showReadReceipt = 0;
			if(typeof $.cookie(settings.cookiePrefix+"read") == 'undefined' || $.cookie(settings.cookiePrefix+"read") == null){
				if(jqcc.cometchat.getThemeArray('buddylistReadReceiptSetting',jqcc.cometchat.getUserID()) == 1 && jqcc.cometchat.getThemeArray('buddylistReadReceiptSetting',fromid) == 1){
					showReadReceipt = 1;
				}
			}else if($.cookie(settings.cookiePrefix+"read")=='true' && jqcc.cometchat.getThemeArray('buddylistReadReceiptSetting',fromid) == 1){
				showReadReceipt = 1;
			}
			return showReadReceipt;
		};
		arguments.callee.getLanguage = function(id){
			if(typeof(id) != 'undefined' && id != null && id != ''){
				if(typeof(language[id]) != 'undefined' ){
					return language[id];
				}else{
					return '';
				}
			}
			return language;
		};
		/**
		 * chatWith
		 * @params userid or {'groupid':''} for groups
		 * return open respective chatbox
		 */
		arguments.callee.chatWith = function(id, cccloud){
			if (typeof(id) != 'object') {
				id = parseInt(id);
			}
		    if(typeof(jqcc.cometchat.chatWithUID) == 'function' && typeof(cccloud) != 'undefined'){
			   jqcc.cometchat.chatWithUID(id);
		    }else {
		   		if(typeof(id) == 'number'){
		   			if(typeof (jqcc[calleeAPI]) !== 'undefined' && typeof (jqcc[calleeAPI].chatWith)!=='undefined' && jqcc('#cometchat_synergy_iframe').length==0){
		   				jqcc[calleeAPI].chatWith(id);
		   			} else {
		   				var controlparameters = {"type":"modules", "name":"cometchat", "method":"chatWith", "params":{"uid":id, "synergy":"1"}};
		   				controlparameters = JSON.stringify(controlparameters);
		   				if(typeof(jqcc('#cometchat_synergy_iframe')[0]) != 'undefined'){
		   					jqcc('#cometchat_synergy_iframe')[0].contentWindow.postMessage('CC^CONTROL_'+controlparameters,'*');
		   				}
		   			}
		   		}else if(typeof(id) == 'object' && id.hasOwnProperty('groupid')){
		   			jqcc.cometchat.getChatroomDetails({'id':id.groupid,'loadroom':1});
		   		}
			}
		};
		/**
		 * getUnreadMessageCount
		 * @params undefined
		 *			returns total count of unread messages including all the contacts and groups.
		 * @params string 'contacts' or 'groups'
		 *			returns total count of unread messages only for one-on-one chat or group chat.
		 * @params {contact: [userid1, userid2, ...], group: [groupid1, groupid2, ...]}
		 * 			returns the sum of unread message counts for the contacts and groups provided in params
		 */
		arguments.callee.getUnreadMessageCount = function(params){
			var cc_state = jqcc.cookie('cc_state');
			if(cc_state==null){
				return 0;
			}
			if(typeof params == 'undefined'){
				params = {contacts: [], groups: []};
			}
			if(typeof params == 'string'){
				if(params == 'contact' || params == 'contacts'){
					params = {contacts: []};
				}else if(params == 'group' || params == 'groups'){
					params = {groups: []};
				}
			}
			if(typeof params != 'object'){
				console.warn('Please check the document to use the JS API getUnreadMessageCountTest');
				return 0;
			}

			var chatboxstates = cc_state.split(':')[2];
			if(chatboxstates == '' || chatboxstates == 'undefined'){
				return 0;
			}

			chatboxstates = chatboxstates.split(',')
			var groupsdata = {};
			var contactsdata = {};
			for(chatboxstate in chatboxstates){
				states = chatboxstates[chatboxstate].split('|');
				if(states[2]=='' || states[2] == 'undefined'){
					states[2] = 0;
				}
				states[2] = parseInt(states[2]);
				if(states[0].charAt(0)=='_'){
					groupsdata[states[0].slice(1)] = states[2];
				}else{
					contactsdata[states[0]] = states[2];
				}
			}
			var unreadmessagecount = 0;
			for(param in params){
				if(param == 'contact' || param == 'contacts'){
					for(contact in contactsdata){
						if($.isEmptyObject(params[param]) || params[param].indexOf(parseInt(contact))!=-1){
							unreadmessagecount += contactsdata[contact];
						}
					}
				}
				if(param == 'group' || param == 'groups'){
					for(group in groupsdata){
						if($.isEmptyObject(params[param]) || params[param].indexOf(parseInt(group))!=-1){
							unreadmessagecount += groupsdata[group];
						}
					}
				}
			}
			return unreadmessagecount;
		}
		arguments.callee.getRecentData = function(id){
			$.ajax({
				cache: false,
				url: baseUrl+"cometchat_receive.php",
				data: {chatbox: id, basedata: ccvariable.baseData},
				dataType: 'jsonp',
				type: ccvariable.dataMethod,
				timeout: ccvariable.dataTimeout,
				success: function(data){
					if(typeof (jqcc[calleeAPI].loadData)!=='undefined'){
						jqcc[calleeAPI].loadData(id, data);
					}
				}
			});
		};
		arguments.callee.getUserDetails = function(ids,callback){
			var isarray = Object.prototype.toString.call(ids) === '[object Array]';
			if(!ids || (typeof ids !== 'number' &&  !isarray)||(typeof ids === 'number' && ids!==parseInt(ids)) || (isarray && ids.length==0)){
				return;
			}
			var id = (isarray && ids.length>0)?ids.join():ids;

			$.ajax({
				url: baseUrl+"cometchat_getid.php",
				data: {userid: id, basedata: ccvariable.baseData},
				type: ccvariable.dataMethod,
				timeout: ccvariable.dataTimeout,
				cache: false,
				dataType: 'jsonp',
				success: function(data){
					jqcc.cometchat.addBuddy(data);
					if(ccvariable.callbackfn=='mobilewebapp'){
						jqcc[ccvariable.callbackfn].loadUserData(id, data);
					}
					if(callback){
						if(typeof jqcc[calleeAPI][callback]){
							jqcc[calleeAPI][callback](ids);
						}
					}
				}
			});
		};
		arguments.callee.launchModule = function(id){
			if(typeof (jqcc[calleeAPI].launchModule)!=='undefined' && jqcc("#cometchat").length > 0){
				jqcc[calleeAPI].launchModule(id);
			} else {
				var controlparameters = {"type":"modules", "name":"cometchat", "method":"launchModule", "params":{"uid":id, "synergy":"1","embedded":"1"}};
				controlparameters = JSON.stringify(controlparameters);
				if(typeof(jqcc('#cometchat_synergy_iframe')[0]) != 'undefined'){
					jqcc('#cometchat_synergy_iframe')[0].contentWindow.postMessage('CC^CONTROL_'+controlparameters,'*');
				}
			}
		};
		arguments.callee.toggleModule = function(id){
			if(typeof (jqcc[calleeAPI].toggleModule)!=='undefined'){
				jqcc[calleeAPI].toggleModule(id);
			}
		};
		arguments.callee.closeModule = function(id){
			if(typeof (jqcc[calleeAPI].closeModule)!=='undefined'){
				jqcc[calleeAPI].closeModule(id);
			}
		};
		arguments.callee.closeAllModule = function(){
			if(typeof (jqcc[calleeAPI].closeAllModule)!=='undefined'){
				jqcc[calleeAPI].closeAllModule();
			}
		};
		arguments.callee.closeChatbox = function(id){
			if(typeof (jqcc[calleeAPI].closeChatbox)!=='undefined'){
				jqcc[calleeAPI].closeChatbox(id);
			}
		};
		arguments.callee.joinChatroom = function(roomid, inviteid, roomname){
			if(typeof (jqcc[calleeAPI].joinChatroom)!=='undefined'){
				jqcc.cometchat.chatroom(roomid, roomname, 2, inviteid);
			}
		};
		arguments.callee.createChatboxSet = function(id, name, status, message, avatar, link, isdevice, chatboxstate, unreadmessagecount, restored){
			if(id != 0 || !isNaN(id) || typeof(id) != "undefined"){
				$.ajax({
					url: baseUrl+"cometchat_getid.php",
					data: {userid: id, basedata: ccvariable.baseData},
					dataType: 'jsonp',
					type: ccvariable.dataMethod,
					timeout: ccvariable.dataTimeout,
					cache: false,
					success: function(response){
						if(response){
							jqcc.cometchat.addBuddy(response);
							var data = response[0] || response;
							if(data.hasOwnProperty('id')&&data.id!=null&&data.id!='null'&&data.id!=0){
							jqcc[settings.theme].createChatbox(id, data.n, data.s, data.m, data.a, data.l, data.d, chatboxstate, unreadmessagecount, restored);
							}
						}
					},
					error: function(data){
						jqcc.cometchat.setThemeVariable('trying', id, 5);
					}
				});
			}
		};
		arguments.callee.updateChatboxSet = function(id,prepend){
			var postVars={chatbox: id, basedata: ccvariable.baseData};
			if(typeof(prepend)!=="undefined"){
				postVars["prepend"]=prepend;
			}
			$.ajax({
				cache: false,
				url: baseUrl+"cometchat_receive.php",
				data: postVars,
				type: ccvariable.dataMethod,
				timeout: ccvariable.dataTimeout,
				dataType: 'jsonp',
				success: function(data){
					if(data){
						if(typeof(prepend)!=="undefined"){
							jqcc[settings.theme].prependMessages(id, data);
						}else{
							jqcc[settings.theme].updateChatboxSuccess(id, data);
						}
					}
				}
			});
		};
		arguments.callee.chatboxKeydownSet = function(id, message, callbackfn,localmessagekey){
			var localmessageid = jqcc.cometchat.updateOfflinemessages({
				"id": id,
				"message":message,
				"localmsgid":localmessagekey,
				'msgStatus':1
			});
			if(localmessageid != '' && localmessageid != 'undefined') {
				jqcc[calleeAPI].addMessages([{"from": id, "message": message, "broadcast": 0, "direction": 2, "calledfromsend": 0, "localmessageid": localmessageid}]);
			}
			if(typeof(callbackfn) === "undefined" || callbackfn !="") {
				callbackfn = ccvariable.callbackfn;
			}
			ccvariable.sendVars["callbackfn"] = callbackfn;
			if(message.length>1000){
				if(message.indexOf(" ") == -1 || message.indexOf(" ") >= 1000) {
					message = message.substr(0,999)+" "+message.substr(999,message.length);
				}
				if(message.charAt(999)==' '){
					messagecurrent = message.substring(0, 1000);
				}else{
					messagecurrent = message.substring(0, 1000);
					var spacePos = messagecurrent.length;
					while(messagecurrent.charAt(spacePos)!=' '){
						spacePos--;
					}
					messagecurrent = message.substring(0, spacePos);
				}
				messagenext = message.substring(messagecurrent.length);
				if(messagenext.length>0){
					messagecurrent = messagecurrent+"...";
				}
			}else{
				messagecurrent = message;
				messagenext = '';
			}
			message = messagecurrent;
			sendAjax = function (broadcastflag) {

				sendajax = false;
				$.ajax({
					url: baseUrl+"cometchat_send.php",
					data: ccvariable.sendVars,
					dataType: 'jsonp',
					type: ccvariable.dataMethod,
					timeout: ccvariable.dataTimeout,
					success: function(data){
						ccvariable.sendVars = {};
						if(data != null && typeof(data) != 'undefined'){
							var offlinemessages = jqcc.cometchat.getFromStorage('offlinemessagesqueue');
							if(data.hasOwnProperty("localmessageid") && typeof(data.localmessageid) != 'undefined') {
								if(offlinemessages.hasOwnProperty(data.localmessageid)) {
									delete offlinemessages[data.localmessageid];
									jqcc.cometchat.updateToStorage('offlinemessagesqueue',offlinemessages);
								}
							}else {
								jqcc.each(data,function(key,value) {
									if(offlinemessages.hasOwnProperty(value.localmessageid)) {
										delete offlinemessages[value.localmessageid];
										jqcc.cometchat.updateToStorage('offlinemessagesqueue',offlinemessages);
									}
								});
							}
							ccvariable.localmessageid = 0;
							if(jqcc.isEmptyObject(jqcc.cometchat.getFromStorage('offlinemessagesqueue'))) {
								jqcc.cometchat.updateToStorage('offmsgcounter',{'lmid':0});
							}
							if(typeof (jqcc[calleeAPI].addMessages)!=='undefined'){
								if(broadcastflag){
									jqcc[calleeAPI].addMessages(data);
								}else{
									jqcc[calleeAPI].addMessages([{"from": id, "message": data.m, "id": data.id, "broadcast": 0, "direction": data.direction, "calledfromsend": 1, "localmessageid":data.localmessageid}]);
									var alreadyreceivedunreadmessages = jqcc.cometchat.getFromStorage('receivedunreadmessages');
									var arr = Object.keys(alreadyreceivedunreadmessages).map(function(k) { return alreadyreceivedunreadmessages[k] });
									var maxmsgid = Math.max.apply(null,arr);
									if( data.id < maxmsgid){
										jqcc.cometchat.updateToStorage('receivedunreadmessages',{});
									}
								}
							}
						}
						jqcc.cometchat.stimulateHeartbeat({heartbeatTime:settings.minHeartbeat});
						ccvariable.sendVars = {};
						sendajax = true;
					},
				   error: function(data){
	   					jqcc.cometchat.updateOfflinemessages({
							"id": id,
							"message":message,
							"localmsgid":localmessageid,
							'msgStatus':0
						});
						sendajax = true;
						if(jqcc.isEmptyObject(broadcastData)){
							sendbroadcastinterval = 0;
							clearInterval(sendbroadcastinterval);
						}
				   }
			   });
			}
			$( document ).ajaxStop(function() {
				sendajax = true;
				if(jqcc.isEmptyObject(broadcastData)){
					sendbroadcastinterval = 0;
					clearInterval(sendbroadcastinterval);
				}
			});
			if(sendajax == true){
				ccvariable.sendVars["basedata"] = ccvariable.baseData;
				if(jqcc.isEmptyObject(broadcastData)){
					ccvariable.sendVars["to"] = id;
					ccvariable.sendVars["message"] = message;
					ccvariable.sendVars['localmessageid'] = localmessageid;
					var broadcastflag = 0;
				}else{
					broadcastData[localmessageid] = {"to":id,"message":message};
					ccvariable.sendVars["broadcast"] = broadcastData;
					var broadcastflag = 1;
				}
				sendAjax(broadcastflag);
				ccvariable.sendVars = {};
			}else{
				broadcastData[localmessageid] = {"to":id,"message":message};
				if(sendbroadcastinterval == 0){
					sendbroadcastinterval = setInterval(function(){
						sendbroadcastinterval = 0;
						clearInterval(sendbroadcastinterval);
						if(jqcc.isEmptyObject(broadcastData)){
							clearInterval(sendbroadcastinterval);
						}
						if(sendajax == true && !jqcc.isEmptyObject(broadcastData)){
							sendbroadcastinterval = 0;
							clearInterval(sendbroadcastinterval);
							ccvariable.sendVars["basedata"] = ccvariable.baseData;
							ccvariable.sendVars["broadcast"] = broadcastData;
							sendAjax(1);
							broadcastData = {};
							ccvariable.sendVars = {};
						}
					}, 50);
				}
			}
			if(messagenext.length>0){
				jqcc.cometchat.chatboxKeydownSet(id, '...'+messagenext);
			}
		};

		arguments.callee.sendMessage = function(id, message){
			if(jqcc("#cometchat").length > 0 || jqcc(".cometchat_ccmobiletab_redirect").length > 0) {
				jqcc.cometchat.chatboxKeydownSet(id,message);
			} else {
				var controlparameters = {"type":"modules", "name":"cometchat", "method":"sendMessage", "params":{"uid":id, "message":message, "synergy":"1","embedded":"1"}};
				controlparameters = JSON.stringify(controlparameters);
				if(typeof(jqcc('#cometchat_synergy_iframe')[0]) != 'undefined'){
					jqcc('#cometchat_synergy_iframe')[0].contentWindow.postMessage('CC^CONTROL_'+controlparameters,'*');
				}
			}
		};

		arguments.callee.addMessage = function(boxid,message,msgid,nopopup){
			if(typeof(nopopup) === "undefined" || nopopup =="") {
				nopopup = 0;
			}
			if(typeof (jqcc[calleeAPI].addMessages)!=='undefined'){
				jqcc[calleeAPI].addMessages([{"from": boxid, "message": message, "self": 1, "old": 1, "id": msgid, "sent": Math.floor(new Date().getTime()), "nopopup": nopopup}]);
			}
			if(typeof (jqcc[calleeAPI].scrollDown)!=='undefined'){
				jqcc[calleeAPI].scrollDown(boxid);
			}
		};
		arguments.callee.updateOfflinemessages = function(obj){
			var options = {"msgStatus" : 1};
			var localmessageid = '';
			var offlinemessagequeue = jqcc.cometchat.getFromStorage('offlinemessagequeue');
			$.extend( true, options, obj );
			if(options.id != '' && options.id != 'undefined' && options.message != '' && options.message != 'undefined') {
				if(typeof(options.localmsgid) != 'undefined' && options.localmsgid != "") {
					localmessageid = options.localmsgid;
				}else {
					var currentdate = new Date();
					ccvariable.localmessageid = currentdate.getTime();
					localmessageid = '_'+ccvariable.localmessageid;
					jqcc.cometchat.updateToStorage('offmsgcounter',{'lmid':localmessageid});
				}
				if(typeof(options.chatroommode) != 'undefined' && options.chatroommode != '') {
					options['chatroommode'] = options.chatroommode;
				}
				if(typeof(options.type) != 'undefined' && options.type != '') {
					options.message['localmsgid'] = localmessageid;
				}
				offlinemessagequeue[localmessageid] = options;
				jqcc.cometchat.updateToStorage('offlinemessagesqueue',offlinemessagequeue);
				return localmessageid;
			}
		};
		arguments.callee.statusSendMessageSet = function(message){
			$.ajax({
				url: baseUrl+"cometchat_send.php",
				data: {statusmessage: message, basedata: ccvariable.baseData},
				dataType: 'jsonp',
				type: ccvariable.dataMethod,
				timeout: ccvariable.dataTimeout,
				success: function(data){
					ccvariable.statusmessage = message;
					if(typeof jqcc[settings.theme].statusSendMessageSuccess != "undefined") {
						jqcc[settings.theme].statusSendMessageSuccess();
					}
				},
				error: function(data){
					if (typeof jqcc[settings.theme].statusSendMessageError != "undefined") {
					   jqcc[settings.theme].statusSendMessageError();
				   }
				}
			});
		};
		arguments.callee.updateSettings = function(guestname, statusmessage, status, lastseensetting, readreceiptsetting){
			$.ajax({
				url: baseUrl+"cometchat_send.php",
				data: {statusmessage: statusmessage, basedata: ccvariable.baseData, status: status, lastseenSettingsFlag: lastseensetting, readreceiptSettingsFlag: readreceiptsetting, guestname: guestname},
				dataType: 'jsonp',
				type: ccvariable.dataMethod,
				timeout: ccvariable.dataTimeout,
				success: function(data){
					//jqcc[settings.theme].updateSettingsSuccess();
				},
				error: function(data){
					//jqcc[settings.theme].updateSettingsError();
				}
			});
		};
		arguments.callee.updateReadReceipt = function(readreceiptsetting){
			$.ajax({
				url: baseUrl+"cometchat_send.php",
				data: {readreceiptsetting: readreceiptsetting},
				dataType: 'jsonp',
				type: ccvariable.dataMethod,
				timeout: ccvariable.dataTimeout,
				error: function(data){
				}
			});
		};
		arguments.callee.setGuestNameSet = function(guestname){
			$.ajax({
				url: baseUrl+"cometchat_send.php",
				data: {guestname: guestname, basedata: ccvariable.baseData},
				dataType: 'jsonp',
				type: ccvariable.dataMethod,
				timeout: ccvariable.dataTimeout,
				success: function(data){
					ccvariable.displayname = guestname;
					if(typeof jqcc[settings.theme].setGuestNameSuccess != "undefined") {
						jqcc[settings.theme].setGuestNameSuccess();
					}
				},
				error: function(data){
					if(typeof jqcc[settings.theme].setGuestNameError != "undefined") {
						jqcc[settings.theme].setGuestNameError();
					}
				}
			});
		};
		arguments.callee.hideBar = function(){
			if(typeof (jqcc[calleeAPI].hideBar)!=='undefined'){
				jqcc[calleeAPI].hideBar();
			}
		};
		arguments.callee.getBaseUrl = function(){
			return baseUrl;
		};
		arguments.callee.getStaticCDNUrl = function(){
			return staticCDNUrl;
		};
		arguments.callee.setAlert = function(id, number){
			if(typeof (jqcc[calleeAPI].setModuleAlert)!=='undefined'){
				jqcc[calleeAPI].setModuleAlert(id, number);
			}
		};
		arguments.callee.closeTooltip = function(){
			if(typeof (jqcc[calleeAPI].closeTooltip)!=='undefined'){
				jqcc[calleeAPI].closeTooltip();
			}
		};
		arguments.callee.scrollToTop = function(){
			if(typeof (jqcc[calleeAPI].scrollToTop)!=='undefined'){
				if ((jqcc.cometchat.membershipAccess('scrolltotop','modules'))){
					jqcc[calleeAPI].scrollToTop();
				}
			}
		};
		arguments.callee.goToHomePage = function(){
			if ((jqcc.cometchat.membershipAccess('home','modules'))){
				location.href = "/";
			}
		};
		arguments.callee.reinitialize = function(){
			ccvariable.baseData = $.cookie(settings.cookiePrefix+'data');
			if(typeof (jqcc[calleeAPI].reinitialize)!=='undefined'){
				jqcc[calleeAPI].reinitialize();
			}
		};
		arguments.callee.updateHtml = function(id, temp){
			if(typeof (jqcc[calleeAPI].updateHtml)!=='undefined'){
				jqcc[calleeAPI].updateHtml(id, temp);
			}
		};
		arguments.callee.processMessage = function(id, value){
			if(typeof (jqcc[calleeAPI].processMessage)!=='undefined'){
				return jqcc[calleeAPI].processMessage(id, value);
			}
		};
		arguments.callee.replaceHtml = function(id, value){
			replaceHtml(id, value);
		};
		arguments.callee.getSettings = function(e){
			return settings;
		};
		arguments.callee.getMobileappdetails = function(e){
			return mobileappdetails;
		};

		arguments.callee.getTrayicon = function(e){
			return trayicon;
		};
		arguments.callee.getCcvariable = function(e){
			return ccvariable;
		};
		arguments.callee.echo = function(e){
			return "ECHO";
		};
		arguments.callee.getWebrtcPlugins = function(e){
			return webrtcplugins;
		};
		arguments.callee.subscribe = function(callbackData){
			$.each(callbackData,function(callbackKey,callbacks){
				if(typeof callbackKey == 'string' && typeof callbacks == 'object'){
					ccvariable.registeredCallbacks[callbackKey] = callbacks;
					window[callbackKey] = callbacks;
				}
			})
		};
		arguments.callee.processSubscribeCallback = function(callbackKey,data){
			if(window[callbackKey] !== undefined && ccvariable.registeredCallbacks.hasOwnProperty(callbackKey)){
				$.each(window[callbackKey],function(index,callback){
					callback(data);
				})
			}
		};
		arguments.callee.disableLayout = function(){
			if(typeof(jqcc[calleeAPI].disableLayout) !== 'undefined'){
				jqcc[calleeAPI].disableLayout();
			}
		};
		arguments.callee.addBuddy = function(params){
			if(params.hasOwnProperty('id')){
				params = [params];
			}
			$.each(params,function(i,user){
			   if(user.hasOwnProperty('id')&&user.id!=null&&user.id!='null'&&user.id!=0){
					var id = user.id;
					ccvariable.buddylistName[id] = user.n;
					ccvariable.buddylistMessage[id] = user.m;
					ccvariable.buddylistStatus[id] = user.s;
					ccvariable.buddylistAvatar[id] = user.a;
					ccvariable.buddylistLink[id] = user.l||'';
					ccvariable.buddylistIsDevice[id] = user.d||0;
					ccvariable.buddylistChannelHash[id] = user.ch||'';
					ccvariable.buddylistLastseen[id] = user.ls||'';
					ccvariable.buddylistLastseensetting[id] = user.lstn||0;
					ccvariable.buddylistReadReceiptSetting[id] = user.rdrs||0;
				}
			});
		};
		arguments.callee.updateJabberOnlineNumber = function(number){
			if(typeof (jqcc[calleeAPI].updateJabberOnlineNumber)!=='undefined'){
				jqcc[calleeAPI].updateJabberOnlineNumber(number);
			}
		};
		arguments.callee.getName = function(id){
			if(typeof (ccvariable.buddylistName[id])!=='undefined'){
				return ccvariable.buddylistName[id];
			}
		};
		arguments.callee.lightbox = function(name,caller,windowMode){
			if (jqcc.cometchat.membershipAccess(name,'modules')){
				var allowpopout = 0;
				var callbackfn='';
				var cc_layout = jqcc.cometchat.getChatroomVars('calleeAPI');
				if(ccvariable.callbackfn=='desktop'){
					callbackfn='desktop';
				}
				if(ccvariable.mobileDevice){
					callbackfn='mobilewebapp';
				}
				if(typeof(windowMode)=="undefined"){
					windowMode = 0;
				}
				var callerUrl = "";
				if(typeof(caller) != "undefined"){
					callerUrl = "caller="+caller;
				}
				if(trayicon[name]){
					if(cc_layout == 'docked' && ccvariable.mobileDevice){
						windowMode = 1;
					}

					if(name=='chatrooms'||name=='games'||name=='broadcastmessage'){
						allowpopout = 1;
						if(settings.theme == 'lite' && name=='chatrooms'){
							jqcc[calleeAPI].minimizeOpenChatbox();
						}
					}
					loadCCPopup(trayicon[name][2]+'?'+callerUrl+'&callbackfn='+callbackfn, trayicon[name][0], "status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=0, width="+(Number(trayicon[name][4])+2)+",height="+trayicon[name][5]+"", Number(trayicon[name][4])+2, trayicon[name][5], trayicon[name][1], 0, 0, 0, allowpopout,windowMode);
				}
			}
		};
		arguments.callee.sendStatus = function(message){
			$.ajax({
				url: baseUrl+"cometchat_send.php",
				data: {status: message, basedata: ccvariable.baseData},
				dataType: 'jsonp',
				type: ccvariable.dataMethod,
				timeout: ccvariable.dataTimeout,
				success: function(data){
					ccvariable.currentStatus = message;
					if(typeof(jqcc[calleeAPI].updateStatus)=='function'){
						jqcc[settings.theme].removeUnderline();
						jqcc[calleeAPI].updateStatus(message);
					}
				}
			});
		};
		arguments.callee.tryClickSync = function(id){
			if(ccvariable.buddylistName[id]==null||ccvariable.buddylistName[id]==''){
				if(ccvariable.trying[id]<5){
					setTimeout(function(){
						jqcc.cometchat.tryClickSync(id);
					}, 500);
				}
			}else{
				jqcc.cometchat.chatWith(id);
			}
		};
		arguments.callee.tryClick = function(id){
			if(ccvariable.buddylistName[id]==null||ccvariable.buddylistName[id]==''){
				if(ccvariable.trying[id]<5){
					setTimeout(function(){
						jqcc.cometchat.tryClick(id);
					}, 500);
				}
			}else{
				if(ccvariable['openChatboxId'].indexOf(id)==-1){
					jqcc.cometchat.chatWith(id);
				}
			}
		};
		arguments.callee.notify = function(title, image, message, clickEvent, id, msgid){

			if(typeof jqcc.cometchat.getFromStorage('loggedin_'+jqcc.cometchat.getUserID(),{'lastnotifiedmessageid':0}).lastnotifiedmessageid == "undefined"){
				jqcc.cometchat.updateToStorage('loggedin_'+jqcc.cometchat.getUserID(),{'lastnotifiedmessageid':0});
			}

			if(jqcc.cometchat.getFromStorage('loggedin_'+jqcc.cometchat.getUserID(),{'lastnotifiedmessageid':0}).lastnotifiedmessageid != msgid && jqcc.cometchat.getFromStorage('loggedin_'+jqcc.cometchat.getUserID(),{'lastnotifiedmessageid':0}).lastnotifiedmessageid < msgid){
				jqcc.cometchat.updateToStorage('loggedin_'+jqcc.cometchat.getUserID(),{'lastnotifiedmessageid':msgid});
				if(navigator.userAgent.match(/chrome|firefox/i)&&settings.desktopNotifications==1){
					if(ccvariable.callbackfn=="desktop"&&typeof title!='undefined'&&typeof image!='undefined'&&typeof message!='undefined'){
						jqcc.ccdesktop.desktopNotify(image, message, ccvariable.buddylistName[id], msgid);
					}else if(ccvariable.idleFlag){
						if (Notification.permission !== 'denied') {
							Notification.requestPermission(function (permission) {
								if(!('permission' in Notification)) {
									Notification.permission = permission;
								}
							});
						}
						if(Notification.permission === "granted"&&typeof title!='undefined'&&typeof image!='undefined'&&typeof message!='undefined'){
							tempMsg = jqcc('<div>'+message+'</div>');
							jqcc.each(tempMsg.find('img.cometchat_smiley'),function(){
								jqcc(this).replaceWith('*'+jqcc(this).attr('title')+'*');
							});
							message = tempMsg.text();
							if(typeof id!='undefined'){
								if(typeof ccvariable.desktopNotification[id]=="undefined"){
									ccvariable.desktopNotification[id] = {};
								}
								ccvariable.desktopNotification[id][msgid] = new Notification(title, {icon: image, body: message});
								ccvariable.desktopNotification[id][msgid].onclick = function(){
									if(typeof clickEvent=='function'){
										clickEvent();
									}
								};
							}else{
								ccvariable.desktopNotification[id][msgid] = new Notification(title, {icon: image, body: message});
								ccvariable.desktopNotification[id][msgid].onclick = function(){
									if(typeof clickEvent=='function'){
										clickEvent();
									}
								};
							}
						}
					}
				}
			}
		};
		arguments.callee.statusKeydown = function(event, statustextarea){
			if(event.keyCode==13&&event.shiftKey==0){
				if(typeof (jqcc[calleeAPI].statusSendMessage)!=='undefined'){
					jqcc[calleeAPI].statusSendMessage();
				}
				return false;
			}
		};
		arguments.callee.guestnameKeydown = function(event, statustextarea){
			if(event.keyCode==13&&event.shiftKey==0){
				if(typeof (jqcc[calleeAPI].setGuestName)!=='undefined'){
					jqcc[calleeAPI].setGuestName(statustextarea);
				}
				return false;
			}
		};
		arguments.callee.minimizeAll = function(){
			if(jqcc("#cometchat").length > 0){
				jqcc[settings.theme].minimizeAll();
			} else {
				var controlparameters = {"type":"modules", "name":"cometchat", "method":"minimizeAll", "params":{"uid":"", "synergy":"1" ,"embedded":"1"}};
				controlparameters = JSON.stringify(controlparameters);
				if(typeof(jqcc('#cometchat_synergy_iframe')[0]) != 'undefined'){
					jqcc('#cometchat_synergy_iframe')[0].contentWindow.postMessage('CC^CONTROL_'+controlparameters,'*');
				}
			}
		};
		arguments.callee.processcontrolmessage = function(incoming){
			var callbackParameter = incoming;
			var processedMessage = '';
			if(typeof incoming != 'undefined' && incoming.hasOwnProperty('groupid')){
				jqcc.cometchat.processgroupcontrolmessage(incoming);
			}
			if(typeof incoming.message != "undefined" && (incoming.message).indexOf('CC^CONTROL_')!=-1){
				var message = (incoming.message).replace('CC^CONTROL_','');
				var data = incoming.message.split('_');
				var chatroommode = 0;
				var hasChatroom = 0;
				settings = jqcc.cometchat.getSettings();
				if(settings.disableGroupTab == 0) {
                     hasChatroom = 1;
                }
				if(typeof(data[5])!='undefined' && data[5]==1){
					chatroommode = 1;
				}
				if(cp = IsJsonString(message)){
					var type = cp["type"] || "",
						name = cp["name"] || "",
						method = cp["method"] || "",
						params = cp["params"] || {};
					switch(type){
						case 'core':
							switch(name){
								case 'bots':
									var botid = parseInt(params.botid);
									incoming.botid = botid;
									processedMessage = params.message;
									break;
								case 'textchat':
									if(typeof jqcc[calleeAPI][method] == "function"){
										jqcc[calleeAPI][method](params);
									}
									processedMessage = null;
									break;
								default:
									if(typeof jqcc[calleeAPI][method] == "function" && ccvariable.callbackfn != "mobilewebapp"){
										jqcc[calleeAPI][method](params);
									}
									break;
							}
							break;
						case 'plugins':
							message = JSON.parse(message);
							processedMessage = jqcc['cc'+name.toLowerCase()].processControlMessage(params);
							break;
						default:
							break;
					}
				} else if(data[1]=='PLUGIN'){
					switch(data[2]){
						case 'AVCHAT':
						switch(data[3]){
							case 'ENDCALL':
							var controlparameters = {"type":"plugins", "name":"avchat", "method":"endcall", "params":{"grp":data[4], "chatroommode":chatroommode}};
							break;
							case 'REJECTCALL':
							var controlparameters = {"type":"plugins", "name":"avchat", "method":"rejectcall", "params":{"grp":data[4], "chatroommode":chatroommode}};
							jqcc[calleeAPI].removeAVchatContainer(incoming.from);
							break;
							case 'NOANSWER':
							var controlparameters = {"type":"plugins", "name":"avchat", "method":"noanswer", "params":{"grp":data[4], "chatroommode":chatroommode}};
							jqcc[calleeAPI].removeAVchatContainer(incoming.from);
							break;
							case 'CANCELCALL':
							var controlparameters = {"type":"plugins", "name":"avchat", "method":"canceloutgoingcall", "params":{"grp":data[4], "chatroommode":chatroommode}};
							jqcc[calleeAPI].removeAVchatContainer(incoming.from);
							break;
							case 'BUSYCALL':
							var controlparameters = {"type":"plugins", "name":"avchat", "method":"busycall", "params":{"grp":data[4], "chatroommode":chatroommode}};
							break;
							case 'INITIATECALL':
								var controlparameters = {"type":"plugins", "name":"avchat", "method":"initiatecall", "params":{"grp":data[4], "chatroommode":chatroommode, "caller": data[6], "direction": data[7]}};
							break;
							default :
							message = '';
							break;
						}
						break;
						case 'AUDIOCHAT':
						switch(data[3]){
							case 'ENDCALL':
							var controlparameters = {"type":"plugins", "name":"audiochat", "method":"endcall", "params":{"grp":data[4], "chatroommode":chatroommode}};
							break;
							case 'REJECTCALL':
							var controlparameters = {"type":"plugins", "name":"audiochat", "method":"rejectcall", "params":{"grp":data[4], "chatroommode":chatroommode}};
							break;
							case 'NOANSWER':
							var controlparameters = {"type":"plugins", "name":"audiochat", "method":"noanswer", "params":{"grp":data[4], "chatroommode":chatroommode}};
							break;
							case 'CANCELCALL':
							var controlparameters = {"type":"plugins", "name":"audiochat", "method":"canceloutgoingcall", "params":{"grp":data[4], "chatroommode":chatroommode}};
							break;
							case 'BUSYCALL':
							var controlparameters = {"type":"plugins", "name":"audiochat", "method":"busycall", "params":{"grp":data[4], "chatroommode":chatroommode}};
							break;
							default :
							message = '';
							break;
						}
						break;
						case 'BROADCAST':
						switch(data[3]){
							case 'ENDCALL':
							var controlparameters = {"type":"plugins", "name":"broadcast", "method":"endcall", "params":{"grp":data[4], "chatroommode":chatroommode}};
							break;
							default :
							message = '';
							break;
						}
						break;
						default :
						break;
					}
					if(typeof(data[2]) == 'undefined'){return;}
					processedMessage = jqcc['cc'+data[2].toLowerCase()].processControlMessage(controlparameters);
				} else {
						if (hasChatroom) {
							switch(data[1]){
								case 'kicked':
									if (jqcc.cometchat.getChatroomVars('myid') == data[2]) {
										alert ("You have been kicked from this group.");
										jqcc.cometchat.leaveChatroom(incoming.chatroomid,'kick');
									}
									processedMessage = '';
									break;
								case 'banned':
									var roomindex = jqcc.cometchat.getChatroomVars('joinedrooms').indexOf(incoming.chatroomid);
									if (jqcc.cometchat.getChatroomVars('myid') == data[2] && roomindex > -1) {
										alert ("Sorry, you are banned from this group.");
										jqcc.cometchat.leaveChatroom(incoming.chatroomid, 'ban');
									}
									processedMessage = '';
									break;
								case 'deletemessage':
									if(jqcc.cometchat.getChatroomVars('calleeAPI')=='docked') {
									   $("#cometchat_groupmessage_"+data[2]).remove();
									}else{
									   $("#cometchat_groupmessage_"+data[2]).parent().remove();
									}
									processedMessage = '';
									break;
								case 'deletedchatroom':
									var roomindex = jqcc.cometchat.getChatroomVars('joinedrooms').indexOf(incoming.id);
									if(roomindex > -1){
										jqcc.cometchat.leaveChatroom(incoming.chatroomid);
										var params = {'chatid':data[2],'isgroup':1,'timestamp':incoming.sent,'m':'','msgid':incoming.id,'force':0,'del':1};
										jqcc.cometchat.updateRecentChats(params);
										alert ("The group has been deleted.");
									}
									processedMessage = '';
									break;
								default :
									break;
							}
						}
				}
			}else if(typeof incoming.message != "undefined" && ((incoming.message).indexOf('has successfully sent a file')!=-1 || (incoming.message).indexOf('has sent you a file')!=-1)){
				if(ccvariable.callbackfn=="desktop"){
					if(incoming.message.indexOf('target')>=-1){
						incoming.message=incoming.message.replace(/target="_blank"/g,'');
					}
				}
				 processedMessage = incoming.message;
			}else if(typeof incoming.message != "undefined" && ((incoming.message).indexOf('has successfully sent a handwritten message')!=-1 || (incoming.message).indexOf('has sent you a handwritten message')!=-1)){
				/*if(jqcc.cometchat.getCcvariable().callbackfn=="desktop"){
					if(incoming.message.indexOf('href')>=-1){
						var start = (incoming.message).indexOf('href');
						var end = (incoming.message).indexOf('target');
						var HtmlString=(incoming.message).slice(start,end);
						incoming.message=(incoming.message).replace(HtmlString,'');
					}
				}*/
				 processedMessage = incoming.message;
			} else if(typeof incoming.message != "undefined") {
				if(ccvariable.callbackfn=="desktop"){
					if((incoming.message).indexOf('has shared a file')!=-1){
						if(incoming.message.indexOf('target')>=-1){
							incoming.message=incoming.message.replace(/target="_blank"/g,'');
						}
						processedMessage = incoming.message;
					}else if((incoming.message).indexOf('has shared a handwritten message')!=-1){
						/*if(incoming.message.indexOf('href')>=-1){
							var start = (incoming.message).indexOf('href');
							var end = (incoming.message).indexOf('target');
							var HtmlString=(incoming.message).slice(start,end);
							incoming.message=(incoming.message).replace(HtmlString,'');
						}*/
						processedMessage = incoming.message;
					}else{
						processedMessage = incoming.message;
					}
				}else{
					processedMessage = incoming.message;
				}
			}
			callbackParameter.message = processedMessage;
			if(callbackParameter.hasOwnProperty('chatroomid') || callbackParameter.hasOwnProperty('roomid'))
				jqcc.cometchat.processSubscribeCallback('onGroupMessageReceived',callbackParameter);
			else
				jqcc.cometchat.processSubscribeCallback('onMessageReceived',callbackParameter);
			return processedMessage;
		}
		arguments.callee.closeCRPopout = function(params){

		}
		arguments.callee.typingTo = function(params){
			if(settings.cometserviceEnabled == 1 && settings.istypingEnabled == 1){
				var senttime = (new Date()).getTime()+jqcc.cometchat.getThemeVariable('timedifference');
				var channel = jqcc.cometchat.getThemeArray('buddylistChannelHash', params.id);
				if(typeof channel != 'undefined' && channel != ''){
					var controlparameters = {
						type:'core',
						name:'textchat',
						method:params.method,
						params:{
							fromid:ccvariable.userid,
							typingtime:senttime
						}
					};
					var jsondata = {
						channel: (transport == 'cometserviceselfhosted' ? '/' : '')+channel,
						message:{
							from: ccvariable.userid,
							message: 'CC^CONTROL_'+JSON.stringify(controlparameters),
							sent: senttime,
							self:0
						},
						callback:''
					};
					COMET.publish(jsondata);
				}
			}
		}
		arguments.callee.sendReceipt = function(incoming, receipt){
			if(!incoming.hasOwnProperty('id') || incoming.id==='' || incoming.id ==  undefined || typeof incoming.old == 'undefined' || incoming.old == 1 || typeof incoming.self == 'undefined' || incoming.self == 1){
				return;
			}
			var fromid = incoming.from;
			var messageid = incoming.id;
			ccvariable.lastmessagereadstatus[fromid] = 1;

			if(typeof receipt == 'undefined' && incoming.self == 0 && ccvariable.currentStatus != 'invisible'){
				receipt = 'deliveredMessageNotify';
				ccvariable.lastmessagereadstatus[fromid] = 0;
				if(ccvariable['openChatboxId'].indexOf(fromid) > -1 && ccvariable.windowFocus == true){
					receipt = 'deliveredReadMessageNotify';
					ccvariable.lastmessagereadstatus[fromid] = 1;
				}
			}
			if(settings.cometserviceEnabled == 1 && settings.messagereceiptEnabled == 1 && typeof receipt != 'undefined' && incoming.id != undefined){
				var channel = jqcc.cometchat.getThemeArray('buddylistChannelHash',fromid);
				if(typeof channel != 'undefined' && channel != ''){
					var controlparameters = {
						type:'core',
						name:'textchat',
						method:receipt,
						params:{
							fromid:ccvariable.userid,
							message:messageid
						}
					};
					var jsondata = {
						channel: (transport == 'cometserviceselfhosted' ? '/' : '')+channel,
						message:{
							from: ccvariable.userid,
							message: 'CC^CONTROL_'+JSON.stringify(controlparameters),
							sent: (new Date()).getTime() + jqcc.cometchat.getThemeVariable('timedifference'),
							self:0
						},
						callback:''
					};
					COMET.publish(jsondata);
				}
			}
		},
		arguments.callee.sociallogin = function(social_details){
			jqcc.ajax({
				url: baseUrl+"cometchat_login.php?socialLogin=1&callbackfn="+ccvariable.callbackfn,
				data: {social_details:social_details},
				dataType: 'jsonp',
				type: ccvariable.dataMethod,
				timeout: ccvariable.dataTimeout,
				success: function(data){
					postMessage('cc_reinitializeauth','*');
					jqcc.cometchat.reinitialize();
				},
				error: function(data){
					console.log('Error',data);
				}
			});
		},
		arguments.callee.sociallogout = function(social_details){
			jqcc.ajax({
                url: baseUrl+'cometchat_logout.php',
                dataType: 'jsonp',
                success: function(data){
                    jqcc.cometchat.chatHeartbeat(1);
                },
                error: function(){
                }
            });
		},
		arguments.callee.htmlEntities = function(str){
			if(typeof str != 'undefined' && str != '' && str != null){
				str = str.trim();
				if (str.indexOf('<script') != -1){
					return str.replace(/</g,'&lt;').replace(/>/g,'&gt;');
				} else {
					return str;
				}
			}
		},
		arguments.callee.checkMobileDevice = function(){
			if(ccvariable.hasOwnProperty('mobileDevice') && ccvariable.mobileDevice){
				alert(jqcc.cometchat.getLanguage('mobile_feature_restriction'));
				return true;
			}else {
				return false;
			}
		}

	};
	function replaceHtml(el, html){
		var oldEl = typeof el==="string" ? document.getElementById(el) : el;
		/*@cc_on // Pure innerHTML is slightly faster in IE
		 oldEl.innerHTML = html;
		 return oldEl;
		 @*/
		var newEl = oldEl.cloneNode(false);
		newEl.innerHTML = html;
		oldEl.parentNode.replaceChild(newEl, oldEl);
		/* Since we just removed the old element from the DOM, return a reference
		 to the new element, which can be used to restore variable references. */
		return newEl;
	};
})(jqcc);
jqcc(document).bind('keyup', function(e){
	if(e.keyCode==27){
		jqcc('.cometchat_closebox').click();
		$('.cometchat_container').remove();
		jqcc.cometchat.minimizeAll();
	}
});

function cometready(){
	jqcc(document).ready(function() {
		if(typeof CometChathasBeenRun==='undefined'){
			CometChathasBeenRun = true;
		}else{
			return;
		}
		jqcc.cometchat();
		jqcc.cometchat.c6();
		if(typeof initializeEmbeddedLayout == "function"){
			initializeEmbeddedLayout();
		}
		if('docked'=='embedded'){
			var loaderHtml = '<div id="cometchat_loader"><div class="cometchat_spinner"></div></div>';
			jqcc("body").append(loaderHtml);
		}
	});
};

	jqcc(document).ready(function(){
		if(window.top==window.self||'docked'!='docked'){
			cometready();
		}
	});
(function(){function C(){var a="{}";if("userDataBehavior"==f){g.load("jStorage");try{a=g.getAttribute("jStorage")}catch(b){}try{r=g.getAttribute("jStorage_update")}catch(c){}h.jStorage=a}D();x();E()}function u(){var a;clearTimeout(F);F=setTimeout(function(){if("localStorage"==f||"globalStorage"==f)a=h.jStorage_update;else if("userDataBehavior"==f){g.load("jStorage");try{a=g.getAttribute("jStorage_update")}catch(b){}}if(a&&a!=r){r=a;var l=p.parse(p.stringify(c.__jstorage_meta.CRC32)),k;C();k=p.parse(p.stringify(c.__jstorage_meta.CRC32));var d,n=[],e=[];for(d in l)l.hasOwnProperty(d)&&(k[d]?l[d]!=k[d]&&"2."==String(l[d]).substr(0,2)&&n.push(d):e.push(d));for(d in k)k.hasOwnProperty(d)&&(l[d]||n.push(d));s(n,"updated");s(e,"deleted")}},25)}function s(a,b){a=[].concat(a||[]);var c,k,d,n;if("flushed"==b){a=[];for(c in m)m.hasOwnProperty(c)&&a.push(c);b="deleted"}c=0;for(d=a.length;c<d;c++){if(m[a[c]])for(k=0,n=m[a[c]].length;k<n;k++)m[a[c]][k](a[c],b);if(m["*"])for(k=0,n=m["*"].length;k<n;k++)m["*"][k](a[c],b)}}function v(){var a=(+new Date).toString();if("localStorage"==f||"globalStorage"==f)try{h.jStorage_update=a}catch(b){f=!1}else"userDataBehavior"==f&&(g.setAttribute("jStorage_update",a),g.save("jStorage"));u()}function D(){if(h.jStorage)try{c=p.parse(String(h.jStorage))}catch(a){h.jStorage="{}"}else h.jStorage="{}";z=h.jStorage?String(h.jStorage).length:0;c.__jstorage_meta||(c.__jstorage_meta={});c.__jstorage_meta.CRC32||(c.__jstorage_meta.CRC32={})}function w(){if(c.__jstorage_meta.PubSub){for(var a=+new Date-2E3,b=0,l=c.__jstorage_meta.PubSub.length;b<l;b++)if(c.__jstorage_meta.PubSub[b][0]<=a){c.__jstorage_meta.PubSub.splice(b,c.__jstorage_meta.PubSub.length-b);break}c.__jstorage_meta.PubSub.length||delete c.__jstorage_meta.PubSub}try{h.jStorage=p.stringify(c),g&&(g.setAttribute("jStorage",h.jStorage),g.save("jStorage")),z=h.jStorage?String(h.jStorage).length:0}catch(k){}}function q(a){if("string"!=typeof a&&"number"!=typeof a)throw new TypeError("Key name must be string or numeric");if("__jstorage_meta"==a)throw new TypeError("Reserved key name");return!0}function x(){var a,b,l,k,d=Infinity,n=!1,e=[];clearTimeout(G);if(c.__jstorage_meta&&"object"==typeof c.__jstorage_meta.TTL){a=+new Date;l=c.__jstorage_meta.TTL;k=c.__jstorage_meta.CRC32;for(b in l)l.hasOwnProperty(b)&&(l[b]<=a?(delete l[b],delete k[b],delete c[b],n=!0,e.push(b)):l[b]<d&&(d=l[b]));Infinity!=d&&(G=setTimeout(x,Math.min(d-a,2147483647)));n&&(w(),v(),s(e,"deleted"))}}function E(){var a;if(c.__jstorage_meta.PubSub){var b,l=A,k=[];for(a=c.__jstorage_meta.PubSub.length-1;0<=a;a--)b=c.__jstorage_meta.PubSub[a],b[0]>A&&(l=b[0],k.unshift(b));for(a=k.length-1;0<=a;a--){b=k[a][1];var d=k[a][2];if(t[b])for(var n=0,e=t[b].length;n<e;n++)try{t[b][n](b,p.parse(p.stringify(d)))}catch(g){}}A=l}}var y=window.jqcc||(window.jqcc={}),p={parse:window.JSON&&(window.JSON.parse||window.JSON.decode)||String.prototype.evalJSON&&function(a){return String(a).evalJSON()}||y.parseJSON||y.evalJSON,stringify:Object.toJSON||window.JSON&&(window.JSON.stringify||window.JSON.encode)||y.toJSON};if("function"!==typeof p.parse||"function"!==typeof p.stringify)throw Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");var c={__jstorage_meta:{CRC32:{}}},h={jStorage:"{}"},g=null,z=0,f=!1,m={},F=!1,r=0,t={},A=+new Date,G,B={isXML:function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?"HTML"!==a.nodeName:!1},encode:function(a){if(!this.isXML(a))return!1;try{return(new XMLSerializer).serializeToString(a)}catch(b){try{return a.xml}catch(c){}}return!1},decode:function(a){var b="DOMParser"in window&&(new DOMParser).parseFromString||window.ActiveXObject&&function(a){var b=new ActiveXObject("Microsoft.XMLDOM");b.async="false";b.loadXML(a);return b};if(!b)return!1;a=b.call("DOMParser"in window&&new DOMParser||window,a,"text/xml");return this.isXML(a)?a:!1}};y.jStorage={version:"0.4.12",set:function(a,b,l){q(a);l=l||{};if("undefined"==typeof b)return this.deleteKey(a),b;if(B.isXML(b))b={_is_xml:!0,xml:B.encode(b)};else{if("function"==typeof b)return;b&&"object"==typeof b&&(b=p.parse(p.stringify(b)))}c[a]=b;for(var k=c.__jstorage_meta.CRC32,d=p.stringify(b),g=d.length,e=2538058380^g,h=0,f;4<=g;)f=d.charCodeAt(h)&255|(d.charCodeAt(++h)&255)<<8|(d.charCodeAt(++h)&255)<<16|(d.charCodeAt(++h)&255)<<24,f=1540483477*(f&65535)+((1540483477*(f>>>16)&65535)<<16),f^=f>>>24,f=1540483477*(f&65535)+((1540483477*(f>>>16)&65535)<<16),e=1540483477*(e&65535)+((1540483477*(e>>>16)&65535)<<16)^f,g-=4,++h;switch(g){case 3:e^=(d.charCodeAt(h+2)&255)<<16;case 2:e^=(d.charCodeAt(h+1)&255)<<8;case 1:e^=d.charCodeAt(h)&255,e=1540483477*(e&65535)+((1540483477*(e>>>16)&65535)<<16)}e^=e>>>13;e=1540483477*(e&65535)+((1540483477*(e>>>16)&65535)<<16);k[a]="2."+((e^e>>>15)>>>0);this.setTTL(a,l.TTL||0);s(a,"updated");return b},get:function(a,b){q(a);return a in c?c[a]&&"object"==typeof c[a]&&c[a]._is_xml?B.decode(c[a].xml):c[a]:"undefined"==typeof b?null:b},deleteKey:function(a){q(a);return a in c?(delete c[a],"object"==typeof c.__jstorage_meta.TTL&&a in c.__jstorage_meta.TTL&&delete c.__jstorage_meta.TTL[a],delete c.__jstorage_meta.CRC32[a],w(),v(),s(a,"deleted"),!0):!1},setTTL:function(a,b){var l=+new Date;q(a);b=Number(b)||0;return a in c?(c.__jstorage_meta.TTL||(c.__jstorage_meta.TTL={}),0<b?c.__jstorage_meta.TTL[a]=l+b:delete c.__jstorage_meta.TTL[a],w(),x(),v(),!0):!1},getTTL:function(a){var b=+new Date;q(a);return a in c&&c.__jstorage_meta.TTL&&c.__jstorage_meta.TTL[a]?(a=c.__jstorage_meta.TTL[a]-b)||0:0},flush:function(){c={__jstorage_meta:{CRC32:{}}};w();v();s(null,"flushed");return!0},storageObj:function(){function a(){}a.prototype=c;return new a},index:function(){var a=[],b;for(b in c)c.hasOwnProperty(b)&&"__jstorage_meta"!=b&&a.push(b);return a},storageSize:function(){return z},currentBackend:function(){return f},storageAvailable:function(){return!!f},listenKeyChange:function(a,b){q(a);m[a]||(m[a]=[]);m[a].push(b)},stopListening:function(a,b){q(a);if(m[a])if(b)for(var c=m[a].length-1;0<=c;c--)m[a][c]==b&&m[a].splice(c,1);else delete m[a]},subscribe:function(a,b){a=(a||"").toString();if(!a)throw new TypeError("Channel not defined");t[a]||(t[a]=[]);t[a].push(b)},publish:function(a,b){a=(a||"").toString();if(!a)throw new TypeError("Channel not defined");c.__jstorage_meta||(c.__jstorage_meta={});c.__jstorage_meta.PubSub||(c.__jstorage_meta.PubSub=[]);c.__jstorage_meta.PubSub.unshift([+new Date,a,b]);w();v()},reInit:function(){C()},noConflict:function(a){delete window.$.jStorage;a&&(window.jStorage=this);return this}};(function(){var a=!1;if("localStorage"in window)try{window.localStorage.setItem("_tmptest","tmpval"),a=!0,window.localStorage.removeItem("_tmptest")}catch(b){}if(a)try{window.localStorage&&(h=window.localStorage,f="localStorage",r=h.jStorage_update)}catch(c){}else if("globalStorage"in window)try{window.globalStorage&&(h="localhost"==window.location.hostname?window.globalStorage["localhost.localdomain"]:window.globalStorage[window.location.hostname],f="globalStorage",r=h.jStorage_update)}catch(k){}else if(g=document.createElement("link"),g.addBehavior){g.style.behavior="url(#default#userData)";document.getElementsByTagName("head")[0].appendChild(g);try{g.load("jStorage")}catch(d){g.setAttribute("jStorage","{}"),g.save("jStorage"),g.load("jStorage")}a="{}";try{a=g.getAttribute("jStorage")}catch(m){}try{r=g.getAttribute("jStorage_update")}catch(e){}h.jStorage=a;f="userDataBehavior"}else{g=null;return}D();x();"localStorage"==f||"globalStorage"==f?"addEventListener"in window?window.addEventListener("storage",u,!1):document.attachEvent("onstorage",u):"userDataBehavior"==f&&setInterval(u,1E3);E();"addEventListener"in window&&window.addEventListener("pageshow",function(a){a.persisted&&u()},!1)})()})();

if (typeof(jqcc) === 'undefined') {
	jqcc = jQuery;
}

if (typeof($) === 'undefined') {
    $ = jqcc;
}

jqcc.ajaxSetup({scriptCharset: "utf-8", cache: "false"});

if (typeof(jqcc.cometchat)==='undefined') {
    var mode = 1;
    jqcc.cometchat = function() {};
}

jqcc.extend(jqcc.cometchat, {
    crvariables : {themename: 'docked',
                timestamp: '0',
                currentroom: '0',
                joinedrooms: [],
                crreadmessages: {},
                crUnreadMessages: {},
                groupulh: {},
                currentp: '',
                myid: '0',
                owner: '0',
                isModerator: 0,
                cu_uids: [],
                heartbeatTimer: 0,
                baseUrl: '/cometchat/',
                staticCDNUrl : '/cometchat/',
                minHeartbeat: '3000',
                maxHeartbeat: '12000',
                autoLogin: '0',
                messageBeep: '1',
                heartbeatTime: '3000',
                heartbeatCount: 1,
                todaysDate: new Date(),
                todays12am: (new Date()).getTime() - ((new Date()).getTime()%(24*60*60*1000)),
                clh: '',
                ulh: '',
                prepend: 0,
                users: {},
                usersName: {},
                initialize:1,
                initializeRoom: 0,
                initializeAutoLogin:1,
                password: '',
                currentroomname: '',
                armyTime: '0',
                specialChars: /([^\x00-\x80]+)|([&][#])+/,
                apiAccess: 0,
                lightboxWindows: '1',
                newMessages: 0,
                plugins: ['style', 'filetransfer', 'smilies'],
                cookiePrefix: 'cc_',
                basedata: getURLParameter('basedata'),
                allowDelete: '1',
                lastmessagetime : Math.floor(new Date().getTime()),
                floodControl: '0',
                calleeAPI: 'docked',
                moderators: [],
                windowCount: 0,
                windows: [],
                popoutmode: getURLParameter('popoutmode'),
				newMessageIndicator: '1',
                allowUsers: '1',
                allowGuests: '1',
                mobileDevice: navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|blackberry|palm|symbian/i),
                prependLimit: '10',
                showChatroomUsers: '1',
                sessionVars: {},
                chatroomOrder: {},
                chatroomsOpened: {},
                chatroomdetails: {}
            },
            getcrAllVariables: function() {
                return this.crvariables;
            },
            getChatroomVars: function(key) {
                if (typeof(this.crvariables[key])!=='undefined')
                    return this.crvariables[key];
            },
            setChatroomVars: function(key, value) {
                this.crvariables[key] = value;
            },
            chatroommessageBeep: function() {
                return this.crvariables.messageBeep;
            },

            getBaseUrl: function() {
                return this.crvariables.baseUrl;
            },

            getBaseData: function() {
				if (jqcc.cookie(this.crvariables.cookiePrefix + 'data') !== null) {
					return jqcc.cookie(this.crvariables.cookiePrefix + 'data');
				}
                return this.crvariables.basedata;
            },
            popoutChatroom: function() {
                jqcc.cometchat.leaveChatroom();
                myRef = window.open(self.location,'popoutchat','left=20,top=20,status=0,toolbar=0,menubar=0,directories=0,location=0,status=0,scrollbars=0,resizable=1,width=800,height=600');
                if (typeof(parent.jqcc.cometchat.closeModule) == "function")
                    parent.jqcc.cometchat.closeModule('chatrooms');
                setTimeout('window.location.reload()',3000);
            },
            checkModerator: function(groupid) {
                var chatroomdetails = jqcc.cometchat.getChatroomVars('chatroomdetails');
                if(chatroomdetails.hasOwnProperty('_'+groupid) && chatroomdetails['_'+groupid].hasOwnProperty('isModerator')){
                    return chatroomdetails['_'+groupid]['isModerator'];
                }
                return false;
            },
            chatroomBoxKeydown: function(event,chatboxtextarea,roomno,force) {
                var condition = 1;
                if ((event.keyCode == 13 && event.shiftKey == 0) || force == 1 && !$(chatboxtextarea).hasClass('cometchat_placeholder')) {
                    var message = jqcc(chatboxtextarea).val();
                    message = message.replace(/^\s+|\s+$/g,"");
                    if (this.crvariables.floodControl != 0) {
                        condition = ((Math.floor(new Date().getTime())) - this.crvariables.lastmessagetime > 2000);
                    }
                    if (condition) {
                        var messageLength = message.length;
                        this.crvariables.lastmessagetime = Math.floor(new Date().getTime());
                        if (roomno != 0) {
                            if(typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].sendChatroomMessage) == "function"){
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].sendChatroomMessage(chatboxtextarea);
                                if(event.preventDefault) event.preventDefault();
                            }
                            if (message != '') {
                                jqcc.cometchat.sendmessageProcess(message, roomno, jqcc.cometchat.getBaseData(), this.crvariables.currentroomname);
                            }
                        }
                        if(jqcc('#cometchat_container_smilies').length == 1 && this.crvariables.mobileDevice){
                            jqcc.synergy.closeModule('smilies');
                            $('#currentroom').find('.cometchat_userchatarea').css('display','block');
                                setTimeout(function(){
                                    $('#currentroom_convo').css('height',$(window).height()-($('#currentroom').find('.cometchat_tabsubtitle').outerHeight()+$('#currentroom').find('.cometchat_tabinputcontainer').outerHeight(true)+$('#currentroom').find('.cometchat_prependMessages').outerHeight(true)));
                                }, 10);
                            jqcc('textarea.cometchat_textarea').blur();
                        }
                        return false;
                    } else {
                        alert("Please do not spam in group");
                    }
                }
            },
            sendmessageProcess: function(message, groupid, basedata, currentroomname,localmssgkey) {
                if(typeof(localmssgkey) == 'undefined') {
                    localmssgkey = '';
                }
                var localmessageid = jqcc.cometchat.updateOfflinemessages({
                    "id": groupid,
                    "message":message,
                    "localmsgid":localmssgkey,
                    "chatroommode":1,
                    'msgStatus':1
                });
                if(localmessageid != '' && localmessageid != 'undefined') {
                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].addChatroomMessage) == "function"){
                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].addChatroomMessage({fromid:jqcc.cometchat.getChatroomVars('myid'),message: message,localmessageid:localmessageid,selfadded:1,sent:Math.floor(new Date().getTime()),fromname:'0', calledfromsend:'1', roomid:groupid});
                    }
                }
                if (message != '') {
					if (message.length > 1000){
						if (message.charAt(1000) == ' ') {
							messagecurrent = message.substring(0,1000);
						} else {
							messagecurrent = message.substring(0,1000);
							var spacePos = messagecurrent.length;
							while (messagecurrent.charAt(spacePos) != ' ') {
								  spacePos--;
							}
							messagecurrent = message.substring(0,spacePos);
						}
						messagenext = message.substring(messagecurrent.length);
						if (messagenext.length > 0) {
							messagecurrent = messagecurrent + "...";
						}
					} else {
							messagecurrent = message;
							messagenext = '';
					}
					message = messagecurrent;
                    jqcc.ajax({
                        url: this.crvariables.baseUrl+"modules/chatrooms/chatrooms.php?action=sendmessage",
                        data: {message: message , groupid: groupid, basedata:basedata, currentroomname: currentroomname, localmessageid: localmessageid},
                        type: 'post',
                        cache: false,
                        timeout: 10000,
                        dataType: 'jsonp',
                        success: function(data) {
                            if (data) {
                                if(data.hasOwnProperty('m')){
                                    message = data.m;
                                }
                                                                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].addChatroomMessage) == "function")
                                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].addChatroomMessage({fromid:jqcc.cometchat.getChatroomVars('myid'),message: message,id:data.id,selfadded:1,sent:Math.floor(new Date().getTime()),fromname:'0', calledfromsend:'1', roomid:groupid,localmessageid:data.localmessageid});
                                                                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomScrollDown) == "function")
                                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomScrollDown(1);
                            } else if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].crscrollToBottom) == "function") {
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].crscrollToBottom();
                            }
                            if (messagenext.length > 0) {
                                jqcc.cometchat.sendmessageProcess('...'+messagenext, groupid, basedata, currentroomname);
                            }
                            var offlinemessages = jqcc.cometchat.getFromStorage('offlinemessagesqueue');
                            if(data.hasOwnProperty("localmessageid") && typeof(data.localmessageid) != 'undefined') {
                                if(offlinemessages.hasOwnProperty(data.localmessageid)) {
                                    delete offlinemessages[data.localmessageid];
                                    jqcc.cometchat.updateToStorage('offlinemessagesqueue',offlinemessages);
                                    if(jqcc.isEmptyObject(jqcc.cometchat.getFromStorage('offlinemessagesqueue'))) {
                                        jqcc.cometchat.updateToStorage('offmsgcounter',{'lmid':0});
                                    }
                                }
                            }
                            jqcc.cometchat.setChatroomVars('heartbeatTime', parseInt(jqcc.cometchat.getChatroomVars('minHeartbeat')));
                        },
                        error: function() {
                            jqcc.cometchat.updateOfflinemessages({
                                "id": groupid,
                                "message":message,
                                "localmsgid":localmessageid,
                                "chatroommode":1,
                                'msgStatus':0
                            });
                        }
                    });
                }
            },
            confirmDelete: function(delid,groupid) {
                var confirmed = confirm("Are you want to sure you want to delete this message?");
                if (confirmed==true) {
                    jqcc.cometchat.deleteMessage(delid,groupid);
                }
            },
            deleteMessage: function(delid,groupid) {
                if(typeof(groupid) == "undefined"){
                    groupid = this.crvariables.currentroom;
                }
                jqcc.ajax({
                    url: this.crvariables.baseUrl+"cometchat_receive.php?action=deleteChatroomMessage",
                    type: "POST",
                    data: {delid:delid,groupid:groupid, basedata:jqcc.cometchat.getBaseData()},
                    dataType: 'jsonp',
                    success: function(s) {
                        if (s == 1) {
                            if(typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].deletemessage) == 'function'){
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].deletemessage(delid);
                                return;
                            }
                            jqcc("#cometchat_groupmessage_"+delid).remove();
                        }
                    }
                });
            },
            leaveChatroom: function(groupid, kickorban) {

                var chatrooms = jqcc.cometchat.getChatroomVars('chatroomdetails');
                delete(chatrooms['_'+data.id]);
                jqcc.cometchat.setChatroomVars('chatroomdetails',chatrooms);
                var params = "action=leavechatroom";
                if (typeof(groupid) == 'undefined') {
                    groupid = this.crvariables.currentroom;
                }
                if(typeof(kickorban)!='undefined'){
                    params += '&'+kickorban+'flag=1';
                }
                                if (typeof(jqcc[this.crvariables.calleeAPI].leaveRoomClass) == "function")
                    jqcc[this.crvariables.calleeAPI].leaveRoomClass(groupid);
                jqcc.ajax({
                    url: this.crvariables.baseUrl+"cometchat_receive.php?"+params,
                    data: {groupid: groupid, basedata:jqcc.cometchat.getBaseData()},
                    type: 'post',
                    cache: false,
                    timeout: 10000,
                    dataType: 'jsonp',
                    success: function(data) {
                        if (data) {
                            jqcc.cometchat.updateChatBoxState({id:groupid,g:1,s:0});
                            var storageData = jqcc.cometchat.getFromStorage("crreadmessages");
                            delete storageData[data];
                            jqcc.cometchat.updateToStorage('crreadmessages',storageData);
                            jqcc.cometchat.setChatroomVars('currentp','');
                            jqcc.cometchat.setChatroomVars('currentroomname','');
                            jqcc.cometchat.setChatroomVars('timestamp',0);
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].removeCurrentRoomTab) == "function") {
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].removeCurrentRoomTab(groupid);
                            }
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].updateGroupCategory) == "function"){
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].updateGroupCategory(groupid);
                            }
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].closeChatroom) == "function") {
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].closeChatroom(groupid);
                            }
                            var roomindex = jqcc.cometchat.getChatroomVars('joinedrooms').indexOf(groupid);
                            if(roomindex > -1) {
                                var joinedrooms = jqcc.cometchat.getChatroomVars('joinedrooms');
                                joinedrooms.splice(roomindex, 1);
                                jqcc.cometchat.setChatroomVars('joinedrooms', joinedrooms);
                            }
                            /*Callback for Leave Group*/
                            jqcc.cometchat.processSubscribeCallback('onLeaveGroup',data);
                        }
                    }
                });
            },
            createChatroomSubmit: function() {
                var room = jqcc[this.crvariables.calleeAPI].createChatroomSubmitStruct();
                if (room.name != '' && typeof(room.name) != 'undefined') {
                    jqcc.ajax({
                        url: this.crvariables.baseUrl+"cometchat_receive.php?action=createchatroom",
                        data: {
                            name: room.name,
                            type: room.type,
                            password: room.password,
                            basedata: jqcc.cometchat.getBaseData()
                        },
                        type: 'post',
                        cache: false,
                        timeout: 10000,
                        dataType: 'jsonp',
                        success: function(data) {
                            if (parseInt(data)!=0 && typeof data != "undefined" && data != "") {
                                var chatrooms = jqcc.cometchat.getChatroomVars('chatroomdetails');
                                chatrooms['_'+data.id] = {
                                    createdby: jqcc.cometchat.getUserID(),
                                    i: room.password,
                                    id: data.id,
                                    j: 1,
                                    name: room.name,
                                    online: 1,
                                    s: 1,
                                    owner: true,
                                    type: room.type
                                };
                                jqcc.cometchat.setChatroomVars('chatroomdetails',chatrooms);
                                jqcc.cometchat.setChatroomVars('currentp',SHA1(room.password))
                                room.name = data.n;
                                jqcc.cometchat.chatroom(data.id,room.name,room.type,jqcc.cometchat.getChatroomVars('currentp'),1,0,1);
                                if(jqcc.cometchat.getChatroomVars('calleeAPI')=="embedded" && typeof jqcc.ccembedded.moveWindow != 'undefined'){
                                    jqcc.ccembedded.moveWindow($('#composechat_window'));
                                }else if(jqcc.cometchat.getChatroomVars('calleeAPI')=="docked"){
                                    $("#cometchat_minimize_createchatroompopup").click();
                                }
                            } else {
                                alert("This group name is not available.");
                            }
                        }
                    });
                }else{
                    if(room != 'invalid password' ){
                        alert("Group name can't be blank.");
                    }
                }
                return false;
            },
            deleteChatroom: function(event,groupid){
                event.stopPropagation();
                var confirmDeletion = confirm("Are you sure you want to delete this group?");
                if (confirmDeletion == true) {
                    jqcc.cometchat.updateChatBoxState({id:groupid,g:1,s:0});
                    jqcc.ajax({
                        url: this.crvariables.baseUrl+"cometchat_receive.php?action=deletechatroom",
                        data: {id: groupid, basedata:jqcc.cometchat.getBaseData()},
                        type: 'post',
                        cache: false,
                        timeout: 10000,
                        dataType: 'jsonp',
                        success: function(data) {
                            if (data.hasOwnProperty('success')&& data.success==true) {
                                var params = {
                                    chatid: groupid,
                                    isgroup: 1,
                                    timestamp: Math.round((new Date()).getTime()/1000),
                                    msg: '',
                                    msgid: data.messageid,
                                    force: 0,
                                    del: 1
                                };
                                jqcc.cometchat.updateRecentChats(params);
                                alert("The group has been deleted successfully");
                                jqcc.cometchat.chatroomHeartbeat(1);
                                if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].closeChatroom) == "function") {
                                    jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].closeChatroom(groupid);
                                }
                            } else {
                                alert("You do not have permissions to delete the group");
                            }
                        }
                    });
                }
            },
            canceledit: function(event,groupid) {
                event.stopPropagation();
                jqcc('#cometchat_userlist_'+groupid).find('.currentroomname').show();
                jqcc('#cometchat_userlist_'+groupid).find('.chatroomName').hide();
                jqcc('#cometchat_userlist_'+groupid).find('.cancel_edit').hide();
            },
            inviteChatroomUser: function(windowmode) {
               loadCCPopup(this.crvariables.baseUrl+'cometchat_receive.php?action=invite&groupid='+this.crvariables.currentroom+'&inviteid='+this.crvariables.currentp+'&basedata='+jqcc.cometchat.getBaseData()+'&roomname='+cc_urlencode(this.crvariables.currentroomname), 'invite',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=1, width=400,height=200",400,200,"Please select members",null,null,null,null,windowmode);
            },
            unbanChatroomUser: function(windowmode, groupid) {
                if(typeof(groupid) == "undefined") {
                    groupid = this.crvariables.currentroom;
                }
                loadCCPopup(this.crvariables.baseUrl+'cometchat_receive.php?action=unban&groupid='+groupid+'&inviteid='+this.crvariables.currentp+'&basedata='+jqcc.cometchat.getBaseData()+'&roomname='+cc_urlencode(this.crvariables.currentroomname)+'&time='+Math.random(), 'invite',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=1, width=400,height=200",400,200,"Please select members",null,null,null,null,windowmode);
            },
            getGroupUsers: function(groupid){
                var groupulh = jqcc.cometchat.getChatroomVars('groupulh');
                if(typeof(groupid) == "undefined"){
                    groupid = this.crvariables.currentroom;
                }
                jqcc.ajax({
                    url: this.crvariables.baseUrl+"cometchat_receive.php?action=getchatroomusers",
                    data: {groupid: groupid,ulh: groupulh[groupid], basedata:jqcc.cometchat.getBaseData()},
                    type: 'post',
                    async:false,
                    cache: false,
                    timeout: 10000,
                    dataType: 'jsonp',
                    success: function(data) {
                        if (data) {
                            if(data.hasOwnProperty('users') && typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].updateChatroomUsers) == "function"){
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].updateChatroomUsers(data.users,0);
                                groupulh[groupid] = data.ulh;
                                jqcc.cometchat.setChatroomVars('groupulh',groupulh);
                            }
                        }
                    }
                });
            },
            silentroom: function(groupid, inviteid, roomname, minimized, unreadmsgcount) {
                if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].switchChatroom) == "function" ){
                    jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].switchChatroom(groupid,1);
                }
                chatroomdetails = jqcc.cometchat.getChatroomVars('chatroomdetails');
                if(roomname == '' && chatroomdetails.hasOwnProperty('_'+groupid) && chatroomdetails['_'+groupid].hasOwnProperty('name') && chatroomdetails['_'+groupid].hasOwnProperty('type')){
                    var type = chatroomdetails['_'+groupid]['type'];
                    roomname = btoa(chatroomdetails['_'+groupid]['name']);
                    jqcc.cometchat.chatroom(groupid,roomname,type,inviteid,1,0,1,minimized,unreadmsgcount);
                }else{
                    setTimeout(function(){jqcc.cometchat.silentroom(groupid, inviteid, roomname, minimized, unreadmsgcount)},250);
                }
            },
            checkChatroomPass: function(groupid,name,silent,password,clicked,type,encryptPass,force,minimized,unreadmsgcount) {
                if (typeof(encryptPass) != 'undefined' && encryptPass == 1 && password != '') {
                    password = SHA1(password);
                }
                if(password == '' && type == 1 && silent != 1){
                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].silentRoom) == "function"){
                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].silentRoom(groupid, name, silent);
                    }else{
                        console.error('layout JS hasn\'t been loaded.');
                    }
                }else{
                    jqcc.ajax({
                    url: this.crvariables.baseUrl+"cometchat_receive.php?action=checkpassword",
                    data: {
                        password: password,
                        groupid: groupid,
                        name: name,
                        basedata: jqcc.cometchat.getBaseData(),
                        silent: silent,
                        type: type
                    },
                    type: 'post',
                    cache: false,
                    timeout: 10000,
                    dataType: 'jsonp',
                    success: function(data) {
                        if (data) {
                            if (data['s'] != 'INVALID_PASSWORD' && data['s'] != 'BANNED' && data['s'] !='INVALID_CHATROOM' && data['s'] !='REQUIRED_PASSWORD') {
                                                                if(typeof(data['chatroomname']) != 'undefined' && data['chatroomname'] != ''){
                                    name = data['chatroomname'];
                                }
                                jqcc.cometchat.setChatroomVars('owner',data['owner']);
                                jqcc.cometchat.setChatroomVars('myid',parseInt(data['userid']));
                                jqcc.cometchat.setChatroomVars('isModerator',data['ismoderator']);
                                jqcc.cometchat.setChatroomVars('currentp',password);
                                jqcc.cometchat.setChatroomVars('initializeRoom',1);
                                if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].hidetabs) == "function")
                                    jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].hidetabs();
                                if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].selectChatroom) == "function")
                                    jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].selectChatroom(jqcc.cometchat.getChatroomVars('currentroom'),groupid);
                                jqcc.cometchat.setChatroomVars('currentroom',groupid);
                                jqcc.cometchat.setChatroomVars('ulh','');
                                jqcc.cometchat.setChatroomVars('currentroomname',name);
                                if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].checkOwnership) == "function")
                                    jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].checkOwnership(jqcc.cometchat.getChatroomVars('owner'),jqcc.cometchat.getChatroomVars('isModerator'),name);
                                if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].setRoomName) == "function")
                                    jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].setRoomName(name);
                                if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadRoom) == "function")
                                    jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadRoom(clicked,groupid,minimized,unreadmsgcount);
                                clearTimeout(jqcc.cometchat.getChatroomVars('heartbeatTimer'));
                                if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadMobileChatroom) == "function")
                                    jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadMobileChatroom();
                                jqcc.cometchat.setChatroomVars('cu_uids','');

                                if(data.hasOwnProperty('messages')){
                                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].displayChatroomMessage) == "function"){
                                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].displayChatroomMessage(data.messages,0);
                                    }
                                    if(jqcc.cometchat.getChatroomVars('calleeAPI') == 'embedded'){
                                        if(($("#currentroom_convo")[0].scrollHeight) - ($("#currentroom_convo").scrollTop() + $("#currentroom_convo").innerHeight()) < 70) {
                                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomScrollDown) == "function")
                                            jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomScrollDown(1);
                                        }
                                    }
                                }

                                if(force == 1) {
                                    var crreadmessages = jqcc.cometchat.getFromStorage("crreadmessages");
                                    jqcc.cometchat.setChatroomVars('crreadmessages',crreadmessages);
                                    jqcc.cometchat.setChatroomVars('activeChatroom',groupid);
                                    jqcc.cometchat.chatroomHeartbeat(1);
                                }
                                if(typeof(unreadmsgcount)=="undefined"){
                                    unreadmsgcount = 0;
                                }
                                if(typeof(minimized)=="undefined" || minimized != 2){
                                    minimized = 1;
                                    jqcc.cometchat.updateChatBoxState({id:groupid,g:1,s:minimized/*,c:unreadmsgcount*/});
                                }
                            } else {
                                if (data['s'] == 'BANNED') {
                                    if (silent != 1) {
                                        alert ("Sorry, you are banned from this group.");
                                        if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadMobileLobbyReverse) == "function"){
                                            jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadMobileLobbyReverse();
                                        }
                                        var roomindex = jqcc.cometchat.getChatroomVars('joinedrooms').indexOf(groupid);
                                        if(roomindex > -1) {
                                            var joinedrooms = jqcc.cometchat.getChatroomVars('joinedrooms');
                                            joinedrooms.splice(roomindex, 1);
                                            jqcc.cometchat.setChatroomVars('joinedrooms', joinedrooms);
                                        }
                                    }
                                } else if(data['s'] == 'REQUIRED_PASSWORD') {
                                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].silentRoom) == "function")
                                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].silentRoom(groupid, name, silent);
                                } else {
                                    alert("Incorrect password. Please try again.");
                                }
                            }
                        }
                    }
                });
                }

            },
            chatroom: function(groupid,name,type,invite,silent,clicked,force,minimized,unreadmsgcount) {
                if(groupid == null){
                    return;
                }

                jqcc.cometchat.setChatroomVars('timestamp',0);
                if(isbase64encoded(decodeURIComponent(name))){
                    name = urldecode(name);
                }
                if(typeof(force)=='undefined'){
                    force = 0;
                }
                if ((this.crvariables.currentroom != groupid || force == 1) && !(this.crvariables.chatroomsOpened.hasOwnProperty(groupid))) {
                    this.crvariables.password = '';
                    if (invite != '') {
                        this.crvariables.password = invite;
                    }
                    jqcc.cometchat.checkChatroomPass(groupid,name,silent,this.crvariables.password,clicked,type,0,force,minimized,unreadmsgcount);
                } else {
                    if (typeof(jqcc[this.crvariables.calleeAPI].loadRoom) == "function"){
                        jqcc[this.crvariables.calleeAPI].loadRoom(clicked,groupid,minimized,unreadmsgcount);
                    }
                    clearTimeout(this.crvariables.heartbeatTimer);
                    jqcc.cometchat.chatroomHeartbeat(force);
                }
            },
            chatroomHeartbeat: function(force) {
                if(force != "undefined"  && typeof(force) != "undefined") {
                    if(force.toString().indexOf('^') > -1) {
                        var groupid = force.split('^')[1];
                        force = force.split('^')[0];
                        jqcc.cometchat.setChatroomVars('initializeAutoLogin',1);
                        jqcc.cometchat.setChatroomVars('autoLogin',groupid);
                        if($('#cometchat_lefttab').length  > 0) {
                            $('#cometchat_lefttab').remove();
                        }
                        if(jqcc.cometchat.getChatroomVars('themename') == 'synergy' || jqcc.cometchat.getChatroomVars('themename') == 'embedded'){
                            $('#cometchat').find('#cometchat_righttab #currentroom').find('.cometchat_user_closebox').remove();
                        }
                    }
                }
                if(force == 1){
                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')]) != 'undefined' && typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomScrollDown) == "function")
                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomScrollDown(1);
                }
                jqcc.cometchat.setExternalVariable('action','heartbeat');
                jqcc.cometchat.setExternalVariable('groupid',this.crvariables.currentroom);
                jqcc.cometchat.setExternalVariable('f',force);
                jqcc.cometchat.setExternalVariable('clh',this.crvariables.clh);
                jqcc.cometchat.setExternalVariable('ulh',this.crvariables.ulh);
                jqcc.cometchat.setExternalVariable('currentp',this.crvariables.currentp);
                jqcc.cometchat.setExternalVariable('popout',this.crvariables.apiAccess);
                jqcc.cometchat.setExternalVariable('basedata',jqcc.cometchat.getBaseData());

                if(force == 1){
                    if(typeof(cc_embedded_enabled)!="undefined" && cc_embedded_enabled == 1){
                        return;
                    }
                    jqcc.cometchat.chatHeartbeat(1);
                }

                if(this.crvariables.initialize == 1){
                    if (typeof($) === 'undefined') {
                        $ = jqcc;
                    }
                    var crUnreadMessages = {};
                    jqcc.cometchat.setChatroomVars('initialize',0);
				}
            },
            joinGroup: function(groupid){
                if(this.crvariables.joinedrooms.indexOf(groupid) == -1) {
                    this.crvariables.joinedrooms.push(groupid);
                }
            },
            kickChatroomUser: function(kickid,kick,groupid){
                jqcc.ajax({
                    url: this.crvariables.baseUrl+"cometchat_receive.php?action=kickUser",
                    type: "POST",
                    data: {kickid:kickid,groupid:groupid,kick:kick, basedata:jqcc.cometchat.getBaseData()},
                    dataType: 'jsonp',
                    success: function(s) {
                        if (s == 1) {
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].kickid) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].kickid(kickid);
                                jqcc.cometchat.setChatroomVars('ulh','');
                        }
                    }
                });
            },
            banChatroomUser: function(banid,ban,groupid){
                jqcc.ajax({
                    url: this.crvariables.baseUrl+"cometchat_receive.php?action=banUser",
                    type: "POST",
                    data: {banid:banid, groupid:groupid, ban:ban, basedata:jqcc.cometchat.getBaseData(), popoutmode:this.crvariables.popoutmode},
                    dataType: 'jsonp',
                    success: function(s) {
                        if (s == 1) {
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].banid) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].banid(banid);
                        }
                    }
                });
            },
            setCrSessionVariable: function(params){
                /*if (typeof embeddedchatroomid == "undefined" || embeddedchatroomid == 0) {
                    var name = params.name;
                    var value = params.val;
                    var roomno = params.roomno;
                    var messageCounter = params.messageCounter;
                    var isOpen = params.isOpen;
                    this.crvariables.sessionVars[name] = value;
                    var cc_chatroom = JSON.parse(jqcc.cookie(this.crvariables.cookiePrefix+'crstate'));
                    if(typeof(this.crvariables.sessionVars['active']) != 'undefined' && typeof(roomno) != "undefined"){
                        roomno = '_'+roomno;
                        var chatroomdata = cc_chatroom.active;
                        if(!chatroomdata.hasOwnProperty(roomno)){
                            chatroomdata[roomno] = {"c":0,"o":isOpen };
                        } else {
                            chatroomdata[roomno] = {"c":messageCounter,"o":isOpen };
                        }
                    }
                    if(typeof(this.crvariables.sessionVars['open']) != 'undefined'){
                        if(this.crvariables.sessionVars['open'] == '0'){
                            this.crvariables.sessionVars['open'] = '';
                        }
                        cc_chatroom.open = this.crvariables.sessionVars['open'];
                    }
                    cc_chatroom = JSON.stringify(cc_chatroom);
                    jqcc.cookie(this.crvariables.cookiePrefix+'crstate', cc_chatroom, {path: '/'});
                }*/
            },
            processgroupcontrolmessage: function(incoming){
                if((incoming.message).indexOf('CC^CONTROL_')!=-1){
                    var message = (incoming.message).replace('CC^CONTROL_','');
                    var data = incoming.message.split('_');
                    if(cp = IsJsonString(message)){
                        var type = cp["type"] || ""
                        ,   name = cp["name"] || ""
                        ,   method = cp["method"] || ""
                        ,   params = cp["params"] || {}
                        ;
                        switch(type){
                            case 'core':
                                switch(name){
                                    case 'bots':
                                        var botid = parseInt(params.botid);
                                        incoming.botid = botid;
                                        return params.message;
                                        break;
                                    }
                                break;
                            default:
                                message = JSON.parse(message);
                                return jqcc['cc'+message.name.toLowerCase()].processControlMessage(message.params);
                                break;
                        }
                    } else if(data[1]=='PLUGIN'){
                        switch(data[2]){
                            case 'AVCHAT':
                                switch(data[3]){
                                    case 'ENDCALL':
                                        var controlparameters = {"type":"plugins", "name":"avchat", "method":"endcall", "params":{"grp":data[4], "chatroommode":1}};
                                    break;
                                    case 'REJECTCALL':
                                        var controlparameters = {"type":"plugins", "name":"avchat", "method":"rejectcall", "params":{"grp":data[4], "chatroommode":1}};
                                    break;
                                    case 'NOANSWER':
                                        var controlparameters = {"type":"plugins", "name":"avchat", "method":"noanswer", "params":{"grp":data[4], "chatroommode":1}};
                                    break;
                                    case 'CANCELCALL':
                                        var controlparameters = {"type":"plugins", "name":"avchat", "method":"canceloutgoingcall", "params":{"grp":data[4], "chatroommode":1}};
                                    break;
                                    case 'BUSYCALL':
                                        var controlparameters = {"type":"plugins", "name":"avchat", "method":"busycall", "params":{"grp":data[4], "chatroommode":1}};
                                    break;
                                    default :
                                        message = '';
                                    break;
                                }
                                return jqcc['cc'+controlparameters.name].processControlMessage(controlparameters);
                                break;
                            case 'AUDIOCHAT':
                                switch(data[3]){
                                    case 'ENDCALL':
                                        var controlparameters = {"type":"plugins", "name":"audiochat", "method":"endcall", "params":{"grp":data[4], "chatroommode":1}};
                                    break;
                                    case 'REJECTCALL':
                                        var controlparameters = {"type":"plugins", "name":"audiochat", "method":"rejectcall", "params":{"grp":data[4], "chatroommode":1}};
                                    break;
                                    case 'NOANSWER':
                                        var controlparameters = {"type":"plugins", "name":"audiochat", "method":"noanswer", "params":{"grp":data[4], "chatroommode":1}};
                                    break;
                                    case 'CANCELCALL':
                                        var controlparameters = {"type":"plugins", "name":"audiochat", "method":"canceloutgoingcall", "params":{"grp":data[4], "chatroommode":1}};
                                    break;
                                    case 'BUSYCALL':
                                        var controlparameters = {"type":"plugins", "name":"audiochat", "method":"busycall", "params":{"grp":data[4], "chatroommode":1}};
                                    break;
                                    default :
                                        message = '';
                                    break;
                                }
                                return jqcc['cc'+controlparameters.name].processControlMessage(controlparameters);
                                break;
                            case 'BROADCAST':
                                switch(data[3]){
                                    case 'ENDCALL':
                                        var controlparameters = {"type":"plugins", "name":"broadcast", "method":"endcall", "params":{"grp":data[4], "chatroommode":1}};
                                    break;
                                    default :
                                        message = '';
                                    break;
                                }
                                return jqcc['cc'+controlparameters.name].processControlMessage(controlparameters);
                                break;
                            default :
                                break;
                        }
                    } else {
                        switch(data[1]){
                            case 'kicked':
                                if (jqcc.cometchat.getChatroomVars('myid') == data[2]) {
                                    jqcc.cometchat.kickChatroomUser(data[1],incoming.id);
                                    alert ("You have been kicked from this group.");
                                    jqcc.cometchat.leaveChatroom();
                                }
                                return '';
                                break;
                            case 'banned':
                                var roomindex = jqcc.cometchat.getChatroomVars('joinedrooms').indexOf(id);
                                if (jqcc.cometchat.getChatroomVars('myid') == data[2] && roomindex > -1) {
                                    jqcc.cometchat.banChatroomUser(data[1],incoming.id);
                                    alert ("Sorry, you are banned from this group.");
                                    jqcc.cometchat.leaveChatroom(data[2], 1);
                                }
                                return '';
                                break;
                            case 'deletemessage':
                                $("#cometchat_groupmessage_"+data[2]).remove();
                                return '';
                                break;
                            case 'deletedchatroom':
                                var roomindex = jqcc.cometchat.getChatroomVars('joinedrooms').indexOf(incoming.groupid);
                                if(roomindex > -1){
                                    jqcc.cometchat.leaveChatroom();
                                    var params = {'chatid':data[2],'isgroup':1,'timestamp':incoming.sent,'m':'','msgid':incoming.id,'force':0,'del':1};
                                    jqcc.cometchat.updateRecentChats(params);
                                    alert ("The group has been deleted.");
                                }
                                return '';
                                break;
                            default :
                                break;
                        }
                    }
                } else {
                    return incoming.message;
                }
            },
            chatroomready: function() {
                jqcc(function() {
                    if(jqcc.cometchat.getChatroomVars('calleeAPI') != 'mobilewebapp') {
                        attachPlaceholder();
                        if ((jqcc.cometchat.chatroommessageBeep()) == 1) {
                            jqcc('<audio id="messageBeep" style="display:none;"><source src="'+jqcc.cometchat.getChatroomVars('staticCDNUrl')+'sounds/beep.mp3" type="audio/mpeg"><source src="'+jqcc.cometchat.getChatroomVars('baseUrl')+'sounds/beep.ogg" type="audio/ogg"><source src="'+jqcc.cometchat.getChatroomVars('baseUrl')+'sounds/beep.wav" type="audio/wav"></audio>').appendTo(jqcc("body"));
                        }
                        try {
                            if (parent.jqcc.cometchat.ping() == 1) {
                                jqcc.cometchat.setChatroomVars('apiAccess',1);
                            }
                            if (jqcc().slimScroll && this.crvariables.mobileDevice == null) {
                                jqcc("#currentroom_convo").slimScroll({height: jqcc("#currentroom_convo").css('height')});
                                jqcc("#currentroom_users").slimScroll({height: jqcc("#currentroom_users").css('height')});
                            }
                        } catch (e) {}
                        if(typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')]) != 'undefined' &&  jqcc.cometchat.getChatroomVars('calleeAPI') !== 'mobilewebapp' && typeof jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomWindowResize != "undefined") {
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomWindowResize();
                        }
                        window.onresize = function(event) {
                            if(jqcc.cometchat.getChatroomVars('calleeAPI') !== 'mobilewebapp' && typeof jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomWindowResize != "undefined") {
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomWindowResize();
                            }
                        }
                        jqcc("#cometchat_tabinputcontainer").on('keydown',"textarea.cometchat_textarea",function(event){
                            return jqcc.cometchat.chatroomBoxKeydown(event,this,jqcc.cometchat.getChatroomVars('currentroom'));
                        });
                        jqcc("div.cometchat_tabcontentsubmit").click(function(event) {
                            return jqcc.cometchat.chatroomBoxKeydown(event,jqcc("textarea.cometchat_textarea"),jqcc.cometchat.getChatroomVars('currentroom'),1);
                        });
                        jqcc("textarea.cometchat_textarea").keyup(function(event) {
                            return jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomBoxKeyup(event,this);
                        });
                    }
                });
            },
            subscribeCometChatrooms: function(data){
                jqcc.each(data, function(type,item) {
                    jqcc.cometchat.addCRCSChannel(item.chatroomid, item.userid, item.cometid);
                });
            },
            addCRCSChannel: function(groupid, userid, cometid){
                var CRCSChannels = jqcc.cometchat.getChatroomVars('CRCSChannels');
                var cometIds = {};
                if(typeof(CRCSChannels) == 'undefined'){
                    cometIds[groupid] = cometid;
                    jqcc.cometchat.setChatroomVars('CRCSChannels',cometIds);
                } else {
                    cometIds = jqcc.cometchat.getChatroomVars('CRCSChannels');
                    if(!cometIds.hasOwnProperty(groupid)){
                        cometIds[groupid] = cometid;
                    }
                    jqcc.cometchat.setChatroomVars('CRCSChannels',cometIds);
                }
                chatroomcall_function(cometid,userid);
            },
            removeCRCSChannel: function(groupid){
                var CRCSChannels = jqcc.cometchat.getChatroomVars('CRCSChannels');
                if(typeof(CRCSChannels) != 'undefined' && CRCSChannels.hasOwnProperty(groupid)){
                    cometuncall_function(CRCSChannels[groupid]);
                    delete CRCSChannels[groupid];
                    jqcc.cometchat.setChatroomVars('CRCSChannels',CRCSChannels);
                }
            },
            getChatroomDetails: function(params){
                var response = '';
                if(!params.hasOwnProperty('force')){
                    params.force = 0;
                }
                if(!params.hasOwnProperty('count')){
                    params.count = 0;
                }
                chatrooms = jqcc.cometchat.getChatroomVars('chatroomdetails');
                if(params.id != '') {
                    if(chatrooms.hasOwnProperty('_'+params.id)){
                        if(typeof(params.callback) != 'undefined' && params.callback != '' && typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')][params.callback]) != 'undefined'){
                            jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')][params.callback](params.id,chatrooms['_'+params.id]);
                        }
                    }else{
                        jqcc.ajax({
                            url: this.crvariables.baseUrl+"cometchat_receive.php?action=getChatroomDetails",
                            data: {groupid: params.id, basedata:jqcc.cometchat.getBaseData()},
                            type: 'post',
                            cache: false,
                            timeout: 10000,
                            dataType: 'jsonp',
                            success: function(data) {
                                if(typeof(params.loadroom)!='undefined' && params.loadroom > 0){
                                    if(typeof(data) != "object"){
                                        data = JSON.parse(data);
                                    }
                                jqcc.cometchat.chatroom(data.id, cc_urlencode(data.name), data.type, data.password,0,0,params.force,params.loadroom,params.count);
                                }
                                chatrooms['_'+data.id] = data;
                                jqcc.cometchat.setChatroomVars('chatroomdetails',chatrooms);
                                if(typeof(params.callback) != 'undefined' && params.callback != ''){
                                    if(typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')][params.callback]) != 'undefined') {
                                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')][params.callback](data.id,data);
                                    }
                                }
                            }
                        });
                    }
                }
            },
            updateChatroomMessages: function(groupid,prepend){
                if(typeof(prepend)=="undefined"){
                    prepend  = 0;
                }
                jqcc.ajax({
                    cache: false,
                    url: this.crvariables.baseUrl+"cometchat_receive.php?action=updateChatroomMessages",
                    data: {groupid: groupid, basedata: jqcc.cometchat.getBaseData(), prepend: prepend},
                    type: 'post',
                    timeout: 10000,
                    dataType: 'jsonp',
                    success: function(data){
                        if(data){
                            if(typeof(prepend)!=="undefined"){
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].prependCrMessages(groupid, data);
                            }
                        }
                    }
                });
            },
            updateToStorage: function(key,value){
                if(Object.keys(value).length === 0) {
                    jqcc.jStorage.set(key,{});
                } else {
                    jqcc.jStorage.set(key,
                        jqcc.extend(true,
                            {},
                            jqcc.jStorage.get(key,{}),
                            value
                        )
                    );
                }
            },
            getFromStorage: function(key){
                return jqcc.jStorage.get(key,{});
            }
        }
    );

    jqcc.cometchat.chatroomready();


    function SHA1(e){function rotate_left(n,s){var a=(n<<s)|(n>>>(32-s));return a};function lsb_hex(a){var b="";var i;var c;var d;for(i=0;i<=6;i+=2){c=(a>>>(i*4+4))&0x0f;d=(a>>>(i*4))&0x0f;b+=c.toString(16)+d.toString(16)}return b};function cvt_hex(a){var b="";var i;var v;for(i=7;i>=0;i--){v=(a>>>(i*4))&0x0f;b+=v.toString(16)}return b};function Utf8Encode(a){a=a.replace(/\r\n/g,"\n");var b="";for(var n=0;n<a.length;n++){var c=a.charCodeAt(n);if(c<128){b+=String.fromCharCode(c)}else if((c>127)&&(c<2048)){b+=String.fromCharCode((c>>6)|192);b+=String.fromCharCode((c&63)|128)}else{b+=String.fromCharCode((c>>12)|224);b+=String.fromCharCode(((c>>6)&63)|128);b+=String.fromCharCode((c&63)|128)}}return b};var f;var i,j;var W=new Array(80);var g=0x67452301;var h=0xEFCDAB89;var k=0x98BADCFE;var l=0x10325476;var m=0xC3D2E1F0;var A,B,C,D,E;var o;e=Utf8Encode(e);var p=e.length;var q=new Array();for(i=0;i<p-3;i+=4){j=e.charCodeAt(i)<<24|e.charCodeAt(i+1)<<16|e.charCodeAt(i+2)<<8|e.charCodeAt(i+3);q.push(j)}switch(p%4){case 0:i=0x080000000;break;case 1:i=e.charCodeAt(p-1)<<24|0x0800000;break;case 2:i=e.charCodeAt(p-2)<<24|e.charCodeAt(p-1)<<16|0x08000;break;case 3:i=e.charCodeAt(p-3)<<24|e.charCodeAt(p-2)<<16|e.charCodeAt(p-1)<<8|0x80;break}q.push(i);while((q.length%16)!=14)q.push(0);q.push(p>>>29);q.push((p<<3)&0x0ffffffff);for(f=0;f<q.length;f+=16){for(i=0;i<16;i++)W[i]=q[f+i];for(i=16;i<=79;i++)W[i]=rotate_left(W[i-3]^W[i-8]^W[i-14]^W[i-16],1);A=g;B=h;C=k;D=l;E=m;for(i=0;i<=19;i++){o=(rotate_left(A,5)+((B&C)|(~B&D))+E+W[i]+0x5A827999)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=o}for(i=20;i<=39;i++){o=(rotate_left(A,5)+(B^C^D)+E+W[i]+0x6ED9EBA1)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=o}for(i=40;i<=59;i++){o=(rotate_left(A,5)+((B&C)|(B&D)|(C&D))+E+W[i]+0x8F1BBCDC)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=o}for(i=60;i<=79;i++){o=(rotate_left(A,5)+(B^C^D)+E+W[i]+0xCA62C1D6)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=o}g=(g+A)&0x0ffffffff;h=(h+B)&0x0ffffffff;k=(k+C)&0x0ffffffff;l=(l+D)&0x0ffffffff;m=(m+E)&0x0ffffffff}var o=cvt_hex(g)+cvt_hex(h)+cvt_hex(k)+cvt_hex(l)+cvt_hex(m);return o.toLowerCase()}

    function MD5(j){function RotateLeft(a,b){return(a<<b)|(a>>>(32-b))}function AddUnsigned(a,b){var c,lY4,lX8,lY8,lResult;lX8=(a&0x80000000);lY8=(b&0x80000000);c=(a&0x40000000);lY4=(b&0x40000000);lResult=(a&0x3FFFFFFF)+(b&0x3FFFFFFF);if(c&lY4){return(lResult^0x80000000^lX8^lY8)}if(c|lY4){if(lResult&0x40000000){return(lResult^0xC0000000^lX8^lY8)}else{return(lResult^0x40000000^lX8^lY8)}}else{return(lResult^lX8^lY8)}}function F(x,y,z){return(x&y)|((~x)&z)}function G(x,y,z){return(x&z)|(y&(~z))}function H(x,y,z){return(x^y^z)}function I(x,y,z){return(y^(x|(~z)))}function FF(a,b,c,d,x,s,e){a=AddUnsigned(a,AddUnsigned(AddUnsigned(F(b,c,d),x),e));return AddUnsigned(RotateLeft(a,s),b)};function GG(a,b,c,d,x,s,e){a=AddUnsigned(a,AddUnsigned(AddUnsigned(G(b,c,d),x),e));return AddUnsigned(RotateLeft(a,s),b)};function HH(a,b,c,d,x,s,e){a=AddUnsigned(a,AddUnsigned(AddUnsigned(H(b,c,d),x),e));return AddUnsigned(RotateLeft(a,s),b)};function II(a,b,c,d,x,s,e){a=AddUnsigned(a,AddUnsigned(AddUnsigned(I(b,c,d),x),e));return AddUnsigned(RotateLeft(a,s),b)};function ConvertToWordArray(a){var b;var c=a.length;var d=c+8;var e=(d-(d%64))/64;var f=(e+1)*16;var g=Array(f-1);var h=0;var i=0;while(i<c){b=(i-(i%4))/4;h=(i%4)*8;g[b]=(g[b]|(a.charCodeAt(i)<<h));i++}b=(i-(i%4))/4;h=(i%4)*8;g[b]=g[b]|(0x80<<h);g[f-2]=c<<3;g[f-1]=c>>>29;return g};function WordToHex(a){var b="",WordToHexValue_temp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=(a>>>(lCount*8))&255;WordToHexValue_temp="0"+lByte.toString(16);b=b+WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2)}return b};function Utf8Encode(a){a=a.replace(/\r\n/g,"\n");var b="";for(var n=0;n<a.length;n++){var c=a.charCodeAt(n);if(c<128){b+=String.fromCharCode(c)}else if((c>127)&&(c<2048)){b+=String.fromCharCode((c>>6)|192);b+=String.fromCharCode((c&63)|128)}else{b+=String.fromCharCode((c>>12)|224);b+=String.fromCharCode(((c>>6)&63)|128);b+=String.fromCharCode((c&63)|128)}}return b};var x=Array();var k,AA,BB,CC,DD,a,b,c,d;var l=7,S12=12,S13=17,S14=22;var m=5,S22=9,S23=14,S24=20;var o=4,S32=11,S33=16,S34=23;var p=6,S42=10,S43=15,S44=21;j=Utf8Encode(j);x=ConvertToWordArray(j);a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;for(k=0;k<x.length;k+=16){AA=a;BB=b;CC=c;DD=d;a=FF(a,b,c,d,x[k+0],l,0xD76AA478);d=FF(d,a,b,c,x[k+1],S12,0xE8C7B756);c=FF(c,d,a,b,x[k+2],S13,0x242070DB);b=FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);a=FF(a,b,c,d,x[k+4],l,0xF57C0FAF);d=FF(d,a,b,c,x[k+5],S12,0x4787C62A);c=FF(c,d,a,b,x[k+6],S13,0xA8304613);b=FF(b,c,d,a,x[k+7],S14,0xFD469501);a=FF(a,b,c,d,x[k+8],l,0x698098D8);d=FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);a=FF(a,b,c,d,x[k+12],l,0x6B901122);d=FF(d,a,b,c,x[k+13],S12,0xFD987193);c=FF(c,d,a,b,x[k+14],S13,0xA679438E);b=FF(b,c,d,a,x[k+15],S14,0x49B40821);a=GG(a,b,c,d,x[k+1],m,0xF61E2562);d=GG(d,a,b,c,x[k+6],S22,0xC040B340);c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);b=GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);a=GG(a,b,c,d,x[k+5],m,0xD62F105D);d=GG(d,a,b,c,x[k+10],S22,0x2441453);c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);b=GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);a=GG(a,b,c,d,x[k+9],m,0x21E1CDE6);d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);c=GG(c,d,a,b,x[k+3],S23,0xF4D50D87);b=GG(b,c,d,a,x[k+8],S24,0x455A14ED);a=GG(a,b,c,d,x[k+13],m,0xA9E3E905);d=GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);c=GG(c,d,a,b,x[k+7],S23,0x676F02D9);b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);a=HH(a,b,c,d,x[k+5],o,0xFFFA3942);d=HH(d,a,b,c,x[k+8],S32,0x8771F681);c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);a=HH(a,b,c,d,x[k+1],o,0xA4BEEA44);d=HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);c=HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);a=HH(a,b,c,d,x[k+13],o,0x289B7EC6);d=HH(d,a,b,c,x[k+0],S32,0xEAA127FA);c=HH(c,d,a,b,x[k+3],S33,0xD4EF3085);b=HH(b,c,d,a,x[k+6],S34,0x4881D05);a=HH(a,b,c,d,x[k+9],o,0xD9D4D039);d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);b=HH(b,c,d,a,x[k+2],S34,0xC4AC5665);a=II(a,b,c,d,x[k+0],p,0xF4292244);d=II(d,a,b,c,x[k+7],S42,0x432AFF97);c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);b=II(b,c,d,a,x[k+5],S44,0xFC93A039);a=II(a,b,c,d,x[k+12],p,0x655B59C3);d=II(d,a,b,c,x[k+3],S42,0x8F0CCC92);c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);b=II(b,c,d,a,x[k+1],S44,0x85845DD1);a=II(a,b,c,d,x[k+8],p,0x6FA87E4F);d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);c=II(c,d,a,b,x[k+6],S43,0xA3014314);b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);a=II(a,b,c,d,x[k+4],p,0xF7537E82);d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);c=II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);b=II(b,c,d,a,x[k+9],S44,0xEB86D391);a=AddUnsigned(a,AA);b=AddUnsigned(b,BB);c=AddUnsigned(c,CC);d=AddUnsigned(d,DD)}var q=WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);return q.toLowerCase()}

    function utf8_decode(a){var b=[],i=0,ac=0,c1=0,c2=0,c3=0;a+='';while(i<a.length){c1=a.charCodeAt(i);if(c1<128){b[ac++]=String.fromCharCode(c1);i++}else if((c1>191)&&(c1<224)){c2=a.charCodeAt(i+1);b[ac++]=String.fromCharCode(((c1&31)<<6)|(c2&63));i+=2}else{c2=a.charCodeAt(i+1);c3=a.charCodeAt(i+2);b[ac++]=String.fromCharCode(((c1&15)<<12)|((c2&63)<<6)|(c3&63));i+=3}}return b.join('')}

    function utf8_encode(a){var b=(a+'');var c="";var d,end;var e=0;d=end=0;e=b.length;for(var n=0;n<e;n++){var f=b.charCodeAt(n);var g=null;if(f<128){end++}else if(f>127&&f<2048){g=String.fromCharCode((f>>6)|192)+String.fromCharCode((f&63)|128)}else{g=String.fromCharCode((f>>12)|224)+String.fromCharCode(((f>>6)&63)|128)+String.fromCharCode((f&63)|128)}if(g!==null){if(end>d){c+=b.substring(d,end)}c+=g;d=end=n+1}}if(end>d){c+=b.substring(d,b.length)}return c}

    function cc_urlencode (string) {
            return btoa(encodeURIComponent(string));
    }

    function urldecode (string) {
            return decodeURIComponent(atob(string));
    }

    function getURLParameter (name) {
            return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
    }

    /* Copyright (c) 2006 Klaus Hartl (stilbuero.de)
     http://www.opensource.org/licenses/mit-license.php*/

    jqcc.cookie=function(a,b,c){if(typeof b!='undefined'){c=c||{};if(b===null){b='';c.expires=-1}var d='';if(c.expires&&(typeof c.expires=='number'||c.expires.toUTCString)){var e;if(typeof c.expires=='number'){e=new Date();e.setTime(e.getTime()+(c.expires*24*60*60*1000))}else{e=c.expires}d='; expires='+e.toUTCString()}var f=c.path?'; path='+(c.path):'';var g=c.domain?'; domain='+(c.domain):'';var h=c.secure?'; secure':'';document.cookie=[a,'=',encodeURIComponent(b),d,f,g,h].join('')}else{var j=null;if(document.cookie&&document.cookie!=''){var k=document.cookie.split(';');for(var i=0;i<k.length;i++){var l=jqcc.trim(k[i]);if(l.substring(0,a.length+1)==(a+'=')){j=decodeURIComponent(l.substring(a.length+1));break}}}return j}};

    /* SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License
     http://www.opensource.org/licenses/mit-license.php */

    if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectCCUtil=="undefined"){deconcept.SWFObjectCCUtil=new Object();}deconcept.SWFObjectCC=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectCCUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObjectCC.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObjectCC.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectCCUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectCCUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObjectCC.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectCCUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectCCUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectCCUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObjectCC;var SWFObjectCC=deconcept.SWFObjectCC;

    function attachPlaceholder(){
        jqcc('#cometchat [placeholder]').not('#cometchat_chatroom_password').focus(function() {
            var input = jqcc(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('cometchat_placeholder');
            }
            }).blur(function() {
            var input = jqcc(this);
            if (input.val() == '') {
                input.addClass('cometchat_placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();

        jqcc('#cometchat [placeholder]').parents('form').submit(function() {
            jqcc(this).find('[placeholder]').each(function() {
                var input = jqcc(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            });
        });
    }



/*
* CometChat
* Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){
    $.ccsave = (function () {
        return {

            getTitle: function() {
                return jqcc.ccsave.getLanguage('title');
            },

            init: function (params) {
                if (!(jqcc.cometchat.membershipAccess('save','plugins'))){
                    return;
                }
                var id = params.to;
                var chatroommode = params.chatroommode;
                var currentTime = new Date();
                var currentTimestamp = currentTime.getTime();
                var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
                var month = currentTime.getMonth();
                var day = currentTime.getDate();
                var year = currentTime.getFullYear();
                var type = 'th';
                if(day==1||day==21||day==31){
                    type = 'st';
                }else if(day==2||day==22){
                    type = 'nd';
                }else if(day==3||day==23){
                    type = 'rd';
                }

                var today = monthNames[month] + " " + day + type + " " + year;
                var hour    = currentTime.getHours();
                var min     = currentTime.getMinutes();
                var ap = hour>11 ? "pm" : "am";
                hour = hour==0 ? 12 : hour>12 ? hour-12 : hour;
                hour = hour<10 ? "0"+hour : hour;
                min = min<10 ? "0"+min : min;
                var savedTime = hour+":"+min+ap;

                baseUrl = $.cometchat.getBaseUrl();
                baseData = $.cometchat.getBaseData();
                var settings = {};

                if(typeof(jqcc.cometchat.getSettings) != "undefined") {
                    settings = jqcc.cometchat.getSettings();
                } else if(typeof(parent.jqcc.cometchat.getSettings) != "undefined") {
                    settings = parent.jqcc.cometchat.getSettings();
                }

                var stickerMessage = '<div style="display:none">'+jqcc.ccsave.getLanguage('sticker_received')+'</div>';
                var stickerSelfMessage = '<div style="display:none">'+jqcc.ccsave.getLanguage('sticker_sent')+'</div>';
                if(chatroommode == 1) {
                    var roomname = params.roomname;
                    if (($("#currentroom_convotext").find('.cometchat_messagebox').length >0) || ($('#cometchat_group_'+id+'_popup').find('.cometchat_chatboxmessage').length > 0)) {
                        var filename = 'Conversation in '+roomname+' chatroom saved on '+today+' at '+savedTime;
                        $("#currentroom").find("span.cometchat_chatboxmessagefrom").after('<div class="cc_newline" style="display:none;">\n<\div>');
                        $('div.cometchat_chatboxmessage').find('img.cometchat_smiley').each(function(key,value){
                            $(this).before('<div class="cc_newline_smile"  style="display:none">('+$(this).attr('title')+')<\div>');
                        });
                        $('div.cometchat_chatboxmessage').find("img.cometchat_stickerImage").each(function(key,value){
                            $(this).before(stickerSelfMessage);
                        });
                        var deletemsg = 'delete';
                        deletemsg ="\\(" + deletemsg + "\\)";

                        var content = '';
                        if (settings.theme == 'docked') {
                            $("#cometchat_grouptabcontenttext_"+id).find(".cometchat_ts_margin").each(function(i,d){
                                time = $(d).next('.cometchat_ts').text();
                                if(time == ""){
                                    time = $(d).next('.cometchat_ts_other').text();
                                }

                                var me = $(d).prev().find('img').attr('title');
                                 if(typeof(me) == "undefined"){
                                    me = '\nMe:';
                                }else{
                                    me =  "\n"+me+":";
                                }

                                data_msg = $(d).find('.cometchat_msg').text();

                                if(me != '\nMe'+jqcc.ccsave.getLanguage('title')+':' && data_msg == jqcc.ccsave.getLanguage('sticker_sent')){
                                        data_msg = jqcc.ccsave.getLanguage('sticker_received');
                                    }

                                var msg_day = $(d).parent().prev('.cometchat_time:visible').attr('msg_format');
                                if(typeof(msg_day) == "undefined"){
                                    msg_day = '';
                                }else{
                                    msg_day =  "\n\n"+msg_day+":\n";
                                }

                                $(d).each(function(j,data){
                                    content += msg_day+me+' '+data_msg +' ('+time+')';
                                });
                            });
                        }else if(settings.theme == 'embedded'){
                              $("#currentroom_convotext").find('.cometchat_messagebox').each(function(i,d){
                                time = $(d).find('.cometchat_ts').text();
                                data_msg = $(d).find('.cometchat_chatboxmessagecontent').text();

                                var me = $(d).find('.cometchat_cr_other_avatar img').attr('title');
                                 if(typeof(me) == "undefined"){
                                    me = '\nMe:';
                                }else{
                                    me =  "\n"+me+":";
                                }

                                if(me != '\nMe:' && data_msg == jqcc.ccsave.getLanguage('sticker_sent')){
                                    data_msg = jqcc.ccsave.getLanguage('sticker_received');
                                }

                                if($(d).prev().prev().css('display') != 'none'){
                                    var msg_day = $(d).prev().prev().attr('msg_format');
                                    msg_day =  "\n\n"+msg_day+':\n';
                                }else{
                                   var msg_day = '';
                                }

                                if(data_msg == '' || data_msg == null || (!data_msg.trim())){
                                    if($(d).find('.cometchat_chatboxmessagecontent img').hasClass('cometchat_smiley')){
                                        $(d).find('.cometchat_chatboxselfmedia .cometchat_smiley').each(function(j,sm){
                                            data_msg += $(sm).attr('title');
                                        });

                                        $(d).find('.cometchat_chatboxmedia .cometchat_smiley').each(function(j,sm){
                                            data_msg += $(sm).attr('title');
                                        });

                                    }else if($(d).find('.cometchat_chatboxmessagecontent img').hasClass('cometchat_stickerImage')){
                                        $(d).find('.cometchat_chatboxselfmedia .cometchat_stickerImage').each(function(j,sm){
                                            data_msg = jqcc.ccsave.getLanguage('sticker_sent');
                                        });

                                        $(d).find('.cometchat_chatboxmedia .cometchat_stickerImage').each(function(j,sm){
                                            data_msg = jqcc.ccsave.getLanguage('sticker_received');
                                        });
                                    }
                                    content += msg_day+me+data_msg +' ('+time+')';
                                }else{
                                   $(d).each(function(j,data){
                                    content += msg_day+me+' '+data_msg +' ('+time+')';
                                });
                                }

                            });

                        }
                        $('div.cc_newline').remove();
                        $('div.cc_newline_smile').remove();
                        $('#cc_saveconvochatroom').remove();

                        setTimeout(function(){
                            $('<form id = "ccsaveform" action="" method="post">'+
                                '<input type="hidden" name="roomname" />'+
                                '<input type="hidden" name="content" />'+
                                '<input type="hidden" name="filename" />'+
                                '</form>').appendTo('body');
                            var form = $('#ccsaveform');
                            form.attr('action',baseUrl+'plugins/save/index.php?id='+roomname+'&basedata='+baseData);
                            form.find('input[name=roomname]').val(roomname);
                            form.find('input[name=content]').val(content);
                            form.find('input[name=filename]').val(filename);
                            form.submit();
                        },50);
                    } else {
                        alert(jqcc.ccsave.getLanguage('log_empty'));
                    }
                } else {
                    var cometchat_user_popup = $("#cometchat_user_"+id+"_popup");
                    if (cometchat_user_popup.find('.cometchat_chatboxmessage').length > 0) {
                        var username = $.cometchat.getName(id);
                        var filename = 'Conversation with '+username+' saved on '+today+' at '+savedTime;
                        var settings = jqcc.cometchat.getSettings();
                        if(settings.theme == 'docked'){
                            $('div.cometchat_chatboxmessage').find("img.cometchat_smiley").each(function(key,value){
                                $(this).before('<div class="cc_newline_smile"  style="display:none">('+$(this).attr('title')+')</div>');
                                });

                            $('div.cometchat_chatboxmessage').find("img.cometchat_stickerImage").each(function(key,value){
                                if($(this).parent().hasClass('cometchat_self_msg')){
                                    $(this).before(stickerSelfMessage);
                                } else {
                                    $(this).before(stickerMessage);
                                }
                            });
                            var content = '';
                            cometchat_user_popup.find('.cometchat_chatboxmessage').each(function(i,d){
                                time = $(d).find('.cometchat_ts').text();
                                if(time == ""){
                                    time = $(d).find('.cometchat_ts_other').text();
                                }

                                data_msg = $(d).find('.cometchat_ts_margin').text();
                                var me = $(d).find('.cometchat_chatboxmessagefrom').text().trim();
                                var me = $(d).find("a.cometchat_floatL img").attr('title');
                                if(typeof(me) == "undefined"){
                                    me = '\nMe: ';
                                }else{
                                     me =  "\n"+me+': ';
                                }

                                var msg_day = $(d).prev('.cometchat_time:visible').attr('msg_format');

                                if(typeof(msg_day) == "undefined"){
                                    msg_day = '';
                                }else{
                                     msg_day =  "\n"+msg_day+':\n';
                                }

                                $(d).find('.cometchat_ts_margin').not('.cometchat_self_msg').each(function(j,data){
                                    content += msg_day+me+' '+ data_msg +' ('+time+')';
                                });
                                $(d).find('.cometchat_ts_margin.cometchat_self_msg').each(function(j,data){
                                    if(data_msg == jqcc.ccsave.getLanguage('sticker_received')){
                                        data_msg = jqcc.ccsave.getLanguage('sticker_sent');
                                    }
                                    content += msg_day+me+' '+ data_msg +' ('+time+')';
                                });
                            });
                            $('div.cc_newline_smile').remove();
                            $('iframe.cc_saveconvoframe').remove();
                            $('#cc_saveconvochatroom').remove();
                        }else if(settings.theme == 'embedded'){
                            $('div.cometchat_chatboxmessage').find("img.cometchat_smiley").each(function(key,value){
                                $(this).before('<div class="cc_newline_smile"  style="display:none">('+$(this).attr('title')+')</div>');
                            });

                            $('div.cometchat_chatboxmessage').find("img.cometchat_stickerImage").each(function(key,value){
                                if($(this).parent().hasClass('cometchat_self_msg')){
                                    $(this).before(stickerSelfMessage);
                                } else {
                                    $(this).before(stickerMessage);
                                }
                            });
                            var username = cometchat_user_popup.find(".cometchat_username").text();
                            var content = '';
                            cometchat_user_popup.find('.cometchat_messagebox').each(function(i,d){
                                time = $(d).find('.cometchat_ts').text();

                                data_msg = $(d).find('.cometchat_chatboxmessage .cometchat_chatboxmessagecontent').text();

                                var me = $(d).find(".cometchat_other_avatar img").attr('src');

                                if(typeof(me) == "undefined" || me == ''){
                                    me = '\nMe: ';
                                }else{
                                   me =  "\n"+username+': ';
                               }

                               if($(d).prev('.cometchat_time').css('display') != 'none'){
                                 var msg_day = $(d).prev('.cometchat_time').attr('msg_format');
                                 msg_day =  "\n\n"+msg_day+':\n';
                               }else{
                                var msg_day = '';
                               }

                           if(data_msg == ''){
                            if($(d).find('.cometchat_chatboxmessagecontent img').hasClass('cometchat_smiley')){
                                $(d).find('.cometchat_chatboxselfmedia .cometchat_smiley').each(function(j,sm){
                                    data_msg += ' '+$(sm).attr('title');
                                });

                                $(d).find('.cometchat_chatboxmedia .cometchat_smiley').each(function(j,sm){
                                    data_msg += ' '+$(sm).attr('title');
                                });

                            }else if($(d).find('.cometchat_chatboxmessagecontent img').hasClass('cometchat_stickerImage')){
                                $(d).find('.cometchat_chatboxselfmedia .cometchat_stickerImage').each(function(j,sm){
                                    data_msg = jqcc.ccsave.getLanguage('sticker_sent');
                                });

                                $(d).find('.cometchat_chatboxmedia .cometchat_stickerImage').each(function(j,sm){
                                    data_msg = jqcc.ccsave.getLanguage('sticker_received');
                                });
                            }
                        }
                            content += msg_day+me+' '+ data_msg +' ('+time+')';
                       });
                            $('div.cc_newline_smile').remove();
                            $('iframe.cc_saveconvoframe').remove();
                            $('#cc_saveconvochatroom').remove();
                        }
                        var iframe = $('<iframe id="cc_saveconvoframe'+id+'" class="cc_saveconvoframe" frameborder="0" style="width: 1px; height: 1px; display: none;"></iframe>').appendTo('body');
                        setTimeout(function(){
                            var formHTML = '<form action="" method="post">'+
                            '<input type="hidden" name="username" />'+
                            '<input type="hidden" name="content" />'+
                            '<input type="hidden" name="filename" />'+
                            '</form>';
                            var body = (iframe.prop('contentDocument') !== undefined) ?
                            iframe.prop('contentDocument').body :
                            iframe.prop('document').body;
                            body = $(body);
                            body.html(formHTML);
                            var form = body.find('form');
                            form.attr('action',baseUrl+'plugins/save/index.php?id='+id+'&basedata='+baseData);
                            form.find('input[name=username]').val(username);
                            form.find('input[name=content]').val(content);
                            form.find('input[name=filename]').val(filename);
                            form.submit();
                        },50);
                    } else {
                        alert(jqcc.ccsave.getLanguage('log_empty'));
                    }
                }
            },
            getLanguage: function(id) {
                save_language =  {"title":"Save Conversation to Desktop","log_empty":"Sorry, your conversation log is empty.","sticker_received":"has sent you a sticker.","sticker_sent":"has sent a sticker.","0":"Save Conversation to Desktop","1":"Sorry, your conversation log is empty.","2":"has sent you a sticker.","3":"has sent a sticker."};
                if(typeof id==undefined){
                    return save_language;
                }else{
                    return save_language[id];
                }
            }
        };
    })();
})(jqcc);

/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){

	$.ccchathistory = (function () {

		var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|IEMobile|blackberry|palm|symbian/i);
		var theme = 'docked';
		var height = 480;
		var width = 650;

        return {
			getTitle: function() {
				return jqcc.ccchathistory.getLanguage('title');
			},
			init: function (params) {
				if(jqcc.cometchat.membershipAccess('chathistory','plugins')){
					params.callbackfn='';				
					if(typeof(jqcc.cometchat.getCcvariable) != "undefined"){
						if(jqcc.cometchat.getCcvariable().callbackfn=='desktop'){
							params.callbackfn='&callbackfn=desktop';
						}
					}
					if(typeof(params.windowMode) == "undefined") {
						params.windowMode = 0;
					} else {
						params.windowMode = 1;
					}
					if(theme == 'embedded'){
						height = $(document).height() - 100;
						width = 500;
					}
					if(mobileDevice){
						params.windowMode = 1;
					}
					jqcc.ccchathistory.loadchathistory(params);
				}
			},
			getLanguage: function(id) {
				chathistory_language =  {"title":"View chat history","me":"Me","chat_convo_with":"Chat Conversation with","lines":"lines","at":"at","back":"Back","chat_history":"Chat History","cr_chat_convo":"Chat Conversation in chatroom","view_entire_convo":"Click here to view entire conversation","no_previous_convo":"No previous conversations to view","no_more_convo":"See more conversations","video_call":"Video call","0":"View chat history","1":"Me","2":"Chat Conversation with","3":"lines","4":"at","5":"Back","6":"Chat History","7":"Chat Conversation in chatroom","8":"Click here to view entire conversation","9":"No previous conversations to view","10":"See more conversations"};
				if(typeof id==undefined){
					return chathistory_language;
				}else{
					return chathistory_language[id];
				}
			},
			loadchathistory: function(params){
				var extraQueryString = '';
				if(typeof(params.chatroommode) != "undefined" && params.chatroommode == 1) {
					var extraQueryString = '&chatroommode=1';
				}
				
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();
				if(mobileDevice){
					params.windowMode = 1;
				}
				loadCCPopup(baseUrl+'plugins/chathistory/index.php?embed=web'+extraQueryString+'&logs=1&history='+params.to+'&basedata='+baseData+params.callbackfn, 'chathistory',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=1,width="+width+",height="+height,width,height,jqcc.ccchathistory.getLanguage('chat_history'),null,null,null,null,params.windowMode);
				
			}
        };
    })();

})(jqcc);
/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/


(function($){

	$.ccscreenshare = (function () {

		var lastcall = 0;
		var height = 480;
		var width = 640;

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
					var controlparameters = {"type":"plugins", "name":"core", "method":"loadCCPopup", "params":{"url": start_url, "name":"screenshare", "properties":"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=640,height=480", "width":width, "height":height, "title":jqcc.ccscreenshare.getLanguage('screen_sharing'), "force":"0", "allowmaximize":"1", "allowresize":"1", "allowpopout":"1", "windowMode":windowMode}};
                    controlparameters = JSON.stringify(controlparameters);
                    parent.postMessage('CC^CONTROL_'+controlparameters,'*');
				} else {
					loadCCPopup(start_url,'screenshare',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=640,height=480",width,height,jqcc.ccscreenshare.getLanguage('screen_sharing'),0,1,1,1,windowMode);
				}
			},

			getLanguage: function(id) {
				screenshare_language =  {"title":"Share my screen","wait_message":"Please wait atleast 10 seconds before trying to share again.","sent_success_other":"has shared his\/her screen with you.","view_screen":"Click here to view his\/her screen","ignore_request":"or simply ignore this message.","sent_success_self":"has successfully shared his\/her screen.","started_viewing":"is now viewing your screen.","screen_sharing":"Screen sharing","refresh_list":"Refresh list","select_window":"Which window would you like to share?","install_plugin":"Install plug-in","open_window":"Click here to open window.","check_email":"Please check your email for verification zoom account at","popup_already_open":"Multimedia session is already open. Please close the existing popup and try again.","0":"Share my screen","1":"Please wait atleast 10 seconds before trying to share again.","2":"has shared his\/her screen with you.","3":"Click here to view his\/her screen","4":"or simply ignore this message.","5":"has successfully shared his\/her screen.","6":"is now viewing your screen.","7":"Screen sharing","8":"Refresh list","9":"Which window would you like to share?","10":"Install plug-in","11":"Click here to open window.","12":"Please check your email for verification zoom account at"};
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

/*
	* CometChat
	* Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

 (function($){
 	$.cctransliterate = (function () {
 		var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|IEMobile|blackberry|palm|symbian/i);
 		var transliterationControl;
        var options = {
            sourceLanguage: 'en',
            destinationLanguage: ['hi','ar','kn','ml','ta','te'],
            transliterationEnabled: true,
            shortcutKey: 'ctrl+g'
        };
 		return {

 			getTitle: function() {
 				return jqcc.cctransliterate.getLanguage('title');
 			},

 			init: function (params) {
 				if (jqcc.cometchat.membershipAccess('transliterate','plugins')){
	 				var id = params.to;
					var chatroommode = params.chatroommode;
					if(mobileDevice == null){
						jqcc.cctransliterate.loadtransliterate(params);
						if(chatroommode == 1){
							$('#cometchat_group_'+id+'_popup').find('#cometchat_groupplugins_openup_icon_'+id).removeClass('cometchat_pluginsopenup_arrowrotate');
						} else {
							$('#cometchat_user_'+id+'_popup').find('#cometchat_plugins_openup_icon_'+id).removeClass('cometchat_pluginsopenup_arrowrotate');
						}
					} else {
						jqcc.cctransliterate.onLoad({"to":id, "chatroommode": chatroommode, "caller": jqcc.cometchat.getUserID()});
					}
				}
 			},

 			setTitle: function(params) {
 				var lang = params.lang;
 				if(typeof(params.formatLang) == 'undefined'){
					$(document.getElementById("cometchat_container_transliterate")).find( ".cometchat_container_title span" ).html(lang);
 				} else {
 					$(document.getElementById("cometchat_container_transliterate")).find( ".cometchat_container_title span" ).html(lang + ' : ' + params.formatLang);
 				}
 			},

 			appendMessage: function(params) {
 				var to = params.to;
 				var data = params.data;
 				var chatroommode = params.chatroommode;
 				var e = {'keyCode':13, 'shiftKey':0};
 				var theme = jqcc.cometchat.getSettings().theme;
 				if(chatroommode == 1){
 					if(jqcc('#currentroom').length != 0) {
 						jqcc('#currentroom .cometchat_textarea').focus();
	 					jqcc('#currentroom .cometchat_textarea').val(data);
	 					jqcc[theme].chatroomBoxKeydown(event,'#currentroom .cometchat_textarea',to,1);
					}
					if(jqcc('#cometchat_group_'+to+'_popup').length != 0){						
						jqcc('#cometchat_group_'+to+'_popup .cometchat_textarea').focus();
	 					jqcc('#cometchat_group_'+to+'_popup .cometchat_textarea').val(data);
						jqcc[theme].chatroomBoxKeydown(e,'#cometchat_group_'+to+'_popup .cometchat_textarea',to);
					}
 				} else {
 					if(jqcc('#cometchat_user_'+to+'_popup').length != 0) {
 						jqcc('#cometchat_user_'+to+'_popup .cometchat_textarea').focus();
 						jqcc('#cometchat_user_'+to+'_popup .cometchat_textarea').val(data);
 						jqcc[theme].chatboxKeydown(e,'#cometchat_user_'+to+'_popup .cometchat_textarea',to);
					}
 				}
 			},

	      onLoad: function(params) {
	      	if(params.chatroommode == 0){
		        var ids = [ "cometchat_textarea_"+params.to ];
		        var languageSelect = document.getElementById('selectlanguage_'+params.to);
		    } else{
		    	var ids = [ "cometchat_textarea_"+params.to];
		    	var languageSelect = document.getElementById('selectlanguage');
		    }
		    if(languageSelect.length <= 1){
		    	google.load("elements", "1", {
		            packages: "transliteration"
		          });
		      	transliterationControl = new google.elements.transliteration.TransliterationControl(options);
		        transliterationControl.makeTransliteratable(ids);

		        var destinationLanguage =
		          transliterationControl.getLanguagePair().destinationLanguage;

		        var supportedDestinationLanguages =
		        google.elements.transliteration.getDestinationLanguages(google.elements.transliteration.LanguageCode.ENGLISH);
		        for (var lang in supportedDestinationLanguages) {
		          var opt = document.createElement('option');
		          opt.text = lang;
		          opt.value = supportedDestinationLanguages[lang];
		          if (destinationLanguage == opt.value) {
		            opt.selected = true;
		          }
		          try {
		            languageSelect.add(opt, null);
		          } catch (ex) {
		            languageSelect.add(opt);
		          }
		        }
		    }

	        if (document.createEvent) {
                var e = document.createEvent("MouseEvents");
                e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                if(params.chatroommode == 0){
                	jqcc('#selectlanguage_'+params.to)[0].dispatchEvent(e);
                } else{
                	jqcc('#selectlanguage')[0].dispatchEvent(e)
                }
            } else if (element.fireEvent) {
            	if(params.chatroommode == 0){
                	jqcc('#selectlanguage_'+params.to)[0].fireEvent("onmousedown");
                } else{
                	jqcc('#selectlanguage')[0].fireEvent("onmousedown");
                }
            }


	      },

	      languageChangeHandler: function(language){
	      	if(language == 'no'){
	      		transliterationControl.disableTransliteration();
	      		jqcc('.cometchat_textarea').removeAttr('dir');
	      	} else{
	      		transliterationControl.enableTransliteration();
		      	languageSelect = language;
		        transliterationControl.setLanguagePair(google.elements.transliteration.LanguageCode.ENGLISH,
		            languageSelect);
		    }
	      },
	        getLanguage: function(id) {
				transliterate_language =  {"title":"Write in your language","select_language":"Which language would you like to transliterate to?","type_and_convert":"Type in English and use space to transliterate to your language","send":"Send","change_language":"(change language)","0":"Write in your language","1":"Which language would you like to transliterate to?","2":"Type in English and use space to transliterate to your language","3":"Send","4":"(change language)"};
				if(typeof id==undefined){
					return transliterate_language;
				}else{
					return transliterate_language[id];
				}
			},
			loadtransliterate: function(params){
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();
				var extraQueryString = '';
				if(typeof(params.caller) != "undefined") {
					extraQueryString += "&caller="+params.caller;
				}
				if(params.chatroommode==1){
					extraQueryString += '&chatroommode=1';
				}

				loadPopupInChatbox(baseUrl+'plugins/transliterate/index.php?id='+params.to+extraQueryString+'&basedata='+baseData, 'transliterate', 0, params.to, params.chatroommode);
			}
 		};
 	})();
 })(jqcc);

 function chatboxKeydown(event) {
	if(event.keyCode == 13 && event.shiftKey == 0)  {
		pushcontents();
	}
}

function pushcontents() {
	var data = document.getElementById('cometchat_textarea').value;
	document.getElementById('cometchat_textarea').value = '';
	var controlparameters = {"type":"plugins", "name":"cctransliterate", "method":"appendMessage", "params":{"to":"{$toId}", "data":data}};
	controlparameters = JSON.stringify(controlparameters);
	if(typeof(window.opener) == 'undefined' || window.opener == null){
		parent.postMessage('CC^CONTROL_'+controlparameters,'*');
	}else{
		window.opener.postMessage('CC^CONTROL_'+controlparameters,'*');
	}
	setTimeout('document.getElementById(\'cometchat_textarea\').focus()',100);
	setTimeout('document.getElementById(\'cometchat_textarea\').focus()',1000);
}

jqcc(document).ready(function() {
	jqcc('.selectlanguage').live('change',function(){
		id = jqcc.cometchat.getThemeVariable('openChatboxId')[0];
		jqcc.cctransliterate.languageChangeHandler($(this).val());
	});
});

/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
 */

 (function($){

 	$.ccclearconversation = (function () {

 		var type = '1';

 		return {

 			getTitle: function() {
 				return jqcc.ccclearconversation.getLanguage('title');
 			},

			init: function (params) {
                if(jqcc.cometchat.membershipAccess('clearconversation','plugins')){
    				var id = params.to;
    				var chatroommode = params.chatroommode;
                    var parameter = {clearid: id};
                    if(type == 1) {
                        parameter = {deleteid: id};
                    }
     				if(chatroommode == 1) {
     					if($("#currentroom_convotext").length){
     						if ($("#currentroom_convotext").html() != '') {
     							baseUrl = $.cometchat.getBaseUrl();
     							basedata = $.cometchat.getBaseData();
                                var lastid = parseInt($('#currentroom_convotext').find('.cometchat_chatboxmessage:last').attr('id').replace('cometchat_groupmessage_',''));
                                parameter.lastid = lastid;
     							$.getJSON(baseUrl+'plugins/clearconversation/index.php?action=clear&basedata='+basedata+'&chatroommode=1&callback=?', parameter);
     							$("#currentroom_convotext").html('');
     						}
     					}else{
     						if ($("#cometchat_grouptabcontenttext_"+id).html() != '') {
     							baseUrl = $.cometchat.getBaseUrl();
     							basedata = $.cometchat.getBaseData();
     							var lastid = parseInt($('#cometchat_grouptabcontenttext_'+id).find('.cometchat_chatboxmessage:last').attr('id').replace('cometchat_groupmessage_',''));
     							parameter.lastid = lastid;
                                $.getJSON(baseUrl+'plugins/clearconversation/index.php?action=clear&basedata='+basedata+'&chatroommode=1&callback=?', parameter);
                                $("#cometchat_grouptabcontenttext_"+id).find('.cometchat_ts').remove();
                                $("#cometchat_grouptabcontenttext_"+id).find('.cometchat_chatboxmessage').remove();
                                $("#cometchat_grouptabcontenttext_"+id).find('.cometchat_time').remove();
     						}
     					}
     				} else {
     					var settings = jqcc.cometchat.getSettings();
     					if ($("#cometchat_user_"+id+"_popup").find("div.cometchat_tabcontenttext").html() != '') {
     						baseUrl = $.cometchat.getBaseUrl();
     						baseData = $.cometchat.getBaseData();
                            parameter.basedata = (typeof(baseData) == undefined) ? '' : baseData;
     						$.getJSON(baseUrl+'plugins/clearconversation/index.php?action=clear&callback=?', parameter);
     						
                            if($("#cometchat_user_"+id+"_popup").find("div.cometchat_tabcontenttext > div.cometchat_chatboxmessage").length == 0){
     							$("#cometchat_user_"+id+"_popup").find("div.cometchat_tabcontenttext > div.cometchat_message_container > div.cometchat_messagebox").remove();
     							$("#cometchat_user_"+id+"_popup").find("div.cometchat_tabcontenttext > div.cometchat_time").remove();
     							$("#cometchat_user_"+id+"_popup").find("div.cometchat_tabcontenttext > div.cometchat_message_container > div.cometchat_time").remove();
                                $("#cometchat_user_"+id+"_popup").find("div.cometchat_tabcontenttext > span.cometchat_sentnotification").remove();
     						}else{
     							$("#cometchat_user_"+id+"_popup").find("div.cometchat_tabcontenttext > div.cometchat_chatboxmessage").remove();
     							$("#cometchat_user_"+id+"_popup").find("div.cometchat_tabcontenttext > table.cometchat_iphone").remove();
     							$("#cometchat_user_"+id+"_popup").find("div.cometchat_tabcontenttext > div.cometchat_time").remove();
     							$("#cometchat_user_"+id+"_popup").find("div.cometchat_tabcontenttext > div.cometchat_message_container > div.cometchat_time").remove();
                                $("#cometchat_user_"+id+"_popup").find("div.cometchat_tabcontenttext > span.cometchat_sentnotification").remove();
     						}
     					}
                    }
 				}
 			},

            getLanguage: function(id) {
                clearconversation_language =  {"title":"Clear Conversation","0":"Clear Conversation"};
                if(typeof id==undefined){
                    return clearconversation_language;
                }else{
                    return clearconversation_language[id];
                }
            }
 		};
 	})();

 })(jqcc);
/*
		* CometChat
		* Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/
String.prototype.replaceAll=function(s1, s2) {return this.split(s1).join(s2);};
(function($){

	$.ccaudiochat = (function () {
		var supported = true;
		var lastcall = 0;
		var allowresize = 1;
		var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|IEMobile|blackberry|palm|symbian/i);
		var Browser = (function(){
			var ua= navigator.userAgent, tem,
			M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
			if(/trident/i.test(M[1])){
				tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
				return 'IE '+(tem[1] || '');
			}
			if(M[1]=== 'Chrome'){
				tem= ua.match(/\bOPR\/(\d+)/);
				if(tem!= null) return 'Opera '+tem[1];
			}
			M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
			if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
			return M;
		})();
		if(Browser[0]=='MSIE' && parseInt(Browser[1]) < 11 ){
			supported = false;
		}

		return {

			getTitle: function() {
				return jqcc.ccaudiochat.getLanguage('title');
			},

			init: function (params) {
				if (!(jqcc.cometchat.membershipAccess('audiochat','plugins'))){
					return;
				}
				if (jqcc.cometchat.checkMobileDevice()){
					return;
				}
				if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
					alert(jqcc.ccaudiochat.getLanguage('popup_already_open'));
					return;
				}
				var id = params.to;
				var chatroommode = params.chatroommode;
				var caller = '';
				windowMode = 0;
				if(typeof(params.caller) != "undefined"){
					caller = params.caller;
				}
				if(supported) {
					var currenttime = new Date();
					currenttime = parseInt(currenttime.getTime()/1000);
					if (currenttime-lastcall > 10) {

						baseUrl = $.cometchat.getBaseUrl();
						baseData = $.cometchat.getBaseData();

						if(chatroommode == 1){
							if(location.protocol === 'http:') {
								windowMode = 1;
							}
							jqcc.ajax({
								url : baseUrl+'plugins/audiochat/index.php?chatroommode=1&action=request',
								data : {to: id, basedata: baseData, caller: caller},
								dataType : 'jsonp',
								success : function(data){
									if(data.hasOwnProperty('errorcode')&&data['errorcode']==3){
										alert(data['message']);
										return;
									}
									if(typeof(data) != "undefined" && data != null && data != ''){
										id = data;
									}
									var controlparameters = {
											type: "plugins",
											name: "core",
											method: "loadCCPopup",
											params: {
												url: baseUrl+'plugins/audiochat/index.php?action=call&chatroommode=1&type=0&join=1&grp='+id+'&basedata='+baseData,
												name: "audiochat",
												properties: "status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=300,height=300",
												width: "300",
												height: "300",
												title: jqcc.ccaudiochat.getLanguage('audio_chat'),
												force: "0",
												allowmaximize :"1",
												allowresize: "1",
												allowpopout:"1",
												windowMode:windowMode
											}
										};
						            controlparameters = JSON.stringify(controlparameters);
						            parent.postMessage('CC^CONTROL_'+controlparameters,'*');
								},
								error : function(data){
								}
							});
						}else{
							jqcc.ajax({
								url : baseUrl+'plugins/audiochat/index.php?action=request',
								type : 'GET',
								data : {
									to: id,
									basedata: baseData,
									caller:caller
								},
								dataType : 'jsonp',
								success : function(data) {
									if(data.hasOwnProperty('errorcode')&&data['errorcode']==3){
										alert(data['message']);
										return;
									}
								},
								error : function(data) {
								}
							});
						}
						lastcall = currenttime;
					} else {
						alert(jqcc.ccaudiochat.getLanguage('wait_message'));
					}
				} else {
					alert(jqcc.ccaudiochat.getLanguage('err_no_browser_support'));
				}
			},

			accept: function (params) {
				if (!(jqcc.cometchat.membershipAccess('audiochat','plugins'))){
					return;
				}
				if (jqcc.cometchat.checkMobileDevice()){
					return;
				}
				if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
					alert(jqcc.ccaudiochat.getLanguage('popup_already_open'));
					return;
				}
				id = params.to;
				grp = params.grp;
				if(typeof(params.windowMode) == "undefined") {
					windowMode = 0;
				} else {
					windowMode = 1;
				}
				if(location.protocol === 'http:') {
					windowMode = 1;
				}
				if(mobileDevice){
					windowMode = 1;
				}
				var caller = '';
				if(typeof(params.caller) != "undefined"){
					caller = params.caller;
				}
				if(supported){
					baseUrl = $.cometchat.getBaseUrl();
					baseData = $.cometchat.getBaseData();

					var controlparameters = {"grp":params.grp};
					jqcc.ccaudiochat.delinkaudiochat(controlparameters);
					if(caller != "" && caller != "undefined") {
						var returnparameters = {"type":"plugins", "name":"ccaudiochat", "method":"delinkaudiochat", "params":{"grp":grp}};
						returnparameters = JSON.stringify(returnparameters);
						jqcc('#'+caller)[0].contentWindow.postMessage('CC^CONTROL_'+returnparameters,'*');
					}

					$.getJSON(baseUrl+'plugins/audiochat/index.php?action=accept&callback=?', {to: id, start_url:null, grp: grp, basedata: baseData, caller: caller});
					loadCCPopup(baseUrl+'plugins/audiochat/index.php?action=call&caller='+caller+'&grp='+grp+'&basedata='+baseData+'&to='+id, 'audiochat',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=225,height=200",225,200,jqcc.ccaudiochat.getLanguage('audio_chat'),0,1,allowresize,1,windowMode);
				} else {
					alert(jqcc.ccaudiochat.getLanguage('err_no_browser_support'));
				}
			},

			accept_fid: function (params) {
				if (!(jqcc.cometchat.membershipAccess('audiochat','plugins'))){
					return;
				}
				if (jqcc.cometchat.checkMobileDevice()){
					return;
				}
				if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
					alert(jqcc.ccaudiochat.getLanguage('popup_already_open'));
					return;
				}
				id = params.to;
				grp = params.grp;
				if(typeof(params.windowMode) == "undefined") {
					windowMode = 0;
				} else {
					windowMode = 1;
				}
				if(location.protocol === 'http:') {
					windowMode = 1;
				}
				var caller = '';
				if(typeof(params.caller) != "undefined"){
					caller = params.caller;
				}
				if(mobileDevice){
					windowMode = 1;
				}
				var controlparameters = {"grp":params.grp};
				jqcc.ccaudiochat.delinkaudiochat(controlparameters);
				if(caller != "" && caller != "undefined") {
					var returnparameters = {"type":"plugins", "name":"ccaudiochat", "method":"delinkaudiochat", "params":{"grp":grp}};
					returnparameters = JSON.stringify(returnparameters);
					jqcc('#'+caller)[0].contentWindow.postMessage('CC^CONTROL_'+returnparameters,'*');
				}

				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();
				loadCCPopup(baseUrl+'plugins/audiochat/index.php?action=call&caller='+caller+'&grp='+grp+'&basedata='+baseData+'&to='+id+'&initiator=1', 'audiochat',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=225,height=200",225,200,jqcc.ccaudiochat.getLanguage('audio_chat'),0,1,allowresize,1,windowMode);
			},

			ignore_call : function(id,grp){
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();
				$.ajax({
					url : baseUrl+'plugins/audiochat/index.php?action=noanswer',
					type : 'GET',
					data : {to: id,grp: grp,basedata:baseData},
					dataType : 'jsonp',
					success : function(data) {},
					error : function(data) {}
				});
			},

			cancel_call : function(id,grp){
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();
				$.ajax({
					url : baseUrl+'plugins/audiochat/index.php?action=canceloutgoingcall',
					type : 'GET',
					data : {to: id,grp: grp,basedata:baseData},
					dataType : 'jsonp',
					success : function(data) {},
					error : function(data) {}
				});
			},

			reject_call : function(id,grp){
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();

				var controlparameters = {"grp":grp};
				jqcc.ccaudiochat.delinkaudiochat(controlparameters);

				$.ajax({
					url : baseUrl+'plugins/audiochat/index.php?action=rejectcall',
					type : 'GET',
					data : {to: id,grp: grp,basedata:baseData},
					dataType : 'jsonp',
					success : function(data) {},
					error : function(data) {}
				});
			},

			end_call : function(params){
				id = params.to;
				grp = params.grp;
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();
				var popoutopencalled = jqcc.cometchat.getInternalVariable('audiochatpopoutcalled');
				var endcallrecieved = jqcc.cometchat.getInternalVariable('endcallrecievedfrom_'+grp);
				if(popoutopencalled !== '1'){
					if(endcallrecieved !== '1') {
						$.ajax({
							url : baseUrl+'plugins/audiochat/index.php?action=endcall',
							type : 'GET',
							data : {to: id, basedata: baseData , grp: grp},
							dataType : 'jsonp',
							success : function(data) {},
							error : function(data) {}
						});
					}
				}
				jqcc.cometchat.setInternalVariable('endcallrecievedfrom_'+grp,'0');
				jqcc.cometchat.setInternalVariable('audiochatpopoutcalled','0');
			},

			join: function (id) {
				if (!(jqcc.cometchat.membershipAccess('audiochat','plugins'))){
					return;
				}
				if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
					alert(jqcc.ccaudiochat.getLanguage('popup_already_open'));
					return;
				}
				baseUrl = $.cometchat.getBaseUrl();
				basedata = $.cometchat.getBaseData();
				windowMode = 0;
				if(location.protocol === 'http:') {
					windowMode = 1;
				}
				if(mobileDevice){
					windowMode = 1;
				}
				if(mobileDevice == null) {
					var controlparameters = {"type":"plugins", "name":"core", "method":"loadCCPopup", "params":{"url": baseUrl+'plugins/audiochat/index.php?action=call&chatroommode=1&type=0&join=1&grp='+id+'&basedata='+basedata, "name":"audiochat", "properties":"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=300,height=300", "width":"300", "height":"300", "title":jqcc.ccaudiochat.getLanguage('audio_chat'), "force":"0", "allowmaximize":"1", "allowresize":"1", "allowpopout":"1", "windowMode":windowMode}};
				} else {
					$[$.cometchat.getChatroomVars('calleeAPI')].loadCCPopup(baseUrl+'plugins/audiochat/index.php?action=call&chatroommode=1&type=0&join=1&grp='+id+'&basedata='+basedata, 'audiochat',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=225,height=200",225,200,jqcc.ccaudiochat.getLanguage('audio_chat'),1,1,allowresize,1,windowMode);
				}
	            controlparameters = JSON.stringify(controlparameters);
	            parent.postMessage('CC^CONTROL_'+controlparameters,'*');
			},

			getLanguage: function(id) {
				audiochat_language =  {"title":"Start an audio call","wait_message":"Please wait atleast 10 seconds before trying to call again.","audio_chat_request":"has sent you an audio chat request.","accept_request":"Click here to accept it","ignore_request":"or simply ignore this message.","request_success":"has successfully sent an audio chat request.","request_accepted":"has accepted your audio chat request.","launch_window":"Click here to launch the audio chat window","audio_chat":"Audio Chat","connection_issues":"Having issues connecting?","audio_chat_stuck":"There are several reasons why the audio chat may be stuck at initializing:\n<br\/><br\/>\n1. audio chat requires P2P to establish connection. In order for it to work, your firewall must be configured to allow outgoing UDP traffic. While this is the case with most consumer or small office\/home office (SOHO) firewalls, many corporate firewalls block UDP traffic altogether.\n<br\/><br\/>\n2. The user at the other end is behind a UDP blocking firewall and is unable to connect to you.\n<br\/><br\/>\n3. Our servers are facing issues and you are unable to connect.\n","closing_window":"Closing window shortly","invite_success_close_win":"Users have been successfully invited. You can safely close this window.","invite_success":"Users Invited Successfully!","acon_invite":"has invited you to join a audio conference.","click_to_join":"Click here to join","select_users":"Please select users","invite_users_1":"Invite Users","invite_users_2":"Invite Users","acon_started":"has started a audio conversation.","join_conversation":"Click here to join the conversation.","settings":"Settings","done":"Done","play_test_sound":"Play test sound","install_plugin":"Install plug-in","no_users_available":"Sorry, there are no users available at the moment to invite.","click_to_open":"Click here to open it","check_email":"Please check your email for verification zoom account at","call":"Call","call_from":"Call from","call_to":"Call to","call_ended":"Call ended, duration","rejected":"rejected","no_answer_from":"No answer from","cancelled":"Cancelled","call_new":"Would you like to call","busy":"busy","call_cancelled":"This call has been cancelled","call_ended_1":"This call has ended","user_busy":"The user is busy right now. Please try again later","user_not_answering":"The user is not answering the call right now. Please try again later","err_sending_message":"Sorry, we are unable to send this message.","err_no_device_support":"Sorry, your device does not support this feature.","click_here":"click here","cancel_outgoing_call":"To cancel outgoing call ","reject_call":"To reject call ","ignore_message":"You can also simply ignore this message.","configure_plugin":"Please configure this plugin using administration panel before using. <a href=\"http:\/\/www.cometchat.com\/documentation\/admin\/plugins\/audio-chat-plugin\/\" target=\"_blank\">Click Here<\/a> for more information.","err_no_browser_support":"Sorry, your browser does not support this feature. Please upgrade your browser to the latest version or try a different browser.","end_call":"End Call","turn_on_mic":"Turn On Mic","turn_off_mic":"Turn Off Mic","popup_already_open":"Multimedia session is already open. Please close the existing popup and try again.","0":"Start an audio call","1":"Please wait atleast 10 seconds before trying to call again.","2":"has sent you an audio chat request.","3":"Click here to accept it","4":"or simply ignore this message.","5":"has successfully sent an audio chat request.","6":"has accepted your audio chat request.","7":"Click here to launch the audio chat window","8":"Audio Chat","9":"Having issues connecting?","10":"There are several reasons why the audio chat may be stuck at initializing:\n<br\/><br\/>\n1. audio chat requires P2P to establish connection. In order for it to work, your firewall must be configured to allow outgoing UDP traffic. While this is the case with most consumer or small office\/home office (SOHO) firewalls, many corporate firewalls block UDP traffic altogether.\n<br\/><br\/>\n2. The user at the other end is behind a UDP blocking firewall and is unable to connect to you.\n<br\/><br\/>\n3. Our servers are facing issues and you are unable to connect.\n","11":"Closing window shortly","12":"Users have been successfully invited. You can safely close this window.","13":"Users Invited Successfully!","14":"has invited you to join a audio conference.","15":"Click here to join","16":"Please select users","17":"Invite Users","18":"Invite Users","19":"has started a audio conversation.","20":"Click here to join the conversation.","21":"Settings","22":"Done","23":"Play test sound","24":"Install plug-in","25":"Sorry, there are no users available at the moment to invite.","26":"Click here to open it","27":"Please check your email for verification zoom account at","28":"Call","29":"Call from","30":"Call to","31":"Call ended, duration","32":"rejected","33":"No answer from","34":"Cancelled","35":"Would you like to call","36":"busy","37":"This call has been cancelled","38":"This call has ended","39":"The user is busy right now. Please try again later","40":"The user is not answering the call right now. Please try again later","41":"Sorry, we are unable to send this message.","42":"Sorry, your device does not support this feature.","43":"click here","44":"To cancel outgoing call ","45":"To reject call ","46":"You can also simply ignore this message.","47":"Please configure this plugin using administration panel before using. <a href=\"http:\/\/www.cometchat.com\/documentation\/admin\/plugins\/audio-chat-plugin\/\" target=\"_blank\">Click Here<\/a> for more information.","48":"Sorry, your browser does not support this feature. Please upgrade your browser to the latest version or try a different browser.","49":"End Call","50":"Turn On Mic","51":"Turn Off Mic"};
				if(typeof id==undefined){
					return audiochat_language;
				}else{
					return audiochat_language[id];
				}
			},

			delinkaudiochat: function(params){
				var grp = params.grp;
				$('a.audiochat_link_'+grp).each(function(){
					$(this).attr('onclick','').unbind('click');
					$(this).removeClass('acceptAudioChat accept_fid');
					this.style.setProperty( 'color', '#95a5a6', 'important' );
					$(this).css('text-decoration','none');
					$(this).css('cursor','text');
				});
			},

			processControlMessage : function(controlparameters) {
				var audiochat_language = jqcc.ccaudiochat.getLanguage();
				var processedmessage = null;
				jqcc.ccaudiochat.delinkaudiochat(controlparameters.params);
				switch(controlparameters.method){
					case 'endcall':
						jqcc.cometchat.setInternalVariable('endcallrecievedfrom_'+controlparameters.params.grp,'1');
						processedmessage = jqcc.ccaudiochat.getLanguage('call_ended_1');
						break;
					case 'rejectcall':
						processedmessage = jqcc.ccaudiochat.getLanguage('user_busy');
						break;
					case 'noanswer':
						processedmessage = jqcc.ccaudiochat.getLanguage('user_not_answering');
						break;
					case 'busycall':
						processedmessage = jqcc.ccaudiochat.getLanguage('user_busy');
						break;
					case 'cancelcall':
						processedmessage = jqcc.ccaudiochat.getLanguage('call_cancelled');
						break;
					default :
						processedmessage = null;
						break;
				}
				return processedmessage;
			}

		};
	})();
})(jqcc);

jqcc(document).ready(function(){
	jqcc('.acceptAudioChat').live('click',function(){
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		var caller = jqcc(this).attr('caller');
		if((typeof(parent) != 'undefined' && parent != null && parent != self) || window.top != window.self){
			var controlparameters = {"type":"plugins", "name":"ccaudiochat", "method":"accept", "params":{"to":to, "grp":grp, "caller":caller}};
			controlparameters = JSON.stringify(controlparameters);
			parent.postMessage('CC^CONTROL_'+controlparameters,'*');
		} else {
			var controlparameters = {"to":to, "grp":grp};
            jqcc.ccaudiochat.accept(controlparameters);
		}
	});

	jqcc('.accept_fid').live('click',function(){
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		var caller = jqcc(this).attr('caller');
		if((typeof(parent) != 'undefined' && parent != null && parent != self) || window.top != window.self){
			var controlparameters = {"type":"plugins", "name":"ccaudiochat", "method":"accept_fid", "params":{"to":to, "grp":grp, "caller":caller}};
			controlparameters = JSON.stringify(controlparameters);
			parent.postMessage('CC^CONTROL_'+controlparameters,'*');
		} else {
			var controlparameters = {"to":to, "grp":grp};
            jqcc.ccaudiochat.accept_fid(controlparameters);
		}
	});
});

/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){

	$.ccwriteboard = (function () {

		var lastcall = 0;
		var height = 480;
		var width = 640;
		var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|blackberry|palm|symbian/i);

        return {
			getTitle: function() {
				return $.ccwriteboard.getLanguage('title');
			},
			init: function (params) {
				if (jqcc.cometchat.membershipAccess('writeboard','plugins')){
					var id = params.to;
					var theme = 'docked';
					if(typeof(params.windowMode) == "undefined") {
						params.windowMode = 0;
					} else {
						params.windowMode = 1;
					}
					var currenttime = new Date();
					currenttime = parseInt(currenttime.getTime()/1000);
					params.type = 1;
					params.force = 0;
					baseUrl = $.cometchat.getBaseUrl();
					baseData = $.cometchat.getBaseData();

					if (currenttime-lastcall > 10) {
						lastcall = currenttime;
						if(params.chatroommode == 1) {
							params.force = 1;
						} else {
							$.getJSON(baseUrl+'plugins/writeboard/index.php?action=request&callback=?', {to: id, basedata: baseData});
						}
						if(mobileDevice){
							params.windowMode = 1;
						}
						$.ccwriteboard.loadwriteboard(params);
					} else {
						alert($.ccwriteboard.getLanguage('wait_message'));
					}
				}
			},
			accept: function (params) {
				if (jqcc.cometchat.membershipAccess('writeboard','plugins')){
					params.type = 0;
					params.force = 0;
					baseUrl = $.cometchat.getBaseUrl();
					baseData = $.cometchat.getBaseData();

					if(typeof(params.windowMode) == "undefined") {
						params.windowMode = 0;
					} else {
						params.windowMode = 1;
					}
					$.getJSON(baseUrl+'plugins/writeboard/index.php?action=accept&callback=?', {to: params.to, basedata: baseData});
					if(mobileDevice){
						params.windowMode = 1;
					}
					$.ccwriteboard.loadwriteboard(params);
				}
			},
			getLanguage: function(id) {
				writeboard_language =  {"title":"Collaborative Document","wait_message":"Please wait atleast 10 seconds before trying to share again.","shared_document_other":"has opened a document.","click_to_view":"Click here to view the document","ignore_message":"or simply ignore this message.","shared_document_self":"has opened a document.","viewing_document":"is now viewing the document.","collaborative_document":"Collaborative Document","0":"Collaborative Document","1":"Please wait atleast 10 seconds before trying to share again.","2":"has opened a document.","3":"Click here to view the document","4":"or simply ignore this message.","5":"has opened a document.","6":"is now viewing the document.","7":"Collaborative Document"};
				if(typeof id==undefined){
					return writeboard_language;
				}else{
					return writeboard_language[id];
				}
			},
			loadwriteboard: function(params){
				if (jqcc.cometchat.membershipAccess('writeboard','plugins')){
					var extraQueryString = '';

					if(typeof(params.chatroommode) != "undefined" && params.chatroommode==1){
						extraQueryString="&chatroommode=1";
						if(typeof(params.random) != "undefined" && params.random!=''){
							extraQueryString+="&room="+params.random;
						}
					}

					baseUrl = $.cometchat.getBaseUrl();
					baseData = $.cometchat.getBaseData();
					if(mobileDevice){
						params.windowMode = 1;
					}
					loadCCPopup(baseUrl+'plugins/writeboard/index.php?action=writeboard&'+extraQueryString+'&to='+params.to+'&basedata='+baseData, 'writeboard',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=640,height=480",width,height-50,$.ccwriteboard.getLanguage('collaborative_document'),params.force,0,1,1,params.windowMode);
				}
			}
        };
    })();
})(jqcc);

jqcc(document).ready(function(){
	jqcc('.accept_Write').live('click',function(){
		var to = jqcc(this).attr('to');
		var random = jqcc(this).attr('random');
		var chatroommode = jqcc(this).attr('chatroommode');
		var controlparameters = {"to":to, "random":random, "chatroommode":chatroommode};
		jqcc.ccwriteboard.accept(controlparameters);
	});
});

/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){

	$.ccsmilies = (function () {

		var height = 250;
		var width = 420;
		var theme = "docked";
		var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|IEMobile|blackberry|palm|symbian/i);

        return {

			getTitle: function() {
				return jqcc.ccsmilies.getLanguage('title');
			},

			init: function (params) {
				if (jqcc.cometchat.membershipAccess('smilies','plugins')){
					baseUrl = $.cometchat.getBaseUrl();
					baseData = $.cometchat.getBaseData();
					if(typeof(params.windowMode) == "undefined") {
						params.windowMode = 0;
					} else {
						params.windowMode = 1;
					}				
					if(typeof(params.caller) == "undefined") {
						params.caller = '';
					}				
					jqcc.ccsmilies.loadsmilies(params);
				}
			},

			addtext: function (params) {
				var string = '';
				var id = params.to;
				var text = params.pattern+' ';
				var chatroommode = params.chatroommode;
				if(chatroommode == 1 && mobileDevice == null) {
					if(theme == 'embedded'){
						var currentroom_textarea = $('#currentroom').find('textarea.cometchat_textarea');
					}else{
						var currentroom_textarea = $('#cometchat_group_'+id+'_popup').find('textarea.cometchat_textarea');
					}

					if(mobileDevice == null){
	                    currentroom_textarea.focus();
	                }
					string = currentroom_textarea.val();
					if (string.charAt(string.length-1) == ' ') {
						currentroom_textarea.val(currentroom_textarea.val()+text);
					} else {
						if (string.length == 0) {
							currentroom_textarea.val(text);
						} else {
							currentroom_textarea.val(currentroom_textarea.val()+' '+text);
						}
					}
				} else if(chatroommode == 1 && mobileDevice) {
					if(theme == 'embedded'){
						var currentroom_textarea = $('#currentroom').find('textarea.cometchat_textarea');
					}else{
						var currentroom_textarea = $('#cometchat_group_'+id+'_popup').find('textarea.cometchat_textarea');
					}
					currentroom_textarea.focus();
					string = currentroom_textarea.val();
					currentroom_textarea.focus();
					if (string.charAt(string.length-1) == ' ') {
						currentroom_textarea.val(currentroom_textarea.val()+text);
					} else {
						if (string.length == 0) {
							currentroom_textarea.val(text);
						} else {
							currentroom_textarea.val(currentroom_textarea.val()+' '+text);
						}
					}
				} else if(chatroommode == 0 && mobileDevice) {
					if($('#cometchat_user_'+id+'_popup').length > 0) {
						var cometchat_user_textarea = $('#cometchat_user_'+id+'_popup').find('textarea.cometchat_textarea');
						jqcc.cometchat.chatWith(id);
						cometchat_user_textarea.focus();
						string = cometchat_user_textarea.val();
						cometchat_user_textarea.focus();
						if (string.charAt(string.length-1) == ' ') {
							cometchat_user_textarea.val(string+text);
						} else {
							if (string.length == 0) {
								cometchat_user_textarea.val(text);
							} else {
								cometchat_user_textarea.val(string+' '+text);
							}
						}

					} else {
						jqcc.cometchat.chatWith(id);
						var cometchat_user_textarea = $('#cometchat_user_'+id+'_popup').find('textarea.cometchat_textarea');
						cometchat_user_textarea.focus();
						string = cometchat_user_textarea.val();

						if (string.charAt(string.length-1) == ' ') {
							cometchat_user_textarea.val(string+text);
						} else {
							if (string.length == 0) {
								cometchat_user_textarea.val(text);
							} else {
								cometchat_user_textarea.val(string+' '+text);
							}
						}
						var tabcontenttext_height = ($(window).height()*40)/100;
                    	jqcc('#cometchat_tabcontenttext_'+id).css('height',tabcontenttext_height);
					}


				} else {
					if($('#cometchat_user_'+id+'_popup').length > 0) {
						var cometchat_user_textarea = $('#cometchat_user_'+id+'_popup').find('textarea.cometchat_textarea');
						cometchat_user_textarea.focus();
						jqcc.cometchat.chatWith(id);
						string = cometchat_user_textarea.val();

						if (string.charAt(string.length-1) == ' ') {
							cometchat_user_textarea.val(string+text);
						} else {
							if (string.length == 0) {
								cometchat_user_textarea.val(text);
							} else {
								cometchat_user_textarea.val(string+' '+text);
							}
						}
					} else {
						jqcc.cometchat.chatWith(id);
						var cometchat_user_textarea = $('#cometchat_user_'+id+'_popup').find('textarea.cometchat_textarea');
						cometchat_user_textarea.focus();
						string = cometchat_user_textarea.val();

						if (string.charAt(string.length-1) == ' ') {
							cometchat_user_textarea.val(string+text);
						} else {
							if (string.length == 0) {
								cometchat_user_textarea.val(text);
							} else {
								cometchat_user_textarea.val(string+' '+text);
							}
						}
					}
				}
			},
			getLanguage: function(id) {
				smilies_language =  {"title":"Add a smiley","select_smiley":"Which smiley would you like?","people":"People","nature":"Nature","objects":"Objects","places":"Places","symbols":"Symbols","more":"More","0":"Add a smiley","1":"Which smiley would you like?","2":"People","3":"Nature","4":"Objects","5":"Places","6":"Symbols","7":"More"};
				if(typeof id==undefined){
					return smilies_language;
				}else{
					return smilies_language[id];
				}
			},
			loadsmilies: function(params){
				var extraQueryString = '';
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();
				
				if(params.chatroommode==1){
					extraQueryString='&chatroommode=1';
				}

				loadPopupInChatbox(baseUrl+'plugins/smilies/index.php?id='+params.to+extraQueryString+'&basedata='+baseData+'&caller='+params.caller, 'smilies', 0, params.to, params.chatroommode);
			}
        };
    })();

})(jqcc);
/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/


(function($){

		$.ccbroadcast = (function () {
			var allowresize = 1,
				force = 1,
				lastcall = 0,
				supported = true,
				mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|blackberry|palm|symbian/i),
				Browser = (function(){
					var ua= navigator.userAgent, tem,
					M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
					if(/trident/i.test(M[1])){
						tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
						return 'IE '+(tem[1] || '');
					}
					if(M[1]=== 'Chrome'){
						tem= ua.match(/\bOPR\/(\d+)/);
						if(tem!= null) return 'Opera '+tem[1];
					}
					M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
					if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
					return M;
				})();

			if(Browser[0]=='MSIE' && parseInt(Browser[1]) < 11 ){
				supported = false;
			}
		   	return {
				getTitle: function() {
					return jqcc.ccbroadcast.getLanguage('title');
				},

				init: function (params) {
					if(jqcc.cometchat.membershipAccess('broadcast','plugins')){
						if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
							alert(jqcc.ccbroadcast.getLanguage('popup_already_open'));
							return;
						}
						if (jqcc.cometchat.checkMobileDevice()){
							return;
						}
						var id = params.to;
						var chatroommode = params.chatroommode;
						var windowMode = 0;
						if(typeof(params.windowMode) == "undefined") {
							windowMode = 0;
						} else {
							windowMode = 1;
						}
						if(location.protocol === 'http:') {
							windowMode = 1;
						}
						if(mobileDevice){
							windowMode = 1;
						}
						if(supported) {
							var caller = "";
							if(typeof(params.caller) != "undefined") {
								caller = params.caller;
							}
							if(chatroommode == 1) {
								baseUrl = $.cometchat.getBaseUrl();
								basedata = $.cometchat.getBaseData();
								loadCCPopup(baseUrl+'plugins/broadcast/index.php?action=call&chatroommode=1&broadcast=0&type=1&caller='+caller+'&to='+id+'&grp='+id+'&basedata='+basedata, 'broadcast',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=450,height=335",450,335,jqcc.ccbroadcast.getLanguage('av_broadcast'),1,1,allowresize,1,windowMode);
							} else {
								var random = '';
								var currenttime = new Date();
								currenttime = parseInt(currenttime.getTime()/1000);
								if (currenttime-lastcall > 10) {
									baseUrl = $.cometchat.getBaseUrl();
									baseData = $.cometchat.getBaseData();
					  				loadCCPopup(baseUrl+'plugins/broadcast/index.php?action=request&broadcast=0&type=1&caller='+caller+'&to='+id+'&basedata='+baseData, 'broadcast',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=450,height=335",450,335,jqcc.ccbroadcast.getLanguage('av_broadcast'),1,1,allowresize,1,windowMode);

									lastcall = currenttime;
								} else {
									alert(jqcc.ccbroadcast.getLanguage('wait_message'));
								}
							}
						} else {
							alert(jqcc.ccbroadcast.getLanguage('err_no_browser_support'));
						}
					}
				},

				accept: function (params) {
					if(!(jqcc.cometchat.membershipAccess('broadcast','plugins'))){
						return;
					}
					if (jqcc.cometchat.checkMobileDevice()){
						return;
					}
					if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
						alert(jqcc.ccbroadcast.getLanguage('popup_already_open'));
						return;
					}
					id = params.to;
					grp = params.grp;
					if(typeof(params.windowMode) == "undefined") {
						windowMode = 0;
					} else {
						windowMode = 1;
					}
					if(location.protocol === 'http:') {
						windowMode = 1;
					}
					if(mobileDevice){
						windowMode = 1;
					}
					baseUrl = $.cometchat.getBaseUrl();
					baseData = $.cometchat.getBaseData();
					loadCCPopup(baseUrl+'plugins/broadcast/index.php?action=call&broadcast=1&type=0&grp='+grp+'&basedata='+baseData, 'broadcast',"status=0,toolbar=0,menubar=0,directories=0,type=0,resizable=1,location=0,status=0,scrollbars=0, width=450,height=335",450,335,jqcc.ccbroadcast.getLanguage('av_broadcast'),1,1,allowresize,1,windowMode);
				},

				join: function (params) {
					if(!(jqcc.cometchat.membershipAccess('broadcast','plugins'))){
						return;
					}
					if (jqcc.cometchat.checkMobileDevice()){
						return;
					}
					if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
						alert(jqcc.ccbroadcast.getLanguage('popup_already_open'));
						return;
					}
					id = params.grp;
					chatroommode = 0;
					if(typeof(params.chatroommode) !== "undefined"){
					    chatroommode = params.chatroommode;
					}
					baseUrl = $.cometchat.getBaseUrl();
					basedata = $.cometchat.getBaseData();
					var windowMode = 0;
					if(typeof(params.windowMode) == "undefined") {
						windowMode = 0;
					} else {
						windowMode = 1;
					}
					if((location.protocol === 'http:') || mobileDevice) {
						windowMode = 1;
					}
					if(mobileDevice){
						windowMode = 1;
					}
					if(typeof(parent) != 'undefined' && parent != null && parent != self){
						var controlparameters = {"type":"plugins", "name":"core", "method":"loadCCPopup", "params":{"url": baseUrl+'plugins/broadcast/index.php?action=call&broadcast=1&chatroommode='+chatroommode+'&type=0&join=1&grp='+id+'&basedata='+basedata, "name":"broadcast", "properties":"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=450,height=335", "width":"450", "height":"335", "title":jqcc.ccbroadcast.getLanguage('av_broadcast'), "force":force, "allowmaximize":"1", "allowresize":allowresize, "allowpopout":"1", "windowMode":windowMode}};
	                    controlparameters = JSON.stringify(controlparameters);
	                    parent.postMessage('CC^CONTROL_'+controlparameters,'*');
					} else {
						loadCCPopup(baseUrl+'plugins/broadcast/index.php?action=call&broadcast=1&chatroommode='+chatroommode+'&type=0&join=1&grp='+id+'&basedata='+basedata, 'broadcast',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=450,height=335",450,335,jqcc.ccbroadcast.getLanguage('av_broadcast'),force,1,allowresize,1,windowMode);
					}
				},

				end_call : function(params){
					var id = params.to;
					var grp = params.grp;
					var chatroommode = params.chatroommode;
					baseUrl = $.cometchat.getBaseUrl();
					baseData = $.cometchat.getBaseData();
					var popoutopencalled = 0;
					var endcallrecieved = 0;
					if(chatroommode == 0){
						popoutopencalled = jqcc.cometchat.getInternalVariable('broadcastpopoutcalled');
						endcallrecieved = jqcc.cometchat.getInternalVariable('endcallrecievedfrom_'+grp);
					}
					if(chatroommode==1 || (jqcc.cometchat.getInternalVariable('endcallOnceWindow_'+grp) !== '1' && jqcc.cometchat.getInternalVariable('endcallOnce_'+grp) !== '1')) {
						if(popoutopencalled !== '1' && endcallrecieved !== '1'){
							$.ajax({
								url : baseUrl+'plugins/broadcast/index.php?action=endcall',
								type : 'GET',
								data : {to: id, basedata: baseData , grp: grp, chatroommode: chatroommode},
								dataType : 'jsonp',
								success : function(data) {

								},
								error : function(data) {

								}
							});
						}
					}
					if(chatroommode == 0){
						jqcc.cometchat.setInternalVariable('endcallrecievedfrom_'+grp,'0');
						jqcc.cometchat.setInternalVariable('broadcastpopoutcalled','0');
					}
				},

				inviteBroadcast: function(params) {
					if(!(jqcc.cometchat.membershipAccess('broadcast','plugins'))){
						return;
					}
					var id = params.id;
					var caller = '';
					if(typeof(params.caller) != "undefined") {
						caller = params.caller;
					}
					baseData = $.cometchat.getBaseData();
					baseUrl = $.cometchat.getBaseUrl();
					var windowMode = 0;
					if(typeof(params.windowMode) == "undefined") {
						windowMode = 0;
					} else {
						windowMode = 1;
					}
					if(location.protocol === 'http:') {
						windowMode = 1;
					}
					if(mobileDevice){
						windowMode = 1;
					}
					loadCCPopup(baseUrl + "plugins/broadcast/invite.php?action=invite&caller="+caller+"&grp="+ id +"&basedata="+ baseData ,"invitebroadcast","status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=1, width=400,height=190",400,190,jqcc.ccbroadcast.getLanguage('select_users'),0,0,0,0,windowMode);

				},
				getLanguage: function(id) {
					broadcast_language =  {"title":"Start an audio\/video broadcast","wait_message":"Please wait atleast 10 seconds before trying to broadcast again.","av_broadcast_request":"has sent you an audio\/video broadcast request.","accept_request":"Click here to accept it","ignore_request":"or simply ignore this message.","request_success":"has successfully sent an audio\/video broadcast request.","request_accepted":"has accepted your audio\/video broadcast request.","launch_window":"Click here to launch the broadcasting window","av_broadcast":"Audio\/Video Broadcast","broadcast_started":"has started broadcasting.","join_broadcast":"Click here to join the broadcast.","select_users":"Please select users","invite_users":"Invite Users","invite_success_close_win":"Users have been successfully invited. You can safely close this window.","invite_success":"has invited you to join the broadcast.","click_to_join":"Click here to join","view_broadcast":"Click here to view the broadcast.","started_vid_convo":"has started a video broadcast.","no_users_available":"Sorry, there are no users available at the moment to invite.","end_call":"End Call","turn_on_video":"Turn On Video","turn_off_video":"Turn Off Video","turn_on_mic":"Turn On Mic","turn_off_mic":"Turn Off Mic","broadcast_ended":"This broadcast has ended","err_no_browser_support":"Sorry, your browser does not support this feature. Please upgrade your browser to the latest version or try a different browser.","popup_already_open":"Multimedia session is already open. Please close the existing popup and try again.","0":"Start an audio\/video broadcast","1":"Please wait atleast 10 seconds before trying to broadcast again.","2":"has sent you an audio\/video broadcast request.","3":"Click here to accept it","4":"or simply ignore this message.","5":"has successfully sent an audio\/video broadcast request.","6":"has accepted your audio\/video broadcast request.","7":"Click here to launch the broadcasting window","8":"Audio\/Video Broadcast","9":"has started broadcasting.","10":"Click here to join the broadcast.","11":"Please select users","12":"Invite Users","13":"Users have been successfully invited. You can safely close this window.","14":"has invited you to join the broadcast.","15":"Click here to join","16":"Click here to view the broadcast.","17":"has started a video broadcast.","18":"Sorry, there are no users available at the moment to invite.","19":"End Call","20":"Turn On Video","21":"Turn Off Video","22":"Turn On Mic","23":"Turn Off Mic","24":"This broadcast has ended","25":"Sorry, your browser does not support this feature. Please upgrade your browser to the latest version or try a different browser."};
					if(typeof id==undefined){
						return broadcast_language;
					}else{
						return broadcast_language[id];
					}
				},
				processControlMessage : function(controlparameters) {
					var processedmessage = null;

					switch(controlparameters.method){
						case 'endcall':
							if(controlparameters.params.chatroommode==0){
								jqcc.cometchat.setInternalVariable('endcallrecievedfrom_'+controlparameters.params.grp,'1');
							}
							processedmessage = jqcc.ccbroadcast.getLanguage('broadcast_ended');
						break;
						default :
						processedmessage = null;
						break;
					}
					return processedmessage;
				}
			};
		})();

})(jqcc);

jqcc(document).ready(function(){
	jqcc('.join_Broadcast').live('click',function(){
		var grp = jqcc(this).attr('grp');
		if(typeof(parent) != 'undefined' && parent != null && parent != self){
			var controlparameters = {"type":"plugins", "name":"ccbroadcast", "method":"join", "params":{"grp":grp, "chatroommode":"1"}};
			controlparameters = JSON.stringify(controlparameters);
			if(typeof(parent) != 'undefined' && parent != null && parent != self){
				parent.postMessage('CC^CONTROL_'+controlparameters,'*');
			} else {
				window.opener.postMessage('CC^CONTROL_'+controlparameters,'*');
			}
		} else {
			var controlparameters = {"grp":grp, "chatroommode":"1"};
            jqcc.ccbroadcast.join(controlparameters);
		}
	});

	jqcc('.broadcastAccept').live('click',function(){
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		if((typeof(parent) != 'undefined' && parent != null && parent != self) || window.top != window.self){
			var controlparameters = {"type":"plugins", "name":"ccbroadcast", "method":"accept", "params":{"to":to, "grp":grp}};
			controlparameters = JSON.stringify(controlparameters);
			parent.postMessage('CC^CONTROL_'+controlparameters,'*');
		} else {
			var controlparameters = {"to":to, "grp":grp};
            jqcc.ccbroadcast.accept(controlparameters);
		}
	});

	jqcc('.broadcastInvite').live('click',function(){
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		if((typeof(parent) != 'undefined' && parent != null && parent != self) || window.top != window.self){
			var controlparameters = {"type":"plugins", "name":"ccbroadcast", "method":"join", "params":{"to":to, "grp":grp}};
			controlparameters = JSON.stringify(controlparameters);
			parent.postMessage('CC^CONTROL_'+controlparameters,'*');
		} else {
			var controlparameters = {"to":to, "grp":grp};
			jqcc.ccbroadcast.join(controlparameters);
		}
	});
});


String.prototype.replaceAll=function(s1, s2) {return this.split(s1).join(s2)};
(function($){

		$.ccavchat = (function () {
		var theme = 'docked';
		var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|IEMobile|blackberry|palm|symbian/i);
		var supported = true;

		var Browser = (function(){
			var ua= navigator.userAgent, tem,
			M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
			if(/trident/i.test(M[1])){
				tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
				return 'IE '+(tem[1] || '');
			}
			if(M[1]=== 'Chrome'){
				tem= ua.match(/\bOPR\/(\d+)/)
				if(tem!= null) return 'Opera '+tem[1];
			}
			M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
			if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
			return M;
		})();
		if(Browser[0]=='MSIE' && parseInt(Browser[1]) < 11 ){
			supported = false;
		}
		var lastcall = 0,
			allowresize = 1;

		return {

			getTitle: function() {
				return jqcc.ccavchat.getLanguage('title');
			},
			init: function (params) {
				if (!(jqcc.cometchat.membershipAccess('avchat','plugins'))){
					return;
				}
				if (jqcc.cometchat.checkMobileDevice()){
					return;
				}
				if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
					alert(jqcc.ccavchat.getLanguage('popup_already_open'));
					return;
				}
				var id = params.to;
				var chatroommode = params.chatroommode;
				var caller = '';
				if(typeof(caller) != "undefined"){
					caller = params.caller;
				}
				var windowMode = 0;
				if(typeof(params.windowMode) == "undefined") {
					windowMode = 0;
				} else {
					windowMode = 1;
				}
				if(location.protocol === 'http:') {
					windowMode = 1;
				}
				if(mobileDevice){
					windowMode = 1;
				}
				if(supported) {
					var currenttime = new Date();
					currenttime = parseInt(currenttime.getTime()/1000);
					if (currenttime-lastcall > 10) {
						baseUrl = $.cometchat.getBaseUrl();
						baseData = $.cometchat.getBaseData();
						if(chatroommode == 1){
							jqcc.ajax({
								url : baseUrl+'plugins/avchat/index.php?chatroommode=1&action=request',
								type : 'GET',
								data : {to: id, basedata: baseData, caller: caller},
								dataType : 'jsonp',
								success : function(data) {
									if(data.hasOwnProperty('errorcode')&&data['errorcode']==3){
										alert(data['message']);
										return;
									}
									if(typeof(data) != "undefined" && data != null && data != ''){
										id = data;
									}
									loadCCPopup(baseUrl+'plugins/avchat/index.php?action=call&caller='+caller+'&chatroommode=1&grp='+id+'&basedata='+baseData, 'audiovideochat',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=434,height=356",434,356,jqcc.ccavchat.getLanguage('av_chat'),1,1,allowresize,1,windowMode);
								},
								error : function(data) {
								}
							});
						}else{
							if(windowMode == 1){
								var buddyavatar = jqcc.cometchat.getThemeArray('buddylistAvatar', params.to);
								var buddyname = jqcc.cometchat.getThemeArray('buddylistName', params.to);
								loadCCPopup(baseUrl+'plugins/avchat/index.php?action=openconnectionwindow&caller='+caller+'&chatroommode=0&to='+params.to+'&basedata='+baseData+'&buddyavatar='+buddyavatar+'&buddyname='+buddyname, 'audiovideochat',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=434,height=356",434,356,jqcc.ccavchat.getLanguage('av_chat'),1,1,allowresize,1,windowMode);
							}

							jqcc.ajax({
								url : baseUrl+'plugins/avchat/index.php?action=request',
								type : 'GET',
								data : {to: id, basedata: baseData, caller: caller},
								dataType : 'jsonp',
								success : function(data) {
									if(data.hasOwnProperty('errorcode')&&data['errorcode']==3){
										alert(data['message']);
										return;
									}
									if(windowMode == 0){
										jqcc[theme].generateOutgoingAvchatData(id,data);
									}
								},
								error : function(data) {
								}
							});
						}
						lastcall = currenttime;
					} else {
						alert(jqcc.ccavchat.getLanguage('wait_message'));
					}
				} else {
					alert(jqcc.ccavchat.getLanguage('err_no_browser_support'));
				}
			},

			accept: function (params) {
				if (!(jqcc.cometchat.membershipAccess('avchat','plugins'))){
					return;
				}
				if (jqcc.cometchat.checkMobileDevice()){
					return;
				}
				if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
					alert(jqcc.ccavchat.getLanguage('popup_already_open'));
					return;
				}
				id = params.to;
				grp = params.grp;
				join_url = params.join_url;
				start_url = params.start_url;
				chatroommode = params.chatroommode;
				windowMode = 0;
				var caller = '';
				if(typeof(params.caller) != "undefined"){
					caller = params.caller;
				}
				if(typeof(params.windowMode) == "undefined") {
					windowMode = 0;
				} else {
					windowMode = 1;
				}
				if(location.protocol === 'http:') {
					windowMode = 1;
				}
				if(mobileDevice){
					windowMode = 1;
				}
				if(supported){
					baseUrl = $.cometchat.getBaseUrl();
					baseData = $.cometchat.getBaseData();
					var controlparameters = {"grp":params.grp};
					if(chatroommode == 1){
						$.getJSON(baseUrl+'plugins/avchat/index.php?chatroommode=1&action=accept&callback=?', {to: id, start_url:start_url, grp: grp, basedata: baseData, caller: caller});
					} else {
						if($('#avchat_container_'+id).length){
							$('#avchat_container_'+id).remove();
						}
						$.getJSON(baseUrl+'plugins/avchat/index.php?action=accept&callback=?', {to: id, start_url:start_url, grp: grp, basedata: baseData, caller: caller});
					}

					if(jqcc.cometchat.getCcvariable().callbackfn=='desktop' || windowMode==0){
						loadCCPopup(baseUrl+'plugins/avchat/index.php?action=call&grp='+grp+'&basedata='+baseData+'&to='+id, 'audiovideochat',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=434,height=356",434,356,jqcc.ccavchat.getLanguage('av_chat'),0,1,allowresize,1,windowMode);
					}else{
						loadCCPopup(baseUrl+'plugins/avchat/index.php?action=call&caller='+caller+'&grp='+grp+'&basedata='+baseData+'&to='+id, 'audiovideochat',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=434,height=356",434,356,jqcc.ccavchat.getLanguage('av_chat'),0,1,allowresize,null,windowMode);
					}
				} else {
					alert(jqcc.ccavchat.getLanguage('err_no_browser_support'));
				}
			},
			accept_fid: function (params) {
				if (!(jqcc.cometchat.membershipAccess('avchat','plugins'))){
					return;
				}
				if (jqcc.cometchat.checkMobileDevice()){
					return;
				}
				if(jqcc('#cometchat_container_'+name).length > 0) {
					alert(jqcc.ccavchat.getLanguage('popup_already_open'));
					return;
				}
				id = params.to;
				grp = params.grp;
				start_url = params.start_url;
				windowMode = 0;
				var caller = '';
				if(typeof(params.caller) != "undefined"){
					caller = params.caller;
				}
				if(location.protocol === 'http:') {
					windowMode = 1;
				}
				if(mobileDevice){
					windowMode = 1;
				}
				jqcc.ccavchat.delinkAvchat({"grp":params.grp});
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();
				var avchaturl = baseUrl+'plugins/avchat/index.php?action=call&caller='+caller+'&grp='+grp+'&basedata='+baseData+'&to='+id+'&initiator=1';
				if(windowMode == 1){
					var windowkey = 'cc_audiovideochat';

					var paramstostartavchat = {
									type:"plugin",
									name:"audiovideochat",
									method: 'startavchat',
									params:{
										avchaturl:avchaturl
									}
								};
					cc_windownames[windowkey].postMessage('CC^CONTROL_'+JSON.stringify(paramstostartavchat),'*');
				} else {
					jqcc[theme].removeAVchatContainer(id);
					loadCCPopup(avchaturl, 'audiovideochat',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=434,height=356",434,356,jqcc.ccavchat.getLanguage('av_chat'),0,1,allowresize,1,windowMode);
				}
			},
			ignore_call : function(id,grp){
				basedata = $.cometchat.getBaseData();
				baseUrl = $.cometchat.getBaseUrl();
				$.ajax({
					url : baseUrl+'plugins/avchat/index.php?action=noanswer',
					type : 'GET',
					data : {to: id,grp: grp,basedata:basedata},
					dataType : 'jsonp',
					success : function(data) {
						jqcc[theme].removeAVchatContainer(id);
					},
					error : function(data) {
						console.log('Something went wrong');
					}
				});
			},
			cancel_call : function(id,grp){
				baseUrl = $.cometchat.getBaseUrl();
				basedata = $.cometchat.getBaseData();
				var controlparameters = {"grp":grp};
				$.ajax({
					url : baseUrl+'plugins/avchat/index.php?action=canceloutgoingcall',
					type : 'GET',
					data : {to: id,grp: grp,basedata:basedata},
					dataType : 'jsonp',
					success : function(data) {
						jqcc[theme].removeAVchatContainer(id);
					},
					error : function(data) {
						console.log('Something went wrong');
					}
				});
			},
			reject_call : function(id,grp){
				baseUrl = $.cometchat.getBaseUrl();
				basedata = $.cometchat.getBaseData();
				var controlparameters = {"grp":grp};
				jqcc.ccavchat.delinkAvchat(controlparameters);
				jqcc.ajax({
					url : baseUrl+'plugins/avchat/index.php?action=rejectcall',
					type : 'GET',
					data : {to: id,grp: grp,basedata:basedata},
					dataType : 'jsonp',
					success : function(data) {
						jqcc[theme].removeAVchatContainer(id);
					},
					error : function(data) {
						console.log('Something went wrong');
					}
				});
			},
			end_call : function(params){
				var id = params.to;
				var grp = params.grp;
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();
				var popoutopencalled = jqcc.cometchat.getInternalVariable('avchatpopoutcalled');
				var endcallrecieved = jqcc.cometchat.getInternalVariable('endcallrecievedfrom_'+grp);
				if(popoutopencalled !== '1'){
					if(endcallrecieved !== '1') {
						$.ajax({
							url : baseUrl+'plugins/avchat/index.php?action=endcall',
							type : 'GET',
							data : {to: id, basedata: baseData , grp: grp},
							dataType : 'jsonp',
							success : function(data) {

							},
							error : function(data) {
								console.log('Something went wrong');
							}
						});
					}
				}
				jqcc.cometchat.setInternalVariable('endcallrecievedfrom_'+grp,'0');
				jqcc.cometchat.setInternalVariable('avchatpopoutcalled','0');
			},

			join: function (params) {
				if (!(jqcc.cometchat.membershipAccess('avchat','plugins'))){
					return;
				}
				if(isWindowOpen() || jqcc('#cometchat_container_'+name).length > 0) {
					alert(jqcc.ccavchat.getLanguage('popup_already_open'));
					return;
				}
				var id = params.grp;
				windowMode = 0;
				var caller = '';
				if(typeof(params.caller) != "undefined"){
					caller = params.caller;
				}
				if(typeof(params.windowMode) == "undefined") {
					windowMode = 0;
				} else {
					windowMode = 1;
				}
				if(location.protocol === 'http:') {
					windowMode = 1;
				}
				if(mobileDevice){
					windowMode = 1;
				}
				baseUrl = $.cometchat.getBaseUrl();
				basedata = $.cometchat.getBaseData();
				loadCCPopup(baseUrl+'plugins/avchat/index.php?action=call&chatroommode=1&caller='+caller+'&type=0&join=1&grp='+id+'&basedata='+basedata, 'audiovideochat',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=434,height=356",434,356,jqcc.ccavchat.getLanguage('av_chat'),1,1,allowresize,1,windowMode);
			},

			getLanguage: function(id) {
				avchat_language =  {"title":"Start an audio\/video call","wait_message":"Please wait atleast 10 seconds before trying to call again.","av_chat_request":"has sent you an audio\/video chat request.","accept_request":"Click here to accept it","ignore_request":"or simply ignore this message.","request_success":"has successfully sent an audio\/video chat request.","request_accepted":"has accepted your audio\/video chat request.","launch_window":"Click here to launch the AV window","av_chat":"Audio\/Video Chat","connection_issues":"Having issues connecting?","av_chat_stuck":"There are several reasons why the audio\/video chat may be stuck at initializing:\n<br\/><br\/>\n1. Audio\/video chat requires P2P to establish connection. In order for it to work, your firewall must be configured to allow outgoing UDP traffic. While this is the case with most consumer or small office\/home office (SOHO) firewalls, many corporate firewalls block UDP traffic altogether.\n<br\/><br\/>\n2. The user at the other end is behind a UDP blocking firewall and is unable to connect to you.\n<br\/><br\/>\n3. Our servers are facing issues and you are unable to connect.\n","closing_window":"Closing window shortly","invite_success_close_win":"Users have been successfully invited. You can safely close this window.","invite_success":"Users Invited Successfully!","avcon_invite":"has invited you to join a video conference.","click_to_join":"Click here to join","select_users":"Please select users","invite_users_1":"Invite Users","invite_users_2":"Invite Users","avcon_started":"has started a video conversation.","join_conversation":"Click here to join the conversation.","settings":"Settings","done":"Done","play_test_sound":"Play test sound","install_plugin":"Install plug-in","no_users_available":"Sorry, there are no users available at the moment to invite.","click_to_open":"Click here to open it","check_email":"Please check your email for verification zoom account at","call":"Call","call_from":"Call from","call_to":"Call to","call_ended_1":"Call ended, duration","rejected":"rejected","no_answer_from":"No answer from","cancelled":"Cancelled","call_new":"Would you like to call","busy":"busy","call_cancelled":"This call has been cancelled","call_ended_2":"This call has ended","user_busy_1":"The user is busy right now. Please try again later","user_not_answering":"The user is not answering the call right now. Please try again later","err_sending_message":"Sorry, we are unable to send this message.","err_no_device_support":"Sorry, your device does not support this feature.","click_here":"click here","cancel_outgoing_call":"To cancel outgoing call ","reject_call":"To reject call ","ignore_message":"You can also simply ignore this message.","configure_plugin":"The plugin has not been configured correctly. Please contact the site owner.","err_no_browser_support":"Sorry, your browser does not support this feature. Please upgrade your browser to the latest version or try a different browser.","end_call":"End Call","turn_on_video":"Turn On Video","turn_off_video":"Turn Off Video","turn_on_mic":"Turn On Mic","turn_off_mic":"Turn Off Mic","user_busy_2":"is busy right now. Please try again later","another_call":"is trying to call you. You can end the current call and send him a request.","popup_already_open":"Multimedia session is already open. Please close the existing popup and try again.","video_call":"Video call","cancel_call":"Cancel Call","ringing":"Ringing...","0":"Start an audio\/video call","1":"Please wait atleast 10 seconds before trying to call again.","2":"has sent you an audio\/video chat request.","3":"Click here to accept it","4":"or simply ignore this message.","5":"has successfully sent an audio\/video chat request.","6":"has accepted your audio\/video chat request.","7":"Click here to launch the AV window","8":"Audio\/Video Chat","9":"Having issues connecting?","10":"There are several reasons why the audio\/video chat may be stuck at initializing:\n<br\/><br\/>\n1. Audio\/video chat requires P2P to establish connection. In order for it to work, your firewall must be configured to allow outgoing UDP traffic. While this is the case with most consumer or small office\/home office (SOHO) firewalls, many corporate firewalls block UDP traffic altogether.\n<br\/><br\/>\n2. The user at the other end is behind a UDP blocking firewall and is unable to connect to you.\n<br\/><br\/>\n3. Our servers are facing issues and you are unable to connect.\n","11":"Closing window shortly","12":"Users have been successfully invited. You can safely close this window.","13":"Users Invited Successfully!","14":"has invited you to join a video conference.","15":"Click here to join","16":"Please select users","17":"Invite Users","18":"Invite Users","19":"has started a video conversation.","20":"Click here to join the conversation.","21":"Settings","22":"Done","23":"Play test sound","24":"Install plug-in","25":"Sorry, there are no users available at the moment to invite.","26":"Click here to open it","27":"Please check your email for verification zoom account at","28":"Call","29":"Call from","30":"Call to","31":"Call ended, duration","32":"rejected","33":"No answer from","34":"Cancelled","35":"Would you like to call","36":"busy","37":"This call has been cancelled","38":"This call has ended","39":"The user is busy right now. Please try again later","40":"The user is not answering the call right now. Please try again later","41":"Sorry, we are unable to send this message.","42":"Sorry, your device does not support this feature.","43":"click here","44":"To cancel outgoing call ","45":"To reject call ","46":"You can also simply ignore this message.","47":"The plugin has not been configured correctly. Please contact the site owner.","48":"Sorry, your browser does not support this feature. Please upgrade your browser to the latest version or try a different browser.","49":"End Call","50":"Turn On Video","51":"Turn Off Video","52":"Turn On Mic","53":"Turn Off Mic","54":"is busy right now. Please try again later","55":"is trying to call you. You can end the current call and send him a request."};
				if(typeof id==undefined){
					return avchat_language;
				}else{
					return avchat_language[id];
				}
			},

			delinkAvchat: function(params){
				var grp = params.grp;
				$('a.avchat_link_'+grp).each(function(){
					$(this).attr('onclick','').unbind('click');
					$(this).removeClass('acceptAVChat accept_AVfid');
					this.style.setProperty( 'text-decoration', 'line-through', 'important' );
					$(this).css('cursor','text');
				});
			},

			processControlMessage : function(controlparameters) {
				var processedmessage = null;

				switch(controlparameters.method){
					case 'endcall':
						jqcc.cometchat.setInternalVariable('endcallrecievedfrom_'+controlparameters.params.grp,'1');
						processedmessage = jqcc.ccavchat.getLanguage('call_ended_2');
						closeCCPopup('audiovideochat');
						break;
					case 'rejectcall':
						processedmessage = jqcc.ccavchat.getLanguage('user_busy_1');
						break;
					case 'noanswer':
						processedmessage = jqcc.ccavchat.getLanguage('user_not_answering');
						break;
					case 'busycall':
						processedmessage = jqcc.ccavchat.getLanguage('user_busy_1');
						break;
					case 'canceloutgoingcall':
						processedmessage = jqcc.ccavchat.getLanguage('call_cancelled');
						break;
					/*case 'initiatecall':
						if(controlparameters.params.direction == 1){
							processedmessage = 'cc^avchat_initiatecall_'+controlparameters.params.grp+'_'+controlparameters.params.chatroommode+'_'+controlparameters.params.caller;
						}
						break;*/
					default :
						processedmessage = null;
					break;
				}
				return processedmessage;
			}
		};
	})();
/* AV Chat DOM functions */
	jqcc('.join_Avchat').off("click").live('click',function(e){
		e.stopImmediatePropagation();
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		var caller = jqcc(this).attr('caller');
		var controlparameters = {"to":to, "grp":grp};
		jqcc.ccavchat.join(controlparameters);
	});

	jqcc('.acceptAVChat').off("click").live('click',function(e){
		e.stopImmediatePropagation();
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		var join_url = jqcc(this).attr('join_url');
		var start_url = jqcc(this).attr('start_url');
		var chatroommode = jqcc(this).attr('chatroommode');
		var caller = jqcc(this).attr('caller');
		var controlparameters = {"to":to, "grp":grp, "join_url":join_url, "start_url":start_url, "chatroommode":chatroommode};
		jqcc.ccavchat.accept(controlparameters);
	});

	jqcc('.accept_AVfid').off("click").live('click',function(e){
		e.stopImmediatePropagation();
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		var start_url = jqcc(this).attr('start_url');
		var caller = jqcc(this).attr('caller');
		var controlparameters = {"to":to, "grp":grp, "start_url":start_url};
		jqcc.ccavchat.accept_fid(controlparameters);
	});

	jqcc('.avchat_cancelcall').off("click").live('click',function(e){
		e.stopImmediatePropagation();
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		jqcc.ccavchat.cancel_call(to,grp);
	});

	jqcc('.avchat_rejectcall').off("click").live('click',function(e){
		e.stopImmediatePropagation();
		var to = jqcc(this).attr('to');
		var grp = jqcc(this).attr('grp');
		jqcc.ccavchat.reject_call(to,grp);
	});
	/* AV Chat DOM functions */
})(jqcc);

/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){

	$.ccstyle = (function () {

		var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|IEMobile|blackberry|palm|symbian/i);

        return {

			getTitle: function() {
				return jqcc.ccstyle.getLanguage('title');
			},

			init: function (params) {
				if (jqcc.cometchat.membershipAccess('style','plugins')){
					if(typeof(params.windowMode) == "undefined") {
						params.windowMode = 0;
					} else {
						params.windowMode = 1;
					}
					if(mobileDevice){
						params.windowMode = 1;
					}
					jqcc.ccstyle.loadstyle(params);
				}
			},

			updatecolor: function (params) {
				var text = params.pattern;
				if (text != '' && text != null) {
					document.cookie = 'cc_chatroomcolor='+text+'; path=/';
				}
				$('#currentroom').find("textarea.cometchat_textarea").focus();
			},
			getLanguage: function(id) {
				style_language =  {"title":"Color your text","select_color":"Which color would you like to use?","0":"Color your text","1":"Which color would you like to use?"};
				if(typeof id==undefined){
					return style_language;
				}else{
					return style_language[id];
				}
			},
			loadstyle: function(params){
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();

				loadCCPopup(baseUrl+'plugins/style/index.php?id='+params.to+'&basedata='+baseData, 'style',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=0, width=286,height=130",286,145,jqcc.ccstyle.getLanguage('select_color'),null,null,null,null,params.windowMode);
			}
        };
    })();

})(jqcc);

/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/
function manageBlockList() {
	if((typeof(parent) != 'undefined' && parent != null && parent != self) || window.top != window.self){
		var controlparameters = {"type":"plugins", "name":"ccblock", "method":"blockList", "params":{}};
		controlparameters = JSON.stringify(controlparameters);
		parent.postMessage('CC^CONTROL_'+controlparameters,'*');
	} else {
		jqcc.ccblock.blockList(0);
	}
}

(function($){

	$.ccblock = (function () {

		var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|IEMobile|blackberry|palm|symbian/i);

        return {

			getTitle: function() {
				return jqcc.ccblock.getLanguage('title');
			},

			init: function (params) {
				var id = params.to;
				var chatroommode = params.chatroommode;
				var baseUrl      = $.cometchat.getBaseUrl();
				var baseData 	 = $.cometchat.getBaseData();
				if (jqcc.cometchat.membershipAccess('block','plugins')){
					var result = confirm(jqcc.ccblock.getLanguage('confirm_block_user'));
					if (result) {
						jqcc.ajax({
							url: baseUrl+'plugins/block/index.php?action=block',
							data: {to: id, basedata: baseData},
				            dataType: 'jsonp',
				            type: 'POST',
		                    success: function(data){
		                		if(data['result']==2){
		                			manageBlockList();
		                		} else {
			                		alert(jqcc.ccblock.getLanguage('user_blocked'));
			                		jqcc.cometchat.closeChatbox(id);
									setTimeout(function() {
										if ($('#cometchat_user_'+id).length > 0) {
											$('#cometchat_user_'+id+' .cometchat_closebox_bottom').click();
										}
										if($('#cometchat_user_'+id+'_popup .cometchat_user_closebox').length>0){
											jqcc('.cometchat_closebox').click();
											setTimeout(function(){
												$('#cometchat_user_'+id+'_popup .cometchat_user_closebox').click();
											},700);
										}
									}, 1000);
										jqcc.cometchat.chatHeartbeat();
		                		}
		                    },
				            error: function(data){
				            }
						});
					}
				}
			},

			addCode: function() {
                    $('#cometchat_optionsbutton_popup .cometchat_optionstyle').append('<a class="cometchat_manage_blocklist" href="javascript:void(0);" onclick="manageBlockList()" style="margin:5px;">'+jqcc.ccblock.getLanguage('accept_request')+'</a>');
			},

			blockList: function (params) {
				if(typeof(params.windowMode) == "undefined") {
					params.windowMode = 0;
				} else {
					params.windowMode = 1;
				}
				if(mobileDevice){
					params.windowMode = 1;
				}
				jqcc.ccblock.loadblockList(params);
			},

			getLanguage: function(id) {
				block_language =  {"title":"Block User","confirm_block_user":"Are you sure you want to block this user?","user_blocked":"User has been blocked successfully.","accept_request":"Manage blocked users","unblock_user":"Blocked Users","no_blocked_users":"No blocked users","0":"Block User","1":"Are you sure you want to block this user?","2":"User has been blocked successfully.","3":"Manage blocked users","4":"Blocked Users","5":"No blocked users"};
				if(typeof id==undefined){
					return block_language;
				}else{
					return block_language[id];
				}
			},

			loadblockList: function(params){
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();

				loadCCPopup(baseUrl+'plugins/block/index.php?basedata='+baseData+'&embed=web', 'blocks',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=0, width=500,height=150",500,150,jqcc.ccblock.getLanguage('accept_request'),0,0,0,0,params.windowMode);
			}
        };
    })();

})(jqcc);

/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){

	$.cchandwrite = (function () {

		var request = {};
		var count = 0;
		var calleeAPI = "ccdocked";
		var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|blackberry|palm|symbian/i);
		var theme = "docked";

        return {

			getTitle: function() {
				return jqcc.cchandwrite.getLanguage('title');
			},

			init: function (params) {
					if (jqcc.cometchat.membershipAccess('handwrite','plugins')){
						var id = params.to;
						baseUrl = $.cometchat.getBaseUrl();
						baseData = $.cometchat.getBaseData();
						params.openinchatbox = 0;

						if(typeof(params.windowMode) == "undefined") {
							params.windowMode = 0;
						} else {
							params.windowMode = 1;
						}

						if(mobileDevice) {
							params.windowMode = 1;
						} else if(params.chatroommode == 1 && mobileDevice == null) {
							if(theme != 'embedded'){
								params.openinchatbox = 1;
								$('#cometchat_group_'+id+'_popup').find('#cometchat_groupplugins_openup_icon_'+id).removeClass('cometchat_pluginsopenup_arrowrotate');
							}
						} else {
							if(theme != 'embedded'){
								params.openinchatbox = 1;
								$('#cometchat_user_'+id+'_popup').find('#cometchat_plugins_openup_icon_'+id).removeClass('cometchat_pluginsopenup_arrowrotate');
							}
						}
						jqcc.cchandwrite.loadhandwrite(params);
				}
			},
			getLanguage: function(id) {
				handwrite_language =  {"title":"Handwrite a message","sent_message_other":"has sent you a handwritten message","sent_message_self":"has successfully sent a handwritten message","sent_message":"has shared a handwritten message","close":"Close","download":"Download","handwrite_title":"Handwrite","0":"Handwrite a message","1":"has sent you a handwritten message","2":"has successfully sent a handwritten message","3":"has shared a handwritten message"};
				if(typeof id==undefined){
					return handwrite_language;
				}else{
					return handwrite_language[id];
				}
			},
			loadhandwrite: function(params){
				var extraQueryString = '';
				var sendername = '';
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();
				
				if(params.chatroommode==1){
					extraQueryString = '&chatroommode=1';
					sendername = '&sendername='+params.roomname;
				} else {
					sendername = '&sendername='+jqcc.cometchat.getName(jqcc.cometchat.getThemeVariable('userid'));
				}

				if(params.openinchatbox == 1){
					loadPopupInChatbox(baseUrl+'plugins/handwrite/index.php?id='+params.to+extraQueryString+'&basedata='+baseData+sendername, 'handwrite', 0, params.to, params.chatroommode);

				} else {
					loadCCPopup(baseUrl+'plugins/handwrite/index.php?id='+params.to+extraQueryString+'&basedata='+baseData+sendername, 'handwrite',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width=330,height=250",330,250,jqcc.cchandwrite.getLanguage('title'),0,1,1,1,params.windowMode);
				}
			}
        };
    })();
})(jqcc);

/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){

	$.ccreport = (function () {

		var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|IEMobile|blackberry|palm|symbian/i);

        return {

			getTitle: function() {
				return jqcc.ccreport.getLanguage('title');
			},

			init: function (params) {
				var id = params.to;
				if (jqcc.cometchat.membershipAccess('report','plugins')){				
					if(typeof(params.windowMode) == "undefined") {
						params.windowMode = 0;
					} else {
						params.windowMode = 1;
					}
					if(typeof(params.caller) == "undefined") {
						params.caller = '';
					}
					if ($("#cometchat_user_"+id+"_popup").find("div.cometchat_tabcontenttext").html() != '') {
						baseData = $.cometchat.getBaseData();
						baseUrl = $.cometchat.getBaseUrl();
						if (mobileDevice) {
							window.open(baseUrl+'plugins/report/index.php?id='+id+'&basedata='+baseData+'&callback=mobilewebapp');
						} else {
							jqcc.ccreport.loadreport(params);
						}
					} else {
						alert(jqcc.ccreport.getLanguage('empty_conversation'));
					}
				}
			},
			getLanguage: function(id) {
				report_language =  {"title":"Report Conversation","reason":"Reason as to why you are reporting this user?","report_user":"Report User","report_successful":"Thank you for reporting this user","closing_window":"Closing window shortly","empty_conversation":"Sorry, your conversation with this user is empty.","fill_reason":"Reason must be filled out.","0":"Report Conversation","1":"Reason as to why you are reporting this user?","2":"Report User","3":"Thank you for reporting this user","4":"Closing window shortly","5":"Sorry, your conversation with this user is empty.","6":"Reason must be filled out."};
				if(typeof id==undefined){
					return report_language;
				}else{
					return report_language[id];
				}
			},
			loadreport: function(params){
				var extraQueryString = '';
				if(jqcc.cometchat.getCcvariable().callbackfn=='desktop'){
					params.windowMode = 1;
					extraQueryString='&caller='+params.caller;
				}
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();
				if(mobileDevice){
					windowMode = 1;
				}
				loadCCPopup(baseUrl+'plugins/report/index.php?id='+params.to+extraQueryString+'&basedata='+baseData, 'report',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=0, width=430,height=220",430,175,jqcc.ccreport.getLanguage('reason'),0,0,0,0,params.windowMode);
			}
        };
    })();

})(jqcc);

/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){
	$.ccfiletransfer = (function() {
		var request = {};
		var count = 0;
		var calleeAPI = "ccdocked";

		return {
			getTitle: function() {
				return jqcc.ccfiletransfer.getLanguage('title');
			},
			init: function (params) {
				var id = params.to;
				var chatroommode = params.chatroommode;
				var roomname = params.roomname;
				var caller = '';
				var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|blackberry|palm|symbian/i);
				if (!(jqcc.cometchat.membershipAccess('filetransfer','plugins'))){
					return;
				}
				if(typeof(params.caller) != "undefined") {
					caller = params.caller;
				}
				var windowMode = 0;
				if(typeof(params.windowMode) == "undefined") {
					windowMode = 0;
				} else {
					windowMode = 1;
				}
				if(chatroommode == 1 && mobileDevice == null) {
					var baseUrl = $.cometchat.getBaseUrl();
					var basedata = $.cometchat.getBaseData();

					if($("#currentroom").length){
						$("#currentroom").find('#cometchat_uploadfile_'+id).click();
					} else {
						var cometchat_group_popup = $("#cometchat_group_"+id+"_popup");
						cometchat_group_popup.find('#cometchat_uploadfile_'+id).click();
					}
				} else if(chatroommode == 0 && mobileDevice == null){
					var baseUrl = $.cometchat.getBaseUrl();
					var basedata = $.cometchat.getBaseData();
					var cometchat_user_popup = $("#cometchat_user_"+id+"_popup");
					cometchat_user_popup.find('#cometchat_uploadfile_'+id).click();
					/*
					cometchat_user_popup.find(".cometchat_tabcontent").append("<input id='cometchat_uploadfile_"+id+"' type='file' class='file' name='Filedata' style='display:none;' />");

					if(!cometchat_user_popup.find('cometchat_uploadfile_'+id).length) {
						var x = document.createElement("INPUT");
					    x.setAttribute("type", "file");
					    x.setAttribute("class", "cometchat_fileupload");
					    x.setAttribute("id", 'cometchat_uploadfile_'+id);
					    x.setAttribute("name", "Filedata");
					    x.setAttribute("multiple", "true");
					    cometchat_user_popup.find(".cometchat_tabcontent").append(x);
					    x.addEventListener("change", jqcc.ccfiletransfer.FileSelectHandler(cometchat_user_popup.find('.cometchat_tabcontent'),id,chatroommode), false);
					}*/
				} else if(chatroommode == 0 && mobileDevice){
					var baseUrl = $.cometchat.getBaseUrl();
					var baseData = $.cometchat.getBaseData();
					if(caller != ''){
						var cometchat_user_popup = $('#cometchat_synergy_iframe').contents().find("#cometchat_user_"+id+"_popup");
					}else{
						var cometchat_user_popup = $("#cometchat_user_"+id+"_popup");
					}
					cometchat_user_popup.find('#cometchat_uploadfile_'+id).click();
				} else if(chatroommode == 1 && mobileDevice){
					var baseUrl = $.cometchat.getBaseUrl();
					var basedata = $.cometchat.getBaseData();
					if($("#currentroom").length || $('#cometchat_synergy_iframe').contents().find('#currentroom').length){
						if(caller != ''){
							$('#cometchat_synergy_iframe').contents().find("#currentroom").find('#cometchat_uploadfile_'+id).click();
							$("#currentroom").find('#cometchat_uploadfile_'+id).click();
						}else{
							$("#currentroom").find('#cometchat_uploadfile_'+id).click();
						}
					} else {
						var cometchat_group_popup = $("#cometchat_group_"+id+"_popup");
						cometchat_group_popup.find('#cometchat_uploadfile_'+id).click();
					}
				}
			},
			FileSelectHandler: function (div,id,chatroommode) {
				return function (e) {
			    jqcc.ccfiletransfer.FileDragHover(e,div,id);

			    /*fetch FileList object*/
			    var files = e.target.files || e.dataTransfer.files;
			    /*process all File objects*/
			    for (var i = 0, f; f = files[i]; i++) {
			    	jqcc.ccfiletransfer.fileAjax(div,f,id,chatroommode);
			    }
			  }
			},
			FileDragHover: function (div,id,enter) {
				return function (e) {
					var baseUrl = $.cometchat.getBaseUrl();
					if(enter == 1){
						if(!div.find("#cometchat_file_drag_"+id).length){
							div.append("<div class='cometchat_file_drag' id='cometchat_file_drag_"+id+"'>"+jqcc.ccfiletransfer.getLanguage('dropfiles')+"</div>");
							div.find('.cometchat_tabcontenttext').css('box-shadow','rgba(67, 159, 224, 0.3) 18px 0px 100px inset');
						}
					}else{
						$("#cometchat_file_drag_"+id).remove();
						div.find('.cometchat_tabcontenttext').css('box-shadow','none');
					}
					/*e.stopPropagation();
					e.preventDefault();*/
				}
			},
			createProgressHandler: function (i) {
				return function (e) {
				    var _progress = document.getElementById('progress_'+i);
				    if(_progress)
				    _progress.style.width = Math.ceil(e.loaded/e.total * 100) + '%';
				}
			},
			handleResponse: function (request,id) {
				var response;
				if(request.readyState == 4){
				    try {
				        $("#progress_bar_"+request.count).html("<div class='progress_result'>"+jqcc.ccfiletransfer.getLanguage('uploaded')+"<div>");

				        setTimeout(function(){
				        	$("#cometchat_progresscontainer_"+id).remove();
				        	$("#cometchat_file_drag_"+id).remove();
				        	$('.cometchat_tabcontenttext').css('box-shadow','none');
						},800);
				    } catch (e){
				        var resp = {
				            status: 'error',
				            data: 'Unknown error occurred: [' + request.responseText + ']'
				        };
				    }
				}
			},
			abortUploading: function (id) {
				var baseUrl = $.cometchat.getBaseUrl();
			  request['request_'+id].abort();/*ajax abort code*/
			  $("#progress_bar_"+id).html('<div class="progress_result">'+jqcc.ccfiletransfer.getLanguage('upload_stopped')+'<div>');
			},
			progessResponse: function (e,_progress) {
				_progress.style.width = Math.ceil(e.loaded/e.total * 100) + '%';
			},
			fileAjax: function (div,data,id,chatroommode) {
				var baseUrl = $.cometchat.getBaseUrl();
				var basedata = $.cometchat.getBaseData();

			    count += 1;
			    var form_data = new FormData();
			    form_data.append('Filedata', data);
			    form_data.append('to', id);
			    form_data.append('basedata', basedata);
			    form_data.append('chatroommode', chatroommode);
			    /*$(div).append("<div class='cometchat_progresscontainer' id='cometchat_progresscontainer_"+id+"_"+count+"'><div class='progress_text' id ='progress_text"+count+"'>"+data['name']+"</div><div class='progress_bar' id='progress_bar_"+count+"'><div class='close' id='close_"+count+"' onclick='jqcc.ccfiletransfer.abortUploading("+count+");'>×</div><div class='progress_outer' id='progress_outer_"+count+"'><div id='progress_"+count+"' class='progress'></div></div></div></div>");*/

			    if(calleeAPI == 'ccembedded'){
			    	/*UNCOMMENT FOR PROGRESS BAR*/
			    	/*if(!div.find('#cometchat_progresscontainer_'+id).length){
			    		div.append("<div class='cometchat_progresscontainer' id='cometchat_progresscontainer_"+id+"' ></div>");
			    	}*/
			    	/*div.find("#cometchat_progresscontainer_"+id).append("<div class='progressbar_container'><div class='progress_text' id ='progress_text"+count+"'>"+data['name']+"</div><div class='progress_bar' id='progress_bar_"+count+"'><div class='cometchat_progressbar_close' id='close_"+count+"' onclick='jqcc.ccfiletransfer.abortUploading("+count+");'>×</div><div class='progress_outer' id='progress_outer_"+count+"'><div id='progress_"+count+"' class='progress'></div></div></div></div>");*/
			    }else{
			    	/*$(div).find('div.cometchat_tabcontentinput').before("<div class='cometchat_progresscontainer' id='cometchat_progresscontainer_"+id+"'><div class='progress_text' id ='progress_text"+count+"'>"+data['name']+"</div><div class='progress_bar' id='progress_bar_"+count+"'><div class='cometchat_progressbar_close' id='close_"+count+"' onclick='jqcc.ccfiletransfer.abortUploading("+count+");'>×</div><div class='progress_outer' id='progress_outer_"+count+"'><div id='progress_"+count+"' class='progress'></div></div></div></div>");*/
			    }
			    /*$(div).find('div.cometchat_tabcontentinput').before("<div class='cometchat_progresscontainer' id='cometchat_progresscontainer_"+id+"'><div class='progress_text' id ='progress_text"+count+"'>"+data['name']+"</div><div class='progress_bar' id='progress_bar_"+count+"'><div class='close' id='close_"+count+"' onclick='jqcc.ccfiletransfer.abortUploading("+count+");'>×</div><div class='progress_outer' id='progress_outer_"+count+"'><div id='progress_"+count+"' class='progress'></div></div></div></div>");*/
			    request['request_'+count] = {};
			    request['request_'+count]['count'] = count;
			    request['request_'+count] = new XMLHttpRequest();
			    request['request_'+count].count=count;
			    request['request_'+count].onreadystatechange = function () {jqcc.ccfiletransfer.handleResponse(this,id); };
			    request['request_'+count].upload.addEventListener("progress", jqcc.ccfiletransfer.createProgressHandler(count), false);
			    request['request_'+count].open('POST', baseUrl+'plugins/filetransfer/upload.php');
			    request['request_'+count].send(form_data);
			},
			getLanguage: function(id) {
				filetransfer_language =  {"title":"Send a file","file_type":"Which file would you like to send?","select_a_file":"Please select a file by using the button below.","copyright_warning":"<b>WARNING:<\/b> Do not send copyrighted material for which you don't own the rights or have permission from the owner.","select_file":"Select file","sent_a_file":"has sent a file","download_file":"Click here to download the file","cr_chat_convo":"has successfully sent a file","view_entire_convo":"File sent successfully. Closing Window.","shared_a_file":"has shared a file","err_no_file_found":"Sorry, we are unable to find the file.","save":"Save","close":"Close","download":"Download","uploaded":"File uploaded successfully","upload_stopped":"File upload stopped","dropfiles":"Drop your files to upload","0":"Send a file","1":"Which file would you like to send?","2":"Please select a file by using the button below.","3":"<b>WARNING:<\/b> Do not send copyrighted material for which you don't own the rights or have permission from the owner.","4":"Select file","5":"has sent a file","6":"Click here to download the file","7":"has successfully sent a file","8":"File sent successfully. Closing Window.","9":"has shared a file","10":"Sorry, we are unable to find the file.","11":"Save","12":"Close","13":"Download"};
				if(typeof id==undefined){
					return filetransfer_language;
				}else{
					return filetransfer_language[id];
				}
			}
		};
	})();
})(jqcc);

/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){

	$.ccstickers = (function () {

		var height = 350;
		var width = 420;
		var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|blackberry|palm|symbian/i);

        return {

			getTitle: function() {
				return jqcc.ccstickers.getLanguage('title');
			},

			init: function (params) {
				if (jqcc.cometchat.membershipAccess('stickers','plugins')){
					var id = params.to;
					if(typeof(params.caller) == "undefined") {
						params.caller = '';
					}
					jqcc.ccstickers.loadstickers(params);
				}
			},
			sendStickerMessage: function(params) {
				var baseUrl = $.cometchat.getBaseUrl();
				var baseData = $.cometchat.getBaseData();
				var to = params.to;
				var key = params.key;
				var chatroommode = params.chatroommode;
				var category = params.category;
				var caller = params.caller;
				var calleeAPI = 'docked';
				if(typeof(params.localmsgid) == 'undefined' || params.localmsgid == '') {
					var localmessageid = jqcc.ccstickers.processofflineMessage(params);
				} else {
					localmessageid = params.localmsgid;
				}
				$.ajax({
					url: baseUrl+'plugins/stickers/index.php?action=sendSticker&callback=?',
					type: 'GET',
					data: {to: to, key: key, basedata: baseData, chatroommode: chatroommode, category: category, caller: caller, localmessageid:localmessageid},
					dataType: 'jsonp',
					success: function(data) {
						if(data != null && typeof(data) != 'undefined'){
							if(typeof(data.localmessageid) == 'undefined') {
								data.localmessageid = '';
							}
							if(chatroommode == 1){
								if(typeof (jqcc[calleeAPI].addChatroomMessage)!=='undefined'){
									jqcc[calleeAPI].addChatroomMessage({
										fromid:jqcc.cometchat.getChatroomVars('myid'),
										message: data.m,
										id:data.id,
										selfadded:1,
										sent:Math.floor(new Date().getTime()),
										fromname:'0',
										calledfromsend:'1',
										roomid:to,
										localmessageid: data.localmessageid
									});
								}
								if(mobileDevice){
									jqcc[calleeAPI].closeModule('stickers');
									$('#currentroom').find('.cometchat_userchatarea').css('display','block');
									setTimeout(function(){
										$('#currentroom_convo').css('height',$(window).height()-($('#currentroom').find('.cometchat_tabsubtitle').outerHeight()+$('#currentroom').find('.cometchat_tabinputcontainer').outerHeight(true)+$('#currentroom').find('.cometchat_prependMessages').outerHeight(true)));
									}, 10);
								}
							} else {
								jqcc.cometchat.chatWith(to);
								jqcc[calleeAPI].addMessages([{"from": to, "message": data.m, "id": data.id, "broadcast": 0,"localmessageid": data.localmessageid}]);
								if(mobileDevice){
									jqcc[calleeAPI].closeModule('stickers');
				                    $('#cometchat_user_'+to+'_popup').find('.cometchat_userchatarea').css('display','block');
				                    setTimeout(function(){
				                        $('#cometchat_tabcontenttext_'+to).css('height',$(window).height()-(jqcc('#cometchat_user_'+to+'_popup').find('.cometchat_tabsubtitle').outerHeight()+jqcc('#cometchat_user_'+to+'_popup').find('.cometchat_tabinputcontainer').outerHeight(true)+jqcc('#cometchat_user_'+to+'_popup').find('.cometchat_prependMessages').outerHeight(true)));
				                    }, 10);
								}
							}

                            if(data.hasOwnProperty("localmessageid") && typeof(data.localmessageid) != '') {
                            	var offlinemessages = jqcc.cometchat.getFromStorage('offlinemessagesqueue');
                                if(offlinemessages.hasOwnProperty(data.localmessageid)) {
                                    delete offlinemessages[data.localmessageid];
                                    jqcc.cometchat.updateToStorage('offlinemessagesqueue',offlinemessages);
                                }
                            }
                            if(jqcc.isEmptyObject(jqcc.cometchat.getFromStorage('offlinemessagesqueue'))) {
                                jqcc.cometchat.updateToStorage('offmsgcounter',{'lmid':0});
                            }
						}
					},
					error: function(data) {
						jqcc.cometchat.updateOfflinemessages({
							"type":"plugins",
							"name":"stickers",
							"method":"sendStickerMessage",
							"id": params.to,
							"message":params,
							"localmsgid":localmessageid,
							"chatroommode":params.chatroommode,
							'msgStatus':0
						});
					}
				});
			},
			appendStickerMessage: function(controlparameters) {
				var to = controlparameters.to;
				var data = controlparameters.data;
				var chatroommode = controlparameters.chatroommode;
				var calleeAPI = 'docked';
				if(chatroommode == 1){
					if(typeof (jqcc[calleeAPI].addChatroomMessage)!=='undefined'){
							jqcc[calleeAPI].addChatroomMessage({
								fromid:jqcc.cometchat.getChatroomVars('myid'),
								message: data.m,
								id:data.id,
								selfadded:1,
								sent:Math.floor(new Date().getTime()),
								fromname:'0',
								calledfromsend:'0',
								roomid:to
							});
					}
				} else {
					if(typeof (jqcc[calleeAPI].addMessages)!=='undefined'){
                        jqcc[calleeAPI].addMessages([{"from": to, "message": data.m, "id": data.id, "broadcast": 0}]);
                        if(mobileDevice){
                        	var tabcontenttext_height = ($(window).height()*30)/100;
                        	jqcc('#cometchat_tabcontenttext_'+to).css('height',tabcontenttext_height);
                        }
                    }
				}
			},
			processControlMessage: function(controlparameters) {
				var staticCDNUrl = $.cometchat.getStaticCDNUrl();
				var category = controlparameters.category;
				var imageName = controlparameters.key+'.png';
				var message = "<img class=\"cometchat_stickerImage\" type=\"image\" src=\""+staticCDNUrl+"plugins/stickers/images/"+category+"/"+imageName+"\" />";
				return message;
			},
			getLanguage: function(id) {
				stickers_language =  {"title":"Send a sticker","select_sticker":"Which sticker would you like?","sticker_received":"has sent you a sticker.","0":"Send a sticker","1":"Which sticker would you like?","2":"has sent you a sticker."};
				if(typeof id==undefined){
					return stickers_language;
				}else{
					return stickers_language[id];
				}
			},
			processofflineMessage: function(params) {
				var to = params.to;
				var key = params.key;
				var chatroommode = params.chatroommode;
				var category = params.category;
				var caller = params.caller;
				var calleeAPI = 'docked';
				var controlparameters = {"type":"plugins","name":"stickers","method":"sendSticker","params":{"to":to,"key":key,"chatroommode":chatroommode,"category":category,"caller":caller}};
				controlparameters = JSON.stringify(controlparameters);
				var localmessageid = jqcc.cometchat.updateOfflinemessages({
					"type":"plugins",
					"name":"stickers",
					"method":"sendStickerMessage",
					"id": to,
					"message":params,
					"localmsgid":'',
					"chatroommode":chatroommode,
					'msgStatus':1
				});
				if(localmessageid != '' && localmessageid != 'undefined') {
					if (chatroommode == 1) {
						jqcc[calleeAPI].addChatroomMessage({
							fromid:jqcc.cometchat.getChatroomVars('myid'),
							message: 'CC^CONTROL_'+controlparameters,
							localmessageid:localmessageid,
							selfadded:1,
							sent:Math.floor(new Date().getTime()),
							fromname:'0',
							calledfromsend:'1',
							roomid:to
						});
					} else {
						jqcc[calleeAPI].addMessages([{
							"from": to,
							"message": 'CC^CONTROL_'+controlparameters,
							"broadcast": 0,
							"direction": 2,
							"calledfromsend": 0,
							"localmessageid": localmessageid}
						]);
					}
				}
				return localmessageid;
			},
			loadstickers: function(params){
				var extraQueryString = '';
				baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();

				if(params.chatroommode==1){
					extraQueryString='&chatroommode=1';
				}

				loadPopupInChatbox(baseUrl+'plugins/stickers/index.php?id='+params.to+extraQueryString+'&basedata='+baseData+'&caller='+params.caller, 'stickers', 0, params.to, params.chatroommode);
			}
        };
    })();

})(jqcc);

/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){
	$.ccvoicenote = (function() {
		var aws_storage = '0';
		var aws_bucket_url = '';
		var bucket_path = '';
		var duration;
		var cometchat_message_media={}



		return {
			getTitle: function() {
				return jqcc.ccvoicenote.getLanguage('title');
			},
			init: function (params) {
				if(location.protocol == 'https:' || location.host == 'localhost'){
					if (jqcc.cometchat.membershipAccess('voicenote','plugins')){
						var id = params.to;
						var extraQueryString = '';
						var baseUrl = $.cometchat.getBaseUrl();
						var baseData = $.cometchat.getBaseData();
						if(typeof(params.chatroommode) != "undefined" && params.chatroommode == 1) {
							var extraQueryString = '&chatroommode=1';
						}
						var caller = '';
						if(typeof(params.caller) != "undefined") {
							caller = params.caller;
						}
						var windowMode = 0;
						if(typeof(params.windowMode) == "undefined") {
							windowMode = 0;
						} else {
							windowMode = 1;
						}
						loadPopupInChatbox(baseUrl+'plugins/voicenote/index.php?id='+id+extraQueryString+'&caller='+caller+'&basedata='+baseData, 'voicenote',0,params.to,params.chatroommode);
					}	
				}else{
					alert('Please contact your website administrator if you are unable to use this plugin.')
				}
			},
			voicenotetimeUpdate: function (msgid,music) {
				var playhead =  jqcc('#cometchat_message_'+msgid).find('.cometchat_mediaplayhead');
				var timeline = jqcc('#cometchat_message_'+msgid).find('.cometchat_mediatimeline');
				var playpausebutton = jqcc('#cometchat_message_'+msgid).find('#cometchat_playpausebutton');
				var timelineWidth = timeline.get(0).offsetWidth - playhead.get(0).offsetWidth;
				var playPercent = timelineWidth * (music[0].currentTime / duration);
				var mediaplayed;
				playhead[0].style.marginLeft = playPercent + "px";
				if (music[0].currentTime == duration) {
					playhead[0].style.marginLeft = "0px";
					playpausebutton.className = "";
					playpausebutton.removeClass('cometchat_mediapause').addClass('cometchat_mediaplay');
				}
				mediaplayed = (music[0].currentTime/100).toFixed(2);
				jqcc('#cometchat_message_'+msgid).find('.cometchat_mediaplayedtime').css('display','table').text(mediaplayed);
			},
			addEventListenersForMediaMessages: function (msgid,music){
				if(music[0].duration!==null){
					duration = music[0].duration;
				}else{
					music[0].addEventListener("canplay", function () {
						duration = music[0].duration;
					}, false);
				}
				music[0].addEventListener("timeupdate", function(){
				jqcc.ccvoicenote.voicenotetimeUpdate(msgid,music)}, false);
				/*jqcc('#cometchat_message_'+msgid).find('#cometchat_playpausebutton').on('click',function(){
					jqcc.ccvoicenote.playvoicenote(msgid);
				});*/
			},
			playvoicenote: function (msgid) {
				var music = jqcc('#cometchat_message_'+msgid).find('audio');
				var voiceFilelocation = jqcc('#cometchat_message_'+msgid).find('source').attr('src');
				var voicefile_status = jqcc.ccvoicenote.voicefileExists(voiceFilelocation);
				if(voicefile_status != '' && voicefile_status == '404'){
					alert('This voice file doesn\'t exist.');
					return;
				}

				var playpausebutton = jqcc('#cometchat_message_'+msgid).find('#cometchat_playpausebutton');
				if(!cometchat_message_media.hasOwnProperty('mediamessage_initialised_'+msgid)){
					jqcc.ccvoicenote.addEventListenersForMediaMessages(msgid,music);
					cometchat_message_media['mediamessage_initialised_'+msgid]=1;
				}
				if (music.get(0).paused) {
					music.get(0).play();
					playpausebutton.removeClass('cometchat_mediaplay').addClass('cometchat_mediapause');
				} else {
					music.get(0).pause();
					playpausebutton.removeClass('cometchat_mediapause').addClass('cometchat_mediaplay');
				}
			},
			voicefileExists: function(fileLocation) {
				var voiceresponse = $.ajax({
					url: fileLocation,
					type: 'HEAD',
					async: false
				}).status;
				return voiceresponse;
			},
			getLanguage: function(id) {
				voicenote_language =  {"title":"Voice Note","sent_message_other":"has sent you a voice note","sent_message_self":"has successfully sent a voice note","sent_message":"has shared a handwritten message","close":"Close","download":"Download","handwrite_title":"Voice Note","send_voice_note":"Send Voice Note","0":"Voice Note","1":"has sent you a voice note","2":"has successfully sent a voice note","3":"has shared a handwritten message","4":"Send Voice Note"};
				if(typeof id==undefined){
					return voicenote_language;
				}else{
					return voicenote_language[id];
				}
			}
		};
	})();
})(jqcc);

jqcc(function(){
	jqcc('#cometchat_playpausebutton').live('click',function(e){
		var message_id='';
		var mode = jqcc(this).parent().closest('span').attr('class');
		if(mode != '' && mode!='chatroom_msg'){
			msg_span = jqcc(this).parents('.cometchat_chatboxmessage').attr('id').split('_');
			message_id = msg_span[2];
		}else{
			message_id = jqcc(this).closest('span').next().text();
		}
		jqcc.ccvoicenote.playvoicenote(message_id);
	});
});

/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){

	$.ccwhiteboard = (function () {

		var lastcall = 0;
		var height = 628;
		var width = 752;
		var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|blackberry|palm|symbian/i);
        return {

			getTitle: function() {
				return $.ccwhiteboard.getLanguage('title');
			},

			init: function (params) {
				if (jqcc.cometchat.membershipAccess('whiteboard','plugins')){
					var to = params.to;
					params.force = 0;
					if(typeof(params.windowMode) == "undefined") {
						params.windowMode = 0;
					} else {
						params.windowMode = 1;
					}

					var currenttime = new Date();
					currenttime = parseInt(currenttime.getTime()/1000);
					lastcall = currenttime;
					if (10 > (currenttime-lastcall)) {
						params.random = currenttime;

						if(params.chatroommode == 1){
							params.force = 1;
						}
						if(mobileDevice){
							params.windowMode = 1;
						}
						jqcc.ccwhiteboard.loadwhiteboard(params);

					} else {
						alert(jqcc.ccwhiteboard.getLanguage('wait_message'));
					}
				}
			},
			loadwhiteboard: function(params){
				if (jqcc.cometchat.membershipAccess('whiteboard','plugins')){
					var to = params.to;
					var extraQueryString = "&random="+params.random;
					if(params.hasOwnProperty('room')) {
						extraQueryString += "&room="+params.room;
					}
					if(params.chatroommode==1){
						extraQueryString +="&chatroommode=1&subaction=request";
					}
					baseUrl = $.cometchat.getBaseUrl();
					baseData = $.cometchat.getBaseData();
					if(mobileDevice){
						params.windowMode = 1;
					}
					loadCCPopup(baseUrl+'plugins/whiteboard/index.php?action=whiteboard&to='+to+extraQueryString+'&basedata='+baseData, 'whiteboard',"status=0,toolbar=0,menubar=0,directories=0,resizable=1,location=0,status=0,scrollbars=0, width="+width+",height="+height,width,height-50,jqcc.ccwhiteboard.getLanguage('whiteboard'),params.force,0,1,1,params.windowMode);
				}
			},
			accept: function (params) {
				if (jqcc.cometchat.membershipAccess('whiteboard','plugins')){
					var to = params.to;
					params.random = 0;
					params.chatroommode = 0;
					params.force = 0;

					if(typeof(params.windowMode) == "undefined") {
						params.windowMode = 0;
					} else {
						params.windowMode = 1;
					}
					baseUrl = $.cometchat.getBaseUrl();
					baseData = $.cometchat.getBaseData();
					$.getJSON(baseUrl+'plugins/whiteboard/index.php?action=accept&callback=?', {to: to, basedata: baseData});
					if(!mobileDevice){
						jqcc.ccwhiteboard.loadwhiteboard(params);
					} else{
						params.windowMode = 1;
						jqcc.ccwhiteboard.loadwhiteboard(params);
					}
				}
			},
			getLanguage: function(id) {
				whiteboard_language =  {"title":"Share a Whiteboard","wait_message":"Please wait atleast 10 seconds before trying to share again.","shared_whiteboard_other":"has shared his\/her whiteboard with you.","click_to_view_1":"Click here to view","ignore_message":"or simply ignore this message.","shared_whiteboard_self":"has successfully shared his\/her whiteboard.","viewing_whiteboard":"is now viewing your whiteboard.","shared_whiteboard":"has shared a whiteboard.","click_to_view_2":"Click here to view","whiteboard":"Whiteboard","boundary_exceeded":"Text exceeds boundary limit","0":"Share a Whiteboard","1":"Please wait atleast 10 seconds before trying to share again.","2":"has shared his\/her whiteboard with you.","3":"Click here to view","4":"or simply ignore this message.","5":"has successfully shared his\/her whiteboard.","6":"is now viewing your whiteboard.","7":"has shared a whiteboard.","8":"Click here to view","9":"Whiteboard","10":"Text exceeds boundary limit"};
				if(typeof id==undefined){
					return whiteboard_language;
				}else{
					return whiteboard_language[id];
				}
			}
		};
    })();

})(jqcc);

jqcc(document).ready(function(){
	jqcc('.accept_White').live('click',function(){
		var to = jqcc(this).attr('to');
		var random = jqcc(this).attr('random');
		var room = jqcc(this).attr('room');
		var chatroommode = jqcc(this).attr('chatroommode');
		var controlparameters = {"to":to, "random":random, "room":room, "chatroommode":chatroommode};
		jqcc.ccwhiteboard.accept(controlparameters);
	});
});

if(typeof(jqcc) === 'undefined') {
    jqcc = jQuery;
}

if(typeof($) === 'undefined') {
    $ = jqcc;
}

(function($) {
    var settings = {};
    settings = jqcc.cometchat.getcrAllVariables();
    var calleeAPI = jqcc.cometchat.getChatroomVars('calleeAPI');
    var baseUrl = jqcc.cometchat.getBaseUrl();
    var staticCDNUrl = '/cometchat/';
    var tabWidth = 'width: 50%;right: 0;';
    var chromeReorderFix = '_';
    var newmess;
    var newmesscr;
    var chatboxDistance = 10;
    var chatboxHeight = parseInt('350');
    var chatboxWidth = parseInt('230');
    var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|blackberry|palm|symbian/i);
    var iOSmobileDevice = navigator.userAgent.match(/ipad|ipod|iphone/i);
    var showUsername = "1";
    $.crdocked = (function() {
        return {
                chatroomInit: function(){

                    $('.create_value').find('#name').on('focus', function() {
                        document.body.scrollTop = $(this).offset().top;
                    });

                    jqcc.cometchat.chatroomHeartbeat();
                    $('.cometchat_noactivity').css('display','none');
                },
                createChatroomPopup:function(){
                    var createChatroom = '<div><div class="content_div" id="create"><div id="cometchat_createchatroom" class="content_div"><form class="create" onsubmit="javascript:jqcc.cometchat.createChatroomSubmit(); return false;"><div style="clear:both;padding-top:10px"></div><div class="create_value"><input type="text" id="name" class="create_input" placeholder="Name" /></div><div class="password_hide" style="clear:both;padding-top:10px"></div><div class="create_value password_hide"><input id="cometchat_chatroom_password" type="password" autocomplete="off" class="create_input" placeholder="Password" /></div><div style="clear:both;padding-top:10px"></div><div class="create_value" ><select id="type" onchange="jqcc[\''+calleeAPI+'\'].crcheckDropDown(this)" class="create_options"><option value="0">Public Group</option><option value="1">Password-protected Group</option><option value="2">Invitation only Group</option></select></div><div class="create_value"><input type="submit" class="cometchat_createroombutton" value="Create Group" /></div></form></div></div></div>';
                    var createchatroompopup = '<div id="cometchat_createchatroom_popup" class="cometchat_tabpopup cometchat_tabhidden"><div class="cometchat_userstabtitle"><div class="cometchat_userstabtitletext" style="width: 88%;text-align: center;">Create Group</div><div class="cometchat_closebox cometchat_tooltip" id="cometchat_minimize_createchatroompopup" title="Close"></div></div><div id="cometchat_createchatroom_content" class="cometchat_tabcontent cometchat_optionstyle" style="overflow:hidden;">'+createChatroom+'</div></div>';

                    jqcc('#cometchat_sidebar').append(createchatroompopup);
                    jqcc('#cometchat').find('#cometchat_userstab_popup').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                    jqcc('#cometchat_newcompose_option').remove();
                    jqcc('#cometchat').find('#cometchat_createchatroom_popup').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');

                    jqcc('#cometchat_minimize_createchatroompopup').click(function(e){
                        jqcc('#cometchat').find('#cometchat_createchatroom_popup').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                        jqcc('#cometchat').find('#cometchat_userstab_popup').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                        jqcc('#cometchat').find('#cometchat_createchatroom_popup').remove();
                    });
                },
                chatroomTab: function(){
                },
                chatroomOffline: function(){
                    jqcc.cometchat.leaveChatroom();
                },
                playsound: function(type) {
                    try {
                        if(type == 1){
                            document.getElementById('messageOpenBeep').play();
                        }else{
                            document.getElementById('messageBeep').play();
                        }
                    } catch (error) {
                        jqcc.cometchat.setChatroomVars('messageBeep',0);
                    }
                },
                sendChatroomMessage: function(chatboxtextarea) {
                    $(chatboxtextarea).val('');
                    if($('#cometchat_container_smilies').length != 1 && mobileDevice && !iOSmobileDevice) {
                        $[calleeAPI].chatroomWindowResize();
                    }
                    $(chatboxtextarea).focus();
                },
                createChatroom: function() {
                    $('#createtab').addClass('tab_selected');
                    $('#create').css('display','block');
                    $('div.welcomemessage').html("You can create a group here");
                },
                getTimeDisplay: function(ts,id) {
                    var time = getTimeDisplay(ts);
                    if(ts < jqcc.cometchat.getChatroomVars('todays12am')) {
                            return time.hour+":"+time.minute+time.ap+" "+time.date+time.type+" "+time.month;
                    } else {
                            return time.hour+":"+time.minute+time.ap;
                    }
                },
                deletemessage: function(delid) {
                    $("#cometchat_groupmessage_"+delid).remove();
                },
                addChatroomMessage: function(incoming){
                    var fromid = incoming.fromid,
                        incomingmessage = jqcc.cometchat.htmlEntities(incoming.message),
                        incomingid = incoming.id,
                        sent = incoming.sent,
                        fromname = incoming.from,
                        calledfromsend = incoming.calledfromsend,
                        chatroomid = incoming.roomid,
                        incomingself = 1,
                        todaysdate = new Date(),
                        tdmonth  = todaysdate.getMonth(),
                        tddate  = todaysdate.getDate(),
                        tdyear = todaysdate.getFullYear(),
                        today_date_class = tdmonth+"_"+tddate+"_"+tdyear,
                        ydaysdate = new Date((new Date()).getTime() - 3600000 * 24),
                        ydmonth  = ydaysdate.getMonth(),
                        yddate  = ydaysdate.getDate(),
                        ydyear = ydaysdate.getFullYear(),
                        yday_date_class = ydmonth+"_"+yddate+"_"+ydyear,
                        d = '',
                        month = '',
                        date  = '',
                        year = '',
                        msg_date_class = '',
                        msg_date = '',
                        date_class = '',
                        msg_date_format = '',
                        cometchat_del_style = '',
                        localmessageid = '',
                        cc_dir = '0',
                        prepend = '',
                        avatarstofetch = {},
                        messagewrapperid = '',
                        trayIcons = jqcc.cometchat.getTrayicon(),
                        isRealtimetranslateEnabled = trayIcons.hasOwnProperty('realtimetranslate');

                        incoming.message = jqcc.cometchat.htmlEntities(incoming.message);
                        message = jqcc.cometchat.processcontrolmessage(incoming);

                    if( (!incoming.hasOwnProperty('id') || incoming.id == '') && (!incoming.hasOwnProperty('localmessageid') || incoming.localmessageid == '') && (incoming.message+'').indexOf('CC^CONTROL_')==-1){
                        return;
                    }

                    if(isRealtimetranslateEnabled && jqcc.cookie(settings.cookiePrefix+'rttlang') && fromid != settings.myid && (message).indexOf('CC^CONTROL_') == -1){
                        incoming.message = message;
                        text_translate(incoming);
                    }

                    if(incoming.hasOwnProperty('self')){
                        incomingself = incoming.self;
                    }
                    if(incoming.hasOwnProperty('selfadded')){
                        incomingself = incoming.selfadded;
                    }

                    if( incoming.hasOwnProperty('id') ) {
                        messagewrapperid = incoming.id;
                    }else if( incoming.hasOwnProperty('localmessageid') ) {
                        messagewrapperid = incoming.localmessageid;
                    }
                    incomingid = messagewrapperid;
                    if(fromid != settings.myid || (incoming.hasOwnProperty('botid') && incoming.botid != 0)) {
                        incomingself = 0;
                    }
                    if(typeof(fromname) === 'undefined' || fromname == 0 || incomingself){
                        fromname = "Me";
                    }
                    var temp = '',
                        chatroomreadmessages = jqcc.cometchat.getFromStorage("crreadmessages"),
                        controlparameters = {"id":incomingid, "from":fromname, "fromid":fromid, "message":incomingmessage, "sent":sent};
                    if (calledfromsend != '1') {
                        settings.timestamp=incomingid;
                    }
                    separator = ":";
                    var message = jqcc.cometchat.processcontrolmessage(incoming),
                        msg_time = jqcc.cometchat.processTimestamp(incoming.sent),
                        months_set = [];

                                            months_set.push('January');
                                                months_set.push('February');
                                                months_set.push('March');
                                                months_set.push('April');
                                                months_set.push('May');
                                                months_set.push('June');
                                                months_set.push('July');
                                                months_set.push('August');
                                                months_set.push('September');
                                                months_set.push('October');
                                                months_set.push('November');
                                                months_set.push('December');
                        
                    d = new Date(parseInt(msg_time));
                    month  = d.getMonth();
                    date  = d.getDate();
                    year = d.getFullYear();
                    msg_date_class = month+"_"+date+"_"+year;
                    msg_date = months_set[month]+" "+date+", "+year;

                    var type = 'th',
                        add_bg = '',
                        add_arrow_class = '',
                        add_style = "";//for images and smileys

                    if(date==1||date==21||date==31){
                        type = 'st';
                    }else if(date==2||date==22){
                        type = 'nd';
                    }else if(date==3||date==23){
                        type = 'rd';
                    }
                    msg_date_format = date+type+' '+months_set[month]+', '+year;

                    if(msg_date_class == today_date_class){
                        date_class = "today";
                        msg_date = "Today";
                    }else  if(msg_date_class == yday_date_class){
                        date_class = "yesterday";
                        msg_date = "Yesterday";
                    }
                    if(typeof(message) != 'undefined' && message != '') {
                        var prepend = '',
                            smileycount = (message.match(/cometchat_smiley/g) || []).length,
                            smileymsg = message.replace(/<img[^>]*>/g,"");
                        smileymsg = smileymsg.trim();

                        if(smileycount == 1 && smileymsg == '') {
                            message = message.replace('height="20"', 'height="64px"');
                            message = message.replace('width="20"', 'width="64px"');
                        }
                        if($("#cometchat_groupmessage_"+incomingid).length > 0) {
                                $("#cometchat_groupmessage_"+incomingid).find("div.cometchat_chatboxmessagecontent").html(message);
                        } else {
                            sentdata = '';
                            if(sent != null) {
                                var ts = parseInt(sent);
                                sentdata = $[calleeAPI].getTimeDisplay(ts,incomingid);
                            }
                            if(!incomingself) {
                                var avatar = jqcc.cometchat.getThemeArray('buddylistAvatar', fromid);
                                if(typeof avatar=="undefined"){
                                    avatarstofetch[fromid]=1;
                                    avatar = staticCDNUrl+'images/noavatar.png';
                                }
                                var fromavatar = '<a class="cometchat_floatL" href="'+jqcc.cometchat.getThemeArray('buddylistLink', fromid)+'"><img class="cometchat_userscontentavatarsmall cometchat_avatar_'+fromid+'" src="'+avatar+'" title="'+fromname+'"/></a>';

                                if(message.indexOf('cometchat_hw_lang')!=-1){
                                    var hw_ts = 'margin-left: 4px';
                                }

                                var sentdata_box = "<span class=\"cometchat_ts_other\" style='"+hw_ts+"'>"+sentdata+"</span>";

                                if((message.indexOf('<img')==-1 && message.indexOf('src')==-1) || (smileycount > 0 && smileymsg != '')){
                                    add_bg = 'cometchat_chatboxmessagecontent';
                                    add_arrow_class = '<div class="msgArrow"><div class="after"></div></div>';
                                }else{
                                    if(message.indexOf('cometchat_smiley')!=-1) {
                                        add_style = "margin:5px 5px 0px 8px";
                                    }else if(message.indexOf('cometchat_hw_lang')!=-1){
                                        add_style = "margin:0px 0px 0px 8px";
                                    }else{
                                        add_style = "margin:-6px 0px 0px 8px";
                                    }
                                }
                                var usernamecontent = '';
                                if (showUsername == '1') {
                                    usernamecontent = '<span class="cometchat_groupusername">'+fromname+':</span><br>';
                                }

                                if(incoming.hasOwnProperty('botid') && incoming.botid != 0) {
                                    fromavatar = '<a class="cometchat_floatL"><img class="cometchat_userscontentavatarsmall" src="'+jqcc.cometchat.getThemeArray('botlistAvatar', incoming.botid)+'" title="'+jqcc.cometchat.getThemeArray('botlistName', incoming.botid)+'"/></a>';
                                    if (showUsername == '1') {
                                        usernamecontent = '<span class="cometchat_groupusername">'+jqcc.cometchat.getThemeArray('botlistName', incoming.botid)+':</span><br>';
                                    }
                                }
                                temp += '<div class="cometchat_time cometchat_time_'+msg_date_class+' '+date_class+'" msg_format="'+msg_date_format+'">'+msg_date+'</div><div class="cometchat_chatboxmessage" id="cometchat_groupmessage_'+incomingid+'">'+fromavatar+'<div class="'+add_bg+' '+'cometchat_ts_margin cometchat_floatL" style="'+add_style+'">'+usernamecontent+'<span id="cc_groupmessage_'+incomingid+'" class="cometchat_msg">'+message+'</span></div>'+sentdata_box+''+add_arrow_class+'</div>';
                            } else {
                                var sentdata_box = "<span class=\"cometchat_ts\">"+sentdata+"</span>";
                                if((message.indexOf('<img')==-1 && message.indexOf('src')==-1) || (smileycount > 0 && smileymsg != '')){
                                    add_bg = 'cometchat_chatboxmessagecontent cometchat_self';
                                    add_arrow_class = '<div class="selfMsgArrow"><div class="after"></div></div>';
                                }else{
                                    if(message.indexOf('cometchat_smiley')!=-1) {
                                        add_style = "margin-right:13px;max-width:135px;";
                                    }else{
                                        add_style = "margin-right:4px;margin-left:4px";
                                    }
                                }
                                temp += '<div class="cometchat_time cometchat_time_'+msg_date_class+' '+date_class+'" msg_format="'+msg_date_format+'">'+msg_date+'</div><div class="cometchat_chatboxmessage" id="cometchat_groupmessage_'+incomingid+'"><div class="'+add_bg+' '+'cometchat_ts_margin cometchat_self_msg cometchat_floatR" style="'+add_style+'"><span id="cc_groupmessage_'+incomingid+'" class="cometchat_msg">'+message+'</span></div></span>'+sentdata_box+add_arrow_class+'</div><span id="cometchat_chatboxseen_'+incomingid+'">';
                            }

                            if(!$.isEmptyObject(avatarstofetch)){
                                jqcc.cometchat.getUserDetails(Object.keys(avatarstofetch),'updateView');
                            }
                            var grouppopup = $('#cometchat_group_'+chatroomid+'_popup');
                            if(incoming.hasOwnProperty('id') && incoming.hasOwnProperty('localmessageid') && $("#cometchat_groupmessage_"+incoming.localmessageid).length>0){
                                $("#cometchat_groupmessage_"+incoming.localmessageid).after(temp);
                                $("#cometchat_groupmessage_"+incoming.localmessageid).remove();
                                $("#cometchat_chatboxseen_"+incoming.localmessageid).remove();
                                var offlinemessages = jqcc.cometchat.getFromStorage('offlinemessagesqueue');
                                if(offlinemessages.hasOwnProperty(incoming.localmessageid)) {
                                    delete offlinemessages[incoming.localmessageid];
                                    jqcc.cometchat.updateToStorage('offlinemessagesqueue',offlinemessages);
                                }
                            }else{
                                grouppopup.find("#cometchat_grouptabcontenttext_"+chatroomid).append(temp);
                            }

                            if(typeof(incomingid) != 'undefined' && !jqcc.isNumeric(incomingid) &&  incomingid.indexOf('_')>-1) {
                                $("#cometchat_chatboxseen_"+incomingid).addClass('cometchat_offlinemessage');
                            }
                            if($(".cometchat_ts_margin").next().hasClass("cometchat_ts")){
                                var msg_containerHeight = $("#cometchat_groupmessage_"+incomingid+" .cometchat_ts_margin").outerHeight();
                                var cometchat_ts_margin_right = $("#cometchat_groupmessage_"+incomingid+" .cometchat_ts_margin").outerWidth(true)+3;
                                jqcc('#cometchat_groupmessage_'+incomingid).find('.cometchat_ts').css('margin-top',(msg_containerHeight-8));
                                jqcc('#cometchat_groupmessage_'+incomingid).find('.cometchat_ts').css('margin-right',cometchat_ts_margin_right);
                           }
                           if(($(".cometchat_ts_margin").next().hasClass("cometchat_ts_other")) && (cc_dir == 1)){
                                var cometchat_ts_margin_left = $("#cometchat_groupmessage_"+incomingid+" .cometchat_ts_margin").outerWidth(true)+30;
                                jqcc('#cometchat_groupmessage_'+incomingid).find('.cometchat_ts_other').css({'margin-left':cometchat_ts_margin_left});
                            }
                        }

                        if(jqcc.cometchat.getSettings().disableRecentTab == 0) {
                            var temp_msg = jqcc.cometchat.processRecentmessages(message);
                            var params = {'chatid':chatroomid,'isgroup':1,'timestamp':sent,'m':temp_msg,'msgid':incomingid,'force':0,'del':0};
                            jqcc.cometchat.updateRecentChats(params);
                        }
                    }

                    if(typeof(message) != 'undefined' && (jqcc.cometchat.getChatroomVars('owner')|| jqcc.cometchat.checkModerator(incoming.groupid) || (jqcc.cometchat.getChatroomVars('allowDelete') == 1 && incomingself))) {
                        var grouppopup = $('#cometchat_group_'+chatroomid+'_popup');
                        if(grouppopup.find("#cometchat_groupmessage_"+incomingid).find(".delete_msg").length < 1) {
                            if(incomingself){
                                cometchat_ts_class = 'cometchat_ts';
                                cometchat_ts_style = 'float:right';
                                if(message.indexOf('imagemessage mediamessage')!=-1) {
                                    cometchat_ts_style = cometchat_ts_style+';margin-top:12px';
                                }
                            }else{
                                cometchat_ts_class = 'cometchat_ts_other';
                                cometchat_ts_style = 'float:left;margin-left:-3px';
                                var cometchat_ts_other_width = $("#cometchat_groupmessage_"+incomingid+" .cometchat_ts_margin").outerWidth();
                                if(cometchat_ts_other_width >= 135){
                                    cometchat_ts_style = 'float:left;margin-left:-23px';
                                }else{
                                    if(message.indexOf('imagemessage mediamessage')!=-1) {
                                        cometchat_ts_style = 'float:left;margin-left:-6px;margin-top:10px';
                                    }else{
                                        cometchat_ts_style = 'float:left;margin-left:-3px';
                                    }
                                }
                            }
                            if(grouppopup.find("#cometchat_groupmessage_"+incomingid).find(".cometchat_ts_other").length < 1) {
                                   if((message.indexOf('<img')==-1 && message.indexOf('src')==-1) || (smileycount > 0 && smileymsg != '')){
                                    cometchat_del_style = '';
                                }else {
                                    if(message.indexOf('cometchat_smiley')!=-1) {
                                        cometchat_del_style = 'margin: 0px 0px 14px 0px';
                                    }
                                }
                            }else{
                             cometchat_del_style = '';
                        }

                            grouppopup.find('#cometchat_groupmessage_'+incomingid).find("."+cometchat_ts_class).after('<span class="delete_msg" style="'+cometchat_ts_style+';'+cometchat_del_style+';" onclick="javascript:jqcc.cometchat.confirmDelete(\''+incomingid+'\',\''+chatroomid+'\');"><img class="hoverbraces" src="'+staticCDNUrl+'layouts/docked/images/bin.svg"></span>');
                        }

                       $(".cometchat_chatboxmessage").live("mouseover",function() {
                            $(this).find(".delete_msg").css('opacity','0.7');
                            var msg_containerHeight = $(this).find(".cometchat_ts_margin").outerHeight();
                            var cometchat_ts_margin_right = $(this).find(".cometchat_ts_margin").outerWidth(true)+3;
                            $(this).find('.cometchat_ts').css('margin-top',(msg_containerHeight-8));
                            $(this).find('.cometchat_ts').css('margin-right',cometchat_ts_margin_right);
                        });
                        $(".cometchat_chatboxmessage").live("mouseout",function() {
                            $(this).find(".delete_msg").css('opacity','0');
                            var msg_containerHeight = $(this).find(".cometchat_ts_margin").outerHeight();
                            var cometchat_ts_margin_right = $(this).find(".cometchat_ts_margin").outerWidth(true)+3;
                            $(this).find('.cometchat_ts').css('margin-top',(msg_containerHeight-8));
                            $(this).find('.cometchat_ts').css('margin-right',cometchat_ts_margin_right);
                        });
                        $(".delete_msg").mouseover(function() {
                            $(this).find(".delete_msg").css('opacity','1');
                        });
                        $(".delete_msg").mouseout(function() {
                            $(this).find(".delete_msg").css('opacity','0');
                        });
                    }
                    var forced = (incomingself) ? 1 : 0;

                    $.each($("#cometchat_grouptabcontenttext_"+chatroomid+" .cometchat_prependCrMessages"),function (i,divele){
                        $("#cometchat_grouptabcontenttext_"+chatroomid+" .cometchat_prependCrMessages:first").show();
                    });

                    if (message != '' && jqcc.cometchat.getExternalVariable('lastgroupmessageid') < incoming.id){
                        if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].addMessageCounter) == "function" && !incomingself){
                            if ((typeof $.cookie(settings.cookiePrefix+"sound") == 'undefined' || $.cookie(settings.cookiePrefix+"sound") == null) || $.cookie(settings.cookiePrefix + "sound") == 'true') {
                                $[calleeAPI].playSound(0);
                            }
                            jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].addMessageCounter(incoming.groupid,1);
                        }
                    }

                    if(jqcc('#currentroom:visible').length<1){
                        var newMessagesCount = jqcc.cometchat.getChatroomVars('newMessages');
                        $('#cometchat_chatroomlist_'+jqcc.cometchat.getChatroomVars('currentroom')).find('.cometchat_chatroommsgcounttext').text(newMessagesCount);
                        if(newMessagesCount > 0){
                            $('#cometchat_chatroomlist_'+jqcc.cometchat.getChatroomVars('currentroom')).find('.cometchat_chatroommsgcount').show();
                        }
                    }

                    $[calleeAPI].updateCRReadMessages(jqcc.cometchat.getChatroomVars('currentroom'));
                    var crreadmessages = jqcc.cometchat.getFromStorage("crreadmessages");
                    jqcc.cometchat.setChatroomVars('crreadmessages',crreadmessages);
                    jqcc.crdocked.groupbyDate(chatroomid);

                    $('#cometchat_grouptabcontenttext_'+chatroomid).find('.cometchat_prependCrMessages').remove();

                    prepend = '<div class=\"cometchat_prependCrMessages\" onclick\="jqcc.crdocked.prependCrMessagesInit('+chatroomid+')\" id = \"cometchat_prependCrMessages_'+chatroomid+'\">Load Earlier Messages</div>';

                    if($('#cometchat_grouptabcontenttext_'+chatroomid+' .cometchat_prependMessages').length != 1){
                        $('#cometchat_grouptabcontenttext_'+chatroomid).prepend(prepend);
                    }

                    if(typeof(message) != 'undefined' &&  (message).indexOf('<img')!=-1 && (message).indexOf('src')!=-1){
                        $[calleeAPI].chatroomScrollDown(forced,chatroomid);
                        $( "#cometchat_groupmessage_"+incomingid+" img" ).load(function() {
                            var cometchat_ts_margin_right = $("#cometchat_groupmessage_"+incomingid+" .cometchat_ts_margin").outerWidth(true)+2;
                            jqcc('#cometchat_groupmessage_'+incomingid).find('.cometchat_ts').css({'margin-right':cometchat_ts_margin_right});
                            $[calleeAPI].chatroomScrollDown(forced,chatroomid);
                        });
                    }else{
                        $[calleeAPI].chatroomScrollDown(forced,chatroomid);
                    }
                },
                updateView: function(ids){
                    jqcc.each(ids,function(index,id){
                        var avatar = jqcc.cometchat.getThemeArray('buddylistAvatar', id);
                        if(typeof avatar != 'undefined'){
                            jqcc('.cometchat_avatar_'+id).attr('src',avatar);
                        }
                    });
                },
                updateCRReadMessages: function(id){
                    if(typeof(id) == 'object'){
                        jqcc.each(id, function(chatroomId,lastmessage) {
                            chatroomId = chatroomId.replace('_','');
                            if(typeof (jqcc.cometchat.updateToStorage)!=='undefined'){
                                var alreadycrreadmessages = jqcc.cometchat.getFromStorage('crreadmessages');
                                if((typeof(alreadycrreadmessages[chatroomId])!='undefined' && parseInt(alreadycrreadmessages[chatroomId])<parseInt(lastmessage)) || typeof(alreadycrreadmessages[chatroomId])=='undefined'){
                                    var crreadmessages = {};
                                    crreadmessages[chatroomId] = parseInt(lastmessage);
                                    jqcc.cometchat.updateToStorage('crreadmessages',crreadmessages);
                                    jqcc.cometchat.setChatroomVars('crreadmessages',jqcc.cometchat.getFromStorage("crreadmessages"));
                                }
                            }
                        });
                    } else {
                        if($('#currentroom_convotext').find('.cometchat_chatboxmessage:last').length){
                            if(id == 0){ return; }
                            if(typeof (jqcc.cometchat.updateToStorage)!=='undefined'){
                                var alreadycrreadmessages = jqcc.cometchat.getFromStorage('crreadmessages');
                                var lastid = parseInt($('#currentroom_convotext').find('.cometchat_chatboxmessage:last').attr('id').replace('cometchat_groupmessage_',''));
                                if((typeof(alreadycrreadmessages[id])!='undefined' && parseInt(alreadycrreadmessages[id])<parseInt(lastid)) || typeof(alreadycrreadmessages[id])=='undefined'){
                                    var crreadmessages = {};
                                    crreadmessages[id] = parseInt(lastid);
                                    jqcc.cometchat.updateToStorage('crreadmessages',crreadmessages);
                                    jqcc.cometchat.setChatroomVars('crreadmessages',jqcc.cometchat.getFromStorage("crreadmessages"));
                                }
                            }
                        }
                    }
                },
                updateCRReceivedUnreadMessages: function(id,lastid){

                },
                chatroomBoxKeyup: function(event,chatboxtextarea,id) {
                },
                chatroomBoxKeydown: function(event,chatboxtextarea,id) {
                    jqcc.cometchat.chatroomBoxKeydown(event,chatboxtextarea,id);
                },
                hidetabs: function() {
                },
                loadLobby: function() {
                },
                crcheckDropDown: function(dropdown) {
                    var id = dropdown.selectedIndex;
                    if(id == 1) {
                        $('div.password_hide').css('display','block');
                    } else {
                        $('div.password_hide').css('display','none');
                    }
                },
                loadRoom: function(clicked,id,minimized,unreadmsgcount) {
                    var roomname = jqcc.cometchat.getChatroomVars('currentroomname');
                    var roomno = jqcc.cometchat.getChatroomVars('currentroom');
                    var messageCounter = '0';
                    var room_no = '_'+roomno;
                    var userid = parseInt(settings.myid);
                    if(typeof(id) != "undefined"){
                        roomno = id;
                    }
                    var openChatrooms = jqcc.cometchat.getChatroomVars('chatroomsOpened');
                    if(openChatrooms[roomno]!=null){
                        if($('#cometchat_unseenUsers').find('#cometchat_group_'+id).length != 0) {
                            uid = 'cometchat_group_'+id;
                            jqcc.docked.swapTab(uid,1);
                        }else if($("#cometchat_group_"+id+"_popup").hasClass('cometchat_tabhidden')){
                            $("#cometchat_group_"+id).click();
                        }

                        return;
                    }

                    var widthavailable = (jqcc(window).width() - jqcc('#cometchat_chatboxes').outerWidth() - chatboxWidth - chatboxDistance);

                    if(widthavailable < (chatboxWidth+chatboxWidth)){
                        jqcc.docked.rearrange(1);
                    }else{
                        $('#cometchat_chatboxes_wide').width($('#cometchat_chatboxes_wide').width()+chatboxWidth+chatboxDistance);
                        $('#cometchat_chatboxes').css(jqcc.cometchat.getThemeVariable('dockedAlignment'),$('#cometchat_userstab').outerWidth(true)+'px');
                    }

                    $('.cometchat_prependMessages_container > .cometchat_prependCrMessages').text("Load Earlier Messages");
                    $('.cometchat_prependMessages_container > .cometchat_prependCrMessages').attr('onclick','jqcc.docked.prependCrMessagesInit('+roomno+')');
                    /*$("#cometchat_group_"+roomno+"_popup").find('#cometchat_grouptabcontenttext_'+roomno).attr('onscroll','jqcc.crdocked.chatScroll('+roomno+')');*/

                    var cometchat_chatboxes = $("#cometchat_chatboxes");
                    var chatBoxInlineCss = {'margin-right':chatboxDistance+'px','width':chatboxWidth+'px'};
                    if(jqcc.cometchat.getSettings().dockedAlignToLeft == 1){
                        chatBoxInlineCss = {'margin-left':chatboxDistance+'px','width':chatboxWidth+'px'};
                    }
                    $("<span/>").attr("id", "cometchat_group_"+roomno).attr("amount", 0).attr("groupid", roomno).addClass("cometchat_tab").addClass('cometchat_tabopen_bottom').css(chatBoxInlineCss).html('<div class="cometchat_groupname" style="margin-left:4px;">'+roomname+'</div><div class="cometchat_closebox cometchat_tooltip" title="Close Tab" id="cometchat_groupclosebox_bottom_'+roomno+'" style="margin-right:5px;"></div><div class="cometchat_unreadCount cometchat_floatR" style="display:none;"></div>').prependTo($("#cometchat_chatboxes_wide"));

                    var plugins = jqcc.cometchat.getChatroomVars('plugins');
                    var pluginslength = plugins.length;
                    var pluginstophtml = '';
                    var pluginsbottomhtml='';
                    var avchathtml = '';
                    var audiochathtml = '';
                    var smiliehtml = '';

                    pluginstophtml += '<div class="cometchat_pluginstop">';

                    pluginstophtml += '<div class="cometchat_plugins_dropdownlist" name="viewusers" to="'+roomno+'" chatroommode="1" title=\'View Members\' ><div class="cometchat_plugins_name cometchat_floatL">View Members</div></div>';

                    pluginstophtml += '<div class="cometchat_plugins_dropdownlist" name="inviteusers" to="'+roomno+'" chatroommode="1" title="Add Members" ><div class="cometchat_plugins_name cometchat_floatL">Add Members</div></div>';

                    if(jqcc.cometchat.checkModerator(roomno) || jqcc.cometchat.getChatroomVars('owner')){
                        pluginstophtml += '<div class="cometchat_plugins_dropdownlist" name="unbanusers" to="'+roomno+'" chatroommode="1" title="Unban Members" ><div class="cometchat_plugins_name cometchat_floatL">Unban Members</div></div>';
                    }

                    pluginstophtml += '<div class="cometchat_plugins_dropdownlist" name="leavegroup" to="'+roomno+'" chatroommode="1" title="Leave Group" ><div class="cometchat_plugins_name cometchat_floatL">Leave Group</div></div>';

                    if(pluginslength>0){
                        pluginsbottomhtml += '<div class="cometchat_pluginsbottom">';
                        for(var i = 0; i<pluginslength; i++){
                            if(mobileDevice && (plugins[i]=='transliterate' || plugins[i]=='screenshare')) {
                                continue;
                            }

                            var name = 'cc'+plugins[i];
                            if(typeof ($[name])=='object'){
                                 if(plugins[i]=='avchat') {
                                    if(mobileDevice){
                                        pluginsbottomhtml += '<div class="cometchat_plugins_openuplist" name="'+name+'" to="'+roomno+'" chatroommode="1" title="'+$[name].getTitle()+'" ><div class="cometchat_plugins_name cometchat_floatL">'+$[name].getTitle()+'</div></div>';
                                    } else {
                                        avchathtml = '<div id="cometchat_'+plugins[i]+'_'+roomno+'" class="cometchat_tooltip cometchat_tabicons cometchat_'+plugins[i]+'" name="'+name+'" to="'+roomno+'" chatroommode="1" title="'+$[name].getTitle()+'"></div>';
                                    }
                                } else if(plugins[i]=='audiochat') {
                                    if(mobileDevice){
                                        pluginsbottomhtml += '<div class="cometchat_plugins_openuplist" name="'+name+'" to="'+roomno+'" chatroommode="1" title="'+$[name].getTitle()+'" ><div class="cometchat_plugins_name cometchat_floatL">'+$[name].getTitle()+'</div></div>';
                                    } else {
                                        audiochathtml = '<div id="cometchat_'+plugins[i]+'_'+roomno+'" class="cometchat_tooltip cometchat_tabicons cometchat_'+plugins[i]+'" name="'+name+'" to="'+roomno+'" chatroommode="1" title="'+$[name].getTitle()+'"></div>';
                                    }
                                } else if(plugins[i]=='smilies') {
                                    smiliehtml = '<div class="cometchat_'+plugins[i]+'" name="'+name+'" to="'+roomno+'" chatroommode="1" title="'+$[name].getTitle()+'"></div>';
                                } else if(plugins[i]=='clearconversation' || plugins[i]=='report' || plugins[i]=='chathistory' || plugins[i]=='block' || plugins[i]=='save' || plugins[i]=='style'){
                                    pluginstophtml += '<div class="cometchat_plugins_dropdownlist" name="'+name+'" to="'+roomno+'" chatroommode="1" title="'+$[name].getTitle()+'" ><div class="cometchat_plugins_name cometchat_floatL">'+$[name].getTitle()+'</div></div>';
                                }else{
                                    pluginsbottomhtml += '<div class="cometchat_plugins_openuplist" name="'+name+'" to="'+roomno+'" chatroommode="1" title="'+$[name].getTitle()+'" ><div class="cometchat_plugins_name cometchat_floatL">'+$[name].getTitle()+'</div></div>';
                                }
                            }
                        }
                        pluginsbottomhtml += '</div>';
                    }

                    pluginstophtml += '</div>';

                    if(typeof(minimized)=="undefined" || minimized == ''){
                        minimized = 1;
                    }
                    var tabstateclass = (minimized == 2)?'tabhidden':'tabopen';
                    var plugins_openup_css = '';
                    var inner_container_margin = '';
                    var send_message_box = '';
                    var cctextarea_width = '';
                    if(pluginsbottomhtml=='<div class="cometchat_pluginsbottom"></div>') {
                        plugins_openup_css = 'display:none';
                        inner_container_margin = 'margin-left:0px !important';
                    }

                    var prepend = '';
                    prepend = '<div class=\"cometchat_prependCrMessages\" onclick\="jqcc.crdocked.prependCrMessagesInit('+roomno+')\" id = \"cometchat_prependCrMessages_'+roomno+'\">Load Earlier Messages</div>';

                    if(mobileDevice){
                        cctextarea_width = "width:140px !important";
                        send_message_box = '<div id="cometchat_sendmessagebtn"></div>';
                    }else{
                        cctextarea_width = "";
                    }

                    var plugin_divider = '<div class="cometchat_vline"></div>';
                    if (audiochathtml == '' && avchathtml == '') {
                        plugin_divider = '';
                    }
                    $("<div/>").attr("id", "cometchat_group_"+roomno+"_popup").addClass("cometchat_tabpopup").addClass('cometchat_'+tabstateclass).html('<div class="cometchat_tabtitle"><div class="cometchat_primarytabtitle"><div class="cometchat_groupname" title="'+roomname+'">'+roomname+'</div><div id="cometchat_groupclosebox_'+roomno+'" title="Close Tab" class="cometchat_closebox cometchat_floatR cometchat_tooltip"></div>'+plugin_divider+audiochathtml+avchathtml+'<div class="cometchat_plugins_dropdown cometchat_floatL"><div class="cometchat_plugins_dropdown_icon cometchat_tooltip" id="cometchat_groupplugins_dropdown_icon_'+roomno+'" title="Options"></div><div class="cometchat_popup_plugins">'+pluginstophtml+'</div></div></div><div class="cometchat_secondarytabtitle cometchat_tabhidden"></div></div><div class="cometchat_tabcontent"><div class="cometchat_messagElement" id="cc_cr_'+roomno+'"></div><div class="cometchat_primarytabcontent"><div class="cometchat_tabcontenttext" id="cometchat_grouptabcontenttext_'+roomno+'" onscroll="jqcc.crdocked.chatScroll(\''+roomno+'\');"></div><div class="cometchat_tabcontentinput"><div class="cometchat_plugins_openup cometchat_floatL"><div class="cometchat_plugins_openup_icon cometchat_tooltip" id="cometchat_groupplugins_openup_icon_'+roomno+'" title="Options"></div><div class="cometchat_popup_convo_plugins">'+pluginsbottomhtml+'</div></div><div class="cometchat_inner_container"><textarea class="cometchat_textarea" style="'+cctextarea_width+'"; placeholder="Type your message"></textarea>'+send_message_box+smiliehtml+'</div></div></div><div class="cometchat_secondaryviewuserscontent cometchat_tabhidden"></div><div class="cometchat_secondaryinviteuserscontent cometchat_tabhidden"></div></div>').appendTo($('#cometchat_group_'+roomno));

                    openChatrooms[roomno] = 1;
                    jqcc.cometchat.setChatroomVars('chatroomsOpened',openChatrooms);

                    var chatboxcontentheight = $('#cometchat_chatboxes').find('.cometchat_tabcontent .cometchat_tabcontenttext').height();

                    var cometchat_group_popup = $("#cometchat_group_"+roomno+"_popup");
                    var cometchat_group_popup1 = document.getElementById("cometchat_group_"+roomno+"_popup");

                    cometchat_group_popup.find('.cometchat_tabcontenttext').click(function(){
                        if(cometchat_group_popup.find(".cometchat_tabcontent .cometchat_chatboxpopup_"+roomno).length){
                            closeChatboxCCPopup(roomno,1);
                        }
                    });

                    var cometchat_group_id = $("#cometchat_group_"+roomno);

                    if(!cometchat_group_popup.find('cometchat_uploadfile_'+roomno).length) {
                        var uploadf = document.createElement("INPUT");
                        uploadf.setAttribute("type", "file");
                        uploadf.setAttribute("class", "cometchat_fileupload");
                        uploadf.setAttribute("id", 'cometchat_uploadfile_'+roomno);
                        uploadf.setAttribute("name", "Filedata");
                        uploadf.setAttribute("multiple", "true");
                        cometchat_group_popup.find(".cometchat_tabcontent").append(uploadf);
                        uploadf.addEventListener("change", jqcc.ccfiletransfer.FileSelectHandler(cometchat_group_popup.find('.cometchat_tabcontent'),roomno,1), false);
                    }

                    /*var xhr = new XMLHttpRequest();
                    if(xhr.upload) {
                        cometchat_group_popup1.addEventListener("dragover", jqcc.ccfiletransfer.FileDragHover(), false);
                        cometchat_group_popup1.addEventListener("dragleave", jqcc.ccfiletransfer.FileDragHover(), false);
                        cometchat_group_popup1.addEventListener("drop", jqcc.ccfiletransfer.FileSelectHandler(cometchat_group_popup.find('.cometchat_tabcontent'),roomno,1), false);
                    }*/

                    cometchat_group_popup.find('.cometchat_plugins_dropdown').click(function(e){
                        e.stopImmediatePropagation();
                        if(cometchat_group_popup.find(".cometchat_tabcontent .cometchat_chatboxpopup_"+roomno).length){
                            closeChatboxCCPopup(roomno,1);
                        }
                        if(cometchat_group_popup.find('.cometchat_plugins_openup').hasClass('cometchat_plugins_openup_active')) {
                            cometchat_group_popup.find('.cometchat_plugins_openup').toggleClass('cometchat_plugins_openup_active').find('div.cometchat_popup_convo_plugins').slideToggle('fast');
                            if($(this).hasClass('cometchat_plugins_openup_active')){
                               cometchat_group_popup.find('#cometchat_groupplugins_openup_icon_'+roomno).addClass('cometchat_pluginsopenup_arrowrotate');
                            } else {
                               cometchat_group_popup.find('#cometchat_groupplugins_openup_icon_'+roomno).removeClass('cometchat_pluginsopenup_arrowrotate');
                            }
                        }
                        $(this).toggleClass('cometchat_plugins_dropdown_active').find('div.cometchat_popup_plugins').slideToggle('fast');

                        if($(this).hasClass('cometchat_plugins_dropdown_active')){
                            cometchat_group_popup.find('#cometchat_groupplugins_dropdown_icon_'+roomno).addClass('cometchat_pluginsdropdown_arrowrotate');
                        } else {
                            cometchat_group_popup.find('#cometchat_groupplugins_dropdown_icon_'+roomno).removeClass('cometchat_pluginsdropdown_arrowrotate');
                        }
                        if(jqcc().slimScroll){
                            var cometchat_slimscroll_height = cometchat_group_popup.find('.cometchat_pluginstop').height();
                            var cometchat_slimscroll_width = cometchat_group_popup.find('.cometchat_pluginstop').width();
                            cometchat_group_popup.find('.cometchat_pluginstop').slimScroll({height: (cometchat_slimscroll_height)+'px', width: (cometchat_slimscroll_width)+'px'});
                            cometchat_group_popup.find('.cometchat_popup_plugins').find('.slimScrollDiv').css({'box-shadow': '0px 5px 8px -3px #D1D1D1'});
                        }
                    });

                    cometchat_group_popup.find('.cometchat_plugins_openup').click(function(){
                        if(cometchat_group_popup.find(".cometchat_tabcontent .cometchat_chatboxpopup_"+roomno).length){
                            closeChatboxCCPopup(roomno,1);
                        } else {
                            if(cometchat_group_popup.find('.cometchat_plugins_dropdown').hasClass('cometchat_plugins_dropdown_active')) {
                            cometchat_group_popup.find('.cometchat_plugins_dropdown').toggleClass('cometchat_plugins_dropdown_active').find('div.cometchat_popup_plugins').slideToggle('fast');
                                if($(this).hasClass('cometchat_plugins_dropdown_active')){
                                    cometchat_group_popup.find('#cometchat_groupplugins_dropdown_icon_'+roomno).addClass('cometchat_pluginsdropdown_arrowrotate');
                                } else {
                                    cometchat_group_popup.find('#cometchat_groupplugins_dropdown_icon_'+roomno).removeClass('cometchat_pluginsdropdown_arrowrotate');
                                }
                            }
                            $(this).toggleClass('cometchat_plugins_openup_active').find('div.cometchat_popup_convo_plugins').slideToggle('fast');
                            if($(this).hasClass('cometchat_plugins_openup_active')){
                               cometchat_group_popup.find('#cometchat_groupplugins_openup_icon_'+roomno).addClass('cometchat_pluginsopenup_arrowrotate');
                            } else {
                               cometchat_group_popup.find('#cometchat_groupplugins_openup_icon_'+roomno).removeClass('cometchat_pluginsopenup_arrowrotate');
                            }
                        }
                        if(mobileDevice){
                            cometchat_group_popup.find('.cometchat_pluginsbottom').css('overflow-y','auto');
                        }else if(jqcc().slimScroll){
                            var cometchat_slimscroll_height = cometchat_group_popup.find('.cometchat_pluginsbottom').height();
                            var cometchat_slimscroll_width = cometchat_group_popup.find('.cometchat_pluginsbottom').width();
                            if(cometchat_group_popup.find('.cometchat_pluginsbottom').parent().hasClass('slimScrollDiv')){
                                cometchat_group_popup.find('.cometchat_popup_convo_plugins').find("div.slimScrollDiv").css('height', (cometchat_slimscroll_height+1)+'px');
                                cometchat_group_popup.find('.cometchat_popup_convo_plugins').find("div.slimScrollDiv").css('width', (cometchat_slimscroll_width+1)+'px');
                            }else{
                                cometchat_group_popup.find('.cometchat_pluginsbottom').slimScroll({height: (cometchat_slimscroll_height+1)+'px', width: (cometchat_slimscroll_width+1)+'px'});
                            }
                            var scrolltop_height = parseInt(285 - cometchat_slimscroll_height);
                            cometchat_group_popup.find('.cometchat_popup_convo_plugins').find('.slimScrollDiv').css({'top':scrolltop_height,'box-shadow': '0px -4px 10px -3px #d1d1d1'});
                        }
                    });

                    cometchat_group_popup.find('.cometchat_plugins_openuplist, .cometchat_plugins_dropdownlist, .cometchat_smilies, .cometchat_avchat, .cometchat_audiochat').click(function(e){
                        e.stopImmediatePropagation();
                        var name = $(this).attr('name');
                        var to = $(this).attr('to');
                        var chatroommode = $(this).attr('chatroommode');
                        var controlparameters = {"to":to, "chatroommode":chatroommode, "roomname":roomname};
                        if(cometchat_group_popup.find('.cometchat_plugins_openup').hasClass('cometchat_plugins_openup_active')){
                            cometchat_group_popup.find('.cometchat_plugins_openup').toggleClass('cometchat_plugins_openup_active').find('div.cometchat_popup_convo_plugins').slideToggle('fast');
                            if($(this).hasClass('cometchat_plugins_openup_active')){
                               cometchat_group_popup.find('#cometchat_groupplugins_openup_icon_'+roomno).addClass('cometchat_pluginsopenup_arrowrotate');
                            } else {
                               cometchat_group_popup.find('#cometchat_groupplugins_openup_icon_'+roomno).removeClass('cometchat_pluginsopenup_arrowrotate');
                            }
                        }
                        if(cometchat_group_popup.find('.cometchat_plugins_dropdown').hasClass('cometchat_plugins_dropdown_active')){
                            cometchat_group_popup.find('.cometchat_plugins_dropdown').toggleClass('cometchat_plugins_dropdown_active').find('div.cometchat_popup_plugins').slideToggle('fast');
                            if($(this).hasClass('cometchat_plugins_dropdown_active')){
                                cometchat_group_popup.find('#cometchat_groupplugins_dropdown_icon_'+roomno).addClass('cometchat_pluginsdropdown_arrowrotate');
                            } else {
                                cometchat_group_popup.find('#cometchat_groupplugins_dropdown_icon_'+roomno).removeClass('cometchat_pluginsdropdown_arrowrotate');
                            }
                        }
                        if(name == "viewusers"){
                            jqcc.cometchat.getGroupUsers(to);
                            jqcc.docked.viewGroupUsers(to);
                        } else if(name == "inviteusers"){
                            jqcc.docked.inviteGroupUsers(to);
                        } else if(name == "unbanusers"){
                            jqcc.docked.unbanGroupUsers(to);
                        } else if(name == "leavegroup"){
                            jqcc.cometchat.leaveChatroom(to);
                        } else {
                            jqcc[name].init(controlparameters);
                        }
                    });

                    cometchat_group_id.find('.cometchat_closebox').click(function(e){
                        e.stopImmediatePropagation();
                        jqcc.crdocked.closeChatroom(roomno);
                    });

                    cometchat_group_popup.find('.cometchat_tabtitle').click(function(e){
                        e.stopImmediatePropagation();
                        cometchat_group_id.find(cometchat_group_popup).removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                        jqcc.cometchat.updateChatBoxState({id:roomno,g:1,s:2});
                    });

                    cometchat_group_id.click(function(e){
                        cometchat_group_id.find(cometchat_group_popup).removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                        $.each($('#cometchat_group_'+id+'_popup .cometchat_chatboxmessage'),function (i,divele){
                            if($(this).find(".cometchat_ts_margin").next().hasClass("cometchat_ts")){
                                var msg_containerHeight = $(this).find(".cometchat_ts_margin").outerHeight();
                                var cometchat_ts_margin_right = $(this).find(".cometchat_ts_margin").outerWidth(true)+3;
                                jqcc(this).find('.cometchat_ts').css('margin-top',(msg_containerHeight-8));
                                jqcc(this).find('.cometchat_ts').css('margin-right',cometchat_ts_margin_right);
                            }
                        });
                        jqcc.cometchat.updateChatBoxState({id:roomno,g:1,s:1,c:0});
                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].addMessageCounter(roomno);
                    });

                    var cometchat_grouptextarea = cometchat_group_popup.find("textarea.cometchat_textarea");
                    cometchat_grouptextarea.keydown(function(event){
                        jqcc.crdocked.resizeCrinputTextarea(cometchat_group_popup,this,roomno,event);
                        return jqcc.docked.chatroomBoxKeydown(event, this, roomno);
                    });
                    cometchat_grouptextarea.keyup(function(event){
                        jqcc.crdocked.resizeCrinputTextarea(cometchat_group_popup,this,roomno,event);
                        return jqcc.docked.chatroomBoxKeyup(event, this, roomno);
                    });

                    jqcc('#cometchat_sendmessagebtn').click(function(e){
                        var message = cometchat_grouptextarea.val();
                        var basedata = jqcc.cometchat.getBaseData();
                        message = message.replace(/^\s+|\s+$/g, "");
                        jqcc.cometchat.sendmessageProcess(message, roomno, basedata);
                        cometchat_grouptextarea.val('');
                        cometchat_grouptextarea.addClass('cometchat_placeholder');
                        $(cometchat_grouptextarea).attr('style', 'height: 15px !important;width:140px !important;');
                        cometchat_group_popup.find('.cometchat_inner_container').height(20);
                        if(cometchat_group_popup.find('.cometchat_tabcontent .cometchat_chatboxpopup_'+roomno).length == 0){
                            cometchat_group_popup.find('.cometchat_tabcontenttext').height(285);
                        }else{
                            var iframe_name = jqcc('.cometchat_iframe').attr('id');
                            var default_height = 0;
                            if (iframe_name == 'cometchat_trayicon_smilies_iframe'){
                                default_height = 108;
                            }else if(iframe_name == 'cometchat_trayicon_stickers_iframe'){
                                default_height = 102;
                            }else if(iframe_name == 'cometchat_trayicon_handwrite_iframe'){
                                default_height = 143;
                            }
                            if(default_height!=0){
                                if(iframe_name == 'cometchat_trayicon_smilies_iframe') {
                                    var paramstoresizeIframe = {
                                        type:"plugin",
                                        name:"smilies",
                                        method: 'resizeContainerbody',
                                        params:{
                                            height:default_height
                                        }
                                    };
                                    cometchat_group_popup.find('.cometchat_iframe')[0].contentWindow.postMessage('CC^CONTROL_'+JSON.stringify(paramstoresizeIframe),'*');
                                }else{
                                    cometchat_group_popup.find('.cometchat_iframe').height(default_height);////143 is the default height of sketch popup
                                }
                            }
                        }
                    });

                    if(cometchat_group_popup.find(".cometchat_prependCrMessages").length == 0){
                        cometchat_group_popup.find('#cometchat_grouptabcontenttext_'+roomno).append(prepend);
                        $('#cometchat_grouptabcontenttext_'+roomno).find(".cometchat_prependCrMessages").css("display","block");
                    }

                    var extension_set = jqcc.cometchat.getSettings().extensions;
                    var extensions_array = [];
                    extensions_array.push(extension_set);

                    if(extensions_array[0].indexOf('ads') > -1){
                        jqcc.ccads.init(roomno,1);
                    }
                    if(typeof(jqcc.cometchat.checkInternetConnection) && !jqcc.cometchat.checkInternetConnection()) {
                        jqcc.docked.noInternetConnection(true);
                    }
                    jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].addMessageCounter(id);
                },
                resizeCrinputTextarea: function(cometchat_group_popup,chatboxtextarea,id,event){
                    var forced = 1;
                    var difference = $(chatboxtextarea).innerHeight() - $(chatboxtextarea).height();
                    var cctabcontenttext_resize = '';
                    var container_height = cometchat_group_popup.find('.cometchat_inner_container').outerHeight();
                    if ($(chatboxtextarea).innerHeight < chatboxtextarea.scrollHeight ) {
                    } else if(event.keyCode != 13) {
                        if($(chatboxtextarea).height() < 50 || event.keyCode == 8) {
                            if(mobileDevice){
                                $(chatboxtextarea).attr('style', 'height: 15px !important;width:140px !important;');
                            }else{
                                $(chatboxtextarea).attr('style', 'height: 15px !important;width:165px !important;');
                            }
                            cometchat_group_popup.find('.cometchat_inner_container').height(20);
                            if(chatboxtextarea.scrollHeight - difference >= 47){
                                if(mobileDevice){
                                    $(chatboxtextarea).attr('style', 'height: 50px !important;width:140px !important');
                                cometchat_group_popup.find('.cometchat_inner_container').height((chatboxtextarea.scrollHeight - difference) + 12);
                                    $(chatboxtextarea).css('overflow-y','auto');
                                }else{
                                    $(chatboxtextarea).slimScroll({scroll: '1'});
                                    $(chatboxtextarea).attr('style', 'height: 50px !important;width:161px !important');
                                    cometchat_group_popup.find('.cometchat_inner_container').height((chatboxtextarea.scrollHeight - difference) + 12);
                                    cometchat_group_popup.find('.cometchat_inner_container .slimScrollDiv').css({'float':'left','width':'172px'});
                                    var cometchatInputval = $(chatboxtextarea).val();
                                    $(chatboxtextarea).focus().val("").val(cometchatInputval);
                                }
                                $(chatboxtextarea).focus();
                                cometchat_group_popup.find('.cometchat_inner_container').height(56);
                            }else if(chatboxtextarea.scrollHeight - difference>20){
                                if(mobileDevice){
                                    $(chatboxtextarea).attr('style', 'height: '+(chatboxtextarea.scrollHeight - difference)+'px !important;width:140px !important;');
                                }else{
                                    $(chatboxtextarea).attr('style', 'height: '+(chatboxtextarea.scrollHeight - difference)+'px !important;width:165px !important;');
                                }

                                cometchat_group_popup.find('.cometchat_inner_container').height((chatboxtextarea.scrollHeight - difference) + 7);
                            }
                            var newcontainerheight = cometchat_group_popup.find('.cometchat_inner_container').outerHeight();
                            if(container_height!=(newcontainerheight)){
                               cctabcontenttext_resize = (cometchat_group_popup.find('.cometchat_tabcontent').height() - cometchat_group_popup.find('.cometchat_inner_container').height() - 10);
                                if(cometchat_group_popup.find('.cometchat_tabcontent .cometchat_chatboxpopup_'+id).length == 0){
                                    cometchat_group_popup.find('.cometchat_tabcontenttext').height(cctabcontenttext_resize - 1);
                                    if($('#cometchat_grouptabcontenttext_'+id).parent().hasClass('slimScrollDiv') == true){
                                        $('#cometchat_grouptabcontenttext_'+id).parent().height(cctabcontenttext_resize - 1);
                                    }
                                    $[calleeAPI].chatroomScrollDown(forced,id);
                                }else{
                                    var iframe_name = jqcc('.cometchat_iframe').attr('id');
                                    var default_height = 0;//default height of sketch popup
                                    if (iframe_name == 'cometchat_trayicon_smilies_iframe'){
                                        default_height = 108;
                                    }else if(iframe_name == 'cometchat_trayicon_stickers_iframe'){
                                        default_height = 102;
                                    }else if(iframe_name == 'cometchat_trayicon_handwrite_iframe'){
                                        default_height = 143;
                                    }
                                    if(default_height!=0){
                                        var new_height = (cometchat_group_popup.find('.cometchat_tabcontentinput').height()-22);
                                        if(iframe_name == 'cometchat_trayicon_smilies_iframe') {
                                            var paramstoresizeIframe = {
                                                type:"plugin",
                                                name:"smilies",
                                                method: 'resizeContainerbody',
                                                params:{
                                                    height:default_height-new_height
                                                }
                                            };
                                            cometchat_group_popup.find('.cometchat_iframe')[0].contentWindow.postMessage('CC^CONTROL_'+JSON.stringify(paramstoresizeIframe),'*');
                                        }else{
                                            cometchat_group_popup.find('.cometchat_iframe').height(default_height-new_height);
                                        }
                                    }
                                }
                                var inputheight = cometchat_group_popup.find('.cometchat_tabcontentinput').outerHeight();
                                cometchat_group_popup.find('.cometchat_popup_convo_plugins').css('bottom',inputheight);
                                var scrolltop_height = parseInt(cometchat_group_popup.find('.cometchat_popup_convo_plugins').outerHeight() - cometchat_group_popup.find('.cometchat_pluginsbottom').outerHeight());
                                cometchat_group_popup.find('.cometchat_popup_convo_plugins').find('.slimScrollDiv').css({'top':scrolltop_height});
                            }
                        }
                    }else{
                        if(mobileDevice){
                            $(chatboxtextarea).attr('style', 'height: 15px !important;width:140px !important;');
                        }else{
                            $(chatboxtextarea).attr('style', 'height: 15px !important;width:165px !important;');
                        }
                        cometchat_group_popup.find('.cometchat_inner_container').height(20);
                        if(cometchat_group_popup.find('.cometchat_tabcontent .cometchat_chatboxpopup_'+id).length == 0){
                            cometchat_group_popup.find('.cometchat_tabcontenttext').height(chatboxHeight - 75);
                           if($('#cometchat_grouptabcontenttext_'+id).parent().hasClass('slimScrollDiv') == true){
                                $('#cometchat_grouptabcontenttext_'+id).parent().height(chatboxHeight - 75);
                            }
                            $[calleeAPI].chatroomScrollDown(forced,id);
                        }else{
                            var iframe_name = jqcc('.cometchat_iframe').attr('id');
                            var default_height = 0;
                            if (iframe_name == 'cometchat_trayicon_smilies_iframe'){
                                default_height = 108;
                            }else if(iframe_name == 'cometchat_trayicon_stickers_iframe'){
                                default_height = 102;
                            }else if(iframe_name == 'cometchat_trayicon_handwrite_iframe'){
                                default_height = 143;
                            }
                            if(default_height!=0){
                                if(iframe_name == 'cometchat_trayicon_smilies_iframe') {
                                    var paramstoresizeIframe = {
                                        type:"plugin",
                                        name:"smilies",
                                        method: 'resizeContainerbody',
                                        params:{
                                            height:default_height
                                        }
                                    };
                                    cometchat_group_popup.find('.cometchat_iframe')[0].contentWindow.postMessage('CC^CONTROL_'+JSON.stringify(paramstoresizeIframe),'*');
                                }else{
                                    cometchat_group_popup.find('.cometchat_iframe').height(default_height);////143 is the default height of sketch popup
                                }
                            }
                        }
                        cometchat_group_popup.find('.cometchat_popup_convo_plugins').css('bottom',29);
                        var scrolltop_height = parseInt(cometchat_group_popup.find('.cometchat_popup_convo_plugins').outerHeight() - cometchat_group_popup.find('.cometchat_pluginsbottom').outerHeight());
                        cometchat_group_popup.find('.cometchat_popup_convo_plugins').find('.slimScrollDiv').css({'top':scrolltop_height});
                    }
                },
                viewGroupUsers: function(groupid) {
                    var cometchat_group_popup = $("#cometchat_group_"+groupid+"_popup");
                    var tabtitle_content = '<div class="cometchat_backbutton_viewgroupuserspopup"></div><div class="cometchat_userstabtitletext" style="width: 80%;text-align: center;">Group Members</div>';

                    cometchat_group_popup.find('div.cometchat_tabtitle .cometchat_secondarytabtitle').html(tabtitle_content);
                    cometchat_group_popup.find('div.cometchat_tabtitle .cometchat_primarytabtitle').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                    cometchat_group_popup.find('div.cometchat_tabtitle .cometchat_secondarytabtitle').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                    cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_primarytabcontent').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                    cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_secondaryviewuserscontent').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');

                    cometchat_group_popup.find('div.cometchat_tabtitle .cometchat_secondarytabtitle .cometchat_backbutton_viewgroupuserspopup').click(function(e){
                        e.stopImmediatePropagation();
                        cometchat_group_popup.find('div.cometchat_tabtitle .cometchat_secondarytabtitle').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                        cometchat_group_popup.find('div.cometchat_tabtitle .cometchat_primarytabtitle').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                        cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_secondaryviewuserscontent').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                        cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_primarytabcontent').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                    });

                },
                inviteGroupUsers: function(groupid,groupdetails) {
                    var baseurl = jqcc.cometchat.getBaseUrl();
                    var basedata = jqcc.cometchat.getBaseData();
                    if(typeof(groupdetails)=='undefined') {
                        jqcc.cometchat.getChatroomDetails({id:groupid,force:1,callback:'inviteGroupUsers'});
                    }else {

                        var roompass = '';
                        if(groupdetails.hasOwnProperty('i')){
                            roompass = groupdetails.i;
                        }else if(groupdetails.hasOwnProperty('password')){
                             roompass = groupdetails.password;
                        }
                        var roomname = b2a(groupdetails.name);
                        var url = baseurl+'modules/chatrooms/chatrooms.php?action=invite&roomid='+groupid+'&inviteid='+roompass+'&basedata='+basedata+'&roomname='+roomname;

                        var cometchat_group_popup = $("#cometchat_group_"+groupid+"_popup");
                        var tabtitle_content = '<div class="cometchat_backbutton_viewgroupuserspopup"></div><div class="cometchat_userstabtitletext" style="width: 80%;text-align: center;">Add Members</div>';

                        var inviteuser_content = '<div><iframe id="cometchat_inviteusers_iframe" src="'+url+'" height="316" width="100%" style="border:0px;"></div>';

                        cometchat_group_popup.find('div.cometchat_tabtitle .cometchat_secondarytabtitle').html(tabtitle_content);
                        cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_secondaryinviteuserscontent').html(inviteuser_content);
                        cometchat_group_popup.find('div.cometchat_tabtitle .cometchat_primarytabtitle').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                        cometchat_group_popup.find('div.cometchat_tabtitle .cometchat_secondarytabtitle').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                        cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_primarytabcontent').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                        cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_secondaryinviteuserscontent').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');

                        cometchat_group_popup.find('div.cometchat_tabtitle .cometchat_secondarytabtitle .cometchat_backbutton_viewgroupuserspopup').click(function(e){
                            e.stopImmediatePropagation();
                            cometchat_group_popup.find('div.cometchat_tabtitle .cometchat_secondarytabtitle').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                            cometchat_group_popup.find('div.cometchat_tabtitle .cometchat_primarytabtitle').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                            cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_secondaryinviteuserscontent').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                            cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_primarytabcontent').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                        });
                    }
                },
                unbanGroupUsers: function(groupid,groupdetails) {
                    var baseurl = jqcc.cometchat.getBaseUrl();
                    var staticCDNUrl = jqcc.cometchat.getStaticCDNUrl();
                    var basedata = jqcc.cometchat.getBaseData();
                    if(jqcc.isEmptyObject(groupdetails)) {
                        jqcc.cometchat.getChatroomDetails({id:groupid,force:1,callback:'unbanGroupUsers'});
                        return;
                    }
                    var roompass = groupdetails.password;
                    var roomname = b2a(groupdetails.name);
                    var url = baseurl+'modules/chatrooms/chatrooms.php?action=unban&roomid='+groupid+'&inviteid='+roompass+'&basedata='+basedata+'&roomname='+roomname;

                    var cometchat_group_popup = $("#cometchat_group_"+groupid+"_popup");
                    var tabtitle_content = '<div class="cometchat_backbutton_viewgroupuserspopup"></div><div class="cometchat_userstabtitletext" style="width: 80%;text-align: center;">Unban Members</div>';

                    var inviteuser_content = '<div><iframe id="cometchat_inviteusers_iframe" src="'+url+'" height="316" width="100%" style="border:0px;"></div>';

                    cometchat_group_popup.find('div.cometchat_tabtitle .cometchat_secondarytabtitle').html(tabtitle_content);
                    cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_secondaryinviteuserscontent').html(inviteuser_content);
                    cometchat_group_popup.find('div.cometchat_tabtitle .cometchat_primarytabtitle').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                    cometchat_group_popup.find('div.cometchat_tabtitle .cometchat_secondarytabtitle').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                    cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_primarytabcontent').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                    cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_secondaryinviteuserscontent').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');

                    cometchat_group_popup.find('div.cometchat_tabtitle .cometchat_secondarytabtitle .cometchat_backbutton_viewgroupuserspopup').click(function(e){
                        e.stopImmediatePropagation();
                        cometchat_group_popup.find('div.cometchat_tabtitle .cometchat_secondarytabtitle').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                        cometchat_group_popup.find('div.cometchat_tabtitle .cometchat_primarytabtitle').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                        cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_secondaryinviteuserscontent').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                        cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_primarytabcontent').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                    });
                },
                updateChatroomUsers: function(item,fetchedUsers) {
                    var temp = '';
                    var temp1 = '';
                    var roomid = 0;
                    var moderatorhtml = '';
                    var userhtml = '';
                    var newUsers = {};
                    var newUsersName = {};
                    var usercount = 0;
                    fetchedUsers = 1;
                    $.each(item, function(i,user) {
                        roomid = user.chatroomid;
                        longname = user.n;
                        if(settings.users[user.id] != 1 && settings.initializeRoom == 0) {
                            var nowTime = new Date();
                            var ts = Math.floor(nowTime.getTime()/1000);
                        }
                        if(parseInt(user.b)!=1) {
                            var userstatus = user.s;

                            if(typeof(userstatus) == "undefined" || userstatus == "undefined"){
                                userstatus = 'offline'
                            }

                            usercount++;
                            newUsers[user.id] = 1;
                            newUsersName[user.id] = user.n;
                            userhtml='<div class="cometchat_chats_labels">Members</div>';
                            moderatorhtml='<div class="cometchat_chats_labels">Moderators</div>';
                            var showavatar = '<div class="cometchat_userscontentavatar"><img class="cometchat_userscontentavatarimage" src="'+user.a+'"></div>';
                            if(jqcc.cometchat.getSettings().allowAvatar == 0){
                                showavatar = '';
                                $(".cometchat_userscontentname").css('margin-left', '0px', 'important');
                            }

                            if($.inArray(user.id ,jqcc.cometchat.getChatroomVars('moderators')) != -1) {
                                if(user.id == settings.myid) {
                                    temp1 += '<div id="chatroom_userlist_'+user.id+'" class="cometchat_groupuserlist cometchat_chatroomuserlist" style="cursor:default !important;" userid="'+user.id+'">'+showavatar+'<div><div class="cometchat_userscontentname">'+longname+'</div></div><div><div class="cometchat_userscontentdot cometchat_user_'+userstatus+'"></div><div class="cometchat_buddylist_status">'+userstatus+'</div></div></div>';
                                } else {
                                    temp1 += '<div id="chatroom_userlist_'+user.id+'" class="cometchat_groupuserlist cometchat_chatroomuserlist" onmouseover="jqcc(this).addClass(\'cometchat_userlist_hover\');" onmouseout="jqcc(this).removeClass(\'cometchat_userlist_hover\');"  userid="'+user.id+'" owner="'+settings.owner+'" username="'+user.n+'">'+showavatar+'<div><div class="cometchat_userscontentname">'+longname+'</div></div><div><div class="cometchat_userscontentdot cometchat_user_'+userstatus+'"></div><div class="cometchat_buddylist_status">'+userstatus+'</div></div></div>';
                                }
                            } else {
                                if(user.id == settings.myid) {
                                    temp += '<div id="chatroom_userlist_'+user.id+'" class="cometchat_groupuserlist cometchat_chatroomuserlist" style="cursor:default !important;" userid="'+user.id+'">'+showavatar+'<div><div class="cometchat_userscontentname">'+longname+'</div></div><div><div class="cometchat_userscontentdot cometchat_user_'+userstatus+'"></div><div class="cometchat_buddylist_status">'+userstatus+'</div></div></div>';
                                } else {
                                    var moderatoroptions = '';
                                    if($.inArray(settings.myid ,jqcc.cometchat.getChatroomVars('moderators')) != -1 || jqcc.cometchat.getChatroomVars('owner')) {
                                        moderatoroptions = '<div id="cometchat_moderatoroptions_'+user.id+'" class="cometchat_moderatoroptions"><input type=button id="cc_kick" value="Kick" uid="'+user.id+'" chatroomid="'+roomid+'" class="moderatorbutton kickBan" /><input type=button id="cc_ban" value="Ban" uid = "'+user.id+'" class="moderatorbutton kickBan" chatroomid="'+roomid+'" /><input type=button id="cc_chat" value="Chat" uid = "'+user.id+'" class="moderatorbutton chatwith" /></div>';
                                    }

                                    temp += '<div id="chatroom_userlist_'+user.id+'" class="cometchat_groupuserlist cometchat_chatroomuserlist" onmouseover="jqcc(this).addClass(\'cometchat_userlist_hover\');" onmouseout="jqcc(this).removeClass(\'cometchat_userlist_hover\');" userid="'+user.id+'" owner="'+settings.owner+'" username="'+user.n+'"><div class="cometchat_cruserlistcontent">'+showavatar+'<div><div class="cometchat_userscontentname">'+longname+'</div></div><div><div class="cometchat_userscontentdot cometchat_user_'+userstatus+'"></div><div class="cometchat_buddylist_status">'+userstatus+'</div></div></div>'+moderatoroptions+'</div>';
                                }
                            }
                        }
                    });



                    for (user in settings.users) {
                        if(settings.users.hasOwnProperty(user)) {
                            if(newUsers[user] != 1 && settings.initializeRoom == 0) {
                                var nowTime = new Date();
                                var ts = Math.floor(nowTime.getTime()/1000);
                            }
                        }
                    }

                    $('#cometchat_grouplist_'+roomid).find('.cometchat_groupusercount > span.cometchat_count').text(usercount);
                    var cometchat_group_popup = $("#cometchat_group_"+roomid+"_popup");
                    if(temp1 != "" && temp !="") {
                        cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_secondaryviewuserscontent').html('<div>'+moderatorhtml+temp1+userhtml+temp+'</div>');
                    } else if(temp == "") {
                        cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_secondaryviewuserscontent').html('<div>'+moderatorhtml+temp1+'</div>');
                    } else {
                        cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_secondaryviewuserscontent').html('<div>'+userhtml+temp+'</div>');
                    }

                    var groupuserlistheight = cometchat_group_popup.find('.cometchat_tabcontent').innerHeight()+'px';
                    if(mobileDevice){
                        cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_secondaryviewuserscontent > div').css({'height':groupuserlistheight,'overflow-y':'auto'});
                    }else if(jqcc().slimScroll){
                       cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_secondaryviewuserscontent > div').css({'height':groupuserlistheight});
                       cometchat_group_popup.find('div.cometchat_tabcontent .cometchat_secondaryviewuserscontent > div').slimScroll({height: groupuserlistheight});
                    }

                    cometchat_group_popup.find('.moderatorbutton').on('click',function(e){
                        e.stopImmediatePropagation();
                        var uid = $(this).attr('uid');
                        var chatroomid = $(this).attr('chatroomid');
                        var method = $(this).attr('id');

                        if(method == 'cc_kick'){
                            jqcc.cometchat.kickChatroomUser(uid,1,chatroomid);
                            cometchat_group_popup.find('#chatroom_userlist_'+uid).click();
                        } else if(method == 'cc_ban') {
                            jqcc.cometchat.banChatroomUser(uid,1,chatroomid);
                            cometchat_group_popup.find('#chatroom_userlist_'+uid).click();
                        } else {
                            jqcc.cometchat.chatWith(uid);
                            cometchat_group_popup.find('#chatroom_userlist_'+uid).click();
                        }
                    });

                    cometchat_group_popup.find('.cometchat_chatroomuserlist').on('click',function(e){
                        e.stopImmediatePropagation();
                        var uid = $(this).attr('userid');
                        if(cometchat_group_popup.find('#chatroom_userlist_'+uid+' #cometchat_moderatoroptions_'+uid).length){
                            if(cometchat_group_popup.find('#cometchat_moderatoroptions_'+uid).css('display') == 'none') {
                                cometchat_group_popup.find('#chatroom_userlist_'+uid).animate({height: "64px"});
                                cometchat_group_popup.find('#cometchat_moderatoroptions_'+uid).css('display','block');
                            } else {
                                cometchat_group_popup.find('#chatroom_userlist_'+uid).animate({height: "32px"},{complete: function(){cometchat_group_popup.find('#cometchat_moderatoroptions_'+uid).css('display','none');}});
                            }
                        } else if(uid != settings.myid) {
                            jqcc.cometchat.chatWith(uid);
                        }
                    });

                    $(document).ready(function(){
                        if(jqcc.cometchat.getSettings().allowAvatar == 0){
                            $(".cometchat_userscontentname").css('margin-left', '0px', 'important');
                        }
                    });

                    jqcc.cometchat.setChatroomVars('users',newUsers);
                    jqcc.cometchat.setChatroomVars('usersName',newUsersName);
                    jqcc.cometchat.setChatroomVars('initializeRoom',0);
                },
                chatroomWindowResize: function() {
                    var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],winWidth=w.innerWidth||e.clientWidth||g.clientWidth,winHt=w.innerHeight||e.clientHeight||g.clientHeight;
                    var searchbar_Height = $('#cometchat_chatroom_searchbar').is(':visible') ? $('#cometchat_chatroom_searchbar').outerHeight(true) : 0;
                    var createChatroomHeight = $('#create').is(':visible') ? $('#create').outerHeight(true) : 0;
                    var lobbyroomsHeight = $('#cometchat_tabcontainer').is(':visible') ? (winHt-$('#cometchat_self_container').outerHeight(true)-$('#cometchat_tabcontainer').outerHeight(true)-$('#cometchat_trayicons').outerHeight(true)-$('#createChatroomOption').outerHeight(true)-searchbar_Height-createChatroomHeight+'px') : (winHt-$('#cometchat_self_container').outerHeight(true)-$('#cometchat_trayicons').outerHeight(true)-$('#createChatroomOption').outerHeight(true)-searchbar_Height-createChatroomHeight+'px');
                    if($('#create').is(':visible') && mobileDevice ){
                        if(winWidth<winHt){
                            $('#cometchat_lefttab').find('#lobby').css('display','block');
                        } else{
                            $('#cometchat_lefttab').find('#lobby').css('display','none');
                        }
                    }
                    if($('#chatroomusers_popup').hasClass('cometchat_tabopen')){
                        var winHt = $(window).innerHeight();
                        var winWidth = $(window).innerWidth();
                        var tabsubtitleHt = $(".cometchat_userchatarea").find('.cometchat_tabsubtitle').outerHeight(true);
                        if((winWidth > winHt) && mobileDevice){
                            $('#chatroomusers_popup').css('max-height',(winHt-tabsubtitleHt-5));
                            $('#chatroomuser_container').css('max-height',(winHt-tabsubtitleHt-5));
                        } else{
                            $('#chatroomusers_popup').css('max-height','');
                            $('#chatroomuser_container').css('max-height','');
                        }
                    }
                    /*if(jqcc().slimScroll && !mobileDevice){
                        $('#lobby_rooms').parent('.slimScrollDiv').css('height',lobbyroomsHeight);
                    }
                    $('#lobby_rooms').css('height',lobbyroomsHeight);*/
                    var prependHeight = parseInt($('.cometchat_prependMessages_container').outerHeight(true));
                    var roomConvoHeight = winHt-$('#currentroom').find('.cometchat_ad').outerHeight(true)-$('.cometchat_tabinputcontainer').outerHeight(true)-($('#currentroom_left').find('.cometchat_tabsubtitle').outerHeight(true))-prependHeight;
                    if($('#cometchat_container_stickers').length != 1 && $('#cometchat_container_smilies').length != 1 && mobileDevice){
                        $("#currentroom_convo").css('height',roomConvoHeight+'px');
                    }
                    if(iOSmobileDevice && $('#cometchat_container_stickers').length != 1 && $('#cometchat_container_smilies').length != 1){
                        $('#currentroom').find('.cometchat_userchatarea').css('display','block');
                        $('#currentroom_convo').css('height',$(window).height()-(jqcc('#currentroom').find('.cometchat_tabsubtitle').outerHeight()+jqcc('#currentroom').find('.cometchat_tabinputcontainer').outerHeight(true)+jqcc('#currentroom').find('.cometchat_prependCrMessages').outerHeight(true)));
                    }
                },
                kickid: function(kickid) {
                    $("#chatroom_userlist_"+kickid).remove();
                },
                banid: function(banid) {
                    $("#chatroom_userlist_"+banid).remove();
                },
                chatroomScrollDown: function(forced, id) {
                    if(typeof id != "undefined"){
                        var grouppopup = $("#cometchat_group_"+id+"_popup");
                        if(mobileDevice){
                            grouppopup.find('#cometchat_grouptabcontenttext_'+id).css('overflow-y','auto');
                            grouppopup.find('#cometchat_grouptabcontenttext_'+id).scrollTop(10000000);
                        }else if(jqcc().slimScroll){
                            grouppopup.find('#cometchat_grouptabcontenttext_'+id).slimScroll({scroll: '1'});
                        }
                    }

                    /*if(settings.newMessageIndicator == 1 && ($('.cometchat_tabcontenttext').length > 0) && ($('.cometchat_tabcontenttext').outerHeight()+$('.cometchat_tabcontenttext').offset().top-$('.cometchat_tabcontent').height()-$('.cometchat_tabcontent').offset().top-(2*$('.cometchat_chatboxmessage').outerHeight(true))>0)){
                        if(($('.cometchat_tabcontent').height()-$('.cometchat_tabcontenttext').outerHeight()) < 0){
                            if(forced) {
                                if(jqcc().slimScroll && !mobileDevice){
                                    $('.cometchat_tabcontent').slimScroll({scroll: '1'});
                                } else {
                                    setTimeout(function() {
                                    $(".cometchat_tabcontent").scrollTop(50000);
                                    },100);
                                }
                                if($('.talkindicator').length != 0){
                                $('.talkindicator').fadeOut();
                                }
                            }else{
                                if(!$('.talkindicator').length != 0){
                                    var indicator = "<a class='talkindicator' href='#'>New</a>";
                                    $('.cometchat_tabcontent').append(indicator);
                                    $('.talkindicator').click(function(e) {
                                        e.preventDefault();
                                        if(jqcc().slimScroll && !mobileDevice){
                                            $('.cometchat_tabcontent').slimScroll({scroll: '1'});
                                        } else {
                                            setTimeout(function() {
                                                $(".cometchat_tabcontent").scrollTop(50000);
                                            },100);
                                        }
                                        $('.talkindicator').fadeOut();
                                    });
                                    $('.cometchat_tabcontent').scroll(function(){
                                        if($('.cometchat_tabcontenttext').outerHeight() + $('.cometchat_tabcontenttext').offset().top - $('.cometchat_tabcontent').offset().top <= $('.cometchat_tabcontent').height()){
                                            $('.talkindicator').fadeOut();
                                        }
                                    });
                                }
                            }
                        }
                    }else{
                        if(jqcc().slimScroll && !mobileDevice){
                            $('.cometchat_tabcontent').slimScroll({scroll: '1'});
                        } else {
                            setTimeout(function() {
                                $(".cometchat_tabcontent").scrollTop(50000);
                            },100);
                        }
                    }*/
                },
                createChatroomSubmitStruct: function() {
                    var string = $('input.create_input').val();
                    var room={};
                    if(($.trim( string )).length == 0) {
                        return false;
                    }
                    var name = document.getElementById('name').value;
                    name = (name).replace(/'/g, "%27");
                    var type = document.getElementById('type').value;
                    var password = document.getElementById('cometchat_chatroom_password').value;
                    if(name != '' && name != null && name != "Name") {
                        name = name.replace(/^\s+|\s+$/g,"");
                        if(type == 1 && password == '') {
                            alert ("Please enter a password");
                            return 'invalid password';
                        }
                        if(type == 0 || type == 2) {
                            password = '';
                        }
                        room['name'] = name;
                        room['password'] = password;
                        room['type'] = type;
                    }else{
                        alert("Please enter the group name.");
                        return false;
                    }
                    document.getElementById('name').value = '';
                    document.getElementById('cometchat_chatroom_password').value = '';
                    return room;
                },
                crgetWindowHeight: function() {
                },
                crgetWindowWidth: function() {
                },
                selectChatroom: function(currentroom,id) {
                },
                checkOwnership: function(owner,isModerator,name) {
                },
                leaveRoomClass : function(currentroom) {
                    /*jqcc("#cometchat_chatroomlist_"+currentroom).removeClass("cometchat_chatroomselected");*/
                },
                removeCurrentRoomTab : function(id) {
                },
                updateGroupCategory : function(id) {
                    if($('#cometchat_grouplist_'+id).length){
                        var element = $('#cometchat_grouplist_'+id).detach();
                        $('#cometchat_othergroupslist').append(element);
                        var count = parseInt(element.find('.cometchat_groupusercount > span.cometchat_count').text()) - 1;
                        element.find('.cometchat_groupusercount > span.cometchat_count').text(count);
                    }

                    if($('#cometchat_othergroupslist').children().length > 0 && $('#cometchat_othergroups').length == 0){
                        $('#cometchat_othergroupslist').prepend('<div id="cometchat_othergroups" class="cometchat_groupsclassifier"><div class="cometchat_chats_labels">OTHER GROUPS</div></div>');
                    }

                    if($('#cometchat_joinedgroupslist').children().length > 0 && $('#cometchat_joinedgroups').length == 0){
                        $('#cometchat_joinedgroupslist').prepend('<div id="cometchat_joinedgroups" class="cometchat_groupsclassifier"><div class="cometchat_chats_labels">JOINED GROUPS</div></div>');
                    }

                    if($('#cometchat_joinedgroupslist').children().length == 0) {
                        $('#cometchat_joinedgroups').remove();
                        $('#cometchat_othergroups').remove();
                    }
                },
                chatroomLogout : function() {
                },
                loadChatroomList : function(item) {
                    var temp = '';
                    var joinedgroupslist = '<div id="cometchat_joinedgroupslist">';
                    var othergroupslist = '<div id="cometchat_othergroupslist">';
                    var joinedgroups = 0;
                    var othergroups = 0;
                    var userCountCss = "style='display:none'";
                    var joinedgroupshtml = '';
                    var othergroupshtml = '';
                    var chatrooms = {};
                    var unreadmessagecount;
                    var msgcountercss;
                    if(settings.showChatroomUsers == 1){
                        userCountCss = '';
                    }
                    $.each(item, function(i,room) {
                        chatrooms[i] = room;
                        jqcc.cometchat.setChatroomVars('chatroomdetails',chatrooms);

                        longname = room.name;
                        shortname = room.name;

                        unreadmessagecount = jqcc.cometchat.getUnreadMessageCount({groups: [parseInt(room.id)]});
                        msgcountercss = "display:none;";
                        if(unreadmessagecount!=0){
                            msgcountercss = "";
                        }

                        var roomtype = '';
                        var roomowner = '';
                        var deleteroom = '';
                        var renamegroup = '';
                        var usercount = '<div class="cometchat_groupusercount" '+userCountCss+'>Participants: <span class="cometchat_count">'+room.online+'</span></div>';

                        if(room.type == 1) {
                            roomtype = '<div class="cometchat_grouptype"><img src="'+staticCDNUrl+'layouts/'+calleeAPI+'/images/lock.png" class="cometchat_grouptypeimage" /></div>';
                        }

                        if(room.owner == 1) {
                            roomowner = '<img src="'+staticCDNUrl+'layouts/'+calleeAPI+'/images/user.png" />';
                        }

                        var deletegroup = '';
                        if(room.owner == true){
                            renamegroup = '<div class="cometchat_grouprename" title="Rename this Group" onclick = "javascript:jqcc.'+[calleeAPI]+'.renameChatroom(event,\''+room.id+'\');"><img class="cometchat_grouprenameimage" src="'+staticCDNUrl+'layouts/'+calleeAPI+'/images/pencil_buddylist.png"></div>';
                            deletegroup = '<div class="cometchat_groupdelete" title="Delete this group" onclick = "javascript:jqcc.cometchat.deleteChatroom(event,'+room.id+');"><img class="hoverbraces" src="'+staticCDNUrl+'layouts/docked/images/bin.svg"></div>';
                        }

                        temp = '<div id="cometchat_grouplist_'+room.id+'" class="cometchat_grouplist" onmouseover="jqcc(this).addClass(\'cometchat_grouplist_hover\');" onmouseout="jqcc(this).removeClass(\'cometchat_grouplist_hover\');" onclick="javascript:jqcc.cometchat.chatroom(\''+room.id+'\',\''+cc_urlencode(shortname)+'\',\''+room.type+'\',\''+room.i+'\',\''+room.s+'\',\'1\',\'1\');" amount="'+unreadmessagecount+'"><div class="cometchat_groupscontentavatar"><img class="cometchat_groupscontentavatarimage" src="'+staticCDNUrl+'layouts/'+calleeAPI+'/images/group.svg"></div><div><div class="cometchat_groupscontentname">'+longname+'</div></div>'+deletegroup+renamegroup+roomtype+usercount+'<div class="cometchat_unreadCount cometchat_floatR" style="'+msgcountercss+'">'+unreadmessagecount+'</div></div>';

                        if(room.j === 1) {
                            jqcc.cometchat.joinGroup(room.id);
                            joinedgroups++;
                            joinedgroupslist += temp;
                        } else {
                            othergroups++;
                            othergroupslist += temp;
                        }
                    });

                    joinedgroupslist += '</div>';
                    othergroupslist += '</div>';
                    jqcc.cometchat.refreshRecentChats();

                    if(document.getElementById('cometchat_groupslist_content')){
                        if(Object.keys(item).length != 0) {
                            if(joinedgroups>0){
                                joinedgroupshtml = '<div id="cometchat_joinedgroups" class="cometchat_groupsclassifier"><div class="cometchat_chats_labels">JOINED GROUPS</div></div>';
                            }
                            if(othergroups>0 && joinedgroups>0){
                                othergroupshtml = '<div id="cometchat_othergroups" class="cometchat_groupsclassifier"><div class="cometchat_chats_labels">OTHER GROUPS</div></div>';
                            }
                            jqcc.cometchat.replaceHtml('cometchat_groupslist_content', '<div>'+joinedgroupshtml+joinedgroupslist+othergroupshtml+othergroupslist+'</div>');
                        }else{
                            jqcc('#cometchat_groupslist_content').html('<div class="cometchat_nogroupcreated"><div class="cometchat_nogroups">No groups available</div></div>');
                        }

                        var userstabpopup = jqcc('#cometchat_userstab_popup');
                        if(jqcc.cometchat.getThemeVariable('hasSearchbox')){
                            var grouplistheight = ($(".right_footer").length == 1) ? "240px" : "259px";
                        } else {
                            var grouplistheight = ($(".right_footer").length == 1) ? "270px" : "286px";
                        }
                        /*if(settings.allowUsers){
                            grouplistheight = grouplistheight-28;
                        }*/
                        if(mobileDevice){
                            userstabpopup.find('#cometchat_userscontent #cometchat_groupslist_content > div').css({'height': grouplistheight});
                            userstabpopup.find('#cometchat_userscontent #cometchat_groupslist_content > div').css('overflow-y','auto');
                        }else if(jqcc().slimScroll){
                            userstabpopup.find('#cometchat_userscontent #cometchat_groupslist_content > div').css({'height': grouplistheight});
                            userstabpopup.find('#cometchat_userscontent').slimScroll({height: grouplistheight});
                        }
                    }
                },
                displayChatroomMessage: function(item,fetchedUsers) {
                    var beepNewMessages = 0,
                        chatroomreadmessages = jqcc.cometchat.getFromStorage("crreadmessages"),
                        todaysdate = new Date(),
                        tdmonth  = todaysdate.getMonth(),
                        tddate  = todaysdate.getDate(),
                        tdyear = todaysdate.getFullYear(),
                        today_date_class = tdmonth+"_"+tddate+"_"+tdyear,
                        ydaysdate = new Date((new Date()).getTime() - 3600000 * 24),
                        ydmonth  = ydaysdate.getMonth(),
                        yddate  = ydaysdate.getDate(),
                        ydyear = ydaysdate.getFullYear(),
                        yday_date_class = ydmonth+"_"+yddate+"_"+ydyear,
                        d = '',
                        month = '',
                        date  = '',
                        year = '',
                        msg_date_class = '',
                        msg_date = '',
                        date_class = '',
                        msg_date_format = '',
                        cometchat_del_style = '',
                        cc_dir = '0',
                        prepend = '',
                        localmessageid = '',
                        avatarstofetch = {},
                        trayIcons = jqcc.cometchat.getTrayicon(),
                        isRealtimetranslateEnabled = trayIcons.hasOwnProperty('realtimetranslate');
                    $.each(item, function(i, incoming) {
                    	var message = jqcc.cometchat.processcontrolmessage(incoming);
                        if($('#cometchat_group_'+incoming.chatroomid+'_popup').length != 0 && $('#cometchat_group_'+incoming.chatroomid+'_popup').find("#cometchat_grouptabcontenttext_"+incoming.chatroomid).length != 0){
                            var grouppopup = $('#cometchat_group_'+incoming.chatroomid+'_popup');
                            var messagewrapperid = '';
                            incoming.message = jqcc.cometchat.htmlEntities(incoming.message);
                            if(incoming.fromid == settings.myid){
                                incoming.from = "Me";
                            }

                            if( (!incoming.hasOwnProperty('id') || incoming.id == '') && (!incoming.hasOwnProperty('localmessageid') || incoming.localmessageid == '') && (incoming.message).indexOf('CC^CONTROL_')==-1){
                                return;
                            }

                            if(isRealtimetranslateEnabled && jqcc.cookie(settings.cookiePrefix+'rttlang') && incoming.fromid != settings.myid && (incoming.message).indexOf('CC^CONTROL_') == -1){
                                text_translate(incoming);
                            }

                            if(incoming.hasOwnProperty('id') && !incoming.hasOwnProperty('localmessageid')) {
                                messagewrapperid = incoming.id;
                            }else if( !incoming.hasOwnProperty('id') && incoming.hasOwnProperty('localmessageid') ) {
                                messagewrapperid = incoming.localmessageid;
                            }else{
                                messagewrapperid = incoming.id;
                                if($("#cometchat_groupmessage_"+incoming.localmessageid).length>0){
                                    $("#cometchat_groupmessage_"+incoming.localmessageid).attr('id',"cometchat_groupmessage_"+incoming.id);
                                    $("#cometchat_chatboxseen_"+incoming.localmessageid).attr('id',"cometchat_chatboxseen_"+incoming.id).removeClass("cometchat_offlinemessage");
                                    $("#message_"+incoming.localmessageid).attr('id','message_'+incoming.id);
                                    var offlinemessages = jqcc.cometchat.getFromStorage('offlinemessagesqueue');
                                    if(offlinemessages.hasOwnProperty(incoming.localmessageid)) {
                                        delete offlinemessages[incoming.localmessageid];
                                        jqcc.cometchat.updateToStorage('offlinemessagesqueue',offlinemessages);
                                    }
                                    return;
                                }
                            }

                            jqcc.cometchat.setChatroomVars('timestamp',incoming.id);
                            var msg_time = jqcc.cometchat.processTimestamp(incoming.sent),
                                incomingself = 1,
                                months_set = [];

                                                            months_set.push('January');
                                                                months_set.push('February');
                                                                months_set.push('March');
                                                                months_set.push('April');
                                                                months_set.push('May');
                                                                months_set.push('June');
                                                                months_set.push('July');
                                                                months_set.push('August');
                                                                months_set.push('September');
                                                                months_set.push('October');
                                                                months_set.push('November');
                                                                months_set.push('December');
                                
                            d = new Date(parseInt(msg_time));
                            month  = d.getMonth();
                            date  = d.getDate();
                            year = d.getFullYear();

                            msg_date_class = month+"_"+date+"_"+year;
                            msg_date = months_set[month]+" "+date+", "+year;

                            var type = 'th';
                            if(date==1||date==21||date==31){
                                type = 'st';
                            }else if(date==2||date==22){
                                type = 'nd';
                            }else if(date==3||date==23){
                                type = 'rd';
                            }
                            msg_date_format = date+type+' '+months_set[month]+', '+year;

                            if(msg_date_class == today_date_class){
                                date_class = "today";
                                msg_date = "Today";
                            }else  if(msg_date_class == yday_date_class){
                                date_class = "yesterday";
                                msg_date = "Yesterday";
                            }
                            if (message != '' && typeof(message) != 'undefined') {
                                var temp = '';
                                fromname = incoming.from,
                                sent = incoming.sent,
                                ts = parseInt(sent),
                                add_bg = '',
                                add_arrow_class = '',
                                add_style = "",
                                sentdata = $[calleeAPI].getTimeDisplay(ts,incoming.id),
                                fromid = incoming.fromid,
                                marginclass = '',
                                smileycount = (message.match(/cometchat_smiley/g) || []).length,
                                smileymsg = message.replace(/<img[^>]*>/g,"");
                                smileymsg = smileymsg.trim();

                                if(incoming.hasOwnProperty('self')){
                                    incomingself = incoming.self;
                                }
                                if(fromid != settings.myid) {
                                    incomingself = 0;
                                }
                                if(smileycount == 1 && smileymsg == '') {
                                    message = message.replace('height="20"', 'height="64px"');
                                    message = message.replace('width="20"', 'width="64px"');
                                }

                                if((incoming.message).indexOf('has shared a file')!=-1){
                                    if(jqcc.cometchat.getCcvariable().callbackfn=="desktop"){
                                        if(incoming.message.indexOf('target')>=-1){
                                            incoming.message=incoming.message.replace(/target="_blank"/g,'');
                                        }
                                    }
                                }
                                if((incoming.message).indexOf('has shared a handwritten message')!=-1){
                                    if(jqcc.cometchat.getCcvariable().callbackfn=="desktop"){
                                        if(incoming.message.indexOf('href')>=-1){
                                            var start = (incoming.message).indexOf('href');
                                            var end = (incoming.message).indexOf('target');
                                            var HtmlString=(incoming.message).slice(start,end);
                                            incoming.message=(incoming.message).replace(HtmlString,'');
                                        }
                                    }
                                }
                                if($("#cometchat_groupmessage_"+incoming.id).length > 0) {
                                    $("#cometchat_groupmessage_"+incoming.id).find("span.cometchat_chatboxmessagecontent").html(message);
                                } else {
                                    var ts = parseInt(incoming.sent)*1000;
                                    if(!incomingself) {
                                        var avatar = jqcc.cometchat.getThemeArray('buddylistAvatar', incoming.fromid);
                                        if(typeof avatar=="undefined"){
                                            avatarstofetch[incoming.fromid]=1;
                                            avatar = staticCDNUrl+'images/noavatar.png';
                                        }
                                        var fromavatar = '<a class="cometchat_floatL"><img class="cometchat_userscontentavatarsmall cometchat_avatar_'+incoming.fromid+'" src="'+avatar+'" title="'+fromname+'"/></a>';
                                        var sentdata = $[calleeAPI].getTimeDisplay(ts,incoming.id);
                                        var hw_ts = '';
                                        if(message.indexOf('cometchat_hw_lang')!=-1){
                                            hw_ts = 'margin-left: 4px';
                                        }
                                        var sentdata_box = "<span class=\"cometchat_ts_other\" style='"+hw_ts+"'>"+sentdata+"</span>";
                                        if((message.indexOf('<img')==-1 && message.indexOf('src')==-1) || (smileycount > 0 && smileymsg != '')){
                                            add_bg = 'cometchat_chatboxmessagecontent';
                                            add_arrow_class = '<div class="msgArrow"><div class="after"></div></div>';
                                        }else{
                                            if(message.indexOf('cometchat_smiley')!=-1) {
                                                add_style = "margin:5px 5px 0px 8px;max-width:135px;";
                                            }else if(message.indexOf('cometchat_hw_lang')!=-1){
                                                add_style = "margin:0px 0px 0px 8px";
                                            }else{
                                                add_style = "margin:-6px 0px 0px 8px";
                                            }
                                        }
                                        var usernamecontent = '';
                                        if (showUsername == '1') {
                                            usernamecontent = '<span class="cometchat_groupusername">'+fromname+':</span><br>';
                                        }
                                        if(incoming.hasOwnProperty('botid') && incoming.botid != 0) {
                                            fromavatar = '<a class="cometchat_floatL"><img class="cometchat_userscontentavatarsmall" src="'+jqcc.cometchat.getThemeArray('botlistAvatar', incoming.botid)+'" title="'+jqcc.cometchat.getThemeArray('botlistName', incoming.botid)+'"/></a>';
                                            if (showUsername == '1') {
                                                usernamecontent = '<span class="cometchat_groupusername">'+jqcc.cometchat.getThemeArray('botlistName', incoming.botid)+':</span><br>';
                                            }
                                        }
                                        temp += '<div class="cometchat_time cometchat_time_'+msg_date_class+' '+date_class+'" msg_format="'+msg_date_format+'">'+msg_date+'</div><div class="cometchat_chatboxmessage" id="cometchat_groupmessage_'+incoming.id+'">'+fromavatar+'<div class="'+add_bg+' '+'cometchat_ts_margin cometchat_floatL" style="'+add_style+'">'+usernamecontent+'<span id="cc_groupmessage_'+incoming.id+'" class="cometchat_msg">'+message+'</span></div>'+sentdata_box+' '+add_arrow_class+'</div>';
                                        beepNewMessages++;
                                    } else {
                                        var sentdata = $[calleeAPI].getTimeDisplay(ts,incoming.id);
                                        var sentdata_box = "<span class=\"cometchat_ts\">"+sentdata+"</span>";
                                        if((message.indexOf('<img')==-1 && message.indexOf('src')==-1) || (smileycount > 0 && smileymsg != '')){
                                            add_bg = 'cometchat_chatboxmessagecontent cometchat_self';
                                            add_arrow_class = '<div class="selfMsgArrow"><div class="after"></div></div>';
                                        }else{
                                            if(message.indexOf('cometchat_smiley')!=-1) {
                                                add_style = "margin-right:13px;max-width:135px;";
                                            }else{
                                                add_style = "margin-right:4px;margin-left:4px";
                                            }
                                        }
                                        temp += '<div class="cometchat_time cometchat_time_'+msg_date_class+' '+date_class+'" msg_format="'+msg_date_format+'">'+msg_date+'</div><div class="cometchat_chatboxmessage" id="cometchat_groupmessage_'+incoming.id+'"><div class="'+add_bg+' '+'cometchat_ts_margin cometchat_self_msg cometchat_floatR" style="'+add_style+'"><span id="cc_groupmessage_'+incoming.id+'" class="cometchat_msg">'+message+'</span><span id="cometchat_chatboxseen_'+incoming.id+'"></span></div>'+sentdata_box+''+add_arrow_class+'</div>';
                                    }
                                    grouppopup.find("#cometchat_grouptabcontenttext_"+incoming.chatroomid).append(temp);
                                }

                                if($(".cometchat_ts_margin").next().hasClass("cometchat_ts")){
                                    var msg_containerHeight = $("#cometchat_groupmessage_"+incoming.id+" .cometchat_ts_margin").outerHeight();
                                    var cometchat_ts_margin_right = $("#cometchat_groupmessage_"+incoming.id+" .cometchat_ts_margin").outerWidth(true)+3;
                                    jqcc('#cometchat_groupmessage_'+incoming.id).find('.cometchat_ts').css('margin-top',(msg_containerHeight-8));
                                    jqcc('#cometchat_groupmessage_'+incoming.id).find('.cometchat_ts').css({'margin-right':cometchat_ts_margin_right});
                                }

                                if($(".cometchat_ts_margin").next().hasClass("cometchat_ts_other")){
                                    var cometchat_ts_margin_left = $("#cometchat_groupmessage_"+incoming.id+" .cometchat_ts_margin").outerWidth();
                                    if(cometchat_ts_margin_left >= 135){
                                        jqcc('#cometchat_groupmessage_'+incoming.id).find('.cometchat_ts_other');
                                    }else if(cc_dir == 1){
                                        jqcc('#cometchat_groupmessage_'+incoming.id).find('.cometchat_ts_other').css({'margin-left':cometchat_ts_margin_left+30});
                                    }
                                }
                                if(typeof(message) != 'undefined' && (jqcc.cometchat.getChatroomVars('owner') || jqcc.cometchat.checkModerator(incoming.groupid) || (jqcc.cometchat.getChatroomVars('allowDelete') == 1 && incomingself))) {
                                    if(grouppopup.find("#cometchat_groupmessage_"+incoming.id).find(".delete_msg").length < 1) {
                                        if(incomingself){
                                            cometchat_ts_class = 'cometchat_ts';
                                            cometchat_ts_style = 'float:right';

                                            if(message.indexOf('imagemessage mediamessage')!=-1) {
                                                cometchat_ts_style = cometchat_ts_style+';margin-top:12px';
                                            }
                                        }else{
                                            cometchat_ts_class = 'cometchat_ts_other';
                                            var cometchat_ts_other_width = $("#cometchat_groupmessage_"+incoming.id+" .cometchat_ts_margin").outerWidth();
                                            if(cometchat_ts_other_width >= 135){
                                                cometchat_ts_style = 'float:left;margin-left:-23px';
                                            }else{
                                                if(message.indexOf('imagemessage mediamessage')!=-1) {
                                                    cometchat_ts_style = 'float:left;margin-left:-6px;margin-top:10px';
                                                }else{
                                                    cometchat_ts_style = 'float:left;margin-left:-3px';
                                                }
                                            }
                                        }
                                        if(grouppopup.find("#cometchat_groupmessage_"+incoming.id).find(".cometchat_ts_other").length < 1) {
                                            if((message.indexOf('<img')==-1 && message.indexOf('src')==-1) || (smileycount > 0 && smileymsg != '')){
                                                cometchat_del_style = '';
                                            }else {
                                                if(message.indexOf('cometchat_smiley')!=-1) {
                                                    cometchat_del_style = 'margin: 0px 0px 14px 0px';
                                                }
                                            }
                                        }else{
                                            cometchat_del_style = '';
                                        }
                                        grouppopup.find('#cometchat_groupmessage_'+incoming.id).find("."+cometchat_ts_class).after('<span class="delete_msg" style="'+cometchat_ts_style+';'+cometchat_del_style+';" onclick="javascript:jqcc.cometchat.confirmDelete(\''+incoming.id+'\',\''+incoming.chatroomid+'\');"><img class="hoverbraces" src="'+staticCDNUrl+'layouts/docked/images/bin.svg"></span>');
                                    }

                                    $(".cometchat_chatboxmessage").live("mouseover",function() {
                                        $(this).find(".delete_msg").css('opacity','1');
                                        var msg_containerHeight = $(this).find(".cometchat_ts_margin").outerHeight();
                                        var cometchat_ts_margin_right = $(this).find(".cometchat_ts_margin").outerWidth(true)+3;
                                        $(this).find('.cometchat_ts').css('margin-top',(msg_containerHeight-8));
                                        $(this).find('.cometchat_ts').css('margin-right',cometchat_ts_margin_right);

                                    });
                                    $(".cometchat_chatboxmessage").live("mouseout",function() {
                                        $(this).find(".delete_msg").css('opacity','0');
                                        var msg_containerHeight = $(this).find(".cometchat_ts_margin").outerHeight();
                                        var cometchat_ts_margin_right = $(this).find(".cometchat_ts_margin").outerWidth(true)+3;
                                        $(this).find('.cometchat_ts').css('margin-top',(msg_containerHeight-8));
                                        $(this).find('.cometchat_ts').css('margin-right',cometchat_ts_margin_right);
                                    });
                                    $(".delete_msg").mouseover(function() {
                                        $(this).find(".delete_msg").css('opacity','1');
                                    });
                                    $(".delete_msg").mouseout(function() {
                                        $(this).find(".delete_msg").css('opacity','0');
                                    });
                                }
                                var forced = (incomingself) ? 1 : 0;

                                if((message).indexOf('<img')!=-1 && (message).indexOf('src')!=-1){
                                    $( "#cometchat_groupmessage_"+incoming.id+" img" ).load(function() {
                                        var cometchat_ts_margin_right = $("#cometchat_groupmessage_"+incoming.id+" .cometchat_ts_margin").outerWidth(true)+2;
                                        jqcc('#cometchat_groupmessage_'+incoming.id).find('.cometchat_ts').css({'margin-right':cometchat_ts_margin_right});
                                        $[calleeAPI].chatroomScrollDown(forced,incoming.chatroomid);
                                    });
                                }
                                $[calleeAPI].chatroomScrollDown(forced,incoming.chatroomid);

                                if(jqcc.cometchat.getSettings().disableRecentTab == 0) {
                                    var temp_msg = jqcc.cometchat.processRecentmessages(message);
                                    var params = {'chatid':incoming.chatroomid,'isgroup':1,'timestamp':incoming.sent,'m':temp_msg,'msgid':incoming.id,'force':0,'del':0};
                                    jqcc.cometchat.updateRecentChats(params);
                                }
                            }
                        }
                        if (message != '' && jqcc.cometchat.getExternalVariable('lastgroupmessageid') < incoming.id){
                             if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].addMessageCounter) == "function" && !incomingself){
                                if ((typeof $.cookie(settings.cookiePrefix+"sound") == 'undefined' || $.cookie(settings.cookiePrefix+"sound") == null) || $.cookie(settings.cookiePrefix + "sound") == 'true') {
                                    $[calleeAPI].playSound(0);
                                }
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].addMessageCounter(incoming.groupid,1);
                            }
                        }
                    });
                        if(!$.isEmptyObject(avatarstofetch)){
                            jqcc.cometchat.getUserDetails(Object.keys(avatarstofetch),'updateView');
                        }

                        jqcc.cometchat.setChatroomVars('heartbeatCount',1);
                        jqcc.cometchat.setChatroomVars('heartbeatTime',settings.minHeartbeat);

                        var current_roomid = '';
                        if(item != '' || typeof(item) != "undefined"){
                            current_roomid = item[0].chatroomid;
                            jqcc.crdocked.groupbyDate(current_roomid);

                            $('#cometchat_grouptabcontenttext_'+current_roomid).find('.cometchat_prependCrMessages').remove();
                            prepend = '<div class=\"cometchat_prependCrMessages\" onclick\="jqcc.crdocked.prependCrMessagesInit('+current_roomid+')\" id = \"cometchat_prependCrMessages_'+current_roomid+'\">Load Earlier Messages</div>';

                            if($('#cometchat_grouptabcontenttext_'+current_roomid+' .cometchat_prependMessages').length != 1){
                                    $('#cometchat_grouptabcontenttext_'+current_roomid).prepend(prepend);

                            }
                            $[calleeAPI].chatroomScrollDown(1,current_roomid);
                        }
                    },
                    silentRoom: function(id, name, silent) {
                        basedata = jqcc.cometchat.getBaseData();
                        if(settings.lightboxWindows == 1) {
                            var controlparameters = {
                                type: 'modules',
                                name: 'core',
                                method: 'loadCCPopup',
                                params: {
                                    url: settings.baseUrl+'modules/chatrooms/chatrooms.php?id='+id+'&basedata='+basedata+'&name='+name+'&silent='+silent+'&action=passwordBox',
                                    name: 'passwordBox',
                                    properties: 'status=0, toolbar=0, menubar=0, directories=0, resizable=0, location=0, status=0, scrollbars=1,  width=320, height=130',
                                    width: '320',
                                    height: '110',
                                    title: urldecode(name),
                                    force: null,
                                    allowmaximize: null,
                                    allowresize: null,
                                    allowpopout: null,
                                    windowMode: null
                                }
                            };
                            controlparameters = JSON.stringify(controlparameters);
                            parent.postMessage('CC^CONTROL_'+controlparameters,'*');
                        } else {
                            var temp = prompt("Please enter the group password:",'');
                            if(temp) {
                                jqcc.cometchat.checkChatroomPass(id,name,silent,temp);
                            } else {
                                return;
                            }
                        }
                    },
                    switchChatroom: function(id, force) {
                        return;
                    },
                    renameChatroom: function(event,id){
                        event.stopPropagation();
                        jqcc('.cancel_edit').click();

                        jqcc('#cometchat_grouplist_'+id).append('<div class="cometchat_chatroom_overlay"><input class="chatroomName" type="textbox" value="0"/><a title="Cancel" class="cancel_edit" href="javascript:void(0);" onclick="javascript:jqcc.'+jqcc.cometchat.getChatroomVars('calleeAPI')+'.canceledit(event,\''+id+'\');" style="display:none;">Cancel</a></div>');

                        var currentroomname = jqcc('#cometchat_grouplist_'+id).find('.cometchat_groupscontentname').html();
                        jqcc('#cometchat_grouplist_'+id).find('.cometchat_groupscontentname').show();
                        jqcc('#cometchat_grouplist_'+id).find('.cancel_edit').show();
                        jqcc('#cometchat_grouplist_'+id).find('.chatroomName').val(currentroomname);

                        jqcc('.chatroomName').on('click', function(e) {
                            e.stopPropagation();
                        });
                        jqcc('.cometchat_chatroom_overlay').on('click', function(e) {
                            e.stopPropagation();
                            var cname = jqcc('#cometchat_grouplist_'+id).find('.chatroomName').val();
                            jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].renameChatroomsubmit(id,currentroomname,cname);
                        });
                        jqcc(".chatroomName").keydown(function(e) {
                            if (e.keyCode == 13) {
                                var cname = jqcc(this).val();
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].renameChatroomsubmit(id,currentroomname,cname);
                            }
                        });
                    },
                    renameChatroomsubmit: function(id, currentroomname, name) {
                        var baseUrl = settings.baseUrl;
                        var basedata = settings.basedata;
                        name = name.trim();
                        name = decodeURI(name);
                        if(currentroomname != name) {
                            name = encodeURI(name);
                            jqcc.ajax({
                                url: baseUrl+"modules/chatrooms/chatrooms.php?action=renamechatroom",
                                data: {id: id, basedata: basedata, cname: name},
                                type: 'post',
                                cache: false,
                                timeout: 10000,
                                async: false,
                                success: function(data) {
                                    if (data == 0) {
                                        alert("This group name is not available.");
                                    }else{
                                        jqcc('#cometchat_grouplist_'+id).find('.cancel_edit').hide();
                                        jqcc('#cometchat_grouplist_'+id).find('.currentroomname').css('visibility','visible');
                                        jqcc('#cometchat_grouplist_'+id).find('.chatroomName').hide();
                                        name = decodeURI(name);
                                        if(currentroomname == jqcc('.cometchat_chatroomdisplayname').text()){
                                            jqcc('.cometchat_chatroomdisplayname').text(name);
                                        }

                                        $('#cometchat_group_'+id+'_popup').find('.cometchat_groupname').text(name);
                                        $('#cometchat_grouplist_'+id).find('.cometchat_groupscontentname').text(name);
                                        jqcc.cometchat.chatroomHeartbeat(1);
                                    }
                                }
                            });
                        } else {
                            jqcc('#cometchat_grouplist_'+id).find('.cancel_edit').click();
                        }
                    },
                    canceledit: function(event,id) {
                        event.stopPropagation();
                        jqcc('#cometchat_grouplist_'+id).find('.cometchat_chatroom_overlay').remove();
                        jqcc('#cometchat_grouplist_'+id).find('.chatroomName').hide();
                        jqcc('#cometchat_grouplist_'+id).find('.cancel_edit').hide();
                        jqcc('#cometchat_grouplist_'+id).find('.cometchat_groupscontentname').css('visibility','visible');
                        jqcc('#cometchat_grouplist_'+id).find('.cometchat_groupscontentname').show();
                    },
                    updateChatroomsTabtext: function(){
                        /*$('#cometchat_chatroomstab_text').text('Groups');*/
                    },
                    minimizeChatrooms: function(){
                    },
                    loadCCPopup: function(url,name,properties,width,height,title,force,allowmaximize,allowresize,allowpopout){
                        /*if(jqcc.cometchat.getChatroomVars('lightboxWindows') == 1) {
                            var controlparameters = {"type":"modules", "name":"chatrooms", "method":"loadCCPopup", "params":{"url":url, "name":name, "properties":properties, "width":width, "height":height, "title":title, "force":force, "allowmaximize":allowmaximize, "allowresize":allowresize, "allowpopout":allowpopout}};
                            controlparameters = JSON.stringify(controlparameters);
                            parent.postMessage('CC^CONTROL_'+controlparameters,'*');
                        } else {
                            var w = window.open(url,name,properties);
                            w.focus();
                        }*/
                    },
                    inviteUsertab: function(){
                   },
                    prependCrMessagesInit: function(id){
                        var messages = jqcc('#cometchat_grouptabcontenttext_'+id).find('.cometchat_chatboxmessage');
                        if(messages.length > 0){
                            jqcc('#scrolltop_'+id).remove();
                            prepend = messages[0].id.split('_')[2];
                        }else{
                            prepend = -1;
                        }
                        jqcc.cometchat.updateChatroomMessages(id,prepend);
                    },
                    prependCrMessages:function(id,data){
                        var oldMessages = '',
                        temp = '',
                        count = 0,
                        todaysdate = new Date(),
                        tdmonth  = todaysdate.getMonth(),
                        tddate  = todaysdate.getDate(),
                        tdyear = todaysdate.getFullYear(),
                        today_date_class = tdmonth+"_"+tddate+"_"+tdyear,
                        ydaysdate = new Date((new Date()).getTime() - 3600000 * 24),
                        ydmonth  = ydaysdate.getMonth(),
                        yddate  = ydaysdate.getDate(),
                        ydyear = ydaysdate.getFullYear(),
                        yday_date_class = ydmonth+"_"+yddate+"_"+ydyear,
                        d = '',
                        month = '',
                        date  = '',
                        year = '',
                        msg_date_class = '',
                        msg_date = '',
                        date_class = '',
                        msg_date_format = '',
                        cometchat_del_style = '',
                        cc_dir = '0',
                        prepend = '',
                        avatarstofetch = {},
                        messagewrapperid = '';

                        $.each(data, function(i, incoming){
                            if(incoming.fromid == settings.myid){
                                incoming.from = "Me";
                            }
                            lastMessageId = incoming.id;
                            if( (!incoming.hasOwnProperty('id') || incoming.id == '') && (!incoming.hasOwnProperty('localmessageid') || incoming.localmessageid == '') && (incoming.message).indexOf('CC^CONTROL_')==-1){
                                return;
                            }
                            var deleteMessage = '',
                                message = jqcc.cometchat.processcontrolmessage(incoming),
                                msg_time = jqcc.cometchat.processTimestamp(incoming.sent),
                                add_bg = '',
                                add_arrow_class = '',
                                months_set = [];
                                if( incoming.hasOwnProperty('id') && !incoming.hasOwnProperty('localmessageid') ) {
                                    messagewrapperid = incoming.id;
                                }else if( !incoming.hasOwnProperty('id') && incoming.hasOwnProperty('localmessageid') ) {
                                    messagewrapperid = incoming.localmessageid;
                                }else{
                                    messagewrapperid = incoming.id;
                                    if($("#cometchat_groupmessage_"+incoming.localmessageid).length>0){
                                        $("#cometchat_groupmessage_"+incoming.localmessageid).attr('id',"cometchat_groupmessage_"+incoming.id);
                                        $("#cometchat_chatboxseen_"+incoming.localmessageid).attr('id',"cometchat_chatboxseen_"+incoming.id).removeClass("cometchat_offlinemessage");
                                        $("#message_"+incoming.localmessageid).attr('id','message_'+incoming.id);
                                        var offlinemessages = jqcc.cometchat.getFromStorage('offlinemessagesqueue');
                                        if(offlinemessages.hasOwnProperty(incoming.localmessageid)) {
                                            delete offlinemessages[incoming.localmessageid];
                                            jqcc.cometchat.updateToStorage('offlinemessagesqueue',offlinemessages);
                                        }
                                        return;
                                    }
                                }
                                                            months_set.push('January');
                                                                months_set.push('February');
                                                                months_set.push('March');
                                                                months_set.push('April');
                                                                months_set.push('May');
                                                                months_set.push('June');
                                                                months_set.push('July');
                                                                months_set.push('August');
                                                                months_set.push('September');
                                                                months_set.push('October');
                                                                months_set.push('November');
                                                                months_set.push('December');
                                
                            d = new Date(parseInt(msg_time));
                            month  = d.getMonth();
                            date  = d.getDate();
                            year = d.getFullYear();

                            msg_date_class = month+"_"+date+"_"+year;
                            msg_date = months_set[month]+" "+date+", "+year;

                            var type = 'th';
                            if(date==1||date==21||date==31){
                                type = 'st';
                            }else if(date==2||date==22){
                                type = 'nd';
                            }else if(date==3||date==23){
                                type = 'rd';
                            }
                            msg_date_format = date+type+' '+months_set[month]+', '+year;

                            if(msg_date_class == today_date_class){
                                date_class = "today";
                                msg_date = "Today";
                            }else  if(msg_date_class == yday_date_class){
                                date_class = "yesterday";
                                msg_date = "Yesterday";
                            }
                            if (message != '') {
                                count = count + 1;
                                var fromname = incoming.from,
                                    prepend = '',
                                    smileycount = (message.match(/cometchat_smiley/g) || []).length,
                                    smileymsg = message.replace(/<img[^>]*>/g,"");
                                smileymsg = smileymsg.trim();

                                if(smileycount == 1 && smileymsg == '') {
                                    message = message.replace('height="20"', 'height="64px"');
                                    message = message.replace('width="20"', 'width="64px"');
                                }

                                if((incoming.message).indexOf('<img class="file_image"')!=-1){
                                    if(jqcc.cometchat.getCcvariable().callbackfn=="desktop"){
                                        if(incoming.message.indexOf('target')>=-1){
                                            incoming.message=incoming.message.replace(/target="_blank"/g,'');
                                        }
                                    }
                                }
                                if((incoming.message).indexOf('has shared a handwritten message')!=-1){
                                    if(jqcc.cometchat.getCcvariable().callbackfn=="desktop"){
                                        if(incoming.message.indexOf('href')>=-1){
                                            var start = (incoming.message).indexOf('href');
                                            var end = (incoming.message).indexOf('target');
                                            var HtmlString=(incoming.message).slice(start,end);
                                            incoming.message=(incoming.message).replace(HtmlString,'');
                                        }
                                    }
                                }
                                var ts = parseInt(incoming.sent)*1000;

                                if(jqcc.cometchat.getChatroomVars('owner') || jqcc.cometchat.checkModerator(incoming.groupid) || (jqcc.cometchat.getChatroomVars('allowDelete') == 1 && incoming.fromid == settings.myid)) {
                                    var grouppopup = $('#cometchat_group_'+id+'_popup');
                                    if(grouppopup.find("#cometchat_groupmessage_"+messagewrapperid).find(".delete_msg").length < 1) {
                                        if(incoming.fromid == settings.myid){
                                            cometchat_ts_class = 'cometchat_ts';
                                            cometchat_ts_style = 'float:right';
                                            if(message.indexOf('imagemessage mediamessage')!=-1) {
                                                cometchat_ts_style = cometchat_ts_style+';margin-top:12px';
                                            }
                                        }else{
                                            cometchat_ts_class = 'cometchat_ts_other';
                                            var cometchat_ts_other_width = $("#cometchat_groupmessage_"+messagewrapperid+" .cometchat_ts_margin").outerWidth();
                                            if(cometchat_ts_other_width >= 135){
                                                cometchat_ts_style = 'float:left;margin-left:-23px';
                                            }else{
                                                cometchat_ts_style = 'float:left;margin-left:-3px';
                                            }
                                        }

                                        if(grouppopup.find("#cometchat_groupmessage_"+messagewrapperid).find(".cometchat_ts_other").length < 1) {
                                                 if((message.indexOf('<img')==-1 && message.indexOf('src')==-1) || (smileycount > 0 && smileymsg != '')){
                                                    cometchat_del_style = '';
                                                }else {
                                                    if(message.indexOf('cometchat_smiley')!=-1) {
                                                        cometchat_del_style = 'margin: 0px 0px 14px 0px';
                                                    }
                                                }
                                        }else{
                                             cometchat_del_style = '';
                                        }
                                       deleteMessage = '<span class="delete_msg" style="'+cometchat_ts_style+';'+cometchat_del_style+';" onclick="javascript:jqcc.cometchat.confirmDelete(\''+messagewrapperid+'\',\''+id+'\');"><img class="hoverbraces" src="'+staticCDNUrl+'layouts/docked/images/bin.svg"></span>';
                                    }
                                }
                                if (incoming.fromid != settings.myid || (incoming.hasOwnProperty('botid') && incoming.botid != 0)) {
                                    var avatar = jqcc.cometchat.getThemeArray('buddylistAvatar', incoming.fromid);
                                    if(typeof avatar=="undefined"){
                                        avatarstofetch[incoming.fromid]=1;
                                        avatar = staticCDNUrl+'images/noavatar.png';
                                    }
                                    var fromavatar = '<a class="cometchat_floatL" href="'+jqcc.cometchat.getThemeArray('buddylistLink', incoming.fromid)+'"><img class="cometchat_userscontentavatarsmall cometchat_avatar_'+incoming.fromid+'" src="'+avatar+'" title="'+fromname+'"/></a>';
                                   var sentdata = $[calleeAPI].getTimeDisplay(ts,messagewrapperid);
                                   var sentdata_box = "<span class=\"cometchat_ts_other\">"+sentdata+"</span>";
                                   if((message.indexOf('<img')==-1 && message.indexOf('src')==-1) || (smileycount > 0 && smileymsg != '')){
                                        add_bg = 'cometchat_chatboxmessagecontent';
                                        add_arrow_class = '<div class="msgArrow"><div class="after"></div></div>';
                                   }

                                    var usernamecontent = '';
                                    if (showUsername == '1') {
                                        usernamecontent = '<span class="cometchat_groupusername">'+fromname+':</span><br>';
                                    }
                                    if(incoming.hasOwnProperty('botid') && incoming.botid != 0) {
                                        fromavatar = '<a class="cometchat_floatL"><img class="cometchat_userscontentavatarsmall" src="'+jqcc.cometchat.getThemeArray('botlistAvatar', incoming.botid)+'" title="'+jqcc.cometchat.getThemeArray('botlistName', incoming.botid)+'"/></a>';
                                        if (showUsername == '1') {
                                            usernamecontent = '<span class="cometchat_groupusername">'+jqcc.cometchat.getThemeArray('botlistName', incoming.botid)+':</span><br>';
                                        }
                                    }
                                    temp += '<div class="cometchat_time cometchat_time_'+msg_date_class+' '+date_class+'" msg_format="'+msg_date_format+'">'+msg_date+'</div><div class="cometchat_chatboxmessage" id="cometchat_groupmessage_'+messagewrapperid+'">'+fromavatar+'<div class="'+add_bg+' '+'cometchat_ts_margin cometchat_floatL">'+usernamecontent+'<span id="cc_groupmessage_'+messagewrapperid+'" class="cometchat_msg">'+message+'</span></div>'+sentdata_box+' '+add_arrow_class+deleteMessage+'</div>';
                                } else {
                                    var sentdata = $[calleeAPI].getTimeDisplay(ts,messagewrapperid);
                                    var sentdata_box = "<span class=\"cometchat_ts\">"+sentdata+"</span>";
                                    if((message.indexOf('<img')==-1 && message.indexOf('src')==-1) || (smileycount > 0 && smileymsg != '')){
                                        add_bg = 'cometchat_chatboxmessagecontent cometchat_self';
                                        add_arrow_class = '<div class="selfMsgArrow"><div class="after"></div></div>';
                                    }
                                    temp += '<div class="cometchat_time cometchat_time_'+msg_date_class+' '+date_class+'" msg_format="'+msg_date_format+'">'+msg_date+'</div><div class="cometchat_chatboxmessage" id="cometchat_groupmessage_'+messagewrapperid+'"><div class="'+add_bg+' '+'cometchat_ts_margin cometchat_self_msg cometchat_floatR"><span id="cc_groupmessage_'+messagewrapperid+'" class="cometchat_msg">'+message+'</span><span id="cometchat_chatboxseen_'+messagewrapperid+'"></span></div>'+sentdata_box+' '+add_arrow_class+deleteMessage+'</div>';
                                }
                            }
                        });

                        if(!$.isEmptyObject(avatarstofetch)){
                            jqcc.cometchat.getUserDetails(Object.keys(avatarstofetch),'updateView');
                        }
                        var grouppopup = $('#cometchat_group_'+id+'_popup');

                        var current_top_element  = $('#cometchat_grouptabcontenttext_'+id+' .cometchat_chatboxmessage:first');
                        grouppopup.find("#cometchat_grouptabcontenttext_"+id).prepend(temp);

                        if(mobileDevice){
                            $('#cometchat_grouptabcontenttext_'+id).css('overflow-y','auto');
                        }else{
                            var offsetheight = 0;
                            if(current_top_element.length>0){
                                var offsetheight = current_top_element.offset().top - $('#cometchat_grouptabcontenttext_'+id+' .cometchat_chatboxmessage:first').offset().top+$('.cometchat_time').height()+$('#cometchat_prependCrMessages'+id).height()+100;
                                var height = offsetheight-$('#cometchat_grouptabcontenttext_'+id).height();
                                $('#cometchat_grouptabcontenttext_'+id).slimScroll({scrollTo: height+'px'});
                            }else{
                                $('#cometchat_grouptabcontenttext_'+id).slimScroll({scroll: 0});
                            }
                        }
                         $.each(data, function(i, incoming){
                            if($(".cometchat_chatboxmessagecontent").next().hasClass("cometchat_ts")){
                               var msg_containerHeight = $("#cometchat_groupmessage_"+messagewrapperid+" .cometchat_ts_margin").outerHeight();
                               var cometchat_ts_margin_right = $("#cometchat_groupmessage_"+messagewrapperid+" .cometchat_ts_margin").outerWidth(true)+3;
                               jqcc('#cometchat_groupmessage_'+messagewrapperid).find('.cometchat_ts').css('margin-top',(msg_containerHeight-8));
                               jqcc('#cometchat_groupmessage_'+messagewrapperid).find('.cometchat_ts').css('margin-right',cometchat_ts_margin_right);
                           }
                           if(($(".cometchat_chatboxmessagecontent").next().hasClass("cometchat_ts_other")) && (cc_dir == 1)){
                               var cometchat_ts_margin_left = $("#cometchat_groupmessage_"+messagewrapperid+" .cometchat_ts_margin").outerWidth(true)+30;
                               jqcc('#cometchat_groupmessage_'+messagewrapperid).find('.cometchat_ts_other').css('margin-left',cometchat_ts_margin_left);
                           }
                         });

                        $(".cometchat_chatboxmessage").live("mouseover",function() {
                            $(this).find(".delete_msg").css('opacity','0.7');
                            var msg_containerHeight = $(this).find(".cometchat_ts_margin").outerHeight();
                            var cometchat_ts_margin_right = $(this).find(".cometchat_ts_margin").outerWidth(true)+3;
                            $(this).find('.cometchat_ts').css('margin-top',(msg_containerHeight-8));
                            $(this).find('.cometchat_ts').css('margin-right',cometchat_ts_margin_right);
                        });
                        $(".cometchat_chatboxmessage").live("mouseout",function() {
                            $(this).find(".delete_msg").css('opacity','0');
                            var msg_containerHeight = $(this).find(".cometchat_ts_margin").outerHeight();
                            var cometchat_ts_margin_right = $(this).find(".cometchat_ts_margin").outerWidth(true)+3;
                            $(this).find('.cometchat_ts').css('margin-top',(msg_containerHeight-8));
                            $(this).find('.cometchat_ts').css('margin-right',cometchat_ts_margin_right);
                        });
                        $(".delete_msg").mouseover(function() {
                             $(this).find(".delete_msg").css('opacity','0.7');
                        });
                        $(".delete_msg").mouseout(function() {
                             $(this).find(".delete_msg").css('opacity','0');
                        });


                        $.each($('#cometchat_group_'+id+'_popup .cometchat_chatboxmessage'),function (i,divele){
                            if($(this).find(".cometchat_ts_margin").next().hasClass("cometchat_ts")){
                                var msg_containerHeight = $(this).find(".cometchat_ts_margin").outerHeight();
                                var cometchat_ts_margin_right = $(this).find(".cometchat_ts_margin").outerWidth(true)+3;
                                jqcc(this).find('.cometchat_ts').css('margin-top',(msg_containerHeight-8));
                                jqcc(this).find('.cometchat_ts').css('margin-right',cometchat_ts_margin_right);
                            }
                        });

                        jqcc.crdocked.groupbyDate(id);

                        $('#cometchat_grouptabcontenttext_'+id).find('.cometchat_prependCrMessages').remove();

                        prepend = '<div class=\"cometchat_prependCrMessages\" onclick\="jqcc.crdocked.prependCrMessagesInit('+id+')\" id = \"cometchat_prependCrMessages_'+id+'\">Load Earlier Messages</div>';

                        if($('#cometchat_grouptabcontenttext_'+id+' .cometchat_prependMessages').length != 1){
                                $('#cometchat_grouptabcontenttext_'+id).prepend(prepend);
                        }

                        if((count - parseInt(settings.prependLimit) < 0)){
                            $('#cometchat_group_'+id+'_popup .cometchat_prependCrMessages').text('No more messages');
                            jqcc('#cometchat_group_'+id+'_popup .cometchat_prependCrMessages').attr('onclick','');
                            jqcc('#cometchat_group_'+id+'_popup .cometchat_prependCrMessages').css('cursor','default');
                        }else{
                            jqcc('#cometchat_group_'+id+'_popup .cometchat_prependCrMessages').attr('onclick','jqcc.docked.prependCrMessagesInit('+id+')');
                        }
                    },
                    getActiveChatrooms: function(item){
                        return;
                    },
                    activeChatrooms: function(item){
                    },
                    chatroomUnreadMessages: function(crUnreadMessages,chatroomid){
                        return;
                    },
                    addMessageCounter: function(id, amount=0){
                    	if($('#cometchat_group_'+id+'_popup:visible').length!=0){
                    		amount = 0;
                    	}
                        amount = jqcc.cometchat.updateChatBoxState({id: parseInt(id),g:1, c: parseInt(amount)});

                        var cometchat_group_id = jqcc('#cometchat_group_'+id+',#cometchat_recentgrouplist_'+id+', #cometchat_grouplist_'+id);

                        if(amount>0){
                            cometchat_group_id.removeClass('cometchat_new_message').attr('amount', amount).find('div.cometchat_unreadCount').html(amount);
                        	cometchat_group_id.find('div.cometchat_unreadCount').show();
                        }else{
                        	cometchat_group_id.find('div.cometchat_unreadCount').hide();
                        }
                    },
                    groupbyDate: function(roomno){
                        $('#cometchat_grouptabcontenttext_'+roomno).find('.cometchat_time').hide();
                        $.each($('#cometchat_grouptabcontenttext_'+roomno).find('.cometchat_time'),function (i,divele){
                            var classes = $(divele).attr('class').split(/\s+/);
                            for(var i in classes){
                                if(typeof classes[i] == 'string'){
                                    if(classes[i].indexOf('cometchat_time_') === 0){
                                         $('#cometchat_grouptabcontenttext_'+roomno).find('.'+classes[i]+':first').css('display','table');
                                    }
                                }
                            }
                        });
                    },
                    closeChatroom: function(roomno,from){
                        var cometchat_group_popup = $("#cometchat_group_"+roomno+"_popup");
                        if(cometchat_group_popup.length != 0){
                            var chatroomsOpened = jqcc.cometchat.getChatroomVars('chatroomsOpened');
                            delete(chatroomsOpened[roomno]);
                            jqcc.cometchat.setChatroomVars('chatroomsOpened',chatroomsOpened);
                            jqcc.cometchat.updateChatBoxState({id:roomno,g:1,s:0,r:from});
                            var groupulh = jqcc.cometchat.getChatroomVars('groupulh');
                            groupulh[roomno] = '';
                            jqcc.cometchat.setChatroomVars('groupulh',groupulh);
                        }

                        if($('#cometchat_unseenchatboxes').find("#cometchat_group_"+roomno).length == 1) {
                            cometchat_group_popup.remove();
                            $("#cometchat_group_"+roomno).remove();
                            $('#cometchat_chatbox_left').click();

                            if($('#cometchat_unseenUsers').find('#cometchat_group_'+roomno).length == 1){
                                $('#cometchat_unseenUsers').find('#cometchat_group_'+roomno).remove();
                                $("#cometchat_group_"+roomno).remove();

                                var count = $('#cometchat_unseenchatboxes').children().length;
                                if(typeof(count) != "undefined"){
                                    $('#cometchat_chatbox_left').find('.cometchat_tabtext').text(parseInt(count));
                                    $('#cometchat_chatbox_left').click();
                                    if(count == 0){
                                        $('#cometchat_chatbox_left').hide();
                                    }
                                }
                            }
                            return;
                        }else {
                            cometchat_group_popup.remove();
                            $("#cometchat_group_"+roomno).remove();
                        }

                        if($('#cometchat_unseenUsers').children().length > 0){
                            $.docked.popoutUnseenuser();
                        }else{
                            $('#cometchat_chatboxes_wide').width($('#cometchat_chatboxes_wide').width()-chatboxWidth-chatboxDistance);
                        }
                    },
                    chatScroll: function(id){
                        var baseUrl = settings.baseUrl;
                        if($('#scrolltop_'+id).length == 0){
                            $("#cometchat_grouptabcontenttext_"+id).prepend('<div id="scrolltop_'+id+'" class="cometchat_scrollup"><img src="'+staticCDNUrl+'images/arrowtop.svg" class="cometchat_scrollimg" /></div>');
                        }
                        if($('#scrolldown_'+id).length == 0){
                            $("#cometchat_grouptabcontenttext_"+id).append('<div id="scrolldown_'+id+'" class="cometchat_scrolldown"><img src="'+staticCDNUrl+'images/arrowbottom.svg" class="cometchat_scrollimg" /></div>');
                        }
                        $('#cometchat_grouptabcontenttext_'+id).unbind('wheel');
                        $('#cometchat_grouptabcontenttext_'+id).on('wheel',function(event){
                            var scrollTop = $(this).scrollTop();
                            if(event.originalEvent.deltaY != 0){
                                clearTimeout($.data(this, 'scrollTimer'));
                                if(event.originalEvent.deltaY > 0){
                                    $('#scrolltop_'+id).hide();
                                    var down = jqcc("#cometchat_grouptabcontenttext_"+id)[0].scrollHeight-300-50;
                                    if(scrollTop < down){
                                        $('#scrolldown_'+id).fadeIn('slow');
                                    }else{
                                        $('#scrolldown_'+id).fadeOut();
                                    }
                                    $.data(this, 'scrollTimer', setTimeout(function() {
                                        $('#scrolldown_'+id).fadeOut('slow');
                                    },2000));

                                }else{
                                    $('#scrolldown_'+id).hide();
                                    var top = 45+50;
                                    if(scrollTop > top){
                                        $('#scrolltop_'+id).fadeIn('slow');
                                    }else{
                                        $('#scrolltop_'+id).fadeOut();
                                    }
                                    $.data(this, 'scrollTimer', setTimeout(function() {
                                        $('#scrolltop_'+id).fadeOut('slow');
                                    },2000));
                                }
                            }
                        });

                        $('#scrolltop_'+id).click(function(){
                            $('#scrolltop_'+id).hide();
                            $('#cometchat_grouptabcontenttext_'+id).slimScroll({scroll: 0});
                        });

                        $('#scrolldown_'+id).click(function(){
                            $('#scrolldown_'+id).hide();
                            $('#cometchat_grouptabcontenttext_'+id).slimScroll({scroll: 1});
                        });
                    }
                };

        })();
})(jqcc);

if(typeof(jqcc.lite) === "undefined"){
    jqcc.docked=function(){};
}

jqcc.extend(jqcc.docked, jqcc.crdocked);

jqcc(document).ready(function(){
    jqcc('.leaveRoom').live('click',function(){
        jqcc.cometchat.leaveChatroom();
    });
    jqcc( "#cometchat_chatroom_password" ).live('keyup',function() {
        if(jqcc("#cometchat_chatroom_password").val() == ' '){
            alert("Password can\'t start with space.");
            jqcc("#cometchat_chatroom_password").val('');
        }
    });
});

(function($){
    $.ccdocked = (function(){
        var settings = {};
        var baseUrl;
        var staticCDNUrl;
        var basedata;
        var language;
        var trayicon;
        var typingSenderTimer;
        var typingRecieverTimer;
        var typingSenderFlag = 1;
        var typingReceiverFlag = {};
        var resynchTimer;
        var notificationTimer;
        var chatboxOpened = {};
        var undeliveredmessages = [];
        var unreadmessages = [];
        var allChatboxes = {};
        var chatboxDistance = 10;
        var visibleTab = [];
        var blinkInterval;
        var trayWidth = 0;
        var siteOnlineNumber = 0;
        var olddata = {};
        var tooltipPriority = 0;
        var desktopNotifications = {};
        var webkitRequest = 0;
        var chatbottom = [];
        var resynch = 0;
        var reload = 0;
        var lastmessagetime = Math.floor(new Date().getTime());
        var favicon;
        var msg_beep = '';
        var side_bar = '';
        var option_button = '';
        var user_tab = '';
        var chat_boxes = '';
        var chat_left = '';
        var unseen_users = '';
        var usertab2 = '';
        var checkfirstmessage;
        var chatboxHeight = parseInt('350');
        var chatboxWidth = parseInt('230');
        var bannedMessage = 'Sorry, you have been banned from using this service. Your messages will not be delivered.';
        var lastseen = 0;
        var lastseenflag = false;
        var barVisiblelimit = (chatboxWidth + chatboxDistance + 14);
        var messagereceiptflag = 0;
        var hasChatroom = 0;
        var allowGuests = 1;
        var crguestsMode = 1;
        var mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|blackberry|palm|symbian/i);
        var timer;
        var disableLayout=0;
        return {
            playSound: function(type){
                var flag = 0;
                try{
                    if(settings.messageBeep==1&&(settings.beepOnAllMessages==1||(settings.beepOnAllMessages == 0 && checkfirstmessage == 1))){
                        if(type == 1){
                            document.getElementById('messageOpenBeep').play();
                        }else if(type == 2){
                            document.getElementById('announcementBeep').play();
                        }else if(type == 3){
                            document.getElementById('incommingcall').play();
                        }else if(type == 4){
                            document.getElementById('outgoingcall').play();
                        }else{
                            document.getElementById('messageBeep').play();
                        }
                    }
                }catch(error){
                }
            },
            initialize: function(){
                settings = jqcc.cometchat.getSettings();
                baseUrl = jqcc.cometchat.getBaseUrl();
                staticCDNUrl = jqcc.cometchat.getStaticCDNUrl();
                basedata = jqcc.cometchat.getBaseData();
                language = jqcc.cometchat.getLanguage();
                trayicon = jqcc.cometchat.getTrayicon();
                jqcc.cometchat.setThemeVariable('dockedAlignment', settings.dockedAlignToLeft == 1 ? 'left' : 'right');
                var modules = '';
                var login_mode = '';
                var announcementmodule = '';
                if(settings.windowFavicon==1){
                    favicon = new Favico({
                        animation: 'pop'
                    });
                }

                if(settings.usebots == 1){
                    var trayiconclick = 'onclick="jqcc.'+settings.theme+'.showBots();"';
                    modules = '<div id="cometchat_module_bots" class="cometchat_lightdisplay cometchat_module" '+trayiconclick+'>'+language['bots']+'</div>';
                }

                if(settings.ccauth.enabled == "1"){
                     login_mode = jqcc[settings.theme].authLogin();
                }else{
                    login_mode = '<div id="cometchat"></div><div id="cometchat_hidden"><div id="cometchat_hidden_content"></div></div><div id="cometchat_tooltip"><div class="cometchat_tooltip_content"></div></div>';
                }
                $("body").append(login_mode);

                var hasBroadcastMessage = 0;
                if(settings.showModules==1){
                    var listedmodules = ['chatrooms', 'announcements', 'broadcastmessage'];
                    var trayiconclick = '';
                    for(x in trayicon){
                        if(trayicon.hasOwnProperty(x)){
                            if(x=='home') {
                                trayiconclick = 'onclick="javascript:jqcc.cometchat.goToHomePage()"';
                            } else if(x=='scrolltotop') {
                                trayiconclick = 'onclick="javascript:jqcc.cometchat.scrollToTop()"';
                            } else {
                                trayiconclick = 'onclick="jqcc.cometchat.lightbox(\''+x+'\')"';
                            }
                            if(listedmodules.indexOf(x) == -1) {
                                modules += '<div id="cometchat_module_'+x+'" class="cometchat_lightdisplay cometchat_module" '+trayiconclick+'>'+trayicon[x][1]+'</div>';
                            }
                        }
                        if(x=='announcements'){
                            announcementmodule = '<div id="cometchat_alertsicon" class="cometchat_tabicons"></div>';
                        } else if(x=='broadcastmessage'){
                            hasBroadcastMessage = 1;
                        }
                    }
                }
                if(settings.disableGroupTab == 0) {
                     hasChatroom = 1;
                }
                var usertab = '';
                var usertabpop = '';
                var findUser = '<div id="cometchat_searchbar" class=""><div id="cometchat_searchbar_icon"></div><div class="cometchat_closeboxsearch cometchat_tooltip" id="close_user_search" title="'+language[115]+'"></div><input id="cometchat_search" type="text" name="cometchat_search" class="cometchat_search cometchat_search_light textInput" placeholder="'+language[18]+'"></div>';

                var statusmessagecount = 140;
                var blockeduserscount = 0;
                var optionsbuttonpop = '';
                var manageblockedusers = '';
                var sociallogout = '';
                var titlewidth = '75%';
                if(settings.ccauth.enabled == 1){
                    titlewidth = '70%';
                    sociallogout = '<div class="cometchat_authlogoutimage cometchat_tooltip" id="cometchat_authlogout" title="'+language[80]+'"></div>';
                }
                var readreceipthtml = '';
                if(settings.cometserviceEnabled == 1){
                    readreceipthtml = '<div><div class="cometchat_lightdisplay"><span class="cometchat_checkbox">'+language['show_read_receipt']+'</span><label class="cometchat_checkboxcontrol cometchat_checkboxouter" id="cometchat_readreceipt_label"><input type="checkbox" class="cometchat_checkbox" name="cometchat_readreceipt" id="cometchat_readreceipt"><div class="cometchat_controlindicator"></div><div class="cometchat_checkindicator"></div></label></div></div>';
                }
                if(jqcc.inArray('block',settings.plugins) != -1){
                    manageblockedusers = '<div id="cometchat_blockedusersoptions"><div class="cometchat_lightdisplay"><span style="padding-right:22px;">'+language['blocked_users']+'</span><span class="cometchat_arrowright"></span><span id="cometchat_blockeduserscount">'+blockeduserscount+'</span></div></div>';
                }
                if(settings.showSettingsTab==1 || 1){

                    var lastseenoption = '';

                    if(settings.lastseen == 1){
                       lastseenoption = '<div class="cometchat_lightdisplay"><span class="cometchat_checkbox">'+language[108]+'</span><label class="cometchat_checkboxcontrol cometchat_checkboxouter" id="cometchat_disablelastseen_label"><input type="checkbox" class="cometchat_checkbox" name="cometchat_disablelastseen" id="cometchat_disablelastseen"><div class="cometchat_controlindicator"></div><div class="cometchat_checkindicator"></div></label></div>';
                    } else{
                        lastseenflag = true;
                    }

                    optionsbuttonpop = '<div id="cometchat_optionsbutton_popup" class="cometchat_tabpopup cometchat_tabhidden"><div class="cometchat_userstabtitle"><div class="cometchat_userstabtitletext" style="width: '+titlewidth+';text-align: center;">'+language['more']+'</div><div class="cometchat_closebox cometchat_tooltip" id="cometchat_minimize_optionsbuttonpopup" title="'+language[63]+'"></div>'+sociallogout+'</div><div id="cometchat_optionscontent" class="cometchat_tabcontent cometchat_optionstyle" style="overflow:hidden;"><form id="cometchat_optionsform"><div id="cometchat_selfname"><div class="cometchat_chats_labels">'+language[43].toUpperCase()+'</div><textarea readonly id="cometchat_displayname" class="cometchat_lightdisplay"></textarea></div><div id="cometchat_statusmessage"><div class="cometchat_chats_labels">'+language[2].toUpperCase()+'</div><div id="cometchat_statusmessageinput"><textarea class="cometchat_statustextarea" maxlength="140"></textarea><div class="cometchat_statusmessagecount">'+statusmessagecount+'</div></div></div><div class="cometchat_statusinputs"><div class="cometchat_chats_labels">'+language[23].toUpperCase()+'</div><div><div class="cometchat_optionsstatus available cometchat_lightdisplay"><div class="cometchat_optionsstatus2 cometchat_user_available"></div>'+language['available']+'<label class="cometchat_statusradio"><input id="cometchat_statusavailable_radio" type="radio" name="cometchat_statusoptions" value="available" checked><span class="cometchat_radio_outer"><span class="cometchat_radio_inner"></span></span></label></div><div class="cometchat_optionsstatus away cometchat_lightdisplay"><div class="cometchat_optionsstatus2 cometchat_user_away" ></div>'+language['away']+'<label class="cometchat_statusradio"><input id="cometchat_statusaway_radio" type="radio" name="cometchat_statusoptions" value="away"><span class="cometchat_radio_outer"><span class="cometchat_radio_inner"></span></span></label></div><div class="cometchat_optionsstatus busy cometchat_lightdisplay"><div class="cometchat_optionsstatus2 cometchat_user_busy"></div>'+language['busy']+'<label class="cometchat_statusradio"><input id="cometchat_statusbusy_radio" type="radio" name="cometchat_statusoptions" value="busy"><span class="cometchat_radio_outer"><span class="cometchat_radio_inner"></span></span></label></div><div class="cometchat_optionsstatus cometchat_gooffline cometchat_lightdisplay"><div class="cometchat_optionsstatus2 cometchat_user_invisible"></div>'+language['invisible']+'<label class="cometchat_statusradio"><input id="cometchat_statusinvisible_radio" type="radio" name="cometchat_statusoptions" value="invisible"><span class="cometchat_radio_outer"><span class="cometchat_radio_inner"></span></span></label></div></div></div><div class="cometchat_options_disable"><div class="cometchat_chats_labels">'+language['notifications'].toUpperCase()+'</div><div><div class="cometchat_lightdisplay"><span class="cometchat_checkbox">'+language[13]+'</span><label class="cometchat_checkboxcontrol cometchat_checkboxouter" id="cometchat_soundnotifications_label"><input type="checkbox" class="cometchat_checkbox" name="cometchat_soundnotifications" id="cometchat_soundnotifications"><div class="cometchat_controlindicator"></div><div class="cometchat_checkindicator"></div></label></div><div class="cometchat_lightdisplay"><span  class="cometchat_checkbox">'+language[24]+'</span><label class="cometchat_checkboxcontrol cometchat_checkboxouter" id="cometchat_popupnotifications_label"><input type="checkbox" class="cometchat_checkbox" name="cometchat_popupnotifications" id="cometchat_popupnotifications"><div class="cometchat_controlindicator"></div><div class="cometchat_checkindicator"></div></label></div>'+readreceipthtml+lastseenoption+'</div></div><div class="cometchat_chats_labels"></div>'+manageblockedusers+'<div class="cometchat_chats_labels"></div><div id="cometchat_moduleslist">'+modules+'</div></form></div></div>';
                }

                var buddylist = '';
                var recentchats = '';
                var groups = '';
                var tabcount = 0;
                var tabcontent = '';
                var newchatoption = '';
                var groupstab = '';
                var recenttab = '';
                var contactstab = '';

                if(settings.disableRecentTab == 0) {
                    recenttab = '<div id="cometchat_recenttab" class="cometchat_tab" unselectable="on"><span id="cometchat_recenttab_text" class="cometchat_tabstext">'+language['recent_chats']+'</span></div>';
                    recentchats = '<div id="cometchat_recentlist" class="cometchat_tabhidden"><div id="cometchat_recentlist_content"><div class="cometchat_recentlisttext">'+language['no_recent_chats']+'</div></div></div>';
                    tabcount++;
                }

                if(settings.disableContactsTab == 0) {
                    contactstab = '<div id="cometchat_contactstab" class="cometchat_tab cometchat_tab_clicked" unselectable="on"><span id="cometchat_chatstab_text" class="cometchat_tabstext">'+language['contacts']+'</span></div>';
                    buddylist = '<div id="cometchat_contactslist" class="cometchat_tabopen"><div id="cometchat_userslist_content"><div class="cometchat_chatlisttext">'+language[28]+'</div></div></div>';
                    tabcount++;
                }

                if(hasChatroom) {
                    groupstab = '<div id="cometchat_groupstab" class="cometchat_tab" unselectable="on"><span id="cometchat_groupstab_text" class="cometchat_tabstext">'+language['groups']+'</span></div>';
                    groups = '<div id="cometchat_groupslist" class="cometchat_tabhidden"><div id="cometchat_groupslist_content"><div class="cometchat_chatlisttext">'+language['no_groups']+'</div></div></div>';
                    tabcount++;
                }

                if((hasBroadcastMessage == 1 && settings.disableContactsTab == 0) || (jqcc.cometchat.getChatroomVars('allowUsers') == 1 && hasChatroom == 1)){
                    newchatoption = '<div id="cometchat_newchat" class="cometchat_tabicons"></div>';
                }
                if(settings.showOnlineTab==1){
                    tabcontent = '<div class=\'cometchat_tablerow\'>'+recenttab+contactstab+groupstab+'</div>';

                    usertab = '<span id="cometchat_userstab" class="cometchat_tab"><span id="cometchat_userstab_text">'+language[9]+'</span></span>';

                    usertabpop = '<div id="cometchat_userstab_popup" class="cometchat_tabpopup cometchat_tabhidden"><div class="cometchat_userstabtitle"><div class="cometchat_userstabtitletext cometchat_tabtitle_header">'+language[9]+'</div><div class="cometchat_closebox cometchat_tooltip" id="cometchat_minimize_userstabpopup" title="'+language[62]+'"></div><div class="cometchat_vline"></div>'+newchatoption+announcementmodule+'<div id="cometchat_moreicon" class="cometchat_tabicons"></div></div><div id="cometchat_tabcontainer">'+tabcontent+'</div>'+findUser+'<div class="cometchat_tabcontent cometchat_tabstyle"><div id="cometchat_userscontent">'+recentchats+buddylist+groups+'</div></div></div>';
                }
                var loggedout = '<div id="loggedout" class="cometchat_tab cometchat_tooltip" title="'+language[8]+'"></div>';
                    loggedout = '';
                /*var baseCode = '<div id="cometchat_base">'+loggedout+'<div id="cometchat_sidebar">'+usertabpop+'</div>'+optionsbuttonpop+''+usertab+'<div id="cometchat_chatboxes"><div id="cometchat_chatboxes_wide" class="cometchat_floatR"></div></div><div id="cometchat_chatbox_left" class="cometchat_tab"><div class="cometchat_tabalertlr" style="display:none;"></div><div class="cometchat_tabtext">0</div><div id="cometchat_unseenUserCount"></div><div id="cometchat_chatbox_left_border_fix"></div></div><div id="cometchat_unseenUsers"></div></div>';*/

                var baseCode = '<div id="cometchat_base">'+loggedout+'<div id="cometchat_sidebar">'+usertabpop+'</div>'+optionsbuttonpop+''+usertab+'<div id="cometchat_chatboxes"><div id="cometchat_chatboxes_wide" class="cometchat_floatR"></div></div><div id="cometchat_chatbox_left" class="cometchat_tab"><div class="cometchat_tabalertlr" style="display:none;"></div><div class="cometchat_tabtext">0</div><div id="cometchat_unseenUserCount"></div><div id="cometchat_unseenchatboxes" style="display:none;"></div><div id="cometchat_chatbox_left_border_fix"></div><div id="cometchat_unseenUsers"></div></div>';

                document.getElementById('cometchat').innerHTML = baseCode;

                if(hasChatroom == 1){
                    jqcc.crdocked.chatroomInit();
                }
                if(settings.showSettingsTab==0){
                    $('#cometchat_userstab').addClass('cometchat_extra_width');
                    $('#cometchat_userstab_popup').find('div.cometchat_tabstyle').addClass('cometchat_border_bottom');
                }

                if($.cookie(settings.cookiePrefix+"sound")){
                    if($.cookie(settings.cookiePrefix+"sound")=='true'){
                        $("#cometchat_soundnotifications").attr("checked", true);
                        $('#cometchat_soundnotifications_label').find('.cometchat_checkindicator').css('display','block');
                    }else{
                        $("#cometchat_soundnotifications").attr("checked", false);
                        $('#cometchat_soundnotifications_label').find('.cometchat_checkindicator').css('display','none');
                    }
                } else {
                    $.cookie(settings.cookiePrefix+"sound", 'true',{path:'/'});
                    $("#cometchat_soundnotifications").attr("checked", true);
                    $('#cometchat_soundnotifications_label').find('.cometchat_checkindicator').css('display','block');
                }

                if($.cookie(settings.cookiePrefix+"popup")){
                    if($.cookie(settings.cookiePrefix+"popup")=='true'){
                        $("#cometchat_popupnotifications").attr("checked", true);
                        $('#cometchat_popupnotifications_label').find('.cometchat_checkindicator').css('display','block');
                    }else{
                        $("#cometchat_popupnotifications").attr("checked", false);
                        $('#cometchat_popupnotifications_label').find('.cometchat_checkindicator').css('display','none');
                    }
                } else {
                    $.cookie(settings.cookiePrefix+"popup", 'true',{path:'/'});
                    $("#cometchat_popupnotifications").attr("checked", true);
                    $('#cometchat_popupnotifications_label').find('.cometchat_checkindicator').css('display','block');
                }
                if($.cookie(settings.cookiePrefix+"disablelastseen")){
                    if($.cookie(settings.cookiePrefix+"disablelastseen")=='false'){
                        $("#cometchat_disablelastseen").attr("checked", true);
                        $('#cometchat_disablelastseen_label').find('.cometchat_checkindicator').css('display','block');
                    }else{
                        $("#cometchat_disablelastseen").attr("checked", false);
                        $('#cometchat_disablelastseen_label').find('.cometchat_checkindicator').css('display','none');
                    }
                } else {
                    $.cookie(settings.cookiePrefix+"disablelastseen", 'false',{path: '/'});
                    $("#cometchat_disablelastseen").attr("checked", true);
                    $('#cometchat_disablelastseen_label').find('.cometchat_checkindicator').css('display','block');
                }



                setTimeout(function(){
                    var sidebar = jqcc('#cometchat_sidebar');
                    var usertabpopheight = (sidebar.outerHeight(false) - sidebar.find('.cometchat_userstabtitle').outerHeight(true) - sidebar.find('#cometchat_tabcontainer').outerHeight(true) - sidebar.find('#cometchat_searchbar').outerHeight(true))+"px";
                    var optionsbuttonpopup = jqcc('#cometchat_optionsbutton_popup');
                    var optionsbuttonpopheight = (optionsbuttonpopup.outerHeight(false) - optionsbuttonpopup.find('.cometchat_userstabtitle').outerHeight(true))+"px";
                    if(jqcc().slimScroll){
                        /*$('#cometchat_userscontent').slimScroll({height: usertabpopheight});*/
                        /*$('#cometchat_optionscontent').slimScroll();*/
                    }

                },300);

                jqcc('#cometchat_userstab').click(function(e){
                    if(settings.disableRecentTab == 1 && settings.disableContactsTab == 1 && settings.disableGroupTab == 1) {
                        $("#cometchat_moreicon").click();
                    } else {
                        jqcc('#cometchat').find('#cometchat_userstab_popup').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                        jqcc[settings.theme].loadChatTab();
                        jqcc.cometchat.setSessionVariable('chats', 1);
                    }
                });

                jqcc('#cometchat_optionsimages_ccauth').click(function(e){
                    jqcc('#cometchat_auth_popup').css('display','block');
                });

                jqcc('#cometchat_minimize_auth_popup').click(function(e){
                    jqcc('#cometchat_auth_popup').css('display','none');
                });

                $('#cometchat_hidden').mouseover(function(){
                    if(tooltipPriority==0){
                        if(settings.ccauth.enabled=="0"){
                            jqcc[settings.theme].tooltip('cometchat_hidden', language[8], 0);
                        }
                    }
                    $(this).addClass("cometchat_tabmouseover");
                });


                $('#cometchat_chatbox_left').bind('click', function(){
                    $(this).toggleClass('cometchat_unseenList_open');
                    $('#cometchat_unseenUsers').toggle();
                    $('#cometchat_chatbox_left_border_fix').toggle();
                    if($('#cometchat_chatbox_left').hasClass('cometchat_unseenList_open')){
                        $('#cometchat_chatbox_left').css('color','#fff');
                    }else{
                        $('#cometchat_chatbox_left').css('color','#333');
                    }
                });
                //jqcc[settings.theme].windowResize();
                jqcc[settings.theme].scrollBars();
                $('#cometchat_chatbox_left').mouseover(function(){
                    $(this).addClass("cometchat_chatbox_lr_mouseover");
                });
                $('#cometchat_chatbox_left').mouseout(function(){
                    $(this).removeClass("cometchat_chatbox_lr_mouseover");
                });
                $('#cometchat_unseenUsers .cometchat_unseenClose').live('click',function(e){
                    e.stopImmediatePropagation();
                    var count = '';
                    var parentElem = $(this).parent();
                    var typeid = $(this).attr('uid');
                    var id = $(this).attr('id');
                    if(typeof(typeid) != "undefined"){
                        if(typeid.split('_')[1] == 'user'){
                            jqcc.docked.closeChatbox(id);
                     }else if(typeid.split('_')[1] == 'group'){
                            jqcc.crdocked.closeChatroom(id);
                        }
                    }

                    $('#cometchat_unseenUsers').find('#'+typeid).remove();
                    count = $('#cometchat_unseenchatboxes').children().length;
                    if(typeof(count) != "undefined"){
                        $('#cometchat_chatbox_left').find('.cometchat_tabtext').text(parseInt(count));
                        if(count == 0){
                            $('#cometchat_chatbox_left').hide();
                        }
                    }
                });
                $('#cometchat_unseenUsers .cometchat_unseenUserList').live('click',function(){
                    var typeid = $(this).attr('id');
                    if($('#cometchat_chatboxes_wide').width() > chatboxWidth){
                        jqcc[settings.theme].swapTab(typeid,1);
                    }
                    if($('#cometchat_chatbox_left').hasClass('cometchat_unseenList_open')){
                        $('#cometchat_chatbox_left').css('color','#fff');
                    }else{
                        $('#cometchat_chatbox_left').css('color','#333');
                    }
                });
                $('#cometchat_hidden').mouseout(function(){
                    $(this).removeClass("cometchat_tabmouseover");
                    if(tooltipPriority==0){
                        $("#cometchat_tooltip").css('display', 'none');
                    }
                    $(this).addClass("cometchat_tabmouseout");
                });

                jqcc('#cometchat_moreicon').click(function(e){
                    if($.cookie(settings.cookiePrefix+"read")){
                        if($.cookie(settings.cookiePrefix+"read")=='true'){
                            readreceiptsettingDB = 1;
                        }else{
                            readreceiptsettingDB = 0;
                        }
                    } else {
                        readreceiptsettingDB = jqcc.cometchat.getThemeArray('buddylistReadReceiptSetting',jqcc.cometchat.getUserID());
                    }
                    if(readreceiptsettingDB == 1){
                        $('#cometchat_readreceipt_label').find('.cometchat_checkindicator').css('display','block');
                    }else{
                        $('#cometchat_readreceipt_label').find('.cometchat_checkindicator').css('display','none');
                    }
                    jqcc('#cometchat').find('#cometchat_userstab_popup').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                    jqcc('#cometchat').find('#cometchat_optionsbutton_popup').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                    var optionsbuttonpopup = jqcc('#cometchat_optionsbutton_popup');
                    var optionsbuttonpopheight = (optionsbuttonpopup.outerHeight(false)-optionsbuttonpopup.find('.cometchat_userstabtitle').outerHeight(true))+"px";

                    if(mobileDevice){
                        $('#cometchat_optionscontent').css({'height': optionsbuttonpopheight,'overflow-y':'auto'});
                    }else if(jqcc().slimScroll){
                        $('#cometchat_optionscontent').css({'height': optionsbuttonpopheight});
                        $('#cometchat_optionscontent').slimScroll({height: optionsbuttonpopheight});
                    }
                });

                jqcc('#cometchat_newchat').click(function(e){
                    var broadcastoption = '';
                    var creategroup = '';
                    if(!jqcc('#cometchat_newcompose_option').length){
                        if(hasBroadcastMessage == 1 && settings.disableContactsTab == 0) {
                            broadcastoption = '<div class="cometchat_outer_option_box"><div id="cometchat_newBroadcast" class="cometchat_option_list list_up">'+language[113]+'</div></div>';
                        }
                        if(jqcc.cometchat.getChatroomVars('allowUsers') == 1 && hasChatroom == 1){
                            creategroup = '<div class="cometchat_outer_option_box"><div id="cometchat_createGroup" class="cometchat_option_list list_up">'+language['new_group']+'</div></div>';
                        }
                        if(broadcastoption != '' || creategroup != '') {
                            var newcompose = '<div id="cometchat_newcompose_option" class="cometchat_newcompose_option floatactive"><div class="cometchat_arrow_mark"></div>'+creategroup+broadcastoption+'</div>';
                            jqcc('#cometchat_userstab_popup .cometchat_tabcontent').append(newcompose);
                        }

                        jqcc('#cometchat_newBroadcast').click(function(e){
                            if (jqcc.cometchat.membershipAccess('broadcastmessage','modules')){
                                jqcc[settings.theme].composenewBroadcast();
                            }
                        });
                        jqcc('#cometchat_createGroup').click(function(e){
                            if (!(jqcc.cometchat.membershipAccess('chatrooms','modules'))){
                                return;
                            }
                            if(jqcc.cometchat.getCcvariable().hasOwnProperty('loggedinusertype') && jqcc.cometchat.getCcvariable().loggedinusertype == 'guestuser' && allowGuests == 0){
                                alert(language['membership_msg']);
                                return;
                            }
                            jqcc('#cometchat_tabcontainer').find('.cometchat_tab').css("border-bottom","2px solid #2e488a");
                            jqcc.crdocked.createChatroomPopup();
                        });
                    } else {
                        jqcc('#cometchat_newcompose_option').remove();
                        jqcc('#cometchat_tabcontainer').find('.cometchat_tab').css("border-bottom","2px solid #2e488a");
                    }
                });

                jqcc('#cometchat_alertsicon').click(function(e){
                    if (jqcc.cometchat.membershipAccess('announcements','modules')){
                        jqcc[settings.theme].showAnnouncements();
                    }
                });

                jqcc('#cometchat_blockedusersoptions').click(function(e){
                    if (jqcc.cometchat.membershipAccess('block','plugins')){
                        jqcc[settings.theme].manageBlockedUsers();
                    }
                });

                jqcc('#cometchat_minimize_optionsbuttonpopup').click(function(e){
                    if(settings.disableGroupTab == 1 && settings.disableContactsTab == 1 && settings.disableGroupTab == 1) {
                        $("#cometchat_optionsbutton_popup").removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                    } else {
                        jqcc('#cometchat').find('#cometchat_optionsbutton_popup').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                        jqcc('#cometchat').find('#cometchat_userstab_popup').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                    }
                });

                jqcc('#cometchat_authlogout').click(function(e){
                    jqcc[settings.theme].authLogout();
                });

                jqcc('#cometchat_minimize_userstabpopup').click(function(e){
                    if($('#cometchat_optionsimages_ccauth').length == 1){
                        $('#cometchat_auth_popup').css('display','none');
                        $('#cometchat_optionsimages_ccauth').css('display','none');
                    }
                    jqcc('#cometchat').find('#cometchat_userstab_popup').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                    jqcc.cometchat.setSessionVariable('chats', 0);
                });

                jqcc('#cometchat_recenttab').click(function(e){
                    jqcc[settings.theme].loadChatTab(0);
                    $("#cometchat_search").val('');
                    $('#cometchat_userscontent').find('div.cometchat_userlist').show();
                    $('#cometchat_userstab_popup').find('.cometchat_closeboxsearch').css('display','none');
                    $('#cometchat_nousers_found').remove();
                });

                jqcc('#cometchat_groupstab').click(function(e){
                    if (!(jqcc.cometchat.membershipAccess('chatrooms','modules'))){
                        return;
                    }
                    if(jqcc.cometchat.getCcvariable().hasOwnProperty('loggedinusertype') && jqcc.cometchat.getCcvariable().loggedinusertype == 'guestuser' && crguestsMode == 0){
                        alert(language['access_group_guest']);
                        return;
                    }
                    jqcc[settings.theme].loadChatTab(2);
                    $("#cometchat_search").val('');
                    $('#cometchat_userscontent').find('div.cometchat_grouplist').show();
                    $('#cometchat_userstab_popup').find('.cometchat_closeboxsearch').css('display','none');
                    $('#cometchat_nousers_found').remove();
                });

                jqcc('#cometchat_contactstab').click(function(e){
                    jqcc[settings.theme].loadChatTab(1);
                    $("#cometchat_search").val('');
                    $('#cometchat_userscontent').find('div.cometchat_userlist').show();
                    $('#cometchat_userstab_popup').find('.cometchat_closeboxsearch').css('display','none');
                    $('#cometchat_nousers_found').remove();
                });

                document.onmousemove = function(){
                    var nowTime = new Date();
                    jqcc.cometchat.setThemeVariable('idleTime', Math.floor(nowTime.getTime()/1000));
                };

                $('.cometchat_statustextarea').keyup(function(){
                    $('.cometchat_statusmessagecount').show();
                    statusmessagecount = $(this).attr('maxlength')-$(this).val().length;
                    $('.cometchat_statusmessagecount').html(statusmessagecount);
                });
                $('.cometchat_statustextarea').mouseup(function(){
                    $('.cometchat_statusmessagecount').show();
                    statusmessagecount = $(this).attr('maxlength')-$(this).val().length;
                    $('.cometchat_statusmessagecount').html(statusmessagecount);
                });
                $('.cometchat_statustextarea').mousedown(function(){
                    $('.cometchat_statusmessagecount').show();
                    statusmessagecount = $(this).attr('maxlength')-$(this).val().length;
                    $('.cometchat_statusmessagecount').html(statusmessagecount);
                });
                $('.cometchat_statustextarea').blur(function() {
                    $('.cometchat_statusmessagecount').hide();
                });

                var cometchat_optionsbutton_popup = $('#cometchat_optionsbutton_popup');
                cometchat_optionsbutton_popup.find('#cometchat_selfname #cometchat_displayname').on("blur keypress",function(e){
                    if (e.type == "keypress" && e.keyCode == '13') {
                         e.preventDefault();
                    }
                    if (e.type == "blur") {
                        var displayname = cometchat_optionsbutton_popup.find('#cometchat_selfname #cometchat_displayname').val();
                        if(jqcc.cometchat.getThemeVariable('displayname') != displayname) {
                            jqcc.cometchat.setGuestNameSet(displayname);
                        }
                    }
                });

                cometchat_optionsbutton_popup.find('#cometchat_statusmessageinput .cometchat_statustextarea').blur(function(){
                    var statusmessage = cometchat_optionsbutton_popup.find('#cometchat_statusmessageinput .cometchat_statustextarea').val();
                    if(jqcc.cometchat.getThemeVariable('statusmessage') != statusmessage) {
                        jqcc.cometchat.statusSendMessageSet(statusmessage);
                    }
                });

                cometchat_optionsbutton_popup.find('.cometchat_statusradio').on("change", function(e){
                    var status = $(this).find('input').attr('value');
                    jqcc.cometchat.sendStatus(status);
                });

                var cometchat_search = $("#cometchat_search");
                var cometchat_userscontent = $('#cometchat_userscontent');
                cometchat_search.blur(function(){
                   var searchString = $(this).val();
                    if(searchString==''){
                        cometchat_search.val(language[18]).addClass('cometchat_search_light');
                        $('#cometchat_nousers_found').remove();
                    }
                });

                cometchat_search.click(function(){
                    $(this).val('');
                    cometchat_search.addClass('cometchat_search_light');
                    if($('#cometchat_userstab_popup').find('#cometchat_contactstab').hasClass('cometchat_tab_clicked')){
                        cometchat_userscontent.find('div.cometchat_userlist').css('display','block');
                    } else if($('#cometchat_userstab_popup').find('#cometchat_groupstab').hasClass('cometchat_tab_clicked')){
                        cometchat_userscontent.find('div.cometchat_grouplist').css('display','block');
                    }else if($('#cometchat_userstab_popup').find('#cometchat_botstab').hasClass('cometchat_tab_clicked')){
                        cometchat_userscontent.find('div.cometchat_botlist').css('display','block');
                    }

                    $('#cometchat_nousers_found').remove();
                    $('#cometchat_userstab_popup').find('.cometchat_closeboxsearch').css('display','none');
                });
                cometchat_search.keyup(function(event){
                    event.stopImmediatePropagation();
                    if(event.keyCode==27) {
                        $(this).val('').blur();
                    }
                    var searchString = $(this).val();
                    if($('#cometchat_userstab_popup').find('#cometchat_contactstab').hasClass('cometchat_tab_clicked')){
                        if(searchString.length>0&&searchString!=language[18]){
                            $('#cometchat_userstab_popup').find('.cometchat_closeboxsearch').css('display','block');
                            cometchat_userscontent.find("div.cometchat_userlist").hide();
                            cometchat_userscontent.find('.cometchat_subsubtitle').hide();
                            var searchResult = cometchat_userscontent.find('#cometchat_contactslist div.cometchat_userscontentname:icontains('+searchString+')').parentsUntil("cometchat_userlist").show();
                            var matchLength = searchResult.length;
                            if(matchLength == 0){
                                if($('#cometchat_nousers_found').length == 0) {
                                    $('#cometchat_contactslist').prepend('<div id="cometchat_nousers_found"><div class="chatmessage"><div class="search_nouser">'+language[58]+'</div></div></div></div>');
                                }
                            } else {
                                $('#cometchat_nousers_found').remove();
                            }
                            cometchat_search.removeClass('cometchat_search_light');
                        }else{
                            cometchat_userscontent.find('div.cometchat_userlist').show();
                            $('#cometchat_nousers_found').remove();
                            $('#cometchat_userstab_popup').find('.cometchat_closeboxsearch').css('display','none');
                        }
                    } else if($('#cometchat_userstab_popup').find('#cometchat_groupstab').hasClass('cometchat_tab_clicked')){
                        if(searchString.length>0&&searchString!=language[18]){
                            $('#cometchat_userstab_popup').find('.cometchat_closeboxsearch').css('display','block');
                            cometchat_userscontent.find("div.cometchat_grouplist").hide();
                            cometchat_userscontent.find('.cometchat_subsubtitle').hide();
                            var searchResult = cometchat_userscontent.find('#cometchat_groupslist div.cometchat_groupscontentname:icontains('+searchString+')').parentsUntil("cometchat_grouplist").show();
                            var matchLength = searchResult.length;
                            if(matchLength == 0){
                                if($('#cometchat_nousers_found').length == 0) {
                                    $('#cometchat_groupslist').prepend('<div id="cometchat_nousers_found"><div class="chatmessage"><div class="search_nouser">'+language[114]+'</div></div></div></div>');
                                }
                            } else {
                                $('#cometchat_nousers_found').remove();
                            }
                            cometchat_search.removeClass('cometchat_search_light');
                        }else{
                            cometchat_userscontent.find('div.cometchat_grouplist').show();
                            $('#cometchat_nousers_found').remove();
                            $('#cometchat_userstab_popup').find('.cometchat_closeboxsearch').css('display','none');
                        }
                    }else if($('#cometchat_userstab_popup').find('#cometchat_recenttab').hasClass('cometchat_tab_clicked')){
                        if(searchString.length>0&&searchString!=language[18]){
                            $('#cometchat_userstab_popup').find('.cometchat_closeboxsearch').css('display','block');
                            cometchat_userscontent.find("div.cometchat_recentchatlist").hide();
                            cometchat_userscontent.find("div.cometchat_recentgrouplist").hide();
                            cometchat_userscontent.find('.cometchat_subsubtitle').hide();
                            searchResult1 = cometchat_userscontent.find('#cometchat_recentlist div.cometchat_groupscontentname:icontains('+searchString+')').parentsUntil("cometchat_recentgrouplist").show();
                            searchResult2 = cometchat_userscontent.find('#cometchat_recentlist div.cometchat_userscontentname:icontains('+searchString+')').parentsUntil("cometchat_recentchatlist").show();
                            var matchLength = (searchResult1.length)+(searchResult2.length);
                            if(matchLength == 0){
                                if($('#cometchat_nousers_found').length == 0) {
                                    $('#cometchat_recentlist').prepend('<div id="cometchat_nousers_found"><div class="chatmessage"><div class="search_nouser">'+language["no_chats_found"]+'</div></div></div></div>');
                                }
                            } else {
                                $('#cometchat_nousers_found').remove();
                            }
                            cometchat_search.removeClass('cometchat_search_light');
                        }else{
                            cometchat_userscontent.find('div.cometchat_recentchatlist').show();
                            cometchat_userscontent.find('div.cometchat_recentgrouplist').show();
                            $('#cometchat_nousers_found').remove();
                            $('#cometchat_userstab_popup').find('.cometchat_closeboxsearch').css('display','none');
                        }
                    }
                });

                $("#cometchat_soundnotifications").click(function(event){
                    var notification = 'false';
                    if($("#cometchat_soundnotifications").is(":checked")){
                        $('#cometchat_soundnotifications_label').find('.cometchat_checkindicator').css('display','block');
                        notification = 'true';
                    }else{
                         $('#cometchat_soundnotifications_label').find('.cometchat_checkindicator').css('display','none');
                    }
                    $.cookie(settings.cookiePrefix+"sound", notification, {path: '/', expires: 365});
                });

                $("#cometchat_readreceipt").click(function(event){
                    var notification = 'false';
                    if($("#cometchat_readreceipt").is(":checked")){
                        $('#cometchat_readreceipt_label').find('.cometchat_checkindicator').css('display','block');
                        notification = 'true';
                    }else{
                         $('#cometchat_readreceipt_label').find('.cometchat_checkindicator').css('display','none');
                    }
                    jqcc.cometchat.updateReadReceipt(notification);
                    $.cookie(settings.cookiePrefix+"read", notification, {path: '/', expires: 365});
                });

                $("#cometchat_popupnotifications").click(function(event){
                    var notification = 'false';
                    if($("#cometchat_popupnotifications").is(":checked")){
                        $('#cometchat_popupnotifications_label').find('.cometchat_checkindicator').css('display','block');
                        notification = 'true';
                    }else{
                        $('#cometchat_popupnotifications_label').find('.cometchat_checkindicator').css('display','none');
                    }
                    $.cookie(settings.cookiePrefix+"popup", notification, {path: '/', expires: 365});
                });
                $("#cometchat_disablelastseen").click(function(event){
                    lastseenflag = true;

                    if(lastseenflag){
                        jqcc[settings.theme].hideLastseen(jqcc.cometchat.getThemeVariable('openChatboxId'));
                    } else if(!lastseenflag){
                        if((jqcc.cometchat.getThemeArray('buddylistStatus', jqcc.cometchat.getThemeVariable('openChatboxId')) == 'available')||(jqcc.cometchat.getThemeArray('buddylistStatus', jqcc.cometchat.getThemeVariable('openChatboxId')) == 'offline' && jqcc.cometchat.getThemeArray('buddylistLastseensetting', jqcc.cometchat.getThemeVariable('openChatboxId')) == 1)){
                            jqcc[settings.theme].hideLastseen(jqcc.cometchat.getThemeVariable('openChatboxId'));
                        }
                        else if(jqcc.cometchat.getThemeArray('buddylistStatus', jqcc.cometchat.getThemeVariable('openChatboxId')) == 'offline' && jqcc.cometchat.getThemeArray('buddylistLastseensetting', jqcc.cometchat.getThemeVariable('openChatboxId')) == 0){
                            jqcc[settings.theme].showLastseen(jqcc.cometchat.getThemeVariable('openChatboxId'), jqcc.cometchat.getThemeArray('buddylistLastseen', jqcc.cometchat.getThemeVariable('openChatboxId')));
                        }
                    }

                    if($("#cometchat_disablelastseen").is(":checked")){
                        $('#cometchat_disablelastseen_label').find('.cometchat_checkindicator').css('display','block');
                        var id=0;
                        $(".cometchat_lastseenmessage").each(function(){
                            id = parseInt($(this).attr('id').replace('cometchat_messagElement_',''));
                            var buddylastseen = jqcc.cometchat.getThemeArray('buddylistLastseen', id);
                            var statusmsg = jqcc.cometchat.getThemeArray('buddylistStatus', id);
                            var lstsnSetting = jqcc.cometchat.getThemeArray('buddylistLastseensetting', id);
                            var currentts = Math.floor(new Date().getTime()/1000);
                            if(((statusmsg == 'away' || statusmsg == 'invisible' || statusmsg == 'busy' || statusmsg == 'offline') || currentts-buddylastseen > (60*10)) && lstsnSetting == '0')
                                jqcc[settings.theme].showLastseen(id,jqcc.cometchat.getThemeArray('buddylistLastseen',id));
                        })
                        lastseenflag = false;
                    }else{
                        $('#cometchat_disablelastseen_label').find('.cometchat_checkindicator').css('display','none');
                        $(".cometchat_lastseenmessage").slideUp(300);
                        lastseenflag = true;
                    }

                    $.ajax({
                        url: baseUrl+"cometchat_send.php",
                        data: {lastseenSettingsFlag: lastseenflag},
                        dataType: 'jsonp',
                        success: function(data){
                        }
                    });

                    $.cookie(settings.cookiePrefix+"disablelastseen", lastseenflag, {path:'/'});
                });

                $('#cometchat_userstab_popup').find('.cometchat_closeboxsearch').click(function(e){
                    e.stopImmediatePropagation();
                    $('#cometchat_userstab_popup').find('#cometchat_search').val('');
                    cometchat_search.keyup();
                });

                window.onoffline = function() {
                    jqcc.docked.noInternetConnection(true);
                }
                window.ononline = function() {
                    jqcc.docked.noInternetConnection(false);
                }

                function updateOnlineStatus() {
                    var noInternetConnection = navigator.onLine ? false : true;
                    jqcc.docked.noInternetConnection(noInternetConnection);
                }

                document.body.addEventListener("offline", function () { updateOnlineStatus() }, false);
                document.body.addEventListener("online", function () { updateOnlineStatus() }, false);
            },
            tooltip: function(id,message, orientation){
                if(disableLayout == 1){return};
                var cometchat_tooltip = $('#cometchat_tooltip');
                cometchat_tooltip.css('display', 'none').removeClass("cometchat_tooltip_left").css('left', '-100000px').find(".cometchat_tooltip_content").html(message);
                var pos = $('#'+id).offset();
                var width = $('#'+id).width();
                var tooltipWidth = cometchat_tooltip.width();
                var displayheight = $(window).outerHeight();
                var cometchat_totalheight='';
                var popup_top='';
                var leftposition='';
                var cometchat_tooltip_height = $(cometchat_tooltip).outerHeight();
                var cometchat_userstab_height = '';
                var cometchat_userstab_width='';
                if(orientation==1){
                    cometchat_tooltip.css('left', (pos.left+width)-9).addClass("cometchat_tooltip_left");
                }else{
                    var leftposition = (pos.left+width)-tooltipWidth;
                    leftposition += 16;
                    cometchat_tooltip.removeClass("cometchat_tooltip_left").css('left', leftposition);
                    if($('#cometchat_userstab_popup').hasClass('cometchat_tabhidden')){
                        cometchat_userstab_height = $('#cometchat_userstab').outerHeight();
                        cometchat_userstab_width = $('#cometchat_userstab').width();
                        leftposition += 5;
                        cometchat_totalheight = cometchat_tooltip_height+cometchat_userstab_height;
                        popup_top = displayheight-cometchat_totalheight;
                        leftposition = (pos.left+cometchat_userstab_width)-tooltipWidth-10;
                        $(cometchat_tooltip).css('top', popup_top);
                        cometchat_tooltip.addClass("cometchat_tooltip_left").css('left',leftposition);
                    }else if($('#cometchat_userstab_popup').hasClass('cometchat_tabopen')){
                        cometchat_userstab_height = $('#cometchat_userstab_popup').outerHeight();
                        cometchat_userstab_width = $('#cometchat_userstab_popup').width();
                        leftposition += 5;
                        cometchat_totalheight = cometchat_tooltip_height+cometchat_userstab_height;
                        popup_top= displayheight-cometchat_totalheight;
                        leftposition = (pos.left+cometchat_userstab_width)-tooltipWidth-10;
                        $(cometchat_tooltip).css('top', popup_top);
                        cometchat_tooltip.addClass("cometchat_tooltip_left").css('left',leftposition);
                    }else{
                        var logoutbox_height = $('#'+id).outerHeight();
                        var logout_notification = pos.top+logoutbox_height-57;
                        cometchat_tooltip.css('top', logout_notification);
                        cometchat_tooltip.addClass("cometchat_tooltip_left").css('left',leftposition-12);
                    }
                cometchat_tooltip.css('display', 'block');
                }
            },
            userStatus: function(item){
                var cometchat_optionsbutton_popup = $('#cometchat_optionsbutton_popup');
                var count = 140-item.m.length;

                cometchat_optionsbutton_popup.find('#cometchat_selfname #cometchat_displayname').text(item.n);
                cometchat_optionsbutton_popup.find('textarea.cometchat_statustextarea').val(item.m);
                cometchat_optionsbutton_popup.find('.cometchat_statusmessagecount').html(count);
                cometchat_optionsbutton_popup.find('#cometchat_status'+item.s+'_radio').click();

                jqcc.cometchat.setThemeVariable('displayname', item.n);
                jqcc.cometchat.setThemeVariable('statusmessage', item.m);

                if(item.s=='offline'){
                    cometchat_optionsbutton_popup.find('#cometchat_statusinvisible_radio').click();
                    jqcc[settings.theme].goOffline(1);
                }

                if(item.s != 'away'){
                    jqcc.cometchat.setThemeVariable('currentStatus', item.s);
                    jqcc.cometchat.setThemeVariable('idleFlag', 0);
                }
                if(item.s == 'away') {
                    jqcc.cometchat.setThemeVariable('idleFlag', 1);
                }
                if(item.lstn==1){
                    lastseenflag = true;
                }

                if(parseInt(item.id) > 10000000){
                    cometchat_optionsbutton_popup.find('#cometchat_displayname').attr("readonly", false);
                    cometchat_optionsbutton_popup.find('#cometchat_displayname').addClass("cometchat_guestname");
                    cometchat_optionsbutton_popup.find('.cometchat_guestname').val(item.n.replace("Guest-", ""));
                }
                /*if(typeof item.b != 'undefined' && item.b == '1') {
                    jqcc[settings.theme].loggedOut();
                    jqcc.cometchat.setThemeVariable('banned', '1');
                    jqcc("#loggedout").attr("title",bannedMessage);
                }*/
                jqcc.cometchat.setThemeVariable('userid', item.id);
                jqcc.cometchat.addBuddy(item);
                if(item.lstn == 1){
                    $("#cometchat_disablelastseen").attr("checked", false);
                    $('#cometchat_disablelastseen_label').find('.cometchat_checkindicator').css('display','none');
                    $.cookie(settings.cookiePrefix+"disablelastseen",true,{path:'/'});
                }
                jqcc('#cometchat_hidden').hide();
            },
            goOffline: function(silent){
                jqcc.cometchat.setThemeVariable('offline', 1);

                if(silent!=1){
                    jqcc.cometchat.sendStatus('offline');
                }
                $('#cometchat_userstab').removeClass('cometchat_userstabclick cometchat_tabclick');
                $('div.cometchat_tabopen').removeClass('cometchat_tabopen');
                $('span.cometchat_tabclick').removeClass('cometchat_tabclick');
                jqcc.cometchat.setSessionVariable('chats', 0);
                $('#cometchat_userstab_text').html(language[17]);
                for(var chatbox in jqcc.cometchat.getThemeVariable('chatBoxesOrder')){
                    if(jqcc.cometchat.getThemeVariable('chatBoxesOrder').hasOwnProperty(chatbox)){
                        if(jqcc.cometchat.getThemeVariable('chatBoxesOrder')[chatbox]!==null){
                            $("#cometchat_user_"+chatbox).find(".cometchat_closebox_bottom").click();
                        }
                    }
                }
                $('.cometchat_container').remove();
                if(typeof window.cometuncall_function=='function'){
                    cometuncall_function(jqcc.cometchat.getThemeVariable('cometid'));
                }
            },
            composenewBroadcast:function(){
                var cc_basedata = jqcc.cometchat.getBaseData();
                var ncbframe = '<div><iframe id="cometchat_trayicon_newchat_iframe" src="'+baseUrl+'modules/broadcastmessage/index.php?cc_layout=docked&basedata='+cc_basedata+'" height="316" width="100%" style="border:0px;"></div>';
                var newchatpopup = '<div id="cometchat_newchat_popup" class="cometchat_tabpopup cometchat_tabhidden"><div class="cometchat_userstabtitle"><div class="cometchat_userstabtitletext" style="width: 75%;text-align: center;margin-left:20px;">'+language[117]+'</div><div class="cometchat_closebox cometchat_tooltip" id="cometchat_minimize_newchatpopup" title="'+language[27]+'"></div></div><div id="cometchat_newchat_content" class="cometchat_tabcontent cometchat_optionstyle" style="overflow:hidden;">'+ncbframe+'</div></div>';

                jqcc('#cometchat_sidebar').append(newchatpopup);
                jqcc('#cometchat').find('#cometchat_userstab_popup').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                jqcc('#cometchat_newcompose_option').remove();
                jqcc('#cometchat_tabcontainer').find('.cometchat_tab').css("border-bottom","2px solid #2e488a");
                jqcc('#cometchat').find('#cometchat_newchat_popup').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');

                jqcc('#cometchat_minimize_newchatpopup').click(function(e){
                    jqcc('#cometchat').find('#cometchat_newchat_popup').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                    jqcc('#cometchat').find('#cometchat_userstab_popup').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                    jqcc('#cometchat').find('#cometchat_newchat_popup').remove();

                });
            },
            newAnnouncement: function(item){
                if($.cookie(settings.cookiePrefix+"popup")&&$.cookie(settings.cookiePrefix+"popup")=='true'){
                    tooltipPriority = 100;
                    message = '<div class="cometchat_announcement">'+item.m+'</div>';
                    if(item.o){
                        var notifications = (item.o-1);
                        if(notifications>0){
                            message += '<div class="cometchat_notification"><div class="cometchat_notification_message cometchat_notification_message_and">'+language[36]+notifications+language[37]+'</div><div style="clear:both" /></div>';
                        }
                    }else{
                        $.cookie(settings.cookiePrefix+"an", item.id, {path: '/', expires: 365});
                    }
                    if ((typeof $.cookie(settings.cookiePrefix+"sound") == 'undefined' || $.cookie(settings.cookiePrefix+"sound") == null) || $.cookie(settings.cookiePrefix + "sound") == 'true') {
                        jqcc.docked.playSound(2);
                    }
                    jqcc[settings.theme].tooltip("cometchat_userstab", message, 0);
                    clearTimeout(notificationTimer);
                    notificationTimer = setTimeout(function(){
                        $('#cometchat_tooltip').css('display', 'none');
                        tooltipPriority = 0;
                    }, settings.announcementTime);
                }
            },
            showAnnouncements: function(){
                var anframe = '<div><iframe id="cometchat_trayicon_announcements_iframe" src="'+baseUrl+'modules/announcements/index.php?cc_layout=docked" height="316" width="100%" style="border:0px;"></div>';
                var announcementspopup = '<div id="cometchat_announcements_popup" class="cometchat_tabpopup cometchat_tabhidden"><div class="cometchat_userstabtitle"><div class="cometchat_userstabtitletext" style="width: 75%;text-align: center;margin-left:20px;">'+language['announcements']+'</div><div class="cometchat_closebox cometchat_tooltip" id="cometchat_minimize_announcementspopup" title="'+language[74]+'"></div></div><div id="cometchat_announcements_content" class="cometchat_tabcontent cometchat_optionstyle" style="overflow:hidden;">'+anframe+'</div></div>';

                jqcc('#cometchat_sidebar').append(announcementspopup);
                jqcc('#cometchat').find('#cometchat_userstab_popup').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                jqcc('#cometchat').find('#cometchat_announcements_popup').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');

                jqcc('#cometchat_minimize_announcementspopup').click(function(e){
                    jqcc('#cometchat').find('#cometchat_announcements_popup').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                    jqcc('#cometchat').find('#cometchat_userstab_popup').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                    jqcc('#cometchat').find('#cometchat_announcements_popup').remove();
                });
            },
            manageBlockedUsers: function(){
                var blockeduserframe = '<div><iframe id="cometchat_blockedusers_iframe" src="'+baseUrl+'plugins/block/index.php?basedata='+basedata+'&cc_layout=docked" height="316" width="100%" style="border:0px;"></div>';
                var blockeduserspopup = '<div id="cometchat_blockedusers_popup" class="cometchat_tabpopup cometchat_tabhidden"><div class="cometchat_userstabtitle"><div class="cometchat_userstabtitletext" style="width: 75%;text-align: center;margin-left:20px;">'+language['manage_blocked_users']+'</div><div class="cometchat_closebox cometchat_tooltip" id="cometchat_minimize_blockeduserspopup" title="'+language[74]+'"></div></div><div id="cometchat_blockedusers_content" class="cometchat_tabcontent cometchat_optionstyle" style="overflow:hidden;position:absolute">'+blockeduserframe+'</div></div>';

                jqcc('#cometchat_sidebar').append(blockeduserspopup);
                jqcc('#cometchat').find('#cometchat_optionsbutton_popup').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                jqcc('#cometchat').find('#cometchat_blockedusers_popup').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');

                jqcc('#cometchat_minimize_blockeduserspopup').click(function(e){
                    jqcc('#cometchat').find('#cometchat_blockedusers_popup').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                    jqcc('#cometchat').find('#cometchat_optionsbutton_popup').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                    jqcc('#cometchat').find('#cometchat_blockedusers_popup').remove();
                });
            },
            showBots: function(){
                if (jqcc.cometchat.membershipAccess('bots','extensions')){
                    var showBotsFrame = '<div><iframe id="cometchat_bots_iframe" src="'+baseUrl+'extensions/bots/index.php?basedata='+basedata+'&cc_layout=docked" height="316" width="100%" style="border:0px;"></div>';
                    var botspopup = '<div id="cometchat_bots_popup" class="cometchat_tabpopup cometchat_tabhidden"><div class="cometchat_userstabtitle"><div class="cometchat_userstabtitletext" style="width: 70%;text-align: center;margin-left:20px;">'+language["bots"]+'</div><div class="cometchat_closebox cometchat_tooltip" id="cometchat_minimize_botspopup" title="'+language["bots"]+'"></div></div><div id="cometchat_blockedusers_content" class="cometchat_tabcontent cometchat_optionstyle" style="overflow:hidden;">'+showBotsFrame+'</div></div>';

                    jqcc('#cometchat_sidebar').append(botspopup);
                    jqcc('#cometchat').find('#cometchat_optionsbutton_popup').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                    jqcc('#cometchat').find('#cometchat_bots_popup').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');

                    jqcc('#cometchat_minimize_botspopup').click(function(e){
                        jqcc('#cometchat').find('#cometchat_bots_popup').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                        jqcc('#cometchat').find('#cometchat_optionsbutton_popup').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                        jqcc('#cometchat').find('#cometchat_bots_popup').remove();
                    });
                }
            },
            loadChatTab: function(type, restored){
                if (type > 2 || type < 0 || typeof(type)!="number" || typeof(type)=="undefined" || isNaN(type)) {
                    type = 0;
                }
                if(typeof(restored) == "undefined"){
                    var restored = 0;
                }

                if((type == 1 && settings.disableContactsTab == 1) || (type == 0 && settings.disableRecentTab == 1) || (type == 2 && hasChatroom == 0)){
                    if(settings.disableContactsTab == 0) {
                        type = 1;
                    } else if(settings.disableRecentTab == 0) {
                        type = 0;
                    } else if(hasChatroom == 1) {
                        type = 2;
                    } else {
                        return;
                    }
                }

                var tabs = ['recent','contacts','groups'];
                jqcc('#cometchat_tabcontainer .cometchat_tab').removeClass('cometchat_tab_clicked');
                jqcc('#cometchat_userscontent .cometchat_tabopen').removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                jqcc('#cometchat_'+tabs[type]+'tab').addClass('cometchat_tab_clicked');
                jqcc('#cometchat_'+tabs[type]+'list').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                if(restored != 1){
                    jqcc.cometchat.setSessionVariable('openedtab',type);
                }
            },
            buddyList: function(item){
                var onlineNumber = 0;
                var totalFriendsNumber = 0;
                var lastGroup = '';
                var groupNumber = 0;
                var tooltipMessage = '';
                var buddylisttemp = '';
                var buddylisttempavatar = '';
                var unreadmessagecount;
                var msgcountercss;
                $.each(item, function(i, buddy){
                    if(buddy.n == null || buddy.n == 'null' || buddy.n == '' || jqcc.cometchat.getThemeVariable('banned', '1')) {
                        return;
                    }
                    longname = buddy.n;
                    if(settings.lastseen == 1 && jqcc.cometchat.getThemeArray('buddylistLastseensetting',jqcc.cometchat.getUserID())==0){
                        if(buddy.lstn == 1 && $.cookie(settings.cookiePrefix+"disablelastseen") == 'true'){
                           lastseenflag = true;
                        }else if($.cookie(settings.cookiePrefix+"disablelastseen") == 'true'){
                            lastseenflag = true;
                        }else if(buddy.lstn == 1){
                            lastseenflag = true;
                        }
                        else{
                            lastseenflag = false;
                        }
                        if(lastseenflag){
                            jqcc[settings.theme].hideLastseen(buddy.id);
                        } else if(!lastseenflag){
                            if(Math.floor(new Date().getTime()/1000)-buddy.ls < (60*10) && buddy.s == 'available'){
                                    jqcc[settings.theme].hideLastseen(buddy.id);
                            }
                            else if(((buddy.s == 'away' || buddy.s == 'invisible' || buddy.s == 'busy' || buddy.s == 'offline') || Math.floor(new Date().getTime()/1000)-buddy.ls > (60*10)) && buddy.lstn == 0){
                                jqcc[settings.theme].showLastseen(buddy.id, buddy.ls);
                            }else{
                                $('#cometchat_messagElement_'+buddy.id).hide();
                            }
                        }
                    }
                    var statusclass = 'cometchat_user_'+buddy.s;
                    if(buddy.d==1){
                        statusclass = 'cometchat_mobile cometchat_mobile_'+buddy.s;
                    }

                    if(buddy.s!='offline'){
                        onlineNumber++;
                    }
                    totalFriendsNumber++;
                    var group = '';
                    var statusIndicator = '';

                    if(buddy.s=='invisible'){
                        buddy.s = 'offline';
                    }

                    unreadmessagecount = jqcc.cometchat.getUnreadMessageCount({contacts: [parseInt(buddy.id)]});
                    msgcountercss = "display:none;";
                    if(unreadmessagecount > 0) {
                        msgcountercss = "";
                    }
                    statusIndicator = '<div><div class="cometchat_userscontentdot '+statusclass+'"></div><div class="cometchat_buddylist_status" title="'+buddy.m+'">'+buddy.m+'</div></div>';

                    /*Audio Call Icon in BuddyList*/
                    var buddyListAudioCallIcon = '';
                    if(settings.dockedChatListAudioCall == 1){
                        buddyListAudioCallIcon = '<svg version="1.1" id="cometchat_audiocall_'+buddy.id+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" class="cometchat_audiocallsvg_icon" onclick="jqcc.ccaudiochat.init({to:\''+buddy.id+'\',chatroommode:\'0\'})" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" > <path d="M50,63c0.266,0,0.52-0.105,0.707-0.293l10-10c0.391-0.391,0.391-1.023,0-1.414l-14-14c-0.391-0.391-1.023-0.391-1.414,0L36,46.586L17.414,28l9.293-9.293c0.391-0.391,0.391-1.023,0-1.414l-14-14c-0.391-0.391-1.023-0.391-1.414,0l-10,10C1.105,13.48,1,13.735,1,14C1,41.019,22.981,63,50,63z M12,5.414L24.586,18l-9.293,9.293c-0.391,0.391-0.391,1.023,0,1.414l20,20c0.391,0.391,1.023,0.391,1.414,0L46,39.414L58.586,52l-8.998,8.998C23.998,60.777,3.223,40.002,3.002,14.413L12,5.414z"/></svg>'
                    }
                    if((buddy.s != 'offline' && settings.hideOffline == 1) || settings.hideOffline == 0){
                        buddylisttemp += group+'<div id="cometchat_userlist_'+buddy.id+'" class="cometchat_userlist" onmouseover="jqcc(this).addClass(\'cometchat_userlist_hover\');" onmouseout="jqcc(this).removeClass(\'cometchat_userlist_hover\');" amount="'+unreadmessagecount+'"><div style="display:inline-block;"><div class="cometchat_userscontentname">'+longname+'</div><div id="cometchat_buddylist_typing_'+buddy.id+'" class="cometchat_buddylist_typing"></div></div>'+statusIndicator+'<div class="cometchat_unreadCount cometchat_floatR" style="'+msgcountercss+'">'+unreadmessagecount+'</div>'+buddyListAudioCallIcon+'</div>';
                        buddylisttempavatar += group+'<div id="cometchat_userlist_'+buddy.id+'" class="cometchat_userlist" onmouseover="jqcc(this).addClass(\'cometchat_userlist_hover\');" onmouseout="jqcc(this).removeClass(\'cometchat_userlist_hover\');" amount="'+unreadmessagecount+'"><div class="cometchat_userscontentavatar"><img class="cometchat_userscontentavatarimage" original="'+buddy.a+'"></div><div style="display:inline-block;"><div class="cometchat_userscontentname">'+longname+'</div><div id="cometchat_buddylist_typing_'+buddy.id+'" class="cometchat_buddylist_typing"></div></div>'+statusIndicator+'<div class="cometchat_unreadCount cometchat_floatR" style="'+msgcountercss+'">'+unreadmessagecount+'</div>'+buddyListAudioCallIcon+'</div>';
                    }

                    var message = '';
                    if(settings.displayOnlineNotification==1&&jqcc.cometchat.getExternalVariable('initialize')!=1&&jqcc.cometchat.getThemeArray('buddylistStatus', buddy.id)!=buddy.s&&buddy.s=='available'){
                        message = language[19];
                    }
                    if(settings.displayBusyNotification==1&&jqcc.cometchat.getExternalVariable('initialize')!=1&&jqcc.cometchat.getThemeArray('buddylistStatus', buddy.id)!=buddy.s&&buddy.s=='busy'){
                        message = language[21];
                    }
                    if(settings.displayOfflineNotification==1&&jqcc.cometchat.getExternalVariable('initialize')!=1&&jqcc.cometchat.getThemeArray('buddylistStatus', buddy.id)!='offline'&&buddy.s=='offline'){
                        message = language[20];
                    }
                    if(message!=''){
                        tooltipMessage += '<div class="cometchat_notification" onclick="javascript:jqcc.cometchat.chatWith(\''+buddy.id+'\')"><div class="cometchat_notification_avatar"><img class="cometchat_notification_avatar_image" src="'+buddy.a+'"></div><div class="cometchat_notification_message"><div class="cometchat_notification_uname">'+buddy.n+'&nbsp;</div>'+message+'<br/><span class="cometchat_notification_status">'+buddy.m+'</span></div><div style="clear:both" /></div>';
                    }

                    jqcc.cometchat.addBuddy(buddy);
                });

                var bltemp = buddylisttempavatar;
                if(totalFriendsNumber>settings.thumbnailDisplayNumber){
                    bltemp = buddylisttemp;
                }
                if(document.getElementById('cometchat_contactslist')){
                    if(bltemp!=''){
                        jqcc.cometchat.replaceHtml('cometchat_contactslist', '<div>'+bltemp+'</div>');
                    }else{
                        $('#cometchat_contactslist').html('<div class="cometchat_nofriends">'+language[14]+'</div>');
                    }
                }

                $("div.cometchat_userscontentavatar").find("img").each(function(){
                    if($(this).attr('original')){
                        $(this).attr("src", $(this).attr('original'));
                        $(this).removeAttr('original');
                    }
                });

                if(totalFriendsNumber>settings.searchDisplayNumber) {
                    $('#cometchat_searchbar').show();
                    jqcc.cometchat.setThemeVariable('hasSearchbox', 1);
                } else {
                    $('#cometchat_searchbar').hide();

                }

                /*Slim Scroll issue is here*/
                var userstabpopup = jqcc('#cometchat_userstab_popup');
                //var chatlistheight = (userstabpopup.outerHeight(false)-userstabpopup.find('.cometchat_userstabtitle').outerHeight(true)-userstabpopup.find('#cometchat_tabcontainer').outerHeight(true)-userstabpopup.find('#cometchat_searchbar').outerHeight(true))+"px";
                if(jqcc.cometchat.getThemeVariable('hasSearchbox')){
                    var chatlistheight = ($( ".right_footer" ).length == 1) ? "240px" : "259px";
                } else {
                    var chatlistheight = ($( ".right_footer" ).length == 1) ? "270px" : "286px";
                }

                if(mobileDevice){
                    userstabpopup.find('div#cometchat_userscontent').css('height',chatlistheight);
                    userstabpopup.find('#cometchat_userscontent #cometchat_contactslist > div').css({'height': chatlistheight});
                    userstabpopup.find('#cometchat_userscontent #cometchat_contactslist > div').css('overflow-y','auto');
                }else if(jqcc().slimScroll){
                    userstabpopup.find('div#cometchat_userscontent').css('height',chatlistheight);
                    userstabpopup.find('#cometchat_userscontent #cometchat_contactslist > div').css({'height': chatlistheight});
                    userstabpopup.find('#cometchat_userscontent #cometchat_contactslist > div').slimScroll({height: chatlistheight});
                }


                /*End*/

                $("#cometchat_search").keyup();
                $('#cometchat_contactslist div.cometchat_userlist').unbind('click');
                $('#cometchat_contactslist div.cometchat_userlist').live('click', function(e){
                    jqcc.cometchat.userClick(e.currentTarget,0);
                });
                siteOnlineNumber = onlineNumber;
                if(tooltipMessage!=''&& (!$('#cometchat_userstab_popup').hasClass('cometchat_tabopen') || $('#cometchat_userstab_popup').hasClass('cometchat_tabopen'))){
                    if(tooltipPriority<10){
                        if($.cookie(settings.cookiePrefix+"popup")&&$.cookie(settings.cookiePrefix+"popup")=='true'){
                            tooltipPriority = 108;
                            jqcc.docked.tooltip("cometchat_userstab", tooltipMessage, 0);
                            clearTimeout(notificationTimer);
                            notificationTimer = setTimeout(function(){
                                $('#cometchat_tooltip').css('display', 'none');
                                tooltipPriority = 0;
                            }, settings.notificationTime);
                        }
                    }
                }
            },
            recentList: function(item){
                var onlineNumber = 0;
                var totalFriendsNumber = 0;
                var lastGroup = '';
                var groupNumber = 0;
                var tooltipMessage = '';
                var chatlisttemp = '';
                if(jqcc.cometchat.getChatroomVars('showChatroomUsers') == 1){
                    userCountCss = '';
                }
                $.each(item, function(i, chat){
                    if(chat.n == null || chat.n == 'null' || chat.n == '' || typeof(chat.m) == "undefined") {
                        return;
                    }
                    var unreadmessagecount;
                    var msgcountercss = "display:none;";
                    var userCountCss = "style='display:none'";
                    var recentmessage = '';
                    var availablegroups = Object.keys(jqcc.cometchat.getChatroomVars('chatroomdetails'));
                    recentmessage = '<div class="cometchat_recentmessage">'+chat.m+'</div>';

                    if(chat.grp) {
                        var roomtype = '';
                        if(chat.n == null || chat.n == 'null' || chat.n == '' || typeof(chat.m) == "undefined") {
                           jqcc.cometchat.getChatroomDetails({id:chat.id,loadroom:1,force:1,msgcount:0  });
                        }

                        if(availablegroups.indexOf('_'+chat.id) == -1){
                            return;
                        }
                        longname = shortname = chat.n;

                        unreadmessagecount = jqcc.cometchat.getUnreadMessageCount({groups: [parseInt(chat.id)]});
                        if(unreadmessagecount>0){
                            msgcountercss = '';
                        }

                        if(chat.type == 1) {
                            roomtype = '<div class="cometchat_grouptype"><img src="'+staticCDNUrl+'layouts/'+settings.theme+'/images/lock.png" class="cometchat_grouptypeimage" /></div>';
                        }

                        if(chat.s == 2) {
                            chat.s = 1;
                        }

                        chatlisttemp += '<div id="cometchat_recentgrouplist_'+chat.id+'" class="cometchat_grouplist cometchat_recentgrouplist" onmouseover="jqcc(this).addClass(\'cometchat_grouplist_hover\');" onmouseout="jqcc(this).removeClass(\'cometchat_grouplist_hover\');" onclick="javascript:jqcc.cometchat.chatroom(\''+chat.id+'\',\''+cc_urlencode(shortname)+'\',\''+chat.type+'\',\''+chat.pass+'\',\''+chat.s+'\',\'1\',\'1\');" amount="'+unreadmessagecount+'"><div class="cometchat_groupscontentavatar"><img class="cometchat_groupscontentavatarimage" src="'+staticCDNUrl+'layouts/'+settings.theme+'/images/group.svg"></div><div><div class="cometchat_groupscontentname">'+longname+'</div></div>'+roomtype+recentmessage+'<div class="cometchat_unreadCount cometchat_floatR" style="'+msgcountercss+'">'+unreadmessagecount+'</div></div>';
                    } else {

                        if(chat.n == null || chat.n == 'null' || chat.n == '' || typeof(chat.m) == "undefined") {
                           jqcc[settings.theme].createChatbox(chat.id, null, null, null, null, null, null, null, null, 1);
                           return;
                       }

                        longname = chat.n;
                        var statusclass = 'cometchat_user_'+chat.s;
                        if(chat.d==1){
                            statusclass = 'cometchat_mobile cometchat_mobile_'+chat.s;
                        }

                        if(!chat.hasOwnProperty('a') || chat.a == ''){
                            chat.a = staticCDNUrl+'images/noavatar.png';
                        }

                        if(chat.s!='offline'){
                            onlineNumber++;
                        }
                        totalFriendsNumber++;

                        if(chat.s=='invisible'){
                            chat.s = 'offline';
                        }
                        unreadmessagecount = jqcc.cometchat.getUnreadMessageCount({contacts: [parseInt(chat.id)]});
                        if(unreadmessagecount>0) {
                            msgcountercss = '';
                        }
                        if((chat.s != 'offline' && settings.hideOffline == 1) || settings.hideOffline == 0){
                            chatlisttemp += '<div id="cometchat_recentlist_'+chat.id+'" class="cometchat_userlist cometchat_recentchatlist" onmouseover="jqcc(this).addClass(\'cometchat_userlist_hover\');" onmouseout="jqcc(this).removeClass(\'cometchat_userlist_hover\');" amount="'+unreadmessagecount+'"><div class="cometchat_recentcontentavatar"><img class="cometchat_recentcontentavatarimage" src="'+chat.a+'"></div><div style="display:inline-block;"><div class="cometchat_userscontentname">'+longname+'</div></div>'+recentmessage+'<div class="cometchat_unreadCount cometchat_floatR" style="'+msgcountercss+'">'+unreadmessagecount+'</div></div>';
                        }
                    }
                });

                var chatlist = chatlisttemp;

                if(document.getElementById('cometchat_recentlist')){
                    if(chatlist!=''){
                        jqcc.cometchat.replaceHtml('cometchat_recentlist', '<div>'+chatlist+'</div>');
                    }else{
                        $('#cometchat_recentlist').html('<div class="cometchat_nofriends">'+language['no_recent_chats']+'</div>');
                        jqcc[settings.theme].loadChatTab(1);
                    }
                }

                var userstabpopup = jqcc('#cometchat_userstab_popup');
                if(jqcc.cometchat.getThemeVariable('hasSearchbox')){
                    var chatlistheight = ($( ".right_footer" ).length == 1) ? "240px" : "259px";
                } else {
                    var chatlistheight = ($( ".right_footer" ).length == 1) ? "270px" : "286px";
                }

                if(mobileDevice){
                    userstabpopup.find('div#cometchat_userscontent').css('height',chatlistheight);
                    userstabpopup.find('#cometchat_userscontent #cometchat_recentlist > div').css({'height': chatlistheight});
                    userstabpopup.find('#cometchat_userscontent #cometchat_recentlist > div').css('overflow-y','auto');
                }else if(jqcc().slimScroll){
                    userstabpopup.find('div#cometchat_userscontent').css('height',chatlistheight);
                    userstabpopup.find('#cometchat_userscontent #cometchat_recentlist > div').css({'height': chatlistheight});
                    // userstabpopup.find('#cometchat_userscontent #cometchat_recentlist > div').slimScroll({height: chatlistheight});
                }

                $("#cometchat_search").keyup();
                $('#cometchat_recentlist div.cometchat_recentchatlist').unbind('click');
                $('#cometchat_recentlist div.cometchat_recentchatlist').live('click', function(e){
                    jqcc.cometchat.userClick(e.currentTarget,1);
                });
            },
            botList: function(item) {
                var botlisttemp = '';
                var bot_id = '';
                var bot_name = '';
                var bot_desc = '';
                var bot_structure = '';
                var bot_title = language['bot_info'];
                var bot_viewinfo = '';
                var descbox = '';
                var bot_avatar = '';

                $.each(item, function(i, bot){
                    if(bot.a == '' || typeof(bot.a) == "undefined"){
                        bot_avatar = staticCDNUrl+"layouts/docked/images/noavatar.png";
                    }else{
                        bot_avatar = bot.a;
                    }
                    botlisttemp += '<div id="cometchat_botlist_'+bot.id+'" class="cometchat_botlist" onmouseover="jqcc(this).addClass(\'cometchat_botlist_hover\');" onmouseout="jqcc(this).removeClass(\'cometchat_botlist_hover\');"><div class="cometchat_botscontentavatar"><img class="cometchat_botscontentavatarimage" src="'+bot_avatar+'"></div><div><div class="cometchat_botscontentname">'+bot.n+' <span class="cometchat_botrule"> @'+bot.n+'</span></div><div><div class="cometchat_botslist_desc">'+bot.d+'</div></div></div></div>';
                    jqcc.cometchat.setThemeArray('botlistName', bot.id, bot.n);
                    jqcc.cometchat.setThemeArray('botlistAvatar', bot.id, bot.a);
                    jqcc.cometchat.setThemeArray('botlistDescription', bot.id, bot.d);
                    jqcc.cometchat.setThemeArray('botlistApikey', bot.id, bot.api);
                });

                var userstabpopup = $('#cometchat_userstab_popup');
                if(document.getElementById('cometchat_botslist')){
                    if(botlisttemp!=''){
                        jqcc.cometchat.replaceHtml('cometchat_botslist', '<div>'+botlisttemp+'</div>');
                    }else{
                        $('#cometchat_botslist').html('<div class="cometchat_nobots">'+language['no_bots']+'</div>');
                    }
                }
                var botlistheight = userstabpopup.find('div#cometchat_userscontent').height();
                if(mobileDevice){
                    userstabpopup.find('#cometchat_botslist > div').css({'height': botlistheight});
                    userstabpopup.find('#cometchat_userscontent #cometchat_botslist > div').css('overflow-y','auto');
                }else if(jqcc().slimScroll){
                    userstabpopup.find('div#cometchat_userscontent').css('height',botlistheight);
                    userstabpopup.find('#cometchat_userscontent #cometchat_botslist > div').css({'height': botlistheight});
                    userstabpopup.find('#cometchat_userscontent #cometchat_botslist > div').slimScroll({height: botlistheight});
                }

                $('div.cometchat_botlist').on('click', function(e){
                    bot_id = $(this).attr('id');
                    bot_id = bot_id.split('_')[2];
                    bot_name = jqcc.cometchat.getThemeArray('botlistName', bot_id);
                    bot_avatar = jqcc.cometchat.getThemeArray('botlistAvatar', bot_id);
                    bot_desc = jqcc.cometchat.getThemeArray('botlistDescription', bot_id);

                    var botwidth= '400';
                    var bottop = '' ;
                    var botleft = '';
                    var bottom = '';

                    if(bot_avatar.indexOf('size')!=-1){
                        var avatar_size = bot_avatar.split('=')[1];
                        if(avatar_size != '75x75'){
                            avatar_size = '100x100';
                            bot_avatar = bot_avatar.split('=')[0]+'='+avatar_size;
                        }
                    }

                    bottop = (($(window).height() - 100)/ 2) ;
                    botleft = (($(window).width() - botwidth) / 2) + $(window).scrollLeft();
                    if (botleft < 0) { botleft = 0; }
                    if (bottop < 0) { bottop = 0; }
                    botleft = 'left:'+botleft+'px;';
                    bottop = 'top:'+bottop+'px;';
                    bottom = 'bottom:'+bottop+'px;';

                    bot_viewinfo = '<div class="cometchat_botcontainer_'+bot_id+'" id="cometchat_botcontainer" style="'+bottop+bottom+botleft+'width:'+botwidth+'px;"><div class="cometchat_botcontainer_title" onmousedown="dragStart(event, \'cometchat_botcontainer\')"><span class="cometchat_botcontainer_name">'+bot_title+'</span><div class="cometchat_closebotsbox cometchat_tooltip" title="'+language[27]+'" id='+bot_id+'></div><div style="clear:both"></div></div><div class="cometchat_botcontainer_body"><div class="cometchat_bot_info"><div id="cometchat_botlist_'+bot_id+'" class="cometchat_botinfo"><div class="cometchat_botdata"><img class="cometchat_botavatarimage" src="'+bot_avatar+'"></div><div style="clear:both"></div></div><div class="cometchat_botname">'+bot_name+'</div><div class="cometchat_botdesc">'+bot_desc+'</div></div></div></div>';

                    if($('#cometchat_botcontainer').length == 0){
                        jqcc("body").append(bot_viewinfo);
                    }else{
                         jqcc("body").find('#cometchat_botcontainer').remove();
                         jqcc("body").append(bot_viewinfo);
                    }

                    if(mobileDevice){
                        $('#cometchat_botcontainer').find('#cometchat_botdesc').css('overflow-y','auto');
                    }

                    if(jqcc().slimScroll){
                        var cometchat_slimscroll_height = $('#cometchat_botcontainer').find('.cometchat_botcontainer_body').height();
                        if(cometchat_slimscroll_height > 143){
                            cometchat_slimscroll_height = 143;
                            var cometchat_botdesc_newwidth = '';
                            $('#cometchat_botcontainer').find('.cometchat_botcontainer_body').height(cometchat_slimscroll_height);
                            $('#cometchat_botcontainer').find('.cometchat_botcontainer_body').slimScroll({height: (cometchat_slimscroll_height+25)+'px'});
                        }
                    }

                    $('.cometchat_closebotsbox').on('click', function(e){
                        bid = $(this).attr('id');
                        jqcc("body").find('.cometchat_botcontainer_'+bid).remove();
                    });
                });
            },
            chatWith: function(id){
                if(jqcc.cometchat.getThemeVariable('loggedout')==0 && jqcc.cometchat.getUserID() != id){
                    if(jqcc.cometchat.getThemeVariable('offline')==1){
                        jqcc.cometchat.setThemeVariable('offline', 0);
                        $('#cometchat_userstab_text').html(language[9]+' ('+jqcc.cometchat.getThemeVariable('lastOnlineNumber')+')');
                        jqcc.cometchat.chatHeartbeat(1);
                        $("#cometchat_optionsbutton_popup").find("span.available").click();
                    }
                    jqcc[settings.theme].createChatbox(
                        id,
                        jqcc.cometchat.getThemeArray('buddylistName', id),
                        jqcc.cometchat.getThemeArray('buddylistStatus', id),
                        jqcc.cometchat.getThemeArray('buddylistMessage', id),
                        jqcc.cometchat.getThemeArray('buddylistAvatar', id),
                        jqcc.cometchat.getThemeArray('buddylistLink', id),
                        jqcc.cometchat.getThemeArray('buddylistIsDevice', id),
                        1,
                        null
                    );
                }
            },
            userClick: function(listing,isrecent){
                if(typeof(isrecent) != "undefined" && isrecent == 1){
                    var id = $(listing).attr('id');
                    id = id.substr(21);
                } else {
                    var id = $(listing).attr('id');
                    id = id.substr(19);
                }

                if(typeof (jqcc[settings.theme].createChatbox)!=='undefined'){
                    jqcc[settings.theme].createChatbox(
                        id,
                        jqcc.cometchat.getThemeArray('buddylistName', id),
                        jqcc.cometchat.getThemeArray('buddylistStatus', id),
                        jqcc.cometchat.getThemeArray('buddylistMessage', id),
                        jqcc.cometchat.getThemeArray('buddylistAvatar', id),
                        jqcc.cometchat.getThemeArray('buddylistLink', id),
                        jqcc.cometchat.getThemeArray('buddylistIsDevice', id),
                        1,
                        null
                    );
                }
            },
            createChatbox: function(id, name, status, message, avatar, link, isdevice, chatboxstate, unreadmessagecount, restored){
                if(id==null||id==''){
                    return;
                }
                if(jqcc.cometchat.getThemeArray('buddylistName', id)==null||jqcc.cometchat.getThemeArray('buddylistName', id)==''){
                    jqcc.cometchat.createChatboxSet(id, name, status, message, avatar, link, isdevice, chatboxstate, unreadmessagecount, restored);
                }else{
                    if(typeof (jqcc[settings.theme].createChatboxData)!=='undefined'){
                            jqcc[settings.theme].createChatboxData(id, jqcc.cometchat.getThemeArray('buddylistName', id), jqcc.cometchat.getThemeArray('buddylistStatus', id), jqcc.cometchat.getThemeArray('buddylistMessage', id), jqcc.cometchat.getThemeArray('buddylistAvatar', id), jqcc.cometchat.getThemeArray('buddylistLink', id), jqcc.cometchat.getThemeArray('buddylistIsDevice', id), chatboxstate, unreadmessagecount, restored);
                    }
                }
            },
            createChatboxData: function(id, name, status, message, avatar, link, isdevice, chatboxstate, unreadmessagecount, restored){
                var cometchat_chatboxes = $("#cometchat_chatboxes");
                if(typeof(restored) == "undefined"){
                    var restored = 0;
                }
                if(chatboxOpened[id]!=null){
                    if(!$("#cometchat_user_"+id).hasClass('cometchat_tabclick')&&chatboxstate!=1){
                        if($('#cometchat_unseenUsers').find('#cometchat_user_'+id).length != 0) {
                            uid = 'cometchat_user_'+id;
                            jqcc[settings.theme].swapTab(uid,1);
                        } else if(restored!=1){
                            jqcc.cometchat.updateChatBoxState({id:id,s:chatboxstate});
                        }
                    }else if(chatboxstate == 1){
                        $("#cometchat_user_"+id).click();
                    }
                    jqcc[settings.theme].scrollBars();
                }else{
                var widthavailable = (jqcc(window).width() - jqcc('#cometchat_chatboxes').outerWidth() - chatboxWidth - chatboxDistance);
                if(widthavailable < (chatboxWidth+chatboxWidth)){
                    jqcc[settings.theme].rearrange(1);
                }else{
                    $('#cometchat_chatboxes_wide').width($('#cometchat_chatboxes_wide').width()+chatboxWidth+chatboxDistance);
                    $('#cometchat_chatboxes').css(jqcc.cometchat.getThemeVariable('dockedAlignment'),$('#cometchat_userstab').outerWidth(true)+'px');
                }
                var isMobile = '';
                /*if(isdevice == 1) {
                     isMobile = '<div class="cometchat_isMobile cometchat_isMobile_'+status+' cometchat_floatL"><div class="cometchat_mobileDot"></div></div>';
                }*/
                shortname = name;
                longname = name;
                var userAvatar = '';
                if(settings.dockedChatBoxAvatar == 1) {
                     userAvatar = '<div class="cometchat_userschatboxavatar"><img class="chatbox_avatar" src="'+jqcc.cometchat.getThemeArray('buddylistAvatar', id)+'" title="'+jqcc.cometchat.getThemeArray('buddylistName', id)+'"></div>';
                }
                if(jqcc('#cometchat_user_'+id).length == 0){
                    var chatBoxInlineCss = {'margin-right':chatboxDistance+'px','width':chatboxWidth+'px'};
                    if(settings.dockedAlignToLeft == 1){
                        chatBoxInlineCss = {'margin-left':chatboxDistance+'px','width':chatboxWidth+'px'};
                    }
                    $("<span/>").attr("id", "cometchat_user_"+id).attr("amount", 0).attr("userid", id).addClass("cometchat_tab").addClass('cometchat_tabopen_bottom').css(chatBoxInlineCss).html(isMobile +'<div class="cometchat_user_shortname">'+userAvatar+shortname+'</div><div class="cometchat_closebox cometchat_tooltip" title="'+language[74]+'" id="cometchat_closebox_bottom_'+id+'" style="margin-right:5px;"></div><div class="cometchat_unreadCount cometchat_floatR" style="display:none;"></div>').prependTo($("#cometchat_chatboxes_wide"));
                }
                var startlink = '';
                var endlink = '';
                var pluginstophtml = '';
                var pluginsbottomhtml='';
                var avchathtml = '';
                var audiochathtml = '';
                var smiliehtml = '';
                var pluginslength = settings.plugins.length;

                if((jqcc.cometchat.getThemeArray('isJabber', id)!=1)){
                    if(link != '' || pluginslength>0){
                        pluginstophtml += '<div class="cometchat_pluginstop">';
                        if(link != ''){
                            pluginstophtml += '<div class="cometchat_plugins_dropdownlist" name="cc_viewprofile" to="'+id+'" chatroommode="0" title="'+language['view_profile']+'" ><div class="cometchat_plugins_name cometchat_floatL">'+language['view_profile']+'</div></div>';
                        }
                    }
                    if(pluginslength>0){
                        pluginsbottomhtml += '<div class="cometchat_pluginsbottom">';
                        for(var i = 0; i<pluginslength; i++){
                            var name = 'cc'+settings.plugins[i];
                            if(mobileDevice && (settings.plugins[i]=='transliterate' || settings.plugins[i]=='screenshare')) {
                                continue;
                            }

                            if(typeof ($[name])=='object'){
                                if(settings.plugins[i]=='avchat') {
                                    if(mobileDevice){
                                            pluginsbottomhtml += '<div class="cometchat_plugins_openuplist" name="'+name+'" to="'+id+'" chatroommode="0" title="'+$[name].getTitle()+'" ><div class="cometchat_plugins_name cometchat_floatL">'+$[name].getTitle()+'</div></div>';
                                    } else {
                                        avchathtml = '<div id="cometchat_'+settings.plugins[i]+'_'+id+'" class="cometchat_tooltip cometchat_tabicons cometchat_'+settings.plugins[i]+'" name="'+name+'" to="'+id+'" chatroommode="0" title="'+$[name].getTitle()+'"></div>';
                                    }
                                } else if(settings.plugins[i]=='audiochat') {
                                    if(mobileDevice){
                                            pluginsbottomhtml += '<div class="cometchat_plugins_openuplist" name="'+name+'" to="'+id+'" chatroommode="0" title="'+$[name].getTitle()+'" ><div class="cometchat_plugins_name cometchat_floatL">'+$[name].getTitle()+'</div></div>';
                                    } else {
                                        audiochathtml = '<div id="cometchat_'+settings.plugins[i]+'_'+id+'" class="cometchat_tooltip cometchat_tabicons cometchat_'+settings.plugins[i]+'" name="'+name+'" to="'+id+'" chatroommode="0" title="'+$[name].getTitle()+'"></div>';
                                    }
                                } else if(settings.plugins[i]=='smilies') {
                                    smiliehtml = '<div class="cometchat_'+settings.plugins[i]+'" name="'+name+'" to="'+id+'" chatroommode="0" title="'+$[name].getTitle()+'"></div>';
                                } else if(settings.plugins[i]=='clearconversation' || settings.plugins[i]=='report' || settings.plugins[i]=='chathistory' || settings.plugins[i]=='block' || settings.plugins[i]=='save'){
                                        pluginstophtml += '<div class="cometchat_plugins_dropdownlist" name="'+name+'" to="'+id+'" chatroommode="0" title="'+$[name].getTitle()+'" ><div class="cometchat_plugins_name cometchat_floatL">'+$[name].getTitle()+'</div></div>';
                                }else{
                                        pluginsbottomhtml += '<div class="cometchat_plugins_openuplist" name="'+name+'" to="'+id+'" chatroommode="0" title="'+$[name].getTitle()+'" ><div class="cometchat_plugins_name cometchat_floatL">'+$[name].getTitle()+'</div></div>';
                                }
                            }
                        }
                        pluginsbottomhtml += '</div>';
                    }
                    if(link != '' || pluginslength>0){
                        pluginstophtml += '</div>';
                    }
                }

                if(typeof(chatboxstate)=="undefined" || chatboxstate == ''){
                    chatboxstate = 1;
                }
                var tabstateclass = (chatboxstate == 2)?'tabhidden':'tabopen';
                var prepend = '';
                var jabber = jqcc.cometchat.getThemeArray('isJabber', id);
                var plugins_openup_css = '';
                var inner_container_margin = '';
                var send_message_box = '';
                var cometchat_textarea = '';
                if(pluginsbottomhtml=='<div class="cometchat_pluginsbottom"></div>') {
                    plugins_openup_css = 'display:none';
                    inner_container_margin = 'margin-left:0px !important';
                }
                if(jqcc.cometchat.getThemeVariable('prependLimit') != '0' && jabber != 1){
                    prepend = '<div class="cometchat_prependMessages" onclick="jqcc.docked.prependMessagesInit('+id+')" id = "cometchat_prependMessages_'+id+'" style="display:block;">'+language[83]+'</div>';
                }
                if(mobileDevice){
                    cctextarea_width = "width:140px !important";
                    send_message_box = '<div id="cometchat_sendmessagebtn"></div>';
                }else{
                    cctextarea_width = "width:"+(chatboxWidth-65)+"px !important";
                }
                cometchat_textarea_struct = '<div class="cometchat_inner_container" style="'+inner_container_margin+'"><textarea class="cometchat_textarea" style="'+cctextarea_width+'"; placeholder="'+language[85]+'"></textarea>'+send_message_box+smiliehtml+'</div>';

                var plugin_divider = '<div class="cometchat_vline"></div>';
                if (audiochathtml == '' && avchathtml == '') {
                    plugin_divider = '';
                }

                $("<div/>").attr("id", "cometchat_user_"+id+"_popup").addClass('cometchat_tabpopup').addClass('cometchat_'+tabstateclass).html('<div class="cometchat_tabtitle">'+isMobile+'<span id="cometchat_typing_'+id+'" class="cometchat_typing"></span>'+userAvatar+'<div class="cometchat_name" title="'+longname+'">'+longname+'</div><div id="cometchat_closebox_'+id+'" title="'+language[74]+'" class="cometchat_closebox cometchat_floatR cometchat_tooltip"></div>'+plugin_divider+audiochathtml+avchathtml+'<div class="cometchat_plugins_dropdown"><div class="cometchat_plugins_dropdown_icon cometchat_tooltip" id="cometchat_plugins_dropdown_icon_'+id+'" title="'+language[73]+'"></div><div class="cometchat_popup_plugins">'+pluginstophtml+'</div></div></div></div><div class="cometchat_tabcontent"><div class = "cometchat_messagElement cometchat_lastseenmessage" id="cometchat_messagElement_'+id+'"></div><div class="cometchat_tabcontenttext" id="cometchat_tabcontenttext_'+id+'" onscroll="jqcc.'+settings.theme+'.chatScroll(\''+id+'\');"></div><div class="cometchat_tabcontentinput"><div class="cometchat_plugins_openup cometchat_floatL" style="'+plugins_openup_css+'"><div class="cometchat_plugins_openup_icon cometchat_tooltip" id="cometchat_plugins_openup_icon_'+id+'" title="'+language[73]+'"></div><div class="cometchat_popup_convo_plugins">'+pluginsbottomhtml+'</div></div>'+cometchat_textarea_struct+'</div></div>').appendTo($('#cometchat_user_'+id));

                if(restored!=1){
                    jqcc.cometchat.updateChatBoxState({id:id,s:chatboxstate});
                }
                jqcc.docked.addPopup(id);
                if(settings.lastseen == 1 && jqcc.cometchat.getThemeArray('buddylistLastseensetting',jqcc.cometchat.getUserID())==0){
                    if(lastseenflag){
                            jqcc[settings.theme].hideLastseen(id);
                    } else if(!lastseenflag){
                        var statusmsg = jqcc.cometchat.getThemeArray('buddylistStatus', id);
                        var lstsnSetting = jqcc.cometchat.getThemeArray('buddylistLastseensetting', id);
                        var buddylastseen = jqcc.cometchat.getThemeArray('buddylistLastseen', id);

                        if((Math.floor(new Date().getTime()/1000)-buddylastseen < (60*10)) && statusmsg == 'available'){
                                jqcc[settings.theme].hideLastseen(id);
                        }
                        else if(((statusmsg == 'away' || statusmsg == 'invisible' || statusmsg == 'busy' || statusmsg == 'offline') || Math.floor(new Date().getTime()/1000)-buddylastseen > (60*10)) && lstsnSetting == 0){
                            jqcc[settings.theme].showLastseen(id, buddylastseen);
                        }else{
                            $('#cometchat_messagElement_'+id).hide();
                        }
                    }
                }

                var cometchat_user_popup = $("#cometchat_user_"+id+"_popup");
                var cometchat_user_popup1 = document.getElementById("cometchat_user_"+id+"_popup");

                cometchat_user_popup.find('.cometchat_tabcontenttext').click(function(){
                    if(cometchat_user_popup.find(".cometchat_tabcontent .cometchat_chatboxpopup_"+id).length){
                        closeChatboxCCPopup(id,0);
                    }
                });

                if(cometchat_user_popup.find(".cometchat_prependMessages").length == 0){
                    $('#cometchat_user_'+id+'_popup').find('#cometchat_tabcontenttext_'+id).append(prepend);
                    $('#cometchat_user_'+id+'_popup').find(".cometchat_prependMessages").css("display","block");
                }

                jqcc.cometchat.setThemeArray('chatBoxesOrder', id, 0);
                chatboxOpened[id] = 1;
                allChatboxes[id] = 0;
                var temp = [];
                jqcc.each(chatboxOpened, function(key, value) {
                    if(value == 1) {
                        temp.push(parseInt(key));
                    }
                });
                jqcc.cometchat.setThemeVariable('openChatboxId', temp);
                var cometchat_user_id = $("#cometchat_user_"+id);

                if(!cometchat_user_popup.find('cometchat_uploadfile_'+id).length) {
                    var uploadf = document.createElement("INPUT");
                    uploadf.setAttribute("type", "file");
                    uploadf.setAttribute("class", "cometchat_fileupload");
                    uploadf.setAttribute("id", 'cometchat_uploadfile_'+id);
                    uploadf.setAttribute("name", "Filedata");
                    uploadf.setAttribute("multiple", "true");
                    cometchat_user_popup.find(".cometchat_tabcontent").append(uploadf);
                    uploadf.addEventListener("change", jqcc.ccfiletransfer.FileSelectHandler(cometchat_user_popup.find('.cometchat_tabcontent'),id,0), false);
                }

                cometchat_user_popup.click(function(){
                    var id = $(this).attr('id');
                    id = id.substring(15, id.length-6);
                    var classname = cometchat_user_popup.find('#cometchat_messagElement_'+id).attr('class')  == "cometchat_messagElement cometchat_lastseenmessage";
                    if(classname){
                        jqcc[settings.theme].hideLastseen(id);
                    }
                });

                cometchat_user_popup.mouseleave(function(){
                    var id = $(this).attr('id');
                    id = id.substring(15, id.length-6);
                    var classname = cometchat_user_popup.find('#cometchat_messagElement_'+id).attr('class')  == "cometchat_messagElement cometchat_lastseenmessage";
                    if(settings.lastseen && $.cookie(settings.cookiePrefix+"disablelastseen") == 'false' && classname){
                        var buddylastseen = jqcc.cometchat.getThemeArray('buddylistLastseen', id);
                        var statusmsg = jqcc.cometchat.getThemeArray('buddylistStatus', id);
                        var lstsnSetting = jqcc.cometchat.getThemeArray('buddylistLastseensetting', id);
                        var ishidden = cometchat_user_popup.find('#cometchat_messagElement_'+id).is(':hidden');
                        var cookievalue = $.cookie(settings.cookiePrefix+"disablelastseen");
                        var currentts = Math.floor(new Date().getTime()/1000);

                        if(ishidden && cookievalue == 'false' && ((statusmsg == 'away' || statusmsg == 'invisible' || statusmsg == 'busy' || statusmsg == 'offline') || currentts-buddylastseen > (60*10)) && lstsnSetting == '0' && $('#cometchat_messagElement_'+id).html() != ""){
                            $('#cometchat_messagElement_'+id).slideDown(500);
                        }else if(statusmsg != 'available' && buddylastseen == "" && $('#cometchat_messagElement_'+id).html() != ""){
                            $('#cometchat_messagElement_'+id).slideDown(500);
                        }
                    }
                });

                cometchat_user_popup.find('.cometchat_plugins_dropdown').click(function(e){
                    e.stopImmediatePropagation();
                    if(cometchat_user_popup.find(".cometchat_tabcontent .cometchat_chatboxpopup_"+id).length){
                        closeChatboxCCPopup(id);
                    }
                    if(cometchat_user_popup.find('.cometchat_plugins_openup').hasClass('cometchat_plugins_openup_active')) {
                        cometchat_user_popup.find('.cometchat_plugins_openup').toggleClass('cometchat_plugins_openup_active').find('div.cometchat_popup_convo_plugins').slideToggle('fast');
                        if($(this).hasClass('cometchat_plugins_openup_active')){
                            cometchat_user_popup.find('#cometchat_plugins_openup_icon_'+id).addClass('cometchat_pluginsopenup_arrowrotate');
                        } else {
                            cometchat_user_popup.find('#cometchat_plugins_openup_icon_'+id).removeClass('cometchat_pluginsopenup_arrowrotate');
                        }
                    }
                    $(this).toggleClass('cometchat_plugins_dropdown_active').find('div.cometchat_popup_plugins').slideToggle('fast');

                    if($(this).hasClass('cometchat_plugins_dropdown_active')){
                        cometchat_user_popup.find('#cometchat_plugins_dropdown_icon_'+id).addClass('cometchat_pluginsdropdown_arrowrotate');
                    } else {
                        cometchat_user_popup.find('#cometchat_plugins_dropdown_icon_'+id).removeClass('cometchat_pluginsdropdown_arrowrotate');
                    }

                    if(mobileDevice){
                        cometchat_user_popup.find('.cometchat_pluginstop').css('overflow-y','auto');
                    }
                    if(jqcc().slimScroll){
                        var cometchat_slimscroll_height = cometchat_user_popup.find('.cometchat_pluginstop').height();
                        var cometchat_slimscroll_width = cometchat_user_popup.find('.cometchat_pluginstop').width();
                        cometchat_user_popup.find('.cometchat_pluginstop').slimScroll({height: (cometchat_slimscroll_height)+'px', width: (cometchat_slimscroll_width)+'px'});
                        cometchat_user_popup.find('.cometchat_popup_plugins').find('.slimScrollDiv').css({'box-shadow': '0px 5px 8px -3px #D1D1D1'});
                    }
                });

                cometchat_user_popup.find('.cometchat_plugins_openup').click(function(){
                    if(cometchat_user_popup.find(".cometchat_tabcontent .cometchat_chatboxpopup_"+id).length){
                        closeChatboxCCPopup(id);
                    } else {
                        if(cometchat_user_popup.find('.cometchat_plugins_dropdown').hasClass('cometchat_plugins_dropdown_active')) {
                            cometchat_user_popup.find('.cometchat_plugins_dropdown').toggleClass('cometchat_plugins_dropdown_active').find('div.cometchat_popup_plugins').slideToggle('fast');
                            if($(this).hasClass('cometchat_plugins_dropdown_active')){
                                cometchat_user_popup.find('#cometchat_plugins_dropdown_icon_'+id).addClass('cometchat_pluginsdropdown_arrowrotate');
                            } else {
                                cometchat_user_popup.find('#cometchat_plugins_dropdown_icon_'+id).removeClass('cometchat_pluginsdropdown_arrowrotate');
                            }
                        }
                        $(this).toggleClass('cometchat_plugins_openup_active').find('div.cometchat_popup_convo_plugins').slideToggle('fast');

                        if($(this).hasClass('cometchat_plugins_openup_active')){
                            cometchat_user_popup.find('#cometchat_plugins_openup_icon_'+id).addClass('cometchat_pluginsopenup_arrowrotate');
                        } else {
                            cometchat_user_popup.find('#cometchat_plugins_openup_icon_'+id).removeClass('cometchat_pluginsopenup_arrowrotate');
                        }
                    }

                    if(mobileDevice){
                        cometchat_user_popup.find('.cometchat_pluginsbottom').css('overflow-y','auto');
                    }else if(jqcc().slimScroll){
                        var cometchat_slimscroll_height = cometchat_user_popup.find('.cometchat_pluginsbottom').height();
                        var cometchat_slimscroll_width = cometchat_user_popup.find('.cometchat_pluginsbottom').width();
                        if(cometchat_user_popup.find('.cometchat_pluginsbottom').parent().hasClass('slimScrollDiv')){
                            cometchat_user_popup.find('.cometchat_popup_convo_plugins').find("div.slimScrollDiv").css('height', (cometchat_slimscroll_height+1)+'px');
                            cometchat_user_popup.find('.cometchat_popup_convo_plugins').find("div.slimScrollDiv").css('width', (cometchat_slimscroll_width+1)+'px');
                        }else{
                            cometchat_user_popup.find('.cometchat_pluginsbottom').slimScroll({height: (cometchat_slimscroll_height+1)+'px', width: (cometchat_slimscroll_width+1)+'px'});
                        }
                        var scrolltop_height = parseInt(285 - cometchat_slimscroll_height);
                        cometchat_user_popup.find('.cometchat_popup_convo_plugins').find('.slimScrollDiv').css({'top':scrolltop_height,'box-shadow': '0px -4px 10px -3px #d1d1d1'});
                    }
                });

                cometchat_user_popup.find('.cometchat_plugins_openuplist, .cometchat_plugins_dropdownlist, .cometchat_smilies, .cometchat_avchat, .cometchat_audiochat').click(function(e){
                    e.stopImmediatePropagation();
                    var name = $(this).attr('name');
                    var to = $(this).attr('to');
                    var chatroommode = $(this).attr('chatroommode');
                    var controlparameters = {"to":to, "chatroommode":chatroommode};
                    if(cometchat_user_popup.find('.cometchat_plugins_openup').hasClass('cometchat_plugins_openup_active')){
                        cometchat_user_popup.find('.cometchat_plugins_openup').toggleClass('cometchat_plugins_openup_active').find('div.cometchat_popup_convo_plugins').slideToggle('fast');
                        if($(this).hasClass('cometchat_plugins_openup_active')){
                            cometchat_user_popup.find('#cometchat_plugins_openup_icon_'+id).addClass('cometchat_pluginsopenup_arrowrotate');
                        } else {
                            cometchat_user_popup.find('#cometchat_plugins_openup_icon_'+id).removeClass('cometchat_pluginsopenup_arrowrotate');
                        }
                    }
                    if(cometchat_user_popup.find('.cometchat_plugins_dropdown').hasClass('cometchat_plugins_dropdown_active')){
                        cometchat_user_popup.find('.cometchat_plugins_dropdown').toggleClass('cometchat_plugins_dropdown_active').find('div.cometchat_popup_plugins').slideToggle('fast');
                        if($(this).hasClass('cometchat_plugins_dropdown_active')){
                            cometchat_user_popup.find('#cometchat_plugins_dropdown_icon_'+id).addClass('cometchat_pluginsdropdown_arrowrotate');
                        } else {
                            cometchat_user_popup.find('#cometchat_plugins_dropdown_icon_'+id).removeClass('cometchat_pluginsdropdown_arrowrotate');
                        }
                    }
                    if(name == 'cc_viewprofile'){
                        location.href = jqcc.cometchat.getThemeArray('buddylistLink', id);
                    } else {
                        jqcc[name].init(controlparameters);
                    }
                });

                cometchat_user_id.find('.chatbox_avatar').click(function(e){
                    if (jqcc.cometchat.getThemeArray('buddylistLink', id) != '') {
                        location.href = jqcc.cometchat.getThemeArray('buddylistLink', id);
                    }
                });

                cometchat_user_id.find('.cometchat_closebox').click(function(e){
                    e.stopImmediatePropagation();
                    jqcc.docked.closeChatbox(id);
                });

                cometchat_user_popup.find('.cometchat_tabtitle').click(function(e){
                    e.stopImmediatePropagation();
                    cometchat_user_id.find(cometchat_user_popup).removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                    chatboxOpened[id] = 0;
                    jqcc.cometchat.updateChatBoxState({id:id,s:2});
                });

                cometchat_user_id.off("click").click(function(e){
                    cometchat_user_id.find(cometchat_user_popup).removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                    $.each($('#cometchat_user_'+id+'_popup .cometchat_chatboxmessage'),function (i,divele){
                        if($(this).find(".cometchat_ts") != ''){
                            var msg_containerHeight = $(this).find(".cometchat_ts_margin").outerHeight()-8;
                            var cometchat_ts_margin_right = $(this).find(".cometchat_ts_margin").outerWidth(true)+5;
                            jqcc(this).find('.cometchat_ts').css('margin-top',msg_containerHeight);
                            jqcc(this).find('.cometchat_ts').css('margin-right',cometchat_ts_margin_right);
                        }
                    });
                    jqcc.cometchat.setThemeArray('chatBoxesOrder', id, 0);
                    chatboxOpened[id] = 1;
                    jqcc.cometchat.updateChatBoxState({id:id,s:1,c:0});
                    jqcc.docked.addPopup(id);
                });

                cometchat_user_popup.find("textarea.cometchat_textarea").blur(function(event){
                    jqcc.cometchat.typingTo({id:id,method:'typingStop'});
                });

                var cometchat_textarea = $("#cometchat_user_"+id+'_popup').find("textarea.cometchat_textarea");
                cometchat_textarea.keydown(function(event){
                    if(typingSenderFlag != 0 ) {
                        jqcc.cometchat.typingTo({id:id,method:'typingTo'});
                        typingSenderFlag = 0;
                        clearTimeout(typingSenderTimer);
                        typingSenderTimer = setTimeout(function(){
                            typingSenderFlag = 1;
                            jqcc.cometchat.typingTo({id:id,method:'typingStop'});
                        },5000);
                    }
                    return jqcc[settings.theme].chatboxKeydown(event, this, id);
                });
                cometchat_textarea.keyup(function(event){
                    jqcc.docked.resizeinputTextarea(cometchat_user_popup,this,id,event);
                    return jqcc[settings.theme].chatboxKeyup(event, this, id);
                });
                var extensions_list = settings.extensions;
                if(extensions_list.indexOf('ads') > -1){
                    jqcc.ccads.init(id);
                }
                jqcc('#cometchat_sendmessagebtn').click(function(e){
                    var message = cometchat_textarea.val();
                    message = message.replace(/^\s+|\s+$/g, "");
                    jqcc.cometchat.sendMessage(id, message);
                    cometchat_textarea.val('');
                    cometchat_textarea.addClass('cometchat_placeholder');
                    $(cometchat_textarea).attr('style', 'height: 15px !important;width:140px !important;');
                    cometchat_user_popup.find('.cometchat_inner_container').height(20);
                    if(cometchat_user_popup.find('.cometchat_tabcontent .cometchat_chatboxpopup_'+id).length == 0){
                        cometchat_user_popup.find('.cometchat_tabcontenttext').height(chatboxHeight-75);
                    }else{
                        var iframe_name = jqcc('.cometchat_iframe').attr('id');
                        var default_height = 0;
                        if (iframe_name == 'cometchat_trayicon_smilies_iframe'){
                            default_height = 108;
                        }else if(iframe_name == 'cometchat_trayicon_stickers_iframe'){
                            default_height = 102;
                        }else if(iframe_name == 'cometchat_trayicon_handwrite_iframe'){
                            default_height = 143;
                        }
                        if(default_height!=0){
                            if(iframe_name == 'cometchat_trayicon_smilies_iframe') {
                                var paramstoresizeIframe = {
                                    type:"plugin",
                                    name:"smilies",
                                    method: 'resizeContainerbody',
                                    params:{
                                        height:default_height
                                    }
                                };
                                cometchat_user_popup.find('.cometchat_iframe')[0].contentWindow.postMessage('CC^CONTROL_'+JSON.stringify(paramstoresizeIframe),'*');
                            }else{
                                cometchat_user_popup.find('.cometchat_iframe').height(default_height);////143 is the default height of sketch popup
                            }
                        }
                    }
                });
                if(olddata[id]!=1&&(jqcc.cometchat.getExternalVariable('initialize')!=1||isNaN(id))){
                    jqcc.cometchat.updateChatboxSet(id);
                    olddata[id] = 1;
                }
                attachPlaceholder("#cometchat_user_"+id+'_popup');
                cometchat_user_id.find('.cometchat_closebox').click(function(e){
                    e.stopImmediatePropagation();
                    jqcc.docked.closeChatbox(id);
                });

                cometchat_user_popup.find('.cometchat_tabtitle').click(function(e){
                    e.stopImmediatePropagation();
                    cometchat_user_id.find(cometchat_user_popup).removeClass('cometchat_tabopen').addClass('cometchat_tabhidden');
                    chatboxOpened[id] = 0;
                    if(restored!=1){
                        jqcc.cometchat.updateChatBoxState({id:id,s:2});
                    }
                });

                jqcc.docked.updateReadMessages(id);
                //jqcc.docked.rearrange();
                }
                if(typeof(jqcc.cometchat.checkInternetConnection) && !jqcc.cometchat.checkInternetConnection()) {
                    jqcc.docked.noInternetConnection(true);
                }
            },
            resizeinputTextarea: function(cometchat_user_popup,chatboxtextarea,id,event){
                var forced = 1;
                var difference = $(chatboxtextarea).innerHeight() - $(chatboxtextarea).height();
                var cctabcontenttext_resize = '';
                var container_height = cometchat_user_popup.find('.cometchat_inner_container').outerHeight();
                var textAreaResizeWidth = chatboxWidth-68;
                if ($(chatboxtextarea).innerHeight < chatboxtextarea.scrollHeight ) {
                } else if(event.keyCode != 13) {
                    if($(chatboxtextarea).height() < 50 || event.keyCode == 8) {
                        if(mobileDevice){
                            $(chatboxtextarea).attr('style', 'height: 15px !important;width:140px !important;');
                        }else{
                            $(chatboxtextarea).attr('style', 'height: 15px !important;width:'+textAreaResizeWidth+'px !important;');
                        }
                        cometchat_user_popup.find('.cometchat_inner_container').height(20);
                        if(chatboxtextarea.scrollHeight - difference >= 47){
                                if(mobileDevice){
                                    $(chatboxtextarea).attr('style', 'height: 50px !important;width:140px !important;');
                                    cometchat_user_popup.find('.cometchat_inner_container').height((chatboxtextarea.scrollHeight - difference) + 12);
                                    $(chatboxtextarea).css('overflow-y','auto');
                                }else{
                                    $(chatboxtextarea).slimScroll({scroll: '1'});
                                    $(chatboxtextarea).attr('style', 'height: 50px !important;width:'+textAreaResizeWidth+'px !important;');
                                    cometchat_user_popup.find('.cometchat_inner_container').height((chatboxtextarea.scrollHeight - difference) + 12);
                                    cometchat_user_popup.find('.cometchat_inner_container .slimScrollDiv').css({'float':'left','width':(textAreaResizeWidth+8)+'px'});
                                    var cometchatInputval = $(chatboxtextarea).val();
                                    $(chatboxtextarea).focus().val("").val(cometchatInputval);
                                }
                                $(chatboxtextarea).focus();
                                cometchat_user_popup.find('.cometchat_inner_container').height(56);

                        }else if(chatboxtextarea.scrollHeight - difference>20){
                            if(mobileDevice){
                                $(chatboxtextarea).attr('style', 'height: '+(chatboxtextarea.scrollHeight - difference)+'px !important;width:140px !important;');
                            }else{
                                $(chatboxtextarea).attr('style', 'height: '+(chatboxtextarea.scrollHeight - difference)+'px !important;width:'+textAreaResizeWidth+'px !important;');
                            }
                            cometchat_user_popup.find('.cometchat_inner_container').height((chatboxtextarea.scrollHeight - difference) + 7);
                        }
                        var newcontainerheight = cometchat_user_popup.find('.cometchat_inner_container').outerHeight();
                        if(container_height!=(newcontainerheight)){
                            cctabcontenttext_resize = (cometchat_user_popup.find('.cometchat_tabcontent').height() - cometchat_user_popup.find('.cometchat_inner_container').height() - 10);
                            if(cometchat_user_popup.find('.cometchat_tabcontent .cometchat_chatboxpopup_'+id).length == 0){
                                cometchat_user_popup.find('.cometchat_tabcontenttext').height(cctabcontenttext_resize - 1);
                                if($('#cometchat_tabcontenttext_'+id).parent().hasClass('slimScrollDiv') == true){
                                    $('#cometchat_tabcontenttext_'+id).parent().height(cctabcontenttext_resize);
                                }
                                jqcc[settings.theme].scrollDown(id);
                            }else{
                                var iframe_name = jqcc('.cometchat_iframe').attr('id');
                                var default_height = 0;//default height of sketch popup of handwrite
                                if (iframe_name == 'cometchat_trayicon_smilies_iframe'){
                                    default_height = 108;
                                }else if(iframe_name == 'cometchat_trayicon_stickers_iframe'){
                                    default_height = 102;
                                }else if(iframe_name == 'cometchat_trayicon_handwrite_iframe'){
                                    default_height = 143;
                                }
                                if(default_height!=0){
                                    var new_height = (cometchat_user_popup.find('.cometchat_tabcontentinput').height()-22);
                                    var paramstoresizeIframe = {
                                        type:"plugin",
                                        name:"smilies",
                                        method: 'resizeContainerbody',
                                        params:{
                                            height:default_height-new_height
                                        }
                                    };
                                    cometchat_user_popup.find('.cometchat_iframe')[0].contentWindow.postMessage('CC^CONTROL_'+JSON.stringify(paramstoresizeIframe),'*');
                                }
                            }
                            var inputheight = cometchat_user_popup.find('.cometchat_tabcontentinput').outerHeight();
                            cometchat_user_popup.find('.cometchat_popup_convo_plugins').css('bottom',inputheight);
                            var scrolltop_height = parseInt(cometchat_user_popup.find('.cometchat_popup_convo_plugins').outerHeight() - cometchat_user_popup.find('.cometchat_pluginsbottom').outerHeight());
                            cometchat_user_popup.find('.cometchat_popup_convo_plugins').find('.slimScrollDiv').css({'top':scrolltop_height});

                        }
                    }
                }else{
                    if(mobileDevice){
                        $(chatboxtextarea).attr('style', 'height: 15px !important;width:140px !important;');
                    }else{
                        $(chatboxtextarea).attr('style', 'height: 15px !important;width:165px !important;');
                    }
                    cometchat_user_popup.find('.cometchat_inner_container').height(20);
                    if(cometchat_user_popup.find('.cometchat_tabcontent .cometchat_chatboxpopup_'+id).length == 0){
                        cometchat_user_popup.find('#cometchat_tabcontenttext_'+id).height(chatboxHeight-75);
                        if($('#cometchat_tabcontenttext_'+id).parent().hasClass('slimScrollDiv') == true){
                            $('#cometchat_tabcontenttext_'+id).parent().height(chatboxHeight-75);
                        }
                        jqcc[settings.theme].scrollDown(id);
                    }else{
                        var iframe_name = jqcc('.cometchat_iframe').attr('id');
                        var default_height = 0;
                        if (iframe_name == 'cometchat_trayicon_smilies_iframe'){
                            default_height = 108;
                        }else if(iframe_name == 'cometchat_trayicon_stickers_iframe'){
                            default_height = 102;
                        }else if(iframe_name == 'cometchat_trayicon_handwrite_iframe'){
                            default_height = 143;
                        }
                        if(default_height!=0){
                            if(iframe_name == 'cometchat_trayicon_smilies_iframe') {
                                var paramstoresizeIframe = {
                                    type:"plugin",
                                    name:"smilies",
                                    method: 'resizeContainerbody',
                                    params:{
                                        height:default_height
                                    }
                                };
                                cometchat_user_popup.find('.cometchat_iframe')[0].contentWindow.postMessage('CC^CONTROL_'+JSON.stringify(paramstoresizeIframe),'*');
                            }else{
                                cometchat_user_popup.find('.cometchat_iframe').height(default_height);////143 is the default height of sketch popup
                            }
                        }
                    }
                    cometchat_user_popup.find('.cometchat_popup_convo_plugins').css('bottom',29);
                    var scrolltop_height = parseInt(cometchat_user_popup.find('.cometchat_popup_convo_plugins').outerHeight() - cometchat_user_popup.find('.cometchat_pluginsbottom').outerHeight());
                    cometchat_user_popup.find('.cometchat_popup_convo_plugins').find('.slimScrollDiv').css({'top':scrolltop_height});

                }
            },
            closeChatbox: function(id,from){
                var cometchat_user_popup = $("#cometchat_user_"+id+"_popup");

                if(cometchat_user_popup.length != 0){
                    jqcc.cometchat.setThemeArray('chatBoxesOrder', id, null);
                    delete(chatboxOpened[id]);
                    delete(allChatboxes[id]);
                    olddata[id] = 0;
                    jqcc.cometchat.updateChatBoxState({id:id,s:0,r:from});
                }

                if($('#cometchat_unseenchatboxes').find("#cometchat_user_"+id).length == 1) {
                    cometchat_user_popup.remove();
                    $("#cometchat_user_"+id).remove();
                    $('#cometchat_chatbox_left').click();
                    return;
                } else {
                    cometchat_user_popup.remove();
                    $("#cometchat_user_"+id).remove();
                }

               var cometchat_bot_popup = $("#cometchat_bot_"+id+"_popup");
               if(cometchat_bot_popup.length != 0){
                   cometchat_bot_popup.remove();
                   $("#cometchat_bot_"+id).remove();
                   $('#cometchat_chatboxes_wide').width($('#cometchat_chatboxes_wide').width()-chatboxWidth-chatboxDistance);
               }

                if($('#cometchat_unseenUsers').children().length > 0){
                    jqcc[settings.theme].popoutUnseenuser();
                }else{
                    $('#cometchat_chatboxes_wide').width($('#cometchat_chatboxes_wide').width()-chatboxWidth-chatboxDistance);
                }
            },
            updateChatboxSuccess: function(id, data){
                var name = jqcc.cometchat.getThemeArray('buddylistName', id);
                $("#cometchat_tabcontenttext_"+id).html('');
                if(jqcc.cometchat.getThemeVariable('prependLimit') != '0' && $('#cometchat_tabcontenttext_'+id).find(".cometchat_prependMessages").length == 0){
                    var prepend = '<div class=\"cometchat_prependMessages\" onclick\="jqcc.docked.prependMessagesInit('+id+')\" id = \"cometchat_prependMessages_'+id+'\">'+language[83]+'</div>';
                    $('#cometchat_tabcontenttext_'+id).append(prepend);
                    $('#cometchat_tabcontenttext_'+id).find(".cometchat_prependMessages").css('display','block');
                }
                if(typeof (jqcc[settings.theme].addMessages)!=='undefined'&&data.hasOwnProperty('messages')){
                    jqcc[settings.theme].addMessages(data['messages']);
                }
                jqcc[settings.theme].scrollDown(id);
            },
            addMessages: function(item){
                var todaysdate = new Date();
                var tdmonth  = todaysdate.getMonth();
                var tddate  = todaysdate.getDate();
                var tdyear = todaysdate.getFullYear();
                var today_date_class = tdmonth+"_"+tddate+"_"+tdyear;
                var ydaysdate = new Date((new Date()).getTime() - 3600000 * 24);
                var ydmonth  = ydaysdate.getMonth();
                var yddate  = ydaysdate.getDate();
                var ydyear = ydaysdate.getFullYear();
                var yday_date_class = ydmonth+"_"+yddate+"_"+ydyear;
                var d = '';
                var month = '';
                var date  = '';
                var year = '';
                var msg_date_class = '';
                var msg_date = '';
                var date_class = '';
                var msg_time = '';
                var msg_date_format = '';
                var jabber = '';
                var hw_ts = '';
                var cc_dir = '0';
                var prepend = '';
                var currenttime = Math.floor(new Date().getTime()/1000);
                var messagewrapperid = '';
                var trayIcons = jqcc.cometchat.getTrayicon();
                var isRealtimetranslateEnabled = trayIcons.hasOwnProperty('realtimetranslate');

                $.each(item, function(i, incoming){
                    incoming.message = jqcc.cometchat.htmlEntities(incoming.message);
                    if(typeof (incoming.message) =='undefined'){
                        return
                    }
                    if( (!incoming.hasOwnProperty('id') || incoming.id == '') && (!incoming.hasOwnProperty('localmessageid') || incoming.localmessageid == '') && (incoming.message).indexOf('CC^CONTROL_')==-1){
                        return;
                    }

                    if(typeof(incoming.self) ==='undefined' && typeof(incoming.old) ==='undefined' && typeof(incoming.sent) ==='undefined'){
                        incoming.sent = Math.floor(new Date().getTime()/1000);
                        incoming.old = 0;
                        incoming.self = 1;
                    }
                    if(typeof(incoming.m)!== 'undefined'){
                        incoming.message = incoming.m;
                    }
                    var message = jqcc.cometchat.processcontrolmessage(incoming);

                    if(incoming.hasOwnProperty('botid') && incoming.botid > 0){
                        incoming.self = 0;
                    }
                    if(message == null){
                        return;
                    }

                    if(isRealtimetranslateEnabled && jqcc.cookie(settings.cookiePrefix+'rttlang') && incoming.self == 0 && incoming.message.indexOf('CC^CONTROL_') == -1){
                        incoming.message = message;
                        text_translate(incoming);
                    }

                    var avchatdisplay = '';
                    if(message.indexOf('avchat_webaction=initiate')!=-1 || message.indexOf('avchat_webaction=acceptcall')!=-1){
                        avchatdisplay = "style='display:none;'";
                        var avchat_data = message.split('|');
                    }
                    if(typeof(incoming.nopopup) === "undefined" || incoming.nopopup =="") {
                        incoming.nopopup = 0;
                    }
                    if(typeof(incoming.broadcast) == "undefined" || incoming.broadcast != 0){
                        if(incoming.self ==1 ){
                            incoming.nopopup = 1;
                        }
                    }

                    if(incoming.jabber == 1 && typeof(incoming.selfadded) != "undefined" && incoming.selfadded != null) {
                       msg_time = incoming.id;
                       jabber = 1;
                    }else{
                      msg_time = incoming.sent;
                      jabber = 0;
                    }
                    msg_time = msg_time+'';

                    if (msg_time.length == 10){
                        msg_time = parseInt(msg_time * 1000);
                    }
                    months_set = new Array(language['jan'],language['feb'],language['mar'],language['apr'],language['may'],language['jun'],language['jul'],language['aug'],language['sep'],language['oct'],language['nov'],language['dec']);
                    d = new Date(parseInt(msg_time));
                    month  = d.getMonth();
                    date  = d.getDate();
                    year = d.getFullYear();
                    msg_date_class = month+"_"+date+"_"+year;
                    msg_date = months_set[month]+" "+date+", "+year;
                    date_class = "";

                    var type = 'th';
                    if(date==1||date==21||date==31){
                        type = 'st';
                    }else if(date==2||date==22){
                        type = 'nd';
                    }else if(date==3||date==23){
                        type = 'rd';
                    }
                    msg_date_format = date+type+' '+months_set[month]+', '+year;
                    if(msg_date_class == today_date_class){
                        date_class = "today";
                        msg_date = language['today'];
                    }else  if(msg_date_class == yday_date_class){
                        date_class = "yesterday";
                        msg_date = language['yesterday'];
                    }
                    checkfirstmessage = ($("#cometchat_tabcontenttext_"+incoming.from+" .cometchat_chatboxmessage").length) ? 0 : 1;

                    if(jqcc.cometchat.getCcvariable().internalVars.hasOwnProperty('chatboxstates')) {
                        var cc_states = jqcc.cometchat.getCcvariable().internalVars.chatboxstates;
                        if(!cc_states.hasOwnProperty(incoming.from) || (cc_states.hasOwnProperty(incoming.from) && (cc_states[incoming.from].split('|')[1]==0||cc_states[incoming.from].split('|')[1]=='') && (cc_states[incoming.from].split('|')[2]==''))){
                            if(settings.autoPopupChatbox==1&&incoming.self==0&&incoming.old!=1){
                                jqcc('#cometchat_contactslist').find('#cometchat_userlist_'+incoming.from).click();
                            }
                        }
                    } else if(settings.autoPopupChatbox==1&&incoming.self==0&&incoming.old!=1) {
                        jqcc('#cometchat_contactslist').find('#cometchat_userlist_'+incoming.from).click();
                    }

                    var chatboxopen = 0;
                    var alreadyreceivedunreadmessages = jqcc.cometchat.getFromStorage('receivedunreadmessages');
                    if(incoming.self != 1 && incoming.old != 1 && jqcc.cometchat.getCcvariable()['timestamp']<incoming.id){
                        jqcc.cometchat.getCcvariable()['timestamp'] = incoming.id;
                        jqcc.docked.addPopup(incoming.from, 1);
                    }
                    if(typeof(incoming.calledfromsend) === 'undefined'){
                        jqcc.docked.updateReceivedUnreadMessages(incoming.from,incoming.id);
                    }
                    if(incoming.hasOwnProperty('id')){
                        jqcc.cometchat.sendReceipt(incoming);
                        jqcc.cometchat.setThemeArray("lastmessageid",incoming.from,incoming.id);
                    }
                    var selfstyleAvatar = "";
                    var avatar = staticCDNUrl+"layouts/docked/images/noavatar.png";
                    var smileymsg = message.replace(/<img[^>]*>/g,"").trim();
                    var single_smiley_avatar = '';
                    var smileycount = (message.match(/cometchat_smiley/g) || []).length;

                    if(smileycount == 1 && smileymsg == '') {
                        message = message.replace('height="20"', 'height="64px"');
                        message = message.replace('width="20"', 'width="64px"');
                        single_smiley_avatar = "margin-top:10px";
                    }

                    if(parseInt(incoming.self)==1 && (!incoming.hasOwnProperty('botid') || (typeof incoming.botid == "undefined" && incoming.botid == 0))){
                        fromname = language[10];
                    }else{
                        if(typeof incoming.botid != "undefined" && incoming.botid != 0){
                            fromname = jqcc.cometchat.getThemeArray('botlistName', incoming.botid);
                            if(jqcc.cometchat.getThemeArray('botlistAvatar', incoming.botid)!=""){
                                avatar = jqcc.cometchat.getThemeArray('botlistAvatar', incoming.botid);
                            }
                        } else {
                            fromname = jqcc.cometchat.getThemeArray('buddylistName', incoming.from);
                            if(jqcc.cometchat.getThemeArray('buddylistAvatar', incoming.from)!=""){
                                avatar = jqcc.cometchat.getThemeArray('buddylistAvatar', incoming.from);
                            }
                        }
                        selfstyleAvatar = '<a class="cometchat_floatL" href="'+jqcc.cometchat.getThemeArray('buddylistLink', incoming.from)+'"><img class="ccmsg_avatar" style="'+single_smiley_avatar+'" src="'+avatar+'" title="'+fromname+'"/></a>';
                    }

                    if( incoming.hasOwnProperty('id')) {
                        messagewrapperid = incoming.id;
                    }else if(incoming.hasOwnProperty('localmessageid') ) {
                        messagewrapperid = incoming.localmessageid;
                    }

                    if($("#message_"+messagewrapperid).length>0){
                        $('#message_'+messagewrapperid).html(message);
                    }else{
                        sentdata = '';
                        if(incoming.sent!=null){
                            var ts = incoming.sent;
                            sentdata = jqcc.docked.getTimeDisplay(ts);
                        }
                        var msg = '';
                        var msg1 = '';
                        var msg2 = '';
                        var addMessage = 0;
                        var avatar = staticCDNUrl+"layouts/docked/images/noavatar.png";
                        var add_bg = '';
                        var add_arrow_class = '';
                        var add_style = "";//for images and smileys
                        var jabber = jqcc.cometchat.getThemeArray('isJabber', incoming.from);

                        if(jqcc.cometchat.getThemeVariable('prependLimit') != '0' && jabber != 1){
                            var prepend = '<div class=\"cometchat_prependMessages\" onclick\="jqcc.docked.prependMessagesInit('+incoming.from+')\" id = \"cometchat_prependMessages_'+incoming.from+'\">'+language[83]+'</div>';
                        }
                        if(parseInt(incoming.self)==1 && (!incoming.hasOwnProperty('botid') || (typeof incoming.botid == "undefined" && incoming.botid == 0))){
                           var sentdata_box = "<span class=\"cometchat_ts\">"+sentdata+"</span>";
                           if((message.indexOf('<img')==-1 && message.indexOf('src')==-1) || (smileycount > 0 && smileymsg != '')){
                                add_bg = 'cometchat_chatboxmessagecontent cometchat_self';
                                add_arrow_class = '<div class="selfMsgArrow"><div class="after"></div></div>';
                           }else{
                                if(message.indexOf('cometchat_smiley')!=-1) {
                                    if(smileycount > 1){
                                        add_style = "margin-right:13px;max-width:135px;";
                                    }else{
                                        add_style = "margin-right:13px";
                                    }
                                }else if(message.indexOf('cometchat_hw_lang')!=-1){
                                    add_style = "margin-right:18px;margin-left:4px";
                                }else{
                                    add_style = "margin-right:4px;margin-left:4px";
                                }
                            }
                            msg1 = '<div class="cometchat_time cometchat_time_'+msg_date_class+' '+date_class+'" msg_format="'+msg_date_format+'">'+msg_date+'</div>';
                            msg2 = '<div class="cometchat_chatboxmessage" id="cometchat_message_'+messagewrapperid+'"><div class="'+add_bg+' '+'cometchat_ts_margin cometchat_self_msg cometchat_floatR" style="'+add_style+'"><span id="message_'+messagewrapperid+'">'+message+'</span></div>'+add_arrow_class+' '+sentdata_box+'</div><span id="cometchat_chatboxseen_'+messagewrapperid+'"></span>';
                            msg =msg1+msg2;
                            addMessage = 1;

                        }else{
                            if(message.indexOf('cometchat_hw_lang')!=-1){
                                hw_ts = 'margin-left: 4px;';
                            }

                            var sentdata_box = "<span class=\"cometchat_ts_other\" style='"+hw_ts+"'>"+sentdata+"</span>";

                            if((message.indexOf('<img')==-1 && message.indexOf('src')==-1) || (smileycount > 0 && smileymsg != '')){
                                add_bg = 'cometchat_chatboxmessagecontent';
                                add_arrow_class = '<div class="msgArrow"><div class="after"></div></div>';
                            }else{
                                if(message.indexOf('cometchat_smiley')!=-1) {
                                    if(smileycount == 1 && smileymsg == ''){
                                        add_style = "margin:-4px 0px 0px 4px";
                                    }else{
                                        if(smileycount > 1){
                                            add_style = "margin:5px 5px 0px 8px;max-width:135px";
                                        }else{
                                            add_style = "margin:5px 5px 0px 8px";
                                        }
                                    }
                                }else if(message.indexOf('cometchat_hw_lang')!=-1){
                                    add_style = "margin:0px 0px 0px 8px";
                                }else{
                                    add_style = "margin:-6px 0px 0px 8px";
                                }
                            }

                            if(message.indexOf('avchat_webaction=initiate')!=-1){
                                jqcc.docked.generateIncomingAvchatData(incoming,avchat_data,currenttime);
                            }else if(message.indexOf('avchat_webaction=acceptcall')!=-1) {
                                var controlparameters = {"to":incoming.from, "grp":avchat_data[2], "start_url":''};
                                if(incoming.sent > currenttime - 15){
                                    jqcc.ccavchat.accept_fid(controlparameters);
                                }

                            }

                            msg1 = '<div class="cometchat_time cometchat_time_'+msg_date_class+' '+date_class+'" msg_format="'+msg_date_format+'">'+msg_date+'</div>';
	                        msg2 = '<div '+avchatdisplay+' class="cometchat_chatboxmessage" id="cometchat_message_'+messagewrapperid+'">'+selfstyleAvatar+'<div class="'+add_bg+' '+'cometchat_ts_margin cometchat_floatL" style="'+add_style+'"><span id="message_'+messagewrapperid+'" class="cometchat_msg">'+message+'</span></div>'+add_arrow_class+' '+sentdata_box+'</div>';
        	                msg =msg1+msg2;

                            addMessage = 1;
                        }
                        if(incoming.hasOwnProperty('id') && incoming.hasOwnProperty('localmessageid') && $("#cometchat_message_"+incoming.localmessageid).length>0){
                            $("#cometchat_message_"+incoming.localmessageid).after(msg);
                            $("#cometchat_message_"+incoming.localmessageid).remove();
                            $("#cometchat_chatboxseen_"+incoming.localmessageid).remove();
                            var offlinemessages = jqcc.cometchat.getFromStorage('offlinemessagesqueue');
                            if(offlinemessages.hasOwnProperty(incoming.localmessageid)) {
                                delete offlinemessages[incoming.localmessageid];
                                jqcc.cometchat.updateToStorage('offlinemessagesqueue',offlinemessages);
                            }
                        }else if(addMessage==1&&chatboxopen==0){
                            $("#cometchat_tabcontenttext_"+incoming.from).append(msg);
                        }

                        if($("#cometchat_message_"+messagewrapperid).find(".cometchat_ts") != ''){
                           var msg_containerHeight = $("#cometchat_message_"+messagewrapperid+" .cometchat_ts_margin").outerHeight()-8;
                           var cometchat_ts_margin_right = $("#cometchat_message_"+messagewrapperid+" .cometchat_ts_margin").outerWidth(true)+5;
                           jqcc('#cometchat_message_'+messagewrapperid).find('.cometchat_ts').css('margin-top',msg_containerHeight);
                           jqcc('#cometchat_message_'+messagewrapperid).find('.cometchat_ts').css('margin-right',cometchat_ts_margin_right);
                        }

                        if($("#cometchat_message_"+messagewrapperid).find(".cometchat_ts_other") != ''){
                           var cometchat_ts_other_margin_left = $("#cometchat_message_"+messagewrapperid+" .cometchat_ts_margin").outerWidth(true)+30;
                           if($("#cometchat_message_"+messagewrapperid+" .cometchat_ts_margin").outerWidth() >= 135){
                                jqcc('#cometchat_message_'+messagewrapperid).find('.cometchat_ts_other');
                           }else if(cc_dir == 1){
                           jqcc('#cometchat_message_'+messagewrapperid).find('.cometchat_ts_other').css('margin-left',cometchat_ts_other_margin_left);
                             }
                        }
                        $("#cometchat_istyping_"+incoming.from).remove();

                        if(typeof(messagewrapperid) != 'undefined' && !jqcc.isNumeric(messagewrapperid) &&  messagewrapperid.indexOf('_')>-1) {
                            $("#cometchat_chatboxseen_"+messagewrapperid).addClass('cometchat_offlinemessage');
                        }

                        if(undeliveredmessages.indexOf(messagewrapperid) >= 0){
                            $("#cometchat_chatboxseen_"+messagewrapperid).addClass('cometchat_deliverednotification');
                            undeliveredmessages.pop(messagewrapperid);
                        }
                        if(unreadmessages.indexOf(messagewrapperid) >= 0){
                            $("#cometchat_chatboxseen_"+messagewrapperid).addClass('cometchat_readnotification');
                            unreadmessages.pop(messagewrapperid);
                        }
                        var nowTime = new Date();
                        var idleDifference = Math.floor(nowTime.getTime()/1000)-jqcc.cometchat.getThemeVariable('idleTime');
                        if(idleDifference>5){
                            if(settings.windowTitleNotify==1 && disableLayout == 0){
                                document.title = language[15];
                            }
                        }
                        jqcc.docked.groupbyDate(incoming.from,jabber);

                        if($('#cometchat_user_'+incoming.from+'_popup .cometchat_prependMessages').length != 1){
                                $('#cometchat_tabcontenttext_'+incoming.from).prepend(prepend);
                        }

                        if(message.indexOf('<img')!=-1 && message.indexOf('src')!=-1){
                            $( "#cometchat_message_"+messagewrapperid+" img" ).load(function() {
                                jqcc.docked.scrollDown(incoming.from);
                                var cometchat_ts_margin_right = $("#cometchat_message_"+messagewrapperid+" .cometchat_ts_margin").outerWidth(true)+5;
                                jqcc('#cometchat_message_'+messagewrapperid).find('.cometchat_ts').css({'margin-right':cometchat_ts_margin_right});
                            });
                        }else{
                            jqcc.docked.scrollDown(incoming.from);
                        }
                    }

                    var newMessage = 0;
                    var isActiveChatBox = $('#cometchat_user_'+incoming.from+'_popup').find('textarea.cometchat_textarea').is(':focus');
                    /*Notification for AV Chat*/
                    if(message.indexOf('avchat_webaction=initiate')!=-1 || message.indexOf('avchat_webaction=acceptcall')!=-1){
                        message = jqcc.ccavchat.getLanguage('video_call');
                    }
                    /*Notification for AV Chat*/
                    if((jqcc.cometchat.getThemeVariable('isMini')==1||!isActiveChatBox)&&incoming.self!=1&&incoming.old==0&&settings.desktopNotifications==1){
                        var callChatboxEvent = function(){
                            if(typeof incoming.from!='undefined'){
                                for(x in desktopNotifications){
                                    for(y in desktopNotifications[x]){
                                        desktopNotifications[x][y].close();
                                    }
                                }
                                desktopNotifications = {};
                                if(jqcc.cometchat.getThemeVariable('isMini')==1){
                                    window.focus();
                                }
                                jqcc.cometchat.chatWith(incoming.from);
                            }
                        };
                        if(typeof desktopNotifications[incoming.from]!='undefined'){
                            var newMessageCount = 0;
                            for(x in desktopNotifications[incoming.from]){
                                ++newMessageCount;
                                desktopNotifications[incoming.from][x].close();
                            }
                            jqcc.cometchat.notify((++newMessageCount)+' '+language[46]+' '+jqcc.cometchat.getThemeArray('buddylistName', incoming.from), jqcc.cometchat.getThemeArray('buddylistName', incoming.from), language[47], callChatboxEvent, incoming.from, messagewrapperid);
                        }else{
                            jqcc.cometchat.notify(language[48]+' '+jqcc.cometchat.getThemeArray('buddylistName', incoming.from), jqcc.cometchat.getThemeArray('buddylistAvatar', incoming.from), message, callChatboxEvent, incoming.from, messagewrapperid);
                        }
                    }
                    var totalHeight = 0;
                    $("#cometchat_tabcontenttext_"+incoming.from).children().each(function(){
                        totalHeight = totalHeight+$(this).outerHeight(false);
                    });
                    if(newMessage>0){
                        if($('#cometchat_tabcontenttext_'+incoming.from).outerHeight(false)<totalHeight){
                            $('#cometchat_tabcontenttext_'+incoming.from).append('<div class="cometchat_new_message_unread"><a herf="javascript:void(0)" onClick="javascript:jqcc.docked.scrollDown('+incoming.from+');jqcc(\'#cometchat_tabcontenttext_'+incoming.from+' .cometchat_new_message_unread\').remove();">&#9660 '+language[54]+'</a></div>');
                        }
                        if ((typeof $.cookie(settings.cookiePrefix+"sound") == 'undefined' || $.cookie(settings.cookiePrefix+"sound") == null) || $.cookie(settings.cookiePrefix + "sound") == 'true') {
                            jqcc.docked.playSound(0);
                        }
                    }
                    if(visibleTab.indexOf(incoming.from) == -1) {
                        var unreadUnseenCount = $('#cometchat_unseenUsers').find('.unread_msg').length;
                        if(unreadUnseenCount > 0) {
                            $('#cometchat_unseenUserCount').html(unreadUnseenCount).show();
                        } else {
                            $('#cometchat_unseenUserCount').hide();
                        }
                    }
                    jqcc.docked.updateReadMessages(incoming.from);
                    if(settings.cometserviceEnabled == 1 && settings.messagereceiptEnabled == 1 && jqcc.cometchat.getCcvariable().callbackfn != "mobilewebapp" && (settings.transport == 'cometservice' || settings.transport == 'cometserviceselfhosted')  && incoming.old == 0 && incoming.self == 1 && incoming.direction == 0){
                        jqcc.docked.sentMessageNotify(incoming);
                    }
                    if(settings.disableRecentTab == 0){
                        message = jqcc.cometchat.processRecentmessages(message);
                        var params = {'chatid':incoming.from,'isgroup':0,'timestamp':incoming.sent,'m':message,'msgid':messagewrapperid,'force':0,'del':0};
                        jqcc.cometchat.updateRecentChats(params);
                    }
                });
            },
            addPopup: function(id, amount=0){
                if($('#cometchat_user_'+id+'_popup:visible').length != 0){
                    amount = 0;
                }
                amount = jqcc.cometchat.updateChatBoxState({id: parseInt(id), c: parseInt(amount)});
                var cometchat_user_id = jqcc("#cometchat_user_"+id+', #cometchat_recentlist_'+id+', #cometchat_userlist_'+id);

                if(amount > 0){
                    cometchat_user_id.addClass('cometchat_new_message').attr('amount', amount).find('div.cometchat_unreadCount').html(amount);
                    if ((typeof jqcc.cookie(settings.cookiePrefix+"sound") == 'undefined' || jqcc.cookie(settings.cookiePrefix+"sound") == null) || $.cookie(settings.cookiePrefix + "sound") == 'true') {
                        jqcc.docked.playSound(0);
                    }
                    cometchat_user_id.find('div.cometchat_unreadCount').show();
                }else{
                    cometchat_user_id.find('div.cometchat_unreadCount').hide();
                }
            },
            getTimeDisplay: function(ts){
                ts = parseInt(ts);
                var time = getTimeDisplay(ts);
                if((ts+"").length == 10){
                    ts = ts*1000;
                }
                var timeDataStart = time.hour+":"+time.minute+" "+time.ap;
                if(ts<jqcc.cometchat.getThemeVariable('todays12am')){
                    return timeDataStart+" "+time.date+time.type+" "+time.month;
                }else{
                    return timeDataStart;
                }
            },
            groupbyDate: function(id,j){
                if(j == '0' ){
                   $('#cometchat_user_'+id+'_popup .cometchat_time').hide();
                   $.each($('#cometchat_user_'+id+'_popup .cometchat_time'),function (i,divele){
                        var classes = $(divele).attr('class').split(/\s+/);
                        for(var i in classes){
                            if(typeof classes[i] == 'string') {
                                if(classes[i].indexOf('cometchat_time_') === 0){
                                    $('#cometchat_user_'+id+'_popup .'+classes[i]+':first').css('display','table');
                                }
                            }
                        }
                    });
                }else{
                    $('#cometchat_tabcontenttext_'+id+' .cometchat_time').hide();
                       $.each($('#cometchat_tabcontenttext_'+id+' .cometchat_time'),function (i,divele){
                        var classes = $(divele).attr('class').split(/\s+/);
                        for(var i in classes){
                            if(typeof classes[i] == 'string') {
                                if(classes[i].indexOf('cometchat_time_') === 0){
                                    $('#cometchat_tabcontenttext_'+id+' .'+classes[i]+':first').css('display','table');
                                }
                            }
                        }
                    });
                }
            },
            updateReadMessages: function(id){
                if($('#cometchat_user_'+id+'_popup:visible').find('.cometchat_chatboxmessage:not(.cometchat_self):last').length){
                    if(typeof (jqcc.cometchat.updateToStorage)!=='undefined'){
                        var alreadyreadmessages = jqcc.cometchat.getFromStorage('readmessages');
                        var lastid = parseInt($('#cometchat_user_'+id+'_popup').find('.cometchat_chatboxmessage[id]:not(.cometchat_self):last').attr('id').replace('cometchat_message_',''));
                        var messageboxid =  $('#cometchat_user_'+id+'_popup').find('.cometchat_chatboxmessage:not(.cometchat_self):last').attr('id');
                        if(typeof messageboxid != 'undefined' && messageboxid !=false){
                            if((typeof(alreadyreadmessages[id])!='undefined' && parseInt(alreadyreadmessages[id])<parseInt(lastid)) || typeof(alreadyreadmessages[id])=='undefined' || alreadyreadmessages[id]==null){
                                var readmessages={};
                                readmessages[id]= parseInt(lastid);
                                jqcc.cometchat.updateToStorage('readmessages',readmessages);
                            }
                        }
                    }
                }
            },
            noInternetConnection: function(flag) {
                if(flag) {
                    $('.cometchat_messagElement').removeClass("cometchat_lastseenmessage");
                    $('.cometchat_messagElement').addClass("cometchat_showOffline");
                    $('.cometchat_messagElement').slideDown(300);
                    $('.cometchat_messagElement').html(language['check_internet']);
                }else {
                    $('.cometchat_messagElement').removeClass("cometchat_showOffline");
                    $('.cometchat_messagElement').hide();
                    if(settings.lastseen == 1 && jqcc.cometchat.getThemeArray('buddylistLastseensetting',jqcc.cometchat.getUserID())==0){
                        $(".cometchat_messagElement").each(function(){
                            id = parseInt($(this).attr('id').replace('cometchat_messagElement_',''));
                            var buddylastseen = jqcc.cometchat.getThemeArray('buddylistLastseen', id);
                            var statusmsg = jqcc.cometchat.getThemeArray('buddylistStatus', id);
                            var lstsnSetting = jqcc.cometchat.getThemeArray('buddylistLastseensetting', id);
                            var currentts = Math.floor(new Date().getTime()/1000);
                            if(((statusmsg == 'away' || statusmsg == 'invisible' || statusmsg == 'busy' || statusmsg == 'offline') || currentts-buddylastseen > (60*10)) && lstsnSetting == '0'){
                                jqcc[settings.theme].showLastseen(id,jqcc.cometchat.getThemeArray('buddylistLastseen',id));
                                $('.cometchat_messagElement').addClass("cometchat_lastseenmessage");
                            }else{
                                $('#cometchat_messagElement_'+id).slideUp(300);
                                $('#cometchat_messagElement_'+id).html("");
                            }
                        })
                    }
                }
            },
            createUnseenUser: function(flag) {
                var detachElement = '';
                var typeid = '';
                if(flag == 1){
                    typeid = $('#cometchat_chatboxes').find('span.cometchat_tabopen_bottom:nth-child(2)').attr('id');
                }else{
                   typeid = $('#cometchat_chatboxes').find('span.cometchat_tabopen_bottom:first-child').attr('id');
                }

                if(typeof(typeid) == "undefined"){
                    return;
                }
                if(typeid.split('_')[1] == 'user'){
                    detachElement = $('#cometchat_chatboxes_wide').find('#'+typeid).detach();
                    id = typeid.split('_')[2];
                    chatboxOpened[id] = 0;
                }else if(typeid.split('_')[1] == 'group'){
                    detachElement =  $('#cometchat_chatboxes_wide').find('#'+typeid).detach();
                    id = typeid.split('_')[2];
                    var chatroomsOpened = jqcc.cometchat.getChatroomVars('chatroomsOpened');
                    chatroomsOpened[id] = 0;
                    jqcc.cometchat.setChatroomVars('chatroomsOpened',chatroomsOpened);
                }

                var bubble_align = ($('#cometchat_chatboxes_wide').outerWidth(true)+chatboxWidth+(3*chatboxDistance)) +'px';
                $('#cometchat_chatbox_left').css(jqcc.cometchat.getThemeVariable('dockedAlignment'),bubble_align);
                $('#cometchat_chatbox_left').show();

                var unseenUserHtml = '';
                $('#cometchat_unseenchatboxes').append(detachElement);
                $('#cometchat_unseenchatboxes').children().each(function(index){
                    var currentElem = $(this).attr('id');
                    var listid = '';
                    var unreadMsg = '';
                    var countVisible = '';
                    var amount = '';
                    var name = '';
                    if(currentElem.split('_')[1] == 'user'){
                        listid = $(this).attr('userid');
                        name = $(this).find('.cometchat_user_shortname').text();
                    }else if(currentElem.split('_')[1] == 'group'){
                        listid = $(this).attr('groupid');
                        name = $(this).find('div .cometchat_groupname').text();
                    }
                    unseenUserHtml += '<div id="'+currentElem+'" class="cometchat_unseenUserList"><div class="cometchat_unreadCount cometchat_floatL" '+countVisible+'>'+amount+'</div><div class="cometchat_userName cometchat_floatL">'+name+'</div><div class="cometchat_unseenClose cometchat_floatR" id="'+listid+'" uid="'+currentElem+'" ></div></div>';

                });
                if(unseenUserHtml == ''){
                    $('#cometchat_chatbox_left').find(".cometchat_unseenList_open").click();
                } else {
                    $('#cometchat_unseenUsers').html(unseenUserHtml);
                    $('#cometchat_chatbox_left').find(".cometchat_unseenList_open").click();
                }

                var count = $('#cometchat_unseenchatboxes').children().length;
                if(typeof(count) != "undefined"){
                    $('#cometchat_chatbox_left').find('.cometchat_tabtext').text(parseInt(count));
                    if(count == 0){
                        $('#cometchat_chatbox_left').hide();
                    }
                }
                $.docked.rearrange();
            },
            updateReceivedUnreadMessages: function(id,lastid){
                if(typeof (jqcc.cometchat.updateToStorage)!=='undefined'){
                    var alreadyreceivedmessages = jqcc.cometchat.getFromStorage('receivedunreadmessages');
                    if((typeof(alreadyreceivedmessages[id])!='undefined' && parseInt(alreadyreceivedmessages[id])<parseInt(lastid)) || typeof(alreadyreceivedmessages[id])=='undefined' || alreadyreceivedmessages[id]==null){
                        var receivedmessages={};
                        receivedmessages[id]= parseInt(lastid);
                        jqcc.cometchat.updateToStorage('receivedunreadmessages',receivedmessages);
                    }
                }
            },
            chatboxKeyup: function(event, chatboxtextarea, id){
                if(event.keyCode==27){
                    event.stopImmediatePropagation();
                    $(chatboxtextarea).val('');
                     $("#cometchat_user_"+id+"_popup").find('div.cometchat_tabtitle').click();
                }
                var adjustedHeight = chatboxtextarea.clientHeight;
                var maxHeight = 94;
                if(maxHeight>adjustedHeight){
                    adjustedHeight = Math.max(chatboxtextarea.scrollHeight, adjustedHeight);
                    if(maxHeight)
                        adjustedHeight = Math.min(maxHeight, adjustedHeight);
                }else{
                    $(chatboxtextarea).css('overflow-y', 'auto');
                }
            },
            chatboxKeydown: function(event, chatboxtextarea, id, force){
                var condition = 1;
                if((event.keyCode==13&&event.shiftKey==0)||force==1 && !$(chatboxtextarea).hasClass('cometchat_placeholder')){
                    var message = $(chatboxtextarea).val();
                    message = message.replace(/^\s+|\s+$/g, "");
                    $(chatboxtextarea).val('');
                    $(chatboxtextarea).css('overflow-y', 'hidden');
                    $(chatboxtextarea).focus();
                    if(settings.floodControl){
                        condition = ((Math.floor(new Date().getTime()))-lastmessagetime>2000);
                    }
                    if(settings.cometserviceEnabled == 1 && settings.istypingEnabled == 1 && settings.transport == 'cometservice'){
                        jqcc.cometchat.typingTo({id:id,method:'typingStop'});
                    }
                    if(message!=''){
                        if(condition){
                            var messageLength = message.length;
                            lastmessagetime = Math.floor(new Date().getTime());
                            if(jqcc.cometchat.getThemeArray('isJabber', id)!=1){
                                jqcc.cometchat.chatboxKeydownSet(id, message);
                            }else{
                                jqcc.ccjabber.sendMessage(id, message);
                            }
                        }else{
                            alert(language[53]);
                        }
                    }
                    return false;
                }
            },
            scrollDown: function(id){
            if(mobileDevice){
                 $('#cometchat_tabcontenttext_'+id).css('overflow-y','auto');
                 $('#cometchat_tabcontenttext_'+id).scrollTop(10000000);
            }else if(jqcc().slimScroll){
                    $('#cometchat_tabcontenttext_'+id).slimScroll({scroll: '1',railAlwaysVisible: true});
                }else{
                    setTimeout(function(){
                        $("#cometchat_tabcontenttext_"+id).scrollTop(50000);
                    }, 100);
                }
            },
            swapTab: function(typeid,mode) {
                if(typeof(typeid) != "undefined"){
                    var id;
                    $('#cometchat_unseenUsers').show();

                    if($('#cometchat_chatbox_left').hasClass('cometchat_unseenList_open')){
                        $('#cometchat_chatbox_left').removeClass('cometchat_unseenList_open');
                        $('#cometchat_chatbox_left').css('color','#333');
                    }

                    if(typeid.split('_')[1] == 'user'){
                        id = typeid.split('_')[2];
                        chatboxOpened[id] = 1;
                    }else if(typeid.split('_')[1] == 'group'){
                        id = typeid.split('_')[2];
                        var chatroomsOpened = jqcc.cometchat.getChatroomVars('chatroomsOpened');
                        chatroomsOpened[id] = 1;
                        jqcc.cometchat.setChatroomVars('chatroomsOpened',chatroomsOpened);
                    }
                    $('#cometchat_unseenUsers').find('#'+typeid).remove();
                    var appendElem = $('#cometchat_unseenchatboxes').find('#'+typeid).detach();
                    $('#cometchat_chatboxes_wide').prepend(appendElem);

                    if(mode){
                        $.docked.createUnseenUser(1);
                    }
                }
            },
            windowResize: function(silent){
                $.docked.scrollBars(silent);
                $.docked.closeTooltip();
                if(silent){
                    $.docked.rearrange();
                }
            },
            scrollBars: function(silent){
            },
            joinChatroom: function(roomid, inviteid, roomname){
                jqcc.cometchat.silentroom(roomid, inviteid, roomname, 0, 0);
            },
            closeTooltip: function(){
                $("#cometchat_tooltip").css('display', 'none');
            },
            popoutUnseenuser: function(flag){
                if(flag == 2){
                    $.each($('#cometchat_unseenUsers').children(),function (i,divele){
                        var widthavailable = (jqcc(window).width() - jqcc('#cometchat_chatboxes').outerWidth() - chatboxWidth - chatboxDistance);
                        if(widthavailable > (chatboxWidth+chatboxWidth)){
                            var popupid = $('#cometchat_unseenUsers').find('div.cometchat_unseenUserList:first-child').attr('id');
                            $.docked.swapTab(popupid,0);
                            $('#cometchat_chatboxes_wide').width($('#cometchat_chatboxes_wide').width()+chatboxWidth+chatboxDistance);
                        }
                    });
                }else{
                    if($('#cometchat_unseenUsers').children().length > 0){
                        var popupid = $('#cometchat_unseenUsers').find('div.cometchat_unseenUserList:first-child').attr('id');
                        $.docked.swapTab(popupid,0);
                    }
                }
                var count = $('#cometchat_unseenchatboxes').children().length;
                if(typeof(count) != "undefined"){
                $('#cometchat_chatbox_left').find('.cometchat_tabtext').text(parseInt(count));
                if(count == 0){
                        $('#cometchat_chatbox_left').hide();
                    }
                }
            },
            rearrange: function(force){
                var widthavailable = (jqcc(window).width() - jqcc('#cometchat_chatboxes').outerWidth() - chatboxWidth - chatboxDistance);
                if(force){
                    $.docked.createUnseenUser();
                }else{
                    if(widthavailable > (chatboxWidth+chatboxWidth)){
                        $.docked.popoutUnseenuser(2);
                        var bubble_align = ($('#cometchat_chatboxes_wide').outerWidth(true)+chatboxWidth+(3*chatboxDistance)) +'px';
                        $('#cometchat_chatbox_left').css(jqcc.cometchat.getThemeVariable('dockedAlignment'),bubble_align);
                    }else if(jqcc(window).width() <= $('#cometchat_chatboxes_wide').width()+chatboxWidth+chatboxWidth +chatboxDistance){
                        $('#cometchat_chatboxes_wide').width($('#cometchat_chatboxes_wide').width()-chatboxWidth-chatboxDistance);
                        $.docked.createUnseenUser();
                    }
                }
                var height = $('#cometchat_unseenUsers').height();
                    $('#cometchat_chatbox_left').find('#cometchat_unseenUsers').slimScroll({height:353});
                    var bottom = 374;
                    if($('#cometchat_unseenUsers').parent().hasClass('slimScrollDiv')){
                    if(settings.dockedAlignToLeft == 1){
                        $('#cometchat_unseenUsers').parent().css({'bottom':bottom,'width':'130px','left':'-7px'});
                    }else{
                        $('#cometchat_unseenUsers').parent().css({'bottom':bottom,'width':'130px','right':'97px'});
                    }
                     $('#cometchat_chatbox_left').find('#cometchat_unseenUsers').css('bottom','0');
                 }
            },

            loggedOut: function(){
                document.title = jqcc.cometchat.getThemeVariable('documentTitle');
                if(settings.ccauth.enabled=="1"){
                }else{
                    $("#loggedout").addClass("cometchat_optionsimages_exclamation");
                    $("#loggedout").attr("title",language[8]);
                }
                /* Changes for guest modal on chat.pcs START */
                    var controlparameters = {"type":"core", "name":"cometchat", "method":"customlogout", "params":{"to":"0"}};
                    controlparameters = JSON.stringify(controlparameters);
                    parent.postMessage('CC^CONTROL_'+controlparameters,'*');
                /* Changes for guest modal on chat.pcs END */
                $("#loggedout").show();
                $("#cometchat_hidden").css('display','block');
                msg_beep = $("#messageBeep").detach();
                side_bar = $("#cometchat_sidebar").detach();
                option_button = $("#cometchat_optionsbutton_popup").detach();
                user_tab = $("#cometchat_userstab_popup").detach();
                chat_boxes = $("#cometchat_chatboxes").detach();
                chat_left = $("#cometchat_chatbox_left").detach();
                unseen_users = $("#cometchat_unseenUsers").detach();
                usertab2 = $("#cometchat_userstab").detach();
                $("span.cometchat_tabclick").removeClass("cometchat_tabclick");
                $("div.cometchat_tabopen").removeClass("cometchat_tabopen");
                jqcc.cometchat.setThemeVariable('loggedout', 1);
                $.cookie(settings.cookiePrefix+"loggedin", null, {path: '/'});
                $.cookie(settings.cookiePrefix+"state", null, {path: '/'});
                if($.cookie(settings.cookiePrefix+"crstate")){
                    $.cookie(settings.cookiePrefix+"crstate", null, {path: '/'});
                }
            },
            countMessage: function(){
                return;
                /*if(jqcc.cometchat.getThemeVariable('loggedout')==0){
                    var cc_state = $.cookie(settings.cookiePrefix+'state');
                    jqcc.cometchat.setInternalVariable('updatingsession', '1');
                    if(cc_state!=null){
                        var cc_states = cc_state.split(/:/);
                        if(jqcc.cometchat.getThemeVariable('offline')==0){
                            var value = 0;
                            if(cc_states[0]!=' '&&cc_states[0]!=''){
                                value = cc_states[0];
                            }
                            if((value==0&&$('#cometchat_userstab').hasClass("cometchat_tabclick"))||(value==1&&!($('#cometchat_userstab').hasClass("cometchat_tabclick")))){
                                $('#cometchat_userstab').click();
                            }
                            value = '';
                            if(cc_states[1]!=' '&&cc_states[1]!=''){
                                value = cc_states[1];
                            }
                            if(value==jqcc.cometchat.getSessionVariable('activeChatboxes')){
                                var newActiveChatboxes = {};
                                if(value!=''){
                                    var badge = 0;
                                    var chatboxData = value.split(/,/);
                                    for(i = 0; i<chatboxData.length; i++){
                                        var chatboxIds = chatboxData[i].split(/\|/);
                                        newActiveChatboxes[chatboxIds[0]] = chatboxIds[1];
                                        badge += parseInt(chatboxIds[1]);
                                    }
                                    favicon.badge(badge);
                                }
                            }
                        }
                    }
                }*/
            },
            resynch: function(){
                if(jqcc.cometchat.getThemeVariable('loggedout')==0){
                    var cc_state = jqcc.cometchat.getCcvariable().internalVars.chatboxstates;
                    var msgcount = 0;
                    if(cc_state!=null){
                        for(key in cc_state){
                            var state = cc_state[key].split('|');
                            if(key.indexOf('_') == -1 && !isNaN(parseInt(state[2]))) {
                                msgcount += parseInt(state[2]);
                            }
                        }
                        jqcc.cometchat.setThemeVariable('newMessages',msgcount);
                        if(jqcc.cometchat.getThemeVariable('newMessages')>0){
                            if(settings.windowFavicon==1){
                                jqcc[settings.theme].countMessage();
                            }
                            if(document.title==language[15]){
                                document.title = jqcc.cometchat.getThemeVariable('documentTitle');
                            }else{
                                if(settings.windowTitleNotify==1){
                                    document.title = language[15];
                                }
                            }
                        }else{
                            var nowTime = new Date();
                            var idleDifference = Math.floor(nowTime.getTime()/1000)-jqcc.cometchat.getThemeVariable('idleTime');
                            if(idleDifference<5){
                                document.title = jqcc.cometchat.getThemeVariable('documentTitle');
                                if(settings.windowFavicon==1){
                                    favicon.badge(0);
                                }
                            }
                        }
                    }
                    clearTimeout(resynchTimer);
                    resynchTimer = setTimeout(function(){
                        jqcc[settings.theme].resynch();
                    }, 5000);
                }
            },
            reinitialize: function(){
                if(jqcc.cometchat.getThemeVariable('loggedout')==1){
                    $('#loggedout').removeClass('cometchat_optionsimages_exclamation');
                    $('#loggedout').removeClass('cometchat_optionsimages_ccauth');
                    $('#loggedout').removeClass('cometchat_tabclick');
                    $('#loggedout').hide();
                    $("body").append(msg_beep);
                    $("#cometchat_base").append(side_bar);
                    $("#cometchat_base").append(option_button);
                    $("#cometchat_base").append(usertab2);
                    $("#cometchat_base").append(user_tab);
                    $("#cometchat_base").append(chat_boxes);
                    $("#cometchat_base").append(chat_left);
                    $("#cometchat_base").append(unseen_users);
                    $("#cometchat_optionsbutton,#cometchat_sidebar").show();
                    $("#cometchat_userstab").addClass('cometchat_userstabclick');
                    $("#cometchat_userstab").show();
                    jqcc.cometchat.setThemeVariable('loggedout', 0);
                    jqcc.cometchat.setExternalVariable('initialize', '1');
                    jqcc.cometchat.chatHeartbeat();
                    $('#cometchat_optionsbutton.cometchat_tabclick').click();
                }
            },
            minimizeAll: function(){
                $("div.cometchat_tabpopup").each(function(index){
                    if($(this).hasClass('cometchat_tabopen')){
                        $(this).find('div.cometchat_tabtitle').click();
                    }
                });
                $("#cometchat_minimize_userstabpopup").click();
            },
            prependMessagesInit: function(id){
                var messages = jqcc('#cometchat_tabcontenttext_'+id).find('.cometchat_chatboxmessage');
                $('#cometchat_prependMessages_'+id).text(language[41]);
                if(messages.length > 0){
                    jqcc('#scrolltop_'+id).remove();
                    prepend = messages[0].id.split('_')[2];
                }else{
                    prepend = -1;
                }
                jqcc.cometchat.updateChatboxSet(id,prepend);
            },
            prependMessages:function(id,data){
                var oldMessages = '';
                var count = 0;
                var todaysdate = new Date();
                var tdmonth  = todaysdate.getMonth();
                var tddate  = todaysdate.getDate();
                var tdyear = todaysdate.getFullYear();
                var today_date_class = tdmonth+"_"+tddate+"_"+tdyear;
                var ydaysdate = new Date((new Date()).getTime() - 3600000 * 24);
                var ydmonth  = ydaysdate.getMonth();
                var yddate  = ydaysdate.getDate();
                var ydyear = ydaysdate.getFullYear();
                var yday_date_class = ydmonth+"_"+yddate+"_"+ydyear;
                var d = '';
                var month = '';
                var date  = '';
                var year = '';
                var msg_date_class = '';
                var msg_date = '';
                var date_class = '';
                var msg_date_format = '';
                var msg_time = '';
                var jabber = '';
                var messageid = [];
                var cc_dir = '0';
                var prepend = '';

                if($('#scrolltop_'+id).length == 0){
                    $("#cometchat_tabcontenttext_"+id).prepend('<div id="scrolltop_'+id+'" class="cometchat_scrollup"><img src="'+staticCDNUrl+'images/arrowtop.svg" class="cometchat_scrollimg" /></div>');
                }
                if($('#scrolldown_'+id).length == 0){
                    $("#cometchat_tabcontenttext_"+id).append('<div id="scrolldown_'+id+'" class="cometchat_scrolldown"><img src="'+staticCDNUrl+'images/arrowbottom.svg" class="cometchat_scrollimg" /></div>');
                }
                $('#cometchat_tabcontenttext_'+id).unbind('wheel');
                $('#cometchat_tabcontenttext_'+id).on('wheel',function(event){
                    var scrollTop = $(this).scrollTop();
                    if(event.originalEvent.deltaY != 0){
                        clearTimeout($.data(this, 'scrollTimer'));
                        if(event.originalEvent.deltaY > 0){
                            $('#scrolltop_'+id).hide();
                            var down = jqcc("#cometchat_tabcontenttext_"+id)[0].scrollHeight-250-50;
                            if(scrollTop < down){
                                $('#scrolldown_'+id).fadeIn('slow');
                            }else{
                                $('#scrolldown_'+id).fadeOut();
                            }
                            $.data(this, 'scrollTimer', setTimeout(function() {
                                $('#scrolldown_'+id).fadeOut('slow');
                            },2000));

                        }else{
                            $('#scrolldown_'+id).hide();
                            var top = 45+50;
                            if(scrollTop > top){
                                $('#scrolltop_'+id).fadeIn('slow');
                            }else{
                                $('#scrolltop_'+id).fadeOut();
                            }
                            $.data(this, 'scrollTimer', setTimeout(function() {
                                $('#scrolltop_'+id).fadeOut('slow');
                            },2000));
                        }
                    }
                });

                $('#scrolltop_'+id).on("click",function(){
                    $('#scrolltop_'+id).hide();
                    $('#cometchat_tabcontenttext_'+id).slimScroll({scroll: 0});
                });

                $('#scrolldown_'+id).click(function(){
                    $('#scrolldown_'+id).hide();
                    $('#cometchat_tabcontenttext_'+id).slimScroll({scroll: 1});
                });

                $.each(data, function(type, item){
                    if(type=="messages"){
                        $.each(item, function(i, incoming){
                            count = count+1;
                            var messagewrapperid = '';
                            incoming.message = jqcc.cometchat.htmlEntities(incoming.message);
                            var message = jqcc.cometchat.processcontrolmessage(incoming);

                            if(incoming.hasOwnProperty('botid') && incoming.botid > 0){
                                incoming.self = 0;
                            }

                            if(message == null){
                                return;
                            }

                            if(message.indexOf('avchat_webaction=initiate')!=-1 || message.indexOf('avchat_webaction=acceptcall')!=-1){
                                return;
                            }
                            if( incoming.hasOwnProperty('id') && !incoming.hasOwnProperty('localmessageid') ) {
                                messagewrapperid = incoming.id;
                            }else if( !incoming.hasOwnProperty('id') && incoming.hasOwnProperty('localmessageid') ) {
                                messagewrapperid = incoming.localmessageid;
                            }else{
                                messagewrapperid = incoming.id;
                                if($("#cometchat_message_"+incoming.localmessageid).length>0){
                                    $("#cometchat_message_"+incoming.localmessageid).attr('id',"cometchat_message_"+incoming.id);
                                    $("#cometchat_chatboxseen_"+incoming.localmessageid).attr('id',"cometchat_chatboxseen_"+incoming.id).removeClass("cometchat_offlinemessage");
                                    $("#message_"+incoming.localmessageid).attr('id','message_'+incoming.id).html(message);
                                    var offlinemessages = jqcc.cometchat.getFromStorage('offlinemessagesqueue');
                                    if(offlinemessages.hasOwnProperty(incoming.localmessageid)) {
                                        delete offlinemessages[incoming.localmessageid];
                                        jqcc.cometchat.updateToStorage('offlinemessagesqueue',offlinemessages);
                                    }
                                    return;
                                }
                            }
                            if(incoming.sent!=null){
                                var ts = incoming.sent;
                                sentdata = jqcc[settings.theme].getTimeDisplay(ts);
                            }

                            if(incoming.jabber == 1 && typeof(incoming.selfadded) != "undefined" && incoming.selfadded != null) {
                                msg_time = incoming.id;
                                jabber = 1;
                            }else{
                                msg_time = incoming.sent;
                                jabber = 0;
                            }

                            msg_time = msg_time+'';

                            if (msg_time.length == 10){
                                msg_time = parseInt(msg_time * 1000);
                            }

                            months_set = new Array(language['jan'],language['feb'],language['mar'],language['apr'],language['may'],language['jun'],language['jul'],language['aug'],language['sep'],language['oct'],language['nov'],language['dec']);

                            d = new Date(parseInt(msg_time));
                            month  = d.getMonth();
                            date  = d.getDate();
                            year = d.getFullYear();
                            msg_date_class = month+"_"+date+"_"+year;
                            msg_date = months_set[month]+" "+date+", "+year;

                            var type = 'th';
                            if(date==1||date==21||date==31){
                                type = 'st';
                            }else if(date==2||date==22){
                                type = 'nd';
                            }else if(date==3||date==23){
                                type = 'rd';
                            }
                            msg_date_format = date+type+' '+months_set[month]+', '+year;

                            if(msg_date_class == today_date_class){
                                date_class = "today";
                                msg_date = language['today'];
                            }else  if(msg_date_class == yday_date_class){
                                date_class = "yesterday";
                                msg_date = language['yesterday'];
                            }

                            var msg = '';
                            var sentdata = '';
                            var add_bg = '';
                            var add_arrow_class = '';
                            var add_style = "";
                            var smileycount = (message.match(/cometchat_smiley/g) || []).length;
                            var smileymsg = message.replace(/<img[^>]*>/g,"");
                            smileymsg = smileymsg.trim();
                            var single_smiley_avatar = '';

                            if(smileycount == 1 && smileymsg == '') {
                                message = message.replace('height="20"', 'height="64px"');
                                message = message.replace('width="20"', 'width="64px"');
                                single_smiley_avatar = "margin-top:10px";
                            }

                            var avatar = staticCDNUrl+"layouts/docked/images/noavatar.png";
                            if(jqcc.cometchat.getThemeArray('buddylistAvatar', incoming.from)!=""){
                                avatar = jqcc.cometchat.getThemeArray('buddylistAvatar', incoming.from);
                            }
                            fromname = jqcc.cometchat.getThemeArray('buddylistName', incoming.from);
                            selfstyleAvatar = '<a class="cometchat_floatL" href="'+jqcc.cometchat.getThemeArray('buddylistLink', incoming.from)+'"><img class="ccmsg_avatar" style="'+single_smiley_avatar+'" src="'+avatar+'" title="'+fromname+'"/></a>';

                            if(incoming.sent!=null){
                                var ts = incoming.sent;
                                sentdata = jqcc.docked.getTimeDisplay(ts);
                            }

                            if(parseInt(incoming.self)==1){
                                if((message.indexOf('<img')==-1 && message.indexOf('src')==-1) || (smileycount > 0 && smileymsg != '')){
                                    add_bg = 'cometchat_chatboxmessagecontent cometchat_self';
                                    add_arrow_class = '<div class="selfMsgArrow"><div class="after"></div></div>';
                                }else{
                                    if(message.indexOf('cometchat_smiley')!=-1) {
                                        add_style = "margin-right:13px";
                                    }else{
                                        add_style = "margin-right:4px;margin-left:4px;";
                                    }
                                }
                                var sentdata_box = "<span class=\"cometchat_ts\">"+sentdata+"</span>";
                                msg = '<div class="cometchat_time cometchat_time_'+msg_date_class+' '+date_class+'" msg_format="'+msg_date_format+'">'+msg_date+'</div><div class="cometchat_chatboxmessage" id="cometchat_message_'+messagewrapperid+'"><div class="'+add_bg+' '+'cometchat_ts_margin cometchat_self_msg cometchat_floatR" style="'+add_style+'" title="'+sentdata+'"><span id="message_'+messagewrapperid+'">'+message+'</span><span id="cometchat_chatboxseen_'+messagewrapperid+'"></span></div>'+add_arrow_class+' '+sentdata_box+'</div>';
                                addMessage = 1;

                            }else{
                                if(message.indexOf('cometchat_hw_lang')!=-1){
                                  var hw_ts = 'margin-left: 4px';
                              }
                                var sentdata_box = "<span class=\"cometchat_ts_other\" style='"+hw_ts+"'>"+sentdata+"</span>";

                                if((message.indexOf('<img')==-1 && message.indexOf('src')==-1) || (smileycount > 0 && smileymsg != '')){
                                    add_bg = 'cometchat_chatboxmessagecontent';
                                    add_arrow_class = '<div class="msgArrow"><div class="after"></div></div>';
                                }else{
                                    if(message.indexOf('cometchat_smiley')!=-1) {
                                        if(smileycount == 1 && smileymsg == ''){
                                            add_style = "margin:-4px 0px 0px 4px";
                                        }else{
                                            add_style = "margin:5px 5px 0px 8px";
                                        }
                                    }else if(message.indexOf('cometchat_hw_lang')!=-1){
                                        add_style = "margin:0px 0px 0px 8px";
                                    }else{
                                        add_style = "margin:-6px 0px 0px 8px";
                                    }
                                }
                                msg = '<div class="cometchat_time cometchat_time_'+msg_date_class+' '+date_class+'" msg_format="'+msg_date_format+'">'+msg_date+'</div><div class="cometchat_chatboxmessage" id="cometchat_message_'+messagewrapperid+'">'+selfstyleAvatar+'<div class="'+add_bg+' '+'cometchat_ts_margin cometchat_floatL" style="'+add_style+'" title="'+sentdata+'"><span id="message_'+messagewrapperid+'" class="cometchat_msg">'+message+'</span></div>'+add_arrow_class+' '+sentdata_box+'</div>';
                                addMessage = 1;
                            }
                            oldMessages+=msg;
                        });

                    }
                });

                var current_top_element  = jqcc('#cometchat_tabcontenttext_'+id+' .cometchat_chatboxmessage:first');
                jqcc('#cometchat_user_'+id+'_popup').find('.cometchat_tabcontenttext').prepend(oldMessages);

                if(mobileDevice){
                    $('#cometchat_tabcontenttext_'+id).css('overflow-y','auto');
                }else{
                    var offsetheight = 0;
                    if(current_top_element.length>0){
                        var offsetheight = current_top_element.offset().top - jqcc('#cometchat_tabcontenttext_'+id+' .cometchat_chatboxmessage:first').offset().top+jqcc('.cometchat_time').height()+jqcc('#cometchat_prependMessages_'+id).height()+100;
                        var height = offsetheight-jqcc('#cometchat_tabcontenttext_'+id).height();
                        $('#cometchat_tabcontenttext_'+id).slimScroll({scrollTo: height+'px'});
                    }else{
                        $('#cometchat_tabcontenttext_'+id).slimScroll({scroll: 1});
                    }
                }

                $.each($('#cometchat_user_'+id+'_popup .cometchat_chatboxmessage'),function (i,divele){
                    if($(this).find(".cometchat_ts") != ''){
                       var msg_containerHeight = $(this).find(".cometchat_ts_margin").outerHeight()-8;
                       var cometchat_ts_margin_right = $(this).find(".cometchat_ts_margin").outerWidth(true)+5;
                       jqcc(this).find('.cometchat_ts').css('margin-top',msg_containerHeight);
                       jqcc(this).find('.cometchat_ts').css('margin-right',cometchat_ts_margin_right);
                   }
               });
                if(cc_dir == 1){
                    $('#cometchat_user_'+id+'_popup').find('.cometchat_ts_other').each(function(){
                        var cometchat_ts_other_margin_left = $(this).parent().find('.cometchat_ts_margin').outerWidth(true)+30;
                        $(this).css('margin-left',cometchat_ts_other_margin_left);
                    });
                }
                jqcc[settings.theme].groupbyDate(id,jabber);

                if(jqcc.cometchat.getThemeVariable('prependLimit') != '0'){
                    prepend = '<div class=\"cometchat_prependMessages\" onclick\="jqcc.docked.prependMessagesInit('+id+')\" id = \"cometchat_prependMessages_'+id+'\">'+language[83]+'</div>';
                }
                $('#cometchat_user_'+id+'_popup .cometchat_prependMessages').remove();
                var prependLimit = jqcc.cometchat.getThemeVariable('prependLimit');
                var message_count = count - parseInt(jqcc.cometchat.getThemeVariable('prependLimit'));

                if($('#cometchat_user_'+id+'_popup .cometchat_prependMessages').length != 1){
                        $('#cometchat_tabcontenttext_'+id).prepend(prepend);
                }

                if(parseInt(message_count) < 0){
                    $('#cometchat_prependMessages_'+id).text(language[84]);
                    jqcc('#cometchat_prependMessages_'+id).attr('onclick','');
                    jqcc('#cometchat_prependMessages_'+id).css('cursor','default');
                }
            },
            messageBeep: function(baseUrl){
                if(!$('#messageBeep').length){
                    $('<audio id="messageBeep" style="display:none;"><source src="'+baseUrl+'sounds/beep.mp3" type="audio/mpeg"><source src="'+baseUrl+'sounds/beep.ogg" type="audio/ogg"><source src="'+baseUrl+'sounds/beep.wav" type="audio/wav"></audio>').appendTo($("body"));
                }
                if(!$('#messageOpenBeep').length){
                    $('<audio id="messageOpenBeep" style="display:none;"><source src="'+baseUrl+'sounds/openbeep.mp3" type="audio/mpeg"><source src="'+baseUrl+'sounds/openbeep.ogg" type="audio/ogg"><source src="'+baseUrl+'sounds/openbeep.wav" type="audio/wav"></audio>').appendTo($("body"));
                }
                if(!$('#announcementBeep').length){
                    $('<audio id="announcementBeep" style="display:none;"><source src="'+baseUrl+'sounds/announcementbeep.mp3" type="audio/mpeg"><source src="'+baseUrl+'sounds/announcementbeep.ogg" type="audio/ogg"><source src="'+baseUrl+'sounds/announcementbeep.wav" type="audio/wav"></audio>').appendTo($("body"));
                }
                if(!$('#incommingcall').length){
                    $('<audio id="incommingcall" style="display:none;"><source src="'+baseUrl+'sounds/incomingcallringtone.mp3" type="audio/mpeg"><source src="'+baseUrl+'sounds/incomingcallringtone.ogg" type="audio/ogg"><source src="'+baseUrl+'sounds/incomingcallringtone.wav" type="audio/wav"></audio>').appendTo($("body"));
                }
                if(!$('#outgoingcall').length){
                    $('<audio id="outgoingcall" style="display:none;"><source src="'+baseUrl+'sounds/outgoingcallringtone.mp3" type="audio/mpeg"><source src="'+baseUrl+'sounds/outgoingcallringtone.ogg" type="audio/ogg"><source src="'+baseUrl+'sounds/outgoingcallringtone.wav" type="audio/wav"></audio>').appendTo($("body"));
                }
            },
            typingTo: function(item){
                if(typeof item['fromid'] != 'undefined'){

                    var id = item['fromid'];

                    $("#cometchat_typing_"+id).css('display', 'block');
                    $("#cometchat_buddylist_typing_"+id).css('display', 'block');

                   fromname = jqcc.cometchat.getThemeArray('buddylistName', id);
                    if(jqcc.cometchat.getThemeArray('buddylistAvatar', id)!=""){
                        avatar = jqcc.cometchat.getThemeArray('buddylistAvatar', id);
                    }
                    selfstyleAvatar = '<a class="cometchat_floatL" href="'+jqcc.cometchat.getThemeArray('buddylistLink', id)+'"><img class="ccmsg_avatar" src="'+avatar+'" title="'+fromname+'"/></a>';


                    var notify_typing = '<div class="cometchat_typingbox"><div class="typing_dots"></div><div class="typing_dots"></div><div class="typing_dots"></div></div>';

                    if($("#cometchat_istyping_"+id).length == 0){
                        msg = '<div class="cometchat_chatboxmessage_typing" id="cometchat_istyping_'+id+'">'+selfstyleAvatar+'<div class="cometchat_chatboxmessagecontent cometchat_floatL"><span class="cometchat_msg">'+notify_typing+'</span></div><div class="msgArrow"><div class="after"></div></div></div>';
                        $("#cometchat_tabcontenttext_"+id).append(msg);
                        jqcc.docked.scrollDown(id);

                    }

                    typingReceiverFlag[id] = item['typingtime'];
                }

               if(typeof typingRecieverTimer == 'undefined' || typingRecieverTimer == null || typingRecieverTimer == ''){

                    typingRecieverTimer = setTimeout(function(){
                        typingRecieverTimer = '';
                        var counter = 0;
                        $.each(typingReceiverFlag, function(typingid,typingtime){
                            if(((parseInt(new Date().getTime()))+jqcc.cometchat.getThemeVariable('timedifference')) - typingtime > 5000){
                                $("#cometchat_typing_"+typingid).css('display', 'none');
                                $("#cometchat_buddylist_typing_"+typingid).css('display', 'none');
                                delete typingReceiverFlag[typingid];
                            }else{
                                counter++;
                            }

                        });
                        if(counter > 0){
                            jqcc[settings.theme].typingTo(1);
                        }

                    }, 5000);
                }

            },
            typingStop: function(item){
               $("#cometchat_typing_"+item['fromid']).css('display', 'none');
               $("#cometchat_buddylist_typing_"+item['fromid']).css('display', 'none');

               if($("#cometchat_istyping_"+item['fromid']).length == 1){
                    $("#cometchat_istyping_"+item['fromid']).remove();
                }
            },
            sentMessageNotify: function(item){
                var size = 0, key;
                for (key in item) {
                    if (typeof item[key] == 'object'){
                        jqcc[settings.theme].sentMessageNotify(item[key]);
                    }
                }
                if(typeof item['id'] != 'undefined' && $("#cometchat_chatboxseen_"+item['id']).prev().find('.cometchat_chatboxmessagecontent').hasClass('cometchat_self')){
                    $("#cometchat_chatboxseen_"+item['id']).addClass('cometchat_sentnotification');
                }
            },
            deliveredMessageNotify: function(item){
                if($("#cometchat_message_"+item['message']).length == 0){
                    undeliveredmessages.push(item['message']);
                } else if(typeof item['fromid'] != 'undefined' && $("#cometchat_chatboxseen_"+item['message']).prev().find('.cometchat_chatboxmessagecontent').hasClass('cometchat_self')){
                    $("#cometchat_chatboxseen_"+item['message']).addClass('cometchat_deliverednotification');
                }
            },
            readMessageNotify: function(item){
                if(jqcc.cometchat.checkReadReceiptSetting(item.fromid) == 1){
                    if($("#cometchat_message_"+item['fromid']).length == 0 ){
                        unreadmessages.push(item['fromid']);
                    }
                    jqcc("#cometchat_user_"+item['fromid']+"_popup span.cometchat_deliverednotification").addClass('cometchat_readnotification');
                }
            },
            deliveredReadMessageNotify: function(item){
                if(jqcc.cometchat.checkReadReceiptSetting(item.fromid) == 1){
                    if($("#cometchat_message_"+item['message']).length == 0){
                        undeliveredmessages.push(item['message']);
                        unreadmessages.push(item['message']);
                    } else if(typeof item['fromid'] != 'undefined' && $("#cometchat_chatboxseen_"+item['message']).prev().find('.cometchat_chatboxmessagecontent').hasClass('cometchat_self')){
                        $("#cometchat_chatboxseen_"+item['message']).addClass('cometchat_readnotification');
                    }
                }
            },
            updateSettings: function(){
                var guestname = '';
                var statusmessage = '';
                var status = '';
                var lastseensetting = 0;
                var readreceiptsetting = 0;
                var optionspopup = $('#cometchat_optionsbutton_popup');

                if(optionspopup.find('.cometchat_guestname').length){
                    guestname = optionspopup.find('.cometchat_guestname').val();
                }
                if(optionspopup.find('#cometchat_statusmessageinput').length){
                    statusmessage = optionspopup.find('#cometchat_statusmessageinput > textarea').val();
                }
                if(optionspopup.find('.cometchat_statusinputs').length){
                    status = optionspopup.find('input[name=cometchat_statusoptions]:checked', '#cometchat_optionsform').val();
                }
                jqcc.cometchat.updateSettings(guestname, statusmessage, status, lastseensetting, readreceiptsetting);

                /*this needs to be done in success of jqcc.cometchat.updateSettings*/
                if(status == 'away'){
                    jqcc.cometchat.setThemeVariable('currentStatus', status);
                    jqcc.cometchat.setThemeVariable('idleFlag', 1);
                } else {
                    jqcc.cometchat.setThemeVariable('idleFlag', 0);
                }
                /*end*/
            },
            showLastseen:function(id,lastseen){
                var lastseen = lastseen;
                var timest = getTimeDisplay(lastseen);
                if(lastseen != "" && lastseen != 0){
                	if(timest.ytt != ""){
                		lastseenDIV = timest.hour+":"+timest.minute+timest.ap+" <span>"+timest.ytt+"</span>";
                	}else{
                		lastseenDIV = timest.hour+":"+timest.minute+timest.ap+' '+timest.date+timest.type+' '+timest.month;
                	}

                    if($('#cometchat_messagElement_'+id).attr('class') != undefined){
                        if($('#cometchat_messagElement_'+id).attr('class').indexOf('cometchat_showOffline') == -1){
                           $('#cometchat_messagElement_'+id).html(language['last_seen']+' '+lastseenDIV);
                           $('#cometchat_messagElement_'+id).addClass('cometchat_lastseenmessage');
                        }
                    }

	                if(jqcc('#cometchat_messagElement_'+id).is(":hidden")){
	                	$('#cometchat_messagElement_'+id).slideDown(500);
	                }
                }
            },
            hideLastseen:function(id){
                $('#cometchat').find(function(){
                    if(jqcc('#cometchat_messagElement_'+id).is(":visible") && jqcc('#cometchat_messagElement_'+id).attr('class').indexOf('cometchat_showOffline') == -1)
                        $('#cometchat_messagElement_'+id).slideUp(500);
                });
            },
            chatScroll: function(id){
                if($('#scrolltop_'+id).length == 0){
                    $("#cometchat_tabcontenttext_"+id).prepend('<div id="scrolltop_'+id+'" class="cometchat_scrollup"><img src="'+staticCDNUrl+'images/arrowtop.svg" class="cometchat_scrollimg" /></div>');
                }
                if($('#scrolldown_'+id).length == 0){
                    $("#cometchat_tabcontenttext_"+id).append('<div id="scrolldown_'+id+'" class="cometchat_scrolldown"><img src="'+staticCDNUrl+'images/arrowbottom.svg" class="cometchat_scrollimg" /></div>');
                }
                $('#cometchat_tabcontenttext_'+id).unbind('wheel');
                $('#cometchat_tabcontenttext_'+id).on('wheel',function(event){
                    var scrollTop = $(this).scrollTop();
                    if(event.originalEvent.deltaY != 0){
                        clearTimeout($.data(this, 'scrollTimer'));
                        if(event.originalEvent.deltaY > 0){
                            $('#scrolltop_'+id).hide();
                            var down = jqcc("#cometchat_tabcontenttext_"+id)[0].scrollHeight-250-50;
                            if(scrollTop < down){
                                $('#scrolldown_'+id).fadeIn('slow');
                            }else{
                                $('#scrolldown_'+id).fadeOut();
                            }
                            $.data(this, 'scrollTimer', setTimeout(function() {
                                $('#scrolldown_'+id).fadeOut('slow');
                            },2000));

                        }else{
                            $('#scrolldown_'+id).hide();
                            var top = 45+50;
                            if(scrollTop > top){
                                $('#scrolltop_'+id).fadeIn('slow');
                            }else{
                                $('#scrolltop_'+id).fadeOut();
                            }
                            $.data(this, 'scrollTimer', setTimeout(function() {
                                $('#scrolltop_'+id).fadeOut('slow');
                            },2000));
                        }
                    }
                });

                $('#scrolltop_'+id).on("click",function(){
                    $('#scrolltop_'+id).hide();
                    $('#cometchat_tabcontenttext_'+id).slimScroll({scroll: 0});
                });

                $('#scrolldown_'+id).click(function(){
                    $('#scrolldown_'+id).hide();
                    $('#cometchat_tabcontenttext_'+id).slimScroll({scroll: 1});
                });
            },
            openMainContainer: function(){
                if(!($('#cometchat_userstab').hasClass("cometchat_tabclick"))){
                    jqcc('#cometchat').find('#cometchat_userstab_popup').removeClass('cometchat_tabhidden').addClass('cometchat_tabopen');
                }
            },
            openChatTab: function(openedtab, restored){
                if(typeof(openedtab) != "undefined") {
                    if(typeof(openedtab) == "undefined"){
                        var restored = 0;
                    }
                    jqcc[settings.theme].loadChatTab(parseInt(openedtab), restored);
                }
            },
            scrollToTop: function(){
                $("html,body").animate({scrollTop: 0}, {"duration": "slow"});
            },
            applyChatBoxStates: function(statestoapply){
                jqcc.each(statestoapply, function(i, state){
                    var id = state.id;
                    var silent = 0;
                    var count = 0;
                    if (state.hasOwnProperty('s')) {
                        silent = state.s;
                    }
                    if (state.hasOwnProperty('c')) {
                        count = state.c;
                    }
                    if(state.hasOwnProperty('g')&& state.g==1){
                        if(typeof(jqcc.cometchat.silentroom)=='function'){
                            if(silent>0){
                                jqcc.cometchat.silentroom(id, '', '', silent, count)
                            }else if(count>0){
                                jqcc.crdocked.addMessageCounter(id);
                            }
                        }
                    } else {
                        if(typeof(jqcc.docked.createChatbox)!=='undefined'){
                            if(silent>0){
                                jqcc[settings.theme].createChatbox(
                                    id,
                                    jqcc.cometchat.getThemeArray('buddylistName', id),
                                    jqcc.cometchat.getThemeArray('buddylistStatus', id),
                                    jqcc.cometchat.getThemeArray('buddylistMessage', id),
                                    jqcc.cometchat.getThemeArray('buddylistAvatar', id),
                                    jqcc.cometchat.getThemeArray('buddylistLink', id),
                                    jqcc.cometchat.getThemeArray('buddylistIsDevice', id),
                                    silent,
                                    count,
                                    1
                                );
                            } else if(count>0){
                                jqcc.docked.addPopup(id);
                            }
                        }
                    }
                });
            },
            authLogout: function(){
                jqcc.cometchat.sociallogout();
            },
            authLogin: function(){
                var ccauthpopup = '<div id="cometchat_auth_popup" class="cometchat_tabpopup" style="display:none">'+
                                    '<div class="cometchat_socialuserstabtitle">'+
                                        '<div class="cometchat_userstabtitletext">'+language[51]+'</div>'+
                                        '<div class="cometchat_minimizebox cometchat_tooltip" id="cometchat_minimize_auth_popup" title="'+language[27]+'"></div>'+
                                        '<br clear="all"/>'+
                                        '</div><div class="cometchat_tabcontent cometchat_optionstyle">'+
                                        '<div id="social_login">'+
                                            '<iframe width="100%" height="100%"  allowtransparency="true" frameborder="0"  scrolling="no"  src="'+jqcc.cometchat.getBaseUrl()+'functions/login/" />';
                                        '</div>'+
                                    '</div>'+
                                '</div>';
                return '<div id="cometchat"></div><div id="cometchat_optionsimages_ccauth"><span id="cometchat_ccauth_text">'+language[51]+'</span></div>'+ccauthpopup;
            },
            generateOutgoingAvchatData: function(id,grp){
                var userdata = {
                    name: jqcc.cometchat.getThemeArray('buddylistName', id),
                    avatar: jqcc.cometchat.getThemeArray('buddylistAvatar', id)
                }
                if(((typeof(parent) != 'undefined' && parent != null && parent != self) || window.top != window.self) && jqcc.cometchat.getCcvariable().callbackfn!='desktop'){
                    try{
                        parent.outgoingCall(id,grp,userdata);
                    }catch(e){
                        var controlparameters = {
                            type: "core",
                            name: "libraries",
                            method: "outgoingCall",
                            params: {
                                id: id,
                                grp: grp,
                                userdata: userdata
                            }
                        }
                        var messagetopost = "CC^CONTROL_"+ JSON.stringify(controlparameters);
                        parent.postMessage(messagetopost,'*');
                    };
                } else {
                    outgoingCall(id,grp,userdata);
                }
            },
            generateIncomingAvchatData: function(incoming,avchat_data,currenttime){
                if(disableLayout == 1){return;}
                var userdata = {
                    name: jqcc.cometchat.getThemeArray('buddylistName', incoming.from),
                    avatar: jqcc.cometchat.getThemeArray('buddylistAvatar', incoming.from)
                }
                if(((typeof(parent) != 'undefined' && parent != null && parent != self) || window.top != window.self) && jqcc.cometchat.getCcvariable().callbackfn!='desktop'){
                    try{
                        parent.incomingCall(incoming,avchat_data,currenttime,userdata);
                    }catch(e){
                        var controlparameters = {
                            type: "core",
                            name: "libraries",
                            method: "incomingCall",
                            params: {
                                incoming: incoming,
                                avchat_data: avchat_data,
                                currenttime: currenttime,
                                userdata: userdata
                            }
                        }
                        var messagetopost = "CC^CONTROL_"+ JSON.stringify(controlparameters);
                        parent.postMessage(messagetopost,'*');
                    };
                }else{
                    incomingCall(incoming,avchat_data,currenttime,userdata);
                }
            },
            removeAVchatContainer: function(id) {
                if(((typeof(parent) != 'undefined' && parent != null && parent != self) || window.top != window.self) && jqcc.cometchat.getCcvariable().callbackfn!='desktop'){
                    parent.removeCallContainer(id);
                }else{
                    removeCallContainer(id);
                }
            },
            disableLayout: function(){
                jqcc('#cometchat').hide();
                jqcc('#incommingcall, #outgoingcall, #announcementBeep ,#messageOpenBeep ,#messageBeep').remove();
                clearTimeout(resynchTimer);
                disableLayout =1;
            },
        };
    })();
})(jqcc);

if(typeof(jqcc.docked) === "undefined"){
    jqcc.docked=function(){};
}

jqcc.extend(jqcc.docked, jqcc.ccdocked);

jqcc(window).resize(function(){
    jqcc.docked.windowResize(1);
});

/* code for Cloud Mobileapp compatibilty to Hide CometChat bar. */
jqcc(document).ready(function() {
    var platform = jqcc.cookie('cc_platform_cod');
    if(platform == 'android' || platform == 'ios' || platform == 'dm') {
        var hideInterval = setInterval(function(){
            if(jqcc('.cometchat_ccmobiletab_redirect').length>0||jqcc('#cometchat').length>0){
                jqcc('#cometchat').hide();
                jqcc('.cometchat_ccmobiletab_redirect').hide();
                clearTimeout(hideInterval);
            }
        },500);
    }
});

/* for IE8 */
if(!Array.prototype.indexOf){
    Array.prototype.indexOf = function(obj, start){
        for(var i = (start||0), j = this.length; i<j; i++){
            if(this[i]===obj){
                return i;
            }
        }
        return -1;
    }
}

if(!Array.prototype.forEach){
    Array.prototype.forEach = function(fun)
    {
        var len = this.length;
        if(typeof fun!="function")
            throw new TypeError();
        var thisp = arguments[1];
        for(var i = 0; i<len; i++)
        {
            if(i in this)
                fun.call(thisp, this[i], i, this);
        }
    };
}

/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
 */

(function($){
    $.ccmobiletab = (function(){
        var mobileappdetails = {};
        var settings = {};
        var title = "Chat Now",
        logintext = "Login here",
        mobileNewWindow = "1",
        timestamp = 0,
        amount = 0,
        cookiePrefix = 'cc_',
        mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|Windows Phone|blackberry|palm|symbian/i);
        var setalert = parseInt('2');
        return{
            initialize: function(){
                settings = jqcc.cometchat.getSettings();
                mobileappdetails = jqcc.cometchat.getMobileappdetails();
                if(mobileDevice||location.href.match('extensions/mobiletab/')){
                    $('#cometchat').css('display', 'none');
                    if($('.cometchat_ccmobiletab_redirect').length<=0){
                        $('body').append('<div class="cometchat_ccmobiletab_redirect "> '+title+' (<span id="ccmobiletab_buddycount">0</span>) </div>');
                    }
                    jqcc.ccmobiletab.tabalertScale();
                    $(".cometchat_ccmobiletab_redirect ,.cometchat_ccmobiletab_tabalert").live('click', function(){
                        amount = 0;
                        $(".cometchat_ccmobiletab_redirect .cometchat_ccmobiletab_tabalert").remove();
                        url = jqcc.cometchat.getBaseUrl()+'cometchat_embedded.php?cookiePrefix='+cookiePrefix+'&basedata='+jqcc.cometchat.getBaseData()+'&ccmobileauth='+jqcc.cometchat.getThemeVariable('ccmobileauth');
                        jqcc.ccmobiletab.openWebapp(url);
                    });
                }

                $(".cometchat_embed_chatroom_container").each(function(i,j) {
                    var src = $(this).attr('iframe_src');
                    var queryStringSeparator='&';
                    if(src.indexOf('?')<0){
                        queryStringSeparator='?';
                    }
                    src+= queryStringSeparator+"basedata="+jqcc.cometchat.getBaseData();
                    var width = $(this).attr('iframe_width'),
                    height = $(this).attr('iframe_height'),
                    name = $(this).attr('iframe_name'),
                    frameborder = $(this).attr('iframe_frameborder'),
                    class_name = $(this).attr('iframe_class');
                    $('.cometchat_embed_chatroom_container').html("<iframe class = "+class_name+" src = "+src+" width = "+width+" height = "+height+" name = "+name+" frameborder = "+frameborder+" ></iframe>");
                });
            },
            reinitialize: function(){
                if(mobileDevice||location.href.match('extensions/mobiletab/')){
                    $(".cometchat_ccmobiletab_redirect ,.cometchat_ccmobiletab_tabalert").die('click');
                    $(".cometchat_ccmobiletab_redirect, #mobile_social_login, .cc_overlay, .cometchat_ccmobiletab_tabalert").remove();
                    jqcc.ccmobiletab.initialize();
                    jqcc.cometchat.chatHeartbeat();
                }
            },
            tabalertScale: function(){
                var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],winWidth=w.innerWidth||e.clientWidth||g.clientWidth,winHt=w.innerHeight||e.clientHeight||g.clientHeight;
                var cctabfontht = (winHt*0.04);
                if(winWidth>winHt){
                    cctabfontht = (winHt*0.06);
                }
                if(cctabfontht>35){
                    cctabfontht = 30;
                }
                $('.cometchat_ccmobiletab_redirect').css('font-size',cctabfontht+"px");
                if(mobileDevice){
                    var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],winWidth=w.innerWidth||e.clientWidth||g.clientWidth,winHt=w.innerHeight||e.clientHeight||g.clientHeight;

                    if(winWidth<winHt){
                        $('#mobile_social_login').css('top','36%');
                        if(winWidth>800){
                            winWidth = 800;
                        }
                        $('#mobile_social_login .login_container').css({'width':(winWidth*0.6)+'px'});
                        $('#mobile_social_login img').css({'width':(winWidth*0.6)+'px',height:'auto',left:'10%'});
                    }else{
                        $('#mobile_social_login').css('top','20%');
                        if(winHt>450){
                            winHt = 450;
                        }
                        $('#mobile_social_login .login_container').css({'width':(winHt*0.8)+'px'});
                        $('#mobile_social_login img').css({'height':(winHt*0.6/4)+'px',width:'auto',left:'10%'});
                    }

                if(winWidth<=200){
                        $(".cometchat_ccmobiletab_redirect .cometchat_ccmobiletab_tabalert").css('right', '17%');
                    }else if(winWidth>200&&winWidth<=300){
                        $(".cometchat_ccmobiletab_redirect .cometchat_ccmobiletab_tabalert").css('right', '25%');
                    }else if(winWidth>300&&winWidth<=400){
                        $(".cometchat_ccmobiletab_redirect .cometchat_ccmobiletab_tabalert").css('right', '30%');
                    }else if(winWidth>400&&winWidth<=600){
                        $(".cometchat_ccmobiletab_redirect .cometchat_ccmobiletab_tabalert").css('right', '33%');
                    }else if(winWidth>600&&winWidth<=1000){
                        $(".cometchat_ccmobiletab_redirect .cometchat_ccmobiletab_tabalert").css('right', '24%');
                    }else if(winWidth>1000){
                        $(".cometchat_ccmobiletab_redirect .cometchat_ccmobiletab_tabalert").css('right', '28%');
                    }
                }
            },
            notify: function(totmsg,toid){
                if(mobileDevice){
                    if(typeof (totmsg)!="undefined"){
                        amount = totmsg;
                    }
                    if(amount===0){
                        $(".cometchat_ccmobiletab_redirect .cometchat_ccmobiletab_tabalert").remove();
                    }else{
                        if(setalert==1||setalert==2){
                            jqcc.cookie(cookiePrefix+"confirmOnMsg", null, {path: '/', expires: -1});
                        }
                        if(jqcc.cookie(cookiePrefix+"confirmOnMsg")!=1&&setalert!=2){
                        if( typeof(jqcc.cookie("cc_mobilewebapp_open"))=="undefined" || parseInt(jqcc.cookie("cc_mobilewebapp_open")) != 1 ){
                            if(confirm("You have received a new chat message. Click OK to read")){
                                amount = 0;
                                $(".cometchat_ccmobiletab_redirect .cometchat_ccmobiletab_tabalert").remove();
                                url = jqcc.cometchat.getBaseUrl()+'cometchat_embedded.php?cookiePrefix='+cookiePrefix+'&basedata='+jqcc.cometchat.getBaseData()+'&ccmobileauth='+jqcc.cometchat.getThemeVariable('ccmobileauth')+'#user-'+toid;
                                jqcc.ccmobiletab.openWebapp(url);
                            }else{
                                if($(".cometchat_ccmobiletab_redirect .cometchat_ccmobiletab_tabalert").length>0){
                                    $(".cometchat_ccmobiletab_redirect .cometchat_ccmobiletab_tabalert").html(amount);
                                }else{
                                    $("<div/>").addClass("cometchat_ccmobiletab_tabalert").html(amount).appendTo($('.cometchat_ccmobiletab_redirect'));
                                }
                                jqcc.ccmobiletab.tabalertScale();
                            }
                            }else{
                                if($(".cometchat_ccmobiletab_redirect .cometchat_ccmobiletab_tabalert").length>0){
                                    $(".cometchat_ccmobiletab_redirect .cometchat_ccmobiletab_tabalert").html(amount);
                                }else{
                                    $("<div/>").addClass("cometchat_ccmobiletab_tabalert").html(amount).appendTo($('.cometchat_ccmobiletab_redirect'));
                                }
                                jqcc.ccmobiletab.tabalertScale();
                            }
                            if(setalert==0){
                                jqcc.cookie(cookiePrefix+"confirmOnMsg", "1", {path: '/', expires: 365});
                            }
                        }else{
                            if($(".cometchat_ccmobiletab_redirect .cometchat_ccmobiletab_tabalert").length>0){
                                $(".cometchat_ccmobiletab_redirect .cometchat_ccmobiletab_tabalert").html(amount);
                            }else{
                                $("<div/>").addClass("cometchat_ccmobiletab_tabalert").html(amount).appendTo($('.cometchat_ccmobiletab_redirect'));
                            }
                            jqcc.ccmobiletab.tabalertScale();
                        }
                    }
                }
            },
            buddyList: function(data){
                if(mobileDevice){
                    var buddyCount = 0;
                    $.each(data, function(index, user){
                        if(user.s!='offline'){
                            buddyCount++;
                        }
                    });
                    $("#ccmobiletab_buddycount").html(buddyCount);
                }
            },
            addMessages: function(data){
                if(mobileDevice){
                    $.each(data, function(i, incoming){
                        if(typeof(incoming.self) ==='undefined' && typeof(incoming.old) ==='undefined' && typeof(incoming.sent) ==='undefined'){
                            incoming.sent = Math.floor(new Date().getTime()/1000);
                            incoming.old = incoming.self = 1;
                        }
                        if(typeof(incoming.m)!== 'undefined'){
                            incoming.message = incoming.m;
                        }
                        if(typeof (incoming.id)=='undefined'){
                            if(i=='self'){
                                var self = incoming;
                            }
                            if(i=='sent'&&incoming!='undefined'){
                                var sent = incoming;
                                if(self==0||typeof (self)=='undefined'){
                                    if(sent>timestamp){
                                        amount++;
                                        jqcc.ccmobiletab.notify(amount,incoming.from);
                                        timestamp = sent;
                                    }
                                }
                            }
                        }else{
                            if(incoming.self==0&&incoming.old!=1){
                                if(incoming.id>timestamp){
                                    amount++;
                                    jqcc.ccmobiletab.notify(amount,incoming.from);
                                    timestamp = incoming.id;
                                }
                            }
                        }
                    });
                }
            },
            chatWith: function(id) {
                if(mobileDevice && typeof(id)!='undefined'){
                    amount = 0;
                    $(".cometchat_ccmobiletab_redirect .cometchat_ccmobiletab_tabalert").remove();
                    url = jqcc.cometchat.getBaseUrl()+'cometchat_embedded.php?cookiePrefix='+cookiePrefix+'&basedata='+jqcc.cometchat.getBaseData()+'&ccmobileauth='+jqcc.cometchat.getThemeVariable('ccmobileauth')+'&user='+id;
                    jqcc.ccmobiletab.openWebapp(url);
                }
            },
            loggedOut: function(){
                if(mobileDevice){
                    var settings = jqcc.cometchat.getSettings();
                    if(settings.ccauth.enabled==0){
                        $(".cometchat_ccmobiletab_redirect").hide(0);
                        jqcc.cookie(cookiePrefix+"confirmOnMsg", null, {path: '/', expires: -1});
                    }else{
                        $(".cometchat_ccmobiletab_redirect ,.cometchat_ccmobiletab_tabalert").die('click');
                        $(".cometchat_ccmobiletab_redirect").html(logintext);
                        var ccauthpopup = '<div id="mobile_social_login"><div class="login_container">';
                        var authactive = settings.ccauth.active;
                        authactive.forEach(function(auth) {
                            ccauthpopup += '<img onclick="window.open(\''+jqcc.cometchat.getBaseUrl()+'functions/login/signin.php?network='+auth.toLowerCase()+'\',\'socialwindow\')" src="'+jqcc.cometchat.getStaticCDNUrl()+'layouts/mobile/images/login'+auth.toLowerCase()+'.png" class="auth_options"></img>';
                        });
                        ccauthpopup += '</div></div>';
                        $(".cometchat_ccmobiletab_redirect ,.cometchat_ccmobiletab_tabalert").live('click', function(){
                            $("body").append('<div class="cc_overlay" onclick=""></div>'+ccauthpopup);
                            jqcc.ccmobiletab.tabalertScale();
                        });
                        $(".cc_overlay").live('click', function(){
                            $('#mobile_social_login').remove();
                            $(this).remove();
                        });
                    }
                }
            },
            openWebapp: function(url){
                var usemobileapp = false;
                if(mobileappdetails.mobileappOption == "1" && (mobileDevice == "Android" || mobileDevice == "iPhone")) {
                    usemobileapp = confirm("Use Mobile App?");
                    if(usemobileapp && (mobileDevice == "Android" || mobileDevice == "iPhone")){
                        if(mobileDevice == "Android"){
                            if(mobileappdetails.useWhitelabelledapp == '1') {
                                url = settings.ccsiteurl+jqcc.cometchat.getBaseUrl()+"cometchat_checkmobileapp.php?platform="+mobileDevice;
                            } else {
                                url = "https://chat.phpchatsoftware.com/cometchat_checkmobileapp.php?platform="+mobileDevice;
                            }
                            window.location = url;
                        } else if(mobileDevice == "iPhone") {
                            setTimeout(function () { window.location = mobileappdetails.mobileappAppstore; }, 25);
                            window.location = mobileappdetails.mobileappBundleid+"://";
                        }
                    }
                }

                if(!usemobileapp) {
                    if (mobileNewWindow == 0) {
                        window.location = url;
                    } else {
                        var x = '';
                        if(typeof(mobiletabwindow)!='undefined' && mobileDevice == "iPhone"){
                            var x = Math.floor((Math.random() * 10) + 1);
                            mobiletabwindow.close();
                        }
                        mobiletabwindow = window.open(url, 'mobiletab'+x, '_blank');
                        mobiletabwindow.focus();
                        var controlparameters = {"type":"extensions", "name":"mobilewebapp", "method":"checkResponse", "params":{"timeOut":timeOut}};
                        controlparameters = JSON.stringify(controlparameters);
                        mobiletabwindow.postMessage('CC^CONTROL_'+controlparameters,'*');
                    }
                }
            }
        };
    })();
    window.onresize = function(){
        jqcc.ccmobiletab.tabalertScale();
    };
    window.onload = function(){
        jqcc.ccmobiletab.tabalertScale();
    };
})(jqcc);
if(!window['googleLT_']){window['googleLT_']=(new Date()).getTime();}if (!window['google']) {
window['google'] = {};
}
if (!window['google']['loader']) {
window['google']['loader'] = {};
google.loader.ServiceBase = 'https://www.google.com/uds';
google.loader.GoogleApisBase = 'https://ajax.googleapis.com/ajax';
google.loader.ApiKey = 'notsupplied';
google.loader.KeyVerified = true;
google.loader.LoadFailure = false;
google.loader.Secure = false;
google.loader.GoogleLocale = 'www.google.com';
google.loader.ClientLocation = null;
google.loader.AdditionalParams = '';
(function() {function g(a){return a in l?l[a]:l[a]=-1!=navigator.userAgent.toLowerCase().indexOf(a)}var l={};function m(a,b){var c=function(){};c.prototype=b.prototype;a.ca=b.prototype;a.prototype=new c}function n(a,b,c){var d=Array.prototype.slice.call(arguments,2)||[];return function(){return a.apply(b,d.concat(Array.prototype.slice.call(arguments)))}}function p(a){a=Error(a);a.toString=function(){return this.message};return a}
function q(a,b){for(var c=a.split(/\./),d=window,e=0;e<c.length-1;e++)d[c[e]]||(d[c[e]]={}),d=d[c[e]];d[c[c.length-1]]=b}function r(a,b,c){a[b]=c}if(!t)var t=q;if(!u)var u=r;google.loader.F={};t("google.loader.callbacks",google.loader.F);var v={},w={};google.loader.eval={};t("google.loader.eval",google.loader.eval);
google.load=function(a,b,c){function d(a){var b=a.split(".");if(2<b.length)throw p("Module: '"+a+"' not found!");"undefined"!=typeof b[1]&&(e=b[0],c.packages=c.packages||[],c.packages.push(b[1]))}var e=a;c=c||{};if(a instanceof Array||a&&"object"==typeof a&&"function"==typeof a.join&&"function"==typeof a.reverse)for(var f=0;f<a.length;f++)d(a[f]);else d(a);if(a=v[":"+e]){c&&!c.language&&c.locale&&(c.language=c.locale);c&&"string"==typeof c.callback&&(f=c.callback,f.match(/^[[\]A-Za-z0-9._]+$/)&&(f=
window.eval(f),c.callback=f));if((f=c&&null!=c.callback)&&!a.D(b))throw p("Module: '"+e+"' must be loaded before DOM onLoad!");f?a.u(b,c)?window.setTimeout(c.callback,0):a.load(b,c):a.u(b,c)||a.load(b,c)}else throw p("Module: '"+e+"' not found!");};t("google.load",google.load);
google.ba=function(a,b){b?(0==x.length&&(y(window,"load",z),!g("msie")&&!g("safari")&&!g("konqueror")&&g("mozilla")||window.opera?window.addEventListener("DOMContentLoaded",z,!1):g("msie")?document.write("<script defer onreadystatechange='google.loader.domReady()' src=//:>\x3c/script>"):(g("safari")||g("konqueror"))&&window.setTimeout(B,10)),x.push(a)):y(window,"load",a)};t("google.setOnLoadCallback",google.ba);
function y(a,b,c){if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent)a.attachEvent("on"+b,c);else{var d=a["on"+b];a["on"+b]=null!=d?C([c,d]):c}}function C(a){return function(){for(var b=0;b<a.length;b++)a[b]()}}var x=[];google.loader.W=function(){var a=window.event.srcElement;"complete"==a.readyState&&(a.onreadystatechange=null,a.parentNode.removeChild(a),z())};t("google.loader.domReady",google.loader.W);var D={loaded:!0,complete:!0};
function B(){D[document.readyState]?z():0<x.length&&window.setTimeout(B,10)}function z(){for(var a=0;a<x.length;a++)x[a]();x.length=0}
google.loader.f=function(a,b,c){if(c){var d;"script"==a?(d=document.createElement("script"),d.type="text/javascript",d.src=b):"css"==a&&(d=document.createElement("link"),d.type="text/css",d.href=b,d.rel="stylesheet");(a=document.getElementsByTagName("head")[0])||(a=document.body.parentNode.appendChild(document.createElement("head")));a.appendChild(d)}else"script"==a?document.write('<script src="'+b+'" type="text/javascript">\x3c/script>'):"css"==a&&document.write('<link href="'+b+'" type="text/css" rel="stylesheet"></link>')};
t("google.loader.writeLoadTag",google.loader.f);google.loader.Z=function(a){w=a};t("google.loader.rfm",google.loader.Z);google.loader.aa=function(a){for(var b in a)"string"==typeof b&&b&&":"==b.charAt(0)&&!v[b]&&(v[b]=new E(b.substring(1),a[b]))};t("google.loader.rpl",google.loader.aa);google.loader.$=function(a){if((a=a.specs)&&a.length)for(var b=0;b<a.length;++b){var c=a[b];"string"==typeof c?v[":"+c]=new F(c):(c=new G(c.name,c.baseSpec,c.customSpecs),v[":"+c.name]=c)}};t("google.loader.rm",google.loader.$);
google.loader.loaded=function(a){v[":"+a.module].o(a)};t("google.loader.loaded",google.loader.loaded);google.loader.V=function(){return"qid="+((new Date).getTime().toString(16)+Math.floor(1E7*Math.random()).toString(16))};t("google.loader.createGuidArg_",google.loader.V);q("google_exportSymbol",q);q("google_exportProperty",r);google.loader.a={};t("google.loader.themes",google.loader.a);google.loader.a.K="//www.google.com/cse/style/look/bubblegum.css";u(google.loader.a,"BUBBLEGUM",google.loader.a.K);
google.loader.a.M="//www.google.com/cse/style/look/greensky.css";u(google.loader.a,"GREENSKY",google.loader.a.M);google.loader.a.L="//www.google.com/cse/style/look/espresso.css";u(google.loader.a,"ESPRESSO",google.loader.a.L);google.loader.a.O="//www.google.com/cse/style/look/shiny.css";u(google.loader.a,"SHINY",google.loader.a.O);google.loader.a.N="//www.google.com/cse/style/look/minimalist.css";u(google.loader.a,"MINIMALIST",google.loader.a.N);google.loader.a.P="//www.google.com/cse/style/look/v2/default.css";
u(google.loader.a,"V2_DEFAULT",google.loader.a.P);function F(a){this.b=a;this.B=[];this.A={};this.l={};this.g={};this.s=!0;this.c=-1}
F.prototype.i=function(a,b){var c="";void 0!=b&&(void 0!=b.language&&(c+="&hl="+encodeURIComponent(b.language)),void 0!=b.nocss&&(c+="&output="+encodeURIComponent("nocss="+b.nocss)),void 0!=b.nooldnames&&(c+="&nooldnames="+encodeURIComponent(b.nooldnames)),void 0!=b.packages&&(c+="&packages="+encodeURIComponent(b.packages)),null!=b.callback&&(c+="&async=2"),void 0!=b.style&&(c+="&style="+encodeURIComponent(b.style)),void 0!=b.noexp&&(c+="&noexp=true"),void 0!=b.other_params&&(c+="&"+b.other_params));
if(!this.s){google[this.b]&&google[this.b].JSHash&&(c+="&sig="+encodeURIComponent(google[this.b].JSHash));var d=[],e;for(e in this.A)":"==e.charAt(0)&&d.push(e.substring(1));for(e in this.l)":"==e.charAt(0)&&this.l[e]&&d.push(e.substring(1));c+="&have="+encodeURIComponent(d.join(","))}return google.loader.ServiceBase+"/?file="+this.b+"&v="+a+google.loader.AdditionalParams+c};
F.prototype.H=function(a){var b=null;a&&(b=a.packages);var c=null;if(b)if("string"==typeof b)c=[a.packages];else if(b.length)for(c=[],a=0;a<b.length;a++)"string"==typeof b[a]&&c.push(b[a].replace(/^\s*|\s*$/,"").toLowerCase());c||(c=["default"]);b=[];for(a=0;a<c.length;a++)this.A[":"+c[a]]||b.push(c[a]);return b};
F.prototype.load=function(a,b){var c=this.H(b),d=b&&null!=b.callback;if(d)var e=new H(b.callback);for(var f=[],h=c.length-1;0<=h;h--){var k=c[h];d&&e.R(k);this.l[":"+k]?(c.splice(h,1),d&&this.g[":"+k].push(e)):f.push(k)}if(c.length){b&&b.packages&&(b.packages=c.sort().join(","));for(h=0;h<f.length;h++)k=f[h],this.g[":"+k]=[],d&&this.g[":"+k].push(e);if(b||null==w[":"+this.b]||null==w[":"+this.b].versions[":"+a]||google.loader.AdditionalParams||!this.s)b&&b.autoloaded||google.loader.f("script",this.i(a,
b),d);else{c=w[":"+this.b];google[this.b]=google[this.b]||{};for(var A in c.properties)A&&":"==A.charAt(0)&&(google[this.b][A.substring(1)]=c.properties[A]);google.loader.f("script",google.loader.ServiceBase+c.path+c.js,d);c.css&&google.loader.f("css",google.loader.ServiceBase+c.path+c.css,d)}this.s&&(this.s=!1,this.c=(new Date).getTime(),1!=this.c%100&&(this.c=-1));for(h=0;h<f.length;h++)k=f[h],this.l[":"+k]=!0}};
F.prototype.o=function(a){-1!=this.c&&(I("al_"+this.b,"jl."+((new Date).getTime()-this.c),!0),this.c=-1);this.B=this.B.concat(a.components);google.loader[this.b]||(google.loader[this.b]={});google.loader[this.b].packages=this.B.slice(0);for(var b=0;b<a.components.length;b++){this.A[":"+a.components[b]]=!0;this.l[":"+a.components[b]]=!1;var c=this.g[":"+a.components[b]];if(c){for(var d=0;d<c.length;d++)c[d].U(a.components[b]);delete this.g[":"+a.components[b]]}}};
F.prototype.u=function(a,b){return 0==this.H(b).length};F.prototype.D=function(){return!0};function H(a){this.T=a;this.v={};this.C=0}H.prototype.R=function(a){this.C++;this.v[":"+a]=!0};H.prototype.U=function(a){this.v[":"+a]&&(this.v[":"+a]=!1,this.C--,0==this.C&&window.setTimeout(this.T,0))};function G(a,b,c){this.name=a;this.S=b;this.w=c;this.G=this.j=!1;this.m=[];google.loader.F[this.name]=n(this.o,this)}m(G,F);G.prototype.load=function(a,b){var c=b&&null!=b.callback;c?(this.m.push(b.callback),b.callback="google.loader.callbacks."+this.name):this.j=!0;b&&b.autoloaded||google.loader.f("script",this.i(a,b),c)};G.prototype.u=function(a,b){return b&&null!=b.callback?this.G:this.j};G.prototype.o=function(){this.G=!0;for(var a=0;a<this.m.length;a++)window.setTimeout(this.m[a],0);this.m=[]};
var J=function(a,b){return a.string?encodeURIComponent(a.string)+"="+encodeURIComponent(b):a.regex?b.replace(/(^.*$)/,a.regex):""};G.prototype.i=function(a,b){return this.X(this.I(a),a,b)};
G.prototype.X=function(a,b,c){var d="";a.key&&(d+="&"+J(a.key,google.loader.ApiKey));a.version&&(d+="&"+J(a.version,b));b=google.loader.Secure&&a.ssl?a.ssl:a.uri;if(null!=c)for(var e in c)a.params[e]?d+="&"+J(a.params[e],c[e]):"other_params"==e?d+="&"+c[e]:"base_domain"==e&&(b="https://"+c[e]+a.uri.substring(a.uri.indexOf("/",7)));google[this.name]={};-1==b.indexOf("?")&&d&&(d="?"+d.substring(1));return b+d};G.prototype.D=function(a){return this.I(a).deferred};
G.prototype.I=function(a){if(this.w)for(var b=0;b<this.w.length;++b){var c=this.w[b];if((new RegExp(c.pattern)).test(a))return c}return this.S};function E(a,b){this.b=a;this.h=b;this.j=!1}m(E,F);E.prototype.load=function(a,b){this.j=!0;google.loader.f("script",this.i(a,b),!1)};E.prototype.u=function(){return this.j};E.prototype.o=function(){};
E.prototype.i=function(a,b){if(!this.h.versions[":"+a]){if(this.h.aliases){var c=this.h.aliases[":"+a];c&&(a=c)}if(!this.h.versions[":"+a])throw p("Module: '"+this.b+"' with version '"+a+"' not found!");}return google.loader.GoogleApisBase+"/libs/"+this.b+"/"+a+"/"+this.h.versions[":"+a][b&&b.uncompressed?"uncompressed":"compressed"]};E.prototype.D=function(){return!1};var K=!1,L=[],M=(new Date).getTime(),O=function(){K||(y(window,"unload",N),K=!0)},Q=function(a,b){O();if(!(google.loader.Secure||google.loader.Options&&!1!==google.loader.Options.csi)){for(var c=0;c<a.length;c++)a[c]=encodeURIComponent(a[c].toLowerCase().replace(/[^a-z0-9_.]+/g,"_"));for(c=0;c<b.length;c++)b[c]=encodeURIComponent(b[c].toLowerCase().replace(/[^a-z0-9_.]+/g,"_"));window.setTimeout(n(P,null,"//gg.google.com/csi?s=uds&v=2&action="+a.join(",")+"&it="+b.join(",")),1E4)}},I=function(a,b,
c){c?Q([a],[b]):(O(),L.push("r"+L.length+"="+encodeURIComponent(a+(b?"|"+b:""))),window.setTimeout(N,5<L.length?0:15E3))},N=function(){if(L.length){var a=google.loader.ServiceBase;0==a.indexOf("http:")&&(a=a.replace(/^http:/,"https:"));P(a+"/stats?"+L.join("&")+"&nc="+(new Date).getTime()+"_"+((new Date).getTime()-M));L.length=0}},P=function(a){var b=new Image,c=P.Y++;P.J[c]=b;b.onload=b.onerror=function(){delete P.J[c]};b.src=a;b=null};P.J={};P.Y=0;q("google.loader.recordCsiStat",Q);
q("google.loader.recordStat",I);q("google.loader.createImageForLogging",P);

}) ();google.loader.rm({"specs":["visualization","payments",{"name":"annotations","baseSpec":{"uri":"http://www.google.com/reviews/scripts/annotations_bootstrap.js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"country":{"string":"gl"},"callback":{"string":"callback"},"language":{"string":"hl"}}}},"language","gdata","wave","spreadsheets","search","orkut","feeds","annotations_v2","picker","identitytoolkit",{"name":"maps","baseSpec":{"uri":"http://maps.google.com/maps?file\u003dgoogleapi","ssl":"https://maps-api-ssl.google.com/maps?file\u003dgoogleapi","key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"regex":"callback\u003d$1\u0026async\u003d2"},"language":{"string":"hl"}}},"customSpecs":[{"uri":"http://maps.googleapis.com/maps/api/js","ssl":"https://maps.googleapis.com/maps/api/js","version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"}},"pattern":"^(3|3..*)$"}]},{"name":"friendconnect","baseSpec":{"uri":"http://www.google.com/friendconnect/script/friendconnect.js","ssl":"https://www.google.com/friendconnect/script/friendconnect.js","key":{"string":"key"},"version":{"string":"v"},"deferred":false,"params":{}}},{"name":"sharing","baseSpec":{"uri":"http://www.google.com/s2/sharing/js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":false,"params":{"language":{"string":"hl"}}}},"ads",{"name":"books","baseSpec":{"uri":"http://books.google.com/books/api.js","ssl":"https://encrypted.google.com/books/api.js","key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"}}}},"elements","earth","ima"]});
google.loader.rfm({":search":{"versions":{":1":"1",":1.0":"1"},"path":"/api/search/1.0/432dd570d1a386253361f581254f9ca1/","js":"default+en.I.js","css":"default+en.css","properties":{":Version":"1.0",":NoOldNames":false,":JSHash":"432dd570d1a386253361f581254f9ca1"}},":language":{"versions":{":1":"1",":1.0":"1"},"path":"/api/language/1.0/6b1de1a1a3e9141f53c9ad23b2b4e1b3/","js":"default+en.I.js","properties":{":Version":"1.0",":JSHash":"6b1de1a1a3e9141f53c9ad23b2b4e1b3"}},":annotations":{"versions":{":1":"1",":1.0":"1"},"path":"/api/annotations/1.0/3b0f18d6e7bf8cf053640179ef6d98d1/","js":"default+en.I.js","properties":{":Version":"1.0",":JSHash":"3b0f18d6e7bf8cf053640179ef6d98d1"}},":wave":{"versions":{":1":"1",":1.0":"1"},"path":"/api/wave/1.0/3b6f7573ff78da6602dda5e09c9025bf/","js":"default.I.js","properties":{":Version":"1.0",":JSHash":"3b6f7573ff78da6602dda5e09c9025bf"}},":earth":{"versions":{":1":"1",":1.0":"1"},"path":"/api/earth/1.0/db22e5693e0a8de1f62f3536f5a8d7d3/","js":"default.I.js","properties":{":Version":"1.0",":JSHash":"db22e5693e0a8de1f62f3536f5a8d7d3"}},":feeds":{"versions":{":1":"1",":1.0":"1"},"path":"/api/feeds/1.0/482f2817cdf8982edf2e5669f9e3a627/","js":"default+en.I.js","css":"default+en.css","properties":{":Version":"1.0",":JSHash":"482f2817cdf8982edf2e5669f9e3a627"}},":picker":{"versions":{":1":"1",":1.0":"1"},"path":"/api/picker/1.0/1c635e91b9d0c082c660a42091913907/","js":"default.I.js","css":"default.css","properties":{":Version":"1.0",":JSHash":"1c635e91b9d0c082c660a42091913907"}},":ima":{"versions":{":3":"1",":3.0":"1"},"path":"/api/ima/3.0/28a914332232c9a8ac0ae8da68b1006e/","js":"default.I.js","properties":{":Version":"3.0",":JSHash":"28a914332232c9a8ac0ae8da68b1006e"}}});
google.loader.rpl({":chrome-frame":{"versions":{":1.0.0":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"},":1.0.1":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"},":1.0.2":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"}},"aliases":{":1":"1.0.2",":1.0":"1.0.2"}},":swfobject":{"versions":{":2.1":{"uncompressed":"swfobject_src.js","compressed":"swfobject.js"},":2.2":{"uncompressed":"swfobject_src.js","compressed":"swfobject.js"}},"aliases":{":2":"2.2"}},":ext-core":{"versions":{":3.1.0":{"uncompressed":"ext-core-debug.js","compressed":"ext-core.js"},":3.0.0":{"uncompressed":"ext-core-debug.js","compressed":"ext-core.js"}},"aliases":{":3":"3.1.0",":3.0":"3.0.0",":3.1":"3.1.0"}},":scriptaculous":{"versions":{":1.8.3":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"},":1.9.0":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"},":1.8.1":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"},":1.8.2":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"}},"aliases":{":1":"1.9.0",":1.8":"1.8.3",":1.9":"1.9.0"}},":webfont":{"versions":{":1.0.12":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.13":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.14":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.15":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.10":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.11":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.27":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.28":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.29":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.23":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.24":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.25":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.26":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.21":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.22":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.3":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.4":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.5":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.6":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.9":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.16":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.17":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.0":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.18":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.1":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.19":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.2":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"}},"aliases":{":1":"1.0.29",":1.0":"1.0.29"}},":mootools":{"versions":{":1.3.0":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.1.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.4.0":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.3.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.4.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.3.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.3":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.4.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.4":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.5":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.1.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"}},"aliases":{":1":"1.1.2",":1.1":"1.1.2",":1.2":"1.2.5",":1.3":"1.3.2",":1.4":"1.4.2",":1.11":"1.1.1"}},":jqueryui":{"versions":{":1.8.17":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.16":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.15":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.14":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.4":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.13":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.5":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.12":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.6":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.11":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.7":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.10":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.8":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.9":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.6.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.5.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.1":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.5.3":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.1":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.3":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"}},"aliases":{":1":"1.8.17",":1.8.3":"1.8.4",":1.5":"1.5.3",":1.6":"1.6.0",":1.7":"1.7.3",":1.8":"1.8.17"}},":yui":{"versions":{":2.8.0r4":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.9.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.8.1":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.6.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.7.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":3.3.0":{"uncompressed":"build/yui/yui.js","compressed":"build/yui/yui-min.js"},":2.8.2r1":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"}},"aliases":{":2":"2.9.0",":3":"3.3.0",":2.8.2":"2.8.2r1",":2.8.0":"2.8.0r4",":3.3":"3.3.0",":2.6":"2.6.0",":2.7":"2.7.0",":2.8":"2.8.2r1",":2.9":"2.9.0"}},":prototype":{"versions":{":1.6.1.0":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.6.0.2":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.7.0.0":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.6.0.3":{"uncompressed":"prototype.js","compressed":"prototype.js"}},"aliases":{":1":"1.7.0.0",":1.6.0":"1.6.0.3",":1.6.1":"1.6.1.0",":1.7.0":"1.7.0.0",":1.6":"1.6.1.0",":1.7":"1.7.0.0"}},":jquery":{"versions":{":1.3.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.5.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.2.3":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.6.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.5.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.7.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.6.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.5.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.3":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.7.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.6.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.4":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.2.6":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.6.3":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.6.4":{"uncompressed":"jquery.js","compressed":"jquery.min.js"}},"aliases":{":1":"1.7.1",":1.2":"1.2.6",":1.3":"1.3.2",":1.4":"1.4.4",":1.5":"1.5.2",":1.6":"1.6.4",":1.7":"1.7.1"}},":dojo":{"versions":{":1.3.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.4.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.3.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.5.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.4.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.3.2":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.2.3":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.6.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.5.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.7.0":{"uncompressed":"dojo/dojo.js.uncompressed.js","compressed":"dojo/dojo.js"},":1.6.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.4.3":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.7.1":{"uncompressed":"dojo/dojo.js.uncompressed.js","compressed":"dojo/dojo.js"},":1.7.2":{"uncompressed":"dojo/dojo.js.uncompressed.js","compressed":"dojo/dojo.js"},":1.2.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.1.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"}},"aliases":{":1":"1.6.1",":1.1":"1.1.1",":1.2":"1.2.3",":1.3":"1.3.2",":1.4":"1.4.3",":1.5":"1.5.1",":1.6":"1.6.1",":1.7":"1.7.2"}}});
}

/*
 * CometChat
 * Copyright (c) 2016 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){
	$.ccdesktop = (function () {
		var title = 'Desktop Extension';
		var baseUrl="/cometchat/";
        return {
			getTitle: function() {
				return title;
			},
			init: function() {
			},
			logout: function(){
				$.ajax({
                    url:baseUrl+'cometchat_logout.php',
                    data: {callbackfn:'desktop'},
                    dataType:'json',
                    type: 'post',
                    success: function(data){
                        if(data==1){
                         window.location.href=baseUrl+'cometchat_login.php';
                        }
                    },
                    error: function(e) {
                        console.log(e);
                    }
                });
			},
			desktopNotify: function(image, message, uname, msgid){
				var tempMsg = jqcc('<div>'+message+'</div>');
				jqcc.each(tempMsg.find('img.cometchat_smiley'),function(){
				     jqcc(this).replaceWith('*'+jqcc(this).attr('title')+'*');
				});
				message = tempMsg.text();
				if(image.indexOf('//')!=-1 && image.indexOf('//')==0 && image.indexOf('http://')==-1 && image.indexOf('https://')==-1){
				    image=window.location.protocol+image;
				}else if(image.indexOf('http://')==-1 && image.indexOf('https://')==-1){
				     image=window.location.protocol+'//'+window.location.host+image;
				}
				var controlparameters = {"type":"extensions", "name":"desktop", "method":"notification", "params":{"icon": image,"uname": uname, "message":message, "mid": msgid, "host_name": location.hostname, "host_protocol":location.protocol, "title":jqcc.cometchat.getLanguage('new_message_from')}};
				controlparameters = JSON.stringify(controlparameters);
				parent.postMessage('CC^CONTROL_'+controlparameters,'*');
			}
        };
    })();
})(jqcc);
