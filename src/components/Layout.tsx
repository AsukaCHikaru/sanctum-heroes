import { A } from '@solidjs/router';
import { children, type JSXElement } from 'solid-js';

export const Layout = (props: { children: JSXElement }) => {
  const safeChildren = children(() => props.children);
  return (
    <div class="m-2 h-screen max-w-[960px] mx-auto">
      <header class="flex text-gray-50 gap-4 justify-center">
        <A href="/">HOME</A>
        <A href="/hero">HERO</A>
        <A href="/item">ITEM</A>
        <A href="/mercenary">MERCENARY</A>
      </header>
      <main>{safeChildren()}</main>
      <footer class="text-center text-gray-500 text-sm mt-16 pb-10">
        WarCraft III and all related assets are property of Blizzard Entertainment, Inc.
      </footer>
    </div>
  );
};
