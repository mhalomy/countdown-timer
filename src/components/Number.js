import React from 'react';
import glamorous from 'glamorous';

const Wrapper = glamorous.div({
    color: 'red'
});

const Number = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
    );
}

export default Number;