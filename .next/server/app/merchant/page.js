(()=>{var A={};A.id=872,A.ids=[872],A.modules={7849:A=>{"use strict";A.exports=require("next/dist/client/components/action-async-storage.external")},2934:A=>{"use strict";A.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:A=>{"use strict";A.exports=require("next/dist/client/components/request-async-storage.external")},4580:A=>{"use strict";A.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:A=>{"use strict";A.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:A=>{"use strict";A.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:A=>{"use strict";A.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:A=>{"use strict";A.exports=require("path")},7310:A=>{"use strict";A.exports=require("url")},9945:(A,e,t)=>{"use strict";t.r(e),t.d(e,{GlobalError:()=>r.a,__next_app__:()=>g,originalPathname:()=>c,pages:()=>d,routeModule:()=>h,tree:()=>o}),t(5578),t(6250),t(1930),t(5866);var s=t(3191),a=t(8716),i=t(7922),r=t.n(i),l=t(5231),n={};for(let A in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(A)&&(n[A]=()=>l[A]);t.d(e,n);let o=["",{children:["merchant",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5578)),"/Users/noname/Downloads/rwwebcopy/src/app/merchant/page.tsx"]}]},{metadata:{icon:[async A=>(await Promise.resolve().then(t.bind(t,3881))).default(A)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,6250)),"/Users/noname/Downloads/rwwebcopy/src/app/layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,1930)),"/Users/noname/Downloads/rwwebcopy/src/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async A=>(await Promise.resolve().then(t.bind(t,3881))).default(A)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/noname/Downloads/rwwebcopy/src/app/merchant/page.tsx"],c="/merchant/page",g={require:t,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/merchant/page",pathname:"/merchant",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},7978:(A,e,t)=>{Promise.resolve().then(t.t.bind(t,2481,23)),Promise.resolve().then(t.bind(t,8138)),Promise.resolve().then(t.bind(t,6668)),Promise.resolve().then(t.bind(t,702)),Promise.resolve().then(t.bind(t,3588)),Promise.resolve().then(t.bind(t,6725)),Promise.resolve().then(t.bind(t,8118)),Promise.resolve().then(t.bind(t,2396)),Promise.resolve().then(t.bind(t,5825)),Promise.resolve().then(t.bind(t,2633)),Promise.resolve().then(t.bind(t,6060)),Promise.resolve().then(t.bind(t,3354)),Promise.resolve().then(t.bind(t,2970)),Promise.resolve().then(t.bind(t,5907)),Promise.resolve().then(t.bind(t,9534)),Promise.resolve().then(t.bind(t,1813))},1813:(A,e,t)=>{"use strict";t.d(e,{default:()=>r});var s=t(326),a=t(7577),i=t(6226);let r=({stepList:A})=>{let[e,t]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let A=()=>{document.querySelectorAll(".step-section").forEach((A,e)=>{let s=A.getBoundingClientRect(),a=window.innerHeight;s.top<.5*a&&s.bottom>=0&&t(e)})};return window.addEventListener("scroll",A),()=>{window.removeEventListener("scroll",A)}},[]),s.jsx("div",{className:"flex flex-col items-center justify-center space-y-10 bg-white p-10",children:A.map((A,t)=>s.jsx("div",{className:`w-full max-w-6xl step-section ${e===t?"opacity-100":"opacity-60"}`,style:{transition:"opacity 0.5s"},children:(0,s.jsxs)("div",{className:"flex flex-col md:flex-row items-center gap-4 md:gap-8",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center md:items-start",children:[(0,s.jsxs)("div",{className:`flex mt-14 ${e===t?"mr-14":"mr-5"}`,children:[s.jsx("h1",{className:"mr-4 text-2xl font-semibold text-red-700 mt-[6px]",children:"Step"}),s.jsx(i.default,{className:"h-12 w-12 text-[#bd1e59]",src:e===t?A.img[1]:A.img[0],alt:`step ${t+1}`})]}),t<3&&s.jsx("div",{className:"hidden md:block h-[180px] w-px bg-[#C5393A] mr-5 ml-[93px] mt-5"})]}),s.jsx("div",{className:`overflow-hidden rounded-full ${e===t?"w-[200px] h-[200px]":"w-[160px] h-[160px]"}`,children:s.jsx(i.default,{src:A.imgMain,alt:`step ${t+1} image`,width:160,height:160,className:"object-cover w-full h-full"})}),(0,s.jsxs)("div",{className:"flex-1 min-w-0 mt-7 ml-9 md:ml-0 md:mt-0",children:[s.jsx("h3",{className:`font-semibold text-gray-900 ${e===t?"text-3xl":"text-2xl"}`,children:A.title}),s.jsx("p",{className:`mt-3 text-gray-600 ${e===t?"text-xl":"text-lg"}`,dangerouslySetInnerHTML:{__html:A.text}})]})]})},t))})}},5578:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>v});var s=t(9510),a=t(7710),i=t(5612);t(1159);let r={src:"/_next/static/media/unsplash_RxiAV5LC-ww.70c367d6.png",height:599,width:421,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAY1BMVEVfU0rPtKSFa12VgXDLvLPYyMDgz8ivi29xTjzAoo/Pt6LWz9GUd2G3ln3r9f9ya2bEzNKSfXKxloatmo+9ppbCtKtybGhtTTo3MjK3ppqJiY0bHyOssLLBxcqhmZZ9WEVPU1amtLVlAAAAFHRSTlP68fzJ/vj969/48f7l7P3x/v7//rY3+gcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA7SURBVHicBcGHAkAgAEDBhyZZpSXr/7/SHfJh9xaVXhs06su+doiSxCUJ7dzukb5MS4RMjceKMU7Pww9R8ALQ1nBoNQAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8},l={src:"/_next/static/media/quotes.e7a4cb49.svg",height:104,width:105,blurWidth:0,blurHeight:0},n=()=>s.jsx("div",{children:s.jsx("div",{className:"py-16 px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,s.jsxs)("h2",{className:"text-6xl font-bold text-center text-gray-900 mb-20",children:["What Our ",s.jsx("span",{className:"text-red-600",children:"Merchant"})," Says About ",s.jsx("span",{className:"text-red-600",children:"Us"})]}),(0,s.jsxs)("div",{className:"relative grid grid-cols-1 md:grid-cols-2 items-center",children:[(0,s.jsxs)("div",{className:"relative z-10 bg-white shadow-custom-lg w-full p-8 md:p-20 rounded-l-3xl",children:[s.jsx("blockquote",{className:"text-2xl font-medium text-black mb-4",children:"“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”"}),s.jsx("div",{className:"flex justify-center mb-4",children:s.jsx(a.default,{src:l,alt:"big quote sign",className:"block"})}),s.jsx("p",{className:"text-4xl font-semibold",children:"Pratiksha Ekbote"}),s.jsx("p",{className:"text-gray-500",children:"CEO, Design Studios"})]}),s.jsx("div",{className:"absolute top-0 right-0 md:relative",children:s.jsx(a.default,{src:r,alt:"Pratiksha Ekbote",className:"rounded-3xl"})})]})]})})});var o=t(465),d=t(6619),c=t(2655),g=t(1842),h=t(5302),x=t(8512),m=t(5340),u=t(2444),p=t(8066),b=t(2577),E=t(7828),f=t(4747),B=t(1608);let w=[{img:[d.Z,d.Z],imgMain:c.Z,title:"Get Started: Create Your Merchant Account",text:"Simply provide your business information and get instant access to a powerful suite of loyalty tools."},{img:[g.Z,E.Z],imgMain:h.Z,title:"List Your Products & Services",text:"Simply provide your business information and get instant access to a powerful suite of loyalty tools."},{img:[x.Z,f.Z],imgMain:m.Z,title:"Drive Sales with Targeted Offers & Promotions",text:"Simply provide your business information and get instant access to a powerful suite of loyalty tools."},{img:[u.Z,B.Z],imgMain:p.Z,title:"Earnings & Insights: Track Your Success",text:"Simply provide your business information and get instant access to a powerful suite of loyalty tools."}];function D(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"bg-[#FCFCFC] p-8 mt-8 font-inter",children:[(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsxs)("div",{className:"relative p-2",children:[s.jsx("h1",{className:"text-6xl max-sm:text-4xl xl:text-7xl font-bold text-[#0A0A0A]",children:"Say hello to the"}),(0,s.jsxs)("div",{className:"relative flex justify-center items-center flex-wrap",children:[(0,s.jsxs)("div",{className:"relative text-center mt-2 max-sm:w-[300px]",children:[s.jsx(a.default,{className:"absolute top-0 ml-2 max-sm:p-2",src:i.Z,alt:"Background"}),s.jsx("h1",{className:"relative max-sm:text-4xl text-6xl xl:text-7xl my-4 mt-2 font-bold text-[#0A0A0A] px-10",children:"Rewardwise"})]}),s.jsx("div",{children:s.jsx("h1",{className:"text-6xl max-sm:text-4xl xl:text-7xl font-bold text-[#0A0A0A]",children:"community"})})]})]}),(0,s.jsxs)("div",{children:[s.jsx("p",{className:"mt-2 text-2xl leading-6 max-sm:text-xl max-sm:font-medium font-bold text-[#1F1F1F]",children:"Rewardwise empowers local businesses like shops, restaurants,"}),s.jsx("p",{className:"mt-2 text-2xl leading-6 max-sm:text-xl max-sm:font-medium font-bold text-[#1F1F1F]",children:"vendors, and educational classes to attract customers,"}),s.jsx("p",{className:"mt-2 text-2xl leading-6 max-sm:text-xl max-sm:font-medium font-bold text-[#1F1F1F]",children:"boosting sales and generating leads."})]})]}),s.jsx("div",{className:"mt-2",children:s.jsx("img",{src:"https://s3-alpha-sig.figma.com/img/b340/5c7c/dccf1910fca4fbea4a1009a1ef1a706b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NiSaWP~QXz2wavfFDr~VX87yS5moM1i05tSgyjwdjlBN5r4JGGXeboqQRGOD~zc2RVUj8KKR2MtWs8CxlUDmOsWeE2xQw~ai4I7qHZbui7Yu3fUv3ZrDn8liFdBgXSDHuodPt9RkoyGrkFo7I7-wXSxfZeT26iYa8ogDyKpciMBCwbOg09R7A1FQ4Q98yZ~t0~bVOpj853Weg4G8N65K3ESXHaPqPG5TZ5Kmm~i2Bu0w6iv0BtNit~uKsANkVerI~5LekafXM9KnyvHIAmZrClhCEn0cOZZcAoBd~i~CZLwj0y3k3VGHrSJ5PNSQqkOEuTH-sxp565coVASFlxmwaQ__",alt:"Community",className:"px-16"})}),s.jsx("div",{className:"mt-20 border-[2px] border-[#E3E3E3] bg-white rounded-[36px] mb-20 px-20 py-10 shadow-custom ",children:(0,s.jsxs)("div",{className:"flex flex-wrap gap-5 justify-evenly text-center ",children:[(0,s.jsxs)("div",{children:[s.jsx("h2",{className:"text-[62px] font-bold text-[#3947C4]",children:"94%"}),s.jsx("p",{className:"text-2xl font-bold text-[#514F6E]",children:"Customer"}),s.jsx("p",{className:"text-2xl font-bold text-[#514F6E]",children:"Satisfaction"})]}),(0,s.jsxs)("div",{children:[s.jsx("h2",{className:"text-[62px] font-bold text-[#3947C4]",children:"32M"}),s.jsx("p",{className:"text-2xl font-bold text-[#514F6E]",children:"Active"}),s.jsx("p",{className:"text-2xl font-bold text-[#514F6E]",children:"Users"})]}),(0,s.jsxs)("div",{children:[s.jsx("h2",{className:"text-[62px] font-bold text-[#3947C4]",children:"90+"}),s.jsx("p",{className:"text-2xl font-bold text-[#514F6E]",children:"Seller"}),s.jsx("p",{className:"text-2xl font-bold text-[#514F6E]",children:"Community"})]}),(0,s.jsxs)("div",{children:[s.jsx("h2",{className:"text-[62px] font-bold text-[#3947C4]",children:"50%"}),s.jsx("p",{className:"text-2xl font-semibold text-[#514F6E] ",children:"Purchase"}),s.jsx("p",{className:"text-2xl font-semibold text-[#514F6E] ",children:"Frequency"})]})]})}),(0,s.jsxs)("h2",{className:"text-6xl font-bold text-center text-gray-900 mb-20",children:["Grow your Business with ",s.jsx("span",{className:"text-red-600",children:"RewardWise"})]}),s.jsx(o.ZP,{stepList:w}),s.jsx(n,{})]}),(0,s.jsxs)("div",{className:"mt-12 bg-[#C5393A] flex justify-center items-center gap-10 text-white text-center py-4 h-[168px]",children:[s.jsx("h3",{className:"text-4xl font-medium mt-1",children:"Ready to get started?"}),s.jsx(b.z,{className:"bg-white mt-[3px] text-red-600 font-medium py-2 px-4 rounded-3xl hover:bg-gray-100",children:"Download App"})]})]})}function v(){return s.jsx(D,{})}},465:(A,e,t)=>{"use strict";t.d(e,{ZP:()=>l});var s=t(8570);let a=(0,s.createProxy)(String.raw`/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx`),{__esModule:i,$$typeof:r}=a;a.default;let l=(0,s.createProxy)(String.raw`/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx#default`)},2577:(A,e,t)=>{"use strict";let s,a;t.d(e,{z:()=>u});var i=t(9510),r=t(1159);function l(){return(l=Object.assign?Object.assign.bind():function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)({}).hasOwnProperty.call(t,s)&&(A[s]=t[s])}return A}).apply(null,arguments)}let n=(0,r.forwardRef)((A,e)=>{let{children:t,...s}=A,a=r.Children.toArray(t),i=a.find(c);if(i){let A=i.props.children,t=a.map(e=>e!==i?e:r.Children.count(A)>1?r.Children.only(null):(0,r.isValidElement)(A)?A.props.children:null);return(0,r.createElement)(o,l({},s,{ref:e}),(0,r.isValidElement)(A)?(0,r.cloneElement)(A,void 0,t):null)}return(0,r.createElement)(o,l({},s,{ref:e}),t)});n.displayName="Slot";let o=(0,r.forwardRef)((A,e)=>{let{children:t,...s}=A;return(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{...function(A,e){let t={...e};for(let s in e){let a=A[s],i=e[s];/^on[A-Z]/.test(s)?a&&i?t[s]=(...A)=>{i(...A),a(...A)}:a&&(t[s]=a):"style"===s?t[s]={...a,...i}:"className"===s&&(t[s]=[a,i].filter(Boolean).join(" "))}return{...A,...t}}(s,t.props),ref:e?function(...A){return e=>A.forEach(A=>{"function"==typeof A?A(e):null!=A&&(A.current=e)})}(e,t.ref):t.ref}):r.Children.count(t)>1?r.Children.only(null):null});o.displayName="SlotClone";let d=({children:A})=>(0,r.createElement)(r.Fragment,null,A);function c(A){return(0,r.isValidElement)(A)&&A.type===d}let g=A=>"boolean"==typeof A?"".concat(A):0===A?"0":A,h=function(){for(var A,e,t=0,s="";t<arguments.length;)(A=arguments[t++])&&(e=function A(e){var t,s,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e){if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(s=A(e[t]))&&(a&&(a+=" "),a+=s);else for(t in e)e[t]&&(a&&(a+=" "),a+=t)}return a}(A))&&(s&&(s+=" "),s+=e);return s};var x=t(644);let m=(s="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",a={variants:{variant:{default:"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}},A=>{var e;if((null==a?void 0:a.variants)==null)return h(s,null==A?void 0:A.class,null==A?void 0:A.className);let{variants:t,defaultVariants:i}=a,r=Object.keys(t).map(e=>{let s=null==A?void 0:A[e],a=null==i?void 0:i[e];if(null===s)return null;let r=g(s)||g(a);return t[e][r]}),l=A&&Object.entries(A).reduce((A,e)=>{let[t,s]=e;return void 0===s||(A[t]=s),A},{});return h(s,r,null==a?void 0:null===(e=a.compoundVariants)||void 0===e?void 0:e.reduce((A,e)=>{let{class:t,className:s,...a}=e;return Object.entries(a).every(A=>{let[e,t]=A;return Array.isArray(t)?t.includes({...i,...l}[e]):({...i,...l})[e]===t})?[...A,t,s]:A},[]),null==A?void 0:A.class,null==A?void 0:A.className)}),u=r.forwardRef(({className:A,variant:e,size:t,asChild:s=!1,...a},r)=>{let l=s?n:"button";return i.jsx(l,{className:(0,x.cn)(m({variant:e,size:t,className:A})),ref:r,...a})});u.displayName="Button"},8066:(A,e,t)=>{"use strict";t.d(e,{Z:()=>s});let s={src:"/_next/static/media/StepFourMain.96e7bb94.jpeg",height:1839,width:1500,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAcDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAG8H//EABYQAQEBAAAAAAAAAAAAAAAAAAMBBP/aAAgBAQABBQI9Ecf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAWEAEBAQAAAAAAAAAAAAAAAAACAQD/2gAIAQEABj8CNRoe/8QAFxAAAwEAAAAAAAAAAAAAAAAAABEhQf/aAAgBAQABPyG7mzUf/9oADAMBAAIAAwAAABD7/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGRABAAIDAAAAAAAAAAAAAAAAAQARMVGh/9oACAEBAAE/EGWpVRBtdYez/9k=",blurWidth:7,blurHeight:8}},6725:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});let s={src:"/_next/static/media/StepFourMain.96e7bb94.jpeg",height:1839,width:1500,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAcDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAG8H//EABYQAQEBAAAAAAAAAAAAAAAAAAMBBP/aAAgBAQABBQI9Ecf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAWEAEBAQAAAAAAAAAAAAAAAAACAQD/2gAIAQEABj8CNRoe/8QAFxAAAwEAAAAAAAAAAAAAAAAAABEhQf/aAAgBAQABPyG7mzUf/9oADAMBAAIAAwAAABD7/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGRABAAIDAAAAAAAAAAAAAAAAAQARMVGh/9oACAEBAAE/EGWpVRBtdYez/9k=",blurWidth:7,blurHeight:8}},2655:(A,e,t)=>{"use strict";t.d(e,{Z:()=>s});let s={src:"/_next/static/media/StepOneMain.c4ae320c.png",height:1e3,width:1500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEWnnLXWubqqlq+be4ePhKHBt9HFu9SekayzpsK8scx4b5qOcXJjRT7KyeCjd5NXUqisO8fSj7CUZquBbXb0fxUZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nAXBAQLAEAwEwUW4RIuW///VDOC7R2uI/C1qxVT+kSMwPSnJHSvvmcIvGGMBHicl7rMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},8118:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});let s={src:"/_next/static/media/StepOneMain.c4ae320c.png",height:1e3,width:1500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEWnnLXWubqqlq+be4ePhKHBt9HFu9SekayzpsK8scx4b5qOcXJjRT7KyeCjd5NXUqisO8fSj7CUZquBbXb0fxUZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nAXBAQLAEAwEwUW4RIuW///VDOC7R2uI/C1qxVT+kSMwPSnJHSvvmcIvGGMBHicl7rMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},5340:(A,e,t)=>{"use strict";t.d(e,{Z:()=>s});let s={src:"/_next/static/media/StepThreeMain.37dee3ba.png",height:2250,width:1500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAPFBMVEVsFhlzISVHLSsHCQmIKy1gEBOWOjxLIyN2LDCJNTZaNS2OcGaOTklRIBthRT+KZlYKGBi6pJZ7GRw0ExWIrdSmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nBXESRIAEAwAwUFI7Nv//6r0ocGZGU6DZqQsn8gj/OtVgbrbgT4FohbiAxoHASSb+leDAAAAAElFTkSuQmCC",blurWidth:5,blurHeight:8}},6060:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});let s={src:"/_next/static/media/StepThreeMain.37dee3ba.png",height:2250,width:1500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAPFBMVEVsFhlzISVHLSsHCQmIKy1gEBOWOjxLIyN2LDCJNTZaNS2OcGaOTklRIBthRT+KZlYKGBi6pJZ7GRw0ExWIrdSmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nBXESRIAEAwAwUFI7Nv//6r0ocGZGU6DZqQsn8gj/OtVgbrbgT4FohbiAxoHASSb+leDAAAAAElFTkSuQmCC",blurWidth:5,blurHeight:8}},5302:(A,e,t)=>{"use strict";t.d(e,{Z:()=>s});let s={src:"/_next/static/media/StepTwoMain.3aeb66f8.png",height:1e3,width:1500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAYFBMVEUdMTwUICSsk2zmtGSRQhDkhF9ZSlGGaUTWoXLtqV66r4DMhj/7n0LkpDUcExt5SSioXAtCJBHldDffoVeYRFdvbFz2uIm3czk+UladckyJeFqqXiTauFxVcn+3cXBxXESsvC4DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nGNg4GNhYWMTkWMQFODhFheVlWfg52XmFBaSkmBgYOfkkmGVlmRgZGBn4mDlEAMAMPMCGGuA+psAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},3354:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});let s={src:"/_next/static/media/StepTwoMain.3aeb66f8.png",height:1e3,width:1500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAYFBMVEUdMTwUICSsk2zmtGSRQhDkhF9ZSlGGaUTWoXLtqV66r4DMhj/7n0LkpDUcExt5SSioXAtCJBHldDffoVeYRFdvbFz2uIm3czk+UladckyJeFqqXiTauFxVcn+3cXBxXESsvC4DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nGNg4GNhYWMTkWMQFODhFheVlWfg52XmFBaSkmBgYOfkkmGVlmRgZGBn4mDlEAMAMPMCGGuA+psAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},1608:(A,e,t)=>{"use strict";t.d(e,{Z:()=>s});let s={src:"/_next/static/media/Stepper indicatorstepfour.117922bd.png",height:68,width:69,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEWvMzW9NzfHOTvDMTLFPD64NTbGOTpMaXGXLi6YKirTYWLhm5vTPj/ENDXWb3DMR0nTOjvMNDahcV77AAAAEHRSTlMsSX75WT+cABwT/fqq8P39TDOCDgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD1JREFUeJwVy8kNACEMA0CHI3Y4Fui/2VW+Iw2o3loXEeZ7uwVQ7hm3AFhvzreQMr4UmdfqJhC5QJAhBfkDP/gBtqLeMG4AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},2396:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});let s={src:"/_next/static/media/Stepper indicatorstepfour.117922bd.png",height:68,width:69,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEWvMzW9NzfHOTvDMTLFPD64NTbGOTpMaXGXLi6YKirTYWLhm5vTPj/ENDXWb3DMR0nTOjvMNDahcV77AAAAEHRSTlMsSX75WT+cABwT/fqq8P39TDOCDgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD1JREFUeJwVy8kNACEMA0CHI3Y4Fui/2VW+Iw2o3loXEeZ7uwVQ7hm3AFhvzreQMr4UmdfqJhC5QJAhBfkDP/gBtqLeMG4AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},7828:(A,e,t)=>{"use strict";t.d(e,{Z:()=>s});let s={src:"/_next/static/media/Stepper indicatorstepone.b546f527.png",height:60,width:61,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEXFODrDNzjFNzjFOzvENzlMaXHCMDHahofGOjrJOjvTU1TXXmDKOzvTamvYPD3JNjeSziiPAAAADnRSTlOMPkdQKgDZ/CjY/PzX++ZFNPsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5SURBVHicPYtbDoAgDMC6FyDgdv/bEjXxr0lbwsVMRuBKa6gj5JyJoFfdvbahu/oLQq71qD+O8e0HMrMBbL/NMMQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},5825:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});let s={src:"/_next/static/media/Stepper indicatorstepone.b546f527.png",height:60,width:61,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEXFODrDNzjFNzjFOzvENzlMaXHCMDHahofGOjrJOjvTU1TXXmDKOzvTamvYPD3JNjeSziiPAAAADnRSTlOMPkdQKgDZ/CjY/PzX++ZFNPsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5SURBVHicPYtbDoAgDMC6FyDgdv/bEjXxr0lbwsVMRuBKa6gj5JyJoFfdvbahu/oLQq71qD+O8e0HMrMBbL/NMMQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},4747:(A,e,t)=>{"use strict";t.d(e,{Z:()=>s});let s={src:"/_next/static/media/Stepper indicatorstepthree.1f57af7b.png",height:60,width:61,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEXFODrDNzjFNjjFODrKOjvUVVfDMTJMaXHVb3DDODjgmpvDOzvFPD7GODrKODnYPD3P/2D+AAAADnRSTlOMPkcp2PzZAPwr/FFRTiXGpkMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA4SURBVHicRcpBDoAgEATBnh1gRRD+/1sOJnrrpJq0xpATB60RHbFr3Ygo67pXef74qL+zSWtOOQ8zegFx3Av3aQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},2633:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});let s={src:"/_next/static/media/Stepper indicatorstepthree.1f57af7b.png",height:60,width:61,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEXFODrDNzjFNjjFODrKOjvUVVfDMTJMaXHVb3DDODjgmpvDOzvFPD7GODrKODnYPD3P/2D+AAAADnRSTlOMPkcp2PzZAPwr/FFRTiXGpkMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA4SURBVHicRcpBDoAgEATBnh1gRRD+/1sOJnrrpJq0xpATB60RHbFr3Ygo67pXef74qL+zSWtOOQ8zegFx3Av3aQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},2444:(A,e,t)=>{"use strict";t.d(e,{Z:()=>s});let s={src:"/_next/static/media/four.84c589b5.png",height:56,width:57,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEXEODpMaXHFODjDODnBPj7GOTqtI+6tAAAABnRSTlNFACxQDI4R3kNTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nD2LQQoAMAyDtGn//+WxwXqKoMEKpKRQ70S7NKAZBex5sGrjfz8OawBmKH/FVAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},8138:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});let s={src:"/_next/static/media/four.84c589b5.png",height:56,width:57,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEXEODpMaXHFODjDODnBPj7GOTqtI+6tAAAABnRSTlNFACxQDI4R3kNTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nD2LQQoAMAyDtGn//+WxwXqKoMEKpKRQ70S7NKAZBex5sGrjfz8OawBmKH/FVAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},6619:(A,e,t)=>{"use strict";t.d(e,{Z:()=>s});let s={src:"/_next/static/media/one.7cbf3935.png",height:60,width:61,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEXHODnENzjFODrFNjjEOTrQSkvGOTlMaXHDNzrYfX/XeHnIMDHYPD33b95ZAAAAC3RSTlPYPoxHUPwoACr8++YPNyYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAzSURBVHicPYtJCgAgDMSme7X9/3tFhd4CSRBJquSBFAZYEsRt1kwQ1F4FvWAPRk0c/vcDKl4BKoz12BEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},6668:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});let s={src:"/_next/static/media/one.7cbf3935.png",height:60,width:61,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEXHODnENzjFODrFNjjEOTrQSkvGOTlMaXHDNzrYfX/XeHnIMDHYPD33b95ZAAAAC3RSTlPYPoxHUPwoACr8++YPNyYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAzSURBVHicPYtJCgAgDMSme7X9/3tFhd4CSRBJquSBFAZYEsRt1kwQ1F4FvWAPRk0c/vcDKl4BKoz12BEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},5612:(A,e,t)=>{"use strict";t.d(e,{Z:()=>s});let s={src:"/_next/static/media/overlay.e1475738.svg",height:133,width:755,blurWidth:0,blurHeight:0}},702:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});let s={src:"/_next/static/media/overlay.e1475738.svg",height:133,width:755,blurWidth:0,blurHeight:0}},3588:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});let s={src:"/_next/static/media/quotes.e7a4cb49.svg",height:104,width:105,blurWidth:0,blurHeight:0}},8512:(A,e,t)=>{"use strict";t.d(e,{Z:()=>s});let s={src:"/_next/static/media/three.1a40f160.png",height:56,width:57,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEXEODrPPjfFODjEODnEOjTEODrEODjYWtOVAAAAB3RSTlNFAS9PJ4OLXytS2AAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC1JREFUeJw9i0EKADEQgzTT3f8/uaTQniJoMAMTCWpnNEsHlE858BeqUvXie98M3ABafQlR7QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},2970:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});let s={src:"/_next/static/media/three.1a40f160.png",height:56,width:57,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEXEODrPPjfFODjEODnEOjTEODrEODjYWtOVAAAAB3RSTlNFAS9PJ4OLXytS2AAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC1JREFUeJw9i0EKADEQgzTT3f8/uaTQniJoMAMTCWpnNEsHlE858BeqUvXie98M3ABafQlR7QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},1842:(A,e,t)=>{"use strict";t.d(e,{Z:()=>s});let s={src:"/_next/static/media/two.e529a392.png",height:56,width:57,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEXDODnEODnGODjOOjpMaXHFNzfEODn87cHgAAAAB3RSTlNFTywEADFosz6ztQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC5JREFUeJw9y8ERACAIxMDABfov2fGh702wC6plUKWpOG0KDBsB3VUuMZd+/PYDF6gAp0iYcdEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},5907:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});let s={src:"/_next/static/media/two.e529a392.png",height:56,width:57,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEXDODnEODnGODjOOjpMaXHFNzfEODn87cHgAAAAB3RSTlNFTywEADFosz6ztQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC5JREFUeJw9y8ERACAIxMDABfov2fGh702wC6plUKWpOG0KDBsB3VUuMZd+/PYDF6gAp0iYcdEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},9534:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>s});let s={src:"/_next/static/media/unsplash_RxiAV5LC-ww.70c367d6.png",height:599,width:421,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAY1BMVEVfU0rPtKSFa12VgXDLvLPYyMDgz8ivi29xTjzAoo/Pt6LWz9GUd2G3ln3r9f9ya2bEzNKSfXKxloatmo+9ppbCtKtybGhtTTo3MjK3ppqJiY0bHyOssLLBxcqhmZZ9WEVPU1amtLVlAAAAFHRSTlP68fzJ/vj969/48f7l7P3x/v7//rY3+gcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA7SURBVHicBcGHAkAgAEDBhyZZpSXr/7/SHfJh9xaVXhs06su+doiSxCUJ7dzukb5MS4RMjceKMU7Pww9R8ALQ1nBoNQAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8}},3881:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});var s=t(6621);let a=A=>[{type:"image/x-icon",sizes:"128x129",url:(0,s.fillMetadataSegment)(".",A.params,"favicon.ico")+""}]}};var e=require("../../webpack-runtime.js");e.C(A);var t=A=>e(e.s=A),s=e.X(0,[948,832,621,629],()=>t(9945));module.exports=s})();