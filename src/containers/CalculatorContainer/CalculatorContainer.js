import { connect } from 'react-redux';
import { newInput } from '../../actions';
import Calculator from '../../components/Calculator/Calculator';
import formatDisplay from '../../modules/formatDisplay';

const mapStateToProps = (state) => ({
  input: formatDisplay(state.input),
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
