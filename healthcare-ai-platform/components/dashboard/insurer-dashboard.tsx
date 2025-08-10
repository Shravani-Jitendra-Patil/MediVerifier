"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  DollarSign,
  FileText,
  AlertTriangle,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Users,
  BarChart3,
  Shield,
} from "lucide-react"

export function InsurerDashboard() {
  const [processingClaim, setProcessingClaim] = useState<string | null>(null)

  const pendingClaims = [
    {
      id: "CLM-2024-001",
      patient: "John Doe",
      provider: "City Medical Center",
      amount: "$2,450.00",
      type: "Surgery",
      submittedAt: "2024-01-15 14:30",
      status: "pending",
      riskScore: 15.2,
      aiRecommendation: "approve",
    },
    {
      id: "CLM-2024-002",
      patient: "Jane Smith",
      provider: "Downtown Clinic",
      amount: "$850.00",
      type: "Consultation",
      submittedAt: "2024-01-15 13:15",
      status: "review",
      riskScore: 78.9,
      aiRecommendation: "investigate",
    },
    {
      id: "CLM-2024-003",
      patient: "Bob Wilson",
      provider: "Health Plus",
      amount: "$320.00",
      type: "Prescription",
      submittedAt: "2024-01-15 12:00",
      status: "processing",
      riskScore: 8.1,
      aiRecommendation: "approve",
    },
  ]

  const fraudCases = [
    {
      id: "FRAUD-001",
      type: "Document Forgery",
      provider: "Suspicious Clinic",
      amount: "$5,200.00",
      confidence: 94.7,
      status: "investigating",
      flaggedAt: "2024-01-14 16:45",
    },
    {
      id: "FRAUD-002",
      type: "Duplicate Billing",
      provider: "Metro Health",
      amount: "$1,800.00",
      confidence: 87.3,
      status: "confirmed",
      flaggedAt: "2024-01-13 10:20",
    },
  ]

  const recentPayments = [
    {
      id: "PAY-001",
      claimId: "CLM-2024-045",
      patient: "Alice Johnson",
      amount: "$1,250.00",
      processedAt: "2024-01-15 11:30",
      method: "smart_contract",
    },
    {
      id: "PAY-002",
      claimId: "CLM-2024-044",
      patient: "Carol Brown",
      amount: "$675.00",
      processedAt: "2024-01-15 10:15",
      method: "smart_contract",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "review":
        return "bg-red-100 text-red-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "investigating":
        return "bg-orange-100 text-orange-800"
      case "confirmed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRiskColor = (score: number) => {
    if (score < 30) return "text-green-600"
    if (score < 70) return "text-yellow-600"
    return "text-red-600"
  }

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case "approve":
        return "bg-green-100 text-green-800"
      case "investigate":
        return "bg-red-100 text-red-800"
      case "review":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleProcessClaim = (claimId: string) => {
    setProcessingClaim(claimId)
    // Simulate smart contract processing
    setTimeout(() => {
      setProcessingClaim(null)
    }, 3000)
  }

  return (
    <DashboardLayout userRole="insurer">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Insurer Dashboard</h1>
          <p className="text-gray-600">Automated claims processing and fraud analytics</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Claims</p>
                  <p className="text-2xl font-bold text-gray-900">2,847</p>
                  <p className="text-xs text-green-600">+12% from last month</p>
                </div>
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Claims Paid</p>
                  <p className="text-2xl font-bold text-green-600">$2.4M</p>
                  <p className="text-xs text-green-600">90% automated</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Fraud Detected</p>
                  <p className="text-2xl font-bold text-red-600">47</p>
                  <p className="text-xs text-red-600">$890K prevented</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Processing Time</p>
                  <p className="text-2xl font-bold text-purple-600">4.2s</p>
                  <p className="text-xs text-green-600">-85% improvement</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="claims" className="space-y-6">
          <TabsList>
            <TabsTrigger value="claims">Claims Processing</TabsTrigger>
            <TabsTrigger value="fraud">Fraud Detection</TabsTrigger>
            <TabsTrigger value="payments">Recent Payments</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="claims" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Claims Processing Queue</CardTitle>
                <CardDescription>AI-powered claim analysis with smart contract automation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingClaims.map((claim) => (
                    <div key={claim.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="font-medium text-gray-900">{claim.id}</p>
                          <p className="text-sm text-gray-600">
                            {claim.patient} • {claim.provider}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg text-gray-900">{claim.amount}</p>
                          <Badge className={getStatusColor(claim.status)}>{claim.status}</Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Risk Score</p>
                          <p className={`font-medium ${getRiskColor(claim.riskScore)}`}>{claim.riskScore}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">AI Recommendation</p>
                          <Badge className={getRecommendationColor(claim.aiRecommendation)}>
                            {claim.aiRecommendation}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Submitted</p>
                          <p className="text-sm text-gray-900">{claim.submittedAt}</p>
                        </div>
                      </div>

                      {processingClaim === claim.id ? (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Processing via smart contract...</span>
                            <span>Blockchain confirmation pending</span>
                          </div>
                          <Progress value={66} />
                        </div>
                      ) : (
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => handleProcessClaim(claim.id)}
                          >
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Auto-Approve
                          </Button>
                          <Button size="sm" variant="outline">
                            Review Details
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="w-4 h-4 mr-2" />
                            Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fraud" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Fraud Detection Cases</CardTitle>
                <CardDescription>AI-identified suspicious activities requiring investigation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fraudCases.map((fraud) => (
                    <div key={fraud.id} className="p-4 border-2 border-red-200 rounded-lg bg-red-50">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <AlertTriangle className="w-6 h-6 text-red-600" />
                          <div>
                            <p className="font-medium text-red-900">{fraud.type}</p>
                            <p className="text-sm text-red-700">{fraud.provider}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg text-red-900">{fraud.amount}</p>
                          <Badge className={getStatusColor(fraud.status)}>{fraud.status}</Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-red-600">AI Confidence</p>
                          <p className="font-medium text-red-900">{fraud.confidence}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-red-600">Flagged At</p>
                          <p className="text-sm text-red-900">{fraud.flaggedAt}</p>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="destructive">
                          Investigate
                        </Button>
                        <Button size="sm" variant="outline">
                          View Evidence
                        </Button>
                        <Button size="sm" variant="outline">
                          Contact Provider
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Payments</CardTitle>
                <CardDescription>Automated payments processed via smart contracts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPayments.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{payment.claimId}</p>
                          <p className="text-sm text-gray-600">{payment.patient}</p>
                          <p className="text-sm text-gray-500">Processed: {payment.processedAt}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg text-gray-900">{payment.amount}</p>
                        <Badge className="bg-blue-100 text-blue-800">Smart Contract</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Claims Analytics</CardTitle>
                  <CardDescription>Performance metrics and trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Auto-Approval Rate</span>
                      <span className="font-medium text-green-600">89.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Average Processing Time</span>
                      <span className="font-medium">4.2 seconds</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Cost Savings</span>
                      <span className="font-medium text-green-600">$2.1M/year</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Customer Satisfaction</span>
                      <span className="font-medium">96.8%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fraud Prevention</CardTitle>
                  <CardDescription>Security and prevention metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Fraud Detection Rate</span>
                      <span className="font-medium text-red-600">99.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">False Positives</span>
                      <span className="font-medium">0.3%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Money Saved</span>
                      <span className="font-medium text-green-600">$890K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Cases Investigated</span>
                      <span className="font-medium">47</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>System Performance</CardTitle>
                <CardDescription>Real-time system health and blockchain status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <Shield className="w-8 h-8 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">System Health</p>
                      <p className="text-sm text-green-700">99.9% uptime</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-900">Blockchain</p>
                      <p className="text-sm text-blue-700">All nodes active</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                    <Users className="w-8 h-8 text-purple-600" />
                    <div>
                      <p className="font-medium text-purple-900">Active Users</p>
                      <p className="text-sm text-purple-700">2,847 online</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
                    <Clock className="w-8 h-8 text-orange-600" />
                    <div>
                      <p className="font-medium text-orange-900">Queue Status</p>
                      <p className="text-sm text-orange-700">12 pending</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
