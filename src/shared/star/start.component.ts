import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: '../star/star.component.html'
})
export class starComponents implements OnChanges{
   
    @Input()
    rating: number = 0;
   starWidth: number;
    ngOnChanges(): void{
        this.starWidth = this.rating * 94 / 5;
    }
}