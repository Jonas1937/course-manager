import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: '../course/course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course: course;
    id: number;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){
    }

    ngOnInit() : void{
        this.activatedRoute.params.subscribe(params => {this.id = params['id'];
    });

        console.log(this.activatedRoute.snapshot.params['id']);
        this.courseService.retrieveByID(this.id).subscribe({
           next: course => {
                this.course = course;
            },
            error: err => console.log('Error', err)
        });

    }
    save(): void{
        this.courseService.save(this.course).subscribe({
            next: course => console.log("Curso Salvo", course),
            error: err => console.log("Error", err)
        })
    }
}
