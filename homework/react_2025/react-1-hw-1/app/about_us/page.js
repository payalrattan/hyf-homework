import styles from './page.module.css';
import {OurMission}  from './components/ourMission/OurMission.jsx';
import {OurValues} from './components/ourValues/OurValues.jsx';
import { OurCrew } from './components/ourCrew/OurCrew.jsx'; 
import { OurPartners } from './components/ourPartners/OurPartners.jsx';

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1 align="center">ABOUT US</h1>
        <section className="card">
          <h2>Our Mission</h2>
          <OurMission />
        </section>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues />
        </section>
        <section className="card">
          <h2>The crew</h2>
          <OurCrew />
        </section>
        <section className="card">
          <h2>Our Partners</h2>
          <OurPartners />
        </section>
      </main>
    </div>
  );
}

export default Crew;
