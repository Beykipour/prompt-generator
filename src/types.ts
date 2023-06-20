type Tone =
  | 'formal'
  | 'casual'
  | 'playful'
  | 'authoritative'
  | 'empathetic'
  | 'neutral'
  | 'informative'
  | 'persuasitve'
  | 'amusing'
  | 'humorous';
type Format =
  | 'essay'
  | 'letter'
  | 'email'
  | 'news-article'
  | 'blog-article'
  | 'scientific-paper'
  | 'story'
  | 'poem'
  | 'instruction-manual'
  | 'product-description'
  | 'presentation'
  | 'dialogue'
  | 'table'
  | 'code-block'
  | 'ordered-list'
  | 'unordered-list'
  | 'outline'
  | 'headline';
type ActAs =
  | 'expert'
  | 'critic'
  | 'enthusiast'
  | 'teacher'
  | 'student'
  | 'parent'
  | 'child'
  | 'friend'
  | 'advisor'
  | 'analyst'
  | 'blogger'
  | 'researcher'
  | 'travel-guide';
type Objective = 'inform' | 'persuade' | 'entertain' | 'explain' | 'advise' | 'analyse' | 'inspire' | 'convince';
type Audience =
  | 'professionals'
  | 'general-public'
  | 'kindergarten-children'
  | 'primary-school-students'
  | 'middle-school-students'
  | 'highscool-students'
  | 'undergraduate-students'
  | 'graduate-students'
  | 'phd-students'
  | 'tech-savy-people'
  | 'non-tech-savy-people'
  | 'business-people'
  | 'entrepreneurs'
  | 'engineers';

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

export { PromptOptions, Tone, ActAs, Objective, Audience, Format };
