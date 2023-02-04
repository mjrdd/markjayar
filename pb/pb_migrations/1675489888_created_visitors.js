migrate((db) => {
  const collection = new Collection({
    "id": "lgz44m1kf5yd9en",
    "created": "2023-02-04 05:51:28.519Z",
    "updated": "2023-02-04 05:51:28.519Z",
    "name": "visitors",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1lw0zojc",
        "name": "ip_address",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lgz44m1kf5yd9en");

  return dao.deleteCollection(collection);
})
