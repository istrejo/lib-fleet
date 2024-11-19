import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'lib-create-modal',
  standalone: true,
  imports: [DialogModule, InputTextModule, DropdownModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './create-modal.component.html',
  styleUrl: './create-modal.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CreateModalComponent implements OnInit, OnChanges {
  private fb: FormBuilder = inject(FormBuilder);
  @Input() displayModal: boolean = false;
  @Input() editMode: boolean = false;
  @Input() vehicleToEdit: any = null;
  @Output() modalClosed = new EventEmitter<boolean>();
  form!: FormGroup;

  vehicleTypes = [
    { label: 'Camión', value: 'camion' },
    { label: 'Liviano', value: 'liviano' },
    { label: 'Moto', value: 'moto' },
    { label: 'Furgón', value: 'furgon' },
  ];

  vehicleStatuses = [
    { label: 'Disponible', value: 'available' },
    { label: 'En raparación', value: 'maintenance' },
    { label: 'No disponible', value: 'unavailable' },
  ];

  users = [
    { label: 'Eduardo Molina', value: 1 },
    { label: 'Olivares Leonar', value: 2 },
    { label: 'Alejandro Trejo', value: 3 },
    { label: 'Carlos Perez', value: 4 },
    { label: 'Juan Martinez', value: 5 },
    { label: 'Luis Gomez', value: 6 },
  ];

  ngOnInit(): void {
    this.initForm();
  }
  ngOnChanges(): void {
    if (this.vehicleToEdit) {
      this.form.patchValue({
        vehicleName: this.vehicleToEdit.name,
        patent: this.vehicleToEdit.plate,
        vehicleType: this.vehicleToEdit.type,
        vehicleStatus: this.vehicleToEdit.status,
        assignedUser: this.vehicleToEdit.assignedUser.id,
      });
    }
  }

  initForm() {
    this.form = this.fb.group({
      vehicleName: [''],
      patent: [''],
      vehicleType: [''],
      vehicleStatus: [''],
      assignedUser: [''],
    });
  }

  close() {
    this.modalClosed.emit(false);
    this.form.reset();
    this.vehicleToEdit = null;
  }
  onSubmit() {
    if (this.editMode) {
      // TODO: apuntar al endpoint de edición
    } else {
      // TODO: apuntar al endpoint de creación
    }
  }
}
