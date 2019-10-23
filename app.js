const FtpSvr = require ( 'ftp-srv' );

const hostname = '127.0.0.1';
const port = 1111

const ftpServer = new FtpSvr ( 'ftp://' + hostname + ':' + port,
{ anonymous: true, greeting : [ "Hello Jong", "Wie gehts?" ] } );

ftpServer.on ( 'login', ( data, resolve, reject ) =>
{
  resolve ( { root: './ftp' } );
});

ftpServer.on ( 'client-error', (connection, context, error) =>
{
  console.log ( 'connection: ', connection );
  console.log ( 'context: ', context );
  console.log ( 'error: ', error );
});


ftpServer.listen()
.then(() =>
{
  console.log ( `Server running at ftp://${hostname}:${port}/` );
});