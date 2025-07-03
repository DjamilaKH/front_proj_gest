import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from '../../services/role.service';
import { Role } from '../../models/role';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roleForm: FormGroup;
  roles: Role[] = [];

  constructor(private fb: FormBuilder, private roleService: RoleService) {
    this.roleForm = this.fb.group({
      nom: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.roleService.getAll().subscribe({
      next: (data) => this.roles = data,
      error: (err) => console.error("Erreur chargement rôles :", err)
    });
  }

  onSubmit(): void {
    if (this.roleForm.valid) {
      const newRole: Role = {
        id: '',
        nom: this.roleForm.get('nom')?.value
      };

      this.roleService.create(newRole).subscribe({
        next: (roleFromApi) => {
          this.roles.push(roleFromApi);
          this.roleForm.reset();
        },
        error: (err) => {
          console.error("Erreur création rôle :", err);
        }
      });
    }
  }
}
