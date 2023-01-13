import './App.css';
import { PopulatedMenu } from './components/Menu/Menu';
import { PageScroller } from './components/PageScroller/PageScroller';
import { Smiley } from './components/Smiley/Smiley';
import { Square } from './shapes/Square';
import { Scroller } from '@jamiemoyes/project-scroller';
import mockProjects from './assets/projects.json';
import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';

function formatDate(date: string) {
  return format(parseISO(date), 'MMMM yyyy');
}

function projectMapper({
  title,
  subtitle,
  startDate,
  endDate,
  description
}: {
  title: string;
  subtitle: string;
  startDate: string;
  endDate?: string;
  description: string;
}) {
  return {
    preview: {
      title,
      subtitle,
      extraInfo: `${formatDate(startDate)} - ${endDate ? formatDate(endDate) : 'Present'}`
    },
    main: { title, body: description }
  };
}

const App = () => {
  const projects = mockProjects.map(projectMapper);
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    const ioOptions = {
      rootMargin: '0px',
      threshold: 0.0
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    }, ioOptions);

    const target = document.querySelector('.front-page-container') as HTMLElement;
    observer.observe(target);
    return () => {
      observer.unobserve(target);
    };
  }, [setMenuOpen]);

  function handleMenuOpen() {
    return menuOpen && setMenuOpen(false);
  }

  return (
    <div className="App">
      <section className="header">
        <Square
          id="menu-square"
          animate={false}
          clickable
          onClick={handleMenuOpen}
          isOpen={menuOpen}
        />
        <PopulatedMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />
      </section>
      <section id="home" className="front-page-container">
        <div>
          <h1>hello!</h1>
          <Smiley />
        </div>
        <PageScroller />
      </section>
      <section id="about-me" className="about-me">
        <h1 className="title">My name is Jamie</h1>
        <div className="split-window">
          <p>
            Im a Glasgow-based Product Developer with experience in creating blah blah blah. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus vitae turpis non
            aliquam. Suspendisse facilisis malesuada lorem, dictum posuere nibh bibendum finibus.
            Nulla porta leo eu quam dignissim, id sagittis urna tincidunt. Integer ligula tortor.
          </p>
          <div />
          <div></div>
        </div>
      </section>
      <section id="work" className="scroller-page">
        <h1 className="title">Work</h1>
        <Scroller contents={projects} />
      </section>
    </div>
  );
};

export default App;
