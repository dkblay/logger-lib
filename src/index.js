class Logger {

    constructor() {
        console.log('Logger initialized for the first time😜');
    }

    log(message) {
        console.log(`------> ${message} <---------`);
    }
 }


export default new Logger();