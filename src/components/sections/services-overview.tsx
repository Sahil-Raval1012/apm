import Link from "next/link";
import { ArrowUpRight, Sun, Battery, Thermometer, Droplets, Lightbulb, Wrench, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const services = [
  {
    title: "Solar and Battery",
    icon: Sun,
    href: "/services/solar-and-battery",
    description: "Harness the power of the sun with advanced PV systems and smart storage.",
    className: "md:col-span-2 md:row-span-2",
    variant: "primary",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2064&auto=format&fit=crop"
  },
 
  {
    title: "Maintenance",
    icon: Wrench,
    href: "/services/maintenance",
    description: "Proactive electrical care.",
    className: "md:col-span-2 md:row-span-1",
    variant: "default",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Responsible Recycling",
    icon: Recycle,
    href: "/services/responsible-recycling",
    description: "Eco-friendly disposal services.",
    className: "md:col-span-2 md:row-span-1",
    variant: "accent",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2000&auto=format&fit=crop"
  },
];

export function ServicesOverview() {
  return (
    <section className="py-12 sm:py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Comprehensive Energy Solutions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              We integrate modern technology with sustainable practices to deliver reliable, efficient, and eco-friendly services for your property.
            </p>
          </div>
          <Button asChild variant="ghost" className="group pl-0 md:pl-4 self-start md:self-auto">
            <Link href="/services">
              View All Services <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)] md:auto-rows-[minmax(240px,auto)]">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-none ${service.className}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <CardHeader className="p-0">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white/10 text-white backdrop-blur-sm border border-white/20">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-bold text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                  <p className="text-sm md:text-base text-gray-200">
                    {service.description}
                  </p>
                </CardContent>
              </div>
              
              {/* Hover Effect Overlay Link */}
              <Link href={service.href} className="absolute inset-0 z-20 focus:outline-none">
                <span className="sr-only">View {service.title}</span>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
