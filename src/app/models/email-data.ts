import { Email } from "./email";

export const EMAILS: Email[] = [
  new Email(
    1,
    'gerard.ford@amazzon.com',
    'moi@gmail.com',
    'Information : Livraison de votre colis',
    'Votre commande Amazon n’a pas été livrée et a été remise au point colis, si vous ne la réclamez pas avant 48h en cliquant sur ce lien, elle ne vous sera pas remise. Vous n’avez pas payé les frais de livraison, vous pouvez le faire en cliquant sur ce lien',
    'Votre commande Amazon n’a pas été livrée et a été remise au point colis, si vous ne la réclamez pas avant 48h en cliquant sur ce lien, elle ne vous sera pas remise. Vous n’avez pas payé les frais de livraison, vous pouvez le faire en cliquant sur ce lien',
    'https://amazzon.fr/mon-compte/mes-livraisons',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png',
    true,
    'Vendredi, 19h:30',
    'Gerard Ford',
    'facture.pdf',
    'pdf',
    '70 mo',
    false
  ),

  new Email(
    2,
    'carefour-noreply@gmail.com',
    'moi@gmail.com',
    'Félicitation ! Vous remportez un iPhone',
    'Comme vous avez fait vos courses dans un établissement Carrefour de Seine-et-Marne au cours des 3 derniers mois, vous avez été inscrit à un tirage au sort dont le prix gagnant est un iPhone dernière génération. Cliquez sur ce lien pour réclamer votre prix.',
    'Votre commande Amazon n’a pas été livrée et a été remise au point colis, si vous ne la réclamez pas avant 48h en cliquant sur ce lien, elle ne vous sera pas remise. Vous n’avez pas payé les frais de livraison, vous pouvez le faire en cliquant sur ce lien',
    'https://www.carefour.com/reclamer-prix',
    'https://upload.wikimedia.org/wikipedia/fr/thumb/3/3b/Logo_Carrefour.svg/1200px-Logo_Carrefour.svg.png',
    true,
    'Vendredi, 19h:30',
    'Carrefour',
    'voucher.pdf',
    'pdf',
    '1 gb',
    false
  ),

  new Email(
    3,
    'support@msupdate.net',
    'moi@example.com',
    'Nouvelle connexion detecté',
    'Quelqu’un s’est connecté à votre compte depuis un nouvel appareil. Si vous n’êtes pas à l’origine de cette connexion cliquer sur le lien suivant :',
    'Votre commande Amazon n’a pas été livrée et a été remise au point colis, si vous ne la réclamez pas avant 48h en cliquant sur ce lien, elle ne vous sera pas remise. Vous n’avez pas payé les frais de livraison, vous pouvez le faire en cliquant sur ce lien',
    'https://www.microsoft.com/account',
    'https://news.microsoft.com/wp-content/uploads/prod/sites/113/2017/06/Microsoft-logo_rgb_c-gray-768x344.png',
    false,
    'Vendredi, 19h:30',
    'Microsoft Support',
    'security-alert.txt',
    'txt',
    '50 ko',
    false
  )

];