export type Counter = Readonly<{
  label: string;
  value: number;
}>;

export type Project = Readonly<{
  counters: ReadonlyArray<Counter>;
  id: keyof State['projects'];
  name: string;
}>;

export type State = Readonly<{
  activeProject: keyof State['projects'] | null;
  projectOrder: ReadonlyArray<keyof State['projects']>;
  projects: Readonly<{
    [id: string]: Project
  }>;
}>;

export type Actions = Readonly<{
  addProject: (name: string) => void;
}>;
