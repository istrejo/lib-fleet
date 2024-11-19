import { NgModule } from '@angular/core';
import { LibFleetComponent } from './components/base/lib-fleet.component';
import { LibFleetRoutingModule } from './lib-fleet-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { TagComponent } from './components/tag/tag.component';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { StatusModalComponent } from './components/status-modal/status-modal.component';
import { VehicleCardComponent } from './components/vehicle-card/vehicle-card.component';
import { CreateModalComponent } from './components/create-modal/create-modal.component';

@NgModule({
  declarations: [LibFleetComponent],
  imports: [
    LibFleetRoutingModule,
    BreadcrumbModule,
    CommonModule,
    TagModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    SliderModule,
    ProgressBarModule,
    IconFieldModule,
    FormsModule,
    InputIconModule,
    InputTextModule,
    CheckboxModule,
    TagComponent,
    ReactiveFormsModule,
    SidebarModule,
    MenuModule,
    StatusModalComponent,
    VehicleCardComponent,
    CreateModalComponent,
  ],
  exports: [LibFleetComponent],
  providers: [],
})
export class LibFleetModule {}
