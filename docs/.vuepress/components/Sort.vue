<template>
    <div class="homeNavContainer">
        <p class="description">
            Kevin的私人博客
        </p>
        <div>
            <ul>
                <li>
                    <router-link :to="{path:'/Python/装饰器'}">Python</router-link>
                </li>
                <li>
                    <router-link :to="{path:'/Django/Web框架的本质（重要+理解）'}">Django</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {};
</script>

<style>
    .homeNavContainer {
        max-width: 740px;
        margin: 0 auto;
    }

    .description {
        text-align: center;
        font-size: 1.6rem;
        line-height: 1.3;
        color: #6a8bad;
    }

    .homeNavContainer ul {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        list-style: none;
    }

    .homeNavContainer li {
        width: 330px;
        height: 55px;
        display: flex;
        align-items: center;
        padding-left: 1.3rem;
        box-sizing: border-box;
        border-radius: .2rem;
        margin: .5rem;
        border: 1px solid #eee;
    }

    .homeNavContainer li a {
        font-size: 1.2rem;
        color: #389d70;
        font-weight: 700;
        margin-bottom: .3rem;
        outline: none;
        display: block;
    }

    .homeNavContainer li a:hover {
        text-decoration: none;
    }
</style>