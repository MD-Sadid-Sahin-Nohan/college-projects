// this is go back section
document.getElementById('go-home').addEventListener('click', function() {
    window.location.href = 'index.html'
})

let amount = 0
function product5(target) {
    const selectedITem = document.getElementById('list-decimal')
   const listItem = target.childNodes[5].innerText
   const li = document.createElement('li')
   li.innerText = listItem
   selectedITem.appendChild(li)
//    const totalAmount = target.childNodes[7].innerText.split(' ')[0]
   const price = target.childNodes[7].innerText.split(' ')[0];
   amount= parseInt(amount) + parseInt (price)
   const btn = document.getElementById('applyCouponButton')
   document.getElementById('totalPrice').innerText=amount
   if(amount >= 200){
    btn.disabled = false
   }
//    document.getElementById('totalPrice').innerText=amount
   document.getElementById('finalPrice').innerText=amount
}
const totalPriceElement = document.getElementById("totalPrice");
        const couponCodeInput = document.getElementById("couponCode");
        const applyCouponButton = document.getElementById("applyCouponButton");
        const finalPriceElement = document.getElementById("finalPrice");

        // Initial total price
        let totalPrice = parseFloat(totalPriceElement.textContent);

        // Apply the discount when the coupon is entered
        applyCouponButton.addEventListener( function() {
            const couponCode = couponCodeInput.value;
            if (couponCode === "SELL200") { // Replace with your actual coupon code
                calculateFinalPrice();
            } else {
                alert("Invalid coupon code. Please try again.");
            }
        });

        // Calculate and update the final price
         function calculateFinalPrice() {
            const priceTotal = document.getElementById('totalPrice').innerText;
            const BalanceTotal = document.getElementById('discountedAmount');
            const Total = priceTotal/100 * 20;
            BalanceTotal.innerText = Total.toFixed(2);
            const TotaTaka = priceTotal - Total;
            document.getElementById('finalPrice').innerText=TotaTaka;
        }
        document.getElementById('couponCode').value = ' '
        
  
            
        