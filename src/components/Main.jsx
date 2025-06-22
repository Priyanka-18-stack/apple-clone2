import React from 'react'
import img from './images/pngwing.com.png'
import img1 from './images/kisspng-apple-macbook-pro-intel-apple-imac-retina-4k-21-5-imac-retina-transparent-amp-png-clipart-free-dow-5cb6725ce50a57.7376126715554607009382.png'
import img2 from './images/Apple-Watch-PNG-Transparent.png'
import img3 from './images/iphone-14-mockup-png-890-download-96223.png'
import img4 from './images/in_r1444_cellular_pdp_image_position-1b_space_grey-removebg-preview_1.png'
function Main() {
  return (
    <>
      <div id="partO" class="part-1">
        <div class="text-part-1">
          <h1>iPhone 15 Pro</h1>
          <p>Titanium. So Strong. So Light. So Pro</p>
          <div class="link">
            <a href="">Learn More</a>
            <a href="">Buy</a>
          </div>
        </div>
      </div>

      <div class="part-4">
        <div class="part-1 part-4-1">
          <div class="text-part-1 text-part-3">
            <img src={img} width={250} />
            <p>Titanium. So Strong. So Light. So Pro</p>
            <div class="link">
              <a href="">Learn More</a>
              <a href="">Buy</a>
            </div>
          </div>
        </div>
        <div class="part-1 part-4-2">
          <div class="text-part-1 text-part-3">
            <img src={img} width={250} />
            <p>Titanium. So Strong. So Light. So Pro</p>
            <div class="link">
              <a href="">Learn More</a>
              <a href="">Buy</a>
            </div>
          </div>
        </div>
      </div>
      <div class="part-4">
        <div class="part-1 part-4-1">
          <div class="text-part-1 text-part-3">
            <img src={img2} width={450} alt="" />
            <p>Titanium. So Strong. So Light. So Pro</p>
            <div class="link">
              <a href="">Learn More</a>
              <a href="">Buy</a>
            </div>
          </div>
        </div>
        <div class="part-1 part-4-2">
          <div class="text-part-1 text-part-3">
            <img src={img4} width={300} alt="" />
            <p>Titanium. So Strong. So Light. So Pro</p>
            <div class="link">
              <a href="">Learn More</a>
              <a href="">Buy</a>
            </div>
          </div>
        </div>
      </div>
      <div class="part-4">
        <div class="part-1 part-4-1">
          <div class="text-part-1 text-part-3">
            <img src={img3} width={250} alt="" />
            <p>Titanium. So Strong. So Light. So Pro</p>
            <div class="link">
              <a href="">Learn More</a>
              <a href="">Buy</a>
            </div>
          </div>
        </div>
        <div class="part-1 part-4-2">
          <div class="text-part-1 text-part-3">
            <img src={img3} width={250} alt="" />
            <p>Titanium. So Strong. So Light. So Pro</p>
            <div class="link">
              <a href="">Learn More</a>
              <a href="">Buy</a>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}


export default Main