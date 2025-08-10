import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Stethoscope, Building2, Play } from "lucide-react"

export function DemoSection() {
  const demos = [
    {
      icon: User,
      title: "Patient Portal",
      description:
        "Experience document management, claim tracking, and secure health record access from a patient's perspective.",
      credentials: "patient@demo.com / demo123",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Stethoscope,
      title: "Provider Dashboard",
      description:
        "Explore document processing, fraud detection alerts, and patient management tools for healthcare providers.",
      credentials: "doctor@demo.com / demo123",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Building2,
      title: "Insurer Platform",
      description:
        "Discover claims processing automation, fraud analytics, and risk assessment tools for insurance companies.",
      credentials: "insurer@demo.com / demo123",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ]

  return (
    <section id="demos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interactive Platform Demos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience our platform from different user perspectives. Try our interactive demos with pre-configured
            accounts to see how each role benefits from our solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <Card
              key={index}
              className={`h-full ${demo.borderColor} border-2 hover:shadow-xl transition-all duration-300`}
            >
              <CardHeader className={`${demo.bgColor} rounded-t-lg`}>
                <div className="flex items-center justify-between mb-3">
                  <demo.icon className={`w-10 h-10 ${demo.color}`} />
                  <Badge className={`${demo.color} bg-white`}>Live Demo</Badge>
                </div>
                <CardTitle className="text-xl">{demo.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{demo.description}</p>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-500 mb-1">Demo Credentials:</p>
                  <code className="text-sm font-mono text-gray-800">{demo.credentials}</code>
                </div>

                <Link href={`/demo/${demo.title.toLowerCase().split(" ")[0]}`}>
                  <Button className={`w-full ${demo.color.replace("text-", "bg-")} hover:opacity-90`}>
                    <Play className="w-4 h-4 mr-2" />
                    Try {demo.title}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ready to see the full platform in action?</p>
          <Link href="/auth/signup">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
            >
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
