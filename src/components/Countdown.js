import React from 'react';
import glamorous from 'glamorous';
import Unit from './Unit';
import Number from './Number';

const Wrapper = glamorous.div({

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