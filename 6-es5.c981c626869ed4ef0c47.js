function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8/JR":function(e,t,n){"use strict";var r=n("8T9/"),o=n("Ibf7");e.exports=function(e,t){var n=t||{},i={};return void 0===e&&(e={}),e.on=function(t,n){return i[t]?i[t].push(n):i[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var r=arguments.length;if(1===r)delete i[t];else if(0===r)i={};else{var o=i[t];if(!o)return e;o.splice(o.indexOf(n),1)}return e},e.emit=function(){var t=r(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var a=(i[t]||[]).slice(0);return function(){var i=r(arguments),c=this||e;if("error"===t&&!1!==n.throws&&!a.length)throw 1===i.length?i[0]:i;return a.forEach((function(r){n.async?o(r,i,c):r.apply(c,i),r._once&&e.off(t,r)})),e}},e}},"8T9/":function(e,t){e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},Gjsa:function(e,t){var n="function"==typeof setImmediate;e.exports=n?function(e){setImmediate(e)}:function(e){setTimeout(e,0)}},Ibf7:function(e,t,n){"use strict";var r=n("Gjsa");e.exports=function(e,t,n){e&&r((function(){e.apply(n||null,t||[])}))}},KRns:function(e,t){var n=global.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(t){}return!1}()?n:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}},PzH3:function(e,t,n){"use strict";var r=n("KRns"),o=n("Ys8N"),i=global.document,a=function(e,t,n,r){return e.addEventListener(t,n,r)},c=function(e,t,n,r){return e.removeEventListener(t,n,r)},l=[];function u(e,t,n){var r=function(e,t,n){var r,o;for(r=0;r<l.length;r++)if((o=l[r]).element===e&&o.type===t&&o.fn===n)return r}(e,t,n);if(r){var o=l[r].wrapper;return l.splice(r,1),o}}global.addEventListener||(a=function(e,t,n){return e.attachEvent("on"+t,function(e,t,n){var r=u(e,t,n)||function(e,t,n){return function(t){var r=t||global.event;r.target=r.target||r.srcElement,r.preventDefault=r.preventDefault||function(){r.returnValue=!1},r.stopPropagation=r.stopPropagation||function(){r.cancelBubble=!0},r.which=r.which||r.keyCode,n.call(e,r)}}(e,0,n);return l.push({wrapper:r,element:e,type:t,fn:n}),r}(e,t,n))},c=function(e,t,n){var r=u(e,t,n);if(r)return e.detachEvent("on"+t,r)}),e.exports={add:a,remove:c,fabricate:function(e,t,n){var a=-1===o.indexOf(t)?new r(t,{detail:n}):function(){var e;return i.createEvent?(e=i.createEvent("Event")).initEvent(t,!0,!0):i.createEventObject&&(e=i.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(a):e.fireEvent("on"+t,a)}}},YS7c:function(e,t,n){"use strict";var r=n("8/JR"),o=n("PzH3"),i=n("n6yW"),a=document,c=a.documentElement;function l(e,t,n,r){global.navigator.pointerEnabled?o[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[n],r):global.navigator.msPointerEnabled?o[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[n],r):(o[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[n],r),o[t](e,n,r))}function u(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function s(e){var t=e.getBoundingClientRect();return{left:t.left+d("scrollLeft","pageXOffset"),top:t.top+d("scrollTop","pageYOffset")}}function d(e,t){return void 0!==global[t]?global[t]:c.clientHeight?c[e]:a.body[e]}function p(e,t,n){var r,o=e||{},i=o.className;return o.className+=" gu-hide",r=a.elementFromPoint(t,n),o.className=i,r}function f(){return!1}function g(){return!0}function h(e){return e.width||e.right-e.left}function v(e){return e.height||e.bottom-e.top}function m(e){return e.parentNode===a?null:e.parentNode}function b(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||function e(t){return!!t&&"false"!==t.contentEditable&&("true"===t.contentEditable||e(m(t)))}(e)}function C(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function y(e,t){var n=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in n)&&r[e]in n&&(e=r[e]),n[e]}e.exports=function(e,t){var n,d,M,O,k,_,x,P,w,S,E,T=arguments.length;1===T&&!1===Array.isArray(e)&&(t=e,e=[]);var D,I=null,L=t||{};void 0===L.moves&&(L.moves=g),void 0===L.accepts&&(L.accepts=g),void 0===L.invalid&&(L.invalid=V),void 0===L.containers&&(L.containers=e||[]),void 0===L.isContainer&&(L.isContainer=f),void 0===L.copy&&(L.copy=!1),void 0===L.copySortSource&&(L.copySortSource=!1),void 0===L.revertOnSpill&&(L.revertOnSpill=!1),void 0===L.removeOnSpill&&(L.removeOnSpill=!1),void 0===L.direction&&(L.direction="vertical"),void 0===L.ignoreInputTextSelection&&(L.ignoreInputTextSelection=!0),void 0===L.mirrorContainer&&(L.mirrorContainer=a.body);var A=r({containers:L.containers,start:X,end:J,cancel:Q,remove:Z,destroy:Y,canMove:B,dragging:!1});return!0===L.removeOnSpill&&A.on("over",oe).on("out",ie),N(),A;function H(e){return-1!==A.containers.indexOf(e)||L.isContainer(e)}function N(e){var t=e?"remove":"add";l(c,t,"mousedown",j),l(c,t,"mouseup",z)}function U(e){l(c,e?"remove":"add","mousemove",W)}function R(e){var t=e?"remove":"add";o[t](c,"selectstart",F),o[t](c,"click",F)}function Y(){N(!0),z({})}function F(e){D&&e.preventDefault()}function j(e){if(_=e.clientX,x=e.clientY,1===u(e)&&!e.metaKey&&!e.ctrlKey){var t=e.target,n=$(t);n&&(D=n,U(),"mousedown"===e.type&&(b(t)?t.focus():e.preventDefault()))}}function W(e){if(D)if(0!==u(e)){if(void 0===e.clientX||e.clientX!==_||void 0===e.clientY||e.clientY!==x){if(L.ignoreInputTextSelection){var t=y("clientX",e),n=y("clientY",e);if(b(a.elementFromPoint(t,n)))return}var r=D;U(!0),R(),J(),G(r);var o=s(M);O=y("pageX",e)-o.left,k=y("pageY",e)-o.top,i.add(S||M,"gu-transit"),ae(),re(e)}}else z({})}function $(e){if(!(A.dragging&&n||H(e))){for(var t=e;m(e)&&!1===H(m(e));){if(L.invalid(e,t))return;if(!(e=m(e)))return}var r=m(e);if(r&&!L.invalid(e,t)&&L.moves(e,r,t,C(e)))return{item:e,source:r}}}function B(e){return!!$(e)}function X(e){var t=$(e);t&&G(t)}function G(e){se(e.item,e.source)&&(S=e.item.cloneNode(!0),A.emit("cloned",S,e.item,"copy")),d=e.source,M=e.item,P=w=C(e.item),A.dragging=!0,A.emit("drag",M,d)}function V(){return!1}function J(){if(A.dragging){var e=S||M;q(e,m(e))}}function K(){D=!1,U(!0),R(!0)}function z(e){if(K(),A.dragging){var t=S||M,r=y("clientX",e),o=y("clientY",e),i=ne(p(n,r,o),r,o);i&&(S&&L.copySortSource||!S||i!==d)?q(t,i):L.removeOnSpill?Z():Q()}}function q(e,t){var n=m(e);S&&L.copySortSource&&t===d&&n.removeChild(M),te(t)?A.emit("cancel",e,d,d):A.emit("drop",e,t,d,w),ee()}function Z(){if(A.dragging){var e=S||M,t=m(e);t&&t.removeChild(e),A.emit(S?"cancel":"remove",e,t,d),ee()}}function Q(e){if(A.dragging){var t=arguments.length>0?e:L.revertOnSpill,n=S||M,r=m(n),o=te(r);!1===o&&t&&(S?r&&r.removeChild(S):d.insertBefore(n,P)),o||t?A.emit("cancel",n,d,d):A.emit("drop",n,r,d,w),ee()}}function ee(){var e=S||M;K(),ce(),e&&i.rm(e,"gu-transit"),E&&clearTimeout(E),A.dragging=!1,I&&A.emit("out",e,I,d),A.emit("dragend",e),d=M=S=P=w=E=I=null}function te(e,t){var r;return r=void 0!==t?t:n?w:C(S||M),e===d&&r===P}function ne(e,t,n){for(var r=e;r&&!o();)r=m(r);return r;function o(){if(!1===H(r))return!1;var o=le(r,e),i=ue(r,o,t,n);return!!te(r,i)||L.accepts(M,r,d,i)}}function re(e){if(n){e.preventDefault();var t=y("clientX",e),r=y("clientY",e),o=r-k;n.style.left=t-O+"px",n.style.top=o+"px";var i=S||M,a=p(n,t,r),c=ne(a,t,r),l=null!==c&&c!==I;(l||null===c)&&(I&&g("out"),I=c,l&&g("over"));var u=m(i);if(c!==d||!S||L.copySortSource){var s,f=le(c,a);if(null!==f)s=ue(c,f,t,r);else{if(!0!==L.revertOnSpill||S)return void(S&&u&&u.removeChild(i));s=P,c=d}(null===s&&l||s!==i&&s!==C(i))&&(w=s,c.insertBefore(i,s),A.emit("shadow",i,c,d))}else u&&u.removeChild(i)}function g(e){A.emit(e,i,I,d)}}function oe(e){i.rm(e,"gu-hide")}function ie(e){A.dragging&&i.add(e,"gu-hide")}function ae(){if(!n){var e=M.getBoundingClientRect();(n=M.cloneNode(!0)).style.width=h(e)+"px",n.style.height=v(e)+"px",i.rm(n,"gu-transit"),i.add(n,"gu-mirror"),L.mirrorContainer.appendChild(n),l(c,"add","mousemove",re),i.add(L.mirrorContainer,"gu-unselectable"),A.emit("cloned",n,M,"mirror")}}function ce(){n&&(i.rm(L.mirrorContainer,"gu-unselectable"),l(c,"remove","mousemove",re),m(n).removeChild(n),n=null)}function le(e,t){for(var n=t;n!==e&&m(n)!==e;)n=m(n);return n===c?null:n}function ue(e,t,n,r){var o,i="horizontal"===L.direction;return t!==e?(o=t.getBoundingClientRect(),(i?n>o.left+h(o)/2:r>o.top+v(o)/2)?C(t):t):function(){var t,o,a,c=e.children.length;for(t=0;t<c;t++){if(a=(o=e.children[t]).getBoundingClientRect(),i&&a.left+a.width/2>n)return o;if(!i&&a.top+a.height/2>r)return o}return null}()}function se(e,t){return"boolean"==typeof L.copy?L.copy:L.copy(e,t)}}},Ys8N:function(e,t,n){"use strict";var r=[],o="",i=/^on/;for(o in global)i.test(o)&&r.push(o.slice(2));e.exports=r},a1rO:function(e,t,n){"use strict";n.r(t);var r,o,i,a=n("ofXK"),c=n("tyNb"),l=n("YS7c"),u=n.n(l),s=n("fXoL"),d=n("XNiG"),p=n("quSY"),f=n("pLZG"),g=n("lJxs"),h=function e(t,n,r){_classCallCheck(this,e),this.name=t,this.drake=n,this.options=r,this.initEvents=!1},v={Cancel:"cancel",Cloned:"cloned",Drag:"drag",DragEnd:"dragend",Drop:"drop",Out:"out",Over:"over",Remove:"remove",Shadow:"shadow",DropModel:"dropModel",RemoveModel:"removeModel"},m=Object.keys(v).map((function(e){return v[e]})),b=u.a||l,C=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;_classCallCheck(this,e),this.build=t},y=function(e,t,n){return function(r){return r.pipe(Object(f.a)((function(n){var r=n.event,o=n.name;return r===e&&(void 0===t||o===t)})),Object(g.a)((function(e){var t=e.name,r=e.args;return n(t,r)})))}},M=function(e,t){var n=_slicedToArray(t,3);return{name:e,el:n[0],container:n[1],source:n[2]}},O=((i=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;_classCallCheck(this,e),this.drakeFactory=n,this.dispatch$=new d.a,this.drag=function(e){return t.dispatch$.pipe(y(v.Drag,e,(function(e,t){var n=_slicedToArray(t,2);return{name:e,el:n[0],source:n[1]}})))},this.dragend=function(e){return t.dispatch$.pipe(y(v.DragEnd,e,(function(e,t){return{name:e,el:_slicedToArray(t,1)[0]}})))},this.drop=function(e){return t.dispatch$.pipe(y(v.Drop,e,(function(e,t){var n=_slicedToArray(t,4);return{name:e,el:n[0],target:n[1],source:n[2],sibling:n[3]}})))},this.elContainerSource=function(e){return function(n){return t.dispatch$.pipe(y(e,n,M))}},this.cancel=this.elContainerSource(v.Cancel),this.remove=this.elContainerSource(v.Remove),this.shadow=this.elContainerSource(v.Shadow),this.over=this.elContainerSource(v.Over),this.out=this.elContainerSource(v.Out),this.cloned=function(e){return t.dispatch$.pipe(y(v.Cloned,e,(function(e,t){var n=_slicedToArray(t,3);return{name:e,clone:n[0],original:n[1],cloneType:n[2]}})))},this.dropModel=function(e){return t.dispatch$.pipe(y(v.DropModel,e,(function(e,t){var n=_slicedToArray(t,9);return{name:e,el:n[0],target:n[1],source:n[2],sibling:n[3],item:n[4],sourceModel:n[5],targetModel:n[6],sourceIndex:n[7],targetIndex:n[8]}})))},this.removeModel=function(e){return t.dispatch$.pipe(y(v.RemoveModel,e,(function(e,t){var n=_slicedToArray(t,6);return{name:e,el:n[0],container:n[1],source:n[2],item:n[3],sourceModel:n[4],sourceIndex:n[5]}})))},this.groups={},null===this.drakeFactory&&(this.drakeFactory=new C)}return _createClass(e,[{key:"add",value:function(e){if(this.find(e.name))throw new Error('Group named: "'+e.name+'" already exists.');return this.groups[e.name]=e,this.handleModels(e),this.setupEvents(e),e}},{key:"find",value:function(e){return this.groups[e]}},{key:"destroy",value:function(e){var t=this.find(e);t&&(t.drake&&t.drake.destroy(),delete this.groups[e])}},{key:"createGroup",value:function(e,t){return this.add(new h(e,this.drakeFactory.build([],t),t))}},{key:"handleModels",value:function(e){var t,n,r,o=this,i=e.name,a=e.drake,c=e.options;a.on("remove",(function(e,t,r){if(a.models){var c=a.models[a.containers.indexOf(r)],l=(c=c.slice(0)).splice(n,1)[0];o.dispatch$.next({event:v.RemoveModel,name:i,args:[e,t,r,l,c,n]})}})),a.on("drag",(function(e,r){a.models&&(t=e,n=o.domIndexOf(e,r))})),a.on("drop",(function(e,l,u,s){if(a.models&&l){r=o.domIndexOf(e,l);var d,p=a.models[a.containers.indexOf(u)],f=a.models[a.containers.indexOf(l)];if(l===u)d=(p=p.slice(0)).splice(n,1)[0],p.splice(r,0,d),f=p;else{var g=t!==e;if(d=p[n],g){if(!c.copyItem)throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");d=c.copyItem(d)}if(g||(p=p.slice(0)).splice(n,1),(f=f.slice(0)).splice(r,0,d),g)try{l.removeChild(e)}catch(h){}}o.dispatch$.next({event:v.DropModel,name:i,args:[e,l,u,s,d,p,f,n,r]})}}))}},{key:"setupEvents",value:function(e){var t=this;if(!e.initEvents){e.initEvents=!0;var n=e.name;m.forEach((function(r){e.drake.on(r,(function(){for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];t.dispatch$.next({event:r,name:n,args:o})}))}))}}},{key:"domIndexOf",value:function(e,t){return Array.prototype.indexOf.call(t.children,e)}}]),e}()).\u0275fac=function(e){return new(e||i)(s.Yb(C,8))},i.\u0275prov=s.Kb({token:i,factory:i.\u0275fac}),i),k=((o=function(){function e(t,n){_classCallCheck(this,e),this.el=t,this.dragulaService=n,this.dragulaModelChange=new s.n}return _createClass(e,[{key:"ngOnChanges",value:function(e){if(e&&e.dragula){var t=e.dragula,n=t.previousValue,r=!!t.currentValue;!!n&&this.teardown(n),r&&this.setup()}else if(e&&e.dragulaModel){var o=e.dragulaModel,i=o.previousValue,a=o.currentValue,c=this.group.drake;if(this.dragula&&c){c.models=c.models||[];var l=c.models.indexOf(i);-1!==l?(c.models.splice(l,1),a&&c.models.splice(l,0,a)):a&&c.models.push(a)}}}},{key:"setup",value:function(){var e=this,t=this.dragulaService.find(this.dragula);t||(t=this.dragulaService.createGroup(this.dragula,{})),function(t){e.dragulaModel&&(t.drake.models?t.drake.models.push(e.dragulaModel):t.drake.models=[e.dragulaModel])}(t),t.drake.containers.push(this.container),this.subscribe(this.dragula),this.group=t}},{key:"subscribe",value:function(e){var t=this;this.subs=new p.a,this.subs.add(this.dragulaService.dropModel(e).subscribe((function(e){var n=e.source,r=e.target,o=e.sourceModel,i=e.targetModel;n===t.el.nativeElement?t.dragulaModelChange.emit(o):r===t.el.nativeElement&&t.dragulaModelChange.emit(i)}))),this.subs.add(this.dragulaService.removeModel(e).subscribe((function(e){var n=e.source,r=e.sourceModel;n===t.el.nativeElement&&t.dragulaModelChange.emit(r)})))}},{key:"teardown",value:function(e){this.subs&&this.subs.unsubscribe();var t=this.dragulaService.find(e);if(t){var n=t.drake.containers.indexOf(this.el.nativeElement);if(-1!==n&&t.drake.containers.splice(n,1),this.dragulaModel&&t.drake&&t.drake.models){var r=t.drake.models.indexOf(this.dragulaModel);-1!==r&&t.drake.models.splice(r,1)}}}},{key:"ngOnDestroy",value:function(){this.teardown(this.dragula)}},{key:"container",get:function(){return this.el&&this.el.nativeElement}}]),e}()).\u0275fac=function(e){return new(e||o)(s.Ob(s.l),s.Ob(O))},o.\u0275dir=s.Jb({type:o,selectors:[["","dragula",""]],inputs:{dragula:"dragula",dragulaModel:"dragulaModel"},outputs:{dragulaModelChange:"dragulaModelChange"},features:[s.zb()]}),o),_=((r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"forRoot",value:function(){return{ngModule:e,providers:[O]}}}]),e}()).\u0275mod=s.Mb({type:r}),r.\u0275inj=s.Lb({factory:function(e){return new(e||r)}}),r),x=n("PCNd"),P=n("jhN1"),w=n("8YY3"),S=n("/t3+"),E=n("bTqV"),T=n("3Pt+");function D(e,t){if(1&e&&(s.Ub(0,"div",13),s.Ub(1,"h2"),s.Hc(2),s.Tb(),s.Tb()),2&e){var n=t.$implicit,r=t.index,o=s.gc();s.nc("id","",r,"_header"),s.lc("ngStyle",o.getHeaderHeight()),s.Bb(2),s.Ic(n.title)}}function I(e,t){if(1&e){var n=s.Vb();s.Ub(0,"textarea",16),s.cc("change",(function(e){s.yc(n);var r=t.index,o=s.gc().index;return s.gc().updateItem(o,r,e)})),s.Hc(1,"\n          "),s.Tb()}if(2&e){var r=t.index,o=s.gc().index,i=s.gc();s.oc("id","pipe",o,"_child",r,""),s.lc("ngStyle",i.getEditableStyle())("ngModel",i.pipeData[o].items[r])}}function L(e,t){if(1&e){var n=s.Vb();s.Ub(0,"div",14),s.cc("dragulaModelChange",(function(e){return s.yc(n),t.$implicit.items=e}))("dragulaModelChange",(function(e){s.yc(n);var r=t.$implicit,o=s.gc();return r.items=e,o.dragItems()})),s.Fc(1,I,2,4,"textarea",15),s.Tb()}if(2&e){var r=t.$implicit,o=t.index,i=s.gc();s.nc("id","",o,"_pipe"),s.lc("dragulaModel",r.items)("ngStyle",i.getContainerStyle(r)),s.Bb(1),s.lc("ngForOf",i.pipeData[o].items)}}var A,H,N=[{id:1,title:"Process",items:["Commit Code","PUSH Hooks","RUN CI","Deploy Dev","E2E Test","Manual Test","Deploy UAT","Manual Test","Go-Live Apply","Go-Live"],backgroundColor:"#00a300",textColor:"#ffffff"},{id:2,title:"People",items:[""],backgroundColor:"#ff0097",textColor:"#ffffff"},{id:3,title:"Tooling",items:["Git & GitHub","Git","Jenkins","","","","",""],backgroundColor:"#99b433",textColor:"#ffffff"},{id:4,title:"Artifacts",items:["Code","","Build Log","","","","","","",""],backgroundColor:"#1e7145",textColor:"#ffffff"},{id:5,title:"Pain",items:[""],backgroundColor:"#00aba9",textColor:"#ffffff"},{id:6,title:"Duration",items:[""],backgroundColor:"#ffc40d",textColor:"#ffffff"}],U=((H=function(){function e(t){_classCallCheck(this,e),this.storage=t,this.pipeData=N}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.maxLength=this.getMaxLength(this.pipeData),this.storage.get("ledge.path").subscribe((function(t){t?(e.pipeData=t,e.fillDefaultValue()):e.fillDefaultValue()}))}},{key:"fillDefaultValue",value:function(){this.pipeData=this.fillArrayWithEmpty(this.pipeData)}},{key:"fillArrayWithEmpty",value:function(e){for(var t=0;t<e.length;t++)for(var n=e[t].items.length,r=0;r<=this.maxLength;r++)r>n&&(e[t].items[r-1]="");return e}},{key:"addColumn",value:function(){this.maxLength++,this.pipeData=this.fillArrayWithEmpty(this.pipeData)}},{key:"removeColumn",value:function(){this.pipeData.length<=0||(this.maxLength--,this.pipeData=this.removeLastItem(this.pipeData))}},{key:"removeLastItem",value:function(e){for(var t=0;t<e.length;t++)for(var n=0;n<=this.maxLength;n++)n>this.maxLength-1&&e[t].items.splice(-1,1);return e}},{key:"getContainerStyle",value:function(e){var t=this.getContainerHeightWidth(),n=t.itemWidth,r=t.containerHeight;return{minWidth:this.maxLength*(n+21)+"px",height:r,background:e.backgroundColor,color:e.textColor}}},{key:"getContainerHeightWidth",value:function(){var e=(window.innerWidth-200)/this.maxLength-20;return e<100&&(e=100),{itemWidth:e,containerHeight:e+20+2+"px",itemHeightPx:e+"px"}}},{key:"getEditableStyle",value:function(){var e=this.getContainerHeightWidth().itemHeightPx;return{height:e,width:e}}},{key:"getHeaderHeight",value:function(){var e=this.getContainerHeightWidth().itemWidth+32;return e>=212&&(e=212),{height:e+"px"}}},{key:"getMaxLength",value:function(e){var t=e[0].items.length,n=!0,r=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var c=i.value.items.length;c>t&&(t=c)}}catch(l){r=!0,o=l}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return t}},{key:"updateItem",value:function(e,t,n){n.preventDefault(),this.pipeData[e].items[t]=n.target.value,this.storage.set("ledge.path",this.pipeData).subscribe((function(){}))}},{key:"dragItems",value:function(){this.storage.set("ledge.path",this.pipeData).subscribe((function(){}))}},{key:"resetAll",value:function(){this.pipeData=JSON.parse(JSON.stringify(N)),this.maxLength=this.getMaxLength(N),this.fillDefaultValue(),this.storage.set("ledge.path",this.pipeData).subscribe((function(){}))}}]),e}()).\u0275fac=function(e){return new(e||H)(s.Ob(w.a))},H.\u0275cmp=s.Ib({type:H,selectors:[["component-path"]],decls:25,vars:3,consts:[[1,"app-path"],[1,"header","markdown"],[1,"spacer"],[1,"right"],["color","warn","mat-raised-button","",3,"click"],["color","accent","mat-raised-button","",3,"disabled","click"],["color","primary","mat-raised-button","",3,"click"],[1,"path-page"],[1,"path"],["id","pipe-header"],["class","pipe-header",3,"id","ngStyle",4,"ngFor","ngForOf"],["id","pipe",1,"wrapper"],["class","path-container","dragula","ITEMS",3,"id","dragulaModel","ngStyle","dragulaModelChange",4,"ngFor","ngForOf"],[1,"pipe-header",3,"id","ngStyle"],["dragula","ITEMS",1,"path-container",3,"id","dragulaModel","ngStyle","dragulaModelChange"],["class","editable",3,"id","ngStyle","ngModel","change",4,"ngFor","ngForOf"],[1,"editable",3,"id","ngStyle","ngModel","change"]],template:function(e,t){1&e&&(s.Ub(0,"div",0),s.Ub(1,"div",1),s.Ub(2,"h3"),s.Hc(3,"Design DevOps"),s.Tb(),s.Tb(),s.Ub(4,"mat-toolbar"),s.Ub(5,"mat-toolbar-row"),s.Pb(6,"span"),s.Pb(7,"span",2),s.Ub(8,"div",3),s.Ub(9,"button",4),s.cc("click",(function(){return t.resetAll()})),s.Hc(10,"Reset"),s.Tb(),s.Ub(11,"span",2),s.Hc(12,"\xa0"),s.Tb(),s.Ub(13,"button",5),s.cc("click",(function(){return t.removeColumn()})),s.Hc(14,"Remove"),s.Tb(),s.Ub(15,"span",2),s.Hc(16,"\xa0"),s.Tb(),s.Ub(17,"button",6),s.cc("click",(function(){return t.addColumn()})),s.Hc(18,"Add"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(19,"div",7),s.Ub(20,"div",8),s.Ub(21,"div",9),s.Fc(22,D,3,3,"div",10),s.Tb(),s.Ub(23,"div",11),s.Fc(24,L,2,4,"div",12),s.Tb(),s.Tb(),s.Tb(),s.Tb()),2&e&&(s.Bb(13),s.lc("disabled",0===t.maxLength),s.Bb(9),s.lc("ngForOf",t.pipeData),s.Bb(2),s.lc("ngForOf",t.pipeData))},directives:[S.a,S.c,E.a,a.j,a.l,k,T.b,T.k,T.n],styles:[".app-path[_ngcontent-%COMP%]{margin-top:66px}.app-path[_ngcontent-%COMP%]   #pipe[_ngcontent-%COMP%]{position:relative;float:right;display:inline-block;width:calc(100% - 138px);max-width:100%;padding-right:32px}.app-path[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{top:1em}.app-path[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center}.app-path[_ngcontent-%COMP%]   .path-container[_ngcontent-%COMP%]{padding:0;max-width:100%;max-height:180px;width:100%;color:#fff;line-height:1.3em;border:1px dashed #fff;border-radius:6px;display:flex}.app-path[_ngcontent-%COMP%]   .path-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:none;height:150px;max-height:150px;display:block;background-color:hsla(0,0%,100%,.3);color:#fff;border:none;margin:5px;width:10%;max-width:10%}.app-path[_ngcontent-%COMP%]   .path-container[_ngcontent-%COMP%]:nth-child(odd){background-color:rgba(0,0,0,.2)}.app-path[_ngcontent-%COMP%]   .path-container[_ngcontent-%COMP%] > div.empty[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.05)}.app-path[_ngcontent-%COMP%]   #header[_ngcontent-%COMP%]{height:80px;text-align:center}.app-path[_ngcontent-%COMP%]   #header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:80px}.app-path[_ngcontent-%COMP%]   #pipe-header[_ngcontent-%COMP%]{position:absolute;left:20px}.app-path[_ngcontent-%COMP%]   .pipe-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{position:relative;top:calc(50% - 1.6rem)}.app-path[_ngcontent-%COMP%]   .add-item[_ngcontent-%COMP%]{top:3rem;position:absolute;right:4rem}.app-path[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]{top:3rem;position:absolute;right:35rem}.app-path[_ngcontent-%COMP%]   .remove-column[_ngcontent-%COMP%]{top:3rem;position:absolute;right:18rem}.app-path[_ngcontent-%COMP%]   #color-green[_ngcontent-%COMP%]{background-color:#00a300}.app-path[_ngcontent-%COMP%]   #color-greendark[_ngcontent-%COMP%]{background-color:#1e7145}.app-path[_ngcontent-%COMP%]   #color-greenlight[_ngcontent-%COMP%]{background-color:#99b433}.app-path[_ngcontent-%COMP%]   #color-magenta[_ngcontent-%COMP%]{background-color:#ff0097}.app-path[_ngcontent-%COMP%]   #color-purplelight[_ngcontent-%COMP%]{background-color:#9f00a7}.app-path[_ngcontent-%COMP%]   #color-purple[_ngcontent-%COMP%]{background-color:#7e3878}.app-path[_ngcontent-%COMP%]   #color-purpledark[_ngcontent-%COMP%]{background-color:#603cba}.app-path[_ngcontent-%COMP%]   #color-darken[_ngcontent-%COMP%]{background-color:#1d1d1d}.app-path[_ngcontent-%COMP%]   #color-teal[_ngcontent-%COMP%]{background-color:#00aba9}.app-path[_ngcontent-%COMP%]   #color-bluelight[_ngcontent-%COMP%]{background-color:#eff4ff}.app-path[_ngcontent-%COMP%]   #color-blue[_ngcontent-%COMP%]{background-color:#2d89ef}.app-path[_ngcontent-%COMP%]   #color-bluedark[_ngcontent-%COMP%]{background-color:#2b5797}.app-path[_ngcontent-%COMP%]   #color-yellow[_ngcontent-%COMP%]{background-color:#ffc40d}.app-path[_ngcontent-%COMP%]   #color-orange[_ngcontent-%COMP%]{background-color:#e3a21a}.app-path[_ngcontent-%COMP%]   #color-orangedark[_ngcontent-%COMP%]{background-color:#da532c}.app-path[_ngcontent-%COMP%]   #color-red[_ngcontent-%COMP%]{background-color:#b91d47}.app-path[_ngcontent-%COMP%]   #color-redlight[_ngcontent-%COMP%]{background-color:#e11}.app-path[_ngcontent-%COMP%]   #color-white[_ngcontent-%COMP%]{background-color:#fff}"]}),H),R=((A=function(){function e(t){_classCallCheck(this,e),t.setTitle("DevOps \u6d41\u7a0b\u8bbe\u8ba1\u5de5\u5177 \u2014 Ledge DevOps \u77e5\u8bc6\u5e73\u53f0")}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||A)(s.Ob(P.d))},A.\u0275cmp=s.Ib({type:A,selectors:[["app-design"]],decls:1,vars:0,consts:[[1,"design-page"]],template:function(e,t){1&e&&s.Pb(0,"component-path",0)},directives:[U],styles:[".design-page[_ngcontent-%COMP%]{margin-top:66px;height:calc(100vh - 66px)}"]}),A),Y=n("KYhu");n.d(t,"DesignModule",(function(){return j}));var F,j=((F=function e(){_classCallCheck(this,e)}).\u0275mod=s.Mb({type:F}),F.\u0275inj=s.Lb({factory:function(e){return new(e||F)},imports:[[a.c,T.f,x.a,Y.a,_.forRoot(),c.i.forChild([{path:"",component:R}])]]}),F)},n6yW:function(e,t,n){"use strict";var r={};function o(e){var t=r[e];return t?t.lastIndex=0:r[e]=t=new RegExp("(?:^|\\s)"+e+"(?:\\s|$)","g"),t}e.exports={add:function(e,t){var n=e.className;n.length?o(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(o(t)," ").trim()}}}}]);