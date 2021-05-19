import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./error-404/error-404.component";
import { NavBarComponent } from "./nav-bar/navbar.component";


@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component
    ],
    imports:[
        RouterModule,
        RouterModule.forChild([
            {
                path: '**', component: Error404Component
              }
            ])
    ],
    exports:[
        NavBarComponent
    ]
})
export class CoreModule{

}