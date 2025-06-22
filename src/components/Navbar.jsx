import { useEffect } from "react";
import videoBg from"../assets/videoBg.mp4"
function Navbar() {
  useEffect(() => {
  const clip = document.querySelectorAll(".clip");
  for (let i = 0; i < clip.length; i++) {
  clip[i].addEventListener("mouseenter", function (e) {
    clip[i].play();
  });
  clip[i].addEventListener("mouseout", function (e) {
    clip[i].pause();
  });
}
 }, []);
  return (
   
    <div id="main">
       <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
    />
      <nav className="p-6 sticky top-0 z-50 bg-white shadow-md">
        <i class="ri-apple-fill"></i>
        <a id="store" href="">Store</a>
        <a href="">Mac</a>
        <a href="">iPad</a>
        <a href="">iPhone</a>
        <a href="">Watch</a>
        <a href="">AirPods</a>
        <a href="">TV & Home</a>
        <a href="">Entertainment</a>
        <a href="">Accessories</a>
        <a href="">Support</a>
        <i class="ri-search-line"></i>
        <i class="ri-shopping-bag-line"></i>
        <i class="ri-menu-3-line flex lg:hidden"></i>
      </nav>
      <div>
        <p className="px-70 py-5 text-center text-white bg-black">Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards. <a className="text-blue-400" href="">Shop</a></p>
      </div>
      <div>
        <header>
      <video
            className="clip"
            autoPlay
            loop
            muted
            src={videoBg}
            style={{ width: "100%", height: "auto" }}
          /> 
    </header>
      </div>
      </div>
      )

}
export default Navbar;