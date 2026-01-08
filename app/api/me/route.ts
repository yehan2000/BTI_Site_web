import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { getAuthSession } from "@/lib/auth";

export async function GET() {
  const session = await getAuthSession();
  const email = session?.user?.email;
  if (!email) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const { rows } = await pool.query(
    `
    select id, display_name, first_name, last_name, email, role, active
    from public.employees
    where lower(email) = lower($1)
    limit 1
    `,
    [email]
  );

  if (!rows[0]) return NextResponse.json({ error: "not_found" }, { status: 404 });
  return NextResponse.json(rows[0]);
}
