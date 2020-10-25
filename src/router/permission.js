import router from "./index.js"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    next()
});
router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})