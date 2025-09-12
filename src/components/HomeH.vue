<template>
    <div v-if="show"><!--由 v-if 所触发的切换，渐变动画-->
        <div class="donghua">
            <!--轮播-->
            <div id="photo">
                <img src="../img/top1.jpg">
                <img src="../img/top2.jpg">
                <img src="../img/top3.jpg">
                <img src="../img/top5.jpg">
                <img src="../img/top6.jpg">
            </div>
        </div>
        <marquee>
            <p class="p2">
                欢迎来保定!!!!!!!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; welcom to
                baoding!!!!!!!!!!!!!!!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                欢迎来保定!!!!!!!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; welcom to
                baoding!!!!!!!!!!!!!!!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                欢迎来保定!!!!!!!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; welcom to
                baoding!!!!!!!!!!!!!!!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
        </marquee>
        <div class="div1">
            <div><!--主体部分-->
                <div class="zhuti">
                    <div id="zhuti-left"><!--主体左侧新闻部分-->
                        <table><!--新闻表格-->
                            <tr>
                                <img src="../img/dibiao.jpg">
                            </tr>
                            <h4>保定新闻</h4>
                            <hr size="3" color="rgb(24, 24, 88)">
                            <p>
                                深入学习贯彻党的二十大精神，坚决落实河北省委提出的“努力在推进京津冀协同发展上走在前列”要求，保定市委十二届四次全会明确提出，努力在对接京津、服务京津中加快发展自己，加快融入以北京为主导的产业链和大市场，全力构建京雄保一体化发展新格局，到2035年全面建成京津冀世界级城市群中的现代化品质生活之城。
                                规划明确：以保定、廊坊为首都功能疏解的集中承载地和京津产业转移的重要承载地，与京津形成京津冀城市群的核心。
                            </p>
                        </table>
                    </div>
                    <div id="zhuti-right"><!--主体右侧部分-->
                        <table class="p1">
                            <tr>
                                <h4>保定介绍</h4><!--文字介绍保定-->
                                <hr size="3" color="rgb(24, 24, 88)">
                                <p>
                                    保定市位于华北平原北部、河北省中部，大部分位于海河平原。冀中地区即指保定，与北京、天津构成黄金三角，并互成掎角之势，自古是“北控三关，南达九省，地连四部，雄冠中州”的“通衢之地”。
                                </p>
                                <p>
                                    保定市位于华北平原北部、河北省中部，大部分位于海河平原。冀中地区即指保定，与北京、天津构成黄金三角，并互成掎角之势，自古是“北控三关，南达九省，地连四部，雄冠中州”的“通衢之地”。
                                </p>
                                <p>
                                    保定以前为直隶省会，是直隶总督驻地，也是河北省最早的省会，从1669年至1968年，长期为河北的政治、经济、文化中心。保定是京津冀地区中心城市之一，保定即“永保大都（即元大都北京）安定”之意。
                                </p>
                                <p>
                                    保定市是中国历史文化名城、对外开放城市、WWF低碳试点城市、中国优秀旅游城市、全国双拥模范城、戏曲之乡、游泳之乡、全国篮球城市、全国乒乓球重点城市，也被人们称为“长寿之城”、“冠军之城”，入选2008中国魅力城市200强。
                                </p>
                                <p>
                                    保定地铁规划2025年建成“两纵两横”的四条地铁线路，2030年保定地铁通向周边县区。《河北省新型城镇化规划》2014年3月26日发布，规划明确：以保定、廊坊为首都功能疏解的集中承载地和京津产业转移的重要承载地，与京津形成京津冀城市群的核心。
                                </p>
                                <p>
                                    截至2022年末，保定市常住人口914.4万人，其中，城镇常住人口540.2万人，比上年末增加2.8万人；城镇化率59.08%，比上年末提高0.63个百分点。
                                </p>
                                <p>
                                    保定地铁规划2025年建成“两纵两横”的四条地铁线路，2030年保定地铁通向周边县区。《河北省新型城镇化规划》2014年3月26日发布，规划明确：以保定、廊坊为首都功能疏解的集中承载地和京津产业转移的重要承载地，与京津形成京津冀城市群的核心。
                                </p>
                            </tr>
                            <tr>
                                <br>
                                <h4>主要风景</h4><!--滚动主要风景-->
                                <hr size="3" color=black>
                                <div class="scroll-container">
                                    <ul class="scroll-list">
                                        <li><img src="../img/mj1.jpg"></li>
                                        <li><img src="../img/mj2.jpg"></li>
                                        <li><img src="../img/mj3.jpg"></li>
                                        <li><img src="../img/mj4.jpg"></li>
                                        <li><img src="../img/mj5.jpg"></li>
                                        <li><img src="../img/mj6.jpg"></li>
                                        <li><img src="../img/mj7.jpg"></li>
                                        <li><img src="../img/mj1.jpg"></li>
                                        <li><img src="../img/mj2.jpg"></li>
                                        <li><img src="../img/mj3.jpg"></li>
                                        <li><img src="../img/mj4.jpg"></li>
                                        <li><img src="../img/mj5.jpg"></li>
                                        <li><img src="../img/mj6.jpg"></li>
                                        <li><img src="../img/mj7.jpg"></li>
                                    </ul>
                                </div>
                                <hr size="3" color=black>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="mar1">
            <marquee direction="down" width="100%" height="50" behavior="alternate" style="border:solid">
                <marquee behavior="alternate">Welcome to BaoDing||保定欢迎您!</marquee>
            </marquee>
        </div>
        <div id="" class="footer">
            <!--页尾-->
            <p>
                &nbsp;
            </p>
            <p><!--尾页文字-->
                千年京畿第一府，自然山水保定城。
            </p>
        </div>
    </div>
</template>

<script>
import "../css/out.css"
export default {
    name: "HomeH",
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
};
</script>
<style>
.p1 {
    text-align: left;
}

.p2 {
    color: #ffffff;
}

.div1{
    margin: 1rem auto;
    position: relative;
}

.mar1 {
    position: relative;

}</style>
