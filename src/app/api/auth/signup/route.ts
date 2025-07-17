import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import bcrypt from 'bcrypt'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json() as { username: string; password: string }

    if (!username || !password) {
      return NextResponse.json({ error: 'Missing username or password' }, { status: 400 })
    }

    const hash = await bcrypt.hash(password, 10)

    const { error } = await supabase.from('users').insert([{ username, password_hash: hash }])

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ message: 'User created successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }
}
