import AppleHealthKit from 'rn-apple-healthkit';

class FitService {
  isAvailable = () => new Promise((resolve, reject) => {
    AppleHealthKit.isAvailable((error, result) => {
      if (error) {
        console.log('isAvailable error', error);

        reject(false);
      }

      resolve(true);
    });
  });

  initialize = () => new Promise((resolve, reject) => {
    const options = {
      permissions: {
        read: ['StepCount'],
      }
    };

    AppleHealthKit.initHealthKit(options, (error, result) => {
      if (error) {
        reject(error);
      }

      resolve();
    });
  });

  getSteps = () => new Promise((resolve, reject) => {
    const date = new Date();
    const options = {
      date: date.toISOString()
    };

    AppleHealthKit.getStepCount(options, (error, result) => {
      if (error) {
        reject(error);
      }

      resolve(result);
    });
  });
}

export default new FitService();
