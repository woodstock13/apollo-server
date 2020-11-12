const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    sessions(
      id: ID
      title: String
      description: String
      startsAt: String
      endsAt: String
      room: String
      day: String
      format: String
      track: String
      level: String
    ): [Session]
    sessionById(id: ID): Session
    speakers: [Speaker]
    speakerById(id: ID): Speaker
    employees: [Employee]
    employeeById(id: ID): Employee
    employeeConnection(      
      first: Int
      after: ID
    ) : EmployeeConnection
  }

  type Mutation {
    toggleFavoriteSession(id: ID): Session
    addNewSession(session: SessionInput): Session
    deleteSession(id: ID): Session
  }

  input SessionInput {
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
    level: String
    favorite: Boolean
  }

  type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
  }

  type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
      @deprecated(
        reason: "Too many sessions do not fit into a single track, we will be migrating to a tags based system in the future..."
      )
    level: String
    favorite: Boolean
    speakers: [Speaker]
  }

  type Employee {
    id: ID!
    first_name: String
    last_name: String
    date_of_birth: String
    phone_number: String
  }
  type EmployeeConnection {
    totalCount: Int
    employees: [Employee]
    edges: [EmployeeEdge]
    pageInfo: PageInfo
  }
  type EmployeeEdge {
    cursor: ID!
    node: Employee
  }
  type PageInfo {
    startCursor: ID
    endCursor: ID
    hasNextPage: Boolean!
    isFirstPage: Boolean
  }
`;
