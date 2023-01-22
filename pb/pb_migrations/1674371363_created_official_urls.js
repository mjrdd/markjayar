migrate((db) => {
  const collection = new Collection({
    "id": "7e2180h4ngpuksj",
    "created": "2023-01-22 07:09:23.632Z",
    "updated": "2023-01-22 07:09:23.632Z",
    "name": "official_urls",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i1rl9eae",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zkvadxno",
        "name": "url",
        "type": "url",
        "required": true,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "37hreiqh",
        "name": "expiry",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7e2180h4ngpuksj");

  return dao.deleteCollection(collection);
})
