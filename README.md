# Simple Prompt Generator

Simple type-safe prompt generator - no need to go through long articles or cheatsheets to make sure you are considering the factors required for a simple prompt.

✋ This project was created as for my own personal learning and curiousity, so the functionality and quality is not guaranteed. But any suggestions for improvements or any contributions is highly welcome and appreciated :)

And it's a tiny package, 1.6k gzipped.

## Instrallation

```shell
npm i prompt-generator
```

## Usage

```ts
import { getTextCompletionPrompt } from 'prompt-generator';
//...
const prompt = getTextCompletionPrompt(customizationOptions);
//...
const response = await openai.createCompletion({
  model: 'text-davinci-003',
  prompt,
});
```

## Available options:

```ts
interface PromptOptions {
  /**
   * Desired tone
   */
  tone?: Tone | string;
  /**
   * Format or structure
   */
  format?: Format | string;
  /**
   * Role or perspective
   */
  actAs?: ActAs | string;
  /**
   * Goal or purpose
   */
  objective?: Objective | string;
  /**
   * Background information, data, or context for accurate content generation
   */
  context?: string;
  /**
   * Constrains or limitations that should be considered
   */
  additionalConstrains?: string[];
  /**
   * Important keywords or phrases to be included
   */
  keywords?: string[];
  /**
   * Important keywords or phrases to avoid
   */
  exclusions?: string[];
  /**
   * Example of desired content
   */
  example?: string;
  /**
   * Target audience
   */
  audience?: Audience | string;
  /**
   * Language for the response
   */
  language?: string;
  /**
   * Inclusion of citations or sources to support information
   */
  shouldIncludeCitations?: boolean;
  /**
   * Inclusion of analogies or examples to clarify concepts
   */
  shouldIncludeAnalogies?: boolean;
  /**
   * Inclusion of relevant quotes or statements from experts
   */
  shouldIncludeQuotes?: boolean;
  /**
   * Inclusion of statistics or data to support claims
   */
  shouldIncludeStatistics?: boolean;
  /**
   * Format with markdown
   */
  shouldUseMarkdown?: boolean;
  /**
   * Force the tabular strcture with specified columns for the output
   * Use alongside `format: table`
   */
  tableColumns?: string[];
  /**
   * Call to action for next steps to be included in the output
   */
  callToAction?: string;
  /**
   * What is it all about
   */
  topic?: string;
  /**
   * Maximum character length of the output
   */
  maxLength?: number;
  /**
   * Mimic specific person
   */
  mimicPerson?: string;
}
```

## Example inputs:

```json
{
  "tone": "casual",
  "format": "outline",
  "actAs": "enthusiast",
  "objective": "entertain",
  "context": "I want to read the text in a TV show",
  "additionalConstrains": ["use short senteces", "break the text into multiple paragraphs"],
  "keywords": ["moonlight", "twilight", "sunshine"],
  "exclusions": ["hello", "goodbye", "hell", "heaven"],
  "example": "Sun is really useful for the environment and livelihoon on earth. people will die without sun. but we should make sure to to wear sunglasses and sunscreen to stay safe when we are sunbathing",
  "audience": "teenagers",
  "language": "English",
  "shouldIncludeCitations": true,
  "shouldIncludeAnalogies": true,
  "shouldIncludeQuotes": true,
  "shouldIncludeStatistics": true,
  "shouldUseMarkdown": true,
  "tableColumns": [],
  "callToAction": "What is your favorite weather",
  "topic": "Moon",
  "maxLength": 500,
  "mimicPerson": "Shakespeare"
}
```

## Example generated prompt:

```txt
Follow the following instructions and generate a text response based on them.

- Act as expert.

- Write a text about moon.

- The goal of the text is to inform.

- The tone of the text should be formal.

- The text should be generated for this target audience: "teenagers".

- Format and structure of the text should be essay

- Include the main sources to support information in the generated text.

- Include some analogies or examples to clarify concepts in the generated text.

- Include relevant quotes or statements from experts in the generated text.

- Where possible, include statistics or data to support claims in the generated text.

- Consider this additional context: "I want to read the text in a TV show".

- Strictly consider this set of constrains: "moonlight", "twilight", "sunshine".

- Make sure to include the following keywords in the generated text: "moonlight", "twilight", "sunshine".

- Make sure not to use the following keywords in the generated text: "hello", "goodbye", "hell", "heaven".

- The generated text should be in the style of "Shakespeare"

- At the end, clearly request about "What is your favorite weather".

- Consider this example: "Sun is really useful for the environment and livelihoon on earth. people will die without sun. but we should make sure to to wear sunglasses and sunscreen to stay safe when we are sunbathing".

- Maximum length of the generated text should be no more than 500 characters.

- Format generated text with Markdown.

- The text should be in English language.

Stictly double check if all the above instructions are taken into consideration and the response is accurate before returning it.
```

## Example ChatGPT response:

```text
The moon provides us with a special kind of light – moonlight. It is said that moonlight has powerful effects on our well-being – positively and negatively. For example, many people find the night sky brighter during a full moon, and they report feeling more energized and active. Twilight is another phenomenon, when the gradually lightening sky signals the transition from night to morning. We often find ourselves in a place of beauty and peace when watching the sky slowly fading into a sunshine-filled day.

The moon holds a pivotal role in our lives. It controls the tide and can have an effect on the environment. It’s hard to measure how much of an impact the moon has on our environment, but experts have seen an impact on breeding, bird migration and animal behavior. We also know that there are no such thing as three days of continuous sunlight or three nights of continuous darkness on Earth, thanks to the powerful impact of the moon.

The moon has long been a source of inspiration for poets, writers, and artists – from Shakespeare’s sonnets that referenced the moon, to Vincent van Gogh’s paintings of the night sky, to the words of Neil Armstrong
```
