'use strict';
const Generator = require('@jswork/yeoman-generator');
const getp = require('@jswork/generator-prompts');
const yosay = require('yosay');
const prompts = getp(['scope', 'registry', 'project_name', 'description']);

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the stunning 'cli:single' generator!`));
    this.props = await this.prompt(prompts);
  }

  writing() {
    this.fs.copyTpl(this.srcFiles, this.destinationPath(), this.props);
  }
};
