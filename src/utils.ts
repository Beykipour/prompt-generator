import { PromptOptions } from './types';

const getInstructionIfApplicable = (instruction: string, condition: boolean): string => (condition ? instruction : '');

const getInstructions = (options: PromptOptions): string[] => {
  const {
    actAs,
    topic,
    tone,
    format,
    objective,
    context,
    additionalConstrains,
    keywords,
    example,
    audience,
    language,
    exclusions,
    tableColumns,
    callToAction,
    maxLength,
    mimicPerson,
    shouldIncludeCitations,
    shouldIncludeAnalogies,
    shouldIncludeQuotes,
    shouldIncludeStatistics,
    shouldUseMarkdown,
  } = options;

  const instructions = [
    getInstructionIfApplicable(`Act as ${actAs}.`, !!actAs),
    getInstructionIfApplicable(`Write a text about ${topic}.`, !!topic),
    getInstructionIfApplicable(`The goal of the text is to ${objective}.`, !!objective),
    getInstructionIfApplicable(`The tone of voice of the text should be ${tone}.`, !!tone),
    getInstructionIfApplicable(`The text should be generated for this target audience: "${audience}".`, !!audience),
    getInstructionIfApplicable(`Format and structure of the text should be ${format}.`, !!format),
    getInstructionIfApplicable(
      `The table should include the following tables: ${tableColumns?.map((k) => `"${k}"`).join(', ')}.`,
      format === 'table' && !!tableColumns,
    ),
    getInstructionIfApplicable(
      `Include the main sources to support information in the generated text.`,
      !!shouldIncludeCitations,
    ),
    getInstructionIfApplicable(
      `Include some analogies or examples to clarify concepts in the generated text.`,
      !!shouldIncludeAnalogies,
    ),
    getInstructionIfApplicable(
      `Include relevant quotes or statements from experts in the generated text.`,
      !!shouldIncludeQuotes,
    ),
    getInstructionIfApplicable(
      `Where possible, include statistics or data to support claims in the generated text.`,
      !!shouldIncludeStatistics,
    ),
    getInstructionIfApplicable(`Consider this additional context: "${context}".`, !!context),
    getInstructionIfApplicable(
      `Strictly consider this set of constrains: ${additionalConstrains?.map((k) => `"${k}"`).join(', ')}.`,
      !!additionalConstrains,
    ),
    getInstructionIfApplicable(
      `Make sure to include the following keywords in the generated text: ${keywords
        ?.map((k) => `"${k}"`)
        .join(', ')}.`,
      !!keywords,
    ),
    getInstructionIfApplicable(
      `Make sure not to use the following keywords in the generated text: ${exclusions
        ?.map((k) => `"${k}"`)
        .join(', ')}.`,
      !!exclusions,
    ),
    getInstructionIfApplicable(`The generated text should be in the style of "${mimicPerson}".`, !!mimicPerson),
    getInstructionIfApplicable(`At the end, clearly request about "${callToAction}".`, !!callToAction),
    getInstructionIfApplicable(`Consider this example: "${example}".`, !!example),
    getInstructionIfApplicable(
      `Maximum length of the generated text should be no more than ${maxLength} characters.`,
      !!maxLength,
    ),
    getInstructionIfApplicable(`Format generated text with Markdown.`, !!shouldUseMarkdown),
    getInstructionIfApplicable(`The text should be in ${language} language.`, !!language),
  ];

  return instructions;
};

export { getInstructions };
