// student-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student$!: Observable<Student | undefined>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.student$ = this.studentsService.getStudentById(id);
  }

  getGpaBadge(gpa: number): string {
    if (gpa >= 3.5) return 'bg-success rounded-lg';
    if (gpa >= 2.5) return 'bg-warning text-dark rounded-lg';
    return 'bg-danger rounded-lg';
  }

  onEdit(id: number): void {
    this.router.navigate(['/edit-student', id]);
  }

  goBack(): void { this.router.navigate(['/students']); }
}