import React, {useState, useEffect} from 'react';

const typingSpeed = 50;
const initialText=
  `
  A FrontEnd Software Developer with a passion for coding and creating, dedicated to continuous learning and improvement.
  `;
function Description() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (text.length !== initialText.length) {
    const typingTimer = setTimeout(() => {
      setText(text + initialText[index])
      setIndex(index+1);
    }, typingSpeed);
    return () => clearTimeout(typingTimer);
  }
  }, [text,index]);
  return (
      <p className="mt-6 text-lg leading-8 text-gray-800 typing-text">
        {text}
      </p>
  );
}

function Home() {
  return (
    <>
    <div className='min-h-screen'>
    <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Hi, My Name is Ana</h1>
            <Description />
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      <div className="skills">
        <h1> Skills</h1>
            <span>
            JavaScript, ReactJS, HTML, CSS, NPM, Git, 
            BootStrap, MaterialUI, TailwindCSS.
            </span>
      </div>
      </div>
    </>
  );
}

export default Home;
