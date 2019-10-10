<template>
    <div>
        <f7-page :page-content="false" class="service-request-page">
            <div class="toolbar tabbar toolbar-top">
                <div class="toolbar-inner">
                    <a href="#outstanding" class="tab-link tab-link-active">My Outstanding</a>
                    <a href="#previous" class="tab-link">Previous</a>
                </div>
            </div>
            <div class="tabs-swipeable-wrap">
                <div class="tabs">
                    <div id="outstanding" class="page-content tab tab-active">
                        <Outstanding></Outstanding>
                    </div>
                    <div id="previous" class="page-content tab">
                        <Previous></Previous>
                    </div>
                </div>
            </div>
        </f7-page>
    </div>
</template>

<script>
    import Outstanding from "./Outstanding";
    import Previous from "./Previous";
    export default {
        data(){
            return{
                items: [1, 2, 3],
                allowInfinite: true
            }
        },
        components:{Outstanding, Previous},
        methods: {
            refreshLoadMore(done) {
                const self = this;
                setTimeout(() => {
                    self.items.push(self.items.length + 1);

                    done();
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

    .service-request-page .toolbar{
        background: #009cc7;
        border-top: 0;
    }

    .service-request-page .toolbar-inner .tab-link{
        color: #95d0ed;
        border-bottom: 3px solid #009cc7;
    }

    .service-request-page .toolbar-inner .tab-link.tab-link-active{
        color: white;
        border-bottom: 3px solid white;
    }
</style>
