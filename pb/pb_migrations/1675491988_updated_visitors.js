migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lgz44m1kf5yd9en")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1lw0zojc",
    "name": "ip_address",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lgz44m1kf5yd9en")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
