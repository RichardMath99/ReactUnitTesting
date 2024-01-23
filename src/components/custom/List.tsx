import { useState } from "react"
import {
    StyledListContainer,
    StyledListTitle,
    StyledListModal,
    StyledBox,
    StyledInput,
    StyledButton,
    StyledListItem,
    StyledRemoveButton,
  } from './style';

type ListProps = {
  initialItems: string[]
}

function List({ initialItems }: ListProps) {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(initialItems);

  function addToList() {
    if (newItem.trim() !== '') {
      setList(state => [...state, newItem]);
      setNewItem('');
    }
  }

  function removeFromList(_item: string) {
    setList(state => state.filter(item => item !== _item));
  }

  return (
    <StyledListContainer>
        <StyledListTitle>React Unit Test</StyledListTitle>
        <StyledListModal>
            <StyledBox>
                <StyledInput
                    placeholder="Novo item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <StyledButton onClick={addToList}>Adicionar</StyledButton>
            </StyledBox>
            <ul>
                {list.map((item) => (
                <StyledListItem key={item}>
                    {item}
                    <StyledRemoveButton onClick={() => removeFromList(item)}>
                    Remover
                    </StyledRemoveButton>
                </StyledListItem>
                ))}
            </ul>
        </StyledListModal>
    </StyledListContainer>
  )
}

export default List