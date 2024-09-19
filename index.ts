import { steps } from './regexAndSteps'

let text = `
1- Base STEF_OPTIM – connexion avec l’utilisateur STEF

2- Tout charger -> Appliquer 

3- Aller dans le menu Données → écran Produits

4- Choisir la configuration TestProduit

5- Pour la première ligne se placer sur le Produit KF610400

6- Faire clic sur le bouton Détails

7- Choisir l’onglet Politiques de stock

8- Pour la première ligne groupe Maxi colonne Type faire double clic et dans la liste déroulante choisir → Quantité

9- Pour la première ligne groupe Maxi colonne Valeur saisir 150 et faire entrée

10- Faire clic sur l’icône de sauvegarde

11- Faire clic sur le nom de l’utilisateur STEF et choisir l’option Rechanger les données

12- Revenir au menu Données → écran Produits

13- Pour la première ligne se placer sur le Produit KF610400

14- Faire clic sur le bouton Détails

15- Choisir l’onglet Politiques de stock

16- Vérifier que les lignes modifiées sont bien à jour

Pour la première ligne groupe Maxi colonne Type on doit retrouver la valeur → Quantité

Pour la première ligne groupe Maxi colonne Valeur on doit retrouver la valeur → 150

17- Aller dans le menu Données choisir l’écran Données d’approvisionnement

18- Choisir l’onglet Test-Tonnage

19- Choisir l’onglet Politiques de stock

20- Choisir l’onglet TestProduits

21- Vérifier que on a bien les valeurs à jour :

Pour la première ligne groupe Maxi colonne Type on doit retrouver la valeur → Quantité

Pour la première ligne groupe Maxi colonne Valeur on doit retrouver la valeur → 150
`

steps.azDiscriptionSteps.forEach((step) => {
  text = text.replace(step.regex, step.replacer)
})
console.log(text)

// bun index.ts
