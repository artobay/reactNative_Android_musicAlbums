
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
constructor(props) {
  super(props);
this.state = { albums: [] };
}
componentWillMount() {
  axios.get('https://rallycoding.herokuapp.com/api/music_albums')
   // whenever we use setState our component will call the render method again
   // means, that it get rerendered with a new state
  .then(response => this.setState({ albums: response.data }));
}

//use a helper method here,this function would be called automatically when setState rerender page!
renderAlbums() {
  return this.state.albums.map(album =>

   // used a key prop , because we need unique key for each item of the array

    <AlbumDetail key={album.title} album={album} />
  );
}

render() {
  console.log(this.state);
return (
   <View>
   {this.renderAlbums()}
   </View>
);
  }
}

export default AlbumList;
