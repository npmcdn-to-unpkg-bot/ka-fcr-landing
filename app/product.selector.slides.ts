import {Component, Input, Output, Inject, ElementRef, EventEmitter} from 'angular2/core'
import {ProductSlide} from './product.selector.slide'
import {ProductModel} from './models/products.model'
import {LoggerService} from './services/logger.service'
import {BreakpointService} from './services/breakpoint.service'

declare var $: JQueryStatic;

@Component({
    selector: 'product-slides',
    template: `
      <div class="row">
          <product-slide class="{{selectedProduct.prodId == product.prodId ? 'selected' : ''}}" *ngFor="#product of products; #i=index" [selected]="selectedProduct.prodId == product.prodId" [fridge]= "product.prodImage" [fridgeTitle]= "product.prodName" [fridgeDescription]="product.prodDescription" [fridgeUrl]="product.prodUrl" [fridgeAlt]="product.prodAlt" [fridgeId]="product.prodId" [ctaText]="product.ctaText" [analytics]="product.analytics">

          </product-slide>
      </div>
    `,
    directives: [ProductSlide]
})
export class ProductSlides {
    @Input() products;
    @Input() selectedProduct;
    @Output() isAnimating = new EventEmitter();

    private breakpointChanged

    private rootElement;
    private elementRef: ElementRef;
    private _animating: boolean;

    private imageTop;
    private titleTop;
    private descTop;
    private learnTop;

    set animating(a:boolean) {
        if (this._animating != a) {
            this._animating = a
            this.isAnimating.emit(a)
        }
    }

    public constructor(@Inject(ElementRef) elementRef: ElementRef, private logger: LoggerService, private breakpoint: BreakpointService) {
        this.elementRef = elementRef
        this.animating = false
        this.imageTop = 164;
        this.titleTop = 170;
        this.descTop = 238;
        this.learnTop = 500;
        this.breakpointChanged = this.breakpoint.event$.subscribe(
          breakpoint => this.onBreakpointChange(breakpoint)
        )
    }

    private onBreakpointChange(evt) {
      var target = this.selectedProduct.prodId
      this.playIn(this, true, target)
    }

     private ngAfterViewInit() {
          this.rootElement = $(this.elementRef.nativeElement)
          var target = this.selectedProduct.prodId
          this.playIn(this,true,target)
      }

      private ngOnChanges(changes) {
          var self = this
          if ("selectedProduct" in changes && !this.animating) {
            if ('prodId' in changes.selectedProduct.previousValue) {
              this.playOut(changes.selectedProduct.previousValue.prodId, function() {

                //just get it done
                if (changes.selectedProduct.currentValue.prodId == 'under-counter' && $('product-selector').hasClass('fr') && $(window).innerWidth() > 820) {
                  self.descTop = 265;
                } else {
                  self.descTop = 238;
                }

                self.playIn(self, false, changes.selectedProduct.currentValue.prodId)
              })
            } else {
              self.playIn(self, false, changes.selectedProduct.currentValue.prodId)
            }
          }
      }

      public playOut(target, cb) {
          var self = this
          target = $(this.rootElement).find('#'+target)

          var image = ($(target).find('.rl-ka-lndng-fridge'))
          var title = ($(target).find('.rl-ka-lndng-fridge-title'))
          var desc = ($(target).find('.rl-ka-lndng-fridge-desc'))
          var learn = ($(target).find('learn-more-button'))

          this.animating = true;

          TweenMax.to(image, .3, { delay: 0, opacity: 0, ease: Power3.easeOut });
          TweenMax.to(title, .3, { delay: 0, opacity: 0, ease: Power3.easeOut });
          TweenMax.to(desc, .3, { delay: 0, opacity: 0, ease: Power3.easeOut });
          TweenMax.to(learn, .3, { delay: 0, opacity: 0, ease: Power3.easeOut, onComplete: function() {
              TweenMax.to(target, 0, { delay: 0, opacity: 0 });
              console.log(target)
              target.css('display', 'none');
              cb()
          }});
      }

      public playIn(self, delay = true, target) {
        if (!self) self = this
        target = $(self.rootElement).find('#' + target)
        target.css('display', 'inline-block');
        $(self.rootElement).find('product-slide').css('zIndex', 1)
        $(target).parent().css('zIndex', 2)
        // Required for smooth transition
        $('product-slides').css('height', $('.selected').css('height'));

        var image = ($(target).find('.rl-ka-lndng-fridge'))
        var title = ($(target).find('.rl-ka-lndng-fridge-title'))
        var desc = ($(target).find('.rl-ka-lndng-fridge-desc'))
        var learn = ($(target).find('learn-more-button'))

        var isMobile = $(window).innerWidth() <= 820

        TweenMax.to(target, 0, { delay: 0.1, opacity: 1 });

        if (delay) {
          if (isMobile) {
            TweenMax.to(image, 1.5, { delay: .6,  opacity: 1, ease: Power1.easeOut });
            TweenMax.to(title, 1.5, { delay: .9,  opacity: 1, ease: Power1.easeOut });
            TweenMax.to(desc, 1.5, { delay: 1.2,  opacity: 1, ease: Power1.easeOut });
            TweenMax.to(learn, 1.5, {
              delay: 1.2,  opacity: 1, ease: Power1.easeOut, onComplete: function() {
                self.animating = false;
              }
            });
          } else {
            TweenMax.to(image, 1.5, { delay: .6,  opacity: 1, ease: Power1.easeOut });
            TweenMax.to(title, 1.5, { delay: .9,  opacity: 1, ease: Power1.easeOut });
            TweenMax.to(desc, 1.5, { delay: 1.2,  opacity: 1, ease: Power1.easeOut });
            TweenMax.to(learn, 1.5, {
              delay: 1.2,  opacity: 1, ease: Power1.easeOut, onComplete: function() {
                self.animating = false;
              }
            });
          }
        } else {
          if (isMobile) {
            TweenMax.to(image, 1.5, { delay: .5,  opacity: 1, ease: Power1.easeOut });
            TweenMax.to(title, 1.5, { delay: 0.7,  opacity: 1, ease: Power1.easeOut });
            TweenMax.to(desc, 1.5, { delay: 0.9,  opacity: 1, ease: Power1.easeOut });
            TweenMax.to(learn, 1.5, {
              delay: 0.9,  opacity: 1, ease: Power1.easeOut, onComplete: function() {
                self.animating = false;
              }
            });
          } else {
            TweenMax.to(image, 1.5, { delay: .6,  opacity: 1, ease: Power1.easeOut });
            TweenMax.to(title, 1.5, { delay: .9,  opacity: 1, ease: Power1.easeOut });
            TweenMax.to(desc, 1.5, { delay: 1.2,  opacity: 1, ease: Power1.easeOut });
            TweenMax.to(learn, 1.5, {
              delay: 1.2,  opacity: 1, ease: Power1.easeOut, onComplete: function() {
                self.animating = false;
              }
            });
          }
        }
      }
}