import { getTextCompletionPrompt } from './getTextCompletionPrompt';
import { PromptOptions } from '../types';

describe('getTextCompletionPrompt', () => {
  it('should include the provided primitive values in the generated prompt', () => {
    const primitiveValues: PromptOptions = {
      tone: 'tone',
      format: 'format',
      actAs: 'actAs',
      objective: 'objective',
      context: 'context',
      example: 'context',
      audience: 'audiece',
      language: 'laguage',
      callToAction: 'callToAction',
      topic: 'topic',
      mimicPerson: 'mimicPerson',
    };

    const prompt = getTextCompletionPrompt(primitiveValues);

    Object.values(primitiveValues).every((v) => expect(prompt).toContain(v));
  });

  it('should include the provided array values in the generated prompt', () => {
    const arrayValues = {
      keywords: ['kw1', 'kw2', 'kw3'],
      exclusions: ['kw4', 'kw5', 'kw6'],
      tableColumns: ['col1, col2'],
      additionalConstraints: ['l1', 'l2'],
    };

    const prompt = getTextCompletionPrompt({ topic: 'topic', ...arrayValues });

    Object.values(arrayValues).every((a) => a.every((v) => expect(prompt).toContain(v)));
  });

  it('should include the relevant texts for true boolean arguments in the generated prompt', () => {
    const booleanValues = {
      shouldIncludeCitations: true,
      shouldIncludeAnalogies: true,
      shouldIncludeQuotes: true,
      shouldIncludeStatistics: true,
      shouldUseMarkdown: true,
    };

    const expectedTexts = [
      'sources to support information',
      'analogies or examples to clarify concepts',
      'quotes or statements from experts',
      'statistics or data to support claims',
      'Markdown',
    ];

    const prompt = getTextCompletionPrompt({ topic: 'topic', ...booleanValues });

    expectedTexts.every((t) => expect(prompt).toContain(t));
  });

  it('should NOT include the relevant texts for false boolean arguments in the generated prompt', () => {
    const booleanValues = {
      shouldIncludeCitations: false,
      shouldIncludeAnalogies: false,
      shouldIncludeQuotes: false,
      shouldIncludeStatistics: false,
      shouldUseMarkdown: false,
    };

    const expectedTexts = [
      'sources to support information',
      'analogies or examples to clarify concepts',
      'quotes or statements from experts',
      'statistics or data to support claims',
      'Markdown',
    ];

    const prompt = getTextCompletionPrompt({ topic: 'topic', ...booleanValues });

    expectedTexts.every((t) => expect(prompt).not.toContain(t));
  });
});
