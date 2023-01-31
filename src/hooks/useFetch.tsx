import { useState } from "react"

export const useFetch = () => {
  const [message, setMessage] = useState('')

  const registerAuth = async (url: string, method = "GET", headers = {}, body: null | BodyInit) => {
    try {
      const response = await fetch(url, {
        method,
        headers,
        body
      })

      const responseData = await response.json()

      if (!response.ok) {
        throw new Error(responseData.message)
      }

      setMessage(responseData.message)

      return responseData
    } catch (error) {
      setMessage((error as Error).message);
      throw error
    }
  }

  return {
    registerAuth,
    message
  }
}
