package club.blvd.controllers;

import java.io.IOException;

import java.net.URLEncoder;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;


public class Authenticator extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

    UserService userService = UserServiceFactory.getUserService();
    User user = userService.getCurrentUser();
    String redirect = req.getContextPath() + "/notadmin/";

    if(user != null) {
      if(userService.isUserAdmin()) {
        req.getRequestDispatcher("/").forward(req, resp);
      } else {
        req.getRequestDispatcher(redirect).forward(req, resp);
      }
    } else {
      req.getRequestDispatcher("/").forward(req, resp);
    }
  }
}
