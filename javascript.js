
listaCarro.map((carro, posicao) => {
    let card = `
        <div class="col-md-4">
            <div class="card m-2" onclick="zoomImg('${posicao}')" title="Clique aqui para obter detalhes!" style="cursor: pointer;">
                <img src="${carro.img}" class="card-img-top" alt="Imagem do carro">
                <div class="card-body">
                    <h5 class="card-title">${carro.nome}</h5>
                    <button class="btn btn-secondary" onclick="zoomImg('${posicao}')" title="Clique aqui para dar Zoom!"><i class="bi bi-zoom-in"></i></button>
                </div>
            </div>
        </div>
    `;
    document.querySelector("#cards").innerHTML += card;
})



function zoomImg(posicao) {
    let carro = listaCarro[posicao];
    document.querySelector("#modalZoomImgNomeCarro").innerHTML = carro.nome;
    document.querySelector("#modalZoomImgDescricaoCarro").innerHTML = carro.descricao;
    document.querySelector("#modalZoomImgCarro").src = carro.img;
    new bootstrap.Modal('#modalZoomImg').show();
}

function alterarTemaSite() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if (tema === "dark") {
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`;
    } else {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    }
}