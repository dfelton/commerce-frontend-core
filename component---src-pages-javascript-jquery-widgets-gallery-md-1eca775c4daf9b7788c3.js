"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[1863],{14990:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return s}});var l=a(87462),i=a(63366),t=(a(15007),a(64983)),m=a(91515),o=["components"],d={},r={_frontmatter:d},p=m.Z;function s(e){var n=e.components,a=(0,i.Z)(e,o);return(0,t.mdx)(p,(0,l.Z)({},r,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"gallery-widget"},"Gallery widget"),(0,t.mdx)("p",null,"The gallery jQuery widget implements a content area with images organized into preview and thumbnails blocks."),(0,t.mdx)("p",null,"The following picture is an illustration of image displaying on the product page using the gallery widget:"),(0,t.mdx)("p",null,(0,t.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1177px"}},"\n      ",(0,t.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,t.mdx)("picture",{parentName:"span"},"\n          ",(0,t.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/eb0578bb3a806f5f33f3f0e404cbc23e/cb523/gallery_scr21.webp 320w","/commerce-frontend-core/static/eb0578bb3a806f5f33f3f0e404cbc23e/797b9/gallery_scr21.webp 640w","/commerce-frontend-core/static/eb0578bb3a806f5f33f3f0e404cbc23e/421c4/gallery_scr21.webp 1177w"],sizes:"(max-width: 1177px) 100vw, 1177px",type:"image/webp"}),"\n          ",(0,t.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/eb0578bb3a806f5f33f3f0e404cbc23e/72799/gallery_scr21.png 320w","/commerce-frontend-core/static/eb0578bb3a806f5f33f3f0e404cbc23e/6af66/gallery_scr21.png 640w","/commerce-frontend-core/static/eb0578bb3a806f5f33f3f0e404cbc23e/c0ebd/gallery_scr21.png 1177w"],sizes:"(max-width: 1177px) 100vw, 1177px",type:"image/png"}),"\n          ",(0,t.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/eb0578bb3a806f5f33f3f0e404cbc23e/c0ebd/gallery_scr21.png",alt:"A product page with preview and thumbnails",title:"A product page with preview and thumbnails",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,t.mdx)("p",null,"In addition, the ",(0,t.mdx)("a",{parentName:"p",href:"magnifier.md"},"magnifier widget")," can be used to demonstrate images in 100% scaled size in separate dedicated layer, and the gallery fullscreen mode can be used to navigate the entire full sized photo."),(0,t.mdx)("p",null,"Gallery is displayed consistently across all supported browsers and is responsive --- it sizes correctly on mobile devices and desktops."),(0,t.mdx)("p",null,"The gallery widget uses the ",(0,t.mdx)("a",{parentName:"p",href:"http://fotorama.io/"},"Fotorama widget"),"."),(0,t.mdx)("p",null,"The important feature of the gallery widget implementation is the possibility to configure the widget options in the ",(0,t.mdx)("inlineCode",{parentName:"p"},"view.xml")," configuration file of a theme."),(0,t.mdx)("p",null,"The gallery widget source code is ",(0,t.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/web/mage/gallery/gallery.js"},"lib/web/mage/gallery/gallery.js"),"."),(0,t.mdx)("p",null,"The gallery magnifier source is ",(0,t.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/web/magnifier/magnify.js"},"lib/web/magnifier/magnify.js"),"."),(0,t.mdx)("h2",{id:"initialize"},"Initialize"),(0,t.mdx)("p",null,"The gallery widget is initialized as described in ",(0,t.mdx)("a",{parentName:"p",href:"../init.md#insert-a-component-in-a-phtml-template"},"JavaScript initialization"),"."),(0,t.mdx)("p",null,"Example of declarative initialization:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-xml"},"<Magento_Catalog_module_dir>/view/frontend/templates/product/view/gallery.phtml\n")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},'<script type="text/x-magento-init">\n    {\n        "<element_selector>": {\n            "mage/gallery/gallery": {\n                "data": [{\n                    "thumb": "<small_image_url>",\n                    "img": "<small_image_url>",\n                    "full": "<small_image_url>",\n                    "caption": "<message>",\n                    "position": "<number>",\n                    "isMain": "<true/false>"\n                }],\n                "options": {\n                    "nav": "<false/thumbs/dots>",\n                    "loop": <true/false>,\n                    "keyboard": <true/false>,\n                    "arrows": <true/false>,\n                    "allowfullscreen": <true/false>,\n                    "showCaption": <true/false>,\n                    "width": <number>,\n                    "thumbwidth": <number>,\n                    "thumbheight": <number>,\n                    "height": <number>,\n                    "transitionduration": <number>,\n                    "transition": "<slide/crossfade/dissolve>",\n                    "navarrows": <true/false>,\n                    "navtype": "<slides/thumbs>",\n                    "navdir": "<horizontal/vertical>"\n                },\n                "fullscreen": {\n                    "nav": "<false/thumbs/dots>",\n                    "loop": <true/false>,\n                    "navdir": "<horizontal/vertical>",\n                    "navarrows": <true/false>,\n                    "navtype": "<slides/thumbs>",\n                    "arrows": <true/false>,\n                    "showCaption": <true/false>,\n                    "transitionduration": <number>,\n                    "transition": "<slide/crossfade/dissolve>"\n                },\n                "breakpoints": {\n                    "<breakpoint_name>": {\n                        "conditions": {\n                            "max-width": "767px"\n                        },\n                        "options": {}\n                    }\n                }\n            }\n        }\n    }\n<\/script>\n')),(0,t.mdx)("h2",{id:"options"},"Options"),(0,t.mdx)("h3",{id:"data"},(0,t.mdx)("inlineCode",{parentName:"h3"},"data")),(0,t.mdx)("p",null,"Array of images to display."),(0,t.mdx)("p",null,"Where ",(0,t.mdx)("inlineCode",{parentName:"p"},"image")," is an object with keys:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},'{\n    "thumb": "<small_image_url>",\n    "img": "<small_image_url>",\n    "full": "<small_image_url>",\n    "caption": "<message>",\n    "isMain": "<true/false>"\n}\n')),(0,t.mdx)("p",null,"The ",(0,t.mdx)("inlineCode",{parentName:"p"},"thumb"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"img"),", and ",(0,t.mdx)("inlineCode",{parentName:"p"},"full")," are full paths to proper image files."),(0,t.mdx)("h4",{id:"datacaption"},(0,t.mdx)("inlineCode",{parentName:"h4"},"data/caption")),(0,t.mdx)("p",null,"Set the caption for a specific image in the ",(0,t.mdx)("inlineCode",{parentName:"p"},"data")," field.\nExample of the runtime initialization with the ",(0,t.mdx)("inlineCode",{parentName:"p"},"caption")," option specified:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"galleryInstance({\n    data: [\n        {\n            img: 'preview_number_one.jpg',\n            thumb: 'preview_number_one.jpg',\n            caption: 'T-Shirt Women side'\n        }\n    ]\n});\n")),(0,t.mdx)("h3",{id:"options-1"},(0,t.mdx)("inlineCode",{parentName:"h3"},"options")),(0,t.mdx)("p",null,"Set of options available for the Preview region."),(0,t.mdx)("h4",{id:"optionsallowfullscreen"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/allowfullscreen")),(0,t.mdx)("p",null,"Show the button that toggles full screen view of the gallery."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,t.mdx)("h4",{id:"optionsarrows"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/arrows")),(0,t.mdx)("p",null,"Display navigation arrows on the thumbnails sides."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,t.mdx)("h4",{id:"optionsheight"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/height")),(0,t.mdx)("p",null,"Height of the preview block in pixels or percent."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Number, String"),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Default value"),": null"),(0,t.mdx)("h4",{id:"optionskeyboard"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/keyboard")),(0,t.mdx)("p",null,"Switch on/off the keyboard navigation."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,t.mdx)("inlineCode",{parentName:"p"},"false")),(0,t.mdx)("h4",{id:"optionsloop"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/loop")),(0,t.mdx)("p",null,"Define whether images are displayed in a loop."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,t.mdx)("inlineCode",{parentName:"p"},"false")),(0,t.mdx)("h4",{id:"optionsmaxheight"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/maxheight")),(0,t.mdx)("p",null,"Maximum height of the preview block in pixels or percent."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Number, String"),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,t.mdx)("inlineCode",{parentName:"p"},"null")),(0,t.mdx)("h4",{id:"optionsmaxwidth"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/maxwidth")),(0,t.mdx)("p",null,"Maximum width of the preview block in pixels or percent."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Number, String"),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Default value"),": 100%"),(0,t.mdx)("h4",{id:"optionsminheight"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/minheight")),(0,t.mdx)("p",null,"Minimal height of the preview block in pixels or percent."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Number, String"),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,t.mdx)("inlineCode",{parentName:"p"},"null")),(0,t.mdx)("h4",{id:"optionsminwidth"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/minwidth")),(0,t.mdx)("p",null,"Minimal width of the preview block in pixels or percent."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Number, String"),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,t.mdx)("inlineCode",{parentName:"p"},"null")),(0,t.mdx)("h4",{id:"optionsnav"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/nav")),(0,t.mdx)("p",null,"Variation of thumbnails in navigation."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Possible values"),":"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"dots"),": iPhone-style dots"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"thumbs"),": thumbnails"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"false"),": nothing")),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Default"),": ",(0,t.mdx)("inlineCode",{parentName:"p"},"dots")),(0,t.mdx)("h4",{id:"optionsnavdir"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/navdir")),(0,t.mdx)("p",null,"Sliding direction of thumbnails."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Possible values"),":"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"vertical")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"horizontal"))),(0,t.mdx)("h4",{id:"optionsnavarrows"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/navarrows")),(0,t.mdx)("p",null,"Display navigation arrows for thumbnails."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,t.mdx)("h4",{id:"optionsnavtype"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/navtype")),(0,t.mdx)("p",null,"Sliding type of thumbnails."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Possible values"),":"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"slides"),": on the arrow button click the thumbs ribbon shifts over several thumbs"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"thumb"),": on the arrow button click the thumbs ribbon shifts over one thumb")),(0,t.mdx)("h4",{id:"optionsratio"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/ratio")),(0,t.mdx)("p",null,"Width divided by height. Recommended if you set width in percents."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Number, String"),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Default value"),": calculated from ",(0,t.mdx)("inlineCode",{parentName:"p"},"width")," and ",(0,t.mdx)("inlineCode",{parentName:"p"},"height"),"."),(0,t.mdx)("h4",{id:"optionsshowcaption"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/showCaption")),(0,t.mdx)("p",null,"Enable view of caption in preview. Can be for initialized for specific image. Can work globally."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,t.mdx)("h4",{id:"optionsstartindex"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/startindex")),(0,t.mdx)("p",null,"The index number of the image that is displayed once the gallery is initialized."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Number"),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,t.mdx)("inlineCode",{parentName:"p"},"0")),(0,t.mdx)("h4",{id:"optionsswipe"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/swipe")),(0,t.mdx)("p",null,"Moving between preview images by swiping in left and right."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,t.mdx)("inlineCode",{parentName:"p"},"true")),(0,t.mdx)("h4",{id:"optionsthumbwidth"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/thumbwidth")),(0,t.mdx)("p",null,"Width of thumbnails."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Number, String"),(0,t.mdx)("h4",{id:"optionsthumbheight"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/thumbheight")),(0,t.mdx)("p",null,"Height of thumbnails."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Number, String"),(0,t.mdx)("h4",{id:"optionstransition"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/transition")),(0,t.mdx)("p",null,"Sets the transition effect for slides changing."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Possible values"),":"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"slide")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"crossfade")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"dissolve"))),(0,t.mdx)("h4",{id:"optionstransitionduration"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/transitionduration")),(0,t.mdx)("p",null,"Sets transition duration in milliseconds."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Number"),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,t.mdx)("h4",{id:"optionswidth"},(0,t.mdx)("inlineCode",{parentName:"h4"},"options/width")),(0,t.mdx)("p",null,"Width of the preview in gallery in pixels or percents."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Number, String"),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,t.mdx)("inlineCode",{parentName:"p"},"null")),(0,t.mdx)("h3",{id:"fullscreen"},(0,t.mdx)("inlineCode",{parentName:"h3"},"fullscreen")),(0,t.mdx)("p",null,"Set of options available for the fullscreen view."),(0,t.mdx)("h4",{id:"fullscreenarrows"},(0,t.mdx)("inlineCode",{parentName:"h4"},"fullscreen/arrows")),(0,t.mdx)("p",null,"Display navigation arrows on the sides of previews in the fullscreen view."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,t.mdx)("h4",{id:"fullscreencaption"},(0,t.mdx)("inlineCode",{parentName:"h4"},"fullscreen/caption")),(0,t.mdx)("p",null,"Display ",(0,t.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/alt-text"},"alt text")," as image title in the fullscreen view."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,t.mdx)("h4",{id:"fullscreenkeyboard"},(0,t.mdx)("inlineCode",{parentName:"h4"},"fullscreen/keyboard")),(0,t.mdx)("p",null,"Switch on/off the keyboard navigation in the fullscreen mode."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,t.mdx)("h4",{id:"fullscreenloop"},(0,t.mdx)("inlineCode",{parentName:"h4"},"fullscreen/loop")),(0,t.mdx)("p",null,"Define whether images are displayed in a loop."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,t.mdx)("inlineCode",{parentName:"p"},"false")),(0,t.mdx)("h4",{id:"fullscreennav"},(0,t.mdx)("inlineCode",{parentName:"h4"},"fullscreen/nav")),(0,t.mdx)("p",null,"Variation of thumbnails in navigation in the fullscreen view."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Possible values"),":"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"dots"),": iPhone-style dots"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"thumbs"),": thumbnails"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"false"),": nothing")),(0,t.mdx)("h4",{id:"fullscreennavdir"},(0,t.mdx)("inlineCode",{parentName:"h4"},"fullscreen/navdir")),(0,t.mdx)("p",null,"Sliding direction of thumbnails in the fullscreen view."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Possible values"),":"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"vertical")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"horizontal"))),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-xml"},'<var name="gallery">\n   <var name="navdir">horizontal</var> \x3c!-- Sliding direction of thumbnails (horizontal/vertical) --\x3e\n</var>\n')),(0,t.mdx)("h4",{id:"fullscreennavarrows"},(0,t.mdx)("inlineCode",{parentName:"h4"},"fullscreen/navarrows")),(0,t.mdx)("p",null,"Show/hide arrows in thumb navigation."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,t.mdx)("inlineCode",{parentName:"p"},"true")),(0,t.mdx)("h4",{id:"fullscreennavtype"},(0,t.mdx)("inlineCode",{parentName:"h4"},"fullscreen/navtype")),(0,t.mdx)("p",null,"Type of navigation."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Possible values"),":"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"thumbs")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"slides"))),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,t.mdx)("inlineCode",{parentName:"p"},"thumbs")),(0,t.mdx)("h4",{id:"fullscreennavigation_carousel"},(0,t.mdx)("inlineCode",{parentName:"h4"},"fullscreen/navigation_carousel")),(0,t.mdx)("p",null,"Display navigation thumbnails as carousel in the fullscreen view."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,t.mdx)("h4",{id:"fullscreenshowcaption"},(0,t.mdx)("inlineCode",{parentName:"h4"},"fullscreen/showCaption")),(0,t.mdx)("p",null,"Enable view of caption in the fullscreen mode. Can be for initialized for specific image. Can work globally."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,t.mdx)("h4",{id:"fullscreenthumbwidth"},(0,t.mdx)("inlineCode",{parentName:"h4"},"fullscreen/thumbwidth")),(0,t.mdx)("p",null,"Width of thumbnails in the fullscreen view."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Number, String"),(0,t.mdx)("h4",{id:"fullscreenthumbheight"},(0,t.mdx)("inlineCode",{parentName:"h4"},"fullscreen/thumbheight")),(0,t.mdx)("p",null,"Height of thumbnails in the fullscreen view."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Number, String"),(0,t.mdx)("h4",{id:"fullscreentransition"},(0,t.mdx)("inlineCode",{parentName:"h4"},"fullscreen/transition")),(0,t.mdx)("p",null,"Sets the transition effect for slides changing in the fullscreen view."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Possible values"),":"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"slide")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"crossfade")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"dissolve"))),(0,t.mdx)("h4",{id:"fullscreentransitionduration"},(0,t.mdx)("inlineCode",{parentName:"h4"},"fullscreen/transitionduration")),(0,t.mdx)("p",null,"Sets transition duration in milliseconds in the fullscreen view."),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Type"),": Number"),(0,t.mdx)("h3",{id:"breakpoints"},(0,t.mdx)("inlineCode",{parentName:"h3"},"breakpoints")),(0,t.mdx)("p",null,"Set of options that could be dynamically set while page is resizing."),(0,t.mdx)("p",null,"Set as follows:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},'"breakpoints": {\n    "%breakpoint_name%": {\n        "conditions": {\n            ...\n        }\n        "options": {...}\n    }\n}\n')),(0,t.mdx)("p",null,"Where the options are as follows:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"conditions"),": compiled in ",(0,t.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"},"media query")," through and operand. For example: ",(0,t.mdx)("inlineCode",{parentName:"li"},'"max-width": "767px"')),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"options")," - object of options that are applied")),(0,t.mdx)("h2",{id:"configure-options-in-viewxml"},"Configure options in ",(0,t.mdx)("inlineCode",{parentName:"h2"},"view.xml")),(0,t.mdx)("p",null,"Gallery and magnifier options can be set in the ",(0,t.mdx)("inlineCode",{parentName:"p"},"view.xml")," configuration file of a theme. The file is conventionally located in ",(0,t.mdx)("inlineCode",{parentName:"p"},"<theme_dir>/etc"),"."),(0,t.mdx)("p",null,"The general gallery options are set as follows:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-xml"},'<var name="gallery">\n    <var name="%option1%">%option1_value%</var>\n    <var name="%option2%">%option2_value%</var>\n...\n</var>\n')),(0,t.mdx)("p",null,"The fullscreen and breakpoints options are set in a similar way:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-xml"},'<var name="fullscreen">\n    <var name="%fullscreen_option1%">%option1_value%</var>\n    <var name="%fullscreen_option2%">%option2_value%</var>\n...\n</var>\n<var name="breakpoints">\n    <var name="%breakpoints_option1%">%option1_value%</var>\n    <var name="%breakpoints_option2%">%option2_value%</var>\n...\n</var>\n')),(0,t.mdx)("p",null,"For illustration of setting gallery option in ",(0,t.mdx)("inlineCode",{parentName:"p"},"view.xml"),", you can reference to the ",(0,t.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/design/frontend/Magento/blank/etc/view.xml#L184"},"view.xml of the Blank theme"),"."),(0,t.mdx)("h2",{id:"gallery-api"},"Gallery API"),(0,t.mdx)("p",null,"Gallery methods are placed in data storage of the ",(0,t.mdx)("inlineCode",{parentName:"p"},"gallery")," object. To initialize the API, on the gallery object, call the ",(0,t.mdx)("inlineCode",{parentName:"p"},"data")," method with ",(0,t.mdx)("inlineCode",{parentName:"p"},"gallery")," as argument. The illustration follows:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"var api = $(element).data('gallery');\n\n//or\n\nvar api = $('[data-gallery-role=\"gallery\"]').data('gallery');\n")),(0,t.mdx)("p",null,"This method returns JS object that contains ",(0,t.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/api"},"API")," functions."),(0,t.mdx)("p",null,"To ensure that the gallery is fully formed, wrap your code with ",(0,t.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/event"},"event")," handler function and add it to the ",(0,t.mdx)("inlineCode",{parentName:"p"},"gallery:loaded")," event:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"$(element).on('gallery:loaded', function () {\n    var api = $(element).data('gallery');\n    /* api methods calls */\n});\n")),(0,t.mdx)("p",null,"Then to call a method, use the following notation:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-php"},"api.%method_name%();\n")),(0,t.mdx)("p",null,"All available methods are listed in the following paragraph."),(0,t.mdx)("h2",{id:"methods"},"Methods"),(0,t.mdx)("h3",{id:"first"},(0,t.mdx)("inlineCode",{parentName:"h3"},"first()")),(0,t.mdx)("p",null,"Displays the first preview image."),(0,t.mdx)("h3",{id:"last"},(0,t.mdx)("inlineCode",{parentName:"h3"},"last()")),(0,t.mdx)("p",null,"Displays the last preview image."),(0,t.mdx)("h3",{id:"next"},(0,t.mdx)("inlineCode",{parentName:"h3"},"next()")),(0,t.mdx)("p",null,"Image ID is passed as an argument. Displays the next preview image."),(0,t.mdx)("p",null,"If the last image ID is passed, the behavior depends on whether ",(0,t.mdx)("a",{parentName:"p",href:"#optionsloop"},"loop")," is enabled:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"if loop is enabled, the first image is displayed."),(0,t.mdx)("li",{parentName:"ul"},"if loop is disabled, does not change the displayed image.")),(0,t.mdx)("h3",{id:"prev"},(0,t.mdx)("inlineCode",{parentName:"h3"},"prev()")),(0,t.mdx)("p",null,"Displays the previous preview image."),(0,t.mdx)("p",null,"If the first image ID is passed, the behavior depends on whether ",(0,t.mdx)("a",{parentName:"p",href:"#optionsloop"},"loop")," is enabled:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"if loop is enabled, the last image is displayed."),(0,t.mdx)("li",{parentName:"ul"},"if loop is disabled, does not change the displayed image.")),(0,t.mdx)("h3",{id:"seek"},(0,t.mdx)("inlineCode",{parentName:"h3"},"seek()")),(0,t.mdx)("p",null,"Displays the image with the specified ",(0,t.mdx)("inlineCode",{parentName:"p"},"index"),"."),(0,t.mdx)("p",null,"Doesn't update preview if the argument is not valid."),(0,t.mdx)("p",null,"Behavior:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"seek(0)")," does not display any preview"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"seek(1)")," displays the first image."),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"seek(-1)")," displays the last image."),(0,t.mdx)("li",{parentName:"ul"},'If the argument is a number bigger than the number of items, or less than "-(number of items)" the gallery shows the modulus of the following division: total images number divided by the argument number.')),(0,t.mdx)("h3",{id:"updatedata"},(0,t.mdx)("inlineCode",{parentName:"h3"},"updateData()")),(0,t.mdx)("p",null,"Add new items to the gallery."),(0,t.mdx)("p",null,"Example:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-php"},"api.updateData([{\n    img: 'image1.jpg',\n    thumb: 'thumb1.jpg',\n    caption: 'caption'\n}]);\n")),(0,t.mdx)("h3",{id:"updateoptions"},(0,t.mdx)("inlineCode",{parentName:"h3"},"updateOptions()")),(0,t.mdx)("p",null,"Updates options of active breakpoint or default gallery options, if there is no active breakpoint."),(0,t.mdx)("p",null,"Example:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-php"},"api.updateOptions([{\n    nav: 'dots'\n}]);\n")),(0,t.mdx)("h2",{id:"code-sample"},"Code sample"),(0,t.mdx)("p",null,"This example shows a use case for a gallery widget on any page:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-html"},'<div class="image-gallery"></div>\n<script>\nrequire ([\n    \'jquery\',\n    \'mage/gallery/gallery\'\n], function ($, gallery) {\n    $(function () {\n        $(\'.image-gallery\').each(function (index, element) {\n            gallery({\n                options: {\n                    "nav": "false",\n                    "loop": "true",\n                    "arrows": "true"\n                },\n                data: [\n                    { img: "<image_url_1>" },\n                    { img: "<image_url_2>" },\n                    { img: "<image_url_3>" }\n                ],\n                fullscreen: {\n                    "navdir": "horizontal"\n                },\n                "breakpoints": {\n                    "<breakpoint_name>": {\n                        "conditions": {\n                            "max-width": "767px"\n                        },\n                        "options": {}\n                    }\n                }\n            }, element);\n        });\n    });\n});\n<\/script>\n')),(0,t.mdx)("p",null,"The breakpoints options are set in the ",(0,t.mdx)("inlineCode",{parentName:"p"},"view.xml")," configuration file of a theme. The file is located in ",(0,t.mdx)("inlineCode",{parentName:"p"},"<theme_dir>/etc"),"."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-xml"},'<var name="breakpoints">\n    <var name="%breakpoints_option1%">%option1_value%</var>\n    <var name="%breakpoints_option2%">%option2_value%</var>\n...\n</var>\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-javascript-jquery-widgets-gallery-md-1eca775c4daf9b7788c3.js.map