System.register(['angular2/core', './logger.service.js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, logger_service_1;
    var AppDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            AppDataService = (function () {
                function AppDataService(logger) {
                    this.logger = logger;
                    this.language = this.getLanguage();
                    this.contents = {};
                    this.contents.en = {
                        masthead: {
                            enabled: true,
                            image: "/images/ka-fcr-landing/fcr-landing-masthead.jpg",
                            alt: "test",
                            title: "Cooking"
                        },
                        banner: {
                            enabled: true,
                            link: 'http://www.kitchenaid.ca/en_CA/new/',
                            image: '/images/ka-fcr-landing/banner.jpg',
                            ctaText: 'Learn More',
                            analytics: {
                                category: "@category",
                                action: "Clicked Cooking-Footer Banner",
                                label: "VBL-Learn More"
                            }
                        },
                        features: {
                            enabled: true,
                            features: [
                                {
                                    image: "/images/ka-fcr-landing/refer-landing-shopping-cart.png",
                                    title: "Buying Guide",
                                    alt: "Buying Guide",
                                    desc: "What to look for when you are buying",
                                    cta: "Click Here",
                                    link: "#",
                                    type: "cart",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Cooking Resources",
                                        label: "Cooking Buying Guide"
                                    }
                                },
                                {
                                    image: "/images/ka-fcr-landing/refer-landing-star.png",
                                    title: "Ratings & Reviews",
                                    alt: "Ratings and reviews",
                                    desc: "See what others are saying",
                                    cta: "Click Here",
                                    link: "http://www.kitchenaid.ca/en_CA/2_2_89/global_best-products.content.html#ranges",
                                    type: "star",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Cooking Resources",
                                        label: "Cooking Ratings & Reviews"
                                    }
                                },
                                {
                                    image: "/images/ka-fcr-landing/refer-landing-mag-glass.png",
                                    title: "Find Your KitchenAid",
                                    alt: "Find your KitchenAid",
                                    desc: "Need help finding your cooking appliances?",
                                    cta: "Click Here",
                                    link: "http://findmy.kitchenaid.ca/#/question/Appliance",
                                    type: "magnifier",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Cooking Resources",
                                        label: "Cooking Find Your KAD"
                                    }
                                }
                            ]
                        },
                        morefeatures: {
                            enabled: true,
                            title: "More Fresh Features",
                            features: [
                                {
                                    title: "Baking Drawer",
                                    image: "/images/ka-fcr-landing/more-features-1.jpg",
                                    link: false,
                                    alt: "test",
                                    text: "Separate compartments give you even more cooking options so you can keep dishes warm, slow-cook or bake at temperatures up to 450 degrees.",
                                    cta: ""
                                },
                                {
                                    title: "Wireless Probe",
                                    image: "/images/ka-fcr-landing/more-features-2.jpg",
                                    link: false,
                                    alt: "Refrigerator interior with assorted foods",
                                    text: "Alerts you when desired food temperatures have been reached so you can walk away from the oven without walking away from control.",
                                    cta: ""
                                },
                                {
                                    title: "SatinGlide<sup>&trade;</sup> Roll-Out Extension Racks",
                                    image: "/images/ka-fcr-landing/more-features-3.jpg",
                                    link: false,
                                    alt: "Opened bottom freezer",
                                    text: "Allows easy roll out for loading and unloading, and features an easy-grip handle, so you can confidently cook with large or heavy dishes.",
                                    cta: ""
                                }
                            ]
                        },
                        videoplayer: {
                            enabled: true,
                            title: "Designed To Inspire",
                            videos: [
                                {
                                    id: '1AZPb80TNdc',
                                    thumb: '/images/ka-fcr-landing/video-select-1.jpg',
                                    title: 'A Revolutionary Mark On A Revolutionary New Line | The KitchenAid<sup>&reg;</sup> Medallion',
                                    ctaTitle: 'Design',
                                    alt: 'test',
                                    cta: 'Play Video',
                                    desc: 'Behold the KitchenAid<sup>®</sup> Medallion, the iconic finishing stamp on all of our revolutionary new refrigerators, wall-ovens, dishwashers, microwaves and ranges. It’s a mark that lets you know you’re cooking with a suite of chef-inspired, premium appliances.',
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Cooking-Designed to Inspire Media",
                                        label: "Cooking Design Video"
                                    }
                                },
                                {
                                    id: 'b5hsu0aa4mw',
                                    thumb: '/images/ka-fcr-landing/video-select-2.jpg',
                                    title: 'KitchenAid<sup>&reg;</sup> Even-Heat<sup>&trade;</sup> True Convection Oven',
                                    ctaTitle: 'Even Heat',
                                    alt: 'test',
                                    cta: 'Play Video',
                                    desc: 'Produces flawless results. The unique bow-tie design and convection fan ensure the inside of the oven is heated to, and stays at, the perfect temperature.',
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Cooking-Designed to Inspire Media",
                                        label: "Cooking Dynamic Wash Arms Video"
                                    }
                                },
                                {
                                    id: 'OjrrwhNKwsY',
                                    thumb: '/images/ka-fcr-landing/video-select-3.jpg',
                                    title: 'Front Control Range with Steam Rack',
                                    ctaTitle: 'Steam Rack',
                                    alt: 'test',
                                    cta: 'Play Video',
                                    desc: 'Make delicious, healthy meals with the Steam Rack in our Front Control Range. This specialized rack allows you to add a precise amount of moisture so you can cook with steam and seal in more flavor.',
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Cooking-Designed to Inspire Media",
                                        label: "Cooking Proscrub Video"
                                    }
                                }
                            ]
                        },
                        productselector: {
                            enabled: true,
                            title: 'Choose your style',
                            nav: {
                                text: 'See All',
                                link: 'http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048/',
                                analytics: {
                                    category: "@category",
                                    action: "Clicked Choose Your Dish Style",
                                    label: "See All Cooking"
                                }
                            },
                            products: [
                                {
                                    image: "/images/ka-fcr-landing/products/Front-Control-Range.png",
                                    thumb: "/images/ka-fcr-landing/products/Front-Control-Range-sml.png",
                                    title: "Front Control Ranges",
                                    alt: "Front Control Ranges",
                                    desc: "Up front controls give you easy access that fits seamlessly with finished sides. This range has no back panel so you can showcase a beautiful backsplash. Also available in Induction, Gas, Electric, Dual Fuel and Commercial sizes.",
                                    link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/ranges-3/102310042+10000152/",
                                    id: "front-control-range",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Cooking Style",
                                        label: "Front-Control-Ranges",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "/images/ka-fcr-landing/products/Rear-Control-Range.png",
                                    thumb: "/images/ka-fcr-landing/products/Rear-Control-Range-sml.png",
                                    title: "Rear Control Ranges",
                                    alt: "Rear Control Ranges",
                                    desc: "With temperature controls on the back, this classic style offers stylish flexibility. It can fit between countertops, at the end of a cabinet, or on its own. These can be found across many price points, fitting nicely into any budget.",
                                    link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/ranges-3/102310042+4294966120/",
                                    id: "rear-control-range",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Cooking Style",
                                        label: "Rear-Control-Ranges",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "/images/ka-fcr-landing/products/Double-Oven-Range.png",
                                    thumb: "/images/ka-fcr-landing/products/Double-Oven-Range-sml.png",
                                    title: "Double Oven Ranges",
                                    alt: "Double Oven Ranges",
                                    desc: "Double-Oven Ranges offer versatility. The small oven can be used for day-to-day cooking and the large oven for holiday meals. Plus, you can bake and cook at the same time, the perfect pair for any feast.",
                                    link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/ranges-3/102310042+10000151/",
                                    id: "double-oven-ranges",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Cooking Style",
                                        label: "Double-Oven-Ranges",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "/images/ka-fcr-landing/products/Wall-Oven.png",
                                    thumb: "/images/ka-fcr-landing/products/Wall-Oven-sml.png",
                                    title: "Wall<br>Ovens",
                                    alt: "Wall Ovens",
                                    desc: "Built-in wall ovens offer more flexibility for kitchen layout. Usually installed at chest height, it makes heavy dishes easier to reach and transfer to the counter. Options include Single Oven, Double Oven, and Microwave Combination.",
                                    link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/wall-ovens-3/102310003/",
                                    id: "wall-oven",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Cooking Style",
                                        label: "Wall-Ovens",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "/images/ka-fcr-landing/products/cooktop.png",
                                    thumb: "/images/ka-fcr-landing/products/cooktop-sml.png",
                                    title: "Cooktops",
                                    alt: "Cooktops",
                                    desc: "Cooktops are capable of boiling, simmering and frying while laying flat and looking sleek in every kitchen. These can be built into a counter or an island. Available in Gas, Electric and Induction.",
                                    link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/cooktops-3/102310008/",
                                    id: "cooktop",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Cooking Style",
                                        label: "Cooktops",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "/images/ka-fcr-landing/products/Microwave.png",
                                    thumb: "/images/ka-fcr-landing/products/Microwave-sml.png",
                                    title: "Microwaves",
                                    alt: "Microwaves",
                                    desc: "For toasty breads and beautifully browned meats, the Convection Microwave feature evenly circulates hot air over the food. Available in Built-in Microwaves, Over-the-range Microwaves, and Countertops.",
                                    link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/microwaves-3/102310037/",
                                    id: "microwave",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Cooking Style",
                                        label: "Microwaves",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "/images/ka-fcr-landing/products/Warming-Drawer.png",
                                    thumb: "/images/ka-fcr-landing/products/Warming-Drawer-sml.png",
                                    title: "Warming<br>Drawers",
                                    alt: "Warming Drawers",
                                    desc: "Usually paired with Built-in ovens, Warming Drawers come with low heat and temperature sensors, allowing you to keep your food hot until it’s time to serve.",
                                    link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/warming-drawers-3/102310057/",
                                    id: "warming-drawer",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Cooking Style",
                                        label: "Warming-Drawers",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "/images/ka-fcr-landing/products/Hood.png",
                                    thumb: "/images/ka-fcr-landing/products/Hood-sml.png",
                                    title: "Hoods<br>and Vents",
                                    alt: "Hoods",
                                    desc: "Finally, kitchen ventilation with style. Many styles offer lighting so you can easily see the masterpiece in the making. Available in Under Cabinet, Island, and Wall Mounted range hoods.",
                                    link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/hoods-and-vents-3/102310029/",
                                    id: "hoods",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Cooking Style",
                                        label: "Hoods",
                                        learnMore: 'Learn More'
                                    }
                                }
                            ]
                        }
                    };
                    this.contents.fr = {
                        masthead: {
                            enabled: true,
                            image: "/images/ka-fcr-landing/fcr-landing-masthead.jpg",
                            alt: "Cuisine",
                            title: "Cuisine"
                        },
                        banner: {
                            enabled: true,
                            link: 'http://www.kitchenaid.ca/fr_CA/new/',
                            image: '/images/ka-fcr-landing/banner_fr.jpg',
                            ctaText: 'En savoir plus',
                            analytics: {
                                category: "@category",
                                action: "Clicked Cooking Resources",
                                label: "Cooking Buying Guide"
                            }
                        },
                        features: {
                            enabled: true,
                            features: [
                                {
                                    image: "/images/ka-fcr-landing/refer-landing-shopping-cart.png",
                                    title: "Guide D’achat",
                                    alt: "Guide D’achat",
                                    desc: "Éléments à considérer lorsque vous magasinez",
                                    cta: "Cliquez ici",
                                    link: "#",
                                    type: "cart",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Dish Resources",
                                        label: "Dish Buying Guide"
                                    }
                                },
                                {
                                    image: "/images/ka-fcr-landing/refer-landing-star.png",
                                    title: "Évaluation et Commentaires",
                                    alt: "Évaluation et Commentaires",
                                    desc: "Découvrez ce que nos clients en disent",
                                    cta: "Cliquez ici",
                                    link: "http://www.kitchenaid.ca/fr_CA/2_2_89/global_best-products.content.html",
                                    type: "star",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Cooking Resources",
                                        label: "Cooking Ratings & Reviews"
                                    }
                                },
                                {
                                    image: "/images/ka-fcr-landing/refer-landing-mag-glass.png",
                                    title: "Trouver Mon Électroménager",
                                    alt: "Trouver Mon Électroménager",
                                    desc: "Vous avez besoin d'aide pour trouver votre électroménager de cuisine?",
                                    cta: "Cliquez ici",
                                    link: "http://trouvermon.kitchenaid.ca/#/question/Appliance",
                                    type: "magnifier",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Cooking Resources",
                                        label: "Cooking Find Your KAD"
                                    }
                                }
                            ]
                        },
                        morefeatures: {
                            enabled: true,
                            title: "Plus de fonctions fraîcheur",
                            features: [
                                {
                                    title: "Tiroir de cuisson",
                                    image: "/images/ka-fcr-landing/more-features-1.jpg",
                                    link: false,
                                    alt: "test",
                                    text: "Ce compartiment séparé vous offre davantage d'options de cuisson, vous pouvez ainsi garder vos plats au chaud, faire mijoter ou bien cuire jusqu'à une température de 450 degrés.",
                                    cta: ""
                                },
                                {
                                    title: "Sonde sans fil",
                                    image: "/images/ka-fcr-landing/more-features-2.jpg",
                                    link: false,
                                    alt: "test",
                                    text: "Elle vous indique lorsque la température de cuisson voulue est atteinte. Vous pouvez ainsi vous éloigner du four sans perdre le contrôle.",
                                    cta: ""
                                },
                                {
                                    title: "Grilles coulissantes sur glissières  SatinGlide<sup>&trade;</sup>",
                                    image: "/images/ka-fcr-landing/more-features-3.jpg",
                                    link: false,
                                    alt: "test",
                                    text: "Un glissement en douceur permet un chargement et déchargement convivial des plats. La grille comprend aussi une poignée ergonomique, vous pouvez ainsi utiliser en toute confiance des plats plus grands ou plus lourds.",
                                    cta: ""
                                }
                            ]
                        },
                        videoplayer: {
                            enabled: true,
                            title: "Conçu pour Inspirer",
                            videos: [
                                {
                                    id: '1AZPb80TNdc',
                                    thumb: '/images/ka-fcr-landing/video-select-1.jpg',
                                    title: 'Un Emblème Révolutionnaire Pour Une Nouvelle Gamme Révolutionnaire',
                                    ctaTitle: 'Conception',
                                    alt: 'test',
                                    cta: 'Voir la video',
                                    desc: 'Voici le médaillon KitchenAid®, le sceau de finition emblématique de tous no nouveaux réfrigérateurs, fours muraux, lave-vaisselle, fours à micro-ondes et cuisinières révolutionnaires. Ce symbole vous indique que vous cuisinez avec des électroménagers de qualité supérieure inspirés par des chefs.',
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Cooking-Designed to Inspire Media",
                                        label: "Cooking Design Video"
                                    }
                                },
                                {
                                    id: 'Jnosm33VWtE',
                                    thumb: '/images/ka-fcr-landing/video-select-2.jpg',
                                    title: 'Four à Convection Véritable Even-Heat&trade; de KitchenAid&restrict;',
                                    ctaTitle: 'Chaleur Uniforme',
                                    alt: 'test',
                                    cta: 'Voir la video',
                                    desc: 'Procure des résultats sans faille. La conception unique en nœud papillon et le ventilateur à convection assurent que l\'intérieur du four chauffe et demeure à la température idéale.',
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Cooking-Designed to Inspire Media",
                                        label: "Cooking Dynamic Wash Arms Video"
                                    }
                                },
                                {
                                    id: 'wwpCbQn2s4c',
                                    thumb: '/images/ka-fcr-landing/video-select-3.jpg',
                                    title: 'Commandes Frontales avec Bac Pour Cuisson à Vapeur',
                                    ctaTitle: 'Grille Pour Cuisson à Vapeur',
                                    alt: 'test',
                                    cta: 'Voir la video',
                                    desc: 'Réalisez des repas délicieux et sains grâce au bac pour cuisson à vapeur de notre cuisinière à commandes frontales. Ce bac spécial vous permet de rajouter un niveau précis d\'humidité, pour cuire à la vapeur et sceller les saveurs.',
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Cooking-Designed to Inspire Media",
                                        label: "Cooking Proscrub Video"
                                    }
                                }
                            ]
                        },
                        productselector: {
                            enabled: true,
                            title: 'Choose your style',
                            nav: {
                                text: 'See All',
                                link: 'http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048/',
                                analytics: {
                                    category: "@category",
                                    action: "Clicked Choose Your Dish Style",
                                    label: "See All Cooking"
                                }
                            },
                            products: [
                                {
                                    image: "/images/ka-fcr-landing/products/Front-Control-Range.png",
                                    thumb: "/images/ka-fcr-landing/products/Front-Control-Range-sml.png",
                                    title: "Cuisinières à Commandes Frontales",
                                    alt: "Front Control Ranges",
                                    desc: "Les commandes frontales sont faciles d'accès, et grâce aux parois finies, ces modèles s'agencent harmonieusement à toute cuisine. Sans panneau arrière, ils mettent en valeur  le dosseret de votre cuisine. Ces cuisinières sont offertes en modèle à induction, au gaz, électrique, bicombustible et commercial.",
                                    link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/ranges-3/102310042+10000152/",
                                    id: "front-control-range",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Cooking Style",
                                        label: "Front-Control-Ranges",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "/images/ka-fcr-landing/products/Rear-Control-Range.png",
                                    thumb: "/images/ka-fcr-landing/products/Rear-Control-Range-sml.png",
                                    title: "Cuisinières à Commandes Arrière",
                                    alt: "Cuisinières à Commandes Arrière",
                                    desc: "Ce style classique offre une grande polyvalence, avec des commandes sur le panneau arrière. Ces cuisinières peuvent être installées entre les comptoirs, au bout d'une armoire ou séparément. Elles sont offertes à des prix variés, pour convenir à tous les budgets.",
                                    link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/ranges-3/102310042+4294966120/",
                                    id: "rear-control-range",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Cooking Style",
                                        label: "Rear-Control-Ranges",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "/images/ka-fcr-landing/products/Double-Oven-Range.png",
                                    thumb: "/images/ka-fcr-landing/products/Double-Oven-Range-sml.png",
                                    title: "Cuisinières à Four Double",
                                    alt: "Cuisinières à Four Double",
                                    desc: "Les cuisinières à four double offrent une grande polyvalence. Le petit four peut être utilisé pour les repas de tous les jours et le grand four pour les repas de fête. Vous pouvez aussi cuire des pâtisseries et faire rôtir en même temps, le duo idéal pour tout festin.",
                                    link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/ranges-3/102310042+10000151/",
                                    id: "double-oven-ranges",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Cooking Style",
                                        label: "Double-Oven-Ranges",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "/images/ka-fcr-landing/products/Wall-Oven.png",
                                    thumb: "/images/ka-fcr-landing/products/Wall-Oven-sml.png",
                                    title: "Fours<br/>Muraux",
                                    alt: "Fours Muraux",
                                    desc: "Les fours muraux encastrés offrent une grande polyvalence dans le choix de disposition de cuisine. Ils sont généralement situés à hauteur de poitrine, les plats lourds sont ainsi faciles à prendre et à transférer sur le comptoir. Choix variés : four mural simple, double, ou combiné avec un four à micro-ondes.",
                                    link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/wall-ovens-3/102310003/",
                                    id: "wall-oven",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Cooking Style",
                                        label: "Wall-Ovens",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "/images/ka-fcr-landing/products/cooktop.png",
                                    thumb: "/images/ka-fcr-landing/products/cooktop-sml.png",
                                    title: "Tables de Cuisson",
                                    alt: "Tables de Cuisson",
                                    desc: "Les tables de cuisson vous permettent de faire bouillir, mijoter et frire en ajoutant une touche d’élégance à votre cuisine. Elles peuvent être installées sur un comptoir ou un îlot et sont au gaz, électriques ou à induction.",
                                    link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/cooktops-3/102310008/",
                                    id: "cooktop",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Cooking Style",
                                        label: "Cooktops",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "/images/ka-fcr-landing/products/Microwave.png",
                                    thumb: "/images/ka-fcr-landing/products/Microwave-sml.png",
                                    title: "Four à Micro-ondes",
                                    alt: "Four à Micro-ondes",
                                    desc: "Le four à micro-ondes à convection fait circuler l'air chaud uniformément autour des aliments. Choix variés : fours à micro-ondes encastrés, à hotte intégrée et de comptoir.",
                                    link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/microwaves-3/102310037/",
                                    id: "microwave",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Cooking Style",
                                        label: "Microwaves",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "/images/ka-fcr-landing/products/Warming-Drawer.png",
                                    thumb: "/images/ka-fcr-landing/products/Warming-Drawer-sml.png",
                                    title: "Tiroirs-Réchauds",
                                    alt: "Tiroirs-Réchauds",
                                    desc: "Allant généralement de pair avec des fours encastrés, les tiroirs-réchauds sont dotés de capteurs de température et procurent une chaleur basse, afin de conserver vos aliments au chaud jusqu'au moment de servir.",
                                    link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/warming-drawers-3/102310057/",
                                    id: "warming-drawer",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Cooking Style",
                                        label: "Warming-Drawers",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "/images/ka-fcr-landing/products/Hood.png",
                                    thumb: "/images/ka-fcr-landing/products/Hood-sml.png",
                                    title: "Hottes",
                                    alt: "Hottes",
                                    desc: "La ventilation de cuisine est enfin offerte en style élégant. De nombreux modèles sont munis d’un éclairage, vous pouvez donc facilement surveiller le progrès de votre cuisson. Choix variés : hotte sous armoire, montée sur îlot ou murale.",
                                    link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/hoods-and-vents-3/102310029/",
                                    id: "hoods",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Cooking Style",
                                        label: "Hoods",
                                        learnMore: 'Learn More'
                                    }
                                }
                            ]
                        }
                    };
                }
                AppDataService.prototype.get = function () {
                    if (!(this.language in this.contents)) {
                        this.logger.error('Language does not exist');
                    }
                    return this.contents[this.language];
                };
                AppDataService.prototype.getLanguage = function () {
                    var url = window.location.href;
                    if (url.indexOf('/fr_CA') > -1)
                        return 'fr';
                    return 'en';
                };
                AppDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], AppDataService);
                return AppDataService;
            }());
            exports_1("AppDataService", AppDataService);
        }
    }
});
//# sourceMappingURL=appdata.service.js.map