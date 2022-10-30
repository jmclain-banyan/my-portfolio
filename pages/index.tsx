import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      {/* hero*/}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* ABout */}
      {/* Experience */}
      {/* skills */}
      {/* projects */}
      {/* contact me */}
    </div>
  );
}
