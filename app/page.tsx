import Applications from "./components/Applications";
import Collection from "./components/Collection";
import Colophon from "./components/Colophon";
import Frontispiece from "./components/Frontispiece";
import Instrument from "./components/Instrument";
import Marginalia from "./components/Marginalia";
import Masthead from "./components/Masthead";
import Protocol from "./components/Protocol";
import Quality from "./components/Quality";
import Register from "./components/Register";
import SkipLink from "./components/SkipLink";

export default function Page() {
  return (
    <>
      <SkipLink />
      <Masthead />
      <main>
        <Frontispiece />
        <Collection />
        <Instrument />
        <Protocol />
        <Quality />
        <Register />
        <Applications />
        <Marginalia />
        <Colophon />
      </main>
    </>
  );
}
