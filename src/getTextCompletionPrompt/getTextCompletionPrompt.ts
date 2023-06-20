import { PromptOptions } from '../types';
import { getInstructions } from '../utils';

/**
 *
 * Note: A very cool list of prompt ideas could be found at https://prompts.chat/
 * Note: Consider prompt chaining (adding followup or corrective instructions) to refine the output or get ideas to improve the initial prompt
 *
 * Note: Provide as much options as you can to achieve a response which is as accurate as possible
 *
 */
const getTextCompletionPrompt = (options: PromptOptions): string => {
  const instructions = getInstructions(options);

  const result = `Follow the following instructions and generate a text response based on them.
                  ${instructions
                    .filter((i) => !!i)
                    .map((i) => `- ${i}`)
                    .join('\n')}
                  Stictly double check if all the above instructions are taken into consideration and the response is accurate before returning it.`;

  return result;
};

export { getTextCompletionPrompt };
