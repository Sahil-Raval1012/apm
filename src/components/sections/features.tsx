import { ShieldCheck, Leaf, Zap, Award, Clock, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Fully qualified professionals ensuring safety and compliance with all Australian standards.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description: "Dedicated to reducing carbon footprints with sustainable energy technologies.",
  },
  {
    icon: Zap,
    title: "Latest Technology",
    description: "We use cutting-edge equipment and smart systems for maximum efficiency.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Premium materials and workmanship backed by comprehensive warranties.",
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "Reliable scheduling and efficient project completion to respect your time.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Personalized solutions tailored to your specific energy needs and budget.",
  },
];

export function Features() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Why Choose APRATIONAL?
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine industry expertise with a passion for sustainability to deliver results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-6">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

