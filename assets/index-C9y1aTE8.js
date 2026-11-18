(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jo="170",os={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bu=0,Mc=1,wu=2,Cp=3,Rp=0,Oc=1,Fc=2,Vn=3,gi=0,an=1,Ct=2,fi=0,ls=1,Ks=2,Sc=3,bc=4,Eu=5,Ii=100,Tu=101,Au=102,Cu=103,Ru=104,Iu=200,Pu=201,Lu=202,Du=203,lo=204,co=205,Nu=206,Uu=207,Ou=208,Fu=209,Bu=210,ku=211,zu=212,Hu=213,Vu=214,ho=0,uo=1,fo=2,us=3,po=4,mo=5,go=6,_o=7,Qr=0,Gu=1,Wu=2,pi=0,Xu=1,$u=2,Yu=3,Bc=4,qu=5,Zu=6,Ku=7,wc="attached",Ju="detached",jo=300,_i=301,Di=302,fs=303,Ur=304,tr=306,Wn=1e3,Tn=1001,Or=1002,qt=1003,kc=1004,Ip=1004,Gs=1005,Pp=1005,zt=1006,br=1007,Lp=1007,Xn=1008,Dp=1008,Kn=1009,zc=1010,Hc=1011,Js=1012,Qo=1013,vi=1014,mn=1015,nr=1016,el=1017,tl=1018,ps=1020,Vc=35902,Gc=1021,Wc=1022,rn=1023,Xc=1024,$c=1025,cs=1026,ms=1027,nl=1028,ea=1029,Yc=1030,il=1031,Np=1032,sl=1033,wr=33776,Er=33777,Tr=33778,Ar=33779,vo=35840,yo=35841,xo=35842,Mo=35843,So=36196,bo=37492,wo=37496,Eo=37808,To=37809,Ao=37810,Co=37811,Ro=37812,Io=37813,Po=37814,Lo=37815,Do=37816,No=37817,Uo=37818,Oo=37819,Fo=37820,Bo=37821,Cr=36492,ko=36494,zo=36495,qc=36283,Ho=36284,Vo=36285,Go=36286,ju=2200,Qu=2201,ef=2202,Fr=2300,Wo=2301,ao=2302,ns=2400,is=2401,Br=2402,rl=2500,Zc=2501,Up=0,Op=1,Fp=2,tf=3200,nf=3201,Bp=3202,kp=3203,Ui=0,sf=1,hi="",Yt="srgb",ys="srgb-linear",ta="linear",vt="srgb",zp=0,ji=7680,Hp=7681,Vp=7682,Gp=7683,Wp=34055,Xp=34056,$p=5386,Yp=512,qp=513,Zp=514,Kp=515,Jp=516,jp=517,Qp=518,Ec=519,rf=512,af=513,of=514,Kc=515,lf=516,cf=517,hf=518,df=519,kr=35044,em=35048,tm=35040,nm=35045,im=35049,sm=35041,rm=35046,am=35050,om=35042,lm="100",Tc="300 es",$n=2e3,zr=2001;class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oh=1234567;const hs=Math.PI/180,js=180/Math.PI;function xn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function Jc(i,e){return(i%e+e)%e}function cm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function hm(i,e,t){return i!==e?(t-i)/(e-i):0}function Rr(i,e,t){return(1-t)*i+t*e}function dm(i,e,t,n){return Rr(i,e,1-Math.exp(-t*n))}function um(i,e=1){return e-Math.abs(Jc(i,e*2)-e)}function fm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function mm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gm(i,e){return i+Math.random()*(e-i)}function _m(i){return i*(.5-Math.random())}function vm(i){i!==void 0&&(Oh=i);let e=Oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ym(i){return i*hs}function xm(i){return i*js}function Mm(i){return(i&i-1)===0&&i!==0}function Sm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wm(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const uf={DEG2RAD:hs,RAD2DEG:js,generateUUID:xn,clamp:Pt,euclideanModulo:Jc,mapLinear:cm,inverseLerp:hm,lerp:Rr,damp:dm,pingpong:um,smoothstep:fm,smootherstep:pm,randInt:mm,randFloat:gm,randFloatSpread:_m,seededRandom:vm,degToRad:ym,radToDeg:xm,isPowerOfTwo:Mm,ceilPowerOfTwo:Sm,floorPowerOfTwo:bm,setQuaternionFromProperEuler:wm,normalize:tt,denormalize:sn};class J{constructor(e=0,t=0){J.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,s,r,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],x=s[1],y=s[4],v=s[7],I=s[2],M=s[5],T=s[8];return r[0]=a*_+o*x+l*I,r[3]=a*g+o*y+l*M,r[6]=a*p+o*v+l*T,r[1]=c*_+h*x+d*I,r[4]=c*g+h*y+d*M,r[7]=c*p+h*v+d*T,r[2]=u*_+f*x+m*I,r[5]=u*g+f*y+m*M,r[8]=u*p+f*v+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,m=t*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=d*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Tl.makeScale(e,t)),this}rotate(e){return this.premultiply(Tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tl=new Je;function ff(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}const Em={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ws(i,e){return new Em[i](e)}function Hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pf(){const i=Hr("canvas");return i.style.display="block",i}const Fh={};function yr(i){i in Fh||(Fh[i]=!0,console.warn(i))}function Tm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Am(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cm(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ct={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===vt&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===vt&&(i.r=qs(i.r),i.g=qs(i.g),i.b=qs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hi?ta:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Bh=[.64,.33,.3,.6,.15,.06],kh=[.2126,.7152,.0722],zh=[.3127,.329],Hh=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ct.define({[ys]:{primaries:Bh,whitePoint:zh,transfer:ta,toXYZ:Hh,fromXYZ:Vh,luminanceCoefficients:kh,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:Bh,whitePoint:zh,transfer:vt,toXYZ:Hh,fromXYZ:Vh,luminanceCoefficients:kh,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}});let ws;class mf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ws===void 0&&(ws=Hr("canvas")),ws.width=e.width,ws.height=e.height;const n=ws.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rm=0;class ss{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Al(s[a].image)):r.push(Al(s[a]))}else r=Al(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Im=0;class Lt extends jn{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Tn,s=Tn,r=zt,a=Xn,o=rn,l=Kn,c=Lt.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=xn(),this.name="",this.source=new ss(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wn:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case Or:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wn:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case Or:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=jo;Lt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(f+1)/2,I=(p+1)/2,M=(h+u)/4,T=(d+_)/4,R=(m+g)/4;return y>v&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=M/n,r=T/n):v>I?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=R/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=T/r,s=R/r),this.set(n,s,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gf extends jn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Lt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ss(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends gf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class al extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pm extends Nn{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new al(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class jc extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lm extends Nn{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new jc(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class jt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const u=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(d!==_||l!==u||c!==f||h!==m){let g=1-o;const p=l*u+c*f+h*m+d*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const I=Math.sqrt(y),M=Math.atan2(I,p*x);g=Math.sin(g*M)/I,o=Math.sin(o*M)/I}const v=o*x;if(l=l*g+u*v,c=c*g+f*v,h=h*g+m*v,d=d*g+_*v,g===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*d+l*f-c*u,e[t+1]=l*m+h*u+c*d-o*f,e[t+2]=c*m+h*f+o*u-l*d,e[t+3]=h*m-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cl.copy(this).projectOnVector(e),this.sub(Cl)}reflect(e){return this.sub(Cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cl=new E,Gh=new jt;class on{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fa.copy(n.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),pa.subVectors(this.max,ar),Es.subVectors(e.a,ar),Ts.subVectors(e.b,ar),As.subVectors(e.c,ar),Si.subVectors(Ts,Es),bi.subVectors(As,Ts),Bi.subVectors(Es,As);let t=[0,-Si.z,Si.y,0,-bi.z,bi.y,0,-Bi.z,Bi.y,Si.z,0,-Si.x,bi.z,0,-bi.x,Bi.z,0,-Bi.x,-Si.y,Si.x,0,-bi.y,bi.x,0,-Bi.y,Bi.x,0];return!Rl(t,Es,Ts,As,pa)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,Es,Ts,As,pa))?!1:(ma.crossVectors(Si,bi),t=[ma.x,ma.y,ma.z],Rl(t,Es,Ts,As,pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new E,new E,new E,new E,new E,new E,new E,new E],Rn=new E,fa=new on,Es=new E,Ts=new E,As=new E,Si=new E,bi=new E,Bi=new E,ar=new E,pa=new E,ma=new E,ki=new E;function Rl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ki.fromArray(i,r);const o=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=e.dot(ki),c=t.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Dm=new on,or=new E,Il=new E;class Qt{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Dm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);const t=or.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(Il)),this.expandByPoint(or.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new E,Pl=new E,ga=new E,wi=new E,Ll=new E,_a=new E,Dl=new E;class xs{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Pl.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(Pl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ga),o=wi.dot(this.direction),l=-wi.dot(ga),c=wi.lengthSq(),h=Math.abs(1-a*a);let d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=r*h,d>=0)if(u>=-m)if(u<=m){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Pl).addScaledVector(ga,u),f}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,s,r){Ll.subVectors(t,e),_a.subVectors(n,e),Dl.crossVectors(Ll,_a);let a=this.direction.dot(Dl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,e);const l=o*this.direction.dot(_a.crossVectors(wi,_a));if(l<0)return null;const c=o*this.direction.dot(Ll.cross(wi));if(c<0||l+c>a)return null;const h=-o*wi.dot(Dl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,s,r,a,o,l,c,h,d,u,f,m,_,g){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,f,m,_,g)}set(e,t,n,s,r,a,o,l,c,h,d,u,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Cs.setFromMatrixColumn(e,0).length(),r=1/Cs.setFromMatrixColumn(e,1).length(),a=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,m=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,m=c*h,_=c*d;t[0]=u+_*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,m=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,m=o*h,_=o*d;t[0]=l*h,t[4]=m*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=m*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+m,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nm,e,Um)}lookAt(e,t,n){const s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ei.crossVectors(n,vn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ei.crossVectors(n,vn)),Ei.normalize(),va.crossVectors(vn,Ei),s[0]=Ei.x,s[4]=va.x,s[8]=vn.x,s[1]=Ei.y,s[5]=va.y,s[9]=vn.y,s[2]=Ei.z,s[6]=va.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],y=n[7],v=n[11],I=n[15],M=s[0],T=s[4],R=s[8],w=s[12],S=s[1],P=s[5],V=s[9],k=s[13],Y=s[2],Z=s[6],$=s[10],Q=s[14],X=s[3],de=s[7],me=s[11],Te=s[15];return r[0]=a*M+o*S+l*Y+c*X,r[4]=a*T+o*P+l*Z+c*de,r[8]=a*R+o*V+l*$+c*me,r[12]=a*w+o*k+l*Q+c*Te,r[1]=h*M+d*S+u*Y+f*X,r[5]=h*T+d*P+u*Z+f*de,r[9]=h*R+d*V+u*$+f*me,r[13]=h*w+d*k+u*Q+f*Te,r[2]=m*M+_*S+g*Y+p*X,r[6]=m*T+_*P+g*Z+p*de,r[10]=m*R+_*V+g*$+p*me,r[14]=m*w+_*k+g*Q+p*Te,r[3]=x*M+y*S+v*Y+I*X,r[7]=x*T+y*P+v*Z+I*de,r[11]=x*R+y*V+v*$+I*me,r[15]=x*w+y*k+v*Q+I*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*f-n*l*f)+_*(+t*l*f-t*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+g*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-t*l*d+t*o*u+s*a*d-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],x=d*g*c-_*u*c+_*l*f-o*g*f-d*l*p+o*u*p,y=m*u*c-h*g*c-m*l*f+a*g*f+h*l*p-a*u*p,v=h*_*c-m*d*c+m*o*f-a*_*f-h*o*p+a*d*p,I=m*d*l-h*_*l-m*o*u+a*_*u+h*o*g-a*d*g,M=t*x+n*y+s*v+r*I;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=x*T,e[1]=(_*u*r-d*g*r-_*s*f+n*g*f+d*s*p-n*u*p)*T,e[2]=(o*g*r-_*l*r+_*s*c-n*g*c-o*s*p+n*l*p)*T,e[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*f-n*l*f)*T,e[4]=y*T,e[5]=(h*g*r-m*u*r+m*s*f-t*g*f-h*s*p+t*u*p)*T,e[6]=(m*l*r-a*g*r-m*s*c+t*g*c+a*s*p-t*l*p)*T,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*f+t*l*f)*T,e[8]=v*T,e[9]=(m*d*r-h*_*r-m*n*f+t*_*f+h*n*p-t*d*p)*T,e[10]=(a*_*r-m*o*r+m*n*c-t*_*c-a*n*p+t*o*p)*T,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*f-t*o*f)*T,e[12]=I*T,e[13]=(h*_*s-m*d*s+m*n*u-t*_*u-h*n*g+t*d*g)*T,e[14]=(m*o*s-a*_*s-m*n*l+t*_*l+a*n*g-t*o*g)*T,e[15]=(a*d*s-h*o*s+h*n*l-t*d*l-a*n*u+t*o*u)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,m=r*d,_=a*h,g=a*d,p=o*d,x=l*c,y=l*h,v=l*d,I=n.x,M=n.y,T=n.z;return s[0]=(1-(_+p))*I,s[1]=(f+v)*I,s[2]=(m-y)*I,s[3]=0,s[4]=(f-v)*M,s[5]=(1-(u+p))*M,s[6]=(g+x)*M,s[7]=0,s[8]=(m+y)*T,s[9]=(g-x)*T,s[10]=(1-(u+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Cs.set(s[0],s[1],s[2]).length();const a=Cs.set(s[4],s[5],s[6]).length(),o=Cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],In.copy(this);const c=1/r,h=1/a,d=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,t.setFromRotationMatrix(In),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=$n){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s);let f,m;if(o===$n)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===zr)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=$n){const l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(a-r),u=(t+e)*c,f=(n+s)*h;let m,_;if(o===$n)m=(a+r)*d,_=-2*d;else if(o===zr)m=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Cs=new E,In=new $e,Nm=new E(0,0,0),Um=new E(1,1,1),Ei=new E,va=new E,vn=new E,Wh=new $e,Xh=new jt;class Sn{constructor(e=0,t=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class ol{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Om=0;const $h=new E,Rs=new jt,ii=new $e,ya=new E,lr=new E,Fm=new E,Bm=new jt,Yh=new E(1,0,0),qh=new E(0,1,0),Zh=new E(0,0,1),Kh={type:"added"},km={type:"removed"},Is={type:"childadded",child:null},Nl={type:"childremoved",child:null};class ot extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new E,t=new Sn,n=new jt,s=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new Je}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis(qh,e)}rotateZ(e){return this.rotateOnAxis(Zh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis(qh,e)}translateZ(e){return this.translateOnAxis(Zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ya.copy(e):ya.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(lr,ya,this.up):ii.lookAt(ya,lr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(ii),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kh),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(km),Nl.child=e,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kh),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,Fm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Bm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ot.DEFAULT_UP=new E(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new E,si=new E,Ul=new E,ri=new E,Ps=new E,Ls=new E,Jh=new E,Ol=new E,Fl=new E,Bl=new E,kl=new dt,zl=new dt,Hl=new dt;class pn{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),si.subVectors(n,t),Ul.subVectors(e,t);const a=Pn.dot(Pn),o=Pn.dot(si),l=Pn.dot(Ul),c=si.dot(si),h=si.dot(Ul),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return kl.setScalar(0),zl.setScalar(0),Hl.setScalar(0),kl.fromBufferAttribute(e,t),zl.fromBufferAttribute(e,n),Hl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(kl,r.x),a.addScaledVector(zl,r.y),a.addScaledVector(Hl,r.z),a}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),si.subVectors(e,t),Pn.cross(si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Pn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return pn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ps.subVectors(s,n),Ls.subVectors(r,n),Ol.subVectors(e,n);const l=Ps.dot(Ol),c=Ls.dot(Ol);if(l<=0&&c<=0)return t.copy(n);Fl.subVectors(e,s);const h=Ps.dot(Fl),d=Ls.dot(Fl);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ps,a);Bl.subVectors(e,r);const f=Ps.dot(Bl),m=Ls.dot(Bl);if(m>=0&&f<=m)return t.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Ls,o);const g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Jh.subVectors(r,s),o=(d-h)/(d-h+(f-m)),t.copy(s).addScaledVector(Jh,o);const p=1/(g+_+u);return a=_*p,o=u*p,t.copy(n).addScaledVector(Ps,a).addScaledVector(Ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},xa={h:0,s:0,l:0};function Vl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=Jc(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Vl(a,r,e+1/3),this.g=Vl(a,r,e),this.b=Vl(a,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=_f[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return ct.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Pt(Kt.r*255,0,255))*65536+Math.round(Pt(Kt.g*255,0,255))*256+Math.round(Pt(Kt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Kt.copy(this),t);const n=Kt.r,s=Kt.g,r=Kt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Yt){ct.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,n=Kt.g,s=Kt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(xa);const n=Rr(Ti.h,xa.h,t),s=Rr(Ti.s,xa.s,t),r=Rr(Ti.l,xa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new we;we.NAMES=_f;let zm=0;class en extends jn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=xn(),this.name="",this.blending=ls,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=co,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lo&&(n.blendSrc=this.blendSrc),this.blendDst!==co&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Se extends en{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const di=Hm();function Hm(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function fn(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Pt(i,-65504,65504),di.floatView[0]=i;const e=di.uint32View[0],t=e>>23&511;return di.baseTable[t]+((e&8388607)>>di.shiftTable[t])}function xr(i){const e=i>>10;return di.uint32View[0]=di.mantissaTable[di.offsetTable[e]+(i&1023)]+di.exponentTable[e],di.floatView[0]}const Vm={toHalfFloat:fn,fromHalfFloat:xr},Ot=new E,Ma=new J;class _t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kr,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ma.fromBufferAttribute(this,t),Ma.applyMatrix3(e),this.setXY(t,Ma.x,Ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kr&&(e.usage=this.usage),e}}class Gm extends _t{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Wm extends _t{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Xm extends _t{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class $m extends _t{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Qc extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ym extends _t{constructor(e,t,n){super(new Int32Array(e),t,n)}}class eh extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qm extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=xr(this.array[e*this.itemSize]);return this.normalized&&(t=sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=fn(t),this}getY(e){let t=xr(this.array[e*this.itemSize+1]);return this.normalized&&(t=sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=fn(t),this}getZ(e){let t=xr(this.array[e*this.itemSize+2]);return this.normalized&&(t=sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=fn(t),this}getW(e){let t=xr(this.array[e*this.itemSize+3]);return this.normalized&&(t=sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=fn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=fn(t),this.array[e+1]=fn(n),this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.array[e+0]=fn(t),this.array[e+1]=fn(n),this.array[e+2]=fn(s),this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.array[e+0]=fn(t),this.array[e+1]=fn(n),this.array[e+2]=fn(s),this.array[e+3]=fn(r),this}}class De extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zm=0;const wn=new $e,Gl=new ot,Ds=new E,yn=new on,cr=new on,Wt=new E;class je extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ff(e)?eh:Qc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Gl.lookAt(e),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new De(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(yn.min,cr.min),yn.expandByPoint(Wt),Wt.addVectors(yn.max,cr.max),yn.expandByPoint(Wt)):(yn.expandByPoint(cr.min),yn.expandByPoint(cr.max))}yn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Wt.fromBufferAttribute(o,c),l&&(Ds.fromBufferAttribute(e,c),Wt.add(Ds)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new E,l[R]=new E;const c=new E,h=new E,d=new E,u=new J,f=new J,m=new J,_=new E,g=new E;function p(R,w,S){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,S),u.fromBufferAttribute(r,R),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,S),h.sub(c),d.sub(c),f.sub(u),m.sub(u);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[R].add(_),o[w].add(_),o[S].add(_),l[R].add(g),l[w].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,w=x.length;R<w;++R){const S=x[R],P=S.start,V=S.count;for(let k=P,Y=P+V;k<Y;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new E,v=new E,I=new E,M=new E;function T(R){I.fromBufferAttribute(s,R),M.copy(I);const w=o[R];y.copy(w),y.sub(I.multiplyScalar(I.dot(w))).normalize(),v.crossVectors(M,w);const P=v.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,P)}for(let R=0,w=x.length;R<w;++R){const S=x[R],P=S.start,V=S.count;for(let k=P,Y=P+V;k<Y;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new E,r=new E,a=new E,o=new E,l=new E,c=new E,h=new E,d=new E;if(e)for(let u=0,f=e.count;u<f;u+=3){const m=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new _t(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new je,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jh=new $e,zi=new xs,Sa=new Qt,Qh=new E,ba=new E,wa=new E,Ea=new E,Wl=new E,Ta=new E,ed=new E,Aa=new E;class z extends ot{constructor(e=new je,t=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Wl.fromBufferAttribute(d,e),a?Ta.addScaledVector(Wl,h):Ta.addScaledVector(Wl.sub(t),h))}t.add(Ta)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(r),zi.copy(e.ray).recast(e.near),!(Sa.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Sa,Qh)===null||zi.origin.distanceToSquared(Qh)>(e.far-e.near)**2))&&(jh.copy(r).invert(),zi.copy(e.ray).applyMatrix4(jh),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,I=y;v<I;v+=3){const M=o.getX(v),T=o.getX(v+1),R=o.getX(v+2);s=Ca(this,p,e,n,c,h,d,M,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=o.getX(g),y=o.getX(g+1),v=o.getX(g+2);s=Ca(this,a,e,n,c,h,d,x,y,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,I=y;v<I;v+=3){const M=v,T=v+1,R=v+2;s=Ca(this,p,e,n,c,h,d,M,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=g,y=g+1,v=g+2;s=Ca(this,a,e,n,c,h,d,x,y,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Km(i,e,t,n,s,r,a,o){let l;if(e.side===an?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===gi,o),l===null)return null;Aa.copy(o),Aa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Aa);return c<t.near||c>t.far?null:{distance:c,point:Aa.clone(),object:i}}function Ca(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ba),i.getVertexPosition(l,wa),i.getVertexPosition(c,Ea);const h=Km(i,e,t,n,ba,wa,Ea,ed);if(h){const d=new E;pn.getBarycoord(ed,ba,wa,Ea,d),s&&(h.uv=pn.getInterpolatedAttribute(s,o,l,c,d,new J)),r&&(h.uv1=pn.getInterpolatedAttribute(r,o,l,c,d,new J)),a&&(h.normal=pn.getInterpolatedAttribute(a,o,l,c,d,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new E,materialIndex:0};pn.getNormal(ba,wa,Ea,u.normal),h.face=u,h.barycoord=d}return h}class On extends je{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(d,2));function m(_,g,p,x,y,v,I,M,T,R,w){const S=v/T,P=I/R,V=v/2,k=I/2,Y=M/2,Z=T+1,$=R+1;let Q=0,X=0;const de=new E;for(let me=0;me<$;me++){const Te=me*P-k;for(let We=0;We<Z;We++){const Ne=We*S-V;de[_]=Ne*x,de[g]=Te*y,de[p]=Y,c.push(de.x,de.y,de.z),de[_]=0,de[g]=0,de[p]=M>0?1:-1,h.push(de.x,de.y,de.z),d.push(We/T),d.push(1-me/R),Q+=1}}for(let me=0;me<R;me++)for(let Te=0;Te<T;Te++){const We=u+Te+Z*me,Ne=u+Te+Z*(me+1),W=u+(Te+1)+Z*(me+1),ie=u+(Te+1)+Z*me;l.push(We,Ne,ie),l.push(Ne,W,ie),X+=6}o.addGroup(f,X,w),f+=X,u+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function nn(i){const e={};for(let t=0;t<i.length;t++){const n=Qs(i[t]);for(const s in n)e[s]=n[s]}return e}function Jm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const yf={clone:Qs,merge:nn};var jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends en{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jm,this.fragmentShader=Qm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=Jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ll extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new E,td=new J,nd=new J;class Xt extends ll{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,td,nd),t.subVectors(nd,td)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ns=-90,Us=1;class xf extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xt(Ns,Us,e,t);s.layers=this.layers,this.add(s);const r=new Xt(Ns,Us,e,t);r.layers=this.layers,this.add(r);const a=new Xt(Ns,Us,e,t);a.layers=this.layers,this.add(a);const o=new Xt(Ns,Us,e,t);o.layers=this.layers,this.add(o);const l=new Xt(Ns,Us,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Ns,Us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class na extends Lt{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:_i,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mf extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new na(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new On(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:fi});r.uniforms.tEquirect.value=t;const a=new z(s,r),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=zt),new xf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Xl=new E,e0=new E,t0=new Je;class ci{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Xl.subVectors(n,t).cross(e0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||t0.getNormalMatrix(e),s=this.coplanarPoint(Xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new Qt,Ra=new E;class ia{constructor(e=new ci,t=new ci,n=new ci,s=new ci,r=new ci,a=new ci){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],m=s[9],_=s[10],g=s[11],p=s[12],x=s[13],y=s[14],v=s[15];if(n[0].setComponents(l-r,u-c,g-f,v-p).normalize(),n[1].setComponents(l+r,u+c,g+f,v+p).normalize(),n[2].setComponents(l+a,u+h,g+m,v+x).normalize(),n[3].setComponents(l-a,u-h,g-m,v-x).normalize(),n[4].setComponents(l-o,u-d,g-_,v-y).normalize(),t===$n)n[5].setComponents(l+o,u+d,g+_,v+y).normalize();else if(t===zr)n[5].setComponents(o,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ra.x=s.normal.x>0?e.max.x:e.min.x,Ra.y=s.normal.y>0?e.max.y:e.min.y,Ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function n0(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Me extends je{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const x=p*u-a;for(let y=0;y<c;y++){const v=y*d-r;m.push(v,-x,0),_.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const y=x+c*p,v=x+c*(p+1),I=x+1+c*(p+1),M=x+1+c*p;f.push(y,v,M),f.push(v,I,M)}this.setIndex(f),this.setAttribute("position",new De(m,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Me(e.width,e.height,e.widthSegments,e.heightSegments)}}var i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,r0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,h0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,u0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,g0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,T0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,A0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,C0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D0="gl_FragColor = linearToOutputTexel( gl_FragColor );",N0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,X0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Z0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,K0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ng=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ag=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ug=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,t_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,d_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,b_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,A_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,P_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,N_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:i0,alphahash_pars_fragment:s0,alphamap_fragment:r0,alphamap_pars_fragment:a0,alphatest_fragment:o0,alphatest_pars_fragment:l0,aomap_fragment:c0,aomap_pars_fragment:h0,batching_pars_vertex:d0,batching_vertex:u0,begin_vertex:f0,beginnormal_vertex:p0,bsdfs:m0,iridescence_fragment:g0,bumpmap_pars_fragment:_0,clipping_planes_fragment:v0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:x0,clipping_planes_vertex:M0,color_fragment:S0,color_pars_fragment:b0,color_pars_vertex:w0,color_vertex:E0,common:T0,cube_uv_reflection_fragment:A0,defaultnormal_vertex:C0,displacementmap_pars_vertex:R0,displacementmap_vertex:I0,emissivemap_fragment:P0,emissivemap_pars_fragment:L0,colorspace_fragment:D0,colorspace_pars_fragment:N0,envmap_fragment:U0,envmap_common_pars_fragment:O0,envmap_pars_fragment:F0,envmap_pars_vertex:B0,envmap_physical_pars_fragment:Z0,envmap_vertex:k0,fog_vertex:z0,fog_pars_vertex:H0,fog_fragment:V0,fog_pars_fragment:G0,gradientmap_pars_fragment:W0,lightmap_pars_fragment:X0,lights_lambert_fragment:$0,lights_lambert_pars_fragment:Y0,lights_pars_begin:q0,lights_toon_fragment:K0,lights_toon_pars_fragment:J0,lights_phong_fragment:j0,lights_phong_pars_fragment:Q0,lights_physical_fragment:eg,lights_physical_pars_fragment:tg,lights_fragment_begin:ng,lights_fragment_maps:ig,lights_fragment_end:sg,logdepthbuf_fragment:rg,logdepthbuf_pars_fragment:ag,logdepthbuf_pars_vertex:og,logdepthbuf_vertex:lg,map_fragment:cg,map_pars_fragment:hg,map_particle_fragment:dg,map_particle_pars_fragment:ug,metalnessmap_fragment:fg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:gg,morphnormal_vertex:_g,morphtarget_pars_vertex:vg,morphtarget_vertex:yg,normal_fragment_begin:xg,normal_fragment_maps:Mg,normal_pars_fragment:Sg,normal_pars_vertex:bg,normal_vertex:wg,normalmap_pars_fragment:Eg,clearcoat_normal_fragment_begin:Tg,clearcoat_normal_fragment_maps:Ag,clearcoat_pars_fragment:Cg,iridescence_pars_fragment:Rg,opaque_fragment:Ig,packing:Pg,premultiplied_alpha_fragment:Lg,project_vertex:Dg,dithering_fragment:Ng,dithering_pars_fragment:Ug,roughnessmap_fragment:Og,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:kg,shadowmap_vertex:zg,shadowmask_pars_fragment:Hg,skinbase_vertex:Vg,skinning_pars_vertex:Gg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:$g,specularmap_pars_fragment:Yg,tonemapping_fragment:qg,tonemapping_pars_fragment:Zg,transmission_fragment:Kg,transmission_pars_fragment:Jg,uv_pars_fragment:jg,uv_pars_vertex:Qg,uv_vertex:e_,worldpos_vertex:t_,background_vert:n_,background_frag:i_,backgroundCube_vert:s_,backgroundCube_frag:r_,cube_vert:a_,cube_frag:o_,depth_vert:l_,depth_frag:c_,distanceRGBA_vert:h_,distanceRGBA_frag:d_,equirect_vert:u_,equirect_frag:f_,linedashed_vert:p_,linedashed_frag:m_,meshbasic_vert:g_,meshbasic_frag:__,meshlambert_vert:v_,meshlambert_frag:y_,meshmatcap_vert:x_,meshmatcap_frag:M_,meshnormal_vert:S_,meshnormal_frag:b_,meshphong_vert:w_,meshphong_frag:E_,meshphysical_vert:T_,meshphysical_frag:A_,meshtoon_vert:C_,meshtoon_frag:R_,points_vert:I_,points_frag:P_,shadow_vert:L_,shadow_frag:D_,sprite_vert:N_,sprite_frag:U_},pe={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Ln={basic:{uniforms:nn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:nn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new we(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:nn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:nn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:nn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new we(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:nn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:nn([pe.points,pe.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:nn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:nn([pe.common,pe.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:nn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:nn([pe.sprite,pe.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:nn([pe.common,pe.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:nn([pe.lights,pe.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Ln.physical={uniforms:nn([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Ia={r:0,b:0,g:0},Vi=new Sn,O_=new $e;function F_(i,e,t,n,s,r,a){const o=new we(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function m(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1;const v=m(x);v===null?p(o,l):v&&v.isColor&&(p(v,1),y=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,y){const v=m(y);v&&(v.isCubeTexture||v.mapping===tr)?(h===void 0&&(h=new z(new On(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Qs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vi.copy(y.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(O_.makeRotationFromEuler(Vi)),h.material.toneMapped=ct.getTransfer(v.colorSpace)!==vt,(d!==v||u!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new z(new Me(2,2),new Un({name:"BackgroundMaterial",uniforms:Qs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ct.getTransfer(v.colorSpace)!==vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(Ia,vf(i)),n.buffers.color.setClear(Ia.r,Ia.g,Ia.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:g}}function B_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(S,P,V,k,Y){let Z=!1;const $=d(k,V,P);r!==$&&(r=$,c(r.object)),Z=f(S,k,V,Y),Z&&m(S,k,V,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,v(S,P,V,k),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function d(S,P,V){const k=V.wireframe===!0;let Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let Z=Y[P.id];Z===void 0&&(Z={},Y[P.id]=Z);let $=Z[k];return $===void 0&&($=u(l()),Z[k]=$),$}function u(S){const P=[],V=[],k=[];for(let Y=0;Y<t;Y++)P[Y]=0,V[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:k,object:S,attributes:{},index:null}}function f(S,P,V,k){const Y=r.attributes,Z=P.attributes;let $=0;const Q=V.getAttributes();for(const X in Q)if(Q[X].location>=0){const me=Y[X];let Te=Z[X];if(Te===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Te=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Te=S.instanceColor)),me===void 0||me.attribute!==Te||Te&&me.data!==Te.data)return!0;$++}return r.attributesNum!==$||r.index!==k}function m(S,P,V,k){const Y={},Z=P.attributes;let $=0;const Q=V.getAttributes();for(const X in Q)if(Q[X].location>=0){let me=Z[X];me===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(me=S.instanceColor));const Te={};Te.attribute=me,me&&me.data&&(Te.data=me.data),Y[X]=Te,$++}r.attributes=Y,r.attributesNum=$,r.index=k}function _(){const S=r.newAttributes;for(let P=0,V=S.length;P<V;P++)S[P]=0}function g(S){p(S,0)}function p(S,P){const V=r.newAttributes,k=r.enabledAttributes,Y=r.attributeDivisors;V[S]=1,k[S]===0&&(i.enableVertexAttribArray(S),k[S]=1),Y[S]!==P&&(i.vertexAttribDivisor(S,P),Y[S]=P)}function x(){const S=r.newAttributes,P=r.enabledAttributes;for(let V=0,k=P.length;V<k;V++)P[V]!==S[V]&&(i.disableVertexAttribArray(V),P[V]=0)}function y(S,P,V,k,Y,Z,$){$===!0?i.vertexAttribIPointer(S,P,V,Y,Z):i.vertexAttribPointer(S,P,V,k,Y,Z)}function v(S,P,V,k){_();const Y=k.attributes,Z=V.getAttributes(),$=P.defaultAttributeValues;for(const Q in Z){const X=Z[Q];if(X.location>=0){let de=Y[Q];if(de===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),de!==void 0){const me=de.normalized,Te=de.itemSize,We=e.get(de);if(We===void 0)continue;const Ne=We.buffer,W=We.type,ie=We.bytesPerElement,Ie=W===i.INT||W===i.UNSIGNED_INT||de.gpuType===Qo;if(de.isInterleavedBufferAttribute){const ce=de.data,Be=ce.stride,He=de.offset;if(ce.isInstancedInterleavedBuffer){for(let Ve=0;Ve<X.locationSize;Ve++)p(X.location+Ve,ce.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ve=0;Ve<X.locationSize;Ve++)g(X.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let Ve=0;Ve<X.locationSize;Ve++)y(X.location+Ve,Te/X.locationSize,W,me,Be*ie,(He+Te/X.locationSize*Ve)*ie,Ie)}else{if(de.isInstancedBufferAttribute){for(let ce=0;ce<X.locationSize;ce++)p(X.location+ce,de.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ce=0;ce<X.locationSize;ce++)g(X.location+ce);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let ce=0;ce<X.locationSize;ce++)y(X.location+ce,Te/X.locationSize,W,me,Te*ie,Te/X.locationSize*ce*ie,Ie)}}else if($!==void 0){const me=$[Q];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(X.location,me);break;case 3:i.vertexAttrib3fv(X.location,me);break;case 4:i.vertexAttrib4fv(X.location,me);break;default:i.vertexAttrib1fv(X.location,me)}}}}x()}function I(){R();for(const S in n){const P=n[S];for(const V in P){const k=P[V];for(const Y in k)h(k[Y].object),delete k[Y];delete P[V]}delete n[S]}}function M(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const V in P){const k=P[V];for(const Y in k)h(k[Y].object),delete k[Y];delete P[V]}delete n[S.id]}function T(S){for(const P in n){const V=n[P];if(V[S.id]===void 0)continue;const k=V[S.id];for(const Y in k)h(k[Y].object),delete k[Y];delete V[S.id]}}function R(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function k_(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];t.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_]*u[_];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function z_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==rn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Kn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==mn&&!R)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=m>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:I,maxSamples:M}}function H_(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ci,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const x=r?0:n,y=x*4;let v=p.clippingState||null;l.value=v,v=h(m,u,y,f);for(let I=0;I!==y;++I)v[I]=t[I];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)a.copy(d[y]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function V_(i){let e=new WeakMap;function t(a,o){return o===fs?a.mapping=_i:o===Ur&&(a.mapping=Di),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===fs||o===Ur)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Mf(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class cl extends ll{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xs=4,id=[.125,.215,.35,.446,.526,.582],es=20,$l=new cl,sd=new we;let Yl=null,ql=0,Zl=0,Kl=!1;const Qi=(1+Math.sqrt(5))/2,Os=1/Qi,rd=[new E(-Qi,Os,0),new E(Qi,Os,0),new E(-Os,0,Qi),new E(Os,0,Qi),new E(0,Qi,-Os),new E(0,Qi,Os),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class Xo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Yl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yl,ql,Zl),this._renderer.xr.enabled=Kl,e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:nr,format:rn,colorSpace:ys,depthBuffer:!1},s=ad(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G_(r)),this._blurMaterial=W_(r,e,t)}return s}_compileMaterial(e){const t=new z(this._lodPlanes[0],e);this._renderer.compile(t,$l)}_sceneToCubeUV(e,t,n,s){const o=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(sd),h.toneMapping=pi,h.autoClear=!1;const f=new Se({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),m=new z(new On,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(sd),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;Pa(s,x*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===_i||e.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new z(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Pa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,$l)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rd[(s-r-1)%rd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new z(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*es-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):es;g>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${es}`);const p=[];let x=0;for(let T=0;T<es;++T){const R=T/_,w=Math.exp(-R*R/2);p.push(w),T===0?x+=w:T<g&&(x+=2*w)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-n;const v=this._sizeLods[s],I=3*v*(s>y-Xs?s-y+Xs:0),M=4*(this._cubeSize-v);Pa(t,I,M,3*v,2*v),l.setRenderTarget(t),l.render(d,$l)}}function G_(i){const e=[],t=[],n=[];let s=i;const r=i-Xs+1+id.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Xs?l=id[a-i+Xs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*f),y=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let M=0;M<f;M++){const T=M%3*2/3-1,R=M>2?0:-1,w=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];x.set(w,_*m*M),y.set(u,g*m*M);const S=[M,M,M,M,M,M];v.set(S,p*m*M)}const I=new je;I.setAttribute("position",new _t(x,_)),I.setAttribute("uv",new _t(y,g)),I.setAttribute("faceIndex",new _t(v,p)),e.push(I),s>Xs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ad(i,e,t){const n=new Nn(i,e,t);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function W_(i,e,t){const n=new Float32Array(es),s=new E(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function od(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function ld(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function th(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function X_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===fs||l===Ur,h=l===_i||l===Di;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Xo(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Xo(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function $_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&yr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Y_(i,e,t,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);for(const m in u.morphAttributes){const _=u.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const m in u)e.update(u[m],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)e.update(_[g],i.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,m=d.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,v=x.length;y<v;y+=3){const I=x[y+0],M=x[y+1],T=x[y+2];u.push(I,M,M,T,T,I)}}else if(m!==void 0){const x=m.array;_=m.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const I=y+0,M=y+1,T=y+2;u.push(I,M,M,T,T,I)}}else return;const g=new(ff(u)?eh:Qc)(u,1);g.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,g)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function q_(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,u*a,m),t.update(f,n,m))}function h(u,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function d(u,f,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x]*_[x];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Z_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function K_(i,e,t){const n=new WeakMap,s=new dt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let I=o.attributes.position.count*v,M=1;I>e.maxTextureSize&&(M=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const T=new Float32Array(I*M*4*d),R=new al(T,I,M,d);R.type=mn,R.needsUpdate=!0;const w=v*4;for(let P=0;P<d;P++){const V=p[P],k=x[P],Y=y[P],Z=I*M*4*P;for(let $=0;$<V.count;$++){const Q=$*w;m===!0&&(s.fromBufferAttribute(V,$),T[Z+Q+0]=s.x,T[Z+Q+1]=s.y,T[Z+Q+2]=s.z,T[Z+Q+3]=0),_===!0&&(s.fromBufferAttribute(k,$),T[Z+Q+4]=s.x,T[Z+Q+5]=s.y,T[Z+Q+6]=s.z,T[Z+Q+7]=0),g===!0&&(s.fromBufferAttribute(Y,$),T[Z+Q+8]=s.x,T[Z+Q+9]=s.y,T[Z+Q+10]=s.z,T[Z+Q+11]=Y.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new J(I,M)},n.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function J_(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class nh extends Lt{constructor(e,t,n,s,r,a,o,l,c,h=cs){if(h!==cs&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===cs&&(n=vi),n===void 0&&h===ms&&(n=ps),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bf=new Lt,cd=new nh(1,1),wf=new al,Ef=new jc,Tf=new na,hd=[],dd=[],ud=new Float32Array(16),fd=new Float32Array(9),pd=new Float32Array(4);function ir(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=hd[s];if(r===void 0&&(r=new Float32Array(s),hd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hl(i,e){let t=dd[e];t===void 0&&(t=new Int32Array(e),dd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function j_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function nv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;pd.set(n),i.uniformMatrix2fv(this.addr,!1,pd),Vt(t,n)}}function iv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;fd.set(n),i.uniformMatrix3fv(this.addr,!1,fd),Vt(t,n)}}function sv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;ud.set(n),i.uniformMatrix4fv(this.addr,!1,ud),Vt(t,n)}}function rv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function ov(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function lv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function cv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function fv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cd.compareFunction=Kc,r=cd):r=bf,t.setTexture2D(e||r,s)}function pv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ef,s)}function mv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tf,s)}function gv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wf,s)}function _v(i){switch(i){case 5126:return j_;case 35664:return Q_;case 35665:return ev;case 35666:return tv;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return av;case 35668:case 35672:return ov;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return hv;case 36295:return dv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}function vv(i,e){i.uniform1fv(this.addr,e)}function yv(i,e){const t=ir(e,this.size,2);i.uniform2fv(this.addr,t)}function xv(i,e){const t=ir(e,this.size,3);i.uniform3fv(this.addr,t)}function Mv(i,e){const t=ir(e,this.size,4);i.uniform4fv(this.addr,t)}function Sv(i,e){const t=ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bv(i,e){const t=ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wv(i,e){const t=ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ev(i,e){i.uniform1iv(this.addr,e)}function Tv(i,e){i.uniform2iv(this.addr,e)}function Av(i,e){i.uniform3iv(this.addr,e)}function Cv(i,e){i.uniform4iv(this.addr,e)}function Rv(i,e){i.uniform1uiv(this.addr,e)}function Iv(i,e){i.uniform2uiv(this.addr,e)}function Pv(i,e){i.uniform3uiv(this.addr,e)}function Lv(i,e){i.uniform4uiv(this.addr,e)}function Dv(i,e,t){const n=this.cache,s=e.length,r=hl(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||bf,r[a])}function Nv(i,e,t){const n=this.cache,s=e.length,r=hl(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ef,r[a])}function Uv(i,e,t){const n=this.cache,s=e.length,r=hl(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Tf,r[a])}function Ov(i,e,t){const n=this.cache,s=e.length,r=hl(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||wf,r[a])}function Fv(i){switch(i){case 5126:return vv;case 35664:return yv;case 35665:return xv;case 35666:return Mv;case 35674:return Sv;case 35675:return bv;case 35676:return wv;case 5124:case 35670:return Ev;case 35667:case 35671:return Tv;case 35668:case 35672:return Av;case 35669:case 35673:return Cv;case 5125:return Rv;case 36294:return Iv;case 36295:return Pv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Nv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Ov}}class Bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_v(t.type)}}class kv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fv(t.type)}}class zv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Jl=/(\w+)(\])?(\[|\.)?/g;function md(i,e){i.seq.push(e),i.map[e.id]=e}function Hv(i,e,t){const n=i.name,s=n.length;for(Jl.lastIndex=0;;){const r=Jl.exec(n),a=Jl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){md(t,c===void 0?new Bv(o,i,e):new kv(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new zv(o),md(t,d)),t=d}}}class oo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Hv(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function gd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Vv=37297;let Gv=0;function Wv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const _d=new Je;function Xv(i){ct._getMatrix(_d,ct.workingColorSpace,i);const e=`mat3( ${_d.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case ta:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Wv(i.getShaderSource(e),a)}else return s}function $v(i,e){const t=Xv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Yv(i,e){let t;switch(e){case Xu:t="Linear";break;case $u:t="Reinhard";break;case Yu:t="Cineon";break;case Bc:t="ACESFilmic";break;case Zu:t="AgX";break;case Ku:t="Neutral";break;case qu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const La=new E;function qv(){ct.getLuminanceCoefficients(La);const i=La.x.toFixed(4),e=La.y.toFixed(4),t=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function Kv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Mr(i){return i!==""}function yd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(i){return i.replace(jv,ey)}const Qv=new Map;function ey(i,e){let t=it[e];if(t===void 0){const n=Qv.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ac(t)}const ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Md(i){return i.replace(ty,ny)}function ny(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Oc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function sy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _i:case Di:e="ENVMAP_TYPE_CUBE";break;case tr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ry(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Di:e="ENVMAP_MODE_REFRACTION";break}return e}function ay(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qr:e="ENVMAP_BLENDING_MULTIPLY";break;case Gu:e="ENVMAP_BLENDING_MIX";break;case Wu:e="ENVMAP_BLENDING_ADD";break}return e}function oy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ly(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=iy(t),c=sy(t),h=ry(t),d=ay(t),u=oy(t),f=Zv(t),m=Kv(r),_=s.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Mr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Mr).join(`
`),p.length>0&&(p+=`
`)):(g=[Sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),p=[Sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?it.tonemapping_pars_fragment:"",t.toneMapping!==pi?Yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,$v("linearToOutputTexel",t.outputColorSpace),qv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),a=Ac(a),a=yd(a,t),a=xd(a,t),o=Ac(o),o=yd(o,t),o=xd(o,t),a=Md(a),o=Md(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+g+a,v=x+p+o,I=gd(s,s.VERTEX_SHADER,y),M=gd(s,s.FRAGMENT_SHADER,v);s.attachShader(_,I),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(P){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(I).trim(),Y=s.getShaderInfoLog(M).trim();let Z=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,M);else{const Q=vd(s,I,"vertex"),X=vd(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+Q+`
`+X)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||Y==="")&&($=!1);$&&(P.diagnostics={runnable:Z,programLog:V,vertexShader:{log:k,prefix:g},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(I),s.deleteShader(M),R=new oo(s,_),w=Jv(s,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,Vv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=M,this}let cy=0;class hy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dy(e),t.set(e,n)),n}}class dy{constructor(e){this.id=cy++,this.code=e,this.usedTimes=0}}function uy(i,e,t,n,s,r,a){const o=new ol,l=new hy,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,S,P,V,k){const Y=V.fog,Z=k.geometry,$=w.isMeshStandardMaterial?V.environment:null,Q=(w.isMeshStandardMaterial?t:e).get(w.envMap||$),X=Q&&Q.mapping===tr?Q.image.height:null,de=m[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Te=me!==void 0?me.length:0;let We=0;Z.morphAttributes.position!==void 0&&(We=1),Z.morphAttributes.normal!==void 0&&(We=2),Z.morphAttributes.color!==void 0&&(We=3);let Ne,W,ie,Ie;if(de){const lt=Ln[de];Ne=lt.vertexShader,W=lt.fragmentShader}else Ne=w.vertexShader,W=w.fragmentShader,l.update(w),ie=l.getVertexShaderID(w),Ie=l.getFragmentShaderID(w);const ce=i.getRenderTarget(),Be=i.state.buffers.depth.getReversed(),He=k.isInstancedMesh===!0,Ve=k.isBatchedMesh===!0,Qe=!!w.map,te=!!w.matcap,oe=!!Q,L=!!w.aoMap,Ce=!!w.lightMap,se=!!w.bumpMap,xe=!!w.normalMap,le=!!w.displacementMap,Ge=!!w.emissiveMap,Ae=!!w.metalnessMap,C=!!w.roughnessMap,b=w.anisotropy>0,F=w.clearcoat>0,K=w.dispersion>0,ne=w.iridescence>0,j=w.sheen>0,Re=w.transmission>0,fe=b&&!!w.anisotropyMap,Ee=F&&!!w.clearcoatMap,et=F&&!!w.clearcoatNormalMap,re=F&&!!w.clearcoatRoughnessMap,Pe=ne&&!!w.iridescenceMap,ze=ne&&!!w.iridescenceThicknessMap,Xe=j&&!!w.sheenColorMap,Le=j&&!!w.sheenRoughnessMap,st=!!w.specularMap,Ye=!!w.specularColorMap,yt=!!w.specularIntensityMap,D=Re&&!!w.transmissionMap,ue=Re&&!!w.thicknessMap,q=!!w.gradientMap,ee=!!w.alphaMap,ve=w.alphaTest>0,ye=!!w.alphaHash,qe=!!w.extensions;let Mt=pi;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Mt=i.toneMapping);const Ut={shaderID:de,shaderType:w.type,shaderName:w.name,vertexShader:Ne,fragmentShader:W,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:Ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ve,batchingColor:Ve&&k._colorsTexture!==null,instancing:He,instancingColor:He&&k.instanceColor!==null,instancingMorph:He&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ys,alphaToCoverage:!!w.alphaToCoverage,map:Qe,matcap:te,envMap:oe,envMapMode:oe&&Q.mapping,envMapCubeUVHeight:X,aoMap:L,lightMap:Ce,bumpMap:se,normalMap:xe,displacementMap:u&&le,emissiveMap:Ge,normalMapObjectSpace:xe&&w.normalMapType===sf,normalMapTangentSpace:xe&&w.normalMapType===Ui,metalnessMap:Ae,roughnessMap:C,anisotropy:b,anisotropyMap:fe,clearcoat:F,clearcoatMap:Ee,clearcoatNormalMap:et,clearcoatRoughnessMap:re,dispersion:K,iridescence:ne,iridescenceMap:Pe,iridescenceThicknessMap:ze,sheen:j,sheenColorMap:Xe,sheenRoughnessMap:Le,specularMap:st,specularColorMap:Ye,specularIntensityMap:yt,transmission:Re,transmissionMap:D,thicknessMap:ue,gradientMap:q,opaque:w.transparent===!1&&w.blending===ls&&w.alphaToCoverage===!1,alphaMap:ee,alphaTest:ve,alphaHash:ye,combine:w.combine,mapUv:Qe&&_(w.map.channel),aoMapUv:L&&_(w.aoMap.channel),lightMapUv:Ce&&_(w.lightMap.channel),bumpMapUv:se&&_(w.bumpMap.channel),normalMapUv:xe&&_(w.normalMap.channel),displacementMapUv:le&&_(w.displacementMap.channel),emissiveMapUv:Ge&&_(w.emissiveMap.channel),metalnessMapUv:Ae&&_(w.metalnessMap.channel),roughnessMapUv:C&&_(w.roughnessMap.channel),anisotropyMapUv:fe&&_(w.anisotropyMap.channel),clearcoatMapUv:Ee&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:et&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(w.sheenRoughnessMap.channel),specularMapUv:st&&_(w.specularMap.channel),specularColorMapUv:Ye&&_(w.specularColorMap.channel),specularIntensityMapUv:yt&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:ue&&_(w.thicknessMap.channel),alphaMapUv:ee&&_(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(xe||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(Qe||ee),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Be,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:We,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:Qe&&w.map.isVideoTexture===!0&&ct.getTransfer(w.map.colorSpace)===vt,decodeVideoTextureEmissive:Ge&&w.emissiveMap.isVideoTexture===!0&&ct.getTransfer(w.emissiveMap.colorSpace)===vt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ct,flipSided:w.side===an,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:qe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&w.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)S.push(P),S.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(x(S,w),y(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function x(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function y(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),w.push(o.mask)}function v(w){const S=m[w.type];let P;if(S){const V=Ln[S];P=yf.clone(V.uniforms)}else P=w.uniforms;return P}function I(w,S){let P;for(let V=0,k=h.length;V<k;V++){const Y=h[V];if(Y.cacheKey===S){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new ly(i,S,w,r),h.push(P)),P}function M(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function T(w){l.remove(w)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:I,releaseProgram:M,releaseShaderCache:T,programs:h,dispose:R}}function fy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function py(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wd(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,u,f,m,_,g){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:_,group:g},i[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=_,p.group=g),e++,p}function o(d,u,f,m,_,g){const p=a(d,u,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,m,_,g){const p=a(d,u,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||py),n.length>1&&n.sort(u||bd),s.length>1&&s.sort(u||bd)}function h(){for(let d=e,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function my(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new wd,i.set(n,[a])):s>=r.length?(a=new wd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function gy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new we};break;case"SpotLight":t={position:new E,direction:new E,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new E,halfWidth:new E,halfHeight:new E};break}return i[e.id]=t,t}}}function _y(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let vy=0;function yy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xy(i){const e=new gy,t=_y(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const s=new E,r=new $e,a=new $e;function o(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,x=0,y=0,v=0,I=0,M=0,T=0;c.sort(yy);for(let w=0,S=c.length;w<S;w++){const P=c[w],V=P.color,k=P.intensity,Y=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=V.r*k,d+=V.g*k,u+=V.b*k;else if(P.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(P.sh.coefficients[$],k);T++}else if(P.isDirectionalLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,X=t.get(P);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=$,f++}else if(P.isSpotLight){const $=e.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(V).multiplyScalar(k),$.distance=Y,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,n.spot[_]=$;const Q=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,Q.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[_]=Q.matrix,P.castShadow){const X=t.get(P);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=Z,v++}_++}else if(P.isRectAreaLight){const $=e.get(P);$.color.copy(V).multiplyScalar(k),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=$,g++}else if(P.isPointLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){const Q=P.shadow,X=t.get(P);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=P.shadow.matrix,y++}n.point[m]=$,m++}else if(P.isHemisphereLight){const $=e.get(P);$.skyColor.copy(P.color).multiplyScalar(k),$.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[p]=$,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==f||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==v||R.numSpotMaps!==I||R.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+I-M,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,R.directionalLength=f,R.pointLength=m,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=v,R.numSpotMaps=I,R.numLightProbes=T,n.version=vy++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function Ed(i){const e=new xy(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function My(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ed(i),e.set(s,[o])):r>=a.length?(o=new Ed(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class ih extends en{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sh extends en{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,by=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wy(i,e,t){let n=new ia;const s=new J,r=new J,a=new dt,o=new ih({depthPacking:nf}),l=new sh,c={},h=t.maxTextureSize,d={[gi]:an,[an]:gi,[Ct]:Ct},u=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:Sy,fragmentShader:by}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new je;m.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new z(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let p=this.type;this.render=function(M,T,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const w=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),V=i.state;V.setBlending(fi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const k=p!==Vn&&this.type===Vn,Y=p===Vn&&this.type!==Vn;for(let Z=0,$=M.length;Z<$;Z++){const Q=M[Z],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const de=X.getFrameExtents();if(s.multiply(de),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/de.x),s.x=r.x*de.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/de.y),s.y=r.y*de.y,X.mapSize.y=r.y)),X.map===null||k===!0||Y===!0){const Te=this.type!==Vn?{minFilter:qt,magFilter:qt}:{};X.map!==null&&X.map.dispose(),X.map=new Nn(s.x,s.y,Te),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const me=X.getViewportCount();for(let Te=0;Te<me;Te++){const We=X.getViewport(Te);a.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),V.viewport(a),X.updateMatrices(Q,Te),n=X.getFrustum(),v(T,R,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===Vn&&x(X,R),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,S,P)};function x(M,T){const R=e.update(_);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Nn(s.x,s.y)),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,R,u,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,R,f,_,null)}function y(M,T,R,w){let S=null;const P=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)S=P;else if(S=R.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const V=S.uuid,k=T.uuid;let Y=c[V];Y===void 0&&(Y={},c[V]=Y);let Z=Y[k];Z===void 0&&(Z=S.clone(),Y[k]=Z,T.addEventListener("dispose",I)),S=Z}if(S.visible=T.visible,S.wireframe=T.wireframe,w===Vn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=i.properties.get(S);V.light=R}return S}function v(M,T,R,w,S){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===Vn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);const k=e.update(M),Y=M.material;if(Array.isArray(Y)){const Z=k.groups;for(let $=0,Q=Z.length;$<Q;$++){const X=Z[$],de=Y[X.materialIndex];if(de&&de.visible){const me=y(M,de,w,S);M.onBeforeShadow(i,M,T,R,k,me,X),i.renderBufferDirect(R,null,k,me,M,X),M.onAfterShadow(i,M,T,R,k,me,X)}}}else if(Y.visible){const Z=y(M,Y,w,S);M.onBeforeShadow(i,M,T,R,k,Z,null),i.renderBufferDirect(R,null,k,Z,M,null),M.onAfterShadow(i,M,T,R,k,Z,null)}}const V=M.children;for(let k=0,Y=V.length;k<Y;k++)v(V[k],T,R,w,S)}function I(M){M.target.removeEventListener("dispose",I);for(const R in c){const w=c[R],S=M.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const Ey={[ho]:uo,[fo]:go,[po]:_o,[us]:mo,[uo]:ho,[go]:fo,[_o]:po,[mo]:us};function Ty(i,e){function t(){let D=!1;const ue=new dt;let q=null;const ee=new dt(0,0,0,0);return{setMask:function(ve){q!==ve&&!D&&(i.colorMask(ve,ve,ve,ve),q=ve)},setLocked:function(ve){D=ve},setClear:function(ve,ye,qe,Mt,Ut){Ut===!0&&(ve*=Mt,ye*=Mt,qe*=Mt),ue.set(ve,ye,qe,Mt),ee.equals(ue)===!1&&(i.clearColor(ve,ye,qe,Mt),ee.copy(ue))},reset:function(){D=!1,q=null,ee.set(-1,0,0,0)}}}function n(){let D=!1,ue=!1,q=null,ee=null,ve=null;return{setReversed:function(ye){if(ue!==ye){const qe=e.get("EXT_clip_control");ue?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);const Mt=ve;ve=null,this.setClear(Mt)}ue=ye},getReversed:function(){return ue},setTest:function(ye){ye?ce(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(ye){q!==ye&&!D&&(i.depthMask(ye),q=ye)},setFunc:function(ye){if(ue&&(ye=Ey[ye]),ee!==ye){switch(ye){case ho:i.depthFunc(i.NEVER);break;case uo:i.depthFunc(i.ALWAYS);break;case fo:i.depthFunc(i.LESS);break;case us:i.depthFunc(i.LEQUAL);break;case po:i.depthFunc(i.EQUAL);break;case mo:i.depthFunc(i.GEQUAL);break;case go:i.depthFunc(i.GREATER);break;case _o:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ee=ye}},setLocked:function(ye){D=ye},setClear:function(ye){ve!==ye&&(ue&&(ye=1-ye),i.clearDepth(ye),ve=ye)},reset:function(){D=!1,q=null,ee=null,ve=null,ue=!1}}}function s(){let D=!1,ue=null,q=null,ee=null,ve=null,ye=null,qe=null,Mt=null,Ut=null;return{setTest:function(lt){D||(lt?ce(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(lt){ue!==lt&&!D&&(i.stencilMask(lt),ue=lt)},setFunc:function(lt,B,ae){(q!==lt||ee!==B||ve!==ae)&&(i.stencilFunc(lt,B,ae),q=lt,ee=B,ve=ae)},setOp:function(lt,B,ae){(ye!==lt||qe!==B||Mt!==ae)&&(i.stencilOp(lt,B,ae),ye=lt,qe=B,Mt=ae)},setLocked:function(lt){D=lt},setClear:function(lt){Ut!==lt&&(i.clearStencil(lt),Ut=lt)},reset:function(){D=!1,ue=null,q=null,ee=null,ve=null,ye=null,qe=null,Mt=null,Ut=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],m=null,_=!1,g=null,p=null,x=null,y=null,v=null,I=null,M=null,T=new we(0,0,0),R=0,w=!1,S=null,P=null,V=null,k=null,Y=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Q=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=Q>=2);let de=null,me={};const Te=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),Ne=new dt().fromArray(Te),W=new dt().fromArray(We);function ie(D,ue,q,ee){const ve=new Uint8Array(4),ye=i.createTexture();i.bindTexture(D,ye),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<q;qe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,ee,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(ue+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return ye}const Ie={};Ie[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Ie[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ie[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),a.setFunc(us),se(!1),xe(Mc),ce(i.CULL_FACE),L(fi);function ce(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Be(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function He(D,ue){return d[D]!==ue?(i.bindFramebuffer(D,ue),d[D]=ue,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ue),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ve(D,ue){let q=f,ee=!1;if(D){q=u.get(ue),q===void 0&&(q=[],u.set(ue,q));const ve=D.textures;if(q.length!==ve.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,qe=ve.length;ye<qe;ye++)q[ye]=i.COLOR_ATTACHMENT0+ye;q.length=ve.length,ee=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,ee=!0);ee&&i.drawBuffers(q)}function Qe(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const te={[Ii]:i.FUNC_ADD,[Tu]:i.FUNC_SUBTRACT,[Au]:i.FUNC_REVERSE_SUBTRACT};te[Cu]=i.MIN,te[Ru]=i.MAX;const oe={[Iu]:i.ZERO,[Pu]:i.ONE,[Lu]:i.SRC_COLOR,[lo]:i.SRC_ALPHA,[Bu]:i.SRC_ALPHA_SATURATE,[Ou]:i.DST_COLOR,[Nu]:i.DST_ALPHA,[Du]:i.ONE_MINUS_SRC_COLOR,[co]:i.ONE_MINUS_SRC_ALPHA,[Fu]:i.ONE_MINUS_DST_COLOR,[Uu]:i.ONE_MINUS_DST_ALPHA,[ku]:i.CONSTANT_COLOR,[zu]:i.ONE_MINUS_CONSTANT_COLOR,[Hu]:i.CONSTANT_ALPHA,[Vu]:i.ONE_MINUS_CONSTANT_ALPHA};function L(D,ue,q,ee,ve,ye,qe,Mt,Ut,lt){if(D===fi){_===!0&&(Be(i.BLEND),_=!1);return}if(_===!1&&(ce(i.BLEND),_=!0),D!==Eu){if(D!==g||lt!==w){if((p!==Ii||v!==Ii)&&(i.blendEquation(i.FUNC_ADD),p=Ii,v=Ii),lt)switch(D){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ks:i.blendFunc(i.ONE,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ks:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,y=null,I=null,M=null,T.set(0,0,0),R=0,g=D,w=lt}return}ve=ve||ue,ye=ye||q,qe=qe||ee,(ue!==p||ve!==v)&&(i.blendEquationSeparate(te[ue],te[ve]),p=ue,v=ve),(q!==x||ee!==y||ye!==I||qe!==M)&&(i.blendFuncSeparate(oe[q],oe[ee],oe[ye],oe[qe]),x=q,y=ee,I=ye,M=qe),(Mt.equals(T)===!1||Ut!==R)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Ut),T.copy(Mt),R=Ut),g=D,w=!1}function Ce(D,ue){D.side===Ct?Be(i.CULL_FACE):ce(i.CULL_FACE);let q=D.side===an;ue&&(q=!q),se(q),D.blending===ls&&D.transparent===!1?L(fi):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const ee=D.stencilWrite;o.setTest(ee),ee&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function xe(D){D!==bu?(ce(i.CULL_FACE),D!==P&&(D===Mc?i.cullFace(i.BACK):D===wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),P=D}function le(D){D!==V&&($&&i.lineWidth(D),V=D)}function Ge(D,ue,q){D?(ce(i.POLYGON_OFFSET_FILL),(k!==ue||Y!==q)&&(i.polygonOffset(ue,q),k=ue,Y=q)):Be(i.POLYGON_OFFSET_FILL)}function Ae(D){D?ce(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function C(D){D===void 0&&(D=i.TEXTURE0+Z-1),de!==D&&(i.activeTexture(D),de=D)}function b(D,ue,q){q===void 0&&(de===null?q=i.TEXTURE0+Z-1:q=de);let ee=me[q];ee===void 0&&(ee={type:void 0,texture:void 0},me[q]=ee),(ee.type!==D||ee.texture!==ue)&&(de!==q&&(i.activeTexture(q),de=q),i.bindTexture(D,ue||Ie[D]),ee.type=D,ee.texture=ue)}function F(){const D=me[de];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xe(D){Ne.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ne.copy(D))}function Le(D){W.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),W.copy(D))}function st(D,ue){let q=c.get(ue);q===void 0&&(q=new WeakMap,c.set(ue,q));let ee=q.get(D);ee===void 0&&(ee=i.getUniformBlockIndex(ue,D.name),q.set(D,ee))}function Ye(D,ue){const ee=c.get(ue).get(D);l.get(ue)!==ee&&(i.uniformBlockBinding(ue,ee,D.__bindingPointIndex),l.set(ue,ee))}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},de=null,me={},d={},u=new WeakMap,f=[],m=null,_=!1,g=null,p=null,x=null,y=null,v=null,I=null,M=null,T=new we(0,0,0),R=0,w=!1,S=null,P=null,V=null,k=null,Y=null,Ne.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Be,bindFramebuffer:He,drawBuffers:Ve,useProgram:Qe,setBlending:L,setMaterial:Ce,setFlipSided:se,setCullFace:xe,setLineWidth:le,setPolygonOffset:Ge,setScissorTest:Ae,activeTexture:C,bindTexture:b,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:ne,texImage2D:Pe,texImage3D:ze,updateUBOMapping:st,uniformBlockBinding:Ye,texStorage2D:et,texStorage3D:re,texSubImage2D:j,texSubImage3D:Re,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ee,scissor:Xe,viewport:Le,reset:yt}}function Ay(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function Cy(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function Ry(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function Cc(i,e,t,n){const s=Iy(n);switch(t){case Gc:return i*e;case Xc:return i*e;case $c:return i*e*2;case nl:return i*e/s.components*s.byteLength;case ea:return i*e/s.components*s.byteLength;case Yc:return i*e*2/s.components*s.byteLength;case il:return i*e*2/s.components*s.byteLength;case Wc:return i*e*3/s.components*s.byteLength;case rn:return i*e*4/s.components*s.byteLength;case sl:return i*e*4/s.components*s.byteLength;case wr:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tr:case Ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yo:case Mo:return Math.max(i,16)*Math.max(e,8)/4;case vo:case xo:return Math.max(i,8)*Math.max(e,8)/2;case So:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Po:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Cr:case ko:case zo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qc:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vo:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Iy(i){switch(i){case Kn:case zc:return{byteLength:1,components:1};case Js:case Hc:case nr:return{byteLength:2,components:1};case el:case tl:return{byteLength:2,components:4};case vi:case Qo:case mn:return{byteLength:4,components:1};case Vc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}const Py={contain:Ay,cover:Cy,fill:Ry,getByteLength:Cc};function Ly(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,b){return f?new OffscreenCanvas(C,b):Hr("canvas")}function _(C,b,F){let K=1;const ne=Ae(C);if((ne.width>F||ne.height>F)&&(K=F/Math.max(ne.width,ne.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(K*ne.width),Re=Math.floor(K*ne.height);d===void 0&&(d=m(j,Re));const fe=b?m(j,Re):d;return fe.width=j,fe.height=Re,fe.getContext("2d").drawImage(C,0,0,j,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+j+"x"+Re+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,b,F,K,ne=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=b;if(b===i.RED&&(F===i.FLOAT&&(j=i.R32F),F===i.HALF_FLOAT&&(j=i.R16F),F===i.UNSIGNED_BYTE&&(j=i.R8)),b===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.R8UI),F===i.UNSIGNED_SHORT&&(j=i.R16UI),F===i.UNSIGNED_INT&&(j=i.R32UI),F===i.BYTE&&(j=i.R8I),F===i.SHORT&&(j=i.R16I),F===i.INT&&(j=i.R32I)),b===i.RG&&(F===i.FLOAT&&(j=i.RG32F),F===i.HALF_FLOAT&&(j=i.RG16F),F===i.UNSIGNED_BYTE&&(j=i.RG8)),b===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RG8UI),F===i.UNSIGNED_SHORT&&(j=i.RG16UI),F===i.UNSIGNED_INT&&(j=i.RG32UI),F===i.BYTE&&(j=i.RG8I),F===i.SHORT&&(j=i.RG16I),F===i.INT&&(j=i.RG32I)),b===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RGB8UI),F===i.UNSIGNED_SHORT&&(j=i.RGB16UI),F===i.UNSIGNED_INT&&(j=i.RGB32UI),F===i.BYTE&&(j=i.RGB8I),F===i.SHORT&&(j=i.RGB16I),F===i.INT&&(j=i.RGB32I)),b===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),F===i.UNSIGNED_INT&&(j=i.RGBA32UI),F===i.BYTE&&(j=i.RGBA8I),F===i.SHORT&&(j=i.RGBA16I),F===i.INT&&(j=i.RGBA32I)),b===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),b===i.RGBA){const Re=ne?ta:ct.getTransfer(K);F===i.FLOAT&&(j=i.RGBA32F),F===i.HALF_FLOAT&&(j=i.RGBA16F),F===i.UNSIGNED_BYTE&&(j=Re===vt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(C,b){let F;return C?b===null||b===vi||b===ps?F=i.DEPTH24_STENCIL8:b===mn?F=i.DEPTH32F_STENCIL8:b===Js&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===vi||b===ps?F=i.DEPTH_COMPONENT24:b===mn?F=i.DEPTH_COMPONENT32F:b===Js&&(F=i.DEPTH_COMPONENT16),F}function I(C,b){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==qt&&C.minFilter!==zt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function M(C){const b=C.target;b.removeEventListener("dispose",M),R(b),b.isVideoTexture&&h.delete(b)}function T(C){const b=C.target;b.removeEventListener("dispose",T),S(b)}function R(C){const b=n.get(C);if(b.__webglInit===void 0)return;const F=C.source,K=u.get(F);if(K){const ne=K[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&w(C),Object.keys(K).length===0&&u.delete(F)}n.remove(C)}function w(C){const b=n.get(C);i.deleteTexture(b.__webglTexture);const F=C.source,K=u.get(F);delete K[b.__cacheKey],a.memory.textures--}function S(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let ne=0;ne<b.__webglFramebuffer[K].length;ne++)i.deleteFramebuffer(b.__webglFramebuffer[K][ne]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const F=C.textures;for(let K=0,ne=F.length;K<ne;K++){const j=n.get(F[K]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(F[K])}n.remove(C)}let P=0;function V(){P=0}function k(){const C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function Y(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function Z(C,b){const F=n.get(C);if(C.isVideoTexture&&le(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(F,C,b);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+b)}function $(C,b){const F=n.get(C);if(C.version>0&&F.__version!==C.version){W(F,C,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+b)}function Q(C,b){const F=n.get(C);if(C.version>0&&F.__version!==C.version){W(F,C,b);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+b)}function X(C,b){const F=n.get(C);if(C.version>0&&F.__version!==C.version){ie(F,C,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+b)}const de={[Wn]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[Or]:i.MIRRORED_REPEAT},me={[qt]:i.NEAREST,[kc]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[br]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},Te={[rf]:i.NEVER,[df]:i.ALWAYS,[af]:i.LESS,[Kc]:i.LEQUAL,[of]:i.EQUAL,[hf]:i.GEQUAL,[lf]:i.GREATER,[cf]:i.NOTEQUAL};function We(C,b){if(b.type===mn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===zt||b.magFilter===br||b.magFilter===Gs||b.magFilter===Xn||b.minFilter===zt||b.minFilter===br||b.minFilter===Gs||b.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,de[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,de[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,de[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,me[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,me[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===qt||b.minFilter!==Gs&&b.minFilter!==Xn||b.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ne(C,b){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",M));const K=b.source;let ne=u.get(K);ne===void 0&&(ne={},u.set(K,ne));const j=Y(b);if(j!==C.__cacheKey){ne[j]===void 0&&(ne[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ne[j].usedTimes++;const Re=ne[C.__cacheKey];Re!==void 0&&(ne[C.__cacheKey].usedTimes--,Re.usedTimes===0&&w(b)),C.__cacheKey=j,C.__webglTexture=ne[j].texture}return F}function W(C,b,F){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const ne=Ne(C,b),j=b.source;t.bindTexture(K,C.__webglTexture,i.TEXTURE0+F);const Re=n.get(j);if(j.version!==Re.__version||ne===!0){t.activeTexture(i.TEXTURE0+F);const fe=ct.getPrimaries(ct.workingColorSpace),Ee=b.colorSpace===hi?null:ct.getPrimaries(b.colorSpace),et=b.colorSpace===hi||fe===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let re=_(b.image,!1,s.maxTextureSize);re=Ge(b,re);const Pe=r.convert(b.format,b.colorSpace),ze=r.convert(b.type);let Xe=y(b.internalFormat,Pe,ze,b.colorSpace,b.isVideoTexture);We(K,b);let Le;const st=b.mipmaps,Ye=b.isVideoTexture!==!0,yt=Re.__version===void 0||ne===!0,D=j.dataReady,ue=I(b,re);if(b.isDepthTexture)Xe=v(b.format===ms,b.type),yt&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,Xe,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Xe,re.width,re.height,0,Pe,ze,null));else if(b.isDataTexture)if(st.length>0){Ye&&yt&&t.texStorage2D(i.TEXTURE_2D,ue,Xe,st[0].width,st[0].height);for(let q=0,ee=st.length;q<ee;q++)Le=st[q],Ye?D&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Le.width,Le.height,Pe,ze,Le.data):t.texImage2D(i.TEXTURE_2D,q,Xe,Le.width,Le.height,0,Pe,ze,Le.data);b.generateMipmaps=!1}else Ye?(yt&&t.texStorage2D(i.TEXTURE_2D,ue,Xe,re.width,re.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,Pe,ze,re.data)):t.texImage2D(i.TEXTURE_2D,0,Xe,re.width,re.height,0,Pe,ze,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ye&&yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Xe,st[0].width,st[0].height,re.depth);for(let q=0,ee=st.length;q<ee;q++)if(Le=st[q],b.format!==rn)if(Pe!==null)if(Ye){if(D)if(b.layerUpdates.size>0){const ve=Cc(Le.width,Le.height,b.format,b.type);for(const ye of b.layerUpdates){const qe=Le.data.subarray(ye*ve/Le.data.BYTES_PER_ELEMENT,(ye+1)*ve/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,ye,Le.width,Le.height,1,Pe,qe)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Le.width,Le.height,re.depth,Pe,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Xe,Le.width,Le.height,re.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Le.width,Le.height,re.depth,Pe,ze,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,Xe,Le.width,Le.height,re.depth,0,Pe,ze,Le.data)}else{Ye&&yt&&t.texStorage2D(i.TEXTURE_2D,ue,Xe,st[0].width,st[0].height);for(let q=0,ee=st.length;q<ee;q++)Le=st[q],b.format!==rn?Pe!==null?Ye?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Le.width,Le.height,Pe,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,q,Xe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?D&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Le.width,Le.height,Pe,ze,Le.data):t.texImage2D(i.TEXTURE_2D,q,Xe,Le.width,Le.height,0,Pe,ze,Le.data)}else if(b.isDataArrayTexture)if(Ye){if(yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Xe,re.width,re.height,re.depth),D)if(b.layerUpdates.size>0){const q=Cc(re.width,re.height,b.format,b.type);for(const ee of b.layerUpdates){const ve=re.data.subarray(ee*q/re.data.BYTES_PER_ELEMENT,(ee+1)*q/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,Pe,ze,ve)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Pe,ze,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Xe,re.width,re.height,re.depth,0,Pe,ze,re.data);else if(b.isData3DTexture)Ye?(yt&&t.texStorage3D(i.TEXTURE_3D,ue,Xe,re.width,re.height,re.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Pe,ze,re.data)):t.texImage3D(i.TEXTURE_3D,0,Xe,re.width,re.height,re.depth,0,Pe,ze,re.data);else if(b.isFramebufferTexture){if(yt)if(Ye)t.texStorage2D(i.TEXTURE_2D,ue,Xe,re.width,re.height);else{let q=re.width,ee=re.height;for(let ve=0;ve<ue;ve++)t.texImage2D(i.TEXTURE_2D,ve,Xe,q,ee,0,Pe,ze,null),q>>=1,ee>>=1}}else if(st.length>0){if(Ye&&yt){const q=Ae(st[0]);t.texStorage2D(i.TEXTURE_2D,ue,Xe,q.width,q.height)}for(let q=0,ee=st.length;q<ee;q++)Le=st[q],Ye?D&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Pe,ze,Le):t.texImage2D(i.TEXTURE_2D,q,Xe,Pe,ze,Le);b.generateMipmaps=!1}else if(Ye){if(yt){const q=Ae(re);t.texStorage2D(i.TEXTURE_2D,ue,Xe,q.width,q.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,ze,re)}else t.texImage2D(i.TEXTURE_2D,0,Xe,Pe,ze,re);g(b)&&p(K),Re.__version=j.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ie(C,b,F){if(b.image.length!==6)return;const K=Ne(C,b),ne=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+F);const j=n.get(ne);if(ne.version!==j.__version||K===!0){t.activeTexture(i.TEXTURE0+F);const Re=ct.getPrimaries(ct.workingColorSpace),fe=b.colorSpace===hi?null:ct.getPrimaries(b.colorSpace),Ee=b.colorSpace===hi||Re===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const et=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,Pe=[];for(let ee=0;ee<6;ee++)!et&&!re?Pe[ee]=_(b.image[ee],!0,s.maxCubemapSize):Pe[ee]=re?b.image[ee].image:b.image[ee],Pe[ee]=Ge(b,Pe[ee]);const ze=Pe[0],Xe=r.convert(b.format,b.colorSpace),Le=r.convert(b.type),st=y(b.internalFormat,Xe,Le,b.colorSpace),Ye=b.isVideoTexture!==!0,yt=j.__version===void 0||K===!0,D=ne.dataReady;let ue=I(b,ze);We(i.TEXTURE_CUBE_MAP,b);let q;if(et){Ye&&yt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,st,ze.width,ze.height);for(let ee=0;ee<6;ee++){q=Pe[ee].mipmaps;for(let ve=0;ve<q.length;ve++){const ye=q[ve];b.format!==rn?Xe!==null?Ye?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,0,0,ye.width,ye.height,Xe,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,st,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,0,0,ye.width,ye.height,Xe,Le,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,st,ye.width,ye.height,0,Xe,Le,ye.data)}}}else{if(q=b.mipmaps,Ye&&yt){q.length>0&&ue++;const ee=Ae(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,st,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){Ye?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe[ee].width,Pe[ee].height,Xe,Le,Pe[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,st,Pe[ee].width,Pe[ee].height,0,Xe,Le,Pe[ee].data);for(let ve=0;ve<q.length;ve++){const qe=q[ve].image[ee].image;Ye?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,0,0,qe.width,qe.height,Xe,Le,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,st,qe.width,qe.height,0,Xe,Le,qe.data)}}else{Ye?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Xe,Le,Pe[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,st,Xe,Le,Pe[ee]);for(let ve=0;ve<q.length;ve++){const ye=q[ve];Ye?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,0,0,Xe,Le,ye.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,st,Xe,Le,ye.image[ee])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),j.__version=ne.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ie(C,b,F,K,ne,j){const Re=r.convert(F.format,F.colorSpace),fe=r.convert(F.type),Ee=y(F.internalFormat,Re,fe,F.colorSpace),et=n.get(b),re=n.get(F);if(re.__renderTarget=b,!et.__hasExternalTextures){const Pe=Math.max(1,b.width>>j),ze=Math.max(1,b.height>>j);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,j,Ee,Pe,ze,b.depth,0,Re,fe,null):t.texImage2D(ne,j,Ee,Pe,ze,0,Re,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),xe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ne,re.__webglTexture,0,se(b)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ne,re.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(C,b,F){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){const K=b.depthTexture,ne=K&&K.isDepthTexture?K.type:null,j=v(b.stencilBuffer,ne),Re=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=se(b);xe(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,j,b.width,b.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,j,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,j,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,C)}else{const K=b.textures;for(let ne=0;ne<K.length;ne++){const j=K[ne],Re=r.convert(j.format,j.colorSpace),fe=r.convert(j.type),Ee=y(j.internalFormat,Re,fe,j.colorSpace),et=se(b);F&&xe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Ee,b.width,b.height):xe(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,Ee,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z(b.depthTexture,0);const ne=K.__webglTexture,j=se(b);if(b.depthTexture.format===cs)xe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(b.depthTexture.format===ms)xe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function He(C){const b=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",ne)};K.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=K}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Be(b.__webglFramebuffer,C)}else if(F){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),ce(b.__webglDepthbuffer[K],C,!1);else{const ne=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ce(b.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(C,b,F){const K=n.get(C);b!==void 0&&Ie(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&He(C)}function Qe(C){const b=C.texture,F=n.get(C),K=n.get(b);C.addEventListener("dispose",T);const ne=C.textures,j=C.isWebGLCubeRenderTarget===!0,Re=ne.length>1;if(Re||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,a.memory.textures++),j){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let Ee=0;Ee<b.mipmaps.length;Ee++)F.__webglFramebuffer[fe][Ee]=i.createFramebuffer()}else F.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)F.__webglFramebuffer[fe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Re)for(let fe=0,Ee=ne.length;fe<Ee;fe++){const et=n.get(ne[fe]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&xe(C)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<ne.length;fe++){const Ee=ne[fe];F.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const et=r.convert(Ee.format,Ee.colorSpace),re=r.convert(Ee.type),Pe=y(Ee.internalFormat,et,re,Ee.colorSpace,C.isXRRenderTarget===!0),ze=se(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Pe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(F.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),We(i.TEXTURE_CUBE_MAP,b);for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ee=0;Ee<b.mipmaps.length;Ee++)Ie(F.__webglFramebuffer[fe][Ee],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee);else Ie(F.__webglFramebuffer[fe],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let fe=0,Ee=ne.length;fe<Ee;fe++){const et=ne[fe],re=n.get(et);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),We(i.TEXTURE_2D,et),Ie(F.__webglFramebuffer,C,et,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),g(et)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,K.__webglTexture),We(fe,b),b.mipmaps&&b.mipmaps.length>0)for(let Ee=0;Ee<b.mipmaps.length;Ee++)Ie(F.__webglFramebuffer[Ee],C,b,i.COLOR_ATTACHMENT0,fe,Ee);else Ie(F.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,fe,0);g(b)&&p(fe),t.unbindTexture()}C.depthBuffer&&He(C)}function te(C){const b=C.textures;for(let F=0,K=b.length;F<K;F++){const ne=b[F];if(g(ne)){const j=x(C),Re=n.get(ne).__webglTexture;t.bindTexture(j,Re),p(j),t.unbindTexture()}}}const oe=[],L=[];function Ce(C){if(C.samples>0){if(xe(C)===!1){const b=C.textures,F=C.width,K=C.height;let ne=i.COLOR_BUFFER_BIT;const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(C),fe=b.length>1;if(fe)for(let Ee=0;Ee<b.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ee=0;Ee<b.length;Ee++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ee]);const et=n.get(b[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,ne,i.NEAREST),l===!0&&(oe.length=0,L.length=0,oe.push(i.COLOR_ATTACHMENT0+Ee),C.depthBuffer&&C.resolveDepthBuffer===!1&&(oe.push(j),L.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Ee=0;Ee<b.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ee]);const et=n.get(b[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function se(C){return Math.min(s.maxSamples,C.samples)}function xe(C){const b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function le(C){const b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Ge(C,b){const F=C.colorSpace,K=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==ys&&F!==hi&&(ct.getTransfer(F)===vt?(K!==rn||ne!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),b}function Ae(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.setTexture2D=Z,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=X,this.rebindTextures=Ve,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=xe}function Af(i,e){function t(n,s=hi){let r;const a=ct.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===el)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zc)return i.BYTE;if(n===Hc)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===Qo)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===nr)return i.HALF_FLOAT;if(n===Gc)return i.ALPHA;if(n===Wc)return i.RGB;if(n===rn)return i.RGBA;if(n===Xc)return i.LUMINANCE;if(n===$c)return i.LUMINANCE_ALPHA;if(n===cs)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===nl)return i.RED;if(n===ea)return i.RED_INTEGER;if(n===Yc)return i.RG;if(n===il)return i.RG_INTEGER;if(n===sl)return i.RGBA_INTEGER;if(n===wr||n===Er||n===Tr||n===Ar)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===yo||n===xo||n===Mo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===So||n===bo||n===wo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===So||n===bo)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Eo||n===To||n===Ao||n===Co||n===Ro||n===Io||n===Po||n===Lo||n===Do||n===No||n===Uo||n===Oo||n===Fo||n===Bo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Eo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===To)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ao)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Io)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Po)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===No)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cr||n===ko||n===zo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Cr)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qc||n===Ho||n===Vo||n===Go)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Cf extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _e extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dy={type:"move"};class jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dy)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ny=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Oy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Lt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Un({vertexShader:Ny,fragmentShader:Uy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new z(new Me(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fy extends jn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null;const _=new Oy,g=t.getContextAttributes();let p=null,x=null;const y=[],v=[],I=new J;let M=null;const T=new Xt;T.viewport=new dt;const R=new Xt;R.viewport=new dt;const w=[T,R],S=new Cf;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=y[W];return ie===void 0&&(ie=new jl,y[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=y[W];return ie===void 0&&(ie=new jl,y[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=y[W];return ie===void 0&&(ie=new jl,y[W]=ie),ie.getHandSpace()};function k(W){const ie=v.indexOf(W.inputSource);if(ie===-1)return;const Ie=y[ie];Ie!==void 0&&(Ie.update(W.inputSource,W.frame,c||a),Ie.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",Z);for(let W=0;W<y.length;W++){const ie=v[W];ie!==null&&(v[W]=null,y[W].disconnect(ie))}P=null,V=null,_.reset(),e.setRenderTarget(p),f=null,u=null,d=null,s=null,x=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Nn(f.framebufferWidth,f.framebufferHeight,{format:rn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,Ie=null,ce=null;g.depth&&(ce=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=g.stencil?ms:cs,Ie=g.stencil?ps:vi);const Be={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(Be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Nn(u.textureWidth,u.textureHeight,{format:rn,type:Kn,depthTexture:new nh(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(W){for(let ie=0;ie<W.removed.length;ie++){const Ie=W.removed[ie],ce=v.indexOf(Ie);ce>=0&&(v[ce]=null,y[ce].disconnect(Ie))}for(let ie=0;ie<W.added.length;ie++){const Ie=W.added[ie];let ce=v.indexOf(Ie);if(ce===-1){for(let He=0;He<y.length;He++)if(He>=v.length){v.push(Ie),ce=He;break}else if(v[He]===null){v[He]=Ie,ce=He;break}if(ce===-1)break}const Be=y[ce];Be&&Be.connect(Ie)}}const $=new E,Q=new E;function X(W,ie,Ie){$.setFromMatrixPosition(ie.matrixWorld),Q.setFromMatrixPosition(Ie.matrixWorld);const ce=$.distanceTo(Q),Be=ie.projectionMatrix.elements,He=Ie.projectionMatrix.elements,Ve=Be[14]/(Be[10]-1),Qe=Be[14]/(Be[10]+1),te=(Be[9]+1)/Be[5],oe=(Be[9]-1)/Be[5],L=(Be[8]-1)/Be[0],Ce=(He[8]+1)/He[0],se=Ve*L,xe=Ve*Ce,le=ce/(-L+Ce),Ge=le*-L;if(ie.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ge),W.translateZ(le),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Be[10]===-1)W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ae=Ve+le,C=Qe+le,b=se-Ge,F=xe+(ce-Ge),K=te*Qe/C*Ae,ne=oe*Qe/C*Ae;W.projectionMatrix.makePerspective(b,F,K,ne,Ae,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function de(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let ie=W.near,Ie=W.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(Ie=_.depthFar)),S.near=R.near=T.near=ie,S.far=R.far=T.far=Ie,(P!==S.near||V!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,V=S.far),T.layers.mask=W.layers.mask|2,R.layers.mask=W.layers.mask|4,S.layers.mask=T.layers.mask|R.layers.mask;const ce=W.parent,Be=S.cameras;de(S,ce);for(let He=0;He<Be.length;He++)de(Be[He],ce);Be.length===2?X(S,T,R):S.projectionMatrix.copy(T.projectionMatrix),me(W,S,ce)};function me(W,ie,Ie){Ie===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy(Ie.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=js*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Te=null;function We(W,ie){if(h=ie.getViewerPose(c||a),m=ie,h!==null){const Ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ce=!1;Ie.length!==S.cameras.length&&(S.cameras.length=0,ce=!0);for(let He=0;He<Ie.length;He++){const Ve=Ie[He];let Qe=null;if(f!==null)Qe=f.getViewport(Ve);else{const oe=d.getViewSubImage(u,Ve);Qe=oe.viewport,He===0&&(e.setRenderTargetTextures(x,oe.colorTexture,u.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(x))}let te=w[He];te===void 0&&(te=new Xt,te.layers.enable(He),te.viewport=new dt,w[He]=te),te.matrix.fromArray(Ve.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Ve.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),He===0&&(S.matrix.copy(te.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ce===!0&&S.cameras.push(te)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const He=d.getDepthInformation(Ie[0]);He&&He.isValid&&He.texture&&_.init(e,He,s.renderState)}}for(let Ie=0;Ie<y.length;Ie++){const ce=v[Ie],Be=y[Ie];ce!==null&&Be!==void 0&&Be.update(ce,ie,c||a)}Te&&Te(W,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),m=null}const Ne=new Sf;Ne.setAnimationLoop(We),this.setAnimationLoop=function(W){Te=W},this.dispose=function(){}}}const Gi=new Sn,By=new $e;function ky(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,vf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,x,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===an&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===an&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,Gi.copy(v),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),g.envMapRotation.value.setFromMatrix4(By.makeRotationFromEuler(Gi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zy(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=s[x.id];v===void 0&&(m(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",g));const I=y.program;n.updateUBOMapping(x,I);const M=e.render.frame;r[x.id]!==M&&(u(x),r[x.id]=M)}function h(x){const y=d();x.__bindingPointIndex=y;const v=i.createBuffer(),I=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,I,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const y=s[x.id],v=x.uniforms,I=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,T=v.length;M<T;M++){const R=Array.isArray(v[M])?v[M]:[v[M]];for(let w=0,S=R.length;w<S;w++){const P=R[w];if(f(P,M,w,I)===!0){const V=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let Z=0;Z<k.length;Z++){const $=k[Z],Q=_($);typeof $=="number"||typeof $=="boolean"?(P.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,V+Y,P.__data)):$.isMatrix3?(P.__data[0]=$.elements[0],P.__data[1]=$.elements[1],P.__data[2]=$.elements[2],P.__data[3]=0,P.__data[4]=$.elements[3],P.__data[5]=$.elements[4],P.__data[6]=$.elements[5],P.__data[7]=0,P.__data[8]=$.elements[6],P.__data[9]=$.elements[7],P.__data[10]=$.elements[8],P.__data[11]=0):($.toArray(P.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,y,v,I){const M=x.value,T=y+"_"+v;if(I[T]===void 0)return typeof M=="number"||typeof M=="boolean"?I[T]=M:I[T]=M.clone(),!0;{const R=I[T];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return I[T]=M,!0}else if(R.equals(M)===!1)return R.copy(M),!0}return!1}function m(x){const y=x.uniforms;let v=0;const I=16;for(let T=0,R=y.length;T<R;T++){const w=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,P=w.length;S<P;S++){const V=w[S],k=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,Z=k.length;Y<Z;Y++){const $=k[Y],Q=_($),X=v%I,de=X%Q.boundary,me=X+de;v+=de,me!==0&&I-me<Q.storage&&(v+=I-me),V.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=Q.storage}}}const M=v%I;return M>0&&(v+=I-M),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Rf{constructor(e={}){const{canvas:t=pf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=pi,this.toneMappingExposure=1;const v=this;let I=!1,M=0,T=0,R=null,w=-1,S=null;const P=new dt,V=new dt;let k=null;const Y=new we(0);let Z=0,$=t.width,Q=t.height,X=1,de=null,me=null;const Te=new dt(0,0,$,Q),We=new dt(0,0,$,Q);let Ne=!1;const W=new ia;let ie=!1,Ie=!1;const ce=new $e,Be=new $e,He=new E,Ve=new dt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function oe(){return R===null?X:1}let L=n;function Ce(A,N){return t.getContext(A,N)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jo}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",ye,!1),L===null){const N="webgl2";if(L=Ce(N,A),L===null)throw Ce(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let se,xe,le,Ge,Ae,C,b,F,K,ne,j,Re,fe,Ee,et,re,Pe,ze,Xe,Le,st,Ye,yt,D;function ue(){se=new $_(L),se.init(),Ye=new Af(L,se),xe=new z_(L,se,e,Ye),le=new Ty(L,se),xe.reverseDepthBuffer&&u&&le.buffers.depth.setReversed(!0),Ge=new Z_(L),Ae=new fy,C=new Ly(L,se,le,Ae,xe,Ye,Ge),b=new V_(v),F=new X_(v),K=new n0(L),yt=new B_(L,K),ne=new Y_(L,K,Ge,yt),j=new J_(L,ne,K,Ge),Xe=new K_(L,xe,C),re=new H_(Ae),Re=new uy(v,b,F,se,xe,yt,re),fe=new ky(v,Ae),Ee=new my,et=new My(se),ze=new F_(v,b,F,le,j,f,l),Pe=new wy(v,j,xe),D=new zy(L,Ge,xe,le),Le=new k_(L,se,Ge),st=new q_(L,se,Ge),Ge.programs=Re.programs,v.capabilities=xe,v.extensions=se,v.properties=Ae,v.renderLists=Ee,v.shadowMap=Pe,v.state=le,v.info=Ge}ue();const q=new Fy(v,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize($,Q,!1))},this.getSize=function(A){return A.set($,Q)},this.setSize=function(A,N,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,Q=N,t.width=Math.floor(A*X),t.height=Math.floor(N*X),H===!0&&(t.style.width=A+"px",t.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set($*X,Q*X).floor()},this.setDrawingBufferSize=function(A,N,H){$=A,Q=N,X=H,t.width=Math.floor(A*H),t.height=Math.floor(N*H),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(Te)},this.setViewport=function(A,N,H,G){A.isVector4?Te.set(A.x,A.y,A.z,A.w):Te.set(A,N,H,G),le.viewport(P.copy(Te).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(We)},this.setScissor=function(A,N,H,G){A.isVector4?We.set(A.x,A.y,A.z,A.w):We.set(A,N,H,G),le.scissor(V.copy(We).multiplyScalar(X).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){le.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){de=A},this.setTransparentSort=function(A){me=A},this.getClearColor=function(A){return A.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(A=!0,N=!0,H=!0){let G=0;if(A){let U=!1;if(R!==null){const he=R.texture.format;U=he===sl||he===il||he===ea}if(U){const he=R.texture.type,be=he===Kn||he===vi||he===Js||he===ps||he===el||he===tl,Ue=ze.getClearColor(),Oe=ze.getClearAlpha(),Ze=Ue.r,nt=Ue.g,Fe=Ue.b;be?(m[0]=Ze,m[1]=nt,m[2]=Fe,m[3]=Oe,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=Ze,_[1]=nt,_[2]=Fe,_[3]=Oe,L.clearBufferiv(L.COLOR,0,_))}else G|=L.COLOR_BUFFER_BIT}N&&(G|=L.DEPTH_BUFFER_BIT),H&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Ee.dispose(),et.dispose(),Ae.dispose(),b.dispose(),F.dispose(),j.dispose(),yt.dispose(),D.dispose(),Re.dispose(),q.dispose(),q.removeEventListener("sessionstart",rt),q.removeEventListener("sessionend",St),Gt.stop()};function ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=Ge.autoReset,N=Pe.enabled,H=Pe.autoUpdate,G=Pe.needsUpdate,U=Pe.type;ue(),Ge.autoReset=A,Pe.enabled=N,Pe.autoUpdate=H,Pe.needsUpdate=G,Pe.type=U}function ye(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function qe(A){const N=A.target;N.removeEventListener("dispose",qe),Mt(N)}function Mt(A){Ut(A),Ae.remove(A)}function Ut(A){const N=Ae.get(A).programs;N!==void 0&&(N.forEach(function(H){Re.releaseProgram(H)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,H,G,U,he){N===null&&(N=Qe);const be=U.isMesh&&U.matrixWorld.determinant()<0,Ue=Ep(A,N,H,G,U);le.setMaterial(G,be);let Oe=H.index,Ze=1;if(G.wireframe===!0){if(Oe=ne.getWireframeAttribute(H),Oe===void 0)return;Ze=2}const nt=H.drawRange,Fe=H.attributes.position;let ft=nt.start*Ze,Et=(nt.start+nt.count)*Ze;he!==null&&(ft=Math.max(ft,he.start*Ze),Et=Math.min(Et,(he.start+he.count)*Ze)),Oe!==null?(ft=Math.max(ft,0),Et=Math.min(Et,Oe.count)):Fe!=null&&(ft=Math.max(ft,0),Et=Math.min(Et,Fe.count));const Tt=Et-ft;if(Tt<0||Tt===1/0)return;yt.setup(U,G,Ue,H,Oe);let hn,pt=Le;if(Oe!==null&&(hn=K.get(Oe),pt=st,pt.setIndex(hn)),U.isMesh)G.wireframe===!0?(le.setLineWidth(G.wireframeLinewidth*oe()),pt.setMode(L.LINES)):pt.setMode(L.TRIANGLES);else if(U.isLine){let ke=G.linewidth;ke===void 0&&(ke=1),le.setLineWidth(ke*oe()),U.isLineSegments?pt.setMode(L.LINES):U.isLineLoop?pt.setMode(L.LINE_LOOP):pt.setMode(L.LINE_STRIP)}else U.isPoints?pt.setMode(L.POINTS):U.isSprite&&pt.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)pt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))pt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ke=U._multiDrawStarts,ei=U._multiDrawCounts,mt=U._multiDrawCount,Cn=Oe?K.get(Oe).bytesPerElement:1,bs=Ae.get(G).currentProgram.getUniforms();for(let _n=0;_n<mt;_n++)bs.setValue(L,"_gl_DrawID",_n),pt.render(ke[_n]/Cn,ei[_n])}else if(U.isInstancedMesh)pt.renderInstances(ft,Tt,U.count);else if(H.isInstancedBufferGeometry){const ke=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ei=Math.min(H.instanceCount,ke);pt.renderInstances(ft,Tt,ei)}else pt.render(ft,Tt)};function lt(A,N,H){A.transparent===!0&&A.side===Ct&&A.forceSinglePass===!1?(A.side=an,A.needsUpdate=!0,ua(A,N,H),A.side=gi,A.needsUpdate=!0,ua(A,N,H),A.side=Ct):ua(A,N,H)}this.compile=function(A,N,H=null){H===null&&(H=A),p=et.get(H),p.init(N),y.push(p),H.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),A!==H&&A.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const G=new Set;return A.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const he=U.material;if(he)if(Array.isArray(he))for(let be=0;be<he.length;be++){const Ue=he[be];lt(Ue,H,U),G.add(Ue)}else lt(he,H,U),G.add(he)}),y.pop(),p=null,G},this.compileAsync=function(A,N,H=null){const G=this.compile(A,N,H);return new Promise(U=>{function he(){if(G.forEach(function(be){Ae.get(be).currentProgram.isReady()&&G.delete(be)}),G.size===0){U(A);return}setTimeout(he,10)}se.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let B=null;function ae(A){B&&B(A)}function rt(){Gt.stop()}function St(){Gt.start()}const Gt=new Sf;Gt.setAnimationLoop(ae),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(A){B=A,q.setAnimationLoop(A),A===null?Gt.stop():Gt.start()},q.addEventListener("sessionstart",rt),q.addEventListener("sessionend",St),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,N,R),p=et.get(A,y.length),p.init(N),y.push(p),Be.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),W.setFromProjectionMatrix(Be),Ie=this.localClippingEnabled,ie=re.init(this.clippingPlanes,Ie),g=Ee.get(A,x.length),g.init(),x.push(g),q.enabled===!0&&q.isPresenting===!0){const he=v.xr.getDepthSensingMesh();he!==null&&zn(he,N,-1/0,v.sortObjects)}zn(A,N,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(de,me),te=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,te&&ze.addToRenderList(g,A),this.info.render.frame++,ie===!0&&re.beginShadows();const H=p.state.shadowsArray;Pe.render(H,A,N),ie===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,U=g.transmissive;if(p.setupLights(),N.isArrayCamera){const he=N.cameras;if(U.length>0)for(let be=0,Ue=he.length;be<Ue;be++){const Oe=he[be];Ph(G,U,A,Oe)}te&&ze.render(A);for(let be=0,Ue=he.length;be<Ue;be++){const Oe=he[be];Ih(g,A,Oe,Oe.viewport)}}else U.length>0&&Ph(G,U,A,N),te&&ze.render(A),Ih(g,A,N);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(v,A,N),yt.resetDefaultState(),w=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],ie===!0&&re.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function zn(A,N,H,G){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)H=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||W.intersectsSprite(A)){G&&Ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Be);const be=j.update(A),Ue=A.material;Ue.visible&&g.push(A,be,Ue,H,Ve.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||W.intersectsObject(A))){const be=j.update(A),Ue=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ve.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ve.copy(be.boundingSphere.center)),Ve.applyMatrix4(A.matrixWorld).applyMatrix4(Be)),Array.isArray(Ue)){const Oe=be.groups;for(let Ze=0,nt=Oe.length;Ze<nt;Ze++){const Fe=Oe[Ze],ft=Ue[Fe.materialIndex];ft&&ft.visible&&g.push(A,be,ft,H,Ve.z,Fe)}}else Ue.visible&&g.push(A,be,Ue,H,Ve.z,null)}}const he=A.children;for(let be=0,Ue=he.length;be<Ue;be++)zn(he[be],N,H,G)}function Ih(A,N,H,G){const U=A.opaque,he=A.transmissive,be=A.transparent;p.setupLightsView(H),ie===!0&&re.setGlobalState(v.clippingPlanes,H),G&&le.viewport(P.copy(G)),U.length>0&&da(U,N,H),he.length>0&&da(he,N,H),be.length>0&&da(be,N,H),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Ph(A,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Nn(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?nr:Kn,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const he=p.state.transmissionRenderTarget[G.id],be=G.viewport||P;he.setSize(be.z,be.w);const Ue=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor(Y),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),te&&ze.render(H);const Oe=v.toneMapping;v.toneMapping=pi;const Ze=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),ie===!0&&re.setGlobalState(v.clippingPlanes,G),da(A,H,G),C.updateMultisampleRenderTarget(he),C.updateRenderTargetMipmap(he),se.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Fe=0,ft=N.length;Fe<ft;Fe++){const Et=N[Fe],Tt=Et.object,hn=Et.geometry,pt=Et.material,ke=Et.group;if(pt.side===Ct&&Tt.layers.test(G.layers)){const ei=pt.side;pt.side=an,pt.needsUpdate=!0,Lh(Tt,H,G,hn,pt,ke),pt.side=ei,pt.needsUpdate=!0,nt=!0}}nt===!0&&(C.updateMultisampleRenderTarget(he),C.updateRenderTargetMipmap(he))}v.setRenderTarget(Ue),v.setClearColor(Y,Z),Ze!==void 0&&(G.viewport=Ze),v.toneMapping=Oe}function da(A,N,H){const G=N.isScene===!0?N.overrideMaterial:null;for(let U=0,he=A.length;U<he;U++){const be=A[U],Ue=be.object,Oe=be.geometry,Ze=G===null?be.material:G,nt=be.group;Ue.layers.test(H.layers)&&Lh(Ue,N,H,Oe,Ze,nt)}}function Lh(A,N,H,G,U,he){A.onBeforeRender(v,N,H,G,U,he),A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),U.onBeforeRender(v,N,H,G,A,he),U.transparent===!0&&U.side===Ct&&U.forceSinglePass===!1?(U.side=an,U.needsUpdate=!0,v.renderBufferDirect(H,N,G,U,A,he),U.side=gi,U.needsUpdate=!0,v.renderBufferDirect(H,N,G,U,A,he),U.side=Ct):v.renderBufferDirect(H,N,G,U,A,he),A.onAfterRender(v,N,H,G,U,he)}function ua(A,N,H){N.isScene!==!0&&(N=Qe);const G=Ae.get(A),U=p.state.lights,he=p.state.shadowsArray,be=U.state.version,Ue=Re.getParameters(A,U.state,he,N,H),Oe=Re.getProgramCacheKey(Ue);let Ze=G.programs;G.environment=A.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(A.isMeshStandardMaterial?F:b).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",qe),Ze=new Map,G.programs=Ze);let nt=Ze.get(Oe);if(nt!==void 0){if(G.currentProgram===nt&&G.lightsStateVersion===be)return Nh(A,Ue),nt}else Ue.uniforms=Re.getUniforms(A),A.onBeforeCompile(Ue,v),nt=Re.acquireProgram(Ue,Oe),Ze.set(Oe,nt),G.uniforms=Ue.uniforms;const Fe=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=re.uniform),Nh(A,Ue),G.needsLights=Ap(A),G.lightsStateVersion=be,G.needsLights&&(Fe.ambientLightColor.value=U.state.ambient,Fe.lightProbe.value=U.state.probe,Fe.directionalLights.value=U.state.directional,Fe.directionalLightShadows.value=U.state.directionalShadow,Fe.spotLights.value=U.state.spot,Fe.spotLightShadows.value=U.state.spotShadow,Fe.rectAreaLights.value=U.state.rectArea,Fe.ltc_1.value=U.state.rectAreaLTC1,Fe.ltc_2.value=U.state.rectAreaLTC2,Fe.pointLights.value=U.state.point,Fe.pointLightShadows.value=U.state.pointShadow,Fe.hemisphereLights.value=U.state.hemi,Fe.directionalShadowMap.value=U.state.directionalShadowMap,Fe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Fe.spotShadowMap.value=U.state.spotShadowMap,Fe.spotLightMatrix.value=U.state.spotLightMatrix,Fe.spotLightMap.value=U.state.spotLightMap,Fe.pointShadowMap.value=U.state.pointShadowMap,Fe.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=nt,G.uniformsList=null,nt}function Dh(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=oo.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function Nh(A,N){const H=Ae.get(A);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Ep(A,N,H,G,U){N.isScene!==!0&&(N=Qe),C.resetTextureUnits();const he=N.fog,be=G.isMeshStandardMaterial?N.environment:null,Ue=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ys,Oe=(G.isMeshStandardMaterial?F:b).get(G.envMap||be),Ze=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,nt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Fe=!!H.morphAttributes.position,ft=!!H.morphAttributes.normal,Et=!!H.morphAttributes.color;let Tt=pi;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Tt=v.toneMapping);const hn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,pt=hn!==void 0?hn.length:0,ke=Ae.get(G),ei=p.state.lights;if(ie===!0&&(Ie===!0||A!==S)){const bn=A===S&&G.id===w;re.setState(G,A,bn)}let mt=!1;G.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ei.state.version||ke.outputColorSpace!==Ue||U.isBatchedMesh&&ke.batching===!1||!U.isBatchedMesh&&ke.batching===!0||U.isBatchedMesh&&ke.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ke.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ke.instancing===!1||!U.isInstancedMesh&&ke.instancing===!0||U.isSkinnedMesh&&ke.skinning===!1||!U.isSkinnedMesh&&ke.skinning===!0||U.isInstancedMesh&&ke.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ke.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ke.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ke.instancingMorph===!1&&U.morphTexture!==null||ke.envMap!==Oe||G.fog===!0&&ke.fog!==he||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==re.numPlanes||ke.numIntersection!==re.numIntersection)||ke.vertexAlphas!==Ze||ke.vertexTangents!==nt||ke.morphTargets!==Fe||ke.morphNormals!==ft||ke.morphColors!==Et||ke.toneMapping!==Tt||ke.morphTargetsCount!==pt)&&(mt=!0):(mt=!0,ke.__version=G.version);let Cn=ke.currentProgram;mt===!0&&(Cn=ua(G,N,U));let bs=!1,_n=!1,sr=!1;const At=Cn.getUniforms(),Hn=ke.uniforms;if(le.useProgram(Cn.program)&&(bs=!0,_n=!0,sr=!0),G.id!==w&&(w=G.id,_n=!0),bs||S!==A){le.buffers.depth.getReversed()?(ce.copy(A.projectionMatrix),Am(ce),Cm(ce),At.setValue(L,"projectionMatrix",ce)):At.setValue(L,"projectionMatrix",A.projectionMatrix),At.setValue(L,"viewMatrix",A.matrixWorldInverse);const xi=At.map.cameraPosition;xi!==void 0&&xi.setValue(L,He.setFromMatrixPosition(A.matrixWorld)),xe.logarithmicDepthBuffer&&At.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&At.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,_n=!0,sr=!0)}if(U.isSkinnedMesh){At.setOptional(L,U,"bindMatrix"),At.setOptional(L,U,"bindMatrixInverse");const bn=U.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),At.setValue(L,"boneTexture",bn.boneTexture,C))}U.isBatchedMesh&&(At.setOptional(L,U,"batchingTexture"),At.setValue(L,"batchingTexture",U._matricesTexture,C),At.setOptional(L,U,"batchingIdTexture"),At.setValue(L,"batchingIdTexture",U._indirectTexture,C),At.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&At.setValue(L,"batchingColorTexture",U._colorsTexture,C));const rr=H.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0)&&Xe.update(U,H,Cn),(_n||ke.receiveShadow!==U.receiveShadow)&&(ke.receiveShadow=U.receiveShadow,At.setValue(L,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Hn.envMap.value=Oe,Hn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Hn.envMapIntensity.value=N.environmentIntensity),_n&&(At.setValue(L,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&Tp(Hn,sr),he&&G.fog===!0&&fe.refreshFogUniforms(Hn,he),fe.refreshMaterialUniforms(Hn,G,X,Q,p.state.transmissionRenderTarget[A.id]),oo.upload(L,Dh(ke),Hn,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(oo.upload(L,Dh(ke),Hn,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&At.setValue(L,"center",U.center),At.setValue(L,"modelViewMatrix",U.modelViewMatrix),At.setValue(L,"normalMatrix",U.normalMatrix),At.setValue(L,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const bn=G.uniformsGroups;for(let xi=0,Mi=bn.length;xi<Mi;xi++){const Uh=bn[xi];D.update(Uh,Cn),D.bind(Uh,Cn)}}return Cn}function Tp(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function Ap(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,N,H){Ae.get(A.texture).__webglTexture=N,Ae.get(A.depthTexture).__webglTexture=H;const G=Ae.get(A);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,N){const H=Ae.get(A);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,H=0){R=A,M=N,T=H;let G=!0,U=null,he=!1,be=!1;if(A){const Oe=Ae.get(A);if(Oe.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(Oe.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Oe.__hasExternalTextures)C.rebindTextures(A,Ae.get(A.texture).__webglTexture,Ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Fe=A.depthTexture;if(Oe.__boundDepthTexture!==Fe){if(Fe!==null&&Ae.has(Fe)&&(A.width!==Fe.image.width||A.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}const Ze=A.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(be=!0);const nt=Ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[N])?U=nt[N][H]:U=nt[N],he=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?U=Ae.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?U=nt[H]:U=nt,P.copy(A.viewport),V.copy(A.scissor),k=A.scissorTest}else P.copy(Te).multiplyScalar(X).floor(),V.copy(We).multiplyScalar(X).floor(),k=Ne;if(le.bindFramebuffer(L.FRAMEBUFFER,U)&&G&&le.drawBuffers(A,U),le.viewport(P),le.scissor(V),le.setScissorTest(k),he){const Oe=Ae.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Oe.__webglTexture,H)}else if(be){const Oe=Ae.get(A.texture),Ze=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Oe.__webglTexture,H||0,Ze)}w=-1},this.readRenderTargetPixels=function(A,N,H,G,U,he,be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){le.bindFramebuffer(L.FRAMEBUFFER,Ue);try{const Oe=A.texture,Ze=Oe.format,nt=Oe.type;if(!xe.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-G&&H>=0&&H<=A.height-U&&L.readPixels(N,H,G,U,Ye.convert(Ze),Ye.convert(nt),he)}finally{const Oe=R!==null?Ae.get(R).__webglFramebuffer:null;le.bindFramebuffer(L.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,N,H,G,U,he,be){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){const Oe=A.texture,Ze=Oe.format,nt=Oe.type;if(!xe.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=A.width-G&&H>=0&&H<=A.height-U){le.bindFramebuffer(L.FRAMEBUFFER,Ue);const Fe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Fe),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),L.readPixels(N,H,G,U,Ye.convert(Ze),Ye.convert(nt),0);const ft=R!==null?Ae.get(R).__webglFramebuffer:null;le.bindFramebuffer(L.FRAMEBUFFER,ft);const Et=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Tm(L,Et,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Fe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he),L.deleteBuffer(Fe),L.deleteSync(Et),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,N=null,H=0){A.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,A=arguments[1]);const G=Math.pow(2,-H),U=Math.floor(A.image.width*G),he=Math.floor(A.image.height*G),be=N!==null?N.x:0,Ue=N!==null?N.y:0;C.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,be,Ue,U,he),le.unbindTexture()},this.copyTextureToTexture=function(A,N,H=null,G=null,U=0){A.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1],N=arguments[2],U=arguments[3]||0,H=null);let he,be,Ue,Oe,Ze,nt,Fe,ft,Et;const Tt=A.isCompressedTexture?A.mipmaps[U]:A.image;H!==null?(he=H.max.x-H.min.x,be=H.max.y-H.min.y,Ue=H.isBox3?H.max.z-H.min.z:1,Oe=H.min.x,Ze=H.min.y,nt=H.isBox3?H.min.z:0):(he=Tt.width,be=Tt.height,Ue=Tt.depth||1,Oe=0,Ze=0,nt=0),G!==null?(Fe=G.x,ft=G.y,Et=G.z):(Fe=0,ft=0,Et=0);const hn=Ye.convert(N.format),pt=Ye.convert(N.type);let ke;N.isData3DTexture?(C.setTexture3D(N,0),ke=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),ke=L.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),ke=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const ei=L.getParameter(L.UNPACK_ROW_LENGTH),mt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Cn=L.getParameter(L.UNPACK_SKIP_PIXELS),bs=L.getParameter(L.UNPACK_SKIP_ROWS),_n=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Tt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Tt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Oe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,nt);const sr=A.isDataArrayTexture||A.isData3DTexture,At=N.isDataArrayTexture||N.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Hn=Ae.get(A),rr=Ae.get(N),bn=Ae.get(Hn.__renderTarget),xi=Ae.get(rr.__renderTarget);le.bindFramebuffer(L.READ_FRAMEBUFFER,bn.__webglFramebuffer),le.bindFramebuffer(L.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Mi=0;Mi<Ue;Mi++)sr&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.get(A).__webglTexture,U,nt+Mi),A.isDepthTexture?(At&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.get(N).__webglTexture,U,Et+Mi),L.blitFramebuffer(Oe,Ze,he,be,Fe,ft,he,be,L.DEPTH_BUFFER_BIT,L.NEAREST)):At?L.copyTexSubImage3D(ke,U,Fe,ft,Et+Mi,Oe,Ze,he,be):L.copyTexSubImage2D(ke,U,Fe,ft,Et+Mi,Oe,Ze,he,be);le.bindFramebuffer(L.READ_FRAMEBUFFER,null),le.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else At?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(ke,U,Fe,ft,Et,he,be,Ue,hn,pt,Tt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(ke,U,Fe,ft,Et,he,be,Ue,hn,Tt.data):L.texSubImage3D(ke,U,Fe,ft,Et,he,be,Ue,hn,pt,Tt):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Fe,ft,he,be,hn,pt,Tt.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Fe,ft,Tt.width,Tt.height,hn,Tt.data):L.texSubImage2D(L.TEXTURE_2D,U,Fe,ft,he,be,hn,pt,Tt);L.pixelStorei(L.UNPACK_ROW_LENGTH,ei),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Cn),L.pixelStorei(L.UNPACK_SKIP_ROWS,bs),L.pixelStorei(L.UNPACK_SKIP_IMAGES,_n),U===0&&N.generateMipmaps&&L.generateMipmap(ke),le.unbindTexture()},this.copyTextureToTexture3D=function(A,N,H=null,G=null,U=0){return A.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,A=arguments[2],N=arguments[3],U=arguments[4]||0),yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,N,H,G,U)},this.initRenderTarget=function(A){Ae.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),le.unbindTexture()},this.resetState=function(){M=0,T=0,R=null,le.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}class dl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=t}clone(){return new dl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=n}clone(){return new sa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class rh extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ul{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kr,this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new E;class gs{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class fl extends en{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Fs;const hr=new E,Bs=new E,ks=new E,zs=new J,dr=new J,If=new $e,Da=new E,ur=new E,Na=new E,Td=new J,Ql=new J,Ad=new J;class ah extends ot{constructor(e=new fl){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new je;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ul(t,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new gs(n,3,0,!1)),Fs.setAttribute("uv",new gs(n,2,3,!1))}this.geometry=Fs,this.material=e,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bs.setFromMatrixScale(this.matrixWorld),If.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bs.multiplyScalar(-ks.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ua(Da.set(-.5,-.5,0),ks,a,Bs,s,r),Ua(ur.set(.5,-.5,0),ks,a,Bs,s,r),Ua(Na.set(.5,.5,0),ks,a,Bs,s,r),Td.set(0,0),Ql.set(1,0),Ad.set(1,1);let o=e.ray.intersectTriangle(Da,ur,Na,!1,hr);if(o===null&&(Ua(ur.set(-.5,.5,0),ks,a,Bs,s,r),Ql.set(0,1),o=e.ray.intersectTriangle(Da,Na,ur,!1,hr),o===null))return;const l=e.ray.origin.distanceTo(hr);l<e.near||l>e.far||t.push({distance:l,point:hr.clone(),uv:pn.getInterpolation(hr,Da,ur,Na,Td,Ql,Ad,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ua(i,e,t,n,s,r){zs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(dr.x=r*zs.x-s*zs.y,dr.y=s*zs.x+r*zs.y):dr.copy(zs),i.copy(e),i.x+=dr.x,i.y+=dr.y,i.applyMatrix4(If)}const Oa=new E,Cd=new E;class Pf extends ot{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,s=t.length;n<s;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const s=this.levels;let r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Oa.setFromMatrixPosition(this.matrixWorld);const s=e.ray.origin.distanceTo(Oa);this.getObjectForDistance(s).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Oa.setFromMatrixPosition(e.matrixWorld),Cd.setFromMatrixPosition(this.matrixWorld);const n=Oa.distanceTo(Cd)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let a=t[s].distance;if(t[s].object.visible&&(a-=a*t[s].hysteresis),n>=a)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const a=n[s];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Rd=new E,Id=new dt,Pd=new dt,Hy=new E,Ld=new $e,Fa=new E,ec=new Qt,Dd=new $e,tc=new xs;class Lf extends z{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wc,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new on),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fa),this.boundingBox.expandByPoint(Fa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fa),this.boundingSphere.expandByPoint(Fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ec.copy(this.boundingSphere),ec.applyMatrix4(s),e.ray.intersectsSphere(ec)!==!1&&(Dd.copy(s).invert(),tc.copy(e.ray).applyMatrix4(Dd),!(this.boundingBox!==null&&tc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,tc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ju?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Id.fromBufferAttribute(s.attributes.skinIndex,e),Pd.fromBufferAttribute(s.attributes.skinWeight,e),Rd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Pd.getComponent(r);if(a!==0){const o=Id.getComponent(r);Ld.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Hy.copy(Rd).applyMatrix4(Ld),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class oh extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yn extends Lt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=qt,h=qt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nd=new $e,Vy=new $e;class pl{constructor(e=[],t=[]){this.uuid=xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Vy;Nd.multiplyMatrices(o,t[r]),Nd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new pl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Yn(t,e,e,rn,mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new oh),this.bones.push(a),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class er extends _t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hs=new $e,Ud=new $e,Ba=[],Od=new on,Gy=new $e,fr=new z,pr=new Qt;class Vr extends z{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Gy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new on),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Od.copy(e.boundingBox).applyMatrix4(Hs),this.boundingBox.union(Od)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),pr.copy(e.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),e.ray.intersectsSphere(pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),Ud.multiplyMatrices(n,Hs),fr.matrixWorld=Ud,fr.raycast(e,Ba);for(let a=0,o=Ba.length;a<o;a++){const l=Ba[a];l.instanceId=r,l.object=this,t.push(l)}Ba.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yn(new Float32Array(s*this.count),s,this.count,nl,mn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function nc(i,e){return i-e}function Wy(i,e){return i.z-e.z}function Xy(i,e){return e.z-i.z}class $y{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=s}reset(){this.list.length=0,this.index=0}}const dn=new $e,Yy=new we(1,1,1),ic=new ia,ka=new on,Wi=new Qt,mr=new E,Fd=new E,qy=new E,sc=new $y,Jt=new z,za=[];function Zy(i,e,t=0){const n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,i.getComponent(r,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function Xi(i,e){if(i.constructor!==e.constructor){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{const t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}class Df extends z{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,n=t*2,s){super(new je,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Yn(t,e,e,rn,mn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Yn(t,e,e,ea,vi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Yn(t,e,e,rn,mn);n.colorSpace=ct.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),d=new _t(h,l,c);t.setAttribute(r,d)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new _t(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,dn),this.getBoundingBoxAt(r,ka).applyMatrix4(dn),e.union(ka)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,dn),this.getBoundingSphereAt(r,Wi).applyMatrix4(dn),e.union(Wi)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(nc),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;dn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(Yy.toArray(a.image.data,s*4),a.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?a.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(nc),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(s&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const d=t.getAttribute(h),u=n.getAttribute(h);Zy(d,u,l);const f=d.itemSize;for(let m=d.count,_=c;m<_;m++){const g=l+m;for(let p=0;p<f;p++)u.setComponent(g,p,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(s){const h=o.indexStart,d=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let u=0;u<a.count;u++)r.setX(h+u,l+a.getX(u));for(let u=a.count,f=d;u<f;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=s?o.indexStart:o.vertexStart,o.count=s?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}optimize(){let e=0,t=0;const n=this._geometryInfo,s=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=s[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=r.index,m=f.array,_=e-d;for(let g=h;g<h+u;g++)m[g]=m[g]+_;f.array.copyWithin(t,h,h+u),f.addUpdateRange(t,u),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:d}=c,u=r.attributes;for(const f in u){const m=u[f],{array:_,itemSize:g}=m;_.copyWithin(e*g,h*g,(h+d)*g),m.addUpdateRange(e*g,d*g)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){const r=new on,a=n.index,o=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(mr.fromBufferAttribute(o,h))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){const r=new Qt;this.getBoundingBoxAt(e,ka),ka.getCenter(r.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=s.start,h=s.start+s.count;c<h;c++){let d=c;a&&(d=a.getX(d)),mr.fromBufferAttribute(o,d),l=Math.max(l,r.center.distanceToSquared(mr))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){const n=this._instanceInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(r,e*16),s.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._instanceInfo,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(s,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,s=this._colorsTexture.image.data,r=this._instanceInfo;return e>=r.length||r[e].active===!1?this:(t.toArray(s,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,s=this._instanceInfo;return e>=s.length||s[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._instanceInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._instanceInfo,s=this._geometryInfo;return e>=n.length||n[e].active===!1||t>=s.length||s[t].active===!1?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(nc);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const s=new Int32Array(e),r=new Int32Array(e);Xi(this._multiDrawCounts,s),Xi(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Xi(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Xi(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Xi(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new je,this._initializeGeometry(r));const a=this.geometry;r.index&&Xi(r.index.array,a.index.array);for(const o in r.attributes)Xi(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,a=this.geometry;Jt.material=this.material,Jt.geometry.index=a.index,Jt.geometry.attributes=a.attributes,Jt.geometry.boundingBox===null&&(Jt.geometry.boundingBox=new on),Jt.geometry.boundingSphere===null&&(Jt.geometry.boundingSphere=new Qt);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,h=s[c];Jt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Jt.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Jt.geometry.boundingBox),this.getBoundingSphereAt(c,Jt.geometry.boundingSphere),Jt.raycast(e,za);for(let d=0,u=za.length;d<u;d++){const f=za[d];f.object=this,f.batchId=o,t.push(f)}za.length=0}Jt.material=null,Jt.geometry.index=null,Jt.geometry.attributes={},Jt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=s.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,d=this._geometryInfo,u=this.perObjectFrustumCulled,f=this._indirectTexture,m=f.image.data;u&&(dn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),ic.setFromProjectionMatrix(dn,e.coordinateSystem));let _=0;if(this.sortObjects){dn.copy(this.matrixWorld).invert(),mr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(dn),Fd.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(dn);for(let x=0,y=l.length;x<y;x++)if(l[x].visible&&l[x].active){const v=l[x].geometryIndex;this.getMatrixAt(x,dn),this.getBoundingSphereAt(v,Wi).applyMatrix4(dn);let I=!1;if(u&&(I=!ic.intersectsSphere(Wi)),!I){const M=d[v],T=qy.subVectors(Wi.center,mr).dot(Fd);sc.push(M.start,M.count,T,x)}}const g=sc.list,p=this.customSort;p===null?g.sort(r.transparent?Xy:Wy):p.call(this,g,n);for(let x=0,y=g.length;x<y;x++){const v=g[x];c[_]=v.start*o,h[_]=v.count,m[_]=v.index,_++}sc.reset()}else for(let g=0,p=l.length;g<p;g++)if(l[g].visible&&l[g].active){const x=l[g].geometryIndex;let y=!1;if(u&&(this.getMatrixAt(g,dn),this.getBoundingSphereAt(x,Wi).applyMatrix4(dn),y=!ic.intersectsSphere(Wi)),!y){const v=d[x];c[_]=v.start*o,h[_]=v.count,m[_]=g,_++}}f.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,a){this.onBeforeRender(e,null,s,r,a)}}class cn extends en{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $o=new E,Yo=new E,Bd=new $e,gr=new xs,Ha=new Qt,rc=new E,kd=new E;class Ni extends ot{constructor(e=new je,t=new cn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)$o.fromBufferAttribute(t,s-1),Yo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$o.distanceTo(Yo);e.setAttribute("lineDistance",new De(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,e.ray.intersectsSphere(Ha)===!1)return;Bd.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Bd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){const p=h.getX(_),x=h.getX(_+1),y=Va(this,e,gr,l,p,x);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=Va(this,e,gr,l,_,g);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){const p=Va(this,e,gr,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Va(this,e,gr,l,m-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Va(i,e,t,n,s,r){const a=i.geometry.attributes.position;if($o.fromBufferAttribute(a,s),Yo.fromBufferAttribute(a,r),t.distanceSqToSegment($o,Yo,rc,kd)>n)return;rc.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(rc);if(!(l<e.near||l>e.far))return{distance:l,point:kd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const zd=new E,Hd=new E;class Qn extends Ni{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)zd.fromBufferAttribute(t,s),Hd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zd.distanceTo(Hd);e.setAttribute("lineDistance",new De(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nf extends Ni{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ml extends en{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vd=new $e,Rc=new xs,Ga=new Qt,Wa=new E;class lh extends ot{constructor(e=new je,t=new ml){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;Vd.copy(s).invert(),Rc.copy(e.ray).applyMatrix4(Vd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,_=f;m<_;m++){const g=c.getX(m);Wa.fromBufferAttribute(d,g),Gd(Wa,g,l,s,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,_=f;m<_;m++)Wa.fromBufferAttribute(d,m),Gd(Wa,m,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Gd(i,e,t,n,s,r,a){const o=Rc.distanceSqToPoint(i);if(o<t){const l=new E;Rc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ky extends Lt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:zt,this.magFilter=r!==void 0?r:zt,this.generateMipmaps=!1;const h=this;function d(){h.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Jy extends Lt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=qt,this.minFilter=qt,this.generateMipmaps=!1,this.needsUpdate=!0}}class gl extends Lt{constructor(e,t,n,s,r,a,o,l,c,h,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class jy extends gl{constructor(e,t,n,s,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=Tn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qy extends gl{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,_i),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Uf extends Lt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new J:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,s=[],r=[],a=[],o=new E,l=new $e;for(let f=0;f<=e;f++){const m=f/e;s[f]=this.getTangentAt(m,new E)}r[0]=new E,a[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Pt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Pt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class _l extends Fn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new J){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Of extends _l{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ch(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Xa=new E,ac=new ch,oc=new ch,lc=new ch;class Ir extends Fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new E){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Xa.subVectors(s[0],s[1]).add(s[0]),c=Xa);const d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Xa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),ac.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,_,g),oc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,_,g),lc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(ac.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),oc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),lc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ac.calc(l),oc.calc(l),lc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new E().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wd(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function ex(i,e){const t=1-i;return t*t*e}function tx(i,e){return 2*(1-i)*i*e}function nx(i,e){return i*i*e}function Pr(i,e,t,n){return ex(i,e)+tx(i,t)+nx(i,n)}function ix(i,e){const t=1-i;return t*t*t*e}function sx(i,e){const t=1-i;return 3*t*t*i*e}function rx(i,e){return 3*(1-i)*i*i*e}function ax(i,e){return i*i*i*e}function Lr(i,e,t,n,s){return ix(i,e)+sx(i,t)+rx(i,n)+ax(i,s)}class hh extends Fn{constructor(e=new J,t=new J,n=new J,s=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new J){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Lr(e,s.x,r.x,a.x,o.x),Lr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ff extends Fn{constructor(e=new E,t=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new E){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Lr(e,s.x,r.x,a.x,o.x),Lr(e,s.y,r.y,a.y,o.y),Lr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dh extends Fn{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bf extends Fn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uh extends Fn{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Pr(e,s.x,r.x,a.x),Pr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fh extends Fn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Pr(e,s.x,r.x,a.x),Pr(e,s.y,r.y,a.y),Pr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ph extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Wd(o,l.x,c.x,h.x,d.x),Wd(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new J().fromArray(s))}return this}}var qo=Object.freeze({__proto__:null,ArcCurve:Of,CatmullRomCurve3:Ir,CubicBezierCurve:hh,CubicBezierCurve3:Ff,EllipseCurve:_l,LineCurve:dh,LineCurve3:Bf,QuadraticBezierCurve:uh,QuadraticBezierCurve3:fh,SplineCurve:ph});class kf extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new qo[s.type]().fromJSON(s))}return this}}class Gr extends kf{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new dh(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new uh(this.currentPoint.clone(),new J(e,t),new J(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new hh(this.currentPoint.clone(),new J(e,t),new J(n,s),new J(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ph(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new _l(e,t,n,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ra extends je{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Pt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,d=new E,u=new J,f=new E,m=new E,_=new E;let g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let x=0;x<=t;x++){const y=n+x*h*s,v=Math.sin(y),I=Math.cos(y);for(let M=0;M<=e.length-1;M++){d.x=e[M].x*v,d.y=e[M].y,d.z=e[M].x*I,a.push(d.x,d.y,d.z),u.x=x/t,u.y=M/(e.length-1),o.push(u.x,u.y);const T=l[3*M+0]*v,R=l[3*M+1],w=l[3*M+0]*I;c.push(T,R,w)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){const v=y+x*e.length,I=v,M=v+e.length,T=v+e.length+1,R=v+1;r.push(I,M,R),r.push(T,R,M)}this.setIndex(r),this.setAttribute("position",new De(a,3)),this.setAttribute("uv",new De(o,2)),this.setAttribute("normal",new De(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.points,e.segments,e.phiStart,e.phiLength)}}class Pi extends ra{constructor(e=1,t=1,n=4,s=8){const r=new Gr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Pi(e.radius,e.length,e.capSegments,e.radialSegments)}}class Jn extends je{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new E,h=new J;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(o,3)),this.setAttribute("uv",new De(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class An extends je{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let m=0;const _=[],g=n/2;let p=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new De(d,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(f,2));function x(){const v=new E,I=new E;let M=0;const T=(t-e)/n;for(let R=0;R<=r;R++){const w=[],S=R/r,P=S*(t-e)+e;for(let V=0;V<=s;V++){const k=V/s,Y=k*l+o,Z=Math.sin(Y),$=Math.cos(Y);I.x=P*Z,I.y=-S*n+g,I.z=P*$,d.push(I.x,I.y,I.z),v.set(Z,T,$).normalize(),u.push(v.x,v.y,v.z),f.push(k,1-S),w.push(m++)}_.push(w)}for(let R=0;R<s;R++)for(let w=0;w<r;w++){const S=_[w][R],P=_[w+1][R],V=_[w+1][R+1],k=_[w][R+1];(e>0||w!==0)&&(h.push(S,P,k),M+=3),(t>0||w!==r-1)&&(h.push(P,V,k),M+=3)}c.addGroup(p,M,0),p+=M}function y(v){const I=m,M=new J,T=new E;let R=0;const w=v===!0?e:t,S=v===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,g*S,0),u.push(0,S,0),f.push(.5,.5),m++;const P=m;for(let V=0;V<=s;V++){const Y=V/s*l+o,Z=Math.cos(Y),$=Math.sin(Y);T.x=w*$,T.y=g*S,T.z=w*Z,d.push(T.x,T.y,T.z),u.push(0,S,0),M.x=Z*.5+.5,M.y=$*.5*S+.5,f.push(M.x,M.y),m++}for(let V=0;V<s;V++){const k=I+V,Y=P+V;v===!0?h.push(Y,Y+1,k):h.push(Y+1,Y,k),R+=3}c.addGroup(p,R,v===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vl extends An{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new vl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oi extends je{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new De(r,3)),this.setAttribute("normal",new De(r.slice(),3)),this.setAttribute("uv",new De(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new E,v=new E,I=new E;for(let M=0;M<t.length;M+=3)f(t[M+0],y),f(t[M+1],v),f(t[M+2],I),l(y,v,I,x)}function l(x,y,v,I){const M=I+1,T=[];for(let R=0;R<=M;R++){T[R]=[];const w=x.clone().lerp(v,R/M),S=y.clone().lerp(v,R/M),P=M-R;for(let V=0;V<=P;V++)V===0&&R===M?T[R][V]=w:T[R][V]=w.clone().lerp(S,V/P)}for(let R=0;R<M;R++)for(let w=0;w<2*(M-R)-1;w++){const S=Math.floor(w/2);w%2===0?(u(T[R][S+1]),u(T[R+1][S]),u(T[R][S])):(u(T[R][S+1]),u(T[R+1][S+1]),u(T[R+1][S]))}}function c(x){const y=new E;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const x=new E;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const v=g(x)/2/Math.PI+.5,I=p(x)/Math.PI+.5;a.push(v,1-I)}m(),d()}function d(){for(let x=0;x<a.length;x+=6){const y=a[x+0],v=a[x+2],I=a[x+4],M=Math.max(y,v,I),T=Math.min(y,v,I);M>.9&&T<.1&&(y<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),I<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,y){const v=x*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function m(){const x=new E,y=new E,v=new E,I=new E,M=new J,T=new J,R=new J;for(let w=0,S=0;w<r.length;w+=9,S+=6){x.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),M.set(a[S+0],a[S+1]),T.set(a[S+2],a[S+3]),R.set(a[S+4],a[S+5]),I.copy(x).add(y).add(v).divideScalar(3);const P=g(I);_(M,S+0,x,P),_(T,S+2,y,P),_(R,S+4,v,P)}}function _(x,y,v,I){I<0&&x.x===1&&(a[y]=x.x-1),v.x===0&&v.z===0&&(a[y]=I/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.vertices,e.indices,e.radius,e.details)}}class yl extends Oi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yl(e.radius,e.detail)}}const $a=new E,Ya=new E,cc=new E,qa=new pn;class zf extends je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(hs*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:_,b:g,c:p}=qa;if(_.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),qa.getNormal(cc),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let x=0;x<3;x++){const y=(x+1)%3,v=d[x],I=d[y],M=qa[h[x]],T=qa[h[y]],R=`${v}_${I}`,w=`${I}_${v}`;w in u&&u[w]?(cc.dot(u[w].normal)<=r&&(f.push(M.x,M.y,M.z),f.push(T.x,T.y,T.z)),u[w]=null):R in u||(u[R]={index0:c[x],index1:c[y],normal:cc.clone()})}}for(const m in u)if(u[m]){const{index0:_,index1:g}=u[m];$a.fromBufferAttribute(o,_),Ya.fromBufferAttribute(o,g),f.push($a.x,$a.y,$a.z),f.push(Ya.x,Ya.y,Ya.z)}this.setAttribute("position",new De(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Dn extends Gr{constructor(e){super(e),this.uuid=xn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Gr().fromJSON(s))}return this}}const ox={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Hf(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,f;if(n&&(r=ux(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let m=t;m<s;m+=t)d=i[m],u=i[m+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Wr(r,a,t,o,l,f,0),a}};function Hf(i,e,t,n,s){let r,a;if(s===bx(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Xd(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Xd(r,i[r],i[r+1],a);return a&&xl(a,a.next)&&($r(a),a=a.next),a}function _s(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(xl(t,t.next)||Rt(t.prev,t,t.next)===0)){if($r(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Wr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&_x(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?cx(i,n,s,r):lx(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),$r(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=hx(_s(i),e,t),Wr(i,e,t,n,s,r,2)):a===2&&dx(i,e,t,n,s,r):Wr(_s(i),e,t,n,s,r,1);break}}}function lx(i){const e=i.prev,t=i,n=i.next;if(Rt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&$s(s,o,r,l,a,c,m.x,m.y)&&Rt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function cx(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Rt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=o<l?o<c?o:c:l<c?l:c,m=h<d?h<u?h:u:d<u?d:u,_=o>l?o>c?o:c:l>c?l:c,g=h>d?h>u?h:u:d>u?d:u,p=Ic(f,m,e,t,n),x=Ic(_,g,e,t,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&$s(o,h,l,d,c,u,y.x,y.y)&&Rt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&$s(o,h,l,d,c,u,v.x,v.y)&&Rt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&$s(o,h,l,d,c,u,y.x,y.y)&&Rt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&$s(o,h,l,d,c,u,v.x,v.y)&&Rt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function hx(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!xl(s,r)&&Vf(s,n,n.next,r)&&Xr(s,r)&&Xr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),$r(n),$r(n.next),n=i=r),n=n.next}while(n!==i);return _s(n)}function dx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xx(a,o)){let l=Gf(a,o);a=_s(a,a.next),l=_s(l,l.next),Wr(a,e,t,n,s,r,0),Wr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ux(i,e,t,n){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Hf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(yx(c));for(s.sort(fx),r=0;r<s.length;r++)t=px(s[r],t);return t}function fx(i,e){return i.x-e.x}function px(i,e){const t=mx(i,e);if(!t)return e;const n=Gf(t,i);return _s(n,n.next),_s(t,t.next)}function mx(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&$s(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),Xr(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&gx(s,t)))&&(s=t,h=d)),t=t.next;while(t!==o);return s}function gx(i,e){return Rt(i.prev,i,e.prev)<0&&Rt(e.next,i,i.next)<0}function _x(i,e,t,n){let s=i;do s.z===0&&(s.z=Ic(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vx(s)}function vx(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Ic(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function yx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function $s(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function xx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Mx(i,e)&&(Xr(i,e)&&Xr(e,i)&&Sx(i,e)&&(Rt(i.prev,i,e.prev)||Rt(i,e.prev,e))||xl(i,e)&&Rt(i.prev,i,i.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function xl(i,e){return i.x===e.x&&i.y===e.y}function Vf(i,e,t,n){const s=Ka(Rt(i,e,t)),r=Ka(Rt(i,e,n)),a=Ka(Rt(t,n,i)),o=Ka(Rt(t,n,e));return!!(s!==r&&a!==o||s===0&&Za(i,t,e)||r===0&&Za(i,n,e)||a===0&&Za(t,i,n)||o===0&&Za(t,e,n))}function Za(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ka(i){return i>0?1:i<0?-1:0}function Mx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Vf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Xr(i,e){return Rt(i.prev,i,i.next)<0?Rt(i,e,i.next)>=0&&Rt(i,i.prev,e)>=0:Rt(i,e,i.prev)<0||Rt(i,i.next,e)<0}function Sx(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Gf(i,e){const t=new Pc(i.i,i.x,i.y),n=new Pc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Xd(i,e,t,n){const s=new Pc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $r(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function bx(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class qn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return qn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];$d(e),Yd(n,e);let a=e.length;t.forEach($d);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Yd(n,t[l]);const o=ox.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function $d(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Yd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class aa extends je{constructor(e=new Dn([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new De(s,3)),this.setAttribute("uv",new De(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:wx;let y,v=!1,I,M,T,R;p&&(y=p.getSpacedPoints(h),v=!0,u=!1,I=p.computeFrenetFrames(h,!1),M=new E,T=new E,R=new E),u||(g=0,f=0,m=0,_=0);const w=o.extractPoints(c);let S=w.shape;const P=w.holes;if(!qn.isClockWise(S)){S=S.reverse();for(let te=0,oe=P.length;te<oe;te++){const L=P[te];qn.isClockWise(L)&&(P[te]=L.reverse())}}const k=qn.triangulateShape(S,P),Y=S;for(let te=0,oe=P.length;te<oe;te++){const L=P[te];S=S.concat(L)}function Z(te,oe,L){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(oe,L)}const $=S.length,Q=k.length;function X(te,oe,L){let Ce,se,xe;const le=te.x-oe.x,Ge=te.y-oe.y,Ae=L.x-te.x,C=L.y-te.y,b=le*le+Ge*Ge,F=le*C-Ge*Ae;if(Math.abs(F)>Number.EPSILON){const K=Math.sqrt(b),ne=Math.sqrt(Ae*Ae+C*C),j=oe.x-Ge/K,Re=oe.y+le/K,fe=L.x-C/ne,Ee=L.y+Ae/ne,et=((fe-j)*C-(Ee-Re)*Ae)/(le*C-Ge*Ae);Ce=j+le*et-te.x,se=Re+Ge*et-te.y;const re=Ce*Ce+se*se;if(re<=2)return new J(Ce,se);xe=Math.sqrt(re/2)}else{let K=!1;le>Number.EPSILON?Ae>Number.EPSILON&&(K=!0):le<-Number.EPSILON?Ae<-Number.EPSILON&&(K=!0):Math.sign(Ge)===Math.sign(C)&&(K=!0),K?(Ce=-Ge,se=le,xe=Math.sqrt(b)):(Ce=le,se=Ge,xe=Math.sqrt(b/2))}return new J(Ce/xe,se/xe)}const de=[];for(let te=0,oe=Y.length,L=oe-1,Ce=te+1;te<oe;te++,L++,Ce++)L===oe&&(L=0),Ce===oe&&(Ce=0),de[te]=X(Y[te],Y[L],Y[Ce]);const me=[];let Te,We=de.concat();for(let te=0,oe=P.length;te<oe;te++){const L=P[te];Te=[];for(let Ce=0,se=L.length,xe=se-1,le=Ce+1;Ce<se;Ce++,xe++,le++)xe===se&&(xe=0),le===se&&(le=0),Te[Ce]=X(L[Ce],L[xe],L[le]);me.push(Te),We=We.concat(Te)}for(let te=0;te<g;te++){const oe=te/g,L=f*Math.cos(oe*Math.PI/2),Ce=m*Math.sin(oe*Math.PI/2)+_;for(let se=0,xe=Y.length;se<xe;se++){const le=Z(Y[se],de[se],Ce);ce(le.x,le.y,-L)}for(let se=0,xe=P.length;se<xe;se++){const le=P[se];Te=me[se];for(let Ge=0,Ae=le.length;Ge<Ae;Ge++){const C=Z(le[Ge],Te[Ge],Ce);ce(C.x,C.y,-L)}}}const Ne=m+_;for(let te=0;te<$;te++){const oe=u?Z(S[te],We[te],Ne):S[te];v?(T.copy(I.normals[0]).multiplyScalar(oe.x),M.copy(I.binormals[0]).multiplyScalar(oe.y),R.copy(y[0]).add(T).add(M),ce(R.x,R.y,R.z)):ce(oe.x,oe.y,0)}for(let te=1;te<=h;te++)for(let oe=0;oe<$;oe++){const L=u?Z(S[oe],We[oe],Ne):S[oe];v?(T.copy(I.normals[te]).multiplyScalar(L.x),M.copy(I.binormals[te]).multiplyScalar(L.y),R.copy(y[te]).add(T).add(M),ce(R.x,R.y,R.z)):ce(L.x,L.y,d/h*te)}for(let te=g-1;te>=0;te--){const oe=te/g,L=f*Math.cos(oe*Math.PI/2),Ce=m*Math.sin(oe*Math.PI/2)+_;for(let se=0,xe=Y.length;se<xe;se++){const le=Z(Y[se],de[se],Ce);ce(le.x,le.y,d+L)}for(let se=0,xe=P.length;se<xe;se++){const le=P[se];Te=me[se];for(let Ge=0,Ae=le.length;Ge<Ae;Ge++){const C=Z(le[Ge],Te[Ge],Ce);v?ce(C.x,C.y+y[h-1].y,y[h-1].x+L):ce(C.x,C.y,d+L)}}}W(),ie();function W(){const te=s.length/3;if(u){let oe=0,L=$*oe;for(let Ce=0;Ce<Q;Ce++){const se=k[Ce];Be(se[2]+L,se[1]+L,se[0]+L)}oe=h+g*2,L=$*oe;for(let Ce=0;Ce<Q;Ce++){const se=k[Ce];Be(se[0]+L,se[1]+L,se[2]+L)}}else{for(let oe=0;oe<Q;oe++){const L=k[oe];Be(L[2],L[1],L[0])}for(let oe=0;oe<Q;oe++){const L=k[oe];Be(L[0]+$*h,L[1]+$*h,L[2]+$*h)}}n.addGroup(te,s.length/3-te,0)}function ie(){const te=s.length/3;let oe=0;Ie(Y,oe),oe+=Y.length;for(let L=0,Ce=P.length;L<Ce;L++){const se=P[L];Ie(se,oe),oe+=se.length}n.addGroup(te,s.length/3-te,1)}function Ie(te,oe){let L=te.length;for(;--L>=0;){const Ce=L;let se=L-1;se<0&&(se=te.length-1);for(let xe=0,le=h+g*2;xe<le;xe++){const Ge=$*xe,Ae=$*(xe+1),C=oe+Ce+Ge,b=oe+se+Ge,F=oe+se+Ae,K=oe+Ce+Ae;He(C,b,F,K)}}}function ce(te,oe,L){l.push(te),l.push(oe),l.push(L)}function Be(te,oe,L){Ve(te),Ve(oe),Ve(L);const Ce=s.length/3,se=x.generateTopUV(n,s,Ce-3,Ce-2,Ce-1);Qe(se[0]),Qe(se[1]),Qe(se[2])}function He(te,oe,L,Ce){Ve(te),Ve(oe),Ve(Ce),Ve(oe),Ve(L),Ve(Ce);const se=s.length/3,xe=x.generateSideWallUV(n,s,se-6,se-3,se-2,se-1);Qe(xe[0]),Qe(xe[1]),Qe(xe[3]),Qe(xe[1]),Qe(xe[2]),Qe(xe[3])}function Ve(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function Qe(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ex(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new qo[s.type]().fromJSON(s)),new aa(n,e.options)}}const wx={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new J(r,a),new J(o,l),new J(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],m=e[s*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new J(a,1-l),new J(c,1-d),new J(u,1-m),new J(_,1-p)]:[new J(o,1-l),new J(h,1-d),new J(f,1-m),new J(g,1-p)]}};function Ex(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Zn extends Oi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zn(e.radius,e.detail)}}class oa extends Oi{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oa(e.radius,e.detail)}}class la extends je{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/s,f=new E,m=new J;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const p=r+g/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}d+=u}for(let _=0;_<s;_++){const g=_*(n+1);for(let p=0;p<n;p++){const x=p+g,y=x,v=x+n+1,I=x+n+2,M=x+1;o.push(y,v,M),o.push(v,I,M)}}this.setIndex(o),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vs extends je{constructor(e=new Dn([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new De(s,3)),this.setAttribute("normal",new De(r,3)),this.setAttribute("uv",new De(a,2));function c(h){const d=s.length/3,u=h.extractPoints(t);let f=u.shape;const m=u.holes;qn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const x=m[g];qn.isClockWise(x)===!0&&(m[g]=x.reverse())}const _=qn.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const x=m[g];f=f.concat(x)}for(let g=0,p=f.length;g<p;g++){const x=f[g];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let g=0,p=_.length;g<p;g++){const x=_[g],y=x[0]+d,v=x[1]+d,I=x[2]+d;n.push(y,v,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Tx(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new vs(n,e.curveSegments)}}function Tx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class ln extends je{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new E,u=new E,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let I=0;I<=t;I++){const M=I/t;d.x=-e*Math.cos(s+M*r)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(s+M*r)*Math.sin(a+y*o),m.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(M+v,1-y),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const y=h[p][x+1],v=h[p][x],I=h[p+1][x],M=h[p+1][x+1];(p!==0||a>0)&&f.push(y,v,M),(p!==n-1||l<Math.PI)&&f.push(v,I,M)}this.setIndex(f),this.setAttribute("position",new De(m,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ml extends Oi{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ml(e.radius,e.detail)}}class $t extends je{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new E,d=new E,u=new E;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const _=m/s*r,g=f/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(_),d.y=(e+t*Math.cos(g))*Math.sin(_),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,x=(s+1)*f+m;a.push(_,g,x),a.push(g,p,x)}this.setIndex(a),this.setAttribute("position",new De(o,3)),this.setAttribute("normal",new De(l,3)),this.setAttribute("uv",new De(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Sl extends je{constructor(e=1,t=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);const o=[],l=[],c=[],h=[],d=new E,u=new E,f=new E,m=new E,_=new E,g=new E,p=new E;for(let y=0;y<=n;++y){const v=y/n*r*Math.PI*2;x(v,r,a,e,f),x(v+.01,r,a,e,m),g.subVectors(m,f),p.addVectors(m,f),_.crossVectors(g,p),p.crossVectors(_,g),_.normalize(),p.normalize();for(let I=0;I<=s;++I){const M=I/s*Math.PI*2,T=-t*Math.cos(M),R=t*Math.sin(M);d.x=f.x+(T*p.x+R*_.x),d.y=f.y+(T*p.y+R*_.y),d.z=f.z+(T*p.z+R*_.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(y/n),h.push(I/s)}}for(let y=1;y<=n;y++)for(let v=1;v<=s;v++){const I=(s+1)*(y-1)+(v-1),M=(s+1)*y+(v-1),T=(s+1)*y+v,R=(s+1)*(y-1)+v;o.push(I,M,R),o.push(M,T,R)}this.setIndex(o),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(h,2));function x(y,v,I,M,T){const R=Math.cos(y),w=Math.sin(y),S=I/v*y,P=Math.cos(S);T.x=M*(2+P)*.5*R,T.y=M*(2+P)*w*.5,T.z=M*Math.sin(S)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class bl extends je{constructor(e=new fh(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new E,l=new E,c=new J;let h=new E;const d=[],u=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new De(d,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(f,2));function _(){for(let y=0;y<t;y++)g(y);g(r===!1?t:0),x(),p()}function g(y){h=e.getPointAt(y/t,h);const v=a.normals[y],I=a.binormals[y];for(let M=0;M<=s;M++){const T=M/s*Math.PI*2,R=Math.sin(T),w=-Math.cos(T);l.x=w*v.x+R*I.x,l.y=w*v.y+R*I.y,l.z=w*v.z+R*I.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=t;y++)for(let v=1;v<=s;v++){const I=(s+1)*(y-1)+(v-1),M=(s+1)*y+(v-1),T=(s+1)*y+v,R=(s+1)*(y-1)+v;m.push(I,M,R),m.push(M,T,R)}}function x(){for(let y=0;y<=t;y++)for(let v=0;v<=s;v++)c.x=y/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new bl(new qo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Wf extends je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new E,r=new E;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,f=d.count;for(let m=u,_=u+f;m<_;m+=3)for(let g=0;g<3;g++){const p=o.getX(m+g),x=o.getX(m+(g+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,x),qd(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),qd(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new De(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function qd(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var Zd=Object.freeze({__proto__:null,BoxGeometry:On,CapsuleGeometry:Pi,CircleGeometry:Jn,ConeGeometry:vl,CylinderGeometry:An,DodecahedronGeometry:yl,EdgesGeometry:zf,ExtrudeGeometry:aa,IcosahedronGeometry:Zn,LatheGeometry:ra,OctahedronGeometry:oa,PlaneGeometry:Me,PolyhedronGeometry:Oi,RingGeometry:la,ShapeGeometry:vs,SphereGeometry:ln,TetrahedronGeometry:Ml,TorusGeometry:$t,TorusKnotGeometry:Sl,TubeGeometry:bl,WireframeGeometry:Wf});class Xf extends en{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new we(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class $f extends Un{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class ge extends en{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class li extends ge{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Yf extends en{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new we(16777215),this.specular=new we(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qf extends en{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new we(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Zf extends en{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Kf extends en{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jf extends en{static get type(){return"MeshMatcapMaterial"}constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.color=new we(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ui,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jf extends cn{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function rs(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Qf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ep(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Lc(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function mh(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function Ax(i,e,t,n,s=30){const r=i.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const m=c.times[f]*s;if(!(m<t||m>=n)){d.push(c.times[f]);for(let _=0;_<h;++_)u.push(c.values[f*h+_])}}d.length!==0&&(c.times=rs(d,c.times.constructor),c.values=rs(u,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function Cx(i,e=0,t=i,n=30){n<=0&&(n=30);const s=t.tracks.length,r=e/n;for(let a=0;a<s;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const m=o.times.length-1;let _;if(r<=o.times[0]){const p=h,x=d-h;_=o.values.slice(p,x)}else if(r>=o.times[m]){const p=m*d+h,x=p+d-h;_=o.values.slice(p,x)}else{const p=o.createInterpolant(),x=h,y=d-h;p.evaluate(r),_=p.resultBuffer.slice(x,y)}l==="quaternion"&&new jt().fromArray(_).normalize().conjugate().toArray(_);const g=c.times.length;for(let p=0;p<g;++p){const x=p*f+u;if(l==="quaternion")jt.multiplyQuaternionsFlat(c.values,x,_,0,c.values,x);else{const y=f-u*2;for(let v=0;v<y;++v)c.values[x+v]-=_[v]}}}return i.blendMode=Zc,i}const Rx={convertArray:rs,isTypedArray:Qf,getKeyframeOrder:ep,sortedArray:Lc,flattenJSON:mh,subclip:Ax,makeClipAdditive:Cx};class ca{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tp extends ca{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ns,endingEnd:ns}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case is:r=e,o=2*t-n;break;case Br:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case is:a=e,l=2*n-t;break;case Br:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),_=m*m,g=_*m,p=-u*g+2*u*_-u*m,x=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,v=f*g-f*_;for(let I=0;I!==o;++I)r[I]=p*a[h+I]+x*a[c+I]+y*a[l+I]+v*a[d+I];return r}}class gh extends ca{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}}class np extends ca{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rs(t,this.TimeBufferType),this.values=rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:rs(e.times,Array),values:rs(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new np(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fr:t=this.InterpolantFactoryMethodDiscrete;break;case Wo:t=this.InterpolantFactoryMethodLinear;break;case ao:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return Wo;case this.InterpolantFactoryMethodSmooth:return ao}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Qf(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ao,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{const d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){const _=t[d+m];if(_!==t[u+m]||_!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Wo;class Ms extends Bn{constructor(e,t,n){super(e,t,n)}}Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Fr;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class _h extends Bn{}_h.prototype.ValueTypeName="color";class Yr extends Bn{}Yr.prototype.ValueTypeName="number";class ip extends ca{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let h=c+o;c!==h;c+=4)jt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ha extends Bn{InterpolantFactoryMethodLinear(e){return new ip(this.times,this.values,this.getValueSize(),e)}}ha.prototype.ValueTypeName="quaternion";ha.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends Bn{constructor(e,t,n){super(e,t,n)}}Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Fr;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class qr extends Bn{}qr.prototype.ValueTypeName="vector";class Zr{constructor(e="",t=-1,n=[],s=rl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Px(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=ep(l);l=Lc(l,1,h),c=Lc(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Yr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=s[d];u||(s[d]=u=[]),u.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,m,_){if(f.length!==0){const g=[],p=[];mh(f,g,p,m),g.length!==0&&_.push(new d(u,g,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let _=0;_<u[m].morphTargets.length;_++)f[u[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let x=0;x!==u[m].morphTargets.length;++x){const y=u[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}s.push(new Yr(".morphTargetInfluence["+_+"]",g,p))}l=f.length*a}else{const f=".bones["+t[d].name+"]";n(qr,f+".position",u,"pos",s),n(ha,f+".quaternion",u,"rot",s),n(qr,f+".scale",u,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ix(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yr;case"vector":case"vector2":case"vector3":case"vector4":return qr;case"color":return _h;case"quaternion":return ha;case"bool":case"boolean":return Ms;case"string":return Ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Px(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ix(i.type);if(i.times===void 0){const t=[],n=[];mh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ui={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class vh{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const sp=new vh;class gn{constructor(e){this.manager=e!==void 0?e:sp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gn.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class Lx extends Error{constructor(e,t){super(e),this.response=t}}class yi extends gn{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ui.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:s});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ai[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){x();function x(){d.read().then(({done:y,value:v})=>{if(y)p.close();else{_+=v.byteLength;const I=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let M=0,T=h.length;M<T;M++){const R=h[M];R.onProgress&&R.onProgress(I)}p.enqueue(v),x()}},y=>{p.error(y)})}}});return new Response(g)}else throw new Lx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{ui.add(e,c);const h=ai[e];delete ai[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ai[e];if(h===void 0)throw this.manager.itemError(e),c;delete ai[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Dx extends gn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new yi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){const t=[];for(let n=0;n<e.length;n++){const s=Zr.parse(e[n]);t.push(s)}return t}}class Nx extends gn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=[],o=new gl,l=new yi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(d){l.load(e[d],function(u){const f=r.parse(u,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=zt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,s)}if(Array.isArray(e))for(let d=0,u=e.length;d<u;++d)h(d);else l.load(e,function(d){const u=r.parse(d,!0);if(u.isCubemap){const f=u.mipmaps.length/u.mipmapCount;for(let m=0;m<f;m++){a[m]={mipmaps:[]};for(let _=0;_<u.mipmapCount;_++)a[m].mipmaps.push(u.mipmaps[m*u.mipmapCount+_]),a[m].format=u.format,a[m].width=u.width,a[m].height=u.height}o.image=a}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=zt),o.format=u.format,o.needsUpdate=!0,t&&t(o)},n,s);return o}}class Kr extends gn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ui.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Hr("img");function l(){h(),ui.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Ux extends gn{constructor(e){super(e)}load(e,t,n,s){const r=new na;r.colorSpace=Yt;const a=new Kr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return r}}class Ox extends gn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Yn,o=new yi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Tn,a.wrapT=c.wrapT!==void 0?c.wrapT:Tn,a.magFilter=c.magFilter!==void 0?c.magFilter:zt,a.minFilter=c.minFilter!==void 0?c.minFilter:zt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Xn),c.mipmapCount===1&&(a.minFilter=zt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,s),a}}class rp extends gn{constructor(e){super(e)}load(e,t,n,s){const r=new Lt,a=new Kr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Fi extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class yh extends Fi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const hc=new $e,Kd=new E,Jd=new E;class xh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ia,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kd),Jd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jd),t.updateMatrixWorld(),hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fx extends xh{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=js*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ap extends Fi{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Fx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const jd=new $e,_r=new E,dc=new E;class Bx extends xh{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_r.setFromMatrixPosition(e.matrixWorld),n.position.copy(_r),dc.copy(n.position),dc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(dc),n.updateMatrixWorld(),s.makeTranslation(-_r.x,-_r.y,-_r.z),jd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jd)}}class Jr extends Fi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Bx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kx extends xh{constructor(){super(new cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zo extends Fi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new kx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mh extends Fi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class op extends Fi{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class lp{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new E)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*s),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*s)),t.addScaledVector(a[5],1.092548*(s*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-s*s)),t}getIrradianceAt(e,t){const n=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*s),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*s),t.addScaledVector(a[5],2*.429043*s*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){const n=e.x,s=e.y,r=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*s,t[5]=1.092548*s*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-s*s)}}class cp extends Fi{constructor(e=new lp,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class wl extends gn{constructor(e){super(e),this.textures={}}load(e,t,n,s){const r=this,a=new yi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const s=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(s.uuid=e.uuid),e.name!==void 0&&(s.name=e.name),e.color!==void 0&&s.color!==void 0&&s.color.setHex(e.color),e.roughness!==void 0&&(s.roughness=e.roughness),e.metalness!==void 0&&(s.metalness=e.metalness),e.sheen!==void 0&&(s.sheen=e.sheen),e.sheenColor!==void 0&&(s.sheenColor=new we().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(s.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&s.emissive!==void 0&&s.emissive.setHex(e.emissive),e.specular!==void 0&&s.specular!==void 0&&s.specular.setHex(e.specular),e.specularIntensity!==void 0&&(s.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&s.specularColor!==void 0&&s.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(s.shininess=e.shininess),e.clearcoat!==void 0&&(s.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(s.dispersion=e.dispersion),e.iridescence!==void 0&&(s.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(s.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(s.transmission=e.transmission),e.thickness!==void 0&&(s.thickness=e.thickness),e.attenuationDistance!==void 0&&(s.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&s.attenuationColor!==void 0&&s.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(s.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(s.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(s.fog=e.fog),e.flatShading!==void 0&&(s.flatShading=e.flatShading),e.blending!==void 0&&(s.blending=e.blending),e.combine!==void 0&&(s.combine=e.combine),e.side!==void 0&&(s.side=e.side),e.shadowSide!==void 0&&(s.shadowSide=e.shadowSide),e.opacity!==void 0&&(s.opacity=e.opacity),e.transparent!==void 0&&(s.transparent=e.transparent),e.alphaTest!==void 0&&(s.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(s.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(s.depthFunc=e.depthFunc),e.depthTest!==void 0&&(s.depthTest=e.depthTest),e.depthWrite!==void 0&&(s.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(s.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(s.blendSrc=e.blendSrc),e.blendDst!==void 0&&(s.blendDst=e.blendDst),e.blendEquation!==void 0&&(s.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(s.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(s.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(s.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&s.blendColor!==void 0&&s.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(s.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(s.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(s.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(s.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(s.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(s.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(s.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(s.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(s.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(s.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(s.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(s.rotation=e.rotation),e.linewidth!==void 0&&(s.linewidth=e.linewidth),e.dashSize!==void 0&&(s.dashSize=e.dashSize),e.gapSize!==void 0&&(s.gapSize=e.gapSize),e.scale!==void 0&&(s.scale=e.scale),e.polygonOffset!==void 0&&(s.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(s.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(s.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(s.dithering=e.dithering),e.alphaToCoverage!==void 0&&(s.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(s.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(s.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(s.visible=e.visible),e.toneMapped!==void 0&&(s.toneMapped=e.toneMapped),e.userData!==void 0&&(s.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?s.vertexColors=e.vertexColors>0:s.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(s.uniforms[r]={},a.type){case"t":s.uniforms[r].value=n(a.value);break;case"c":s.uniforms[r].value=new we().setHex(a.value);break;case"v2":s.uniforms[r].value=new J().fromArray(a.value);break;case"v3":s.uniforms[r].value=new E().fromArray(a.value);break;case"v4":s.uniforms[r].value=new dt().fromArray(a.value);break;case"m3":s.uniforms[r].value=new Je().fromArray(a.value);break;case"m4":s.uniforms[r].value=new $e().fromArray(a.value);break;default:s.uniforms[r].value=a.value}}if(e.defines!==void 0&&(s.defines=e.defines),e.vertexShader!==void 0&&(s.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(s.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(s.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)s.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(s.lights=e.lights),e.clipping!==void 0&&(s.clipping=e.clipping),e.size!==void 0&&(s.size=e.size),e.sizeAttenuation!==void 0&&(s.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(s.map=n(e.map)),e.matcap!==void 0&&(s.matcap=n(e.matcap)),e.alphaMap!==void 0&&(s.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(s.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(s.bumpScale=e.bumpScale),e.normalMap!==void 0&&(s.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(s.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),s.normalScale=new J().fromArray(r)}return e.displacementMap!==void 0&&(s.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(s.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(s.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(s.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(s.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(s.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(s.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(s.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(s.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(s.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(s.envMap=n(e.envMap)),e.envMapRotation!==void 0&&s.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(s.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(s.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(s.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(s.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(s.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(s.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(s.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(s.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(s.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(s.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(s.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(s.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(s.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(s.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(s.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(s.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(s.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(s.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(s.sheenRoughnessMap=n(e.sheenRoughnessMap)),s}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return wl.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Xf,SpriteMaterial:fl,RawShaderMaterial:$f,ShaderMaterial:Un,PointsMaterial:ml,MeshPhysicalMaterial:li,MeshStandardMaterial:ge,MeshPhongMaterial:Yf,MeshToonMaterial:qf,MeshNormalMaterial:Zf,MeshLambertMaterial:Kf,MeshDepthMaterial:ih,MeshDistanceMaterial:sh,MeshBasicMaterial:Se,MeshMatcapMaterial:Jf,LineDashedMaterial:jf,LineBasicMaterial:cn,Material:en};return new t[e]}}class Dc{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hp extends je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class dp extends gn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new yi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){const t={},n={};function s(f,m){if(t[m]!==void 0)return t[m];const g=f.interleavedBuffers[m],p=r(f,g.buffer),x=Ws(g.type,p),y=new ul(x,g.stride);return y.uuid=g.uuid,t[m]=y,y}function r(f,m){if(n[m]!==void 0)return n[m];const g=f.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}const a=e.isInstancedBufferGeometry?new hp:new je,o=e.data.index;if(o!==void 0){const f=Ws(o.type,o.array);a.setIndex(new _t(f,1))}const l=e.data.attributes;for(const f in l){const m=l[f];let _;if(m.isInterleavedBufferAttribute){const g=s(e.data,m.data);_=new gs(g,m.itemSize,m.offset,m.normalized)}else{const g=Ws(m.type,m.array),p=m.isInstancedBufferAttribute?er:_t;_=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(_.name=m.name),m.usage!==void 0&&_.setUsage(m.usage),a.setAttribute(f,_)}const c=e.data.morphAttributes;if(c)for(const f in c){const m=c[f],_=[];for(let g=0,p=m.length;g<p;g++){const x=m[g];let y;if(x.isInterleavedBufferAttribute){const v=s(e.data,x.data);y=new gs(v,x.itemSize,x.offset,x.normalized)}else{const v=Ws(x.type,x.array);y=new _t(v,x.itemSize,x.normalized)}x.name!==void 0&&(y.name=x.name),_.push(y)}a.morphAttributes[f]=_}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,m=d.length;f!==m;++f){const _=d[f];a.addGroup(_.start,_.count,_.materialIndex)}const u=e.data.boundingSphere;if(u!==void 0){const f=new E;u.center!==void 0&&f.fromArray(u.center),a.boundingSphere=new Qt(f,u.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class zx extends gn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=this.path===""?Dc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new yi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){s!==void 0&&s(d),console.error("THREE:ObjectLoader: Can't parse "+e+".",d.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,s)}async loadAsync(e,t){const n=this,s=this.path===""?Dc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const r=new yi(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),s=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,s),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let d=!1;for(const u in a)if(a[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,s=e.length;n<s;n++){const r=new Dn().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},s={};if(t.traverse(function(r){r.isBone&&(s[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new pl().fromJSON(e[r],s);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const s=new dp;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=s.parse(l);break;default:l.type in Zd?o=Zd[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},s={};if(e!==void 0){const r=new wl;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),s[l.uuid]=n[l.uuid]}}return s}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const s=e[n],r=Zr.parse(s);t[r.uuid]=r}return t}parseImages(e,t){const n=this,s={};let r;function a(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:Ws(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new vh(t);r=new Kr(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const d=e[c],u=d.url;if(Array.isArray(u)){const f=[];for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o(g);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new Yn(p.data,p.width,p.height)))}s[d.uuid]=new ss(f)}else{const f=o(d.url);s[d.uuid]=new ss(f)}}}return s}async parseImagesAsync(e){const t=this,n={};let s;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await s.loadAsync(l)}else return a.data?{data:Ws(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){s=new Kr(this.manager),s.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d],m=await r(f);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new Yn(m.data,m.width,m.height)))}n[l.uuid]=new ss(h)}else{const h=await r(l.url);n[l.uuid]=new ss(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const s={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new na,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Yn:h=new Lt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,Hx)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],Qd),h.wrapT=n(o.wrap[1],Qd)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,eu)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,eu)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),s[o.uuid]=h}return s}parseObject(e,t,n,s,r){let a;function o(u){return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),t[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const f=[];for(let m=0,_=u.length;m<_;m++){const g=u[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),n[u]}}function c(u){return s[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",u),s[u]}let h,d;switch(e.type){case"Scene":a=new rh,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new we(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new sa(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new dl(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Xt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new cl(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Mh(e.color,e.intensity);break;case"DirectionalLight":a=new Zo(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new Jr(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new op(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new ap(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new yh(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new cp().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),d=l(e.material),a=new Lf(h,d),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),d=l(e.material),a=new z(h,d);break;case"InstancedMesh":h=o(e.geometry),d=l(e.material);const u=e.count,f=e.instanceMatrix,m=e.instanceColor;a=new Vr(h,d,u),a.instanceMatrix=new er(new Float32Array(f.array),16),m!==void 0&&(a.instanceColor=new er(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":h=o(e.geometry),d=l(e.material),a=new Df(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(_=>{const g=new on;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);const p=new Qt;return p.radius=_.sphereRadius,p.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:p}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":a=new Pf;break;case"Line":a=new Ni(o(e.geometry),l(e.material));break;case"LineLoop":a=new Nf(o(e.geometry),l(e.material));break;case"LineSegments":a=new Qn(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new lh(o(e.geometry),l(e.material));break;case"Sprite":a=new ah(l(e.material));break;case"Group":a=new _e;break;case"Bone":a=new oh;break;default:a=new ot}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let f=0;f<u.length;f++)a.add(this.parseObject(u[f],t,n,s,r))}if(e.animations!==void 0){const u=e.animations;for(let f=0;f<u.length;f++){const m=u[f];a.animations.push(r[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const u=e.levels;for(let f=0;f<u.length;f++){const m=u[f],_=a.getObjectByProperty("uuid",m.object);_!==void 0&&a.addLevel(_,m.distance,m.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const s=t[n.skeleton];s===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(s,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,s=e.getObjectByProperty("uuid",n);s!==void 0?t.target=s:t.target=new ot}})}}const Hx={UVMapping:jo,CubeReflectionMapping:_i,CubeRefractionMapping:Di,EquirectangularReflectionMapping:fs,EquirectangularRefractionMapping:Ur,CubeUVReflectionMapping:tr},Qd={RepeatWrapping:Wn,ClampToEdgeWrapping:Tn,MirroredRepeatWrapping:Or},eu={NearestFilter:qt,NearestMipmapNearestFilter:kc,NearestMipmapLinearFilter:Gs,LinearFilter:zt,LinearMipmapNearestFilter:br,LinearMipmapLinearFilter:Xn};class Vx extends gn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ui.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ui.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ui.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ui.add(e,l),r.manager.itemStart(e)}}let Ja;class Sh{static getContext(){return Ja===void 0&&(Ja=new(window.AudioContext||window.webkitAudioContext)),Ja}static setContext(e){Ja=e}}class Gx extends gn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new yi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);Sh.getContext().decodeAudioData(c,function(d){t(d)}).catch(o)}catch(c){o(c)}},n,s);function o(l){s?s(l):console.error(l),r.manager.itemError(e)}}}const tu=new $e,nu=new $e,$i=new $e;class Wx{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Xt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Xt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,$i.copy(e.projectionMatrix);const s=t.eyeSep/2,r=s*t.near/t.focus,a=t.near*Math.tan(hs*t.fov*.5)/t.zoom;let o,l;nu.elements[12]=-s,tu.elements[12]=s,o=-a*t.aspect+r,l=a*t.aspect+r,$i.elements[0]=2*t.near/(l-o),$i.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy($i),o=-a*t.aspect-r,l=a*t.aspect-r,$i.elements[0]=2*t.near/(l-o),$i.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy($i)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(nu),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(tu)}}class bh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=iu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=iu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function iu(){return performance.now()}const Yi=new E,su=new jt,Xx=new E,qi=new E;class $x extends ot{constructor(){super(),this.type="AudioListener",this.context=Sh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new bh}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Yi,su,Xx),qi.set(0,0,-1).applyQuaternion(su),t.positionX){const s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Yi.x,s),t.positionY.linearRampToValueAtTime(Yi.y,s),t.positionZ.linearRampToValueAtTime(Yi.z,s),t.forwardX.linearRampToValueAtTime(qi.x,s),t.forwardY.linearRampToValueAtTime(qi.y,s),t.forwardZ.linearRampToValueAtTime(qi.z,s),t.upX.linearRampToValueAtTime(n.x,s),t.upY.linearRampToValueAtTime(n.y,s),t.upZ.linearRampToValueAtTime(n.z,s)}else t.setPosition(Yi.x,Yi.y,Yi.z),t.setOrientation(qi.x,qi.y,qi.z,n.x,n.y,n.z)}}class up extends ot{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Zi=new E,ru=new jt,Yx=new E,Ki=new E;class qx extends up{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Zi,ru,Yx),Ki.set(0,0,1).applyQuaternion(ru);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Zi.x,n),t.positionY.linearRampToValueAtTime(Zi.y,n),t.positionZ.linearRampToValueAtTime(Zi.z,n),t.orientationX.linearRampToValueAtTime(Ki.x,n),t.orientationY.linearRampToValueAtTime(Ki.y,n),t.orientationZ.linearRampToValueAtTime(Ki.z,n)}else t.setPosition(Zi.x,Zi.y,Zi.z),t.setOrientation(Ki.x,Ki.y,Ki.z)}}class Zx{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class fp{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){jt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const a=this._workIndex*r;jt.multiplyQuaternionsFlat(e,a,e,t,e,n),jt.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*s}}}const wh="\\[\\]\\.:\\/",Kx=new RegExp("["+wh+"]","g"),Eh="[^"+wh+"]",Jx="[^"+wh.replace("\\.","")+"]",jx=/((?:WC+[\/:])*)/.source.replace("WC",Eh),Qx=/(WCOD+)?/.source.replace("WCOD",Jx),eM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),tM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),nM=new RegExp("^"+jx+Qx+eM+tM+"$"),iM=["material","materials","bones","map"];class sM{constructor(e,t,n){const s=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ht{constructor(e,t,n){this.path=t,this.parsedPath=n||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,n):new ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Kx,"")}static parseTrackName(e){const t=nM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);iM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=sM;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class rM{constructor(){this.isAnimationObjectGroup=!0,this.uuid=xn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,s=arguments.length;n!==s;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,s=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){const u=arguments[h],f=u.uuid;let m=t[f];if(m===void 0){m=l++,t[f]=m,e.push(u);for(let _=0,g=a;_!==g;++_)r[_].push(new ht(u,n[_],s[_]))}else if(m<c){o=e[m];const _=--c,g=e[_];t[g.uuid]=m,e[m]=g,t[f]=_,e[_]=u;for(let p=0,x=a;p!==x;++p){const y=r[p],v=y[_];let I=y[m];y[m]=v,I===void 0&&(I=new ht(u,n[p],s[p])),y[_]=I}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){const d=r++,u=e[d];t[u.uuid]=h,e[h]=u,t[c]=d,e[d]=l;for(let f=0,m=s;f!==m;++f){const _=n[f],g=_[d],p=_[h];_[h]=g,_[d]=p}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,d=t[h];if(d!==void 0)if(delete t[h],d<r){const u=--r,f=e[u],m=--a,_=e[m];t[f.uuid]=d,e[d]=f,t[_.uuid]=u,e[u]=_,e.pop();for(let g=0,p=s;g!==p;++g){const x=n[g],y=x[u],v=x[m];x[d]=y,x[u]=v,x.pop()}}else{const u=--a,f=e[u];u>0&&(t[f.uuid]=d),e[d]=f,e.pop();for(let m=0,_=s;m!==_;++m){const g=n[m];g[d]=g[u],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let s=n[e];const r=this._bindings;if(s!==void 0)return r[s];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);s=r.length,n[e]=s,a.push(e),o.push(t),r.push(d);for(let u=h,f=l.length;u!==f;++u){const m=l[u];d[u]=new ht(m,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const s=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),s[n]=s[o],s.pop()}}}class pp{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:ns,endingEnd:ns};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Qu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Zc:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case rl:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const a=n===ef;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===ju){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=is,s.endingEnd=is):(e?s.endingStart=this.zeroSlopeAtStart?is:ns:s.endingStart=Br,t?s.endingEnd=this.zeroSlopeAtEnd?is:ns:s.endingEnd=Br)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const aM=new Float32Array(1);class oM extends jn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const u=s[d],f=u.name;let m=h[f];if(m!==void 0)++m.referenceCount,a[d]=m;else{if(m=a[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;m=new fp(ht.create(n,f,_),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[d]=m}o[d].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new gh(new Float32Array(2),new Float32Array(2),1,aM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?Zr.findByName(s,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=rl),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new pp(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?Zr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Th{constructor(e){this.value=e}clone(){return new Th(this.value.clone===void 0?this.value:this.value.clone())}}let lM=0;class cM extends jn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:lM++}),this.name="",this.usage=kr,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,s=t.length;n<s;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class hM extends ul{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class dM{constructor(e,t,n,s,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const au=new $e;class mp{constructor(e,t,n=0,s=1/0){this.ray=new xs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ol,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return au.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(au),this}intersectObject(e,t=!0,n=[]){return Nc(e,this,n,t),n.sort(ou),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Nc(e[s],this,n,t);return n.sort(ou),n}}function ou(i,e){return i.distance-e.distance}function Nc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Nc(r[a],e,t,!0)}}class Uc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uM{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Ah{constructor(e,t,n,s){Ah.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}const lu=new J;class fM{constructor(e=new J(1/0,1/0),t=new J(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=lu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,lu).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cu=new E,ja=new E;class pM{constructor(e=new E,t=new E){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){cu.subVectors(e,this.start),ja.subVectors(this.end,this.start);const n=ja.dot(ja);let r=ja.dot(cu)/n;return t&&(r=Pt(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const hu=new E;class mM extends ot{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new je,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;s.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new De(s,3));const r=new cn({fog:!1,toneMapped:!1});this.cone=new Qn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),hu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(hu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Ci=new E,Qa=new $e,uc=new $e;class gM extends Qn{constructor(e){const t=gp(e),n=new je,s=[],r=[],a=new we(0,0,1),o=new we(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new De(s,3)),n.setAttribute("color",new De(r,3));const l=new cn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,s=n.getAttribute("position");uc.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(Qa.multiplyMatrices(uc,o.matrixWorld),Ci.setFromMatrixPosition(Qa),s.setXYZ(a,Ci.x,Ci.y,Ci.z),Qa.multiplyMatrices(uc,o.parent.matrixWorld),Ci.setFromMatrixPosition(Qa),s.setXYZ(a+1,Ci.x,Ci.y,Ci.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function gp(i){const e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,gp(i.children[t]));return e}class _M extends z{constructor(e,t,n){const s=new ln(t,4,2),r=new Se({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const vM=new E,du=new we,uu=new we;class yM extends ot{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const s=new oa(t);s.rotateY(Math.PI*.5),this.material=new Se({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=s.getAttribute("position"),a=new Float32Array(r.count*3);s.setAttribute("color",new _t(a,3)),this.add(new z(s,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");du.copy(this.light.color),uu.copy(this.light.groundColor);for(let n=0,s=t.count;n<s;n++){const r=n<s/2?du:uu;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(vM.setFromMatrixPosition(this.light.matrixWorld).negate())}}class xM extends Qn{constructor(e=10,t=10,n=4473924,s=8947848){n=new we(n),s=new we(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,f=0,m=-o;u<=t;u++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const _=u===r?n:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new je;h.setAttribute("position",new De(l,3)),h.setAttribute("color",new De(c,3));const d=new cn({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class MM extends Qn{constructor(e=10,t=16,n=8,s=64,r=4473924,a=8947848){r=new we(r),a=new we(a);const o=[],l=[];if(t>1)for(let d=0;d<t;d++){const u=d/t*(Math.PI*2),f=Math.sin(u)*e,m=Math.cos(u)*e;o.push(0,0,0),o.push(f,0,m);const _=d&1?r:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let d=0;d<n;d++){const u=d&1?r:a,f=e-e/n*d;for(let m=0;m<s;m++){let _=m/s*(Math.PI*2),g=Math.sin(_)*f,p=Math.cos(_)*f;o.push(g,0,p),l.push(u.r,u.g,u.b),_=(m+1)/s*(Math.PI*2),g=Math.sin(_)*f,p=Math.cos(_)*f,o.push(g,0,p),l.push(u.r,u.g,u.b)}}const c=new je;c.setAttribute("position",new De(o,3)),c.setAttribute("color",new De(l,3));const h=new cn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const fu=new E,eo=new E,pu=new E;class SM extends ot{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let s=new je;s.setAttribute("position",new De([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new cn({fog:!1,toneMapped:!1});this.lightPlane=new Ni(s,r),this.add(this.lightPlane),s=new je,s.setAttribute("position",new De([0,0,0,0,0,1],3)),this.targetLine=new Ni(s,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),fu.setFromMatrixPosition(this.light.matrixWorld),eo.setFromMatrixPosition(this.light.target.matrixWorld),pu.subVectors(eo,fu),this.lightPlane.lookAt(eo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(eo),this.targetLine.scale.z=pu.length()}}const to=new E,It=new ll;class bM extends Qn{constructor(e){const t=new je,n=new cn({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,_){l(m),l(_)}function l(m){s.push(0,0,0),r.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(s.length/3-1)}t.setAttribute("position",new De(s,3)),t.setAttribute("color",new De(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new we(16755200),h=new we(16711680),d=new we(43775),u=new we(16777215),f=new we(3355443);this.setColors(c,h,d,u,f)}setColors(e,t,n,s,r){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,s.r,s.g,s.b),o.setXYZ(39,s.r,s.g,s.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,s=1;It.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Dt("c",t,e,It,0,0,-1),Dt("t",t,e,It,0,0,1),Dt("n1",t,e,It,-n,-s,-1),Dt("n2",t,e,It,n,-s,-1),Dt("n3",t,e,It,-n,s,-1),Dt("n4",t,e,It,n,s,-1),Dt("f1",t,e,It,-n,-s,1),Dt("f2",t,e,It,n,-s,1),Dt("f3",t,e,It,-n,s,1),Dt("f4",t,e,It,n,s,1),Dt("u1",t,e,It,n*.7,s*1.1,-1),Dt("u2",t,e,It,-n*.7,s*1.1,-1),Dt("u3",t,e,It,0,s*2,-1),Dt("cf1",t,e,It,-n,0,1),Dt("cf2",t,e,It,n,0,1),Dt("cf3",t,e,It,0,-s,1),Dt("cf4",t,e,It,0,s,1),Dt("cn1",t,e,It,-n,0,-1),Dt("cn2",t,e,It,n,0,-1),Dt("cn3",t,e,It,0,-s,-1),Dt("cn4",t,e,It,0,s,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Dt(i,e,t,n,s,r,a){to.set(s,r,a).unproject(n);const o=e[i];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],to.x,to.y,to.z)}}const no=new on;class wM extends Qn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new je;r.setIndex(new _t(n,1)),r.setAttribute("position",new _t(s,3)),super(r,new cn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&no.setFromObject(this.object),no.isEmpty())return;const t=no.min,n=no.max,s=this.geometry.attributes.position,r=s.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class EM extends Qn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new je;r.setIndex(new _t(n,1)),r.setAttribute("position",new De(s,3)),super(r,new cn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class TM extends Ni{constructor(e,t=1,n=16776960){const s=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new je;a.setAttribute("position",new De(r,3)),a.computeBoundingSphere(),super(a,new cn({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new je;l.setAttribute("position",new De(o,3)),l.computeBoundingSphere(),this.add(new z(l,new Se({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const mu=new E;let io,fc;class AM extends ot{constructor(e=new E(0,0,1),t=new E(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",io===void 0&&(io=new je,io.setAttribute("position",new De([0,0,0,0,1,0],3)),fc=new An(0,.5,1,5,1),fc.translate(0,-.5,0)),this.position.copy(t),this.line=new Ni(io,new cn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new z(fc,new Se({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{mu.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(mu,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class CM extends Qn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new je;s.setAttribute("position",new De(t,3)),s.setAttribute("color",new De(n,3));const r=new cn({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new we,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class RM{constructor(){this.type="ShapePath",this.color=new we,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Gr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,a){return this.currentPath.bezierCurveTo(e,t,n,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const x=[];for(let y=0,v=p.length;y<v;y++){const I=p[y],M=new Dn;M.curves=I.curves,x.push(M)}return x}function n(p,x){const y=x.length;let v=!1;for(let I=y-1,M=0;M<y;I=M++){let T=x[I],R=x[M],w=R.x-T.x,S=R.y-T.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(T=x[M],w=-w,R=x[I],S=-S),p.y<T.y||p.y>R.y)continue;if(p.y===T.y){if(p.x===T.x)return!0}else{const P=S*(p.x-T.x)-w*(p.y-T.y);if(P===0)return!0;if(P<0)continue;v=!v}}else{if(p.y!==T.y)continue;if(R.x<=p.x&&p.x<=T.x||T.x<=p.x&&p.x<=R.x)return!0}}return v}const s=qn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new Dn,l.curves=o.curves,c.push(l),c;let h=!s(r[0].getPoints());h=e?!h:h;const d=[],u=[];let f=[],m=0,_;u[m]=void 0,f[m]=[];for(let p=0,x=r.length;p<x;p++)o=r[p],_=o.getPoints(),a=s(_),a=e?!a:a,a?(!h&&u[m]&&m++,u[m]={s:new Dn,p:_},u[m].s.curves=o.curves,h&&m++,f[m]=[]):f[m].push({h:o,p:_[0]});if(!u[0])return t(r);if(u.length>1){let p=!1,x=0;for(let y=0,v=u.length;y<v;y++)d[y]=[];for(let y=0,v=u.length;y<v;y++){const I=f[y];for(let M=0;M<I.length;M++){const T=I[M];let R=!0;for(let w=0;w<u.length;w++)n(T.p,u[w].p)&&(y!==w&&x++,R?(R=!1,d[w].push(T)):p=!0);R&&d[y].push(T)}}x>0&&p===!1&&(f=d)}let g;for(let p=0,x=u.length;p<x;p++){l=u[p].s,c.push(l),g=f[p];for(let y=0,v=g.length;y<v;y++)l.holes.push(g[y].h)}return c}}class _p extends jn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class IM extends Nn{constructor(e=1,t=1,n=1,s={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...s,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jo);const PM=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Bc,AddEquation:Ii,AddOperation:Wu,AdditiveAnimationBlendMode:Zc,AdditiveBlending:Ks,AgXToneMapping:Zu,AlphaFormat:Gc,AlwaysCompare:df,AlwaysDepth:uo,AlwaysStencilFunc:Ec,AmbientLight:Mh,AnimationAction:pp,AnimationClip:Zr,AnimationLoader:Dx,AnimationMixer:oM,AnimationObjectGroup:rM,AnimationUtils:Rx,ArcCurve:Of,ArrayCamera:Cf,ArrowHelper:AM,AttachedBindMode:wc,Audio:up,AudioAnalyser:Zx,AudioContext:Sh,AudioListener:$x,AudioLoader:Gx,AxesHelper:CM,BackSide:an,BasicDepthPacking:tf,BasicShadowMap:Rp,BatchedMesh:Df,Bone:oh,BooleanKeyframeTrack:Ms,Box2:fM,Box3:on,Box3Helper:EM,BoxGeometry:On,BoxHelper:wM,BufferAttribute:_t,BufferGeometry:je,BufferGeometryLoader:dp,ByteType:zc,Cache:ui,Camera:ll,CameraHelper:bM,CanvasTexture:Uf,CapsuleGeometry:Pi,CatmullRomCurve3:Ir,CineonToneMapping:Yu,CircleGeometry:Jn,ClampToEdgeWrapping:Tn,Clock:bh,Color:we,ColorKeyframeTrack:_h,ColorManagement:ct,CompressedArrayTexture:jy,CompressedCubeTexture:Qy,CompressedTexture:gl,CompressedTextureLoader:Nx,ConeGeometry:vl,ConstantAlphaFactor:Hu,ConstantColorFactor:ku,Controls:_p,CubeCamera:xf,CubeReflectionMapping:_i,CubeRefractionMapping:Di,CubeTexture:na,CubeTextureLoader:Ux,CubeUVReflectionMapping:tr,CubicBezierCurve:hh,CubicBezierCurve3:Ff,CubicInterpolant:tp,CullFaceBack:Mc,CullFaceFront:wu,CullFaceFrontBack:Cp,CullFaceNone:bu,Curve:Fn,CurvePath:kf,CustomBlending:Eu,CustomToneMapping:qu,CylinderGeometry:An,Cylindrical:uM,Data3DTexture:jc,DataArrayTexture:al,DataTexture:Yn,DataTextureLoader:Ox,DataUtils:Vm,DecrementStencilOp:Gp,DecrementWrapStencilOp:Xp,DefaultLoadingManager:sp,DepthFormat:cs,DepthStencilFormat:ms,DepthTexture:nh,DetachedBindMode:Ju,DirectionalLight:Zo,DirectionalLightHelper:SM,DiscreteInterpolant:np,DodecahedronGeometry:yl,DoubleSide:Ct,DstAlphaFactor:Nu,DstColorFactor:Ou,DynamicCopyUsage:am,DynamicDrawUsage:em,DynamicReadUsage:im,EdgesGeometry:zf,EllipseCurve:_l,EqualCompare:of,EqualDepth:po,EqualStencilFunc:Zp,EquirectangularReflectionMapping:fs,EquirectangularRefractionMapping:Ur,Euler:Sn,EventDispatcher:jn,ExtrudeGeometry:aa,FileLoader:yi,Float16BufferAttribute:qm,Float32BufferAttribute:De,FloatType:mn,Fog:sa,FogExp2:dl,FramebufferTexture:Jy,FrontSide:gi,Frustum:ia,GLBufferAttribute:dM,GLSL1:lm,GLSL3:Tc,GreaterCompare:lf,GreaterDepth:go,GreaterEqualCompare:hf,GreaterEqualDepth:mo,GreaterEqualStencilFunc:Qp,GreaterStencilFunc:Jp,GridHelper:xM,Group:_e,HalfFloatType:nr,HemisphereLight:yh,HemisphereLightHelper:yM,IcosahedronGeometry:Zn,ImageBitmapLoader:Vx,ImageLoader:Kr,ImageUtils:mf,IncrementStencilOp:Vp,IncrementWrapStencilOp:Wp,InstancedBufferAttribute:er,InstancedBufferGeometry:hp,InstancedInterleavedBuffer:hM,InstancedMesh:Vr,Int16BufferAttribute:$m,Int32BufferAttribute:Ym,Int8BufferAttribute:Gm,IntType:Qo,InterleavedBuffer:ul,InterleavedBufferAttribute:gs,Interpolant:ca,InterpolateDiscrete:Fr,InterpolateLinear:Wo,InterpolateSmooth:ao,InvertStencilOp:$p,KeepStencilOp:ji,KeyframeTrack:Bn,LOD:Pf,LatheGeometry:ra,Layers:ol,LessCompare:af,LessDepth:fo,LessEqualCompare:Kc,LessEqualDepth:us,LessEqualStencilFunc:Kp,LessStencilFunc:qp,Light:Fi,LightProbe:cp,Line:Ni,Line3:pM,LineBasicMaterial:cn,LineCurve:dh,LineCurve3:Bf,LineDashedMaterial:jf,LineLoop:Nf,LineSegments:Qn,LinearFilter:zt,LinearInterpolant:gh,LinearMipMapLinearFilter:Dp,LinearMipMapNearestFilter:Lp,LinearMipmapLinearFilter:Xn,LinearMipmapNearestFilter:br,LinearSRGBColorSpace:ys,LinearToneMapping:Xu,LinearTransfer:ta,Loader:gn,LoaderUtils:Dc,LoadingManager:vh,LoopOnce:ju,LoopPingPong:ef,LoopRepeat:Qu,LuminanceAlphaFormat:$c,LuminanceFormat:Xc,MOUSE:os,Material:en,MaterialLoader:wl,MathUtils:uf,Matrix2:Ah,Matrix3:Je,Matrix4:$e,MaxEquation:Ru,Mesh:z,MeshBasicMaterial:Se,MeshDepthMaterial:ih,MeshDistanceMaterial:sh,MeshLambertMaterial:Kf,MeshMatcapMaterial:Jf,MeshNormalMaterial:Zf,MeshPhongMaterial:Yf,MeshPhysicalMaterial:li,MeshStandardMaterial:ge,MeshToonMaterial:qf,MinEquation:Cu,MirroredRepeatWrapping:Or,MixOperation:Gu,MultiplyBlending:bc,MultiplyOperation:Qr,NearestFilter:qt,NearestMipMapLinearFilter:Pp,NearestMipMapNearestFilter:Ip,NearestMipmapLinearFilter:Gs,NearestMipmapNearestFilter:kc,NeutralToneMapping:Ku,NeverCompare:rf,NeverDepth:ho,NeverStencilFunc:Yp,NoBlending:fi,NoColorSpace:hi,NoToneMapping:pi,NormalAnimationBlendMode:rl,NormalBlending:ls,NotEqualCompare:cf,NotEqualDepth:_o,NotEqualStencilFunc:jp,NumberKeyframeTrack:Yr,Object3D:ot,ObjectLoader:zx,ObjectSpaceNormalMap:sf,OctahedronGeometry:oa,OneFactor:Pu,OneMinusConstantAlphaFactor:Vu,OneMinusConstantColorFactor:zu,OneMinusDstAlphaFactor:Uu,OneMinusDstColorFactor:Fu,OneMinusSrcAlphaFactor:co,OneMinusSrcColorFactor:Du,OrthographicCamera:cl,PCFShadowMap:Oc,PCFSoftShadowMap:Fc,PMREMGenerator:Xo,Path:Gr,PerspectiveCamera:Xt,Plane:ci,PlaneGeometry:Me,PlaneHelper:TM,PointLight:Jr,PointLightHelper:_M,Points:lh,PointsMaterial:ml,PolarGridHelper:MM,PolyhedronGeometry:Oi,PositionalAudio:qx,PropertyBinding:ht,PropertyMixer:fp,QuadraticBezierCurve:uh,QuadraticBezierCurve3:fh,Quaternion:jt,QuaternionKeyframeTrack:ha,QuaternionLinearInterpolant:ip,RED_GREEN_RGTC2_Format:Vo,RED_RGTC1_Format:qc,REVISION:Jo,RGBADepthPacking:nf,RGBAFormat:rn,RGBAIntegerFormat:sl,RGBA_ASTC_10x10_Format:Oo,RGBA_ASTC_10x5_Format:Do,RGBA_ASTC_10x6_Format:No,RGBA_ASTC_10x8_Format:Uo,RGBA_ASTC_12x10_Format:Fo,RGBA_ASTC_12x12_Format:Bo,RGBA_ASTC_4x4_Format:Eo,RGBA_ASTC_5x4_Format:To,RGBA_ASTC_5x5_Format:Ao,RGBA_ASTC_6x5_Format:Co,RGBA_ASTC_6x6_Format:Ro,RGBA_ASTC_8x5_Format:Io,RGBA_ASTC_8x6_Format:Po,RGBA_ASTC_8x8_Format:Lo,RGBA_BPTC_Format:Cr,RGBA_ETC2_EAC_Format:wo,RGBA_PVRTC_2BPPV1_Format:Mo,RGBA_PVRTC_4BPPV1_Format:xo,RGBA_S3TC_DXT1_Format:Er,RGBA_S3TC_DXT3_Format:Tr,RGBA_S3TC_DXT5_Format:Ar,RGBDepthPacking:Bp,RGBFormat:Wc,RGBIntegerFormat:Np,RGB_BPTC_SIGNED_Format:ko,RGB_BPTC_UNSIGNED_Format:zo,RGB_ETC1_Format:So,RGB_ETC2_Format:bo,RGB_PVRTC_2BPPV1_Format:yo,RGB_PVRTC_4BPPV1_Format:vo,RGB_S3TC_DXT1_Format:wr,RGDepthPacking:kp,RGFormat:Yc,RGIntegerFormat:il,RawShaderMaterial:$f,Ray:xs,Raycaster:mp,RectAreaLight:op,RedFormat:nl,RedIntegerFormat:ea,ReinhardToneMapping:$u,RenderTarget:gf,RepeatWrapping:Wn,ReplaceStencilOp:Hp,ReverseSubtractEquation:Au,RingGeometry:la,SIGNED_RED_GREEN_RGTC2_Format:Go,SIGNED_RED_RGTC1_Format:Ho,SRGBColorSpace:Yt,SRGBTransfer:vt,Scene:rh,ShaderChunk:it,ShaderLib:Ln,ShaderMaterial:Un,ShadowMaterial:Xf,Shape:Dn,ShapeGeometry:vs,ShapePath:RM,ShapeUtils:qn,ShortType:Hc,Skeleton:pl,SkeletonHelper:gM,SkinnedMesh:Lf,Source:ss,Sphere:Qt,SphereGeometry:ln,Spherical:Uc,SphericalHarmonics3:lp,SplineCurve:ph,SpotLight:ap,SpotLightHelper:mM,Sprite:ah,SpriteMaterial:fl,SrcAlphaFactor:lo,SrcAlphaSaturateFactor:Bu,SrcColorFactor:Lu,StaticCopyUsage:rm,StaticDrawUsage:kr,StaticReadUsage:nm,StereoCamera:Wx,StreamCopyUsage:om,StreamDrawUsage:tm,StreamReadUsage:sm,StringKeyframeTrack:Ss,SubtractEquation:Tu,SubtractiveBlending:Sc,TOUCH:ts,TangentSpaceNormalMap:Ui,TetrahedronGeometry:Ml,Texture:Lt,TextureLoader:rp,TextureUtils:Py,TorusGeometry:$t,TorusKnotGeometry:Sl,Triangle:pn,TriangleFanDrawMode:Fp,TriangleStripDrawMode:Op,TrianglesDrawMode:Up,TubeGeometry:bl,UVMapping:jo,Uint16BufferAttribute:Qc,Uint32BufferAttribute:eh,Uint8BufferAttribute:Wm,Uint8ClampedBufferAttribute:Xm,Uniform:Th,UniformsGroup:cM,UniformsLib:pe,UniformsUtils:yf,UnsignedByteType:Kn,UnsignedInt248Type:ps,UnsignedInt5999Type:Vc,UnsignedIntType:vi,UnsignedShort4444Type:el,UnsignedShort5551Type:tl,UnsignedShortType:Js,VSMShadowMap:Vn,Vector2:J,Vector3:E,Vector4:dt,VectorKeyframeTrack:qr,VideoTexture:Ky,WebGL3DRenderTarget:Lm,WebGLArrayRenderTarget:Pm,WebGLCoordinateSystem:$n,WebGLCubeRenderTarget:Mf,WebGLMultipleRenderTargets:IM,WebGLRenderTarget:Nn,WebGLRenderer:Rf,WebGLUtils:Af,WebGPUCoordinateSystem:zr,WireframeGeometry:Wf,WrapAroundEnding:Br,ZeroCurvatureEnding:ns,ZeroFactor:Iu,ZeroSlopeEnding:is,ZeroStencilOp:zp,createCanvasElement:pf},Symbol.toStringTag,{value:"Module"})),gu={type:"change"},Ch={type:"start"},vp={type:"end"},so=new xs,_u=new ci,LM=Math.cos(70*uf.DEG2RAD),kt=new E,un=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pc=1e-6;class DM extends _p{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.enabled=!0,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:os.ROTATE,MIDDLE:os.DOLLY,RIGHT:os.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new jt,this._lastTargetPosition=new E,this._quat=new jt().setFromUnitVectors(e.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Uc,this._sphericalDelta=new Uc,this._scale=1,this._panOffset=new E,this._rotateStart=new J,this._rotateEnd=new J,this._rotateDelta=new J,this._panStart=new J,this._panEnd=new J,this._panDelta=new J,this._dollyStart=new J,this._dollyEnd=new J,this._dollyDelta=new J,this._dollyDirection=new E,this._mouse=new J,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=UM.bind(this),this._onPointerDown=NM.bind(this),this._onPointerUp=OM.bind(this),this._onContextMenu=GM.bind(this),this._onMouseWheel=kM.bind(this),this._onKeyDown=zM.bind(this),this._onTouchStart=HM.bind(this),this._onTouchMove=VM.bind(this),this._onMouseDown=FM.bind(this),this._onMouseMove=BM.bind(this),this._interceptControlDown=WM.bind(this),this._interceptControlUp=XM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gu),this.update(),this.state=xt.NONE}update(e=null){const t=this.object.position;kt.copy(t).sub(this.target),kt.applyQuaternion(this._quat),this._spherical.setFromVector3(kt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=un:n>Math.PI&&(n-=un),s<-Math.PI?s+=un:s>Math.PI&&(s-=un),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(kt.setFromSpherical(this._spherical),kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=kt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new E(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new E(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(so.origin.copy(this.object.position),so.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(so.direction))<LM?this.object.lookAt(this.target):(_u.setFromNormalAndCoplanarPoint(this.object.up,this.target),so.intersectPlane(_u,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>pc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pc||this._lastTargetPosition.distanceToSquared(this.target)>pc?(this.dispatchEvent(gu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){kt.setFromMatrixColumn(t,0),kt.multiplyScalar(-e),this._panOffset.add(kt)}_panUp(e,t){this.screenSpacePanning===!0?kt.setFromMatrixColumn(t,1):(kt.setFromMatrixColumn(t,0),kt.crossVectors(this.object.up,kt)),kt.multiplyScalar(e),this._panOffset.add(kt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;kt.copy(s).sub(this.target);let r=kt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(un*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-un*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new J,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function NM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function UM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function OM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vp),this.state=xt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function FM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xt.DOLLY;break;case os.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}break;case os.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Ch)}function BM(i){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function kM(i){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(i.preventDefault(),this.dispatchEvent(Ch),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(vp))}function zM(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function HM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=xt.TOUCH_ROTATE;break;case ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xt.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Ch)}function VM(i){switch(this._trackPointer(i),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xt.NONE}}function GM(i){this.enabled!==!1&&i.preventDefault()}function WM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function XM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $M(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new je;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const d=[];for(let u=0;u<i.length;++u){const f=i[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=vu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][u]);const m=vu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function vu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new _t(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<t;m++){const _=h.getComponent(u,m);o.setComponent(u+d,m,_)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}const ut='"Songti SC", "STSong", "Times New Roman", serif',at='"Helvetica Neue", "PingFang SC", Arial, sans-serif',Ri={parchment:15261127,gold:11767381,goldLight:14204042,green:3101763,greenDeep:1654066,greenLight:10335907,mint:14411738,ink:3418913};function wt(i,e,t,n=!0){const s=document.createElement("canvas");s.width=i,s.height=e;const r=s.getContext("2d");t(r,i,e);const a=new Uf(s);return n&&(a.colorSpace=Yt),a.anisotropy=8,a}function ds(i,e,t,n,s,r){const a=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(e+a,t),i.arcTo(e+n,t,e+n,t+s,a),i.arcTo(e+n,t+s,e,t+s,a),i.arcTo(e,t+s,e,t,a),i.arcTo(e,t,e+n,t,a),i.closePath()}function YM(){return wt(512,512,(i,e,t)=>{i.fillStyle="#f1eadb",i.fillRect(0,0,e,t);for(let n=0;n<5e3;n++){const s=Math.random()*20-10;i.fillStyle=`rgba(${165+s},${148+s},${118+s},.06)`,i.fillRect(Math.random()*e,Math.random()*t,1.5,1.5)}})}function qM(){return wt(1024,1024,(i,e,t)=>{i.fillStyle="#a8794a",i.fillRect(0,0,e,t);for(let n=0;n<t;n+=4){const s=Math.sin(n*.055)*11+Math.sin(n*.31)*4;i.fillStyle=`rgba(${85+s},${48+s*.4},${24+s*.2},.18)`,i.fillRect(0,n,e,2)}for(let n=0;n<55;n++){i.strokeStyle=`rgba(70,40,18,${.04+Math.random()*.08})`,i.lineWidth=.6+Math.random()*1.8,i.beginPath();let s=Math.random()*e;i.moveTo(s,0);for(let r=0;r<t;r+=40)i.lineTo(s+Math.sin(r*.012+n)*10,r);i.stroke()}i.strokeStyle="rgba(248,224,185,.16)",i.lineWidth=2;for(let n=0;n<t;n+=160)i.beginPath(),i.moveTo(0,n),i.lineTo(e,n),i.stroke()})}function ZM(){return wt(768,768,(i,e,t)=>{i.fillStyle="#eee7d8",i.fillRect(0,0,e,t);const n=["#d3c6ad","#b6aa93","#d8cfbf","#b89562","#8b9a8a"];for(let s=0;s<1600;s++){i.fillStyle=n[Math.random()*n.length|0],i.globalAlpha=.18+Math.random()*.3;const r=Math.random()*e,a=Math.random()*t,o=Math.random()*5+1;i.beginPath(),i.ellipse(r,a,o*(1+Math.random()),o,Math.random()*3,0,7),i.fill()}i.globalAlpha=1})}function KM(){return wt(1024,1024,(i,e,t)=>{i.fillStyle="#d8d1c3",i.fillRect(0,0,e,t);const n=128;for(let s=0;s<t;s+=n)for(let r=0;r<e;r+=n){i.fillStyle=Math.random()>.5?"#ded7c9":"#d4ccbd",i.fillRect(r+3,s+3,n-6,n-6),i.strokeStyle="rgba(122,113,100,.16)",i.lineWidth=1,i.strokeRect(r+4,s+4,n-8,n-8);for(let a=0;a<8;a++)i.fillStyle=`rgba(125,116,101,${Math.random()*.04})`,i.fillRect(r+Math.random()*n,s+Math.random()*n,6,6)}i.strokeStyle="rgba(255,255,255,.25)",i.lineWidth=2,i.strokeRect(0,0,e,t)})}function JM(){return wt(1024,1024,(i,e,t)=>{i.fillStyle="#777a76",i.fillRect(0,0,e,t);for(let n=0;n<18e3;n++){const s=80+Math.random()*60;i.fillStyle=`rgba(${s},${s},${s-3},${Math.random()*.25})`,i.fillRect(Math.random()*e,Math.random()*t,Math.random()*2.4,Math.random()*2.4)}for(let n=0;n<12;n++){i.strokeStyle=`rgba(60,62,60,${.06+Math.random()*.08})`,i.lineWidth=1+Math.random()*3,i.beginPath();let s=Math.random()*e,r=Math.random()*t;i.moveTo(s,r);for(let a=0;a<10;a++)s+=Math.random()*40-20,r+=Math.random()*40-20,i.lineTo(s,r);i.stroke()}})}function yp(){return wt(2048,1024,(i,e,t)=>{const n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#b7d3df"),n.addColorStop(.32,"#dbe9e7"),n.addColorStop(.56,"#f5f0e4"),n.addColorStop(.75,"#e7e0d2"),n.addColorStop(1,"#c7c3b9"),i.fillStyle=n,i.fillRect(0,0,e,t);const s=i.createRadialGradient(e*.68,t*.32,20,e*.68,t*.32,440);s.addColorStop(0,"rgba(255,247,218,.9)"),s.addColorStop(1,"rgba(255,247,218,0)"),i.fillStyle=s,i.fillRect(0,0,e,t)})}function Dr(i="#8eb79d",e=!0){return wt(256,256,(t,n,s)=>{const r=t.createRadialGradient(128,128,0,128,128,124);r.addColorStop(0,i+"99"),r.addColorStop(.35,i+"50"),r.addColorStop(1,i+"00"),t.fillStyle=r,t.fillRect(0,0,n,s),e&&(t.strokeStyle="#f6efdcbb",t.lineWidth=2,t.beginPath(),t.arc(128,128,80,0,Math.PI*2),t.stroke(),t.strokeStyle=i+"77",t.lineWidth=1,t.beginPath(),t.arc(128,128,96,0,Math.PI*2),t.stroke())})}function bt(i,e={}){const{w:t=1024,h:n=256,color:s="#f6eddb",bg:r="transparent",font:a=ut,size:o=120,weight:l=600,tracking:c=0,y:h=n/2,align:d="center",lineHeight:u=o*1.2,letter:f=!1}=e;return wt(t,n,m=>{r!=="transparent"&&(m.fillStyle=r,m.fillRect(0,0,t,n)),m.font=`${l} ${o}px ${a}`,m.fillStyle=s,m.textAlign=d,m.textBaseline="middle";const _=Array.isArray(i)?i:String(i).split(`
`),g=(_.length-1)*u;c&&!f?_.forEach((p,x)=>{const y=[...p],v=y.map(T=>m.measureText(T).width),I=v.reduce((T,R)=>T+R,0)+c*Math.max(0,y.length-1);let M=d==="center"?(t-I)/2:d==="right"?t-I-30:30;y.forEach((T,R)=>{m.fillText(T,M,h-g/2+x*u),M+=v[R]+c})}):_.forEach((p,x)=>{const y=d==="center"?t/2:d==="right"?t-30:30;m.fillText(p,y,h-g/2+x*u)})})}function jM(){return wt(1600,360,(i,e,t)=>{i.fillStyle="#f5efe1",i.fillRect(0,0,e,t);const n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"rgba(255,255,255,.85)"),n.addColorStop(.5,"rgba(226,210,181,.35)"),n.addColorStop(1,"rgba(189,166,122,.28)"),i.fillStyle=n,i.fillRect(0,0,e,t),i.strokeStyle="#b4935e",i.lineWidth=4,i.strokeRect(14,14,e-28,t-28),i.strokeStyle="rgba(47,84,67,.5)",i.lineWidth=1.5,i.strokeRect(28,28,e-56,t-56),i.fillStyle="#31281f",i.textAlign="left",i.textBaseline="middle",i.font=`600 126px ${ut}`,i.fillText("100年润发",70,164),i.font=`500 32px ${at}`,i.fillStyle="#8a6c40",i.letterSpacing="13px",i.fillText("CENTAINE",74,264),i.textAlign="right",i.fillStyle="#2f5443",i.font=`500 48px ${at}`,i.fillText("NICE TO MEET YOU",e-68,158),i.fillStyle="#8d7d65",i.font=`400 26px ${ut}`,i.fillText("不惧油，自在见。",e-70,226),i.strokeStyle="#b4935e",i.lineWidth=1,i.beginPath(),i.moveTo(e-520,112),i.lineTo(e-520,268),i.stroke()})}function QM(){return wt(640,960,(i,e,t)=>{i.fillStyle="#193d32",i.fillRect(0,0,e,t);const n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"rgba(94,142,112,.35)"),n.addColorStop(.6,"rgba(11,35,27,0)"),n.addColorStop(1,"rgba(10,30,22,.5)"),i.fillStyle=n,i.fillRect(0,0,e,t),i.strokeStyle="#c5a366",i.lineWidth=3,i.strokeRect(26,26,e-52,t-52),i.strokeStyle="rgba(242,232,206,.28)",i.lineWidth=1,i.strokeRect(44,44,e-88,t-88),i.fillStyle="#f2e8d0",i.textAlign="center",i.textBaseline="middle",i.font=`600 100px ${ut}`,i.fillText("100年",e/2,168),i.fillText("润发",e/2,286),i.font=`500 34px ${at}`,i.fillStyle="#cfb683",i.letterSpacing="10px",i.fillText("CENTAINE",e/2,358),i.strokeStyle="rgba(197,163,102,.6)",i.lineWidth=1.5,i.beginPath(),i.moveTo(150,416),i.lineTo(e-150,416),i.stroke(),i.fillStyle="#d8e3d1",i.font=`400 34px ${at}`,i.fillText("NICE TO MEET YOU",e/2,490),i.fillStyle="#d8e3d1",i.font=`400 34px ${ut}`,i.fillText("不惧油，自在见。",e/2,548),i.fillStyle="rgba(242,232,208,.65)",i.font=`400 22px ${at}`,i.letterSpacing="5px",i.fillText("BRAND EXPERIENCE · 2F",e/2,812)})}function eS(){return wt(1400,240,(i,e,t)=>{i.fillStyle="rgba(247,241,229,.93)",ds(i,0,0,e,t,20),i.fill(),i.strokeStyle="#b3925d",i.lineWidth=3,i.stroke(),i.fillStyle="#2c261e",i.textAlign="center",i.textBaseline="middle",i.font=`600 103px ${ut}`,i.fillText("100年润发",510,103),i.font=`500 28px ${at}`,i.fillStyle="#8e7044",i.letterSpacing="10px",i.fillText("CENTAINE",510,181),i.textAlign="left",i.fillStyle="#2f5443",i.font=`500 42px ${at}`,i.fillText("NICE TO MEET YOU",800,102),i.fillStyle="#8d7d65",i.font=`400 30px ${ut}`,i.fillText("不惧油，自在见。",800,164)})}function tS(){return wt(1800,640,(i,e,t)=>{i.clearRect(0,0,e,t),i.fillStyle="#f0e7d7",i.textAlign="center",i.textBaseline="middle",i.font=`500 180px ${at}`,i.letterSpacing="18px",i.fillText("NICE TO MEET YOU",e/2,t/2),i.lineWidth=2,i.strokeStyle="#b7996b",i.strokeText("NICE TO MEET YOU",e/2,t/2)})}function nS(){return wt(1600,640,(i,e,t)=>{i.fillStyle="#f3ecde",i.fillRect(0,0,e,t),i.strokeStyle="#d4c4a8",i.lineWidth=2,i.strokeRect(18,18,e-36,t-36),i.fillStyle="#2f5443",i.font=`600 54px ${ut}`,i.textAlign="left",i.fillText("96H 控油蓬松",68,100),i.fillStyle="#8e7e66",i.font=`400 24px ${at}`,i.letterSpacing="6px",i.fillText("FRESHNESS TIMELINE",70,146),i.strokeStyle="#b3925d",i.lineWidth=3,i.beginPath(),i.moveTo(120,320),i.lineTo(e-120,320),i.stroke(),[["0H","清爽开启"],["24H","轻盈继续"],["48H","从容相见"],["72H","安排自由"],["96H","自在见"]].forEach(([s,r],a)=>{const o=150+a*((e-300)/4);i.beginPath(),i.arc(o,320,17,0,Math.PI*2),i.fillStyle=a===4?"#2f5443":"#f7f1e3",i.fill(),i.strokeStyle="#2f5443",i.lineWidth=3,i.stroke(),i.fillStyle="#2f5443",i.font=`600 31px ${at}`,i.textAlign="center",i.fillText(s,o,380),i.fillStyle="#6e6253",i.font=`400 27px ${ut}`,i.fillText(r,o,426)}),i.fillStyle="#b3a58e",i.font=`400 20px ${at}`,i.textAlign="left",i.fillText("产品资料所列功效指标 · 实际洗护频率视个人头皮状态而定",70,570)})}function iS(){return wt(900,600,(i,e,t)=>{const n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"#173c31"),n.addColorStop(1,"#0f2b23"),i.fillStyle=n,i.fillRect(0,0,e,t),i.strokeStyle="rgba(194,215,199,.25)",i.lineWidth=1,i.strokeRect(22,22,e-44,t-44),i.fillStyle="#c9dcca",i.font=`500 24px ${at}`,i.letterSpacing="6px",i.textAlign="left",i.fillText("SCALP CHECK · AI",58,82),i.fillStyle="#f0e6d1",i.font=`600 56px ${ut}`,i.fillText("头皮状态检测",58,154),i.strokeStyle="rgba(202,220,203,.35)",i.lineWidth=2,i.beginPath(),i.ellipse(240,338,138,110,0,0,Math.PI*2),i.stroke(),i.beginPath(),i.ellipse(240,338,96,72,0,0,Math.PI*2),i.stroke(),i.beginPath(),i.arc(240,338,34,0,Math.PI*2),i.stroke(),[["油脂",68,"#c3a169"],["水油平衡",82,"#99b79f"],["发根支撑",74,"#e3d7be"]].forEach(([r,a,o],l)=>{const c=230+l*105;i.fillStyle="#b9c9b8",i.font=`400 22px ${at}`,i.textAlign="left",i.fillText(r,450,c),i.fillStyle="rgba(255,255,255,.12)",i.fillRect(450,c+20,340,6),i.fillStyle=o,i.fillRect(450,c+20,340*a/100,6),i.fillStyle="#e8dfcc",i.font=`500 20px ${at}`,i.textAlign="right",i.fillText(a+"%",790,c)}),i.fillStyle="#9cb5a1",i.font=`400 20px ${at}`,i.textAlign="left",i.fillText("点击屏幕，开启今日清爽建议 →",58,534)})}function sS(){return wt(1024,256,(i,e,t)=>{i.fillStyle="#2e5343",i.fillRect(0,0,e,t),i.fillStyle="#f1e7d3",i.font=`600 70px ${ut}`,i.textAlign="center",i.textBaseline="middle",i.fillText("控油小茶瓶",e/2,104),i.fillStyle="#cab17e",i.font=`400 26px ${at}`,i.letterSpacing="8px",i.fillText("OIL CONTROL · FIVE DIMENSIONS",e/2,178)})}function rS(){return wt(900,1200,(i,e,t)=>{i.fillStyle="#e9dfcd",i.fillRect(0,0,e,t);const n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#f2eadb"),n.addColorStop(1,"#d9c8ae"),i.fillStyle=n,i.fillRect(0,0,e,t),i.strokeStyle="rgba(126,99,65,.18)",i.lineWidth=1;for(let s=0;s<8;s++)i.beginPath(),i.arc(450,500,170+s*28,0,Math.PI*2),i.stroke();i.strokeStyle="#4a3625",i.lineWidth=3,i.beginPath(),i.arc(450,450,150,Math.PI*.1,Math.PI*.9),i.stroke(),i.fillStyle="rgba(56,39,24,.2)",i.beginPath(),i.arc(450,468,95,0,Math.PI*2),i.fill(),i.fillStyle="#3b2b1d",i.font=`600 56px ${ut}`,i.textAlign="center",i.fillText("东方之美",450,770),i.fillStyle="#8e744f",i.font=`400 22px ${at}`,i.letterSpacing="9px",i.fillText("THE EASTERN CROWN",450,824),i.strokeStyle="#9d8055",i.lineWidth=1,i.beginPath(),i.moveTo(330,870),i.lineTo(570,870),i.stroke(),i.fillStyle="#7a6246",i.font=`400 26px ${ut}`,i.fillText("发髻 · 簪花 · 梳篦 · 步摇",450,928),i.fillStyle="#94744d",i.font=`400 18px ${at}`,i.letterSpacing="5px",i.fillText("ORIGINAL CONCEPT ILLUSTRATION",450,1080)})}function aS(){return wt(1400,700,(i,e,t)=>{i.fillStyle="#ebe2d2",i.fillRect(0,0,e,t),i.fillStyle="#f7f2e7";for(let n=0;n<16;n++){const s=45+n%8*165,r=60+Math.floor(n/8)*270;i.save(),i.translate(s,r),i.rotate((Math.random()-.5)*.09),i.fillRect(0,0,130,190),i.fillStyle=n%3===0?"#dbe7da":n%3===1?"#f2dfc7":"#f7f1e3",i.fillRect(0,0,130,190),i.fillStyle="#7f705b",i.font=`400 15px ${ut}`,i.fillText(["今天见面吧","很高兴遇见你","自在一点","慢慢来"][n%4],18,54),i.fillStyle="#b5a48b",i.font=`400 11px ${at}`,i.fillText("NICE TO MEET YOU",18,150),i.strokeStyle="rgba(80,64,45,.14)",i.strokeRect(0,0,130,190),i.restore(),i.fillStyle="#f7f2e7"}i.fillStyle="rgba(47,84,67,.9)",i.font=`600 42px ${ut}`,i.textAlign="right",i.fillText("写一句话，给现在的自己",e-64,630)})}function oS(){return wt(800,500,(i,e,t)=>{i.fillStyle="#17382d",i.fillRect(0,0,e,t),i.strokeStyle="#cbb07c",i.lineWidth=2,i.strokeRect(22,22,e-44,t-44),i.fillStyle="#dce8d7",i.font=`500 26px ${at}`,i.letterSpacing="7px",i.textAlign="left",i.fillText("100年润发 × KEEP",54,92),i.fillStyle="#f4efdf",i.font=`600 84px ${at}`,i.fillText("MOVE",52,206),i.fillText("FREELY.",52,294),i.fillStyle="#b8cbb8",i.font=`400 27px ${ut}`,i.fillText("跑完步，依然自在见。",56,378),i.strokeStyle="#bda269",i.lineWidth=3,i.beginPath(),i.arc(655,170,86,0,Math.PI*2),i.stroke(),i.fillStyle="#c5a66d",i.font=`500 28px ${at}`,i.textAlign="center",i.fillText("3K / 5K",655,162),i.font=`400 16px ${at}`,i.fillText("WOMEN RUN",655,194)})}function lS(){return wt(700,900,(i,e,t)=>{i.fillStyle="#f4efdf",i.fillRect(0,0,e,t),i.strokeStyle="#2f5443",i.lineWidth=2,i.strokeRect(20,20,e-40,t-40),i.fillStyle="#2f5443",i.textAlign="center",i.font=`600 58px ${ut}`,i.fillText("清爽搭子",e/2,122),i.fillStyle="#9b7e4e",i.font=`400 22px ${at}`,i.letterSpacing="7px",i.fillText("TEA MENU · MEET FOR TEA",e/2,170),i.strokeStyle="#c9b895",i.lineWidth=1,i.beginPath(),i.moveTo(70,210),i.lineTo(e-70,210),i.stroke(),[["高山乌龙","清润回甘",18],["新会青柑","明亮果香",22],["青柑乌龙","清爽搭子限定",26]].forEach(([s,r,a],o)=>{const l=300+o*160;i.textAlign="left",i.fillStyle="#34291f",i.font=`500 36px ${ut}`,i.fillText(s,76,l),i.fillStyle="#8e7f6a",i.font=`400 21px ${at}`,i.fillText(r,76,l+36),i.textAlign="right",i.fillStyle="#2f5443",i.font=`500 30px ${at}`,i.fillText("¥"+a,e-76,l)}),i.textAlign="center",i.fillStyle="#8c785c",i.font=`400 20px ${at}`,i.fillText("购买指定茶饮 · 获赠控油小茶瓶体验装",e/2,810)})}function mc(i){return wt(700,1e3,(e,t,n)=>{if(i==="museum"){e.fillStyle="#e7ddcb",e.fillRect(0,0,t,n),e.fillStyle="#2f5443",e.font=`600 120px ${ut}`,e.textAlign="left",e.fillText("遇见",64,200),e.fillText("东方",64,332),e.fillStyle="#8f7148",e.font=`400 24px ${at}`,e.letterSpacing="8px",e.fillText("MEET THE EAST",68,396),e.strokeStyle="#b19669",e.lineWidth=2,e.beginPath(),e.arc(350,700,230,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(47,84,67,.12)",e.beginPath(),e.arc(350,700,230,0,Math.PI*2),e.fill();for(let s=0;s<8;s++)e.strokeStyle="rgba(126,99,65,.35)",e.beginPath(),e.arc(350,700,55+s*22,0,Math.PI*2),e.stroke()}else i==="tea"?(e.fillStyle="#214839",e.fillRect(0,0,t,n),e.fillStyle="#f2e9d6",e.font=`500 74px ${ut}`,e.fillText("见面",50,170),e.fillText("有茶",50,264),e.fillStyle="#c7b27f",e.font=`400 20px ${at}`,e.letterSpacing="7px",e.fillText("NICE TO MEET YOU",55,116),e.strokeStyle="rgba(242,233,214,.5)",e.lineWidth=2,e.beginPath(),e.moveTo(50,330),e.lineTo(t-50,330),e.stroke(),e.fillStyle="#dce7d8",e.font=`400 26px ${ut}`,e.fillText("一杯茶的时间，",50,396),e.fillText("遇见一个好朋友。",50,440),e.fillStyle="rgba(185,211,187,.24)",e.beginPath(),e.arc(480,750,210,0,Math.PI*2),e.fill(),e.strokeStyle="#c6a66d",e.lineWidth=2,e.beginPath(),e.arc(480,750,150,0,Math.PI*2),e.stroke()):(e.fillStyle="#efdfca",e.fillRect(0,0,t,n),e.fillStyle="#8b3f32",e.font=`600 90px ${ut}`,e.fillText("今天",50,190),e.fillText("见面吧",50,294),e.fillStyle="#5e4938",e.font=`400 25px ${ut}`,e.fillText("好久不见，",54,396),e.fillText("今天见一面。",54,436),e.fillStyle="rgba(47,84,67,.18)",e.beginPath(),e.arc(470,730,200,0,Math.PI*2),e.fill(),e.fillStyle="#2f5443",e.font=`500 22px ${at}`,e.letterSpacing="5px",e.fillText("#NICE TO MEET YOU",54,900))})}function cS(){return wt(1200,980,(i,e,t)=>{const n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"#f8f1e3"),n.addColorStop(.6,"#efe4d1"),n.addColorStop(1,"#dbe5d8"),i.fillStyle=n,i.fillRect(0,0,e,t),i.strokeStyle="#b08c55",i.lineWidth=4,i.strokeRect(24,24,e-48,t-48),i.strokeStyle="rgba(47,84,67,.25)",i.lineWidth=1.5,i.strokeRect(40,40,e-80,t-80),i.fillStyle="#2f5443",i.font=`500 24px ${at}`,i.letterSpacing="9px",i.textAlign="left",i.fillText("MEET YOUR FRESHNESS",72,104),i.fillStyle="#372d22",i.textAlign="center",i.font=`600 280px ${ut}`,i.fillText("96",e*.43,446),i.fillStyle="#2f5443",i.font=`600 60px ${ut}`,i.fillText("小时",e*.63,386),i.font=`600 76px ${ut}`,i.fillText("控油蓬松",e*.5,530),i.fillStyle="#8b7655",i.font=`400 24px ${ut}`,i.fillText("冷萃国风控油蓬松洗发露 · 480ml",e*.5,589),i.strokeStyle="rgba(47,84,67,.24)",i.lineWidth=1,i.beginPath(),i.moveTo(180,636),i.lineTo(e-180,636),i.stroke(),i.fillStyle="rgba(47,84,67,.1)",ds(i,430,680,340,210,45),i.fill(),i.fillStyle="rgba(47,84,67,.3)",ds(i,505,650,190,44,10),i.fill(),i.fillStyle="rgba(47,84,67,.45)",ds(i,575,620,50,40,9),i.fill(),i.fillStyle="#f8f1e3",i.font=`500 24px ${at}`,i.letterSpacing="5px",i.textAlign="center",i.fillText("OIL CONTROL · 5D FORMULA",e*.5,909)})}function hS(){return wt(1800,1e3,(i,e,t)=>{const n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"#f9f3e6"),n.addColorStop(.58,"#eee3d1"),n.addColorStop(1,"#d7e3d6"),i.fillStyle=n,i.fillRect(0,0,e,t),i.strokeStyle="#b08c55",i.lineWidth=5,i.strokeRect(28,28,e-56,t-56),i.strokeStyle="rgba(47,84,67,.2)",i.lineWidth=1.5,i.strokeRect(46,46,e-92,t-92),i.textAlign="left",i.fillStyle="#2f5443",i.font=`500 25px ${at}`,i.letterSpacing="9px",i.fillText("2F · MEET YOUR FRIENDS",90,122),i.fillStyle="#2f5443",i.font=`600 190px ${at}`,i.letterSpacing="-10px",i.fillText("NICE",83,352),i.font=`400 126px ${at}`,i.letterSpacing="14px",i.fillText("TO MEET",90,486),i.font=`600 210px ${ut}`,i.letterSpacing="-4px",i.fillStyle="#b08c55",i.fillText("YOU.",83,708),i.fillStyle="#5e5344",i.font=`400 42px ${ut}`,i.letterSpacing="6px",i.fillText("好久不见，今天见面吧。",92,832),i.fillStyle="#2f5443",i.font=`500 23px ${at}`,i.letterSpacing="8px",i.fillText("#NICE TO MEET YOU   #今天见面吧",92,902);const s=(r,a,o,l)=>{i.fillStyle=l,i.beginPath(),i.arc(r,a,52*o,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(r,a+148*o,108*o,122*o,0,Math.PI,0),i.fill()};s(1490,500,1,"rgba(47,84,67,.82)"),s(1640,570,.82,"rgba(176,140,85,.65)"),i.strokeStyle="rgba(250,246,236,.6)",i.lineWidth=3,i.beginPath(),i.arc(1490,500,75,0,Math.PI*2),i.stroke(),i.beginPath(),i.arc(1640,570,62,0,Math.PI*2),i.stroke()})}function dS(){return wt(900,1e3,(i,e,t)=>{i.fillStyle="#1e4437",i.fillRect(0,0,e,t);const n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"rgba(110,150,120,.35)"),n.addColorStop(.6,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,.28)"),i.fillStyle=n,i.fillRect(0,0,e,t),i.strokeStyle="#c1a46d",i.lineWidth=4,i.strokeRect(24,24,e-48,t-48),i.fillStyle="#e9dec6",i.font=`500 24px ${at}`,i.letterSpacing="8px",i.textAlign="center",i.fillText("FRESHNESS MEETS TEA",e/2,92),i.font=`600 128px ${ut}`,i.fillText("清爽搭子",e/2,294),i.fillStyle="#d6bc88",i.font=`600 112px ${ut}`,i.fillText("见面有茶",e/2,430),i.strokeStyle="rgba(233,222,198,.3)",i.lineWidth=1,i.beginPath(),i.moveTo(170,486),i.lineTo(e-170,486),i.stroke(),i.fillStyle="#f4ecdd",ds(i,260,558,170,270,18),i.fill(),i.fillStyle="#f4ecdd",ds(i,480,608,140,220,16),i.fill(),i.fillStyle="#2f5443",i.fillRect(250,650,190,98),i.fillRect(472,690,156,82),i.fillStyle="#f2e7d4",i.font=`500 28px ${ut}`,i.textAlign="center",i.fillText("NICE TO",345,696),i.fillText("MEET YOU",345,729),i.font=`500 24px ${ut}`,i.fillText("清爽搭子",550,731),i.fillStyle="#d8c595",i.font=`400 18px ${at}`,i.letterSpacing="5px",i.fillText("100年润发 × 霸王茶姬 · 拟合作创意",e/2,933)})}function uS(){return wt(1024,1024,(i,e,t)=>{i.clearRect(0,0,e,t);const n=(r,a,o,l,c,h)=>{const d=i.createLinearGradient(r,a,o,l);d.addColorStop(0,"rgba(255,255,255,0)"),d.addColorStop(.35,`rgba(255,255,255,${h})`),d.addColorStop(.6,`rgba(220,239,235,${h*.55})`),d.addColorStop(1,"rgba(255,255,255,0)"),i.strokeStyle=d,i.lineWidth=c,i.lineCap="round",i.beginPath(),i.moveTo(r,a),i.lineTo(o,l),i.stroke()};n(-80,860,780,40,90,.5),n(210,1040,900,190,34,.34),n(530,980,1110,360,14,.26);const s=i.createLinearGradient(0,0,0,t);s.addColorStop(0,"rgba(205,231,235,.22)"),s.addColorStop(.22,"rgba(255,255,255,.04)"),s.addColorStop(.8,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,e,t)})}function fS(i=0){return wt(768,768,(e,t,n)=>{e.clearRect(0,0,t,n);const s=[["#3d5d3c","#55764a","#6b8b55","#7e9a63","#334f36"],["#466343","#5f7d4d","#78935b","#8ba66b","#365039"],["#355235","#4d7047","#688659","#7d9863","#2d472f"]],r=s[i%s.length];for(let o=0;o<26;o++){const l=Math.random()*Math.PI*2,c=Math.pow(Math.random(),.65)*270,h=t/2+Math.cos(l)*c,d=n/2+Math.sin(l)*c*.75,u=34+Math.random()*62,f=16+Math.random()*28,m=Math.random()*Math.PI*2;e.save(),e.translate(h,d),e.rotate(m);const _=e.createLinearGradient(-u,0,u,0),g=r[Math.random()*r.length|0];_.addColorStop(0,g),_.addColorStop(.55,r[Math.random()*r.length|0]),_.addColorStop(1,"#2b422f"),e.fillStyle=_,e.beginPath(),e.ellipse(0,0,u,f,0,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(221,235,206,.26)",e.lineWidth=1,e.beginPath(),e.moveTo(-u*.85,0),e.lineTo(u*.85,0),e.stroke();for(let p=-2;p<=2;p++)e.beginPath(),e.moveTo(-u*.4,0),e.lineTo(u*.2,p*f*.35),e.stroke();e.restore()}e.globalCompositeOperation="destination-in";const a=e.createRadialGradient(t/2,n/2,120,t/2,n/2,380);a.addColorStop(0,"rgba(0,0,0,1)"),a.addColorStop(.8,"rgba(0,0,0,.95)"),a.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=a,e.fillRect(0,0,t,n),e.globalCompositeOperation="source-over"})}function Vs(i,e){const t=new rp().load(i,e);return t.colorSpace=Yt,t.anisotropy=8,t}function pS(i){const e=yp();e.mapping=fs;const t=new Xo(i);t.compileEquirectangularShader();const n=t.fromEquirectangular(e).texture;return e.dispose(),t.dispose(),n}function mS(i){const e=qM();e.wrapS=e.wrapT=Wn,e.repeat.set(2,2);const t=ZM();t.wrapS=t.wrapT=Wn,t.repeat.set(2,2);const n=KM();n.wrapS=n.wrapT=Wn,n.repeat.set(10,10);const s=JM();s.wrapS=s.wrapT=Wn,s.repeat.set(5,3);const r=YM();r.wrapS=r.wrapT=Wn,r.repeat.set(2,2);const a={cream:new ge({color:15391942,roughness:.68,metalness:.02,envMapIntensity:.7}),creamLight:new ge({color:16314594,roughness:.56,metalness:.02}),creamWarm:new ge({color:15326404,roughness:.55}),parchment:new ge({color:Ri.parchment,roughness:.78}),gold:new ge({color:Ri.gold,roughness:.26,metalness:.76,envMapIntensity:1.2}),goldLight:new ge({color:Ri.goldLight,roughness:.3,metalness:.65}),brass:new ge({color:10189383,roughness:.24,metalness:.8}),green:new ge({color:Ri.green,roughness:.42,metalness:.18}),greenDeep:new ge({color:Ri.greenDeep,roughness:.35,metalness:.15}),greenLight:new ge({color:Ri.greenLight,roughness:.55}),mint:new ge({color:Ri.mint,roughness:.7}),ink:new ge({color:Ri.ink,roughness:.52}),white:new ge({color:16249832,roughness:.48}),warmWhite:new ge({color:16774104,roughness:.65}),terrazzo:new ge({map:t,color:16777215,roughness:.4}),wood:new ge({map:e,color:13081449,roughness:.46}),woodDark:new ge({map:e,color:8281149,roughness:.5}),paving:new ge({map:n,color:14143424,roughness:.82}),asphalt:new ge({map:s,color:16777215,roughness:.92}),curb:new ge({color:12433064,roughness:.85}),metal:new ge({color:6710108,roughness:.28,metalness:.85}),darkMetal:new ge({color:3422260,roughness:.32,metalness:.8}),mirror:new ge({color:14476510,roughness:.04,metalness:1,envMapIntensity:1.8}),black:new ge({color:1514521,roughness:.35}),paper:new ge({map:r,roughness:.82}),screenDark:new ge({color:1056024,roughness:.25,metalness:.1}),warmScreen:new ge({color:16773586,emissive:16768164,emissiveIntensity:1.1,roughness:.4}),glowWarm:new Se({color:16772034}),glass:new li({color:14150116,metalness:.12,roughness:.045,transparent:!0,opacity:.13,side:Ct,depthWrite:!1,envMapIntensity:1.8,clearcoat:1,clearcoatRoughness:.03}),glassGreen:new li({color:10467750,metalness:.08,roughness:.12,transparent:!0,opacity:.24,side:Ct,depthWrite:!1,envMapIntensity:1.2,clearcoat:.8}),displayGlass:new li({color:15332588,transparent:!0,opacity:.16,roughness:.02,metalness:.02,side:Ct,depthWrite:!1,envMapIntensity:2.2}),amber:new li({color:11105846,roughness:.2,metalness:.04,transparent:!0,opacity:.95,transmission:.12,thickness:.45,ior:1.45,side:Ct,attenuationColor:new we(14134121),attenuationDistance:.8,envMapIntensity:1.2}),amberLight:new li({color:13675896,roughness:.2,metalness:.02,transparent:!0,opacity:.72,transmission:.5,thickness:.22,ior:1.4,side:Ct,envMapIntensity:1.1}),ribbon:new li({color:16183522,transparent:!0,opacity:.48,side:Ct,roughness:.4,metalness:0,transmission:.25,thickness:.03,depthWrite:!1}),water:new li({color:14479336,transparent:!0,opacity:.4,roughness:.03,metalness:.1,transmission:.7,thickness:.12,depthWrite:!1,envMapIntensity:1.4}),foliageA:new ge({color:4745024,roughness:.88,flatShading:!0}),foliageB:new ge({color:6586959,roughness:.86,flatShading:!0}),foliageC:new ge({color:3691834,roughness:.9,flatShading:!0}),trunk:new ge({color:6245689,roughness:.94}),trunkLight:new ge({color:9073752,roughness:.9}),hedge:new ge({color:5205832,roughness:.92,flatShading:!0}),soil:new ge({color:9338209,roughness:.95}),skinA:new ge({color:14134662,roughness:.7}),skinB:new ge({color:12290658,roughness:.7}),clothingA:new ge({color:5204056,roughness:.8}),clothingB:new ge({color:14206116,roughness:.8}),clothingC:new ge({color:9264201,roughness:.8}),clothingD:new ge({color:6318710,roughness:.8})};return a.env=i,a.logoInk=Vs("/assets/logo-ink.png"),a.logoCream=Vs("/assets/logo-cream.png"),a.productFront=Vs("/assets/product-front.png"),a.productBack=Vs("/assets/product-back.png"),a.labelBand=Vs("/assets/label-band.png"),a.labelClean=Vs("/assets/label-clean.png"),a.logoPlaque=jM(),a.sideSign=QM(),a.entrySign=eS(),a.shopWindow=cS(),a.friendsWindow=hS(),a.teaWindow=dS(),a.niceWall=tS(),a.timeline=nS(),a.oilScreen=iS(),a.shelfLabel=sS(),a.messageWall=aS(),a.keepSign=oS(),a.teaMenu=lS(),a.museumArt=rS(),a.posterTea=mc("tea"),a.posterMuseum=mc("museum"),a.posterMeet=mc("meet"),a.glow=Dr("#d6e7cf"),a.glowGold=Dr("#e7c98f"),a.glowTexture=Dr("#bcd8c3"),a.glassSheen=new Se({map:uS(),transparent:!0,opacity:.22,depthWrite:!1,side:Ct,blending:Ks}),a.leafCards=[0,1,2].map(o=>new ge({map:fS(o),alphaTest:.38,side:Ct,roughness:.9,metalness:0})),a.paving.map.repeat.set(10,10),a.asphalt.map.repeat.set(6,3),a}const vr=new E;function En(i,e,t,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;vr.copy(e),vr[n]=0,vr.normalize();const c=.5*a/(a+o),h=1-vr.angleTo(i)/l;return Math.sign(vr[t])===1?h*c:o/(a+o)+c+c*(1-h)}class jr extends On{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new E,l=new E,c=new E(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,m=new E,_=.5/s;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(o.fromArray(h,g),l.copy(o),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[g+0]=c.x*Math.sign(o.x)+l.x*r,h[g+1]=c.y*Math.sign(o.y)+l.y*r,h[g+2]=c.z*Math.sign(o.z)+l.z*r,d[g+0]=l.x,d[g+1]=l.y,d[g+2]=l.z,Math.floor(g/f)){case 0:m.set(1,0,0),u[p+0]=En(m,l,"z","y",r,n),u[p+1]=1-En(m,l,"y","z",r,t);break;case 1:m.set(-1,0,0),u[p+0]=1-En(m,l,"z","y",r,n),u[p+1]=1-En(m,l,"y","z",r,t);break;case 2:m.set(0,1,0),u[p+0]=1-En(m,l,"x","z",r,e),u[p+1]=En(m,l,"z","x",r,n);break;case 3:m.set(0,-1,0),u[p+0]=1-En(m,l,"x","z",r,e),u[p+1]=1-En(m,l,"z","x",r,n);break;case 4:m.set(0,0,1),u[p+0]=1-En(m,l,"x","y",r,e),u[p+1]=1-En(m,l,"y","x",r,t);break;case 5:m.set(0,0,-1),u[p+0]=En(m,l,"x","y",r,e),u[p+1]=1-En(m,l,"y","x",r,t);break}}}const Gn=Math.PI*2;function O(i,e,t,n,s=0,r=0,a=0,o=0,l=3){const c=o>0?new jr(i,e,t,l,o):new On(i,e,t),h=new z(c,n);return h.position.set(s,r,a),h.castShadow=!0,h.receiveShadow=!0,h}function Ke(i,e,t,n,s=0,r=0,a=0,o=24,l=!1){const c=new z(new An(i,e,t,o,1,l),n);return c.position.set(s,r,a),c.castShadow=!0,c.receiveShadow=!0,c}function ro(i,e,t,n,s,r,a,o,l=0){const c=O(e,t,n,s,r,a,o,l);return i.add(c),c}function Rh(i,e=!0,t=!0){return i.traverse(n=>{n.isMesh&&(n.castShadow=e,n.receiveShadow=t)}),i}function xp(i={}){const{shirt:e=5204056,pants:t=4608330,skin:n=14134662,hair:s=3944229,scale:r=1,pose:a="stand",bag:o=!1}=i,l=new _e,c=new ge({color:n,roughness:.75}),h=new ge({color:e,roughness:.82}),d=new ge({color:t,roughness:.85}),u=new ge({color:s,roughness:.9}),f=new z(new Pi(.18,.46,5,9),h);f.position.y=1.05,l.add(f);const m=new z(new ln(.16,14,12),c);m.position.y=1.5,l.add(m);const _=new z(new ln(.165,14,12,0,Gn,0,Math.PI*.62),u);_.position.y=1.53,l.add(_);const g=new Pi(.07,.36,4,7),p=new z(g,d);p.position.set(-.1,.48,0),l.add(p);const x=new z(g,d);x.position.set(.1,.48,0),l.add(x);const y=new Pi(.055,.33,4,7),v=new z(y,h);v.position.set(-.24,1.06,0),v.rotation.z=.1,l.add(v);const I=new z(y,h);if(I.position.set(.24,1.06,0),I.rotation.z=-.1,l.add(I),a==="walk"&&(p.rotation.x=.45,x.rotation.x=-.45,v.rotation.x=-.35,I.rotation.x=.35),o){const M=new z(new On(.22,.28,.09),new ge({color:9071694,roughness:.8}));M.position.set(.36,.76,.02),l.add(M);const T=new z(new $t(.2,.01,4,12,Math.PI),new ge({color:7296573}));T.position.set(.18,1.24,0),T.rotation.z=-.3,l.add(T)}return a==="sit"&&(p.rotation.x=-1.3,x.rotation.x=-1.3,p.position.z=.16,x.position.z=.16,f.position.y=.85,m.position.y=1.3,_.position.y=1.33,v.position.y=.88,I.position.y=.88),l.userData.limbs={legL:p,legR:x,armL:v,armR:I,body:f,head:m},l.scale.setScalar(r),Rh(l,!0,!0),l}function gS(){const i=new _e,e=new ge({color:9267015,roughness:.75}),t=new ge({color:3948604,roughness:.5,metalness:.5});for(let n=0;n<3;n++)ro(i,2.1,.07,.18,e,0,.52,-.18+n*.18,.02);for(let n=0;n<3;n++)ro(i,2.1,.18,.06,e,0,.76+n*.2,-.27,.02);return ro(i,.07,.5,.6,t,-.82,.26,0,.02),ro(i,.07,.5,.6,t,.82,.26,0,.02),i}function Nr(i=.5,e=.6){const t=new _e,n=Ke(i,i*.82,e,new ge({color:13616563,roughness:.82}),0,e/2,0,18);t.add(n);const s=Ke(i*.9,i*.9,.04,new ge({color:6244918,roughness:1}),0,e-.01,0,18);t.add(s);const r=new ge({color:5207118,roughness:.78,flatShading:!0});for(let a=0;a<9;a++){const o=new z(new ln(.14+Math.random()*.12,7,6),r),l=a/9*Gn;o.position.set(Math.cos(l)*i*.55,e+.2+Math.random()*.38,Math.sin(l)*i*.55),o.scale.set(1,1.8,.7),o.rotation.z=Math.cos(l)*.4,o.rotation.x=Math.sin(l)*.4,o.castShadow=!0,t.add(o)}return t}function _S(i=4.2){const e=new _e,t=Ke(.045,.065,i,new ge({color:3095092,roughness:.45,metalness:.55}),0,i/2,0,12);e.add(t);const n=O(.75,.05,.05,t.material,.33,i-.06,0,.02);e.add(n);const s=Ke(.18,.25,.08,new ge({color:3095092,roughness:.4,metalness:.5}),.65,i-.13,0,14);e.add(s);const r=new z(new ln(.09,10,8),new Se({color:16770228}));return r.position.set(.65,i-.2,0),e.add(r),e}function vS(){return wt(700,700,(i,e,t)=>{i.clearRect(0,0,e,t);const n=e/2,s=t/2,r=286,a=[],o=28;for(let c=0;c<o;c++){const h=-Math.PI/2+c/o*Math.PI*2,d=1+.028*Math.cos(h*12);a.push([n+Math.cos(h)*r*d,s+Math.sin(h)*r*d])}i.beginPath(),a.forEach(([c,h],d)=>d?i.lineTo(c,h):i.moveTo(c,h)),i.closePath();const l=i.createLinearGradient(0,50,0,650);l.addColorStop(0,"#f2e1b9"),l.addColorStop(.2,"#cfae74"),l.addColorStop(.52,"#f0dfb8"),l.addColorStop(.78,"#c19c63"),l.addColorStop(1,"#ead4a3"),i.fillStyle=l,i.fill(),i.strokeStyle="#6c4d2e",i.lineWidth=8,i.stroke(),i.strokeStyle="rgba(255,249,223,.8)",i.lineWidth=3,i.beginPath(),a.forEach(([c,h],d)=>{const u=c-n,f=h-s;d?i.lineTo(n+u*.9,s+f*.9):i.moveTo(n+u*.9,s+f*.9)}),i.closePath(),i.stroke(),i.textAlign="center",i.textBaseline="middle",i.fillStyle="#432a20",i.font='700 194px "Helvetica Neue", Arial, sans-serif',i.fillText("96",210,300),i.font='600 80px "Songti SC", serif',i.fillText("小时",455,322),i.font='700 116px "Songti SC", "STSong", serif',i.fillText("控油蓬松",n,460),i.fillStyle="rgba(67,42,32,.8)",i.font='400 23px "Songti SC", serif',i.fillText("数据源自第三方机构消费者测试报告",n,548),i.fillText("实际效果因人而异",n,580)})}function yS(){return wt(900,280,(i,e,t)=>{i.fillStyle="#f8f2e5",ds(i,0,0,e,t,20),i.fill(),i.strokeStyle="#b99b68",i.lineWidth=3,i.stroke(),i.fillStyle="#2f5443",i.textAlign="left",i.textBaseline="middle",i.font='600 60px "Songti SC", serif',i.fillText("控油小茶瓶",52,104),i.fillStyle="#8e7651",i.font='400 24px "Helvetica Neue", Arial, sans-serif',i.letterSpacing="6px",i.fillText("OIL CONTROL · 480ML",54,166),i.fillStyle="#6f6251",i.font='400 25px "Songti SC", serif',i.fillText("冷萃国风控油蓬松洗发露",52,222),i.fillStyle="#2f5443",i.textAlign="right",i.font='600 30px "Songti SC", serif',i.fillText("96H",e-52,115),i.fillStyle="#9a835f",i.font='400 18px "Helvetica Neue", Arial, sans-serif',i.fillText("FRESHNESS",e-52,155)})}function xS(i,e){const t=new _e;t.name="giant-bottle";const n=new ge({color:15787990,roughness:.52}),s=Ke(2.05,2.12,.23,n,0,.115,0,64);t.add(s);const r=Ke(1.97,1.97,.035,i.goldLight,0,.245,0,64);t.add(r);const a=new z(new $t(1.78,.025,6,96),i.green);a.rotation.x=Math.PI/2,a.position.y=.278,t.add(a);const o=Ke(1.33,1.45,.2,new ge({color:15195594,roughness:.45}),0,.36,0,64);t.add(o);const l=new z(new $t(1.33,.018,6,96),i.gold);l.rotation.x=Math.PI/2,l.position.y=.468,t.add(l);const c=new Jr(16770740,8,8,2);c.position.set(0,2.4,.5),t.add(c);const h=new _e;h.position.y=1.46,t.add(h);const d=new jr(1.1,1.9,.68,8,.16),u=new z(d,i.amber);u.castShadow=!0,u.receiveShadow=!0,h.add(u);const f=new Se({color:16112037,transparent:!0,opacity:.16,depthWrite:!1});for(let Ne=0;Ne<15;Ne++){const W=-.48+Ne*.068,ie=O(.012,1.68,.012,f,W,0,.343,0);h.add(ie)}for(let Ne=0;Ne<14;Ne++){const W=-.46+Ne*.07,ie=O(.009,.44,.009,f,W,.72,.345,0);h.add(ie);const Ie=O(.009,.4,.009,f,W,-.7,.345,0);h.add(Ie)}const m=new z(new jr(1,.32,.62,6,.1),i.amberLight);m.position.y=1.06,m.castShadow=!0,h.add(m);const _=Ke(.22,.27,.18,i.amberLight,0,1.23,0,32);h.add(_);const g=Ke(.24,.24,.17,i.gold,0,1.36,0,32);h.add(g);const p=new z(new $t(.235,.018,6,32),i.goldLight);p.rotation.x=Math.PI/2,p.position.y=1.45,h.add(p);const x=Ke(.145,.175,.22,i.paper,0,1.53,0,24);h.add(x);const y=new _e;y.position.y=1.68,h.add(y);const v=Ke(.2,.23,.14,i.gold,0,.02,0,28);y.add(v);const I=Ke(.09,.1,.22,i.gold,0,.19,0,20);y.add(I);const M=O(.28,.1,.36,i.gold,0,.31,.06,.05);y.add(M);const T=O(.15,.075,.22,i.gold,0,.29,.29,.03);y.add(T);const R=Ke(.04,.04,.12,i.gold,0,.24,.385,16);y.add(R);const w=Ke(.055,.055,.23,i.goldLight,.02,.18,.06,12);y.add(w);const S=new Se({map:e,transparent:!0,toneMapped:!1,side:Ct}),P=new z(new Me(.86,.76,8,1),S);P.position.set(0,.02,.356),P.castShadow=!1,h.add(P);for(const Ne of[.39,-.45]){const W=new z(new An(.575,.575,.035,4,1,!0),i.metal);W.rotation.y=Math.PI/4,W.scale.z=.61,W.position.y=Ne,h.add(W)}const V=vS(),k=new Se({map:V,transparent:!0,toneMapped:!1,side:Ct}),Y=new z(new Me(.84,.84),k);Y.position.set(0,1.32,.48),h.add(Y);const Z=new z(new An(.008,.008,.22,6),i.gold);Z.position.set(0,1.77,.24),Z.rotation.x=-.2,h.add(Z);const $=new z(new Pi(.026,1.15,4,8),new Se({color:16772295,transparent:!0,opacity:.28,depthWrite:!1}));$.position.set(-.44,.1,.356),h.add($);const Q=new ge({color:5995596,roughness:.7,side:Ct});for(let Ne=0;Ne<9;Ne++){const W=new z(new Jn(.1,10,0,Math.PI),Q),ie=Ne/9*Math.PI*2+.2;W.position.set(Math.cos(ie)*(1.66+Math.random()*.18),.29+Math.random()*.06,Math.sin(ie)*(1.66+Math.random()*.18)),W.rotation.set(-Math.PI/2,0,ie+.5),W.scale.set(1,2.1,1),t.add(W)}const X=i.water;for(let Ne=0;Ne<7;Ne++){const W=new z(new ln(.055+Math.random()*.045,12,10),X),ie=Math.random()*Math.PI*2;W.position.set(Math.cos(ie)*(1.5+Math.random()*.45),.35+Math.random()*.6,Math.sin(ie)*(1.5+Math.random()*.45)),t.add(W)}const de=yS(),me=new z(new Me(1.2,.37),new Se({map:de,toneMapped:!1}));me.position.set(0,.55,1.95),me.rotation.x=-.14,t.add(me);const Te=O(1.24,.03,.09,i.gold,0,.37,1.93,.02);t.add(Te);const We=new z(new $t(1.55,.015,6,100),new Se({color:12046762,transparent:!0,opacity:.75}));return We.rotation.x=Math.PI/2,We.position.y=.5,t.add(We),t.userData.node="f1-01",t}function Li(i,e,t={}){const n=new _e,s=t.dark?i.greenDeep:i.amberLight,r=new z(new jr(.13,.41,.085,4,.024),s);r.position.y=.225,r.castShadow=!0,n.add(r);const a=new z(new Me(.112,.2),new Se({map:e,transparent:!0,toneMapped:!1}));a.position.set(0,.24,.044),n.add(a);const o=Ke(.035,.035,.055,t.dark?i.goldLight:i.gold,0,.505,0,12);n.add(o);const l=O(.045,.018,.08,i.gold,0,.55,.012,.008);return n.add(l),n.scale.setScalar(t.scale||1),n}const gt=15,Nt=10,oi=4.45,Bt=8.15,Ft=Nt/2;function gc(i,e,t,n,s,r=2.1,a=2.75){const o=new _e;o.position.set(n,0,s),i.add(o);const l=new ge({color:15984591,roughness:.6,emissive:16770485,emissiveIntensity:.1});o.add(O(r,a,.08,l,0,.45+a/2,.02,.02)),o.add(O(r+.12,a+.12,.16,e.woodDark,0,.45+a/2,.06,.04)),o.add(O(r-.08,a-.06,.02,l,0,.45+a/2,.15,.02));for(let d=0;d<4;d++)o.add(O(r-.25,.018,.03,e.warmScreen,0,.72+d*.64,.17,.01));for(let d=0;d<4;d++)o.add(O(r-.12,.055,.32,e.gold,0,.66+d*.64,.2,.025));const c=[.72,1.36,2,2.64];for(let d=0;d<3;d++)for(let u=0;u<4;u++){const f=Li(e,t,{scale:.95+u%2*.05});f.position.set(-r/2+.38+u*.46,c[d]+.02,.26+u%2*.03),f.rotation.y=.06*(u-1.5),o.add(f)}const h=new z(new Me(.75,.16),new Se({map:e.shelfLabel,transparent:!0,toneMapped:!1}));return h.position.set(0,.42,.36),o.add(h),o}function MS(i,e){const t=[11125934,13349250,15656144,7179624,14137255],n=["AMI","ZN","AMINO","TEA","B3"];for(let s=0;s<5;s++){const r=-6+s*.82,a=new _e;a.position.set(r,0,3.35),i.add(a);const o=Ke(.34,.38,.16,e.cream,0,.53,0,24);a.add(o);const l=new z(new An(.25,.25,1.6,24,1,!0),e.displayGlass);l.position.y=1.41,a.add(l);const c=new z(new ln(.13,16,12),new ge({color:t[s],roughness:.35,metalness:.1,emissive:t[s],emissiveIntensity:.1}));c.position.y=1.48,a.add(c);const h=new z(new $t(.26,.012,5,32),e.gold);h.rotation.x=Math.PI/2,h.position.y=.61,a.add(h);const d=Ke(.26,.26,.035,e.goldLight,0,2.23,0,24);a.add(d);const u=bt(n[s],{w:300,h:100,color:"#2f5443",size:42,font:'"Helvetica Neue", Arial, sans-serif',bg:"transparent",tracking:3}),f=new z(new Me(.32,.11),new Se({map:u,transparent:!0,toneMapped:!1,side:Ct}));f.position.set(0,2,.26),a.add(f)}}function SS(i,e){const t=new _e;t.position.set(4.25,0,2.75),i.add(t),t.add(Ke(.95,1.05,.06,e.cream,0,.48,0,32));const n=O(.32,1.2,.26,e.gold,0,1.1,0,.06);t.add(n);const s=new z(new ln(.35,20,12,0,Math.PI*2,0,Math.PI*.55),e.creamLight);s.rotation.x=Math.PI,s.position.set(0,1.58,.13),t.add(s);const r=new z(new Jn(.3,20),e.metal);r.rotation.x=-Math.PI/2,r.position.set(0,1.58,.13),t.add(r);const a=Ke(.025,.025,.5,e.gold,0,1.86,0,10);t.add(a);const o=O(.04,.035,.32,e.gold,0,2.1,-.14,.015);t.add(o);const l=new _e;l.position.set(0,.52,-.9),t.add(l),l.add(O(.62,.12,.58,e.greenDeep,0,.32,0,.05)),l.add(O(.62,.7,.12,e.greenDeep,0,.68,-.25,.05)),l.add(O(.07,.32,.07,e.metal,-.24,.12,-.18,.01)),l.add(O(.07,.32,.07,e.metal,.24,.12,-.18,.01));const c=new _e;c.position.set(0,2.8,-.1),t.add(c),c.add(Ke(.44,.44,.03,e.gold,0,0,0,40).rotateX(Math.PI/2));const h=new z(new Jn(.39,40),e.mirror);h.position.z=.02,c.add(h),t.add(O(.35,.08,.25,e.paper,.42,1.08,.05,.02));const d=Li(e,e.labelClean,{scale:1.2});return d.position.set(-.22,1.6,.15),t.add(d),t}function bS(i,e){const t=new _e;t.position.set(3.7,0,-4.72),i.add(t),t.add(O(2.2,1.55,.09,e.gold,0,2.25,0,.05));const n=new z(new Me(2.06,1.42),new Se({map:e.oilScreen,toneMapped:!1}));n.position.set(0,2.25,.055),t.add(n),t.add(O(1.95,.28,.12,e.greenDeep,0,1.4,0,.03));const s=bt("SCALP CHECK",{w:500,h:100,color:"#eddbb8",size:34,font:'"Helvetica Neue", Arial, sans-serif',tracking:6,align:"center"}),r=new z(new Me(1.1,.22),new Se({map:s,transparent:!0,toneMapped:!1}));return r.position.set(0,1.4,.065),t.add(r),t}function wS(i,e){const t=new _e;t.position.set(6.75,0,-1.4),t.rotation.y=Math.PI/2,i.add(t);const n=new z(new Me(2.75,1.1),new Se({map:e.timeline,toneMapped:!1,side:Ct}));return n.position.set(0,2.25,0),t.add(n),t.add(O(2.9,1.25,.06,e.gold,0,2.25,-.035,.02)),t}function ES(i,e){const t=new _e;t.position.set(-1.2,0,3.05),i.add(t),t.add(Ke(1.25,1.35,.22,e.cream,0,.57,0,48)),t.add(Ke(1.06,1.16,.32,e.creamLight,0,.84,0,48));const n=new z(new $t(1.13,.014,5,64),e.green);n.rotation.x=Math.PI/2,n.position.y=.72,t.add(n);const s=new z(new $t(1.34,.012,5,64),e.gold);s.rotation.x=Math.PI/2,s.position.y=.46,t.add(s);const r=Li(e,e.labelClean,{scale:2.3});r.position.set(0,1,.08),t.add(r);for(let o=0;o<8;o++){const l=o/8*Gn,c=Li(e,e.labelClean,{scale:1.1+o%2*.2});c.position.set(Math.cos(l)*1,1,Math.sin(l)*1),t.add(c)}const a=new z(new Me(1.5,.18),new Se({map:e.shelfLabel,transparent:!0,toneMapped:!1}));return a.position.set(0,.6,1.35),a.rotation.x=-.1,t.add(a),t}function TS(i){const e=new _e,t=2.15,n=Ft+.085;e.add(O(2.1,.1,.13,i.gold,t,3.83,n,.02)),e.add(O(2.1,.1,.13,i.gold,t,.62,n,.02)),e.add(O(.1,3.3,.13,i.gold,t-1.03,2.22,n,.02)),e.add(O(.1,3.3,.13,i.gold,t+1.03,2.22,n,.02)),e.add(O(.055,3.15,.07,i.goldLight,t,2.22,n+.02,.01));for(const o of[t-.16,t+.16])e.add(Ke(.022,.022,.72,i.brass,o,2,n+.13,10));const s=bt("PUSH  ·  推",{w:320,h:100,color:"#e6d7b8",size:28,font:'"Helvetica Neue", Arial, sans-serif',tracking:3}),r=new z(new Me(.5,.16),new Se({map:s,transparent:!0,toneMapped:!1}));r.position.set(t,1.25,n+.08),e.add(r);const a=new z(new Me(3.1,.54),new Se({map:i.entrySign,toneMapped:!1,transparent:!0}));return a.position.set(t,3.8,n+.09),e.add(a),e}function yu(i,e,t,n=7){for(let s=0;s<n;s++){const r=-5.8+s*1.85,a=s%2?-1.8:1.3,o=new _e;o.position.set(r,t,a),i.add(o),o.add(Ke(.22,.22,.03,e.gold,0,0,0,24));const l=new z(new ln(.1,12,8),new Se({color:16769187}));l.position.y=-.08,o.add(l)}}function AS(i,e){for(const[t,n,s]of[[-3.2,-2.4,1],[1.6,-1.9,.8],[4,0,.65]]){const r=new _e;r.position.set(t,Bt+.5,n),r.scale.setScalar(s),i.add(r),r.add(O(1.55,.52,.95,e.metal,0,.26,0,.04)),r.add(O(1.58,.05,.98,e.darkMetal,0,.54,0,.02));const a=new ge({color:5067086,roughness:.5,metalness:.5});for(let o=0;o<5;o++)r.add(O(1.1,.018,.025,a,0,.17+o*.05,.49,0));for(const o of[-.55,.55])for(const l of[-.3,.3])r.add(Ke(.035,.035,.1,e.darkMetal,o,.02,l,6))}for(const[t,n]of[[-6.2,4],[6.1,3.7],[-6,-3.6]]){const s=new _e;s.position.set(t,Bt+.4,n),i.add(s),s.add(O(1.2,.36,.55,e.cream,0,.18,0,.05));for(let r=0;r<4;r++){const a=new z(new Zn(.22,1),e.hedge);a.position.set(-.4+r*.27,.42+r%2*.1,0),a.castShadow=!0,s.add(a)}}i.add(O(.55,.85,.55,e.cream,5.1,Bt+.7,-2.8,.04))}function CS(i,e){const t=new _e;t.position.set(0,Bt+.92,Ft+.12),i.add(t),t.add(O(6,.72,.12,e.greenDeep,0,0,0,.04)),t.add(O(6.08,.78,.03,e.gold,0,0,-.03,.05));const n=bt("NICE TO MEET YOU",{w:1400,h:160,color:"#f1e5cb",size:64,font:'"Helvetica Neue", Arial, sans-serif',tracking:17}),s=new z(new Me(4.6,.52),new Se({map:n,transparent:!0,toneMapped:!1}));s.position.set(0,0,.08),t.add(s)}function RS(i,e){const t=new _e;t.position.set(-4.4,Bt+.24,1.2),i.add(t),t.add(O(4.2,.08,3,e.wood,0,0,0,.02));for(let o=0;o<11;o++)t.add(O(.025,.012,2.9,e.woodDark,-1.95+o*.39,.05,0,0));const n=e.woodDark;for(const o of[-1.8,1.8])for(const l of[-1.2,1.2])t.add(O(.09,1.8,.09,n,o,.94,l,.01));for(const o of[-1.2,1.2])t.add(O(3.9,.1,.09,n,0,1.86,o,.01));for(let o=0;o<8;o++)t.add(O(.06,.05,2.7,n,-1.7+o*.49,1.94,0,.01));for(const[o,l,c,h]of[[-1.7,1.1,1,.5],[1.55,-1.05,1.1,.5]]){const d=new _e;d.position.set(o,.04,l),t.add(d),d.add(O(c,.38,h,e.cream,0,.19,0,.04));for(let u=0;u<6;u++){const f=new z(new Zn(.18+Math.random()*.1,1),e.hedge);f.position.set(-c/2+.18+u*(c-.36)/5,.46+Math.random()*.2,0),f.castShadow=!0,d.add(f)}}for(const[o,l,c]of[[-1,-.5,.15],[1,-.45,-.2]]){const h=new _e;h.position.set(o,.06,l),h.rotation.y=c,t.add(h),h.add(O(.62,.08,1.2,e.creamLight,0,.32,0,.06)),h.add(O(.62,.08,.85,e.creamLight,0,.56,-.55,.06));for(const d of[-.24,.24])for(const u of[-.48,.48])h.add(O(.055,.32,.055,e.gold,d,.16,u,.01))}const s=Ke(.38,.3,.5,e.cream,2,.25,1,20);t.add(s);const r=new z(new Zn(.5,1),e.hedge);r.position.set(2,.95,1),r.castShadow=!0,t.add(r);const a=new z(new Zn(.36,1),e.foliageB);a.position.set(2,1.35,1),a.castShadow=!0,t.add(a)}function IS(i){const e=new _e;e.name="centaine-building",e.add(O(gt+.9,.4,Nt+.9,i.cream,0,.2,0,.12)),e.add(O(gt+.55,.16,Nt+.55,i.greenDeep,0,.07,0,.08)),e.add(O(.36,Bt,Nt,i.cream,-gt/2+.02,Bt/2,0,.08)),e.add(O(gt,Bt,.36,i.cream,0,Bt/2,-Nt/2+.02,.08));for(let B=0;B<13;B++){const ae=-4.5+B*.78;e.add(O(.02,7.2,.02,i.goldLight,-gt/2+.21,4.05,ae,0))}for(let B=0;B<4;B++)e.add(O(.025,7.2,.025,i.goldLight,-5.7+B*3.8,4.05,-Nt/2+.2,0));for(const[B,ae]of[[.38,.2],[oi-.04,.24],[Bt-.16,.34]])e.add(O(gt+.7,ae,Nt+.7,i.cream,0,B,0,.09));const t=(B,ae,rt,St,Gt=.06,zn=.045)=>{e.add(O(rt,zn,Gt,ae,0,B,St/2-Gt/2,.01)),e.add(O(rt,zn,Gt,ae,0,B,-St/2+Gt/2,.01)),e.add(O(Gt,zn,St,ae,rt/2-Gt/2,B,0,.01)),e.add(O(Gt,zn,St,ae,-rt/2+Gt/2,B,0,.01))};t(.5,i.greenDeep,gt+.7,Nt+.7,.07,.045),t(oi+.22,i.green,gt+.68,Nt+.68,.07,.05),t(Bt+.23,i.gold,gt+.72,Nt+.72,.07,.055);for(const[B,ae,rt,St]of[[0,Nt/2-.1,gt+.6,.3],[0,-Nt/2+.1,gt+.6,.3],[-gt/2+.1,0,.3,Nt+.4],[gt/2-.1,0,.3,Nt+.4]])e.add(O(rt,.56,St,i.cream,B,Bt+.32,ae,.08)),e.add(O(rt+.03,.045,St+.03,i.gold,B,Bt+.58,ae,.01));for(const[B,ae]of[[-gt/2+.15,Ft-.12],[gt/2-.15,Ft-.12],[-gt/2+.15,-Nt/2+.12],[gt/2-.15,-Nt/2+.12]])e.add(O(.55,Bt,.55,i.cream,B,Bt/2,ae,.17));for(const B of[-2.5,4.8])e.add(O(.055,Bt-.9,.06,i.gold,B,Bt/2,Ft+.12,.01));const n=new z(new Me(gt-.6,3.22),i.glass);n.position.set(0,2.23,Ft+.01),e.add(n);const s=new z(new Me(gt-.6,3.2),i.glass);s.position.set(0,6.17,Ft+.01),e.add(s);const r=new z(new Me(Nt-.55,3.22),i.glass);r.rotation.y=Math.PI/2,r.position.set(gt/2-.04,2.23,0),e.add(r);const a=r.clone();a.position.y=6.17,e.add(a);const o=new z(new Me(gt-.6,3.2),i.glassSheen);o.position.set(0,2.23,Ft+.065),o.renderOrder=4,e.add(o);const l=o.clone();l.position.y=6.17,e.add(l);const c=new z(new Me(Nt-.55,3.2),i.glassSheen);c.rotation.y=Math.PI/2,c.position.set(gt/2+.025,2.23,0),c.renderOrder=4,e.add(c);const h=c.clone();h.position.y=6.17,e.add(h);for(const B of[-7.05,-3.55,0,3.55,7.05])e.add(O(.055,3.16,.06,i.gold,B,2.23,Ft+.09,.01)),e.add(O(.055,3.16,.06,i.gold,B,6.17,Ft+.09,.01));for(const B of[-4.42,-2.2,0,2.2,4.42]){const ae=O(.06,3.16,.055,i.gold,gt/2+.01,2.23,B,.01),rt=O(.06,3.16,.055,i.gold,gt/2+.01,6.17,B,.01);e.add(ae,rt)}for(const B of[-5.3,-1.8,1.8,5.3])e.add(O(.045,3.1,.05,i.goldLight,B,2.23,Ft+.1,0)),e.add(O(.045,3.1,.05,i.goldLight,B,6.17,Ft+.1,0));for(const B of[-3.3,0,3.3]){const ae=O(.05,3.1,.045,i.goldLight,gt/2+.02,6.17,B,0);e.add(ae)}for(const B of[.63,3.82,4.52,7.73])e.add(O(gt-.4,.025,.03,i.greenLight,0,B,Ft+.06,0));e.add(TS(i)),e.add(O(3.9,.14,1.5,i.greenDeep,2.15,3.88,Ft+.62,.06)),e.add(O(3.9,.045,.05,i.gold,2.15,3.95,Ft+1.35,.01));const d=new z(new Me(.38,.44),new Se({map:i.logoCream,transparent:!0,toneMapped:!1}));d.rotation.x=-Math.PI/2,d.position.set(1.32,3.958,Ft+.62),e.add(d);const u=new z(new Me(1.85,.18),new Se({map:bt("NICE TO MEET YOU",{w:900,h:100,color:"#f1e6cd",size:40,font:'"Helvetica Neue", Arial, sans-serif',tracking:8}),transparent:!0,toneMapped:!1}));u.rotation.x=-Math.PI/2,u.position.set(2.6,3.96,Ft+.62),e.add(u);for(const B of[.5,3.9]){const ae=new _e;ae.position.set(B,.48,Ft+.72),e.add(ae),ae.add(Ke(.26,.2,.4,i.cream,0,.2,0,20));for(let rt=0;rt<5;rt++){const St=new z(new ln(.13,7,6),i.hedge);St.position.set((Math.random()-.5)*.3,.48+Math.random()*.25,(Math.random()-.5)*.3),St.castShadow=!0,ae.add(St)}}const f=new _e;f.position.set(-.2,4.52,Ft+.39),e.add(f),f.add(O(6.9,.96,.12,i.gold,0,0,-.03,.06)),f.add(O(6.72,.82,.14,i.creamLight,0,0,.02,.04));const m=new z(new Me(.63,.71),new Se({map:i.logoInk,transparent:!0,toneMapped:!1}));m.position.set(-2.85,.01,.1),f.add(m);const _=new z(new Me(2.1,.25),new Se({map:bt("不惧油，自在见。",{w:900,h:120,color:"#2f5443",size:52,font:'"Songti SC", serif',tracking:3}),transparent:!0,toneMapped:!1}));_.position.set(-1.55,.07,.1),f.add(_);const g=new z(new Me(2.5,.25),new Se({map:bt("NICE TO MEET YOU  ·  不惧油，自在见。",{w:1200,h:120,color:"#2f5443",size:44,font:'"Helvetica Neue", Arial, sans-serif',tracking:5}),transparent:!0,toneMapped:!1}));g.position.set(1.85,-.02,.1),f.add(g);const p=new _e;p.position.set(gt/2+.16,5.85,2.25),p.rotation.y=Math.PI/2,e.add(p),p.add(O(2.15,3.15,.16,i.greenDeep,0,0,0,.1)),p.add(O(2.24,3.24,.07,i.gold,0,0,-.04,.08));const x=new z(new Me(.9,1.03),new Se({map:i.logoCream,transparent:!0,toneMapped:!1}));x.position.set(0,.72,.09),p.add(x);const y=new z(new Me(1.75,.23),new Se({map:bt("NICE TO MEET YOU",{w:1e3,h:120,color:"#d6c29a",size:48,font:'"Helvetica Neue", Arial, sans-serif',tracking:8}),transparent:!0,toneMapped:!1}));y.position.set(0,-.27,.1),p.add(y);const v=new z(new Me(1.5,.2),new Se({map:bt("不惧油，自在见。",{w:800,h:120,color:"#e7ddc7",size:44,font:'"Songti SC", serif',tracking:3}),transparent:!0,toneMapped:!1}));v.position.set(0,-.7,.1),p.add(v);const I=new z(new Me(1.6,.14),new Se({map:bt("BRAND EXPERIENCE · 2F",{w:900,h:100,color:"#b9cbbd",size:30,font:'"Helvetica Neue", Arial, sans-serif',tracking:6}),transparent:!0,toneMapped:!1}));I.position.set(0,-1.2,.1),p.add(I);const M=new z(new Me(.3,2.8),new Se({map:bt(`NICE TO
MEET YOU`,{w:300,h:800,color:"#6c5635",size:52,font:'"Helvetica Neue", Arial, sans-serif',tracking:6,lineHeight:70}),transparent:!0,toneMapped:!1}));M.rotation.y=-.02,M.position.set(4.79,2.15,Ft+.23),e.add(M),yu(e,i,3.94,7),yu(e,i,7.92,6),e.add(O(gt-.95,.035,Nt-.9,i.terrazzo,0,.51,0,0));const T=new Jr(16770493,14,12,2);T.position.set(-2,3.1,2.3),e.add(T),gc(e,i,i.labelClean,-5.8,-4.72),gc(e,i,i.labelClean,-3.4,-4.72),gc(e,i,i.labelClean,-1,-4.72),bS(e,i);const R=new _e;R.position.set(-5.15,0,4.73),e.add(R),R.add(O(3.15,2.88,.1,i.gold,0,2.16,0,.03));const w=new z(new Me(3,2.74),new Se({map:i.shopWindow,toneMapped:!1}));w.position.set(0,2.16,.06),R.add(w);const S=O(2.65,.1,.42,i.gold,0,1,.55,.02);R.add(S);for(let B=0;B<5;B++){const ae=Li(i,i.labelClean,{scale:1.2});ae.position.set(-1.02+B*.5,1.06,.56),ae.rotation.y=-.15,R.add(ae)}MS(e,i),ES(e,i);const P=new _e;P.position.set(-1.2,0,.55),e.add(P),P.add(O(4.7,2.75,.16,i.greenDeep,0,1.92,0,.04));const V=O(4.82,.045,.06,i.gold,0,3.28,.1,.01);P.add(V),P.add(O(4.82,.045,.06,i.gold,0,.58,.1,.01));const k=new z(new Me(3.8,.62),new Se({map:bt("MEET YOUR FRESHNESS",{w:1500,h:260,color:"#efe3c9",size:96,font:'"Helvetica Neue", Arial, sans-serif',tracking:12}),transparent:!0,toneMapped:!1}));k.position.set(0,2.55,.1),P.add(k);const Y=new z(new Me(2.2,.34),new Se({map:bt("清爽相遇 · 96H 控油蓬松",{w:1200,h:180,color:"#c8b384",size:54,font:'"Songti SC", serif',tracking:5}),transparent:!0,toneMapped:!1}));Y.position.set(0,2.06,.1),P.add(Y);const Z=new z(new $t(.78,.035,8,64),i.gold);Z.position.set(0,1.25,.14),P.add(Z),P.add(O(2.2,.09,.42,i.gold,0,.72,.25,.02));for(let B=0;B<5;B++){const ae=Li(i,i.labelClean,{scale:1.15});ae.position.set(-.72+B*.36,.78,.27),P.add(ae)}SS(e,i),wS(e,i);const $=new z(new Me(5,.34),new Se({map:bt("MEET YOUR FRESHNESS  /  清爽相遇",{w:1800,h:140,color:"#2f5443",size:54,font:'"Helvetica Neue", Arial, sans-serif',tracking:7}),transparent:!0,toneMapped:!1}));$.position.set(-2.2,3.68,-4.48),e.add($);const Q=new _e;Q.position.set(5.9,0,2.6),e.add(Q),Q.add(O(1.8,.58,.62,i.wood,0,.83,0,.06)),Q.add(O(1.88,.06,.7,i.gold,0,1.15,0,.03));for(let B=0;B<3;B++){const ae=Li(i,i.labelClean,{scale:.9});ae.position.set(-.5+B*.5,1.2,0),Q.add(ae)}for(let B=0;B<6;B++)e.add(O(1.2,.12,.36,i.woodDark,5.9,.55+B*.38,-3.6+B*.35,.02));e.add(O(gt-.95,.035,Nt-.9,i.wood,0,4.55,0,0));const X=new Jr(16770233,15,12,2);X.position.set(-1,7,2.2),e.add(X);const de=new _e;de.position.set(-1,4.575,1.55),e.add(de);const me=new z(new Jn(3.25,64),new ge({color:2313020,roughness:.82}));me.rotation.x=-Math.PI/2,de.add(me);const Te=new z(new $t(3.12,.025,6,80),i.gold);Te.rotation.x=Math.PI/2,Te.position.y=.012,de.add(Te);const We=new z(new Me(4.2,.75),new Se({map:bt("NICE TO MEET YOU",{w:1500,h:260,color:"#efe5d0",size:90,font:'"Helvetica Neue", Arial, sans-serif',tracking:8}),transparent:!0,toneMapped:!1}));We.rotation.x=-Math.PI/2,We.position.set(0,.018,0),de.add(We);const Ne=new _e;Ne.position.set(-1,4.57,1.55),e.add(Ne),Ne.add(O(3.35,.12,1.02,i.wood,0,.79,0,.06)),Ne.add(O(3.42,.04,1.08,i.gold,0,.86,0,.02));for(const[B,ae]of[[-1.35,-.34],[1.35,-.34],[-1.35,.34],[1.35,.34]])Ne.add(O(.08,.74,.08,i.gold,B,.38,ae,.015));for(const[B,ae]of[[-1,-.3],[0,.25],[.95,-.15]]){const rt=Ke(.085,.065,.16,i.paper,B,.93,ae,18);Ne.add(rt)}const W=Ke(.1,.075,.22,i.green,0,.98,-.3,18);Ne.add(W);const ie=Ke(.012,.012,.28,i.green,0,1.2,-.3,6);Ne.add(ie);const Ie=new z(new ln(.09,8,6),new ge({color:14071976,roughness:.8}));Ie.position.set(0,1.38,-.3),Ne.add(Ie);for(const[B,ae,rt]of[[-2.25,.1,.2],[1.95,.2,-.2]]){const St=Ke(.3,.34,.44,i.cream,B,.22,ae,24);St.rotation.y=rt,Ne.add(St)}for(let B=0;B<2;B++){const ae=new z(new Me(.6,.78),new Se({color:B?15787474:14477018}));ae.position.set(1.8+B*.72,5.2,3.55),ae.rotation.y=-.42,e.add(ae);const rt=O(.62,.8,.03,i.gold,1.8+B*.72,5.2,3.53,.02);rt.rotation.y=-.42,e.add(rt)}const ce=new z(new Me(5.2,3.4),new ge({color:15261647,roughness:.9}));ce.rotation.x=-Math.PI/2,ce.position.set(2.2,4.575,-1.9),e.add(ce);const Be=new z(new $t(2.5,.018,5,70),i.gold);Be.rotation.x=Math.PI/2,Be.scale.set(1,.64,1),Be.position.set(2.2,4.59,-1.9),e.add(Be);const He=new _e;He.position.set(2.2,4.57,-3.15),e.add(He),He.add(O(2.9,.36,.9,i.cream,0,.2,0,.12)),He.add(O(2.9,.72,.24,i.cream,0,.56,-.38,.1)),He.add(O(.22,.5,.9,i.cream,-1.5,.38,0,.08)),He.add(O(.22,.5,.9,i.cream,1.5,.38,0,.08));for(const B of[-.8,0,.8])He.add(O(.72,.14,.68,i.greenLight,B,.41,.06,.08));for(const B of[-.8,0,.8])He.add(O(.62,.52,.16,i.greenLight,B,.65,-.24,.07));for(const[B,ae,rt]of[[-.15,-1.55,-.35],[4.55,-1.55,.35]]){const St=new _e;St.position.set(B,4.57,ae),St.rotation.y=rt,e.add(St),St.add(O(.78,.18,.78,i.cream,0,.28,0,.07)),St.add(O(.78,.58,.16,i.cream,0,.52,-.3,.06));for(const Gt of[-.28,.28])for(const zn of[-.28,.28])St.add(O(.05,.22,.05,i.gold,Gt,.1,zn,.01));St.add(O(.65,.1,.55,i.greenLight,0,.38,.05,.05))}const Ve=new _e;Ve.position.set(2.2,4.57,-1.25),e.add(Ve),Ve.add(Ke(.62,.68,.06,i.wood,0,.38,0,32)),Ve.add(Ke(.05,.05,.38,i.gold,0,.19,0,12));for(let B=0;B<3;B++){const ae=O(.34,.035,.24,B%2?i.greenDeep:i.paper,-.15+B*.08,.43+B*.035,.1,.01);ae.rotation.y=B*.2,Ve.add(ae)}for(const[B,ae]of[[5.9,-3.55],[-.8,-3.9],[5.8,-.3]]){const rt=Nr(.26,.42);rt.position.set(B,4.56,ae),e.add(rt)}const Qe=new _e;Qe.position.set(1.1,4.57,-4.67),e.add(Qe),Qe.add(O(4.6,2.5,.12,i.greenDeep,0,1.35,0,.04));const te=new z(new Me(4.44,.03),new Se({color:12953965}));te.position.set(0,2.55,.07),Qe.add(te);const oe=new z(new Me(3.9,.9),new Se({map:bt("NICE TO MEET YOU",{w:1600,h:300,color:"#efe4cd",size:92,font:'"Helvetica Neue", Arial, sans-serif',tracking:8}),transparent:!0,toneMapped:!1}));oe.position.set(0,1.65,.08),Qe.add(oe);const L=new z(new Me(2.2,.26),new Se({map:bt("好久不见，今天见面吧。",{w:900,h:120,color:"#cdb88b",size:44,font:'"Songti SC", serif',tracking:3}),transparent:!0,toneMapped:!1}));L.position.set(0,1.16,.08),Qe.add(L),Qe.add(O(3.7,.07,.4,i.gold,0,.62,.22,.02));for(let B=0;B<5;B++){const ae=O(.32,.4,.04,B%2?i.cream:i.paper,-1.2+B*.6,.84,.21,.01);ae.rotation.z=(B%2?-1:1)*.06,Qe.add(ae)}const Ce=new _e;Ce.position.set(-5.9,4.57,-1.7),Ce.rotation.y=Math.PI/2,e.add(Ce),Ce.add(O(3,.86,.62,i.wood,0,.45,0,.06)),Ce.add(O(3.12,.06,.7,i.gold,0,.9,0,.02));for(let B=0;B<3;B++){const ae=Ke(.09,.07,.2,i.paper,-.8+B*.8,1.03,.08,18);Ce.add(ae)}Ce.add(Ke(.13,.1,.28,i.green,0,1.07,-.12,18));const se=new z(new Me(.52,.68),new Se({map:i.teaMenu,toneMapped:!1}));se.position.set(1.1,1.36,-.22),Ce.add(se);const xe=new _e;xe.position.set(-3,4.57,-2.6),e.add(xe),xe.add(O(1.3,.56,.9,i.cream,0,.28,0,.04)),xe.add(O(1.35,.04,.95,i.gold,0,.57,0,.02));for(let B=0;B<3;B++){const ae=O(.3,.22,.26,B===0?i.greenDeep:B===1?i.paper:i.cream,-.36+B*.36,.7,0,.02);xe.add(ae),xe.add(O(.18,.015,.14,i.gold,-.36+B*.36,.82,0,.01))}for(let B=0;B<3;B++){const ae=O(1.05,1.35,.05,i.gold,-2.8+B*1.25,5.9,-4.65,.02);e.add(ae);const rt=new z(new Me(.92,1.22),new Se({color:B===1?14673884:15721939,toneMapped:!0}));rt.position.set(-2.8+B*1.25,5.9,-4.61),e.add(rt)}const le=new _e;le.position.set(-1.25,0,4.74),e.add(le),le.add(O(5.6,2.7,.08,i.gold,0,6.1,0,.02));const Ge=new z(new Me(5.48,2.58),new Se({map:i.friendsWindow,toneMapped:!1}));Ge.position.set(0,6.1,.05),le.add(Ge);const Ae=O(3.4,.08,.45,i.gold,0,5.18,.8,.02);le.add(Ae);for(let B=0;B<4;B++){const ae=O(.32,.4,.025,B%2?i.cream:i.paper,-.95+B*.6,5.44,.78,.01);ae.rotation.z=(B%2?-1:1)*.08,le.add(ae)}const C=new _e;C.position.set(-5.5,0,4.72),e.add(C),C.add(O(2.5,2.5,.08,i.gold,0,6.06,0,.02));const b=new z(new Me(2.38,2.38),new Se({map:i.teaWindow,toneMapped:!1}));b.position.set(0,6.06,.05),C.add(b);const F=new _e;F.position.set(4.55,0,4.72),e.add(F),F.add(O(2.1,2.2,.08,i.gold,0,6.08,0,.02));const K=new z(new Me(1.98,2.08),new Se({map:i.keepSign,toneMapped:!1}));K.position.set(0,6.08,.05),F.add(K);const ne=new _e;ne.position.set(-5.2,0,-4.7),e.add(ne),ne.add(O(3,2.35,.1,i.greenDeep,0,6.2,0,.04));const j=new z(new Me(2.7,2),new Se({map:i.posterTea,toneMapped:!1}));j.position.set(0,6.2,.07),ne.add(j);const Re=new _e;Re.position.set(-4.9,oi+.04,2.25),e.add(Re),Re.add(O(2.7,.88,.7,i.wood,0,.46,0,.06)),Re.add(O(2.85,.07,.8,i.gold,0,.92,0,.03));const fe=new z(new Me(.62,.8),new Se({map:i.teaMenu,toneMapped:!1}));fe.position.set(0,1.38,-.3),Re.add(fe);for(let B=0;B<3;B++){const ae=new _e;ae.position.set(-.8+B*.65,.97,.16),Re.add(ae),ae.add(Ke(.1,.075,.24,i.paper,0,.12,0,20)),ae.add(Ke(.105,.105,.03,i.green,0,.25,0,20))}for(const[B,ae]of[[-5.7,-1.3],[-3.8,-1.2]])e.add(Ke(.28,.32,.42,i.cream,B,oi+.25,ae,20));const Ee=new z(new Me(2.8,1.65),new Se({map:i.keepSign,toneMapped:!1}));Ee.position.set(4.9,6.3,-4.7),e.add(Ee);const et=new _e;et.position.set(4.4,oi+.03,2.3),e.add(et),et.add(Ke(1.12,1.23,.18,i.greenDeep,0,.12,0,36));const re=new z(new $t(1,.02,6,60),i.gold);re.rotation.x=Math.PI/2,re.position.y=.23,et.add(re);const Pe=new ge({color:14082772,roughness:.45});for(let B=0;B<3;B++){const ae=O(.22,1+B*.28,.22,Pe,-.5+B*.5,.72+B*.14,0,.08);et.add(ae)}const ze=new _e;ze.position.set(-1.1,oi+.02,2.65),e.add(ze),ze.add(O(1.9,.74,.8,i.cream,0,.38,0,.04)),ze.add(O(1.96,.05,.86,i.gold,0,.76,0,.02));const Xe=new z(new Me(1.34,1.79),new Se({map:i.museumArt,toneMapped:!1}));Xe.position.set(0,1.75,-.34),ze.add(Xe);const Le=O(1.48,1.94,.06,i.gold,0,1.75,-.39,.02);ze.add(Le);const st=new _e;st.position.set(5.4,oi+.03,3.15),e.add(st);const Ye=new Dn;Ye.moveTo(-1,0),Ye.lineTo(-1,1.9),Ye.absarc(0,1.9,1,Math.PI,0,!0),Ye.lineTo(1,0),Ye.lineTo(-1,0);const yt=new aa(Ye,{depth:.12,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:4}),D=new z(yt,i.gold);D.position.z=-.08,st.add(D);const ue=new Dn;ue.moveTo(-.82,.08),ue.lineTo(-.82,1.88),ue.absarc(0,1.88,.82,Math.PI,0,!0),ue.lineTo(.82,.08),ue.lineTo(-.82,.08);const q=new z(new vs(ue),i.mirror);q.position.z=.06,st.add(q);const ee=new Se({color:16446696,transparent:!0,opacity:.62,side:Ct,depthWrite:!1});for(let B=0;B<5;B++){const ae=new Dn;ae.moveTo(-2.8,.1),ae.bezierCurveTo(-1.4,1.2+B*.18,.2,-.3+B*.2,2.8,1.5+B*.12),ae.lineTo(2.8,1.7+B*.12),ae.bezierCurveTo(.2,0+B*.2,-1.4,1.5+B*.18,-2.8,.32);const rt=new z(new vs(ae),ee);rt.position.set(0,1+B*.33,.25+B*.08),st.add(rt)}const ve=new _e;ve.position.set(-3.2,oi+.03,4.25),e.add(ve),ve.add(O(3.2,1.8,.12,i.cream,0,1.5,0,.04));const ye=new z(new Me(3,1.6),new Se({map:i.messageWall,toneMapped:!1}));ye.position.set(0,1.5,.07),ve.add(ye);for(const[B,ae]of[[-2.9,2],[1.2,2.2]]){const rt=new _e;rt.position.set(B,oi+.03,ae),e.add(rt),rt.add(O(.65,.12,.6,i.cream,0,.42,0,.04)),rt.add(O(.65,.58,.1,i.cream,0,.7,-.25,.04))}const qe=new z(new Me(4.2,.35),new Se({map:bt("MEET YOUR FRIENDS & YOURSELF  /  好友与自我相遇",{w:1900,h:150,color:"#efe5cf",size:48,font:'"Helvetica Neue", Arial, sans-serif',tracking:6}),transparent:!0,toneMapped:!1}));qe.position.set(0,4.78,4.98),e.add(qe);const Mt=new z(new Me(gt-1,Nt-1),i.creamLight);Mt.rotation.x=-Math.PI/2,Mt.position.set(0,Bt+.22,0),Mt.receiveShadow=!0,e.add(Mt);const Ut=new z(new Me(3.4,2.3),i.glass);Ut.rotation.x=-Math.PI/2,Ut.position.set(1.4,Bt+.235,1.3),e.add(Ut);for(const[B,ae,rt,St]of[[1.4,.15,3.5,.06],[1.4,2.45,3.5,.06],[-.32,1.3,.06,2.4],[3.12,1.3,.06,2.4]])e.add(O(rt,.06,St,i.gold,B,Bt+.25,ae,.015));AS(e,i),CS(e,i),RS(e,i);const lt=xS(i,i.labelBand);return lt.position.set(-3.8,.02,8.25),lt.rotation.y=.42,lt.scale.setScalar(1.04),e.add(lt),e.userData.giantBottle=lt,Rh(e,!0,!0),e.traverse(B=>{B.isMesh&&B.material===i.glass&&(B.castShadow=!1)}),e}const _c={"f1-01":[-4.25,1.9,8],"f1-02":[-4,2.2,1.9],"f1-03":[-4.8,2,2.7],"f1-04":[5.9,2.2,0],"f1-05":[1.2,1.5,5.8],"f1-06":[4.4,1.8,1.4],"f2-01":[-.5,6.1,-3.1],"f2-02":[-4.8,6,-2.4],"f2-03":[4.8,6.1,-2.6],"f2-04":[-1,6.3,-2.1],"f2-05":[5.4,6.2,2],"f2-06":[-3.7,6,3.1]};function Ji(i,e,t,n,s){const r=new E().subVectors(e,i),a=r.length(),o=new An(n,t,a,7,1),l=new z(o,s);return l.position.copy(i).addScaledVector(r,.5),l.quaternion.setFromUnitVectors(new E(0,1,0),r.normalize()),l.castShadow=!0,l.receiveShadow=!0,l}function xu(i,e={}){const{height:t=6.4,spread:n=4.6,clusters:s=70,scale:r=1}=e,a=new _e,o=i.trunk,l=new E(0,0,0),c=new E(.1,t*.35,0),h=new E(-.3,t*.63,.15),d=new E(.1,t*.82,0);a.add(Ji(l,c,.52,.42,o)),a.add(Ji(c,h,.4,.3,o)),a.add(Ji(h,d,.29,.17,o));for(let v=0;v<7;v++){const I=v/7*Gn+.2,M=new E(0,.35,0),T=new E(Math.cos(I)*(1.1+Math.random()*.9),.02,Math.sin(I)*(1.1+Math.random()*.9));a.add(Ji(M,T,.22,.04,o))}const u=[];for(let v=0;v<10;v++){const I=v/10*Gn+(v%2?.22:0),M=new E(.05,t*(.65+Math.random()*.18),0),T=new E(Math.cos(I)*n*(.5+Math.random()*.6),t*(.83+Math.random()*.28),Math.sin(I)*n*(.5+Math.random()*.6));a.add(Ji(M,T,.18,.055,o)),u.push(T);for(let R=0;R<2;R++){const w=T.clone().add(new E((Math.random()-.5)*1.6,.9+Math.random()*.9,(Math.random()-.5)*1.6));a.add(Ji(T,w,.06,.018,o)),u.push(w)}}for(let v=0;v<9;v++){const I=Math.random()*Gn,M=n*(.5+Math.random()*.45),T=new E(Math.cos(I)*M,t*(.78+Math.random()*.25),Math.sin(I)*M),R=new E(T.x+(Math.random()-.5)*.4,1.3+Math.random()*1.5,T.z+(Math.random()-.5)*.4);a.add(Ji(T,R,.022,.008,i.trunkLight))}const f=new _e;f.userData.sway=!0,f.userData.noMerge=!0,f.userData.swayPhase=Math.random()*Math.PI*2,a.add(f);const m=new Zn(1,1),_=[i.foliageA,i.foliageB,i.foliageC],g=[0,1,2].map(()=>[]);for(let v=0;v<s;v++){let I;if(v<s*.65)I=u[Math.random()*u.length|0].clone().add(new E((Math.random()-.5)*1.4,(Math.random()-.2)*1,(Math.random()-.5)*1.4));else{const M=Math.random()*Gn,T=Math.random()*n*.95;I=new E(Math.cos(M)*T,t*(.85+Math.random()*.25),Math.sin(M)*T)}g[v%3].push({pos:I,s:.22+Math.random()*.42,r:Math.random()*Gn})}const p=new ot;g.forEach((v,I)=>{const M=new Vr(m,_[I],v.length);M.castShadow=!0,M.receiveShadow=!0,v.forEach((T,R)=>{p.position.copy(T.pos),p.rotation.set(T.r*.2,T.r,T.r*.1),p.scale.set(T.s*1.1,T.s*.82,T.s*1.1),p.updateMatrix(),M.setMatrixAt(R,p.matrix)}),M.instanceMatrix.needsUpdate=!0,f.add(M)});const x=new Me(1,1),y=new ot;for(let v=0;v<3;v++){const I=[];for(let T=0;T<105;T++){const R=Math.random()*Gn,w=Math.pow(Math.random(),.58)*n,S=t*(.78+Math.random()*.34);I.push({x:Math.cos(R)*w,y:S,z:Math.sin(R)*w*.82,s:.55+Math.random()*.8,r:Math.random()*Gn,t:(Math.random()-.5)*.6})}const M=new Vr(x,i.leafCards[v],I.length);M.castShadow=!1,M.receiveShadow=!1,I.forEach((T,R)=>{y.position.set(T.x,T.y,T.z),y.rotation.set(T.t,T.r+v*.8,T.t*.4),y.scale.set(T.s,T.s,T.s),y.updateMatrix(),M.setMatrixAt(R,y.matrix)}),M.instanceMatrix.needsUpdate=!0,f.add(M)}return a.scale.setScalar(r),a}function Mu(i,e,t,n){const s=new _e,r=new On(1,1,1),a=Math.ceil(e/.5)*Math.ceil(t/.5)+10,o=new Vr(r,i.hedge,a);o.castShadow=!0,o.receiveShadow=!0;const l=new ot;let c=0;for(let h=-e/2;h<e/2;h+=.48)for(let d=-t/2;d<t/2&&!(c>=a);d+=.48)l.position.set(h+(Math.random()-.5)*.16,n*.55+Math.random()*.1,d+(Math.random()-.5)*.16),l.scale.set(.5,n*(.75+Math.random()*.3),.5),l.rotation.y=Math.random(),l.updateMatrix(),o.setMatrixAt(c++,l.matrix);return o.instanceMatrix.needsUpdate=!0,s.add(o),s}function PS(i){const e=new _e,t=i.darkMetal;e.add(Ke(.045,.055,2.7,t,0,1.35,0,10));const n=new _e;n.position.set(0,2.2,0),e.add(n),n.add(O(1.22,.54,.08,i.greenDeep,0,0,0,.04)),n.add(O(1.26,.58,.03,i.gold,0,0,-.045,.04));const s=new z(new Me(1,.2),new Se({map:bt("NICE TO MEET YOU",{w:800,h:120,color:"#eee2c8",size:46,font:'"Helvetica Neue", Arial, sans-serif',tracking:5}),transparent:!0,toneMapped:!1}));s.position.set(0,.06,.05),n.add(s);const r=new z(new Me(.7,.14),new Se({map:bt("不惧油，自在见。",{w:600,h:100,color:"#c2d1c2",size:34,font:'"Songti SC", serif',tracking:2}),transparent:!0,toneMapped:!1}));return r.position.set(0,-.16,.05),n.add(r),e}function LS(i){const e=new _e,t=O(.8,.06,1,i.cream,0,0,0,.03);t.rotation.x=.18,e.add(t);const n=new _e;n.position.set(0,.44,.08),n.rotation.x=-.16,e.add(n),n.add(O(.8,.72,.05,i.creamLight,0,0,0,.03));const s=new z(new Me(.68,.56),new Se({map:bt(`NICE
TO MEET
YOU`,{w:500,h:620,color:"#2f5443",size:78,font:'"Helvetica Neue", Arial, sans-serif',tracking:4,lineHeight:90}),transparent:!0,toneMapped:!1}));s.position.set(0,0,.035),n.add(s);const r=new z(new Me(.64,.08),new Se({map:bt("不惧油，自在见。",{w:600,h:80,color:"#8d744d",size:28,font:'"Songti SC", serif'}),transparent:!0,toneMapped:!1}));return r.position.set(0,-.35,.12),e.add(r),e}function DS(i){const e=new _e,t=new _e;e.add(t),t.add(O(1.5,.58,.72,i.wood,0,.29,0,.04)),t.add(O(1.58,.06,.78,i.gold,0,.6,0,.03));for(const s of[-.58,.58])for(const r of[-.24,.24])t.add(Ke(.035,.035,.4,i.metal,s,.2,r,8));for(let s=0;s<5;s++){const r=Li(i,i.labelClean,{scale:1.2});r.position.set(-.53+s*.26,.66,-.06+s%2*.12),t.add(r)}const n=new z(new Me(.8,.18),new Se({map:bt("控油小茶瓶",{w:500,h:100,color:"#f2e8d5",size:44,font:'"Songti SC", serif',bg:"#2f5443"}),toneMapped:!1}));return n.position.set(0,.37,.38),e.add(n),e}function NS(i){const e=new _e;for(let l=0;l<7;l++){const c=-9+l*1.2,h=Ke(.055,.07,.75,i.darkMetal,c,.38,11.05,10);e.add(h);const d=Ke(.075,.075,.035,i.gold,c,.77,11.05,10);e.add(d)}for(const[l,c,h]of[[-8.1,8.4,.08],[8,8.1,-.1]]){const d=gS();d.position.set(l,.02,c),d.rotation.y=h,e.add(d)}for(const[l,c]of[[-7,10.2],[7.1,10]]){const h=_S(4.4);h.position.set(l,.02,c),h.rotation.y=Math.PI,e.add(h)}const t=xu(i,{height:6.8,spread:4.3,clusters:260,scale:1.08});t.position.set(-12.4,.02,1.4),e.add(t);const n=Nr(1.55,.16);n.position.set(-12.4,.03,1.4),e.add(n);const s=Mu(i,5.2,.9,.45);s.position.set(-12.4,.03,3.1),e.add(s);const r=Mu(i,3.8,.9,.45);r.position.set(-14.7,.03,1.4),r.rotation.y=Math.PI/2,e.add(r);const a=xu(i,{height:3.2,spread:1.9,clusters:48,scale:.7});a.position.set(12.4,.02,7.1),e.add(a);const o=Nr(.58,.1);o.position.set(12.4,.03,7.1),e.add(o);for(const[l,c]of[[-6.8,6.6],[-5.6,6.6],[6.9,5.8],[5.8,8.2],[-8.9,6.4]]){const h=Nr(.38,.48);h.position.set(l,.03,c),e.add(h)}return e}function US(i){const e=new _e,t=[{p:[-7.7,0,9],ry:.9,shirt:7244152,pants:3686202,bag:!0,pose:"walk",scale:1.02},{p:[4.2,0,8.6],ry:-.6,shirt:15063233,pants:6186332,pose:"stand",scale:.98},{p:[6.4,0,7.2],ry:2.4,shirt:9198927,pants:3094323,pose:"stand",scale:1.04,bag:!0},{p:[-6.7,0,6.6],ry:2.9,shirt:5204056,pants:4014909,pose:"walk",scale:.95},{p:[2,0,10.1],ry:-.2,shirt:10399386,pants:4934983,pose:"stand",scale:1},{p:[-9.2,0,8.3],ry:1.1,shirt:8286044,pants:4146497,pose:"sit",scale:1}];for(const n of t){const s=xp({shirt:n.shirt,pants:n.pants,bag:n.bag,pose:n.pose,scale:n.scale});s.position.set(...n.p),s.rotation.y=n.ry,n.pose==="sit"&&(s.position.y=.02),e.add(s);const r=new z(new Jn(.32*n.scale,20),new Se({color:5789519,transparent:!0,opacity:.16,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.set(n.p[0],.025,n.p[2]),e.add(r)}return e}function OS(i){const e=new _e,t=new z(new jr(36,.72,30,6,.4),new ge({color:12893872,roughness:.9}));t.position.set(0,-.37,2),t.castShadow=!0,t.receiveShadow=!0,e.add(t);const n=new z(new Me(29.5,22),i.paving);n.rotation.x=-Math.PI/2,n.position.set(-1.6,.012,1),n.receiveShadow=!0,e.add(n);const s=new z(new Me(36,5.4),i.asphalt);s.rotation.x=-Math.PI/2,s.position.set(0,.02,14.2),s.receiveShadow=!0,e.add(s);const r=new z(new Me(5.6,30),i.asphalt);r.rotation.x=-Math.PI/2,r.position.set(14.3,.018,2.2),r.receiveShadow=!0,e.add(r);for(const[c,h,d,u]of[[-1.6,11.42,30,.34],[11.44,0,.34,26]]){const f=O(d,.2,u,i.curb,c,.1,h,.06);e.add(f);const m=O(d-.1,.03,u-.05,new ge({color:14999250,roughness:.8}),c,.2,h,.02);e.add(m)}const a=new ge({color:15789797,roughness:.6});for(let c=0;c<14;c++){const h=O(1.2,.012,.13,a,-16+c*2.4,.028,14.2,0);e.add(h)}for(let c=0;c<8;c++){const h=O(.13,.012,1.2,a,14.3,.028,-10+c*2.4,0);e.add(h)}for(let c=0;c<7;c++){const h=O(.28,.014,3.6,a,9.1+c*.52,.03,13.9,0);e.add(h)}e.add(O(4.6,.014,.18,a,7.2,.03,12.3,0));for(let c=0;c<14;c++){const h=O(.03,.012,19,new ge({color:13090736,roughness:.8}),-13.1+c*1.9,.026,1,0);e.add(h)}for(const[c,h,d,u]of[[-12.5,1.2,5.9,4.7],[11.1,6.7,2.3,2.6],[-5.3,10.6,5.2,.9]]){const f=O(d,.06,u,new ge({color:7957331,roughness:.95}),c,.025,h,.02);e.add(f);const m=O(d+.18,.06,u+.18,i.curb,c,.015,h,.03);e.add(m)}const o=new Dn;o.moveTo(-.16,-.8),o.lineTo(.16,-.8),o.lineTo(.16,.2),o.lineTo(.4,.2),o.lineTo(0,.95),o.lineTo(-.4,.2),o.lineTo(-.16,.2),o.closePath();const l=new z(new vs(o),a);return l.rotation.x=-Math.PI/2,l.position.set(2.3,.035,14.2),e.add(l),e}function FS(i,e={}){const t=new _e,n=e.w||4.2,s=e.d||3.2,r=e.h||4.1;t.add(O(n,r,s,i.cream,0,r/2,0,.08)),t.add(O(n+.25,.22,s+.25,i.gold,0,r+.1,0,.04)),t.add(O(n*.66,1.8,.08,i.screenDark,-.25,1.25,s/2+.02,.02)),t.add(O(n*.7,.05,.1,i.gold,-.25,2.16,s/2+.03,.01)),t.add(O(.62,1.7,.08,i.woodDark,n*.34,1.15,s/2+.03,.02)),t.add(O(.72,.06,.12,i.gold,n*.34,2.01,s/2+.04,.01)),t.add(O(n*.58,.95,.06,i.glassGreen,-.28,r-1.1,s/2+.02,.02)),t.add(O(n*.58,.045,.07,i.gold,-.28,r-.63,s/2+.04,.01));const a=O(n*.92,.12,1,e.awning||i.green,0,2.5,s/2+.5,.04);a.rotation.x=-.08,t.add(a),t.add(O(n*.92,.035,.05,i.gold,0,2.44,s/2+1,.01));const o=new z(new Me(2.2,.3),new Se({map:bt(e.name||"街角小店",{w:800,h:120,color:"#f2e8d5",size:48,font:'"Songti SC", serif',tracking:3}),transparent:!0,toneMapped:!1}));o.position.set(0,r-.08,s/2+.19),t.add(o);const l=new _e;l.position.set(n/2+.08,r-.85,s/2-.42),l.rotation.y=Math.PI/2,t.add(l),l.add(O(.72,.34,.05,i.greenDeep,0,0,0,.02));const c=new z(new Me(.56,.2),new Se({map:bt("花房",{w:400,h:120,color:"#f2e8d5",size:54,font:'"Songti SC", serif',tracking:5}),transparent:!0,toneMapped:!1}));c.position.set(0,0,.035),l.add(c),t.add(Nr(.28,.34).translateX(-n/2+.3).translateZ(s/2+.45));for(let h=0;h<4;h++)t.add(O(n-.4,.035,.035,i.gold,0,r+.28,-s/2+.25+h*.7,.01));return t}function BS(i){const e=new _e;e.add(O(2.25,.72,1,i.wood,0,.38,0,.04)),e.add(O(2.34,.06,1.08,i.gold,0,.77,0,.02));for(const a of[-.95,.95])for(const o of[-.42,.42])e.add(O(.05,.72,.05,i.metal,a,.2,o,.01));const t=O(2.6,.09,1.3,i.green,0,2.25,0,.03);e.add(t);const n=O(2.68,.03,1.38,i.gold,0,2.31,0,.01);e.add(n);for(const a of[-1.1,1.1])e.add(O(.045,1.5,.045,i.gold,a,1.5,0,.01));const s=new z(new Me(1.2,.24),new Se({map:bt("花房 · FLOWERS",{w:700,h:120,color:"#f2e8d5",size:40,font:'"Songti SC", serif',tracking:2}),transparent:!0,toneMapped:!1}));s.position.set(0,2.12,.67),e.add(s);const r=[15124622,14260867,15852224,11847848,12879735];for(let a=0;a<11;a++){const o=-.85+a%4*.55,l=-.22+Math.floor(a/4)*.22,c=Ke(.012,.012,.44+a%3*.12,i.hedge,o,1.02+a%3*.05,l,6);e.add(c);const h=new z(new Zn(.105+a%2*.04,1),new ge({color:r[a%r.length],roughness:.7}));h.position.set(o,1.28+a%3*.1,l),e.add(h)}return e}function kS(i,e=5069390){const t=new _e,n=new ge({color:e,roughness:.48,metalness:.45}),s=new ge({color:2303779,roughness:.8});for(const a of[-.52,.52]){const o=new z(new $t(.36,.035,6,20),s);o.position.set(a,.38,0),o.rotation.y=Math.PI/2,t.add(o);const l=new z(new $t(.32,.008,4,20),n);l.position.copy(o.position),l.rotation.y=Math.PI/2,t.add(l)}for(const[a,o]of[[-.52,.38],[.52,.38]]);const r=[[[-.52,.38,0],[0,.72,0]],[[0,.72,0],[.36,.4,0]],[[.36,.4,0],[.52,.38,0]],[[-.52,.38,0],[-.1,.45,0]],[[-.1,.45,0],[.36,.4,0]],[[-.1,.45,0],[0,.72,0]]];for(const[a,o]of r){const l=new E(...a),c=new E(...o),h=l.distanceTo(c),d=new z(new An(.018,.018,h,6),n);d.position.copy(l).add(c).multiplyScalar(.5),d.quaternion.setFromUnitVectors(new E(0,1,0),c.clone().sub(l).normalize()),t.add(d)}return t.add(O(.34,.035,.035,n,0,.78,0,.01)),t.add(O(.22,.06,.12,i.ink,-.12,.78,0,.02)),t}function zS(i){const e=new _e,t=i.glassGreen;e.add(O(3.4,.12,1.1,i.greenDeep,1,2.55,0,.03));for(const r of[-.4,2.4])e.add(O(.06,2.4,.06,i.darkMetal,r,1.25,.42,.01));const n=new z(new Me(2.7,1.8),t);n.position.set(1,1.35,.44),n.rotation.y=0,e.add(n),e.add(O(3,.08,.38,i.wood,1,.5,.22,.03));for(const r of[.3,1.7])e.add(O(.35,.04,.4,i.metal,r,.52,.22,.01));const s=new z(new Me(1.1,.22),new Se({map:bt("CITY BUS",{w:500,h:100,color:"#e9dfc9",size:38,font:'"Helvetica Neue", Arial, sans-serif',tracking:4}),transparent:!0,toneMapped:!1}));return s.position.set(1,2.42,.53),e.add(s),e}function HS(i){const e=new _e;e.name="the-street",e.add(OS(i)),e.add(NS(i)),e.add(US());const t=PS(i);t.position.set(9,.02,9.9),t.rotation.y=-.22,e.add(t);const n=LS(i);n.position.set(-1,.03,7.2),n.rotation.y=-.25,e.add(n);const s=DS(i);s.position.set(6.8,.03,6),s.rotation.y=-.25,e.add(s);const r=FS(i,{w:3.8,d:2.9,h:3.8,name:"花房 · FLOWERS",awning:i.green});r.position.set(-13.2,.03,6.6),r.rotation.y=.06,e.add(r);const a=BS(i);a.position.set(-9,.03,6.1),a.rotation.y=.18,e.add(a);for(const[l,c,h]of[[-7.3,7.5,.35],[-6.9,7.8,.2],[-7.8,8.1,-.2]]){const d=kS(i,5858646);d.position.set(l,.03,c),d.rotation.y=h,e.add(d)}const o=zS(i);o.position.set(-14.9,.03,9.6),o.rotation.y=.1,e.add(o);for(const[l,c,h,d]of[[-16,10.2,2.2,2],[16.2,8.9,1.7,2.2]])e.add(O(h,.45,d,i.curb,l,.22,c,.08));return Rh(e,!0,!0),e}class VS{constructor(e,t={}){this.canvas=e,this.callbacks=t,this.clock=new bh,this.highlightId=null,this.pointer=new J,this.ready=!1,this.paused=!1,this.captureMode=new URLSearchParams(location.search).get("capture")==="1",this.renderer=new Rf({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t.dpr||1.6)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=Yt,this.renderer.toneMapping=Bc,this.renderer.toneMappingExposure=.88,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Fc,this.scene=new rh,this.scene.background=yp(),this.scene.background.mapping=fs,this.scene.fog=new sa(15657439,42,82),this.camera=new Xt(30,window.innerWidth/window.innerHeight,.1,120),this.camera.position.set(23.2,17.2,29.5),this.controls=new DM(this.camera,e),this.controls.target.set(2.2,3.2,2.5),this.controls.enableDamping=!0,this.controls.dampingFactor=.055,this.controls.enablePan=!1,this.controls.enableZoom=!0,this.controls.rotateSpeed=.35,this.controls.zoomSpeed=.65,this.controls.minDistance=32,this.controls.maxDistance=50,this.controls.minPolarAngle=1,this.controls.maxPolarAngle=1.28,this.controls.minAzimuthAngle=.55,this.controls.maxAzimuthAngle=1.02,this.controls.update(),this.isMobile=window.innerWidth<900,this.homePos=this.isMobile?new E(24.3,18.4,31):new E(23.2,17.2,29.5),this.homeTarget=this.isMobile?new E(-3.5,2.65,1.6):new E(2.2,3.2,2.5),this.camera.position.copy(this.homePos),this.controls.target.copy(this.homeTarget),this.controls.update(),this.env=pS(this.renderer),this.scene.environment=this.env,this.mats=mS(this.env),this.scene.backgroundIntensity=.9,this.lights(),this.street=HS(this.mats),this.scene.add(this.street),this.building=IS(this.mats),this.scene.add(this.building),this.building.userData.giantBottle.traverse(n=>{n.userData.noMerge=!0}),this.captureMode?(this.renderer.localClippingEnabled=!0,this.renderer.shadowMap.autoUpdate=!0):(this.optimizeStaticGeometry(),this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0),this.swayTrees=[],this.scene.traverse(n=>{n.userData.sway&&this.swayTrees.push(n)}),this.highlights=new _e,this.scene.add(this.highlights),this.buildHighlights(),this.makeParticles(),this.captureMode||this.addLife(),this.resize=this.resize.bind(this),window.addEventListener("resize",this.resize),this.resize(),this.animate=this.animate.bind(this),this._raf=requestAnimationFrame(this.animate),this.ready=!0}optimizeStaticGeometry(){this.scene.updateMatrixWorld(!0);const e=new Map;this.scene.traverse(n=>{if(!n.isMesh||n.isInstancedMesh||n.isSkinnedMesh)return;const s=n.material;if(!s||s.isShaderMaterial||s.transparent||s.opacity<1||s.depthWrite===!1||s.map&&s.map.isRenderTargetTexture)return;let r=n;for(;r&&r!==this.scene;){if(r.userData.noMerge)return;r=r.parent}const a=Object.keys(n.geometry.attributes).sort().join(","),o=s.uuid+"|"+a+"|"+(n.castShadow?1:0);e.has(o)||e.set(o,{material:s,items:[],cast:n.castShadow,receive:n.receiveShadow}),e.get(o).items.push({mesh:n,geometry:n.geometry})});let t=0;for(const n of e.values()){if(n.items.length<2)continue;const s=[],r=[];for(const l of n.items)try{let c=l.geometry.clone();c.applyMatrix4(l.mesh.matrixWorld);for(const h of Object.keys(c.attributes))["position","normal","uv"].includes(h)||c.deleteAttribute(h);if(c.index&&(c=c.toNonIndexed()),!c.attributes.position||!c.attributes.normal||!c.attributes.uv){c.dispose();continue}s.push(c),r.push(l.mesh)}catch{}if(r.length<2){s.forEach(l=>l.dispose());continue}let a=null;try{a=$M(s,!1)}catch{a=null}if(!a){s.forEach(l=>l.dispose());continue}const o=new z(a,n.material);o.castShadow=n.cast,o.receiveShadow=n.receive,o.frustumCulled=!0,this.scene.add(o),r.forEach(l=>{l.parent&&l.removeFromParent()}),t++}this._mergedMeshes=t}lights(){this.scene.add(new yh(14413551,14931646,.5));const e=new Zo(16772558,4.7);e.position.set(16,22,-9),e.target.position.set(-2,0,1),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-22,e.shadow.camera.right=22,e.shadow.camera.top=24,e.shadow.camera.bottom=-18,e.shadow.camera.near=.5,e.shadow.camera.far=60,e.shadow.bias=-35e-5,e.shadow.normalBias=.025,e.shadow.radius=2,this.scene.add(e,e.target);const t=new Zo(13624552,.5);t.position.set(-12,10,-8),this.scene.add(t),this.scene.add(new Mh(16775401,.18))}buildHighlights(){const e=Dr("#c5dcc6"),t=Dr("#efd7a3");for(const[s,r]of Object.entries(_c)){const a=new fl({map:s.startsWith("f2")?t:e,transparent:!0,opacity:0,depthWrite:!1,depthTest:!0,blending:Ks}),o=new ah(a);o.position.set(r[0],r[1],r[2]),o.scale.set(3.2,3.2,1),o.visible=!1,o.userData.node=s,this.highlights.add(o)}const n=new la(.45,.48,36);for(const[s,r]of Object.entries(_c)){const a=new z(n,new Se({color:s.startsWith("f2")?15255945:11125929,transparent:!0,opacity:0,side:Ct,depthWrite:!1}));a.position.set(r[0],r[1],r[2]),a.userData.node=s,a.userData.isRing=!0,this.highlights.add(a)}}highlight(e){this.highlightId=e,this.highlights.children.forEach(t=>{const n=t.userData.node===e;t.visible=n,t.userData.active=n})}setPaused(e){this.paused=!!e,this.paused||this.clock.getDelta()}clearHighlight(){this.highlightId=null,this.highlights.children.forEach(e=>{e.visible=!1,e.userData.active=!1})}addLife(){this.walkers=[];const e=r=>{const a=xp({shirt:r.shirt,pants:r.pants,bag:r.bag,pose:"walk",scale:r.scale||.95});a.traverse(l=>{l.isMesh&&(l.castShadow=!1)}),r.fade&&a.traverse(l=>{l.isMesh&&(l.material=l.material.clone(),l.material.transparent=!0,l.material.opacity=1,l.material.depthWrite=!0)});const o=new z(new Jn(.3,18),new Se({color:4934982,transparent:!0,opacity:.16,depthWrite:!1}));return o.rotation.x=-Math.PI/2,o.position.y=.025,a.add(o),a.userData.shadow=o,a.userData.walker=r,a.userData.clock=r.phase||0,this.scene.add(a),this.walkers.push(a),a},t=new Ir([new E(-8.2,.02,10.7),new E(-4,.02,10.55),new E(0,.02,10.55),new E(4,.02,10.45),new E(7.6,.02,10.5),new E(8.6,.02,8.9),new E(4.7,.02,7.95),new E(0,.02,8.35),new E(-3.8,.02,10.95),new E(-7.2,.02,10.9)],!0,"catmullrom",.2),n=new Ir([new E(-7,.02,10.8),new E(-4.8,.02,10.7),new E(-2.2,.02,9.7),new E(.3,.02,8.4),new E(2.15,.02,6.2),new E(2.15,.02,3.65)]),s=new Ir([new E(2.15,.02,3.65),new E(2.15,.02,5.7),new E(3.7,.02,7.6),new E(6.2,.02,9.55)]);e({shirt:7244152,pants:3489079,bag:!0,scale:1,phase:0,type:"loop",curve:t,speed:.018,dir:1}),e({shirt:14205859,pants:5001546,bag:!1,scale:.94,phase:3.4,type:"loop",curve:t,speed:.014,dir:-1}),e({shirt:5204056,pants:3094322,bag:!0,scale:.98,phase:0,type:"enter",curve:n,speed:.048,fade:!0}),e({shirt:9264201,pants:3555129,bag:!1,scale:.96,phase:4.2,type:"exit",curve:s,speed:.046,fade:!0})}makeParticles(){const t=new je,n=new Float32Array(140*3);for(let r=0;r<140;r++)n[r*3]=(Math.random()-.5)*30,n[r*3+1]=.4+Math.random()*9,n[r*3+2]=(Math.random()-.5)*26;t.setAttribute("position",new _t(n,3));const s=new ml({color:16775396,size:.035,transparent:!0,opacity:.5,depthWrite:!1,blending:Ks});this.particles=new lh(t,s),this.scene.add(this.particles)}screenPosition(e){const t=_c[e];if(!t)return null;const n=new E(t[0],t[1],t[2]).project(this.camera);return{x:(n.x*.5+.5)*window.innerWidth,y:(-n.y*.5+.5)*window.innerHeight,behind:n.z>1}}resetView(e=!0){const t=this.homePos.clone(),n=this.homeTarget.clone();if(!e){this.camera.position.copy(t),this.controls.target.copy(n),this.controls.update();return}const s=this.camera.position.clone(),r=this.controls.target.clone(),a=performance.now(),o=900,l=c=>{const h=Math.min(1,(c-a)/o),d=1-Math.pow(1-h,4);this.camera.position.lerpVectors(s,t,d),this.controls.target.lerpVectors(r,n,d),this.controls.update(),h<1&&requestAnimationFrame(l)};requestAnimationFrame(l)}resize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.fov=e<900?42:30,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e<760?1.75:1.6)),this.renderer.setSize(e,t),e<760?(this.controls.minDistance=30,this.controls.maxDistance=50):(this.controls.minDistance=32,this.controls.maxDistance=50)}animate(){if(this._raf=requestAnimationFrame(this.animate),this.paused)return;const e=this.clock.getElapsedTime();if(this.controls.update(),this.swayTrees.forEach(t=>{const n=t.userData.swayPhase||0;t.rotation.z=Math.sin(e*.72+n)*.0045,t.rotation.x=Math.sin(e*.51+n*1.3)*.0032}),this.walkers)for(const t of this.walkers){const n=t.userData.walker;let s=(e*n.speed+(n.phase||0)*.1)%1;n.type==="loop"&&n.dir<0&&(s=1-s);const r=n.curve.getPointAt(s),a=n.curve.getTangentAt(s);t.position.set(r.x,.02+Math.abs(Math.sin(e*6.2+(n.phase||0)))*.025,r.z),t.rotation.y=Math.atan2(a.x*(n.dir||1),a.z*(n.dir||1));const o=Math.sin(e*7.2+(n.phase||0))*.42,l=t.userData.limbs;l&&(l.legL.rotation.x=o,l.legR.rotation.x=-o,l.armL.rotation.x=-o*.7,l.armR.rotation.x=o*.7);let c=1;n.type==="enter"&&(c=s<.84?1:Math.max(0,1-(s-.84)/.1)),n.type==="exit"&&(c=s<.18?0:Math.min(1,(s-.18)/.12)),n.fade&&(t.traverse(h=>{h.isMesh&&h.material&&(h.material.opacity=c)}),t.userData.shadow&&(t.userData.shadow.material.opacity=.16*c))}this.highlights.children.forEach(t=>{if(!t.userData.active)return;const n=t.material;if(t.userData.isRing){n.opacity=.22+Math.sin(e*2.2)*.08,t.lookAt(this.camera.position);const s=1+Math.sin(e*2.2)*.08;t.scale.set(s,s,s)}else{n.opacity=.55+Math.sin(e*1.8)*.14;const s=3.1+Math.sin(e*1.8)*.22;t.scale.set(s,s,1)}}),this.particles&&(this.particles.rotation.y=e*.004,this.particles.position.y=Math.sin(e*.08)*.05),this.renderer.render(this.scene,this.camera)}destroy(){cancelAnimationFrame(this._raf),window.removeEventListener("resize",this.resize),this.controls.dispose(),this.renderer.dispose()}}const Ys={f1:{id:"f1",num:"FLOOR 01",title:"MEET YOUR<br>FRESHNESS",cn:"清爽相遇",short:"一楼",subtitle:"从一瓶控油小茶瓶开始，重新认识头皮与清爽。",nodes:[{id:"f1-01",index:"01",short:"产品初见",enShort:"PRODUCT DEBUT",type:"product",title:"一瓶洗发水，<br>不止于清洁。",en:"MEET YOUR FRESHNESS.",lead:"它是 100年润发冷萃国风控油蓬松洗发露，也是年轻人愿意带进日常的「控油小茶瓶」。从温和清洁到发根蓬松，从高山乌龙到新会青柑，一瓶装下清爽、从容与东方茶香。",kicker:"THE FIRST HELLO",story:[["产品全称","100年润发冷萃国风控油蓬松洗发露"],["产品昵称","控油小茶瓶"],["净含量","480ml"],["香调","高山乌龙 · 新会青柑"]],audience:[["18—35岁","年轻消费者"],["油头 / 细软塌","核心发质人群"],["不想每日洗头","追求长效清爽"]],needs:["温和清洁","改善头油","发根蓬松","清新茶香"],tags:["温和清洁","科学控油","水油平衡","蓬松轻盈","东方茶香"],note:"不是把「去油」做得更猛，而是把头皮当作一个需要被温柔对待的生态系统。"},{id:"f1-02",index:"02",short:"四维控油",enShort:"SCALP SCIENCE",type:"fourdim",title:"控油，<br>不等于过度清洁。",en:"FOUR-DIMENSIONAL SCALP CARE.",lead:"头皮不是一块需要反复擦洗的玻璃。100年润发以头皮生态科学控油四维体系，在清洁、控油、水油平衡与微生态养护之间，找到更温和的秩序。",kicker:"A GENTLER LOGIC",dimensions:[{num:"01",title:"温和清洁",en:"GENTLE CLEANSE",icon:"leaf",text:"采用菁纯小分子植物氨基酸及氨基酸表活，帮助清洁头皮与发丝，减少过度清洁带来的紧绷干涩感。",tag:"不紧绷 · 不拔干"},{num:"02",title:"深层控油",en:"OIL CONTROL",icon:"drop",text:"围绕多余油脂进行管理，帮助改善头油与发根扁塌问题，让清爽不止停留在洗完的那一刻。",tag:"管理多余油脂"},{num:"03",title:"水油平衡",en:"BALANCE",icon:"balance",text:"兼顾清洁与润养，避免只强调强力去油。清爽不是「什么都没有」，而是头皮舒适、发丝有润感。",tag:"清洁 + 润养"},{num:"04",title:"微生态养护",en:"MICROBIOME",icon:"circle",text:"关注头皮环境的整体养护，让清洁、控油和润养形成完整体系，以长期主义替代一次性强清洁。",tag:"长期主义"}],note:"四维不是四个孤立的步骤，而是一套彼此支撑的头皮护理逻辑。"},{id:"f1-03",index:"03",short:"五维成分",enShort:"FORMULA MATRIX",type:"ingredients",title:"五种核心成分，<br>协同管理油头。",en:"FIVE-DIMENSIONAL FORMULA.",lead:"油头「五维矩阵」不是成分的简单叠加。AMI 净油因子、控油酵母锌、99% 菁纯小分子植物氨基酸、高纯度茶多酚与烟酰胺，各自负责一件事，再共同完成头皮水油平衡这道题。",kicker:"THE FORMULA",ingredients:[{num:"01",name:"AMI 净油因子",en:"AMI CLEANSING FACTOR",color:"mint",icon:"molecule",role:"油脂管理",text:"围绕多余油脂管理，参与产品控油体系。它让清洁更有方向，而不是一味提高脱脂力。",point:"围绕多余油脂做减法"},{num:"02",name:"控油酵母锌",en:"OIL-CONTROL YEAST ZINC",color:"gold",icon:"zinc",role:"控油协同",text:"作为配方中的控油成分，参与油脂管理，与净油因子协同工作，维持清爽状态。",point:"油头管理矩阵成员"},{num:"03",name:"99% 菁纯小分子植物氨基酸",en:"PLANT AMINO ACIDS",color:"cream",icon:"amino",role:"润养发丝",text:"帮助补充发丝水分，提升发丝顺滑光泽，同时配合温和清洁体系，让洗后不干涩。",point:"温和清洁的润感来源"},{num:"04",name:"高纯度茶多酚",en:"TEA POLYPHENOLS",color:"tea",icon:"tea",role:"东方植萃",text:"产品核心东方植物功效成分。来自浙江安吉高山绿茶原料，采用低温冷萃工艺，最大限度保留茶多酚活性。",point:"功效原料 × 茶香灵感"},{num:"05",name:"烟酰胺",en:"NIACINAMIDE",color:"rose",icon:"niacinamide",role:"头皮护理",text:"作为五维矩阵中的重要成分，参与产品头皮护理体系，为清爽蓬松的完整体验补上护理一环。",point:"头皮护理体系成员"}],note:"茶多酚不只是香味概念。它同时是功效原料与东方茶香灵感，这正是「茶」的双重价值。"},{id:"f1-04",index:"04",short:"96小时蓬松",enShort:"96H FRESHNESS",type:"hours",title:"不必每天，<br>被洗头安排。",en:"96 HOURS OF FRESHNESS.",lead:"把时间还给自己。控油小茶瓶以 96 小时控油蓬松、发根挺立 3cm、2 倍发量感与 48 小时青丝绽香，为忙碌生活留出更从容的呼吸感。",kicker:"A LITTLE MORE TIME",stats:[{big:"96",unit:"小时",label:"控油蓬松",en:"OIL CONTROL & FLUFFY",note:"拉长控油周期，减少「一天一洗」的焦虑。"},{big:"3",unit:"cm",label:"发根蓬松挺立",en:"ROOT LIFT",note:"提升发根支撑力，让清爽更立体。"},{big:"2",unit:"×",label:"发量感蓬松",en:"VISUAL VOLUME",note:"视觉发量提升，是使用后的附带结果。"},{big:"48",unit:"小时",label:"青丝绽香",en:"SCENT ON HAIR",note:"高山乌龙与新会青柑，茶香持久附着发丝。"}],timeline:[["0H","清爽开启","洗护完成，发根轻盈，茶香初醒。"],["24H","轻盈继续","迎接新一天，不必为头发状态过度准备。"],["48H","从容相见","学习、工作与社交，依然保持体面。"],["72H","安排自由","日常节奏不必被洗头时间切割。"],["96H","自在见","产品主张所强调的长效控油蓬松价值。"]],disclaimer:"以上为产品资料所列功效指标。实际洗护频率应根据个人头皮状况调整，96 小时为产品传播演示，不意味着每个人都必须 96 小时不洗头。"},{id:"f1-05",index:"05",short:"生活场景",enShort:"LIFE IN MOTION",type:"scenes",title:"不被头油困住，<br>想见谁就去见。",en:"FRESHNESS IN EVERY MOMENT.",lead:"清爽不是一句功效术语，它发生在多睡十分钟的早晨、临时约见的电梯里、吹过天台的晚风里。四个生活切片，四种更自在的相遇。",kicker:"LIFE, UNSTYLED",scenes:[{id:"commute",num:"01",name:"早八通勤",en:"MORNING COMMUTE",image:"/assets/scenes/scene-commute.jpg",featureImage:"/assets/scenes/scene-sleep.jpg",headline:"多睡十分钟，把早晨还给自己。",body:"前一晚完成洗护，第二天发根依旧蓬松挺立。无需早起洗头吹造型，少一点手忙脚乱，多一点从容出门。",product:"96h 控油蓬松 · 发根支撑",color:"dawn"},{id:"busy",num:"02",name:"高强度生活",en:"STUDY / WORK / TRAINING",image:"/assets/scenes/scene-busy.jpg",featureImage:"/assets/scenes/scene-busy.jpg",headline:"忙碌的日子，也要保持自己的节奏。",body:"军训、图书馆备考、连轴转的办公室——在洗头条件有限、作息压力大的时刻，维持头发蓬松体面，做自己的形象兜底装备。",product:"长效清爽 · 不惧油",color:"olive"},{id:"social",num:"03",name:"社交约会",en:"A SPONTANEOUS HELLO",image:"/assets/scenes/scene-social.jpg",featureImage:"/assets/scenes/scene-social.jpg",headline:"临时见面，也能从容一点。",body:"电梯镜子里发现头油反光、合影时头发贴头皮、赴约前发根塌陷——这些「油塌社死瞬间」，可以被一瓶小茶瓶提前化解。",product:"轻盈蓬松 · 清新茶香",color:"peach"},{id:"travel",num:"04",name:"旅行与运动",en:"WIND & FREEDOM",image:"/assets/scenes/scene-travel.jpg",featureImage:"/assets/scenes/scene-travel.jpg",headline:"让秀发像风一样自由。",body:"骑共享单车的晚风、地铁口的风、天台发呆的风。轻盈蓬松的发丝和若隐若现的茶香，把风感美学变成可感知的日常。",product:"风感美学 · 东方茶香",color:"sky"}]},{id:"f1-06",index:"06",short:"洗护体验",enShort:"TRY IT YOURSELF",type:"experience",title:"好的产品，<br>值得亲自体验。",en:"TRY IT YOURSELF.",lead:"在快闪店的一楼，我们把「看产品」变成一次真正的洗护体验。从认识、清洗、吹整到反馈，让清爽被身体记住，而不只是被文字说服。",kicker:"THE HANDS-ON HELLO",steps:[["01","产品认识","了解控油小茶瓶的五维成分与四维控油逻辑。"],["02","洗护体验","在专业洗护位使用产品完成一次实际清洁。"],["03","吹干整理","通过吹风与梳理，感受发根蓬松挺立的变化。"],["04","体验反馈","记录使用感受，生成属于你的清爽档案。"]],quiz:{question:"你的头发今天是什么状态？",options:[{key:"fresh",label:"刚洗完，清爽在线",result:"清爽优等生",desc:"今天的你已经是风感状态满格。保持温和清洁节奏，别让「过度洗护」偷走头皮本来的舒适。",advice:"建议：今晚无需重复清洁，让发根继续轻盈呼吸。"},{key:"slight",label:"有一点油，但还算蓬松",result:"轻盈进行时",desc:"状态还在线，只是发根开始提醒你：该给头皮一点清爽管理了。",advice:"建议：用温水充分起泡，重点清洁头皮，护发素只停留发梢。"},{key:"flat",label:"发根开始扁塌",result:"需要一点支撑力",desc:"发根贴头皮并不代表你不精致，只是今天的头发想要一点蓬松的空间。",advice:"建议：洗后逆向吹干发根，配合小茶瓶的蓬松支撑力。"},{key:"rest",label:"今天想给头发放个假",result:"松弛优先主义者",desc:"不洗头也可以是一种自在。品牌不贩卖焦虑，你的舒适感永远排在第一位。",advice:"建议：干发喷雾应急，或把见面改到明天。自在见，不急于一时。"}]},note:"不必被头油困住，让每一次相遇都更加自在。"}]},f2:{id:"f2",num:"FLOOR 02",title:"MEET YOUR FRIENDS<br>&amp; YOURSELF",cn:"好友与自我相遇",short:"二楼",subtitle:"在见面、分享与独处之间，遇见更自在的自己。",nodes:[{id:"f2-01",index:"01",short:"好友相遇",enShort:"MEET YOUR FRIENDS",type:"friends",title:"好久不见，<br>今天见面吧。",en:"MEET YOUR FRIENDS.",lead:"NICE TO MEET YOU 不只是一句欢迎语，也是一张给好朋友的邀请函。二楼的合影装置、留言墙与双人互动桌，让「见面」重新成为一件值得郑重其事的小事。",kicker:"A REASON TO MEET",features:[["立体艺术字","3.6 米高的 NICE TO MEET YOU 立体字，成为整层最醒目的见面坐标。"],["好友打卡墙","一面可以写下名字、贴上拍立得的见面墙，记录每一次真实的相聚。"],["双人互动桌","坐下、点单、聊天，或者一起完成一份默契测试。"],["限定合影位","以品牌绿、奶油白与飘带为背景，为两个人留下一张好看的合照。"]],quiz:[{q:"谁更容易迟到？",a:"我，永远在路上",b:"TA，永远在挑衣服"},{q:"谁更喜欢拍照？",a:"我，先拍再说",b:"TA，拍一百张选一张"},{q:"谁更容易因为小事开心？",a:"我，快乐门槛很低",b:"TA，被一杯茶收买"}],tags:["#NICE TO MEET YOU","#今天见面吧","#好久不见"]},{id:"f2-02",index:"02",short:"茶饮联名",enShort:"FRESHNESS MEETS TEA",type:"tea",title:"一杯茶的时间，<br>遇见一个好朋友。",en:"FRESHNESS MEETS TEA.",lead:"当东方茶香从发丝延伸到杯中，见面就有了新的理由。100年润发 × 霸王茶姬拟合作企划，以「清爽搭子，见面有茶」为题，把洗护与茶饮放进同一个下午。",kicker:"A CUP OF HELLO",heroImage:"/assets/scenes/scene-tea-poster.jpg",posterImage:"/assets/scenes/scene-tea-cup.jpg",collab:"拟合作创意 · CONCEPT COLLABORATION",modules:[["01","联名茶饮","以高山乌龙与新会青柑为风味线索，设计一款清爽型主题茶饮：入口是青柑的明亮，尾韵是乌龙的清润。"],["02","联名杯套","品牌绿、奶油白与东方茶叶纹样交织，正面呈现 NICE TO MEET YOU 主题字样，成为走在街上也愿意被看见的「见面信号」。"],["03","完整包装","杯身、杯套、贴纸、纸袋与限定礼盒构成一套完整视觉，让一次购买变成一次可以被分享的相遇。"],["04","消费联动","购买指定茶饮，获得控油小茶瓶体验装或优惠券；购买指定洗护产品，获得茶饮兑换权益。"],["05","社交传播","发起「今天和谁一起喝茶见面」主题打卡，鼓励用户@那个很久没见的人。"]],note:"该联名属于拟合作创意方向，不代表已正式签约或已上市销售。"},{id:"f2-03",index:"03",short:"运动挑战",enShort:"MOVE FREELY",type:"keep",title:"运动的快乐，<br>不应该被外在状态限制。",en:"MOVE FREELY, FEEL FRESH.",lead:"100年润发 × Keep 女性运动挑战拟合作企划。我们想谈论的不是「运动后不能出汗」，而是运动之后，你依然可以自在、清爽、理直气壮地走进下一场见面。",kicker:"A BODY IN MOTION",heroImage:"/assets/scenes/scene-keep-athlete.jpg",posterImage:"/assets/scenes/scene-keep-illustration.jpg",collab:"拟合作创意 · CONCEPT COLLABORATION",modules:[["01","线上挑战","在 Keep 设置女性运动主题挑战，完成指定跑步或运动任务，解锁限定电子勋章。"],["02","线下活动","在城市公园或高校开展女性主题跑步活动，以 3km / 5km 轻量组别降低参与门槛。"],["03","品牌补给站","设置运动补给点、洗护体验区与产品展示台，让跑完步的清爽有处可去。"],["04","活动周边","联名运动毛巾、运动勋章、主题手环，以品牌绿与奶油白构建轻运动视觉。"],["05","传播话题","#跑完步依然自在见#，记录运动后的真实状态，而不是完美无汗的假象。"]],disclaimer:"该联名属于拟合作创意。产品不主张阻止出汗，也不承诺运动后头发不出油；我们只关心运动后的你，依然拥有自在选择。"},{id:"f2-04",index:"04",short:"东方美学",enShort:"BEAUTY OF THE EAST",type:"museum",title:"从东方发饰，<br>到当代秀发之美。",en:"MEET THE BEAUTY OF THE EAST.",lead:"发髻、步摇、梳篦与簪花，古人把对美的理解藏进发丝之间。100年润发 × 博物馆拟合作主题，以当代东方视觉与概念设计，重新讲述东方发饰文化与当代洗护的关系。",kicker:"A THOUSAND YEARS OF BEAUTY",heroImage:"/assets/scenes/scene-museum-qipao.jpg",storyImage:"/assets/scenes/scene-museum-tang.jpg",collab:"拟合作创意 · 原创概念视觉",eras:[["唐","高髻与簪花","唐代仕女的高髻丰盈、舒展，花与簪层层叠叠，像一座微缩的东方花园。"],["宋","低髻与素雅","克制、清雅、含蓄的美。少即是多，一根素簪也能完整表达气质。"],["今","蓬松与自在","今天的东方美不再只有一种标准。发根轻盈、发丝有光泽，自在就是最好的造型。"]],collection:[["东方发饰礼盒","以发髻轮廓与缠枝纹样为灵感的洗护礼盒，内含控油小茶瓶与限定发饰。"],["纹样文创贴纸","提取传统纹样进行原创再设计，不复制、不伪造任何具体馆藏文物。"],["香气体验卡","高山乌龙与新会青柑的茶香，被制成可随身携带的东方气味卡。"]],exhibition:{title:"一间会呼吸的东方发饰小展",desc:"以当代东方影像、动态投影与实物装置，搭建一个 60 平方米的微型展览。没有玻璃展柜的距离感，观众可以走近、坐下，也可以在镜前试戴一支发簪。",stations:[["01","发髻的形态","用三组动态剪影拆解高髻、低髻与垂髻的结构，呈现东方发型与身份、场合之间的关系。"],["02","发饰的细节","以原创纹样放大簪、钗、梳、篦的轮廓，让日常小物被重新看见。"],["03","今天的表达","把传统发饰的线条转译为当代发夹、抓夹与洗护礼盒，传统不止于被观看。"]]},communication:[["发髻的一天","以第一人称视角记录一位女孩从晨起梳发到夜晚洗护的一天，把东方发饰文化放进当代生活节奏。"],["一根簪子的旅行","用轻盈的动画讲述一根簪子穿过不同朝代与不同女性的发间，最终落在今天的梳妆台上。"],["今天的东方美","邀请不同职业、不同发质的女性，聊聊她们理解的东方美与自在。"]],disclaimer:"博物馆合作、馆藏形象及文创授权均为拟合作方向。页面视觉为品牌概念视觉，不涉及真实馆藏信息。"},{id:"f2-05",index:"05",short:"自我相遇",enShort:"MEET YOURSELF",type:"self",title:"很高兴，<br>遇见现在的自己。",en:"MEET YOURSELF.",lead:"在所有的相遇里，最值得认真对待的一次，是和自己的相遇。穿过不规则镜面与白色飘带，在二楼的尽头，给自己留一句话。",kicker:"THE QUIETEST HELLO",quotes:["不必迎合每一种目光，也不必被头发状态困住。","每一种状态的自己，都值得被喜欢。","让秀发像风一样自由。"],features:[["艺术镜面装置","不规则波浪镜面与柔和灯带，让每个角度都成为一幅独立的画。"],["主题拍照区","白色半透明飘带、自然光、圆形平台，捕捉发丝被风托起的瞬间。"],["自我寄语墙","写下一句话送给现在的自己，生成一张可以保存的电子卡片。"],["独处座位","不社交也没关系。窗边留了一个位置，给只想安静坐一会儿的你。"]]},{id:"f2-06",index:"06",short:"内容延展",enShort:"EVERY MOMENT MATTERS",type:"content",title:"从一次相遇，<br>到更多次相见。",en:"EVERY MOMENT MATTERS.",lead:"快闪店是一个起点，而不是终点。三部微短剧、一场主题直播、一轮社交内容，让 NICE TO MEET YOU 从空间走进日常，从一次见面变成持续相伴。",kicker:"THE STORY CONTINUES",dramas:[{title:"好久不见",tag:"友",color:"gold",logline:"两个多年未见的朋友，因为一杯茶和一瓶洗发水，重新走进彼此的生活。",cast:["林夏 · 回到城市的她","周予 · 留在原地的他"],highlight:"把「改天见」变成「今天见」的勇气。",placement:"自然植入控油小茶瓶与茶饮联名场景，不抢戏，只做故事的连接点。"},{title:"今天也要闪闪发光",tag:"你",color:"mint",logline:"一个总觉得自己「还不够好」的年轻女孩，在一次次微小的选择里，慢慢找回自信。",cast:["小满 · 初入职场的她","阿禾 · 她的好友兼室友"],highlight:"不贩卖容貌焦虑，只记录自我接纳的瞬间。",placement:"以洗护仪式感与发丝状态变化，映射情绪转折。"},{title:"出门前的五分钟",tag:"油",color:"peach",logline:"早晨 7:55，距离出门只剩五分钟，头发却发出了不配合的信号。一场关于头油、时间与从容的轻喜剧。",cast:["陈屿 · 永远踩点的上班族","室友 · 人间清醒担当"],highlight:"用轻松方式还原真实的「油塌社死瞬间」。",placement:"产品作为解决问题的关键道具出现，功能点自然落地。"}],live:[["清爽洗护体验","主播现场演示洗护过程，展示泡沫、冲洗与吹整后的发根状态。"],["好友推荐好物","邀请嘉宾做客直播间，以真实朋友的身份分享使用感受。"],["悦己生活分享","从洗护仪式感延伸到自我照顾与生活方式的讨论。"],["产品讲解","五维成分、四维控油与香调故事，用可视化道具讲清楚。"],["直播专属权益","限定组合套装、直播间优惠与联名周边，承接即时转化。"]],loop:["内容种草","线下体验","联名传播","短剧延续","直播承接"]}]}};[...Ys.f1.nodes,...Ys.f2.nodes];const Zs=(i="")=>`<svg class="leaf-mark ${i}" viewBox="0 0 120 160" aria-hidden="true">
  <path d="M62 150C58 110 48 72 18 34c31 3 50 13 65 29 20 22 19 57-21 87Z" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <path d="M60 147c2-35 0-67-6-93M58 117c-12-9-22-15-31-20M59 98c11-9 19-15 26-24M56 76c-10-7-18-12-26-15M55 130c13-8 23-16 30-26" fill="none" stroke="currentColor" stroke-width=".9" opacity=".8"/>
</svg>`,El=(i,e="")=>{const t={drop:'<path d="M32 8C24 20 14 31 14 45a18 18 0 0 0 36 0C50 31 40 20 32 8Z"/><path d="M23 46c0 6 4 10 10 11"/>',leaf:'<path d="M49 10C27 18 15 35 15 49c18 0 34-11 40-31"/><path d="M13 51C20 40 30 31 42 27M26 47c2 9 8 15 17 18"/>',balance:'<circle cx="32" cy="32" r="22"/><path d="M32 10v44M13 26h38M20 26l-8 14h16l-8-14Zm24 0-8 14h16l-8-14Z"/>',circle:'<circle cx="32" cy="32" r="21"/><circle cx="32" cy="32" r="9"/><path d="M32 11v8M32 45v8M11 32h8M45 32h8"/>',molecule:'<circle cx="16" cy="20" r="6"/><circle cx="48" cy="14" r="5"/><circle cx="43" cy="46" r="7"/><path d="M22 18l20-3M21 25l17 16M45 20l-2 19"/><circle cx="27" cy="42" r="3"/>',zinc:'<path d="M32 7 54 20v24L32 57 10 44V20Z"/><path d="M32 18v28M22 25h20M22 39h20" opacity=".8"/>',amino:'<path d="M13 45c0-15 10-28 29-33-2 18-9 30-22 36"/><path d="M15 49c11-9 22-16 31-23M24 15l7 22M41 51l7-13"/><circle cx="17" cy="52" r="2.5"/>',tea:'<path d="M10 38c9-15 22-22 40-24-2 17-11 29-26 34M21 47c9-16 20-26 36-31M30 52c-4 3-8 4-14 4"/>',niacinamide:'<path d="M14 22 32 12l18 10v20L32 52 14 42Z"/><circle cx="32" cy="32" r="6"/><path d="M32 26V16M32 48v-8M26 32H16M48 32h-10"/>',clock:'<circle cx="32" cy="32" r="23"/><path d="M32 17v16l11 7"/><path d="M32 5v6M32 53v6M5 32h6M53 32h6"/>',pin:'<path d="M32 57s18-16 18-30A18 18 0 0 0 14 27c0 14 18 30 18 30Z"/><circle cx="32" cy="27" r="7"/>',arrow:'<path d="M8 32h45M41 18l14 14-14 14"/>'};return`<svg class="icon ${e}" viewBox="0 0 64 64" aria-hidden="true">${t[i]||t.leaf}</svg>`},GS=i=>i.type==="product"?`<div class="hero-art art-product">
    <div class="product-halo"></div>
    <div class="product-orbit orbit-a"></div><div class="product-orbit orbit-b"></div>
    <img class="hero-bottle" src="/assets/product-cutout.png" alt="100年润发控油小茶瓶产品图" />
    <span class="floating-note note-top">96H<br><em>FRESHNESS</em></span>
    <span class="floating-note note-bottom">480ml<br><em>TEA SCENT</em></span>
    <span class="art-caption">控油小茶瓶 · 冷萃国风</span>
  </div>`:i.type==="fourdim"?`<div class="hero-art art-fourdim">
    <div class="scalp-map">
      <span class="scalp-ring r1"></span><span class="scalp-ring r2"></span><span class="scalp-ring r3"></span>
      <span class="scalp-core"><b>4D</b><small>SCALP<br>BALANCE</small></span>
      <span class="scalp-label sl1">清洁</span><span class="scalp-label sl2">控油</span><span class="scalp-label sl3">平衡</span><span class="scalp-label sl4">养护</span>
    </div>
    ${Zs("fourdim-leaf")}
    <span class="art-caption">温和清洁 · 不拔干</span>
  </div>`:i.type==="ingredients"?`<div class="hero-art art-ingredients">
    <div class="formula-disc">
      <span class="formula-ring"></span>
      <b>5</b><small>DIMENSIONAL<br>FORMULA</small>
      <i class="mini-dot md1"></i><i class="mini-dot md2"></i><i class="mini-dot md3"></i><i class="mini-dot md4"></i><i class="mini-dot md5"></i>
    </div>
    <div class="tea-leaf-art">${Zs("")}</div>
    <span class="formula-label fl1">茶多酚</span><span class="formula-label fl2">酵母锌</span><span class="formula-label fl3">氨基酸</span>
    <span class="art-caption">五种成分 · 协同管理</span>
  </div>`:i.type==="hours"?`<div class="hero-art art-hours">
    <div class="hours-clock"><div class="clock-face"><span class="clock-tick t1"></span><span class="clock-tick t2"></span><span class="clock-tick t3"></span><span class="clock-tick t4"></span><span class="clock-hand"></span><b>96<small>H</small></b></div></div>
    <span class="art-caption">LONG-LASTING FRESHNESS</span>
  </div>`:i.type==="scenes"?`<div class="hero-art art-scenes photo-mosaic">
    <div class="scene-mosaic">
      ${i.scenes.map(e=>`<img src="${e.image}" alt="${e.name}生活场景" />`).join("")}
    </div>
    <span class="scene-stamp">4×<br><em>MOMENTS</em></span>
    <span class="photo-credit">LIFE, UNSTYLED</span>
    <span class="art-caption">日常，就是最好的场景</span>
  </div>`:i.type==="experience"?`<div class="hero-art art-experience">
    ${Zs("exp-leaf")}
    <div class="basin-illustration">
      <div class="basin-mirror"></div><div class="basin-arc"></div><div class="basin-chair"></div><div class="basin-bowl"></div>
      <span class="basin-steam st1"></span><span class="basin-steam st2"></span><span class="basin-steam st3"></span>
    </div>
    <span class="art-caption">TRY IT · 亲身体验一次清爽</span>
  </div>`:i.type==="friends"?`<div class="hero-art art-friends">
    <div class="friend-type">
      <span>NICE</span><span class="type-line">TO MEET</span><span class="type-you">YOU<i>.</i></span>
    </div>
    <div class="polaroid p1"><span>今天见面吧</span><b>♡</b></div>
    <div class="polaroid p2"><span>好久不见</span><b>02 / 18</b></div>
    <div class="ribbon-line rb1"></div><div class="ribbon-line rb2"></div>
    <span class="art-caption">A REASON TO MEET</span>
  </div>`:i.type==="tea"?`<div class="hero-art art-tea photo-art">
    <img class="hero-photo tea-hero-photo" src="${i.heroImage}" alt="100年润发 × 霸王茶姬概念联名视觉" />
    <span class="photo-veil"></span>
    <span class="photo-credit">CONCEPT VISUAL · 拟合作创意</span>
    <span class="art-caption">TEA FOR TWO</span>
  </div>`:i.type==="keep"?`<div class="hero-art art-keep photo-art">
    <img class="hero-photo keep-hero-photo" src="${i.heroImage}" alt="100年润发 × Keep 运动概念海报" />
    <span class="photo-veil"></span>
    <span class="keep-badge photo-badge">KEEP<br><em>MOVE</em></span>
    <span class="photo-credit">CONCEPT VISUAL · 拟合作创意</span>
    <span class="art-caption">MOVE FREELY, FEEL FRESH</span>
  </div>`:i.type==="museum"?`<div class="hero-art art-museum photo-art">
    <img class="hero-photo museum-hero-photo" src="${i.heroImage}" alt="东方发饰与当代秀发概念视觉" />
    <span class="photo-veil"></span>
    <span class="museum-seal">东方<br>之美</span>
    <div class="museum-scroll">发髻 · 簪花 · 梳篦<br><em>THE EASTERN CROWN</em></div>
    <span class="photo-credit">CONCEPT VISUAL · 拟合作方向</span>
    <span class="art-caption">ORIGINAL CONCEPT VISUAL</span>
  </div>`:i.type==="self"?`<div class="hero-art art-self">
    <div class="mirror-arch"><div class="mirror-glass"></div><span class="mirror-copy">MEET<br>YOURSELF</span></div>
    <div class="self-ribbon r1"></div><div class="self-ribbon r2"></div><div class="self-ribbon r3"></div>
    <span class="art-caption">在所有相遇里，最值得认真对待的是自己</span>
  </div>`:i.type==="content"?`<div class="hero-art art-content">
    <div class="film-strip">
      <div class="film-frame f1"><span>01</span><b>好久不见</b></div>
      <div class="film-frame f2"><span>02</span><b>今天也要<br>闪闪发光</b></div>
      <div class="film-frame f3"><span>03</span><b>出门前的<br>五分钟</b></div>
    </div>
    <span class="content-play">PLAY ▶</span>
    <span class="art-caption">THREE STORIES · ONE HELLO</span>
  </div>`:'<div class="hero-art"></div>';function WS(i,e){return`<header class="story-head">
    <div class="story-eyebrow">
      <span>${e.num} · ${i.index}</span><span class="eyebrow-line"></span><span>${i.kicker}</span>
    </div>
    <div class="story-head-grid">
      <div class="story-head-copy">
        <h1 id="storyTitle">${i.title}</h1>
        <p class="story-en">${i.en}</p>
        <p class="story-lead">${i.lead}</p>
      </div>
      ${GS(i)}
    </div>
  </header>`}function kn(i,e,t){return`<div class="section-label"><span class="section-num">${i}</span><h3>${e}</h3><span class="section-en">${t}</span></div>`}function XS(i){return`<section class="story-section product-section">
    <div class="product-turn">
      <div class="turn-stage">
        <div class="turn-ring"></div>
        <div class="turn-image-wrap" id="productTurner">
          <img id="productTurnImage" src="/assets/product-cutout.png" alt="控油小茶瓶正面包装" draggable="false" />
          <span class="turn-hint">DRAG TO TURN</span>
        </div>
        <div class="turn-angle-ring"><span>360°</span><small>PRODUCT VIEW</small></div>
      </div>
      <div class="turn-info">
        <p class="mini-kicker">MEET THE BOTTLE</p>
        <h2>把「小茶瓶」<br>拿在手里看一看。</h2>
        <p>正面是 100年润发的品牌识别，侧边是控油蓬松的产品主张，背面是完整的成分与使用说明。拖动瓶身，或切换视角，看看它从不同角度如何讲述同一件事。</p>
        <div class="turn-tabs" role="group" aria-label="产品角度">
          <button class="turn-tab is-active" data-turn="front">正面 <span>FRONT</span></button>
          <button class="turn-tab" data-turn="label">标签 <span>LABEL</span></button>
          <button class="turn-tab" data-turn="back">背面 <span>BACK</span></button>
        </div>
        <div class="turn-rule"></div>
        <dl class="product-facts">
          ${i.story.map(([e,t])=>`<div><dt>${e}</dt><dd>${t}</dd></div>`).join("")}
        </dl>
      </div>
    </div>
    <div class="product-audience">
      <div class="audience-title"><span>WHO</span><h3>为谁而做</h3><p>面向 18—35 岁、被头油与细软塌困扰，却不想被洗头频率安排的年轻人。</p></div>
      <div class="audience-grid">
        ${i.audience.map(([e,t])=>`<div class="audience-card"><b>${e}</b><span>${t}</span></div>`).join("")}
      </div>
      <div class="need-row">
        <span class="need-label">核心需求</span>
        ${i.needs.map(e=>`<span class="need-pill">${e}</span>`).join("")}
      </div>
    </div>
    <div class="tag-marquee">
      <div class="tag-track">${i.tags.map(e=>`<span>${e}</span><i>✦</i>`).join("")}${i.tags.map(e=>`<span>${e}</span><i>✦</i>`).join("")}</div>
    </div>
    <blockquote class="story-quote">${i.note}<cite>100年润发 · 产品初见</cite></blockquote>
  </section>`}function $S(i){return`<section class="story-section fourdim-section">
    ${kn("02","四维控油体系","FROM CLEANSING TO SCALP CARE")}
    <div class="dimension-layout">
      <div class="scalp-orbit" role="group" aria-label="四维控油互动图解">
        <div class="orbit-line o1"></div><div class="orbit-line o2"></div>
        <div class="scalp-center">
          <span class="scalp-head"></span>
          <b>头皮<br>生态</b>
          <small>SCALP<br>ECOSYSTEM</small>
        </div>
        ${i.dimensions.map((e,t)=>`<button class="orbit-node on-${t+1} ${t===0?"is-active":""}" data-dimension="${t}">
          <span class="orbit-dot">${e.num}</span><span class="orbit-name">${e.title}</span>
        </button>`).join("")}
        <span class="orbit-water w1"></span><span class="orbit-water w2"></span>
      </div>
      <div class="dimension-detail" id="dimensionDetail">
        ${Mp(i.dimensions[0])}
      </div>
    </div>
    <div class="dimension-steps">
      ${i.dimensions.map((e,t)=>`<div class="dimension-step ${t===0?"is-active":""}" data-dimension-step="${t}">
        <span class="step-index">${e.num}</span><div><b>${e.title}</b><small>${e.en}</small></div>${El(e.icon)}
      </div>`).join("")}
    </div>
    <div class="insight-strip">
      <span class="insight-mark">!</span>
      <p>${i.note}</p>
      <span class="insight-en">GENTLE, BUT EFFECTIVE.</span>
    </div>
  </section>`}function Mp(i){return`<div class="dimension-detail-top"><span class="detail-icon">${El(i.icon)}</span><span class="detail-num">${i.num}</span></div>
    <p class="detail-en">${i.en}</p><h2>${i.title}</h2><p class="detail-text">${i.text}</p>
    <span class="detail-tag">${i.tag}</span>
    <div class="detail-bars"><span style="--p:${["70%","86%","78%","92%"][Number(i.num)-1]||"70%"}"></span></div>`}function YS(i){return`<section class="story-section ingredient-section">
    ${kn("03","油头管理矩阵","FIVE DIMENSIONS, ONE BALANCE")}
    <div class="ingredient-layout">
      <div class="ingredient-pentagon" role="group" aria-label="五维成分矩阵">
        <div class="penta-lines"></div>
        <div class="penta-center">
          <span class="penta-leaf">${Zs("")}</span>
          <b>5D</b><small>FORMULA<br>MATRIX</small>
        </div>
        ${i.ingredients.map((e,t)=>`<button class="ingredient-node color-${e.color} ${t===3?"is-active":""}" data-ingredient="${t}" style="--i:${t}">
          <span class="ing-num">${e.num}</span><span class="ing-short">${e.name.replace("99% 菁纯小分子植物氨基酸","植物氨基酸")}</span>
        </button>`).join("")}
      </div>
      <div class="ingredient-detail" id="ingredientDetail">${Sp(i.ingredients[3])}</div>
    </div>
    <div class="ingredient-cards">
      ${i.ingredients.map((e,t)=>`<button class="ingredient-card color-${e.color} ${t===3?"is-active":""}" data-ingredient="${t}">
        <span class="card-top"><span class="card-num">${e.num}</span>${El(e.icon)}</span>
        <b>${e.name}</b><small>${e.en}</small><em>${e.role}</em>
      </button>`).join("")}
    </div>
    <div class="tea-proof">
      <div class="tea-proof-visual">${Zs("")}<span class="tea-drop"></span><span class="tea-molecule"><i></i><i></i><i></i></span></div>
      <div class="tea-proof-copy"><p class="mini-kicker">TEA, NOT JUST A SCENT</p><h3>茶多酚，<br>不只是「茶香概念」。</h3><p>来自浙江安吉高山绿茶原料，联合南京野生植物综合利用研究院，以低温冷萃工艺保留活性。它是功效原料，也是高山乌龙 × 新会青柑香调的起点。</p><div class="proof-tags"><span>浙江安吉</span><span>低温冷萃</span><span>高活性茶多酚</span></div></div>
    </div>
  </section>`}function Sp(i){return`<div class="ing-detail-head"><span class="ing-badge color-${i.color}">${i.num}</span><span class="ing-role">${i.role}</span></div>
    <h2>${i.name}</h2><p class="detail-en">${i.en}</p><p class="detail-text">${i.text}</p>
    <div class="formula-point"><span></span><p>${i.point}</p></div>
    <div class="molecule-art">${El(i.icon)}</div>`}function qS(i){return`<section class="story-section hours-section">
    ${kn("04","时间自由计划","MADE FOR A LONGER WEEKEND")}
    <div class="stat-grid">
      ${i.stats.map((e,t)=>`<div class="stat-card stat-${t}">
        <span class="stat-en">${e.en}</span>
        <div class="stat-number"><b>${e.big}</b><em>${e.unit}</em></div>
        <h3>${e.label}</h3><p>${e.note}</p>
        <span class="stat-ring"></span>
      </div>`).join("")}
    </div>
    <div class="hours-timeline">
      <div class="timeline-line"><span></span></div>
      ${i.timeline.map(([e,t,n],s)=>`<div class="timeline-item" style="--d:${s}">
        <span class="time-dot"></span><b>${e}</b><h4>${t}</h4><p>${n}</p>
      </div>`).join("")}
    </div>
    <div class="hours-note"><span>产品资料所列功效指标</span><p>${i.disclaimer}</p></div>
    <div class="hours-bottle-strip"><img src="/assets/product-cutout.png" alt="控油小茶瓶" /><div><p class="mini-kicker">A LITTLE MORE FREEDOM</p><h3>不必每天被洗头安排。</h3><p>把省下的时间，用来多睡十分钟、从容吃个早餐，或者，去见一个想见的人。</p></div></div>
  </section>`}function ZS(i){return`<section class="story-section scenes-section">
    ${kn("05","四个生活切片","FRESHNESS IN EVERY MOMENT")}
    <div class="scene-grid">
      ${i.scenes.map((e,t)=>`<button class="scene-card scene-${e.color} ${t===0?"is-active":""}" data-scene="${t}">
        <span class="scene-card-art"><img src="${e.image}" alt="${e.name}场景" loading="lazy" /></span>
        <span class="scene-card-meta"><span>${e.num}</span><span>${e.en}</span></span>
        <b>${e.name}</b><span class="scene-arrow">↗</span>
      </button>`).join("")}
    </div>
    <div class="scene-feature" id="sceneFeature">
      ${bp(i.scenes[0])}
    </div>
    <div class="scene-manifesto"><span>风感美学</span><p>头发轻盈蓬松，淡淡的茶香若隐若现。所谓自由，不过是出门时不再反复照镜子。</p></div>
  </section>`}function bp(i){return`<div class="scene-feature-art"><img src="${i.featureImage||i.image}" alt="${i.name}场景大图" loading="lazy" /></div>
    <div class="scene-feature-copy"><span class="mini-kicker">${i.num} / ${i.en}</span><h2>${i.headline}</h2><p>${i.body}</p>
      <div class="scene-product-link"><span>PRODUCT LINK</span><b>${i.product}</b></div>
      <div class="scene-quote-mark">“</div>
    </div>`}function KS(i){return`<section class="story-section experience-section">
    ${kn("06","现场洗护流程","FROM FIRST LOOK TO FIRST WASH")}
    <div class="experience-layout">
      <div class="process-list">
        ${i.steps.map(([e,t,n])=>`<div class="process-step"><span class="process-num">${e}</span><div><h3>${t}</h3><p>${n}</p></div><span class="process-check">○</span></div>`).join("")}
      </div>
      <div class="wash-visual">
        <div class="wash-mirror"></div><div class="wash-lamp"></div>
        <span class="wash-chair"></span><span class="wash-bowl"></span>
        <div class="wash-product"><img src="/assets/product-front.png" alt="控油小茶瓶" /></div>
        <span class="wash-caption">1F · FRESHNESS BAR<br>专业洗护体验位</span>
      </div>
    </div>
    <div class="hair-quiz">
      <div class="quiz-head"><span class="mini-kicker">A 30-SECOND CHECK</span><h2>你的头发今天<br>是什么状态？</h2><p>没有标准答案，只有今天更适合你的那一点清爽。</p></div>
      <div class="quiz-body">
        <div class="quiz-options" id="hairQuizOptions">
          ${i.quiz.options.map((e,t)=>`<button class="quiz-option" data-hair="${t}"><span>0${t+1}</span><b>${e.label}</b><i>→</i></button>`).join("")}
        </div>
        <div class="quiz-result" id="hairQuizResult">
          <span class="result-placeholder">选择一项，看看今天的清爽建议。</span>
        </div>
      </div>
    </div>
    <div class="experience-brand"><p>${i.note}</p><span>100年润发 · NICE TO MEET YOU</span></div>
  </section>`}function JS(i){return`<section class="story-section friends-section">
    ${kn("01","见面，是一件值得郑重的小事","A ROOM FOR TWO")}
    <div class="friend-feature-grid">
      <div class="friend-visual">
        <div class="friend-big-word">NICE<br><span>TO MEET</span><br>YOU.</div>
        <div class="friend-photo"><span class="photo-silhouette a"></span><span class="photo-silhouette b"></span><span class="photo-label">02 / 18 · 今天见面吧</span></div>
        <span class="friend-sticker">BEST<br>FRIENDS</span>
      </div>
      <div class="friend-info">
        <p class="mini-kicker">MEET YOUR FRIENDS</p><h2>好久不见，<br>今天见面吧。</h2>
        <p>我们把「见面」重新设计了一次：一面可以写下名字的墙、一张只属于两个人的桌子、一个足够好看的合影位。你不需要准备一个完美的理由，想见，就是理由。</p>
        <div class="friend-feature-list">${i.features.map(([e,t],n)=>`<div><span>0${n+1}</span><b>${e}</b><p>${t}</p></div>`).join("")}</div>
      </div>
    </div>
    <div class="friend-quiz">
      <div class="quiz-head"><span class="mini-kicker">FRIENDSHIP TEST</span><h2>你们，到底有多默契？</h2><p>回答三个小问题，生成一张属于你们的好友默契卡。</p></div>
      <div class="friend-questions" id="friendQuestions">
        ${i.quiz.map((e,t)=>`<div class="friend-q" data-q="${t}"><p><span>0${t+1}</span>${e.q}</p><div><button data-answer="a">A · ${e.a}</button><button data-answer="b">B · ${e.b}</button></div></div>`).join("")}
      </div>
      <div class="friend-quiz-foot"><button id="friendSubmit" class="brand-btn" disabled>生成默契结果 <span>→</span></button><div class="friend-result" id="friendResult"></div></div>
    </div>
    <div class="hashtag-row">${i.tags.map(e=>`<span>${e}</span>`).join("")}</div>
  </section>`}function jS(i){return`<section class="story-section tea-section">
    <div class="collab-badge"><span class="collab-dot"></span>${i.collab}</div>
    ${kn("02","清爽搭子，见面有茶","A CUP OF HELLO")}
    <div class="tea-visual-row">
      <div class="tea-poster tea-poster-photo">
        <div class="tea-poster-copy"><span>100年润发 × 霸王茶姬</span><h2>清爽搭子<br>见面有茶</h2><p>高山乌龙 · 新会青柑<br>一杯茶的时间，刚好够重新认识彼此。</p></div>
        <div class="tea-cup-photo-wrap"><img src="${i.posterImage}" alt="联名主题杯概念设计" loading="lazy" /></div>
        <span class="poster-tag">CONCEPT / 2026</span>
      </div>
      <div class="tea-copy">
        <p class="mini-kicker">FRESHNESS MEETS TEA</p><h2>一杯茶的时间，<br>遇见一个好朋友。</h2>
        <p>东方茶香，不只属于发丝。把控油小茶瓶的「高山乌龙 × 新会青柑」延伸到杯中，让洗护与茶饮共享同一种清润、克制的东方味觉记忆。</p>
        <div class="tea-palette"><span style="--c:#2d5141">品牌深绿</span><span style="--c:#e4d6b8">奶油米白</span><span style="--c:#b5925c">香槟金</span><span style="--c:#c7d5be">茶叶浅绿</span></div>
        <div class="tea-quote">「今天和谁一起喝茶见面？」</div>
      </div>
    </div>
    <div class="tea-modules">
      ${i.modules.map(([e,t,n])=>`<div class="tea-module"><span>${e}</span><h3>${t}</h3><p>${n}</p></div>`).join("")}
    </div>
    <div class="collab-merch">
      <div class="merch-card merch-cup"><div class="merch-cup-art"><span>NICE TO MEET YOU</span><i>清爽搭子 · 限定</i></div><b>联名杯套</b><small>CUP SLEEVE</small></div>
      <div class="merch-card merch-bag"><div class="merch-bag-art"><span>100年润发<br>× 霸王茶姬</span><i>MEET FOR TEA</i></div><b>联名纸袋</b><small>PAPER BAG</small></div>
      <div class="merch-card merch-sticker"><div class="merch-sticker-art"><span>今天见</span><span>清爽搭子</span><span>NICE 2 MEET U</span></div><b>社交贴纸</b><small>STICKER SET</small></div>
    </div>
    <p class="collab-disclaimer">${i.note}</p>
  </section>`}function QS(i){return`<section class="story-section keep-section">
    <div class="collab-badge keep-badge-note"><span class="collab-dot"></span>${i.collab}</div>
    ${kn("03","跑完步，依然自在见","MOVE FREELY, FEEL FRESH")}
    <div class="keep-headline">
      <div class="keep-headline-copy"><p class="mini-kicker">100年润发 × KEEP</p><h2>运动的快乐，<br>不应该被外在状态限制。</h2><p>${i.lead}</p><div class="keep-stats"><span><b>3K</b>轻量跑</span><span><b>5K</b>进阶跑</span><span><b>21</b>天线上挑战</span></div></div>
      <div class="keep-poster-large poster-photo"><img src="${i.posterImage}" alt="100年润发 × Keep 女性运动企划插画海报" loading="lazy" /><span class="poster-footer">100年润发 × Keep · 女性运动企划</span></div>
    </div>
    <div class="keep-modules">
      ${i.modules.map(([e,t,n])=>`<div class="keep-module"><span>${e}</span><h3>${t}</h3><p>${n}</p></div>`).join("")}
    </div>
    <div class="keep-merch">
      <div class="keep-merch-card towel"><span class="merch-icon">▦</span><b>联名运动毛巾</b><small>青竹绿 · 奶油白</small></div>
      <div class="keep-merch-card medal"><span class="medal-art">3K</span><b>完赛勋章</b><small>MOVE FREELY</small></div>
      <div class="keep-merch-card band"><span class="band-art"></span><b>主题手环</b><small>跑完步依然自在见</small></div>
    </div>
    <div class="keep-disclaimer">${i.disclaimer}</div>
  </section>`}function e1(i){return`<section class="story-section museum-section">
    <div class="collab-badge museum-badge"><span class="collab-dot"></span>${i.collab}</div>
    ${kn("04","穿越千年，遇见东方之美","THE EASTERN CROWN")}
    <div class="museum-layout">
      <div class="museum-art-panel photo-panel">
        <img src="${i.storyImage}" alt="东方发饰与控油小茶瓶概念视觉" loading="lazy" />
        <span class="photo-veil"></span>
        <div class="museum-vertical-title"><span>发</span><span>髻</span><span>之</span><span>美</span></div>
        <span class="museum-stamp">概念<br>视觉</span>
        <p>发髻 · 簪花 · 梳篦 · 步摇<br><em>AN ODE TO THE EASTERN CROWN</em></p>
      </div>
      <div class="museum-copy">
        <p class="mini-kicker">A THOUSAND YEARS OF BEAUTY</p><h2>从东方发饰，<br>到当代秀发之美。</h2>
        <p>古人把美的想象，藏进发髻的高度、簪花的疏密与步摇的轻响里。今天，我们对美的表达更自由，却依然可以从东方美学中借一点从容。</p>
        <div class="museum-eras">
          ${i.eras.map(([e,t,n])=>`<div class="era-card"><span>${e}</span><div><b>${t}</b><p>${n}</p></div></div>`).join("")}
        </div>
      </div>
    </div>
    <div class="museum-collection">
      <div class="collection-head"><span>LIMITED COLLECTION</span><h3>联名礼盒与文创</h3><p>以传统发饰轮廓与东方意象为灵感，不做文物复制，只做当代东方美的重新表达。</p></div>
      <div class="collection-grid">
        ${i.collection.map(([e,t],n)=>`<div class="collection-card cc${n+1}"><span class="collection-shape"></span><small>CONCEPT 0${n+1}</small><b>${e}</b><p>${t}</p></div>`).join("")}
      </div>
    </div>
    <div class="museum-extras">
      <div class="museum-exhibition">
        <span class="mini-kicker">A SMALL EXHIBITION</span>
        <h3>${i.exhibition.title}</h3>
        <p>${i.exhibition.desc}</p>
        <div class="exhibition-stations">
          ${i.exhibition.stations.map(([e,t,n])=>`<div><span>${e}</span><div><b>${t}</b><p>${n}</p></div></div>`).join("")}
        </div>
      </div>
      <div class="museum-communication">
        <span class="mini-kicker">CONTENT &amp; SOCIAL</span>
        <h3>让传统发饰，<br>被更多人看见。</h3>
        <p>以短视频、图文与线上话题延展展览内容，让「东方之美」不止停留在现场。</p>
        <div class="communication-list">
          ${i.communication.map(([e,t],n)=>`<div><span>0${n+1}</span><div><b>${e}</b><p>${t}</p></div></div>`).join("")}
        </div>
        <div class="museum-hashtags"><span>#遇见东方之美</span><span>#发髻里的中国</span></div>
      </div>
    </div>
    <div class="museum-note">${i.disclaimer}</div>
  </section>`}function t1(i){return`<section class="story-section self-section">
    ${kn("05","遇见更自在的自己","THE QUIETEST HELLO")}
    <div class="self-feature-grid">
      <div class="self-visual">
        <div class="self-mirror"><span></span><b>MEET<br>YOURSELF</b><i></i></div>
        <div class="self-ribbon-visual rv1"></div><div class="self-ribbon-visual rv2"></div><div class="self-ribbon-visual rv3"></div>
        <span class="self-visual-note">2F · 镜面独处区</span>
      </div>
      <div class="self-copy">
        <p class="mini-kicker">MEET YOURSELF</p><h2>很高兴，<br>遇见现在的自己。</h2>
        <p>穿过镜面与飘带，来到二楼尽头。这里没有需要完成的打卡任务，只有一面镜子、一束光，和一个可以安静坐一会儿的位置。</p>
        <div class="self-quotes">${i.quotes.map((e,t)=>`<div><span>0${t+1}</span><p>${e}</p></div>`).join("")}</div>
      </div>
    </div>
    <div class="self-features">${i.features.map(([e,t])=>`<div><b>${e}</b><p>${t}</p></div>`).join("")}</div>
    <div class="message-studio">
      <div class="studio-copy">
        <span class="mini-kicker">A NOTE TO YOURSELF</span>
        <h2>写给自己<br>一句话。</h2>
        <p>不必宏大，也不必正确。写下此刻最想对自己说的话，我们会把它变成一张可以保存的电子寄语卡。</p>
        <label class="message-label" for="messageInput">YOUR MESSAGE</label>
        <textarea id="messageInput" maxlength="42" placeholder="比如：不着急，你已经做得很好了。"></textarea>
        <div class="message-actions"><span class="char-count"><b id="messageCount">0</b>/42</span><button class="brand-btn" id="messageGenerate">生成寄语卡 <span>→</span></button></div>
        <div class="message-tips"><span>不必迎合每一种目光</span><span>每一种状态都值得被喜欢</span></div>
      </div>
      <div class="studio-preview">
        <div class="message-card-preview" id="messageCardPreview">
          <span class="card-brand">100年润发 · CENTAINE</span>
          <span class="card-leaf">${Zs("")}</span>
          <p id="messagePreviewText">愿你在每一次相遇里，<br>都喜欢此刻的自己。</p>
          <span class="card-date">NICE TO MEET YOU<br><em>— 写给现在的自己</em></span>
        </div>
        <div class="card-actions"><button class="text-btn" id="downloadCard" disabled>保存寄语卡 ↓</button><span>PNG · 1200 × 1600</span></div>
      </div>
    </div>
  </section>`}function n1(i){return`<section class="story-section content-section">
    ${kn("06","系列内容与直播","THE STORY CONTINUES")}
    <div class="drama-head"><div><p class="mini-kicker">NICE TO MEET YOU · MICRO DRAMA</p><h2>三次相遇，<br>三种被看见的方式。</h2></div><p>三部微短剧，以「友」「你」「油」为关键词，把产品放进真实的生活褶皱里。不是广告片，是三个关于靠近自己的小故事。</p></div>
    <div class="drama-grid">
      ${i.dramas.map((e,t)=>`<article class="drama-card drama-${e.color}">
        <div class="drama-poster"><span class="drama-num">0${t+1}</span><span class="drama-tag">${e.tag}</span><h3>${e.title}</h3><span class="drama-poster-foot">NICE TO MEET YOU · SHORT FILM</span><span class="drama-glow"></span></div>
        <div class="drama-copy"><div class="drama-meta"><span>微短剧 0${t+1}</span><span>3—5 MIN</span></div><p class="logline">${e.logline}</p>
          <div class="drama-details"><div><span>核心人物</span>${e.cast.map(n=>`<b>${n}</b>`).join("")}</div><div><span>故事亮点</span><p>${e.highlight}</p></div><div><span>品牌植入</span><p>${e.placement}</p></div></div>
        </div>
      </article>`).join("")}
    </div>
    <div class="live-section">
      <div class="live-visual">
        <span class="live-top">LIVE · 20:00</span>
        <div class="live-host"><span class="host-head"></span><span class="host-body"></span><span class="host-arm"></span><span class="host-mic"></span></div>
        <div class="live-shelf"><span>小茶瓶<br>直播专属</span><i></i><i></i><i></i></div>
        <span class="live-screen">NICE TO MEET YOU<br><em>不惧油，自在见。</em></span>
        <span class="live-comment c1">这个组合好划算！</span><span class="live-comment c2">发根真的蓬松了</span>
      </div>
      <div class="live-copy"><p class="mini-kicker">LIVE COMMERCE</p><h2>从内容种草，<br>到一次真实的购买。</h2><p>抖音 × 淘宝双平台主题直播，把「清爽洗护体验、好友推荐、悦己生活分享」做成一场有内容的直播，而不是只有价格的叫卖。</p>
        <div class="live-list">${i.live.map(([e,t],n)=>`<div><span>0${n+1}</span><b>${e}</b><p>${t}</p></div>`).join("")}</div>
      </div>
    </div>
    <div class="loop-section"><p class="mini-kicker">THE LOOP</p><div class="loop-track">${i.loop.map((e,t)=>`<span class="${t===0?"is-on":""}">${e}</span>${t<i.loop.length-1?"<i>→</i>":""}`).join("")}</div><div class="loop-end">NICE TO MEET YOU，<em>不惧油，自在见。</em></div></div>
  </section>`}const i1={product:XS,fourdim:$S,ingredients:YS,hours:qS,scenes:ZS,experience:KS,friends:JS,tea:jS,keep:QS,museum:e1,self:t1,content:n1};function s1(i,e){const t=i1[i.type]||(()=>"");return`<div class="story-page type-${i.type}">
    ${WS(i,e)}
    ${t(i)}
    <footer class="story-footer">
      <div class="footer-logo"><img src="/assets/logo-ink.png" alt="100年润发" /><span>CENTAINE · NICE TO MEET YOU</span></div>
      <p>不惧油，自在见。<span>一场关于清爽、友谊与自我的相遇。</span></p>
      <span class="footer-index">${e.num} / ${i.index}</span>
    </footer>
  </div>`}function r1(i,e){const t=document.getElementById("storyContent"),n=t.querySelector("#productTurnImage"),s=t.querySelector("#productTurner");if(n&&s){const u={front:"/assets/product-cutout.png",label:"/assets/label-hero.png",back:"/assets/product-back.png"};let f=null;const m=g=>{n.style.transform=`rotateY(${g}deg) scale(.96)`};s.addEventListener("pointerdown",g=>{f={x:g.clientX,deg:0},s.setPointerCapture(g.pointerId),s.classList.add("is-dragging")}),s.addEventListener("pointermove",g=>{if(!f)return;const p=Math.max(-24,Math.min(24,(g.clientX-f.x)*.12));m(p)});const _=()=>{f&&(f=null,s.classList.remove("is-dragging"),m(0))};s.addEventListener("pointerup",_),s.addEventListener("pointercancel",_),s.addEventListener("pointerleave",_),t.querySelectorAll(".turn-tab").forEach(g=>g.addEventListener("click",()=>{t.querySelectorAll(".turn-tab").forEach(x=>x.classList.remove("is-active")),g.classList.add("is-active");const p=g.dataset.turn;n.classList.add("is-switching"),setTimeout(()=>{n.src=u[p],n.classList.remove("is-switching")},180)}))}const r=t.querySelector("#dimensionDetail");if(r){const u=i.dimensions,f=m=>{r.innerHTML=Mp(u[m]),r.classList.remove("is-refresh"),requestAnimationFrame(()=>r.classList.add("is-refresh")),t.querySelectorAll("[data-dimension]").forEach(_=>_.classList.toggle("is-active",Number(_.dataset.dimension)===m)),t.querySelectorAll("[data-dimension-step]").forEach(_=>_.classList.toggle("is-active",Number(_.dataset.dimensionStep)===m))};t.querySelectorAll("[data-dimension]").forEach(m=>m.addEventListener("click",()=>f(Number(m.dataset.dimension)))),t.querySelectorAll("[data-dimension-step]").forEach(m=>m.addEventListener("click",()=>f(Number(m.dataset.dimensionStep))))}const a=t.querySelector("#ingredientDetail");if(a){const u=i.ingredients,f=m=>{a.innerHTML=Sp(u[m]),a.classList.remove("is-refresh"),requestAnimationFrame(()=>a.classList.add("is-refresh")),t.querySelectorAll("[data-ingredient]").forEach(_=>_.classList.toggle("is-active",Number(_.dataset.ingredient)===m))};t.querySelectorAll("[data-ingredient]").forEach(m=>m.addEventListener("click",()=>f(Number(m.dataset.ingredient))))}const o=t.querySelector("#sceneFeature");o&&t.querySelectorAll("[data-scene]").forEach(u=>u.addEventListener("click",()=>{const f=Number(u.dataset.scene);t.querySelectorAll("[data-scene]").forEach(m=>m.classList.toggle("is-active",m===u)),o.innerHTML=bp(i.scenes[f]),o.classList.remove("is-refresh"),requestAnimationFrame(()=>o.classList.add("is-refresh"))}));const l=t.querySelector("#hairQuizOptions"),c=t.querySelector("#hairQuizResult");if(l&&c&&t.querySelectorAll("[data-hair]").forEach(u=>u.addEventListener("click",()=>{const f=i.quiz.options[Number(u.dataset.hair)];t.querySelectorAll("[data-hair]").forEach(_=>_.classList.toggle("is-active",_===u)),c.innerHTML=`<div class="result-inner"><span class="result-kicker">YOUR FRESHNESS NOTE</span><h3>${f.result}</h3><p>${f.desc}</p><div class="result-advice"><span>↳</span>${f.advice}</div><button class="text-btn" id="retakeHair">再测一次</button></div>`,c.classList.add("has-result");const m=c.querySelector("#retakeHair");m&&m.addEventListener("click",()=>{c.innerHTML='<span class="result-placeholder">选择一项，看看今天的清爽建议。</span>',c.classList.remove("has-result"),t.querySelectorAll("[data-hair]").forEach(_=>_.classList.remove("is-active"))})})),t.querySelector("#friendQuestions")){const u=[];t.querySelectorAll(".friend-q").forEach((m,_)=>{m.querySelectorAll("button").forEach(g=>g.addEventListener("click",()=>{m.querySelectorAll("button").forEach(x=>x.classList.remove("is-active")),g.classList.add("is-active"),u[_]=g.dataset.answer;const p=t.querySelector("#friendSubmit");p.disabled=u.filter(Boolean).length<i.quiz.length}))}),t.querySelector("#friendSubmit").addEventListener("click",()=>{const m=u.filter((x,y)=>x===(y===1?"b":"a")).length,_=[58,76,91,99][m]||88,g=_>95?"天生一对的清爽搭子":_>85?"频率刚刚好的好朋友":"互补型见面搭子",p=t.querySelector("#friendResult");p.innerHTML=`<div class="friend-result-card"><span>YOUR FRIENDSHIP CARD</span><strong>${_}<em>%</em></strong><h3>${g}</h3><p>${_>90?"你们连沉默的节奏都很像。今天适合一起出现，也适合一起什么都不做。":"不需要完全一样，愿意为彼此留出时间，本身就是默契。"}</p><small>#NICE TO MEET YOU · 今天见面吧</small></div>`,p.scrollIntoView({behavior:"smooth",block:"nearest"})})}const d=t.querySelector("#messageInput");if(d){const u=t.querySelector("#messageCount"),f=t.querySelector("#messagePreviewText"),m=t.querySelector("#messageGenerate"),_=t.querySelector("#downloadCard");let g=null;const p=()=>{u.textContent=d.value.length,d.value.trim()||(f.innerHTML="愿你在每一次相遇里，<br>都喜欢此刻的自己。")};d.addEventListener("input",p);const x=(v,I,M)=>{const T=[];let R="";for(const w of I)v.measureText(R+w).width>M&&R?(T.push(R),R=w):R+=w;return R&&T.push(R),T},y=()=>{const v=(d.value.trim()||"愿你在每一次相遇里，都喜欢此刻的自己。").slice(0,42),I=document.createElement("canvas");I.width=1200,I.height=1600;const M=I.getContext("2d"),T=M.createLinearGradient(0,0,1200,1600);T.addColorStop(0,"#f8f4ea"),T.addColorStop(.55,"#f1eadb"),T.addColorStop(1,"#dfe8dc"),M.fillStyle=T,M.fillRect(0,0,1200,1600),M.strokeStyle="rgba(58,92,67,.35)",M.lineWidth=2,M.strokeRect(56,56,1088,1488),M.strokeStyle="rgba(181,146,92,.5)",M.lineWidth=1,M.strokeRect(74,74,1052,1452),M.fillStyle="#33533f",M.font='600 34px "Songti SC", "Times New Roman", serif',M.fillText("100年润发 · CENTAINE",112,150),M.fillStyle="#927445",M.font='20px "Helvetica Neue", Arial, sans-serif',M.letterSpacing="7px",M.fillText("NICE TO MEET YOU",112,186),M.fillStyle="rgba(58,92,67,.14)",M.beginPath(),M.arc(930,390,230,0,Math.PI*2),M.fill(),M.fillStyle="rgba(181,146,92,.16)",M.beginPath(),M.arc(930,390,170,0,Math.PI*2),M.fill(),M.fillStyle="#3b3126",M.font='50px "Songti SC", "STSong", serif';let R=x(M,v,930).slice(0,6);R.length>1&&/^[。！？，、；：]$/.test(R[R.length-1])&&(R[R.length-2]+=R.pop());const w=690-(R.length-1)*45;R.forEach((S,P)=>M.fillText(S,112,w+P*88)),M.strokeStyle="rgba(58,92,67,.35)",M.lineWidth=2,M.beginPath(),M.moveTo(112,1110),M.lineTo(480,1110),M.stroke(),M.fillStyle="#6f5d49",M.font='24px "Songti SC", serif',M.fillText("写给现在的自己",112,1170),M.fillStyle="#8f7a5e",M.font='19px "Helvetica Neue", Arial, sans-serif',M.fillText("A NOTE TO MYSELF  /  "+new Date().toLocaleDateString("zh-CN"),112,1210),M.fillStyle="#33533f",M.font='28px "Songti SC", serif',M.fillText("不惧油，自在见。",112,1430),M.fillStyle="rgba(58,92,67,.6)",M.font='16px "Helvetica Neue", Arial, sans-serif',M.fillText("MEET YOURSELF · 100 YEARS OF CENTAINE",112,1465),M.strokeStyle="rgba(58,92,67,.24)",M.lineWidth=2;for(let S=0;S<4;S++)M.beginPath(),M.ellipse(1e3,1160+S*70,82,22,-.55,0,Math.PI*2),M.stroke();return I.toDataURL("image/png")};m.addEventListener("click",()=>{g=y();const v=t.querySelector("#messageCardPreview");v.innerHTML=`<img src="${g}" alt="写给自己的电子寄语卡" />`,v.classList.add("has-image"),_.disabled=!1,m.innerHTML="重新生成 <span>↻</span>"}),_.addEventListener("click",()=>{if(!g)return;const v=document.createElement("a");v.href=g,v.download="100年润发-写给自己.png",v.click()})}}class a1{constructor(e,t={}){this.world=e,this.onOpen=t.onOpen,this.onClose=t.onClose,this.onHover=t.onHover,this.onMode=t.onMode,this.activeMode="exterior",this.activeFloor="f1",this.activeNodeId=null,this.hoveredId=null,this.modalOpen=!1,this.lastFocus=null,this.tooltipPos=null,this.refs={panel:document.getElementById("floorPanel"),panelBody:document.getElementById("floorPanelBody"),panels:[...document.querySelectorAll(".floor-tab")],exteriorIndex:document.getElementById("exteriorIndex"),floorKicker:document.querySelector(".floor-kicker"),floorTitle:document.querySelector(".floor-title"),floorCn:document.querySelector(".floor-cn"),floorHeading:document.querySelector(".floor-heading"),floorList:document.getElementById("floorList"),floorView:document.getElementById("floorView"),floorViewImage:document.getElementById("floorViewImage"),floorViewNum:document.getElementById("floorViewNum"),floorViewTitle:document.getElementById("floorViewTitle"),floorViewSub:document.getElementById("floorViewSub"),floorViewTags:document.getElementById("floorViewTags"),modalShell:document.getElementById("modalShell"),modal:document.getElementById("storyModal"),modalBackdrop:document.getElementById("modalBackdrop"),modalClose:document.getElementById("modalClose"),modalLocator:document.getElementById("modalLocator"),modalScroll:document.getElementById("modalScroll"),storyContent:document.getElementById("storyContent"),storyNav:document.getElementById("storyNav"),storyPrev:document.getElementById("storyPrev"),storyNext:document.getElementById("storyNext"),storyProgress:document.getElementById("storyProgress"),tooltip:document.getElementById("sceneTooltip"),reset:document.getElementById("resetView"),loading:document.getElementById("loadingScreen"),loaderBar:document.getElementById("loaderBar"),loaderPct:document.getElementById("loaderPct"),bottomNote:document.querySelector(".bottom-note > span")},this.floorMeta={f1:{num:"FLOOR 01",title:"MEET YOUR<br>FRESHNESS",sub:"AERIAL VIEW · 清爽相遇",image:"/assets/floor-1.jpg",tags:["PRODUCT THEATRE","SCALP SCIENCE","FRESHNESS BAR"]},f2:{num:"FLOOR 02",title:"MEET YOUR FRIENDS<br>&amp; YOURSELF",sub:"AERIAL VIEW · 好友与自我相遇",image:"/assets/floor-2.jpg",tags:["FRIENDS","TEA COLLAB","KEEP","EASTERN AESTHETICS","MEET YOURSELF"]}},this.bind(),this.setMode("exterior")}bind(){this.refs.panels.forEach(e=>e.addEventListener("click",()=>this.setMode(e.dataset.mode))),document.querySelectorAll("[data-goto]").forEach(e=>e.addEventListener("click",()=>this.setMode(e.dataset.goto))),this.refs.modalClose.addEventListener("click",()=>this.closeModal()),this.refs.modalBackdrop.addEventListener("click",()=>this.closeModal()),this.refs.storyPrev.addEventListener("click",()=>this.step(-1)),this.refs.storyNext.addEventListener("click",()=>this.step(1)),this.refs.reset.addEventListener("click",()=>this.world.resetView()),document.addEventListener("keydown",e=>{if(this.modalOpen){e.key==="Escape"&&(e.preventDefault(),this.closeModal()),e.key==="ArrowLeft"&&(e.preventDefault(),this.step(-1)),e.key==="ArrowRight"&&(e.preventDefault(),this.step(1)),e.key==="Tab"&&this.trapFocus(e);return}e.key==="Escape"&&this.activeMode!=="exterior"&&this.setMode("exterior")}),window.addEventListener("resize",()=>this.positionTooltip())}setMode(e,t={}){if(!["exterior","f1","f2"].includes(e))return;const n=e!==this.activeMode;if(this.modalOpen&&this.closeModal(!0),this.activeMode=e,this.clearHover(),document.body.classList.toggle("floor-view-active",e!=="exterior"),document.body.classList.toggle("exterior-view-active",e==="exterior"),this.refs.panel.dataset.mode=e,this.refs.panels.forEach(s=>{const r=s.dataset.mode===e;s.classList.toggle("is-active",r),s.setAttribute("aria-selected",String(r))}),e==="exterior")this.activeFloor=null,this.activeNodeId=null,this.refs.floorView.classList.remove("is-visible"),this.refs.floorView.setAttribute("aria-hidden","true"),this.refs.exteriorIndex.hidden=!1,this.refs.floorHeading.hidden=!0,this.refs.floorList.hidden=!0,this.refs.floorList.innerHTML="",this.refs.bottomNote&&(this.refs.bottomNote.textContent="点击空间节点，开启你的相遇之旅。"),this.world.controls.enabled=!0,this.world.setPaused(!1),n&&this.world.resetView();else{this.activeFloor=e;const s=Ys[e],r=this.floorMeta[e];this.refs.exteriorIndex.hidden=!0,this.refs.floorHeading.hidden=!1,this.refs.floorList.hidden=!1,this.refs.floorKicker.textContent=s.num,this.refs.floorTitle.innerHTML=s.title,this.refs.floorCn.textContent=s.cn,this.refs.floorViewNum.textContent=r.num,this.refs.floorViewTitle.innerHTML=r.title,this.refs.floorViewSub.textContent=r.sub,this.refs.floorViewTags.innerHTML=r.tags.map(a=>`<span>${a}</span>`).join(""),this.refs.floorViewImage.getAttribute("src")!==r.image&&(this.refs.floorViewImage.src=r.image,this.refs.floorViewImage.alt=`${s.short}鸟瞰空间`),this.refs.floorView.classList.add("is-visible"),this.refs.floorView.setAttribute("aria-hidden","false"),this.renderNodeList(s),this.refs.bottomNote&&(this.refs.bottomNote.textContent="点击节点，打开这一层的相遇档案。"),this.world.controls.enabled=!1,this.world.setPaused(!0)}this.onMode&&this.onMode(e)}renderNodeList(e){this.refs.floorList.innerHTML=e.nodes.map(t=>`<button class="node-item" data-node="${t.id}" aria-label="${t.index} ${t.short}">
      <span class="node-edge"></span>
      <span class="node-index">${t.index}</span>
      <span class="node-copy"><b>${t.short}</b><small>${t.enShort}</small></span>
      <span class="node-arrow" aria-hidden="true">↗</span>
    </button>`).join(""),this.refs.floorList.querySelectorAll(".node-item").forEach(t=>{const n=e.nodes.find(s=>s.id===t.dataset.node);t.addEventListener("mouseenter",()=>{this.modalOpen||this.hoverNode(n,t)}),t.addEventListener("mouseleave",()=>this.clearHover()),t.addEventListener("focus",()=>{this.modalOpen||this.hoverNode(n,t)}),t.addEventListener("blur",()=>this.clearHover()),t.addEventListener("click",()=>this.openNode(n.id))}),this.syncActive()}renderFloor(e){this.setMode(e)}hoverNode(e,t){this.hoveredId=e.id,this.activeMode==="exterior"&&(this.world.highlight(e.id),this.refs.tooltip.classList.add("is-visible"),this.refs.tooltip.setAttribute("aria-hidden","false"),this.refs.tooltip.querySelector(".tooltip-num").textContent=e.index,this.refs.tooltip.querySelector(".tooltip-name").textContent=e.short,this.tooltipPos={nodeId:e.id,anchorX:t},this.positionTooltip()),this.onHover&&this.onHover(e)}clearHover(){this.hoveredId=null,this.tooltipPos=null,this.world.clearHighlight(),this.refs.tooltip.classList.remove("is-visible"),this.refs.tooltip.setAttribute("aria-hidden","true")}positionTooltip(){if(!this.tooltipPos||this.modalOpen||this.activeMode!=="exterior")return;const e=this.world.screenPosition(this.tooltipPos.nodeId);if(!e||e.behind){this.refs.tooltip.classList.remove("is-visible");return}const t=Math.max(180,Math.min(window.innerWidth-200,e.x)),n=Math.max(120,Math.min(window.innerHeight-100,e.y-40));this.refs.tooltip.style.transform=`translate3d(${t}px, ${n}px, 0) translate(-50%, -100%)`,this.refs.tooltip.classList.add("is-visible")}openNode(e){const t=Ys[this.activeFloor];if(!t)return;const n=t.nodes.find(s=>s.id===e);n&&(this.lastFocus=document.activeElement,this.activeNodeId=e,this.modalOpen=!0,this.clearHover(),this.refs.modalLocator.innerHTML=`<span class="loc-floor">${t.num}</span><span class="loc-divider"></span><span>${n.index} / ${n.short}</span><span class="loc-type">${n.enShort}</span>`,this.refs.storyContent.innerHTML=s1(n,t),this.refs.modalScroll.scrollTop=0,this.refs.modalShell.classList.add("is-open"),this.refs.modalShell.setAttribute("aria-hidden","false"),document.body.classList.add("modal-open"),this.refs.tooltip.classList.remove("is-visible"),r1(n),this.updateNav(),this.syncActive(),setTimeout(()=>this.refs.modal.focus({preventScroll:!0}),260),this.onOpen&&this.onOpen(n))}closeModal(e=!1){this.modalOpen&&(this.modalOpen=!1,this.refs.modalShell.classList.remove("is-open"),this.refs.modalShell.setAttribute("aria-hidden","true"),document.body.classList.remove("modal-open"),this.activeNodeId=null,this.syncActive(),e||(setTimeout(()=>{this.modalOpen||(this.refs.storyContent.innerHTML="")},380),this.lastFocus&&this.lastFocus.focus&&this.lastFocus.focus({preventScroll:!0})),this.onClose&&this.onClose())}step(e){const t=Ys[this.activeFloor];if(!t)return;const n=t.nodes.findIndex(r=>r.id===this.activeNodeId);if(n<0)return;const s=(n+e+t.nodes.length)%t.nodes.length;this.openNode(t.nodes[s].id),this.refs.modalScroll.scrollTop=0}updateNav(){const e=Ys[this.activeFloor],t=e.nodes.findIndex(s=>s.id===this.activeNodeId),n=e.nodes[t];this.refs.storyProgress.textContent=`${n.index} / ${String(e.nodes.length).padStart(2,"0")}`,this.refs.storyPrev.querySelector("em").textContent=e.nodes[(t-1+e.nodes.length)%e.nodes.length].short,this.refs.storyNext.querySelector("em").textContent=e.nodes[(t+1)%e.nodes.length].short}syncActive(){this.refs.floorList.querySelectorAll(".node-item").forEach(e=>{e.classList.toggle("is-active",e.dataset.node===this.activeNodeId)})}setLoading(e){const t=Math.max(0,Math.min(100,Math.round(e)));this.refs.loaderBar&&(this.refs.loaderBar.style.width=t+"%"),this.refs.loaderPct&&(this.refs.loaderPct.textContent=t+"%")}hideLoading(){this.refs.loading&&(this.refs.loading.classList.add("is-done"),setTimeout(()=>this.refs.loading.remove(),1200),document.body.classList.add("is-ready"))}}const Ko=document.getElementById("scene"),as=new VS(Ko),Mn=new a1(as,{onOpen:()=>{as.controls.enabled=!1,document.body.classList.add("story-open")},onClose:()=>{as.controls.enabled=Mn.activeMode==="exterior",document.body.classList.remove("story-open")},onMode:i=>{document.body.classList.toggle("story-open",!1),as.controls.enabled=i==="exterior"}});let vc=0;const o1=performance.now(),l1=setInterval(()=>{const i=performance.now()-o1,e=Math.min(92,12+i/18);vc+=Math.max(.6,(e-vc)*.12),Mn.setLoading(vc),i>1650&&(clearInterval(l1),Mn.setLoading(100),setTimeout(()=>{Mn.hideLoading(),document.body.classList.add("scene-revealed")},220))},40),Su=new mp,yc=new J;let Sr=null;Ko.addEventListener("pointerdown",i=>{Sr={x:i.clientX,y:i.clientY,t:performance.now()}});Ko.addEventListener("pointerup",i=>{if(!Sr||Mn.modalOpen||Math.hypot(i.clientX-Sr.x,i.clientY-Sr.y)>8||performance.now()-Sr.t>500)return;const t=Ko.getBoundingClientRect();yc.x=(i.clientX-t.left)/t.width*2-1,yc.y=-((i.clientY-t.top)/t.height)*2+1,Su.setFromCamera(yc,as.camera);const n=[];as.building.userData.giantBottle.traverse(r=>{r.isMesh&&n.push(r)}),Su.intersectObjects(n,!1).length&&(Mn.setMode("f1"),Mn.openNode("f1-01"))});const wp=()=>{Mn.tooltipPos&&!Mn.modalOpen&&Mn.positionTooltip(),requestAnimationFrame(wp)};wp();window.__app={world:as,ui:Mn,THREE:PM};const xc=new URLSearchParams(location.search).get("node");if(xc){const i=xc.startsWith("f2")?"f2":"f1";setTimeout(()=>{Mn.setMode(i),Mn.openNode(xc)},2e3)}
