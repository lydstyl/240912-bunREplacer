let text = `
Base AGROBIOTHERS_cypress – connexion avec l’utilisateur Anne

Entrer dans la base – Appliquer

Menu – Approvisionnement

Ecran - Commandes à valider

Choisir la configuration « TestCommande » onglet Tous

Cocher les deux premières lignes

Faire clic sur le bouton à PASSER COMMANDE

Faire clic sur Valider les commandes

Vérifier qu’on a bien deux fichiers (un pour chaque commande) dans le dossier (D:\Azap\Export\Agro) :

PropCde_F04929_ CUISERY_(datedujour).csv

PropCde_F04929_ CUISERY_(datedujour).csv

Ouvrir le fichier PropCde_F04929_ CUISERY_(datedujour).csv et vérifier les dates :

DateCommande : 08/11/2023

DateMAD : 29/11/2023

DateLivraison : 29/11/2023

11.   Vérifier qu’on a bien les produits :

a.      126922

b.     224652

c.      107052

d.     914492

e.      923512

f.       923932

g.      924682

h.     924912

Ouvrir le fichier PropCde_F04929_ CUISERY_(datedujour).csv et vérifier les dates :

DateCommande : 22/11/2023

DateMAD : 13/12/2023

DateLivraison : 13/12/2023

13.   Vérifier qu’on a bien les produits :

a.      110642

b.     217632

c.      202492

d.     752552

e.      915172

f.       923452

g.      924842
`

const lineBreak = /(\r\n|\n|\r)/g

const azDiscriptionSteps = [
  {
    regex: /(.*)$/gm,
    replacer: '// $1'
  },
  {
    regex: /\/{2}\s$/gm,
    replacer: '\n'
  },
  {
    regex: /(\r\n|\n|\r){2}/g,
    replacer: '\n'
  },
  {
    regex: /(\r\n|\n|\r){2}/g,
    replacer: '\n'
  }
]

azDiscriptionSteps.forEach((step) => {
  text = text.replace(step.regex, step.replacer)
  console.log(text)
})

// bun index.ts
