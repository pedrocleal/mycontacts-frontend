import Input from '../../components/Input';
import Select from '../../components/Select';
import PageHeader from '../../components/PageHeader';
import Button from '../../components/Button';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />
      <Input type="text" placeholder="Nome" />
      <Input type="text" placeholder="E-mail" />
      <Input type="text" placeholder="Telefone" />
      <Select>
        <option value="1">Categoria</option>
        <option value="2">Instagram</option>
        <option value="3">Trabalho</option>
        <option value="4">LinkedIn</option>
      </Select>
      <Button type="button">
        Salvar alterações
      </Button>
    </>
  );
}
