// build time:Tue Apr 07 2020 08:30:34 GMT+0000 (Coordinated Universal Time)
!function(n,t,e){var i=function(){var n="";n+='<button class="btn-copy" data-clipboard-snippet="">';n+='  <i class="fa fa-clipboard"></i><span>复制</span>';n+="</button>";$(".highlight .code pre").before(n);new ClipboardJS(".btn-copy",{target:function(n){return n.nextElementSibling}})};i()}(window,document);$(document).delegate(".btn-copy","click",function(){var n={};n.dialog=jqueryAlert({icon:"../jquery_alert/img/right.png",content:"复制成功",closeTime:1e3})});
//rebuild by neat 