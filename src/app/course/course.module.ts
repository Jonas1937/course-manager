import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReplacePipeModule } from "src/shared/pipe/pipe.module";
import { StarModule } from "src/shared/star/star.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.components";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        StarModule,
        ReplacePipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            } 
        ])
    ]
})
export class CourseModule{

}