import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from 'react';

export default function Calculator({navigation}) {
    const [result, setResult] = useState('Result:');
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [history, setHistory] = useState([]);

    const addition = () => {
        let a1 = parseFloat(a);
        let b1 = parseFloat(b);
        let res = a1 + b1;
        setResult('Result: ' + res);
        setHistory([...history, a1 + "+" + b1 + "=" + res]);
    }

    const substraction = () => {
        let a1 = parseFloat(a);
        let b1 = parseFloat(b);
        let res = a1 - b1;
        setResult('Result: ' + res);
        setHistory([...history, a1 + "-" + b1 + "=" + res]);
    }

    return (
        <View style={styles.container}>
            <Text
                style={styles.result}>
                {result}
            </Text>
            <TextInput
                keyboardType="numeric"
                style={styles.textInput}
                onChangeText={a => setA(a)} value={a}/>
            <TextInput
                keyboardType="numeric"
                style={styles.textInput}
                onChangeText={b => setB(b)} value={b}/>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Pressable
                    style={styles.button}
                    onPress={() => addition()}
                >
                    <Text>+</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => substraction()}
                >
                    <Text>-</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('History', {param: history})}
                >
                    <Text>HISTORY</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
    },
    button: {
        paddingVertical: 11,
        paddingHorizontal: 11,
        marginTop: 11,
        backgroundColor: 'lightblue',
        marginHorizontal: 3
    },
    textInput: {
        borderColor: "#000",
        height: 44,
        marginTop: 11,
        marginBottom: 5,
        width: 200,
        borderWidth: 1
    },
    result: {
        paddingVertical: 5,
        fontSize: 16
    },
});