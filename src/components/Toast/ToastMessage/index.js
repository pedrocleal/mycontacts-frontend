import { CheckCircle, X } from 'phosphor-react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function ToastMessage({ text, type }) {
  return (
    <Container type={type}>
      {type === 'error' && <X size={24} />}
      {type === 'success' && <CheckCircle size={24} />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'error', 'success']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
