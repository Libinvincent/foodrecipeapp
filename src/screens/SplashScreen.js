import { View, Text,StatusBar,Image,StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Images,Fonts,Colors } from '../constants'
import { Display } from '../utils'


export default function SplashScreen({navigation}) {

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate("Drawer")
    },1000)
  },[])

 
  
  
  return (
    <View style={Styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={Colors.DEFAULT_GREEN}  translucent/>
      <Image source={Images.RECIPeELOGO}  style={Styles.image}/>
      <Text style={Styles.titltText}>Foorecipe App</Text>
      
    </View>
  )
}

const Styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.DEFAULT_GREEN,
    justifyContent:"center",
    alignItems:"center",
  },
  image:{ 
    height:Display.SetHeight(20),
    width:Display.SetWidth(20),
    borderRadius:Display.Logo,
  },
  titltText:{
    color:Colors.DEFAULT_WHITE,
    fontSize:32,
    fontFamily:Fonts.Poppins_Bold,
  }
})