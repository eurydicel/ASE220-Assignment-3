import {useEffect, useState} from "react";
export default function QuoteWidget({amount}) {
    if (!amount) {
        return null
    }
    const {data, loading, error} = useFetch(`https://dummyjson.com/quotes/random/${amount}`)
    const quotes = data ?? []
    const items = quotes.map((quote) =>
    <p>{quote.quote} - {quote.author}</p>)
    return (
        <div>
            {loading && !error && <p>Loading quotes…</p>}
            {error && <p className="error">Failed to load quotes: {error.message}</p>}
            {!loading && !error && items}

        </div>
    )
}
function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!url) return
        let cancelled = false

        ;(async () => {
            try {
                setLoading(true)
                setError(null)
                const res = await fetch(url)
                if (!res.ok) throw new Error(`HTTP ${res.status}`)
                const json = await res.json()
                if (!cancelled) setData(json)
            } catch (err) {
                if (!cancelled) setError(err)
            } finally {
                if (!cancelled) setLoading(false)
            }
        })()

        return () => {
            cancelled = true
        }
    }, [url])

    return { data, loading, error }
}
