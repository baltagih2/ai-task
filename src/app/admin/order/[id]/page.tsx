"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { format } from "date-fns";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Order } from "@/interfaces";
import { getOrders } from "@/orders";

export default function OrderDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [order, setOrder] = useState<Order>();

  useEffect(() => {
    const dummyOrders = getOrders();
    const foundOrder = dummyOrders.find((o) => o.id === params.id);
    if (foundOrder) {
      setOrder(foundOrder);
    } else {
      // Handle not found case
      router.push("/admin");
    }
  }, [params.id, router]);

  if (!order) {
    return <div>Loading...</div>;
  }

  const handleStatusChange = (newStatus: Order["status"]) => {
    // @ts-expect-error ignoring temporarily
    setOrder((prevOrder) => ({ ...prevOrder, status: newStatus }));
    // Here you would typically make an API call to update the order status
    console.log(`Order ${order.id} status updated to ${newStatus}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-4"
        onClick={() => router.push("/admin")}
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Orders
      </Button>

      <h1 className="text-2xl font-bold mb-4">Order Details: {order.id}</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Order Date:</strong> {format(order.date, "MMMM d, yyyy")}
            </p>
            <p>
              <strong>Total:</strong> ${order.total.toFixed(2)}
            </p>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
          </CardContent>
          <CardFooter>
            <Select
              onValueChange={handleStatusChange}
              defaultValue={order.status}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Change Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Processing">Processing</SelectItem>
                <SelectItem value="Shipped">Shipped</SelectItem>
                <SelectItem value="Delivered">Delivered</SelectItem>
              </SelectContent>
            </Select>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Name:</strong> {order.customerName}
            </p>
            <p>
              <strong>Email:</strong> {order.customerEmail || "N/A"}
            </p>
            <p>
              <strong>Phone:</strong> {order.customerPhone || "N/A"}
            </p>
            <p>
              <strong>Address:</strong> {order.customerAddress || "N/A"}
            </p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Product List</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-2">Product</th>
                  <th className="pb-2">Quantity</th>
                  <th className="pb-2">Price</th>
                  <th className="pb-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.cart.map(({ product, quantity }, index: number) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-2">{product.name}</td>
                    <td className="py-2">{quantity}</td>
                    <td className="py-2">${product.price.toFixed(2)}</td>
                    <td className="py-2">
                      ${(quantity * product.price).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
