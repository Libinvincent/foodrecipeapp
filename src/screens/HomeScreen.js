import { View, Text,StyleSheet,StatusBar,ScrollView, FlatList ,ActivityIndicator} from 'react-native'
import React, { useState ,useEffect} from 'react'
import  Ionicons  from 'react-native-vector-icons/Ionicons'
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons'
import Feather  from 'react-native-vector-icons/Feather'
// import {Colors,Fonts,CATEGORIES} from "../constants/index"
import { Colors, Fonts,CATEGORIES } from '../constants'
import {Separator,CategoryMenuItem,RecipeSubCard} from "../components/index"
import { foodDataFeching,foodDataFilter,foodDataSerch } from '../service'
import { TextInput } from 'react-native-gesture-handler'

export default function HomeScreen({navigation}) {

const [item,setitem]=useState()
const[serch,setsearch]=useState('')
const [isApploding,setisApploding]=useState(false)

useEffect(()=> {
   foodDataFeching().then(res =>{
    
     setitem(res?.meals)
     setisApploding(true)
   })
     },[])

  return (
    <View style={Styles.container}>
      <StatusBar barStyle='light-content'
      backgroundColor={Colors.DEFAULT_GREEN}
      translucent/>
      <Separator  height={StatusBar.currentHeight}/>
      
      <View style={Styles.headerContainer}>
        <View style={Styles.backgroundContainer}/>
        <View style={Styles.locationContainer}>
          
          <Text style={Styles.welcometext}>Welcome</Text>
          <Text style={Styles.welcometext}>Libin</Text>
          
          <MaterialIcons name='favorite' size={30} color={Colors.DEFAULT_RED} style={{position:'absolute',right:0}}/>
          <View style={Styles.alertBadge}>
            <Text>12</Text>
          </View>
          </View>

          {/* serching */}

          <View style={Styles.searchContainer}>
            <View style={Styles.searchSelection}>
              <Ionicons name='search-outline' size={25} color={Colors.DEFAULT_GRAY}/>
              <TextInput style={Styles.searchText} placeholder='Search items' 
              selectionColor={Colors.SECONDARY_BLACK} onChangeText={(text)=>setsearch(text)}/>
            </View>
            <Feather name='sliders' size={20} color={Colors.DEFAULT_YELLOW} style={{marginRight:10}}/>

          </View>

          {/* catagory */}

          <View style={Styles.categoriesContainer}>
            {CATEGORIES.map(({name,logo})=>(

              <CategoryMenuItem key={name} name={name} logo={logo} 
              />

            ))}

          </View>
          
        
        
      </View>
      {/* main content view */}
      <ScrollView style={Styles.listContainer} decelerationRate={.8}>
        <View style={Styles.horizontalListContainer}>
          <View style={Styles.horizontalListHeader}>
            <Text style={Styles.listHeaderTitel}>Top rated</Text>
            <Text style={Styles.listHeaderSubtitel}>see all</Text>
          </View>
          {!isApploding ? <ActivityIndicator size="large" color={Colors.DEFAULT_YELLOW} /> :
          <FlatList data={item} renderItem={(item)=><RecipeSubCard {...item}
          navigate={(idMeal)=>navigation.navigate("RecipeScreen",{idMeal})}/>}
            

          ListHeaderComponent={()=><Separator width={20}/>} numColumns={2}/>}
        </View>
      </ScrollView>



    </View>
  )
}

const Styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.SECONDARY_WHITE
  
  },
  backgroundContainer:{
    backgroundColor:Colors.DEFAULT_GREEN,
    height:2000,
    position:'absolute',
    top: -1780,
    width:2000,
    borderRadius:2000,
    alignSelf:'center',
    zIndex:-1
  },
  headerContainer:{
    justifyContent:'space-evenly'
  },
  locationContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
    marginHorizontal:20
  },
  welcometext:{
    color:Colors.DEFAULT_WHITE,
    marginLeft:5,
    lineHeight:13*1.4,
    fontFamily:Fonts.Poppins_Medium,

  },
  alertBadge:{
    borderRadius:32,
    backgroundColor:Colors.DEFAULT_YELLOW,
    justifyContent:'center',
    alignItems:'center',
    height:16,
    width:16,
    position:'absolute',
    right:-2,
    top:-10

  },
  alertBadgeText:{
    color:Colors.DEFAULT_WHITE,
    fontSize:14,
    fontFamily:Fonts.Poppins_Bold,
    lineHeight:14*1.4
  },
 searchContainer:{
  backgroundColor:Colors.DEFAULT_WHITE,
  height:45,
  borderRadius:8,
  marginHorizontal:20,
  marginTop:20,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',

 },
 searchSelection:{
  flexDirection:'row',
  alignItems:'center',
  marginLeft:10,
  
 },
 searchText:{
  color:Colors.DEFAULT_GRAY,
  fontSize:16,
  fontFamily:Fonts.Poppins_Medium,
  lineHeight:16*1.4,
  marginLeft:10,

 },
 categoriesContainer:{
  flexDirection:'row',
  justifyContent:'space-evenly',
  marginTop:20
 },
 listContainer:{
  paddingHorizontal:5,
  zIndex:-5,

 },
 horizontalListContainer:{
  marginTop:30,

 },
 horizontalListHeader:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  marginHorizontal:20,
  marginBottom:5,
 },
 listHeaderTitel:{
  color:Colors.DEFAULT_BLACK,
  fontSize:16,
  fontFamily:Fonts.Poppins_Medium,
  lineHeight:16*1.4,
  marginLeft:10,
  marginTop:10

 },
 listHeaderSubtitel:{
  color:Colors.DEFAULT_YELLOW,
  fontSize:13,
  fontFamily:Fonts.Poppins_Medium,
  lineHeight:13*1.4,
  marginLeft:10,
  marginTop:10
 }



})