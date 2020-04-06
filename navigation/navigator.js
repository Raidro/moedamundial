import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import telaPrincipal from '../screens/tela_principal/index.js'
import listaTodas from '../screens/lista_todas/index.js'

export default createAppContainer(createSwitchNavigator(
  {
    //Main: {screen: Main},
    telaPrincipal: {screen: telaPrincipal},
    listaTodas: {screen: listaTodas}
    //AreaChart: {screen: AreaChart},
    //AuthOrApp: {screen: AuthOrApp},
    //Details: {screen: Details}
  },
  {
    initialRouteName: 'listaTodas',
  }
));