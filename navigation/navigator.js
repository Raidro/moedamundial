import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import telaPrincipal from '../screens/tela_principal/index.js'

export default createAppContainer(createSwitchNavigator(
  {
    //Main: {screen: Main},
    telaPrincipal: {screen: telaPrincipal},
    //Config: {screen: Config},
    //AreaChart: {screen: AreaChart},
    //AuthOrApp: {screen: AuthOrApp},
    //Details: {screen: Details}
  },
  {
    initialRouteName: 'telaPrincipal',
  }
));