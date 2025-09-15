import { A } from '@solidjs/router';
import { children, type JSXElement } from 'solid-js';

export const Layout = (props: { children: JSXElement }) => {
  const safeChildren = children(() => props.children);
  return (
    <div class="h-screen max-w-[960px] mx-auto">
      <header class="flex items-center text-gray-50 gap-10 mb-6 py-4 border-b border-gray-600">
        <A href="/" class="w-[140px]">
          <img src="/assets/banner.png" alt="Sanctum Heroes" class="h-12 w-auto" loading="eager" />
        </A>
        <HeaderLink href="/hero">HERO</HeaderLink>
        <HeaderLink href="/item">ITEM</HeaderLink>
        <HeaderLink href="/mercenary">MERCENARY</HeaderLink>
      </header>
      <main>{safeChildren()}</main>
      <footer class="text-center text-gray-500 text-sm mt-16 pb-10">
        WarCraft III and all related assets are property of Blizzard Entertainment, Inc.
      </footer>
    </div>
  );
};

const HeaderLink = ({ href, children }: { href: string; children: JSXElement }) => (
  <A href={href} class="text-xl font-serif hover:text-amber-400">
    {children}
  </A>
);
