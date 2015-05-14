/**
 * Created by webdev on 5/6/15.
 */

angular.module('showcaseApp')
    //Modification
    .service('Modification', ['$http', function Users($http) {

        this.getUsers=function(user,success,error){
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
                .success(function(data) {
                    if(data.status==='success'){
                        success(data.data);
                    }
                    else
                    error(data.data);
                });
        }

        this.getProjects=function(user,success,error){
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
                .success(function(data) {
                    if(data.status==='success'){
                        success(data.data);
                    }
                    else
                        error(data.data);
                });
        }
    this.modifierUser=function(user,success,error){

    $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+user.id,user)
        .success(function(data)
        {
            if (data.status === 'success') {
                alert('Modification de l\'utilisateur faite !');
                success(data.data)
            } else {
                error(data.data);
            }

        });

}

this.modifierRole=function(role,success,error){

    $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/'+role.id,role)
        .success(function(data)
        {
            if (data.status === 'success') {
                alert('Modification du role de l\'utilisateur faite !');
                success(data.data)
            } else {
                error(data.data);
            }

        });

}


this.modifierProjet=function(project,success,error){

    $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/'+project.id,project)
        .success(function(data)
        {
            if (data.status === 'success') {
                alert('Modification du projet faite !');
                success(data.data);
            } else {
                error(data.data);
            }

        });

}

this.afficherRole=function(user,success,error){

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+user.id+'/Roles')
        .success(function(data)
        {
            if (data.status === "success") {
                success(data.data);
            }else
            alert('probleme d\'affichage du Role');
            error(data.data);

        });

};
}])
    //service d'ajout
.service('Ajout', ['$http', function Users($http) {

        this.getUsers=function(user,success,error){
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
                .success(function(data) {
                    if(data.status==='success'){
                        success(data.data);
                    }
                    else
                        error(data.data);
                });
        }

        this.getProjects=function(user,success,error){
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
                .success(function(data) {
                    if(data.status==='success'){
                        success(data.data);
                    }
                    else
                        error(data.data);
                });
        }

this.addUser=function(user,success,error){

    $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users/',user)
        .success(function(data)
        {
            if (data.status === 'success') {
                alert('Ajout de l\'utilisateur fait !');
                success(data.data)
            } else {
                alert('IMPOSSIBLE de faire l\'ajout de l\'utilisateur !');
                error(data.data);
            }

        });

}
<!-- marche pas -->
this.addRole=function(user,project,success,error){

    $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/User/'+user.id+'/Role/',role)
        .success(function(data)
        {
            if (data.status === 'success') {
                alert('Ajout du role de l\'utilisateur fait !');
                success(data.data)
            } else {
                alert('IMPOSSIBLE de faire l\'ajout du role de l\'utilisateur !');
                error(data.data);

            }

        });

}


this.addProjet=function(project,success,error){

    $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/',project)
        .success(function(data)
        {
            if (data.status === 'success') {
                alert('Ajout du projet fait !');
                success(data.data)
            } else {
                alert('IMPOSSIBLE de faire l\'ajout du projet !');
                error(data.data);
            }

        });

}

this.afficherRole=function(user,success,error){

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+user.id+'/Roles')
        .success(function(data)
        {
            if (data.status === "success") {
                success(data.data);
            }else
                alert('probleme d\'affichage du Role');
            error(data.data);

        });

};
}])
    //Suppression
    .service('Suppression', ['$http', function Users($http) {

        this.getUsers=function(user,success,error){
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
                .success(function(data) {
                    if(data.status==='success'){
                        success(data.data);
                    }
                    else
                        error(data.data);
                });
        }

        this.getProjects=function(user,success,error){
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
                .success(function(data) {
                    if(data.status==='success'){
                        success(data.data);
                    }
                    else
                        error(data.data);
                });
        }

        this.getRoles=function(user,success,error){
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Roles')
                .success(function(data) {
                    if(data.status==='success'){
                        success(data.data);
                    }
                    else
                        error(data.data);
                });
        }

        this.deleteUser=function(user){

            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+user.id)
                .success(function(data)
                {
                    if (data.status === 'success') {
                        alert('Suppression de l\'utilisateur fait !');
                        success(data.data)
                    } else {
                        alert('IMPOSSIBLE de faire la suppression de l\'utilisateur !');
                        error(data.data);
                    }

                });

        }
        <!-- marche pas -->
        this.deleteRole=function(user,role){

            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/'+role.ProjectId+'/Users/'+user.id)
                .success(function(data)
                {
                    if (data.status === 'success') {
                        alert('Suppression du role de l\'utilisateur fait !');
                        success(data.data)
                    } else {
                        alert('IMPOSSIBLE de faire la suppression du role de l\'utilisateur !');
                        error(data.data);

                    }

                });

        }


        this.deleteProjet=function(project){

            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/'+project.id)
                .success(function(data)
                {
                    if (data.status === 'success') {
                        alert('Suppression du projet fait !');
                        success(data.data)
                    } else {
                        alert('IMPOSSIBLE de faire la suppression du projet !');
                        error(data.data);
                    }

                });

        }

        this.afficherRole=function(user){
            $scope.currentUser=user;
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+user.id+'/Roles')
                .success(function(data)
                {
                    if (data.status === "success") {
                        $scope.roles = data.data;
                    }

                });

        };

    }])

    .service('Affiche', ['$http', function Users($http) {
        this.getCurrentUser=function(id,success,error){

                $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + id)
                    .success(function(data) {
                        if (data.status == "success") {
                            success(data.data);
                        }else
                            error(data.data);

                    });

        }

        this.getRoleUser=function(id,success,error){

            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + id+'/Roles')
                .success(function(data) {
                    if (data.status == "success") {
                        success(data.data);
                    }else
                        error(data.data);

                });
        }

        this.getProjects=function(ProjectId,success,error){


            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + ProjectId)
                .success(function(data) {
                    if (data.status == "success") {
                        success(data.data);
                    }else
                        error(data.data);

                });
        }

        this.getUsersOfProject=function(id,success,error){
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + id+'/Users/')
                .success(function(data)
            {
                if (data.status == "success") {
                    success(data.data);
                } else{
                    error(data.data);}

            });

    }


    }])
