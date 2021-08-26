const requestLogger = (req, res, next) => {
  res.once("finished", () => {
    const log = [req.method, req.path];
    if (req.body && Object.keys(req.body).length > 0) {
      log.push(JSON.stringify(req.body));
    }
    if (req.query && Object.keys(req.query).length > 0) {
      log.push(JSON.stringify(req.query));
    }
    log.push("->", res.statusCode);
    console.log(log.join(" "));
  });
  next();
};

module.exports = requestLogger;
