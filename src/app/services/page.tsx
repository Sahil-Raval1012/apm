import Link from "next/link";
import { Sun, Battery, Thermometer, Droplets, Lightbulb, Wrench, Recycle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const services = [
  {
    title: "Solar and Battery",
    icon: Sun,
    href: "/services/solar-and-battery",
    description: "Harness the power of the sun with advanced PV systems and smart storage solutions to reduce energy costs and independence.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2064&auto=format&fit=crop"
  },
  {
    title: "Heating & Cooling",
    icon: Thermometer,
    href: "/services/heating-and-cooling",
    description: "Efficient climate control systems including split systems and ducted air conditioning for year-round comfort.",
    image: "https://images.unsplash.com/photo-1565151443833-29bf2ba5dd8d?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Hot Water",
    icon: Droplets,
    href: "/services/hot-water",
    description: "Next-generation heat pumps and reliable hot water systems designed for maximum efficiency and savings.",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Lighting",
    icon: Lightbulb,
    href: "/services/lighting",
    description: "Modern, energy-efficient LED lighting upgrades for homes and businesses to brighten your space for less.",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Maintenance",
    icon: Wrench,
    href: "/services/maintenance",
    description: "Comprehensive electrical maintenance and safety checks to keep your systems running smoothly and safely.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Responsible Recycling",
    icon: Recycle,
    href: "/services/responsible-recycling",
    description: "Eco-friendly disposal and recycling services for old solar panels, batteries, and electrical equipment.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2000&auto=format&fit=crop"
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive energy and electrical solutions tailored for sustainability and efficiency.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                <CardContent className="flex-1 p-6 bg-white dark:bg-slate-900 flex flex-col justify-between">
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                    <Link href={service.href} className="flex items-center justify-center">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 p-8 md:p-12 bg-primary rounded-3xl text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
                We understand that every property is unique. Contact our team for a tailored assessment and quote.
              </p>
              <Button asChild size="lg" variant="secondary" className="font-bold text-primary">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

