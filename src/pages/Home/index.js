/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */

import { Link } from 'react-router-dom';

import {
  useEffect, useState, useMemo, useCallback,
} from 'react';
import {
  InputSearchContainer, Container, Header, ListContainer, Card, ErrorContainer, EmptyListContainer,
  SearchNotFoundContainer,
} from './styles';

import trash from '../../assets/images/icons/trash.svg';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

import Loader from '../../components/Loader';
import Button from '../../components/Button';
import ContactsServices from '../../services/ContactsService';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsServices.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      console.log(error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

  return (
    <>
      <Loader isLoading={isLoading} />

      {contacts.length > 0 && (
        <InputSearchContainer>
          <input
            value={searchTerm}
            type="text"
            placeholder="Pesquisar contato..."
            onChange={handleChangeSearchTerm}
          />
        </InputSearchContainer>
      )}

      <Container>

        <Header
          justifyContent={
            hasError
              ? 'flex-end'
              : (
                contacts.length > 0
                  ? 'space-between'
                  : 'center'
              )
          }
        >
          {(!hasError && contacts.length > 0) && (
            <strong>
              {filteredContacts.length === 1
                ? `${filteredContacts.length} contato`
                : `${filteredContacts.length} contatos`}
            </strong>
          )}
          <Link to="/new">Novo contato</Link>
        </Header>

        {hasError && (
          <ErrorContainer>
            <img src={sad} alt="Sad face" />
            <div className="details">
              <strong>Ocorreu um erro ao obter os seus contatos!</strong>
              <Button type="button" onClick={handleTryAgain}>Tentar novamente</Button>
            </div>
          </ErrorContainer>
        )}

        {!hasError && (
          <ListContainer orderBy={orderBy}>

            {(contacts.length < 1 && !isLoading) && (
              <EmptyListContainer>
                <img src={emptyBox} alt="Empty box" />
                <p>
                  Você ainda não tem nenhum contato cadastrado!
                  Clique no botão <strong>”Novo contato”</strong> à cima
                  para cadastrar o seu primeiro!
                </p>
              </EmptyListContainer>
            )}

            {(contacts.length > 0 && filteredContacts.length < 1 && !isLoading) && (
              <SearchNotFoundContainer>
                <img src={magnifierQuestion} alt="Magnifier question" />
                <p>Nenhum resultado foi encontrado para <strong>{`"${searchTerm}"`}</strong>.</p>
              </SearchNotFoundContainer>
            )}

            {filteredContacts.length > 0 && (
              <header>
                <button type="button" onClick={handleToggleOrderBy}>
                  <span>Nome</span>
                  <img src={arrow} alt="arrow" />
                </button>
              </header>
            )}

            {filteredContacts.map((contact) => (
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
        )}
      </Container>
    </>
  );
}
