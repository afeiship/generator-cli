'use strict';
const Generator = require('@jswork/yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(this.srcFiles, this.destinationPath(), this.props);
  }
};
