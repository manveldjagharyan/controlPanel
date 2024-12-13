//..................CREATE.....................//

let createButton = document.getElementById('createButton');
createButton.onclick = () => {
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    let color = document.getElementById('color').value;

    let object = document.createElement('div')
    object.style.position = 'absolute'
    object.setAttribute('class', 'object')
    object.style.width = width + 'px'
    object.style.height = height + 'px'
    object.style.backgroundColor = `${color}`
    document.body.append(object)
    console.log(object);

    //.....................RADIUS..........................//

    let radius = document.getElementById('radius')
    radius.onclick = () => {
        object.style.transition = '.4s'
        object.style.borderRadius = '50%'
    }

    //....................SQUARE..........................//

    let square = document.getElementById('square')
    square.onclick = () => {
        object.style.transition = '.4s'
        object.style.borderRadius = '0%'

    }

    //....................IMG................................//

    let img = document.getElementById('img')
    img.onclick = () => {
        object.style.transition = '.4s'
        object.style.backgroundImage = 'url(./25.jpg)'
        object.style.backgroundSize = 'cover'
        object.style.backgroundPosition = 'center'
        object.style.backgroundRepeat = 'no-repeat'
    }

    //...................NO.IMG..............................//

    let noImg = document.getElementById('noImg')
    noImg.onclick = () => {
        object.style.transition = '.4s'
        object.style.backgroundImage = ''
    }

    //....................LEFT..............................//

    let left = document.getElementById('left');
    let toLeft = 0;
    left.onclick = () => {
        object.style.left = (toLeft += 15) + "px"
    }

    //...................RIGTH.........................//

    let rigth = document.getElementById('rigth')
    rigth.onclick = () => {
        object.style.left = (toLeft -= 15) + 'px'
    }

    //.....................TOP............................//

    let top = document.getElementById('top')
    let toTop = 0;
    top.onclick = () => {
        object.style.top = (toTop += 15) + 'px'
    }

    //........................BOTTOM..........................//

    let bottom = document.getElementById('bottom')
    bottom.onclick = () => {
        object.style.top = (toTop -= 15) + 'px'
    }

    //.......................ROTATE LEFT....................//

    let rotateLeft = document.getElementById('rotateLeft')
    let rotateTo = 0;
    rotateLeft.onclick = () => {
        object.style.rotate =  (rotateTo += 15) + "deg"
    }

    //.....................ROTATE ROGTH...................//
    let rotateRigth = document.getElementById('rotateRigth');
    rotateRigth.onclick = () => {
        object.style.rotate =  (rotateTo -= 15) + "deg"
    }

    //......................ROTATE INFINIT......................//

    let rotateInfinite = document.getElementById('rotateInfinite')
    rotateInfinite.onclick = () => {
        object.style.animation = 'rotate 1s linear infinite'
    }
}

