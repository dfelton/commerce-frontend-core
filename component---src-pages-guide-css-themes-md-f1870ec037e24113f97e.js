"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[3443],{18479:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return u}});var a,s=t(87462),l=t(63366),i=(t(15007),t(64983)),d=t(91515),o=["components"],m={},r=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:m},c=d.Z;function u(e){var n=e.components,t=(0,l.Z)(e,o);return(0,i.mdx)(c,(0,s.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"include-css"},"Include CSS"),(0,i.mdx)("p",null,"In the application, CSS files are included in ",(0,i.mdx)("a",{parentName:"p",href:"../layouts/index.md"},"layout files"),"."),(0,i.mdx)("p",null,"Technically there is an option to include them in template files, but we strongly recommend avoiding this."),(0,i.mdx)(r,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"The CSS class names can be assigned in both templates and layouts."),(0,i.mdx)("p",null,"This topic describes how stylesheets are located by default in the application file system, and the recommended way to include CSS files in layouts."),(0,i.mdx)("h2",{id:"how-stylesheet-files-are-organized"},"How stylesheet files are organized"),(0,i.mdx)("p",null,"Conventionally, CSS and Less files are stored only in themes. ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"Module")," directories do not contain any default styles."),(0,i.mdx)("p",null,"In a ",(0,i.mdx)("a",{parentName:"p",href:"../themes/structure.md"},"theme directory"),", stylesheets are stored in the following locations:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Directory relative to ",(0,i.mdx)("inlineCode",{parentName:"th"},"<THEME_DIR>")),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"/<Namespace>_<Module>/web/css")),(0,i.mdx)("td",{parentName:"tr",align:null},"Module-specific styles.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"/web/css")),(0,i.mdx)("td",{parentName:"tr",align:null},"Contains the following:",(0,i.mdx)("br",null),(0,i.mdx)("inlineCode",{parentName:"td"},"print.less"),": Used to generate styles for the printed version of store pages.",(0,i.mdx)("br",null),(0,i.mdx)("inlineCode",{parentName:"td"},"_styles.less")," - A composite file, which includes all Less files used in the theme. The underscore sign (",(0,i.mdx)("inlineCode",{parentName:"td"},"_"),") in a file name conventionally means that a file is not used independently, but is included in other files.",(0,i.mdx)("br",null),(0,i.mdx)("inlineCode",{parentName:"td"},"styles-m.less"),": Used to generate mobile-specific styles, includes ",(0,i.mdx)("inlineCode",{parentName:"td"},"_styles.less"),".",(0,i.mdx)("br",null),(0,i.mdx)("inlineCode",{parentName:"td"},"styles-l.less"),": Used to generate desktop-specific styles, includes ",(0,i.mdx)("inlineCode",{parentName:"td"},"_styles.less"),".",(0,i.mdx)("br",null),(0,i.mdx)("inlineCode",{parentName:"td"},"/source"),": This subdirectory contains LESS configuration files that invoke mixins from the UI library.",(0,i.mdx)("br",null),(0,i.mdx)("inlineCode",{parentName:"td"},"/source/_theme.less"),": Overrides the default UI library variables values.")))),(0,i.mdx)("h2",{id:"include-css-1"},"Include CSS"),(0,i.mdx)("p",null,"In the application, the recommended way to include stylesheets is to specify them in ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/layout"},"layout")," files."),(0,i.mdx)("p",null,"Usually, the stylesheets you include should be available for all store pages. To achieve this, include your CSS in ",(0,i.mdx)("inlineCode",{parentName:"p"},"default_head_blocks.xml")," of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento_Theme")," module, which defines the default ",(0,i.mdx)("inlineCode",{parentName:"p"},"<head>")," page section for all pages.\nThe recommended way to do this is adding an ",(0,i.mdx)("a",{parentName:"p",href:"../layouts/extend.md"},"extending")," ",(0,i.mdx)("inlineCode",{parentName:"p"},"default_head_blocks.xml")," in your theme, and including the required stylesheets in this file."),(0,i.mdx)("p",null,"Your custom ",(0,i.mdx)("inlineCode",{parentName:"p"},"default_head_blocks.xml")," should be located as follows:"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"<theme_dir>/Magento_Theme/layout/default_head_blocks.xml"),"."),(0,i.mdx)("p",null,"To include a CSS file, add the ",(0,i.mdx)("inlineCode",{parentName:"p"},'<css src="<path>/<file>" media="print|<option>"/>')," block in ",(0,i.mdx)("inlineCode",{parentName:"p"},"<head>")," section in a layout file. ",(0,i.mdx)("inlineCode",{parentName:"p"},"<path>")," is specified relative to the theme web directory (",(0,i.mdx)("inlineCode",{parentName:"p"},"<theme_dir>/web"),")"),(0,i.mdx)("p",null,"For example, to include ",(0,i.mdx)("inlineCode",{parentName:"p"},"<theme_dir>/web/css/custom.css"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">\n    <head>\n        <css src="css/custom.css" rel="stylesheet" type="text/css"  />\n    </head>\n</page>\n')),(0,i.mdx)("p",null,"The following illustrates how stylesheets are included in the default Blank theme:"),(0,i.mdx)("p",null,"[",(0,i.mdx)("inlineCode",{parentName:"p"},"/Magento_Theme/layout/default_head_blocks.xml"),"]"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">\n    <head>\n        <css src="css/styles-m.css" />\n        <css src="css/styles-l.css" media="screen and (min-width: 768px)"/>\n        <css src="css/print.css" media="print" />\n    </head>\n</page>\n')),(0,i.mdx)("p",null,"To include an external CSS file, add ",(0,i.mdx)("inlineCode",{parentName:"p"},'<css src="URL to External Source" src_type="url" rel="stylesheet" type="text/css" />'),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">\n    <head>\n        <css src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css"  src_type="url" rel="stylesheet" type="text/css"  />\n    </head>\n</page>\n')),(0,i.mdx)(r,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"If the system does not find the included CSS files, it searches for the same file names with a ",(0,i.mdx)("inlineCode",{parentName:"p"},".less")," extension. This is part of the built-in preprocessing mechanism. You can find more information about it in the ",(0,i.mdx)("a",{parentName:"p",href:"preprocess.md"},"CSS Preprocessing")," topic."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-css-themes-md-f1870ec037e24113f97e.js.map