import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Brain,
  FileCheck,
  Lock,
  Zap,
  CheckCircle,
  ArrowRight,
  Building,
  UserCheck,
  CreditCard,
  Play,
  BarChart3,
  Clock,
  DollarSign,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">MedChain</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Features
              </Link>
              <Link href="#demo" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Live Demo
              </Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-emerald-600 transition-colors">
                How It Works
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Pricing
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-gray-600">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                  🚀 AI-Powered Medical Verification Platform
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Eliminate Medical Fraud with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                    AI & Blockchain
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our revolutionary platform uses advanced AI to verify medical documents and smart contracts to
                  automate insurance claims, reducing fraud by 99.9% and processing times by 90%.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/signup">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3 w-full sm:w-auto">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-3 border-emerald-200 hover:bg-emerald-50 bg-transparent w-full sm:w-auto"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Live Demo
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">99.9%</div>
                  <div className="text-sm text-gray-600">Fraud Detection</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">90%</div>
                  <div className="text-sm text-gray-600">Faster Processing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">500+</div>
                  <div className="text-sm text-gray-600">Healthcare Partners</div>
                </div>
              </div>
            </div>

            {/* Interactive Demo Preview */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Live Document Verification</h3>
                    <Badge className="bg-green-100 text-green-800 animate-pulse">Processing</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Brain className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">AI Analysis</p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div className="bg-emerald-600 h-2 rounded-full animate-pulse" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-emerald-600">85%</span>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-teal-50 rounded-lg">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">Blockchain Verification</p>
                        <p className="text-sm text-gray-500">Hash: 0x7a8b9c2d...</p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">Smart Contract</p>
                        <p className="text-sm text-gray-500">Auto-processing claim...</p>
                      </div>
                      <Clock className="w-5 h-5 text-yellow-500 animate-spin" />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">Document Verified ✓</p>
                        <p className="text-sm opacity-90">Confidence: 99.8% | Processing: 2.3s</p>
                      </div>
                      <DollarSign className="w-8 h-8 opacity-80" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-emerald-100 text-emerald-800">Interactive Demo</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Experience MedChain in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Try our platform with different user roles and see how AI and blockchain work together to secure
              healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/demo/patient">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <UserCheck className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Patient Portal Demo</CardTitle>
                  <CardDescription>
                    Experience secure document management and instant verification from a patient's perspective
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Try Patient Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/demo/provider">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Provider Dashboard Demo</CardTitle>
                  <CardDescription>
                    See how healthcare providers manage documents, verify authenticity, and process claims
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    Try Provider Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/demo/insurer">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Insurer Platform Demo</CardTitle>
                  <CardDescription>
                    Discover automated claim processing, fraud detection, and real-time analytics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                    Try Insurer Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-emerald-100 text-emerald-800">Core Features</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Complete Healthcare Security Suite</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature designed to eliminate fraud, protect privacy, and streamline healthcare operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Document Analysis",
                description: "Advanced ML algorithms detect fraudulent documents with 99.9% accuracy",
                features: ["Real-time analysis", "Pattern recognition", "Fraud detection", "OCR technology"],
                color: "from-emerald-500 to-teal-500",
                demo: "/demo/ai-analysis",
              },
              {
                icon: Shield,
                title: "Blockchain Security",
                description: "Immutable smart contracts ensure document integrity and prevent tampering",
                features: ["Immutable records", "Smart contracts", "Decentralized storage", "Hash verification"],
                color: "from-teal-500 to-cyan-500",
                demo: "/demo/blockchain",
              },
              {
                icon: Lock,
                title: "Privacy Protection",
                description: "Zero-knowledge encryption ensures patient data remains completely private",
                features: ["End-to-end encryption", "HIPAA compliance", "Zero-knowledge proofs", "Access control"],
                color: "from-purple-500 to-pink-500",
                demo: "/demo/privacy",
              },
              {
                icon: Zap,
                title: "Automated Claims",
                description: "Smart contracts process insurance claims automatically, reducing time by 90%",
                features: ["Instant processing", "Auto-approvals", "Cost reduction", "Real-time updates"],
                color: "from-orange-500 to-red-500",
                demo: "/demo/claims",
              },
              {
                icon: FileCheck,
                title: "Document Management",
                description: "Centralized platform for managing medical documents with full audit trails",
                features: ["Version control", "Digital signatures", "Audit trails", "Batch processing"],
                color: "from-green-500 to-emerald-500",
                demo: "/demo/documents",
              },
              {
                icon: BarChart3,
                title: "Analytics & Reporting",
                description: "Comprehensive insights into fraud patterns, processing times, and system health",
                features: ["Real-time dashboards", "Fraud analytics", "Performance metrics", "Custom reports"],
                color: "from-cyan-500 to-teal-500",
                demo: "/demo/analytics",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={feature.demo}>
                    <Button variant="outline" className="w-full mt-4 group-hover:bg-emerald-50 bg-transparent">
                      Try Demo
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-emerald-100 text-emerald-800">Process Flow</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">How MedChain Secures Healthcare</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our four-step process ensures every medical document is verified, secured, and processed automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Document Upload",
                description: "Healthcare providers securely upload medical documents through our encrypted platform",
                icon: FileCheck,
                color: "from-emerald-500 to-teal-500",
                details: ["Drag & drop interface", "Bulk upload support", "Format validation", "Instant receipt"],
              },
              {
                step: "02",
                title: "AI Verification",
                description:
                  "Advanced AI algorithms analyze document authenticity, detecting fraud with 99.9% accuracy",
                icon: Brain,
                color: "from-teal-500 to-cyan-500",
                details: ["Pattern analysis", "Signature verification", "Content validation", "Risk scoring"],
              },
              {
                step: "03",
                title: "Blockchain Storage",
                description: "Document hash is stored on blockchain, creating an immutable and tamper-proof record",
                icon: Shield,
                color: "from-cyan-500 to-emerald-500",
                details: ["Hash generation", "Smart contract creation", "Immutable storage", "Consensus validation"],
              },
              {
                step: "04",
                title: "Automated Processing",
                description: "Smart contracts automatically trigger insurance claims, approvals, and notifications",
                icon: Zap,
                color: "from-emerald-500 to-teal-500",
                details: ["Auto-claim filing", "Instant approvals", "Real-time notifications", "Payment processing"],
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-bold text-emerald-600 mb-2">STEP {item.step}</div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Trusted by Healthcare Leaders</h2>
            <p className="text-emerald-100 text-lg">Real results from real healthcare organizations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "99.9%", label: "Fraud Detection Accuracy", sublabel: "Industry leading precision" },
              { number: "90%", label: "Faster Processing", sublabel: "Reduced claim processing time" },
              { number: "500+", label: "Healthcare Partners", sublabel: "Hospitals and clinics" },
              { number: "$2.4M", label: "Fraud Prevented", sublabel: "In the last 12 months" },
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-emerald-100 text-lg font-medium mb-1">{stat.label}</div>
                <div className="text-emerald-200 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Ready to Eliminate Medical Fraud?</h2>
              <p className="text-xl text-gray-600">
                Join hundreds of healthcare providers already using MedChain to secure their operations and protect
                patients.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 border-emerald-200 hover:bg-emerald-50 bg-transparent"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Full Demo
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">30-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">Setup in minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">MedChain</span>
              </div>
              <p className="text-gray-400">Securing healthcare with AI and blockchain technology.</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/demo" className="hover:text-white transition-colors">
                    Live Demo
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="hover:text-white transition-colors">
                    API Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/solutions/hospitals" className="hover:text-white transition-colors">
                    Hospitals
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/clinics" className="hover:text-white transition-colors">
                    Clinics
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/insurance" className="hover:text-white transition-colors">
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/patients" className="hover:text-white transition-colors">
                    Patients
                  </Link>
                </li>
                <li>
                  <Link href="/integrations" className="hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">&copy; 2024 MedChain. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
