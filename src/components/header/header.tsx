import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <header>
      <a class="logo" href="/">
        <img  src="/profile.svg" class="mx-4 h-16"></img>
      </a>      
    </header>
  );
});
