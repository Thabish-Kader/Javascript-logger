type EnvType = "development" | "staging" | "production";

export class Logger {
  readonly log!: (message?: unknown, ...params: unknown[]) => void;
  readonly warn!: (message?: unknown, ...params: unknown[]) => void;
  readonly error!: (message?: unknown, ...params: unknown[]) => void;
  constructor(envType?: EnvType) {
    switch (envType) {
      case "development":
        this.log = console.log.bind(console);
        this.warn = console.warn.bind(console);
        this.error = console.error.bind(console);
        break;
      case "staging":
        this.log = console.log.bind(console);
        this.warn = console.warn.bind(console);
        this.error = () => {};
        break;
      case "production":
        this.log = () => {};
        this.warn = () => {};
        this.error = () => {};
        break;
      default:
        this.log = console.log.bind(console);
        this.warn = console.warn.bind(console);
        this.error = console.error.bind(console);
        break;
    }
  }
}

export const logger = new Logger(import.meta.env.VITE_NODE_ENV);
