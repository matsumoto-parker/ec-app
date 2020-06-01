import { signInAction } from './actions';
import { push } from 'connected-react-router';

export const signIn = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      const url = 'https://api.github.com/users/matsumoto-parker';

      const response = await fetch(url)
        .then((res) => res.json())
        .catch(() => null);

      const username = response.login;
      console.log(username);

      dispatch(
        signInAction({
          isSignedIn: true,
          uid: '0001',
          username: username,
        })
      );
      dispatch(push('/'));
    }
  };
};
