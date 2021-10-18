"use strict"
let canvas
let ctx
let node
let keys = []
let x = 0
let y = 0
let speed = 6

window.addEventListener('load', () => {
  createCanvas()
  window.requestAnimationFrame(gameLoop)
})

function createCanvas(){
  canvas = document.createElement("canvas")
  canvas.style.display = "block"
  canvas.style.border = '1px solid black'
  canvas.style.width = '100%'
  canvas.style.maxWidth = '90vh'
  canvas.style.margin = "0 auto"
  canvas.tabIndex = "0"
  canvas.width = 512
  canvas.height = 512
  ctx = canvas.getContext("2d")
  node = document.body
  node.appendChild(canvas)
}

function gameLoop(timeStamp){
  window.requestAnimationFrame(gameLoop)
  keyBoard()
  drawPlayer()
}

function keyBoard(){
  canvas.onkeydown = canvas.onkeyup = (e) => {
    keys[e.key] = e.type == 'keydown'
  }
  
  if(keys.w && y > 0){
    y-= speed
  }
  if(keys.a && x > 0){
    x-= speed
  }
  if(keys.s && y < canvas.height -32){
    y+= speed
  }
  if(keys.d && x < canvas.width -32){
    x+= speed
  }
}

function drawPlayer(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(x,y,32,32)
}