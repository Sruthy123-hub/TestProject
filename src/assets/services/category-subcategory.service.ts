import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorySubcategoryService {

  constructor() { }

  private selectedCategorySource = new BehaviorSubject<string>(''); // Observable to track selected category
  selectedCategory$ = this.selectedCategorySource.asObservable();

  setSelectedCategory(category: string) {
    this.selectedCategorySource.next(category);
  }
}
