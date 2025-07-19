"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  Brain,
  FileCheck,
  Upload,
  CheckCircle,
  Clock,
  Play,
  RotateCcw,
  ArrowLeft,
  UserCheck,
  Building,
  CreditCard,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const demoSteps = [
    {
      title: "Document Upload",
      description: "Healthcare provider uploads a medical prescription",
      icon: Upload,
      color: "from-emerald-500 to-teal-500",
      status: "completed",
    },
    {
      title: "AI Analysis",
      description: "Advanced ML algorithms analyze document authenticity",
      icon: Brain,
      color: "from-teal-500 to-cyan-500",
      status: "processing",
    },
    {
      title: "Blockchain Verification",
      description: "Document hash stored on immutable blockchain",
      icon: Shield,
      color: "from-cyan-500 to-emerald-500",
      status: "pending",
    },
    {
      title: "Smart Contract Execution",
      description: "Automated insurance claim processing triggered",
      icon: Zap,
      color: "from-emerald-500 to-teal-500",
      status: "pending",
    },
  ]

  const startDemo = () => {
    setIsPlaying(true)
    setCurrentStep(0)
    setProgress(0)

    // Simulate demo progression
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentStep((current) => {
            if (current < demoSteps.length - 1) {
              return current + 1
            } else {
              setIsPlaying(false)
              clearInterval(interval)
              return current
            }
          })
          return 0
        }
        return prev + 2
      })
    }, 100)
  }

  const resetDemo = () => {
    setIsPlaying(false)
    setCurrentStep(0)
    setProgress(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">MedChain Demo</span>
              </div>
            </div>
            <Badge className="bg-emerald-100 text-emerald-800">Interactive Demo</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Demo Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Experience MedChain in Action</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Watch how our AI and blockchain technology work together to verify medical documents and process insurance
            claims in real-time.
          </p>

          <div className="flex justify-center space-x-4">
            <Button onClick={startDemo} disabled={isPlaying} className="bg-emerald-600 hover:bg-emerald-700" size="lg">
              {isPlaying ? (
                <>
                  <Clock className="w-5 h-5 mr-2 animate-spin" />
                  Demo Running...
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Start Demo
                </>
              )}
            </Button>
            <Button onClick={resetDemo} variant="outline" size="lg">
              <RotateCcw className="w-5 h-5 mr-2" />
              Reset
            </Button>
          </div>
        </div>

        {/* Demo Visualization */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Process Steps */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Process Flow</h2>
            {demoSteps.map((step, index) => (
              <div key={index} className={`relative ${index <= currentStep ? "opacity-100" : "opacity-50"}`}>
                <Card
                  className={`border-2 transition-all duration-500 ${
                    index === currentStep && isPlaying
                      ? "border-emerald-500 shadow-lg"
                      : index < currentStep
                        ? "border-green-500"
                        : "border-gray-200"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center`}
                      >
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="flex items-center space-x-2">
                          <span>{step.title}</span>
                          {index < currentStep && <CheckCircle className="w-5 h-5 text-green-500" />}
                          {index === currentStep && isPlaying && (
                            <Clock className="w-5 h-5 text-emerald-500 animate-spin" />
                          )}
                        </CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  {index === currentStep && isPlaying && (
                    <CardContent>
                      <Progress value={progress} className="h-2" />
                      <p className="text-sm text-gray-500 mt-2">Processing... {Math.round(progress)}%</p>
                    </CardContent>
                  )}
                </Card>

                {index < demoSteps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div
                      className={`w-1 h-8 rounded transition-colors ${
                        index < currentStep ? "bg-green-500" : "bg-gray-300"
                      }`}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Live Demo Panel */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Live Processing</h2>

            {/* Document Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Sample Medical Document</CardTitle>
                <CardDescription>Prescription for patient verification</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-300">
                  <div className="text-center space-y-2">
                    <FileCheck className="w-12 h-12 text-gray-400 mx-auto" />
                    <p className="font-medium text-gray-900">Medical Prescription</p>
                    <p className="text-sm text-gray-600">Patient: John Smith</p>
                    <p className="text-sm text-gray-600">Provider: Dr. Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Date: January 15, 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Analysis Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-emerald-600" />
                  <span>AI Analysis Results</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Document Authenticity</span>
                    <span className="font-medium text-green-600">99.8%</span>
                  </div>
                  <Progress value={currentStep >= 1 ? 99.8 : 0} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Signature Verification</span>
                    <span className="font-medium text-green-600">98.5%</span>
                  </div>
                  <Progress value={currentStep >= 1 ? 98.5 : 0} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Content Validation</span>
                    <span className="font-medium text-green-600">97.2%</span>
                  </div>
                  <Progress value={currentStep >= 1 ? 97.2 : 0} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Blockchain Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-teal-600" />
                  <span>Blockchain Verification</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Network Status</span>
                  <Badge className={currentStep >= 2 ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}>
                    {currentStep >= 2 ? "Active" : "Pending"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Block Hash</span>
                  <span className="text-sm font-mono text-gray-900">
                    {currentStep >= 2 ? "0x7a8b9c2d..." : "Generating..."}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Confirmations</span>
                  <span className="text-sm font-medium text-gray-900">{currentStep >= 2 ? "6/6" : "0/6"}</span>
                </div>
              </CardContent>
            </Card>

            {/* Smart Contract Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <span>Smart Contract Execution</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {currentStep >= 3 ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium text-green-900">Insurance Claim Approved</p>
                        <p className="text-sm text-green-700">Claim #1247 - $127.50</p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Processing Time: 2.3 seconds</p>
                      <p className="text-sm text-gray-600">90% faster than traditional methods</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Waiting for blockchain verification...</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Role-Based Demos */}
        <div className="border-t pt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Try Role-Specific Demos</h2>
            <p className="text-gray-600">Experience MedChain from different user perspectives</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/demo/patient">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <UserCheck className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Patient Experience</CardTitle>
                  <CardDescription>
                    Manage your medical documents, track insurance claims, and control data privacy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Secure document storage</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Real-time claim tracking</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Privacy controls</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link href="/demo/provider">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Healthcare Provider</CardTitle>
                  <CardDescription>
                    Streamline document verification, reduce fraud, and improve patient care efficiency
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Automated verification</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Fraud detection</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Compliance reporting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link href="/demo/insurer">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Insurance Company</CardTitle>
                  <CardDescription>
                    Automate claims processing, prevent fraud, and reduce operational costs significantly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Instant claim processing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Advanced fraud detection</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Cost reduction analytics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Healthcare Operations?</h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Join hundreds of healthcare organizations already using MedChain to secure their operations and eliminate
            fraud.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/auth/signup">
              <Button className="bg-white text-emerald-600 hover:bg-gray-100" size="lg">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
                size="lg"
              >
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
