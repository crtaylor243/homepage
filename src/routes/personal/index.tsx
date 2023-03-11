import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Project from '~/components/project/project';

export default component$(() => {
  return (
    <div class="flex flex-col grow">          
      <div class="flex justify-center gap-4">
          <a href="/personal"><Project title='Personal'></Project></a>
          <a href="/professional"><Project title='Professional'></Project></a>
      </div>

    </div>
  );
});

export const head: DocumentHead = {
  title: 'Ryan Taylor',
};
