import React,  { useCallback }   from "react";
import {Platform, UIManager, LayoutAnimation, Text, Image, View, StyleSheet, ScrollView} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'; // Importa o useFocusEffect para animações ao focar na tela
const doctor = require("../../src/img/doctor.png") 

if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

export default props => {


    const Animation = () => {
        LayoutAnimation.configureNext({
          duration: 200,
          create: {type: 'linear', property: 'opacity'},
          update: {type: 'spring', springDamping: 0.4},
          delete: {type: 'linear', property: 'opacity'},
        })
    };


    useFocusEffect(
        useCallback(() => {
            Animation(); // Chama a animação toda vez que a tela é focada
        }, [])
    );

return (
    <>
        <View style={style.container}>
            <View style={style.ballons}>
                <View style={style.ballon}>
                    <ScrollView>
                        <Text>
                        O uso de medicação para pacientes dentro do espectro autista (Transtorno do Espectro Autista, ou TEA) é um tema delicado e requer uma abordagem cuidadosa e individualizada. A medicação não é um tratamento direto para o autismo em si, mas pode ser usada para gerenciar sintomas associados que podem interferir na qualidade de vida do paciente.{'\n'}{'\n'}

                        Objetivos da Medicação
                        Pacientes com TEA podem apresentar uma variedade de sintomas, como ansiedade, irritabilidade, agressividade, déficit de atenção, hiperatividade e comportamentos repetitivos. A medicação pode ser prescrita para ajudar a controlar esses sintomas, melhorando assim o bem-estar do paciente e facilitando a interação social e o aprendizado.{'\n'}{'\n'}

                        <Text style={style.bold}>Tipos de Medicação</Text>{'\n'}{'\n'}
                        Existem diferentes classes de medicamentos que podem ser usados, dependendo dos sintomas apresentados:{'\n'}{'\n'}

                        <Text style={style.bold}>Antipsicóticos:</Text> Como o risperidona e aripiprazol, são frequentemente usados para tratar irritabilidade e agressividade.{'\n'}{'\n'}

                        <Text style={style.bold}>Estimulantes:</Text> Como metilfenidato, que pode ser prescrito para sintomas de déficit de atenção e hiperatividade (TDAH) em crianças com TEA.{'\n'}{'\n'}

                        <Text style={style.bold}>Inibidores Seletivos da Recaptação de Serotonina (ISRS):</Text> Usados para tratar ansiedade, depressão e comportamentos repetitivos.{'\n'}{'\n'}

                        <Text style={style.bold}>Antiepilépticos:</Text> Para pacientes que apresentam crises epilépticas, que são mais comuns em pessoas com TEA.{'\n'}{'\n'}

                        Considerações e Cuidados
                        A decisão de iniciar um tratamento medicamentoso deve ser feita com cautela, levando em consideração os benefícios e os possíveis efeitos colaterais. É essencial que o tratamento seja monitorado por um psiquiatra ou neurologista especializado em TEA, que poderá ajustar a dosagem ou mudar a medicação conforme necessário.{'\n'}{'\n'}

                        Além disso, o uso de medicação deve ser visto como parte de um plano de tratamento mais amplo, que pode incluir terapia comportamental, intervenções educacionais e suporte familiar. A medicação pode ajudar a reduzir os sintomas, mas não substitui a importância de outras formas de tratamento e suporte.{'\n'}{'\n'}
                        </Text>
                    </ScrollView>

                </View>
                
                <View style={style.think1} />
                <View style={style.overThink2}>
                    <View style={style.think2} />
                </View>
                <View>
                    <View style={style.think3} />
                </View>
            </View>
           <View style={style.imgCover}>
                <Image   
                    style= {style.img}
                    source= {doctor}
                    resizeMode='cover'
                    >
                </Image>
           </View>
        </View>
    </>
  )
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f5cee7',
        justifyContent: 'space-around',
    },
    ballons: {
        width: '100%',
        height: '58%',
        //borderWidth: 2,
        //borderColor: 'red',
        //justifyContent: 'center',
        alignItems: 'center',
    },      
    ballon: {
        width: '92%',
        height: '70%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 40,
        elevation: 5,
        padding: '4%',
    },  
    bold: {
        fontWeight: 'bold',
      },
    think1: {
        width: '15%',
        height: '15%',
        borderRadius: 60,
        backgroundColor: 'white',        
        borderWidth: 1,
        borderColor: 'grey',
        elevation: 5
    },
    overThink2: {
        width: '100%',
        height: '10%',
        paddingLeft: '35%',
    },
    think2: {
        width: '15%',
        height: '100%',
        borderRadius: 50,
        backgroundColor: 'white',        
        borderWidth: 1,
        borderColor: 'grey',
        elevation: 5,
    },
    think3: {
        width: '5%',
        height: '5%',
        borderRadius: 50,
        backgroundColor: 'white',        
        borderWidth: 1,
        borderColor: 'grey',
        elevation: 5,
    },
    imgCover: {
        width: '70%',
        height: '40%',
    },
    img: {
        width: '100%',
        height: '100%',
    }
})