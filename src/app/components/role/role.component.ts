import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Role {
  id: string;
  nom: string;
}

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roleForm: FormGroup;
  roles: Role[] = [];

  constructor(private fb: FormBuilder) {
    this.roleForm = this.fb.group({
      id: [''],
      nom: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.roleForm.valid) {
      const newRole: Role = {
        id: this.generateUUID(), // Simulation de Sequelize UUID
        nom: this.roleForm.get('nom')?.value
      };

      this.roles.push(newRole);
      this.roleForm.reset(); // Nettoyage
    }
  }

  // Simule un UUID (comme Sequelize)
  generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
