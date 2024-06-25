import React, {useState} from "react";
import { Text, Image, View, StyleSheet,  Pressable, ScrollView, Modal, Switch} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const menino = require("../../src/img/meninoBanheiro.jpg") 
const meninoDormindo = require("../../src/img/meninoDormindo.jpg") 


export default props => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    const backgroundColor = isEnabled ?  '#f4f3f4' : '#c3c9c5'

    const txtDia = 'Desfraldar uma criança no espectro autista pode ser desafiador, mas com paciência e estratégias adaptadas, o processo pode ser facilitado. Primeiramente, é importante avaliar se a criança está pronta para o desfralde, observando sinais como ficar seca por longos períodos, mostrar interesse pelo banheiro e ser capaz de seguir instruções simples. Estabelecer uma rotina estruturada é essencial, determinando horários consistentes para ir ao banheiro, como logo após acordar, antes e após as refeições e antes de dormir. Utilizar reforço positivo também pode ser eficaz, recompensando a criança por usar o banheiro com elogios, adesivos ou pequenas recompensas. O uso de suportes visuais, como sequências de imagens que mostrem os passos para usar o banheiro, pode ajudar a criança a entender e seguir o processo. Escolher um penico ou um adaptador de assento confortável é fundamental para que a criança se sinta segura. Demonstrar o uso do banheiro ou mostrar vídeos educativos pode incentivar a criança a imitar o comportamento desejado. A comunicação clara, usando uma linguagem simples e direta, é crucial. Palavras como "xixi" e "cocô" podem ser mais fáceis de entender e lembrar. É importante manter a calma e ser paciente, pois haverá acidentes e retrocessos. Observar padrões de comportamento, como inquietação ou segurar a área genital, pode ajudar a identificar quando a criança precisa ir ao banheiro. Por fim, trabalhar em conjunto com todos os cuidadores envolvidos na vida da criança, como pais, professores e terapeutas, garante que todos estejam alinhados com o plano de desfralde. Cada criança é única e pode responder de maneiras diferentes às estratégias, por isso é importante ajustar as abordagens conforme necessário para atender às necessidades específicas da criança.'

    const viewNoite = () => {

        return (
            <>
                <View style={style.overContent}>
                    <View style ={style.txtBox}>

                    </View>
                    <View style={style.imgCover}>
                        <Image
                            style= {style.img}
                            source= {meninoDormindo}
                            resizeMode='cover'
                            >
                        </Image>
                    </View>
                </View>
            </>
        )
    }


    const viewDia = () => {

        return (
            <>
                <View style={style.overContent}>
                    <View style ={style.txtBoxDia}>
                        <ScrollView>
                            <Text>{txtDia}</Text>
                        </ScrollView>
                    </View>
                    <View style={style.imgCover}>
                        <Image
                            style= {style.img}
                            source= {menino}
                            resizeMode='cover'
                            >
                        </Image>
                    </View>
                </View>
            </>
        )
    }

    


    return(
    <>
        <View style = {[style.container, {backgroundColor}]}>
            <View style = {style.overSwitch}>
                <View>
                    <FontAwesome name="moon-o" size={54} color="grey" />
                </View>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    style={{ transform: [{ scaleX: 3.5 }, { scaleY: 3.2 }] }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <View>
                    <FontAwesome name="sun-o" size={54} color="yellow" />
                </View>
            </View>
            {isEnabled ? viewDia() : viewNoite()}
        </View>         
    
    </>
    )
}


const style = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-around',
    },
    overSwitch: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        //borderWidth: 2,
        //borderColor: 'red',

    },
    overContent: {
        width: '100%',
        height: '70%',
        //paddingLeft: '2%',
        alignItems: 'center',
        //borderWidth: 2,
        //borderColor: 'red',
    },
    txtBoxDia:{
       
        //display: block;
        width: '90%',
        height: '55%',
        borderTopLeftRadius: 20,
        //borderTopRightRadius: 30,
        borderBottomRightRadius: 60,
        elevation: 5,
        backgroundColor: '#c3c9c5',
    
    },
    txtBox:{
       
        //display: block;
        width: '90%',
        height: '55%',
        borderTopLeftRadius: 20,
        //borderTopRightRadius: 30,
        borderBottomRightRadius: 60,
        elevation: 5,
        backgroundColor: '#f4f3f4',
    
    },
    imgCover: {
        width: '100%',
        height: '50%', 
        justifyContent: 'space-between',
        paddingTop: '5%',

    },  
    img: {
        width: '98%',
        height: '100%', 
    },

})
