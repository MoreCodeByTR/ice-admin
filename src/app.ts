import { defineAppConfig } from 'ice';
import { defineAuthConfig } from '@ice/plugin-auth/types';

// App config, see https://v3.ice.work/docs/guide/basic/app
export default defineAppConfig(() => ({
  // Set your configs here.
  router: {
    basename: '/ice-admin/',
  },
}));

export const authConfig = defineAuthConfig(() => {
  // fetch auth data
  return {
    initialAuth: {
      admin: true,
    },
  };
});
