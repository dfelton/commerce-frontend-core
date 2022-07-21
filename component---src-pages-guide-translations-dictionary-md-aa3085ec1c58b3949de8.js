"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[3360],{11458:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return p}});var a,o=n(87462),i=n(63366),r=(n(15007),n(64983)),s=n(91515),l=["components"],d={},m=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),c={_frontmatter:d},h=s.Z;function p(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.mdx)(h,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"use-a-dictionary-to-customize-strings"},"Use a dictionary to customize strings"),(0,r.mdx)("p",null,"Modify default strings in your custom ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/theme"},"theme")," to load and use ",(0,r.mdx)("a",{parentName:"p",href:"index.md#terms"},"translation dictionaries"),". Learn more about locales, modifying strings, and how the application searches and applies translations."),(0,r.mdx)("h2",{id:"how-the-application-applies-locales"},"How the application applies locales"),(0,r.mdx)("p",null,"When the ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/locale"},"locale")," is changed for a store, the application searches and applies translations in the corresponding dictionaries in the following sequence:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Module translations: ",(0,r.mdx)("inlineCode",{parentName:"li"},"<module_dir>/i18n/")),(0,r.mdx)("li",{parentName:"ol"},"Translation package: ",(0,r.mdx)("inlineCode",{parentName:"li"},"app/i18n/")),(0,r.mdx)("li",{parentName:"ol"},"Theme translations:",(0,r.mdx)("ol",{parentName:"li"},(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"<parent_theme_dir>/i18n/")," (iterated through all ancestor themes)"),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"<current_theme_dir>/i18n/")))),(0,r.mdx)("li",{parentName:"ol"},"The database (translations located in this database take precedence and override translations stored in other locations.)  Refer to the ",(0,r.mdx)("a",{parentName:"li",href:"https://docs.magento.com/m2/ce/user_guide/system/translate-inline.html"},"user guide")," for more information.")),(0,r.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,'Translation priority follows the inverse sequence, with "module translations" having the lowest priority and  "database" having the highest priority.'),(0,r.mdx)("p",null,"If there are competing translations for one string, the theme dictionary translations have priority over the ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," translations, and child theme translations have priority over parent theme translations."),(0,r.mdx)("h2",{id:"ooverride-parent-strings-for-default-locale"},"Ooverride parent strings for default locale"),(0,r.mdx)("p",null,"The translations priority described earlier is applied for the default ",(0,r.mdx)("inlineCode",{parentName:"p"},"en_US")," locale as well. So you can use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"en_US.csv")," dictionary to customize the strings used in the default locale."),(0,r.mdx)("p",null,"For example, this approach is used in the Luma theme. It has the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/design/frontend/Magento/luma/i18n/en_US.csv"},(0,r.mdx)("inlineCode",{parentName:"a"},"<Magento_Luma_theme_dir>/i18n/en_US.csv"))," file, where the left column contains the default values (keys), and the right column contains the values to be used instead when the Luma theme is applied:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'"Add to Wish List", "Wish List"\n"Add to Compare", "Compare"\n"Your Checkout Progress", "Checkout Progress"\n"Card Verification Number", "CVV"\n')),(0,r.mdx)("p",null,"It is important to remember that if you generate a dictionary for your theme using the ",(0,r.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict"},"i18n tool")," with the conventional names and locations for the dictionary, the existing dictionary gets overwritten."),(0,r.mdx)("p",null,"To add custom strings:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict"},"Generate the dictionary")," for your theme."),(0,r.mdx)("li",{parentName:"ol"},"Change the necessary values in the right column."),(0,r.mdx)("li",{parentName:"ol"},"Add custom strings as rows if the strings you want to replace are not in the dictionary.")),(0,r.mdx)("p",null,"The i18n tool does not create a dictionary if the theme files do not contain strings for translation. In this case, add the file manually."),(0,r.mdx)("p",null,"See the ",(0,r.mdx)("a",{parentName:"p",href:"practice.md"},"Example theme translation dictionary")," topic for the practical illustration of the procedure."),(0,r.mdx)("h2",{id:"create-locale-dictionaries"},"Create locale dictionaries"),(0,r.mdx)("p",null,"When creating locale dictionaries for your theme, use the default strings as keys. Do not create translations using the custom keys you may have created and overwritten in your default locale dictionary."),(0,r.mdx)("p",null,'Continuing the previous example with the Luma theme, we changed "Add to Wish List" to "Wish List" in ',(0,r.mdx)("inlineCode",{parentName:"p"},"en_US.csv"),". In the ",(0,r.mdx)("inlineCode",{parentName:"p"},"de_DE.csv"),' dictionary, use the original, default key of "Add to Wish List" to enter your translation. Do not use the custom value "Wish List" for translations.'),(0,r.mdx)("p",null,"The locale dictionary would use the default values (keys) in the left column followed by the translation:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'"Add to Wish List", <translation>\n"Add to Compare", <translation>\n"Your Checkout Progress", <translation>\n"Card Verification Number", <translation>\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-translations-dictionary-md-aa3085ec1c58b3949de8.js.map