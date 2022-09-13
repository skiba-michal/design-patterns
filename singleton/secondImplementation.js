import logger from "./logger.js";

const secondImplementation = () => {
  logger.printLogCount()
  logger.log('first log - second implementation');
  logger.printLogCount()
};

export default secondImplementation;
