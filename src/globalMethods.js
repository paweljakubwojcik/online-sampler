import config from '../package.json'
const rootAddres = config.homepage.split('/').pop()


export const changeOrientation = () => {


    let path = document.location.pathname
    console.log(rootAddres, path)

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