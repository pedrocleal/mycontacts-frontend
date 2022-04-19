// Service layer = padrão usado para separar as responsabilidades das entidades e melhorar o código

import delay from '../utils/delay';

class ContactsServices {
  async listContacts(orderBy = 'asc') {
    const response = await fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`); // Fetch data

    await delay(500);
    return response.json(); // Parse data
  }
}

export default new ContactsServices();
