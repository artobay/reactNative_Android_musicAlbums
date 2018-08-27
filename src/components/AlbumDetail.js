import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'; 
// AlbumDetail is a presenational component and
// its using props so it needs to be functional component.
// we recieved props with name of album and then we go inside that
// album and get detail for each album.

const AlbumDetail = (props) => {
 return (
  <Card>
  <CardSection>
  <Text>{props.album.title} </Text>
  </CardSection>
  </Card>

 );
};

export default AlbumDetail;
