
let canvas = document.getElementById('canvas')
const body = document.querySelector('body')
canvas.height = window.innerHeight
canvas.width = window.innerWidth
let ctx = canvas.getContext('2d')
ctx.lineWidth = 5

let prevx = null
let prevy = null

let draw = false 

let thecolor = ''

body.style.backgroundColor = '#FFFFFF'
let theInput = document.getElementById('favcolor')

theInput.addEventListener('input',function(){
    thecolor = theInput.value
    body.style.backgroundColor = thecolor
}, false)

let clrs = document.querySelectorAll('.clr')
clrs = Array.from(clrs)
clrs.forEach(clr => {
    clr.addEventListener('click',() =>{
        ctx.strokeStyle = clr.dataset.clr
    })
})

//clearing the canvas

let clearBtn = document.querySelector('.clear') 
clearBtn.addEventListener('click',() =>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})

//saving into image 

let saveBtn = document.querySelector('.save')
saveBtn.addEventListener('click',()=>{
    let data = canvas.toDataURL('imag/png')
    let a = document.createElement('a')
    a.href = data
    a.download = 'sketch.png'
    a.click()
})

window.addEventListener('mousedown',(e)=> draw = true)
window.addEventListener('mouseup',(e)=> draw = false)

window.addEventListener('mousemove', function(e){
    if(prevx == null || prevy == null || !draw){
        prevx = e.clientX
        prevy = e.clientY
        return
    }

    let mouseX = e.clientX
    let mouseY = e.clientY
    ctx.beginPath()
    ctx.moveTo(prevx,prevy)
    ctx.lineTo(mouseX,mouseY)
    ctx.stroke()

    prevx = e.clientX
    prevy = e.clientY
})