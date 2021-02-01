<template>
  <section id="contacts-5" class="wide-80 contacts-section division">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 offset-xl-1">
          <div class="row">
            <div class="col-md-4">
              <div class="cbox-5">
                <h5 class="h5-lg">Location</h5>
                <p class="p-md">8721 M Central Avenue,</p>
                <p class="p-md">Los Angeles, CA 90036,</p>
                <p class="p-md">United States</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="cbox-5">
                <h5 class="h5-lg">Working Hours</h5>
                <p class="p-md">Mon-Fri: 9:00AM - 10:00PM</p>
                <p class="p-md">Saturday: 10:00AM - 8:30PM</p>
                <p class="p-md">Sunday: 12:00PM - 5:00PM</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="cbox-5">
                <h5 class="h5-lg">Working Hours</h5>
                <p class="p-md">P: +12 3 3456 7890</p>
                <p class="p-md">F: +12 9 8765 4321</p>
                <p class="p-md">E: <a href="mailto:yourdomain@mail.com" class="yellow-color">hello@yourdomain.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div id="gmap">
            <div class="google-map text-center">
              Google maps
            </div>
          </div>
        </div>
      </div> 
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="section-title mb-40 text-center">
            <h2 class="h2-xl">Get in Touch</h2>
            <p class="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
              primis libero tempus, blandit a cursus varius magna
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="form-holder">
            <form name="contactform" class="row contact-form" novalidate="novalidate">
              <div class="col-md-12 col-lg-6">
                <input type="text" name="name" class="form-control name" placeholder="Your Name*">
              </div>
              <div class="col-md-12 col-lg-6">
                <input type="email" name="email" class="form-control email" placeholder="Email Address*">
              </div>
              <div class="col-md-12">
                <input type="text" name="subject" class="form-control subject" placeholder="What's this about?">
              </div>
              <div class="col-md-12">
                <textarea name="message" class="form-control message" rows="6"
                  placeholder="Your Message ..."></textarea>
              </div>
              <div class="col-md-12 mt-5 text-right">
                <button type="submit" class="btn btn-md btn-red tra-red-hover submit">Send Message</button>
              </div>
              <div class="col-md-12 contact-form-msg text-center">
                <div class="sending-msg"><span class="loading"></span></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> 
  </section>
</template>