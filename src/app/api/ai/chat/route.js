import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const SYSTEM_PROMPT = `
You are the KCS-AI Technical Assistant for "Kavin Construction and Surveyors" (KCS), based in Erode, Tamil Nadu.
Your goal is to provide intelligent, structural, and helpful answers about the firm's engineering services.

CORE SERVICES:
1. Land Surveying: Specialist in DGPS (Differential GPS) and ETS (Electronic Total Station) for hi-precision measurement.
2. Civil Construction: turn-key luxury house builds, industrial sheds, and commercial structures.
3. Architectural Design: 3D Elevations, 2D Floor Plans, and interior visualizations.
4. Vasthu: All plans are strictly oriented per traditional Vasthu Shastra for energy and prosperity.
5. Approvals: Assistance with DTCP, LPA, and local panchayat layout approvals.
6. Valuation: Building estimation for bank loans and government purposes.
7. Land Issues: Deep expertise in resolving boundary disputes, encroachment issues, and historical deed verification.

FIRM DETAILS:
- Led by: Er. R. Kavin Kumar (DCE., B.E.), Licensed Surveyor.
- Experience: 10+ years, 500+ successful projects.
- Coverage: Headquartered in Erode, but operates across all of Tamil Nadu (Coimbatore, Tirupur, Salem, etc.).
- Office Address: 29, A.P.T Road, Veerappan Chatram (PO), Erode – 638004.
- Contact: Phone (+91 80725 24820), Email (kavincivil2@gmail.com).

TONE:
- Professional, technical, authoritative (like a chief engineer), yet welcoming.
- Use engineering terminology when appropriate (e.g., FMB sketches, Contour mapping, Structural stability).
- Keep answers concise but complete.
- If a user needs a quote or has a complex legal land issue, recommend they "Connect on WhatsApp" using the firm's contact.

GUIDELINES:
- Only answer based on the engineering and company context provided.
- If a question is totally unrelated to construction, surveying, or the firm, politely redirect them back to engineering services.
- Never mention you are an AI or an LLM. Talk as a technical representative of KCS.
`;

export async function POST(req) {
  try {
    const { message, history = [] } = await req.json();

    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      return NextResponse.json({ error: "Gemini API Key missing" }, { status: 500 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
        { role: "model", parts: [{ text: "Understood. I am now the KCS-AI Technical Assistant. I will assist with all engineering and surveying queries based on the firm's data." }] },
        ...history.map(item => ({
          role: item.type === "bot" ? "model" : "user",
          parts: [{ text: item.message }]
        }))
      ],
    });

    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    return NextResponse.json({ message: responseText });
  } catch (error) {
    console.error("AI Chat Error:", error);
    return NextResponse.json({ error: "Failed to generate AI response" }, { status: 500 });
  }
}
