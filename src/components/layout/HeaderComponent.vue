<template>
    <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                <Link class="navbar-brand" to="/">應用程式名稱</Link>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <Link to="/">首頁</Link>
                    </li>
                    <li>
                        <Link to="/about">關於</Link>
                    </li>
                    <li>
                        <Link to="/contact">連絡方式</Link>
                    </li>
                </ul>
                <v-loginStateComponent isAuth={this.props.isAuth} name={this.props.name} LogOut={this.props.LogOut} />
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>