var React           = require('react');
var ProjectsActions = require('../actions/ProjectsActions');
var ProjectListItem = require('./ProjectListItem.react');

var ProjectList = React.createClass({

    render: function () {
        var projects = this.props.projects;

        return (
            <div className="project-list list-group">
                <a className="list-group-item list-group-heading active">Projects</a>
            {Object.keys(projects).map(function (id) {
                return (
                    <ProjectListItem key={id} project={projects[id]} />
                )
            })}
            </div>
        )
    }

});

module.exports = ProjectList;