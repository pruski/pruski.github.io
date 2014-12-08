window.React    = require('React');
var GithubAPI   = require('./utils/GithubAPI');
var ProjectsApp = require('./components/ProjectsApp.react');

GithubAPI.getProjects();

React.render(
    <ProjectsApp />,
    document.querySelector('main')
);