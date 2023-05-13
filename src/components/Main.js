import { Intro } from './Intro';
import { Invite } from './Invite';
import { Schedule } from './Schedule';
import { Info } from './Info';
import { Place } from './Place';

export const Main = (props) => {
  return (
    <main className='main'>
      <Intro />
      <Invite
        adjective={props.adjective}
        name={props.name}
        pronoun1={props.pronoun1}
        pronoun2={props.pronoun2}
        pronoun3={props.pronoun3}
      />
      <Schedule />
      <Info />
      <Place />
    </main>
  );
};
