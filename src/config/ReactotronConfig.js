import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.15.2' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear(); // aqui limpa a timeline do quando refresh o emulador
}
