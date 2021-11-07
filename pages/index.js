import Layout from '../components/Layout';
import Calendar from '../components/widgets/Calendar';

// The dashboard page
export default function Home() {
  return (
    <Layout title="Home">
      <Calendar />
    </Layout>
  );
}
