import React, { useEffect } from 'react';
import { 
    TouchableOpacity, 
    Image,
    ImageBackground,
    View,
    StyleSheet,
    SafeAreaView,
    Dimensions
} from 'react-native'
import newLinking from 'expo/build/Linking/Linking';

export const OptionScreen = (props) => {

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            marginTop: '95%',
        },
        image:{
           width: "100%",
           height: "100%",
           padding: 60,
        },
        prompt:{
           width: "100%",
           height: "100%",
           padding: 35,
           resizeMode: 'stretch',
        }

    })

    //const {navigate} = props.navigation;

    return(     
        <View style={{flex:1,}}>
            <ImageBackground 
                    source={require('../assets/background.png')}
                    imageStyle={{resizeMode:'stretch'}}
                    style={{flex:1,}}
                    >                    
                    <SafeAreaView style= {styles.container}>

                        <Image 
                            source={require('../assets/prompt.png')}
                            style={styles.prompt}
                            />

                        <TouchableOpacity
                            key={'water'}
                            //onPress={() => navigate('Map', {type: 'water'})}
                            >
                            <Image
                                style = {styles.image}
                                source={require('../assets/WaterButton.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            key={'restroom'}
                            //onPress={() => navigate('Map', {type: 'restroom'})}
                            >
                            <Image
                                style = {styles.image}
                                source={require('../assets/RestroomButton.png')}
                            />
                        </TouchableOpacity>
                    </SafeAreaView>
            </ImageBackground>
        </View>
    )
}