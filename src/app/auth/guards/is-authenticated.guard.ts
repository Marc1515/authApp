import { CanActivateFn } from '@angular/router';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  console.log('Is Authenticated Guard');
  console.log({ route, state });

  return true;
};
