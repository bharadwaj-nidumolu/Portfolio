import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Avatar from './Avatar.png';

function Home() {
  const [typing] = useTypewriter({
    words: ['Full Stack Developer..!'],
    loop: true,
    delaySpeed: 2000,
  });

 
  return (
    <div className="Home">
      <div id='details'>
        <h1>Hey there!!!<br />
            I'm <span id='name'>Bharadwaj Nidumolu</span><br />
            <span>{typing}</span>
            <Cursor cursorStyle="|" />
        </h1>
      </div>
      <div>
        <img src={Avatar} alt='avatar' id='avatar'/>
      </div>
    </div>
  );
}

export default Home;
