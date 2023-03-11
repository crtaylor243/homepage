import { component$, Slot } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Header from '~/components/header/header';
import Menu from '~/components/menu/menu';
import OnThisPage from '~/components/on-this-page/on-this-page';

export default component$(() => {


  return (
    <>
      <Header/>      
    </>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title} - Professional`,
  };
};
