"use client";
import { useBalance } from "@repo/store/useBalance";
import { PrismaClient } from "@repo/db/client";
const client = new PrismaClient();

export default function Page(): JSX.Element {
  const balance = useBalance();
  return(
    <div className="text-3xl text-red-800 bg-white">
      Alok Upadhyay {balance}
    </div>
  );
 }