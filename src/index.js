import 'bootstrap'

if (process.env.NODE_ENV == 'development') {
    console.log('Looks like we are in development mode!')
}

function component() {
    var element = document.createElement('div')
    element.innerHTML = "Webpack Slingshot"
    return element
}

document.body.appendChild(component())