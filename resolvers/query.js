module.exports = {
  sessions: (parent, args, { dataSources }, info) => {
    return dataSources.sessionAPI.getSessions(args);
  },
  sessionById: (parent, { id }, { dataSources }, info) => {
    return dataSources.sessionAPI.getSessionById(id);
  },
  speakers: (parent, args, { dataSources }, info) => {
    return dataSources.speakerAPI.getSpeakers();
  },
  speakerById: (parent, { id }, { dataSources }, info) => {
    return dataSources.speakerAPI.getSpeakerById(id);
  },
  employees: (parent, args, { dataSources }, info) => {
    return dataSources.employeeAPI.getAllEmployees(info);
  },
  employeeById: (parent, { id }, { dataSources }, info) => {
    return dataSources.employeeAPI.getEmployeeById(id);
  },
  employeeConnection: (parent, {first, after}, { dataSources }, info) => {
    return dataSources.employeeAPI.getEmployeeConnection(first, after);
  },
};
