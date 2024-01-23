import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import List from './List' 

describe('List Component', () => {
  it('should render list items', async () => {
    const { getByText} = render(<List initialItems={['Diego', 'Rodz', 'Mayk']} />)

    expect(getByText('Diego')).toBeInTheDocument()
    expect(getByText('Rodz')).toBeInTheDocument()
    expect(getByText('Mayk')).toBeInTheDocument()
  });

  it('deve ser capaz de adicionar um novo item à lista', async () => {
    const { getByText, getByPlaceholderText } = render(<List initialItems={[]} />)

    const inputElement = getByPlaceholderText('Novo item');
    const addButton = getByText('Adicionar');

    userEvent.type(inputElement, 'Novo');
    userEvent.click(addButton);

    // await waitFor(() => {
    //   expect(getByText('Novo')).toBeInTheDocument()
    // })
  });

  it('deve ser capaz de adicionar remover item da lista', async () => {
    const { getAllByText, queryByText } = render(<List initialItems={['Diego']} />)

    const removeButtons = getAllByText('Remover');

    userEvent.click(removeButtons[0]);

    await waitFor(() => {
      expect(queryByText('Diego')).not.toBeInTheDocument()
    })
  });
});