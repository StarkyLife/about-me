<script>
    import Header from './header';
    import Skills from './skills';
    import About from './about';
</script>

<style>
    @import 'sanitize.css';
    @import '../defaults.css';

    section {
        display: flex;
        justify-content: center;
    }
</style>

<main>
    <Header />
    <section>
        <About />
    </section>
    <section>
        <Skills />
    </section>
</main>
