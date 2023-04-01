// See: https://beta.nextjs.org/docs/routing/route-handlers
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Free fake API for testing and prototyping. https://jsonplaceholder.typicode.com
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return NextResponse.json(data);
}
