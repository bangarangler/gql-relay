const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const { NotesQuery } = require("./query/NotesQuery");
const {
  CreateNoteMutation,
  UpdateNoteMutation,
  DeleteNoteMutation,
} = require("./mutation/NotesMutation");

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    notes: NotesQuery,
  }),
});

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    createNotes: CreateNoteMutation,
    deleteNotes: DeleteNoteMutation,
    updateNotes: UpdateNoteMutation,
  }),
});

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

module.exports = schema;
