import { getCYPs, steps } from './regexAndSteps'

let text = `

CYP-313
[Stock alerts] - Delete a Computed column

Aziz Amnay

Yurima Colmenares

Majeur

Unfunctional
Non résolue
20 déc. 2023
31 mars 2025

Aucun
1|i022o3:

Tâche
CYP-389
[Optimisation] - commande imposée #meeting

Gabriel Brun

Fernando Maciel

Majeur

Unfunctional
Non résolue
9 août 2024
15 avr. 2025

Aucun
1|i02j43:

Tâche
CYP-390
[Optimisations] - imposition/ Libérer simple #meeting

Gabriel B.

Fernando Maciel

Majeur

Unfunctional
Non résolue
9 août 2024
15 avr. 2025

Aucun
1|i02j4b:

Tâche
CYP-94
[OrderPoint] Pouvoir naviguer rapidement entre les écrans sans erreurs

Karel Tytgat

Yann NOUEL DE KERANGUE

Mineur

Unfunctional
Non résolue
3 déc. 2021
3 avr. 2025

Aucun
1|i00wpx:9

Tâche
CYP-409
[Stock alerts] - Computed columns - IF

Yurima Colmenares

Yurima Colmenares

Trivial

Unfunctional
Non résolue
9 sept. 2024
3 avr. 2025

Aucun
1|i02klv:

Tâche
CYP-494
[Dashboard] - Hyperlink (screens)

Yurima Colmenares

Yurima Colmenares

Trivial

Unfunctional
Non résolue
5 déc. 2024
6 mars 2025

Aucun
1|i02qlv:

Tâche
CYP-502
[Dashboard] - Hyperlink tab (2)

Yurima Colmenares

Yurima Colmenares

Trivial

Unfunctional
Non résolue
31 déc. 2024
6 mars 2025

Aucun
1|i02rkr:

Tâche
CYP-516
[Optimisation] - Enchainement d'optimisations depuis l'écran dédié

Gabriel Brun

Fernando Maciel

Trivial

Unfunctional
Non résolue
4 févr. 2025
13 mars 2025

Aucun
1|i02tib:

`

// new Text(text)
//   .process(findCYPWords)
//   .replace([
//     {
//       regex: /CYP-/g,
//       replacer: ''
//     }
//   ])
//   .log()

getCYPs(text)

// steps.azCypExtractor.forEach((step) => {
//   text = text.replace(step.regex, step.replacer)
// })
// console.log(text)

// bun index.ts
