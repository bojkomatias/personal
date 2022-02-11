import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Auth from '../components/Auth'
import Account from '../components/Account'

export default function account() {
  const [session, setsession] = useState(supabase.auth.session())
  const [user, setUser] = useState(supabase.auth.user() || undefined)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      let newUser = supabase.auth.user()
      if (newUser) {
        await fetch('/api/auth/set', {
          method: 'POST',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          credentials: 'same-origin',
          body: JSON.stringify({ event, session }),
        })
      }
      setUser(supabase.auth.user() || undefined)
      setsession(session)
    })
  })

  return (
    <>
      {!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </>
  )
}
