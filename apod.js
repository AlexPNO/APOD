
let data= document.querySelector('#input')
let imagem=document.querySelector('#imagem')
let botao=document.querySelector('#botao')
let api=''

botao.addEventListener('click',function(){

   api=$.ajax({
       url:`https://api.nasa.gov/planetary/apod?api_key=WgSfzp8CJwi22ZaHEHUyD4hBuVuiAfeKb6tHk7dB&date=${data.value}`,
       async:false
   }).responseJSON
   
mostrar(api)
    

})
function mostrar(objeto){
    // data.setAttribute("max", objeto.date)
    imagem.innerHTML=`<div>
    <h1>${objeto.title}</h1><p>${objeto.explanation}</p>
    <img src="${objeto.url}" alt="${objeto.title}"></div>`  
}
