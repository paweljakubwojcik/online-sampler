import { homepage } from '../package.json'
const rootAddres = homepage.split('/').pop()

/**
 * change orientation from portrait to landscape for root dir of page,
 * because main page is not suited to be in portrait on mobile devices
 */
export const changeOrientation = () => {

    let path = document.location.pathname

    let html = document.querySelector('html')
    let body = document.querySelector('body')
    let app = document.querySelector('.App')
    if (path === `/${rootAddres}/` && window.matchMedia('(orientation: portrait)').matches) {
        html.style.transform = ' rotate(90deg)'
        body.style.width = '100vh'
        body.style.height = '100vw'
        app.style.maxWidth = '100vh'
        app.style.height = '100vw'
    } else {
        html.style.transform = ''
        body.style.width = ''
        body.style.height = ''
        app.style.maxWidth = ''
        app.style.height = ''
    }
}