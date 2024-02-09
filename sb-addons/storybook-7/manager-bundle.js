try{
(()=>{var y=__STORYBOOK_API__,{ActiveTabs:S,Consumer:T,ManagerContext:_,Provider:f,addons:r,combineParameters:O,controlOrMetaKey:v,controlOrMetaSymbol:x,eventMatchesShortcut:M,eventToShortcut:w,isMacLike:A,isShortcutTaken:P,keyToSymbol:C,merge:G,mockChannel:j,optionOrAltSymbol:R,shortcutMatchesShortcut:B,shortcutToHumanString:I,types:E,useAddonState:K,useArgTypes:H,useArgs:Y,useChannel:D,useGlobalTypes:N,useGlobals:J,useParameter:V,useSharedState:q,useStoryPrepared:z,useStorybookApi:L,useStorybookState:U}=__STORYBOOK_API__;var Z=__STORYBOOK_THEMING__,{CacheProvider:$,ClassNames:ee,Global:te,ThemeProvider:oe,background:re,color:se,convert:ae,create:s,createCache:ie,createGlobal:ne,createReset:ce,css:pe,darken:le,ensure:ue,ignoreSsrWarning:de,isPropValid:me,jsx:he,keyframes:be,lighten:ge,styled:ke,themes:ye,typography:Se,useTheme:Te,withTheme:_e}=__STORYBOOK_THEMING__;var a={name:"react-super-seo",version:"1.1.5",coreVersion:"3.0.4",author:"Justin Mahar <contact@justinmahar.com>",description:"The React SEO component that handles metadata so you don't have to. Supports Google, OpenGraph, Twitter, and beyond. \u{1F680}",homepage:"https://justinmahar.github.io/react-super-seo/",main:"./dist/index.js",types:"./dist/index.d.ts",scripts:{build:"rm -rf ./dist && tsc",test:"npm run build",start:"npm run storybook",storybook:"storybook dev -p 6006","build-storybook":"storybook build",preship:'npm run build && git diff-index HEAD && npm version patch -m "Build, version, and publish."',ship:"npm publish --access public",postship:"git push",update:"rm -rf .lockblocks && git clone -q git@github.com:justinmahar/react-kindling.git ./.lockblocks && lockblocks ./.lockblocks . --verbose && rm -rf .lockblocks && echo '' && echo ' \u2192 Be sure to run `npm i` to install new dependencies.' && echo ''"},license:"MIT",repository:{type:"git",url:"git+https://github.com/justinmahar/react-super-seo.git"},bugs:{url:"https://github.com/justinmahar/react-super-seo/issues"},keywords:["react","seo","search","engine","optimization","meta","metadata","google","opengraph","twitter","card","cards","helmet","schema","semantic","tags"],peerDependencies:{react:"^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^20.0.0 || ^21.0.0 || ^22.0.0","react-dom":"^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^20.0.0 || ^21.0.0 || ^22.0.0"},dependencies:{"react-helmet":"^6.1.0"},devDependencies:{"@storybook/addon-docs":"^7.6.12","@storybook/addon-essentials":"^7.6.12","@storybook/addon-viewport":"^7.6.12","@storybook/blocks":"^7.6.12","@storybook/react-webpack5":"^7.6.12","@storybook/react":"^7.6.12","@types/react-helmet":"^6.1.6","@types/react":"^18.2.53","@typescript-eslint/eslint-plugin":"^6.20.0","@typescript-eslint/parser":"^6.20.0","eslint-config-prettier":"^9.1.0","eslint-plugin-prettier":"^5.1.3","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-react":"^7.33.2","eslint-plugin-storybook":"^0.6.15",eslint:"^8.56.0",lockblocks:"^1.1.4",prettier:"^3.2.5","react-dom":"^18.2.0","react-html-props":"^2.0.3","react-markdown":"^8.0.3",react:"^18.2.0","remark-gfm":"^3.0.1","replace-in-file":"^7.1.0",storybook:"^7.6.12",typescript:"^5.3.3",webpack:"^5.90.1"}};var c="React Super SEO",p=a.homepage,l="light",u=void 0,i=s({base:l,brandTitle:c,brandUrl:p,brandImage:u});r.setConfig({theme:i});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
