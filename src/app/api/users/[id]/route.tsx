import { NextResponse } from 'next/server';

const users = [
  { id: 1, username: "DD", displayName: "Natkrisadee" },
  { id: 2, username: "Shane", displayName: "Nigga" },
  { id: 3, username: "Test", displayName: "" }, 
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const userId = parseInt(params.id, 10);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json({ id: user.id, username: user.username, displayName: user.displayName });
}