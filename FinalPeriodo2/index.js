var windows = []
function Alert(){
    Swal.fire({
        title: 'Está es una alerta!',
        text: '',
        imageUrl: 'https://i.pinimg.com/originals/20/df/1f/20df1fd389984ac0e43f10477687cc13.jpg',
        imageWidth: 500,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}
function openRandomPage(){
    var currentWindow = window.open("https://en.wikipedia.org/wiki/Special:Random")
    windows.push(currentWindow)
}
function closeRandomPage(){
    let current_window = windows[windows.length-1]
    current_window.close()
    Swal.fire({
        icon: 'succes',
        title: 'Pagina cerrada',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
}
function runInterval(){
    let timerInterval
    Swal.fire({
    title: 'Corriendo Intervalo!',
    html: 'I will close in <b></b> milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
        const content = Swal.getHtmlContainer()
        if (content) {
            const b = content.querySelector('b')
            if (b) {
            b.textContent = Swal.getTimerLeft()
            }
        }
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
    }
    })
}