import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcrypt';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const { username, oldPassword, newPassword } = await request.json() as { username: string; oldPassword: string; newPassword: string };

    if (!username || !oldPassword || !newPassword) {
      return NextResponse.json({ error: 'Missing username, old password, or new password' }, { status: 400 });
    }

    // Fetch user by username
    const { data: user, error: fetchError } = await supabase
      .from('users')
      .select('password_hash')
      .eq('username', username)
      .single();

    if (fetchError || !user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check old password
    const isMatch = await bcrypt.compare(oldPassword, user.password_hash);
    if (!isMatch) {
      return NextResponse.json({ error: 'Old password is incorrect' }, { status: 401 });
    }

    // Hash new password
    const newHash = await bcrypt.hash(newPassword, 10);

    // Update password in DB
    const { error: updateError } = await supabase
      .from('users')
      .update({ password_hash: newHash })
      .eq('username', username);

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 400 });
    }

    return NextResponse.json({ message: 'Password changed successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
}
