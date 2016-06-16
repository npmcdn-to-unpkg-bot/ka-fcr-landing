System.register(['angular2/core', './logger.service'], function(exports_1, context_1) {
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
                            image: "./public/images/fcr-landing-masthead.jpg",
                            alt: "test",
                            title: "Cooking"
                        },
                        banner: {
                            enabled: true,
                            link: 'http://www.kitchenaid.ca/en_CA/new/',
                            image: './public/images/banner.jpg',
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
                                    image: "./public/images/refer-landing-shopping-cart.png",
                                    title: "Buying Guide",
                                    alt: "Buying Guide",
                                    desc: "What to look for when you are buying",
                                    cta: "Click Here",
                                    link: "",
                                    type: "cart",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Cooking Resources",
                                        label: "Cooking Buying Guide"
                                    }
                                },
                                {
                                    image: "./public/images/refer-landing-star.png",
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
                                    image: "./public/images/refer-landing-mag-glass.png",
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
                                    image: "./public/images/more-features-1.jpg",
                                    link: false,
                                    alt: "test",
                                    text: "Separate compartments give you even more cooking options so you can keep dishes warm, slow-cook or bake at temperatures up to 450 degrees.",
                                    cta: ""
                                },
                                {
                                    title: "Wireless Probe",
                                    image: "./public/images/more-features-2.jpg",
                                    link: false,
                                    alt: "Refrigerator interior with assorted foods",
                                    text: "Alerts you when desired food temperatures have been reached so you can walk away from the oven without walking away from control.",
                                    cta: ""
                                },
                                {
                                    title: "SatinGlide<sup>&trade;</sup> Roll-Out Extension Racks",
                                    image: "./public/images/more-features-3.jpg",
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
                                    thumb: './public/images/video-select-1.jpg',
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
                                    thumb: './public/images/video-select-2.jpg',
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
                                    thumb: './public/images/video-select-3.jpg',
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
                                    image: "./public/images/products/Front-Control-Range.png",
                                    thumb: "./public/images/products/Front-Control-Range-sml.png",
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
                                    image: "./public/images/products/Rear-Control-Range.png",
                                    thumb: "./public/images/products/Rear-Control-Range-sml.png",
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
                                    image: "./public/images/products/Double-Oven-Range.png",
                                    thumb: "./public/images/products/Double-Oven-Range-sml.png",
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
                                    image: "./public/images/products/Wall-Oven.png",
                                    thumb: "./public/images/products/Wall-Oven-sml.png",
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
                                    image: "./public/images/products/cooktop.png",
                                    thumb: "./public/images/products/cooktop-sml.png",
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
                                    image: "./public/images/products/Microwave.png",
                                    thumb: "./public/images/products/Microwave-sml.png",
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
                                    image: "./public/images/products/Warming-Drawer.png",
                                    thumb: "./public/images/products/Warming-Drawer-sml.png",
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
                                    image: "./public/images/products/Hood.png",
                                    thumb: "./public/images/products/Hood-sml.png",
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
                            image: "./public/images/refer-landing-masthead-fr.jpg",
                            alt: "test",
                            title: "Lave-vaisselle"
                        },
                        banner: {
                            enabled: true,
                            link: 'http://www.kitchenaid.ca/fr_CA/new/',
                            image: './public/images/banner.jpg',
                            ctaText: 'En savoir plus',
                            analytics: {
                                category: "@category",
                                action: "Clicked Dish-Footer Banner",
                                label: "VBL-Learn More"
                            }
                        },
                        features: {
                            enabled: true,
                            features: [
                                {
                                    image: "./public/images/refer-landing-shopping-cart.png",
                                    title: "Guide D’achat",
                                    alt: "Guide D’achat",
                                    desc: "Éléments à considérer lorsque vous magasinez",
                                    cta: "Cliquez ici",
                                    link: "https://www.google.ca/webhp?hl=en#hl=en&q=placeholder",
                                    type: "cart",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Dish Resources",
                                        label: "Dish Buying Guide"
                                    }
                                },
                                {
                                    image: "./public/images/refer-landing-star.png",
                                    title: "Évaluation et Commentaires",
                                    alt: "Évaluation et Commentaires",
                                    desc: "Découvrez ce que nos clients en disent",
                                    cta: "Cliquez ici",
                                    link: "http://www.kitchenaid.ca/fr_CA/2_2_89/global_best-products.content.html",
                                    type: "star",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Dish Resources",
                                        label: "Dish Ratings & Reviews"
                                    }
                                },
                                {
                                    image: "./public/images/refer-landing-mag-glass.png",
                                    title: "Trouver Mon Kitchenaid",
                                    alt: "Trouver Mon Kitchenaid",
                                    desc: "Vous avez besoin d'aide pour trouver le lave-vaisselle qui vous convient?",
                                    cta: "Cliquez ici",
                                    link: "http://trouvermon.kitchenaid.ca/#/question/Appliance",
                                    type: "magnifier",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Dish Resources",
                                        label: "Dish Find Your KAD"
                                    }
                                }
                            ]
                        },
                        morefeatures: {
                            enabled: true,
                            title: "Plus de fonctions fraîcheur",
                            features: [
                                {
                                    title: "Système de lavage à l'eau propre",
                                    image: "./public/images/more-features-1.jpg",
                                    link: false,
                                    alt: "test",
                                    text: "Filtre continuellement l'eau de lavage pour des résultats impeccables. Par ailleurs, il n'est plus nécessaire de retirer et nettoyer le filtre grâce à sa conception innovante.",
                                    cta: ""
                                },
                                {
                                    title: "Gicleur pour bouteilles",
                                    image: "./public/images/more-features-2.jpg",
                                    link: false,
                                    alt: "test",
                                    text: "Les buses spécifiques et réglables sont conçues pour les verres hauts et les bouteilles et procurent une pulvérisation puissante dans les endroits difficiles à atteindre.",
                                    cta: ""
                                },
                                {
                                    title: "Système perfectionné ProDry<sup>&trade;</sup>",
                                    image: "./public/images/more-features-3.jpg",
                                    link: false,
                                    alt: "test",
                                    text: "La meilleure performance de séchage sans agent de rinçage, grâce à un système innovant qui élimine l'humidité de la cuve et permet d'obtenir des assiettes parfaitement sèches à la fin de chaque programme.",
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
                                    thumb: './public/images/video-select-1.jpg',
                                    title: 'A Revolutionary Mark On A Revolutionary New Line | The KitchenAid<sup>&reg;</sup> Medallion(fr)',
                                    ctaTitle: 'Conception',
                                    alt: 'test',
                                    cta: 'Voir la video',
                                    desc: 'Voici le médaillon KitchenAid®, notre emblème de finition présent sur tous nos nouveaux électroménagers révolutionnaires, qu\'il s\'agisse de réfrigérateurs, fours encastrés, lave-vaisselle, fours à micro-ondes ou cuisinières. C\'est une marque qui indique que vous cuisinez avec une série d\'électroménagers de gamme supérieure, inspirés par des chefs.',
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Dish-Designed to Inspire Media",
                                        label: "Dish Design Video"
                                    }
                                },
                                {
                                    id: 'Jnosm33VWtE',
                                    thumb: './public/images/video-select-2.jpg',
                                    title: 'Bras Gicleurs Dynamiques Révolutionnaires | KitchenAid<sup>&reg;</sup>',
                                    ctaTitle: 'Bras Gicleurs Dynamiques',
                                    alt: 'test',
                                    cta: 'Voir la video',
                                    desc: 'Découvrez notre nouvelle gamme de lave-vaisselle dotés des bras gicleurs dynamiques révolutionnaires. Ils projettent de l\'eau dans toutes les directions, offrant un nettoyage efficace au moindre recoin de votre vaisselle.Voici donc un souci de moins et plus de temps pour démarrer votre prochaine création culinaire.',
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Dish-Designed to Inspire Media",
                                        label: "Dish Dynamic Wash Arms Video"
                                    }
                                },
                                {
                                    id: 'wwpCbQn2s4c',
                                    thumb: './public/images/video-select-3.jpg',
                                    title: 'Dishwasher with ProScrub<sup>&trade;</sup> Option | KitchenAid<sup>&reg;</sup>(fr)',
                                    ctaTitle: 'Proscrub<sup>&trade;</sup>',
                                    alt: 'test',
                                    cta: 'Voir la video',
                                    desc: 'Plus besoin de prélaver, faire tremper ni récurer. Placez vos casseroles et poêles directement dans le lave-vaisselle, peu importe leur niveau de saleté.',
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Dish-Designed to Inspire Media",
                                        label: "Dish Proscrub Video"
                                    }
                                }
                            ]
                        },
                        productselector: {
                            enabled: true,
                            title: 'Choisissez votre style',
                            nav: {
                                text: 'Voir tout',
                                link: 'http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/refrigerators-3/102310048/',
                                analytics: {
                                    category: "@category",
                                    action: "Clicked Choose Your Dish Style",
                                    label: "See All Dish"
                                }
                            },
                            products: [
                                {
                                    image: "./public/images/products/window.png",
                                    title: "Dishwasher<br/>With Window(fr)",
                                    alt: "test",
                                    desc: "Introducing an innovative new design, this dishwasher with window is a great aesthetic enhancement to your kitchen and allows you see when your dishes are done so you can move on to what’s next.(fr)",
                                    link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/dishwashers-3/102310014+105000792/",
                                    id: "dish-with-window",
                                    ctaText: "En savoir plus",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Dish Style",
                                        label: "Four-door",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "./public/images/products/top-control.png",
                                    title: "Fully Integrated(fr)",
                                    alt: "test",
                                    desc: "The controls are discreetly placed at the top of the dishwasher and remain hidden when the door is closed to provide a sleek and clean looking front. The sleek bar handle perfectly complements the design and provides easy access to open your dishwasher.(fr)",
                                    link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/dishwashers-3/102310014+105000265/",
                                    id: "fully-integrated",
                                    ctaText: "En savoir plus",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Dish Style",
                                        label: "Fully Integrated Dish",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "./public/images/products/front-control.png",
                                    title: "Front Control(fr)",
                                    alt: "test",
                                    desc: "The controls are located on the front and are easily accessible for use after you load your dishes. This model also comes with a pocket handle for a smoother finish and is great for smaller kitchens to allow for more space flexibility in front of the dishwasher.(fr)",
                                    link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/dishwashers-3/102310014+105000266/",
                                    id: "front-control",
                                    ctaText: "En savoir plus",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Dish Style",
                                        label: "Front Control Dish",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "./public/images/products/panel-ready.png",
                                    title: "Panel Ready(fr)",
                                    alt: "test",
                                    desc: "The premium look to go with your dream kitchen. Custom panel-ready dishwashers have an unfinished door, so you can seamlessly match the custom panel to your cabinetry to give your kitchen a stylish and coordinated look.(fr)",
                                    link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/dishwashers-3/102310014+4294967137/",
                                    id: "panel-ready",
                                    ctaText: "En savoir plus",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Dish Style",
                                        label: "Panel Ready Dish",
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