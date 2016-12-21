package club.blvd.models;

import club.blvd.models.ClubUserConstants;


public class ClubUser {

  private boolean admin = false;
  private boolean loggedIn = false;
  private String logOutUrl;
  private String youtubeApiKey;
  private String clientId;
  private String accessToken;

  public ClubUser() {}

  public ClubUser(boolean admin, boolean loggedIn, String logOutUrl) {
    this.admin = admin;
    this.loggedIn = loggedIn;
    this.logOutUrl = logOutUrl;
    this.youtubeApiKey =  ClubUserConstants.YOUTUBEAPI_KEY;
    this.clientId =  ClubUserConstants.CLIENT_ID;
    this.accessToken =  ClubUserConstants.ACCESS_TOKEN;
  }

  public boolean isLoggedIn() {
    return this.loggedIn;
  }

  public boolean isAdmin() {
    return this.admin;
  }

  public String getLogOutUrl() {
    return this.logOutUrl;
  }

  public String getYouTubeApiKey() {
    return this.youtubeApiKey;
  }

  public String getAccessToken() {
    return this.accessToken;
  }

  public String getClientId() {
    return this.clientId;
  }
}
