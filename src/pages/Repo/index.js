import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

export default class Repo extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repo').full_name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    repo: '',
  };

  async componentDidMount() {
    const { navigation } = this.props;

    const repo = await navigation.getParam('repo');

    this.setState({ repo });
  }

  render() {
    const { repo } = this.state;

    return <WebView source={{ uri: repo.html_url }} style={{ flex: 1 }} />;
  }
}
