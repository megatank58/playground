export const DEFAULT_CONTENT = `f x = sin(x)/x

graph(f)
` as const;

export const WORKERS_URL =
  "https://worker-rust.megatank.workers.dev" as const;

export const PLAYGROUND_DEBOUNCE_MS = 1_000 as const;
