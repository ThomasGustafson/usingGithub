import React from "react";
import{View, Text , StyleSheet,Image, TouchableOpacity, ShadowPropTypesIOS} from 'react-native';





const Song =(props)=>{
   




   
   return(
   <View style={styles.track}>
      


      
       
       
       
       
       

       <View style={styles.trackLeft}>
           <View />

          <Image source={require('../assets/' + props.name)} style ={styles.trackImage}/>

           </View>
        
       <Text style={styles.trackName}>{props.text}</Text>
       </View>
       
   );




   }






const styles = StyleSheet.create({


    track:{

        backgroundColor:'#FFF',
        padding: 15,
        borderRadius:15,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginBottom:15,




    },
    trackLeft:{
        flexDirection: 'row',
        alignItems:'center',
        flexWrap: 'wrap',
    },
    trackName:{},

    trackImage:{
        padding: 10,
        margin: 5,
        height: 100,
        width: 100,
        resizeMode: 'stretch',





    },




    





































})



























export default Song;