
/* eslint-disable no-console */
const logger = require('winston');
const app = require('./app');
<%- insertFragment('imports') %>
<%- insertFragment('init') %>

const port = app.get('port');
const server = app.listen(port);
<%- insertFragment('init2') %>

process.on('unhandledRejection', (reason, p) => {
  <%- insertFragment('unhandled_rejection_log', [
    '  logger.error(\'Unhandled Rejection at: Promise \', p, reason);',
  ]) %>
  <%- insertFragment('unhandled_rejection') %>
});

server.on('listening', () => {
  <%- insertFragment('listening_log', [
    '  logger.info(\'Feathers application started on http://%s:%d\', app.get(\'host\'), port);',
  ]) %>
  <%- insertFragment('listening') %>
});

<%- insertFragment('funcs') %>
<%- insertFragment('end') %>
