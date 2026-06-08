import { BlogView } from "@/components/blog/blog-view";
import { PageHeader } from "@/components/PageHeader";
export default function Blog() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader title="Our Blog" />
      <BlogView/>
     
    </main>
  );
}
