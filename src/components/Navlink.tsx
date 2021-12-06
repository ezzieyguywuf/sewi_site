import React from 'react';

interface LinkProps {
  target: string;
  text: string;
}

function Navlink(props: LinkProps) {
  return (
    <div className="navitem">
      <a href={props.target}>{props.text}</a>
    </div>
  );
}

export default Navlink;
