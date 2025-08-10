import { Card, CardContent } from "@/components/ui/card"

export function StatsSection() {
  const stats = [
    { value: "99.9%", label: "Fraud Detection Accuracy", color: "text-blue-600" },
    { value: "90%", label: "Processing Time Reduction", color: "text-green-600" },
    { value: "$2.5M", label: "Average Annual Savings", color: "text-purple-600" },
    { value: "500+", label: "Healthcare Partners", color: "text-orange-600" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
