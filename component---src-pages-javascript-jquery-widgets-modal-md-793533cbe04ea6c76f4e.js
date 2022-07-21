"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[158],{76274:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return p},default:function(){return s}});var t=a(87462),l=a(63366),d=(a(15007),a(64983)),m=a(91515),o=["components"],p={},i={_frontmatter:p},r=m.Z;function s(e){var n=e.components,a=(0,l.Z)(e,o);return(0,d.mdx)(r,(0,t.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"modal-widget"},"Modal widget"),(0,d.mdx)("p",null,"The modal widget implements a secondary window that opens on top of the main window. It contains the overlay and modal content. The modal widget configuration enables the following:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Configuring as popup or slide"),(0,d.mdx)("li",{parentName:"ul"},"Controlling stack of modal widgets"),(0,d.mdx)("li",{parentName:"ul"},"Setting buttons for action bar")),(0,d.mdx)("p",null,"The modal widget source is ",(0,d.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/modal/modal.js"},(0,d.mdx)("inlineCode",{parentName:"a"},"<Magento_Ui_module_dir>/view/base/web/js/modal/modal.js")),"."),(0,d.mdx)("p",null,"The widget uses the following templates:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/templates/modal/modal-popup.html"},(0,d.mdx)("inlineCode",{parentName:"a"},"<Magento_Ui_module_dir>/view/base/web/templates/modal/modal-popup.html"))," popup type template."),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/templates/modal/modal-slide.html"},(0,d.mdx)("inlineCode",{parentName:"a"},"<Magento_Ui_module_dir>/view/base/web/templates/modal/modal-slide.html"))," slide type template.")),(0,d.mdx)("p",null,"The design patterns for the modal pop-up windows in the Admin are described in the ",(0,d.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/pattern-library/containers/slideouts-modals-overlays/slideouts-modals-overalys.html#modals"},"Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.")),(0,d.mdx)("h2",{id:"initialize"},"Initialize"),(0,d.mdx)("p",null,"To initialize the widget in your script, use the following general notation:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"$('#modal_content').modal({\n    <option1>: <value1>,\n    <option2>: <value2>,\n    ...\n});\n")),(0,d.mdx)("p",null,"For details about how to initialize the widget in a",(0,d.mdx)("inlineCode",{parentName:"p"},".phtml")," template, refer to the ",(0,d.mdx)("a",{parentName:"p",href:"../init.md"},"JavaScript initialization")," topic."),(0,d.mdx)("h2",{id:"options"},"Options"),(0,d.mdx)("h3",{id:"appendto"},(0,d.mdx)("inlineCode",{parentName:"h3"},"appendTo")),(0,d.mdx)("p",null,"The element where the modal should be added."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"body")),(0,d.mdx)("h3",{id:"autoopen"},(0,d.mdx)("inlineCode",{parentName:"h3"},"autoOpen")),(0,d.mdx)("p",null,"Automatically open the modal window when the widget is initialized."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"false")),(0,d.mdx)("h3",{id:"buttons"},(0,d.mdx)("inlineCode",{parentName:"h3"},"buttons")),(0,d.mdx)("p",null,"Array of buttons for action pane."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": Array"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Structure"),":"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"buttons: [{\n    text: '',\n    class: '',\n    click: function () {} //handler on button click\n}]\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),":"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"buttons: [{\n    text: $.mage.__('Ok'),\n    class: '',\n    click: function () {\n        this.closeModal();\n    }\n}]\n")),(0,d.mdx)("h3",{id:"clickableoverlay"},(0,d.mdx)("inlineCode",{parentName:"h3"},"clickableOverlay")),(0,d.mdx)("p",null,"Close the modal window when a user clicks on the overlay."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"true")),(0,d.mdx)("h3",{id:"closetext"},(0,d.mdx)("inlineCode",{parentName:"h3"},"closeText")),(0,d.mdx)("p",null,"The close button text."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"$.mage.__('Close')")),(0,d.mdx)("h3",{id:"customtpl"},(0,d.mdx)("inlineCode",{parentName:"h3"},"customTpl")),(0,d.mdx)("p",null,"The template file that is used as content for the ",(0,d.mdx)("inlineCode",{parentName:"p"},"custom")," modal type."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"ui/template/modal/modal-custom.html")),(0,d.mdx)("h3",{id:"focus"},(0,d.mdx)("inlineCode",{parentName:"h3"},"focus")),(0,d.mdx)("p",null,"Selector to focusing when a modal window opens or 'none' if focusing is not necessary."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},'[data-role="closeBtn"]')),(0,d.mdx)("h3",{id:"innerscroll"},(0,d.mdx)("inlineCode",{parentName:"h3"},"innerScroll")),(0,d.mdx)("p",null,"Modal scroll position."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"false")),(0,d.mdx)("h3",{id:"modalclass"},(0,d.mdx)("inlineCode",{parentName:"h3"},"modalClass")),(0,d.mdx)("p",null,"Custom classes for modal window."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": empty"),(0,d.mdx)("h3",{id:"modalaction"},(0,d.mdx)("inlineCode",{parentName:"h3"},"modalAction")),(0,d.mdx)("p",null,"The selector for all the custom action buttons."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},'[data-role="action"]')),(0,d.mdx)("h3",{id:"modalclosebtn"},(0,d.mdx)("inlineCode",{parentName:"h3"},"modalCloseBtn")),(0,d.mdx)("p",null,"The selector for all the elements that can close the modal."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},'[data-role="closeBtn"]')),(0,d.mdx)("h3",{id:"modalcontent"},(0,d.mdx)("inlineCode",{parentName:"h3"},"modalContent")),(0,d.mdx)("p",null,"The selector for element that is used for the modal's content."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},'[data-role="content"]')),(0,d.mdx)("h3",{id:"modalleftmargin"},(0,d.mdx)("inlineCode",{parentName:"h3"},"modalLeftMargin")),(0,d.mdx)("p",null,"Sets a margin between slide modal windows."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": Number"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": 45"),(0,d.mdx)("h3",{id:"modalsubtitle"},(0,d.mdx)("inlineCode",{parentName:"h3"},"modalSubTitle")),(0,d.mdx)("p",null,"The modal subtitle element selector."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},'[data-role="subTitle"]')),(0,d.mdx)("h3",{id:"modaltitle"},(0,d.mdx)("inlineCode",{parentName:"h3"},"modalTitle")),(0,d.mdx)("p",null,"The modal title element selector."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},'[data-role="title"]')),(0,d.mdx)("h3",{id:"modalvisibleclass"},(0,d.mdx)("inlineCode",{parentName:"h3"},"modalVisibleClass")),(0,d.mdx)("p",null,"The class that is assigned to an opened modal."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"_show")),(0,d.mdx)("h3",{id:"parentmodalclass"},(0,d.mdx)("inlineCode",{parentName:"h3"},"parentModalClass")),(0,d.mdx)("p",null,"The class that is assigned to parent when the modal is opened."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"_has-modal")),(0,d.mdx)("h3",{id:"outerclickhandler"},(0,d.mdx)("inlineCode",{parentName:"h3"},"outerClickHandler")),(0,d.mdx)("p",null,"The function that handles a click outside the modal window. If the ",(0,d.mdx)("inlineCode",{parentName:"p"},"outerClickHandler")," option is not specified, the ",(0,d.mdx)("a",{parentName:"p",href:"#closed"},"closeModal()")," method is used for handling a click outside the modal window."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": Function"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"undefined")),(0,d.mdx)("h3",{id:"popuptpl"},(0,d.mdx)("inlineCode",{parentName:"h3"},"popupTpl")),(0,d.mdx)("p",null,"The template file that is used as content for the ",(0,d.mdx)("inlineCode",{parentName:"p"},"popup")," modal type."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"ui/template/modal/modal-popup.html")),(0,d.mdx)("h3",{id:"responsive"},(0,d.mdx)("inlineCode",{parentName:"h3"},"responsive")),(0,d.mdx)("p",null,"Turn popup modal window to slide panel on small screens.\nAvailable if the type option is set to 'popup'."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": Boolean"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"false")),(0,d.mdx)("h3",{id:"slidetpl"},(0,d.mdx)("inlineCode",{parentName:"h3"},"slideTpl")),(0,d.mdx)("p",null,"The template file that is used as content for the ",(0,d.mdx)("inlineCode",{parentName:"p"},"slide")," modal type."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"ui/template/modal/modal-slide.html")),(0,d.mdx)("h3",{id:"subtitle"},(0,d.mdx)("inlineCode",{parentName:"h3"},"subTitle")),(0,d.mdx)("p",null,"Translated subTitle for the popup window that will be appended to the title."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": empty"),(0,d.mdx)("h3",{id:"title"},(0,d.mdx)("inlineCode",{parentName:"h3"},"title")),(0,d.mdx)("p",null,"Translated title for popup window."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": empty"),(0,d.mdx)("h3",{id:"trigger"},(0,d.mdx)("inlineCode",{parentName:"h3"},"trigger")),(0,d.mdx)("p",null,"The element that triggers the modal."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": empty"),(0,d.mdx)("h3",{id:"type"},(0,d.mdx)("inlineCode",{parentName:"h3"},"type")),(0,d.mdx)("p",null,"The type of window: 'popup' or 'slide'."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Type"),": String"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Default value"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"popup")),(0,d.mdx)("h2",{id:"methods"},"Methods"),(0,d.mdx)("h3",{id:"openmodal"},(0,d.mdx)("inlineCode",{parentName:"h3"},"openModal()")),(0,d.mdx)("p",null,"Open the modal window."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"$('#css-selector').modal('openModal');\n")),(0,d.mdx)("h3",{id:"closemodal"},(0,d.mdx)("inlineCode",{parentName:"h3"},"closeModal()")),(0,d.mdx)("p",null,"Close the modal window."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"$('#css-selector').modal('closeModal');\n")),(0,d.mdx)("h3",{id:"keyeventswitcher"},(0,d.mdx)("inlineCode",{parentName:"h3"},"keyEventSwitcher()")),(0,d.mdx)("p",null,"Listens for key events and calls handler function if it exists."),(0,d.mdx)("h3",{id:"togglemodal"},(0,d.mdx)("inlineCode",{parentName:"h3"},"toggleModal()")),(0,d.mdx)("p",null,"Toggles the modal window."),(0,d.mdx)("h2",{id:"events"},"Events"),(0,d.mdx)("p",null,"The modal widget is subscribed to the following events:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#closed"},"closed")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#opened"},"opened"))),(0,d.mdx)("p",null,"You can listen to these events in two ways:"),(0,d.mdx)("p",null,"Use jQuery's ",(0,d.mdx)("a",{parentName:"p",href:"http://api.jquery.com/on/"},(0,d.mdx)("inlineCode",{parentName:"a"},"on"))," function:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"var modal = $('#modal_content').modal({...});\nmodal.on('modalclosed', function () {\n    // Do some action when modal closed\n});\n")),(0,d.mdx)("p",null,"Or assign a callback as a property when creating a modal instance:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"$('#modal_content').modal({\n    ...\n    closed: function (){\n       // Do some action when modal closed\n    }\n});\n")),(0,d.mdx)("h3",{id:"closed"},(0,d.mdx)("inlineCode",{parentName:"h3"},"closed")),(0,d.mdx)("p",null,"Called when the modal window is closed."),(0,d.mdx)("h3",{id:"opened"},(0,d.mdx)("inlineCode",{parentName:"h3"},"opened")),(0,d.mdx)("p",null,"Called when the modal window is opened."),(0,d.mdx)("h2",{id:"keyboard-navigation"},"Keyboard navigation"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"the ESC key: close the current modal window"),(0,d.mdx)("li",{parentName:"ul"},"the TAB key: set focus to the next focusable element (looped inside the modal window)"),(0,d.mdx)("li",{parentName:"ul"},"the SHIFT+TAB keys combination: set focus to the previous focusable element (looped inside the modal window)")),(0,d.mdx)("h2",{id:"code-sample"},"Code sample"),(0,d.mdx)("p",null,"The following example shows how to initialize the modal widget and pass options during the initialization."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-html"},"<button type=\"button\" class=\"action\" data-trigger=\"trigger\">\n    <span data-bind=\"i18n: 'Click Here'\"></span>\n</button>\n<div data-bind=\"mageInit: {\n        'Magento_Ui/js/modal/modal':{\n            'type': 'popup',\n            'title': 'Popup title',\n            'trigger': '[data-trigger=trigger]',\n            'responsive': true,\n            'buttons': [{\n                text: jQuery.mage.__('Submit'),\n                class: 'action'\n            }]\n        }}\">\n    <div class=\"content\">\n        Popup Content\n    </div>\n</div>\n")),(0,d.mdx)("p",null,"The following example shows a PHTML file using the script:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-html"},"<button id=\"button\">\n    <span><?= $block->escapeHtml(__('Click me')) ?></span>\n</button>\n\n<div id=\"modal\">\n    <div class=\"modal-body-content\">\n        <h2><?= $block->escapeHtml(__('Title')) ?></h2>\n        <p><?= $block->escapeHtml(__('Content')) ?></p>\n    </div>\n</div>\n\n<script type=\"text/javascript\">\n    require([\n        \"jquery\",\n        \"Magento_Ui/js/modal/modal\"\n    ],function($, modal) {\n\n        var options = {\n            type: 'popup',\n            responsive: true,\n            title: 'Main title',\n            buttons: [{\n                text: $.mage.__('Ok'),\n                class: '',\n                click: function () {\n                    this.closeModal();\n                }\n            }]\n        };\n\n        var popup = modal(options, $('#modal'));\n        $(\"#button\").click(function() {\n            $('#modal').modal('openModal');\n        });\n    });\n<\/script>\n")),(0,d.mdx)("h3",{id:"result"},"Result"),(0,d.mdx)("p",null,"The result is a modal and a button (",(0,d.mdx)("em",{parentName:"p"},"Click Here"),") that opens the modal."),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"500px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.25000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/fc8646a6382309ee40d43832bc04912d/cb523/modal-widget-result.webp 320w","/commerce-frontend-core/static/fc8646a6382309ee40d43832bc04912d/10636/modal-widget-result.webp 500w"],sizes:"(max-width: 500px) 100vw, 500px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/fc8646a6382309ee40d43832bc04912d/72799/modal-widget-result.png 320w","/commerce-frontend-core/static/fc8646a6382309ee40d43832bc04912d/0b533/modal-widget-result.png 500w"],sizes:"(max-width: 500px) 100vw, 500px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/fc8646a6382309ee40d43832bc04912d/0b533/modal-widget-result.png",alt:"Modal Widget",title:"Modal Widget",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-javascript-jquery-widgets-modal-md-793533cbe04ea6c76f4e.js.map