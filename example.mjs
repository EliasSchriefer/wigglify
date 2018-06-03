/* USAGE:
 * Call "wigglify()" to get an wigglified String returned
 *
 * You can also specify an options object with following options:
 * - word <String>: The word that should get repeated
 * - wordCount <Integer>: How often "word" should be repeated in one line
 * - depth <Integer>: How often a new indented line should be added
 * - levels <Integer>: How many levels should be added
 * - levelerChar <String>: The character that will be used as whitespace when indenting
 *
 * The standard values for the options object are:
 * - word: "wiggle"
 * - wordCount: 3
 * - depth: 5
 * - levels: 3
 * - levelerChar: " "
 *
 *
 * Be careful:
 * Node's current version (v10.3.0) needs your file to have a ".mjs" extension and
 * the "--experimental-modules" flag specified when starting your script. This could
 * change in the future, so please check your node version and the availability of
 * ECMAScript Modules (ESM).
 *
 * Have fun!
*/

import fs from "fs"
import wigglify from "./wigglify"

fs.writeFileSync("wiggle.txt", wigglify({ word: "hello world!", wordCount: 1 }), "utf8")
