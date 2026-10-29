/*
 * `Reconcile Product Inventory`
 * 
 * You are given an initial inventory of products and a list of transactions. 
 * Your task is to apply these transactions to the inventory and return the final state of each product's quantity.
 * 
 * For 'stock-in' transactions, add the quantity to the product's current stock.
 * For 'stock-out' transactions, subtract the quantity. However, a product's stock can never fall below zero. 
 * If a 'stock-out' transaction would result in a negative quantity, the stock should instead be set to zero.
 * 
 * Products not present in the initial inventory but appearing in transactions should be treated as starting with a 
 * quantity of zero before any transactions are applied to them.
 */


interface Transaction {
  productId: string;
  type: "in" | "out";
  quantity: number;
}

function reconcileInventory(
  initialInventory: Record<string, number>,
  transactions: Transaction[]
): Record<string, number> {
  const inventory: Record<string, number> = { ...initialInventory };

  for (const { productId, type, quantity } of transactions) {
    const current = inventory[productId] ?? 0;

    if (type === "in") {
      inventory[productId] = current + quantity;
    } else if (type === "out") {
      inventory[productId] = Math.max(0, current - quantity);
    }
  }

  return inventory;
}


console.log(reconcileInventory(
  { apple: 10, banana: 5 },
  [
    { productId: "apple", type: "out", quantity: 3 },
    { productId: "banana", type: "out", quantity: 8 },
    { productId: "cherry", type: "in", quantity: 4 },
  ]
));                                                                                                 // { apple: 7, banana: 0, cherry: 4 }
console.log(reconcileInventory({}, []));                                                            // {}
console.log(reconcileInventory({ a: 5 }, []));                                                      // { a: 5 }
console.log(reconcileInventory({}, [{ productId: "x", type: "out", quantity: 5 }]));                // { x: 0 }
console.log(reconcileInventory({ A: 1 }, [{ productId: "a", type: "in", quantity: 2 }]));           // { A: 1, a: 2 }  (case-sensitive)
console.log(reconcileInventory({ a: 5 }, [
  { productId: "a", type: "out", quantity: 10 },
  { productId: "a", type: "in", quantity: 2 },
]));                                                                                                // { a: 2 }