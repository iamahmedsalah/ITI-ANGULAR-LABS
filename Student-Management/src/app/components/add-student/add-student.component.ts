
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  departments = [
    'Computer Science', 'Information Technology',
    'Software Engineering', 'Cyber Security', 'Data Science'
  ];

  submitted = false;
  successMessage = '';

  isEditMode = false;
  studentId: number | null = null;

  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentsService: StudentsService,
    private router: Router
    , private route: ActivatedRoute
  ) {
    this.studentForm = this.fb.group({
      firstName:      ['', [Validators.required, Validators.minLength(2)]],
      lastName:       ['', [Validators.required, Validators.minLength(2)]],
      age:            ['', [Validators.required, Validators.min(16), Validators.max(60)]],
      gender:         ['', Validators.required],
      email:          ['', [Validators.required, Validators.email]],
      phone:          ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      address:        [''],
      city:           [''],
      country:        [''],
      department:     ['', Validators.required],
      level:          ['', Validators.required],
      GPA:            ['', [Validators.required, Validators.min(0), Validators.max(4)]],
      enrollmentDate: ['', Validators.required],
      isActive:       [true],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.studentId = Number(id);
      this.studentsService.getStudentById(this.studentId).subscribe(student => {
        if (student) {
          this.studentForm.patchValue(student as any);
        } else {
          this.router.navigate(['/students']);
        }
      });
    }
  }

  get f() { return this.studentForm.controls; }

  isInvalid(field: string): boolean {
    const c = this.studentForm.get(field);
    return !!(c && c.invalid && (c.dirty || c.touched || this.submitted));
  }

  getError(field: string): string {
    const c = this.studentForm.get(field);
    if (!c || !c.errors) return '';
    if (c.errors['required'])   return 'This field is required.';
    if (c.errors['email'])      return 'Enter a valid email address.';
    if (c.errors['min'])        return `Minimum value is ${c.errors['min'].min}.`;
    if (c.errors['max'])        return `Maximum value is ${c.errors['max'].max}.`;
    if (c.errors['minlength'])  return `Minimum ${c.errors['minlength'].requiredLength} characters.`;
    if (c.errors['pattern'])    return 'Invalid format (10–15 digits).';
    return 'Invalid value.';
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.studentForm.valid) {
      const studentData = this.studentForm.value;
      if (this.isEditMode && this.studentId) {
        this.studentsService.updateStudent({ ...studentData, id: this.studentId }).subscribe(() => {
          this.router.navigate(['/students']);
        });
      } else {
        this.studentsService.addStudent(studentData);
        this.router.navigate(['/students']);
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/students']);
  }
}