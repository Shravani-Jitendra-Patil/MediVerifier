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
  AlertTriangle,
  Clock,
  TrendingUp,
  DollarSign,
  FileText,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">MedChain Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Upload Document
              </Button>
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-emerald-600">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Verified Documents</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,198</div>
              <p className="text-xs text-muted-foreground">96.1% verification rate</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Claims Processed</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2.4M</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fraud Prevented</CardTitle>
              <Shield className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">49</div>
              <p className="text-xs text-muted-foreground">$127K in fraudulent claims</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Document Activity</CardTitle>
                <CardDescription>Latest document verifications and processing status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "DOC-001",
                      type: "Prescription",
                      patient: "John Smith",
                      status: "verified",
                      time: "2 minutes ago",
                      confidence: 99.8,
                    },
                    {
                      id: "DOC-002",
                      type: "Lab Report",
                      patient: "Sarah Johnson",
                      status: "processing",
                      time: "5 minutes ago",
                      confidence: null,
                    },
                    {
                      id: "DOC-003",
                      type: "Medical Certificate",
                      patient: "Mike Davis",
                      status: "flagged",
                      time: "12 minutes ago",
                      confidence: 45.2,
                    },
                    {
                      id: "DOC-004",
                      type: "Insurance Claim",
                      patient: "Emily Wilson",
                      status: "verified",
                      time: "18 minutes ago",
                      confidence: 98.5,
                    },
                  ].map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <FileCheck className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{doc.type}</p>
                          <p className="text-sm text-gray-500">Patient: {doc.patient}</p>
                          <p className="text-xs text-gray-400">{doc.time}</p>
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
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Analysis Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-emerald-600" />
                  <span>AI Analysis</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Processing Queue</span>
                    <span>3 documents</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Model Accuracy</span>
                    <span>99.8%</span>
                  </div>
                  <Progress value={99.8} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>System Health</span>
                    <span>Optimal</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Blockchain Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-teal-600" />
                  <span>Blockchain Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Network</span>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Last Block</span>
                  <span className="text-sm font-medium">#2,847,392</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Gas Price</span>
                  <span className="text-sm font-medium">12 gwei</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Confirmations</span>
                  <span className="text-sm font-medium">6/6</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload New Document
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <FileCheck className="w-4 h-4 mr-2" />
                  Verify Batch
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
