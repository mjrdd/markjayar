migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lgz44m1kf5yd9en")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lgz44m1kf5yd9en")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
