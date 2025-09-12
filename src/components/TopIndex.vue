<template><!--导航栏Top Index-->
    <div class="padding1 bg-green">
        <div class="container">
            <img class="pp1" src="../img/hbfu2.png"><!--尾页右下角图片-->
            <a class="logo">
                <span>河金在保定</span>
            </a>
            <div>
                <ul class="table1">
                    <li class="item">
                        <router-link to="/" class="link">首页</router-link>
                    </li>
                    <li class="item">
                        <router-link to="/introduction" class="link">简介</router-link>
                    </li>
                    <li class="item">
                        <router-link to="/view" class="link">风景名胜</router-link>
                    </li>
                    <li class="item">
                        <router-link to="/food" class="link">美食特色</router-link>
                    </li>
                    <li class="item">
                        <router-link to="/last" class="link">在线调查</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopIndex",
};
</script>
<style>
    .pp1{
        width: 7%;
    }
</style>