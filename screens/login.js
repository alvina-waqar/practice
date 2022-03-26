import React from 'react'
import { 
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput } from 'react-native'

  import b1 from "../assets/images/b1.png";
  import login from "../assets/images/login.jpg"

const styles = StyleSheet.create({
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '87%',
    height: '40%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    elevation: 5
  },
  main: {
    height: '100%'
  },
  input: {
    width: '78%',
    height: 50,
    borderColor: 'cyan',
    borderWidth: 0.1,
    margin: 10,
    borderRadius: 50,
    backgroundColor: 'lightcyan',
    color: 'blue',
    elevation: 6
  },
  head: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  head2: {
    height: '100%',
    alignItems: 'center',

  },
  text: {
    height: 35,
    width: 120,
    borderColor: 'cyan',
    borderWidth: 2,
    color: 'black',
    margin: 10,
    borderRadius: 50,
    paddingLeft: 42,
    paddingTop: 8,
    fontWeight: 'bold'
  }
})

function Login({navigation}) {
const loginUser = () => {
  navigation.navigate('Home')

}

  return (
    <>
      <ImageBackground style={styles.main} source={b1}>
      <View style={styles.head}>

      </View>
      <View style={styles.head2}>
        <View style={styles.heading}>
          <Image style={{ width: 70, height: 55 }} source={login} />
          {/* <Image style={{width:50,height:50}} source={pic}/> */}
          <TextInput placeholder='enter name' style={styles.input} />
          <TextInput placeholder='password' style={styles.input} />
          <TouchableOpacity onPress={loginUser}>
            <Text style={styles.text}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <View style={styles.heading}>
      </View> */}
    </ImageBackground>
    </>
  )
}

export default Login