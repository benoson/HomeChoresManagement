// Defining an ENUM, for specific errors definitions, and the data about the error

let ErrorType = {

  GENERAL_ERROR: {
    id: 1,
    httpCode: 600,
    message: "A General Error Has Occurred",
    isShowStackTrace: true,
  },

  INVALID_DESCRIPTION: {
    id: 2,
    httpCode: 401,
    message: "Chore Description Is Not Valid, It Must Not Be Empty",
    isShowStackTrace: true,
  },

  INVALID_FAMILY_MEMBER: {
    id: 3,
    httpCode: 401,
    message: "Family Member Data Is Not Valid, It Must Not Be Empty",
    isShowStackTrace: true,
  },
};

module.exports = ErrorType;