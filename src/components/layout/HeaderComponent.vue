<template>
    <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                <router-link class="navbar-brand" to="/">應用程式名稱</router-link>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/">首頁</router-link>
                    </li>
                    <li>
                        <router-link to="/about">關於</router-link>
                    </li>
                    <li>
                        <router-link to="/contact">連絡方式</router-link>
                    </li>
                </ul>
                <LoginStateComponent isAuth={isAuth} name={name} LogOut={this.props.LogOut} />
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>