import { PromptOptions } from './types';

const promptOptionsFixtures = (overrides: Partial<PromptOptions>): PromptOptions => ({
  tone: 'casual',
  format: 'outline',
  actAs: 'enthusiast',
  objective: 'entertain',
  context: 'I want to read the text in a TV show',
  additionalConstrains: ['use short senteces', 'break the text into multiple paragraphs'],
  keywords: ['moonlight', 'twilight', 'sunshine'],
  exclusions: ['hello', 'goodbye', 'hell', 'heaven'],
  example:
    'Sun is really useful for the environment and livelihoon on earth. people will die without sun. but we should make sure to to wear sunglasses and sunscreen to stay safe when we are sunbathing',
  audience: 'teenagers',
  language: 'English',
  shouldIncludeCitations: true,
  shouldIncludeAnalogies: true,
  shouldIncludeQuotes: true,
  shouldIncludeStatistics: true,
  shouldUseMarkdown: true,
  tableColumns: [],
  callToAction: 'What is your favorite weather',
  topic: 'Moon',
  maxLength: 500,
  mimicPerson: 'Shakespeare',
  ...overrides,
});

export { promptOptionsFixtures };
