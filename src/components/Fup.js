import React, {useState} from "react";
import { Text, Image, View, StyleSheet,  Pressable, FlatList, Modal, TouchableHighlight} from 'react-native'
const aba = require("../../src/img/aba.jpg") 
const to = require("../../src/img/TO.jpg") 
const fala = require("../../src/img/terapiaFala.jpg") 
const interPrecoce = require("../../src/img/intervencaoPrecoce.jpg") 
const sensorial = require("../../src/img/sensorial.jpg") 
const social = require("../../src/img/social.jpg") 
const denver = require("../../src/img/denver.jpg") 
const rdi = require("../../src/img/rdi.jpg") 
const iSocial = require("../../src/img/integracaoSensorial.jpg") 
const musicoterapia = require("../../src/img/musicoterapia.jpg") 


export default props => {

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const jsonList = [
        {
            id: '1',
            name: 'Terapia Comportamental Aplicada (ABA)',
            txt:'Terapia ABA (Análise do Comportamento Aplicada) é uma abordagem terapêutica baseada em princípios científicos da psicologia comportamental. Ela busca modificar comportamentos significativos através da aplicação de técnicas de reforço positivo e estratégias de ensino individualizadas. É frequentemente utilizada no tratamento de distúrbios do espectro autista e outros transtornos do desenvolvimento, visando promover habilidades sociais, comunicativas e de autocuidado.',
            img: aba,
        },
        {
            id: '2',
            name: 'Terapia Ocupacional (TO)',
            txt:'A Terapia Ocupacional para o Transtorno do Espectro Autista (TEA) é uma intervenção que visa melhorar a independência e a qualidade de vida das pessoas com autismo. Utilizando atividades significativas e adaptadas, essa terapia foca no desenvolvimento de habilidades motoras, sensoriais, sociais e de autocuidado. Ela ajuda os indivíduos autistas a melhorarem sua capacidade de participar em atividades diárias, como se vestir, comer e interagir socialmente, facilitando sua integração na escola, em casa e na comunidade.',
            img: to,
        },
        {
            id: '3',
            name: 'Terapia da Fala e Linguagem',
            txt:'A Terapia da Fala e Linguagem para o Transtorno do Espectro Autista (TEA) é uma intervenção que visa melhorar a comunicação verbal e não verbal, bem como as habilidades de linguagem e interação social de indivíduos autistas. Os terapeutas trabalham para desenvolver a compreensão e expressão da linguagem, aprimorar a comunicação não verbal (como gestos e expressões faciais) e promover interações sociais adequadas. Eles também podem ajudar na melhoria da articulação, da fluência e da pragmática da linguagem, adaptando as estratégias de acordo com as necessidades específicas de cada pessoa autista.',
            img: fala,
        },
        {
            id: '4',
            name: 'Intervenção Precoce',
            txt:'A Intervenção Precoce para o Transtorno do Espectro Autista (TEA) é um conjunto de serviços e estratégias destinadas a crianças com autismo desde tenra idade, geralmente até os três anos de idade. Seu objetivo é identificar precocemente sinais de autismo e iniciar intervenções específicas para promover o desenvolvimento cognitivo, comunicativo, social e emocional da criança. Essas intervenções podem incluir terapia comportamental, terapia ocupacional, terapia da fala e linguagem, bem como apoio à família para ajudar na compreensão do TEA e no desenvolvimento de estratégias de manejo e suporte adequadas. A intervenção precoce é fundamental para maximizar o potencial de desenvolvimento da criança e melhorar os resultados a longo prazo.',
            img: interPrecoce,
        },
        {
            id: '5',
            name: 'Terapia Sensorial',
            txt:'A Terapia Sensorial para o Transtorno do Espectro Autista (TEA) é uma abordagem terapêutica que visa ajudar indivíduos autistas a regular suas respostas sensoriais e melhorar sua capacidade de processar e responder aos estímulos do ambiente. Os terapeutas sensoriais trabalham para identificar as necessidades sensoriais específicas de cada pessoa autista e desenvolvem atividades e estratégias para ajudá-las a lidar com sensações sensoriais que podem ser avassaladoras ou desafiadoras. Isso pode envolver a utilização de técnicas de integração sensorial, como atividades táteis, proprioceptivas e vestibulares, para ajudar os indivíduos autistas a se sentirem mais confortáveis em seu ambiente e a participarem de atividades diárias com maior facilidade.',
            img: sensorial,
        },
        {
            id: '6',
            name: 'Terapia Social Pragmática',
            txt:'A Terapia Social Pragmática para o Transtorno do Espectro Autista (TEA) é uma abordagem terapêutica que se concentra no desenvolvimento das habilidades sociais e de comunicação pragmática em indivíduos autistas. Ela visa ensinar habilidades sociais, como iniciar e manter conversas, interpretar e responder adequadamente às pistas sociais, compreender o contexto social e regular o comportamento de acordo com diferentes situações sociais. Os terapeutas trabalham para ajudar os indivíduos autistas a melhorar sua compreensão e uso da linguagem social, promovendo interações mais bem-sucedidas e significativas com os outros em uma variedade de contextos sociais.',
            img: social,
        },
        {
            id: '7',
            name: 'Intervenção Comportamental Early Start Denver (ESDM)',
            txt:'A Intervenção Comportamental Early Start Denver (ESDM) para o Transtorno do Espectro Autista (TEA) é uma abordagem terapêutica intensiva e baseada em evidências, projetada para crianças pequenas com autismo, geralmente entre 12 e 48 meses de idade. Ela combina elementos de terapia comportamental aplicada (ABA) com técnicas de desenvolvimento infantil e ensino individualizado. O ESDM visa promover o desenvolvimento global da criança, focando na melhoria das habilidades sociais, comunicativas, cognitivas e adaptativas. Os terapeutas utilizam atividades lúdicas e interativas para envolver a criança em aprendizado e interações sociais significativas, adaptando as estratégias de acordo com suas necessidades específicas. O ESDM também enfatiza o envolvimento dos pais no processo terapêutico, fornecendo orientação e apoio para promover o desenvolvimento da criança dentro e fora das sessões de terapia.',
            img: denver,
        },
        {
            id: '8',
            name: 'Terapia de Desenvolvimento Relacional (RDI)',
            txt:'A Terapia de Desenvolvimento Relacional (RDI) para o Transtorno do Espectro Autista (TEA) é uma abordagem terapêutica que se concentra na reconstrução das habilidades de relacionamento e comunicação em indivíduos autistas. O RDI visa desenvolver a capacidade de estabelecer e manter relacionamentos significativos e satisfatórios, promovendo a flexibilidade cognitiva, a autorregulação emocional e a reciprocidade social. Os terapeutas trabalham em colaboração com os pais e cuidadores para criar experiências compartilhadas que estimulem a comunicação não verbal, a compreensão das emoções dos outros e a cooperação em atividades sociais e de resolução de problemas. O RDI também enfatiza a importância do aprendizado experiencial e da prática guiada para ajudar os indivíduos autistas a desenvolverem habilidades sociais e adaptativas em uma variedade de situações do mundo real.',
            img: rdi,
        },
        {
            id: '9',
            name: 'Terapia de Integração Sensorial',
            txt:'A Terapia de Integração Sensorial (TIS) para o Transtorno do Espectro Autista (TEA) é uma abordagem terapêutica que visa ajudar indivíduos autistas a processar e responder aos estímulos sensoriais do ambiente de forma mais eficaz. A TIS enfoca a criação de experiências sensoriais estruturadas e adaptadas para ajudar na regulação sensorial, promover o desenvolvimento das habilidades motoras e melhorar a participação em atividades cotidianas. Os terapeutas de integração sensorial utilizam uma variedade de técnicas, como movimentos específicos, brincadeiras táteis e exercícios vestibulares, para estimular os sistemas sensoriais da criança e ajudá-la a se sentir mais confortável em diferentes ambientes. O objetivo é facilitar a adaptação às sensações sensoriais e promover o engajamento em atividades sociais, acadêmicas e de autocuidado.',
            img: iSocial,
        },
        {
            id: '10',
            name: 'Musicoterapia',
            txt:'A Musicoterapia para o Transtorno do Espectro Autista (TEA) é uma abordagem terapêutica que utiliza elementos musicais, como ritmo, melodia e harmonia, para ajudar indivíduos autistas a melhorar suas habilidades sociais, comunicativas, emocionais e motoras. Os musicoterapeutas adaptam atividades musicais de acordo com as necessidades e preferências individuais de cada pessoa autista, utilizando instrumentos musicais, canto, movimento e improvisação para promover o engajamento e a expressão. A Musicoterapia pode ajudar na melhoria da comunicação verbal e não verbal, na regulação emocional, no desenvolvimento das habilidades sociais e na promoção do bem-estar geral da pessoa autista.',
            img: musicoterapia,
        },
        
    ]

    const InterModal = (props) => {
        const {text, image} = props

        return(
        <>
            <View style= {style.imgCover}>
                <Image
                        style= {style.img}
                        source= {image}
                        resizeMode='cover'
                        >
                </Image>
                <View style= {style.txtContainer}>
                    <View style={style.overTxt}>
                        <Text> Terapia ABA (Análise do Comportamento Aplicada) é uma abordagem terapêutica baseada em princípios científicos da psicologia comportamental. Ela busca modificar comportamentos significativos através da aplicação de técnicas de reforço positivo e estratégias de ensino individualizadas. É frequentemente utilizada no tratamento de distúrbios do espectro autista e outros transtornos do desenvolvimento, visando promover habilidades sociais, comunicativas e de autocuidado.</Text>
                    </View>
                </View>
            </View>    
        </>
        )

    }

    const showModal  = (props) => {

        setModalVisible(true);
        <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>
                <View style={style.modalContainer}>
                    <View style={style.modalStyle}>
                        <InterModal image = {aba}/>
                        <View style={style.overBtnClose}>
                            <View style={style.buttonClose}>
                                <Pressable onPress={() => setModalVisible(!modalVisible)} >
                                    <Text> Fechar </Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

    }


    return(
    <>
       <View style = {style.container}>
            {jsonList.map(item => (
                <Pressable
                    key={item.id}
                    style={style.listItem}
                    onPress={() => {
                        setSelectedItem(item);
                        showModal(item)
                    }}
                >
                    <Text>{item.name}</Text>
                </Pressable>
            ))}

            {modalVisible && selectedItem && (
                <InterModal text={selectedItem.txt} image={selectedItem.img} />
            )}

            
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

    listItem: {
        height: '5%',
        width: '95%',
        backgroundColor: '#eabefa',
        borderRadius: 50,
        elevation: 5,
    },
    modalStyle: {
        height: '87%',
        width: '95%',
        backgroundColor: '#b4a6f7',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 30,
        elevation: 5,
    },
    modalContainer: {
        flex: 1,
        paddingTop: '2%',
        justifyContent: 'center',
        alignItems: 'center',
  
    },
    txtContainer: {
        height: '80%',
        width: '100%',
        paddingTop: '3%',
        elevation: 4,
    },
    overTxt: {
        height: '100%',
        width: '100%',
        padding: '3%',
        backgroundColor: '#c8c6f7',
        borderRadius: 20,
        elevation: 5,
        borderWidth: 0.5,
        borderColor: 'white',
    },
    overBtnClose:{
        paddingBottom: '3%',
        height: '10%',
        width: '40%',
    },
    buttonClose: {
        height: '100%',
        width: '100%',
        backgroundColor: '#8fb2f7',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        borderRadius: 40,
    }, 
    imgCover: {
        width: '90%',
        height: '52%', 
        justifyContent: 'space-between',
        paddingTop: '5%',
        //borderColor: 'red',
        //borderWidth: 4
    },  
    img: {
        width: '100%',
        height: '100%', 
      },

})


/*

<Pressable style = {style.listItem} onPress={() => setModalVisible(true)}>
                <Text> Terapia Comportamental Aplicada (ABA) </Text>
            </Pressable>
            <Pressable style = {style.listItem}>
                <Text> Terapia Ocupacional (TO): </Text>
            </Pressable>
            <View style = {style.listItem}>
                <Text> Terapia da Fala e Linguagem </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Intervenção Precoce </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Terapia Sensorial </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Terapia Social Pragmática </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Intervenção Comportamental Early Start Denver (ESDM) </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Terapia de Desenvolvimento Relacional (RDI) </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Terapia de Integração Sensorial </Text>
            </View>
            <View style = {style.listItem}>
                <Text> Musicoterapia </Text>
            </View>

*/