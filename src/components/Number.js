import React from 'react';
import glamorous from 'glamorous';

const Wrapper = glamorous.div({
    fontSize: '2em',
    fontWeight: 'bold'
});

const Number = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
    );
}

export default Number;