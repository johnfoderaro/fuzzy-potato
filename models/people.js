const peopleSchema = {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      additionalProperties: false,
      required: ['first', 'last', 'phone'],
      properties: {
        _id: { bsonType: 'objectId' },
        first: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        last: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        phone: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
      },
    },
  },
};

module.exports = peopleSchema;
