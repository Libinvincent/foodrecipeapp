import { View, Text, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
// import MealItem from '../constants/MealItem'

export default function Search() {
  const [url, seturl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
  const [item, setitem] = useState();
  const [show, setshow] = useState(false)
  const [search, setsearch] = useState("")
  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {
      setitem(data.meals)
      setshow(true)

      // console.log(data)



    })
  }, [url])
  console.log(search)
  //serch bar fuction
  const serchrecipe = () => {
    if (search != '') {

       seturl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        // seturl(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`) //filter
      // seturl('https://www.themealdb.com/api/json/v1/1/random.php') // random meels


    }

 

  }

  return (
    <View>
      <Text>Search your food recipe</Text>
      <Text>Most Popular Phrases in English to Malayalam. Communicate smoothly and use a free online translator to translate text, words, phrases, or documents between 9</Text>
      <View>
        <TextInput style={{ backgroundColor: 'gray' }} placeholder='Username' selectionColor={'green'}
          onChangeText={(text) => setsearch(text)}>


        </TextInput>
        <Button title='submit' onPress={() => serchrecipe()} />
        {
          show ? <MealItem data={item} /> : <Text>"not fond"</Text>
        }
      </View>
    </View>
  )
}
// import { StyleSheet, Text, View,FlatList } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import FoodServices from '../service/FoodServices'
// import { Display } from '../utils'

// const sampleinmy = () => {
//   const [data, setData] = useState(null)
//   useEffect(()=> {
// FoodServices().then(res =>{
//   console.log('food data',res)
//   setData(res?.meals)
// })
//   },[])
//   return (
//     <View style={{flex:1,alignItems:'center',backgroundColor:'white'}}>
//       <Text>sampleinmy</Text>
//       <View>
//         <FlatList data={data} 
//         ItemSeparatorComponent={()=> <View style={{width:Display.SetWidth(100),height:Display.SetHeight(2)}}/>}
//         renderItem={({item}) => {
          
//           return(
//             <View style={{
//               width:Display.SetWidth(95),
//               height:Display.SetHeight(10),
//               backgroundColor:'red'
//             }}>
//               <Text>{item.strMeal}</Text>
//             </View>
//           )
//         }}/>
//       </View>
//     </View>
//   )
// }

// export default sampleinmy

// const styles = StyleSheet.create({})