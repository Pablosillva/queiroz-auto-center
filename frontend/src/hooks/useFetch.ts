import { useState, useEffect } from 'react'

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelado = false
    setLoading(true)
    setError(null)

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Erro ${res.status} ao buscar ${url}`)
        return res.json()
      })
      .then((json) => { if (!cancelado) setData(json) })
      .catch((err) => { if (!cancelado) setError(err.message) })
      .finally(() => { if (!cancelado) setLoading(false) })

    return () => { cancelado = true }
  }, [url])

  return { data, loading, error }
}