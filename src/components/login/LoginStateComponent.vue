<template>
    <div>
        <ul v-if="!user.name" class="nav navbar-nav navbar-right">
            <li>
                <router-link to="/register">註冊</router-link>
            </li>
            <li>
                <router-link to="/login">登入</router-link>
            </li>
        </ul>
        <form v-if="user.name" id="logoutForm" class="navbar-right">
            <ul class="nav navbar-nav navbar-right">
                <li><a title="Manage">Hello {{user.name}}!</a></li>
                <li><a href="javascript:void(0);" @click="logout">登出</a></li>
            </ul>
        </form>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    import { USER_SIGNOUT } from '../../store/user'

    export default {

        computed: mapState({ user: state => state.user }),
        methods: {
            ...mapActions([USER_SIGNOUT]),
            logout() {
                this.USER_SIGNOUT()
				this.$router.replace({ path: '/login' })
            }
        }
    }
</script>