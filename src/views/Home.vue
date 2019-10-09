<template>
    <!-- Tabs -->
    <f7-page>
        <div>
            <f7-card class="to-do-card" v-for="index in 10">
                <div slot="content">
                    <f7-row>
                        <f7-col><span class="team-name-span">B&A {{index}}</span></f7-col>
                        <f7-col><f7-button  fill round small style="float: right;">FinCon Reviewing</f7-button></f7-col>
                    </f7-row>
                    <f7-row class="eapv-number-div"><span>EAPV-060718-113804-064</span></f7-row>
                    <f7-row class="eapv-company-and-amount">
                        <f7-col>
                            <div class="company-div">
                                <p class="company-label">Company</p>
                                <p class="company-name">2201-OOCLL</p>
                            </div>
                        </f7-col>
                        <f7-col>
                            <div class="total-amount-div">
                                <p class="company-label">Total Amount</p>
                                <p class="company-name">CNY 18.00</p>
                            </div>
                        </f7-col>
                    </f7-row>
                    <f7-row>
                        <div class="total-amount-div">
                            <p class="message-label">Expense Nature or Payment Message</p>
                            <p class="message-describe">sahi test</p>
                        </div>
                    </f7-row>
                </div>
            </f7-card>
        </div>
    </f7-page>
</template>

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
    .company-label{
        color: $labelColor;
        font-weight: bold;
    }
    .company-name{
        font-size: 20px;
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
