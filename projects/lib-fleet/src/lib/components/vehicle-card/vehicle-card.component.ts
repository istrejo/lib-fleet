import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TagComponent } from '../tag/tag.component';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'lib-vehicle-card',
  standalone: true,
  imports: [CommonModule, ButtonModule, CheckboxModule, TagComponent, MenuModule],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.scss',
})
export class VehicleCardComponent {
  @Input() vehicle: any;
  @Output() selectedVehicle: EventEmitter<any> = new EventEmitter();
  menuItems: MenuItem[] = [];

  get vehicleType() {
    switch (this.vehicle?.type) {
      case 'moto':
        return 'assets/icons/moto.svg';
      case 'liviano':
        return 'assets/icons/light-car.svg';
      case 'furgon':
        return 'assets/icons/van.svg';
      case 'camion':
        return 'assets/icons/truck.svg';
      default:
        return 'assets/icons/moto.svg';
    }
  }

  constructor() {
    this.menuItems = [
      {
        label: 'Editar vehículo',
        icon: 'pi pi-pencil',
        command: () => {
          this.selectedVehicle.emit(this.vehicle);
        },
      },
      { label: 'Eliminar vehículo', icon: 'pi pi-trash' },
    ];
  }

  onSelectedVehicleToEdit() {}
}
