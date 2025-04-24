
"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Book Your Spot</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Select Date</h2>
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Select Plan</h2>
        <select className="w-full border rounded-md py-2 px-3">
          <option>Day Pass - 10 TND</option>
          <option>Meeting Room - 10 TND/hour</option>
        </select>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Payment Information</h2>
        <p className="text-muted-foreground">
          (Mock payment options - real integration not implemented)
        </p>
        <input
          type="text"
          placeholder="Card Number"
          className="w-full border rounded-md py-2 px-3 mb-2"
        />
        <input
          type="text"
          placeholder="Expiry Date"
          className="w-full border rounded-md py-2 px-3 mb-2"
        />
        <input
          type="text"
          placeholder="CVV"
          className="w-full border rounded-md py-2 px-3 mb-2"
        />
      </div>

      <button className="bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/80 transition-colors w-full">
        Confirm Booking
      </button>
    </div>
  );
}
