/**
 * Responsible of minify given string containing JavaScript code. By default it uses the foo-bar minimization algorithm. 
 * 
 * **Warning: if you don't specify an output in the configuration your input file will be overridden !**
 * 
 * Basic usage example: 
 * 
 * ```ts
 * import {minify} from 'foobar-minify';
 * const config = {
 *   input: readFileSync('dist/awesome-app.js'), 
 *   output: createWriteStream('dist/awesome-app.min.js')
 * }
 *   minify(config);
 * ```
 */
function minify(){}