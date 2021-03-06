const {gql} = require('apollo-server');

const typeDefs = gql`
    type Track{
       id: ID!
       title: String!
       author: Author!
       thumbnail: String
       length: Int
       modulesCount: Int
    }

    type Author{
        id: ID!
        name: String!
        photo: String
    }

    type Query{
        # Get tracks for our homepage grid
        tracksForHome: [Track!]!
    }

`;

module.exports = typeDefs;