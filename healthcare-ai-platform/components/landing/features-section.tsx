import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Shield, Zap, Users, BarChart3, FileCheck, Clock, Globe } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Document Verification",
      description:
        "Advanced machine learning algorithms analyze documents for authenticity, detecting even sophisticated forgeries with 99.9% accuracy.",
      badge: "Core Feature",
      color: "text-blue-600",
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description:
        "Immutable document storage on blockchain ensures data integrity and creates an unalterable audit trail for all transactions.",
      badge: "Security",
      color: "text-green-600",
    },
    {
      icon: Zap,
      title: "Smart Contract Automation",
      description:
        "Automated claim processing through smart contracts reduces manual work and eliminates human error in insurance workflows.",
      badge: "Automation",
      color: "text-purple-600",
    },
    {
      icon: Users,
      title: "Multi-Role Dashboards",
      description:
        "Specialized interfaces for patients, healthcare providers, and insurers with role-specific features and permissions.",
      badge: "User Experience",
      color: "text-orange-600",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Comprehensive fraud detection metrics, performance analytics, and business intelligence dashboards.",
      badge: "Analytics",
      color: "text-red-600",
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description:
        "Built-in HIPAA compliance, audit trails, and regulatory reporting to meet healthcare industry standards.",
      badge: "Compliance",
      color: "text-indigo-600",
    },
    {
      icon: Clock,
      title: "Instant Processing",
      description: "Real-time document verification and claim processing with results delivered in seconds, not days.",
      badge: "Performance",
      color: "text-teal-600",
    },
    {
      icon: Globe,
      title: "Global Integration",
      description: "Seamless integration with existing healthcare systems, EHRs, and insurance platforms worldwide.",
      badge: "Integration",
      color: "text-pink-600",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Healthcare Security
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform combines cutting-edge AI, blockchain technology, and smart automation to
            revolutionize healthcare document management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
