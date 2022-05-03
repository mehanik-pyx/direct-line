(function(){"use strict";var e={6903:function(e,t,s){var i=s(9242),n=s(3396);function o(e,t,s,i,o,l){const r=(0,n.up)("VForm");return(0,n.wg)(),(0,n.j4)(r)}const l={id:"form"};function r(e,t,s,i,o,r){const c=(0,n.up)("v-select");return(0,n.wg)(),(0,n.iD)("form",l,[(0,n.Wm)(c,{ref:"select1",url:o.url1,name:"categories",preselected:[27,29]},null,8,["url"]),(0,n._)("button",{class:"__btn",id:"submit",onClick:t[0]||(t[0]=(...e)=>r.submit&&r.submit(...e))},"submit")])}var c=s(7139);const a={key:0,class:"select-root"},u={class:"select-wrap"},d={key:0,class:"__select"},h={class:"__select__content"},f=["onClick"],p={class:"controls"},m={class:"buttons"},v={class:"pagination"},_=(0,n.Uk)("pagination: ");function g(e,t,s,o,l,r){return l.showComponent?((0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",u,[(0,n._)("div",{class:"select-text",onClick:t[0]||(t[0]=(...e)=>r.toggleShowList&&r.toggleShowList(...e))},(0,c.zw)(r.selectedText||"nothing selected"),1),(0,n.wy)((0,n._)("input",{class:"search-input",onClick:t[1]||(t[1]=(...e)=>r.toggleShowList&&r.toggleShowList(...e)),type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>l.search=e),placeholder:"search"},null,512),[[i.nr,l.search]]),l.showList?((0,n.wg)(),(0,n.iD)("div",d,[(0,n._)("div",h,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.filteredItems,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"__select__option",onClick:t=>r.toggleSelection(e),key:e.title},[(0,n._)("span",{class:(0,c.C_)(["__select__label",{active:e.isSelected}])},(0,c.zw)(e.title),3)],8,f)))),128))])])):(0,n.kq)("",!0)]),(0,n._)("div",p,[(0,n._)("div",m,[(0,n._)("button",{class:"__btn",onClick:t[3]||(t[3]=(0,i.iM)(((...e)=>r.selectAll&&r.selectAll(...e)),["prevent"]))},"select all"),(0,n._)("button",{class:"__btn",onClick:t[4]||(t[4]=(0,i.iM)(((...e)=>r.clear&&r.clear(...e)),["prevent"]))},"clear"),(0,n._)("button",{class:"__btn",onClick:t[5]||(t[5]=(0,i.iM)(((...e)=>r.submit&&r.submit(...e)),["prevent"]))},"apply")]),(0,n._)("div",v,[_,(0,n.wy)((0,n._)("input",{class:"pagination-limit",type:"text","onUpdate:modelValue":t[6]||(t[6]=e=>l.limit=e)},null,512),[[i.nr,l.limit,void 0,{number:!0}]]),(0,n._)("div",null,[(0,n._)("button",{class:"__btn",onClick:t[7]||(t[7]=(0,i.iM)(((...e)=>r.prev&&r.prev(...e)),["prevent"]))},"<"),(0,n._)("button",{class:"__btn",onClick:t[8]||(t[8]=(0,i.iM)(((...e)=>r.next&&r.next(...e)),["prevent"]))},">")])])])])):(0,n.kq)("",!0)}s(6699);var b=s(6265),w=s.n(b),y={name:"v-select",props:{url:{type:String,default:null,required:!0},name:{type:String,default:null,required:!1},preselected:{type:Array,default:null,required:!1}},data(){return{items:[],selected:[],showList:!1,search:"",showComponent:!1,limit:0,offset:0}},watch:{limit(){this.request()}},computed:{selectedText(){let e="";return this.selected.forEach((t=>e=e+t.title+", ")),e.slice(0,-2),e},filteredItems(){return this.items.filter((e=>e.title.toLowerCase().includes(this.search.trim().toLowerCase())))}},created(){this.request()},methods:{request(){console.log(this.limit),console.log(this.offset),w().post(this.url,{limit:this.limit,offset:this.offset},{headers:{"Content-Type":"multipart/form-data"}}).then((e=>{this.items=e.data.message.data,this.items.forEach((e=>e.isSelected=!1)),this.preselected&&(this.selected=[],this.preselected.forEach((e=>{const t=this.items.find((t=>t.id===e));t&&this.addSelectedItem(t)})))})).catch(console.log).then((()=>this.showComponent=!0))},addSelectedItem(e){e.isSelected=!0,this.selected.push(e)},toggleSelection(e){if(e.isSelected){e.isSelected=!1;const t=this.selected.findIndex((t=>t.id===e.id));this.selected.splice(t,1)}else this.addSelectedItem(e)},selectAll(){this.items.forEach((e=>this.addSelectedItem(e)))},clear(){this.items.forEach((e=>e.isSelected=!1)),this.selected=[]},toggleShowList(){this.showList=!this.showList},submit(){const e=JSON.stringify(this.selected.map((e=>e.id)));console.log(e),w().get("/",{params:{[this.name]:e}})},prev(){this.offset-=this.limit,this.request()},next(){this.offset+=this.limit,this.request()}}},k=s(89);const C=(0,k.Z)(y,[["render",g],["__scopeId","data-v-0dd8551f"]]);var S=C,x={name:"VForm",components:{"v-select":S},data(){return{url1:"https://lobster.tools/api/v1/categories",url2:"https://lobster.tools/api/v1/projects"}},methods:{submit(){this.$refs.select1.submit(),this.$refs.select2.submit(),this.$refs.select3.submit()}}};const O=(0,k.Z)(x,[["render",r],["__scopeId","data-v-7fdddd12"]]);var L=O,q={name:"App",components:{VForm:L}};const I=(0,k.Z)(q,[["render",o]]);var j=I;const D="Bearer BT3HK2NpCnyrKiDo";w().defaults.headers.post.authorization=D,(0,i.ri)(j).mount("#app")}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,i,n,o){if(!i){var l=1/0;for(u=0;u<e.length;u++){i=e[u][0],n=e[u][1],o=e[u][2];for(var r=!0,c=0;c<i.length;c++)(!1&o||l>=o)&&Object.keys(s.O).every((function(e){return s.O[e](i[c])}))?i.splice(c--,1):(r=!1,o<l&&(l=o));if(r){e.splice(u--,1);var a=n();void 0!==a&&(t=a)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[i,n,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,o,l=i[0],r=i[1],c=i[2],a=0;if(l.some((function(t){return 0!==e[t]}))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(c)var u=c(s)}for(t&&t(i);a<l.length;a++)o=l[a],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(u)},i=self["webpackChunkdirect_line"]=self["webpackChunkdirect_line"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(6903)}));i=s.O(i)})();
//# sourceMappingURL=app.aa86a908.js.map