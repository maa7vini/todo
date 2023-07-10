import * as C from './App.styles'

import { useState } from 'react';

import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

function App() {

  const [ list, setList ] = useState<Item[]>([
    {
      id: 1,
      task: 'Comprar pão',
      done: true
    },

    {
      id: 2,
      task: 'Regar a planta',
      done: false
    }
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    
    newList.push({
      id: list.length + 1, 
      task: taskName,
      done: false
    })

    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header> Lista de Tarefas </C.Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map( (item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
