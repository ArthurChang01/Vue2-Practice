<template>
    <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                <Link className="navbar-brand" to="/">應用程式名稱</Link>
            </div>
            <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
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