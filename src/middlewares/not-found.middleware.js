function notFound(req, res, next) {
  res.status(404).send({
    message: "not found",
  });
}

module.exports = { notFound };