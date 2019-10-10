<template>
    <!-- Tabs -->
    <f7-page ptr infinite @ptr:refresh="refreshLoadMore" @infinite="infiniteLoadMore">
        <div>
            <div class="card card-outline to-do-card" v-for="(item, index) in items" :key="index">
                <div class="card-header">
                    <div class="sr-number">
                        {{index + 1}} ESR-00275686
                        <div class="sr-status">
                            <div>1</div>
                        </div>
                    </div>
                    <div class="sr-department">EASC</div>
                </div>
                <div class="card-content card-content-padding">
                    <f7-row>
                        <div>
                            20246482911 Shipment route Information (POL Call Facillity=SIN01, Call Num=1) is missing...
                        </div>
                    </f7-row>
                    <f7-row class="last-modified">
                        <f7-col>
                            <div class="company-div">
                                <p class="last-modified-label">Last Modified by</p>
                                <p class="last-modified-name">NOLI BUENAVENTURA</p>
                                <p class="last-modified-department">(EASC=ISD-OOCLLL/MNL)</p>
                            </div>
                        </f7-col>
                        <f7-col>
                            <div class="total-amount-div">
                                <p class="last-modified-label">Last Modified</p>
                                <p class="last-modified-time">9/21/2019 11:23 AM</p>
                                <p class="last-modified-time-area">(GMT+08:00)</p>
                            </div>
                        </f7-col>
                    </f7-row>
                </div>
                <div class="card-footer">
                    <div class="card-footer-status-div">
                        <span>Investigation in Progress</span>
                    </div>
                </div>
            </div>
        </div>
    </f7-page>
</template>

<script>
    export default {
        data() {
            return {
                items: [1, 2, 3],
                allowInfinite: true
            }
        },
        methods: {
            refreshLoadMore(done) {
                const self = this;
                setTimeout(() => {
                    self.items.push(self.items.length + 1);
                    done.detail();
                }, 1000);
            },
            infiniteLoadMore() {
                const self = this;
                if (!self.allowInfinite) return;
                self.allowInfinite = false;

                setTimeout(() => {
                    if (self.items.length >= 5) {
                        self.$$('.infinite-scroll-preloader').remove();
                        return;
                    }

                    const itemsLength = self.items.length;

                    for (let i = 1; i < 4; i++) {
                        self.items.push(itemsLength + i);
                    }

                    self.allowInfinite = true;
                }, 1000);
            }
        }
    }
</script>

<style lang="scss">
    $labelColor: #d0d4d5;
    $card_content_item_bottom: 13px;

    .to-do-card {
        border-radius: 10px !important;
        border-left: 7px solid #f5a304;
        padding-top: 0px !important;
    }

    .last-modified{
        margin-top: 15px;
    }

    .team-name-span {
        font-weight: bold;
        font-size: 20px;
    }

    .to-do-card p {
        margin: 0;
    }

    .last-modified-label, .total-amount-label {
        color: $labelColor;
        /*font-weight: bold;*/
    }


    .last-modified-department, .last-modified-time-area{
        font-size: 13px;
    }

    .total-amount-number {
        color: aqua;
    }

    .eapv-company-and-amount {
        margin-bottom: $card_content_item_bottom;
    }

    .message-label {
        color: $labelColor;
        font-weight: bold;
    }

    .message-describe {
        font-size: 20px;
    }

    .to-do-card .card-header {
        background: #cff1fb;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding: 8px 15px;
        min-height: 39px;
    }

    .to-do-card .card-content{
        background-color: #f5fcfe;
    }

    .to-do-card .card-footer{
        background: #e8fafb;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 8px 15px;
        min-height: 39px;
    }

    .sr-number {
        font-weight: bold;
        float: left;
        font-size: 14px;
    }

    .sr-status {
        width: 20px;
        font-size: 12px;
        color: white;
        top: 1px;
        position: relative;
        margin-left: 8px;
        background: #f5a304;
        border-radius: 5px;
        text-align: center;
        float: right;
    }

    .sr-department {
        font-weight: bold;
        float: right;
        font-size: 14px;
    }

    .card-footer-status-div{
        width: 100%;
        text-align: center;
    }
</style>
