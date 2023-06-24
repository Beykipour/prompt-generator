import { getTokenCount } from './getTokenCount';

describe('getTokenCount', () => {
  it('should return correct number of tokens for a given prompt', () => {
    const prompt = `Follow the following instructions and generate a text response based on them.
    - Act as expert.
    - Write a text about moon.
    - The goal of the text is to inform.
    - The tone of the text should be formal.
    - The text should be in English language.
    Stictly double check if all the above instructions are taken into consideration and the response is accurate before returning it.`;

    expect(getTokenCount(prompt)).toBe(101);
  });
});
