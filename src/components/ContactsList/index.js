import {
  Container, Header, ListContainer, Card,
} from './styles';

import trash from '../../assets/images/icons/trash.svg';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Pedro Leal</strong>
              <small>instagram</small>
            </div>

            <span>pedro@mail.com</span>
            <span>(83) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>

            <button type="button">
              <img src={trash} alt="Remove" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
