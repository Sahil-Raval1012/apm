// import { Button } from "@/components/ui/button";
// import { Lightbulb, Zap, Eye, CheckCircle2, ArrowRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// export default function LightingPage() {
//   return (
//     <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
//       {/* Hero Section */}
//       <section className="relative py-24 md:py-32 bg-slate-900 text-white overflow-hidden">
//         <div className="absolute inset-0 bg-black/50 z-10"></div>
//         <div className="absolute inset-0 z-0">
//           <Image 
//             src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2000&auto=format&fit=crop" 
//             alt="Modern Lighting" 
//             fill 
//             className="object-cover opacity-40"
//           />
//         </div>
        
//         <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
//           <div className="inline-flex items-center justify-center p-3 mb-8 rounded-full bg-primary/20 text-white backdrop-blur-md border border-white/10">
//              <Lightbulb className="w-6 h-6" />
//           </div>
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
//             Lighting Solutions
//           </h1>
//           <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
//             Transform your space with smart, energy-efficient LED lighting solutions. Enhance ambiance, improve productivity, and save energy.
//           </p>
//           <div className="flex justify-center gap-4">
//             <Button asChild size="lg" className="rounded-full px-8 h-12 text-lg bg-primary hover:bg-primary/90 border-none">
//                <Link href="/contact">Light Up Your Space</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="py-20 -mt-10 relative z-30">
//         <div className="container mx-auto px-4 md:px-6">
//            <div className="grid md:grid-cols-3 gap-8">
//               <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300">
//                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
//                     <Zap className="w-7 h-7 text-primary" />
//                  </div>
//                  <h3 className="text-xl font-bold mb-3">LED Upgrades</h3>
//                  <p className="text-muted-foreground leading-relaxed">Replace outdated halogen or incandescent bulbs with modern LEDs. Save up to 80% on lighting costs instantly.</p>
//               </div>
              
//               <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300">
//                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
//                     <Lightbulb className="w-7 h-7 text-primary" />
//                  </div>
//                  <h3 className="text-xl font-bold mb-3">Smart Control</h3>
//                  <p className="text-muted-foreground leading-relaxed">App-controlled dimming, scheduling, and color changing to suit your mood or time of day.</p>
//               </div>
              
//               <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300">
//                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
//                     <Eye className="w-7 h-7 text-primary" />
//                  </div>
//                  <h3 className="text-xl font-bold mb-3">Security Lighting</h3>
//                  <p className="text-muted-foreground leading-relaxed">Motion sensor floodlights and automated pathways to keep your property safe and visible.</p>
//               </div>
//            </div>
//         </div>
//       </section>

//       {/* Details Section */}
//       <section className="py-20 bg-white dark:bg-slate-900">
//          <div className="container mx-auto px-4 md:px-6">
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//                <div>
//                   <h2 className="text-3xl md:text-4xl font-bold mb-6">Commercial & Residential</h2>
//                   <p className="text-lg text-muted-foreground mb-8">
//                     Lighting sets the tone for your entire property. We design and install systems that are beautiful, functional, and cost-effective.
//                   </p>
//                   <ul className="space-y-4">
//                      {[
//                         "High-bay lighting for warehouses",
//                         "Feature lighting for retail spaces",
//                         "Garden and landscape illumination",
//                         "Emergency and exit lighting compliance",
//                         "Dimmer switch installation"
//                      ].map((item, i) => (
//                         <li key={i} className="flex items-start gap-3">
//                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
//                            <span className="font-medium">{item}</span>
//                         </li>
//                      ))}
//                   </ul>
//                </div>
//                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
//                   <Image 
//                     src="https://images.unsplash.com/photo-1492539161849-b2b18e79c85f?q=80&w=2070&auto=format&fit=crop"
//                     alt="Smart Lighting"
//                     fill
//                     className="object-cover"
//                   />
//                </div>
//             </div>
//          </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
//          <div className="absolute inset-0 bg-primary/10 z-0"></div>
//          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
//             <h2 className="text-3xl md:text-5xl font-bold mb-6">Brighten Your Future</h2>
//             <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
//                Contact us for a lighting audit or design consultation today.
//             </p>
//             <div className="flex justify-center">
//                <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg bg-white text-slate-900 hover:bg-slate-100">
//                   <Link href="/contact">Request Audit <ArrowRight className="ml-2 h-5 w-5" /></Link>
//                </Button>
//             </div>
//          </div>
//       </section>
//     </div>
//   );
// }
