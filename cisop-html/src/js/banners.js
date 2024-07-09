const banners = [
    {
        image: "./src/images/banner_image.png",
        desc: "Banner"
    },
    {
        image: "./src/images/banner_image.png",
        desc: "Banner"
    },
    {
        image: "./src/images/banner_image.png",
        desc: "Banner"
    }
]

const mainBanner = document.querySelector('.main-carousel-inner');
const bannerIndicators = document.querySelector('.main-carousel-indicators');

banners.forEach(banner => {
    mainBanner.innerHTML += `
        <div class="carousel-item ${mainBanner.children.length === 0 ? 'active' : ''}">
            <img src="${banner.image}" class="d-block w-100" alt="${banner.desc}">
        </div>
    `;
    bannerIndicators.innerHTML += `
        <button type="button" data-bs-target="#main-carousel" data-bs-slide-to="${bannerIndicators.children.length}" class="${bannerIndicators.children.length === 0 ? 'active' : ''}" aria-current="${bannerIndicators.children.length === 0 ? 'true' : 'false'}" aria-label="Slide ${bannerIndicators.children.length}"></button>
    `;
});