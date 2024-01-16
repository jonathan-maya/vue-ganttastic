(function(C,I){typeof exports=="object"&&typeof module<"u"?I(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],I):(C=typeof globalThis<"u"?globalThis:C||self,I(C.VueGanttastic={},C.dayjs,C.Vue))})(this,function(C,I,t){"use strict";const T=(n=>n&&typeof n=="object"&&"default"in n?n:{default:n})(I);var $=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},at={exports:{}};(function(n,c){(function(s,r){n.exports=r()})($,function(){return function(s,r){r.prototype.isSameOrBefore=function(m,i){return this.isSame(m,i)||this.isBefore(m,i)}}})})(at);const Lt=at.exports;var ot={exports:{}};(function(n,c){(function(s,r){n.exports=r()})($,function(){return function(s,r){r.prototype.isSameOrAfter=function(m,i){return this.isSame(m,i)||this.isAfter(m,i)}}})})(ot);const Ct=ot.exports;var it={exports:{}};(function(n,c){(function(s,r){n.exports=r()})($,function(){return function(s,r,m){r.prototype.isBetween=function(i,a,u,p){var o=m(i),f=m(a),e=(p=p||"()")[0]==="(",d=p[1]===")";return(e?this.isAfter(o,u):!this.isBefore(o,u))&&(d?this.isBefore(f,u):!this.isAfter(f,u))||(e?this.isBefore(o,u):!this.isAfter(o,u))&&(d?this.isAfter(f,u):!this.isBefore(f,u))}}})})(it);const Yt=it.exports;var st={exports:{}};(function(n,c){(function(s,r){n.exports=r()})($,function(){var s={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,m=/\d\d/,i=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,u={},p=function(y){return(y=+y)+(y>68?1900:2e3)},o=function(y){return function(h){this[y]=+h}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(h){if(!h||h==="Z")return 0;var M=h.match(/([+-]|\d\d)/g),w=60*M[1]+(+M[2]||0);return w===0?0:M[0]==="+"?-w:w}(y)}],e=function(y){var h=u[y];return h&&(h.indexOf?h:h.s.concat(h.f))},d=function(y,h){var M,w=u.meridiem;if(w){for(var g=1;g<=24;g+=1)if(y.indexOf(w(g,0,h))>-1){M=g>12;break}}else M=y===(h?"pm":"PM");return M},v={A:[a,function(y){this.afternoon=d(y,!1)}],a:[a,function(y){this.afternoon=d(y,!0)}],S:[/\d/,function(y){this.milliseconds=100*+y}],SS:[m,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[i,o("seconds")],ss:[i,o("seconds")],m:[i,o("minutes")],mm:[i,o("minutes")],H:[i,o("hours")],h:[i,o("hours")],HH:[i,o("hours")],hh:[i,o("hours")],D:[i,o("day")],DD:[m,o("day")],Do:[a,function(y){var h=u.ordinal,M=y.match(/\d+/);if(this.day=M[0],h)for(var w=1;w<=31;w+=1)h(w).replace(/\[|\]/g,"")===y&&(this.day=w)}],M:[i,o("month")],MM:[m,o("month")],MMM:[a,function(y){var h=e("months"),M=(e("monthsShort")||h.map(function(w){return w.slice(0,3)})).indexOf(y)+1;if(M<1)throw new Error;this.month=M%12||M}],MMMM:[a,function(y){var h=e("months").indexOf(y)+1;if(h<1)throw new Error;this.month=h%12||h}],Y:[/[+-]?\d+/,o("year")],YY:[m,function(y){this.year=p(y)}],YYYY:[/\d{4}/,o("year")],Z:f,ZZ:f};function D(y){var h,M;h=y,M=u&&u.formats;for(var w=(y=h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(E,k,S){var L=S&&S.toUpperCase();return k||M[S]||s[S]||M[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(Y,O,H){return O||H.slice(1)})})).match(r),g=w.length,B=0;B<g;B+=1){var l=w[B],b=v[l],_=b&&b[0],x=b&&b[1];w[B]=x?{regex:_,parser:x}:l.replace(/^\[|\]$/g,"")}return function(E){for(var k={},S=0,L=0;S<g;S+=1){var Y=w[S];if(typeof Y=="string")L+=Y.length;else{var O=Y.regex,H=Y.parser,G=E.slice(L),N=O.exec(G)[0];H.call(k,N),E=E.replace(N,"")}}return function(A){var R=A.afternoon;if(R!==void 0){var z=A.hours;R?z<12&&(A.hours+=12):z===12&&(A.hours=0),delete A.afternoon}}(k),k}}return function(y,h,M){M.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(p=y.parseTwoDigitYear);var w=h.prototype,g=w.parse;w.parse=function(B){var l=B.date,b=B.utc,_=B.args;this.$u=b;var x=_[1];if(typeof x=="string"){var E=_[2]===!0,k=_[3]===!0,S=E||k,L=_[2];k&&(L=_[2]),u=this.$locale(),!E&&L&&(u=M.Ls[L]),this.$d=function(G,N,A){try{if(["x","X"].indexOf(N)>-1)return new Date((N==="X"?1e3:1)*G);var R=D(N)(G),z=R.year,V=R.month,ge=R.day,pe=R.hours,he=R.minutes,_e=R.seconds,ye=R.milliseconds,St=R.zone,Q=new Date,X=ge||(z||V?1:Q.getDate()),Z=z||Q.getFullYear(),q=0;z&&!V||(q=V>0?V-1:Q.getMonth());var tt=pe||0,et=he||0,nt=_e||0,rt=ye||0;return St?new Date(Date.UTC(Z,q,X,tt,et,nt,rt+60*St.offset*1e3)):A?new Date(Date.UTC(Z,q,X,tt,et,nt,rt)):new Date(Z,q,X,tt,et,nt,rt)}catch{return new Date("")}}(l,x,b),this.init(),L&&L!==!0&&(this.$L=this.locale(L).$L),S&&l!=this.format(x)&&(this.$d=new Date("")),u={}}else if(x instanceof Array)for(var Y=x.length,O=1;O<=Y;O+=1){_[1]=x[O-1];var H=M.apply(this,_);if(H.isValid()){this.$d=H.$d,this.$L=H.$L,this.init();break}O===Y&&(this.$d=new Date(""))}else g.call(this,B)}}})})(st);const Ot=st.exports,lt=Symbol("CHART_ROWS_KEY"),dt=Symbol("CONFIG_KEY"),ct=Symbol("EMIT_BAR_EVENT_KEY"),ut=Symbol("BAR_CONTAINER_KEY");function j(){const n=t.inject(dt);if(!n)throw Error("Failed to inject config!");return n}const ft="YYYY-MM-DD HH:mm";function F(n=j()){const{chartStart:c,chartEnd:s,barStart:r,barEnd:m,dateFormat:i,locale:a}=n;T.default.locale(a.value);const u=t.computed(()=>o(c.value)),p=t.computed(()=>o(s.value)),o=(e,d)=>{let v;if(d!==void 0&&typeof e!="string"&&!(e instanceof Date)&&(v=d==="start"?e[r.value]:e[m.value]),typeof e=="string")v=e;else if(e instanceof Date)return T.default(e);const D=i.value||ft;return T.default(v,D,!0)};return{chartStartDayjs:u,chartEndDayjs:p,toDayjs:o,format:(e,d)=>d===!1?e instanceof Date?e:T.default(e).toDate():(typeof e=="string"||e instanceof Date?o(e):e).format(d)}}var Tt={exports:{}};(function(n,c){(function(s,r){n.exports=r(T.default)})($,function(s){function r(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var m=r(s),i={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xE1".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xEDa",dd:"%d d\xEDas",M:"un mes",MM:"%d meses",y:"un a\xF1o",yy:"%d a\xF1os"},ordinal:function(a){return a+"\xBA"}};return m.default.locale(i,null,!0),i})})(Tt);var jt={exports:{}};(function(n,c){(function(s,r){n.exports=r(T.default)})($,function(s){function r(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var m=r(s),i={name:"fr",weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),months:"janvier_f\xE9vrier_mars_avril_mai_juin_juillet_ao\xFBt_septembre_octobre_novembre_d\xE9cembre".split("_"),monthsShort:"janv._f\xE9vr._mars_avr._mai_juin_juil._ao\xFBt_sept._oct._nov._d\xE9c.".split("_"),weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinal:function(a){return""+a+(a===1?"er":"")}};return m.default.locale(i,null,!0),i})})(jt);var Ht={exports:{}};(function(n,c){(function(s,r){n.exports=r(T.default)})($,function(s){function r(p){return p&&typeof p=="object"&&"default"in p?p:{default:p}}var m=r(s),i={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(p,o,f){var e=i[f];return Array.isArray(e)&&(e=e[o?0:1]),e.replace("%d",p)}var u={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_M\xE4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._M\xE4rz_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(p){return p+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return m.default.locale(u,null,!0),u})})(Ht);var Rt={exports:{}};(function(n,c){(function(s,r){n.exports=r(T.default)})($,function(s){function r(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var m=r(s),i={name:"nl",weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),ordinal:function(a){return"["+a+(a===1||a===8||a>=20?"ste":"de")+"]"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"een minuut",mm:"%d minuten",h:"een uur",hh:"%d uur",d:"een dag",dd:"%d dagen",M:"een maand",MM:"%d maanden",y:"een jaar",yy:"%d jaar"}};return m.default.locale(i,null,!0),i})})(Rt);function mt(){const{precision:n,locale:c}=j(),{chartStartDayjs:s,chartEndDayjs:r}=F(),m=t.computed(()=>{switch(n==null?void 0:n.value){case"hour":return"day";case"day":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'month'")}}),i={hour:"HH",date:"DD/MM",day:"DD/MM",month:"MMMM YYYY",year:"YYYY"};return{timeaxisUnits:t.computed(()=>{const u=[],p=[],o=m.value==="day"?"date":m.value,f=n.value;let e=s.value.startOf(f);const d=r.value.diff(s.value,"minutes",!0);let v=0,D=e[o]();for(;e.isBefore(r.value)||e.isSame(r.value);){if(e[o]()!==D){let g=0;if(u.length===0)g=e.startOf(o).diff(s.value,"minutes",!0)/d*100;else if(e.isSameOrAfter(r.value))g=r.value.diff(e.subtract(1,o).startOf(o),"minutes",!0)/d*100;else{const l=e.startOf(o),b=e.subtract(1,o).startOf(o);g=l.diff(b,"minutes",!0)/d*100}const B=e.subtract(1,o);u.push({label:B.format(i[o]),value:String(D),date:B.toDate(),width:String(g)+"%"}),v=0,D=e[o]()}let M=0;p.length===0?M=e.endOf(f).diff(s.value,"minutes",!0)/d*100:e.add(1,f).isSameOrAfter(r.value)?M=r.value.diff(e.startOf(f),"minutes",!0)/d*100:M=e.endOf(f).diff(e.startOf(f),"minutes",!0)/d*100,p.push({label:e.format(i[f]),value:String(e[f==="day"?"date":f]()),date:e.toDate(),width:String(M)+"%"});const w=e;e=e.add(1,f),(e.isBefore(r.value)||e.isSame(r.value))&&(v+=e.diff(w,"minutes",!0))}const y=r.value.isSame(r.value.startOf(o))?r.value[o]()-1:r.value[o]();return u.some(M=>M.value===String(y))||(v+=r.value.diff(e.subtract(1,f),"minutes",!0),u.push({label:r.value.format(i[o]).toUpperCase(),value:String(D),date:r.value.toDate(),width:`${v/d*100}%`})),{upperUnits:u,lowerUnits:p}})}}const $t={class:"g-timeaxis"},Gt={class:"g-timeunits-container"},It={class:"g-timeunits-container"},At=t.defineComponent({__name:"GGanttTimeaxis",setup(n){const{precision:c,colors:s}=j(),{timeaxisUnits:r}=mt();return(m,i)=>(t.openBlock(),t.createElementBlock("div",$t,[t.createElementVNode("div",Gt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(r).upperUnits,({label:a,value:u,date:p,width:o},f)=>(t.openBlock(),t.createElementBlock("div",{key:a,class:"g-upper-timeunit",style:t.normalizeStyle({background:f%2===0?t.unref(s).primary:t.unref(s).secondary,color:t.unref(s).text,width:o})},[t.renderSlot(m.$slots,"upper-timeunit",{label:a,value:u,date:p},()=>[t.createTextVNode(t.toDisplayString(a),1)])],4))),128))]),t.createElementVNode("div",It,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(r).lowerUnits,({label:a,value:u,date:p,width:o},f)=>(t.openBlock(),t.createElementBlock("div",{key:a,class:"g-timeunit",style:t.normalizeStyle({background:f%2===0?t.unref(s).ternary:t.unref(s).quartenary,color:t.unref(s).text,flexDirection:t.unref(c)==="hour"?"column":"row",alignItems:t.unref(c)==="hour"?"":"center",width:o})},[t.renderSlot(m.$slots,"timeunit",{label:a,value:u,date:p},()=>[t.createTextVNode(t.toDisplayString(a),1)]),t.unref(c)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(s).text})},null,4)):t.createCommentVNode("",!0)],4))),128))])]))}}),be="",Nt={class:"g-grid-container"},zt=t.defineComponent({__name:"GGanttGrid",props:{highlightedUnits:{}},setup(n){const{colors:c}=j(),{timeaxisUnits:s}=mt();return(r,m)=>(t.openBlock(),t.createElementBlock("div",Nt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(s).lowerUnits,({label:i,value:a,width:u})=>{var p;return t.openBlock(),t.createElementBlock("div",{key:i,class:"g-grid-line",style:t.normalizeStyle({width:u,background:(p=r.highlightedUnits)!=null&&p.includes(Number(a))?t.unref(c).hoverHighlight:void 0})},null,4)}),128))]))}}),we="",Ft="cadetblue",Pt=t.defineComponent({__name:"GGanttBarTooltip",props:{bar:{},modelValue:{type:Boolean}},setup(n){const c=n,s={hour:"HH:mm",day:"DD. MMM HH:mm",month:"DD. MMMM YYYY"},{bar:r}=t.toRefs(c),{precision:m,font:i,barStart:a,barEnd:u,rowHeight:p}=j(),o=t.ref("0px"),f=t.ref("0px");t.watch(()=>c.bar,async()=>{var l;await t.nextTick();const h=((l=r==null?void 0:r.value)==null?void 0:l.ganttBarConfig.id)||"";if(!h)return;const M=document.getElementById(h),{top:w,left:g}=(M==null?void 0:M.getBoundingClientRect())||{top:0,left:0},B=Math.max(g,10);o.value=`${w+p.value-10}px`,f.value=`${B}px`},{deep:!0,immediate:!0});const e=t.computed(()=>{var h,M;return((M=(h=r==null?void 0:r.value)==null?void 0:h.ganttBarConfig.style)==null?void 0:M.background)||Ft}),{toDayjs:d}=F(),v=t.computed(()=>{var h;return(h=r.value)==null?void 0:h[a.value]}),D=t.computed(()=>{var h;return(h=r.value)==null?void 0:h[u.value]}),y=t.computed(()=>{if(!(r!=null&&r.value))return"";const h=s[m.value],M=d(v.value).format(h),w=d(D.value).format(h);return`${M} \u2013 ${w}`});return(h,M)=>(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"g-fade",mode:"out-in"},{default:t.withCtx(()=>[h.modelValue?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:t.normalizeStyle({top:o.value,left:f.value,fontFamily:t.unref(i)})},[t.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:t.normalizeStyle({background:e.value})},null,4),t.renderSlot(h.$slots,"default",{bar:t.unref(r),barStart:v.value,barEnd:D.value},()=>[t.createTextVNode(t.toDisplayString(y.value),1)])],4)):t.createCommentVNode("",!0)]),_:3})]))}}),ve="",gt={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"}};var pt;const P=typeof window<"u";P&&((pt=window==null?void 0:window.navigator)==null?void 0:pt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ut(n){return typeof n=="function"?n():t.unref(n)}function Vt(n){return n}function qt(n){return t.getCurrentScope()?(t.onScopeDispose(n),!0):!1}function Jt(n,c=!0){t.getCurrentInstance()?t.onMounted(n):c?n():t.nextTick(n)}function ht(n){var c;const s=Ut(n);return(c=s==null?void 0:s.$el)!=null?c:s}const Wt=P?window:void 0;P&&window.document,P&&window.navigator,P&&window.location;function Kt(n,c=!1){const s=t.ref(),r=()=>s.value=Boolean(n());return r(),Jt(r,c),s}const J=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},W="__vueuse_ssr_handlers__";J[W]=J[W]||{},J[W];var _t=Object.getOwnPropertySymbols,Qt=Object.prototype.hasOwnProperty,Xt=Object.prototype.propertyIsEnumerable,Zt=(n,c)=>{var s={};for(var r in n)Qt.call(n,r)&&c.indexOf(r)<0&&(s[r]=n[r]);if(n!=null&&_t)for(var r of _t(n))c.indexOf(r)<0&&Xt.call(n,r)&&(s[r]=n[r]);return s};function te(n,c,s={}){const r=s,{window:m=Wt}=r,i=Zt(r,["window"]);let a;const u=Kt(()=>m&&"ResizeObserver"in m),p=()=>{a&&(a.disconnect(),a=void 0)},o=t.watch(()=>ht(n),e=>{p(),u.value&&m&&e&&(a=new ResizeObserver(c),a.observe(e,i))},{immediate:!0,flush:"post"}),f=()=>{p(),o()};return qt(f),{isSupported:u,stop:f}}function ee(n,c={width:0,height:0},s={}){const r=t.ref(c.width),m=t.ref(c.height);return te(n,([i])=>{r.value=i.contentRect.width,m.value=i.contentRect.height},s),t.watch(()=>ht(n),i=>{r.value=i?c.width:0,m.value=i?c.height:0}),{width:r,height:m}}var yt;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(yt||(yt={}));var ne=Object.defineProperty,bt=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,wt=(n,c,s)=>c in n?ne(n,c,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[c]=s,oe=(n,c)=>{for(var s in c||(c={}))re.call(c,s)&&wt(n,s,c[s]);if(bt)for(var s of bt(c))ae.call(c,s)&&wt(n,s,c[s]);return n};oe({linear:Vt},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const ie={class:"g-gantt-rows-container"},vt=t.defineComponent({__name:"GGanttChart",props:{chartStart:{},chartEnd:{},precision:{default:"day"},barStart:{},barEnd:{},dateFormat:{type:[String,Boolean],default:ft},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedUnits:{default:()=>[]},font:{default:"inherit"},locale:{default:"fr"}},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar"],setup(n,{emit:c}){const s=n,{width:r,font:m,colorScheme:i}=t.toRefs(s),a=t.useSlots(),u=t.computed(()=>typeof i.value!="string"?i.value:gt[i.value]||gt.default),p=()=>{var B;const w=(B=a.default)==null?void 0:B.call(a),g=[];return w&&w.forEach(l=>{var b;if((b=l.props)!=null&&b.bars){const _=l.props.bars;g.push(_)}else Array.isArray(l.children)&&l.children.forEach(_=>{var E;const x=_;if((E=x==null?void 0:x.props)!=null&&E.bars){const k=x.props.bars;g.push(k)}})}),g},o=t.ref(!1),f=t.ref(!1),e=t.ref(void 0);let d;const v=w=>{d&&clearTimeout(d),d=setTimeout(()=>{o.value=!0},800),e.value=w},D=()=>{clearTimeout(d),o.value=!1},y=(w,g,B,l)=>{switch(w.type){case"click":c("click-bar",{bar:g,e:w,datetime:B});break;case"mousedown":c("mousedown-bar",{bar:g,e:w,datetime:B});break;case"mouseup":c("mouseup-bar",{bar:g,e:w,datetime:B});break;case"dblclick":c("dblclick-bar",{bar:g,e:w,datetime:B});break;case"mouseenter":v(g),c("mouseenter-bar",{bar:g,e:w});break;case"mouseleave":D(),c("mouseleave-bar",{bar:g,e:w});break;case"dragstart":f.value=!0,c("dragstart-bar",{bar:g,e:w});break;case"drag":c("drag-bar",{bar:g,e:w});break;case"dragend":f.value=!1,c("dragend-bar",{bar:g,e:w,movedBars:l});break;case"contextmenu":c("contextmenu-bar",{bar:g,e:w,datetime:B});break}},h=t.ref(null),M=ee(h);return t.provide(lt,p),t.provide(dt,{...t.toRefs(s),colors:u,chartSize:M}),t.provide(ct,y),(w,g)=>(t.openBlock(),t.createElementBlock("div",{ref_key:"ganttChart",ref:h,class:"g-gantt-chart",style:t.normalizeStyle({width:t.unref(r),background:u.value.background,fontFamily:t.unref(m)})},[w.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(At,{key:0},{"upper-timeunit":t.withCtx(({label:B,value:l,date:b})=>[t.renderSlot(w.$slots,"upper-timeunit",{label:B,value:l,date:b})]),timeunit:t.withCtx(({label:B,value:l,date:b})=>[t.renderSlot(w.$slots,"timeunit",{label:B,value:l,date:b})]),_:3})),w.grid?(t.openBlock(),t.createBlock(zt,{key:1,"highlighted-units":w.highlightedUnits},null,8,["highlighted-units"])):t.createCommentVNode("",!0),t.createElementVNode("div",ie,[t.renderSlot(w.$slots,"default")]),t.createVNode(Pt,{"model-value":o.value||f.value,bar:e.value},{default:t.withCtx(()=>[t.renderSlot(w.$slots,"bar-tooltip",{bar:e.value})]),_:3},8,["model-value","bar"])],4))}}),Me="";function K(n=j()){const{dateFormat:c,chartSize:s}=n,{chartStartDayjs:r,chartEndDayjs:m,toDayjs:i,format:a}=F(n),u=t.computed(()=>m.value.diff(r.value,"minutes"));return{mapTimeToPosition:f=>{const e=s.width.value||0,d=i(f).diff(r.value,"minutes",!0);return Math.ceil(d/u.value*e)},mapPositionToTime:f=>{const e=s.width.value||0,d=f/e*u.value;return a(r.value.add(d,"minutes"),c.value)}}}function Bt(n,c=()=>null,s=()=>null,r=j()){const{barStart:m,barEnd:i,pushOnOverlap:a}=r,u=t.ref(!1);let p=0,o;const{mapPositionToTime:f}=K(r),{toDayjs:e}=F(r),d=g=>{const B=document.getElementById(n.ganttBarConfig.id);if(!B)return;switch(p=g.clientX-(B.getBoundingClientRect().left||0),g.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",o=y;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",o=h;break;default:o=D}u.value=!0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",w)},v=()=>{var l;const g=document.getElementById(n.ganttBarConfig.id),B=(l=g==null?void 0:g.closest(".g-gantt-row-bars-container"))==null?void 0:l.getBoundingClientRect();return{barElement:g,barContainer:B}},D=g=>{const{barElement:B,barContainer:l}=v();if(!B||!l)return;const b=B.getBoundingClientRect().width,_=g.clientX-l.left-p,x=_+b;M(_,x)||(n[m.value]=f(_),n[i.value]=f(x),c(g,n))},y=g=>{const{barElement:B,barContainer:l}=v();if(!B||!l)return;const b=g.clientX-l.left,_=f(b);e(_).isSameOrAfter(e(n,"end"))||(n[m.value]=_,c(g,n))},h=g=>{const{barElement:B,barContainer:l}=v();if(!B||!l)return;const b=g.clientX-l.left,_=f(b);e(_).isSameOrBefore(e(n,"start"))||(n[i.value]=_,c(g,n))},M=(g,B)=>{if(!a.value)return!1;const l=n.ganttBarConfig.dragLimitLeft,b=n.ganttBarConfig.dragLimitRight;return g&&l!=null&&g<l||B&&b!=null&&B>b},w=g=>{u.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",w),s(g,n)};return{isDragging:u,initDrag:d}}function Mt(){const n=t.inject(lt);if(!n)throw Error("Failed to inject getChartRows!");return n}function xt(){const n=t.inject(ct);if(!n)throw Error("Failed to inject emitBarEvent!");return n}function se(){const n=j(),c=Mt(),s=xt(),{pushOnOverlap:r,barStart:m,barEnd:i,noOverlap:a,dateFormat:u}=n,p=new Map,{toDayjs:o,format:f}=F(),e=(l,b)=>{const{initDrag:_}=Bt(l,v,w,n);s({...b,type:"dragstart"},l),_(b),g(l)},d=(l,b)=>{const _=l.ganttBarConfig.bundle;_!=null&&(c().forEach(x=>{x.forEach(E=>{if(E.ganttBarConfig.bundle===_){const k=E===l?w:()=>null,{initDrag:S}=Bt(E,v,k,n);S(b),g(E)}})}),s({...b,type:"dragstart"},l))},v=(l,b)=>{s({...l,type:"drag"},b),D(b)},D=l=>{if(!(r!=null&&r.value))return;let b=l,{overlapBar:_,overlapType:x}=y(b);for(;_;){g(_);const E=o(b[m.value]),k=o(b[i.value]),S=o(_[m.value]),L=o(_[i.value]);let Y;switch(x){case"left":Y=L.diff(E,"minutes",!0),_[i.value]=f(b[m.value],u.value),_[m.value]=f(S.subtract(Y,"minutes"),u.value);break;case"right":Y=k.diff(S,"minutes",!0),_[m.value]=f(k,u.value),_[i.value]=f(L.add(Y,"minutes"),u.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}_&&(x==="left"||x==="right")&&h(_,Y,x),b=_,{overlapBar:_,overlapType:x}=y(_)}},y=l=>{let b,_,x;const E=c().find(O=>O.includes(l))||[],k=o(l[m.value]),S=o(l[i.value]);return{overlapBar:E.find(O=>{if(O===l)return!1;const H=o(O[m.value]),G=o(O[i.value]);return b=k.isBetween(H,G),_=S.isBetween(H,G),x=H.isBetween(k,S)||G.isBetween(k,S),b||_||x}),overlapType:b?"left":_?"right":x?"between":null}},h=(l,b,_)=>{g(l),l.ganttBarConfig.bundle&&c().forEach(x=>{x.forEach(E=>{E.ganttBarConfig.bundle===l.ganttBarConfig.bundle&&E!==l&&(g(E),M(E,b,_))})})},M=(l,b,_)=>{switch(_){case"left":l[m.value]=f(o(l,"start").subtract(b,"minutes"),u.value),l[i.value]=f(o(l,"end").subtract(b,"minutes"),u.value);break;case"right":l[m.value]=f(o(l,"start").add(b,"minutes"),u.value),l[i.value]=f(o(l,"end").add(b,"minutes"),u.value)}D(l)},w=(l,b)=>{B();const _={...l,type:"dragend"};s(_,b,void 0,new Map(p)),p.clear()},g=l=>{if(!p.has(l)){const b=l[m.value],_=l[i.value];p.set(l,{oldStart:b,oldEnd:_})}},B=()=>{if(r.value||!a.value)return;let l=!1;p.forEach((b,_)=>{const{overlapBar:x}=y(_);x!=null&&(l=!0)}),l&&p.forEach(({oldStart:b,oldEnd:_},x)=>{x[m.value]=b,x[i.value]=_})};return{initDragOfBar:e,initDragOfBundle:d}}function le(){const{pushOnOverlap:n}=j(),c=Mt(),s=a=>{const u=[];return a!=null&&c().forEach(p=>{p.forEach(o=>{o.ganttBarConfig.bundle===a&&u.push(o)})}),u},r=a=>{if(!n.value||a.ganttBarConfig.pushOnOverlap===!1)return;for(const p of["left","right"]){const o=p,{gapDistanceSoFar:f,bundleBarsAndGapDist:e}=m(a,0,o);let d=f;const v=e;if(!v)continue;for(let y=0;y<v.length;y++){const h=v[y].bar,M=v[y].gapDistance;s(h.ganttBarConfig.bundle).filter(g=>g!==h).forEach(g=>{const B=m(g,M,o),l=B.gapDistanceSoFar,b=B.bundleBarsAndGapDist;l!=null&&(!d||l<d)&&(d=l),b.forEach(_=>{v.find(x=>x.bar===_.bar)||v.push(_)})})}const D=document.getElementById(a.ganttBarConfig.id);d!=null&&o==="left"?a.ganttBarConfig.dragLimitLeft=D.offsetLeft-d:d!=null&&o==="right"&&(a.ganttBarConfig.dragLimitRight=D.offsetLeft+D.offsetWidth+d)}s(a.ganttBarConfig.bundle).forEach(p=>{p.ganttBarConfig.dragLimitLeft=a.ganttBarConfig.dragLimitLeft,p.ganttBarConfig.dragLimitRight=a.ganttBarConfig.dragLimitRight})},m=(a,u=0,p)=>{const o=a.ganttBarConfig.bundle?[{bar:a,gapDistance:u}]:[];let f=a,e=i(f,p);if(p==="left")for(;e;){const d=document.getElementById(f.ganttBarConfig.id),v=document.getElementById(e.ganttBarConfig.id),D=v.offsetLeft+v.offsetWidth;if(u+=d.offsetLeft-D,e.ganttBarConfig.immobile)return{gapDistanceSoFar:u,bundleBarsAndGapDist:o};e.ganttBarConfig.bundle&&o.push({bar:e,gapDistance:u}),f=e,e=i(e,"left")}if(p==="right")for(;e;){const d=document.getElementById(f.ganttBarConfig.id),v=document.getElementById(e.ganttBarConfig.id),D=d.offsetLeft+d.offsetWidth;if(u+=v.offsetLeft-D,e.ganttBarConfig.immobile)return{gapDistanceSoFar:u,bundleBarsAndGapDist:o};e.ganttBarConfig.bundle&&o.push({bar:e,gapDistance:u}),f=e,e=i(e,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:o}},i=(a,u)=>{const p=document.getElementById(a.ganttBarConfig.id),o=c().find(e=>e.includes(a))||[];let f=[];return u==="left"?f=o.filter(e=>{const d=document.getElementById(e.ganttBarConfig.id);return d&&d.offsetLeft<p.offsetLeft&&e.ganttBarConfig.pushOnOverlap!==!1}):f=o.filter(e=>{const d=document.getElementById(e.ganttBarConfig.id);return d&&d.offsetLeft>p.offsetLeft&&e.ganttBarConfig.pushOnOverlap!==!1}),f.length>0?f.reduce((e,d)=>{const v=document.getElementById(e.ganttBarConfig.id),D=document.getElementById(d.ganttBarConfig.id),y=Math.abs(v.offsetLeft-p.offsetLeft),h=Math.abs(D.offsetLeft-p.offsetLeft);return y<h?e:d},f[0]):null};return{setDragLimitsOfGanttBar:r}}const de=["id"],ce={class:"g-gantt-bar-label"},ue=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),fe=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),me=t.defineComponent({__name:"GGanttBar",props:{bar:{}},setup(n){const c=n,s=xt(),r=j(),{rowHeight:m}=r,{bar:i}=t.toRefs(c),{mapTimeToPosition:a,mapPositionToTime:u}=K(),{initDragOfBar:p,initDragOfBundle:o}=se(),{setDragLimitsOfGanttBar:f}=le(),e=t.ref(!1),d=t.computed(()=>i.value.ganttBarConfig);function v(E){d.value.bundle!=null?o(i.value,E):p(i.value,E),e.value=!0}const D=()=>{f(i.value),!d.value.immobile&&(window.addEventListener("mousemove",v,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",v),e.value=!1},{once:!0}))},y=t.inject(ut),h=E=>{var L;E.preventDefault(),E.type==="mousedown"&&D();const k=(L=y==null?void 0:y.value)==null?void 0:L.getBoundingClientRect();if(!k)return;const S=u(E.clientX-k.left);s(E,i.value,S)},{barStart:M,barEnd:w,width:g,chartStart:B,chartEnd:l,chartSize:b}=r,_=t.ref(0),x=t.ref(0);return t.onMounted(()=>{t.watch([i,g,B,l,b.width],()=>{_.value=a(i.value[M.value]),x.value=a(i.value[w.value])},{deep:!0,immediate:!0})}),(E,k)=>(t.openBlock(),t.createElementBlock("div",{id:d.value.id,class:t.normalizeClass(["g-gantt-bar",d.value.class||""]),style:t.normalizeStyle({...d.value.style,position:"absolute",top:`${t.unref(m)*.1}px`,left:`${_.value}px`,width:`${x.value-_.value}px`,height:`${t.unref(m)*.8}px`,zIndex:e.value?3:2}),onMousedown:h,onClick:h,onDblclick:h,onMouseenter:h,onMouseleave:h,onContextmenu:h},[t.createElementVNode("div",ce,[t.renderSlot(E.$slots,"default",{bar:t.unref(i)},()=>[t.createElementVNode("div",null,t.toDisplayString(d.value.label||""),1)])]),d.value.hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[ue,fe],64)):t.createCommentVNode("",!0)],46,de))}}),xe="",Et=t.defineComponent({__name:"GGanttRow",props:{label:{},bars:{},highlightOnHover:{type:Boolean}},emits:["drop"],setup(n,{emit:c}){const s=n,{rowHeight:r,colors:m}=j(),{highlightOnHover:i}=t.toRefs(s),a=t.ref(!1),u=t.computed(()=>({height:`${r.value}px`,background:(i==null?void 0:i.value)&&a.value?m.value.hoverHighlight:null})),{mapPositionToTime:p}=K(),o=t.ref(null);t.provide(ut,o);const f=e=>{var y;const d=(y=o.value)==null?void 0:y.getBoundingClientRect();if(!d){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const v=e.clientX-d.left,D=p(v);c("drop",{e,datetime:D})};return(e,d)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle(u.value),onDragover:d[0]||(d[0]=t.withModifiers(v=>a.value=!0,["prevent"])),onDragleave:d[1]||(d[1]=v=>a.value=!1),onDrop:d[2]||(d[2]=v=>f(v)),onMouseover:d[3]||(d[3]=v=>a.value=!0),onMouseleave:d[4]||(d[4]=v=>a.value=!1)},[t.createElementVNode("div",{class:"g-gantt-row-label",style:t.normalizeStyle({background:t.unref(m).primary,color:t.unref(m).text})},[t.renderSlot(e.$slots,"label",{},()=>[t.createTextVNode(t.toDisplayString(e.label),1)])],4),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:o,class:"g-gantt-row-bars-container"},e.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.bars,v=>(t.openBlock(),t.createBlock(me,{key:v.ganttBarConfig.id,bar:v},{default:t.withCtx(()=>[t.renderSlot(e.$slots,"bar-label",{bar:v})]),_:2},1032,["bar"]))),128))]),_:3})],16)],36))}}),Ee="";function Dt(){T.default.extend(Lt),T.default.extend(Ct),T.default.extend(Yt),T.default.extend(Ot)}const kt={install(n,c){Dt(),n.component("GGanttChart",vt),n.component("GGanttRow",Et)}};C.GGanttChart=vt,C.GGanttRow=Et,C.default=kt,C.extendDayjs=Dt,C.ganttastic=kt,Object.defineProperties(C,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle(C,I="top"){if(!C||typeof document>"u")return;const t=document.head,U=document.createElement("style");I==="top"&&t.firstChild?t.insertBefore(U,t.firstChild):t.appendChild(U),U.appendChild(document.createTextNode(C))}injectStyle(`
.g-gantt-chart {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  border-radius: 5px;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
.g-gantt-rows-container {
  position: relative;
}
`,"top");injectStyle(`
.g-gantt-row {
  width: 100%;
  transition: background 0.4s;
  position: relative;
}
.g-gantt-row > .g-gantt-row-bars-container {
  position: relative;
  border-top: 1px solid #eaeaea;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
}
.g-gantt-row-label {
  position: absolute;
  top: 0;
  left: 0px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  height: 60%;
  min-height: 20px;
  font-size: 0.8em;
  font-weight: bold;
  border-bottom-right-radius: 6px;
  background: #f2f2f2;
  z-index: 3;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.6);
}
.bar-transition-leave-active,
.bar-transition-enter-active {
  transition: all 0.2s;
}
.bar-transition-enter-from,
.bar-transition-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
`,"top");injectStyle(`
.g-timeaxis {
  position: sticky;
  top: 0;
  width: 100%;
  height: 8vh;
  min-height: 75px;
  background: white;
  z-index: 4;
  box-shadow: 0px 1px 3px 2px rgba(50, 50, 50, 0.5);
  display: flex;
  flex-direction: column;
}
.g-timeunits-container {
  display: flex;
  width: 100%;
  height: 50%;
}
.g-timeunit {
  height: 100%;
  font-size: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.g-upper-timeunit {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.g-timeaxis-hour-pin {
  width: 1px;
  height: 10px;
}
`,"top");injectStyle(`
.g-gantt-tooltip {
  position: fixed;
  background: black;
  color: white;
  z-index: 4;
  font-size: 0.85em;
  padding: 5px;
  border-radius: 3px;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
.g-gantt-tooltip:before {
  content: "";
  position: absolute;
  top: 0;
  left: 10%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: black;
  border-top: 0;
  margin-left: -5px;
  margin-top: -5px;
}
.g-gantt-tooltip-color-dot {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin-right: 4px;
}
.g-fade-enter-active,
.g-fade-leave-active {
  transition: opacity 0.3s ease;
}
.g-fade-enter-from,
.g-fade-leave-to {
  opacity: 0;
}
`,"top");injectStyle(`
.g-grid-container {
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.g-grid-line {
  width: 1px;
  height: 100%;
  border-left: 1px solid #eaeaea;
}
`,"top");injectStyle(`
.g-gantt-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: cadetblue;
  overflow: hidden;
}
.g-gantt-bar-label {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 14px 0 14px; /* 14px is the width of the handle */
  display: flex;
  justify-content: center;
  align-items: center;
}
.g-gantt-bar-label > * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.g-gantt-bar-handle-left,
.g-gantt-bar-handle-right {
  position: absolute;
  width: 10px;
  height: 100%;
  background: white;
  opacity: 0.7;
  border-radius: 0px;
  cursor: ew-resize;
  top: 0;
}
.g-gantt-bar-handle-left {
  left: 0;
}
.g-gantt-bar-handle-right {
  right: 0;
}
.g-gantt-bar-label img {
  pointer-events: none;
}
`,"top");
