import { StatusBar } from 'expo-status-bar'; //import component do expo
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.aa}> 
          <View style={styles.block1}> 
            <Text style={styles.txt1}>Abacate</Text>
            <Image style={styles.img1} source={require('./assets/abacate.png')}></Image>
          </View>
          <View style={styles.block2}>
            <Text style={styles.txt2}>Laranja</Text>  
            <Image style={styles.img} source={require('./assets/laranja.png')}></Image>
          </View>
        </View>

        <View style={styles.aa}>
          <View style={styles.block3}>
            <Image style={styles.img1} source={require('./assets/img.png')}></Image>
          </View>
          <View style={styles.block4}>
            <Image style={styles.img} source={require('./assets/img2.png')}></Image>
          </View>
        </View>
      </View>
    </>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    padding: '2%',
  },

  aa: {
    flexDirection: 'row',
    flex:1,
  },

  block1: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  txt1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff69bd',
    textAlign: 'center',
  },

  block2: {
    backgroundColor: '#ffa500',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
  },

  txt2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },

  block3: {
    backgroundColor: '#665d61',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
  },

  block4: {
    backgroundColor: '#e5f3f7',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  img: {
    width: 75,
    height: 60,
  },

  img1: {
    width: 45,
    height: 60,
  },
});
