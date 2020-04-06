import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import telaPrincipal from '../screens/tela_principal/index.js'
import listaTodas from '../screens/lista_todas/index.js'
import porPeriodo from '../screens/tela_periodo/index.js'

export default createAppContainer(createSwitchNavigator(
  {

    telaPrincipal: { screen: telaPrincipal },
    listaTodas: { screen: listaTodas },
    porPeriodo: { screen: porPeriodo },
  },
  {
    initialRouteName: 'telaPrincipal',
  }
));