import comp from "/Users/mac/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/fighting/index.html.vue"
const data = JSON.parse("{\"path\":\"/fighting/\",\"title\":\"仿网易云云音乐\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"fighting/index.md\"}")
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
