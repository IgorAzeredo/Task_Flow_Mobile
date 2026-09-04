import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type TaskItemProps = {
  tarefa: string;
  concluida: boolean;
  onDelete: () => void;
  onToggle: () => void;
};

export default function TaskItem({
  tarefa,
  concluida,
  onDelete,
  onToggle,
}: TaskItemProps) {
  return (
    <View style={styles.tarefa}>

      <TouchableOpacity
        style={styles.areaTarefa}
        onPress={onToggle}
      >
        <Text style={styles.icone}>
          {concluida ? '✓' : '○'}
        </Text>

        <Text
          style={[
            styles.textoTarefa,
            concluida && styles.tarefaConcluida,
          ]}
        >
          {tarefa}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.botaoExcluir}>🗑️</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  tarefa: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  areaTarefa: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  icone: {
    fontSize: 22,
    marginRight: 10,
  },

  textoTarefa: {
    fontSize: 17,
    flex: 1,
  },

  tarefaConcluida: {
    textDecorationLine: 'line-through',
    color: '#888',
  },

  botaoExcluir: {
    fontSize: 22,
    marginLeft: 10,
  },
});