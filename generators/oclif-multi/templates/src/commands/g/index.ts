import { Command, Flags } from '@oclif/core';
import * as fs from 'fs';
import nx from '@jswork/next';


export default class Index extends Command {
  static description = 'My awesome cli program.';

  static flags = {
    verbose: Flags.boolean({ char: 'v', description: 'Show logs.' }),
  };

  static args = [{ name: 'filename', description: 'Create filename.', default: '.tmp.md' }];

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Index);
    this.log(args, flags);
  }
}
