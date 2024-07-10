/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/screens/HomeScreen';
import AboutUsScreen from './src/screens/AboutUsScreen';
import ContactUsScreen from './src/screens/ContactUsScreen';
import WeatherScreen from './src/screens/WeatherScreen';

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
Navigation.registerComponent('about-us',()=>AboutUsScreen)
Navigation.registerComponent('contact-us',()=>ContactUsScreen)
Navigation.registerComponent('weather-screen',()=>WeatherScreen)


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
