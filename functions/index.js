const functions = require('firebase-functions');
const algoliasearch = require('algoliasearch');
const client = algoliasearch(functions.config().algolia.app_id, functions.config().algolia.api_key);
const ALGOLIA_USERS_INDEX = 'Users';

exports.usersEntry = functions.database.ref(`/Users/{userUID}/`).onWrite(event => {
  const index = client.initIndex(ALGOLIA_USERS_INDEX);
  const eventSnapshot = event.data;

  if (!event.data.val()) {
    return;
  }

  const firebaseObject = {
    displayname: eventSnapshot.child('displayname'),
    username: eventSnapshot.child('username'),
    objectID: event.params.userUID
  }

  return index.saveObject(firebaseObject)
})

exports.userIndexDeletion = functions.database.ref(`Users/{userUID}`).onDelete(event => {
  const index = client.initIndex(ALGOLIA_USERS_INDEX);
  const objectID = event.params.userUID;

  return index.deleteObject(objectID)
});
