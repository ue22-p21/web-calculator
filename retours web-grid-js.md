# en général

## présentation

* éviter les lignes super larges
* mettez les commentaires au dessus du code et pas à coté
* les espaces dans le code
  (voir l'extension vs-code 'trailing spaces')

## itérations

préférez un `for .. of` plutôt que d'itérer sur les indices

## chargement

je sais qu'on a vu le `defer`

mais il faut imaginer que le code puisse être réutilisé par un autre HTML, qui
lui ne prendra peut-être pas cette peine

c'est mieux d'utiliser une callback sur 'load' dans tous les cas.

## globales

minimiser l'empreinte de votre code sur l'espace de noms global

1. ce n'est pas hyper grave pour les fonctions,
   quoique méfiance si on essaie d'éviter les conflits avec d'autres librairies
2. par contre c'est plus crucial pour les variables d'état, car utiliser une
   globale empêche d'avoir par exemple deux instances de l'appli dans la même
   page

pour contourner ça

1. penser par exemple à englober le code dans une fonction - éventuellement anonyme -
ou encore dans la callback associée à l'événement 'load'
2. grouper les variables d'état dans une classe

## classes css

souvenez-vous qu'un élément du DOM peut avoir plusieurs classes css

du coup tester avec `elt.classList.contains('la-classe')`
plutôt que sur une égalité

pareil pour ajouter une classe, faire `elt.classList.add('square')` plutôt que className =
'square'

# sur web-grid-js en particulier

## callbacks

plusieurs codes refont le 'addEventListener` sur TOUS LES CARRÉS à chaque
création de ligne attention que dans ce cas-là les callbacks sont appelées
PLUSIEURS FOIS

mais attention que c'est cumulatif (ça s'appelle AddEventListener !)

alors oui OK, ça donne parfois un code plus simple, mais IL NE FAUT PAS LE FAIRE
car c'est cumulatif et la callback va vraiment être APPELÉE PLUSIEURS FOIS

## les décomptes

plusieurs élèves ont adopté une approche incrémentale
c'est sans doute plus efficace mais ça a un *gros* impact sur le code

on pouvait sans souci faire du brute-force - recalculer les décomptes en permanence

dans ce cas de figure on peut en version light utiliser e.g.
document.querySelectorAll('#grid>div.blue').length
pour ne pas se fatiguer avec les tests
