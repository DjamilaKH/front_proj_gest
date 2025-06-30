import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import { ProjetService } from 'src/app/services/projet.service'; // adapte le chemin si besoin
import { Projet } from 'src/app/models/projet'; // adapte selon ton modèle

@Component({
  selector: 'app-rapport-projets',
  templateUrl: './rapport-projets.component.html',
  styleUrls: ['./rapport-projets.component.scss']
})
export class RapportProjetsComponent {
  projets: Projet[] = [];

  constructor(private projetService: ProjetService) {}

  genererRapport(): void {
    this.projetService.getProjets().subscribe(projets => {
      this.projets = projets;

      const doc = new jsPDF();

      doc.setFontSize(18);
      doc.text('Rapport des Projets', 14, 22);

      let y = 30;
      this.projets.forEach((projet, index) => {
        if (y > 280) {  // Nouvelle page si trop de contenu
          doc.addPage();
          y = 20;
        }
        doc.setFontSize(12);
        doc.text(`${index + 1}. ${projet.titre} - Statut: ${projet.statut || 'N/A'}`, 14, y);
        y += 10;
      });

      doc.save('rapport-projets.pdf');
    }, err => {
      console.error('Erreur chargement projets', err);
      alert('Erreur lors de la génération du rapport');
    });
  }
}
