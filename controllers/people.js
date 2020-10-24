async function getPeople(req, res, next) {
  try {
    const { app: { locals: { people } } } = req;
    const documents = await people.find().toArray();
    return documents ? res.json(documents) : res.sendStatus(500);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getPeople,
};
