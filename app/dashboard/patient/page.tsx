"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  Search,
  Activity,
  DollarSign,
  Heart,
  Pill,
  FileCheck,
  Lock,
  Smartphone,
} from "lucide-react"

export default function PatientDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

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
    },
    {
      id: "DOC-004",
      name: "Insurance Claim",
      type: "Insurance",
      date: "2024-01-08",
      status: "approved",
      provider: "HealthCare Plus",
      confidence: 99.2,
      size: "0.8 MB",
      hash: "0x9d8c7b6a...",
    },
  ]

  const recentActivity = [
    {
      action: "Document Verified",
      document: "Blood Test Results",
      time: "2 hours ago",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      action: "Claim Approved",
      document: "Insurance Claim #1247",
      time: "1 day ago",
      icon: DollarSign,
      color: "text-emerald-600",
    },
    {
      action: "Document Uploaded",
      document: "X-Ray Chest",
      time: "3 days ago",
      icon: Upload,
      color: "text-blue-600",
    },
    {
      action: "Access Granted",
      document: "Medical History to Dr. Smith",
      time: "5 days ago",
      icon: Share2,
      color: "text-purple-600",
    },
  ]

  const healthMetrics = [
    { label: "Documents Verified", value: "24", change: "+3 this month", icon: FileCheck },
    { label: "Claims Processed", value: "$2,847", change: "+$450 this month", icon: DollarSign },
    { label: "Privacy Score", value: "100%", change: "Excellent", icon: Lock },
    { label: "Health Score", value: "92/100", change: "+5 points", icon: Heart },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">MedChain</span>
              </div>
              <Badge className="bg-emerald-100 text-emerald-800">Patient Portal</Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Upload Document
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-sm font-medium">John Smith</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's an overview of your medical documents and health data.</p>
        </div>

        {/* Health Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {healthMetrics.map((metric, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{metric.label}</CardTitle>
                <metric.icon className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                <p className="text-xs text-gray-500 mt-1">{metric.change}</p>
              </CardContent>
            </Card>
          ))}
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
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload New
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Search and Filter */}
                <div className="flex space-x-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search documents..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="all">All Documents</option>
                    <option value="lab">Lab Reports</option>
                    <option value="prescription">Prescriptions</option>
                    <option value="imaging">Imaging</option>
                    <option value="insurance">Insurance</option>
                  </select>
                </div>

                {/* Documents List */}
                <div className="space-y-4">
                  {documents.map((doc) => (
                    <div key={doc.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                            {doc.type === "Lab Report" && <Activity className="w-5 h-5 text-emerald-600" />}
                            {doc.type === "Prescription" && <Pill className="w-5 h-5 text-emerald-600" />}
                            {doc.type === "Imaging" && <FileText className="w-5 h-5 text-emerald-600" />}
                            {doc.type === "Insurance" && <DollarSign className="w-5 h-5 text-emerald-600" />}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{doc.name}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>{doc.type}</span>
                              <span>•</span>
                              <span>{doc.provider}</span>
                              <span>•</span>
                              <span>{doc.date}</span>
                              <span>•</span>
                              <span>{doc.size}</span>
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
                            variant={
                              doc.status === "verified"
                                ? "default"
                                : doc.status === "processing"
                                  ? "secondary"
                                  : doc.status === "approved"
                                    ? "default"
                                    : "destructive"
                            }
                            className={
                              doc.status === "verified"
                                ? "bg-green-100 text-green-800"
                                : doc.status === "processing"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : doc.status === "approved"
                                    ? "bg-emerald-100 text-emerald-800"
                                    : "bg-red-100 text-red-800"
                            }
                          >
                            {doc.status === "verified" && <CheckCircle className="w-3 h-3 mr-1" />}
                            {doc.status === "processing" && <Clock className="w-3 h-3 mr-1" />}
                            {doc.status === "approved" && <CheckCircle className="w-3 h-3 mr-1" />}
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

            {/* Recent Claims */}
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

                  <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Total Reimbursed</p>
                        <p className="text-sm text-gray-600">This year</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-emerald-600">$2,847.50</p>
                      <p className="text-xs text-gray-500">90% faster processing</p>
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
                <Button className="w-full justify-start bg-emerald-600 hover:bg-emerald-700">
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
                <div className="pt-2 border-t">
                  <p className="text-xs text-gray-500">
                    Your data is protected with enterprise-grade security and HIPAA compliance.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center`}>
                        <activity.icon className={`w-4 h-4 ${activity.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600 truncate">{activity.document}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mobile App Promotion */}
            <Card className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <Smartphone className="w-12 h-12 mx-auto opacity-80" />
                  <div>
                    <h3 className="font-semibold">Get the Mobile App</h3>
                    <p className="text-sm opacity-90">Access your documents anywhere, anytime</p>
                  </div>
                  <Button className="w-full bg-white text-emerald-600 hover:bg-gray-100">Download Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
