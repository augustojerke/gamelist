"use server";

import { User } from "@prisma/client";

export async function createUser(values: User) {
  const res = await fetch("http://localhost:3000/api/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  const data = await res.json();
  if (data.success) {
    console.log("User created successfully!");
  } else {
    console.log(data.message || "Error creating user");
  }
}
