"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import {
  Shield,
  FileText,
  Upload,
  CheckCircle,
  Clock,
  Download,
  Eye,
  Share2,
  Bell,
  User,
  ArrowLeft,
  Search,
  Activity,
  DollarSign,
  Heart,
  Pill,
  FileCheck,
  Lock,
  Smartphone,
} from "lucide-react"
import Link from "next/link"

export default function PatientDemo() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null)

  const documents = [
    {
      id: "DOC-001",
      name: "Blood Test Results",
      type: "Lab Report",
      date: "2024-01-15",
      status: "verified",
      provider: "City General Hospital",
      confidence: 99.8,
      size: "2.4 MB",
      hash: "0x7a8b9c2d...",
      isNew: false,
    },
    {
      id: "DOC-002",
      name: "Prescription - Antibiotics",
      type: "Prescription",
      date: "2024-01-12",
      status: "verified",
      provider: "Dr. Sarah Johnson",
      confidence: 98.5,
      size: "1.2 MB",
      hash: "0x3f4e5a6b...",
      isNew: false,
    },
    {
      id: "DOC-003",
      name: "X-Ray Chest",
      type: "Imaging",
      date: "2024-01-10",
      status: "processing",
      provider: "Metro Medical Center",
      confidence: null,
      size: "15.7 MB",
      hash: "Processing...",
      isNew: true,
    },
  ]

  const simulateUpload = () => {
    setIsUploading(true)
    setUploadProgress(0)

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          setIsUploading(false)
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 200)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/demo"
                className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Demo</span>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">MedChain</span>
              </div>
              <Badge className="bg-emerald-100 text-emerald-800">Patient Demo</Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={simulateUpload} disabled={isUploading}>
                <Upload className="w-4 h-4 mr-2" />
                {isUploading ? "Uploading..." : "Upload Document"}
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-sm font-medium">Demo Patient</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Demo Instructions */}
        <div className="mb-8 p-6 bg-emerald-50 rounded-lg border border-emerald-200">
          <h2 className="text-lg font-semibold text-emerald-900 mb-2">Patient Portal Demo</h2>
          <p className="text-emerald-700 mb-4">
            Experience how patients can securely manage their medical documents, track insurance claims, and control
            their health data privacy.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-emerald-100 text-emerald-800">✓ Upload documents</Badge>
            <Badge className="bg-emerald-100 text-emerald-800">✓ View verification status</Badge>
            <Badge className="bg-emerald-100 text-emerald-800">✓ Track insurance claims</Badge>
            <Badge className="bg-emerald-100 text-emerald-800">✓ Control data sharing</Badge>
          </div>
        </div>

        {/* Upload Progress */}
        {isUploading && (
          <Card className="mb-8 border-emerald-200">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <Upload className="w-8 h-8 text-emerald-600" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Uploading Medical Document...</p>
                  <Progress value={uploadProgress} className="mt-2" />
                  <p className="text-sm text-gray-500 mt-1">
                    {uploadProgress < 30 && "Encrypting document..."}
                    {uploadProgress >= 30 && uploadProgress < 60 && "AI analysis in progress..."}
                    {uploadProgress >= 60 && uploadProgress < 90 && "Blockchain verification..."}
                    {uploadProgress >= 90 && "Upload complete!"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Health Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Documents Verified</CardTitle>
              <FileCheck className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">24</div>
              <p className="text-xs text-gray-500 mt-1">+3 this month</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Claims Processed</CardTitle>
              <DollarSign className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">$2,847</div>
              <p className="text-xs text-gray-500 mt-1">+$450 this month</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Privacy Score</CardTitle>
              <Lock className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <p className="text-xs text-gray-500 mt-1">Excellent</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Health Score</CardTitle>
              <Heart className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">92/100</div>
              <p className="text-xs text-gray-500 mt-1">+5 points</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Document Management */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>My Medical Documents</CardTitle>
                    <CardDescription>Securely stored and blockchain-verified documents</CardDescription>
                  </div>
                  <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={simulateUpload}>
                    <Upload className="w-4 h-4 mr-2" />
                    Upload New
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input placeholder="Search documents..." className="pl-10" />
                  </div>
                </div>

                {/* Documents List */}
                <div className="space-y-4">
                  {documents.map((doc) => (
                    <div
                      key={doc.id}
                      className={`border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                        selectedDocument === doc.id ? "border-emerald-500 bg-emerald-50" : ""
                      }`}
                      onClick={() => setSelectedDocument(doc.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                            {doc.type === "Lab Report" && <Activity className="w-5 h-5 text-emerald-600" />}
                            {doc.type === "Prescription" && <Pill className="w-5 h-5 text-emerald-600" />}
                            {doc.type === "Imaging" && <FileText className="w-5 h-5 text-emerald-600" />}
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="font-medium text-gray-900">{doc.name}</h3>
                              {doc.isNew && <Badge className="bg-blue-100 text-blue-800">New</Badge>}
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>{doc.type}</span>
                              <span>•</span>
                              <span>{doc.provider}</span>
                              <span>•</span>
                              <span>{doc.date}</span>
                            </div>
                            {doc.confidence && (
                              <div className="flex items-center space-x-2 mt-1">
                                <span className="text-xs text-gray-500">Verification:</span>
                                <span className="text-xs font-medium text-green-600">{doc.confidence}%</span>
                                <span className="text-xs text-gray-400">Hash: {doc.hash}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            className={
                              doc.status === "verified"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {doc.status === "verified" && <CheckCircle className="w-3 h-3 mr-1" />}
                            {doc.status === "processing" && <Clock className="w-3 h-3 mr-1" />}
                            {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                          </Badge>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Insurance Claims */}
            <Card>
              <CardHeader>
                <CardTitle>Insurance Claims</CardTitle>
                <CardDescription>Track your insurance claims and reimbursements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Claim #1247 - Approved</p>
                        <p className="text-sm text-gray-600">Blood test reimbursement</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">$127.50</p>
                      <p className="text-xs text-gray-500">Processed in 2.3 seconds</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Claim #1248 - Processing</p>
                        <p className="text-sm text-gray-600">X-Ray examination</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-yellow-600">$245.00</p>
                      <p className="text-xs text-gray-500">Smart contract executing...</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-emerald-600 hover:bg-emerald-700" onClick={simulateUpload}>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Document
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <FileCheck className="w-4 h-4 mr-2" />
                  Request Verification
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share with Provider
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <DollarSign className="w-4 h-4 mr-2" />
                  File Insurance Claim
                </Button>
              </CardContent>
            </Card>

            {/* Security Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  <span>Security Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Blockchain Status</span>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Encryption</span>
                  <Badge className="bg-green-100 text-green-800">256-bit AES</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Privacy Score</span>
                  <span className="text-sm font-medium text-green-600">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">2FA Enabled</span>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
              </CardContent>
            </Card>

            {/* Demo Features */}
            <Card className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <Smartphone className="w-12 h-12 mx-auto opacity-80" />
                  <div>
                    <h3 className="font-semibold">Interactive Demo Features</h3>
                    <p className="text-sm opacity-90">Try uploading, viewing, and sharing documents</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Real-time AI verification</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Blockchain security</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Instant claim processing</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
