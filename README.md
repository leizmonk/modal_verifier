# modal_verifier
A simple modal age verifier using Cookies.js

This is a simple modal age verifier developed for use with a Shopify storefront (could be used in other CMS as well, of course). A couple simple edits to the template and this could be used for a variety of implementations. 

Installation:
For Shopify
- Clone this repo and add the js files as new asset files in your Shopify Theme. 
- In your Shopify theme base layout file, just above the closing </head> tag, make sure to include the asset files by pasting the following:
  {{ 'js.cookies.js' | asset_url | script_tag }}
  {{ 'popup.js' | asset_url | script_tag }}
- In the same theme layout file, insert the following HTML template into the file right after the opening <body> tag:
  <div id="age-popup-overlay">
      <div class="age-popup">
        <center>
          <h3>Are you over the age of 18?</h3>
          <br />
          <ul class="buttons-row">
              <li>
                  <a class="btn" id="over-18" href="/">Yes</a>
              </li>
              <li>
                  <a class="btn" id="under-18">No</a>
              </li>   
          </ul>
        </center>
      </div>
  </div>
- Copy the CSS from the repo into your theme's CSS file.
You're all set!

Notes: 
The default expiration for Cookies with this 60 days. This can be changed by modifying the line containing 
      Cookies.set('visit', 'visited', { expires: 60 });
      
Currently, on refresh, the user will still be able to access the site because the cookie will have been set, regardless of whether they answered Yes or No. Will expand on this functionality later on, but this basic implementation is made for compliance purposes and to provide some semblance of deterence for minors.

This project utilizes js-cookie (https://github.com/js-cookie/js-cookie). 
