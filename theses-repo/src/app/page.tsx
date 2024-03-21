import { Button } from "@/components/button";
import 'material-icons/iconfont/filled.css';
import 'material-icons/iconfont/outlined.css';

export default function Home() {
  return (
    <main className="dark:bg-dark-surface bg-surface">
      <div className="inline-flex items-center justify-center whitespace-nowrap gap-8 p-8">
        <Button iconPosition="left" icon="design_services">
          Button Primary
        </Button>
        <Button variant="error" iconPosition="right" icon="delete_forever">
          Button Error
          </Button>
        <Button variant="textDefault" iconPosition="left" icon="design_services">
          Button Text Primary
        </Button>
        <Button variant="textError">Button Text Error</Button>
      </div>
    </main>
  );
}
