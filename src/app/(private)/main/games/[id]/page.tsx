import { use } from "react";

export default function Game({ params }: any) {
  const { id }: any = use(params);
  return <h1>{id}</h1>;
}
