import { NextResponse } from 'next/server'

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY
const YOUR_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const YOUR_SITE_NAME = 'Persona AI'

export async function POST(req: Request) {
  try {
    const { service, targetuser } = await req.json()

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "meta-llama/llama-3.2-3b-instruct:free",
        "messages": [
        {"role": "system", 
         "content": `You are a marketing specialist. 
         Create a persona with the following fields: name, gender, age, occupation, location, bio, goals, painpoints, motivation, and preferences. 
         Each field should be on a new line, prefixed with the field name in all caps, followed by a colon. The max words per field should be 20 words.`},
          {
            "role": "user",
            "content": `Create a persona for a target user of a ${service}. The target user is described as: ${targetuser}.`
          },

        ]
      })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch from OpenRouter')
    }

    const data = await response.json()
  
    return NextResponse.json({ message: data.choices[0].message.content })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}