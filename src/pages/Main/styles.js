import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
// um botão retangular e essa biblioteca tem funcionalidades especificas para cada plataforma

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1; /*ocupa toda extensão possivel*/
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999', // isso não pode ser passo na estilização do botão somente dessa forma
})`
  flex: 1; /*vai ocupar toda extensão possivel menos o botão*/
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

// dessa forma adicionamos icones que não fazem parte da lib styled-components
export const SubmitButton = styled(RectButton)`
  justify-content: center; /*pra centralizar o icone do botão*/
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false, // para não ter barra de rolagem
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 30px 30px;
`;

export const RemoveButton = styled(RectButton)`
  margin-right: 10px;
  margin-left: auto;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #7159c1;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px; /*aqui nã dá pra colocar 50% então tem q setar metade dos valores de tamnho que tem que ser fixos*/
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center; /*é necessario mesmo já usando o align-itens, pq esse alinha o componente
  e se o texto tiver mais de uma linha ñ vai alinhar quem fara isso é o text align*/
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2, // define o numero de linhas que o texto terá
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch; /*pra o item ocupar a largura maxima possivel na tela*/
  border-radius: 4px;
  background: #7159c1;
  justify-content: center;
  align-items: center; /*pro texto ficar centralizado no botão*/
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase; /*colocar em caixa alta*/
`;
