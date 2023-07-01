import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors, Fonts } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Display } from '../utils';
import { AllCatagorylist } from '../service';

import { CatagoryList } from '../components';



export default function DrawerScreen() {

const [catagoryitem,setCatagoryitem]=useState([])
const [loding,setloding]=useState(true)

useEffect(()=>{
  AllCatagorylist().then(response=>{
    //  console.log("my",response)

   setCatagoryitem(response)})

},[])
// console.log("my respose",catagoryitem)
  return (
    <View style={Styles.container}>
      {/* search container */}
      <View style={Styles.searchContainer}>
          <View style={Styles.searchSelection}>
            <Ionicons name='search-outline' size={25} color={Colors.DEFAULT_GRAY} />
            <TextInput style={Styles.searchText} placeholder='Search items'
              selectionColor={Colors.SECONDARY_BLACK} onChangeText={(text) => setsearch(text)} />
          </View>
          
          
        </View>
{/* body parts */}
        <View style={Styles.bodymaincontainer}>
        <Text style={Styles.headerText}>menus</Text>
          </View>
          <View >
          <FlatList data={catagoryitem} renderItem={(catagoryitem) => <CatagoryList {...catagoryitem}/>}
          numColumns={2}/>
            
          </View>
         


      

      
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_GREEN,
    margin:1,
  },
  searchContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    height: 45,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    

  },
  searchSelection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
   
  },
  searchText: {
    color: Colors.DEFAULT_GRAY,
    fontSize: 16,
    fontFamily: Fonts.Poppins_Medium,
    lineHeight: 16 * 1.4,
    marginLeft: 10,
  },
  bodymaincontainer:{
    marginHorizontal:20,
    marginVertical:30,
    backgroundColor:Colors.DEFAULT_BLACK,
    width:Display.SetWidth(30),
    height:Display.SetHeight(4),
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center'
  },
  headerText:{
    color:Colors.DEFAULT_WHITE,
    fontFamily:Fonts.Poppins_Bold,
    fontSize:20,
    lineHeight:20*1.4

  }

});
