// @flow

import { connect } from 'react-redux';

const mapStateToProps = ({ route }) => ({ route });

export default connect(mapStateToProps);
