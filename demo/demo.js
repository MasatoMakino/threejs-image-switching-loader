(()=>{"use strict";var e,t={872:(e,t,a)=>{var o=a(75);class i{constructor(e){void 0===i.isSupportImageBitmap&&(i.isSupportImageBitmap="undefined"!=typeof createImageBitmap),i.isSupportImageBitmap?(this.imageBitmapLoader=new o.QRU(e),this.imageBitmapLoader.setOptions({imageOrientation:"flipY"})):this.textureLoader=new o.dpR(e)}load(e,t){return null==t&&(t={}),i.isSupportImageBitmap?this.loadImageBitmap(e,t):this.loadTexture(e,t)}loadImageBitmap(e,t){return new Promise(((a,n)=>{t.imageBitmapOption&&this.imageBitmapLoader.setOptions(t.imageBitmapOption),this.imageBitmapLoader.load(e,(e=>{const n=new o.ROQ(e);i.setTextureOptions(n,t.canvasTextureOption),a(n)}),void 0,(e=>{console.log("TextureSwitchingLoader : "),n(e)}))}))}loadTexture(e,t){return new Promise(((a,o)=>{this.textureLoader.load(e,(e=>{i.setImageBitmapOptions(e,t.imageBitmapOption),i.setTextureOptions(e,t.canvasTextureOption),a(e)}),void 0,(e=>{console.log("TextureSwitchingLoader : "),o(e)}))}))}static setTextureOptions(e,t){var a,o,i,n,r,l,p,s;null!=t&&(null!==(a=e.mapping)&&void 0!==a||(e.mapping=t.mapping),null!==(o=e.wrapS)&&void 0!==o||(e.wrapS=t.wrapS),null!==(i=e.wrapT)&&void 0!==i||(e.wrapT=t.wrapT),null!==(n=e.magFilter)&&void 0!==n||(e.magFilter=t.magFilter),null!==(r=e.minFilter)&&void 0!==r||(e.minFilter=t.minFilter),null!==(l=e.format)&&void 0!==l||(e.format=t.format),null!==(p=e.type)&&void 0!==p||(e.type=t.type),null!==(s=e.anisotropy)&&void 0!==s||(e.anisotropy=t.anisotropy))}static setImageBitmapOptions(e,t){if(null==t)return;const a=t.imageOrientation;null!=a&&(e.flipY="flipY"===a),null!=t.premultiplyAlpha&&(e.premultiplyAlpha="premultiply"===t.premultiplyAlpha)}}var n=a(12);window.onload=()=>{const e=new o.xsS;!function(e){const t=new o.Mig(16777215,1);e.add(t)}(e);const t=function(e,t,a){const i=new o.cPb(45,640/480,1,400);return i.position.set(0,0,100),i.updateMatrixWorld(!1),e.add(i),i}(e),a=function(e,t){const a={canvas:document.getElementById("webgl-canvas"),antialias:!0},i=new o.CP7(a);return i.setClearColor(new o.Ilk(0)),i.setSize(640,480),i.setPixelRatio(window.devicePixelRatio),i}(),r=function(e,t){const a=new n.z(e,t.domElement);return a.update(),a}(t,a);!function(e){const t=new o.y8_(30);e.add(t)}(e),(e=>{const t=new o.xo$(20,16,16),a=new o.vBJ,n=new o.Kj0(t,a);let r,l;e.add(n),o.CtF.enabled=!0;const p=new i;p.load("./earth.jpg",{imageBitmapOption:{imageOrientation:"flipY"}}).then((e=>{a.map=e,a.needsUpdate=!0,console.log("1st Load"),console.log(e.image),r=e,p.load("./earth.jpg").then((e=>{console.log("2nd Load"),console.log(e.image),l=e,r.image===l.image&&console.log("share!")}))})),p.load("./earth.jpg"),p.load("./earth.jpg"),p.load("./earth.jpg"),p.load("./earth.jpg"),p.load("./earth.jpg"),setTimeout((()=>{p.load("./earth.jpg"),p.load("./earth.jpg"),p.load("./earth.jpg"),p.load("./earth.jpg"),p.load("./earth.jpg")}),2e3)})(e),function(e,t,a,o){const i=()=>{e.update(),t.render(a,o),requestAnimationFrame(i)};i()}(r,a,e,t)}}},a={};function o(e){var i=a[e];if(void 0!==i)return i.exports;var n=a[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,e=[],o.O=(t,a,i,n)=>{if(!a){var r=1/0;for(d=0;d<e.length;d++){for(var[a,i,n]=e[d],l=!0,p=0;p<a.length;p++)(!1&n||r>=n)&&Object.keys(o.O).every((e=>o.O[e](a[p])))?a.splice(p--,1):(l=!1,n<r&&(r=n));if(l){e.splice(d--,1);var s=i();void 0!==s&&(t=s)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[a,i,n]},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.j=577,(()=>{var e={577:0};o.O.j=t=>0===e[t];var t=(t,a)=>{var i,n,[r,l,p]=a,s=0;if(r.some((t=>0!==e[t]))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(p)var d=p(o)}for(t&&t(a);s<r.length;s++)n=r[s],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(d)},a=self.webpackChunk_masatomakino_threejs_texture_switching_loader=self.webpackChunk_masatomakino_threejs_texture_switching_loader||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var i=o.O(void 0,[736],(()=>o(872)));i=o.O(i)})();