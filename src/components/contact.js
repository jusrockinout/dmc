import React, { Component } from 'react';

class Register extends Component {
    render() {


      <!-- Contact Section -->
      <form class="form-horizontal center" action='' method="POST">
          <fieldset>
              <div id="legend">
                  <legend class="">Register</legend>
              </div>
              <div class="control-group">
                  <!-- Username -->
                  <label class="control-label" for="username">Username</label>
                  <div class="controls">
                      <input type="text" id="username" name="username" placeholder="" class="input-xlarge">
                      <p class="help-block">Username can contain any letters or numbers, without spaces</p>
                  </div>
              </div>

              <div class="control-group">
                  <!-- E-mail -->
                  <label class="control-label" for="email">E-mail</label>
                  <div class="controls">
                      <input type="text" id="email" name="email" placeholder="" class="input-xlarge">
                      <p class="help-block">Please provide your E-mail</p>
                  </div>
              </div>

              <div class="control-group">
                  <!-- Password-->
                  <label class="control-label" for="password">Password</label>
                  <div class="controls">
                      <input type="password" id="password" name="password" placeholder="" class="input-xlarge">
                      <p class="help-block">Password should be at least 4 characters</p>
                  </div>
              </div>

              <div class="control-group">
                  <!-- Password -->
                  <label class="control-label" for="password_confirm">Password (Confirm)</label>
                  <div class="controls">
                      <input type="password" id="password_confirm" name="password_confirm" placeholder="" class="input-xlarge">
                      <p class="help-block">Please confirm password</p>
                  </div>
              </div>

              <div class="control-group">
                  <!-- Button -->
                  <div class="controls">
                      <button class="btn btn-success">Register</button>
                  </div>
              </div>
          </fieldset>
      </form>
      <section id="contact" class="container content-section text-center">
          <div class="row">
              <div class="col-lg-8 col-lg-offset-2">
                  <h2>Contact DMC</h2>
                  <p>Feel free to email us to provide some feedback on our services, give us suggestions for new features or locations, or to just say hello!</p>
                  <p><a href="mailto:dmc@gmail.com">dmc@gmail.com</a>
                  </p>
                  <ul class="list-inline banner-social-buttons">
                      <li>
                          <a href="https://twitter.com/SBootstrap" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                      </li>
                      <li>
                          <a href="https://github.com/IronSummitMedia/startbootstrap" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                      </li>
                      <li>
                          <a href="https://plus.google.com/+Startbootstrap/posts" class="btn btn-default btn-lg"><i class="fa fa-google-plus fa-fw"></i> <span class="network-name">Google+</span></a>
                      </li>
                  </ul>
              </div>
          </div>
      </section>





          }
      }

      export default Portfolio;
