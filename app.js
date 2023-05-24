let htag=document.querySelector('.htag')
let hkey=document.querySelector('#hkey')
let hlocation=document.querySelector('#hlocation')
let hwhich=document.querySelector('#hwhich')
let hcode=document.querySelector('#hcode')
let body =document.querySelector('body')
let starter =document.querySelector('.starter')
let main =document.querySelector('.main')

body.addEventListener('keydown' , function(event){
event.preventDefault()

starter.style.display='none'
main.style.display='flex'

let eventkey = event.key
let eventlocation = event.location
let eventwhich = event.which
let eventcode = event.code
let asciicode= event.keyCode

htag.innerHTML=asciicode
hkey.innerHTML =eventkey
hlocation.innerHTML =eventlocation
hwhich.innerHTML =eventwhich
hcode.innerHTML =eventcode
console.log(event)

})




