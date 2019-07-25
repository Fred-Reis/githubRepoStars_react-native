import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
  RepoButton,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
    loading: false,
    page: 1,
    refreshing: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const { navigation } = this.props;
    const { page } = this.state;

    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({
      stars: response.data,
      loading: false,
      page: page + 1,
    });
  }

  loadMore = async () => {
    this.setState({ loadingPage: true });

    const { navigation } = this.props;

    const { page, stars } = this.state;

    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred?page=${page}`);

    this.setState({
      stars: [...stars, ...response.data],
      page: page + 1,
      loadingPage: false,
    });
  };

  refreshList = async () => {
    this.setState({ refreshing: true });
    const { page } = this.state;

    const { navigation } = this.props;

    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({
      stars: response.data,
      page: page + 1,
      refreshing: false,
    });
  };

  handleNavigate = repo => {
    const { navigation } = this.props;

    navigation.navigate('Repo', { repo });
  };

  render() {
    const { navigation } = this.props;
    const { stars, loading, loadingPage, refreshing } = this.state;

    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        <View loading={loading} loadingPage={loadingPage}>
          {loading ? (
            <ActivityIndicator color="#333" size={50} />
          ) : (
            <Stars
              data={stars}
              keyExtractor={star => String(star.id)}
              renderItem={({ item }) => (
                <Starred>
                  <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                  <Info>
                    <Title>{item.name}</Title>
                    <Author>{item.owner.login}</Author>
                    <RepoButton onPress={() => this.handleNavigate(item)}>
                      <Icon name="arrow-right-thick" />
                    </RepoButton>
                  </Info>
                </Starred>
              )}
              onEndReached={this.loadMore}
              onEndReachedThreshold={0.2}
              onRefresh={this.refreshList}
              refreshing={refreshing}
            />
          )}
          {loadingPage && <ActivityIndicator color="#333" />}
        </View>
      </Container>
    );
  }
}
