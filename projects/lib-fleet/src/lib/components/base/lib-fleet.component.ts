import { Component, inject, OnInit, signal, ViewChild, ViewEncapsulation } from '@angular/core';

import { MenuItem, MenuItemCommandEvent } from 'primeng/api';
import { LibFleetService } from '../../services/lib-fleet.service';

interface ModalData {
  title: string;
  options: string[];
}

@Component({
  selector: 'app-lib-fleet',
  templateUrl: './lib-fleet.component.html',
  styleUrls: ['./lib-fleet.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LibFleetComponent implements OnInit {
  @ViewChild('#menu') menu: any;
  private libFleetSvc = inject(LibFleetService);
  vehicles = signal<any[]>([]);
  vehiclesTemp = signal<any[]>([]);
  filterItems: MenuItem[] = [];
  selectedFilters: any[] = [];
  displayModal: boolean = false;
  vehicleToEdit: any = null;
  constructor() {
    this.filterItems = [
      {
        label: 'Disponibles',
        status: 'available',
        checked: false,
        command: (event: any) => {
          this.filterVehicles();
          event.preventDefault();
        },
      },
      {
        label: 'En reparación',
        status: 'maintenance',
        checked: false,
        command: (event: any) => {
          this.filterVehicles();
          event.preventDefault();
        },
      },
      {
        label: 'No disponibles',
        status: 'unavailable',
        checked: false,
        command: (event: any) => {
          this.filterVehicles();
          event.preventDefault();
        },
      },
    ];
  }

  ngOnInit() {
    this.libFleetSvc.getVehicles().then((vehicles) => {
      this.vehicles.set(vehicles);
      this.vehiclesTemp.set(vehicles);
    });
  }

  filterVehicles(): void {
    const selectedFilters = this.filterItems.filter((item) => item['checked']).map((v: any) => v.status);
    this.vehiclesTemp.set(
      this.vehicles().filter((vehicle) => {
        return selectedFilters.length ? selectedFilters.includes(vehicle.status) : true;
      }),
    );
    return;
  }

  editVehicle(vehicle: any) {
    this.vehicleToEdit = vehicle;
    this.displayModal = true;
  }

  deleteVehicle(vehicle: any) {
    // Lógica para eliminar el vehículo
  }

  onCloseModal(event: any) {
    this.displayModal = event;
  }

  handleMenuItemCommand(event: MenuItemCommandEvent) {
    const newEvent: Event = event.originalEvent as Event;
    newEvent.stopPropagation();
    newEvent.stopPropagation();
    // event.item?.command?.(event);
  }
}
