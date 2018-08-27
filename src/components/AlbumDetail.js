import React from 'react';
import { View, Text } from 'react-native';

// AlbumDetail is a presenational component and
// its using props so it needs to be functional component.
// we recieved props with name of album and then we go inside that
// album and get detail for each album.

const AlbumDetail = (props) => {
 return (
  <View>
  <Text>{props.album.title} </Text>
  </View>

 );
};

export default AlbumDetail;
