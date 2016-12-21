<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.google.appengine.api.users.User" %>
<%@ page import="com.google.appengine.api.users.UserService" %>
<%@ page import="com.google.appengine.api.users.UserServiceFactory" %>

<html>
  <head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/css/foundation.min.css" rel="stylesheet">
    <style>
      html,
      body {
        margin-top:25px;
        padding:0;
        height:100%;
      }
      #content {
        padding-bottom:250px; /* Height of the footer element */
      }
      .alert-box {
        background-position: 2% 7px;
        background-repeat: no-repeat;
        background-size: auto 2rem;
        background-color: #fff;
        border: 0;
        text-align: left;
        padding-left: 4rem; }
      .alert-box .close {
        background: none; }
      .alert-box.alert {
        background-color: #fff;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAARVBMVEX////7y0P7y0P7y0P7y0P7y0P7y0P7y0P7y0P7y0P7y0P7y0P7y0P7y0P7y0NAQECdhUHYsUKGdEG1l0JLSEBuYkHkukPKU8NPAAAADnRSTlMA4EDAoCAQ8IBgkDDQUFItelQAAAC0SURBVHherZBLDsMwCAVD7Nj5gvPr/Y/a0FpGLTibdnbozQJN829agPZu7/CiuxE8C76+T/hiqgruLbjqh5ip/TljZrb3AQuDKYAIYO09L3TBRq/3EHk4shCDEkZkTqITmdGMLIIO7r8FbzfaiDappSNjIkpZcCqyCDo4WAJYkR8prTp4ADSBUCIX9uPY5epL5AJdyBWDRDYFHCWyCiXBObKwrh+nl4g2TiLVhSXW97g0v/MEHIQbCYeFmYAAAAAASUVORK5CYII=);
        border-top: 1px solid #f22613;
        border-bottom: 1px solid #f22613;
        color: #333; }
      .alert-box.info {
        background-color: #fff;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAADBklEQVR42u3YyWsTURwHcP8aQUWtWlu7JEbtpngQvIqXevDWm1fXehO12BTErdQiVMFQ8ODBusWkmSa1lVrTxdrG0FA9WJtkljfL19/LTDKMibl0EorkwReSCQ8+fN+bl2G2AdhSqYH+P1CpAS0DfXUI+ufzUCfaoQptYMIxsMhRsE/d0L4/BNR0qcnug4y159CmTkOLdkKNdnBQAaNEjkAZ90EOH4YcOQ51dQQVBRnLN6DHuqDFOqGZGEpbaVDICynkAVvoRUVAxuqQE8PjXC7C/AX64KG0gq3ch6sgQ1zkEBtTph2FY8JeApkYKdgCMdgMPTMP10D64kUOsTDtDsw/27FAIge9b4Y8e8EdELS0jTAh5TF2Ow5Q9l0TDDWNTYOMjSkLQREcEAdGCRfvHdFcLgI1EegQtPXY5kFactAE2JDyGHvvONrhILZ81w3QIxNQCEfw2JvYxpRYKrMdSqNLoNSzPMBGTJwEmz4HuSSGMnkWYrgjv1Rm3jZATQ5vHqT//sgRVhtmI8p0NwADbOF6EUaOX4GiZCHGzhAkD2ogUD20XxNw5baXhRN2G2EvR+QwhqFDme91YJgiQfpyCTamkTAHaQm97p1DauIBR1jxWI14CHMNuqZCmbsKmcKYBLkYQzkA9m3APRA/P6TxrvztbCfYkoOoqgKVydTQ5ZIYMdgKQ91wD8SHvj7JAYXb2T5jmqEkhiEnHnNIESb7po72joCK/Ntray8sRD7UBkVeGoBEIQilwYFRUwFU9HmIrdzjCHtpKNJXP48FqSfIfspe2jf+Sj4P2UOMnOKQfCOE6Ye0eMdqZR+yr/fwc8icXA2QmnzCD7pCI+JiH8SFPt4KYXYjO7YTLDFYPZCensu3QakjzC2I8zcJsguZsR3IvNoOfWO2eiA+tJ9jfI9Q+qEkn1JGoCz1UW5D+/HSnFhNUCqVQjwezyUajSIUChW+02/VB42OjqJMaqCtB5qZmUEgEIDf73eEXxMEofogPtLpNHp6euDz+Xhyn+lauUm1tx81UMXzBw5wT9JYWi53AAAAAElFTkSuQmCC);
        border-top: 1px solid #89c4f4;
        border-bottom: 1px solid #89c4f4;
        color: #333; }
      .alert-box.success {
        background-color: #fff;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAqFBMVEX////w8PDw8PDw8PDw8PDw8PDw8PDw8PDW1tbn5+ff398PnVjd3d3i4uIPnVjk5OQPnVjg4OAPnVgzqW8PnVgPnVjT09Pw8PDG4NOp1sBjvJHu7u4PmVYqp2ri6+YcomFHsn4bmlzHzsoPnFeuxbl9tJk0n2t/xqSVvqqNzK1ZqYKJuaJVt4c4rHQnnWPl5eXj4+MPm1fe3t6b0bfc3NxBo3TY2NjX19eKj23kAAAAFXRSTlMA8BCwcFCgkP4f3NDnrzCHoM8Qc/Avz3otAAAA9klEQVR4Xq2T2XKDMAwAMRACNGdbyUDus/d9/f+f1VHEiFamfcm+7qIZGTs4IWEcGeswURz6dGIbJCrp0MeC6QTBCADO2Hetokv+vNXbyvnLAc9v8cA+NH4/veAFEr/f7HIe0OJvETMKYhLlLw8fiNinICKxnHHCfr92QY8CcwwAloX41cFjSoElCnBU89pvkeCAeAPH4or89Bp1YG+g5uUOPQEP5wWbgZzjPRDiU1mTmD/wggyvGVspZgCP4rGvjrpYuAWFTP+sounzwPO7n8SnNEBdmGesGZLUV+6V/ZilLt7F+6/95BMxHf71cCZfefbf0zsl3w3QOjVy6QFpAAAAAElFTkSuQmCC);
        border-top: 1px solid #87d37c;
        border-bottom: 1px solid #87d37c;
        color: #333; }
        /* line 1, ../../app/styles/_footer.scss */
        .footer {
          background-color: #000000;
          text-align: center;
          font-size: 1.2rem;
          padding: 4rem;
          width:100%;
          height:250px;
          position:absolute;
          bottom:0;
          left:0;
        }
        /* line 7, ../../app/styles/_footer.scss */
        .footer p.slogan {
          color: #8d9093;
          font-size: 1.8rem;
          margin: 0 0 1rem;
        }
        /* line 12, ../../app/styles/_footer.scss */
        .footer p.copywrite {
          color: #8f9296;
          font-size: 0.875rem;
          margin: 0;
        }
        /* line 18, ../../app/styles/_footer.scss */
        .footer .links a {
          list-style: none;
          color: #ffffff;
          padding: 3rem 0 2rem;
          margin: 0;
        }
        /* line 23, ../../app/styles/_footer.scss */
        .footer .links a::after {
          content: "•";
          padding: 0 0.4rem 0 0.8rem;
        }
        /* line 27, ../../app/styles/_footer.scss */
        .footer .links a:last-child::after {
          content: "";
          padding: 0 0.4rem 0 0.8rem;
        }

    </style>
  </head>
  <body>
    <%
      UserService userService = UserServiceFactory.getUserService();
      User user = userService.getCurrentUser();
    %>
    <div id="content">
      <div class="row">
        <div class="small-6 small-centered columns">
          <div data-alert class="alert-box alert">
            <p><strong>Oops</strong> - In order to use this application you must be an administrator.</p>
            <p>Please, <a href="<%= userService.createLoginURL("/authenticate/") %>">login</a> as an administrator or continue enjoying our non-admin content at <a href="/">2508w</a>.</p>
          </div>
        </div>
      </div>
      <footer class="footer"> <div class="row"> <div class="small-12 columns"> <p class="slogan">2508w</p><p class="copywrite">&copy; <a href="http://www.2508w.club">2015 2508w</a></p> </div> </div> </footer>
    </div>
  </body>
</html>
