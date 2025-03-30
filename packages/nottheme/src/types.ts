export type Settings = {
  /**
   * The root element to apply themes to.
   * @default body
   */
  root?: string;

  options: Record<string, Option>;
};

export type Value = string | number | boolean;
export type ChoiceVariables = Record<string, Value>;
export type ChoiceDefaults<Choice extends string> =
  | Choice
  | NonEmptyArray<Choice | { query: string; choice: Choice }>;

// https://stackoverflow.com/questions/56006111/is-it-possible-to-define-a-non-empty-array-type-in-typescript
type NonEmptyArray<T> = [T, ...T[]];

export type Option<Choice extends string = string> = {
  /**
   * A human readable name for this option.
   */
  name?: string;

  /**
   * A list of IDs to use as choices.
   */
  choices: NonEmptyArray<Choice>;

  /**
   * Human readable names for each choice.
   */
  names?: Partial<Record<Choice, string>>;

  /**
   * CSS variables to define when using each value.
   * @example { black: { "--background": "#000000" } }
   */
  values: Record<Choice, ChoiceVariables>;

  /**
   * The default choice to use.
   * Specify an array to use multiple media queries
   */
  default: ChoiceDefaults<Choice>;
};

// helper function to `export default settings({})`
export function settings(value: Settings): Settings {
  return value;
}

// helper function to type each option with unique choices
// having them all in one Record<string, Option> breaks the generic
export function option<Choice extends string>(
  value: Option<Choice>
): Option<Choice> {
  return value;
}
