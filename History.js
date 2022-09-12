import {FlatList, Text, View, StyleSheet} from "react-native";

export default function History({route, navigation}) {
    const {param} = route.params;

    return (
        <View style={styles.container}>
            <Text>History</Text>
            <View style={styles.history}>
                <FlatList
                    data={param}
                    renderItem={({item}) => <Text style={styles.result}>{item}</Text>}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    history: {
        borderColor: "black",
        borderWidth: 1,
        width: 200,
        flex: 15,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    result: {
        paddingVertical: 5,
        fontSize: 16
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
    },
});