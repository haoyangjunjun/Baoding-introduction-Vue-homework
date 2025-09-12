<!-- NestedRoute.vue 嵌套路由-->
<template>
    <div v-if="show">

        <div id="main">

            <form>
                <fieldset>
                    <!--定义域标题-->
                    <legend align="center">欢迎填写您的家乡</legend>
                    <div>
                        <div class="input-container">
                            <div class="input-row">
                                <label for="subject">您家乡的名字：</label>
                                <input v-model="newSubject" id="subject" placeholder="请输入地名" />
                            </div>
                            <div class="input-row">
                                <label for="score">您家乡的美食：</label>
                                <input v-model="newScore" id="score" placeholder="请输入美食" />
                            </div>
                            <div class="input-row">
                                <label for="view">您家乡的风景：</label>
                                <input v-model="newView" id="view" placeholder="请输入风景" />
                            </div>
                            <button type='button' @click="addRow"
                                class="add-button">点击添加</button><!--type='button'更改默认样式按钮，要不然提交就回刷新-->
                        </div>
                    </div>
                    <div class="container">

                        <table class="bordered-table">
                            <thead class="bordered-bg">
                                <tr>
                                    <th>编号</th>
                                    <th>家乡</th>
                                    <th>美食</th>
                                    <th>风景</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, index) in tableData" :key="index">
                                    <td>{{ row.number }}</td>
                                    <td>{{ row.subject }}</td>
                                    <td>{{ row.score }}</td>
                                    <td>{{ row.view }}</td>
                                    <td><button type='button' @click="deleteRow(index)">删除</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </fieldset>
            </form>
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
    name: "LasT",
    data() {
        return {
            show: false,
            tableData: [
                { number: 1, subject: "保定", score: "驴肉火烧", view: "保定博物馆" },
                { number: 2, subject: "承德", score: "杏仁露", view: "避暑山庄" },
                { number: 3, subject: "迁西", score: "板栗", view: "凤凰山" },
            ],
        };
    },
    mounted() {
        setTimeout(() => {
            this.show = true;
        }, 500);
    },
    methods: {
        deleteRow(index) {
            this.tableData.splice(index, 1);/*删除功能*/
        },
        addRow() {
            if (this.newSubject && this.newScore) {
                const newRow = {
                    number: this.tableData.length + 1,/*添加功能 */
                    subject: this.newSubject,
                    score: this.newScore,
                    view: this.newView,
                };
                this.tableData.push(newRow);
                this.newSubject = "";
                this.newScore = "";
                this.newView = "";
            }
        },
    },
};
import "../css/diaocha.css"
</script>
<style>
.red-score {
    color: red;
}

.delete-link {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}

.bordered-table {
    border-collapse: collapse;
}

.bordered-table th,
.bordered-table td {
    border: 1px solid black;
    width: 200px;
    height: 35px;
}

.bordered-bg {
    background-color: rgb(239, 239, 239);
}

.input-container {
    /**input-container div具有flex-direction: column属性，用于垂直排列其子元素。 input-row类用于将标签和输入元素组合在一起，并添加margin-bottom以在行之间创建间距。 */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 40px;
    margin-top: 10px;
}

.input-container input {
    margin-right: 10px;
    margin-left: -13px;
    width: 150px;
    height: 25px;
    padding: 5px;
}

.input-row {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.input-row label {
    margin-right: 10px;
}

.input-row input {
    width: 200px;
    height: 25px;
    padding: 5px;
}

.add-button {
    color: white;
    background-color: rgb(16, 84, 255);
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    height: 36px;
    width: 100px;
    border-radius: 4px;
    outline: none;
    border: 1px solid transparent;
    padding: 0 10px;
    cursor: pointer;
    margin-right: 130px;
    margin-bottom: 50px;
    transition: color 0.8s;
}

.add-button:hover {
    color: navy;
    background-color: aquamarine;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>