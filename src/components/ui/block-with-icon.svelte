<script>
    export let imageSrc, name;
</script>

<style>
    .main {
        text-align: center;
        padding: 4px;
    }

    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 80px;
        height: 80px;
    }

    img {
        width: 100%;
    }

    h3 {
        font-family: fantasy;
    }
</style>

<div class="main">
    <div class="image-container">
        <img src={imageSrc} alt={name} />
    </div>
    <h3>{name}</h3>
</div>
