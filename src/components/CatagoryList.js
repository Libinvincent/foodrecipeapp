import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Display } from '../utils'
import { Colors, Fonts } from '../constants'
import { foodDataFilter } from '../service'
import RecipeSubCard from './RecipeSubCard'

export default function CatagoryList({item}) {
    
    const [catagoryItem,setCatagoryItem]=useState([])
    const [cat,setcat]=useState({item})
    
    
 
   

    function CatagorylistView(catagoryname){
        console.log(catagoryname)
        
  foodDataFilter(catagoryname).then(res=>{
    console.log(res)
    setCatagoryItem(res.meals)
    
    
    
  })
  

    }


    return (
        <TouchableOpacity style={Styles.container} activeOpacity={.8} onPress={()=>CatagorylistView(item.strCategory)} >
            <View style={Styles.catagoryView}>
                <Text style={Styles.catagoryText} >{item.strCategory}</Text>
            </View>

        </TouchableOpacity>
    )
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    catagoryView: {
        width: Display.SetWidth(13),
        height: Display.SetHeight(5),
        borderRadius: 10,
        backgroundColor: Colors.DARK_FIVE,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',

    },
    catagoryText:{
        fontFamily:Fonts.Poppins_Bold,
        fontSize:15,
        lineHeight:15*1.4,
        color:Colors.DEFAULT_WHITE,
        width:Display.SetWidth(10)

    }

})