export const noRouteHandler = (req, res, next) => {
  res.status(404).send();
  next();
};

export const genericErrorHandler = (error, req, res, next) => {
  console.error('There was a problem');
  res.status(500).send(error);
  next(); 
}