import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { ReactNode, useEffect, useState } from "react";

export default async function Home() {
  const [data, setData] = useState([]);
  const pets: any = await sql`SELECT * FROM Pets`;

  useEffect(() => {
    fetch("/api/add-pet")
      .then((res) => res.json())
      .then((data) => {
        setData(pets);
      })
      .catch((err) => console.log("Error", err));
  });

  return (
    <div>
      {data.map((pet) => (
        <p key={pet.id}>{pet.name}</p>
      ))}
    </div>
  );
}
