import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Globe } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Driven by Innovation. <br />
              <span className="text-primary">Committed to Sustainability.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              APRATIONAL is a leader in modern energy solutions. We combine technical expertise with a passion for the environment to power a brighter tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Creative Story Section - Asymmetric Layout */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full -z-10"></div>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To accelerate the transition to sustainable energy by providing accessible, efficient, and high-quality electrical and climate solutions for everyone.
                  </p>
                  <div className="h-px w-20 bg-primary"></div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                  <p className="text-muted-foreground">
                    A world where every home and business is energy-independent, comfortable, and environmentally responsible.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose APRATIONAL?</h2>
              <p className="text-lg text-muted-foreground">
                We aren't just electricians; we are energy partners. From the first consultation to long-term maintenance, we ensure your systems are optimized for performance and savings.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Expert Team</span>
                    <span className="text-muted-foreground text-sm">Licensed, insured, and continuously trained professionals.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Quality Guaranteed</span>
                    <span className="text-muted-foreground text-sm">We use only top-tier products and stand by our workmanship.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Customer Centric</span>
                    <span className="text-muted-foreground text-sm">Transparent pricing, clear communication, and reliable service.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Values Grid */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-md bg-white dark:bg-slate-950">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl">Local Experts</h3>
                <p className="text-sm text-muted-foreground">Deeply rooted in the community with local knowledge.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-white dark:bg-slate-950">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl">Certified</h3>
                <p className="text-sm text-muted-foreground">Fully licensed and accredited for all services.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-white dark:bg-slate-950">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl">Sustainable</h3>
                <p className="text-sm text-muted-foreground">Focus on eco-friendly and efficient solutions.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-white dark:bg-slate-950">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl">Reliable</h3>
                <p className="text-sm text-muted-foreground">Prompt service and ongoing support you can trust.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-20 container mx-auto px-4 md:px-6 text-center">
        <div className="bg-primary rounded-3xl p-10 md:p-16 text-primary-foreground relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/50 to-transparent mix-blend-overlay"></div>
           <div className="relative z-10">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work with us?</h2>
             <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
               Contact us today to discuss your project requirements.
             </p>
             <Button asChild size="lg" variant="secondary" className="text-primary font-bold">
               <Link href="/contact">Get in Touch</Link>
             </Button>
           </div>
        </div>
      </section>
    </div>
  );
}

