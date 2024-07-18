import comp from "/Users/mac/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/FE/tree/index.html.vue"
const data = JSON.parse("{\"path\":\"/FE/tree/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"二叉树\",\"slug\":\"二叉树\",\"link\":\"#二叉树\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"FE/tree/index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
