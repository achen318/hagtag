import { useUser } from '@auth0/nextjs-auth0';

import Layout from '../components/layout';
import Calendar from '../components/widgets/Calendar';

import dbConnect from '../utils/dbConnect';
import User from '../models/user.model';

const Index = ({ users }) => {
  const { user } = useUser();

  return (
    <Layout title="Home" user={user}>
      <Calendar />
    </Layout>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  const result = await User.find({});
  const users = result.map((doc) => {
    const user = doc.toObject();
    user._id = user._id.toString();
    return user;
  });

  return { props: { users: users } };
}

export default Index;
