// student-table.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDialogData } from '../confirm-dialog/confirm-dialog.component';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {
  @Input() students: Student[] | null = [];
  @Output() deleteStudent = new EventEmitter<number>();
  showConfirm = false;
  confirmData: ConfirmDialogData | null = null;
  private selectedDeleteId: number | null = null;

  private avatarColors = [
    '#4361ee','#f72585','#06d6a0',
    '#4cc9f0','#7209b7','#e85d04'
  ];

  constructor(private router: Router) {}

  onView(id: number): void { this.router.navigate(['/student', id]); }

  onDelete(id: number): void {
    this.selectedDeleteId = id;
    this.confirmData = {
      title: 'Delete student',
      message: 'Are you sure you want to delete this student? This action cannot be undone.',
      confirmText: 'Delete',
      cancelText: 'Cancel'
    };
    this.showConfirm = true;
  }

  onConfirmDelete(confirmed: boolean): void {
    if (confirmed && this.selectedDeleteId !== null) {
      this.deleteStudent.emit(this.selectedDeleteId);
    }
    this.showConfirm = false;
    this.selectedDeleteId = null;
  }

  getAvatarColor(id: number): string {
    return this.avatarColors[id % this.avatarColors.length];
  }

  getGpaBadge(gpa: number): string {
    if (gpa >= 3.5) return 'badge-gpa-high';
    if (gpa >= 2.5) return 'badge-gpa-mid';
    return 'badge-gpa-low';
  }
}