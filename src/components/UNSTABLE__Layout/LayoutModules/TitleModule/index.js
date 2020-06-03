/**
 * @file Title module.
 * @copyright IBM Security 2020
 */

import { node, string } from 'prop-types';
import { createElement } from 'react';

import { getLayoutModuleProps } from '../LayoutModule';

const TitleModule = ({ children, className, element, ...other }) =>
  createElement(element, {
    children,
    ...getLayoutModuleProps({ className, module: 'Title', type: 'title' }),
    ...other,
  });

TitleModule.propTypes = {
  children: node.isRequired,
  element: string,
  className: string,
};

TitleModule.defaultProps = {
  element: 'h2',
  className: null,
};

export default TitleModule;
