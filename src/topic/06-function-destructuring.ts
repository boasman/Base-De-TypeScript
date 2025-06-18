interface Product {
  descripcion: string;
  price: number;
}

const phone: Product = {
  descripcion: "Nokia 1",
  price: 150.0,
};

const table: Product = {
  descripcion: "iPad air",
  price: 250.0,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}



function taxCalculation(options: TaxCalculationOptions): [number,number] {
// function taxCalculation({tax, products}: TaxCalculationOptions): [number,number] {
  let total = 0;

  const {tax, products} =  options

  products.forEach(({price}) => {
    total += price;
  });

  return [total, total * tax];
}

const shoppingCart = [phone, table];

const tax = 0.15;

const result = taxCalculation({
  products: shoppingCart,
  tax: tax,
});

const [totalResult, taxResult] = result


console.log('Total', totalResult);
console.log('Tax', taxResult);
