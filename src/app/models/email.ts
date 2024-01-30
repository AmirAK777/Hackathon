export class Email {
  id: number;
  expediteur: string;
  destinataire: string;
  objet: string;
  contenu: string;
  lienDuSite: string;
  imageEntreprise: string;
  scams: boolean;
  heure: string;
  nomExpediteur: string;
  pieceJointe: string;

  constructor(id: number, expediteur: string, destinataire: string, objet: string, contenu: string, lienDuSite: string, imageEntreprise: string, scams: boolean, heure: string, nomExpediteur: string, pieceJointe: string) {
    this.id = id;
    this.expediteur = expediteur;
    this.destinataire = destinataire;
    this.objet = objet;
    this.contenu = contenu;
    this.lienDuSite = lienDuSite;
    this.imageEntreprise = imageEntreprise;
    this.scams = scams;
    this.heure = heure;
    this.nomExpediteur = nomExpediteur;
    this.pieceJointe = pieceJointe;
  }
}
