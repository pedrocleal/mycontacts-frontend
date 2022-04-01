import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import {
  InputSearchContainer, Container, Header, ListContainer, Card,
} from './styles';

import trash from '../../assets/images/icons/trash.svg';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        const data = await response.json();
        setContacts(data);
        console.log(data);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  console.log(orderBy);

  return (
    <>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Container>

        <Header>
          <strong>{contacts.length === 1 ? `${contacts.length} contato` : `${contacts.length} contatos`}</strong>
          <Link to="/new">Novo contato</Link>
        </Header>

        <ListContainer orderBy={orderBy}>
          <header>
            <button type="button" onClick={handleToggleOrderBy}>
              <span>Nome</span>
              <img src={arrow} alt="arrow" />
            </button>
          </header>

          {contacts.map((contact) => (
            <Card key={contact.id}>
              <div className="info">
                <div className="contact-name">
                  <strong>{contact.name}</strong>
                  <small>{contact.category_name}</small>
                </div>

                <span>{contact.email}</span>
                <span>{contact.phone}</span>
              </div>

              <div className="actions">
                <Link to={`/edit/${contact.id}`}>
                  <img src={edit} alt="Edit" />
                </Link>

                <button type="button">
                  <img src={trash} alt="Remove" />
                </button>
              </div>
            </Card>
          ))}
        </ListContainer>
      </Container>
    </>
  );
}
