(this["webpackJsonponline-sampler"]=this["webpackJsonponline-sampler"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/sound-wave.78f9cb09.svg"},30:function(e,t,a){e.exports=a.p+"static/media/PianoSample.afa58736.mp3"},31:function(e,t,a){e.exports=a.p+"static/media/StringsSample.db30e431.mp3"},32:function(e,t,a){e.exports=a.p+"static/media/VocalSample.d2f7b662.mp3"},33:function(e,t,a){e.exports=a.p+"static/media/SynthSample.ae231a4f.mp3"},34:function(e,t,a){e.exports=a.p+"static/media/PadsSample.de0295b1.mp3"},35:function(e,t,a){e.exports=a.p+"static/media/Mellotron.bdcf7f47.png"},36:function(e,t,a){e.exports=a.p+"static/media/cassette-tape.d7282e40.svg"},38:function(e,t,a){e.exports=a.p+"static/media/Hero.2c6ee5ad.png"},39:function(e,t,a){e.exports=a.p+"static/media/react-logo.bddb70ec.svg"},40:function(e,t,a){e.exports=a.p+"static/media/andrew.435f6b71.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/Sanjay.02c75123.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/InTheMix.bf03e1a4.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/Teatro.8c0ac374.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/Ableton.3e6ae130.png"},45:function(e,t,a){e.exports=a(58)},50:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),s=a.n(o),i=(a(50),a(6)),c=a(7),l=a(9),u=a(8),m=a(13),d=a(3),p=function(){var e=document.location.pathname,t=document.querySelector("html"),a=document.querySelector("body"),n=document.querySelector(".App");"/"===e&&window.matchMedia("(orientation: portrait)").matches?(t.style.transform=" rotate(90deg)",a.style.width="100vh",a.style.height="100vw",n.style.maxWidth="100vh",n.style.height="100vw"):(t.style.transform="",a.style.width="",a.style.height="",n.style.maxWidth="",n.style.height="")};function g(){return r.a.createElement("menu",{className:"links"},r.a.createElement(m.b,{to:"/about",className:"link ".concat(Object(d.f)("/about")?"link--active":"")},"How it works?"),r.a.createElement(m.b,{to:"/creators",className:"link ".concat(Object(d.f)("/creators")?"link--active":"")},"Who made it?"),r.a.createElement(m.b,{to:"/learn-more",className:"link ".concat(Object(d.f)("/learn-more")?"link--active":"")},"Learn more"))}function h(){var e="/"!==Object(d.e)().pathname;return r.a.createElement("header",{className:"mainHeader ".concat(e?"mainHeader--subPage":"")},r.a.createElement("div",{className:"headerContainer"},r.a.createElement(m.b,{to:"/",className:"logo logo--left",onClick:p},r.a.createElement("h1",null," Online")),r.a.createElement(m.b,{to:"/",className:"logo logo--right",onClick:p},r.a.createElement("h1",null,"Mellotron")),r.a.createElement("p",null,"Awake creativity")),r.a.createElement("span",{className:"placeHolder"}),r.a.createElement(g,null))}var f=["NVV BCC XVN NVV BCC XVX","V F V F V Z C X Y","DZD 5 CDCD Z CDC5 U YUY6UY "];function y(){return r.a.createElement(r.a.Fragment,null,function(){var e=Math.floor(Math.random()*f.length);return f[e]}())}var E=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(i.a)(this,a),(o=t.call(this,e)).refreshTime=1e6,o.adviceIndex=-1,o.advices=[r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"You can also play using keybord."),r.a.createElement("p",null,"Try typing",r.a.createElement("br",null),r.a.createElement(y,null))),r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"To change mapping of keys, click one while holding Ctrl"))],o.getRandomAdvise=function(){var e=Math.floor(Math.random()*o.advices.length);return e!==o.adviceIndex?(o.adviceIndex=e,o.advices[e]):o.getRandomAdvise()},o.state={advise:o.getRandomAdvise()},o}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.intervalId=setInterval((function(){e.setState({advise:e.getRandomAdvise()})}),this.refreshTime)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){return r.a.createElement("div",{className:"advice"},this.state.advise)}}]),a}(n.Component),v=a(1);function b(){return Object(n.useEffect)((function(){v.c.from(".sideBar",{xPercent:-100})})),r.a.createElement("div",{className:"sideBar"},r.a.createElement(E,null))}var k=a(20),w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).onWindowClick=function(e){e.target.classList.contains("key")||e.target.classList.contains("keyboard")||n.setState({edit:!1})},n.onKeyPressed=function(e){var t,a=e.key.toUpperCase();n.props.editMode?n.state.edit&&(t=n.state.triggerKey.includes(a)?n.state.triggerKey.filter((function(e){return e!==a})):n.state.triggerKey.concat(a),n.setState({triggerKey:t,edit:!1})):n.state.triggerKey.includes(a)&&!n.state.keyPressed&&n.setState({keyPressed:!0,activeKey:a})},n.onKeyUp=function(e){var t=e.key.toUpperCase();n.props.editMode||n.state.activeKey===t&&n.state.keyPressed&&n.setState({keyPressed:!1,activeKey:!1})},n.onMouseDown=function(e){e.ctrlKey?(n.setState((function(e){return{edit:!e.edit}})),n.props.toggleEditMode(!0)):n.props.editMode?n.setState((function(e){return{edit:!e.edit}})):n.setState({clicked:!0})},n.onMouseUp=function(){n.state.clicked&&n.setState({clicked:!1})},n.onMouseEnter=function(){n.props.keyboardActive&&n.setState({clicked:!0})},n.onMouseOut=function(){n.state.clicked&&n.setState({clicked:!1})};var r=n.props.note,o=r.name,s=r.defaultTriggerKeys,c=r.black,l=r.transpose;return n.rate=Math.pow(2,l/12),n.state={loaded:!0,clicked:!1,keyPressed:!1,triggerKey:s||[""]},n.black=c,n.name=o,n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){document.body.addEventListener("keypress",this.onKeyPressed),document.body.addEventListener("keyup",this.onKeyUp),document.body.addEventListener("click",this.onWindowClick)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("keypress",this.onKeyPressed),document.body.removeEventListener("keyup",this.onKeyUp),document.body.removeEventListener("click",this.onWindowClick)}},{key:"componentDidUpdate",value:function(){var e=this,t=this.props.howler.howler;this.state.keyPressed||this.state.clicked?t.playing(this.id)&&this.id||(this.id=t.play(),t.rate(this.rate,this.id),console.log("".concat(this.name," is playing!!"))):t.playing(this.id)&&this.id&&(t.once("fade",(function(){t.stop(e.id)})),t.fade(.5,0,50,this.id),console.log("".concat(this.name," has stopped!!")))}},{key:"render",value:function(){return r.a.createElement("div",{id:this.name,onClick:this.onClick,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseOut:this.onMouseOut,onMouseEnter:this.onMouseEnter,onTouchStart:this.onMouseDown,onTouchEnd:this.onMouseUp,className:"key key--".concat(this.black?"black":"white"," \n                    ").concat(this.state.keyPressed||this.state.clicked?"key--active":"","\n                    ").concat(this.props.editMode?"key--editable":"","\n                    ").concat(this.state.edit&&this.props.editMode?"key--edit":"","\n                    ").concat(this.props.errors||this.props.loading?"key--loading":"","\n                    ")},r.a.createElement("div",{className:"trigger"},this.state.triggerKey.map((function(e){return r.a.createElement("p",{key:e},e)}))))}}]),a}(n.Component);function M(e){var t=e.errors;return 0===t.length?null:r.a.createElement("div",{className:"errorMessage"},t.map((function(e,t){return r.a.createElement("p",{key:t},e)})))}var N=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).whiteNotes=[],n.blackNotes=[],n.assignNewLoadingOrder=function(){n.blackNotes.forEach((function(e){e.loadingOrder=24*Math.random()})),n.whiteNotes.forEach((function(e){e.loadingOrder=24*Math.random()}))},n.state={active:!1,editMode:!1},n.onWindowClick=function(e){e.target.classList.contains("key")||e.target.classList.contains("keyboard")||n.toggleEditMode(!1)},n.onMouseDown=function(){n.state.editMode||n.setState({active:!0})},n.onMouseUp=function(){n.setState({active:!1})},n.onMouseLeave=function(){n.state.active&&n.setState({active:!1})},n.toggleEditMode=function(e){n.setState({editMode:e,active:!1})};var r=-12;return[{name:"C1",defaultTriggerKeys:["Q"]},{name:"Db1",defaultTriggerKeys:["2"]},{name:"D1",defaultTriggerKeys:["W"]},{name:"Eb1",defaultTriggerKeys:["3"]},{name:"E1",defaultTriggerKeys:["E"]},{name:"ghost11"},{name:"F1",defaultTriggerKeys:["R"]},{name:"Gb1",defaultTriggerKeys:["5"]},{name:"G1",defaultTriggerKeys:["T"]},{name:"Ab1",defaultTriggerKeys:["6"]},{name:"A1",defaultTriggerKeys:["Y"]},{name:"Bb1",defaultTriggerKeys:["7"]},{name:"B1",defaultTriggerKeys:["U","Z"]},{name:"ghost12"},{name:"C2",defaultTriggerKeys:["X","I"]},{name:"Db2",defaultTriggerKeys:["D","9"]},{name:"D2",defaultTriggerKeys:["C","O"]},{name:"Eb2",defaultTriggerKeys:["F"]},{name:"E2",defaultTriggerKeys:["V"]},{name:"ghost21"},{name:"F2",defaultTriggerKeys:["B"]},{name:"Gb2",defaultTriggerKeys:["H"]},{name:"G2",defaultTriggerKeys:["N"]},{name:"Ab2",defaultTriggerKeys:["J"]},{name:"A2",defaultTriggerKeys:["M"]},{name:"Bb2",defaultTriggerKeys:["K"]},{name:"B2",defaultTriggerKeys:[","]},{name:"ghost22"},{name:"C3",defaultTriggerKeys:["."]}].forEach((function(e){e.name.length>3?n.blackNotes.push({name:e.name,black:!0}):(2===e.name.length&&n.whiteNotes.push({name:e.name,defaultTriggerKeys:e.defaultTriggerKeys,black:!1,transpose:r,loadingOrder:24*Math.random()}),3===e.name.length&&n.blackNotes.push({name:e.name,defaultTriggerKeys:e.defaultTriggerKeys,black:!0,transpose:r,loadingOrder:24*Math.random()}),r++)})),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){document.body.addEventListener("click",this.onWindowClick)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.onWindowClick)}},{key:"render",value:function(){var e=this,t=0!==this.props.errors.length;return 0===this.props.loadingProgress&&(console.log("new order"),this.assignNewLoadingOrder()),r.a.createElement("div",{className:"keyboard ".concat(this.props.loading?"keyboard--loading":""),onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave,onTouchStart:this.onMouseDown,onTouchEnd:this.onMouseUp},r.a.createElement("div",{className:"blackKeys"},this.blackNotes.map((function(a){return r.a.createElement(w,{key:a.name,keyboardActive:e.state.active,note:a,howler:e.props.howler,editMode:e.state.editMode,toggleEditMode:e.toggleEditMode,errors:t,loading:e.props.loading&&e.props.loadingProgress<a.loadingOrder})}))),this.whiteNotes.map((function(a){return r.a.createElement(w,{key:a.name,keyboardActive:e.state.active,note:a,howler:e.props.howler,editMode:e.state.editMode,toggleEditMode:e.toggleEditMode,errors:t,loading:e.props.loading&&e.props.loadingProgress<a.loadingOrder})})),r.a.createElement(M,{errors:this.props.errors}))}}]),a}(n.Component),C=a(28),O=a.n(C),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){e.preventDefault()},n.onLoaded=function(e){var t;n.setState({loading:!0});var a=e.target.files[0],r=new FileReader;r.addEventListener("load",(function(){t=r.result,n.props.addCustomSound(t),n.setState({sound:a.name,loading:!1})})),r.readAsDataURL(a)},n.state={sound:"Drop mp3 file here to make a custom sample!",loading:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"soundUploader fileInput",onSubmit:this.onSubmit},r.a.createElement("input",{type:"file",className:"fileInput__input",name:"fileInput",id:"fileInput",accept:"audio/*",onChange:this.onLoaded.bind(this)}),r.a.createElement("label",{className:"fileInput__label",htmlFor:"fileInput"},this.state.loading?r.a.createElement("div",{className:"loader"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)):r.a.createElement("img",{src:O.a,alt:"soundWave"}),r.a.createElement("p",null," ",this.state.loading?"uploading media":this.state.sound)))}}]),a}(n.Component),j=a(61),T=a(12);function K(e){var t=e.instrument,a=e.addCustomSound;return r.a.createElement(j.a,null,r.a.createElement(T.d,{key:t,timeout:400,onEnter:function(e){return I(e)},onExiting:function(e){return x(e)}},"Custom"===t?r.a.createElement(S,{addCustomSound:a}):r.a.createElement("div",{className:"backgroundImage backgroundImage--".concat(t)})))}var I=function(e){v.c.from(e,{filter:"blur(50px)",opacity:.5,duration:.6})},x=function(e){v.c.to(e,{filter:"blur(50px)",opacity:.5,duration:.6})},L=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).instruments=["Piano","Strings","Vocals","Synth","Pads","Custom"],e.onClick=function(t){e.props.changeInstrument(t.target.value)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.instrument;return r.a.createElement("div",{className:"sampleMenu"},r.a.createElement("header",null,"Choose a Sound"),r.a.createElement("div",{className:"sampleMenu__menu"},this.instruments.map((function(a){return r.a.createElement("button",{key:a,onClick:e.onClick,className:"menuButton sampleMenu__button ".concat(t===a?"sampleMenu__button--active":""),value:a,"aria-label":a},a)}))))}}]),a}(n.Component),D=a(29),P=a(30),U=a.n(P),A=a(31),W=a.n(A),F=a(32),H=a.n(F),V=a(33),R=a.n(V),_=a(34),B=a.n(_),Y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).sounds=[{name:"Piano",src:U.a},{name:"Strings",src:W.a},{name:"Vocals",src:H.a},{name:"Synth",src:R.a},{name:"Pads",src:B.a},{name:"Custom"}],n.changeInstrument=function(e){var t=n.sounds.find((function(t){return t.name===e}));n.setState({instrument:t},(function(){n.HOWLER.update(n.state.instrument.src)})),sessionStorage.setItem("instrument",t.name)},n.addCustomSound=function(e){var t={name:"Custom",src:e};n.sounds.pop(),n.sounds.push(t),n.setState({instrument:t},(function(){n.HOWLER.update(n.state.instrument.src)}))},n.HOWLER={howler:null,ancestor:Object(k.a)(n),update:function(e){var t=this;this.ancestor.beginLoading(),this.howler&&this.howler.stop(),this.howler=new D.Howl({src:[e],onload:function(){console.log("loaded ".concat(e)),t.ancestor.setState({errors:[]}),t.ancestor.stopLoading()},onplay:function(e){t.howler.fade(0,.5,100,e)},onloaderror:function(e,a){4===a&&(a="network error"),t.appendError(a)},onplayerror:function(e,a){t.appendError(a)}})},appendError:function(e){n.setState((function(t){return{errors:t.errors.concat(e)}})),n.setState({loading:!1}),n.stopLoading()}},n.beginLoading=function(){clearInterval(n.timerID),n.setState({loadingProgress:0,loading:!0,errors:[]}),n.timerID=setInterval(n.incerementProgress,25)},n.stopLoading=function(){n.setState({loading:!1}),clearInterval(n.timerID)},n.incerementProgress=function(){n.setState((function(e){var t=e.loadingProgress;return t<=24?t++:t=0,{loadingProgress:t}}))};var r=sessionStorage.getItem("instrument")||"Piano";return n.state={instrument:{name:r||"Piano",src:n.sounds.find((function(e){return e.name===r})).src},loading:!1,errors:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.HOWLER.update(this.state.instrument.src)}},{key:"componentDidUpdate",value:function(){p()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{changeInstrument:this.changeInstrument,instrument:this.state.instrument.name}),r.a.createElement(N,{howler:this.HOWLER,errors:this.state.errors,loading:this.state.loading,loadingProgress:this.state.loadingProgress}),r.a.createElement(K,{instrument:this.state.instrument.name,addCustomSound:this.addCustomSound}))}}]),a}(n.Component),G=a(19);function q(e){var t=G.a.timeline();return Object(n.useEffect)((function(){return p(),v.c.to(".background",{opacity:1}),t.to(".subHeader > h2",{opacity:1,duration:.2}).from(".line",{scaleX:0,duration:.8}).from(".background",{scaleY:0,duration:.8},"-=.4").fromTo(".section",{opacity:0},{opacity:1},"-=.2").from(".text",{xPercent:-20,duration:.4},"-=.4"),function(){t.kill()}})),r.a.createElement("div",{className:"page page__"+e.name},e.children,r.a.createElement("section",{className:"section section--footer"},r.a.createElement(m.b,{className:"back",to:"/"},"Go back")))}function X(e){var t=e.children.split(" ")[0].toUpperCase().split("");return r.a.createElement("div",{className:"subHeader"},r.a.createElement("h2",{style:{opacity:0}}," ",e.children),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"background",style:{opacity:0}}),r.a.createElement("label",{className:"label"},t.map((function(e){return r.a.createElement("div",{key:e,className:"letter"},e)}))))}var Z=a(35),J=a.n(Z),Q=a(36),z=a.n(Q);function $(){return r.a.createElement(q,{name:"about"},r.a.createElement(X,null,"How it works"),r.a.createElement("article",{className:"section section--head"},r.a.createElement("img",{src:J.a,alt:"Mellotron"}),r.a.createElement("section",{className:"text"},'Mellotron is a real world instrument. Invented in 1963, The Beatles used the instrument on several tracks, including the hit single "Strawberry Fields Forever". The Mellotron was subsequently used by groups like King Crimson and Genesis, becoming a common instrument in progressive rock.')),r.a.createElement("article",{className:"section section--mid"},r.a.createElement("section",{className:"text"},"Mellotron uses the same concept as a sampler, but generates its sound using analogue samples recorded on audio tape rather than digital samples. Since OnlineMellotron is a digital creation it's obviously using digital samples, but way of playing them is same as in it originator. Sounds aren't looped, and diffrent pitch is achieved by varying the speed of sample."),r.a.createElement("img",{src:z.a,alt:"Tape"})))}var ee=a(16),te=a(37),ae=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.icon,t=this.props.children.split("");return r.a.createElement(n.Fragment,null,r.a.createElement(te.a,{className:"icon",icon:e}),r.a.createElement("label",null," ",t.map((function(e,a){return r.a.createElement("span",{key:a,style:ne(a,t.length)},e)}))))}}]),a}(n.Component),ne=function(e,t){return{transitionDelay:"".concat(e/t*.2,"s")}};function re(){return r.a.createElement("section",{className:"section socials"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{target:"blank",href:"https://www.instagram.com/pafefeu/"},r.a.createElement(ae,{icon:ee.c},"Follow"))),r.a.createElement("li",null,r.a.createElement("a",{target:"blank",href:"https://www.facebook.com/profile.php?id=100003889069327"},r.a.createElement(ae,{icon:ee.a},"Like"))),r.a.createElement("li",null,r.a.createElement("a",{target:"blank",href:"https://github.com/paweljakubwojcik"},r.a.createElement(ae,{icon:ee.b},"Collaborate"))),r.a.createElement("li",null,r.a.createElement("a",{target:"blank",href:"https://www.youtube.com/channel/UCHInPtspnooQOVfqxFijunA?view_as=subscriber"},r.a.createElement(ae,{icon:ee.e},"Watch"))),r.a.createElement("li",null,r.a.createElement("a",{target:"blank",href:"https://www.linkedin.com/in/pawe%C5%82-w%C3%B3jcik-154ba81a2/"},r.a.createElement(ae,{icon:ee.d},"Link In")))))}var oe=a(38),se=a.n(oe),ie=a(39),ce=a.n(ie);function le(){var e=new Date,t=new Date(1999,8,6),a=e.getFullYear()-t.getFullYear();return r.a.createElement(q,{name:"creators"},r.a.createElement(X,null,"Who made it?"),r.a.createElement("section",{className:"section section--head section--hero"},r.a.createElement("img",{src:se.a,alt:"HeroImage",className:"heroImage"}),r.a.createElement("section",{className:"text"},"I'm a ",a," years old, self taught, web developer from Poland, I also like to make music, and I'm eager to share my passion for it.")),r.a.createElement("section",{className:"section section--mid"},r.a.createElement("section",{className:"text"},"This is my first project build with React"),r.a.createElement("img",{src:ce.a,alt:"Tape"})),r.a.createElement(re,null))}function ue(e){var t=e.name,a=e.description,n=e.image,o=e.href;return r.a.createElement("a",{href:o,target:"blank",className:"ytChannel"},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("div",{className:"ytChannel--info"},r.a.createElement("header",null,t),r.a.createElement("p",null,a),r.a.createElement("span",null)))}var me=a(40),de=a.n(me),pe=a(41),ge=a.n(pe),he=a(42),fe=a.n(he),ye=a(43),Ee=a.n(ye),ve=a(44),be=a.n(ve);function ke(){return r.a.createElement(q,{name:"learnMore"},r.a.createElement(X,null,"Learn More"),r.a.createElement("section",{className:"section section--head"},r.a.createElement("img",{src:be.a,style:{transform:"scale(1.5)",transformOrigin:"right",filter:"brightness(.8)"},alt:"DAW"}),r.a.createElement("section",{className:"text"},"If you're interested in learning more about music production there is a few resources that I can recommend")),r.a.createElement("section",{className:"section section--recommendation"},r.a.createElement("h3",null,"Good yt channels to learn music production"),r.a.createElement("div",{className:"channels"},r.a.createElement(ue,{image:de.a,name:"Andrew Huang",description:"All about music production , weird instrument etc.",href:"https://www.youtube.com/user/songstowearpantsto"}),r.a.createElement(ue,{image:fe.a,name:"In The Mix",description:"In The Mix is all about simplifying the recording, production, mixing and mastering process.",href:"https://www.youtube.com/c/inthemix/featured"}),r.a.createElement(ue,{image:ge.a,name:"Sanjay C",description:"Music production, gear, and tips.",href:"https://www.youtube.com/c/SanjayC/featured"}),r.a.createElement(ue,{image:Ee.a,name:"Teatro",description:"live performances, tutorials, soundpacks and more!",href:"https://www.youtube.com/c/Taetro/about"}))))}var we=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={app:"mellotron"},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",p),window.addEventListener("load",p)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,null,r.a.createElement(h,null),r.a.createElement(d.a,{exact:!0,path:"/"},r.a.createElement(b,null),r.a.createElement(Y,null)),r.a.createElement(d.a,{path:"/about"},r.a.createElement($,null)),r.a.createElement(d.a,{path:"/creators"},r.a.createElement(le,null)),r.a.createElement(d.a,{path:"/learn-more"},r.a.createElement(ke,null))))}}]),a}(n.Component);s.a.render(r.a.createElement(we,null),document.querySelector(".container"))}},[[45,1,2]]]);
//# sourceMappingURL=main.257d35bb.chunk.js.map