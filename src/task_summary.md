
I have removed the "Shop" link from both the desktop header and the mobile menu (hamburger menu).

1.  **Desktop Header (`src/components/Navigation.tsx`)**:
    *   Removed ` { name: 'Shop', href: '#shop' }` from `navLinks`.

2.  **Mobile Menu (`src/components/FullScreenMenu.tsx`)**:
    *   Removed `{ name: 'SHOP', number: '04', href: '#shop' }` from `menuLinks`.
    *   Updated the number for "CONTACT" from `05` to `04` to maintain the sequence.

These changes ensure the "Shop" option no longer appears in the site navigation.
