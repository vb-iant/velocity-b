import { NextRequest, NextResponse } from "next/server";

// Velocity Assessment submission endpoint.
//
// Per the Notion spec: no database — the full response (company info,
// all 12 answers, the open-ended comment, and the computed scores) should be
// emailed to Ian and Alex on submit. Email delivery is NOT wired yet — see
// CTRL task tm-1785597349110 (blocked on confirming where hello@velocity-b.com
// mail is hosted, then choosing Google Workspace SMTP vs Resend).
//
// This route validates and accepts the payload so the front-end flow works
// end-to-end today. The instant on-screen score is computed client-side and
// does not depend on this route succeeding.
export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const payload = body as {
    companyInfo?: { email?: string; firstName?: string; companyName?: string };
  };

  if (!payload?.companyInfo?.email || !payload.companyInfo.firstName) {
    return NextResponse.json(
      { ok: false, error: "Missing required company info" },
      { status: 400 }
    );
  }

  // TODO(tm-1785597349110): send the full payload to hello@velocity-b.com
  // (and cc Ian/Alex directly) once the email mechanism is decided.
  console.log("Velocity Assessment submission received:", JSON.stringify(payload));

  return NextResponse.json({ ok: true });
}
