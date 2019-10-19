import React, { useEffect } from 'react';
import { 
    Text,
    TouchableOpacity, 
    Image,
    StyleSheet,
    View
} from 'react-native'

export const OptionScreen = (props) => {

    const styles = StyleSheet.create({
        icon:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }
    })

    //const {navigate} = props.navigation;

    return(
        <View style= {styles.icon} >
            <TouchableOpacity
                key={'water'}
                //onPress={() => navigate('Map', {type: 'water'})}
                >
                <Image
                    style = {styles.icon}
                    source={require('../assets/RB.jpg')}
                />
            </TouchableOpacity>

            <TouchableOpacity
                key={'restroom'}
                //onPress={() => navigate('Map', {type: 'restroom'})}
                >
                <Image
                    style = {styles.icon}
                    source={require('../assets/RB.jpg')}
                />
            </TouchableOpacity>
        </View>
    )
}