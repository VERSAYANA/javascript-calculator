import { connect } from 'react-redux';
import { changeLogic, changeTheme, toggleDrawer } from '../../actions';
import Drawer from '../../components/Drawer/Drawer';

const mapStateToProps = (state) => ({
  logic: state.logic,
  theme: state.theme,
  open: state.drawer,
});
const mapDispatchToProps = (dispatch) => ({
  changeLogic: (logic) => dispatch(changeLogic(logic)),
  changeTheme: (theme) => dispatch(changeTheme(theme)),
  toggleDrawer: () => dispatch(toggleDrawer()),
});

const DrawerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Drawer);

export default DrawerContainer;
