import React from 'react';
import { Segment } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

import styled from 'styled-components';

import Header from '../Header';
import InputField from '../TextArea/TextArea.Component';
import ButtonGroup from '../ButtonGroup/ButtonGroup.Component';
import Grid from '../GridLayout/index';




class Home extends React.PureComponent {
  render() {
    const {
      inputMode,
      toggleInputMode,
      notes,
      gridLayout,
      onSubmit,
      onReset,
      onLayoutChange,
      onClickDelete,
    } = this.props;
    return (
      <div className="App">
        <Header />
        <BodyWrapper>
          <p className="App-intro">
                To get started, Press
            {' '}
            <code>Add A New Note</code>
            {' '}
and type something.
          </p>
          <ButtonGroup
            inputMode={inputMode}
            onToggleInputMode={toggleInputMode}
            onSubmit={onSubmit}
            onReset={onReset}
          />
          <ContentWrapper>
            {
                    inputMode
                && (
                <Segment.Group horizontal>
                  <Segment>
                    <InputField id="noteTitle" title="Title" />
                  </Segment>
                  <Segment>
                    <InputField id="noteContent" title="Note Content" />
                  </Segment>
                </Segment.Group>
                )
                  }
          </ContentWrapper>
          <Grid
            notes={notes}
            gridLayout={gridLayout}
            onLayoutChange={onLayoutChange}
            onClickDelete={onClickDelete}
          />
        </BodyWrapper>
      </div>
    );
  }
}

export default Home;


Home.propTypes = {
  inputMode: PropTypes.bool.isRequired,
  toggleInputMode: PropTypes.func.isRequired,
  notes: PropTypes.object.isRequired,
  gridLayout: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onLayoutChange: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

const ContentWrapper = styled.div`
width: 800px;
`;

const BodyWrapper = styled.div`
align-content: center;
align-items: center;
display: flex;
flex-direction: column;
`;
