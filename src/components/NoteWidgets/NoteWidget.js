import React from 'react';
import styled from 'styled-components';
// import DragIcon from '../Widget/CommonWidget/CommonWidgetComponents/WidgetDragIcon';

import PropTypes from 'prop-types';

import NoteWidgetContainer from './NoteWidgetContainer';

class NoteWidget extends React.PureComponent {
  render() {
    const {
      title,
      value,
      background,
      isDraggable,
    } = this.props;
    return (
      <NoteWidgetContainer background={background} className="dragging-handle">
        <WidgetTitle>
          {title}
        </WidgetTitle>
        <NoteWidgetContentText>
          {value}
        </NoteWidgetContentText>
        {/* { isDraggable && <DragIcon />} */}
      </NoteWidgetContainer>
    );
  }
}
NoteWidget.defaultProps = {
       title: 'Untitled',
      value: 'Empty Notes',
      background: '#ddd',
      isDraggable: false,
}
const WidgetTitle = styled.div`
    font-weight: 600;
    max-weight: 100%;
    font-size: 19px;
    `;
const NoteWidgetContentText = styled.div`
z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
    font-weight: 600;
    max-weight: 100%;
    font-size: 24px;
`;

export default NoteWidget;
