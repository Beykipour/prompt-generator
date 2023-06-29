# Simple Prompt Generator

Simple type-safe prompt generator - no need to go through long articles or cheatsheets to make sure you are considering the factors required for a simple prompt.

✋ This project was created as for my own personal learning and curiousity, so the functionality and quality is not guaranteed. But any suggestions for improvements or any contributions is highly welcome and appreciated :)

And it's a tiny package, 6.4kB tgz.

## Demo

I've showcased a usage of the library in this simple [prompt generator app](https://beykipour.github.io/prompt-generator-app/).

## Instrallation

```shell
npm i prompt-generator
```

## Available Utils:

- `getTextCompletionPrompt`: Generates a completion prompt based on a given set of options.

## Usage

```ts
import { getTextCompletionPrompt } from 'prompt-generator';

//...
const prompt = getTextCompletionPrompt(customizationOptions);
//...
// Assuming you are using OpenAI:
const response = await openai.createCompletion({
  model: 'text-davinci-003',
  prompt,
});
```

Note: You may need to set the maximum possible tokens for the response of your AI model. For that, you may want to use a package like [gpt-3-encoder](https://www.npmjs.com/package/gpt-3-encoder) to get the token count of your prompt. Then the you can calculate the maximum token of response like this:

```ts
import { encode } from 'gpt-3-encoder';
//...
const promptTokenCount = encode(prompt).length;
//...
// Assuming you are using OpenAI:
const response = await openai.createCompletion({
  //...
  max_tokens: MODEL_CONTEXT_LENGTH - promptTokenCount,
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
   * Constraints or limitations that should be considered
   */
  additionalConstraints?: string[];
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
  "additionalConstraints": [
    "avoid using any human names in the text",
    "use short senteces",
    "break the text into multiple paragraphs"
  ],
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
- Strictly consider this set of constraints: "avoid using any human names in the text", "use short sentences", "break the text into multiple paragraphs".
- Make sure to include the following keywords in the generated text: "moonlight", "twilight", "sunshine".
- Make sure not to use the following keywords in the generated text: "hello", "goodbye", "hell", "heaven".
- The generated text should be in the style of "Shakespeare".
- At the end, clearly request about "What is your favorite weather".
- Consider this example: "Sun is really useful for the environment and livelihoon on earth. people will die without sun. but we should make sure to to wear sunglasses and sunscreen to stay safe when we are sunbathing".
- Maximum length of the generated text should be no more than 500 characters.
- Format generated text with Markdown.
- The text should be in English language.
Strictly double check if all the above instructions are taken into consideration and the response is accurate before returning it.
```

## Example ChatGPT response:

> The moon is a natural satellite of Earth, which fascinates us with its magnificent presence at night as well as during the day. It appears during the twilight hours, creating an exponential effect of ambient light and casting a luminous spell in the form of moonlight. We appreciate the moon for its beauty, presence, and wisdom embedded in its essential functions such as tide movement and climate control.

> To understand the moon's impact on different aspects of life, it is important to take into account not only the physical element but also its metaphorical interpretation. For example, in some cultures, the moon is an important symbol of mystery, linking it to spiritual teachings. As Shakespeare rightly said: “The moon tells secrets she’s sworn never to reveal.” That is why the moon has become a source of inspiration for many generations, as it can be seen in different works of art, literature, and music.

> From a scientific point of view, the effects of the moon on Earth can be explained in terms of its gravitational pull, which provokes high and low tides and affects ocean currents and hence, climate. Additionally, the moon reflects the sun's light and radiates heat, making it an inevitable element for the balance of different weather types, from, for example, mild winter days to dry summer afternoons.

> The moon has a mystical charm that is unique and timeless. It is the perfect backdrop for moments of reflection, and for finding our inner peace while observing its majestic presence in the night sky.

> What is your favorite weather?
