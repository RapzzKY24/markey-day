import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.nama || !body.produk || !body.qty) {
      return Response.json({ error: "Data tidak lengkap" }, { status: 400 });
    }

    const metode = body.metode === "Tunai" ? "Tunai" : "Qris";

    const orderId = "ORD-" + Date.now();

    const now = new Date();

    const waktuOrder = now.toLocaleDateString("id-ID");
    const waktuAmbil = body.waktuAmbil || "-";

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "'Mac and Yuk'!A:I",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            orderId,
            body.nama,
            body.produk,
            body.qty,
            waktuOrder,
            waktuAmbil,
            metode,
            "Belum Bayar",
            "",
          ],
        ],
      },
    });

    return Response.json({
      success: true,
      orderId,
    });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
