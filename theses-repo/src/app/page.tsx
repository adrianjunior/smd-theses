import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";

export default function Home() {
  return (
    <main className="dark:bg-dark-surface bg-surface">
      <div className="inline-flex items-center justify-center whitespace-nowrap gap-8 p-8">
        <Button iconPosition="left" icon="design_services">
          Button Primary
        </Button>
        <Button variant="error" iconPosition="left" icon="delete_forever">
          Button Error
          </Button>
        <Button variant="textPrimary" iconPosition="left" icon="design_services">
          Button Text Primary
        </Button>
        <Button variant="textError" iconPosition="left" icon="delete_forever">
          Button Text Error
          </Button>
        <IconButton icon="design_services"></IconButton>
        <IconButton icon="close" variant="error"></IconButton>
      </div>
    </main>
  );
}
