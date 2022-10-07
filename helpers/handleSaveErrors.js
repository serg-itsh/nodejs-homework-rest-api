const isConflict = ({ name, code }) =>
  name === "MongoWriteConcernError" && code === 79;

const handleSaveErrors = (error, _, next) => {
  error.status = isConflict(error) ? 409 : 400;
  next();
};

module.exports = handleSaveErrors;
