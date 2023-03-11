import { component$ } from "@builder.io/qwik"

export default component$((props: ProjectProps) => {

    return(
        <div class="p-4 w-40 rounded-xl shadow-lg bg-slate-200" >            
        <p class="text-center text-xl font-medium text-slate-700
        ">{props.title}</p>             
        </div>
    );
});

interface ProjectProps {
    title: string    
}