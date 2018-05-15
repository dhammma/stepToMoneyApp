import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { observer } from 'mobx-react';

import FitStore from './FitStore';

@observer
export default class App extends Component {
  fitStore = FitStore;

  componentDidMount() {
    this.fitStore.checkAvailable();
  }

  initialize = () => {
    this.fitStore.initialize();
  }

  render() {
    const { isAvailable, initialized, initializingError, stepCount, error } = this.fitStore;

    if (isAvailable === null) {
      return (
        <View style={styles.container}>
          <Text>
            Initializing...
          </Text>
        </View>
      );
    }

    if (!isAvailable) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>
            Ooops. Health module is not working on your phone. We received this information and check and fix it as soon as possible.
          </Text>
        </View>
      );
    }

    if (!initialized) {
      if (initializingError) {
        return (
          <View style={styles.container}>
            <Text style={styles.warning}>
              You should allow using step information for app
            </Text>
            <Button
              title="Retry"
              onPress={this.initialize}
            />
          </View>
        );
      }

      return (
        <View style={styles.container}>
          <Button
            title="Start"
            onPress={this.initialize}
          />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.container}>
          <Text style={styles.error}>
            {error}
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text>
          Steps:
        </Text>
        <Text>
          {stepCount}
        </Text>
        <Text>
          Today you are earned:
        </Text>
        <Text>
          {stepCount}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center',
  },
  warning: {
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center',
    color: 'orange',
  },
  error: {
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'center',
    color: 'red',
  }
});
