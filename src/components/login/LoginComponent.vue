<template>
    <div>
        <h2> 登入.</h2>
        <div class="row">
            <div class="col-md-4">
                <section id="loginForm">
                    <form class="form-horizontal" role="form" v-on:submit.prevent="submit" noValidate>
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
                                <div class="checkbox" style="padding-left:20px">
                                    <input type="checkbox" />
                                    記住我
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-offset-2 col-md-10">
                                <button :disabled="hasCompleted" class="btn btn-default">登入</button>
                            </div>
                        </div>
                        <p>
                            <router-link to="/register">註冊為新使用者</router-link>
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
        name:'Login',

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
                return !this.form.name || !this.form.password
            }
        },
		methods: {
            ...mapActions([USER_SIGNIN]),
			submit($evt) {
				this.btn = true
				if(!this.form.name || !this.form.password) return

                this.USER_SIGNIN(this.form)        
				this.$router.replace({name:'Home'})
			}
		}
    }
</script>