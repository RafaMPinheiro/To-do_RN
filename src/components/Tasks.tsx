import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';

import { Feather, MaterialIcons } from '@expo/vector-icons';

interface TasksProps {
  id: number;
  title: string;
  done: boolean;
  handleDone: (id: number) => void;
  handleDelete: (id: number) => void;
  handleEditTask: (id: number, title: string) => void;
}

export const Tasks = ({ ...props }: TasksProps) => {
  const colorText = props.done ? '#008015' : '#505050';
  const weightText = props.done ? 'bold' : 'normal';
  const decorationText = props.done ? 'line-through' : 'none';

  const [colorTrash, setColorTrash] = useState('#505050');

  const handleDeleteChange = () => {
    if (colorTrash === '#FF0000') {
      setColorTrash('#505050');
      return;
    }
    setColorTrash('#FF0000');
    Alert.alert(
      'Remover item',
      'Tem certeza que você deseja remover esse item?',
      [
        {
          text: 'Cancelar',
          onPress: () => {
            setColorTrash('#505050');
          },
        },
        {
          text: 'Remover',
          onPress: () => {
            props.handleDelete(props.id);
          },
        },
      ]
    );
  };

  const handleEditTaskChange = () => {
    props.handleEditTask(props.id, props.title);
  };

  const doneChange = () => {
    props.handleDone(props.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => doneChange()}>
          {props.done ? (
            <MaterialIcons name="check-box" size={24} color="#008015" />
          ) : (
            <MaterialIcons
              name="check-box-outline-blank"
              size={24}
              color="#505050"
            />
          )}
        </TouchableOpacity>
        <Text
          style={{
            color: colorText,
            fontWeight: weightText,
            textDecorationLine: decorationText,
          }}
        >
          {props.title}
        </Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={() => {
            handleEditTaskChange();
          }}
        >
          <Feather name="edit-3" size={20} color="#505050" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleDeleteChange();
          }}
        >
          <Feather name="trash-2" size={20} color={colorTrash} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderColor: '#505050',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
