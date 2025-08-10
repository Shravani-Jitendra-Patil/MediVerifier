"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Upload, Clock, CheckCircle, AlertTriangle, DollarSign, Calendar, Shield } from "lucide-react"

export function PatientDashboard() {
  const [uploadProgress, setUploadProgress] = useState(0)

  const recentClaims = [
    {
      id: "CLM-001",
      type: "Medical Consultation",
      date: "2024-01-15",
      amount: "$250.00",
      status: "approved",
      provider: "Dr. Smith Medical Center",
    },
    {
      id: "CLM-002",
      type: "Prescription Medication",
      date: "2024-01-12",
      amount: "$85.50",
      status: "processing",
      provider: "City Pharmacy",
    },
    {
      id: "CLM-003",
      type: "Laboratory Tests",
      date: "2024-01-10",
      amount: "$320.00",
      status: "pending",
      provider: "HealthLab Diagnostics",
    },
  ]

  const documents = [
    {
      id: "DOC-001",
      name: "Insurance Card",
      type: "ID Document",
      status: "verified",
      uploadDate: "2024-01-01",
      verificationScore: 99.8,
    },
    {
      id: "DOC-002",
      name: "Medical History",
      type: "Medical Record",
      status: "verified",
      uploadDate: "2024-01-05",
      verificationScore: 98.5,
    },
    {
      id: "DOC-003",
      name: "Prescription Receipt",
      type: "Receipt",
      status: "processing",
      uploadDate: "2024-01-15",
      verificationScore: null,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
      case "verified":
        return "bg-green-100 text-green-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      case "pending":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
      case "verified":
        return <CheckCircle className="w-4 h-4" />
      case "processing":
        return <Clock className="w-4 h-4" />
      case "pending":
        return <AlertTriangle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const handleFileUpload = () => {
    // Simulate file upload progress
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <DashboardLayout userRole="patient">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patient Dashboard</h1>
          <p className="text-gray-600">Manage your documents and track your claims</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Claims</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Approved Claims</p>
                  <p className="text-2xl font-bold text-green-600">8</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Reimbursed</p>
                  <p className="text-2xl font-bold text-purple-600">$2,450</p>
                </div>
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Documents</p>
                  <p className="text-2xl font-bold text-orange-600">15</p>
                </div>
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="claims" className="space-y-6">
          <TabsList>
            <TabsTrigger value="claims">Recent Claims</TabsTrigger>
            <TabsTrigger value="documents">My Documents</TabsTrigger>
            <TabsTrigger value="upload">Upload Document</TabsTrigger>
          </TabsList>

          <TabsContent value="claims" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Claims</CardTitle>
                <CardDescription>Track the status of your insurance claims</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentClaims.map((claim) => (
                    <div key={claim.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">{getStatusIcon(claim.status)}</div>
                        <div>
                          <p className="font-medium text-gray-900">{claim.type}</p>
                          <p className="text-sm text-gray-600">{claim.provider}</p>
                          <p className="text-sm text-gray-500">
                            <Calendar className="w-4 h-4 inline mr-1" />
                            {claim.date}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{claim.amount}</p>
                        <Badge className={getStatusColor(claim.status)}>{claim.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Documents</CardTitle>
                <CardDescription>View and manage your uploaded documents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <FileText className="w-8 h-8 text-blue-600" />
                        <div>
                          <p className="font-medium text-gray-900">{doc.name}</p>
                          <p className="text-sm text-gray-600">{doc.type}</p>
                          <p className="text-sm text-gray-500">Uploaded: {doc.uploadDate}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        {doc.verificationScore && (
                          <p className="text-sm text-gray-600 mb-1">Verification: {doc.verificationScore}%</p>
                        )}
                        <Badge className={getStatusColor(doc.status)}>{doc.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upload" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload New Document</CardTitle>
                <CardDescription>Upload documents for AI verification and blockchain storage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-900 mb-2">Drop files here or click to upload</p>
                  <p className="text-gray-600 mb-4">Supported formats: PDF, JPG, PNG (Max 10MB)</p>
                  <Button onClick={handleFileUpload}>Select Files</Button>
                </div>

                {uploadProgress > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Uploading document...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} />
                    {uploadProgress === 100 && (
                      <p className="text-sm text-green-600 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Document uploaded successfully! AI verification in progress.
                      </p>
                    )}
                  </div>
                )}

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">AI Verification Process</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Document authenticity check (99.9% accuracy)</li>
                    <li>• Blockchain storage for immutable records</li>
                    <li>• Automatic fraud detection</li>
                    <li>• HIPAA compliant processing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
