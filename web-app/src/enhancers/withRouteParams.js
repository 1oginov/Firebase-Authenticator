// @flow

import { connect } from 'react-redux';

const mapStateToProps = ({ routeParams }) => ({ routeParams });

const withRouteParams = connect(mapStateToProps);

export default withRouteParams;
