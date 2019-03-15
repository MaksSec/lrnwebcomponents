module.exports = {
  // Code generated by Prisma (prisma@1.29.0-beta.7). DO NOT EDIT.
  typeDefs:
    // Please don't change this file manually but run `prisma generate` to update it.
    // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

    /* GraphQL */ `
      type AggregateStatement {
        count: Int!
      }

      type BatchPayload {
        count: Long!
      }

      scalar Json

      scalar Long

      type Mutation {
        createStatement(data: StatementCreateInput!): Statement!
        updateStatement(
          data: StatementUpdateInput!
          where: StatementWhereUniqueInput!
        ): Statement
        updateManyStatements(
          data: StatementUpdateManyMutationInput!
          where: StatementWhereInput
        ): BatchPayload!
        upsertStatement(
          where: StatementWhereUniqueInput!
          create: StatementCreateInput!
          update: StatementUpdateInput!
        ): Statement!
        deleteStatement(where: StatementWhereUniqueInput!): Statement
        deleteManyStatements(where: StatementWhereInput): BatchPayload!
      }

      enum MutationType {
        CREATED
        UPDATED
        DELETED
      }

      interface Node {
        id: ID!
      }

      type PageInfo {
        hasNextPage: Boolean!
        hasPreviousPage: Boolean!
        startCursor: String
        endCursor: String
      }

      type Query {
        statement(where: StatementWhereUniqueInput!): Statement
        statements(
          where: StatementWhereInput
          orderBy: StatementOrderByInput
          skip: Int
          after: String
          before: String
          first: Int
          last: Int
        ): [Statement]!
        statementsConnection(
          where: StatementWhereInput
          orderBy: StatementOrderByInput
          skip: Int
          after: String
          before: String
          first: Int
          last: Int
        ): StatementConnection!
        node(id: ID!): Node
      }

      type Statement {
        id: ID!
        data: Json!
      }

      type StatementConnection {
        pageInfo: PageInfo!
        edges: [StatementEdge]!
        aggregate: AggregateStatement!
      }

      input StatementCreateInput {
        data: Json!
      }

      type StatementEdge {
        node: Statement!
        cursor: String!
      }

      enum StatementOrderByInput {
        id_ASC
        id_DESC
        data_ASC
        data_DESC
        createdAt_ASC
        createdAt_DESC
        updatedAt_ASC
        updatedAt_DESC
      }

      type StatementPreviousValues {
        id: ID!
        data: Json!
      }

      type StatementSubscriptionPayload {
        mutation: MutationType!
        node: Statement
        updatedFields: [String!]
        previousValues: StatementPreviousValues
      }

      input StatementSubscriptionWhereInput {
        mutation_in: [MutationType!]
        updatedFields_contains: String
        updatedFields_contains_every: [String!]
        updatedFields_contains_some: [String!]
        node: StatementWhereInput
        AND: [StatementSubscriptionWhereInput!]
        OR: [StatementSubscriptionWhereInput!]
        NOT: [StatementSubscriptionWhereInput!]
      }

      input StatementUpdateInput {
        data: Json
      }

      input StatementUpdateManyMutationInput {
        data: Json
      }

      input StatementWhereInput {
        id: ID
        id_not: ID
        id_in: [ID!]
        id_not_in: [ID!]
        id_lt: ID
        id_lte: ID
        id_gt: ID
        id_gte: ID
        id_contains: ID
        id_not_contains: ID
        id_starts_with: ID
        id_not_starts_with: ID
        id_ends_with: ID
        id_not_ends_with: ID
        AND: [StatementWhereInput!]
        OR: [StatementWhereInput!]
        NOT: [StatementWhereInput!]
      }

      input StatementWhereUniqueInput {
        id: ID
      }

      type Subscription {
        statement(
          where: StatementSubscriptionWhereInput
        ): StatementSubscriptionPayload
      }
    `
};
