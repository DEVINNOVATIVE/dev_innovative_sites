
import { ContactUsForm } from "@/components/contact";
import { PageHeader } from "@/components/PageHeader";
export default function ContactUs() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader title="Contact Us" />
      <ContactUsForm/>
    </main>
  );
}
