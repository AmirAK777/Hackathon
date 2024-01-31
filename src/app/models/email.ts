export class Email {
  id: number;
  expediteur: string;
  destinataire: string;
  objet: string;
  contenu1: string;
  contenu2: string;
  lienDuSite: string;
  imageEntreprise: string;
  scams: boolean;
  heure: string;
  nomExpediteur: string;
  pieceJointe: string;
  typePieceJointe: string;
  taillePieceJointe: string;
  statusReponse: boolean;

  constructor(id: number, expediteur: string, destinataire: string, objet: string, contenu1: string, contenu2: string, lienDuSite: string, imageEntreprise: string, scams: boolean, heure: string, nomExpediteur: string, pieceJointe: string, typePieceJointe: string, taillePieceJointe: string, statusReponse: boolean) {
    this.id = id;
    this.expediteur = expediteur;
    this.destinataire = destinataire;
    this.objet = objet;
    this.contenu1 = contenu1;
    this.contenu2 = contenu2;
    
    this.lienDuSite = lienDuSite;
    this.imageEntreprise = imageEntreprise;
    this.scams = scams;
    this.heure = heure;
    this.nomExpediteur = nomExpediteur;
    this.pieceJointe = pieceJointe;
    this.typePieceJointe = typePieceJointe;
    this.taillePieceJointe = taillePieceJointe;
    this.statusReponse = statusReponse;
  }
}
