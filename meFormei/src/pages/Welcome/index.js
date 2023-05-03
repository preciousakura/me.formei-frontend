import React from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundLogo}>
        <View style={styles.containerLogo}>
          <Image 
            source={require('../../assets/img/logo-home.png')}
            style={{height: '75%'}}
            resizeMode='contain'
          />
        </View>
      </View>
      
      <View style={styles.containerForm}>
        <Text style={styles.title}>Faça seu login</Text>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  backgroundLogo: {
    flex: 1,
    backgroundColor: '#277BC0',
    alignItems: 'center',
    marginBottom: 80
  },
  containerLogo: {
    bottom: '-70%'
  },
  containerForm: {
    flex: 2,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#277BC0'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#277BC0',
    borderRadius: 20,
    paddingVertical: 12,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  }
})