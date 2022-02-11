import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function Account({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  const [user, setUser] = useState(supabase.auth.user())

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, password, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setPassword(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function updatePassword({ password }) {
    try {
      setLoading(true)
      const { user, error } = await supabase.auth.update({
        password: password,
      })
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Name</label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="website"
          value={password || ''}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updatePassword({ password })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button
          className="button block"
          onClick={async () => {
            supabase.auth.signOut()
            await fetch('http://localhost:3000/api/auth/remove', {
              method: 'GET',
              credentials: 'same-origin',
            })
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}
