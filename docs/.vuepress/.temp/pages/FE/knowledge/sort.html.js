import comp from "/Users/mac/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/FE/knowledge/sort.html.vue"
const data = JSON.parse("{\"path\":\"/FE/knowledge/sort.html\",\"title\":\"快速排序\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"冒泡排序\",\"slug\":\"冒泡排序\",\"link\":\"#冒泡排序\",\"children\":[]},{\"level\":2,\"title\":\"选择排序\",\"slug\":\"选择排序\",\"link\":\"#选择排序\",\"children\":[]},{\"level\":2,\"title\":\"插入排序\",\"slug\":\"插入排序\",\"link\":\"#插入排序\",\"children\":[]},{\"level\":2,\"title\":\"归并排序\",\"slug\":\"归并排序\",\"link\":\"#归并排序\",\"children\":[]},{\"level\":2,\"title\":\"计数排序\",\"slug\":\"计数排序\",\"link\":\"#计数排序\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"FE/knowledge/sort.md\"}")
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
