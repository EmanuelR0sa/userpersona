import { NextResponse } from "next/server";
import clientPromise from '@/lib/mongodb/mongodbClient'


export async function POST(req: Request) {
    try {
      const client = await clientPromise;
      const db = client.db();
      
      const bodyObject = await req.json();
      const newPersona = await db.collection("personas").insertOne(bodyObject);
      
      return NextResponse.json(newPersona, { status: 201 });
    } catch (error) {
        console.error('Error:', error)
      return NextResponse.json({ error: 'Failed to create persona' }, { status: 500 });
    }
  }
  
  export async function GET() {
    try {
      const client = await clientPromise;
      const db = client.db();
      
      const allPersonas = await db.collection("personas").find({}).toArray();
      
      return NextResponse.json({ data: allPersonas }, { status: 200 });
    } catch (error) {
        console.error('Error:', error)
      return NextResponse.json({ error: 'Failed to fetch personas' }, { status: 500 });
    }
  }

