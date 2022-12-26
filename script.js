let loadBtn = document.getElementById("load-more");
let blogContainer = document.getElementById("blog-container");




loadBtn.addEventListener("click", () => {

    loadBtn.classList.add("d-none");

    blogContainer.innerHTML += 
    `<div class="row row-cols-1 row-cols-md-3 g-4 my-3 mx-3">
    <div class="col">
      <div class="card">
        <img src="postimg4.jfif" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">What is data science ?</h5>
          <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quod molestias
            consectetur? Mollitia commodi odit, omnis corrupti eos ipsa cupiditate dolores. Consequuntur harum
            explicabo asperiores, optio corporis sapiente blanditiis qui!</p>
          <a href="" class="btn btn-primary">Learn more</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="postimg5.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Is 3d printing the future of manufacturing ?</h5>
          <p class="card-text">Lorem ipsum dolor, deserunt magni placeat hic. Quibusdam error ea, dignissimos
            placeat laborum corrupti dolor debitis vel eum, id eius delectus saepe.</p>
          <a href="" class="btn btn-primary">Learn more</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="postimg3.jfif" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">What is machine learning ?</h5>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ducimus natus
            fugiat adipisci. Harum possimus sunt saepe amet. Minima quia porro error culpa laboriosam doloremque
            enim quis, tempora nulla sunt.</p>
          <a href="" class="btn btn-primary">Learn more</a>
        </div>
      </div>
    </div>
  </div>`;


})

