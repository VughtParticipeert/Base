<template>
    <nav class="navigation">
        <section class="logo-container">
            <a href="#">
                <img class="logo" :src="logo.logoUrl" 
                  :title="logo.title"
                  :alt="logo.title"
                >
            </a>
        </section>

        <section :class="{active: menuActive}" class="menu-item-container">
            <ul class="menu">
                <li v-for="item in menuItems" :key="item.node.id" class="menu-item">
                    <a href="#">{{item.node.menu_item}}</a>
                </li>
            </ul>
        </section>

        <button @click="menu" :class="{active: menuActive}" class="menu-button" title="Menu">
            <div class="decoration"></div>
            <div class="decoration"></div>
            <div class="decoration"></div>
        </button>
    </nav>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                menuActive: false,
            };
        },
        computed: {
            logo() {
                const data = this.$page.logo.edges[0].node
                const logoData = {
                    title: data.title,
                    logoUrl: data.logo
                }
                if(logoData){
                    return logoData
                }
            },
            menuItems() {
                const menuItems = this.$page.allMenuItem.edges
                return menuItems
            }
        },
        methods: {
            menu() {
                if (this.menuActive === false) {
                    this.menuActive = true;
                } else if (this.menuActive === true) {
                    this.menuActive = false;
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    $break-small: 40rem;

    ul {
        list-style: none;
    }

    .navigation {
        display: flex;
        background-color: white;
        height: 4rem;

        .logo-container {
            display: flex;
            padding: 0.7rem;

            .logo {
                display: block;
                height: 100%;
                object-fit: contain;
            }
        }

        .menu-item-container {
            display: none;
            margin-left: auto;
            align-items: center;
            overflow: auto;

            &.active {
                display: flex;
                position: fixed;
                top: 4rem;
                z-index: 1;
                background: white;
                height: 100%;
                width: 100%;

                .menu {
                    display: block;
                    width: 100%;
                }
            }

            .menu {
                display: flex;
                height: 100%;

                .menu-item {
                    a {
                        padding: 1rem;
                        display: flex;
                        align-items: center;
                        height: 100%;
                        text-decoration: none;
                        color: black;
                        transition: all 0.2s ease-out;
                        font-size: 2.4em;
                        justify-content: center;

                        @media screen and (min-width: $break-small) {
                            & {
                                font-size: 1em;
                            }
                        }

                        &:hover {
                            background-color: black;
                            color: white;
                        }
                    }
                }
            }

            @media screen and (min-width: $break-small) {
                & {
                    display: flex;
                }
            }
        }

        .menu-button {
            border: none;
            width: 4rem;
            padding: 0.7rem;
            background-color: transparent;
            transition: all 0.4s ease-out;
            cursor: pointer;
            margin-left: auto;

            &:hover {
                background-color: black;
            }

            &:hover .decoration {
                background-color: white;
            }

            .decoration {
                height: 0.4rem;
                background-color: black;
                margin: 0.4rem 0;
                transition: all 0.2s ease-out;

                &:nth-of-type(1) {
                    transform-origin: left;
                }

                &:nth-of-type(3) {
                    transform-origin: left;
                }
            }

            &.active {
                .decoration:nth-of-type(2) {
                    opacity: 0;
                }

                .decoration:nth-of-type(1) {
                    transform-origin: left;
                    transform: rotate(37deg);
                }

                .decoration:nth-of-type(3) {
                    transform-origin: left;
                    transform: rotate(-37deg);
                }
            }

            @media screen and (min-width: $break-small) {
                & {
                    display: none;
                }
            }
        }
    }
</style>