<template>
    <!-- Tabs -->
    <f7-page :page-content="false">
        <f7-navbar>
            <div slot="title">
                <span style="color: white">e-APV</span>&nbsp<span style="color: red">DEV</span>
            </div>
            <f7-icon icon="icon-back" slot="left" style="color:white"></f7-icon>
            <f7-icon ios="f7:search" slot="right" style="color:white"></f7-icon>
        </f7-navbar>
        <f7-toolbar tabbar bottom labels >
            <f7-link tab-link="#home" route-tab-id="home" icon-ios="f7:bars_chart_square" class="home-link" text="To Do" href="./"></f7-link>
            <f7-link tab-link="#my-approval" route-tab-id="about" icon-ios="f7:square_favorites" class="my-approval-link" text="My Approval" href="./my-approval/"></f7-link>
        </f7-toolbar>
        <f7-tabs swipeable routable>
            <f7-tab id="home" class="page-content">
            </f7-tab>
            <f7-tab id="my-approval" class="page-content" tab-active>
            </f7-tab>
        </f7-tabs>
    </f7-page>
</template>

<script>
    export default {
        name: 'Tabs',
        data() {
            return {
                obj: {
                    'name': 'asdasdsa',
                    'password': 'adsasffa'
                }
            }
        },
        mounted() {

        }
    }
</script>

<style>
    .home-link .tabbar-label, .my-approval-link .tabbar-label{
        font-size: 13px !important;
        font-weight: bold !important;
    }
</style>
