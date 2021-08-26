

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1')
weatherform.addEventListener('submit',(e) => {
e.preventDefault()
const location = search.value


fetch('/weather?address='+location).then((response)=>{
    
response.json().then((data) =>{

if (data.error){
    console.log(data.error)
}else{
messageOne.textContent = 'For location '+data.location+' the current temperature in F is '+data.temperature 
    // console.log(data.location)
    // console.log(data.temperature)
}
})
})





})