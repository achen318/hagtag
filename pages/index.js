import { useUser } from '@auth0/nextjs-auth0';

import Layout from '../components/layout';
import Calendar from '../components/widgets/Calendar';

// The dashboard page
export default function Home() {
  const { user } = useUser();

  if (user) {
    return (
      <Layout title="Home">
        <Calendar />
      </Layout>
    );
  } else {
    return (
      <Layout title="Home">
        <p>You are not logged in.</p>
      </Layout>
    );
  }
}
