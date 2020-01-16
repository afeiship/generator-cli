'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const glob = require('glob');
const { resolve } = require('path');
const remote = require('yeoman-remote');
const yoHelper = require('@feizheng/yeoman-generator-helper');
const replace = require('replace-in-file');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the stunning ${chalk.red(
          'generator-cli'
        )} generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'project_name',
        message: 'Your project_name (eg: like this `my-cli` )?',
        default: yoHelper.discoverRoot
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your description?'
      }
    ];

    return this.prompt(prompts).then(
      function(props) {
        // To access props later use this.props.someAnswer;
        this.props = props;
        yoHelper.rewriteProps(props);
      }.bind(this)
    );
  }

  writing() {
    const done = this.async();
    remote(
      'afeiship',
      'boilerplate-cli',
      function(err, cachePath) {
        // copy files:
        this.fs.copy(
          glob.sync(resolve(cachePath, '{**,.*}')),
          this.destinationPath()
        );
        done();
      }.bind(this)
    );
  }

  end() {
    const { project_name, description } = this.props;
    const files = glob.sync(resolve(this.destinationPath(), '{**,.*}'));

    replace.sync({
      files,
      from: [
        /boilerplate-cli-description/g,
        /boilerplate-cli/g
      ],
      to: [description, project_name]
    });
  }
};
