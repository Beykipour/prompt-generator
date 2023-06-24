# Simple Prompt Generator

Simple type-safe prompt generator - no need to go through long articles or cheatsheets to make sure you are considering the factors required for a simple prompt.

✋ This project was created as for my own personal learning and curiousity, so the functionality and quality is not guaranteed. But any suggestions for improvements or any contributions is highly welcome and appreciated :)

And it's a tiny package, 6.4kB tgz.

## Instrallation

```shell
npm i prompt-generator
```

## Usage

```ts
import { getTextCompletionPrompt, getTokenCount } from 'prompt-generator';
//...
const prompt = getTextCompletionPrompt(customizationOptions);
const promptTokenCount = getTokenCount(prompt);
//...
// Assuming you are using OpenAI:
const response = await openai.createCompletion({
  model: 'text-davinci-003',
  prompt,
  max_tokens: MODEL_CONTEXT_LENGTH - promptTokenCount,
});
```

## Available utils:

### `getTokenCount`

Gives you the count of the tokens of your prompt. Note that the token count of your prompt plus expected maximum token length of the response cannot exceed the model's context length.
This util uses [gpt-3-encoder](https://www.npmjs.com/package/gpt-3-encoder) under the hood.

### `getTextCompletionPrompt`

Generates a completion prompt based on a given set of options.

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
  topic: string;
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
- The tone of voice of the text should be formal.
- The text should be generated for this target audience: "teenagers".
- Format and structure of the text should be essay
- Include the main sources to support information in the generated text.
- Include some analogies or examples to clarify concepts in the generated text.
- Include relevant quotes or statements from experts in the generated text.
- Where possible, include statistics or data to support claims in the generated text.
- Consider this additional context: "I want to read the text in a TV show".
- Strictly consider this set of constrains: "avoid using any human names in the text".
- Make sure to include the following keywords in the generated text: "moonlight", "twilight", "sunshine".
- Make sure not to use the following keywords in the generated text: "hello", "goodbye", "hell", "heaven".
- The generated text should be in the style of "Shakespeare".
- At the end, clearly request about "What is your favorite weather".
- Consider this example: "Sun is really useful for the environment and livelihoon on earth. people will die without sun. but we should make sure to to wear sunglasses and sunscreen to stay safe when we are sunbathing".
- Maximum length of the generated text should be no more than 500 characters.
- Format generated text with Markdown.
- The text should be in English language.
Stictly double check if all the above instructions are taken into consideration and the response is accurate before returning it.
```

## Example ChatGPT response:

```text
The Moon is a fascinating celestial object that has been gracing our night sky for centuries! Its enigmatic light in the form of moonlight, twilight, and even in the middle of the day's sunshine, has inspired poets, artists, and scientists alike. From its role in the tides of our oceans to its significance in different religious beliefs, the Moon has been an inspiration and the subject of wonder for mankind.

When we look at the Moon, we are looking at cosmic history - its craters are battle scars of collisions with planets and other objects in its vicinity. We can also observe its phases, an ever-changing reminder of its orbital journey around the Earth. Studies have shown that the moon reflects the Earth’s light which is why we can observe it even at times when it is facing away from the Sun.

Interestingly, scientists have concluded that long ago, the Earth and Moon rotated on a much faster speed leading to much more frequent lunar eclipses, but also potentially creating issues for life on the planet due to unstable climates. The Moon's gravitational pull also creates the ocean tides on Earth.

From society's perspective, the Moon and its phases have helped with navigation and acted as a timekeeper. Many cultures, including the Jewish and Islamic, have used the Moon's cyclic phases for their religious calendar.

In the current day and age, the Moon continues to fascinate us. Explorations such as the Moon landing have revealed more of its mysteries, and also the continued ambition of the human spirit to don the mantle and tread where no one has gone before.

What is your favorite weather?
```
