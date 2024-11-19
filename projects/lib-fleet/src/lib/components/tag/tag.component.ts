import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'lib-tag',
  standalone: true,
  imports: [TagModule, CommonModule],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
})
export class TagComponent {
  @Input() status = 'collected';
  title = computed(() => {
    switch (this.status) {
      case 'available':
        return 'Disponible';
      case 'maintenance':
        return 'En reparación';
      case 'unavailable':
        return 'No disponible';
      default:
        return 'Disponible';
    }
  });

  getColor() {
    switch (this.status) {
      case 'available':
        return 'bg-green-50 font-medium border-1 text-green-700 border-green-400';
      case 'maintenance':
        return 'bg-orange-50 font-medium border-1 text-orange-700 border-orange-200';
      case 'unavailable':
        return 'bg-red-50 font-medium border-1 text-red-600 border-red-400';
      default:
        return 'bg-green-50 font-medium text-green-600 border-green-800';
    }
  }
}
