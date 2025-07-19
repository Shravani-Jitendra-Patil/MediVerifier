"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  FileText,
  Users,
  CreditCard,
  Building,
  Bell,
  Settings,
  Download,
  Eye,
  Zap,
  Brain,
  Activity,
  ArrowUp,
  ArrowDown,
} from "lucide-react"

export default function InsurerDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")
  const [selectedMetric, setSelectedMetric] = useState("claims")

  const keyMetrics = [
    {
      title: "Total Claims",
      value: "$2.4M",
      change: "+12%",
      trend: "up",
      icon: DollarSign,
      color: "text-emerald-600",
    },
    {
      title: "Fraud Prevented",
      value: "$127K",
      change: "+34%",
      trend: "up",
      icon: Shield,
      color: "text-red-600",
    },
    {
      title: "Processing Time",
      value: "2.3s",
      change: "-45%",
      trend: "down",
      icon: Clock,
      color: "text-blue-600",
    },
    {
      title: "Approval Rate",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      icon: CheckCircle,
      color: "text-green-600",
    },
  ]

  const recentClaims = [
    {
      id: "CLM-2024-001",
      patient: "John Smith",
      provider: "City General Hospital",
      amount: "$1,247.50",
      type: "Lab Tests",
      status: "approved",
      confidence: 99.8,
      processingTime: "1.2s",
      timestamp: "2 minutes ago",
    },
    {
      id: "CLM-2024-002",
      patient: "Sarah Johnson",
      provider: "Metro Medical Center",
      amount: "$3,450.00",
      type: "Surgery",
      status: "processing",
      confidence: null,
      processingTime: null,
      timestamp: "5 minutes ago",
    },
    {
      id: "CLM-2024-003",
      patient: "Michael Chen",
      provider: "Downtown Clinic",
      amount: "$890.25",
      type: "Consultation",
      status: "flagged",
      confidence: 23.4,
      processingTime: null,
      timestamp: "12 minutes ago",
    },
    {
      id: "CLM-2024-004",
      patient: "Emily Davis",
      provider: "Regional Hospital",
      amount: "$2,156.75",
      type: "Imaging",
      status: "approved",
      confidence: 97.3,
      processingTime: "2.8s",
      timestamp: "18 minutes ago",
    },
  ]

  const fraudAlerts = [
    {
      id: "FRD-001",
      type: "Document Forgery",
      severity: "high",
      amount: "$4,500",
      provider: "Suspicious Clinic A",
      confidence: 95.7,
      timestamp: "15 minutes ago",
    },
    {
      id: "FRD-002",
      type: "Duplicate Claim",
      severity: "medium",
      amount: "$1,200",
      provider: "Metro Health Center",
      confidence: 78.3,
      timestamp: "1 hour ago",
    },
    {
      id: "FRD-003",
      type: "Identity Theft",
      severity: "high",
      amount: "$2,800",
      provider: "Unknown Provider",
      confidence: 92.1,
      timestamp: "3 hours ago",
    },
  ]

  const topProviders = [
    { name: "City General Hospital", claims: 247, amount: "$127K", fraudRate: "0.2%" },
    { name: "Metro Medical Center", claims: 189, amount: "$98K", fraudRate: "0.1%" },
    { name: "Regional Hospital", claims: 156, amount: "$89K", fraudRate: "0.3%" },
    { name: "Downtown Clinic", claims: 134, amount: "$67K", fraudRate: "0.4%" },
    { name: "Community Health", claims: 98, amount: "$45K", fraudRate: "0.1%" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">MedChain</span>
              </div>
              <Badge className="bg-cyan-100 text-cyan-800">Insurance Portal</Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button className="bg-cyan-600 hover:bg-cyan-700" size="sm">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Building className="w-4 h-4 text-cyan-600" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">HealthCare Plus</p>
                  <p className="text-gray-500">Insurance Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Insurance Operations Dashboard</h1>
          <p className="text-gray-600">
            Real-time insights into claims processing, fraud detection, and financial performance.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{metric.title}</CardTitle>
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                <div className="flex items-center space-x-1 mt-1">
                  {metric.trend === "up" ? (
                    <ArrowUp className="w-3 h-3 text-green-500" />
                  ) : (
                    <ArrowDown className="w-3 h-3 text-green-500" />
                  )}
                  <span className="text-xs text-green-600">{metric.change}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Fraud Detection Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  <span>Fraud Detection Alerts</span>
                </CardTitle>
                <CardDescription>AI-powered fraud detection and prevention system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fraudAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-4 rounded-lg border-l-4 ${
                        alert.severity === "high" ? "bg-red-50 border-red-400" : "bg-yellow-50 border-yellow-400"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge
                              className={
                                alert.severity === "high" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                              }
                            >
                              {alert.severity.toUpperCase()}
                            </Badge>
                            <span className="font-medium text-gray-900">{alert.type}</span>
                          </div>
                          <p className="text-sm text-gray-600">Provider: {alert.provider}</p>
                          <p className="text-sm text-gray-600">Amount: {alert.amount}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-xs text-gray-500">Confidence: {alert.confidence}%</span>
                            <span className="text-xs text-gray-500">{alert.timestamp}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 border-red-200 bg-transparent">
                            Block
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Claims Processing */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Real-time Claims Processing</CardTitle>
                    <CardDescription>Automated claim verification and approval system</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <select
                      value={selectedPeriod}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                    >
                      <option value="hour">Last Hour</option>
                      <option value="day">Today</option>
                      <option value="week">This Week</option>
                      <option value="month">This Month</option>
                    </select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentClaims.map((claim) => (
                    <div
                      key={claim.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                          {claim.type === "Lab Tests" && <Activity className="w-5 h-5 text-cyan-600" />}
                          {claim.type === "Surgery" && <Zap className="w-5 h-5 text-cyan-600" />}
                          {claim.type === "Consultation" && <Users className="w-5 h-5 text-cyan-600" />}
                          {claim.type === "Imaging" && <FileText className="w-5 h-5 text-cyan-600" />}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{claim.patient}</h3>
                          <p className="text-sm text-gray-600">
                            {claim.provider} • {claim.type}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>{claim.id}</span>
                            <span>{claim.timestamp}</span>
                            {claim.processingTime && <span>Processed in {claim.processingTime}</span>}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{claim.amount}</p>
                          {claim.confidence && <p className="text-xs text-gray-500">Confidence: {claim.confidence}%</p>}
                        </div>
                        <Badge
                          className={
                            claim.status === "approved"
                              ? "bg-green-100 text-green-800"
                              : claim.status === "processing"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }
                        >
                          {claim.status === "approved" && <CheckCircle className="w-3 h-3 mr-1" />}
                          {claim.status === "processing" && <Clock className="w-3 h-3 mr-1" />}
                          {claim.status === "flagged" && <AlertTriangle className="w-3 h-3 mr-1" />}
                          {claim.status.charAt(0).toUpperCase() + claim.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Financial Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-cyan-600" />
                  <span>Financial Performance</span>
                </CardTitle>
                <CardDescription>Claims processing and cost analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Claims Approved</span>
                        <span>94.2%</span>
                      </div>
                      <Progress value={94.2} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">+2.1% from last month</p>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Processing Efficiency</span>
                        <span>98.7%</span>
                      </div>
                      <Progress value={98.7} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">Average 2.3s processing time</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Fraud Detection Rate</span>
                        <span>99.9%</span>
                      </div>
                      <Progress value={99.9} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">$127K fraud prevented</p>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Cost Reduction</span>
                        <span>67%</span>
                      </div>
                      <Progress value={67} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">Compared to manual processing</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Providers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="w-5 h-5 text-cyan-600" />
                  <span>Top Providers</span>
                </CardTitle>
                <CardDescription>Highest volume healthcare providers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topProviders.map((provider, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">{provider.name}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>{provider.claims} claims</span>
                          <span>{provider.amount}</span>
                        </div>
                      </div>
                      <Badge
                        className={
                          Number.parseFloat(provider.fraudRate) < 0.2
                            ? "bg-green-100 text-green-800"
                            : Number.parseFloat(provider.fraudRate) < 0.4
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }
                      >
                        {provider.fraudRate}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-cyan-600" />
                  <span>AI Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Model Accuracy</span>
                  <span className="text-sm font-medium text-gray-900">99.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Processing Speed</span>
                  <span className="text-sm font-medium text-gray-900">2.3s avg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">False Positives</span>
                  <span className="text-sm font-medium text-gray-900">0.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">System Uptime</span>
                  <span className="text-sm font-medium text-green-600">99.9%</span>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-gray-500">
                    AI model last updated 2 hours ago with improved fraud detection algorithms.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-cyan-600 hover:bg-cyan-700">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Shield className="w-4 h-4 mr-2" />
                  Review Fraud Alerts
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Process Batch Claims
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure Rules
                </Button>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-cyan-600" />
                  <span>System Health</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Blockchain Network</span>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Smart Contracts</span>
                  <Badge className="bg-green-100 text-green-800">Operational</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Processing Queue</span>
                  <span className="text-sm font-medium text-gray-900">12 pending</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">API Response Time</span>
                  <span className="text-sm font-medium text-gray-900">145ms</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
