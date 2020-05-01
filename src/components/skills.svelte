<script>
    import Article from './ui/article';
    import BlockWithIcon from './ui/block-with-icon';
    import Javascript from '../images/javascript.jpeg';
    import Haskell from '../images/haskell.png';
    import React from '../images/react.png';
    import Redux from '../images/redux.png';

    const skills = [
        {
            name: 'Javascript',
            imageSrc: Javascript,
            children: [
                { name: 'React', imageSrc: React },
                { name: 'Redux', imageSrc: Redux },
            ],
        },
        {
            name: 'Haskell',
            imageSrc: Haskell,
        },
    ];
</script>

<style>
    .main-level {
        display: flex;
    }

    .block-level {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .child-level {
        display: flex;
        flex-wrap: wrap;

        padding: 4px;
    }
</style>

<Article title="Навыки" width="available">
    <div class="main-level">
        {#each skills as skill}
            <div class="block-level">
                <BlockWithIcon name={skill.name} imageSrc={skill.imageSrc} />
                {#if skill.children}
                    <div class="child-level">
                        {#each skill.children as child}
                            <BlockWithIcon name={child.name} imageSrc={child.imageSrc} />
                        {/each}
                    </div>
                {/if}
            </div>
        {/each}
    </div>
</Article>
