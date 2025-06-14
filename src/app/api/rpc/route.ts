// src/app/api/rpc/route.ts
import { NextResponse } from 'next/server';

const TENDERLY_RPC_URL = process.env.TENDERLY_RPC_URL!;
const TENDERLY_API_KEY = process.env.TENDERLY_API_KEY!;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(`${TENDERLY_RPC_URL}/${TENDERLY_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('RPC Error:', error);
    return NextResponse.json(
      { error: 'Failed to process RPC request' },
      { status: 500 }
    );
  }
}
