import React from 'react';
import glamorous from 'glamorous';

const Wrapper = glamorous.div({
    fontSize: '.5em',
    fontWeight: 'bold'
});

const Unit = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
    );
}

export default Unit;