const links = [
    {
        icon: "./src/images/tcepr.svg",
        alt: "TCE PR",
        href: "#"
    },
    {
        icon: "./src/images/amop.svg",
        alt: "AMOP",
        href: "#"
    },
    {
        icon: "./src/images/ids saúde.svg",
        alt: "IDS SAÚDE",
        href: "#"
    },
    {
        icon: "./src/images/Rust Desk.svg",
        alt: "RUST DESK",
        href: "#"
    },
    {
        icon: "./src/images/acispar.svg",
        alt: "ACISPAR",
        href: "#"
    }
]

const links_uteis_body = document.querySelector(".links-uteis-body");

links.forEach((link) => {
    const linkItem = document.createElement("a");
    linkItem.classList.add("col-sm-auto", "links-uteis-icon", "m-4", "p-4", "d-flex", 
        "align-items-center", "justify-content-center"
    );
    linkItem.href = link.href;

    const linkFigure = document.createElement("figure");
    linkFigure.classList.add("figure", "m-2", "p-2");

    const linkImg = document.createElement("img");
    linkImg.src = link.icon;
    linkImg.alt = link.alt;
    linkImg.classList.add("figure-img");

    linkFigure.appendChild(linkImg);
    linkItem.appendChild(linkFigure);
    links_uteis_body.appendChild(linkItem);
});