"use client";
import { useEffect, useState } from "react";
import { Product } from "../../types";

export default function TaskPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error(`failed to load products ${response.statusText}`);
        }
        const data: Product[] = await response.json();
        setData(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load products",
        );
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Produkty</h1>
      <label htmlFor="search" className="mt-6 block text-sm font-medium">
        Szukaj po nazwie
      </label>
      <input
        id="search"
        type="search"
        className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2"
      />
      <div className="mt-6" aria-live="polite"></div>
    </main>
  );
}
