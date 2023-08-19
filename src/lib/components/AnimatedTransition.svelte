<script lang="ts">
    import { page } from "$app/stores";


    const duration = 300;

    function slideIn(node: HTMLElement, { delay = 0, duration = 300 }) {
        const style = getComputedStyle(node);
        const opacity = +style.opacity;
        const transform = style.transform === 'none' ? '' : style.transform;

        return {
            delay,
            duration,
            css: (t:number) => `
                transform: ${transform} translateX(${t * 100}%);
                opacity: ${t * opacity}
            `,
        };
    }

    function slideOut(node: HTMLElement, { delay = 0, duration = 300 }) {
        const style = getComputedStyle(node);
        const opacity = +style.opacity;
        const transform = style.transform === 'none' ? '' : style.transform;

        return {
            delay,
            duration,
            css: (t:number) => `
                transform: ${transform} translateX(${(1 - t) * 100}%);
                opacity: ${(1 - t) * opacity}
            `,
        };
    }
</script>

{#key $page.url.pathname}
<div class="page-container">
    <div class="page" in:slideIn={{ duration }} out:slideOut={{ duration }}>
        <slot></slot>
    </div>
</div>
{/key}

<style lang="scss">
    .page-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
</style>