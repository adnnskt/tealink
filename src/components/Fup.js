import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function CadastroEvento({user}) {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tags, setTags] = useState([]);
  
  const dataUser = user
  console.warn(dataUser)

  const predefinedTags = ['Crises', 'Comportamento', 'Ajuste com medicação', 'Insonia', 'Escolar', 'Outros'];

  const handleSalvar = () => {
    // Lógica para salvar o evento
    console.log('Evento salvo:', { nome, data, descricao, tags });
  };

  const toggleTag = (tag) => {
    setTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nome do Evento</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome do evento"
      />

      <Text style={styles.label}>Tags</Text>
      <View style={styles.tagsContainer}>
        {predefinedTags.map((tag) => (
          <TouchableOpacity
            key={tag}
            style={[
              styles.tag,
              tags.includes(tag) && styles.tagSelected,
            ]}
            onPress={() => toggleTag(tag)}
          >
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Data</Text>
      <TextInput
        style={styles.input}
        value={data}
        onChangeText={setData}
        placeholder="Digite a data do evento"
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.inputDesc}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Digite a descrição do evento"
        multiline
      />

      <Button title="Salvar Evento" onPress={handleSalvar} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  inputDesc: {
    height: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  tag: {
    padding: 10,
    borderColor: '#fff',
    backgroundColor: '#a4bceb',
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  tagSelected: {
    backgroundColor: '#ddd',
  },
  tagText: {
    fontSize: 14,
  },
});