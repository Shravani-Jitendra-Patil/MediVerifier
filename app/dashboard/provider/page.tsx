"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  FileText,
  Upload,
  CheckCircle,
  Clock,
  AlertTriangle,
  Users,
  Activity,
  DollarSign,
  Brain,
  Building,
  Bell,
  Filter,
  BarChart3,
  FileCheck,
  UserCheck,
  Calendar,
  Download,
  Eye,
  Plus,
  Stethoscope,
  Pill,
} from "lucide-react"

export default function ProviderDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTimeframe, setSelectedTimeframe] = useState("week")

  const stats = [
    {
      title: "Total Patients",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "text-emerald-600",
    },
    {
      title: "Documents Processed",
      value: "3,891",
      change: "+23%",
      icon: FileCheck,
      color: "text-teal-600",
    },
    {
      title: "Claims Approved",
      value: "$127K",
      change: "+8%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Fraud Prevented",
      value: "47",
      change: "$23K saved",
      icon: Shield,
      color: "text-red-600",
    },
  ]

  const recentDocuments = [
    {
      id: "DOC-2024-001",
      patient: "Sarah Johnson",
      type: "Lab Results",
      status: "verified",
      confidence: 99.8,
      timestamp: "2 minutes ago",
      priority: "normal",
    },
    {
      id: "DOC-2024-002",
      patient: "Michael Chen",
      type: "Prescription",
      status: "processing",
      confidence: null,
      timestamp: "5 minutes ago",
      priority: "high",
    },
    {
      id: "DOC-2024-003",
      patient: "Emily Davis",
      type: "X-Ray Report",
      status: "flagged",
      confidence: 45.2,
      timestamp: "12 minutes ago",
      priority: "urgent",
    },
    {
      id: "DOC-2024-004",
      patient: "Robert Wilson",
      type: "Insurance Form",
      status: "verified",
      confidence: 98.5,
      timestamp: "18 minutes ago",
      priority: "normal",
    },
  ]

  const aiInsights = [
    {
      title: "Fraud Detection Alert",
      description: "3 suspicious documents detected in the last 24 hours",
      type: "warning",
      action: "Review Now",
    },
    {
      title: "Processing Efficiency",
      description: "Document verification 15% faster than last week",
      type: "success",
      action: "View Report",
    },
    {
      title: "System Update",
      description: "New AI model deployed - improved accuracy by 2.3%",
      type: "info",
      action: "Learn More",
    },
  ]

  const upcomingAppointments = [
    {
      time: "09:00 AM",
      patient: "Alice Brown",
      type: "Consultation",
      status: "confirmed",
    },
    {
      time: "10:30 AM",
      patient: "David Lee",
      type: "Follow-up",
      status: "pending",
    },
    {
      time: "02:00 PM",
      patient: "Maria Garcia",
      type: "Check-up",
      status: "confirmed",
    },
    {
      time: "03:30 PM",
      patient: "James Taylor",
      type: "Consultation",
      status: "confirmed",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">MedChain</span>
              </div>
              <Badge className="bg-teal-100 text-teal-800">Provider Portal</Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Bulk Upload
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                New Patient
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-4 h-4 text-teal-600" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">Dr. Sarah Johnson</p>
                  <p className="text-gray-500">City General Hospital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Good morning, Dr. Johnson!</h1>
          <p className="text-gray-600">Here's your healthcare practice overview for today.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-teal-600" />
                  <span>AI Insights & Alerts</span>
                </CardTitle>
                <CardDescription>Real-time intelligence from your document processing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiInsights.map((insight, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-l-4 ${
                        insight.type === "warning"
                          ? "bg-yellow-50 border-yellow-400"
                          : insight.type === "success"
                            ? "bg-green-50 border-green-400"
                            : "bg-blue-50 border-blue-400"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">{insight.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          {insight.action}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Document Activity */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Document Processing Queue</CardTitle>
                    <CardDescription>Real-time document verification and processing status</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <select
                      value={selectedTimeframe}
                      onChange={(e) => setSelectedTimeframe(e.target.value)}
                      className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                    >
                      <option value="hour">Last Hour</option>
                      <option value="day">Today</option>
                      <option value="week">This Week</option>
                    </select>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDocuments.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            doc.priority === "urgent"
                              ? "bg-red-500"
                              : doc.priority === "high"
                                ? "bg-yellow-500"
                                : "bg-green-500"
                          }`}
                        ></div>
                        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                          {doc.type === "Lab Results" && <Activity className="w-5 h-5 text-teal-600" />}
                          {doc.type === "Prescription" && <Pill className="w-5 h-5 text-teal-600" />}
                          {doc.type === "X-Ray Report" && <FileText className="w-5 h-5 text-teal-600" />}
                          {doc.type === "Insurance Form" && <DollarSign className="w-5 h-5 text-teal-600" />}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{doc.patient}</h3>
                          <p className="text-sm text-gray-600">
                            {doc.type} • {doc.id}
                          </p>
                          <p className="text-xs text-gray-500">{doc.timestamp}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        {doc.confidence && (
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">{doc.confidence}%</p>
                            <p className="text-xs text-gray-500">Confidence</p>
                          </div>
                        )}
                        <Badge
                          variant={
                            doc.status === "verified"
                              ? "default"
                              : doc.status === "processing"
                                ? "secondary"
                                : "destructive"
                          }
                          className={
                            doc.status === "verified"
                              ? "bg-green-100 text-green-800"
                              : doc.status === "processing"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }
                        >
                          {doc.status === "verified" && <CheckCircle className="w-3 h-3 mr-1" />}
                          {doc.status === "processing" && <Clock className="w-3 h-3 mr-1" />}
                          {doc.status === "flagged" && <AlertTriangle className="w-3 h-3 mr-1" />}
                          {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                        </Badge>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-teal-600" />
                  <span>Performance Analytics</span>
                </CardTitle>
                <CardDescription>Document processing and verification metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Processing Speed</span>
                        <span>2.3s avg</span>
                      </div>
                      <Progress value={92} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">15% faster than last week</p>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Verification Accuracy</span>
                        <span>99.8%</span>
                      </div>
                      <Progress value={99.8} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">Industry leading precision</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Patient Satisfaction</span>
                        <span>4.9/5</span>
                      </div>
                      <Progress value={98} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">Based on 247 reviews</p>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Cost Savings</span>
                        <span>$23K</span>
                      </div>
                      <Progress value={85} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">Fraud prevention this month</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-teal-600" />
                  <span>Today's Schedule</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingAppointments.map((appointment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{appointment.time}</p>
                        <p className="text-sm text-gray-600">{appointment.patient}</p>
                        <p className="text-xs text-gray-500">{appointment.type}</p>
                      </div>
                      <Badge
                        className={
                          appointment.status === "confirmed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {appointment.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-teal-600 hover:bg-teal-700">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Documents
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <UserCheck className="w-4 h-4 mr-2" />
                  Add New Patient
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <FileCheck className="w-4 h-4 mr-2" />
                  Verify Batch
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Reports
                </Button>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-teal-600" />
                  <span>System Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">AI Processing</span>
                  <Badge className="bg-green-100 text-green-800">Optimal</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Blockchain Network</span>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Queue Status</span>
                  <span className="text-sm font-medium text-gray-900">3 pending</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Uptime</span>
                  <span className="text-sm font-medium text-green-600">99.9%</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-5 h-5 text-teal-600" />
                  <span>Recent Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Fraud Alert</p>
                      <p className="text-xs text-gray-600">Suspicious document detected</p>
                      <p className="text-xs text-gray-500">5 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">System Update</p>
                      <p className="text-xs text-gray-600">New AI model deployed</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Batch Complete</p>
                      <p className="text-xs text-gray-600">47 documents processed</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
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
