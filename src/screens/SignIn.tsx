import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {auth} from "../../firebase";
import {useNavigation} from "@react-navigation/core";


export function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
           console.log(user)
            if (user) {
                navigation.navigate('Home');
            }
        });
       return unsubscribe();

    }, [])

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }


    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}>

                </TextInput>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="password"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    secureTextEntry>

                </TextInput>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleSignIn} style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '80%',

    },
    input: {
        padding: 15,
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: 'white'
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
    buttonOutline: {
        marginTop: 5,
        borderWidth: 2,
        borderColor: '#0782F9',
        backgroundColor: 'white'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16
    }
});