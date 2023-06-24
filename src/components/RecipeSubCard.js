import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors, Fonts } from '../constants'
import { Display } from '../utils'

export default function RecipeSubCard({ item,navigate }) {
    // console.log(item)
    return (
        <TouchableOpacity style={Styles.container} activeOpacity={.8}
         onPress={()=>navigate(item.idMeal)}>
            <View>

                <Image source={{ uri: item.strMealThumb }} style={Styles.posterImage} resizeMode='cover' />
                <Text style={Styles.textTitle}>{item.strMeal}</Text>
                <Text style={Styles.tagText}>{item.strCategory}</Text>
                <View style={Styles.footerContainer}>
                    <View>
                        <FontAwesome name='star' size={14} color={Colors.DEFAULT_YELLOW} />
                        <Text style={Styles.ratingText}>130</Text>

                    </View>

                </View>
               
            </View>
            <View >
                    <View style={Styles.rowIcon}>
                    <Ionicons name='bookmark-outline' size={24} color={Colors.DEFAULT_YELLOW}/>
                    </View>
                </View>


        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
        borderRadius: 10,
        elevation: 3,
        marginBottom: 5,
        flexDirection: 'row'



    },
    posterImage: {
        width: Display.SetWidth(20),
        height: Display.SetHeight(20),
        borderRadius: 10,
        margin: 5,


    },
    textTitle: {
        marginLeft: 10,
        fontSize: 15,
        fontFamily: Fonts.Poppins_SemiBold,
        lineHeight: 15 * 1.4,
        color: Colors.DEFAULT_BLACK,

    },
    tagText: {
        marginLeft: 10,
        fontSize: 13,
        fontFamily: Fonts.Poppins_Medium,
        lineHeight: 13 * 1.4,
        color: Colors.DEFAULT_GRAY,
        marginBottom: 5

    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 8,
        marginBottom: 6,
        justifyContent: 'space-between'


    },
    rowIcon: {
       alignItems:'flex-end',
       position:'absolute',
       left:180,
       top:10

    },
    
    
    
})