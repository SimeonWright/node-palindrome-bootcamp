
document.querySelector('input').addEventListeneraddEventListener('click', switheroo)

function switheroo(element){
   let Yaname = document.querySelectorAll('input').value

   fetch(`/api?backName=${input}`)
   .then(res => res.json())
   .then((data) => {
      console.log(data)
   })

}
