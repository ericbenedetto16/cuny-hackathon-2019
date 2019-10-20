import React, { useEffect } from 'react';
import { 
    TouchableOpacity, 
    Image,
    ImageBackground,
    View,
    StyleSheet,
    SafeAreaView,
} from 'react-native'

export const QuestionScreen = () =>{
    const styles = StyleSheet.create({
        container:{
            flex: 1,
            flexDirection: 'row',
            marginBottom: '20%',
            alignItems: 'flex-end',
            justifyContent: 'center', 
            justifyContent: 'space-around',
            padding: 60,
        },
        image:{
            flexDirection: 'row',
            width: '10%',
            height: '5%', 
            padding: 60,
        }
    })

    return(
        <View style={{flex: 1}}>
            
            <ImageBackground
                source={require('../assets/reviewBack.png')}
                imageStyle={{resizeMode: 'stretch'}}
                style={{flex:1}}
                >

                <SafeAreaView style={styles.container}>
                    <TouchableOpacity
                        key={'YES'}
                        //onPress=()=>
                        >
                        <Image 
                            source={require('../assets/yesbutt.png')}
                            style={styles.image}
                            />
                    </TouchableOpacity>

                    <TouchableOpacity
                        key={'NO'}
                        //onPress=()=>
                        >
                        <Image
                            source={require('../assets/nobutt.png')}
                            style={styles.image}
                            />
                    </TouchableOpacity>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}