import { Link } from 'react-router-dom';

import {
  InputSearchContainer, Container, Header, ListContainer, Card,
} from './styles';

import trash from '../../assets/images/icons/trash.svg';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';

export default function Home() {
  return (
    <>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Container>

        <Header>
          <strong>3 contatos</strong>
          <Link to="/new">Novo contato</Link>
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
    </>
  );
}
