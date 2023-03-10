import { Link, useAuth, definePageConfig } from 'ice';
import CustomAuth from '@/components/CustomAuth';
import { useEffect } from 'react';

export default function Index() {
  const [auth, setAuth] = useAuth();
  useEffect(() => {
    console.log('auth', auth);
  }, [auth]);
  return (
    <>
      <ul style={{ listStyleType: 'none' }}>
        <li>
          <Link to="blog">Blog</Link>
        </li>
      </ul>
      <h1>Index</h1>
      <CustomAuth
        authKey={'guest'}
        fallback={
          <>
            <div onClick={() => setAuth({ guest: true })}>Set Guest Auth</div>No
            Auth
          </>
        }
      >
        I am ice.js. My auth is guest.
      </CustomAuth>
    </>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    title: 'Index',
    auth: ['admin'],
  };
});
