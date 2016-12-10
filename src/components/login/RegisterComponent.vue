<template>
    <div>
        <h2> 註冊.</h2>
        <div class="row">
            <div class="col-md-8">
                <section id="loginForm">
                    <form method="post" class="form-horizontal" role="form" noValidate ref="frm" onSubmit={this.onSubmit}>
                        <h4>建立新的帳戶。</h4>
                        <hr />
                        <div class="form-group">
                            <label class="col-md-2 control-label">電子郵件</label>
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
                            <label class="col-md-2 control-label">確認密碼</label>
                            <div class="col-md-10">
                                <input type="password" name="confirm_password" class="form-control" ref="confirm_password" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-offset-2 col-md-10">
                                <input type="submit" value="註冊" disabled={this.props.isFetching} class="btn btn-default" />
                            </div>
                        </div>
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