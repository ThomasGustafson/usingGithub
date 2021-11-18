
// Thomas Gustafson//
// Mobile development//
// music  app//
// 11/10/21//
// additional code from Nicholas B Maccari//





import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Song from './components/Song';


export default function App() {
const [isToggled, setToggled] = useState(false);
const toggleTrueFalse =() => setToggled(!isToggled);


  return (
    <View style={styles.container}>
      
    <View style ={styles.songsWrapper}>

    <Text style={styles.appTitle}>
    Tapp music app
    </Text>
<View style={styles.songsBackground}>

<View  style={isToggled==true?styles.selectedSong: styles.song}> 
<TouchableOpacity onPress ={toggleTrueFalse}>
<Song name ={'songImages/loose yourself Eminem.jpg'} text ={'loose yourself by Eminem from the film 8 mile'}/>
</TouchableOpacity>
<TouchableOpacity onPress ={toggleTrueFalse}>
<Song name ={'songImages/losing my religion r.e.m.jpg'} text ={'loosing my religion by R.E.M'}/>
</TouchableOpacity>
<TouchableOpacity onPress ={toggleTrueFalse}>
<Song name ={'songImages/rhiannon fleetwood mack.jpg'} text ={'rhiannon by Fleetwood Mac'}/>
</TouchableOpacity>
<TouchableOpacity onPress ={toggleTrueFalse}>
<Song name ={'songImages/tiny dancer elton john.jpg'} text ={'Tiny dancer by Elton John my favorite elton John song'}/>
</TouchableOpacity>
<TouchableOpacity onPress ={toggleTrueFalse}>
<Song name ={'songImages/in the dark bring me the horizon.jpg'} text ={'in the dark by Bring me the horizon'}/>
</TouchableOpacity>
<TouchableOpacity onPress ={toggleTrueFalse}>
<Song name ={'songImages/black hole sun soundgardern.jpg'} text ={'black hole sun by Soundgarden'}/>
</TouchableOpacity>





</View>
<View>



</View>
</View>
</View>
 <View style ={styles.test}>



<View>
  <TouchableOpacity>

<Image source ={require("./assets/mediaControlls/previous-gabaf1e4a5_640.png")} style ={styles.previous} />
<Image source ={require("./assets/mediaControlls/pause-g960c8ff39_640.png")} style ={styles.pause} />
<Image source ={require("./assets/mediaControlls/play-g9f7b11324_640.png")} style ={styles.play} />
<Image source ={require("./assets/mediaControlls/next-g34d8fb4f1_640.png")} style ={styles.next} />







</TouchableOpacity>


</View>











</View> 
</View>













  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95a4d0',
   
  },



songsWrapper:{ 
width:1400,
height:200,
paddingLeft:600,
paddingTop:10,


},

appTitle:{
  fontSize: 24,
  fontWeight:'bold',
  textAlign:'center',
  paddingBottom: 50,



},

songsBackground:{

  backgroundColor:"#acacb9",



},

test:{
 
  padding:20,
  borderRadius: 5,
  backgroundColor: '#FFF',
  marginTop: 850,
  marginLeft: 550,
  width: 900,
  height: 150,


},

previous:{

  width: 100,
  height: 100,
  borderColor: '#55BCF6',
  borderWidth: 2,
  borderRadius: 5,
  marginLeft: 80,
 
  




},

pause:{

  width: 100,
  height: 100,
  borderColor: '#55BCF6',
  borderWidth: 2,
  borderRadius: 5,
  marginLeft: 275,
  marginTop: -100,
  




},

play:{

  width: 100,
  height: 100,
  borderColor: '#55BCF6',
  borderWidth: 2,
  borderRadius: 5,
  marginLeft: 475,
  marginTop: -100,
  




},

next:{

  width: 100,
  height: 100,
  borderColor: '#55BCF6',
  borderWidth: 2,
  borderRadius: 5,
  marginLeft: 675,
  marginTop: -100,
  




},


song:{

backgroundColor: '#acacb9',


},

selectedSong:{

 

    backgroundColor:"#00ff00",
  
   

  
 
  

  



},









})
