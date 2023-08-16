import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.scss']
})

export class SubcategoryListComponent implements OnInit {
  selectedCategory: string = '';
  subcategories: Category[] = [
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
  allowedRoles = ["SOP_A_VIEW", "COMP_M_VIEW", "TEST_M_ADD", "QSOP_V_VIEW"];

  private categorySubscription: Subscription;

  constructor(private categoryService: CategorySubcategoryService) {
    this.categorySubscription = this.categoryService.selectedCategory$.subscribe(
      category => (this.selectedCategory = category)
    );

  }


   ngOnInit(): void {
    
  }



  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
  }
}
