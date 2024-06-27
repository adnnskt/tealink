import React, {useState} from "react";
import { Text, Image, View, StyleSheet,  Pressable, ScrollView, Modal, Switch} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const menino = require("../../src/img/meninoBanheiro.jpg") 
const meninoDormindo = require("../../src/img/meninoDormindo.jpg") 


export default props => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    const backgroundColor = isEnabled ?  '#f4f3f4' : '#c3c9c5'

    
    const txtDia1 = 'Desfraldar uma criança no espectro autista pode ser desafiador, mas com paciência e estratégias adaptadas, o processo pode ser facilitado. Primeiramente, é importante avaliar se a criança está pronta para o desfralde, observando sinais como ficar seca por longos períodos, mostrar interesse pelo banheiro e ser capaz de seguir instruções simples.'
    const txtDia2 = 'Estabelecer uma rotina estruturada é essencial, determinando horários consistentes para ir ao banheiro, como logo após acordar, antes e após as refeições e antes de dormir. Utilizar reforço positivo também pode ser eficaz, recompensando a criança por usar o banheiro com elogios, adesivos ou pequenas recompensas.'
    const txtDia3 = 'O uso de suportes visuais, como sequências de imagens que mostrem os passos para usar o banheiro, pode ajudar a criança a entender e seguir o processo. Escolher um penico ou um adaptador de assento confortável é fundamental para que a criança se sinta segura. Demonstrar o uso do banheiro ou mostrar vídeos educativos pode incentivar a criança a imitar o comportamento desejado.'
    const txtDia4 = 'A comunicação clara, usando uma linguagem simples e direta, é crucial. Palavras como "xixi" e "cocô" podem ser mais fáceis de entender e lembrar. É importante manter a calma e ser paciente, pois haverá acidentes e retrocessos. Observar padrões de comportamento, como inquietação ou segurar a área genital, pode ajudar a identificar quando a criança precisa ir ao banheiro.'
    const txtDia5 = 'Por fim, trabalhar em conjunto com todos os cuidadores envolvidos na vida da criança, como pais, professores e terapeutas, garante que todos estejam alinhados com o plano de desfralde. Cada criança é única e pode responder de maneiras diferentes às estratégias, por isso é importante ajustar as abordagens conforme necessário para atender às necessidades específicas da criança.'

    const txtNoite1 = 'Desfraldar uma criança no espectro autista durante a noite pode exigir uma abordagem cuidadosa e adaptada às necessidades individuais da criança. Primeiramente, é essencial certificar-se de que a criança está pronta para o desfralde noturno. Sinais de prontidão incluem acordar com a fralda seca pela manhã ou durante cochilos diurnos, além de uma compreensão básica sobre o uso do banheiro.'
    const txtNoite2 = 'Estabelecer uma rotina noturna consistente pode ser muito útil. Limitar a ingestão de líquidos antes de dormir, sem comprometer a hidratação da criança, pode ajudar a reduzir a necessidade de ir ao banheiro durante a noite. Levar a criança ao banheiro como parte da rotina de preparação para a cama também pode ser benéfico. Incentivar uma última ida ao banheiro imediatamente antes de dormir cria um hábito importante.'
    const txtNoite3 = 'O uso de reforço positivo durante o processo de desfralde noturno é crucial. Recompensas como elogios ou adesivos podem incentivar a criança a se esforçar para ficar seca durante a noite. É importante utilizar suportes visuais, como quadros de recompensas ou gráficos de progresso, para ajudar a criança a entender e monitorar seu progresso.'
    const txtNoite4 = 'Proteger a cama da criança pode aliviar o estresse em caso de acidentes. Usar protetores de colchão ou capas impermeáveis pode tornar mais fácil lidar com eventuais escapes. Adotar uma abordagem calma e paciente é fundamental, reconhecendo que acidentes fazem parte do processo e são esperados.'
    const txtNoite5 = 'A comunicação clara e simples com a criança sobre a importância do desfralde noturno é essencial. Explicar de maneira compreensível e sem pressão ajuda a reduzir a ansiedade. Trabalhar em conjunto com todos os cuidadores, incluindo pais, professores e terapeutas, garante consistência na abordagem e suporte.'
    const txtNoite6 = 'Cada criança no espectro autista é única e pode ter diferentes necessidades e ritmos no processo de desfralde noturno. Ajustar as estratégias conforme necessário, com paciência e compreensão, é essencial para o sucesso do desfralde noturno.'

    const viewNoite = () => {

        return (
            <>
                <View style={style.overContent}>
                    <View style ={style.txtBox}>
                    <ScrollView>
                            <Text style={style.txtDia}>{txtNoite1}</Text>
                            <Text style={style.txtDia}>{txtNoite2}</Text>
                            <Text style={style.txtDia}>{txtNoite3}</Text>
                            <Text style={style.txtDia}>{txtNoite4}</Text>
                            <Text style={style.txtDia}>{txtNoite5}</Text>
                            <Text style={style.txtDia}>{txtNoite6}</Text>

                        </ScrollView>
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
                            <Text style={style.txtDia}>{txtDia1}</Text>
                            <Text style={style.txtDia}>{txtDia2}</Text>
                            <Text style={style.txtDia}>{txtDia3}</Text>
                            <Text style={style.txtDia}>{txtDia4}</Text>
                            <Text style={style.txtDia}>{txtDia5}</Text>

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
        height: '85%',
        //paddingLeft: '2%',
        alignItems: 'center',
        //borderWidth: 2,
        //borderColor: 'red',
    },
    txtBoxDia:{
       
        //display: block;
        width: '95%',
        height: '55%',
        borderTopLeftRadius: 20,
        //borderTopRightRadius: 30,
        borderBottomRightRadius: 60,
        elevation: 5,
        backgroundColor: '#c3c9c5',
        padding: '4%',
    
    },
    txtBox:{
       
        //display: block;
        width: '95%',
        height: '55%',
        borderTopLeftRadius: 20,
        //borderTopRightRadius: 30,
        borderBottomRightRadius: 60,
        elevation: 5,
        backgroundColor: '#f4f3f4',
        padding: '4%',

    },
    txtDia: {
        paddingTop: '1%',
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
