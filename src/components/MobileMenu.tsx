import { MenuItem } from '@/types';

/**
 * Components
 */
import { Button } from '@/components/ui/button';

/**
 * Types
 */
type MobileMenuProps = {
  navMenu: MenuItem[];
};

function MobileMenu({ navMenu }: MobileMenuProps) {
  return (
    <div>
      <ul>
        {navMenu.map(({ href, label, submenu }, index) => (
          <li key={index}>
            <Button
              asChild
              variant='ghost'
            >
              <a href={href}>{label}</a>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileMenu;
