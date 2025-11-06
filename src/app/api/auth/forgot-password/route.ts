import { NextRequest, NextResponse } from 'next/server'
import { sendPasswordResetEmail } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const result = await sendPasswordResetEmail(email)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Error sending reset email' },
        { status: 400 }
      )
    }

    return NextResponse.json({
      message: 'Password reset email sent to your email address'
    })

  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
