'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const globby = require('globby');
const yoHelper = require('@jswork/yeoman-generator-helper');
const getp = require('@jswork/generator-prompts');
const prompts = getp(['scope', 'registry', 'project_name', 'description']);

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(`Welcome to the stunning ${chalk.red('generator-cli')} generator!`));
    return this.prompt(prompts).then((props) => {
      this.props = props;
      yoHelper.rewriteProps(props);
    });
  }

  writing() {
    this.fs.copyTpl(
      globby.sync(this.templatePath('**'), { dot: true }),
      this.destinationPath(),
      this.props
    );
  }
};
