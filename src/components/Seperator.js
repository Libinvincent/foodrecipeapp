import { View, Text } from 'react-native'
import React from 'react'

export default function Separator({height,width,...extraprops}) {
  return (
    <View style={{height,width,...extraprops}}/>
    
  );
  Separator.defaultprops={
    height:0,
    width:0
  }
}