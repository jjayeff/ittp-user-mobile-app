import React, { Component } from 'react';
import { View, Image } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { ID } from '../../../texts';
import { Button } from '../../../components/common';


class CitizenIdForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.onChangeCitizenId = this.onChangeCitizenId.bind(this);
    this.onPressLogin = this.onPressLogin.bind(this);
  }
  onChangeCitizenId(text) {
    this.setState({ username: text });
  }
  onPressLogin() {
    const accessToken = this.props.data;
    const responseInfoCallback = (error, res) => {
      if (error) {
        console.log(error);
      } else {
        const json = {
          accessToken,
          id: res.id,
          username: this.state.username
        };   
        this.props.submitCitizenIdFacebook(json);   
      }
    };
    const infoRequest = new GraphRequest(
      '/me',
      {
        accessToken,
        parameters: {
          fields: {
            string: 'email,name,first_name,middle_name,last_name'
          }
        }
      },
      responseInfoCallback
    );
    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
  }
  renderLoading(loading) {
    return (
      <View style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20, paddingBottom: 5 }} >
        <Button
          title='Login'
          onPress={this.onPressLogin}
          icon='envira'
          type='font-awesome'
          spinner={loading}
        />
      </View>
    );
  }
  render() {
    const { loading } = this.props;
    return (
      <View style={{ height: '100%', width: '100%' }}>
        <Image
          style={{ height: '100%', width: '100%', justifyContent: 'center', }}
          source={require('../../../../store/image/backgroud-login.png')}
        >
          <View style={{ alignSelf: 'center', paddingBottom: 50 }}>
            <Image
              style={{ height: 60, width: 180 }}
              source={require('../../../../store/image/ittp-logo.png')}
            />
          </View>
          <View style={{ paddingBottom: 10 }}>
            <Fumi
              label={ID}
              iconClass={FontAwesomeIcon}
              iconName={'user'}
              iconColor={'#03A9F4'}
              iconSize={20}
              style={{ height: 60, width: '80%', alignSelf: 'center' }}
              labelStyle={{ fontFamily: 'Cloud-Light' }}
              onChangeText={(text) => { this.onChangeCitizenId(text); }}
            />
          </View>
          {this.renderLoading(loading)}
        </Image>
      </View>
    );
  }
}
export default CitizenIdForm;
