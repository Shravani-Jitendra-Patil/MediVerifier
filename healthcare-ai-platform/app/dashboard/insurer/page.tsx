"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { InsurerDashboard } from "@/components/dashboard/insurer-dashboard"

export default function InsurerDashboardPage() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/login")
      return
    }

    const parsedUser = JSON.parse(userData)
    if (parsedUser.role !== "insurer") {
      router.push(`/dashboard/${parsedUser.role}`)
      return
    }

    setUser(parsedUser)
  }, [router])

  if (!user) {
    return <div>Loading...</div>
  }

  return <InsurerDashboard />
}
