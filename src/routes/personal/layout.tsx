import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Header from '~/components/header/header';

export default component$(() => {


  return (
    <>
      <Header/>      
    </>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title} - Personal`,
  };
};
