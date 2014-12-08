var ProjectsActions = require('../actions/ProjectsActions');
var $               = require('jquery');
var Promise         = require('es6-promise').Promise;

module.exports = {
    getProjects: function () {
        $.get('https://api.github.com/users/pruski/repos', function(data, status) {
            if(status === 'success') {
                // temporary, ugly but blackboxed solution, to be rewritten later
                var promises = [];

                data.map(function (project) {
                    var promise = new Promise(function(resolve, reject){
                        $.get('https://github-raw-cors-proxy.herokuapp.com/' + project.full_name + '/' + project.default_branch + '/README.md', function(readme, status){
                            if(status === 'success') {
                                project.readme = readme;
                                resolve();

                            } else {
                                reject();
                            }
                        });
                    });

                    promises.push(promise);
                });

                Promise.all(promises).then(allFulfilled, allFulfilled);
            }

            function allFulfilled() {
                ProjectsActions.addProjects(data);
            }
        });
    }
};