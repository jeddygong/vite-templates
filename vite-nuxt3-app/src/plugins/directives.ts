export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('focus', {
    mounted (el) {
      console.log('focus');
      el.focus()
    },
    getSSRProps (binding, vnode) {
      // you can provide SSR-specific props here
      return {}
    }
  })
})