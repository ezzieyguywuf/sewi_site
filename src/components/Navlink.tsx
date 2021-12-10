import { Link } from "react-router-dom";
import React from 'react';

interface LinkProps {
  target: string;
  text: string;
}

function Navlink(props: LinkProps) {
  return (
    <div className="navitem">
      <Link to={props.target}>{props.text}</Link>
    </div>
  );
}

export default Navlink;
