function initEventsController({ eventsService }) {
  async function getEvents(req, res) {
    try {
      const events = await eventsService.getEvents();
      res.json(events);
    } catch (e) {
      console.error(e);
    }
  }

  async function getEvent(req, res) {
    try {
      const event = await eventsService.getEvent(req.params.id);
      res.json(event);
    } catch (e) {
      console.error(e);
    }
  }

  async function createEvent(req, res) {
    try {
      const event = await eventsService.createEvent({
        name: req.body.name,
        description: req.body.description
      });
      res.json(event);
    } catch (e) {
      console.log(e);
    }
  }

  async function removeEvent(req, res) {
    try {
      const removedEvent = await eventsService.removeEvent(req.params.id);
      res.json(removedEvent);
    } catch (e) {
      console.log(e);
    }
  }

  async function updateEvent(req, res) {
    try {
      const updatedEvent = await eventsService.updateEvent(
        req.params.id,
        Object.assign({}, req.body)
      );

      res.json(updatedEvent);
    } catch (e) {
      console.log(e);
    }
  }

  return {
    getEvents,
    getEvent,
    createEvent,
    removeEvent,
    updateEvent
  };
}

module.exports = initEventsController;
