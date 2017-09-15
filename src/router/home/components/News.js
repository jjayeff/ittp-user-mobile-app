import React, { Component } from 'react';
import { View } from 'react-native';
import ImageSlider from 'react-native-image-slider';

const imagesNews = [
    require('../../../../store/image/new1.jpeg'),
    require('../../../../store/image/new2.jpeg'),
    require('../../../../store/image/new1.jpeg'), 
    require('../../../../store/image/new2.jpeg'),                       
];

class News extends Component {
  constructor(props) {
      super(props);

      this.state = {
          position: 0,
          interval: null

      };
  }

  componentWillMount() {
      this.setState({ interval: setInterval(() => {
          this.setState({ 
            position: this.state.position === imagesNews.length - 1 ? 0 : this.state.position + 1 
          });
      }, 4500) });
  }

  componentWillUnmount() {
      clearInterval(this.state.interval);
  }
    
  render() {
    return (
      <View style={{ height: 170 }}>
        <ImageSlider
          images={imagesNews}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })} 
        />
      </View>
    );
  }
}


export default News;
