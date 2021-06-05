async function changePage(ms) {
    var listaDeSites = ['https://ajuda.locaweb.com.br/wiki/golpes-virtuais/',
            'https://economia.uol.com.br/noticias/redacao/2021/04/30/veja-quais-sao-os-golpes-virtuais-mais-comuns-e-como-se-proteger.htm']
    setTimeout(window.location.href = listaDeSites[Math.round(Math.random())],ms);
}