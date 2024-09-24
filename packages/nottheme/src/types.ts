// These aren't great safety-wise but it's whatever
export type Value = string | number | boolean | null;
export type Settings = {
  options: Record<
    string,
    {
      name?: string;
      choices: string[];
      names?: Record<string, string>;
      values: Record<string, Record<string, Value>>;
      default:
        | string
        | (
            | string
            | {
                query: string;
                choice: string;
              }
          )[];
    }
  >;
};
