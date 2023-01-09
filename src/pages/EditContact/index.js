import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';

export default function EditContact() {
  const { id } = useParams();
  const [preloadedContact, setPreloadedContact] = useState({});

  const getContact = useCallback(async () => {
    const contact = await ContactsService.getContact(id);

    setPreloadedContact(contact);
  }, [id]);

  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };
      await ContactsService.updateContact(id, contact);

      // TODO: fix update contact

      alert('Contato atualizado com sucesso!');
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getContact(id);
  }, [getContact, id]);

  return (
    <>
      <PageHeader title="Editar Contato" />

      <ContactForm
        btnLabel="Atualizar dados"
        handleSubmit={handleSubmit}
        contactData={preloadedContact}
      />
    </>
  );
}
