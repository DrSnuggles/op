function atob(r){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let e,o,n,a,c,h,d,f="",i=0;r=r.replace(/[^A-Za-z0-9+/=]/g,"");do{a=t.indexOf(r.charAt(i++)),c=t.indexOf(r.charAt(i++)),h=t.indexOf(r.charAt(i++)),d=t.indexOf(r.charAt(i++)),e=a<<2|c>>4,o=(15&c)<<4|h>>2,n=(3&h)<<6|d,f+=String.fromCharCode(e),64!==h&&(f+=String.fromCharCode(o)),64!==d&&(f+=String.fromCharCode(n))}while(i<r.length);return f}const performance={now:()=>Date.now()};const crypto={getRandomValues(r){for(let t=0;t<r.length;t++)r[t]=256*Math.random()|0}};

var libopenmpt = (() => {
  var _scriptName = import.meta.url;
  
  return (
async function(moduleArg = {}) {
  var moduleRtn;



  return moduleRtn;
}
);
})();
export default libopenmpt;