import styled from 'styled-components';

const NoteWidgetContainer = styled.div`
    background-color: ${props => props.background
    ? props.background
    : props.theme.customTheme.indicator.defaultBackground

};
    width: 100%;
    height:100%;
    border-radius: 2px;
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    flex:1;
    justify-content: space-between;
    height: 100%;

    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    min-height: 100px;
    padding: 10px;
    overflow: hidden;
`;

export default NoteWidgetContainer;
