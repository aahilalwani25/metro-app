/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/screens/HomeScreen';

function Main(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
        <Component {...props} />
        {/* </PersistGate> */}
      </Provider>
    );
    return <EnhancedComponent />;
  };
}

Navigation.registerComponent('splash-screen', () => App);
Navigation.registerComponent('home-screen', () => HomeScreen)

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'splash-screen',
            },
          },
        ],
      },
    },
  });
});
