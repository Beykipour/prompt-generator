import { PromptOptions } from '../types';

const _getInstructionIfApplicable = (instruction: string, condition: boolean): string => (condition ? instruction : '');

const _trimAllValuesInObject = (obj: Record<string, any>): Record<string, any> =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    let trimmedValue = value;

    if (typeof value === 'string') {
      trimmedValue = value.trim();
    } else if (Array.isArray(value)) {
      trimmedValue = value.map((v) => v.trim());
    } else if (typeof value === 'object') {
      trimmedValue = _trimAllValuesInObject(value);
    }

    return { ...acc, [key]: trimmedValue };
  }, {});

const getInstructions = (options: PromptOptions): string[] => {
  const {
    actAs,
    topic,
    tone,
    format,
    objective,
    context,
    additionalConstraints,
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
    _getInstructionIfApplicable(`Act as ${actAs}.`, !!actAs),
    _getInstructionIfApplicable(`Write a text about ${topic}.`, !!topic),
    _getInstructionIfApplicable(`The goal of the text is to ${objective}.`, !!objective),
    _getInstructionIfApplicable(`The tone of voice of the text should be ${tone}.`, !!tone),
    _getInstructionIfApplicable(`The text should be generated for this target audience: "${audience}".`, !!audience),
    _getInstructionIfApplicable(`Format and structure of the text should be ${format}.`, !!format),
    _getInstructionIfApplicable(
      `The table should include the following tables: ${tableColumns?.map((k) => `"${k}"`).join(', ')}.`,
      format === 'table' && !!tableColumns,
    ),
    _getInstructionIfApplicable(
      `Include the main sources to support information in the generated text.`,
      !!shouldIncludeCitations,
    ),
    _getInstructionIfApplicable(
      `Include some analogies or examples to clarify concepts in the generated text.`,
      !!shouldIncludeAnalogies,
    ),
    _getInstructionIfApplicable(
      `Include relevant quotes or statements from experts in the generated text.`,
      !!shouldIncludeQuotes,
    ),
    _getInstructionIfApplicable(
      `Where possible, include statistics or data to support claims in the generated text.`,
      !!shouldIncludeStatistics,
    ),
    _getInstructionIfApplicable(`Consider this additional context: "${context}".`, !!context),
    _getInstructionIfApplicable(
      `Strictly consider this set of constraints: ${additionalConstraints?.map((k) => `"${k}"`).join(', ')}.`,
      !!additionalConstraints,
    ),
    _getInstructionIfApplicable(
      `Make sure to include the following keywords in the generated text: ${keywords
        ?.map((k) => `"${k}"`)
        .join(', ')}.`,
      !!keywords,
    ),
    _getInstructionIfApplicable(
      `Make sure not to use the following keywords in the generated text: ${exclusions
        ?.map((k) => `"${k}"`)
        .join(', ')}.`,
      !!exclusions,
    ),
    _getInstructionIfApplicable(`The generated text should be in the style of "${mimicPerson}".`, !!mimicPerson),
    _getInstructionIfApplicable(`At the end, clearly request about "${callToAction}".`, !!callToAction),
    _getInstructionIfApplicable(`Consider this example: "${example}".`, !!example),
    _getInstructionIfApplicable(
      `Maximum length of the generated text should be no more than ${maxLength} characters.`,
      !!maxLength,
    ),
    _getInstructionIfApplicable(`Format generated text with Markdown.`, !!shouldUseMarkdown),
    _getInstructionIfApplicable(`The text should be in ${language} language.`, !!language),
  ];

  return instructions;
};

export { getInstructions, _getInstructionIfApplicable, _trimAllValuesInObject };
