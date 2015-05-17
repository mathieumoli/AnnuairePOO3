# POO3IHMSitePerso
**by Mathieu Molinengo**

*COURS POO3IHM SI3 ENCADRE PAR Mr. PIGHETTI*

##FONT AWESOME DEPENDENCES##

1. Ouvrir le terminal
2. Aller jusqu'au projet
3. Taper `bower install` pour recuperer font awesome
4. Ouvrer bower_components/fontawesome/scss/_variables.scss avec votre éditeur préféré
5. Editer ligne 4`$fa-font-path:        "../../../bower_components/fontawesome/fonts" !default;`

##Note Pour le correcteur##

*Votre application doit être capable d'effectuer les actions suivante pour les utilisateurs et les projets :*

*Création 
*Affichage (liste et détail d'un élément en particulier)
*Mise à jour
*Suppression

* Les differentes fonctionnalités se font dans les onglets prévus à cet effet. De plus un systeme de verification a été mis en place pour eviter d'ajouter des données erronées
* l'affichage en tableau se fait sur la page principale pour afficher un utilisateur en détail cliquez sur un des champs du tableau pour le projet utiliser l'onglet "Afficher le projet"

*La visualisation d'un Utilisateur doit comprendre les projets auxquels il a participé avec le rôle qu'il*
*a joué. De même la visualisation d'un Projet doit comprendre la liste des Utilisateurs qui y ont*
*participé avec leurs rôles.*

* La visualisation d'un utilisateur se fait à partir de la page d'accueil. Après une recherche grace aux selects
ou à l'input de recherche
cliquez sur l'utilisateur auquel vous voulez acceder.

* Pour la visualisation d'un projet cliquez sur "afficher un projet", selectionnez le dans le select ou en le tapant dans le input

*En dernier lieu, il serait souhaitable que votre application permette d'associer des utilisateurs à des*
*projets en précisant leur rôle.*

* L'association se fait lors de l'affichage d'un utilisateur (les projets auxquels il appartient sont affichés, ainsi que son role dans celui-ci) et dans l'affichage des projets nous pouvons acceder à chaque membre de l'equipe avecc son role dans le projet
* Cependant, je considere, comme au départ dans ce projet, que un role est affecté à un utilisateur pour un projet (cela semble logique)

#Sujet
*Travail attendu :*

*Ce rendu devra contenir votre application Angular*
*interagissant avec le service REST mis à votre*
*disposition.*
*Votre application doit être capable d'effectuer les actions suivante pour les utilisateurs et les projets :*

* ~~Création~~ **OPERATIONNEL**
* Affichage (liste et détail d'un élément en particulier) **OPERATIONNEL**
* Mise à jour **OPERATIONNEL**
* Suppression **OPERATIONNEL**

*La visualisation d'un Utilisateur doit comprendre les projets auxquels il a participé avec le rôle qu'il*
*a joué. De même la visualisation d'un Projet doit comprendre la liste des Utilisateurs qui y ont*
*participé avec leurs rôles.*
*Une possibilité de recherche doit être intégrée pour les projets et les utilisateurs.*
*Vous devez définir et mettre en œuvre les vus permettant d'effectuer ces actions. L'organisation et*
*l'ergonomie des vus fait partie des critères de notation.*
*Un style minimal devrait vous permettre*
*d'atteindre au moins l'aspect général souhaité dans l'organisation et l'ergonomie même si l'esthétique*
*n'est pas encore là.*
*En dernier lieu, il serait souhaitable que votre application permette d'associer des utilisateurs à des*
*projets en précisant leur rôle.*


# AnnuairePOO3
L'annuaire des etudiants pour la POO3IHM

#Add OPERATIONNEL avec verification

##Verification des champs du AD

* A cause d'AngularJS et de l'ajout d'une "blank option" dans les selects il est difficile de
verifier les selects. Je vérifie donc après le clic sur le bouton.


#Creation du service Data (evite redondance de code)

* Mise en place dans Ajout, et Main (affichage de tous les Users),Suppression

* Ajout d'un input de recherche pour l'utilisateur

##Affichage Projet OPERATIONNEL revoir peut être l'affichage du tableau

##Modification OPERATIONNELLE

* Cependant, je considere, comme au départ dans ce projet, que un role est*
 affecté à un utilisateur pour un projet (cela semble logique...)

##Suppression OPERATIONNELLE

##Nom Explicite pour les fonctions des services

#Refactor de code