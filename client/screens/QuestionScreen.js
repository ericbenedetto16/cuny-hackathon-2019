import React from 'react';
import { 
    TouchableOpacity, 
    Image,
    ImageBackground,
    View,
    StyleSheet,
    SafeAreaView,
} from 'react-native'

const QuestionScreen = (props) => {
    const { navigate } = props.navigation;
    const mapType = props.navigation.getParam('mapType', '');
    const id = props.navigation.getParam('id');
    console.log(`mapType ${mapType}`);
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
                        onPress = { () => navigate('Survey', { mapType, id }) }
                        >
                        <Image 
                            source={require('../assets/yesbutt.png')}
                            style={styles.image}
                            />
                    </TouchableOpacity>

                    <TouchableOpacity
                        key={'NO'}
                        onPress = {() => navigate('Home', {id})}
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

export default QuestionScreen;