import { Dimensions } from "react-native";

const {height,width,} = Dimensions.get('window')
const SetHeight=(h)=>(height/100)*h
const SetWidth=(w)=>(height/100)*w
const Logo = (Math.min(SetHeight(height), SetWidth(width))) / 2;



export default{
    SetHeight,SetWidth,Logo
}