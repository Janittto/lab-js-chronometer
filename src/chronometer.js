class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(
      () => {
        this.currentTime++;
      },
      1000,
      printTimeCallback
    );
  }

  getMinutes() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 60);
    }
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0;
    } else if (this.currentTime % 60 !== true) {
      return this.currentTime % 60;
    } else {
      return this.getMinutes;
    }
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let str = value.toString();
    let result = "";
    if (str.length <= 1) {
      result = str.slice(0, 0) + "0" + str;
    } else {
      result = str;
    }
    return result;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
