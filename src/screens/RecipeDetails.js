import { View, Text, StyleSheet, StatusBar, ScrollView, Image, ActivityIndicator, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonts, Images } from '../constants'
import { Separator } from '../components'
import { Display } from "../utils"
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { foodDataDetealdView } from '../service'

export default function RecipeDetails({ route: { params: idMeal }, navigation }) {
    const [Deteals, setDeteals] = useState([])

    useEffect(() => {
        foodDataDetealdView(idMeal).then(res => {
            setDeteals(res.meals)

        })

    }, [])



    return (

        <View style={Styles.container}>
            <StatusBar barStyle='light-content'
                backgroundColor={Colors.DEFAULT_GREEN}
                translucent />
            <Separator height={StatusBar.currentHeight} />
            <Ionicons name='chevron-back-outline' size={30} color={Colors.DEFAULT_GRAY} onPress={() => navigation.goBack()} />




            {Deteals && Deteals.map((item) => (


                <View key={item}>
                   

                    <Image source={{ uri: item.strMealThumb }} style={Styles.backgroundImage} resizeMode='center' />

                    <ScrollView>
                        <Separator height={Display.SetHeight(32)} />
                        <View style={Styles.mainContainer}>
                            <View style={Styles.titleContianer}>
                                <Text style={Styles.title} onPress={() => navigation.goBack()}>Catagory name {item.strCategory}</Text>

                                <Ionicons name='bookmark-outline' size={24} color={Colors.DEFAULT_YELLOW} />
                            </View>
                            <Text style={Styles.nametitle}>{item.strMeal}</Text>
                            <Text style={Styles.tagText}></Text>

                            <View style={Styles.ratingReviewContainer}>
                                <FontAwesome name='star' size={24} color={Colors.DEFAULT_YELLOW} />
                                <Text style={Styles.ratingText}>7</Text>
                                <Text style={Styles.reviewText}>(152 reviews)</Text>
                            </View>

                            <View style={Styles.recipeDetealsContainer}>

                                {/* <Image recipeImageIcoin /> */}
                                <Text style={Styles.recipeDetealsText} numberOfLines={1}>Prepration Instactions</Text>


                                <View >
                                    <Text></Text>
                                    
                                    
                                </View>

                                <View>
                                    <Image />
                                    <Text></Text>
                                </View>
                            </View>

                        </View>

                    </ScrollView>
                </View>
            ))
            }




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
    mainContainer: {
        backgroundColor: Colors.SECONDARY_GREEN,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,

    },
    titleContianer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginTop: 15,

    },
    title: {
        fontSize: 23,
        lineHeight: 23 * 1.4,
        fontFamily: Fonts.Poppins_SemiBold,
        color: Colors.DEFAULT_BLACK,

    },
    nametitle: {
        fontSize: 17,
        lineHeight: 17 * 1.4,
        fontFamily: Fonts.Poppins_SemiBold,
        color: Colors.DEFAULT_RED,
        marginHorizontal: 25,
        marginVertical: 10


    },
    tagText: {
        marginHorizontal: 25,
        marginTop: 5,
        fontSize: 13,
        lineHeight: 13 * 1.4,
        fontFamily: Fonts.Poppins_SemiBold,
        color: Colors.DEFAULT_GRAY,
    },
    ratingReviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 25,
        margin: 10,

    },
    ratingText: {
        marginLeft: 5,
        fontSize: 13,
        lineHeight: 13 * 1.4,
        fontFamily: Fonts.Poppins_Bold,
        color: Colors.DEFAULT_BLACK,

    },
    reviewText: {
        marginLeft: 5,
        fontSize: 13,
        lineHeight: 13 * 1.4,
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.DEFAULT_BLACK,

    },
    recipeDetealsContainer: {
        alignItems: 'center',
        marginHorizontal: 25,
        marginTop: 10,
        justifyContent: 'center'

    },
    recipeDetealsText: {

        fontSize: 22,
        lineHeight: 22 * 1.4,
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.DEFAULT_BLACK,

    },


})