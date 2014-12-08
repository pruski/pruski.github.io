var _                 = require('underscore');
var EventEmitter      = require('events').EventEmitter;
var AppDispatcher     = require('../dispatcher/AppDispatcher');
var ProjectsConstants = require('../constants/ProjectsConstants');


var _projects   = {};
var _selectedID = null;

function addProjects(data) {
    data.map(parseProject);
}

function parseProject(project) {
    var readme = project.readme,
        projectDescStartIndex,
        projectDescEndIndex,
        parsed = {
        id       : project.id,
        githubUrl: project.html_url
    };

    if(readme) {
        parsed.name = readme.substring(0, readme.indexOf("\n===")).trim();

        if(!parsed.name) {
            parsed.name = project.name;
        }

        projectDescStartIndex = readme.indexOf("\n\n") + 2;
        projectDescEndIndex = readme.indexOf("\n\n", projectDescStartIndex);

        if (projectDescEndIndex < 0) {
            projectDescEndIndex = readme.length;
        }

        parsed.description = readme.substring(projectDescStartIndex, projectDescEndIndex).trim();
    }

    _projects[project.id] = parsed;
}

function projectSelected(id) {
    if(_selectedID) {
        _projects[_selectedID].selected = false;
    }

    _selectedID = id;
    _projects[_selectedID].selected = true;
}

var ProjetsStore = _.extend({}, EventEmitter.prototype, {
    getProjects: function() {
        return _projects;
    },

    getProject: function (id) {
        return _projects[id];
    },

    getSelected: function() {
        return this.getProject(_selectedID);
    },

    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function(payload) {
    switch(payload.action.actionType) {
        case ProjectsConstants.ADD_PROJECTS:
            addProjects(payload.action.data);
            break;

        case ProjectsConstants.PROJECT_SELECTED:
            projectSelected(payload.action.data);
            break;

        default:
            return true;
    }

    ProjetsStore.emitChange();

    return true;
});

module.exports = ProjetsStore;