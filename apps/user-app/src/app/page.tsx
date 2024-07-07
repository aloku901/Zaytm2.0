import { PrismaClient } from "@repo/db/client";
const client = new PrismaClient();

export default function Page(): JSX.Element {
  return(
    <div className="text-3xl text-red-800 bg-white">
      Alok Upadhyay
    </div>
  );
 }