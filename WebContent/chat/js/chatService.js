app.factory('chatService',function($rootScope){
	var socket = new SockJS('/projecttwo/portfolio');
    var stompClient = Stomp.over(socket);
    stompClient.connect("SYSTEM", "venu", function(frame) {
      $rootScope.$broadcast('sockConnected', frame);
    });

    return {
      stompClient: stompClient
    };
});