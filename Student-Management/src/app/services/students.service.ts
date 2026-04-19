// src/app/services/students.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap, map, finalize } from 'rxjs/operators';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private initialStudents: Student[] = [
    {
      id: 1,
      firstName: 'Ali',
      lastName: 'Hassan',
      age: 21,
      gender: 'Male',
      email: 'ali.hassan@email.com',
      phone: '01000000001',
      address: '12 Main Street',
      city: 'Cairo',
      country: 'Egypt',
      department: 'Computer Science',
      level: 3,
      GPA: 3.2,
      enrollmentDate: '2023-09-01',
      isActive: true
    },
    {
      id: 2,
      firstName: 'Sara',
      lastName: 'Ahmed',
      age: 20,
      gender: 'Female',
      email: 'sara.ahmed@email.com',
      phone: '01000000002',
      address: '45 Nile Avenue',
      city: 'Alexandria',
      country: 'Egypt',
      department: 'Information Technology',
      level: 2,
      GPA: 3.7,
      enrollmentDate: '2023-09-01',
      isActive: true
    },
    {
      id: 3,
      firstName: 'Omar',
      lastName: 'Khaled',
      age: 22,
      gender: 'Male',
      email: 'omar.khaled@email.com',
      phone: '01000000003',
      address: '78 Desert Road',
      city: 'Giza',
      country: 'Egypt',
      department: 'Software Engineering',
      level: 4,
      GPA: 2.9,
      enrollmentDate: '2022-09-01',
      isActive: false
    },
    {
      id: 4,
      firstName: 'Nour',
      lastName: 'Mahmoud',
      age: 19,
      gender: 'Female',
      email: 'nour.mahmoud@email.com',
      phone: '01000000004',
      address: '33 Green Park',
      city: 'Mansoura',
      country: 'Egypt',
      department: 'Computer Science',
      level: 1,
      GPA: 3.9,
      enrollmentDate: '2024-09-01',
      isActive: true
    }
  ];

  private studentsSubject = new BehaviorSubject<Student[]>(this.initialStudents);
  
  students$: Observable<Student[]> = this.studentsSubject.asObservable();

  getStudents(): Observable<Student[]> {
    return this.students$;
  }

  getStudentById(id: number): Observable<Student | undefined> {
    return this.students$.pipe(
      map(students => students.find(s => s.id === id))
    );
  }

  addStudent(student: Student): Observable<void> {
    return of(undefined).pipe(
      tap(() => {
        const current = this.studentsSubject.getValue();
        const newId = current.length > 0 ? Math.max(...current.map(s => s.id)) + 1 : 1;
        const newStudent = { ...student, id: newId };
        this.studentsSubject.next([...current, newStudent]);
      })
    );
  }

  deleteStudent(id: number): void {
    const updated = this.studentsSubject.getValue().filter(s => s.id !== id);
    this.studentsSubject.next(updated);
  }

  updateStudent(updated: Student): Observable<void> {
    return of(undefined).pipe(
      tap(() => {
        const current = this.studentsSubject.getValue().map(s =>
          s.id === updated.id ? updated : s
        );
        this.studentsSubject.next(current);
      })
    );
  }
}
