import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

import { PropTypes } from 'prop-types';
import NoteWidgetContainer from './NoteWidgetContainer';

const DeleteIcon = ({ onClick }) => (
  <StyledDeleteIcon
    onClick={onClick}
    name="delete"
  />
);

DeleteIcon.propTypes = {
  onClick: PropTypes.func,
};

const StyledDeleteIcon = styled(Icon)`
&&& {
    z-index: 10;
    color: #333;
    position: absolute;
    top: 6px;
    right: 4px;
    height: 16px;
    // display: none;
    opacity: 0;
    -webkit-transition: color 0.3s;
    -webkit-transition: opacity 0.3s;
    transition: color 0.3s;
    transition: opacity 0.3s;
    transition-timing-function: linear;
    ${NoteWidgetContainer}:hover & {
        opacity: 1;
    }
}
`;

export default DeleteIcon;
