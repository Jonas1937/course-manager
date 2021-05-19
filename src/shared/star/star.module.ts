import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { starComponents } from "./start.component";

@NgModule({
    declarations:[
        starComponents
    ],
    imports:[
        
        CommonModule
    ],
    exports:[
        starComponents
    ]
})
export class StarModule{
    
}