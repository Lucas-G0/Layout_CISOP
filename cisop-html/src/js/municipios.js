const municipios = [
    {
        name: "NOVA AURORA",
        image: "./src/images/nova_aurora.svg",
        alt: "Nova Aurora",
        desc: "São Paulo é um município brasileiro, capital do estado homônimo e principal centro financeiro, corporativo e mercantil da América do Sul. É a cidade mais populosa do Brasil, do continente americano, da lusofonia e de todo o hemisfério sul."
    },
    {
        name: "IRACEMA DO OESTE",
        image: "./src/images/iracema do oeste.png",
        alt: "Iracema do Oeste",
        desc: "São Paulo é um município brasileiro, capital do estado homônimo e principal centro financeiro, corporativo e mercantil da América do Sul. É a cidade mais populosa do Brasil, do continente americano, da lusofonia e de todo o hemisfério sul."
    },
    {
        name: "LINDOESTE",
        image: "./src/images/lindoeste.png",
        alt: "Lindoeste",
        desc: "São Paulo é um município brasileiro, capital do estado homônimo e principal centro financeiro, corporativo e mercantil da América do Sul. É a cidade mais populosa do Brasil, do continente americano, da lusofonia e de todo o hemisfério sul."
    },
    {
        name: "IGUATU",
        image: "./src/images/iguatu.png",
        alt: "Iguatu",
        desc: "São Paulo é um município brasileiro, capital do estado homônimo e principal centro financeiro, corporativo e mercantil da América do Sul. É a cidade mais populosa do Brasil, do continente americano, da lusofonia e de todo o hemisfério sul."
    },
]

const municipiosBody = document.querySelector(".municipios-carousel-inner");
const municipiosIndicators = document.querySelector(".municipios-carousel-indicators");

municipios.forEach(municipio => {
    municipiosBody.innerHTML += `
        <div class="carousel-item ${municipiosBody.children.length === 0 ? 'active' : ''}">
            <div class="card municipios-card container-md" >
              <img class="card-image municipios-card-image" src="${municipio.image}" alt="${municipio.alt}" />
              <div class="card-body col-auto">
                <h5 class="font5">Prefeitura Municipal de</h5>
                <h2 class="font6">${municipio.name}</h2>
                <p class="font7">${municipio.desc}</p>
              </div>
            </div>
          </div>
    `
    municipiosIndicators.innerHTML += `
       <div class="card municipios-subCard d-flex" data-bs-target="#municipios-carousel" data-bs-slide-to="${municipiosBody.children.length-1}" class="${municipiosBody.children.length === 0 ? 'active' : ''}" aria-current="${municipiosBody.children.length-1 === 0 ? 'true' : 'false'}" aria-label="Slide ${municipiosBody.children.length}">
        <img class="card-image municipios-subCard-image" src="${municipio.image}" alt="${municipio.alt}" />
        <div class="card-body col-10">
          <h4 class="card-title font1">Prefeitura Municipal de</h4>
          <p class="card-text font2">${municipio.name}</p>
        </div>
      </div>
    `
});