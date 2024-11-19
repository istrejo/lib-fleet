import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TagComponent } from '../tag/tag.component';
import { CommonModule } from '@angular/common';
import { Package } from '../../models/packages.interface';

interface ModalData {
  title: string;
  options: string[];
}

@Component({
  selector: 'lib-status-modal',
  standalone: true,
  imports: [DropdownModule, DialogModule, FormsModule, ButtonModule, TagComponent, CommonModule],
  templateUrl: './status-modal.component.html',
  styleUrl: './status-modal.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class StatusModalComponent {
  @Input() visible: boolean = false;
  @Input() package!: Package;
  @Output() statusChanged = new EventEmitter<any>();
  @Output() modalClosed = new EventEmitter<boolean>();

  selectedOption: any = '';

  statuses: any[] = [
    { label: 'Entregado', value: 'delivered' },
    { label: 'Recogido', value: 'collected' },
    { label: 'Pendiente', value: 'pending' },
    { label: 'En bodega', value: 'warehouse' },
    { label: 'En ruta', value: 'route' },
    { label: 'Fallido', value: 'failed' },
    { label: 'Cancelado', value: 'cancelled' },
  ];

  constructor() {}

  /**
   * The `changeStatus` function emits an event with the selected option and updates the status of a
   * package.
   */
  changeStatus() {
    this.statusChanged.emit({
      status: this.selectedOption,
      id: this.package.id,
    });
    this.visible = false;
    this.package = {
      ...this.package,
      status: this.selectedOption,
    };
  }

  /**
   * The `close` function emits a `modalClosed` event with a value of `false`.
   */
  close() {
    this.modalClosed.emit(false);
  }
}
