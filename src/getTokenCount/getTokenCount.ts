import { encode } from 'gpt-3-encoder';

/**
 *
 * Note: This util is using `gpt-3-encoder` under the hood. You can use that package or any other package directly if you want.
 *
 */
const getTokenCount = (prompt: string): number => encode(prompt).length;

export { getTokenCount };
