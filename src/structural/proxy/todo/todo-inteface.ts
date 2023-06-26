export interface TodoInterface {
  message: string;
  done: boolean;

  setDone(value: boolean): void;
}
