import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Lock, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            <Zap className="w-4 h-4 mr-2" />
            99.9% Fraud Detection Accuracy
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionize Healthcare with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              AI-Powered Security
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Eliminate healthcare fraud with our advanced AI document verification, blockchain security, and smart
            contract automation. Trusted by leading healthcare providers and insurers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                Start Free Trial
              </Button>
            </Link>
            <Link href="#demos">
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                View Live Demo
              </Button>
            </Link>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-blue-100">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Verification</h3>
              <p className="text-gray-600 text-center">
                Advanced machine learning algorithms detect fraudulent documents with 99.9% accuracy
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-green-100">
              <Lock className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Blockchain Security</h3>
              <p className="text-gray-600 text-center">
                Immutable document storage ensures data integrity and prevents tampering
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-purple-100">
              <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Automation</h3>
              <p className="text-gray-600 text-center">Automated claim processing reduces processing time by 90%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
