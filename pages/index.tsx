import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Assessment">
    <div className="homepage-container">
      <div className="start-button ">
        <Link href="/signup">Start</Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
