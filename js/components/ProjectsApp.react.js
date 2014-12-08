var React          = require('react');
var ProjectsStore  = require('../stores/ProjectsStore');
var ProjectList    = require('./ProjectList.react');
var ProjectDetails = require('./ProjectDetails.react');

function getProjectsState() {
    return {
        projects       : ProjectsStore.getProjects(),
        selectedProject: ProjectsStore.getSelected()
    };
}

var ProjectsApp = React.createClass({

    getInitialState: function () {
        return getProjectsState();
    },

    componentDidMount: function () {
        ProjectsStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        ProjectsStore.removeChangeListener(this._onChange);
    },

    render: function () {
        return (
            <div className="projects-app clearfix">
                <ProjectList projects={this.state.projects} />
                <ProjectDetails project={this.state.selectedProject} />
            </div>
        );
    },

    _onChange: function () {
        this.setState(getProjectsState());
    }
});

module.exports = ProjectsApp;