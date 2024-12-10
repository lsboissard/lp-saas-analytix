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

/**
 * Assets
 */
import { Menu } from 'lucide-react';

function Header() {
  return (
    <header className='h-16 grid grid-cols-1 items-center'>
      <div className='container flex justify-between'>
        <Logo variant='icon' />
        <Button
          variant='outline'
          size='icon'
          className='lg:hidden'
        >
          <Menu />
        </Button>
      </div>
    </header>
  );
}

export default Header;
