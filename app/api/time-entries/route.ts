import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { getAuthSession } from "@/lib/auth";

/* =========================
   Types
========================= */

type TimeEntryInsert = {
  date: string; // YYYY-MM-DD
  heure_debut?: string | null; // HH:mm ou HH:mm:ss
  heure_fin?: string | null;
  duree_min: number;
  type: "travail" | "absence";
  absence_type?: string | null;
  commune_id?: number | null;
  domaine_id?: number | null;
  dossier?: string | null;
  description?: string | null;
  facturable?: "oui" | "non" | null;
  tags?: string | null;
};

/* =========================
   Type guards
========================= */

function isTimeEntryInsert(x: unknown): x is TimeEntryInsert {
  if (!x || typeof x !== "object") return false;
  const o = x as Record<string, unknown>;

  return (
    typeof o.date === "string" &&
    typeof o.duree_min === "number" &&
    (o.type === "travail" || o.type === "absence")
  );
}

function getEmployeeIdFromSession(
  session: Awaited<ReturnType<typeof getAuthSession>>
): number | null {
  if (!session?.user) return null;

  const user = session.user as { employeeId?: number };
  return typeof user.employeeId === "number" ? user.employeeId : null;
}

/* =========================
   GET
========================= */

export async function GET(req: Request) {
  const session = await getAuthSession();
  const employeeId = getEmployeeIdFromSession(session);

  if (!employeeId) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date"); // optionnel

  const params: Array<number | string> = [employeeId];
  let where = `WHERE employee_id = $1`;

  if (date) {
    params.push(date);
    where += ` AND date = $2`;
  }

  const { rows } = await pool.query(
    `
      SELECT *
      FROM public.time_entries
      ${where}
      ORDER BY date DESC, heure_debut ASC, id ASC
    `,
    params
  );

  return NextResponse.json(rows);
}

/* =========================
   POST
========================= */

export async function POST(req: Request) {
  const session = await getAuthSession();
  const employeeId = getEmployeeIdFromSession(session);

  if (!employeeId) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body: unknown = await req.json();

  if (!isTimeEntryInsert(body)) {
    console.log("invalid_payload received:", body);
    return NextResponse.json(
      { error: "invalid_payload", received: body },
      { status: 400 }
    );
  }

  const {
    date,
    heure_debut = null,
    heure_fin = null,
    duree_min,
    type,
    absence_type = null,
    commune_id = null,
    domaine_id = null,
    dossier = null,
    description = null,
    facturable = null,
    tags = null,
  } = body;

  const { rows } = await pool.query(
    `
      INSERT INTO public.time_entries
        (
          employee_id,
          date,
          heure_debut,
          heure_fin,
          duree_min,
          type,
          absence_type,
          commune_id,
          domaine_id,
          dossier,
          description,
          facturable,
          tags
        )
      VALUES
        ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
      RETURNING *
    `,
    [
      employeeId,
      date,
      heure_debut,
      heure_fin,
      duree_min,
      type,
      absence_type,
      commune_id,
      domaine_id,
      dossier,
      description,
      facturable,
      tags,
    ]
  );

  return NextResponse.json(rows[0], { status: 201 });
}

export async function DELETE(req: Request) {
  const session = await getAuthSession();
  const employeeId = session?.user?.employeeId;

  if (!employeeId) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const idStr = searchParams.get("id");
  const id = idStr ? Number(idStr) : NaN;

  if (!Number.isFinite(id)) {
    return NextResponse.json({ error: "invalid_id" }, { status: 400 });
  }

  // sécurité: on supprime uniquement les entrées de l'employé connecté
  const { rowCount } = await pool.query(
    `DELETE FROM public.time_entries
     WHERE id = $1 AND employee_id = $2`,
    [id, employeeId]
  );

  if (rowCount === 0) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}