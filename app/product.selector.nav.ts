import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {AppDataService} from './services/appdata.service'
import {AnalyticsServiceOn} from './analytics.directive'

@Component({
    selector: 'product-selector-nav',
    template: `
    	<div class="row {{!enabled ? 'hide' : ''}}">
			<div class="ka-dish-landing-product {{selectedProduct.prodId == product.prodId ? 'selected' : ''}}" *ngFor="#product of products; #i = index" analyticsOn="click" analyticsCategory="{{product.analytics.category}}" analyticsAction="{{product.analytics.action}}" analyticsLabel="{{product.analytics.label}}" (click)="select(product)">
				<img src="{{product.prodImage}}"/>
				<div class="ka-dish-landing-button"><p [innerHTML]="product.prodName"></p></div>
			</div>
			<!--  <a target="_blank" href="{{ctaLink}}" analyticsOn="click" analyticsCategory="{{analytics.category}}" analyticsAction="{{analytics.action}}" analyticsLabel="{{analytics.label}}">
			<div class="see-all">
				<p>{{ctaText}}</p>
			</div></a> -->
		</div>
    `,
    directives: [AnalyticsServiceOn]
})

export class ProductSelectorNav {
	@Input() products
	@Input() selectedProduct
	@Output() productSelected = new EventEmitter()
	private ctaText: string
	private ctaLink: string
	private enabled: boolean
	private analytics: Object

	constructor(private appdata: AppDataService) {
		this.enabled = true
		var data = appdata.get()

		this.enabled = data.productselector.enabled
		this.ctaText = data.productselector.nav.text
		this.ctaLink = data.productselector.nav.link
		this.analytics = data.productselector.nav.analytics
	}

	select(product) {
		this.productSelected.emit(product)
	}
}