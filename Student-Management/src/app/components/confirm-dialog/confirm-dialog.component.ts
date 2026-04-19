import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface ConfirmDialogData {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  @Input() data: ConfirmDialogData | null = null;
  @Output() confirmed = new EventEmitter<boolean>();

  onConfirm(): void { this.confirmed.emit(true); }
  onCancel(): void { this.confirmed.emit(false); }
}
