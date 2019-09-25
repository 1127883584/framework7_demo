<template>
    <!-- Tabs -->
    <f7-page :page-content="false">
        <f7-navbar title="e-APV DEV" back-link="Back"></f7-navbar>
        <f7-toolbar tabbar bottom>
            <f7-link tab-link="home" tab-link-active>To Do</f7-link>
            <f7-link tab-link="my-approval">My Approval</f7-link>
        </f7-toolbar>
        <f7-tabs swipeable>
            <f7-tab id="home" class="page-content" tab-active>
                <f7-block>
                    <p>Tab 1 content</p>
                    ...
                </f7-block>
            </f7-tab>
            <f7-tab id="my-approval" class="page-content">
                <f7-block>
                    <p>Tab 2 content</p>
                    ...
                </f7-block>
            </f7-tab>
        </f7-tabs>
    </f7-page>
</template>