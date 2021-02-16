export default ({ app: { router } }) => {
  let ready = false

  router.onReady(() => {
    // Mark when the router has completed the initial navigation.
    ready = true
  })

  function create() {
    if (!ready) {
      // Don't record a duplicate hit for the initial navigation.
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", 'https://mc.yandex.ru/metrika/tag.js', "ym")

      ym(71367259, "init", {"id":"71367259","clickmap":true,"trackLinks":true,"accurateTrackBounce":true,"metrikaUrl":"https://mc.yandex.ru/metrika/tag.js"})
    }
    router.afterEach((to, from) => {
      ym(71367259, 'hit', to.fullPath, {
        referer: from.fullPath
        // TODO: pass title: <new page title>
        // This will need special handling because router.afterEach is called *before* DOM is updated.
      })
    })
  }

  if (window.ym === undefined) {
    create()
  }
}
