export class ProductModel{
    
    constructor(public prodImage:string = "",
                public prodThumb = "",
                public prodName:string = "",
                public prodDescription:string = "",
                public prodUrl:string = "",
                public prodId:string = "",
                public ctaText:string = "",
                public prodAlt:string = "",
                public analytics: Object = {}
                ){}
}