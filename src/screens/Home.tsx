import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {auth} from "../../firebase";
import {useNavigation} from "@react-navigation/core";

export function Home() {

    const navigation = useNavigation();

    const handleSignOut = () => {
        auth.signOut().then(() => {
            navigation.navigate('SignIn');
        }).catch((err)=> {
            console.log(err)
        })
    }

    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleSignOut}  style={styles.button}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    button: {
        width: '100%',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#0782F9'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
});
