export default function Footer() {
    return (
<footer class="bg-dark text-light py-3">
  <div class="container">
    <div class="row mb-4">
      <div class="col-md-12 text-center">
        <h1 className="text-danger">pizzaJunction</h1>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-md-4 text-center">
        <h5>Address</h5>
        <p>100 A, Mezzanine Floor,<br/> Janak Cinema Complex, Janak Puri</p>
      </div>

      <div class="col-md-4 text-center footer-navlinks">
        <ul class="list-unstyled">
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div class="col-md-4 text-center">
        <h5>Book a Table</h5>
        <p>Call us at <a href="tel:+123456789">123-456-7890</a> or <a href="#">book online</a>.</p>
      </div>
    </div>

     <hr/>

    <div class="row text-center">
      <div class="col-md-6">
        <p>&copy; 2023 pizzaJunction. All rights reserved.</p>
      </div>

      <div class="col-md-6 text-right col-12 text-center social-media">
        <a href="#"><i class="fab fa-facebook fa-lg mx-3"></i></a>
        <a href="#"><i class="fab fa-twitter fa-lg mx-3"></i></a>
        <a href="#"><i class="fab fa-instagram fa-lg mx-3"></i></a>
      </div>
    </div>
  </div>
</footer>


    )
}