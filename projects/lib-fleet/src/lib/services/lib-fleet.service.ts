import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LibFleetService {
  private http = inject(HttpClient);
  constructor() {}

  getData(): any[] {
    return [
      {
        id: 1,
        name: 'Kia Frontier Luisito',
        plate: 'ABCD12',
        type: 'liviano',
        status: 'available',
        assignedUser: { name: 'Eduardo Molina', id: 1 },
      },
      {
        id: 2,
        name: 'Kia Rio',
        plate: 'ABCD13',
        type: 'liviano',
        status: 'maintenance',
        assignedUser: { name: 'Alejandro Trejo', id: 3 },
      },
      {
        id: 3,
        name: 'Toyota Hilux',
        plate: 'EFGH34',
        type: 'camion',
        status: 'available',
        assignedUser: { name: 'Leonar Olivarez', id: 2 },
      },
      {
        id: 4,
        name: 'Ford Ranger',
        plate: 'IJKL56',
        type: 'camion',
        status: 'maintenance',
        assignedUser: { name: 'Carlos Perez', id: 4 },
      },
      {
        id: 5,
        name: 'Chevrolet Silverado',
        plate: 'MNOP78',
        type: 'camion',
        status: 'unavailable',
        assignedUser: { name: 'Juan Martinez', id: 5 },
      },
      {
        id: 6,
        name: 'Nissan Navara',
        plate: 'QRST90',
        type: 'liviano',
        status: 'maintenance',
        assignedUser: { name: 'Luis Gomez', id: 6 },
      },
      {
        id: 7,
        name: 'Honda CR-V',
        plate: 'UVWX12',
        type: 'liviano',
        status: 'available',
        assignedUser: { name: 'Eduardo Molina', id: 1 },
      },
      {
        id: 8,
        name: 'Mazda CX-5',
        plate: 'YZAB34',
        type: 'liviano',
        status: 'maintenance',
        assignedUser: { name: 'Alejandro Trejo', id: 3 },
      },
      {
        id: 9,
        name: 'Ford F-150',
        plate: 'CDEF56',
        type: 'camion',
        status: 'maintenance',
        assignedUser: { name: 'Leonar Olivarez', id: 2 },
      },
      {
        id: 10,
        name: 'Chevrolet Colorado',
        plate: 'GHIJ78',
        type: 'camion',
        status: 'available',
        assignedUser: { name: 'Carlos Perez', id: 4 },
      },
      {
        id: 11,
        name: 'Toyota Tacoma',
        plate: 'KLMN90',
        type: 'camion',
        status: 'maintenance',
        assignedUser: { name: 'Juan Martinez', id: 5 },
      },
      {
        id: 12,
        name: 'Jeep Wrangler',
        plate: 'OPQR12',
        type: 'liviano',
        status: 'maintenance',
        assignedUser: { name: 'Luis Gomez', id: 6 },
      },
    ];
  }

  getVehicles() {
    return Promise.resolve(this.getData().slice(0, 200));
  }
}
