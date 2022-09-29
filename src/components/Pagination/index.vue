<template>
    <div class="pager">
        <button class="pre btns" :disabled="pageNo == 1" @click="handleChange(pageNo-1)">&lt;上一页</button>
        <li @click="handleChange(1)" :class="pageNo==1?'active':''" class="page"
            v-show="startPageAndEndPage.start != 1">1</li>
        <li class="page more" v-show="startPageAndEndPage.start > 2">...</li>
        <li @click="handleChange(num)" :class="pageNo==num?'active':''" class="page"
            v-for="num in startPageAndEndPage.end" v-if="num >= startPageAndEndPage.start">{{num}}</li>
        <li class="page more" v-show="startPageAndEndPage.end < lastPage">...</li>
        <li @click="handleChange(lastPage)" :class="pageNo==lastPage?'active':''" class="page"
            v-show="startPageAndEndPage.end != lastPage">{{lastPage}}
        </li>
        <button class="next btns" :disabled="pageNo == lastPage" @click="handleChange(pageNo+1)">下一页&gt;</button>
    </div>
</template>
<script>
export default {
    name: 'Pagination',
    props: ['total', 'pageNo', 'size'],
    data() {
        return { pageSize: 7 }
    },
    computed: {
        lastPage() {
            return Math.ceil(this.total / this.size);
        },
        startPageAndEndPage() {
            let { total, pageNo, pageSize, lastPage } = this;
            let start = 0, end = 0;
            let step = Math.floor(pageSize / 2);
            start = pageNo - step;
            end = pageNo + step;
            if (start <= 0) {
                start = 1;
                end = pageSize + 1;
            }
            if (end >= lastPage) {
                end = lastPage;
                start = lastPage - pageSize + 1;
            }
            return { start, end }
        }
    },
    methods: {
        handleChange(page) {
            this.$emit('changePageNo', page)
        }
    }
}
</script>
<style lang='less' scoped>
.pager {
    width: 670px;
    height: 26px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;

    .btns {
        border: 1px solid #ccc;
        padding: 0px 22px;
        height: 24px;
        cursor: pointer;
        background: linear-gradient(#f8f8f8, #e9e9e9);

        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
    }

    .pre {
        margin-right: 2px;
    }

    .page {
        list-style: none;
        padding: 0px 10px;
        text-align: center;
        line-height: 24px;
        color: #333;
        margin-right: 2px;
        border: 1px solid #ccc;

        &.active {
            color: #fff;
            background: linear-gradient(#ed232d, #c40a0f);
        }
    }

    .more {
        border: none;
        cursor: text;
    }
}
</style>