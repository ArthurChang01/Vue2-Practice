<template>
    <div>
        <h2> 註冊.</h2>
        <div class="row">
            <div class="col-md-8">
                <section id="loginForm">
                    <form class="form-horizontal" role="form" v-on:submit.prevent="submit" noValidate>
                        <h4>建立新的帳戶。</h4>
                        <hr />
                        <div class="form-group">
                            <label class="col-md-2 control-label">電子郵件</label>
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
                            <label class="col-md-2 control-label">確認密碼</label>
                            <div class="col-md-10">
                                <input type="password" name="confirm_password" class="form-control" v-model="form.confirm_password" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-offset-2 col-md-10">
                                <button :disabled="hasCompleted" class="btn btn-default">登入</button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    import { USER_REGISTER } from '../../store/user'

    export default {
        name:'Register',
        
        data() {
			return {
				btn: false, //true 已经提交过， false没有提交过
				form: {
					name: '',
					password: '',
                    confirm_password: ''
				}
			}
		},
        computed:{
            hasCompleted:function(){
                return !this.form.name || !this.form.password || !this.form.confirm_password
            }
        },
		methods: {
            ...mapActions([USER_REGISTER]),
			submit($evt) {

				this.btn = true
				if(!this.form.name || !this.form.password || !this.form.confirm_password) return
				this.USER_REGISTER(this.form)
				this.$router.replace({name:'Home'})
			}
		}
    }
</script>