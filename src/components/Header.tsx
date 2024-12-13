/**
 * Components
 */
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Logo from '@/components/Logo';
import MobileMenu from '@/components/MobileMenu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

/**
 * Assets
 */
import { Menu } from 'lucide-react';

/**
 * Constants
 */
import { navMenu } from '@/constants';

function Header() {
  return (
    <header className='h-16 grid grid-cols-1 items-center md:h-20 lg:h-24'>
      <div className='container flex justify-between'>
        <Logo variant='icon' />

        <NavigationMenu className='max-lg:hidden mx-auto'>
          <NavigationMenuList>
            {navMenu.map(({ href, label, submenu }, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={href}
                  className={navigationMenuTriggerStyle()}
                >
                  {label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='lg:hidden'
            >
              <Menu />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align='end'
            className='bg-background/50 backdrop-blur-3xl border-foreground/5 border-x-0 border-b-0 rounded-lg overflow-hidden'
          >
            <MobileMenu navMenu={navMenu} />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}

export default Header;
