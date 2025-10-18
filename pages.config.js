const projectsData = require('./userData/projecthelper.js');

module.exports = [
  {
    template: 'homepage.ejs',
    output: 'index.html',
    data: { projects: projectsData }
  },
  {
    template: 'project.ejs',
    output: 'project.html',
    data: { projects: projectsData }
  },
  {
    template: 'experience.ejs',
    output: 'experience.html',
    data: {}
  }
];
