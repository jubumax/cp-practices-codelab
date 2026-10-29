/*
 * `Best Discount Selector`
 * 
 * Write a function selectBestDiscount that takes a purchase total price and an array of discount offers, 
 * and returns the single offer object that produces the lowest final payable price.
 * 
 * Each offer object has the following structure:
 * 
 * name (string): The identifier of the offer.
 * type (string): Either "flat" or "percent".
 * value (number): The discount amount or percentage value.
 * minPrice (number): The minimum purchase price required to use this discount.
 * 
 * Rules:
 * 
 * An offer is eligible only if price >= offer.minPrice.
 * A "flat" discount reduces the price by offer.value.
 * A "percent" discount reduces the price by price * (offer.value / 100).
 * The final price after discount cannot fall below 0 (i.e. Math.max(0, discountedPrice)).
 * Return the offer object that results in the lowest final price. If no offer is eligible or no offer reduces the price below the original price, return null.
 * If multiple eligible offers yield the same lowest price, return the one that appears first in the offers array.
 */


interface Offer {
  name: string;
  type: "flat" | "percent";
  value: number;
  minPrice: number;
}

function selectBestDiscount(price: number, offers: Offer[]): Offer | null {
  let best: Offer | null = null;
  let bestPrice = price;

  for (const offer of offers) {
    if (price < offer.minPrice) continue;

    const discount =
      offer.type === "flat" ? offer.value : price * (offer.value / 100);

    const finalPrice = Math.max(0, price - discount);

    if (finalPrice < bestPrice) {
      bestPrice = finalPrice;
      best = offer;
    }
  }

  return best;
}

const offers: Offer[] = [
  { name: "FLAT50", type: "flat", value: 50, minPrice: 100 },
  { name: "PERCENT10", type: "percent", value: 10, minPrice: 100 },
  { name: "BIG", type: "flat", value: 150, minPrice: 500 },
];


console.log(selectBestDiscount(300, offers)?.name);                                                                 // "FLAT50"
console.log(selectBestDiscount(600, offers)?.name);                                                                 // "BIG"
console.log(selectBestDiscount(50, offers));                                                                        // null
console.log(selectBestDiscount(100, []));                                                                           // null
console.log(selectBestDiscount(100, [{ name: "Z", type: "flat", value: 0, minPrice: 0 }]));                         // null
console.log(selectBestDiscount(100, [
  { name: "A", type: "flat", value: 20, minPrice: 0 },
  { name: "B", type: "percent", value: 20, minPrice: 0 },
])?.name);                                                                                                          // "A"
console.log(selectBestDiscount(30, [{ name: "BIGFLAT", type: "flat", value: 500, minPrice: 0 }])?.name);            // "BIGFLAT"