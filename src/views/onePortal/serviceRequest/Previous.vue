<template>
    <!-- Tabs -->
    <f7-page ptr infinite @ptr:done="loadDone" @ptr:refresh="refreshLoadMore" @infinite="infiniteLoadMore">
        asdasd
    </f7-page>
</template>

<script>
    export default {
        data(){
            return{
                items: [1, 2, 3],
                allowInfinite: true
            }
        },
        methods: {
            refreshLoadMore(done) {
                const self = this;
                setTimeout(() => {
                    self.items.push(self.items.length + 1);

                    // done();
                }, 1000);
            },
            infiniteLoadMore(done) {
                const self = this;
                if (!self.allowInfinite) return;
                self.allowInfinite = false;

                setTimeout(() => {
                    if (self.items.length >= 10) {
                        self.showPreloader = false;
                        done();
                        return;
                    }

                    const itemsLength = self.items.length;

                    for (let i = 1; i < 4; i ++) {
                        self.items.push(itemsLength + i);
                    }

                    self.allowInfinite = true;
                }, 1000);
            },
            loadDone(){
                console.log('adasd')
            }
        }
    }
</script>

<style lang="scss">
    $labelColor: #757575;
    $card_content_item_bottom: 13px;

    .to-do-card{
        border-left: 7px solid #f5a304;
        padding-top: 5px;
    };
    .team-name-span{
        font-weight: bold;
        font-size: 20px;
    }
    .eapv-number-div{
        color: $labelColor;
        font-weight: bold;
        font-size: 15px;
        font-family: 宋体;
        margin-bottom: $card_content_item_bottom;
    }
    .to-do-card p{
        margin: 0;
    }
    .company-label, .total-amount-label{
        color: $labelColor;
        font-weight: bold;
    }
    .company-name, .total-amount-number{
        font-size: 20px;
    }
    .total-amount-number{
        color: aqua;
    }
    .eapv-company-and-amount{
        margin-bottom: $card_content_item_bottom;
    }
    .message-label{
        color: $labelColor;
        font-weight: bold;
    }
    .message-describe{
        font-size: 20px;
    }
</style>
