const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const dpr = window.devicePixelRatio
const interval = 1000 / 1

function init(){
    let canvasHeight = innerHeight
    let canvasWidth = innerWidth
    canvas.style.width = canvasWidth + 'px'
    canvas.style.height = canvasHeight + 'px'
    canvas.width = canvasWidth * dpr
    canvas.height = canvasHeight * dpr
    ctx.scale(dpr, dpr)
}

function render(){
    let now, delta
    let then = Date.now()
    
    const frame = () => {
        requestAnimationFrame(frame)
        now = Date.now()
        delta = now - then
        if ( delta < interval) return
    
        console.log('frame')
    
        then = now - (delta % interval)
    }
    
    requestAnimationFrame(frame)
}

window.addEventListener('load', () =>{
    init()
    render()
})

window.addEventListener('resize', init)