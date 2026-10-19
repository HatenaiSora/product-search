import { NextResponse } from "next/server";
import products from "@/mocks/products.json";

// GET /api/products?q=lap
// Parametry:
//   q     – filtr po nazwie (bez rozróżniania wielkości liter)
//   fail  – fail=1 zwraca błąd 500
//   delay – stałe opóźnienie w ms (domyślnie losowe 200–1500 ms)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") ?? "").trim().toLowerCase();
  const delayParam = searchParams.get("delay");
  const delay =
    delayParam !== null ? Number(delayParam) : 200 + Math.random() * 1300;

  await new Promise((resolve) => setTimeout(resolve, delay));

  if (searchParams.get("fail") === "1") {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }

  return NextResponse.json(
    products.filter((product) => product.name.toLowerCase().includes(q)),
  );
}
