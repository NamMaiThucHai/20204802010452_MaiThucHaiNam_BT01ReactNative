import React, { useState } from 'react';
import { View, Image ,TextInput, Button, StyleSheet , Alert, TouchableHighlight, Text, ImageBackground } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert(`Đăng nhập thành công với user name = ${email} và password = ${password}`);
  };

  return (
    <View style={myStyle.container}>
      <ImageBackground 
        source={{ uri: "https://img.freepik.com/premium-photo/blue-gradient-background_276152-607.jpg" }} 
        style={myStyle.backgroundImage}>
          <Image 
        style={myStyle.image}
        source={require("./assets/logomhn.png")}
      />
      <TouchableHighlight
        style={myStyle.registerButton}
        onPress={() => {}}>
        <Text style={myStyle.registerButtonText}>
          REGISTER
        </Text>
      </TouchableHighlight>
      <TextInput
        style={myStyle.textInput}
        placeholder="USERNAME"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={myStyle.textInput}
        placeholder="PASSWORD"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableHighlight
        style={myStyle.loginButton}
        onPress={handleLogin}
      >
        <Text style={myStyle.loginButtonText}>
          LOGIN
        </Text>
      </TouchableHighlight>
      </ImageBackground>
    </View>
  )
}

export default App;

const myStyle = StyleSheet.create(
  {
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center'
    },
    container: {
      flex:1,
      justifyContent: "center",
    },
    image: {
      width: 250,
      height: 250,
      alignSelf: "center",
    },
    textInput: {
      height: 40,
      borderColor: "#ffffff",
      borderWidth: 1,
      marginStart: 10,
      marginEnd: 10,
      paddingHorizontal: 10,
      backgroundColor: "#ffffff",
    },
    registerButton: {
      alignSelf: "flex-end",
      marginTop: 10,
    },
    registerButtonText: {
      color: "#f5f50a",
      fontSize: 14,
      marginStart: 10,
      marginEnd: 10,
      fontWeight: "bold"
    },
    loginButton: {
      backgroundColor: "#0a9bf5",
      height: 40,
      marginStart: 10,
      marginEnd: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    loginButtonText: {
      color: "white",
      fontSize: 14,
      fontWeight: "bold"
    },
  }
)
