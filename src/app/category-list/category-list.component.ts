import { Component, OnInit } from '@angular/core';
import { CategorySubcategoryService } from 'src/assets/services/category-subcategory.service';
interface Subcategory {
  label: string;
  role: string;
}

interface Category {
  category: string;
  subcategory: Subcategory[];
}

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [
    {
      category: "Dashboard",
      subcategory: [
        { label: "SOP", role: "SOP_A_VIEW" },
        { label: "SOP-V2", role: "SOP_A_V2" },
        { label: "QSOP", role: "QSOP_V_VIEW" }
      ]
    },
    {
      category: "User",
      subcategory: [
        { label: "Add User", role: "USR_M_ADD" },
        { label: "Edit User", role: "USR_M_ADD" },
        { label: "Delete User", role: "USR_D" }
      ]
    },
    {
      category: "Master",
      subcategory: [
        { label: "Shift Master", role: "SHIFT_M_ADD" },
        { label: "Machine", role: "MACHN_M_VIEW" },
        { label: "Component Master", role: "COMP_M_VIEW" }
      ]
    },
    {
      category: "Test",
      subcategory: [
        { label: "Test", role: "TEST_M_ADD" }
      ]
    }
  ];
  constructor(private categoryService: CategorySubcategoryService){}

  ngOnInit(): void {
  }
 

  


  

  onCategoryClick(category: string) {
    this.categoryService.setSelectedCategory(category);
  }
}
