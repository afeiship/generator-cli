import { Command } from 'commander';
import { version } from '../package.json';

const program = new Command();
program.version(version);

program
  .option('-s, --src <string>', 'source filepath.', './src/myfile/sqlite3.db')
  .option('-d, --dst <string>', 'destination filepath.', '/Websites/test/')
  .parse(process.argv);

export function cli() {
  const opts = program.opts();
  console.log('hello cli: ', opts);
}
