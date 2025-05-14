import DashboardPage from "./pages/DashboardPage";
import Layout from "./components/Layout";
import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Layout>
      <>
        {/* Page-specific content goes here */}
        <DashboardPage />
      </>
    </Layout>
  );
}

export default App;
