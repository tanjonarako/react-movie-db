webpackJsonp([1],{135:function(e,n,t){"use strict";var r=t(34),u=r&&r.__esModule?function(){return r.default}:function(){return r};Object.defineProperty(u,"a",{get:u});var i=t(203),o=i&&i.__esModule?function(){return i.default}:function(){return i};Object.defineProperty(o,"a",{get:o});var a=t(285),c=t(100),d=c&&c.__esModule?function(){return c.default}:function(){return c};Object.defineProperty(d,"a",{get:d});var f=t(82),s=f&&f.__esModule?function(){return f.default}:function(){return f};Object.defineProperty(s,"a",{get:s});var l=t(287),p=t(286),v=f.createStore.bind()(l.a,{movies:[],counter:1,users:[]},f.applyMiddleware.bind()(p.a));i.render.bind()(u.a.createElement(c.Provider,{store:v},u.a.createElement(a.a,null)),document.getElementById("app"))},285:function(e,n,t){"use strict";var r=t(139),u=r&&r.__esModule?function(){return r.default}:function(){return r};Object.defineProperty(u,"a",{get:u});var i=t(143),o=i&&i.__esModule?function(){return i.default}:function(){return i};Object.defineProperty(o,"a",{get:o});var a=t(144),c=a&&a.__esModule?function(){return a.default}:function(){return a};Object.defineProperty(c,"a",{get:c});var d=t(146),f=d&&d.__esModule?function(){return d.default}:function(){return d};Object.defineProperty(f,"a",{get:f});var s=t(145),l=s&&s.__esModule?function(){return s.default}:function(){return s};Object.defineProperty(l,"a",{get:l});var p=t(34),v=p&&p.__esModule?function(){return p.default}:function(){return p};Object.defineProperty(v,"a",{get:v});var b=t(100),m=b&&b.__esModule?function(){return b.default}:function(){return b};Object.defineProperty(m,"a",{get:m});var y=t(288),h=y&&y.__esModule?function(){return y.default}:function(){return y};Object.defineProperty(h,"a",{get:h});var _,g,M,E,P,j,O,C,k=(_=b.connect.bind()(function(e){return{movies:e.movies}},function(e){return{getMovies:function(){return e({type:"getMovies",request:{url:"https://api.themoviedb.org/3/movie/popular?api_key=61a7fe0a2defc2d41f21253258bf6a4e"}})}}}),_(g=function(e){function n(){return o.a.bind()(this,n),f.a.bind()(this,u.a.bind()(n).apply(this,arguments))}return l.a.bind()(n,e),c.a.bind()(n,[{key:"componentDidMount",value:function(){this.props.getMovies()}},{key:"render",value:function(){var e=this.props.movies;return v.a.createElement("ul",null,e.map(function(e){return v.a.createElement("li",{key:e.id},e.title)}))}}]),n}(p.Component))||g);k.defaultProps={movies:[]};var S=(M=b.connect.bind()(function(e){return{users:e.users}},function(e){return{getUsers:function(n){return e({type:"getUsers",request:{url:"https://randomuser.me/api/?results="+n}})}}}),M(E=function(e){function n(){return o.a.bind()(this,n),f.a.bind()(this,u.a.bind()(n).apply(this,arguments))}return l.a.bind()(n,e),c.a.bind()(n,[{key:"componentDidMount",value:function(){this.props.getUsers(20)}},{key:"render",value:function(){var e=this.props.users;return v.a.createElement("ul",null,e.map(function(e){return v.a.createElement("li",{key:e.email},e.name.first)}))}}]),n}(p.Component))||E);S.defaultProps={users:[]};var U=(P=b.connect.bind()(function(e){return{counter:e.counter}}),P(j=function(e){function n(){return o.a.bind()(this,n),f.a.bind()(this,u.a.bind()(n).apply(this,arguments))}return l.a.bind()(n,e),c.a.bind()(n,[{key:"render",value:function(){var e=this.props.counter;return v.a.createElement("div",null,e)}}]),n}(p.Component))||j),I=(O=b.connect.bind()(function(){return{}},function(e){return{addMovie:function(n){return e({type:"push",data:n})},increment:function(){return e({type:"increment"})},decrement:function(){return e({type:"decrement"})}}}),O(C=function(e){function n(){return o.a.bind()(this,n),f.a.bind()(this,u.a.bind()(n).apply(this,arguments))}return l.a.bind()(n,e),c.a.bind()(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.addMovie,r=n.increment,u=n.decrement;return v.a.createElement("div",null,v.a.createElement("h1",null,"Hello"),v.a.createElement("input",{type:"text",ref:function(n){e.myInput=n}}),v.a.createElement(k,null),v.a.createElement(U,null),v.a.createElement("button",{onClick:function(){t(e.myInput.value),e.myInput.value=""}},"Push"),v.a.createElement("button",{onClick:function(){return r()}},"Increment"),v.a.createElement("button",{onClick:function(){return u()}},"Decrement"),v.a.createElement(S,null))}}]),n}(p.Component))||C);n.a=I},286:function(e,n,t){"use strict";var r=function(e){return function(e){return function(n){return n.request?fetch(n.request.url,{mode:"cors",redirect:"follow",headers:new Headers({"Content-Type":"text/plain"})}).then(function(e){return e.json()}).then(function(t){var r={data:t,type:n.type+"_SUCCESS"};console.log("[REMOTE] fetch success",r),e(r)}):e(n)}}};n.a=r},287:function(e,n,t){"use strict";var r=t(147),u=r&&r.__esModule?function(){return r.default}:function(){return r};Object.defineProperty(u,"a",{get:u});var i=t(82),o=i&&i.__esModule?function(){return i.default}:function(){return i};Object.defineProperty(o,"a",{get:o});var a=function(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],n=arguments[1];return"getMovies_SUCCESS"==n.type?[].concat(u.a.bind()(e),u.a.bind()(n.data.results)):"push"==n.type?[].concat(u.a.bind()(e),[n.data]):e},c=function(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments[1];return"increment"==n.type?e+=1:"decrement"==n.type?e-=1:e},d=function(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],n=arguments[1];return"getUsers_SUCCESS"==n.type?[].concat(u.a.bind()(e),u.a.bind()(n.data.results)):e};n.a=i.combineReducers.bind()({movies:a,counter:c,users:d})},288:function(e,n){},290:function(e,n,t){e.exports=t(135)}},[290]);
//# sourceMappingURL=main-6ee5c3d7780f8703c109.js.map