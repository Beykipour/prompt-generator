interface PromptOptions {
  /**
   * @description Desired tone
   * @example
   * - 'neutral'
   * - 'formal'
   * - 'casual'
   * - 'playful'
   * - 'authoritative'
   * - 'empathetic'
   * - 'neutral'
   * - 'informative'
   * - 'persuasitve'
   * - 'amusing'
   * - 'humorous'
   */
  tone?: string;

  /**
   * @description Format or structure
   * @example
   * - 'table'
   * - 'code block'
   * - 'ordered list'
   * - 'unordered list'
   * - 'outline'
   * - 'headline'
   * - 'essay'
   * - 'letter'
   * - 'email'
   * - 'news article'
   * - 'blog article'
   * - 'scientific paper'
   * - 'story'
   * - 'poem'
   * - 'instruction manual'
   * - 'product description'
   * - 'presentation'
   * - 'dialogue'
   */
  format?: string;

  /**
   * @description Role or perspective
   * @example
   * - 'expert'
   * - 'critic'
   * - 'enthusiast'
   * - 'teacher'
   * - 'student'
   * - 'parent'
   * - 'child'
   * - 'friend'
   * - 'advisor'
   * - 'analyst'
   * - 'blogger'
   * - 'researcher'
   * - 'travel-guide'
   */
  actAs?: string;

  /**
   * @description Goal or purpose
   * @example
   * - 'inform'
   * - 'persuade'
   * - 'entertain'
   * - 'explain'
   * - 'advise'
   * - 'analyse'
   * - 'inspire'
   * - 'convince'
   * - 'describe'
   * - 'compare'
   */
  objective?: string;

  /**
   * @description Target audience
   * @example
   * - 'professionals'
   * - 'general public'
   * - 'highscool students'
   * - 'graduate students'
   * - 'phd students'
   * - 'tech-savvy people'
   * - 'non-tech-savvy people'
   * - 'business people'
   * - 'entrepreneurs'
   * - 'engineers'
   * - 'designers'
   */
  audience?: string;

  /**
   * @description Background information, data, or context for accurate content generation
   */
  context?: string;

  /**
   * @description Constraints or limitations that should be considered
   */
  additionalConstraints?: string[];

  /**
   * @description Important keywords or phrases to be included
   */
  keywords?: string[];

  /**
   * @description Important keywords or phrases to avoid
   */
  exclusions?: string[];

  /**
   * @description Example of desired content
   */
  example?: string;

  /**
   * @description Language for the response
   */
  language?: string;

  /**
   * @description Inclusion of citations or sources to support information
   */
  shouldIncludeCitations?: boolean;
  /**
   * @description Inclusion of analogies or examples to clarify concepts
   */
  shouldIncludeAnalogies?: boolean;
  /**
   * @description Inclusion of relevant quotes or statements from experts
   */
  shouldIncludeQuotes?: boolean;
  /**
   * @description Inclusion of statistics or data to support claims
   */
  shouldIncludeStatistics?: boolean;
  /**
   * @description Format with markdown
   */
  shouldUseMarkdown?: boolean;
  /**
   * @description Force the tabular strcture with specified columns for the output
   * Use alongside `format: table`
   */
  tableColumns?: string[];

  /**
   * @description Call to action for next steps to be included in the output
   */
  callToAction?: string;

  /**
   * @description What is it all about
   */
  topic: string;
  /**
   * @description Maximum character length of the output
   */
  maxLength?: number;
  /**
   * @description Mimic specific person
   */
  mimicPerson?: string;
}

export { PromptOptions };
