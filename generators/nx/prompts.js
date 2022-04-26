const yoHelper = require('@jswork/yeoman-generator-helper');

require('@jswork/next-registry-choices');

module.exports = [
  {
    type: 'select',
    name: 'scope',
    message: 'Your scope (eg: @babel )?',
    default: 'jswork'
  },
  {
    type: 'scope',
    name: 'scope',
    message: 'Your scope (eg: @babel )?',
    default: 'jswork'
  },
  {
    type: 'list',
    name: 'registry',
    message: 'Your registry',
    choices: nx.RegistryChoices.gets()
  },
  {
    type: 'input',
    name: 'project_name',
    message: 'Your project_name (eg: like this `my-cli` )?',
    default: yoHelper.discoverRoot
  },
  {
    type: 'input',
    name: 'description',
    message: 'Your description?',
    validate: Boolean
  }
];
