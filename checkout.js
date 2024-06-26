// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  const productsAccordion = document.querySelector("div#productsAccordion");
  const productsCartList = document.querySelector("ul#productCartListUl");
  const totalBillingCost = document.querySelector("span#totalBillingCash");
  const addNewBtn = document.querySelector("#addNewProduct");

  function templatePreparer(itemNumber) {
    let productAccordionTemplate = `<div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#accordionPanel${itemNumber}"
        aria-expanded="true"
        aria-controls="accordionPanel${itemNumber}"
      >
        Item #${itemNumber}

        <!-- Accordian Heading Text-->
        <!-- <span class="d-flex justify-content-between w-100 me-3" style="max-width: 40em;">
        <span type="button" class="btn btn-danger btn-sm d-flex align-items-center rounded-pill"
          aria-pressed="false">
          <img class="bi bi-bag-plus opacity-50" src="/assets/icons/bag-x-fill.svg" alt="+">
        </span>
        Item #1
      </span> -->
        <!-- Accordian Heading Text End-->
      </button>
    </h2>

    <div
      id="accordionPanel${itemNumber}"
      class="accordion-collapse collapse show"
    >
      <div class="accordion-body">
        <div class="row g-3">
          <div class="col-12">
            <label for="productItem" class="form-label"
              >Product</label
            >
            <input
              class="form-control"
              list="datalistProductOptions"
              id="productItem"
              placeholder="Type to search..."
              required
            />
            <datalist id="datalistProductOptions">
              <option value="San Francisco (100g)"></option>
              <option value="San Francisco (250g)"></option>
              <option value="San Francisco (500g)"></option>
              <option value="San Francisco (1kg)"></option>
              <option value="New York"></option>
              <option value="Seattle"></option>
              <option value="Los Angeles"></option>
              <option value="Chicago"></option>
            </datalist>

            <!-- <select class="form-select" id="country" required>
            <option value="">Choose...</option>
            <option>United States</option>
          </select> -->
            <div class="invalid-feedback">
              Please select a valid Product.
            </div>
          </div>

          <div class="col-12 col-md-8">
            <label for="quantity" class="form-label"
              >Quantity</label
            >

            <div class="input-group">
              <input
                type="text"
                class="form-control"
                id="quantity"
                placeholder="Enter quantity"
                value=""
                required
              />
              <!-- placeholder="Enter quantity (e.g. 5 kg, 2 pc, ...)" value="" required> -->

              <select class="form-select" id="unit" name="unit">
                <option value="units">Units</option>
                <option value="pieces">Pieces</option>
                <option value="kilograms">Kilograms (kg)</option>
                <option value="grams">Grams (g)</option>
                <option value="milligrams">Milligrams (mg)</option>
                <!-- <option value="pounds">Pounds (lb)</option>
              <option value="ounces">Ounces (oz)</option> -->
              </select>
            </div>

            <div class="invalid-feedback">
              Valid Quantity is required.
            </div>
          </div>

          <div class="col-md-4">
            <label for="amount" class="form-label">Amount</label>
            <input
              type="text"
              class="form-control"
              id="amount"
              placeholder="Enter amount"
              value=""
              required
            />

            <div class="invalid-feedback">
              Valid Amount is required.
            </div>
          </div>

          <div class="col-sm-6 ms-auto">
            <label for="subTotalAmount" class="form-label"
              >Sub.Total Amount</label
            >
            <input
              type="text"
              class="form-control"
              id="subTotalAmount"
              value="100"
              disabled
            />

            <div class="invalid-feedback">
              Valid Amount is required.
            </div>
          </div>

          <div class="col-12 order-md-last">
            <div class="d-flex justify-content-end">
              <span
                type="button"
                class="btn btn-danger btn-sm d-flex align-items-center"
                aria-pressed="false"
                style="border-radius: 0.375rem !important"
              >
                <span
                  class="d-none d-md-block fw-bold"
                  style="color: #6e1a22"
                  >Remove</span
                >
                <img
                  class="mx-2 bi bi-bag-plus opacity-50"
                  src="assets/icons/bag-x-fill.svg"
                  alt="+"
                />
              </span>
            </div>
          </div>
        </div>

        <!-- <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
      plugin adds the appropriate classes that we use to style each element. These classes control the
      overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
      with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
      can go within the <code>.accordion-body</code>, though the transition does limit overflow. -->
      </div>
    </div>
  </div>
`;

    return productAccordionTemplate;
  }

  function cartTempPreparer(itemNumber) {
    let liTemplate = `<li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Item #${itemNumber}</h6>
                  // <small class="text-body-secondary">Brief description</small>
                </div>
                <span class="text-body-secondary">&#x20b9; 12</span>
              </li>`;

    return liTemplate;
  }

  addNewBtn.addEventListener("click", (e) => {
    // productsAccordion.appendChild(productAccordionTemplate)

    productsAccordion.innerHTML += templatePreparer(
      productsAccordion.children.length + 1
    );

    productsCartList.innerHTML += cartTempPreparer(
      productsCartList.children.length
    );

    totalBillingCost.innerText = new Number(totalBillingCost.innerText) + 12;

    e.preventDefault();
    e.stopPropagation();
  });

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        // if (!form.checkValidity()) {
        //   event.preventDefault();
        //   event.stopPropagation();
        // }

        // form.classList.add("was-validated");

        alert("Sale Registered !!");

        window.location.reload();
      },
      false
    );
  });
})();
