import fetchRequest from '../fetchRequest';

const baseUrl = 'http://localhost:3020';
//FIXME: put this in secure folder
const tokensEP = '/tokens';
const fieldTokensEP = '/userfieldtokens'

//TODO: authentication - credentials: include
function  getTokens (arg) {
  return fetchRequest(baseUrl + tokensEP, {
    headers:{
      'x-access-token': arg
    }
  });
}

async function getUserFieldTokens (tokenIds) {
  tokenIds = JSON.stringify(tokenIds)
  return await fetchRequest(`${baseUrl}${fieldTokensEP}/${tokenIds}`)
}

export {
  getTokens,
  getUserFieldTokens
}