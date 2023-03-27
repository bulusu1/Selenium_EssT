/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2015 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property laws,
* including trade secret and or copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
var communicate,acom_analytics,utilities,mvTracking,started,installSource,startup=new Promise((function(e,t){"use strict";started=e}));function registerActions(e){"use strict";try{e&&("update"===e.reason?(localStorage.getItem("installVersion")||localStorage.setItem("installVersion",e.previousVersion),localStorage.setItem("installType",e.reason)):"install"===e.reason&&(localStorage.setItem("installVersion",chrome.runtime.getManifest().version),localStorage.setItem("installType",e.reason)))}catch(e){}var t,n=function(){return communicate.getModule("acro-web2pdf")},o=function(){return communicate.getModule("acro-gstate")},i=["*://*/*.pdf"],a=["http://*/*","https://*/*"],r=["all"],c=function(e){var t,n=e.splice();for(t=0;t<e.length;t+=1)n.push(e[t]+"?*")}(["*://*/*.ai","*://*/*.bmp","*://*/*.doc","*://*/*.docx","*://*/*.gif","*://*/*.indd","*://*/*.jpeg","*://*/*.jpg","*://*/*.odf","*://*/*.odg","*://*/*.odp","*://*/*.ods","*://*/*.odt","*://*/*.png","*://*/*.ppt","*://*/*.pptx","*://*/*.pptx","*://*/*.ps","*://*/*.psd","*://*/*.pub","*://*/*.rtf","*://*/*.stw","*://*/*.sxd","*://*/*.sxc","*://*/*.sxi","*://*/*.sxw","*://*/*.text","*://*/*.tif","*://*/*.tiff","*://*/*.txt","*://*/*.xls","*://*/*.xlsx"].concat(i));function l(e){return utilities&&utilities.isChromeOnlyMessage(e)&&utilities.isEdge()&&(e+="Edge"),utilities&&utilities.getTranslation?utilities.getTranslation(e):chrome.i18n.getMessage(e)}function s(e){return(e.title||l("web2pdfUntitledFileName")).replace(/[<>?:|\*"\/\\'&\.]/g,"")}function m(e,t){if(!e&&!t)return!1;try{const n=e.pageUrl||t.url,o=new URL(n);if(o.protocol&&["http:","https:"].includes(o.protocol))return!0}catch(e){console.error(e)}return!1}startupComplete||(startupComplete=!0,startup.then((function(t){chrome.runtime.getPlatformInfo((function(e){var t;SETTINGS.OS=e.os,SETTINGS.CHROME_VERSION=0,SETTINGS.EXTENSION_VERSION=0;try{(t=navigator.userAgent.match(/Chrome\/([0-9]+)/))&&(SETTINGS.CHROME_VERSION=+t[1])}catch(e){}try{SETTINGS.EXTENSION_VERSION=chrome.runtime.getManifest().version}catch(e){}"mac"===e.os?acom_analytics.event(acom_analytics.e.OS_MAC_OP):"win"===e.os&&acom_analytics.event(acom_analytics.e.OS_WIN_OP)})),e?"update"===e.reason?t.event(t.e.EXTENSION_UPDATE):"install"===e.reason&&(t.event(t.e.EXTENSION_INSTALLED),chrome.management.getSelf((function(e){switch(e.installType){case"admin":t.event(t.e.EXTENSION_INSTALLED_ADMIN);break;case"development":t.event(t.e.EXTENSION_INSTALLED_DEVELOPMENT);break;case"other":t.event(t.e.EXTENSION_INSTALLED_OTHER);break;case"normal":t.event(t.e.EXTENSION_INSTALLED_DIRECT);let e="store_direct";mvTracking&&(e=decodeURIComponent(mvTracking)),t.event(t.e.EXTENSION_INSTALLED_SOURCE,{SOURCE:e});break;case"sideload":t.event(t.e.EXTENSION_INSTALLED_SIDE_LOADED),SETTINGS.IS_READER&&"win"===SETTINGS.OS&&t.event(t.e.EXTENSION_INSTALLED_SIDE_LOADED_SOURCE,{SOURCE:installSource})}}))):t.event(t.e.EXTENSION_STARTUP),chrome.browserAction.onClicked.addListener((function(e){communicate.echo(e)}));try{if(window.navigator.onLine){const e=localStorage.getItem("pdfViewer"),o=localStorage.getItem("killSwitch"),i=localStorage.getItem("cdnUrl");"false"===e&&"on"===o&&(n=i,new Promise((function(e,t){let o=new XMLHttpRequest;o.open("GET",n),o.timeout=5e3,o.onload=function(){if(4===o.readyState)return 200===this.status?e(o.response):t({statusText:o.statusText})},o.onerror=function(){return t({statusText:o.statusText})},o.ontimeout=()=>t({statusText:"Failed due to timeout"}),o.send()}))).then(e=>{-1===e.toString().indexOf("<meta name='killSwitch' content='off'/>")&&-1===e.toString().indexOf('<meta name="killSwitch" content="off"/>')||(localStorage.setItem("pdfViewer",!0),localStorage.setItem("killSwitch","off"),t.event(t.e.VIEWER_KILL_SWITCH_OFF_SUCCESS))}).catch(e=>{t.event(t.e.VIEWER_KILL_SWITCH_OFF_FAILED)})}}catch(e){t.event(t.e.VIEWER_KILL_SWITCH_OFF_FAILED)}var n})),!SETTINGS.IS_READER&&SETTINGS.USE_ACROBAT?(chrome.contextMenus.create({title:l("web2pdfConvertPageContextMenu"),contexts:["page"],onclick:function(e,t){m(e,t)&&(acom_analytics.event(acom_analytics.e.CONTEXT_MENU_CONVERT_PAGE),n().handleConversionRequest({tabId:t.id,caller:o().web2pdfCaller.MENU,action:o().web2pdfAction.CONVERT,context:o().web2pdfContext.PAGE,url:e.pageUrl||t.url,domtitle:s(t)}))},documentUrlPatterns:a,id:"convertPageContextMenu"}),chrome.contextMenus.create({title:l("web2pdfAppendPageContextMenu"),contexts:["page"],onclick:function(e,t){m(e,t)&&(acom_analytics.event(acom_analytics.e.CONTEXT_MENU_APPEND_PAGE),n().handleConversionRequest({tabId:t.id,caller:o().web2pdfCaller.MENU,action:o().web2pdfAction.APPEND,context:o().web2pdfContext.PAGE,url:e.pageUrl||t.url,domtitle:s(t)}))},documentUrlPatterns:a,id:"appendPageContextMenu"}),chrome.contextMenus.create({title:l("web2pdfConvertLinkContextMenu"),contexts:["link"],onclick:function(e,t){m(e,t)&&(acom_analytics.event(acom_analytics.e.CONTEXT_MENU_CONVERT_LINK),n().handleConversionRequest({tabId:t.id,caller:o().web2pdfCaller.MENU,action:o().web2pdfAction.CONVERT,context:o().web2pdfContext.LINK,url:e.linkUrl,domtitle:s(t)}))},documentUrlPatterns:a}),chrome.contextMenus.create({title:l("web2pdfAppendLinkContextMenu"),contexts:["link"],onclick:function(e,t){m(e,t)&&(acom_analytics.event(acom_analytics.e.CONTEXT_MENU_APPEND_LINK),n().handleConversionRequest({tabId:t.id,caller:o().web2pdfCaller.MENU,action:o().web2pdfAction.APPEND,context:o().web2pdfContext.LINK,url:e.linkUrl,domtitle:s(t)}))},documentUrlPatterns:a})):SETTINGS.IS_READER||("Adobe PDF",t=chrome.contextMenus.create({title:"Adobe PDF",contexts:r,id:"pdf-page"}),chrome.contextMenus.create({title:"Upload PDF to acrobat.com",contexts:r,parentId:t,id:"upload",documentUrlPatterns:i}),chrome.contextMenus.create({title:"Upload and export to Word/Excel/PowerPoint/Images",contexts:r,parentId:t,id:"export",documentUrlPatterns:i}),chrome.contextMenus.create({title:"Upload link to acrobat.com",contexts:["link"],parentId:t,id:"upload_link",targetUrlPatterns:c}),chrome.contextMenus.create({title:"Upload image to acrobat.com",contexts:["image"],parentId:t,id:"upload-image"}),chrome.contextMenus.create({title:"Create a Slideshow from a Flickr album",contexts:r,parentId:t,id:"flickr-slideshow",documentUrlPatterns:["*://www.flickr.com/*"]}),chrome.contextMenus.create({title:"Create a contact sheet from Flickr images",contexts:r,parentId:t,id:"flickr-contact-sheet",documentUrlPatterns:["*://www.flickr.com/*"]})))}startupComplete=!1,welcomeTabInfo={},welcomeTabViewingTimeThreshold=15e3,SETTINGS=SETTINGS||{USE_ACROBAT:!0},chrome.runtime.getPlatformInfo((function(e){"use strict";SETTINGS.OS=e.os})),require(["communicate","util","upload","download-manager","analytics","acro-gstate","acro-actions","floodgate","acro-web2pdf","session","convert-to-zip"],(function(e,t,n,o,i,a,r,c,l){"use strict";function s(e){if("false"!==t.getCookie("fte")){const n=c.hasFlag("dc-cv-modern-viewer");setTimeout(()=>{chrome.storage.managed.get("OpenHelpx",(function(o){const a=!o||"false"!==o.OpenHelpx;i.event(a?i.e.VIEWER_FTE_OPEN_HELPX_ENABLED:i.e.VIEWER_FTE_OPEN_HELPX_DISABLED),function(){try{t.getCookie("pdfViewer")||(t.setCookie("pdfViewer","true"),t.isEdge()?i.event(i.e.USE_ACROBAT_IN_EDGE_AUTO_ENABLED):i.event(i.e.USE_ACROBAT_IN_CHROME_AUTO_ENABLED))}catch(e){i.event(i.e.LOCAL_STORAGE_DISABLED)}}(),t.setCookie("fte","false",3650);const r=t.isEdge()&&("admin"===e.installType||"sideload"===e.installType);a&&!r&&async function(e){const n=await Promise.any([e,new Promise(e=>setTimeout(e,1e3,!1))]);localStorage.setItem("modernViewerEnable",!!n);const o=n?"mv":"cv";let i=chrome.i18n.getMessage("@@ui_locale");["ca","da","en_GB","es","fi","hr","it","ko","nl","pt_BR","ru","sl","tr","zh_CN","cs","de","en_US","eu","fr","hu","ja","nb","pl","ro","sk","sv","uk","zh_TW"].includes(i)||(i="en_US");const a=t.isEdge()?"Edge":"Chrome";return t.isEdge()||t.setCookie("staticFteCoachmarkShown","false"),`https://acrobat.adobe.com/dc-chrome-extension/${o}/${i}/Acrobat-for-${a}.pdf`}(n).then(e=>t.createTab(e,e=>{const t=(new Date).getTime();welcomeTabInfo={...e,timestamp:t}}))}))},2e3)}}function m(e){return utilities&&utilities.isChromeOnlyMessage(e)&&utilities.isEdge()&&(e+="Edge"),utilities&&utilities.getTranslation?utilities.getTranslation(e):chrome.i18n.getMessage(e)}chrome.management.getSelf((function(e){!function(){try{0==localStorage.length&&""!=document.cookie&&document.cookie.split(/; */).map(e=>e.split("=")).filter(e=>e&&2==e.length).forEach(e=>localStorage.setItem(e[0],e[1]))}catch(e){}}(),function(){try{t.isEdge()&&localStorage.setItem("IsRunningInEdge",!0)}catch(e){}}(),i.s||i.init(e.version,e.installType);const n=`https://chrome.google.com/webstore/detail/*/${chrome.runtime.id}*`,o=`https://microsoftedge.microsoft.com/addons/detail/*/${chrome.runtime.id}*`;chrome.tabs.query({url:[n,o]},(function(e){if(chrome.runtime.lastError)mvTracking=null;else for(let t in e){const n=new URLSearchParams(new URL(e[t].url).search);if(n.has("mv")){mvTracking=encodeURIComponent(n.get("mv"));break}}})),r.getVersion((function(n,o){n!==SETTINGS.READER_VER&&n!==SETTINGS.ERP_READER_VER||(SETTINGS.IS_READER=!0,SETTINGS.IS_ACROBAT=!1,n===SETTINGS.ERP_READER_VER&&(SETTINGS.IS_ERP_READER=!0),n===SETTINGS.ERP_READER_VER?chrome.browserAction.setTitle({title:m("web2pdfConvertButtonToolTipERPReader")}):chrome.browserAction.setTitle({title:m("web2pdfOpenButtonText")}),installSource=o),registerActions(),function(e){(0==e||1==e&&0==t.getNMHConnectionStatus()||e==SETTINGS.READER_VER||e==SETTINGS.ERP_READER_VER)&&chrome.contextMenus.removeAll()}(n),function(e){0!=e&&1!=e&&e!=SETTINGS.READER_VER&&e!=SETTINGS.ERP_READER_VER||chrome.browserAction.setTitle({title:""})}(n),started(i),s(e)}))})),acom_analytics=i,communicate=e,utilities=t,SETTINGS.USE_ACROBAT||chrome.contextMenus.onClicked.addListener((function(e,t){var n={filename:t.title,tabId:t.id,menuItem:e.menuItemId,handleResult:"preview"};if("flickr-slideshow"===e.menuItemId||"flickr-contact-sheet"===e.menuItemId)return i.event(n,i.e.FLICKR_CONTEXT_CLICK),void communicate.deferMessage({panel_op:"flickr",tabId:t.id});"upload-image"===e.menuItemId&&(i.setOp("Image"),n.handleResult="image_preview",n.url=e.srcUrl),"upload_link"===e.menuItemId&&(i.setOp("Link"),n.url=e.linkUrl),"upload"===e.menuItemId&&(i.setOp("Link"),n.url=e.linkUrl),"pdf-page"===e.menuItemId&&(i.setOp("PdfPage"),n.url=e.pageUrl),n.filename.length>20&&(n.filename=n.filename.substring(0,19)),e.linkUrl?n.filename=e.linkUrl.split("/").splice(-1)[0].replace(/\?\S*/,""):e.srcUrl&&(n.url=e.srcUrl,n.filename=e.srcUrl.split("/").splice(-1)[0].replace(/\?\S*/,"")),"export"===e.menuItemId&&(n.handleResult="export"),o.proxy(o.do_upload(n))}))})),chrome.runtime.onInstalled.addListener(registerActions),chrome.tabs.onRemoved.addListener(e=>{const{id:t,timestamp:n}=welcomeTabInfo,o=(new Date).getTime();e===t&&o-n<=welcomeTabViewingTimeThreshold&&acom_analytics.event(acom_analytics.e.WELCOME_PDF_TAB_CLOSED);const i=localStorage.getItem("signInExperimentShown");if(i){const{currTabId:t,timestamp:n}=JSON.parse(i),a=o-n,r="true"===localStorage.getItem("signInExperimentSuppressed"),c=sessionStorage.getItem("signInSource");e===t&&a<=welcomeTabViewingTimeThreshold&&!r&&!c&&acom_analytics.event(acom_analytics.e.SIGN_IN_PROMPT_TAB_CLOSED),localStorage.removeItem("signInExperimentShown"),localStorage.removeItem("signInExperimentSuppressed")}});