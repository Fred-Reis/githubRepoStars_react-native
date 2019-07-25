import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import User from './pages/User';
import Repo from './pages/Repo';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      Repo,
    },
    {
      headerLayoutPreset: 'center', // centraliza o texto cabeçalho
      headerBackTitleVisible: false, // no ios aprece um voltar isso oculta
      defaultNavigationOptions: {
        // define padrão em todas as rotas
        headerStyle: {
          // estilo do cabeçalho
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff', // preenche tudo que não for background com essa cor
      },
    }
  )
);

export default Routes;
