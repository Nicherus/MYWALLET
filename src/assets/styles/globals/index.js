import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import common from './common';
import normalize from './normalize';

export default createGlobalStyle`
  ${reset}
  ${common}
  ${normalize}
`;
