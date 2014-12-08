var AppDispatcher    = require('../dispatcher/AppDispatcher');
var ProjectsConstants = require('../constants/ProjectsConstants');

var ProjectActions = {

    addProjects: function(data) {
        AppDispatcher.handleAction({
            actionType: ProjectsConstants.ADD_PROJECTS,
            data: data
        });
    },

    projectSelected: function (id) {
        AppDispatcher.handleAction({
            actionType: ProjectsConstants.PROJECT_SELECTED,
            data: id
        });
    }
};

module.exports = ProjectActions;