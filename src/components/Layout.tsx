import { A } from '@solidjs/router';
import { children, type JSXElement } from 'solid-js';

export const Layout = (props: { children: JSXElement }) => {
  const safeChildren = children(() => props.children);
  return (
    <div class="h-screen max-w-[960px] mx-auto">
      <header class="flex text-gray-50 gap-10 justify-center mb-6 py-4 border-b border-gray-600">
        <HeaderLink href="/">HOME</HeaderLink>
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
