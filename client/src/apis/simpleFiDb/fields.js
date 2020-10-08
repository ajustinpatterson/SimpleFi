import fetchRequest from '../fetchRequest';

const baseUrl = 'http://localhost:3020';
const fieldEP = '/fields';

function getFields (arg) {
  return fetchRequest(baseUrl + fieldEP, {
    headers:{
      'x-access-token': arg
    }
  });
}

export {
  getFields,
}