 const createOrderCard= (orderId)=>{
    let orderCardsWrapper = document.getElementById('order-cards-wrapper')

   let colDiv = document.createElement('div')
    let cardDiv = document.createElement('div')
    let cardHeader = document.createElement('div')
    let cancelBtn = document.createElement('i')
    let cardBody = document.createElement('div')
    let cardText1 = document.createElement('p')
    let cardText2 = document.createElement('p')
    let cardText3 = document.createElement('p')
    let statusBadge = document.createElement('span')
    let cardfooter = document.createElement('div')

    cardHeader.innerHTML=` <span> Order ID: <b>${orderId}</b> </span>`
    cardText1.innerText='Medium Size pizza-2Nos'
    cardText2.innerHTML='Bill Amount: <b>$18</b>'
    statusBadge.innerText='order placed'
    cardfooter.innerText =  new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
      });
    statusBadge.id = orderId
 
    cardBody.classList = 'card-body'
    cardText1.classList = 'card-text'
    cardText2.classList = 'card-text'
    cardText3.classList = 'card-text'
   colDiv.classList = 'col-md-3 order-status-card'
    cardDiv.classList ='card text-center'
    cardHeader.classList='card-header'
    cancelBtn.classList = 'fa-solid fa-xmark cancel-btn'
    statusBadge.classList='badge rounded-pill bg-success'
    cardfooter.classList='card-footer'

    cardHeader.appendChild(cancelBtn)
    cardDiv.appendChild(cardHeader)
    cardDiv.appendChild(cardBody)
    cardBody.appendChild(cardText1)
    cardBody.appendChild(cardText2)
    cardBody.appendChild(cardText3)
    cardText3.appendChild(statusBadge)
    cardDiv.appendChild(cardfooter)
    colDiv.appendChild(cardDiv)
    orderCardsWrapper.appendChild(colDiv)

    cancelBtn.addEventListener('click',()=>{
       colDiv.style.display='none'
    })
}





/* <div class="col-md-3 order-status-card">
    <div class="card text-center">
     <div class="card-header">
      Order ID: MP20303276
     </div>
     <div class="card-body">
      <p class="card-text1">Medium Size pizza-2Nos</p>
      <p class="card-text2">Bill Amount: $22</p>
      <p class="card-text3"><span class="badge bg-success">first layer of cheese added</span></p>
     </div>
    <div class="card-footer">
      24-08-2022 09:05 PM
    </div>
  </div>
</div> */

{/* <div class="col-md-3 order-status-card">
            <div class="card text-center">
              <div class="card-header">
                <span> Order ID: <b>123456</b> </span>
                <i class="fa-solid fa-xmark"></i> 
              </div>
              <div class="card-body">
                <p class="card-text">Medium Size pizza-2Nos</p>
                <p class="card-text">Bill Amount: <b>$22</b></p>
                <p class="card-text">
                  <span id="123456" class="badge rounded-pill bg-success">package Received At Counter</span></p>
                </div>
                <div class="card-footer">August 26, 2022 at 11:56:30 AM</div>
              </div>
            </div> */}

