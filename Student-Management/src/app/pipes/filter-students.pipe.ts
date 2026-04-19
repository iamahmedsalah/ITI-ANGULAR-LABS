// src/app/pipes/filter-students.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student.model';

@Pipe({
  name: 'filterStudents',
  pure: false
})
export class FilterStudentsPipe implements PipeTransform {
  transform(students: Student[] | null, searchTerm: string, department: string): Student[] {
    if (!students) return [];
    return students.filter(s => {
      const fullName = `${s.firstName} ${s.lastName}`.toLowerCase();
      const matchName = fullName.includes(searchTerm.toLowerCase());
      const matchDept = department ? s.department === department : true;
      return matchName && matchDept;
    });
  }
}