import { A } from '@solidjs/router';
import { children, type JSXElement } from 'solid-js';

export const Layout = (props: { children: JSXElement }) => {
  const safeChildren = children(() => props.children);
  return (
    <div class="min-h-screen">
      <header class="flex items-center text-gray-50 gap-4 sm:gap-6 lg:gap-10 mb-6 py-4 border-b border-gray-600">
        <A href="/" class="w-[140px] h-[48px]">
          <img src="/assets/banner.png" alt="Sanctum Heroes" loading="eager" />
        </A>
        <HeaderLink href="/hero">HERO</HeaderLink>
        <HeaderLink href="/item">ITEM</HeaderLink>
        <HeaderLink href="/mercenary">MERCENARY</HeaderLink>
      </header>
      <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{safeChildren()}</main>
      <footer class="text-center text-gray-500 text-sm mt-16 pb-10 space-y-2">
        <div>
          <a
            href="https://asukawang.com"
            class="hover:text-amber-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by asukachikaru
          </a>
        </div>
        <div>WarCraft III and all related assets are property of Blizzard Entertainment, Inc.</div>
      </footer>
    </div>
  );
};

const HeaderLink = ({ href, children }: { href: string; children: JSXElement }) => (
  <A href={href} class="text-sm sm:text-base font-serif hover:text-amber-400 transition-colors">
    {children}
  </A>
);
