import AppleHealthKit from 'rn-apple-healthkit';
import { NativeAppEventEmitter } from 'react-native';

class FitService {
  subscriber = null;

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

      AppleHealthKit.initStepCountObserver({}, () => {});

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

  subscribe = (callback) => {
    NativeAppEventEmitter.addListener('change:steps', (event) => {
      console.log('event:change:steps', event);

      callback(this);
    });
  }
}

export default new FitService();
