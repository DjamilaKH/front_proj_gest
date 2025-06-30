import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-detail-projet',
  templateUrl: './detail-projet.component.html',
  styleUrls: ['./detail-projet.component.scss']
})
export class DetailProjetComponent implements OnInit {
  projet: any;

  constructor(
    private route: ActivatedRoute,
    private projetService: ProjetService,private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.projetService.getProjetById(id).subscribe({
        next: (data) => this.projet = data,
        error: (err) => console.error('Erreur détails projet :', err)
      });
     
    }
  } modifierProjet() {
  this.router.navigate(['/projets/edit', this.projet.id]);
}
}
