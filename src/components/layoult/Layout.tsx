import { ReactNode } from 'react';
import Navigation from './Navigation';

interface Iprops {
  children: ReactNode;
}

function Layoult(props: Iprops) {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  );
}

export default Layoult;
