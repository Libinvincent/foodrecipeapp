import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Colors, Fonts, Images } from '../constants'



export default function CategoryMenuItem({ name, logo,Categoryname,navigation}) {
  

  // Allitem is a filter cheyyan ulla data aanu home page il aanu athu use cheythathu

    // console.log("my all item is ther",Categoryname)
  return (
    <TouchableOpacity key={name} onPress={()=>navigation.navigate("FilterRecipe",Categoryname)}
      style={Styles.category}>
      <View key={name} style={Styles.icoinContainer}>
        <Image source={Images[logo]} style={Styles.categoryIcon} />
      </View>
      <Text style={Styles.categoryText}>{name}</Text>



    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({  
  icoinContainer: {
    borderRadius: 25,
    width: 50,
    height: 50,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.DEFAULT_GRAY
  
},
  category: {
  alignItems: 'center',
  marginTop: 1
},
  categoryIcon: {
  height: 30,
  width: 30,
  opacity: 1
},
  categoryText: {
  fontSize: 10,
  lineHeight: 10 * 1.4,
  fontFamily: Fonts.Poppins_Medium,
  color: Colors.DEFAULT_WHITE,
  marginTop: 5,
  opacity: 1
}
})