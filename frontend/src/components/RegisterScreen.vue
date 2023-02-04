<template>
  <section class="login" id="login">
    <div class="container">
      <div class="login__heading">
        <router-link to="/login" class="login__heading_arrow">
          <img src="../assets/img/icons/Arrow.svg" alt="">
        </router-link>
        <router-link to="/register" class="login__heading_login">
          Регестрация
        </router-link>
        <router-link to="/login" class="login__heading_register">
          Вход
        </router-link>
      </div>
      <div class="login__about">
        <form @submit.prevent="submit" class="login__about_inp">

          <input v-model="data.name" type="text" placeholder="Имя" required> <br>

          <input v-model="data.email" type="email" placeholder="Почта" required> <br>

          <input v-model="data.password" type="password" placeholder="Пароль" required>

          <button>Зарегестрироваться</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import {reactive} from "vue";
import {useRouter} from "vue-router";

export default {
  name: "RegisterScreen",
  setup() {
    const data = reactive({
      name: '',
      email: '',
      password: ''
    });

    const router = useRouter();

    const submit = async () => {
      await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });

      await router.push('/login');
    }

    return {
      data,
      submit
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  margin-top: 230px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__heading {
    display: flex;
    align-items: center;
    gap: 60px;

    &_login {
      font-family: 'AireExterior';
      font-weight: 400;
      font-size: 48px;
      color: #FFFFFF;
    }
    &_register {
      font-family: 'AireExterior';
      font-weight: 400;
      font-size: 48px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
  &__about {
    &_inp {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 32px;

      input {
        width: 390px;
        height: 75px;
        background: #FFFFFF;
        border-radius: 5px;
        font-family: 'AireExterior';
        font-weight: 400;
        font-size: 24px;
        color: rgba(0, 0, 0, 0.5);
        padding-left: 24px;
      }
      button {
        width: 251px;
        height: 61px;
        background: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'AireExterior';
        font-weight: 400;
        font-size: 24px;
        color: #000000;
        border-top-right-radius: 40px;
        border: none;
        margin-top: 30px;
        cursor: pointer;
      }
    }
  }
}
</style>