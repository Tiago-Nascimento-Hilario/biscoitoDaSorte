
import { useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';



export default function App() {
  
  const [img, setImg] = useState(require('./assets/biscoito.png'));
  const [frase, setFrase] = useState('');

  let fraseMotivacionais = [
    'Siga os bons e aprenda com eles!',
    'O bom senso Vale mais do que muito conhecimento!',
    'O risco é menos distancia entre duas pessoas',
    'Deixe de lado as preocupações e seja feliz!' ,
    'A maior barreira para sucesso é o medo do fracasso!'       
  ]

 function quebrarBiscoito() {
  let numeroAleatorio = Math.floor(Math.random() * fraseMotivacionais.length)
  setFrase(' " ' + fraseMotivacionais[numeroAleatorio] + ' " ');
  setImg(require('./assets/biscoitoAberto.png'));
}  
function reiniciar(){
  setFrase('');
  setImg(require('./assets/biscoito.png'))
}

  return (
    <View style={estilos.container}>

    <Image source={img} style={estilos.imagem}/>

    <Text style={estilos.frase}>{frase}</Text>

    <TouchableOpacity style={estilos.btn} onPress={quebrarBiscoito}>
      <View style={estilos.btnArea}>
        <Text style={estilos.btnTexto}>
          Quebrar biscoito!
        </Text>
      </View>
    </TouchableOpacity>


    <TouchableOpacity style={[estilos.btn , {marginTop:25, borderColor:'#121212'}]} onPress={reiniciar}>
      <View style={estilos.btnArea}>
        <Text style={[estilos.btnTexto, {color:'#121212'} ]}>
          Reiniciar biscoito!
        </Text>
      </View>
    </TouchableOpacity>
      
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem:{
    width:230,
    height:230
  }, 
  frase:{
    fontSize:24,
    color:'#dd7b22',
    fontStyle:'italic',
    textAlign:'center',
    padding:2
  },
  btn:{
    width:230,
    height:50,
    marginTop:50,
    borderColor:'#dd7b22',
    borderWidth:2,
    borderRadius:25,
    alignItems:'center'
  },
  btnArea:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  btnTexto:{
    color:'#dd7b22',
    fontWeight:'bold',
    fontSize:22
  }
});
