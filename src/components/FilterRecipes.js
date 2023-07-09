import { View, Text ,StyleSheet,StatusBar, Button, FlatList,ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonts } from '../constants'
import Separator from './Seperator'
import { foodDataFilter } from '../service'
import RecipeSubCard from './RecipeSubCard'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Display } from '../utils'
export default function FilterRecipe({route:{params:Categoryname},navigation}) {
  // console.log(Categoryname)
  

  const [CatagoryItem,setCatagoryItem]=useState([])
  const [isApploding,setisApploding]=useState(true)
  
useEffect(()=>{
  
   
  foodDataFilter(Categoryname).then(res=>{
    setCatagoryItem(res.meals)
    setisApploding(false)
    
  })

},[])
 
  return (
    <View style={Styles.container}>
      <StatusBar barStyle='light-content'
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent />
        <Separator height={StatusBar.currentHeight}/>
        <View style={Styles.headerView}>
        <Ionicons name='chevron-back-outline' size={30} color={Colors.DEFAULT_GRAY} onPress={() => navigation.goBack()} />
        <Text style={Styles.maintext}>{Categoryname}</Text>
        </View>
        {
          !isApploding ? 
        
      
      <FlatList data={CatagoryItem} renderItem={(CatagoryItem)=><RecipeSubCard {...CatagoryItem}/>}
      numColumns={2}
      ItemSeparatorComponent={()=> <View style={{height:Display.SetHeight(3)}}/>} 
      ListHeaderComponent={()=><Separator height={25}/>}/>:
      <ActivityIndicator  size={'large'}/>}

      
    
      
    </View>
  )
}
const Styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.SECONDARY_WHITE
    },
    headerView:{
      backgroundColor:Colors.DEFAULT_GREEN,
      alignItems:'flex-start',
      flexDirection:'row',
      paddingVertical:20,
      paddingLeft:20

    },
    maintext:{
        fontSize:20,
        fontFamily:Fonts.Poppins_Light,
        lineHeight:20*1.4,
        color:Colors.DEFAULT_WHITE,
        marginLeft:20
    }
})