import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from 'components/About';
import WorkExperience from "components/WorkExperience";
import Skills from "components/Skills";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      {/* hero*/}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* ABout */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id='experience' className="snap-center">
        <WorkExperience />
      </section>
      {/* skills */}
      <section id='skills' className="snap-start">
        <Skills />
      </section>
      {/* projects */}
      {/* contact me */}
    </div>
  );
}
// blog/:params
// bolg.[params].js