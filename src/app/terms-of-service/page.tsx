import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
      
      <div className="prose dark:prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
          <p>
            APRATIONAL provides sustainable energy solutions, including solar, battery, heating, cooling, and electrical maintenance services. We reserve the right to modify, suspend or discontinue the service with or without notice at any time and without any liability to you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. User Conduct</h2>
          <p>
            You agree to use the website only for lawful purposes. You agree not to take any action that might compromise the security of the website, render the website inaccessible to others or otherwise cause damage to the website or the Content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p>
            All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of APRATIONAL or its content suppliers and protected by international copyright laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p>
            In no event shall APRATIONAL be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses resulting from the use of or inability to use the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of Australia, without regard to its conflict of law provisions.
          </p>
        </section>
      </div>
      
      <div className="mt-12 pt-8 border-t">
        <Button asChild variant="outline">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}

