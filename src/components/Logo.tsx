/**
 * Assets
 */
import { favicon, logo } from '@/assets';

type LogoProps = {
  variant?: 'default' | 'icon';
};

function Logo({ variant = 'default' }: LogoProps) {
  return (
    <a href=''>
      {variant == 'default' && (
        <img
          src={logo}
          alt='Analytix Logo'
          width={150}
          height={31}
        />
      )}
      {variant == 'icon' && (
        <img
          src={favicon}
          alt='Analytix Logo'
          width={32}
          height={32}
        />
      )}
    </a>
  );
}

export default Logo;
