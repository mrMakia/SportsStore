import { Directive, TemplateRef, SimpleChanges, ViewContainerRef } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[counterOf]'
})

export class CounterDirective {
    constructor(private container: ViewContainerRef,
    private template: TemplateRef<Object>) {

    }

    // tslint:disable-next-line:no-input-rename
    @Input('counterOf')
    counter: number;

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnChanges(changes: SimpleChanges) {
        this.container.clear();
        for (let i = 0; i < this.container.length; i++) {
            this.container.createEmbeddedView(this.template,
            new CointerDirectiveContext(i + 1));
        }
    }
}

class CointerDirectiveContext {
    constructor(public $implicit: any) {}
}
