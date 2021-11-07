import Layout from '../components/layout';
import Calendar from '../components/widgets/Calendar';

// The dashboard page
export default function Home() {
  return (
    <Layout title="Home">
      <Calendar />
    </Layout>
  );
}
