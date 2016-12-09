<template>
    <div>
        <h2> 註冊.</h2>
        <div className="row">
            <div className="col-md-8">
                <section id="loginForm">
                    <form method="post" className="form-horizontal" role="form" noValidate ref="frm" onSubmit={this.onSubmit}>
                        <h4>建立新的帳戶。</h4>
                        <hr />
                        <div className="form-group">
                            <label className="col-md-2 control-label">電子郵件</label>
                            <div className="col-md-10">
                                <input type="email" name="email" className="form-control" ref="email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-2 control-label">密碼</label>
                            <div className="col-md-10">
                                <input type="password" name="password" className="form-control" ref="password" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-2 control-label">確認密碼</label>
                            <div className="col-md-10">
                                <input type="password" name="confirm_password" className="form-control" ref="confirm_password" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-offset-2 col-md-10">
                                <input type="submit" value="註冊" disabled={this.props.isFetching} className="btn btn-default" />
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