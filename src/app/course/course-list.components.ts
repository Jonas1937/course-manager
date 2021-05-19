import { Component, OnInit } from "@angular/core"
import { course } from "./course"
import { CourseService } from "./course.service";


@Component({
    templateUrl: '../course/course-list.component.html'
})
export class CourseListComponent implements OnInit{

    constructor(private courseService: CourseService){

    }
    filteredCourses: course[] = [];

    _courses: course[] = [];
    _filterBy: String;

    ngOnInit(): void {
        this.retrieveAll();
    }


    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: course => {
                this._courses = course;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error:' , err)
        })
    }

    deleteById(id: number): void {
        this.courseService.deleteById(id).subscribe({
            next: () =>
        this.retrieveAll(),
            error: err => console.log("Error", err)
        })
    }


    set filter(value: String){
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }
}