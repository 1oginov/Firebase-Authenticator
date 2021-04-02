// @flow

import Authenticated from './Authenticated';
import enhance from './Authenticated.enhancer';
import style from './Authenticated.styles';

export default style(enhance(Authenticated));
