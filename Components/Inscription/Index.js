import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TextInput, Button } from "react-native";


function Inscription(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/toodler.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Image
        source={require("../../assets/login.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <TextInput
        style={styles.materialFixedLabelTextbox}
      ></TextInput>
      <Text style={styles.adresseMail}>Adresse mail</Text>
      <TextInput
        style={styles.materialRightIconTextbox}
      ></TextInput>
      <Text style={styles.motDePasse}>Mot de passe</Text>
      
      <Text style={styles.noaccount}>
        Vous n&#39;avez pas de compte ? Inscrivez vous
      </Text>
      <Button
        title="Connexion"
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >Connexion</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 150,
    marginTop: 50,
    alignSelf: "center"
  },
  babyManagerByCa: {
    color: "#121212",
    //fontFamily: "roboto-regular",
    marginTop: 56,
    alignSelf: "center"
  },
  materialFixedLabelTextbox: {
    width: 251,
    height: 43,
    backgroundColor: "rgb(235,235,235)",
    marginTop: 83,

    alignSelf: "center"
  },
  adresseMail: {
    color: "#121212",
    //fontFamily: "roboto-regular",
    marginTop: -70,
    alignSelf:"center"
  },
  materialRightIconTextbox: {
    width: 251,
    height: 43,
    backgroundColor: "rgb(235,235,235)",
    marginTop: 97,
    alignSelf: "center"
  },
  motDePasse: {
    color: "#121212",
    //fontFamily: "roboto-regular",
    marginTop: -68,
    alignSelf:"center"
  },
  noaccount: {
    color: "#121212",
    //fontFamily: "roboto-regular",
    //textDecoration: "underline",
    marginTop: 74,
    alignSelf:"center"
  },
  button: {
    marginTop : 104,
    alignSelf:"center"
  }
});

export default Inscription;