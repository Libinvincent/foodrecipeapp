import { View, Text, StyleSheet, StatusBar, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonts, Images } from '../constants'
import { Separator } from '../components'
import { Display } from "../utils"
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { foodDataDetealdView} from '../service'

export default function ParticularRecipeDeteals({data}) {

    
  return (
    <View>
       <Image source={Images.PASTHA} style={Styles.backgroundImage} resizeMode='center' />

<ScrollView>
    <Separator height={Display.SetHeight(32)} />
    <View style={Styles.mainContainer}>
        <View style={Styles.titleContianer}>
            <Text style={Styles.title}>Wellcome</Text>
            <Ionicons name='bookmark-outline' size={24} color={Colors.DEFAULT_YELLOW}/>
        </View>
        <Text style={Styles.tagText}></Text>

        <View style={Styles.ratingReviewContainer}>
            <FontAwesome name='star' size={24} color={Colors.DEFAULT_YELLOW}/>
            <Text style={Styles.ratingText}>7</Text>
            <Text style={Styles.reviewText}>(152 reviews)</Text>
        </View>

        <View style={Styles.recipeDetealsContainer}>
             <View style={Styles.rowAndCenter}>
                <Image recipeImageIcoin/>
                <Text style={Styles.recipeDetealsText}>libin vincent</Text>
             </View> 

             
        </View>

    </View>

</ScrollView>

    </View>
  )
}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SECONDARY_WHITE

    },

    backgroundImage: {
        position: 'absolute',
        top: 0,
        height: Display.SetHeight(35),
        width: Display.SetWidth(50)
    },
    mainContainer:{
        backgroundColor:Colors.SECONDARY_GREEN,
        borderTopLeftRadius:32,
        borderTopRightRadius:32,

    },
    titleContianer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:25,
        marginTop:15,

    },
    title:{
        fontSize:23,
        lineHeight:23*1.4,
        fontFamily:Fonts.Poppins_SemiBold,
        color:Colors.DEFAULT_BLACK,

    },
    tagText:{
        marginHorizontal:25,
        marginTop:5,
        fontSize:13,
        lineHeight:13*1.4,
        fontFamily:Fonts.Poppins_SemiBold,
        color:Colors.DEFAULT_GRAY,
    },
    ratingReviewContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:25,
        margin:10,

    },
    ratingText:{
        marginLeft:5,
        fontSize:13,
        lineHeight:13*1.4,
        fontFamily:Fonts.Poppins_Bold,
        color:Colors.DEFAULT_BLACK,

    },
    reviewText:{
        marginLeft:5,
        fontSize:13,
        lineHeight:13*1.4,
        fontFamily:Fonts.Poppins_Medium,
        color:Colors.DEFAULT_BLACK,

    },
    recipeDetealsContainer:{
        flexDirection:"row",
        alignItems:'center',
        marginHorizontal:25,
        marginTop:10,
        justifyContent:'space-between'

    },
    recipeDetealsText:{
        marginLeft:3,
        fontSize:12,
        lineHeight:12*1.4,
        fontFamily:Fonts.Poppins_Medium,
        color:Colors.DEFAULT_BLACK,

    },
    recipeImageIcoin:{
        height:16,
        width:16
    },
    rowAndCenter:{
        flexDirection:'row',
        alignItems:"center"
    },
   
})