import Landing from "./pages/landing/landing";
import Background from "./components/background/background";
import About from "./pages/about/about";
import PageLayout from "./components/pageLayout/pageLayout";

function App() {
  return (
    <Background>
      <Landing />
      <PageLayout>
        <About />
      </PageLayout>
    </Background>
  );
}

export default App;
