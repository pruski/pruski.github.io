var React = require('react/addons');
var ProjectsActions = require('../actions/ProjectsActions');
var cx = React.addons.classSet;

var ProjectList = React.createClass({

    render: function () {
        var heading        = this.props.project ? "Description" : "";
        var description    = this.props.project ? this.props.project.description : "Please select a project";
        var githubUrlLabel = this.props.project ? "view source" : "";
        var githubUrl      = this.props.project ? this.props.project.githubUrl : "https://github.com/pruski";

        var classes = cx({
            'panel-body'  : true,
            'not-selected': !this.props.project
        });

        return (
            <div className="project-details panel panel-primary">
                <div className="panel-heading">
                    {heading}
                <a href={githubUrl}>{githubUrlLabel}</a>
                </div>
                <div className={classes}>{description}</div>
            </div>
        );
    }
});

module.exports = ProjectList;