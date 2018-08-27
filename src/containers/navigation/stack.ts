import { StackNavigator } from 'react-navigation';
import Welcome  from '../welcome';
import Language from '../language';

const stackNavigator = StackNavigator({
    Welcome: { screen: Welcome },
    Language: { screen: Language },
  },{
    initialRouteName: 'Welcome',
});