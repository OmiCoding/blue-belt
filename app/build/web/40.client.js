(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[40],{154:function(n,t,r){"use strict";function i(n){return"/"===n.charAt(0)}function o(n,t){for(var r=t,i=r+1,o=n.length;i<o;r+=1,i+=1)n[r]=n[i];n.pop()}t.a=function(n,t){void 0===t&&(t="");var r,e=n&&n.split("/")||[],f=t&&t.split("/")||[],u=n&&i(n),_=t&&i(t),h=u||_;if(n&&i(n)?f=e:e.length&&(f.pop(),f=f.concat(e)),!f.length)return"/";if(f.length){var s=f[f.length-1];r="."===s||".."===s||""===s}else r=!1;for(var a=0,l=f.length;l>=0;l--){var c=f[l];"."===c?o(f,l):".."===c?(o(f,l),a++):a&&(o(f,l),a--)}if(!h)for(;a--;a)f.unshift("..");!h||""===f[0]||f[0]&&i(f[0])||f.unshift("");var p=f.join("/");return r&&"/"!==p.substr(-1)&&(p+="/"),p}}}]);
//# sourceMappingURL=40.client.js.map