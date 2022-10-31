export type Product = {
  vendor: string;
  title: string;
  description: string;
  basePrise: number;
  discount: number;
  images: string[];
};

export const products: Product[] = [
  {
    vendor: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.`,
    basePrise: 250.0,
    discount: 50,
    images: [
      "image-product-1.jpg",
      "image-product-2.jpg",
      "image-product-3.jpg",
      "image-product-4.jpg",
    ],
  },
];

export const getProducts = async (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};
