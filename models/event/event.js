function makeEvent(db) {
  const TABLE_NAME = 'events';
  function createEvent(event) {
    return db(TABLE_NAME).insert(event).returning('*');
  }

  function getEvents() {
    return db.select('*').from(TABLE_NAME);
  }
  function getEvent(id) {
    return db.first('*').from(TABLE_NAME).where('id', id);
  }

  function removeEvent(id) {
    return db(TABLE_NAME).where('id', id).del();
  }

  function updateEvent(id, event) {
    return db(TABLE_NAME).where('id', id).update(event);
  }
  return {
    createEvent,
    getEvent,
    getEvents,
    removeEvent,
    updateEvent
  };
}

module.exports = makeEvent;


