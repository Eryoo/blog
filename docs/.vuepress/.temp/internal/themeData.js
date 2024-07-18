export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"介绍\",\"link\":\"/README.md\",\"activeMatch\":\"\"},{\"text\":\"面试题\",\"link\":\"/interview/index.md\",\"activeMatch\":\"^/interview/\"},{\"text\":\"前端规范\",\"link\":\"/FE-specification/index.md\",\"activeMatch\":\"^/FE-specification/\"}],\"sidebarDepth\":2,\"sidebar\":[{\"text\":\"介绍\",\"link\":\"/\"},{\"text\":\"前端框架\",\"link\":\"/framework/index.md\"},{\"text\":\"前端知识\",\"children\":[{\"text\":\"Intersection Observer API\",\"link\":\"/FE/IntersectionObserverAPI/index.md\"},{\"text\":\"排序算法\",\"link\":\"/FE/knowledge/sort.md\"},{\"text\":\"二叉树实现\",\"link\":\"/FE/tree/index.md\"},{\"text\":\"Promise实现\",\"link\":\"/FE/promise/index.md\"},{\"text\":\"Dsbridge-Ts\",\"link\":\"/FE/DsbridgeTs/index.md\"}]},{\"text\":\"实战进阶\",\"link\":\"/fighting/index.md\"},{\"text\":\"uniapp\",\"link\":\"/uniapp/index.md\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
