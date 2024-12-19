import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

function setCookie(name: string, value: string, days: number = 365): void {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function ThemeToggleButton() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = getCookie('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Caso não haja cookie, defina um padrão. Aqui supomos tema claro.
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      setCookie('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      setCookie('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <Button
      variant='ghost'
      onClick={toggleTheme}
      className='px-3 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
    >
      {isDark ? (
        <div className=''>
          <Sun />
        </div>
      ) : (
        <div className=''>
          <Moon />
        </div>
      )}
    </Button>
  );
}

export default ThemeToggleButton;
