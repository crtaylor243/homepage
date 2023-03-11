import { component$, useStyles$ } from "@builder.io/qwik"
import styles from './avatar.css?inline';

export default component$(() => {
    useStyles$(styles)

    return (
        <div class="flex flex-col gap-2 mb-4">            
            <img  src="/public/profile.svg" class="h-64"></img>
            <h1 class="font-sans text-4xl font-medium text-center">Ryan Taylor</h1>
            
        </div>
    );
})