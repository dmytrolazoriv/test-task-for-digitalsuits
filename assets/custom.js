let productListSlider= null; // Initialize the Swiper instance variable

// Function to initialize Swiper slider
function initializeSwiper() {
    if (!productListSlider) {
        const sliderElement = document.querySelector(".product-list__slider");
        const productSliderAttribute = sliderElement.getAttribute("data-product-slider");

        if (productSliderAttribute == "true" && !productListSlider) {
            productListSlider = new Swiper(sliderElement, {
                observer: true,
                watchOverflow: true,
                observeParents: true,
                slidesPerView: 1,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    }
}

// Function to destroy Swiper slider
function destroySwiper() {
    if (productListSlider) {
        productListSlider.destroy();
        productListSlider = null; // Reset the Swiper instance variable
    }
}

// Function to handle screen width change
// Function to handle screen width change
function handleScreenWidthChange() {
    const productSliderAttribute = document.querySelector(".product-list__slider").getAttribute("data-product-slider");
    if (window.innerWidth <= 768 && productSliderAttribute === "true") {
        // Add the class .swiper-wrapper to .product-list__body
        const productBody = document.querySelector(".product-list__body");
        if (productBody) {
            productBody.classList.add("swiper-wrapper");
        }

        // Add the class .swiper-slide to .product-list__card-product.product-card elements
        const productCards = document.querySelectorAll(".product-list__card-product.product-card");
        if (productCards) {
            productCards.forEach((card) => {
                card.classList.add("swiper-slide");
            });
        }

        const swiperPagination = document.querySelector(".swiper-pagination");
        if (swiperPagination) {
            swiperPagination.hidden = false;
        }

        initializeSwiper();
    } else {
        // Remove the class .swiper-wrapper from .product-list__body
        const productBody = document.querySelector(".product-list__body");
        if (productBody) {
            productBody.classList.remove("swiper-wrapper");
        }

        // Remove the class .swiper-slide from .product-list__card-product.product-card elements
        const productCards = document.querySelectorAll(".product-list__card-product.product-card");
        if (productCards) {
            productCards.forEach((card) => {
                card.classList.remove("swiper-slide");
            });
        }

        const swiperPagination = document.querySelector(".swiper-pagination");
        if (swiperPagination) {
            swiperPagination.hidden = true;
        }

        destroySwiper();
    }
}

// Event listener to check the screen width when it changes
window.addEventListener("load", handleScreenWidthChange);
window.addEventListener("resize", handleScreenWidthChange);
window.addEventListener("change", handleScreenWidthChange);

const productsTestimonialsSlider = new Swiper(".products-testimonials__slider", {
    slidesPerView: 'auto',
    // centeredSlides: true,
    spaceBetween: 0,
    // breakpoints: {
    //     // when window width is >= 992px
    //     992: {
    //         slidesPerView: 1,
    //         spaceBetween: 0
    //     },
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".testimonial-card__button_next",
        prevEl: ".testimonial-card__button_prev",
    },
});