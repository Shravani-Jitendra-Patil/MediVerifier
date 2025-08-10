"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ProviderDashboard } from "@/components/dashboard/provider-dashboard"

export default function ProviderDashboardPage() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/login")
      return
    }

    const parsedUser = JSON.parse(userData)
    if (parsedUser.role !== "provider") {
      router.push(`/dashboard/${parsedUser.role}`)
      return
    }

    setUser(parsedUser)
  }, [router])

  if (!user) {
    return <div>Loading...</div>
  }

  return <ProviderDashboard />
}
