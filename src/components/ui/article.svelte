<script>
    export let title;
    /**
     * @type {('default' | 'available')}
     */
    export let width = 'default';
</script>

<style>
    .available {
        width: 100%;
    }

    .default {
        max-width: 600px;
    }

    h1 {
        text-align: center;
    }
</style>

<article class={width}>
    {#if title}
        <h1>{title}</h1>
    {/if}
    <slot />
</article>
