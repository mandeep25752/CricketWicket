import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'


interface batsmanProps {
    id:string;
    name: string;
    run: string;
    ball: string;
    fours: string;
    six: string;
    strikeRate: string;
}
const batsmanData: batsmanProps[] = [
    {
        id:'1',
        name :'Ryan Burl',
        run :'12',
        ball : '10',
        fours:'1',
        six:'1',
        strikeRate:'120'
    },
    {
        id:'2',
        name :'Timycen Maruma',
        run :'12',
        ball : '10',
        fours:'1',
        six:'1',
        strikeRate:'120'
    },
]
function UpdateLive() {

    const renderBatsmanItem=({item}:{item : batsmanProps})=>{
        return(
            <View>
               <View>
                   <Text>BB need 52 runs in 20 balls</Text>
               </View>
               <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                   <View style={{ width: '30%', backgroundColor: 'red' }}>
                       <Text style={style.text2}>Batsman</Text>
                   </View>
                   <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '70%' }}>
                       <Text style={style.text2}>R</Text>
                       <Text style={style.text2}>B</Text>
                       <Text style={style.text2}>4s</Text>
                       <Text style={style.text2}>6s</Text>
                       <Text style={style.text2}>SR</Text>
                   </View>
               </View>
               <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                   <View style={{ width: '30%', backgroundColor: 'red' }}>
                       <Text style={style.text2}>Batsman</Text>
                   </View>
                   <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '70%' }}>
                       <Text style={style.text2}>R</Text>
                       <Text style={style.text2}>B</Text>
                       <Text style={style.text2}>4s</Text>
                       <Text style={style.text2}>6s</Text>
                       <Text style={style.text2}>SR</Text>
                   </View>
               </View>
         </View>
        )

    }





    return (
        // <View>
        //     <View>
        //         <Text>BB need 52 runs in 20 balls</Text>
        //     </View>
        //     <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        //         <View style={{ width: '30%', backgroundColor: 'red' }}>
        //             <Text style={style.text2}>Batsman</Text>
        //         </View>
        //         <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '70%' }}>
        //             <Text style={style.text2}>R</Text>
        //             <Text style={style.text2}>B</Text>
        //             <Text style={style.text2}>4s</Text>
        //             <Text style={style.text2}>6s</Text>
        //             <Text style={style.text2}>SR</Text>
        //         </View>
        //     </View>
        //     <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        //         <View style={{ width: '30%', backgroundColor: 'red' }}>
        //             <Text style={style.text2}>Batsman</Text>
        //         </View>
        //         <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '70%' }}>
        //             <Text style={style.text2}>R</Text>
        //             <Text style={style.text2}>B</Text>
        //             <Text style={style.text2}>4s</Text>
        //             <Text style={style.text2}>6s</Text>
        //             <Text style={style.text2}>SR</Text>
        //         </View>
        //     </View>

        // </View>

        <FlatList
        data ={batsmanData}
        renderItem={renderBatsmanItem}
        keyExtractor={item =>item.id}

        />
    )
}
export default UpdateLive;
const style = StyleSheet.create({
    text2: {
        fontSize: 18
    }
})