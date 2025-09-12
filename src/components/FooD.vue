<!-- NestedRoute.vue 嵌套路由-->
<template>
    <div v-if="show">
        <div class="zhuti1">
            <!--主体-->
            <div id="zhutileft">
                <div id="photo1">
                    <img src="../img/meibo1.jpg">
                    <img src="../img/meibo6.webp">
                    <img src="../img/meibo3.jpg">
                    <img src="../img/meibo4.jpg">
                    <img src="../img/meibo2.webp">
                </div>
            </div>
            <div id="zhutimain">
                <img src="../img/baoding1.jpg">
                <h4>
                    美食小吃
                </h4>
                <a href="https://www.tutechan114.com/city/130600.html">
                    <p>
                        保定市位于华北平原中北部，河北是中部偏西，历来为京畿重地和“首都南大门”，有许多风景名胜以及各种美食特色。
                    </p>
                </a>
            </div>
            <div id="zhutiright">
                <button class="btn btn-outline-primary btn-lg" type="button" @click="whatToEat">点击获得随机保定特色美食推荐</button>
                <ul>
                    <li>
                        <div id="d1">美食特色榜</div>
                    </li>
                    <div id="d2">
                        <hr size="3" color="gray">
                        <li><a href="#">驴肉火烧<span>1</span></a></li>
                        <li><a href="#">卤煮火烧<span>2</span></a></li>
                        <li><a href="#">鸡蛋灌饼<span>3</span></a></li>
                        <li><a href="#">牛肉板面<span>4</span></a></li>
                        <li><a href="#">文食肆热干面<span>5</span></a></li>
                        <li><a href="#">白运章包子<span>6</span></a></li>
                        <li><a href="#">冰糖糖葫芦<span>7</span></a></li>
                        <li><a href="#">烤鸭<span>8</span></a></li>
                        <li><a href="#">糖糕<span>9</span></a></li>
                        <li><a href="#">炒饸饹<span>10</span></a></li>
                    </div>
                </ul>
            </div>
            <div id="bottom">
                <div id="meishi1">
                    <img src="../img/meishi1.jpg">
                    <h4>驴肉火烧</h4>
                    <a href="https://www.tutechan114.com/techan/818.html">
                        <p>小吃一种，发源于河北省古城保定，广泛流传于冀中平原，其中以保定北部徐水县的漕河地区历史最为悠久。</p>
                    </a>
                </div>
                <div id="meishi2">
                    <img src="../img/meishi3.jpg">
                    <h4>炸千子</h4>
                    <a href="https://www.tutechan114.com/techan/816.html">
                        <p>炸千子：精选红小豆，煮熟去汤，用勺的底面搓成粉，漂去皮，过油，即成豆沙。用精白面调成糊，在热锅中抡撒，用铲子刮平，待熟，即成煎饼。用煎饼裹豆沙、搓成直径4公分上下的卷，外边挂糊，放入油锅里炸，取出，切成2寸左右长的段，即可食用。
                        </p>
                    </a>
                </div>
                <div id="meishi3">
                    <img src="../img/meishi2.jpg">
                    <h4>白运章包子</h4>
                    <a href="https://www.tutechan114.com/techan/810.html">
                        <p>回族面食厨师白运章创制。鲜牛内绞馅，拌以多种调料、佐料、切碎挤干的菜料，面粉作皮，包馅，蒸熟。皮薄、边窄、馅大、油香、形美，隔皮见馅，由馅成丸，入口喷香。已有70余年制作历史。
                        </p>
                    </a>
                </div>
                <div id="meishi4">
                    <img src="../img/meishi4.jpg">
                    <h4>中山松醪酒</h4>
                    <a href="https://www.tutechan114.com/techan/740.html">
                        <p>中山松醪酒是河北省保定市定州市的特产。中山松醪酒以黄米为主料，外加三七、党参、杏仁等名贵中药，利用黑龙泉天然矿泉水酿制而成，被誉为“液体蛋糕”，具有一定的保健功效。
                        </p>
                    </a>
                </div>
            </div>
        </div>
        <div id="" class="footer">
            <!--页尾-->
            <p>
                秀美保定 优美河山
            </p>
            <p>
                welcome to baoding||保定欢迎您！
            </p>
        </div>
    </div>
</template>
    
<script>
export default {
    name: "FooD",
    data() {
        return {
            show: false,
        };
    },
    mounted() {
        setTimeout(() => {
            this.show = true;
        }, 500);
    },
    methods: {
        whatToEat() {
            var d;
            var c;
            c = Math.floor(Math.random() * 10);    // 可均衡获取 0 到 9 的随机整数。
            switch (c) {
                case 0:
                    d = "驴肉火烧";
                    break;
                case 1:
                    d = "卤煮火烧";
                    break;
                case 2:
                    d = "鸡蛋灌饼";
                    break;
                case 3:
                    d = "牛肉板面";
                    break;
                case 4:
                    d = "文食肆热干面";
                    break;
                case 5:
                    d = "白运章包子";
                    break;
                case 6:
                    d = "冰糖糖葫芦";
                    break;
                case 7:
                    d = "烤鸭";
                    break;
                case 8:
                    d = "糖糕";
                    break;
                case 9:
                    d = "炒饸饹";
                    break;
            }
            alert(d);
        },
    }
};
import "../css/meishi.css"
</script>