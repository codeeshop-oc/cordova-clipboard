interface Clipboard {
  copy(
    text: string,
    onSuccess: (copiedText: string) => void,
    onFail: () => void
  ): void;

  paste(
    onSuccess: () => void,
    onFail: () => void
  ): void;

  clear(
    onSuccess: () => void,
    onFail: () => void
  ): void;
}

declare const clipboard: Clipboard;
export = clipboard;
