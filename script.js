const tabs = document.querySelector('.tab');
const tabsBtn = tabs.querySelectorAll('.swiper-slide.tab__link');
const tabsContent = document.querySelectorAll('.tab__item');

tabsBtn.forEach(el => {el.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.closest('.tab__link')) {
        let target= e.target.closest('.tab__link');
        var activeTab = target.getAttribute("data-tab");
        tabsBtn.forEach(el => {
            el.classList.remove("tab__link_active");
        });
        target.classList.add('tab__link_active');
        tabsHandler(activeTab);
    }
});
});

const tabsHandler = (path) => {
    tabsContent.forEach(el => {
        el.classList.remove('tab__item_active')
    });
    document.querySelector(`[data-tab-target="${path}"]`).classList.add('tab__item_active');
};

const swiper = new Swiper('.swiper', {
    loop: false,
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 5,

    breakpoints: {
      688: {
        slidesPerView: 5,
        spaceBetween: 7
      }
    },

    navigation: {
      nextEl: '.tab__links-button_next',
      prevEl: '.tab__links-button_prev',
    }

  });

  const swiperBanner = new Swiper('.swiper-banner', {
    loop: false,
    speed: 400,
    slidesPerView: 3,

    breakpoints: {
      688: {
        slidesPerView: 5
      },

      868: {
        slidesPerView: 6
      }
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }

  });

  const swiperGoods = new Swiper('.swiper-goods', {
    loop: false,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 0,

    breakpoints: {
      948: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    },

    navigation: {
      nextEl: '.slider-button_next',
      prevEl: '.slider-button_prev',
    }

  });
