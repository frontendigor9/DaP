const tl = gsap.timeline();

tl.fromTo('.agency__title', {
    y: -100,
    opacity: 0,
},
    {
        y: 0,
        opacity: 1,
        duration: 2,
    },
    2
);
tl.fromTo('.agency__descr_photo1', {
    x: -200,
    opacity: 0,
},
    {
        x: 0,
        opacity: 1,
        duration: 1,
    },
    1
);
tl.fromTo('.agency__descr_photo2', {
    y: 200,
    opacity: 0,
},
    {
        y: 0,
        opacity: 1,
        duration: 1,
    },
    2
);
tl.fromTo('.agency__descr_text', {
    x: 200,
    opacity: 0,
},
    {
        x: 0,
        opacity: 1,
        duration: 1,
    },
    1
);
tl.fromTo('.header, .menu__item, .header__logo, .contact__item', {
    y: -50,
    opacity: 0,
},
    {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
    },
    2.5
);
tl.fromTo('.hamburger', {
    x: 200,
    opacity: 0,
},
    {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
    });