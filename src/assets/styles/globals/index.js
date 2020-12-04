import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import common from './common';
import rootCustomProps from './root-custom-props';
import normalize from './normalize';
import editor from './editor';

export default createGlobalStyle`
  ${reset}
  ${common}
  ${rootCustomProps}
  ${normalize}
  ${editor}
`;
