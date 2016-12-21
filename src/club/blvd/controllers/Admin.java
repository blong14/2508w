package club.blvd.controllers;

import java.io.IOException;
import java.io.PrintWriter;

import java.net.URLEncoder;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

import com.google.gson.Gson;

import club.blvd.models.ClubUser;


public class Admin extends HttpServlet {

  private ClubUser clubUser;

  @Override
  public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {

    UserService userService = UserServiceFactory.getUserService();
    User user = userService.getCurrentUser();
    PrintWriter out = resp.getWriter();

    if(user != null) {
      this.clubUser = new ClubUser(userService.isUserAdmin(),true,userService.createLogoutURL("/blvd/"));
    } else {
      this.clubUser = new ClubUser();
    }

    out.write(new Gson().toJson(this.clubUser));
  }
}
