// students.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students$!: Observable<Student[]>;
  searchTerm = '';
  selectedDepartment = '';

  departments = [
    'Computer Science',
    'Information Technology',
    'Software Engineering',
    'Cyber Security',
    'Data Science',
  ];

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.students$ = this.studentsService.getStudents();
  }

  onDeleteStudent(id: number): void {
    this.studentsService.deleteStudent(id);
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedDepartment = '';
  }
}