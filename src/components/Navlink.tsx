import React from 'react';

interface LinkProps {
  target: string;
  text: string;
  right?: boolean;
}

function Navlink(props: LinkProps) {
  const className = `navitem ${props.right ? 'rightalign' : ''}`;

  return (
    <li className={className}>
      <a href={props.target}>{props.text}</a>
    </li>
  );
}

export default Navlink;
