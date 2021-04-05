/**
 * Generates a set of pixel-based rules with an increment of 1 between from and to values.
 *
 *  - Ex: From 0 to 2 -> { 0: '0px' , 1: '1px' , 2: '2px' }
 *
 * @param from From value
 * @param to To value
 * @returns Rules
 */
export const generatePixelRules = (from: number, to: number) => {
  if (!from || !to) throw new Error('You must specify "from" and "to" values');

  if (!Number.isInteger(from) || !Number.isInteger(to))
    throw new Error('"from" and "to" values must be integer');

  const rules: Record<number, string> = {};

  for (let i = from; i <= to; i++) {
    rules[i] = `${i}px`;
  }

  return rules;
};
