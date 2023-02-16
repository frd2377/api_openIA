const imagenPrompt = document.getElementById('prompt')
const generar = document.getElementById('generar')
const redireccion = document.getElementById('redireccion')

generar.addEventListener('click',(e)=>{
    if (imagenPrompt.value.trim() == '') {
        return
    }
    fetch('http://localhost:3000/',{
        method:'POST',
        body:JSON.stringify({
            imagenPrompt:imagenPrompt.value
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .then(()=>{
        redireccion.click()
        imagenPrompt.value = ''
    })
})

