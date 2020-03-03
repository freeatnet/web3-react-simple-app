(this["webpackJsonptrading-interface"]=this["webpackJsonptrading-interface"]||[]).push([[0],{143:function(e,t,n){e.exports=n(373)},148:function(e,t,n){},158:function(e,t){},160:function(e,t){},184:function(e,t){},186:function(e,t){},369:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DECIMALS","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')},370:function(e,t,n){},373:function(e,t,n){"use strict";n.r(t);var a=n(4),o=n.n(a),i=n(128),c=n.n(i),r=(n(148),n(41)),u=n(23);var s,l=function(){var e=Object(u.b)(),t=e.chainId,n=e.library,i=Object(a.useState)(),c=Object(r.a)(i,2),s=c[0],l=c[1];return Object(a.useEffect)((function(){if(n){var e=!1;n.getBlockNumber().then((function(t){e||l(t)})).catch((function(){e||l(null)}));var t=function(e){l(e)};return n.on("block",t),function(){e=!0,n.removeListener("block",t),l(void 0)}}}),[n,t]),o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,"Block Number"),o.a.createElement("span",{role:"img","aria-label":"numbers"},"\ud83d\udd22"),o.a.createElement("span",null,"number"===typeof s?s.toLocaleString():null===s?"Error":n?"...":"awaiting connection..."))},p=n(3),f=n.n(p),b=n(130),d=n(131),m=n.n(d),y=n(52),v=n(132),h=n(133),g={MAINNET:1,ROPSTEN:3,RINKEBY:4,KOVAN:42},O=(s={},Object(y.a)(s,g.MAINNET,"https://mainnet.infura.io/v3/60ab76e16df54c808e50a79975b4779f"),Object(y.a)(s,g.ROPSTEN,"https://ropsten.infura.io/v3/60ab76e16df54c808e50a79975b4779f"),Object(y.a)(s,g.RINKEBY,"https://rinkeby.infura.io/v3/60ab76e16df54c808e50a79975b4779f"),Object(y.a)(s,g.KOVAN,"https://kovan.infura.io/v3/60ab76e16df54c808e50a79975b4779f"),s),w=new v.a({supportedChainIds:Object.values(g)}),E=new h.a({urls:Object.fromEntries(Object.values(g).map((function(e){return[e,O[e]]}))),defaultChainId:g.MAINNET,pollingInterval:12e3});var j=function(){var e=Object(u.b)().activate;return o.a.createElement("button",{style:{display:"block"},onClick:function(){return e(w)}},"Connect with MetaMask")},k=n(369);var M=function(e){var t,n=e.address,i=Object(u.b)(),c=i.library,s=i.account,l=Object(a.useState)(null),p=Object(r.a)(l,2),d=p[0],y=p[1];return Object(a.useEffect)((function(){if(c&&"undefined"!==typeof n){var e=new m.a.Contract(n,k,c);Object(b.a)(f.a.mark((function t(){var n,a,o,i,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.name(),e.symbol(),s?e.balanceOf(s):void 0]);case 2:n=t.sent,a=Object(r.a)(n,3),o=a[0],i=a[1],c=a[2],y({name:o,symbol:i,balanceOf:c});case 8:case"end":return t.stop()}}),t)})))()}}),[s,n,c]),o.a.createElement("div",null,n,":"," ",d&&o.a.createElement(o.a.Fragment,null,d.name,s&&o.a.createElement("p",null,"Balance of ",s,":"," ","".concat(null===(t=d.balanceOf)||void 0===t?void 0:t.toString()," ").concat(d.symbol))||o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement(j,null)))||"...")};var C=function(e){var t=e.children,n=Object(u.b)(),o=n.connector,i=n.activate,c=n.active,s=function(){var e=Object(u.b)(),t=e.activate,n=e.active,o=Object(a.useState)(!1),i=Object(r.a)(o,2),c=i[0],s=i[1];return Object(a.useEffect)((function(){w.isAuthorized().then((function(e){e?t(w,void 0,!0).catch((function(){s(!0)})):s(!0)}))}),[t]),Object(a.useEffect)((function(){!c&&n&&s(!0)}),[c,n]),c}();return Object(a.useEffect)((function(){s&&!c&&i(E)}),[s,c,o,i]),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(u.b)(),n=t.active,o=t.error,i=t.activate;Object(a.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!n&&!o&&!e){var a=function(){console.log("Handling 'connect' event"),i(w)},c=function(e){console.log("Handling 'chainChanged' event with payload",e),i(w)},r=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&i(w)},u=function(e){console.log("Handling 'networkChanged' event with payload",e),i(w)};return t.on("connect",a),t.on("chainChanged",c),t.on("accountsChanged",r),t.on("networkChanged",u),function(){t.removeListener&&(t.removeListener("connect",a),t.removeListener("chainChanged",c),t.removeListener("accountsChanged",r),t.removeListener("networkChanged",u))}}}),[n,o,e,i])}(!s),t};n(370);var N=function(){return o.a.createElement(C,null,o.a.createElement("div",{className:"App"},o.a.createElement(l,null),o.a.createElement(M,{address:"0x6b175474e89094c44da98b954eedeac495271d0f"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=n(141);function I(e){var t=new x.a(e);return t.pollingInterval=12e3,t}var S=function(e){var t=e.children;return o.a.createElement(u.a,{getLibrary:I},t)};c.a.render(o.a.createElement(S,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[143,1,2]]]);
//# sourceMappingURL=main.54f6ab74.chunk.js.map