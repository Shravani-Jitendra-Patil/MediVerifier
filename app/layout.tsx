import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MedChain - AI-Powered Medical Document Verification Platform",
  description:
    "Revolutionary healthcare platform using AI and blockchain to verify medical documents, prevent fraud, and automate insurance claims. Secure, fast, and HIPAA compliant.",
  keywords:
    "healthcare, medical documents, AI verification, blockchain, insurance claims, fraud prevention, HIPAA compliance",
  authors: [{ name: "MedChain Team" }],
  openGraph: {
    title: "MedChain - Secure Medical Document Verification",
    description: "AI-powered platform eliminating medical fraud with 99.9% accuracy and 90% faster processing",
    type: "website",
    url: "https://medchain.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "MedChain - AI Medical Verification",
    description: "Secure healthcare with AI and blockchain technology",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
