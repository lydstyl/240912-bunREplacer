import { getAzDescription, getCYPs } from './regexAndSteps'

let text = `
CYP-533


[OrderPoint] - Ventes option correction manuelle

Ajouter
Description

Ecran - Calcul des seuils – Graphique ventes correction manuelle

Base STEF_2 – connexion avec l’utilisateur STEF

Tout charger -> Appliquer 

Aller dans l’écran Calcul des seuils

Choisir la configuration TestCalcul,

Choisir l’onglet Calcul

Faire clic sur Paramètres avancés

Cocher l’option Correction manuelle

Sur la grille se positionner sur le produit KF622262

Faire clic sur le bouton Détails

10.   Dans le graphique se positionner sur la première courbe et vérifier les valeurs affichées :

a.      30/06/2014

b.     Contexte retenu: 55

11.   Dans le graphique se positionner sur la troisième courbe et vérifier les valeurs affichées :

a.      02/07/2014

b.     Contexte retenu: 68
`

// getCYPs(text)

getAzDescription(text)
// bun index.ts
