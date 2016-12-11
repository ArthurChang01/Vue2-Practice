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
                                <input type="email" name="email" class="form-control" v-model="form.name" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">密碼</label>
                            <div class="col-md-10">
                                <input type="password" name="password" class="form-control" v-model="form.password" />
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
                                <input type="submit" value="登入" :disabled="hasCompleted" class="btn btn-default" />
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
    import { mapActions } from 'vuex'
    import { USER_SIGNIN } from '../../store/user'

    export default {
        data() {
			return {
				btn: false, //true 已经提交过， false没有提交过
				form: {
					name: '',
					password: ''
				}
			}
		},
        computed:{
            hasCompleted:function(){
                return !this.form.name && !this.form.password
            }
        },
		methods: {
            ...mapActions([USER_SIGNIN]),
			submit() {
				this.btn = true
				if(!this.form.id || !this.form.name) return
				this.USER_SIGNIN(this.form)
				this.$router.replace({ path: '/home' })
			}
		}
    }
</script>