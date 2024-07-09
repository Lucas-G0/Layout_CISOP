const icons = [
    {
        image: "./src/images/diarioOficial.svg",
        desc: "Diário Oficial",
        name: "DIÁRIO OFICIAL",
        link: "#"
    },
    {
        image: "./src/images/portalTransparencia.svg",
        desc: "Portal da Transparência",
        name: "PORTAL DA TRANSPARÊNCIA",
        link: "#"
    },
    {
        image: "./src/images/ouvidoriaIcon.svg",
        desc: "Ouvidoria",
        name: "OUVIDORIA",
        link: "#"
    },
    {
        image: "./src/images/credenciamento.svg",
        desc: "Credenciamento",
        name: "CREDENCIAMENTO",
        link: "#"
    },
    {
        image: "./src/images/convenios.svg",
        desc: "Convênios",
        name: "CONVÊNIOS",
        link: "#"
    },
    {
        image: "./src/images/publicacoes.svg",
        desc: "Publicações",
        name: "PUBLICAÇÕES",
        link: "#"
    },
    {
        image: "./src/images/noticias.svg",
        desc: "Notícias",
        name: "NOTÍCIAS",
        link: "#"
    },
    {
        image: "./src/images/informacao.svg",
        desc: "Pedido de informação",
        name: "PEDIDO DE INFORMAÇÃO",
        link: "#"
    },
    {
        image: "./src/images/licitacoes.svg",
        desc: "Licitações",
        name: "LICITAÇÕES",
        link: "#"
    },
    {
        image: "./src/images/portal_servidor.svg",
        desc: "Portal do Servidor",
        name: "PORTAL DO SERVIDOR",
        link: "#"
    },
    {
        image: "./src/images/ids_saudeIcon.svg",
        desc: "Ids saúde",
        name: "IDS SAÚDE",
        link: "#"
    },
    {
        image: "./src/images/exames.svg",
        desc: "Tabela de exames e procedimentos",
        name: "TABELA DE EXAMES E PROCEDIMENTOS",
        link: "#"
    },
];

const mainIcons = document.querySelector('.main-icons-body');

icons.forEach(icon => {
    const iconElement = document.createElement('a');
    iconElement.classList.add('col', 'main-icons-item');
    iconElement.href = icon.link;
    iconElement.innerHTML = `
              <figure class="figure d-flex main-icon">
                <img src="${icon.image}" class="figure-img main-icon-img img fluid float-start" alt="${icon.desc}">
                <p class="figure-caption font4 text-center">${icon.name}</p>
              </figure>
    `;
    mainIcons.appendChild(iconElement);
});