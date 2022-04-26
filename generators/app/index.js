'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const glob = require('glob');
const { resolve } = require('path');
const yoHelper = require('@jswork/yeoman-generator-helper');
const replace = require('replace-in-file');
const prompts = require('./prompts');

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

  end() {
    const { scope, project_name, description } = this.props;
    const files = glob.sync(resolve(this.destinationPath(), '{**,.*}'));

    replace.sync({
      files,
      from: [/boilerplate-scope/g, /boilerplate-cli-description/g, /boilerplate-cli/g],
      to: [scope, description, project_name]
    });
  }
};
