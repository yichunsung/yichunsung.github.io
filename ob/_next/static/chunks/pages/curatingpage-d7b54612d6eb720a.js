(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[898],{9547:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/curatingpage",function(){return i(5453)}])},5453:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return A}});var n=i(5893),r=i(7294),o=i(9008),s=i.n(o),a=i(2610),l=i.n(a),u=i(747),c=i(2261),d=i.n(c),h=i(3085);let p=t=>{let{productData:e,pageType:i,classes:r=[]}=t,o=r.join(" ");return(0,n.jsx)("section",{className:"".concat(d()["product-wrap"]," ").concat(o),children:e.map(t=>(0,n.jsx)(h.Z,{pageType:i,data:{Id:t.Id,Cover:t.Cover,ProductName:t.ProductName,SuggestPrice:t.SuggestPrice,Price:t.Price,ProductUrl:t.ProductUrl}},t.ProductName))})};var f=i(6394),m=i.n(f),g=i(1664),v=i.n(g),y=i(6529);i(384);var S=i(6622);let T=t=>{let{sliderData:e,pageType:i,classes:o=[]}=t,{onSelectContentClick:s}=(0,S.z)(),a=o.join(""),[l,u]=r.useState(0),c=(t,e,n)=>{s({id:t.toString(),contentType:"HtmlBanner",name:e,link:n,viewId:i,viewTitle:document.title})},d=Object.fromEntries(Object.entries(e).filter(t=>{let[,e]=t;return null!==e}));return(0,r.useEffect)(()=>{u(window.innerWidth)},[]),(0,n.jsx)("section",{className:"".concat(m()["grid-slider-wrap"]," ").concat(a),children:(0,n.jsx)(y.default,{autoPlay:!0,showDots:l>=768,infinite:!0,ssr:!1,responsive:{desktop:{breakpoint:{max:3e3,min:768},items:1},mobile:{breakpoint:{max:768,min:0},items:1}},children:Object.keys(d).map(t=>{let i=e[t];return(null==i?void 0:i.length)&&(0,n.jsx)("div",{className:m()["grid-container"],children:i.map((e,i)=>(0,n.jsx)(v(),{href:e.Diversionlink,children:(0,n.jsx)("figure",{children:(0,n.jsx)("img",{src:e.ImgUrl,alt:"商品圖片",onClick:()=>c(i+1,t,e.Diversionlink)})})},"".concat(i,"-").concat(e.ImgUrl)))},t)})})})};var w=i(7825),b=i(9032),P=i(6984),I=i(764),C=i(7617),x=i(78),_=i(3056);let M=()=>{let{intialTracking:t,onSelectContentClick:e}=(0,S.z)(),{curatingPageData:i,isLoadingData:o}=function(){let{getProductData:t,getProductDataList:e}=(0,C.j)(),[i,n]=(0,r.useState)(!0),[o,s]=(0,r.useState)({MasterBanner:[],featuredProductData:[],allHtmlBanner:{HtmlBanner1:null,HtmlBanner2:null,HtmlBanner3:null},AnchorTag:[],anchorBanners:[],moreBanner:{ImgUrl:"",Diversionlink:""}}),a=t=>t&&t.length>0?t:null,l=async()=>{let{vipMemberOuterId:e,sessionId:i}=(0,x.J)();n(!0);try{let r={PageUrl:window.location.href,vipMemberOuterId:e||"",sessionID:i||""},{data:o}=await (0,I.$e)(r);if(!o)throw"err";let l=await t(o.Featuredproduct),u={HtmlBanner1:a(o.HtmlBanner1),HtmlBanner2:a(o.HtmlBanner2),HtmlBanner3:a(o.HtmlBanner3)},c=o.moreBanner?o.moreBanner:{ImgUrl:"",Diversionlink:""};s({MasterBanner:o.MasterBanner,featuredProductData:l,allHtmlBanner:u,AnchorTag:o.AnchorTag,anchorBanners:[],moreBanner:c}),setTimeout(()=>{n(!1)},600);let d=[];for(let e=0;e<9;e++){let i=e+1,n=o["Banner".concat(i)];if(n){let e=await t(n.SalePageId),r={AnchorNumber:i,BannerData:{ImgUrl:n.ImgUrl,Diversionlink:n.Diversionlink},ProductsData:e};d.push(r)}}s({MasterBanner:o.MasterBanner,featuredProductData:l,allHtmlBanner:u,AnchorTag:o.AnchorTag,anchorBanners:d,moreBanner:c})}catch(t){s({MasterBanner:[],featuredProductData:[],allHtmlBanner:{HtmlBanner1:null,HtmlBanner2:null,HtmlBanner3:null},AnchorTag:[],anchorBanners:[],moreBanner:{ImgUrl:"",Diversionlink:""}})}setTimeout(()=>{n(!1)},1e3)};return(0,r.useEffect)(()=>{l()},[]),{getCuratingPageData:l,curatingPageData:o,isLoadingData:i}}();return(0,r.useEffect)(()=>{t()},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"curating page"}),(0,n.jsx)("meta",{name:"description",content:"curatingpage"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://cms.cdn.91app.com/images/original/41602/92f19e4d-89b7-4330-9570-02cf1dff9742-1714099294-5rqqwe0x5s_d_1920x820_1280x547_1124x480_800x342_600x256_400x171.jpg"}),(0,n.jsx)("meta",{property:"og:image",content:"curatingpage"}),(0,n.jsx)("meta",{property:"og:title",content:"curatingpage"}),(0,n.jsx)("meta",{property:"og:description",content:"curatingpage"}),(0,n.jsx)("meta",{property:"og:url",content:"https://www.obdesign.com.tw/"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:"curatingpage"}),(0,n.jsx)("meta",{name:"twitter:description",content:"curatingpage"}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://cms.cdn.91app.com/images/original/41602/92f19e4d-89b7-4330-9570-02cf1dff9742-1714099294-5rqqwe0x5s_d_1920x820_1280x547_1124x480_800x342_600x256_400x171.jpg"}),(0,n.jsx)("meta",{name:"twitter:image:alt",content:"curatingpage"}),(0,n.jsx)("meta",{name:"twitter:url",content:"https://www.obdesign.com.tw/"}),(0,n.jsx)("link",{rel:"icon",href:"https://diz36nn4q02zr.cloudfront.net/webapi/images/o/16/16/ShopFavicon/41602/41602favicon?v=202404291346"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"https://diz36nn4q02zr.cloudfront.net/webapi/images/o/16/16/ShopFavicon/41602/41602favicon?v=202404291346"}),(0,n.jsx)("link",{rel:"apple-touch-icon",href:"//diz36nn4q02zr.cloudfront.net/webapi/images/t/512/512/ShopIcon/41602/0/04291415"}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"//diz36nn4q02zr.cloudfront.net/webapi/images/t/512/512/ShopIcon/41602/0/04291415"}),(0,n.jsx)("link",{rel:"apple-touch-icon-precomposed",href:"//diz36nn4q02zr.cloudfront.net/webapi/images/t/512/512/ShopIcon/41602/0/04291415"})]}),i.MasterBanner.length>0&&(0,n.jsx)(u.Z,{classes:[l()["banner-margin"]],bannerData:i.MasterBanner[0],onTrackingClick:()=>{e({id:"1",contentType:"MasterBanner",name:"MasterBanner",link:i.MasterBanner[0].Diversionlink||"",viewId:"curatingpage",viewTitle:document.title})}}),i.featuredProductData&&(0,n.jsx)("h2",{className:"featured-products-title",children:"主打商品"}),i.featuredProductData&&(0,n.jsx)(p,{pageType:"curatingpage",classes:[l()["products-margin"]],productData:i.featuredProductData}),i.allHtmlBanner&&(0,n.jsx)(T,{pageType:"curatingpage",classes:[l()["grid-slider-margin"]],sliderData:i.allHtmlBanner}),i.AnchorTag.length>0&&(0,n.jsx)(w.Z,{pageType:"curatingpage",classes:[l()["anchors-margin"]],anchorData:i.AnchorTag}),i.anchorBanners&&i.anchorBanners.map((t,e)=>(0,n.jsx)(b.Z,{pageType:"curatingpage",anchorNumber:t.AnchorNumber,classes:[l()["products-margin"]],bannerData:t.BannerData,productsData:t.ProductsData},e)),i.moreBanner.ImgUrl&&(0,n.jsx)(P.Z,{bannerId:"1",pageType:"curatingpage",contentType:"moreBanner",classes:[l()["mid-banner-margin"]],bannerData:i.moreBanner}),o&&(0,n.jsx)(_.Z,{})]})};var A=M},384:function(){},6394:function(t){t.exports={"grid-slider-wrap":"GridSlider_grid-slider-wrap__A3zQl","grid-container":"GridSlider_grid-container__BdTXY"}},2610:function(t){t.exports={"banner-margin":"Page1_banner-margin__cJ4vp","grid-slider-margin":"Page1_grid-slider-margin__XCfRX","anchors-margin":"Page1_anchors-margin__LRrq2","products-margin":"Page1_products-margin__VyzhK","mid-banner-margin":"Page1_mid-banner-margin__KFdfr"}},2261:function(t){t.exports={"product-wrap":"Products4x2_product-wrap__7NYCT"}},6529:function(t,e,i){t.exports=i(5541)},753:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(7294);e.LeftArrow=function(t){var e=t.customLeftArrow,i=t.getState,r=t.previous,o=t.disabled,s=t.rtl;return e?n.cloneElement(e,{onClick:function(){return r()},carouselState:i(),disabled:o,rtl:s}):n.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+(s?"rtl":""),onClick:function(){return r()},type:"button",disabled:o})},e.RightArrow=function(t){var e=t.customRightArrow,i=t.getState,r=t.next,o=t.disabled,s=t.rtl;return e?n.cloneElement(e,{onClick:function(){return r()},carouselState:i(),disabled:o,rtl:s}):n.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+(s?"rtl":""),onClick:function(){return r()},type:"button",disabled:o})}},8365:function(t,e,i){"use strict";var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var o=i(7294),s=i(8035),a=i(5798),l=i(4851),u=i(753),c=i(9946),d=i(3989),h="transform 400ms ease-in-out",p=function(t){function e(e){var i=t.call(this,e)||this;return i.containerRef=o.createRef(),i.listRef=o.createRef(),i.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:o.Children.count(e.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},i.onResize=i.onResize.bind(i),i.handleDown=i.handleDown.bind(i),i.handleMove=i.handleMove.bind(i),i.handleOut=i.handleOut.bind(i),i.onKeyUp=i.onKeyUp.bind(i),i.handleEnter=i.handleEnter.bind(i),i.setIsInThrottle=i.setIsInThrottle.bind(i),i.next=s.throttle(i.next.bind(i),e.transitionDuration||400,i.setIsInThrottle),i.previous=s.throttle(i.previous.bind(i),e.transitionDuration||400,i.setIsInThrottle),i.goToSlide=s.throttle(i.goToSlide.bind(i),e.transitionDuration||400,i.setIsInThrottle),i.onMove=!1,i.initialX=0,i.lastX=0,i.isAnimationAllowed=!1,i.direction="",i.initialY=0,i.isInThrottle=!1,i.transformPlaceHolder=0,i}return r(e,t),e.prototype.resetTotalItems=function(){var t=this,e=o.Children.count(this.props.children),i=s.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,e));this.setState({totalItems:e,currentSlide:i},function(){t.setContainerAndItemWidth(t.state.slidesToShow,!0)})},e.prototype.setIsInThrottle=function(t){void 0===t&&(t=!1),this.isInThrottle=t},e.prototype.setTransformDirectly=function(t,e){var i=this.props.additionalTransfrom;this.transformPlaceHolder=t;var n=d.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(e),this.listRef.current.style.transform="translate3d("+(n+i)+"px,0,0)")},e.prototype.setAnimationDirectly=function(t){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=t?this.props.customTransition||h:"none")},e.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},e.prototype.setClones=function(t,e,i,n){var r=this;void 0===n&&(n=!1),this.isAnimationAllowed=!1;var a=o.Children.toArray(this.props.children),l=s.getInitialSlideInInfiniteMode(t||this.state.slidesToShow,a),u=s.getClones(this.state.slidesToShow,a),c=a.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:u.length,currentSlide:i&&!n?c:l},function(){r.correctItemsPosition(e||r.state.itemWidth)})},e.prototype.setItemsToShow=function(t,e){var i=this,n=this.props.responsive;Object.keys(n).forEach(function(r){var o=n[r],s=o.breakpoint,a=o.items,l=s.max,u=s.min,c=[window.innerWidth];window.screen&&window.screen.width&&c.push(window.screen.width);var d=Math.min.apply(Math,c);u<=d&&d<=l&&(i.setState({slidesToShow:a,deviceType:r}),i.setContainerAndItemWidth(a,t,e))})},e.prototype.setContainerAndItemWidth=function(t,e,i){var n=this;if(this.containerRef&&this.containerRef.current){var r=this.containerRef.current.offsetWidth,o=s.getItemClientSideWidth(this.props,t,r);this.setState({containerWidth:r,itemWidth:o},function(){n.props.infinite&&n.setClones(t,o,e,i)}),e&&this.correctItemsPosition(o)}},e.prototype.correctItemsPosition=function(t,e,i){e&&(this.isAnimationAllowed=!0),!e&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var n=this.state.totalItems<this.state.slidesToShow?0:-t*this.state.currentSlide;i&&this.setTransformDirectly(n,!0),this.setState({transform:n})},e.prototype.onResize=function(t){var e;e=!!this.props.infinite&&("boolean"!=typeof t||!t),this.setItemsToShow(e)},e.prototype.componentDidUpdate=function(t,i){var n=this,r=t.keyBoardControl,o=t.autoPlay,a=t.children,l=i.containerWidth,u=i.domLoaded,c=i.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==l&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){n.setItemsToShow(!0)},this.props.transitionDuration||400)),r&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!r&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),o&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),o||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),a.length!==this.props.children.length?e.clonesTimeout=setTimeout(function(){n.props.infinite?n.setClones(n.state.slidesToShow,n.state.itemWidth,!0,!0):n.resetTotalItems()},this.props.transitionDuration||400):this.props.infinite&&this.state.currentSlide!==c&&this.correctClonesPosition({domLoaded:u}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&s.isInRightEnd(this.state)){var d=this.props.transitionDuration||400;e.isInThrottleTimeout=setTimeout(function(){n.setIsInThrottle(!1),n.resetAutoplayInterval(),n.goToSlide(0,void 0,!!n.props.rewindWithAnimation)},d+this.props.autoPlaySpeed)}},e.prototype.correctClonesPosition=function(t){var i=this,n=t.domLoaded,r=o.Children.toArray(this.props.children),a=s.checkClonesPosition(this.state,r,this.props),l=a.isReachingTheEnd,u=a.isReachingTheStart,c=a.nextSlide,d=a.nextPosition;this.state.domLoaded&&n&&(l||u)&&(this.isAnimationAllowed=!1,e.transformTimeout=setTimeout(function(){i.setState({transform:d,currentSlide:c})},this.props.transitionDuration||400))},e.prototype.next=function(t){var i=this;void 0===t&&(t=0);var n=this.props,r=n.afterChange,o=n.beforeChange;if(!s.notEnoughChildren(this.state)){var a=s.populateNextSlides(this.state,this.props,t),l=a.nextSlides,u=a.nextPosition,c=this.state.currentSlide;void 0!==l&&void 0!==u&&("function"==typeof o&&o(l,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:u,currentSlide:l},function(){"function"==typeof r&&(e.afterChangeTimeout=setTimeout(function(){r(c,i.getState())},i.props.transitionDuration||400))}))}},e.prototype.previous=function(t){var i=this;void 0===t&&(t=0);var n=this.props,r=n.afterChange,o=n.beforeChange;if(!s.notEnoughChildren(this.state)){var a=s.populatePreviousSlides(this.state,this.props,t),l=a.nextSlides,u=a.nextPosition;if(void 0!==l&&void 0!==u){var c=this.state.currentSlide;"function"==typeof o&&o(l,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:u,currentSlide:l},function(){"function"==typeof r&&(e.afterChangeTimeout2=setTimeout(function(){r(c,i.getState())},i.props.transitionDuration||400))})}}},e.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},e.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),e.clonesTimeout&&clearTimeout(e.clonesTimeout),e.isInThrottleTimeout&&clearTimeout(e.isInThrottleTimeout),e.transformTimeout&&clearTimeout(e.transformTimeout),e.afterChangeTimeout&&clearTimeout(e.afterChangeTimeout),e.afterChangeTimeout2&&clearTimeout(e.afterChangeTimeout2),e.afterChangeTimeout3&&clearTimeout(e.afterChangeTimeout3)},e.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},e.prototype.getCords=function(t){var e=t.clientX,i=t.clientY;return{clientX:d.parsePosition(this.props,e),clientY:d.parsePosition(this.props,i)}},e.prototype.handleDown=function(t){if(!(!a.isMouseMoveEvent(t)&&!this.props.swipeable||a.isMouseMoveEvent(t)&&!this.props.draggable||this.isInThrottle)){var e=this.getCords(a.isMouseMoveEvent(t)?t:t.touches[0]),i=e.clientX,n=e.clientY;this.onMove=!0,this.initialX=i,this.initialY=n,this.lastX=i,this.isAnimationAllowed=!1}},e.prototype.handleMove=function(t){if(!(!a.isMouseMoveEvent(t)&&!this.props.swipeable||a.isMouseMoveEvent(t)&&!this.props.draggable||s.notEnoughChildren(this.state))){var e=this.getCords(a.isMouseMoveEvent(t)?t:t.touches[0]),i=e.clientX,n=e.clientY,r=this.initialX-i,o=this.initialY-n;if(this.onMove){if(!(Math.abs(r)>Math.abs(o)))return;var l=s.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,i,this.transformPlaceHolder),u=l.direction,c=l.nextPosition,d=l.canContinue;u&&(this.direction=u,d&&void 0!==c&&this.setTransformDirectly(c)),this.lastX=i}}},e.prototype.handleOut=function(t){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var e="touchend"===t.type&&!this.props.swipeable,i=("mouseleave"===t.type||"mouseup"===t.type)&&!this.props.draggable;if(!e&&!i&&this.onMove){if(this.setAnimationDirectly(!0),"right"===this.direction){if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var n=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(n)}else this.correctItemsPosition(this.state.itemWidth,!0,!0)}"left"===this.direction&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(n=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(n)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},e.prototype.isInViewport=function(t){var e=t.getBoundingClientRect(),i=e.top,n=e.left,r=e.bottom,o=e.right;return 0<=(void 0===i?0:i)&&0<=(void 0===n?0:n)&&(void 0===r?0:r)<=(window.innerHeight||document.documentElement.clientHeight)&&(void 0===o?0:o)<=(window.innerWidth||document.documentElement.clientWidth)},e.prototype.isChildOfCarousel=function(t){return!!(t instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(t)},e.prototype.onKeyUp=function(t){var e=t.target;switch(t.keyCode){case 37:if(this.isChildOfCarousel(e))return this.previous();break;case 39:if(this.isChildOfCarousel(e))return this.next();break;case 9:if(this.isChildOfCarousel(e)&&e instanceof HTMLInputElement&&this.isInViewport(e))return this.next()}},e.prototype.handleEnter=function(t){a.isMouseMoveEvent(t)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},e.prototype.goToSlide=function(t,i,n){var r=this;if(void 0===n&&(n=!0),!this.isInThrottle){var o=this.state.itemWidth,s=this.props,a=s.afterChange,l=s.beforeChange,u=this.state.currentSlide;"function"!=typeof l||i&&("object"!=typeof i||i.skipBeforeChange)||l(t,this.getState()),this.isAnimationAllowed=n,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:t,transform:-o*t},function(){r.props.infinite&&r.correctClonesPosition({domLoaded:!0}),"function"!=typeof a||i&&("object"!=typeof i||i.skipAfterChange)||(e.afterChangeTimeout3=setTimeout(function(){a(u,r.getState())},r.props.transitionDuration||400))})}},e.prototype.getState=function(){return this.state},e.prototype.renderLeftArrow=function(t){var e=this,i=this.props,n=i.customLeftArrow,r=i.rtl;return o.createElement(u.LeftArrow,{customLeftArrow:n,getState:function(){return e.getState()},previous:this.previous,disabled:t,rtl:r})},e.prototype.renderRightArrow=function(t){var e=this,i=this.props,n=i.customRightArrow,r=i.rtl;return o.createElement(u.RightArrow,{customRightArrow:n,getState:function(){return e.getState()},next:this.next,disabled:t,rtl:r})},e.prototype.renderButtonGroups=function(){var t=this,e=this.props.customButtonGroup;return e?o.cloneElement(e,{previous:function(){return t.previous()},next:function(){return t.next()},goToSlide:function(e,i){return t.goToSlide(e,i)},carouselState:this.getState()}):null},e.prototype.renderDotsList=function(){var t=this;return o.createElement(l.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return t.getState()}})},e.prototype.renderCarouselItems=function(){var t=[];if(this.props.infinite){var e=o.Children.toArray(this.props.children);t=s.getClones(this.state.slidesToShow,e)}return o.createElement(c.default,{clones:t,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:s.notEnoughChildren(this.state),props:this.props})},e.prototype.render=function(){var t=this.props,e=t.deviceType,i=t.arrows,n=t.renderArrowsWhenDisabled,r=t.removeArrowOnDeviceType,a=t.infinite,l=t.containerClass,u=t.sliderClass,c=t.customTransition,p=t.additionalTransfrom,f=t.renderDotsOutside,m=t.renderButtonGroupOutside,g=t.className,v=t.rtl,y=s.getInitialState(this.state,this.props),S=y.shouldRenderOnSSR,T=y.shouldRenderAtAll,w=s.isInLeftEnd(this.state),b=s.isInRightEnd(this.state),P=i&&!(r&&(e&&-1<r.indexOf(e)||this.state.deviceType&&-1<r.indexOf(this.state.deviceType)))&&!s.notEnoughChildren(this.state)&&T,I=!a&&w,C=!a&&b,x=d.getTransform(this.state,this.props);return o.createElement(o.Fragment,null,o.createElement("div",{className:"react-multi-carousel-list "+l+" "+g,dir:v?"rtl":"ltr",ref:this.containerRef},o.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+u,style:{transition:this.isAnimationAllowed?c||h:"none",overflow:S?"hidden":"unset",transform:"translate3d("+(x+p)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),P&&(!I||n)&&this.renderLeftArrow(I),P&&(!C||n)&&this.renderRightArrow(C),T&&!m&&this.renderButtonGroups(),T&&!f&&this.renderDotsList()),T&&f&&this.renderDotsList(),T&&m&&this.renderButtonGroups())},e.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},e}(o.Component);e.default=p},9946:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(7294),r=i(8035);e.default=function(t){var e=t.props,i=t.state,o=t.goToSlide,s=t.clones,a=t.notEnoughChildren,l=i.itemWidth,u=e.children,c=e.infinite,d=e.itemClass,h=e.itemAriaLabel,p=e.partialVisbile,f=e.partialVisible,m=r.getInitialState(i,e),g=m.flexBisis,v=m.shouldRenderOnSSR,y=m.domFullyLoaded,S=m.partialVisibilityGutter;return m.shouldRenderAtAll?(p&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),n.createElement(n.Fragment,null,(c?s:n.Children.toArray(u)).map(function(t,s){return n.createElement("li",{key:s,"data-index":s,onClick:function(){e.focusOnSelect&&o(s)},"aria-hidden":r.getIfSlideIsVisbile(s,i)?"false":"true","aria-label":h||(t.props.ariaLabel?t.props.ariaLabel:null),style:{flex:v?"1 0 "+g+"%":"auto",position:"relative",width:y?((p||f)&&S&&!a?l-S:l)+"px":"auto"},className:"react-multi-carousel-item "+(r.getIfSlideIsVisbile(s,i)?"react-multi-carousel-item--active":"")+" "+d},t)}))):null}},4851:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(7294),r=i(3905),o=i(4949),s=i(3989);e.default=function(t){var e=t.props,i=t.state,a=t.goToSlide,l=t.getState,u=e.showDots,c=e.customDot,d=e.dotListClass,h=e.infinite,p=e.children;if(!u||s.notEnoughChildren(i))return null;var f,m=i.currentSlide,g=i.slidesToShow,v=s.getSlidesToSlide(i,e),y=n.Children.toArray(p);f=h?Math.ceil(y.length/v):Math.ceil((y.length-g)/v)+1;var S=o.getLookupTableForNextSlides(f,i,e,y),T=r.getOriginalIndexLookupTableByClones(g,y),w=T[m];return n.createElement("ul",{className:"react-multi-carousel-dot-list "+d},Array(f).fill(0).map(function(t,e){var i,r;if(h){var o=T[r=S[e]];i=w===o||o<=w&&w<o+v}else{var s=y.length-g,u=e*v;i=(r=s<u?s:u)===m||r<m&&m<r+v&&m<y.length-g}return c?n.cloneElement(c,{index:e,active:i,key:e,onClick:function(){return a(r)},carouselState:l()}):n.createElement("li",{"data-index":e,key:e,className:"react-multi-carousel-dot "+(i?"react-multi-carousel-dot--active":"")},n.createElement("button",{"aria-label":"Go to slide "+(e+1),onClick:function(){return a(r)}}))}))}},5541:function(t,e,i){"use strict";var n=i(8365);e.default=n.default},5798:function(t,e,i){"use strict";var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var o=i(7294);e.isMouseMoveEvent=function(t){return"clientY"in t};var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(o.Component);e.default=s},3905:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getOriginalCounterPart=function(t,e,i){var n=e.slidesToShow,r=e.currentSlide;return i.length>2*n?t+2*n:r>=i.length?i.length+t:t},e.getOriginalIndexLookupTableByClones=function(t,e){if(e.length>2*t){for(var i={},n=e.length-2*t,r=e.length-n,o=n,s=0;s<r;s++)i[s]=o,o++;var a=e.length+r,l=a+e.slice(0,2*t).length,u=0;for(s=a;s<=l;s++)i[s]=u,u++;var c=0;for(s=r;s<a;s++)i[s]=c,c++;return i}i={};var d=3*e.length,h=0;for(s=0;s<d;s++)i[s]=h,++h===e.length&&(h=0);return i},e.getClones=function(t,e){return e.length<t?e:e.length>2*t?e.slice(e.length-2*t,e.length).concat(e,e.slice(0,2*t)):e.concat(e,e)},e.getInitialSlideInInfiniteMode=function(t,e){return e.length>2*t?2*t:e.length},e.checkClonesPosition=function(t,e,i){var n,r=t.currentSlide,o=t.slidesToShow,s=t.itemWidth,a=t.totalItems,l=0,u=0,c=0===r,d=e.length-(e.length-2*o);return e.length<o?(u=l=0,c=n=!1):e.length>2*o?((n=r>=d+e.length)&&(u=-s*(l=r-e.length)),c&&(u=-s*(l=d+(e.length-2*o)))):((n=r>=2*e.length)&&(u=-s*(l=r-e.length)),c&&(u=i.showDots?-s*(l=e.length):-s*(l=a/3))),{isReachingTheEnd:n,isReachingTheStart:c,nextSlide:l,nextPosition:u}}},3989:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(6867);function r(t){var e=t.slidesToShow;return t.totalItems<e}function o(t,e,i){var n=i||t.transform;return!e.infinite&&0===t.currentSlide||r(t)?n:n+t.itemWidth/2}function s(t){var e=t.currentSlide,i=t.totalItems;return!(e+t.slidesToShow<i)}function a(t,e,i,n){void 0===e&&(e=0);var o=t.currentSlide,a=t.slidesToShow,l=s(t),u=!i.infinite&&l,c=n||t.transform;if(r(t))return c;var d=c+o*e;return u?d+(t.containerWidth-(t.itemWidth-e)*a):d}function l(t,e){return t.rtl?-1*e:e}e.notEnoughChildren=r,e.getInitialState=function(t,e){var i,r=t.domLoaded,o=t.slidesToShow,s=t.containerWidth,a=t.itemWidth,l=e.deviceType,u=e.responsive,c=e.ssr,d=e.partialVisbile,h=e.partialVisible,p=!!(r&&o&&s&&a);c&&l&&!p&&(i=n.getWidthFromDeviceType(l,u));var f=!!(c&&l&&!p&&i);return{shouldRenderOnSSR:f,flexBisis:i,domFullyLoaded:p,partialVisibilityGutter:n.getPartialVisibilityGutter(u,d||h,l,t.deviceType),shouldRenderAtAll:f||p}},e.getIfSlideIsVisbile=function(t,e){var i=e.currentSlide,n=e.slidesToShow;return i<=t&&t<i+n},e.getTransformForCenterMode=o,e.isInLeftEnd=function(t){return!(0<t.currentSlide)},e.isInRightEnd=s,e.getTransformForPartialVsibile=a,e.parsePosition=l,e.getTransform=function(t,e,i){var r=e.partialVisbile,s=e.partialVisible,u=e.responsive,c=e.deviceType,d=e.centerMode,h=i||t.transform,p=n.getPartialVisibilityGutter(u,r||s,c,t.deviceType);return l(e,s||r?a(t,p,e,i):d?o(t,e,i):h)},e.getSlidesToSlide=function(t,e){var i=t.domLoaded,n=t.slidesToShow,r=t.containerWidth,o=t.itemWidth,s=e.deviceType,a=e.responsive,l=e.slidesToSlide||1,u=!!(i&&n&&r&&o);return e.ssr&&e.deviceType&&!u&&Object.keys(a).forEach(function(t){var e=a[t].slidesToSlide;s===t&&e&&(l=e)}),u&&Object.keys(a).forEach(function(t){var e=a[t],i=e.breakpoint,n=e.slidesToSlide,r=i.max,o=i.min;n&&window.innerWidth>=o&&window.innerWidth<=r&&(l=n)}),l}},4949:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3905),r=i(3989);e.getLookupTableForNextSlides=function(t,e,i,o){var s={},a=r.getSlidesToSlide(e,i);return Array(t).fill(0).forEach(function(t,i){var r=n.getOriginalCounterPart(i,e,o);if(0===i)s[0]=r;else{var l=s[i-1]+a;s[i]=l}}),s}},6867:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getPartialVisibilityGutter=function(t,e,i,n){var r=0,o=n||i;return e&&o&&(r=t[o].partialVisibilityGutter||t[o].paritialVisibilityGutter),r},e.getWidthFromDeviceType=function(t,e){var i;return e[t]&&(i=(100/e[t].items).toFixed(1)),i},e.getItemClientSideWidth=function(t,e,i){return Math.round(i/(e+(t.centerMode?1:0)))}},8035:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3905);e.getOriginalCounterPart=n.getOriginalCounterPart,e.getClones=n.getClones,e.checkClonesPosition=n.checkClonesPosition,e.getInitialSlideInInfiniteMode=n.getInitialSlideInInfiniteMode;var r=i(6867);e.getWidthFromDeviceType=r.getWidthFromDeviceType,e.getPartialVisibilityGutter=r.getPartialVisibilityGutter,e.getItemClientSideWidth=r.getItemClientSideWidth;var o=i(3989);e.getInitialState=o.getInitialState,e.getIfSlideIsVisbile=o.getIfSlideIsVisbile,e.getTransformForCenterMode=o.getTransformForCenterMode,e.getTransformForPartialVsibile=o.getTransformForPartialVsibile,e.isInLeftEnd=o.isInLeftEnd,e.isInRightEnd=o.isInRightEnd,e.notEnoughChildren=o.notEnoughChildren,e.getSlidesToSlide=o.getSlidesToSlide;var s=i(9950);e.throttle=s.default;var a=i(4802);e.throwError=a.default;var l=i(2558);e.populateNextSlides=l.populateNextSlides;var u=i(5210);e.populatePreviousSlides=u.populatePreviousSlides;var c=i(1097);e.populateSlidesOnMouseTouchMove=c.populateSlidesOnMouseTouchMove},1097:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.populateSlidesOnMouseTouchMove=function(t,e,i,n,r,o){var s,a,l=t.itemWidth,u=t.slidesToShow,c=t.totalItems,d=t.currentSlide,h=e.infinite,p=!1;if(r<i&&Math.round((i-n)/l)<=u){s="right";var f=o-(n-r);(Math.abs(f)<=Math.abs(-l*(c-u))||d===c-u&&h)&&(a=f,p=!0)}return i<r&&Math.round((n-i)/l)<=u&&(s="left",((f=o+(r-n))<=0||0===d&&h)&&(p=!0,a=f)),{direction:s,nextPosition:a,canContinue:p}}},2558:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3989);e.populateNextSlides=function(t,e,i){void 0===i&&(i=0);var r,o,s=t.slidesToShow,a=t.currentSlide,l=t.itemWidth,u=t.totalItems,c=n.getSlidesToSlide(t,e),d=a+1+i+s+(0<i?0:c);return o=d<=u?-l*(r=a+i+(0<i?0:c)):u<d&&a!==u-s?-l*(r=u-s):r=void 0,{nextSlides:r,nextPosition:o}}},5210:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(7294),r=i(3989),o=i(3989);e.populatePreviousSlides=function(t,e,i){void 0===i&&(i=0);var s,a,l=t.currentSlide,u=t.itemWidth,c=t.slidesToShow,d=e.children,h=e.showDots,p=e.infinite,f=r.getSlidesToSlide(t,e),m=l-i-(0<i?0:f),g=(n.Children.toArray(d).length-c)%f;return a=0<=m?(s=m,h&&!p&&0<g&&o.isInRightEnd(t)&&(s=l-g),-u*s):s=m<0&&0!==l?0:void 0,{nextSlides:s,nextPosition:a}}},9950:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,i){var n;return function(){var r=arguments;n||(t.apply(this,r),n=!0,"function"==typeof i&&i(!0),setTimeout(function(){n=!1,"function"==typeof i&&i(!1)},e))}}},4802:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var i=e.partialVisbile,n=e.partialVisible,r=e.centerMode,o=e.ssr,s=e.responsive;if((i||n)&&r)throw Error("center mode can not be used at the same time with partialVisible");if(!s)throw o?Error("ssr mode need to be used in conjunction with responsive prop"):Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(s&&"object"!=typeof s)throw Error("responsive prop must be an object")}}},function(t){t.O(0,[133,636,990,774,888,179],function(){return t(t.s=9547)}),_N_E=t.O()}]);