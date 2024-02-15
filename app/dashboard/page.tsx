"use client";
import { useState } from "react";
import Sales from "@/components/Sales";
import Sidebar from "@/components/Sidebar";
import Inventory from "@/components/Inventory";
import Analytics from "@/components/Analytics";
import Reviews from "@/components/Reviews";
import Notifications from "@/components/Notifications";

export default function Dashboard() {
  const [page, setPage] = useState("sales");
  return (
    <main className="min-h-screen flex flex-row bg-gray-100">
      <Sidebar page={page} setPage={setPage} />
      {page === "sales" && <Sales />}
      {page === "inventory" && <Inventory />}
      {page === "analytics" && <Analytics />}
      {page === "reviews" && <Reviews />}
      {page === "notifications" && <Notifications />}
    </main>
  );
}
