import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

import ContactsService from '../../services/ContactsService';

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };
      await ContactsService.createContact(contact);
      alert('Contato cadastrado com sucesso!');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm
        onSubmit={handleSubmit}
        btnLabel="Cadastrar"
      />
    </>
  );
}
