import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';


import { useState } from 'react';
import TaskItem from '../components/TaskItem';

export default function HomeScreen() {
  const [tarefa, setTarefa] = useState('');
  type Tarefa = {
  texto: string;
  concluida: boolean;
};

const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  function adicionarTarefa() {
    if (tarefa.trim() === '') {
      return;
    }

   setTarefas([
  ...tarefas,
  {
    texto: tarefa,
    concluida: false,
  },
]);
    setTarefa('');
  }

  function excluirTarefa(index: number) {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  }

  function alternarTarefa(index: number) {
  const novasTarefas = [...tarefas];

  novasTarefas[index].concluida =
    !novasTarefas[index].concluida;

  setTarefas(novasTarefas);
}

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>📝 TaskFlow</Text>

      <Text style={styles.subtitulo}>
        Organize suas tarefas
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa..."
        value={tarefa}
        onChangeText={setTarefa}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={adicionarTarefa}
      >
        <Text style={styles.textoBotao}>
          + Adicionar tarefa
        </Text>
      </TouchableOpacity>

      <Text style={styles.tituloLista}>
        Minhas tarefas
      </Text>

    <FlatList
  data={tarefas}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item, index }) => (
    <TaskItem
      tarefa={item.texto}
      concluida={item.concluida}
      onDelete={() => excluirTarefa(index)}
      onToggle={() => alternarTarefa(index)}
    />
  )}
/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 70,
    backgroundColor: '#f5f7fb',
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#3478f6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  tituloLista: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
  },

  tarefa: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
    marginBottom: 10,
  },

  textoTarefa: {
    fontSize: 17,
  },
});