<template>
    <!-- Tabs -->
    <f7-page :page-content="false" class="main-page">
        <div class="navbar">
            <div class="navbar-inner">
                <div class="left" v-if="false">
                    <a href="#" class="link">
                        <i class="icon icon-back"></i>
                        <span>Back</span>
                    </a>
                </div>
                <div class="title">{{tabName}}</div>
                <div class="right">
                    <a href="#" class="link">
                        <i class="icon another-icon"></i>
                        <span class="create-button">Create</span>
                    </a>
                </div>
            </div>
        </div>
        <f7-toolbar tabbar bottom labels class="main-toolbar">
            <f7-link tab-link="#serviceRequest" route-tab-id="serviceRequest" icon-ios="f7:list_bullet" class="service-request-link" text="Service Request"></f7-link>
            <f7-link tab-link="#notification" route-tab-id="notification" icon-badge=" "  badge-color="red" icon-ios="f7:email" class="notification-link" text="Notification">
            </f7-link>
            <f7-link tab-link="#announcement" route-tab-id="announcement" icon-ios="f7:radio" class="announcement-link" text="Announcement"></f7-link>
            <f7-link tab-link="#settings" route-tab-id="settings" icon-ios="f7:settings" class="settings-link" text="Settings"></f7-link>
        </f7-toolbar>
        <f7-tabs swipeable routable>
            <f7-tab id="serviceRequest" class="page-content"></f7-tab>
            <f7-tab id="notification" class="page-content"></f7-tab>
            <f7-tab id="announcement" class="page-content"></f7-tab>
            <f7-tab id="settings" class="page-content"></f7-tab>
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
                },
                tabName: 'Service Request',
                serviceRequestIconClass: 'icon-sr-list-white'
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

    .navbar .title{
        color: white;
    }

    .create-button{
        color: white;
    }

    .icon-sr-list-white{
        width: 30px;
        height: 30px;
        background-image: url("data:image/svg+xml;charset=utf-8,<?xml version='1.0' standalone='no'?><!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg class='icon' width='64px' height='64.00px' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg'><path fill='#777777' d='M193.632 499.168l-55.968-49.52-53.008 59.904 117.232 103.728 131.824-155.84-61.088-51.68-78.992 93.408z m0 240l-55.968-49.52-53.008 59.904 117.232 103.728 131.824-155.84-61.088-51.68-78.992 93.408z m0-480l-55.968-49.52-53.008 59.92 117.232 103.728 131.824-155.856-61.088-51.664-78.992 93.392zM384 256v80h544v-80H384z m0 560h544v-80H384v80z m0-240h544v-80H384v80z'  /></svg>");
    }

    .main-toolbar .f7-icons .badge{
        --f7-badge-size: 9px;
        margin-left: -7px;
        top: 1px;
    }

    .navbar:after{
        background-color: unset !important;
    }

    .main-page .page-content{
        background-color: white;
    }
</style>
