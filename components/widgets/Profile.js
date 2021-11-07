import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

export default function Profile() {
  const { user } = useUser();

  const route = user ? '/api/auth/logout' : '/api/auth/login';
  const content = user ? 'Log out' : 'Log in';

  return (
    <Link href={route}>
      <a className="nav-link">{content}</a>
    </Link>
  );
}
