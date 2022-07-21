"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[4116],{37259:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return s}});var n=a(87462),i=a(63366),o=(a(15007),a(64983)),c=a(91515),r=["components"],p={},m={_frontmatter:p},d=c.Z;function s(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.mdx)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"template-customization-example"},"Template customization example"),(0,o.mdx)("p",null,"This topic contains a step-by-step guide to solving a typical design customization task using templates."),(0,o.mdx)("h2",{id:"change-the-mini-shopping-cart-layout"},"Change the mini shopping cart layout"),(0,o.mdx)("p",null,"In the basic Blank theme, in the mini shopping cart, products are listed under the ",(0,o.mdx)("strong",{parentName:"p"},"Go to Checkout")," button, like following:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"407px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"136.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/24a9a2f421e1f0b6ccaa52c7e216691e/cb523/inherit_mini121.webp 320w","/commerce-frontend-core/static/24a9a2f421e1f0b6ccaa52c7e216691e/f8ba2/inherit_mini121.webp 407w"],sizes:"(max-width: 407px) 100vw, 407px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/24a9a2f421e1f0b6ccaa52c7e216691e/72799/inherit_mini121.png 320w","/commerce-frontend-core/static/24a9a2f421e1f0b6ccaa52c7e216691e/0ff56/inherit_mini121.png 407w"],sizes:"(max-width: 407px) 100vw, 407px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/24a9a2f421e1f0b6ccaa52c7e216691e/0ff56/inherit_mini121.png",alt:"An image of a mini shopping cart where products are listed under the Go to Checkout button",title:"An image of a mini shopping cart where products are listed under the Go to Checkout button",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"ExampleCorp decided they want to change this and display the product list before the ",(0,o.mdx)("strong",{parentName:"p"},"Go to Checkout")," button."),(0,o.mdx)("p",null,"The template responsible for displaying the mini-shopping cart items and controls is ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Checkout/view/frontend/web/template/minicart/content.html"},(0,o.mdx)("inlineCode",{parentName:"a"},"<Magento_Checkout_module_dir>/view/frontend/web/template/minicart/content.html")),".\nHere is the part of the code ExampleCorp worked with:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"916px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"93.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/9fd360d709f6e1d4d0f7cde12cb79edc/cb523/templ_overview_code121.webp 320w","/commerce-frontend-core/static/9fd360d709f6e1d4d0f7cde12cb79edc/797b9/templ_overview_code121.webp 640w","/commerce-frontend-core/static/9fd360d709f6e1d4d0f7cde12cb79edc/31e46/templ_overview_code121.webp 916w"],sizes:"(max-width: 916px) 100vw, 916px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/9fd360d709f6e1d4d0f7cde12cb79edc/72799/templ_overview_code121.png 320w","/commerce-frontend-core/static/9fd360d709f6e1d4d0f7cde12cb79edc/6af66/templ_overview_code121.png 640w","/commerce-frontend-core/static/9fd360d709f6e1d4d0f7cde12cb79edc/59822/templ_overview_code121.png 916w"],sizes:"(max-width: 916px) 100vw, 916px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/9fd360d709f6e1d4d0f7cde12cb79edc/59822/templ_overview_code121.png",alt:"code1",title:"code1",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"They created a new Orange theme and copied the ",(0,o.mdx)("inlineCode",{parentName:"p"},"content.html")," to the theme directory:\n",(0,o.mdx)("inlineCode",{parentName:"p"},"app/design/frontend/ExampleCorp/orange/Magento_Checkout/web/template/minicart/content.html"),"."),(0,o.mdx)("p",null,"In their copy of the templates, they changed the order of the blocks as follows:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"909px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"97.8125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/1c82531a1ab9bcddc52a393a50e96a5b/cb523/templ_overview_code221.webp 320w","/commerce-frontend-core/static/1c82531a1ab9bcddc52a393a50e96a5b/797b9/templ_overview_code221.webp 640w","/commerce-frontend-core/static/1c82531a1ab9bcddc52a393a50e96a5b/8987b/templ_overview_code221.webp 909w"],sizes:"(max-width: 909px) 100vw, 909px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/1c82531a1ab9bcddc52a393a50e96a5b/72799/templ_overview_code221.png 320w","/commerce-frontend-core/static/1c82531a1ab9bcddc52a393a50e96a5b/6af66/templ_overview_code221.png 640w","/commerce-frontend-core/static/1c82531a1ab9bcddc52a393a50e96a5b/b3ad9/templ_overview_code221.png 909w"],sizes:"(max-width: 909px) 100vw, 909px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/1c82531a1ab9bcddc52a393a50e96a5b/b3ad9/templ_overview_code221.png",alt:"code2",title:"code2",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"When the Orange theme was applied, the mini shopping cart with products looked like the following:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"406px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"135.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/365b529ec05e9db9a586ff45cb70bd60/cb523/inherit_mini221.webp 320w","/commerce-frontend-core/static/365b529ec05e9db9a586ff45cb70bd60/2c60b/inherit_mini221.webp 406w"],sizes:"(max-width: 406px) 100vw, 406px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/365b529ec05e9db9a586ff45cb70bd60/72799/inherit_mini221.png 320w","/commerce-frontend-core/static/365b529ec05e9db9a586ff45cb70bd60/e33ef/inherit_mini221.png 406w"],sizes:"(max-width: 406px) 100vw, 406px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/365b529ec05e9db9a586ff45cb70bd60/e33ef/inherit_mini221.png",alt:"In the minishopping cart products are listed before the Go to Checkout button",title:"In the minishopping cart products are listed before the Go to Checkout button",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-templates-sample-md-3f26e152043c0396c32f.js.map