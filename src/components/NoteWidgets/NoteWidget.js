import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NoteWidgetContainer from './NoteWidgetContainer';
import DeleteIcon from './DeleteIcon';

class NoteWidget extends React.PureComponent {
  onClickDelete = (event) => {
    console.log('onClickDelete');
    typeof this.props.onClickDelete === 'function' && this.props.onClickDelete(this.props.id);
  }

  render() {
    const {
      id,
      title,
      value,
      onClickDelete,
    } = this.props;
    return (
      <NoteWidgetContainer className="dragging-handle">
        <WidgetTitle>
          {title}
        </WidgetTitle>
        <NoteWidgetContentText>
          {value}
        </NoteWidgetContentText>
        <DeleteIcon onClick={this.onClickDelete} />
      </NoteWidgetContainer>
    );
  }
}
NoteWidget.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.number.isRequired,
  onClickDelete: PropTypes.func,
};

NoteWidget.defaultProps = {
  title: 'Untitled',
  value: 'Empty Notes',
};

const WidgetTitle = styled.div`
    font-weight: 600;
    max-weight: 100%;
    font-size: 24px;
    `;
const NoteWidgetContentText = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
    font-weight: 400;
    max-weight: 100%;
    font-size: 20px;
    line-height: 1.2;
`;


export default NoteWidget;
