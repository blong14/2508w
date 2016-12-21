<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>
<%@ page import="java.net.URLEncoder" %>


<html>
  <body>
    <%
      UserService userService = UserServiceFactory.getUserService();
      User user = userService.getCurrentUser();
      String logOutUrl = URLEncoder.encode(userService.createLogoutURL("/blvd"));
    %>
    <script>
      var url = '<%= userService.createLoginURL("/authenticate/") %>';
      window.location.replace(url);
    </script>
  </body>
</html>
