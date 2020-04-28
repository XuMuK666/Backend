var azure = require('azure-sb');
var notificationHubService = azure.createNotificationHubService('test','Endpoint=sb://spaceman.servicebus.windows.net/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=1LpFddMqE4oazpsUmnfxPZqughqqNcS7wOoTg9inpd4=');

var payload = {
    data: {
      message: 'Hello!'
    }
  };
  notificationHubService.gcm.send(null, payload, function(error){
    if(!error){
      //notification sent
    }
  });