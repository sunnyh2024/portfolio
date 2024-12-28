import Landing from "./pages/landing/landing";
import Layout from "./components/layout/layout";
import About from "./pages/about/about";

function App() {
  return (
    <Layout>
      <Landing />
      <About />
    </Layout>
  );
}

export default App;
