<<<<<<< HEAD
# POO3IHMSitePerso
**by Mathieu Molinengo**

*COURS POO3IHM SI3 ENCADRE PAR Mr. PIGHETTI*

##FONT AWESOME DEPENDENCES##

1. Ouvrir le terminal
2. Aller jusqu'au projet
3. Taper `bower install` pour recuperer font awesome
4. Ouvrer bower_components/fontawesome/scss/_variables.scss avec votre éditeur préféré
5. Editer ligne 4`$fa-font-path:        "../../../bower_components/fontawesome/fonts" !default;`

#Rendu
*Travail attendu :*

*Ce rendu devra contenir votre application Angular*
*interagissant avec le service REST mis à votre*
*disposition.*
*Votre application doit être capable d'effectuer les actions suivante pour les utilisateurs et les projets :*

* ~~Création~~ **OPERATIONNEL**
* Affichage (liste et détail d'un élément en particulier)
* Mise à jour
* Suppression

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