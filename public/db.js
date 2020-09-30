let db;
// create a new database request
const request = window.indexedDB.open("budget", 1);

request.onsuccess = function (event) {
  db = event.target.result;

};
