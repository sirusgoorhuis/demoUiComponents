<template >
        <div class="content">


            <div class="contentBox" @scroll="scrollBar()">

                <div class="item">
                    <h1 class="title">@openremote/or-asset-tree</h1>
                    <p class="information">Web Component for displaying an asset tree. This component requires an OpenRemote Manager to retrieve, save and query assets.</p>
                    <h2 class="subtitle">Install</h2>
                    <p class="code">
                        npm i @openremote/or-asset-list <br>
                        yarn add @openremote/or-asset-list
                    </p>
                    <h2 class="subtitle">Usage</h2>
                    <p class="information">For a full list of properties, methods and options refer to the TypeDoc generated documentation.</p>
                    <h2 class="subtitle">Supported Browsers</h2>
                    <p class="information">The last 2 versions of all modern browsers are supported, including Chrome, Safari, Opera, Firefox, Edge. In addition, Internet Explorer 11 is also supported.</p>
                </div>

                <div class="item">
                    <h1 class="title">@openremote/or-asset-tree</h1>
                    <p class="information">Web Component for displaying an asset tree. This component requires an OpenRemote Manager to retrieve, save and query assets.</p>
                    <h2 class="subtitle">Install</h2>
                    <p class="code">
                        npm i @openremote/or-asset-list <br>
                        yarn add @openremote/or-asset-list
                    </p>
                    <h2 class="subtitle">Usage</h2>
                    <p class="information">For a full list of properties, methods and options refer to the TypeDoc generated documentation.</p>
                    <h2 class="subtitle">Supported Browsers</h2>
                    <p class="information">The last 2 versions of all modern browsers are supported, including Chrome, Safari, Opera, Firefox, Edge. In addition, Internet Explorer 11 is also supported.</p>
                </div>
            </div>

            <div class="progressIndicator">
                <div class="progressContainer">
                    <div class="progressBar" id="bar"></div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'ContentBox',
    methods: {
        scrollBar() {
            var scrollCheck = document.getElementsByClassName('contentBox');
            var winScroll = scrollCheck[0].scrollTop || document.documentElement.scrollTop;
            var height = scrollCheck[0].scrollHeight - scrollCheck[0].clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("bar").style.height = scrolled + "%";
        },
        created () {
            window.addEventListener('scroll', this.scrollBar);
        },
         mounted() {
            window.addEventListener('scroll', this.scrollBar);
        },
        destroyed () {
            window.removeEventListener('scroll', this.scrollBar);
        }
    },
    data: {

    }
}
</script>

<style scoped>
    ::-webkit-scrollbar {
        display: none;
    }
    body {
        padding: 0;
        margin: 0;
        background-color: #1f2224;
        position: fixed;
    }
    .content {
        float: right;
        margin: 0;
        padding: 0;
        width: 75vw;
        height: 100vh;
        z-index: 0;
        position: relative;
    }
    .navigationBar {
        margin: 0;
        padding: 0;
        width: 25vw;
        height: 100vh;
        float: left;
        box-shadow: 7px 0 30px 0 rgba(0, 0, 0, 0.5);
        background-color: #1c1c1c;
        position: relative;
    }
    .contentBox {
        width: 70vw;
        height: 100vh;
        background-color: #1f2224;
        position: relative;
        float: left;
        overflow-y: scroll;
    }
    .progressIndicator {
        width: 5vw;
        height: 100vh;
        position: relative;
        float: left;
        background-color: #1f2224;
    }
    .progressContainer {
        width: 0.3vw;
        height: 90vh;
        background-color: #519d36;
        margin-left: 2.85vw;
    }
    .progressBar {
        width: 0.3vw;
        margin-top: 5vh;
        margin-bottom: 5vh;
        height: 0%;
        max-height: 90vh;
        background-color: #c4d42c;
        position: relative;
    }
    .item {
        width: auto;
        height: auto;
        padding-bottom: 2vw;
        overflow: hidden;
    }
    #imageHolder {
        padding-top: 6vh;
        padding-left: 6vh;
        float: left;
        width: 15vw;
        height: auto;
    }
    #logo {
        width: inherit;
        height: inherit;
    }
    .menu {
        position: relative;
        width: 21vw;
        float: left;
        text-align: left;
        padding-left: 4vw;
        list-style-type: none;
        color: white;
    }
    .menuItemHeaderFirst {
        padding-top: 0;
        font-size: 1vw;
    }
    .menuItemHeader {
        font-family: Arial, Helvetica, sans-serif bold;
        padding-top: 1.5vw;
        font-size: 1vw;
    }
    .menuItem {
        padding-left: 0;
        font-size: 1vw;
        padding-left: 1vw;
        padding-bottom: 1vw;
    }
    .title {
        margin-top: 0;
        color: white;
        font-size: 4vw;
        float: left;
        margin-left: 5vw;
        margin-top: 2vw;
        border-bottom: 5px solid #c4d42c;
        position: static;
        text-align: left;
        }
    .information {
        margin-top: 0;
        padding-top: 0;
        float: left;
        margin-left: 5vw;
        color: white;
        font-size: 1vw;
        max-width: 50vw;
        text-align: left;
        position: static;
        width: 70vw;
    }
    .subtitle {
        float: left;
        margin-left: 5vw;
        position: static;
        text-align: left;
        width: 70vw;
        color: white;
        font-size: 2vw;
    }
    .code {
        margin-top: 0;
        padding-top: 0;
        float: left;
        margin-left: 5vw;
        text-align: left;
        color: white;
        font-size: 1vw;
        font-family: monospace;
        padding: 2vw;
        background-color: #383838;
        border-radius: 1vw;
    }
</style>