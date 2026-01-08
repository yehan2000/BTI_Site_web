import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET() {
  const { rows } = await pool.query("select now() as now");
  return NextResponse.json(rows[0]);
}
