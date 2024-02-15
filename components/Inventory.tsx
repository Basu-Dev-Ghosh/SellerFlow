"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

let currentProducts: Product[] = [
  {
    id: 0,
    name: "Apple MacBook Pro 17",
    color: "Silver",
    category: "Laptop",
    price: 2999,
    quantity: 200,
  },
  {
    id: 1,
    name: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop",
    price: 1999,
    quantity: 100,
  },
  {
    id: 2,
    name: "Magic Mouse 2",
    color: "Black",
    category: "Accessories",
    price: 199,
    quantity: 10,
  },
  {
    id: 3,
    name: "Google Pixel Phone",
    color: "Gold",
    category: "Mobile",
    price: 599,
    quantity: 500,
  },
  {
    id: 4,
    name: "Apple Watch 5",
    color: "Red",
    category: "Wearables",
    price: 999,
    quantity: 120,
  },
  {
    id: 5,
    name: "Apple MacBook Pro 17",
    color: "Silver",
    category: "Laptop",
    price: 2999,
    quantity: 200,
  },
  {
    id: 6,
    name: "Apple MacBook Pro 14",
    color: "Silver",
    category: "Laptop",
    price: 1600,
    quantity: 500,
  },
  {
    id: 7,
    name: "Realme 10 Pro",
    color: "Blue",
    category: "Mobile",
    price: 699,
    quantity: 2,
  },
];

export default function Inventory() {
  const [products, setProducts] = useState<Product[]>(currentProducts);
  const [open, setOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState({
    name: selectedProduct?.name || "",
    color: selectedProduct?.color || "",
    category: selectedProduct?.category || "",
    price: selectedProduct?.price || 0,
    quantity: selectedProduct?.quantity || 0,
  });

  const handleChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddNewProduct = () => {
    if (
      newProduct.name === "" ||
      newProduct.color === "" ||
      newProduct.price === 0 ||
      newProduct.category === "" ||
      newProduct.quantity === 0
    ) {
      alert("Fill all the details for this product");
      return;
    }

    let product = { id: products.length, ...newProduct };
    setProducts([...products, product]);
    setOpen(false);
  };
  const handleDeleteProduct = (id: number) => {
    setProducts((old) => {
      return old.filter((product) => product.id !== id);
    });
  };
  const handleUpdateProduct = () => {
    if (!selectedProduct) {
      alert("No product selected to update");
      return;
    }
    let id = selectedProduct?.id;

    let updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { id, ...newProduct };
      }
      return product;
    });

    setProducts(updatedProducts);
    setSelectedProduct(null);
    setEditOpen(false);
    setNewProduct({
      name: "",
      color: "",
      category: "",
      price: 0,
      quantity: 0,
    });
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-8 py-10 w-[66%] md:w-full">
          <div className="w-full flex justify-end my-2">
            <DialogTrigger asChild>
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                + Add Product
              </button>
            </DialogTrigger>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products
                .sort((a, b) => b.id - a.id)
                .map((product, index) => {
                  return (
                    <tr
                      key={index}
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {product.name}
                      </th>
                      <td className="px-6 py-4">{product.color}</td>
                      <td className="px-6 py-4">{product.category}</td>
                      <td className="px-6 py-4">${product.price}</td>
                      <td className="px-6 py-4">
                        {product.quantity}
                        {product.quantity < 15 && (
                          <span className="bg-red-500 px-2  rounded-md text-xs text-white ml-2">
                            low
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <a
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                          onClick={() => {
                            setNewProduct(product);
                            setSelectedProduct(product);
                            setEditOpen(true);
                          }}
                        >
                          Edit
                        </a>
                        <a
                          className="font-medium text-red-600 ml-3 dark:text-blue-500 hover:underline cursor-pointer"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-left col-span-4">
                Product Name
              </Label>
              <Input
                onChange={handleChange}
                name="name"
                id="name"
                placeholder="Realme 10 Pro"
                className="col-span-4"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="color" className="text-left col-span-4">
                Product Color
              </Label>
              <Input
                id="color"
                name="color"
                onChange={handleChange}
                placeholder="Blue"
                className="col-span-4"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-left col-span-4">
                Product Category
              </Label>
              <Input
                id="category"
                name="category"
                onChange={handleChange}
                placeholder="Mobile"
                className="col-span-4"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-left col-span-4">
                Product Price
              </Label>
              <Input
                id="price"
                name="price"
                onChange={handleChange}
                placeholder="1000"
                className="col-span-4"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-left col-span-4">
                Product Quantity
              </Label>
              <Input
                id="quantity"
                name="quantity"
                onChange={handleChange}
                placeholder="200"
                className="col-span-4"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleAddNewProduct}>
              Add Product
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Product Details</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-left col-span-4">
                Product Name
              </Label>
              <Input
                onChange={handleChange}
                name="name"
                id="name"
                defaultValue={selectedProduct?.name}
                className="col-span-4"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="color" className="text-left col-span-4">
                Product Color
              </Label>
              <Input
                id="color"
                name="color"
                onChange={handleChange}
                defaultValue={selectedProduct?.color}
                className="col-span-4"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-left col-span-4">
                Product Category
              </Label>
              <Input
                id="category"
                name="category"
                onChange={handleChange}
                defaultValue={selectedProduct?.category}
                className="col-span-4"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-left col-span-4">
                Product Price
              </Label>
              <Input
                id="price"
                name="price"
                onChange={handleChange}
                defaultValue={selectedProduct?.price}
                className="col-span-4"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-left col-span-4">
                Product Quantity
              </Label>
              <Input
                id="quantity"
                name="quantity"
                onChange={handleChange}
                defaultValue={selectedProduct?.quantity}
                className="col-span-4"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleUpdateProduct}>
              Update Product
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
