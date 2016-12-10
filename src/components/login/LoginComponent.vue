<template>
    <div class="container body-content">
        <h2> 登入.</h2>
        <div class="row">
            <div class="col-md-8">
                <section id="loginForm">
                    <form method="post" class="form-horizontal" role="form" onSubmit={this.onSubmit} noValidate ref="frm">
                        <h4>使用本機帳戶登入。</h4>
                        <hr />
                        <div class="form-group">
                            <label for="email" class="col-md-2 control-label">電子郵件</label>
                            <div class="col-md-10">
                                <input type="email" name="email" class="form-control" ref="email" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">密碼</label>
                            <div class="col-md-10">
                                <input type="password" name="password" class="form-control" ref="password" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-offset-2 col-md-10">
                                <div class="checkbox">
                                    <input type="checkbox" />
                                    <label>記住我</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-offset-2 col-md-10">
                                <input type="submit" value="登入" disabled={this.props.isFetching} class="btn btn-default" />
                            </div>
                        </div>
                        <p>
                            <Link to="/register">註冊為新使用者</Link>
                        </p>
                        * 請在啟用密碼重設功能的帳戶確認之後啟用此項目
                    </form>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>