import fetchRequest from '../fetchRequest';

const baseUrl = 'http://localhost:3020';
const signin = '/signin';

function signIn (body) {
  return fetchRequest(baseUrl + signin, {
    method: 'POST',
    headers: {'Content-Type': 'application/JSON'},
    body: JSON.stringify(body)
  });
}

export {
  signIn,
}