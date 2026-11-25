/* LED 작업실: 앱 껍데기를 저장해 두어 인터넷이 끊겨도 열리게 한다. 항상 새 버전을 먼저 받아 오고, 실패하면 저장해 둔 것을 쓴다. */
var CACHE='led-shell-v1';
self.addEventListener('install',function(e){self.skipWaiting();e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(['./','manifest.webmanifest','firebase-config.js','NanumSquareRoundR.woff2','NanumSquareRoundB.woff2','fonts/chiron-goround-tc-latin-wght-normal.woff2','icons/icon-192.png']).catch(function(){});}));});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));}).then(function(){return self.clients.claim();}));});
self.addEventListener('fetch',function(e){
  var rq=e.request,u=new URL(rq.url);
  if(rq.method!=='GET')return;
  var shell=u.origin===self.location.origin||(u.hostname==='www.gstatic.com'&&u.pathname.indexOf('/firebasejs/')===0);
  if(!shell)return; /* Firebase 데이터와 로그인 요청은 건드리지 않는다 */
  e.respondWith(fetch(rq).then(function(rs){if(rs&&(rs.ok||rs.type==='opaque')){var cp=rs.clone();caches.open(CACHE).then(function(c){c.put(rq,cp);});}return rs;}).catch(function(){return caches.match(rq,{ignoreSearch:true}).then(function(m){return m||(rq.mode==='navigate'?caches.match('./'):Response.error());});}));
});
