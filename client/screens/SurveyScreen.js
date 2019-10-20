import React, { useState, useEffect } from 'react';
import { 
    TouchableOpacity, 
    Image,
    ImageBackground,
    View,
    Text,
    Button,
    StyleSheet,
    SafeAreaView,
    Picker,
    Switch
} from 'react-native';
import { getRestroomLocations, getRestroomRatings } from '../redux/actions/restroomActions';
import { getStationLocations, getStationRatings } from '../redux/actions/waterActions';
import { submitRating } from '../redux/actions/ratingActions';
import { useDispatch } from 'react-redux';

const QuestionScreen = (props) => {
    const [rating, setRating] = useState(0);
    const [accessible, setAccessible] = useState(false);
    const { navigate } = props.navigation;
    const mapType = props.navigation.getParam('mapType', '');
    const id = props.navigation.getParam('id', '');
    const dispatch = useDispatch();

    let render = <React.Fragment></React.Fragment>
    console.log(mapType);
    if(mapType == 'restroom') {
        render =
        <React.Fragment>
        <Text>How Was the Overall Quality of this Restroom?</Text>
        <View style={{width:'90%', flexDirection:'row', justifyContent: 'space-between'}}>
            <Picker
                selectedValue={rating}
                style={{height: 100, width: '100%'}}
                onValueChange={n => setRating(n)}
            >
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
                <Picker.Item label="7" value="7" />
                <Picker.Item label="8" value="8" />
                <Picker.Item label="9" value="9" />
                <Picker.Item label="10" value="10" />
            </Picker>
        </View>
        <Text>Is there Anything Else You Would Like Us to Know?</Text>
        <View style={{flexDirection:'row', fontSize:14}}>
            <Text>Accessible</Text>
            <Switch
                onChange={() => setAccessible(!accessible)}
                value = { accessible }
            />
        </View>
        <Button 
            title='Submit'
            onPress={() => {
                dispatch(submitRating({ratingType:'restroom',id, rating, accessible, babychanger:false, customeronly:false}))
                dispatch(getRestroomLocations())
                dispatch(getRestroomRatings())
                dispatch(getStationLocations())
                dispatch(getStationRatings())
                navigate('Home', {thankYou: true})
             }}
        />
        </React.Fragment>
    }else{
        render =
        <React.Fragment>
        <Text>How Was the Overall Quality of this Water Resource?</Text>
        <View style={{width:'90%', flexDirection:'row', justifyContent: 'space-between'}}>
            <Picker
                selectedValue={rating}
                style={{height: 100, width: '100%'}}
                onValueChange={n => setRating(n)}
            >
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
                <Picker.Item label="7" value="7" />
                <Picker.Item label="8" value="8" />
                <Picker.Item label="9" value="9" />
                <Picker.Item label="10" value="10" />
            </Picker>
        </View>
        <Text>Is there Anything Else You Would Like Us to Know?</Text>
        <View style={{flexDirection:'row', fontSize:14}}>
            <Text>Accessible</Text>
            <Switch
                onChange={() => setAccessible(!accessible)}
                value = { accessible }
            />
        </View>
        <Button 
            title='Submit'
            onPress={() => {
                dispatch(submitRating({ratingType:'water',id, rating, accessible}))
                dispatch(getRestroomLocations())
                dispatch(getRestroomRatings())
                dispatch(getStationLocations())
                dispatch(getStationRatings())
                navigate('Home', {thankYou: true})
             }}
        />
        </React.Fragment>
    }

    return(
    <SafeAreaView style={styles.container}>
        {render}
    </SafeAreaView>
    )
}

    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    box: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 4,
        padding: 10
    }
})

export default QuestionScreen;