import { useUser } from '@auth0/nextjs-auth0';

export default function Profile() {
  const { user, error } = useUser();
  if (error) return <div>{error.message}</div>;

  if (user)
    // user is logged in
    return <a href="/api/auth/logout">Logout</a>;
  // user is not logged in
  else return <a href="api/auth/login">Login</a>;
}
