class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = [];
      FancyLogger.instance = this;
    }
    return FancyLogger.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(`%c Fancy logger -> ${message}`, "color: blue; font-size: 16px");
  }

  printLogCount() {
    console.log(`%c ${this.logs.length} Logs`, "color: red; font-size: 16px");
  }
}

const logger = new FancyLogger();

Object.freeze(logger);

export default logger;
