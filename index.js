import { stdin, stdout as output } from "node:process";
import readline from "node:readline/promises";

/**
 * Takes a user input from terminal and returns a string
 * @param {String} [prompt=]
 * @param {Object} [options={}] - The options for parsing input: { int: true } or { float: true }
 * @returns {Promise<String|Number>}
 */
export async function input(prompt = "", options = {}) {
  const rl = readline.createInterface({ input: stdin, output });

  const result = await rl.question(prompt);
  rl.close();

  if (options.int) {
    const parsed_int = Number.parseInt(result, 10);
    return Number.isNaN(parsed_int) ? undefined : parsed_int;
  }

  if (options.float) {
    const parsed_float = Number.parseFloat(result);
    return Number.isNaN(parsed_float) ? undefined : parsed_float;
  }

  return result;
}
