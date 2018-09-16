import { connect } from 'react-redux';
import { newInput } from '../../actions';
import Calculator from '../../components/Calculator/Calculator';

const mapStateToProps = (state) => ({
  input: state.input.split('').join(' '),
  display: state.display,
});

const mapDispatchToProps = (dispatch) => ({
  newInput: (input) => dispatch(newInput(input)),
});

const CalculatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calculator);

export default CalculatorContainer;
