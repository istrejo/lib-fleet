// file: packages.interface.ts

export interface Customer {
  id: number;
  name: string;
}

export interface Package {
  id: number;
  customer: Customer;
  lastUpdate: string;
  status: Status;
  courier: string;
  deliveryAddress: string;
}

export type Status = 'pending' | 'collected' | 'warehouse' | 'route' | 'delivered' | 'failed' | 'cancelled';
