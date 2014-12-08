var React = require('react/addons');
var cx = React.addons.classSet;
var ProjectsActions = require('../actions/ProjectsActions');

var ProjectListItem = React.createClass({

    showProjectDetails: function (event) {
        event.preventDefault();

        ProjectsActions.projectSelected(this.props.project.id);
    },

    render: function () {
        var classes = cx({
            'list-group-item': true,
            'active'       : this.props.project.selected
        });

        return (
            <a href={this.props.project.githubUrl} onClick={this.showProjectDetails} className={classes}>{this.props.project.name}</a>
        )
    }

});

module.exports = ProjectListItem;