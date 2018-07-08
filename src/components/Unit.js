import React from 'react';
import glamorous from 'glamorous';

const Wrapper = glamorous.div({
    color: 'blue'
});

const Unit = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
    );
}

export default Unit;