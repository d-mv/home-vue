(function(t){function o(o){for(var a,n,r=o[0],c=o[1],l=o[2],h=0,p=[];h<r.length;h++)n=r[h],s[n]&&p.push(s[n][0]),s[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(o);while(p.length)p.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,o=0;o<i.length;o++){for(var e=i[o],a=!0,r=1;r<e.length;r++){var c=e[r];0!==s[c]&&(a=!1)}a&&(i.splice(o--,1),t=n(n.s=e[0]))}return t}var a={},s={app:0},i=[];function n(o){if(a[o])return a[o].exports;var e=a[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=a,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var a in t)n.d(e,a,function(o){return t[o]}.bind(null,a));return e},n.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=o,r=r.slice();for(var l=0;l<r.length;l++)o(r[l]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"034f":function(t,o,e){"use strict";var a=e("64a9"),s=e.n(a);s.a},"1b19":function(t,o,e){"use strict";var a=e("f7ef"),s=e.n(a);s.a},"21b9":function(t,o,e){},2259:function(t,o,e){},"36ba":function(t,o,e){"use strict";var a=e("21b9"),s=e.n(a);s.a},"3c14":function(t,o,e){},"4a33":function(t,o,e){"use strict";var a=e("2259"),s=e.n(a);s.a},"56d7":function(t,o,e){"use strict";e.r(o);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("2b0e"),s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[e("NavBar"),0===this.show?e("HomePage"):t._e(),1===this.show?e("WebProjects"):t._e(),2===this.show?e("Photos"):t._e(),3===this.show?e("Contacts"):t._e()],1)},i=[],n=new a["a"],r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{attrs:{id:"navbar"}},[e("div",{staticClass:"logo",attrs:{id:"logo"},on:{click:function(o){t.toggleNavigation()}}},[t._v("DM")]),this.showNavBar?e("div",{staticClass:"navbar-wrapper large",attrs:{id:"navbar-wrapper"}},[e("div",{staticClass:"nav-link",on:{click:function(o){t.showContent(0)}}},[e("span",{staticClass:"link-wrapper mb-home t3"},[t._v("HOME")])]),e("div",{staticClass:"nav-link",on:{click:function(o){t.showContent(1)}}},[e("span",{staticClass:"link-wrapper mb-web t3"},[t._v("WEB")])]),e("div",{staticClass:"nav-link",on:{click:function(o){t.showContent(2)}}},[e("span",{staticClass:"link-wrapper mb-photo t3"},[t._v("PHOTO")])]),e("div",{staticClass:"nav-link",on:{click:function(o){t.showContent(3)}}},[e("span",{staticClass:"link-wrapper t3"},[t._v("CONTACT")])])]):t._e()])},c=[],l={data:function(){return{showNavBar:!0,screenSmall:!1}},mounted:function(){window.screen.width<500&&(this.showNavBar=!1,this.screenSmall=!0)},methods:{toggleNavigation:function(){this.showNavBar=!this.showNavBar},showContent:function(t){this.screenSmall&&(this.showNavBar=!1),n.$emit("show",t)}}},u=l,h=(e("4a33"),e("2877")),p=Object(h["a"])(u,r,c,!1,null,"5c723dfb",null),d=p.exports,m=function(){var t=this,o=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{attrs:{id:"content"}},[e("div",{staticClass:"home-wrapper"},[e("div",{staticClass:"home-message"},[e("div",{staticClass:"first-line t0"},[t._v("WELCOME,")]),e("div",{staticClass:"second-line t1"},[t._v("I'm Dmitry")]),e("div",{staticClass:"third-line t2"},[t._v("FULL-STACK DEVELOPER")]),e("div",{staticClass:"fourth-line"},[t._v("{send message}")])]),e("img",{staticClass:"home-photo",attrs:{src:"https://res.cloudinary.com/diciu4xpu/image/upload/v1552051743/home/avatar_photo.jpg"}})])])}],v={},g=v,_=(e("36ba"),Object(h["a"])(g,m,f,!1,null,"739598f2",null)),b=_.exports,w=function(){var t=this,o=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{attrs:{id:"photo"}},[e("div",{staticClass:"web-content"},[e("div",{staticClass:"web-project"},[e("img",{staticClass:"web-project-screenshot",attrs:{src:"https://res.cloudinary.com/diciu4xpu/image/upload/v1551733286/home/newsletter_app.jpg"}}),e("div",{staticClass:"web-project-details"},[e("div",{staticClass:"web-proj-line-one text t4"},[t._v("The Newsletter")]),e("div",{staticClass:"web-proj-line-two text t5"},[t._v("Newspaper-style news reader proof of concept")]),e("div",{staticClass:"web-proj-line-icons text"},[e("a",{attrs:{href:"https://github.com/d-mv/newsletter"}},[e("i",{staticClass:"fab fa-github-alt icons"})])])])]),e("div",{staticClass:"web-project"},[e("img",{staticClass:"web-project-screenshot",attrs:{src:"https://res.cloudinary.com/diciu4xpu/image/upload/v1551734444/home/chaserz_1.jpg"}}),e("div",{staticClass:"web-project-details"},[e("div",{staticClass:"web-proj-line-one text t4"},[t._v("Chaserz")]),e("div",{staticClass:"web-proj-line-two text t5"},[t._v("Scooter race web game")]),e("div",{staticClass:"web-proj-line-icons text"},[e("a",{attrs:{href:"https://github.com/ronitalvi/chazers"}},[e("i",{staticClass:"fab fa-github-alt icons"})])])])])])])}],j={},y=j,P=(e("1b19"),Object(h["a"])(y,w,C,!1,null,"73d3175c",null)),x=P.exports,k=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{attrs:{id:"photo"}},[e("div",{staticClass:"photo-main",style:{background:"url("+this.photos[this.chosenPhoto]["large"]+") no-repeat center/cover"}},[e("div",{staticClass:"photo-title-block"},[e("div",{staticClass:"photo-title-row-one"},[t._v("\n        "+t._s(this.photos[this.chosenPhoto]["title"])+"\n      ")]),e("div",{staticClass:"photo-title-row-two"},[t._v("\n        "+t._s(this.photos[this.chosenPhoto]["location"])+"\n      ")])])]),e("div",{staticClass:"belt"},[e("i",{staticClass:"fas fa-angle-left",on:{click:function(o){t.left()}}}),e("PhotoCard",{attrs:{photoId:t.leftPhoto}}),e("PhotoCard",{staticClass:"m0",attrs:{photoId:t.leftPhoto+1}}),e("PhotoCard",{staticClass:"m0",attrs:{photoId:t.leftPhoto+2}}),e("PhotoCard",{staticClass:"m0",attrs:{photoId:t.leftPhoto+3}}),e("PhotoCard",{staticClass:"m0",attrs:{photoId:t.leftPhoto+4}}),e("i",{staticClass:"fas fa-angle-right",on:{click:function(o){t.right()}}})],1)])},O=[],E=e("a4bb"),I=e.n(E),N=e("cebc"),S=e("2f62"),$=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"belt-card",style:{background:"url("+this.photos[t.photoId]["thumb"]+") no-repeat center/cover"},on:{click:function(o){t.showPhoto(t.photoId)}}})},B=[],T=(e("c5f6"),{props:{photoId:{type:Number,required:!0}},computed:Object(N["a"])({},Object(S["b"])(["photos"])),methods:{showPhoto:function(t){n.$emit("choice",t)}}}),M=T,H=(e("fae7"),Object(h["a"])(M,$,B,!1,null,"58b1acae",null)),z=H.exports,A={components:{PhotoCard:z},data:function(){return{chosenPhoto:1,leftPhoto:1}},computed:Object(N["a"])({},Object(S["b"])(["photos"])),mounted:function(){var t=this;n.$on("choice",function(o){t.chosenPhoto=o})},methods:{switchPhoto:function(t){return console.log("method run with ".concat(t)),this.chosenPhoto=t,this.mainPhoto},left:function(){this.leftPhoto-1!=0&&(this.leftPhoto=this.leftPhoto-1)},right:function(){this.leftPhoto+5<=I()(this.photos).length&&(this.leftPhoto=this.leftPhoto+1)}}},L=A,R=(e("de04"),Object(h["a"])(L,k,O,!1,null,"2f85de34",null)),W=R.exports,D=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"title"},[t._v("This is Contacts")])},G=[],Y={},F=Y,J=Object(h["a"])(F,D,G,!1,null,"4b49a93a",null),U=J.exports,q={data:function(){return{show:0}},name:"app",components:{NavBar:d,HomePage:b,WebProjects:x,Photos:W,Contacts:U},mounted:function(){var t=this;n.$on("show",function(o){t.show=o})}},K=q,V=(e("034f"),Object(h["a"])(K,s,i,!1,null,null,null)),Q=V.exports,X=e("7dc5");a["a"].use(S["a"]);var Z=new S["a"].Store({state:{photos:X.photos},mutations:{},actions:{},getters:{photos:function(t){return t.photos}}});e.d(o,"EventBus",function(){return tt});var tt=new a["a"];a["a"].config.productionTip=!1,new a["a"]({store:Z,render:function(t){return t(Q)}}).$mount("#app")},"64a9":function(t,o,e){},"7dc5":function(t){t.exports={photos:{1:{title:"Pond with vegetation",location:"Gan Garoo, Israel",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1551907630/home/photos/gan_garoo_pond.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/gan_garoo_pond.jpg"},2:{title:"Branch of tree",location:"Beit Shean, Israel",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1551907617/home/photos/beit_shean_branch.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/beit_shean_branch.jpg"},3:{title:"Blossoming bush",location:"Yarkon Park, Israel",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1551907602/home/photos/yarkon_park_flower.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/yarkon_park_flower.jpg"},4:{title:"Flowers of the tree",location:"Herzliya Park, Israel",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1551907566/home/photos/tree_red_flowers.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/tree_red_flowers.jpg"},5:{title:"Sky through trees",location:"Yarkon Park, Israel",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1551907623/home/photos/yarkon_park_tree.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/yarkon_park_tree.jpg"},6:{title:"Mountains",location:"Ujarma, Georgia",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1551905690/home/photos/ujarma_dark.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/ujarma_dark.jpg"},7:{title:"Panorama",location:"Napoli, Italy",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1552062523/home/photos/napoli_panorama.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/napoli_panorama.jpg"},8:{title:"Autumn field",location:"Russia",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1552062527/home/photos/russia_autumn_field.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/russia_autumn_field.jpg"},9:{title:"Autumn park",location:"St.Petersburg, Russia",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1552062539/home/photos/russia_autumn_park.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/russia_autumn_park.jpg"},10:{title:"Yellow house",location:"St. Petersburg, Russia",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1552062521/home/photos/russia_yellow_house.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/russia_yellow_house.jpg"}}}},de04:function(t,o,e){"use strict";var a=e("ee56"),s=e.n(a);s.a},ee56:function(t,o,e){},f7ef:function(t,o,e){},fae7:function(t,o,e){"use strict";var a=e("3c14"),s=e.n(a);s.a}});
//# sourceMappingURL=app.62540000.js.map