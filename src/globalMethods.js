export const changeOrientation = () => {

    let path = document.location.pathname
    

    let html = document.querySelector('html')
    let body = document.querySelector('body')
    let app = document.querySelector('.App')
    if (path === '/' && window.matchMedia('(orientation: portrait)').matches) {
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