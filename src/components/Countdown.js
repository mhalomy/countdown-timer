import React from 'react';
import glamorous from 'glamorous';
import Unit from './Unit';
import Number from './Number';

const Wrapper = glamorous.div({
  border: '1px solid black',
  width: '3em',
  margin: '10px 10px 10px 0px',
  textAlign: 'center'
});

const Countdown = (props) => {
  return (
    <Wrapper>
      <Number>
        {props.number}
      </Number>
      <Unit>
        {props.unit}
      </Unit>
    </Wrapper>
    );
}

export default Countdown;