/**
 * runspec-node — Node/TypeScript language pack for runspec
 *
 * Status: Planned. Stub only.
 *
 * Will implement the same interface as runspec-python, providing
 * native Node types from a runspec.toml spec. All integration
 * fixtures in tests/integration/fixtures/ must pass.
 */

export interface RunSpecConfig {
  autonomyDefault: string;
  lang?: string;
  version: string;
}

export interface ArgSpec {
  name: string;
  type: string;
  required: boolean;
  default?: unknown;
  description?: string;
  options?: string[];
  range?: [number, number];
  multiple?: boolean;
  delimiter?: string;
  short?: string;
  env?: string;
  deprecated?: string;
  autonomy?: string;
  ui?: string;
}

// TODO: implement parse(), discover(), emit()
export function parse(): never {
  throw new Error("runspec-node is not yet implemented");
}
