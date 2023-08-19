<script lang="ts">
    import { fly } from "svelte/transition";

    export let counter = 0;

    const increment = () => {
        counter++;
    };

    const decrement = () => {
        counter--;
    };
</script>


<div class="counter-container">
    <button class="increment" on:click={increment}>
        +
    </button>
    <div class="counter">        
    {#key counter}
        <span 
        class="count"
        in:fly={{y:-50, duration: 300}}
        out:fly={{y:50, duration: 300}}
        >
        {counter}
        </span>
    {/key}
    </div>
    <button class="decrement" on:click={decrement}>
        -   
    </button>
</div>

<style lang="scss">
    .counter-container {
        @apply inline-flex flex-row relative;

        button {
            @apply w-8 flex relative transition-all;
            @apply justify-center text-accent-content items-center;
            @apply rounded-full text-xl font-bold;

            &:before {
                content: "";	
                @apply w-8 h-full block transition-all;
                @apply rounded-full;
                z-index: -3;
                @apply bg-accent absolute left-0 bottom-0;
            }

            &:after {
                content: "";	
                @apply w-8 h-full block transition-all;
                @apply rounded-full;
                z-index: -4;
                @apply bg-accent-focus absolute left-0 -bottom-1;
            }

            &.increment {
                @apply rounded-r-none;
                &:after {
                    @apply rounded-r-none;
                }
                &:before {
                    @apply rounded-r-none;
                }
            }

            &.decrement {
                @apply rounded-l-none;
                &:after {
                    @apply rounded-l-none;
                }
                &:before {
                    @apply rounded-l-none;
                }
            }

            &:active {
                @apply transform translate-y-1;
                z-index: 1;
                &:after {
                    @apply bottom-0;
                }
            }
        }

        .counter {
            @apply inline-block relative;
            @apply text-center;
            @apply bg-neutral text-neutral-content w-10;
            @apply font-bold text-xl overflow-hidden;

            .count {
                @apply absolute inset-0;
            }
        }

        &:after {
            content: '';
            @apply h-full w-10 left-8 -bottom-1;
            position:absolute;
            @apply bg-black;
            z-index: -1;
        }
    }
</style>