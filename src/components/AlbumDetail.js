import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
// AlbumDetail is a presenational component and
// its using props so it needs to be functional component.
// we recieved props with name of album and then we go inside that
// album and get detail for each album.

const AlbumDetail = ({album}) => {

  // using destructuring, means that we are getting these item
  // out from the album object
   const { title, artist, thumbnail_image, image } = album;

 return (
  <Card>
  <CardSection>
   <View style={styles.thumbnailContainerStyle}>
     <Image
     style={styles.thumbnailStyle}
     source={{ uri: thumbnail_image }}
     />
  </View>
   <View style={styles.headerContentStyle}>
  <Text style={styles.headerTextStyle}>{title} </Text>
  <Text>{artist} </Text>
  </View>
  </CardSection>

  <CardSection>
    <Image
    style={styles.ImageStyle}
    source={{ uri: image }}
    />
  </CardSection>

  </Card>

 );
};

const styles = {
headerContentStyle: {
  flexDirection: 'column',
  justifyContent: 'space-around'
},

headerTextStyle: {
  fontSize: 18
},


thumbnailStyle: {
  height: 50,
  width: 50
},

thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  ImageStyle: {
   height: 300,
   flex: 1,
    width: null
  }


};

export default AlbumDetail;
