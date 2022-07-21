"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[2771],{71168:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return m},default:function(){return u}});var i=t(87462),n=t(63366),l=(t(15007),t(64983)),d=t(91515),r=["components"],m={},s={_frontmatter:m},o=d.Z;function u(e){var a=e.components,t=(0,n.Z)(e,r);return(0,l.mdx)(o,(0,i.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"custom-form-validation"},"Custom form validation"),(0,l.mdx)("p",null,"This tutorial shows you how to create custom form validations, using the ",(0,l.mdx)("inlineCode",{parentName:"p"},"mage/validation")," library, before submitting it to the server.\nThis allows the customer to enforce data validation rules before submission, which improves the user experience and user interface accessibility."),(0,l.mdx)("h2",{id:"initiating-validation"},"Initiating validation"),(0,l.mdx)("p",null,"There are several ways to initiate form validation as described in ",(0,l.mdx)("a",{parentName:"p",href:"../../javascript/init.md"},"Initializing JavaScript")," topic."),(0,l.mdx)("h3",{id:"using-the-data-mage-init-attribute"},"Using the ",(0,l.mdx)("inlineCode",{parentName:"h3"},"data-mage-init")," attribute"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},'<form id="my-form" data-mage-init=\'{"validation": {}}\'>\n    ...\n</form>\n')),(0,l.mdx)("h3",{id:"using-the-textx-magento-init-script-type-tag"},"Using the ",(0,l.mdx)("inlineCode",{parentName:"h3"},"text/x-magento-init")," script type tag"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},'<script type="text/x-magento-init">\n    {\n        "#my-form": {\n            "validation": {}\n        }\n    }\n<\/script>\n')),(0,l.mdx)("h2",{id:"form-validation-rules"},"Form validation rules"),(0,l.mdx)("p",null,"All available validation rules may be found in ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/lib/validation/rules.js"},"validation/rules.js"),"."),(0,l.mdx)("p",null,"Additionally, you may also use any available ",(0,l.mdx)("a",{parentName:"p",href:"https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods"},"jQuery validation rules"),"."),(0,l.mdx)("h2",{id:"defining-validation-rules"},"Defining validation rules"),(0,l.mdx)("p",null,"There are couple of ways to define validation rules for a form field."),(0,l.mdx)("h3",{id:"as-a-data-validate-attribute"},"As a ",(0,l.mdx)("inlineCode",{parentName:"h3"},"data-validate")," attribute"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},'<input id="field-1" ... data-validate=\'{"required":true}\'/>\n')),(0,l.mdx)("h3",{id:"as-a-data-validate-attribute-with-arguments"},"As a ",(0,l.mdx)("inlineCode",{parentName:"h3"},"data-validate")," attribute with arguments"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},'<input id="field-1" ... data-validate=\'{"required":true, "minlength":10}\'/>\n')),(0,l.mdx)("h3",{id:"as-an-attribute"},"As an attribute"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},'<input id="field-1" ... required="true"/>\n')),(0,l.mdx)("h3",{id:"as-an-attribute-with-arguments"},"As an attribute with arguments"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},'<input id="field-1" ... required="true" minlength="15"/>\n')),(0,l.mdx)("h3",{id:"as-a-class-name"},"As a class name"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},'<input id="field-1" ... class="input-text required-entry"/>\n')),(0,l.mdx)("h3",{id:"as-a-class-name-with-arguments"},"As a class name with arguments"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},'<input id="field-1" ... class="input-text required-entry" minlength="15"/>\n')),(0,l.mdx)("h3",{id:"using-data-mage-init"},"Using ",(0,l.mdx)("inlineCode",{parentName:"h3"},"data-mage-init")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},'<form ... data-mage-init=\'{"validation": {"rules": {"field-1": {"required":true}}}}\'>\n    ...\n</form>\n')),(0,l.mdx)("h3",{id:"using-data-mage-init-with-arguments"},"Using ",(0,l.mdx)("inlineCode",{parentName:"h3"},"data-mage-init")," with arguments"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},'<form ... data-mage-init=\'{"validation": {"rules": {"field-1": {"required":true, "minlength":20}}}}\'>\n    ...\n</form>\n')),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)("h3",{id:"adding-the-validation-for-a-form"},"Adding the validation for a form"),(0,l.mdx)("p",null,"Here are examples of all available ways of validating the form fields."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},'<form class="form" id="my-form" method="post" data-mage-init=\'{"validation":{"rules": {"field-4": {"required":true}}}}\'>\n    <fieldset class="fieldset">\n        <div class="field name required">\n            <label class="label" for="field-1"><span>Field 1 (using data-validate)</span></label>\n            <div class="control">\n                <input name="field-1" id="field-1" title="Field 1" value=""  class="input-text" type="text" data-validate=\'{"required":true, "url": true}\'/>\n            </div>\n        </div>\n        <div class="field name required">\n            <label class="label" for="field-2"><span>Field 2 (using attribute)</span></label>\n            <div class="control">\n                <input name="field-2" id="field-2" title="Field 2" value="" class="input-text" type="text" required="true"/>\n            </div>\n        </div>\n        <div class="field name required">\n            <label class="label" for="field-3"><span>Field 3 (using classname)</span></label>\n            <div class="control">\n                <input name="field-3" id="field-3" title="Field 3" value="" type="text" class="input-text required-entry"/>\n            </div>\n        </div>\n        <div class="field name required">\n            <label class="label" for="field-4"><span>Field 4 (using data-mage-init)</span></label>\n            <div class="control">\n                <input name="field-4" id="field-4" title="Field 4" value="" class="input-text" type="text"/>\n            </div>\n        </div>\n    </fieldset>\n    <div class="actions-toolbar">\n        <div class="primary">\n            <button type="submit" title="Submit" class="action submit primary">\n                <span>Submit</span>\n            </button>\n        </div>\n    </div>\n</form>\n')),(0,l.mdx)("h3",{id:"result"},"Result"),(0,l.mdx)("p",null,"As a result, the form gets validated before sending data to the server for processing."),(0,l.mdx)("p",null,(0,l.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"672px"}},"\n      ",(0,l.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,l.mdx)("picture",{parentName:"span"},"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/266019a1a0ec213b86b77e87b10b0610/cb523/form-validation-result.webp 320w","/commerce-frontend-core/static/266019a1a0ec213b86b77e87b10b0610/797b9/form-validation-result.webp 640w","/commerce-frontend-core/static/266019a1a0ec213b86b77e87b10b0610/026c2/form-validation-result.webp 672w"],sizes:"(max-width: 672px) 100vw, 672px",type:"image/webp"}),"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/266019a1a0ec213b86b77e87b10b0610/72799/form-validation-result.png 320w","/commerce-frontend-core/static/266019a1a0ec213b86b77e87b10b0610/6af66/form-validation-result.png 640w","/commerce-frontend-core/static/266019a1a0ec213b86b77e87b10b0610/30d16/form-validation-result.png 672w"],sizes:"(max-width: 672px) 100vw, 672px",type:"image/png"}),"\n          ",(0,l.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/266019a1a0ec213b86b77e87b10b0610/30d16/form-validation-result.png",alt:"Validated Form Example",title:"Validated Form Example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-validations-custom-form-md-f09ffe62d93d5238e184.js.map