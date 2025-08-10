import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function CTASection() {
  const benefits = [
    "99.9% fraud detection accuracy",
    "90% reduction in processing time",
    "HIPAA compliant and secure",
    "24/7 customer support",
    "Easy integration with existing systems",
    "30-day money-back guarantee",
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of healthcare organizations already using MedSecure AI to eliminate fraud and streamline
              their operations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-left">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                  Start Free 30-Day Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8 bg-transparent">
                  Schedule Demo
                </Button>
              </Link>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              No credit card required • Setup in under 5 minutes • Cancel anytime
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
