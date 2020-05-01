<script>
    import InstagramIconUrl from '../images/instagram.png';
    import GitHubIconUrl from '../images/github.png';

    const age = new Date().getFullYear() - 1994;
</script>

<style>
    div {
        font-family: fantasy;

        border: 1px solid black;
        border-radius: 16px;
        background-color: var(--background-color);

        padding: 12px;
        height: 80%;
    }

    h1 {
        font-size: 40px;
    }

    img {
        width: 50px;
    }
</style>

<div>
    <h1>Ismagilov Ilshat</h1>
    <h3>Age: {age}</h3>
    <h3>Frontend engineer</h3>
    <a href="https://www.instagram.com/starkylife" target="blank">
        <img src={InstagramIconUrl} alt="instagram logo" />
    </a>
    <a href="https://github.com/StarkyLife" target="blank">
        <img src={GitHubIconUrl} alt="github logo" />
    </a>
</div>
