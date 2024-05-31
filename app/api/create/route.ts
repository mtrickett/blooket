import { NextRequest, NextResponse } from "next/server";

function requestHandler(_request: NextRequest): NextResponse {
  return NextResponse.json({ message: "Success!" });
}

export { requestHandler as POST };
