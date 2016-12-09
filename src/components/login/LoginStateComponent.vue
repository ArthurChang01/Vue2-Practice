<template>
    <form id="logoutForm" className="navbar-right">
        <ul className="nav navbar-nav navbar-right">
            <li><a title="Manage">Hello {this.props.name}!</a></li>
            <li><a href="javascript:void(0);" onClick={this.props.LogOut}>登出</a></li>
        </ul>
    </form>
</template>
<script>
    export default {

    }
</script>