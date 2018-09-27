import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

import NoteWidgetContainer from './NoteWidgetContainer';

const DragIcon = () => (
  <StyledDragIcon
    name="expand arrows alternate"
    className="dragging-handle"
    // color="white"
    size="small"
  />
);


const StyledDragIcon = styled(Icon)`
&&& {
    color: white;
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
        color: #333;
        opacity: 1;
        // display: inline-block!important;
    }
}
`;


// stroke: #fff!important;
// position: abs

// top: 5px;
// right: 5px;
// display: none;
// /* display: block; */
// height: 16px;

export default DragIcon;
