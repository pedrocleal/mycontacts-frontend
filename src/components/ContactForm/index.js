import PropTypes from 'prop-types';

import { Form } from './styles';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import FormGroup from '../FormGroup';

export default function ContactForm({ btnLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input type="text" placeholder="Nome" />
      </FormGroup>
      <FormGroup>
        <Input type="text" placeholder="E-mail" />
      </FormGroup>
      <FormGroup>
        <Input type="text" placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="1">Categoria</option>
          <option value="2">Instagram</option>
          <option value="3">LinkedIm</option>
        </Select>
      </FormGroup>

      <Button type="submit">{btnLabel}</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  btnLabel: PropTypes.string.isRequired,
};
