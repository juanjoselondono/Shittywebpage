var input = prompt(`Ingrese item de busqueda`)
        var button = document.getElementById('opener')
        var elemento;
        var counter = 0;
        class item{
            constructor(name, url){
                this.name = name
                this.url = url
            }
            openPage(){
                return window.open(this.url)
            }
        }
        const virus = new item('virus', 'https://www.youtube.com/watch?v=FaeP6xoZOXc')
        const disco_duro = new item('disco duro', 'https://www.youtube.com/watch?v=fTRxLMJn_Jg')

        var items = [virus, disco_duro]
        var writer = document.getElementById('writer')
        input  = String(input.toLowerCase())
        writer.innerHTML = input
        items.forEach(element => {
            if(element.name == input){
                elemento = element
                counter +=-1
            }
            else if(items.length-1 == counter){
                button.remove()
                alert('Elemento de entrada no definido')
            }
            counter+=1;
            console.log(`counter = ${counter} items = ${items.length}`)
        })
        button.addEventListener('click', ()=>{
            Swal.fire({
            title: 'Seguro que quieres abrir el video?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí abrir el video'
            }).then((result) => {
                if (result.isConfirmed) {
                    elemento.openPage()
                }
                else{
                    Swal.fire({
                        icon: 'success',
                        title: 'Está bien .. quizás más tarde',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        })