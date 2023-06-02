import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorage = async (key: string) => {
  const value = await AsyncStorage.getItem(key);

  if (!value) {
    return [];
  }
  return JSON.parse(value);
};

export const setStorage = async (key: string, value: any) => {
  const todos = await getStorage(key);

  todos.push(value);
  await AsyncStorage.setItem(key, JSON.stringify(todos));
};

export const changeDoneStorage = async (id: number) => {
  const todos = await getStorage('tasks');

  const newTodos = todos.map((todo: any) => {
    if (todo.id === id) {
      todo.done = !todo.done;
    }
    return todo;
  });

  await AsyncStorage.setItem('tasks', JSON.stringify(newTodos));
};

export const changeTaskStorage = async (id: number, task: string) => {
  const todos = await getStorage('tasks');

  const newTodos = todos.map((todo: any) => {
    if (todo.id === id) {
      todo.task = task;
    }
    return todo;
  });

  await AsyncStorage.setItem('tasks', JSON.stringify(newTodos));
};

export const deleteStorage = async (id: number) => {
  const todos = await getStorage('tasks');

  const newTodos = todos.filter((todo: any) => todo.id !== id);

  await AsyncStorage.setItem('tasks', JSON.stringify(newTodos));
};

export const clearAsyncStorage = async () => {
  AsyncStorage.clear();
};
