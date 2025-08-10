"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Users, FileCheck, AlertTriangle, TrendingUp, Clock, CheckCircle, XCircle, Eye, Shield } from "lucide-react"

export function ProviderDashboard() {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null)

  const fraudAlerts = [
    {
      id: "ALERT-001",
      type: "Document Forgery",
      patient: "John Doe",
      document: "Insurance Card",
      riskLevel: "high",
      confidence: 98.5,
      timestamp: "2024-01-15 14:30",
    },
    {
      id: "ALERT-002",
      type: "Duplicate Claim",
      patient: "Jane Smith",
      document: "Medical Receipt",
      riskLevel: "medium",
      confidence: 87.2,
      timestamp: "2024-01-15 12:15",
    },
  ]

  const pendingDocuments = [
    {
      id: "DOC-101",
      patient: "Alice Johnson",
      type: "Medical History",
      submittedAt: "2024-01-15 10:00",
      status: "processing",
      aiScore: null,
    },
    {
      id: "DOC-102",
      patient: "Bob Wilson",
      type: "Insurance Card",
      submittedAt: "2024-01-15 09:30",
      status: "verified",
      aiScore: 99.1,
    },
    {
      id: "DOC-103",
      patient: "Carol Brown",
      type: "Prescription",
      submittedAt: "2024-01-15 08:45",
      status: "flagged",
      aiScore: 45.3,
    },
  ]

  const recentPatients = [
    {
      id: "PAT-001",
      name: "John Doe",
      lastVisit: "2024-01-15",
      documentsCount: 5,
      verificationStatus: "verified",
    },
    {
      id: "PAT-002",
      name: "Jane Smith",
      lastVisit: "2024-01-14",
      documentsCount: 3,
      verificationStatus: "pending",
    },
    {
      id: "PAT-003",
      name: "Alice Johnson",
      lastVisit: "2024-01-13",
      documentsCount: 7,
      verificationStatus: "verified",
    },
  ]

  const getRiskColor = (level: string) => {
    switch (level) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-green-100 text-green-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      case "flagged":
        return "bg-red-100 text-red-800"
      case "pending":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified":
        return <CheckCircle className="w-4 h-4" />
      case "processing":
        return <Clock className="w-4 h-4" />
      case "flagged":
        return <XCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  return (
    <DashboardLayout userRole="provider">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Provider Dashboard</h1>
          <p className="text-gray-600">Monitor document processing and fraud detection</p>
        </div>

        {/* Fraud Alerts */}
        {fraudAlerts.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              Active Fraud Alerts
            </h2>
            {fraudAlerts.map((alert) => (
              <Alert key={alert.id} className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-red-900">
                        {alert.type} detected for {alert.patient}
                      </p>
                      <p className="text-sm text-red-700 mt-1">
                        Document: {alert.document} • Confidence: {alert.confidence}% • {alert.timestamp}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Badge className={getRiskColor(alert.riskLevel)}>{alert.riskLevel} risk</Badge>
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    </div>
                  </div>
                </AlertDescription>
              </Alert>
            ))}
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Patients</p>
                  <p className="text-2xl font-bold text-gray-900">247</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Documents Processed</p>
                  <p className="text-2xl font-bold text-green-600">1,234</p>
                </div>
                <FileCheck className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Fraud Detected</p>
                  <p className="text-2xl font-bold text-red-600">23</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Verification Rate</p>
                  <p className="text-2xl font-bold text-purple-600">99.2%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="documents" className="space-y-6">
          <TabsList>
            <TabsTrigger value="documents">Document Queue</TabsTrigger>
            <TabsTrigger value="patients">Recent Patients</TabsTrigger>
            <TabsTrigger value="analytics">Fraud Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Document Processing Queue</CardTitle>
                <CardDescription>Review and process patient documents with AI verification</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingDocuments.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">{getStatusIcon(doc.status)}</div>
                        <div>
                          <p className="font-medium text-gray-900">{doc.patient}</p>
                          <p className="text-sm text-gray-600">{doc.type}</p>
                          <p className="text-sm text-gray-500">Submitted: {doc.submittedAt}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {doc.aiScore && (
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">AI Score: {doc.aiScore}%</p>
                            <p className="text-xs text-gray-500">Verification confidence</p>
                          </div>
                        )}
                        <Badge className={getStatusColor(doc.status)}>{doc.status}</Badge>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="patients" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Patients</CardTitle>
                <CardDescription>Overview of recent patient interactions and document status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPatients.map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{patient.name}</p>
                          <p className="text-sm text-gray-600">Last visit: {patient.lastVisit}</p>
                          <p className="text-sm text-gray-500">{patient.documentsCount} documents</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={getStatusColor(patient.verificationStatus)}>
                          {patient.verificationStatus}
                        </Badge>
                        <Button size="sm" variant="outline">
                          View Profile
                        </Button>
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
                  <CardTitle>Fraud Detection Summary</CardTitle>
                  <CardDescription>Last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Documents Scanned</span>
                      <span className="font-medium">1,234</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Fraud Detected</span>
                      <span className="font-medium text-red-600">23 (1.9%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">False Positives</span>
                      <span className="font-medium">2 (0.2%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Accuracy Rate</span>
                      <span className="font-medium text-green-600">99.8%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Processing Performance</CardTitle>
                  <CardDescription>System efficiency metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg. Processing Time</span>
                      <span className="font-medium">2.3 seconds</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">System Uptime</span>
                      <span className="font-medium text-green-600">99.9%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Documents/Hour</span>
                      <span className="font-medium">1,847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Blockchain Confirmations</span>
                      <span className="font-medium">100%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Security Status</CardTitle>
                <CardDescription>Real-time security and compliance monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <Shield className="w-8 h-8 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">HIPAA Compliant</p>
                      <p className="text-sm text-green-700">All systems secure</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-900">Blockchain Active</p>
                      <p className="text-sm text-blue-700">All records immutable</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                    <div>
                      <p className="font-medium text-purple-900">AI Models Updated</p>
                      <p className="text-sm text-purple-700">Latest algorithms active</p>
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
