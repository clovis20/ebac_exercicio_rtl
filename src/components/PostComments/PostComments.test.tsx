import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários', () => {
        render(<PostComment/>)

        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: '1* Comentário adicionado',
            }
        })

        fireEvent.click(screen.getByTestId('comentario-btn'))

        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: '2* Comentário adicionado'
            }
        })

        fireEvent.click(screen.getByTestId('comentario-btn'))

        expect(screen.getAllByTestId('comentario-elem')).toHaveLength(2);
    })
});