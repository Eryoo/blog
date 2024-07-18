export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mac/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/FE-specification/", { loader: () => import(/* webpackChunkName: "FE-specification_index.html" */"/Users/mac/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/FE-specification/index.html.js"), meta: {"title":"前端开发环境搭建"} }],
  ["/fighting/", { loader: () => import(/* webpackChunkName: "fighting_index.html" */"/Users/mac/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/fighting/index.html.js"), meta: {"title":"仿网易云云音乐"} }],
  ["/interview/", { loader: () => import(/* webpackChunkName: "interview_index.html" */"/Users/mac/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/interview/index.html.js"), meta: {"title":"面试题"} }],
  ["/framework/", { loader: () => import(/* webpackChunkName: "framework_index.html" */"/Users/mac/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/framework/index.html.js"), meta: {"title":"UI框架"} }],
  ["/pmp/", { loader: () => import(/* webpackChunkName: "pmp_index.html" */"/Users/mac/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/pmp/index.html.js"), meta: {"title":"项目管理知识体系"} }],
  ["/utils/", { loader: () => import(/* webpackChunkName: "utils_index.html" */"/Users/mac/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/utils/index.html.js"), meta: {"title":""} }],
  ["/uniapp/", { loader: () => import(/* webpackChunkName: "uniapp_index.html" */"/Users/mac/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/uniapp/index.html.js"), meta: {"title":"uniapp"} }],
  ["/FE/DsbridgeTs/", { loader: () => import(/* webpackChunkName: "FE_DsbridgeTs_index.html" */"/Users/mac/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/FE/DsbridgeTs/index.html.js"), meta: {"title":""} }],
  ["/FE/IntersectionObserverAPI/", { loader: () => import(/* webpackChunkName: "FE_IntersectionObserverAPI_index.html" */"/Users/mac/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/FE/IntersectionObserverAPI/index.html.js"), meta: {"title":""} }],
  ["/FE/knowledge/sort.html", { loader: () => import(/* webpackChunkName: "FE_knowledge_sort.html" */"/Users/mac/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/FE/knowledge/sort.html.js"), meta: {"title":"快速排序"} }],
  ["/FE/promise/", { loader: () => import(/* webpackChunkName: "FE_promise_index.html" */"/Users/mac/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/FE/promise/index.html.js"), meta: {"title":""} }],
  ["/FE/tree/", { loader: () => import(/* webpackChunkName: "FE_tree_index.html" */"/Users/mac/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/FE/tree/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/mac/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
