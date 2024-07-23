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
import MapScreen from './src/screens/MapScreen';
import EventsScreen from './src/screens/EventsScreen';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import ThingsToDoScreen from './src/screens/ThingsToDoScreen';

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

Navigation.registerComponent('splash-screen', () => Main(App));
Navigation.registerComponent('home-screen', () => Main(HomeScreen))
Navigation.registerComponent('about-us',()=>Main(AboutUsScreen))
Navigation.registerComponent('contact-us',()=>Main(ContactUsScreen))
Navigation.registerComponent('weather-screen',()=>Main(WeatherScreen))
Navigation.registerComponent('map-screen',()=>Main(MapScreen))
Navigation.registerComponent('events-screen',()=>Main(EventsScreen))
Navigation.registerComponent('things-to-do-screen',()=>Main(ThingsToDoScreen))


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
