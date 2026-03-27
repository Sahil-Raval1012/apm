import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <section className="bg-slate-900 text-white py-20 md:py-32 relative overflow-hidden">
         <div className="absolute inset-0 bg-blue-600/10 skew-y-3 transform origin-bottom-right"></div>
         <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Lets Talk Energy</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
               Ready to start your project or need maintenance? Our team is here to help.
            </p>
         </div>
      </section>
      
      <section className="py-12 md:py-24 -mt-20">
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-8">
               {/* Contact Info */}
               <div className="lg:col-span-1 space-y-6">
                  <Card className="bg-white dark:bg-slate-900 border-none shadow-xl">
                     <CardContent className="p-8 space-y-8">
                        <div className="flex items-start gap-4">
                           <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary shrink-0">
                              <Phone className="w-5 h-5" />
                           </div>
                           <div>
                              <h3 className="font-bold text-lg mb-1">Call Us</h3>
                              <p className="text-muted-foreground mb-2">Mon-Fri from 8am to 5pm.</p>
                              <a href="tel:+61300123456" className="text-primary font-medium hover:underline">+61 412 391 878</a>
                           </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                           <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary shrink-0">
                              <Mail className="w-5 h-5" />
                           </div>
                           <div>
                              <h3 className="font-bold text-lg mb-1">Email Us</h3>
                              <p className="text-muted-foreground mb-2">We will respond within 24 hours.</p>
                              <a href="mailto:info@apmenergy.com.au" className="text-primary font-medium hover:underline">info@apmenergy.com.au</a>
                           </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                           <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary shrink-0">
                              <MapPin className="w-5 h-5" />
                           </div>
                           <div>
                              <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                              <p className="text-muted-foreground">
                                 Geelong, VIC
                              </p>
                           </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                           <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary shrink-0">
                              <Clock className="w-5 h-5" />
                           </div>
                           <div>
                              <h3 className="font-bold text-lg mb-1">Service Area</h3>
                              <p className="text-muted-foreground">
                                 Servicing all metropolitan and regional areas.
                              </p>
                           </div>
                        </div>
                     </CardContent>
                  </Card>
               </div>
               
               {/* Contact Form */}
               <div className="lg:col-span-2">
                  <Card className="bg-white dark:bg-slate-900 border-none shadow-xl h-full">
                     <CardContent className="p-8 md:p-12">
                        <form className="space-y-6">
                           <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                 <Label htmlFor="first-name">First name</Label>
                                 <Input id="first-name" placeholder="John" />
                              </div>
                              <div className="space-y-2">
                                 <Label htmlFor="last-name">Last name</Label>
                                 <Input id="last-name" placeholder="Doe" />
                              </div>
                           </div>
                           
                           <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                 <Label htmlFor="email">Email</Label>
                                 <Input id="email" type="email" placeholder="john@example.com" />
                              </div>
                              <div className="space-y-2">
                                 <Label htmlFor="phone">Phone</Label>
                                 <Input id="phone" type="tel" placeholder="+61 400 000 000" />
                              </div>
                           </div>
                           
                           <div className="space-y-2">
                              <Label htmlFor="service">Service Interested In</Label>
                              <select id="service" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                 <option value="">Select a service...</option>
                                 <option value="solar">Solar and Battery</option>
                                 <option value="maintenance">Maintenance</option>
                                 <option value="recycling">Responsible Recycling</option>
                                 <option value="other">Other</option>
                              </select>
                           </div>
                           
                           <div className="space-y-2">
                              <Label htmlFor="message">Message</Label>
                              <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[150px]" />
                           </div>
                           
                           <Button type="submit" size="lg" className="w-full md:w-auto">Send Message</Button>
                        </form>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </div>
      </section>
      
  
    </div>
  );
}
